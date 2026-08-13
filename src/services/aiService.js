// AI 호출은 서버(Cloudflare Pages Function)를 경유한다.
// API 키는 브라우저 번들에 포함되지 않는다.
const API_ENDPOINT = '/api/gemini';

// --- 캐시 시스템 ---
const CACHE_KEY_PREFIX = 'legal_cache_';
const CACHE_MAX = 20;

const getCacheKey = (query, language) => `${CACHE_KEY_PREFIX}${language}_${query.trim().toLowerCase()}`;

const getFromCache = (query, language) => {
  try {
    const key = getCacheKey(query, language);
    const cached = sessionStorage.getItem(key);
    if (cached) return JSON.parse(cached);
  } catch {}
  return null;
};

const saveToCache = (query, language, data) => {
  try {
    const key = getCacheKey(query, language);
    const keys = Object.keys(sessionStorage).filter(k => k.startsWith(CACHE_KEY_PREFIX));
    if (keys.length >= CACHE_MAX) {
      sessionStorage.removeItem(keys[0]);
    }
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch {}
};

// --- 언어별 응답 지시사항 ---
const languageInstructions = {
  ko: "모든 응답을 한국어로 작성하세요. 법률 용어를 정확하게 번역하고, 한국 독자들이 이해하기 쉽게 설명하세요.",
  en: "Write all responses in English. Use clear and professional legal terminology.",
  ja: "すべての回答を日本語で記述してください。法律用語を正確に翻訳し、日本の読者が理解しやすいように説明してください。",
  es: "Escribe todas las respuestas en español. Usa terminología legal clara y profesional, adecuada para lectores hispanohablantes."
};

const MODELS = ["gemini-3.5-flash-lite"];
const MAX_RETRIES_PER_MODEL = 2;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const isTransient = (err) => {
  const msg = (err && (err.message || String(err))) || '';
  return /\b(429|500|502|503|504|UNAVAILABLE|RESOURCE_EXHAUSTED)\b/.test(msg);
};

const generateJSON = async (prompt) => {
  let lastError;
  for (const model of MODELS) {
    for (let attempt = 0; attempt < MAX_RETRIES_PER_MODEL; attempt++) {
      try {
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, model }),
        });

        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }

        const { text } = await response.json();
        return text;
      } catch (err) {
        lastError = err;
        if (!isTransient(err)) throw err;
        const backoff = 400 * Math.pow(2, attempt);
        console.warn(`[${model}] transient error, retrying in ${backoff}ms...`);
        await sleep(backoff);
      }
    }
  }
  throw lastError;
};

// --- Phase 1: 핵심 법률 정보 (빠른 응답) ---
export const searchLegalInformation = async (query, language = 'en') => {
  const cached = getFromCache(query, language);
  if (cached) {
    return { success: true, data: cached, fromCache: true };
  }

  try {
    const prompt = `You are a legal information assistant.
A user is searching for: "${query}"

${languageInstructions[language] || languageInstructions.en}

Respond in this JSON format:
{
  "topic": "main topic (e.g., drone, vpn, cannabis)",
  "country": "country name",
  "status": "legal|conditional|illegal|unclear",
  "summary": "one sentence summary",
  "details": "detailed explanation (2-3 paragraphs)",
  "conditions": ["condition 1", "condition 2"],
  "penalties": "penalties for violations",
  "sources": ["official government URL 1", "URL 2"],
  "lastUpdated": "YYYY-MM-DD"
}

Rules:
1. status: "legal" (no restrictions), "conditional" (has conditions), "illegal" (prohibited), "unclear" (ambiguous)
2. Provide REAL official government source URLs
3. Focus on current laws as of 2026
4. Be objective and factual
5. conditions: empty array if status is "legal" or "illegal"`;

    const text = await generateJSON(prompt);

    let legalInfo;
    try {
      legalInfo = JSON.parse(text);
    } catch (e) {
      console.error("JSON Parse Error:", text);
      throw new Error("Failed to parse AI response as JSON");
    }

    legalInfo.id = Date.now();
    legalInfo.category = getCategoryFromTopic(legalInfo.topic);
    legalInfo.topicName = formatTopicName(legalInfo.topic);
    legalInfo.countryName = legalInfo.country;
    legalInfo.updated = legalInfo.lastUpdated || new Date().toISOString().split('T')[0];

    saveToCache(query, language, legalInfo);

    return { success: true, data: legalInfo };

  } catch (error) {
    console.error('AI Service Error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

// --- Phase 2: 국가별 비교 + 관련 검색어 (백그라운드) ---
export const searchComparisons = async (topic, country, query, language = 'en') => {
  const cacheKey = `comparisons_${language}_${query.trim().toLowerCase()}`;
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return { success: true, data: JSON.parse(cached), fromCache: true };
  } catch {}

  try {
    const prompt = `You are a legal information assistant.
Topic: "${topic}" in "${country}"
Original query: "${query}"

${languageInstructions[language] || languageInstructions.en}

Respond in this JSON format:
{
  "comparisons": [
    {"country": "Country Name", "status": "legal|conditional|illegal|unclear", "summary": "one sentence"},
    {"country": "Country Name", "status": "legal|conditional|illegal|unclear", "summary": "one sentence"},
    {"country": "Country Name", "status": "legal|conditional|illegal|unclear", "summary": "one sentence"},
    {"country": "Country Name", "status": "legal|conditional|illegal|unclear", "summary": "one sentence"},
    {"country": "Country Name", "status": "legal|conditional|illegal|unclear", "summary": "one sentence"}
  ],
  "relatedSearches": ["related query 1", "related query 2", "related query 3", "related query 4"]
}

Rules:
1. 5 countries excluding "${country}", with diverse legal statuses
2. relatedSearches: same topic in other countries, or related topics in same country
3. Be concise - one sentence per country summary`;

    const text = await generateJSON(prompt);

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Comparisons JSON Parse Error:", text);
      throw new Error("Failed to parse comparisons response");
    }

    try { sessionStorage.setItem(cacheKey, JSON.stringify(data)); } catch {}

    return { success: true, data };

  } catch (error) {
    console.error('Comparisons Error:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

// --- Helper Functions ---

const getErrorMessage = (error) => {
  const msg = error.message || '';
  if (msg.includes('403')) {
    return 'AI service is currently unavailable. The API key or its project may be suspended.';
  } else if (msg.includes('404')) {
    return 'AI Model not found (404). Please check the model name in aiService.js.';
  } else if (msg.includes('400')) {
    return 'Invalid Request (400). Please check the prompt or the requested model.';
  } else if (msg.includes('413')) {
    return 'Your query is too long. Please shorten it and try again.';
  } else if (msg.includes('429')) {
    return 'Too many requests. Please wait a moment.';
  } else if (/\b(500|502|503|504)\b/.test(msg)) {
    return 'AI service is temporarily unavailable. Please try again shortly.';
  }
  return 'Failed to fetch information.';
};

const getCategoryFromTopic = (topic) => {
  const topicLower = topic ? topic.toLowerCase() : "";

  if (topicLower.includes('vpn') || topicLower.includes('torrent') || topicLower.includes('digital')) {
    return 'digital';
  }
  if (topicLower.includes('drone') || topicLower.includes('photo') || topicLower.includes('camera')) {
    return 'drone';
  }
  if (topicLower.includes('gambl') || topicLower.includes('casino') || topicLower.includes('bet')) {
    return 'gambling';
  }
  if (topicLower.includes('cannabis') || topicLower.includes('marijuana') || topicLower.includes('cbd') || topicLower.includes('vap')) {
    return 'substances';
  }
  if (topicLower.includes('knife') || topicLower.includes('weapon') || topicLower.includes('pepper')) {
    return 'possessions';
  }
  if (topicLower.includes('privacy') || topicLower.includes('recording') || topicLower.includes('cctv')) {
    return 'privacy';
  }
  if (topicLower.includes('traffic') || topicLower.includes('driv') || topicLower.includes('dui')) {
    return 'traffic';
  }
  if (topicLower.includes('business') || topicLower.includes('crypto') || topicLower.includes('freelanc')) {
    return 'business';
  }

  return 'other';
};

const formatTopicName = (topic) => {
  if (!topic) return "Unknown Topic";
  return topic
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
