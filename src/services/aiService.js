import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// 1. API 키 안전장치: 키가 로드되지 않았을 때 콘솔에 명확히 알려줍니다.
if (!API_KEY) {
  console.error("❌ API Key is missing! Check your .env file.");
} else {
  // 배포 시 보안을 위해 아래 로그는 삭제하는 것이 좋습니다.
  console.log("Key loaded, length:", API_KEY.length); 
}

const genAI = new GoogleGenerativeAI(API_KEY);

export const searchLegalInformation = async (query) => {
  try {
    // 2. 모델 설정
    // - model: "gemini-1.5-flash" (현재 가장 빠르고 안정적인 모델)
    // - responseMimeType: "application/json" (AI가 순수 JSON만 반환하도록 강제)
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // 3. 프롬프트 (기존의 상세한 지침 유지)
    const prompt = `
    You are a legal information assistant for the "Is It Legal?" platform.
    A user is searching for: "${query}"

    Please analyze this query and provide legal information in the following JSON format:

    {
      "topic": "the main topic (e.g., drone, vpn, cannabis)",
      "country": "the country name",
      "status": "legal|conditional|illegal|unclear",
      "summary": "one sentence summary",
      "details": "detailed explanation of the legal status (2-3 paragraphs)",
      "conditions": ["condition 1", "condition 2", ...] (array of strings, or empty array if status is 'legal' or 'illegal'),
      "penalties": "description of penalties for violations",
      "sources": ["url1", "url2", ...] (array of official government or legal source URLs),
      "lastUpdated": "YYYY-MM-DD"
    }

    Important guidelines:
    1. Status should be one of: "legal", "conditional", "illegal", or "unclear"
    2. For "legal" status: the activity is completely legal with no special requirements
    3. For "conditional" status: the activity is legal but has specific requirements, restrictions, or conditions
    4. For "illegal" status: the activity is prohibited by law
    5. For "unclear" status: the legal status is ambiguous or varies by region within the country
    6. Provide REAL and ACCURATE official government sources (URLs must be valid)
    7. If you cannot find reliable information, set status to "unclear" and explain why in the details
    8. Focus on current laws as of 2026
    9. Be objective and factual
    10. Include specific regulations, registration requirements, permits, or licenses if applicable

    Return ONLY the JSON object, no additional text.
    `;

    console.log("🚀 Requesting Gemini API..."); 

    // 4. API 호출
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("✅ API Response received");

    // 5. JSON 파싱
    // responseMimeType을 설정했으므로 복잡한 정규식 없이 바로 파싱 가능합니다.
    let legalInfo;
    try {
      legalInfo = JSON.parse(text);
    } catch (e) {
      console.error("JSON Parse Error:", text); // 파싱 실패 시 원본 텍스트 확인
      throw new Error("Failed to parse AI response as JSON");
    }

    // 6. 메타데이터 추가 (기존 로직)
    legalInfo.id = Date.now();
    legalInfo.category = getCategoryFromTopic(legalInfo.topic);
    legalInfo.topicName = formatTopicName(legalInfo.topic);
    legalInfo.countryName = legalInfo.country;
    legalInfo.updated = legalInfo.lastUpdated || new Date().toISOString().split('T')[0];

    return {
      success: true,
      data: legalInfo
    };

  } catch (error) {
    console.error('🔥 AI Service Error Details:', error);
    
    // 사용자 친화적 에러 메시지 변환
    let errorMessage = 'Failed to fetch information.';
    
    if (error.message.includes('404')) {
      errorMessage = 'AI Model not found (404). Please check the model name in aiService.js.';
    } else if (error.message.includes('400')) {
      errorMessage = 'Invalid Request (400). Please check your API Key or Prompt.';
    } else if (error.message.includes('429')) {
      errorMessage = 'Too many requests. Please wait a moment.';
    }

    return {
      success: false,
      error: errorMessage
    };
  }
};

// --- Helper Functions (기존 코드 유지) ---

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