// Cloudflare Pages Function - Gemini API 프록시
//
// API 키는 이 함수 안에서만 사용되며 브라우저로 전달되지 않는다.
// Cloudflare Pages > Settings > Environment variables 에 GEMINI_API_KEY 를
// Secret 타입으로 등록해야 한다. (Production / Preview 각각 설정)

const UPSTREAM_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

const ALLOWED_MODELS = new Set(['gemini-3.5-flash']);
const MAX_PROMPT_LENGTH = 8000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });

// 브라우저는 POST 요청에 항상 Origin 헤더를 붙인다.
// 자기 도메인에서 온 요청만 통과시켜 외부 스크립트의 직접 호출을 막는다.
const isSameOrigin = (request) => {
  const origin = request.headers.get('Origin');
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
};

const extractText = (result) => {
  const parts = result?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts
    .filter((part) => part && !part.thought && typeof part.text === 'string')
    .map((part) => part.text)
    .join('');
};

export async function onRequestPost({ request, env }) {
  if (!isSameOrigin(request)) {
    return json({ error: 'Forbidden' }, 403);
  }

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return json({ error: 'Server is not configured' }, 500);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const prompt = payload?.prompt;
  const model = payload?.model;

  if (typeof prompt !== 'string' || prompt.trim().length === 0) {
    return json({ error: 'Invalid request body' }, 400);
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return json({ error: 'Prompt is too long' }, 413);
  }
  if (typeof model !== 'string' || !ALLOWED_MODELS.has(model)) {
    return json({ error: 'Unsupported model' }, 400);
  }

  let upstream;
  try {
    upstream = await fetch(`${UPSTREAM_BASE}/${model}:generateContent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json' },
      }),
    });
  } catch {
    return json({ error: 'Upstream request failed' }, 502);
  }

  if (!upstream.ok) {
    // 업스트림 응답 본문에는 API 키 식별자가 포함될 수 있으므로 그대로 전달하지 않는다.
    // 재시도 판단에 필요한 상태 코드만 넘긴다.
    return json({ error: `Upstream error (${upstream.status})` }, upstream.status);
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    return json({ error: 'Malformed upstream response' }, 502);
  }

  const text = extractText(result);
  if (!text) {
    return json({ error: 'Empty response from model' }, 502);
  }

  return json({ text });
}

// onRequestPost 만 내보내므로 그 외 메서드는 Pages 가 405 로 응답한다.
