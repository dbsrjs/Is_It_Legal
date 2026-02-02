// PrivacyModal.js - 개인정보 처리방침 페이지 컨텐츠

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal';

function PrivacyModal({ isOpen, onClose }) {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "개인정보 처리방침",
      intro: "Is It Legal?은 사용자의 개인정보를 중요하게 생각하며, 개인정보보호법 및 관련 법규를 준수합니다.",
      lastUpdated: "최종 업데이트: 2026년 2월 2일",

      section1Title: "1. 수집하는 정보",
      section1Text: "현재 Is It Legal?은 사용자 계정을 요구하지 않으며, 다음과 같은 정보만 수집합니다:",
      section1List: [
        "검색 쿼리 (법률 정보 제공 목적)",
        "언어 설정 (로컬 스토리지에 저장)",
        "익명 사용 통계 (Google Analytics 등)"
      ],

      section2Title: "2. 정보 사용 목적",
      section2List: [
        "사용자가 요청한 법률 정보 제공",
        "서비스 개선 및 사용자 경험 향상",
        "통계 분석 및 연구"
      ],

      section3Title: "3. 제3자 서비스",
      section3Text: "본 서비스는 다음의 제3자 서비스를 사용합니다:",
      section3List: [
        "Google Gemini API (AI 검색 기능)",
        "Cloudflare (호스팅 및 CDN)",
        "Google Analytics (익명 통계)"
      ],

      section4Title: "4. 쿠키 사용",
      section4Text: "언어 설정 저장을 위해 브라우저의 로컬 스토리지를 사용합니다. 이 정보는 사용자의 브라우저에만 저장되며, 서버로 전송되지 않습니다.",

      section5Title: "5. 데이터 보안",
      section5Text: "모든 통신은 HTTPS를 통해 암호화되며, 사용자 데이터는 안전하게 보호됩니다.",

      section6Title: "6. 사용자 권리",
      section6List: [
        "언제든지 브라우저 설정을 통해 로컬 스토리지 데이터를 삭제할 수 있습니다.",
        "서비스 사용을 중단하면 데이터 수집이 즉시 중지됩니다."
      ],

      section7Title: "7. 정책 변경",
      section7Text: "본 정책은 필요에 따라 업데이트될 수 있으며, 변경 사항은 본 페이지에 공지됩니다.",

      section8Title: "8. 문의",
      section8Text: "개인정보 처리방침에 대한 질문이나 우려사항이 있으시면 다음으로 연락해주세요:",
      email: "이메일: support@lawornot.com"
    },
    en: {
      title: "Privacy Policy",
      intro: "Is It Legal? takes your privacy seriously and complies with relevant privacy laws and regulations.",
      lastUpdated: "Last Updated: February 2, 2026",

      section1Title: "1. Information We Collect",
      section1Text: "Currently, Is It Legal? does not require user accounts and only collects the following information:",
      section1List: [
        "Search queries (for providing legal information)",
        "Language preferences (stored in local storage)",
        "Anonymous usage statistics (via Google Analytics, etc.)"
      ],

      section2Title: "2. How We Use Information",
      section2List: [
        "Provide legal information requested by users",
        "Improve service and user experience",
        "Statistical analysis and research"
      ],

      section3Title: "3. Third-Party Services",
      section3Text: "This service uses the following third-party services:",
      section3List: [
        "Google Gemini API (AI search functionality)",
        "Cloudflare (hosting and CDN)",
        "Google Analytics (anonymous statistics)"
      ],

      section4Title: "4. Cookie Usage",
      section4Text: "We use browser local storage to save language preferences. This information is stored only in your browser and is not transmitted to our servers.",

      section5Title: "5. Data Security",
      section5Text: "All communications are encrypted via HTTPS, and user data is securely protected.",

      section6Title: "6. Your Rights",
      section6List: [
        "You can delete local storage data through your browser settings at any time.",
        "Data collection stops immediately when you stop using the service."
      ],

      section7Title: "7. Policy Changes",
      section7Text: "This policy may be updated as needed, and changes will be posted on this page.",

      section8Title: "8. Contact",
      section8Text: "If you have questions or concerns about this privacy policy, please contact us:",
      email: "Email: support@lawornot.com"
    },
    ja: {
      title: "プライバシーポリシー",
      intro: "Is It Legal?はお客様のプライバシーを重視し、関連するプライバシー法および規制を遵守します。",
      lastUpdated: "最終更新日: 2026年2月2日",

      section1Title: "1. 収集する情報",
      section1Text: "現在、Is It Legal?はユーザーアカウントを必要とせず、以下の情報のみを収集します：",
      section1List: [
        "検索クエリ（法律情報提供のため）",
        "言語設定（ローカルストレージに保存）",
        "匿名使用統計（Google Analyticsなど）"
      ],

      section2Title: "2. 情報の使用目的",
      section2List: [
        "ユーザーが要求した法律情報の提供",
        "サービスの改善とユーザーエクスペリエンスの向上",
        "統計分析と研究"
      ],

      section3Title: "3. サードパーティサービス",
      section3Text: "本サービスは以下のサードパーティサービスを使用しています：",
      section3List: [
        "Google Gemini API（AI検索機能）",
        "Cloudflare（ホスティングとCDN）",
        "Google Analytics（匿名統計）"
      ],

      section4Title: "4. Cookieの使用",
      section4Text: "言語設定を保存するためにブラウザのローカルストレージを使用します。この情報はお客様のブラウザにのみ保存され、サーバーには送信されません。",

      section5Title: "5. データセキュリティ",
      section5Text: "すべての通信はHTTPSを通じて暗号化され、ユーザーデータは安全に保護されます。",

      section6Title: "6. お客様の権利",
      section6List: [
        "ブラウザ設定からいつでもローカルストレージデータを削除できます。",
        "サービスの使用を停止すると、データ収集は即座に停止します。"
      ],

      section7Title: "7. ポリシーの変更",
      section7Text: "本ポリシーは必要に応じて更新される場合があり、変更はこのページで通知されます。",

      section8Title: "8. お問い合わせ",
      section8Text: "このプライバシーポリシーに関するご質問や懸念がございましたら、以下までご連絡ください：",
      email: "メール: support@lawornot.com"
    }
  };

  const c = content[language] || content.en;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={c.title}>
      <p><strong>{c.intro}</strong></p>
      <p><em>{c.lastUpdated}</em></p>

      <h3>{c.section1Title}</h3>
      <p>{c.section1Text}</p>
      <ul>
        {c.section1List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>{c.section2Title}</h3>
      <ul>
        {c.section2List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>{c.section3Title}</h3>
      <p>{c.section3Text}</p>
      <ul>
        {c.section3List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>{c.section4Title}</h3>
      <p>{c.section4Text}</p>

      <h3>{c.section5Title}</h3>
      <p>{c.section5Text}</p>

      <h3>{c.section6Title}</h3>
      <ul>
        {c.section6List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>{c.section7Title}</h3>
      <p>{c.section7Text}</p>

      <h3>{c.section8Title}</h3>
      <p>{c.section8Text}</p>
      <p><strong>{c.email}</strong></p>
    </Modal>
  );
}

export default PrivacyModal;
