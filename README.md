# [LawOrNot](https://lawornot.com/)

> 전 세계 법률 정보를 AI로 분석해 알려주는 웹 서비스

"이거 합법인가요?" 궁금한 것을 입력하면 해당 국가의 법률을 분석해 **합법 / 조건부 합법 / 불법 / 불명확** 중 하나로 판정하고, 근거와 처벌 규정, 다른 나라와의 비교까지 함께 보여줍니다.

---

## 주요 기능

- **AI 법률 분석** — 질문을 입력하면 법적 상태를 판정하고 상세 설명, 조건, 처벌 규정, 출처를 제공합니다.
- **4개 언어 지원** — 한국어 / English / 日本語 / Español. 브라우저 언어를 자동 감지하며 AI 응답도 선택한 언어로 나옵니다.
- **국가별 비교** — 같은 주제에 대한 5개국의 법적 상태를 한눈에 비교합니다.
- **카테고리 탐색** — 디지털, 드론, 도박, 물질, 소지품, 프라이버시, 교통, 비즈니스 8개 분류.
- **추천 검색** — 검색 빈도(localStorage)와 추천 풀을 조합한 하이브리드 방식.
- **결과 공유** — 검색 결과를 압축해 URL에 담기 때문에, 링크를 받은 사람은 AI 재검색 없이 바로 결과를 봅니다.
- **최근 검색 / 관련 검색어 / FAQ**

## 기술 스택

| 영역 | 사용 기술 |
|---|---|
| 프론트엔드 | React 19, Create React App, React Context API, CSS3 |
| 백엔드 | Cloudflare Pages Functions |
| AI | Gemini API (`gemini-3.5-flash-lite`, 실패 시 `gemini-3.5-flash`) |
| 배포 | Cloudflare Pages |

## 아키텍처

AI 호출은 브라우저에서 직접 하지 않고 **Cloudflare Pages Function을 경유**합니다.

```
브라우저  ──POST /api/gemini──▶  Pages Function  ──▶  Gemini API
                                (API 키 보관)
```

프론트엔드 번들에 API 키가 포함되지 않도록 하기 위한 구조입니다. `REACT_APP_` 접두사가 붙은 환경 변수는 빌드 시 JS 번들에 **문자열 그대로 삽입되어 누구나 열람할 수 있으므로**, API 키를 그렇게 다루면 안 됩니다.

프록시(`functions/api/gemini.js`)는 다음을 함께 처리합니다.

- 동일 출처 검증 — 외부 도메인의 직접 호출 차단
- 모델 화이트리스트 — 허용된 모델만 통과
- 요청 크기 제한
- 업스트림 오류 본문 차단 — Google의 오류 메시지에는 API 키 식별자가 포함될 수 있어 상태 코드만 전달합니다

## 시작하기

### 요구 사항

- Node.js 18 이상
- Gemini API 키 ([Google AI Studio](https://aistudio.google.com/)에서 발급)

### 설치

```bash
git clone https://github.com/dbsrjs/Is_It_Legal.git
cd Is_It_Legal
npm install
```

### 환경 변수

API 키는 **서버 측에서만** 사용합니다. 예시 파일을 복사해 키를 채웁니다.

```bash
cp .dev.vars.example .dev.vars
```

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

`.dev.vars`는 `.gitignore`에 등록되어 있습니다.

### 실행

AI 검색까지 동작시키려면 Pages Function이 함께 떠야 하므로 `wrangler`를 사용합니다.

```bash
npm run build
npx wrangler pages dev build
```

UI만 확인할 때는 개발 서버를 써도 됩니다. 다만 `npm start`는 `/api/gemini`를 제공하지 않아 **검색은 동작하지 않습니다.**

```bash
npm start
```

### 스크립트

| 명령 | 설명 |
|---|---|
| `npm start` | 개발 서버 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 → `build/` |
| `npm test` | 테스트 실행 |

## 배포

`main` 브랜치에 푸시하면 Cloudflare Pages가 자동으로 빌드·배포합니다.

| 설정 | 값 |
|---|---|
| 빌드 명령 | `npm run build` |
| 출력 디렉터리 | `build` |

Cloudflare Pages 대시보드 > Settings > Variables and Secrets에 `GEMINI_API_KEY`를 **Secret** 타입으로 등록해야 합니다 (Production / Preview 각각). 등록하지 않으면 검색 시 `Server is not configured` 오류가 발생합니다.

> 환경 변수는 기존 배포에 소급 적용되지 않습니다. 변수를 추가하거나 변경한 뒤에는 재배포해야 반영됩니다.

## 프로젝트 구조

```
Is_It_Legal/
├── functions/api/gemini.js   # Gemini API 프록시 (API 키 보관)
├── public/                   # index.html, sitemap.xml, robots.txt 등
└── src/
    ├── components/           # UI 컴포넌트
    ├── contexts/             # 언어 Context
    ├── i18n/                 # 4개 언어 번역
    ├── services/aiService.js # AI 호출, 응답 파싱, 모델 폴백
    └── App.js
```

## 알려진 한계

- AI가 응답에 포함하는 출처 URL이 실재하지 않는 도메인인 경우가 있습니다. 도메인 검증 로직은 아직 적용되지 않았습니다.
- `gemini-3.5-flash`는 응답에 25~90초가 걸리고 503과 응답 잘림이 잦아 예비 경로로만 사용합니다.

## 라이선스

© 2026 LawOrNot. All rights reserved.
