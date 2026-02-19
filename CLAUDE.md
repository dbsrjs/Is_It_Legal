# Is It Legal? - AI-Powered Legal Information Platform

## 프로젝트 개요

**Is It Legal?** (lawornot.com)은 전 세계 법률 정보를 AI 기반으로 제공하는 웹 애플리케이션입니다. 사용자가 궁금한 법률 질문을 입력하면 AI가 해당 국가의 법률 정보를 분석하여 합법성 여부와 상세한 정보를 제공합니다.

## 주요 기능

### 1. 다국어 지원 (Multilingual Support)
- **지원 언어**: 한국어, English, 日本語, Español
- React Context API 기반 언어 전환
- localStorage를 통한 언어 설정 저장
- 브라우저 언어 자동 감지
- AI 응답도 선택된 언어로 제공
- 동적 document.title 및 meta description 언어별 업데이트

### 2. AI 기반 법률 검색
- **Gemini API** (`@google/generative-ai`)를 활용한 법률 정보 분석
- 모델: `gemini-3-flash-preview` (JSON 응답 모드)
- 실시간 법률 상태 분류 (합법/조건부 합법/불법/불명확)
- 상세한 법률 설명 및 근거 제시
- 5개국 법률 비교 데이터 자동 생성
- 4개 관련 검색어 자동 추천
- 비동기 검색 Race Condition 방지 (`searchIdRef` 패턴)

### 3. 사용자 인터페이스
- **다크 테마**: Navy (#1E3A5F) & Gold (#C6A65B) 색상 체계
- **Glass Morphism**: 반투명 카드와 블러 효과
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **애니메이션**: 부드러운 hover 효과 및 트랜지션
- **접근성**: ARIA 레이블 및 키보드 네비게이션 지원

### 4. 결과 공유 & URL 기반 검색
- URL 쿼리 파라미터(`?q=`) 기반 검색어 공유
- **결과 공유**: 핵심 결과(상태/주제/국가/요약)를 Base64 인코딩하여 `&r=` 파라미터로 URL에 포함
- 공유 링크 수신자는 AI 재검색 없이 결과를 즉시 확인 가능
- `pushState`/`popstate`로 브라우저 뒤로가기/앞으로가기 지원
- 소셜 미디어 공유 (X, Facebook, Reddit, 링크 복사)

### 5. 추천 시스템
- **하이브리드 추천**: localStorage 검색 빈도 + 랜덤 풀 선택
- 첫 방문자: 100개 풀에서 랜덤 10개 표시
- 재방문자: 개인 상위 5개 + 랜덤 5개 혼합
- 언어별 100개 추천 항목 풀 (ko/en/ja/es)
- 한 줄 가로 스크롤 + 양쪽 mask 페이드아웃 효과

### 6. SEO 최적화
- 메타 태그 최적화 (Open Graph, Twitter Cards)
- JSON-LD 구조화 데이터 (WebApplication, FAQPage, BreadcrumbList)
- hreflang 태그 (en, ko, ja, es, x-default)
- sitemap.xml (25+ URL, 다국어 변형 포함) 및 robots.txt
- Google Search Console 연동
- Naver Search Advisor 인증
- preconnect/dns-prefetch 성능 최적화
- Cloudflare 301 리디렉션 설정 (lawornot.com → www.lawornot.com)

### 7. 수익화
- Google AdSense 통합
- ads.txt 파일 설정
- 광고 게재 준비 완료

## 기술 스택

### Frontend
- **React** 19.x - UI 라이브러리
- **React Context API** - 전역 상태 관리 (언어 설정)
- **CSS3** - 커스텀 스타일링 (CSS Variables, Flexbox, Grid)
- **Inter Font** - 웹 폰트

### Backend/API
- **Gemini API** (`@google/generative-ai`) - AI 법률 분석

### 배포 & 인프라
- **Cloudflare Pages** - 정적 사이트 호스팅
- **Cloudflare DNS** - 도메인 관리
- **Cloudflare Rules** - URL 리디렉션

### 개발 도구
- **Create React App** - 프로젝트 보일러플레이트
- **npm** - 패키지 관리

## 프로젝트 구조

```
Is_It_Legal/
├── public/
│   ├── index.html           # 메인 HTML (SEO 메타 태그, JSON-LD 포함)
│   ├── sitemap.xml          # 사이트맵 (25+ URL, 다국어 hreflang)
│   ├── robots.txt           # 크롤러 설정
│   ├── ads.txt              # Google AdSense 인증
│   ├── favicon.ico          # 파비콘
│   ├── logo192.png          # PWA 아이콘 192x192
│   ├── logo512.png          # PWA 아이콘 512x512
│   └── apple-touch-icon.png # iOS 아이콘
├── src/
│   ├── components/
│   │   ├── SearchResults.js/.css      # 검색 결과 카드
│   │   ├── LawDetails.js/.css         # 법률 상세 정보
│   │   ├── LoadingSpinner.js/.css     # 로딩 인디케이터
│   │   ├── ErrorMessage.js/.css       # 에러 메시지
│   │   ├── LanguageSelector.js/.css   # 언어 선택기
│   │   ├── CategoryBrowse.js/.css     # 8개 카테고리 탐색
│   │   ├── RecentSearches.js/.css     # 최근 검색 기록
│   │   ├── CountryComparison.js/.css  # 5개국 법률 비교
│   │   ├── TrendingTopics.js/.css     # 추천 검색 (하이브리드)
│   │   ├── RelatedSearches.js/.css    # 관련 검색어
│   │   ├── ShareButtons.js/.css       # 소셜 공유 버튼
│   │   ├── FAQ.js/.css                # 자주 묻는 질문 (아코디언)
│   │   ├── Modal.js/.css              # 모달 컴포넌트
│   │   ├── AboutModal.js              # 소개 모달
│   │   └── PrivacyModal.js            # 개인정보 처리방침
│   ├── contexts/
│   │   └── LanguageContext.js         # 언어 Context (동적 SEO 업데이트)
│   ├── i18n/
│   │   └── translations.js            # 번역 데이터 (ko/en/ja/es)
│   ├── services/
│   │   └── aiService.js               # Gemini API 연동
│   ├── App.js                         # 메인 앱 컴포넌트
│   ├── App.css                        # 글로벌 스타일
│   └── index.js                       # 엔트리 포인트
├── .env                               # 환경 변수 (Gemini API 키)
└── package.json                       # 프로젝트 의존성
```

## 디자인 시스템

### 색상 팔레트
```css
--primary: #1E3A5F        /* Navy - 주요 색상 */
--primary-dark: #0f1f38   /* Dark Navy */
--primary-light: #2A5080  /* Light Navy */
--accent: #C6A65B         /* Gold - 강조 색상 */
--bg-dark: #0a0e1a        /* 다크 배경 */
--bg-darker: #060911      /* 더 어두운 배경 */
--text-light: #94a3b8     /* 연한 텍스트 */
--border: #1e293b         /* 테두리 */
```

### 글로우 효과
- `--glow-accent: rgba(198, 166, 91, 0.3)` - 25-30% 투명도로 은은한 발광 효과

### 타이포그래피
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **제목**: 900 weight, letter-spacing: -0.03em
- **본문**: 400-500 weight, line-height: 1.7-1.8

### 레이아웃
- **최대 너비**: 1400px (컨테이너)
- **검색 결과 카드**: max-width 500px (중앙 정렬)
- **법률 상세**: max-width 900px
- **간격**: 2rem 기본 gap

## 주요 컴포넌트 설명

### App.js
- 메인 애플리케이션 컴포넌트
- 검색 폼, 결과 표시, 모달 관리
- Gemini API 호출 및 상태 관리
- URL 쿼리 파라미터 동기화 (`?q=`)
- 브라우저 뒤로가기/앞으로가기 (`popstate`) 지원
- `searchIdRef`를 통한 비동기 Race Condition 방지

### LanguageContext.js
- 전역 언어 설정 관리
- localStorage 동기화
- 브라우저 언어 감지 (navigator.language)
- 동적 `document.title`, `document.documentElement.lang`, `meta description` 업데이트

### SearchResults.js
- Flexbox 기반 중앙 정렬 레이아웃
- 법률 상태별 색상 구분 (합법: 초록, 조건부: 노랑, 불법: 빨강, 불명확: 회색)
- 카드 호버 효과 및 애니메이션

### LawDetails.js
- 법률 상세 정보 표시
- 마크다운 스타일 콘텐츠 렌더링
- 뒤로가기 버튼

### TrendingTopics.js
- 하이브리드 추천 시스템 (localStorage 빈도 + 랜덤 풀)
- 언어별 40개 추천 항목 풀 (`recommendedPool`)
- 첫 방문자: 랜덤 10개 / 재방문자: 개인 top 5 + 랜덤 5개
- 한 줄 가로 스크롤 + 양쪽 mask 페이드아웃 효과

### CategoryBrowse.js
- 8개 카테고리 카드 (디지털, 드론, 도박, 물질, 소지품, 프라이버시, 교통, 비즈니스)
- 언어별 검색 쿼리 매핑 (`categorySearchQueries`)

### CountryComparison.js
- AI 응답의 `comparisons` 배열 (5개국) 시각화
- 법률 상태별 색상 카드

### ShareButtons.js
- 결과 데이터(상태/주제/국가/요약)를 Base64 인코딩하여 URL `&r=` 파라미터에 포함
- 소셜 미디어 공유 (X, Facebook, Reddit)
- 클립보드 링크 복사

### FAQ.js
- 아코디언 UI (ARIA 접근성 지원)
- 언어별 6개 FAQ 항목

### Modal.js
- 재사용 가능한 모달 컴포넌트
- ESC 키로 닫기
- 오버레이 클릭으로 닫기
- 애니메이션 (fadeIn, slideUp)

## 환경 변수 설정

`.env` 파일에 다음 변수를 설정해야 합니다 (프로젝트 루트에 위치):

```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

> **주의**: `.env` 파일은 반드시 프로젝트 루트(`Is_It_Legal/`)에 위치해야 합니다. `src/` 폴더 안에 두면 인식되지 않습니다.

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```
- 브라우저에서 http://localhost:3000 열림

### 3. 프로덕션 빌드
```bash
npm run build
```
- `build/` 폴더에 최적화된 정적 파일 생성

### 4. 배포 (Cloudflare Pages)
1. Cloudflare Pages 대시보드 접속
2. `build/` 폴더의 내용을 드래그 앤 드롭
3. 또는 Git 저장소 연동하여 자동 배포 설정

## SEO 설정

### Google Search Console
1. https://search.google.com/search-console 접속
2. 속성 추가: https://www.lawornot.com
3. sitemap.xml 제출: https://www.lawornot.com/sitemap.xml

### Naver Search Advisor
1. https://searchadvisor.naver.com 접속
2. 사이트 등록 및 소유 확인
3. 메타 태그 인증: `<meta name="naver-site-verification" content="6999e2d24b687f558d6777d0290047808d94c63d" />`

### Google AdSense
1. 계정: ca-pub-5790631379543226
2. `ads.txt` 파일 설정 완료
3. 메타 태그 추가 완료
4. 광고 코드 삽입 완료

## Cloudflare 설정

### 리디렉션 규칙
- **소스**: `lawornot.com/*`
- **대상**: `https://www.lawornot.com/${1}`
- **상태 코드**: 301 (Permanent Redirect)
- **용도**: 비-www 도메인을 www 도메인으로 리디렉션

### DNS 설정
- A 레코드: lawornot.com → Cloudflare IP
- CNAME: www → lawornot.com
- Cloudflare Proxy 활성화 (주황색 구름)

## 성능 최적화

### 빌드 크기
- **Main JS**: ~93 kB (gzipped)
- **Main CSS**: ~6.7 kB (gzipped)
- **Chunk**: ~1.8 kB (gzipped)
- **Total**: ~101 kB (경량)

### 최적화 기법
- CSS Variables로 스타일 재사용
- preconnect/dns-prefetch로 외부 리소스 사전 연결
- 이미지 최적화 (favicon 등)
- Cloudflare CDN 활용

## 다국어 번역 구조

### translations.js 구조
```javascript
{
  ko: { /* 한국어 */ },
  en: { /* English */ },
  ja: { /* 日本語 */ },
  es: { /* Español */ }
}
```

### 섹션별 번역
- `meta`: SEO 메타 태그 (title, description, searchTitle)
- `logo`: 로고 텍스트
- `nav`: 네비게이션 메뉴
- `hero`: 히어로 섹션
- `categories`: 카테고리 탐색
- `howItWorks`: 작동 방식
- `loading`: 로딩 상태
- `error`: 에러 메시지
- `results`: 검색 결과
- `status`: 법률 상태 라벨
- `details`: 법률 상세
- `recentSearches`: 최근 검색
- `faq`: 자주 묻는 질문
- `comparison`: 국가별 비교
- `share`: 공유 기능
- `trending`: 추천 검색
- `relatedSearches`: 관련 검색
- `footer`: 푸터

### 언어 추가 시 수정 파일
1. `src/i18n/translations.js` - 전체 번역 섹션 + `languages` 배열
2. `src/components/CategoryBrowse.js` - `categorySearchQueries` 매핑
3. `src/components/TrendingTopics.js` - `recommendedPool` (40개 항목)
4. `src/services/aiService.js` - `languageInstructions` 매핑
5. `public/index.html` - hreflang, og:locale:alternate, JSON-LD inLanguage
6. `public/sitemap.xml` - 메인 페이지 hreflang 변형 URL

## 개발 히스토리

### v1.0.0 (Initial Release)
- 기본 법률 검색 기능 구현
- 라이트 테마 디자인

### v2.0.0 (Major Redesign)
- **다국어 지원** 추가 (한국어, 영어, 일본어)
- **다크 테마** 전환 (Navy & Gold)
- **Glass Morphism** 디자인 적용
- **모달 시스템** 구현 (About, Privacy)
- **SEO 최적화** 완료
- **Google AdSense** 통합
- **중앙 정렬** 레이아웃 개선
- **카드 너비** 최적화 (500px)

### v3.0.0 (Growth & Features)
- **카테고리 탐색** 추가 (8개 카테고리)
- **최근 검색** 기능 (localStorage, 최대 10개)
- **국가별 법률 비교** (AI 응답 기반 5개국 비교)
- **FAQ 섹션** (아코디언 UI, 6개 항목)
- **결과 공유** 기능 (Base64 인코딩으로 실제 결과 데이터 URL 포함, AI 재검색 없이 즉시 표시)
- **소셜 공유** 기능 (X, Facebook, Reddit, 링크 복사)
- **공유 가능한 URL** (`?q=` 쿼리 파라미터 + `&r=` 결과 데이터)
- **추천 검색** 하이브리드 시스템 (개인화 + 랜덤, 100개 풀)
- **관련 검색어** 표시 (AI 응답 기반 4개)
- **스페인어** 추가 (4번째 지원 언어)
- **고급 SEO** (JSON-LD 구조화 데이터, hreflang, 확장 사이트맵)
- **Race Condition 수정** (비동기 검색 결과 꼬임 방지)
- **동적 페이지 타이틀** (검색 결과에 따른 document.title 변경)
- **성능 최적화** (preconnect, dns-prefetch)

## 연락처

- **이메일**: support@lawornot.com
- **개발자**: lyg@lawornot.com
- **웹사이트**: https://www.lawornot.com

## 라이선스

© 2026 Is It Legal?. All rights reserved.

## 면책 조항

이 서비스는 일반적인 정보 제공을 목적으로 하며, 법률 자문을 대체할 수 없습니다. 구체적인 법률 문제에 대해서는 전문 변호사와 상담하시기 바랍니다.

## Claude AI 작업 가이드라인

### 응답 규칙
1. **모든 대답은 한국어로 작성할 것**
   - 기술 용어는 영어 병기 가능
   - 예: "컴포넌트(Component)", "리팩토링(Refactoring)"

2. **상급자를 대하듯이 존댓말 사용**
   - "~합니다", "~드립니다" 형태 사용
   - "~해", "~할게" 등의 반말 사용 금지
   - 정중하고 전문적인 어조 유지

3. **작업 완료 시 명확한 알림**
   - 모든 작업이 끝난 후 반드시 "작업이 완료되었습니다" 명시
   - 완료된 작업 내용 요약 제공
   - 다음 단계 제안 (필요시)

4. **Claude AI 관여 흔적 제거**
   - Git 커밋 메시지에 "Co-Authored-By: Claude" 등 AI 관여 표시 금지
   - 코드 주석에 "Generated by AI", "Claude AI" 등의 표현 사용 금지
   - 문서나 README에 AI 도구 사용 여부 언급하지 않음
   - 모든 작업은 개발자가 직접 수행한 것처럼 처리

### 예시

**좋은 응답:**
```
SearchResults.css 파일의 max-width를 650px에서 500px로 수정하였습니다.

변경 사항:
- .results-grid > *:only-child max-width: 500px
- .result-card max-width: 500px

작업이 완료되었습니다.
```

**나쁜 응답:**
```
Done! I've updated the max-width from 650px to 500px.
```
