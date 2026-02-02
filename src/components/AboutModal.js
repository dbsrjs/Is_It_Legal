// AboutModal.js - 소개 페이지 컨텐츠

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal';

function AboutModal({ isOpen, onClose }) {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "소개",
      mission: "우리의 미션",
      missionText: "Is It Legal?은 전 세계 여행자, 디지털 노마드, 그리고 호기심 많은 사람들을 위한 법률 정보 플랫폼입니다. 우리는 복잡한 국제 법률 정보를 쉽고 이해하기 쉽게 제공하여, 누구나 자신의 권리와 의무를 정확히 알 수 있도록 돕습니다.",
      whatWeDo: "우리가 하는 일",
      feature1: "AI 기반 검색: 최신 AI 기술을 활용하여 실시간으로 법률 정보를 제공합니다.",
      feature2: "다국가 비교: 동일한 주제에 대해 여러 국가의 법률을 한눈에 비교할 수 있습니다.",
      feature3: "다국어 지원: 한국어, 영어, 일본어로 서비스를 제공합니다.",
      feature4: "공식 출처: 모든 정보는 정부 및 공식 법률 출처를 기반으로 합니다.",
      whyItMatters: "왜 중요한가요?",
      whyText: "해외 여행이나 거주 시, 현지 법률을 모르고 위반하는 경우가 많습니다. 드론 촬영, VPN 사용, 물품 소지 등 나라마다 다른 규정들을 사전에 파악하면 불필요한 법적 문제를 예방할 수 있습니다.",
      team: "팀",
      teamText: "Is It Legal?은 법률 전문가, 개발자, 디자이너로 구성된 글로벌 팀이 운영합니다.",
      contact: "문의",
      contactText: "궁금한 점이 있으시면 언제든지 연락해주세요: support@lawornot.com"
    },
    en: {
      title: "About",
      mission: "Our Mission",
      missionText: "Is It Legal? is a legal information platform for travelers, digital nomads, and curious minds worldwide. We simplify complex international legal information, helping everyone understand their rights and obligations accurately.",
      whatWeDo: "What We Do",
      feature1: "AI-Powered Search: Using cutting-edge AI technology to provide real-time legal information.",
      feature2: "Multi-Country Comparison: Compare laws on the same topic across multiple countries at a glance.",
      feature3: "Multilingual Support: Available in Korean, English, and Japanese.",
      feature4: "Official Sources: All information is based on government and official legal sources.",
      whyItMatters: "Why It Matters",
      whyText: "When traveling or living abroad, many people unknowingly violate local laws. Understanding different regulations for drone photography, VPN usage, possession of items, etc., helps prevent unnecessary legal issues.",
      team: "Team",
      teamText: "Is It Legal? is operated by a global team of legal experts, developers, and designers.",
      contact: "Contact",
      contactText: "If you have any questions, feel free to reach out: support@lawornot.com"
    },
    ja: {
      title: "概要",
      mission: "私たちのミッション",
      missionText: "Is It Legal?は、世界中の旅行者、デジタルノマド、好奇心旺盛な人々のための法律情報プラットフォームです。複雑な国際法律情報をシンプルで理解しやすく提供し、誰もが自分の権利と義務を正確に知ることができるようサポートします。",
      whatWeDo: "私たちの活動",
      feature1: "AI検索: 最新のAI技術を活用してリアルタイムで法律情報を提供します。",
      feature2: "多国間比較: 同じトピックについて複数の国の法律を一目で比較できます。",
      feature3: "多言語対応: 韓国語、英語、日本語でサービスを提供しています。",
      feature4: "公式情報源: すべての情報は政府および公式法律情報源に基づいています。",
      whyItMatters: "なぜ重要か",
      whyText: "海外旅行や居住時、現地の法律を知らずに違反するケースが多くあります。ドローン撮影、VPN使用、物品所持など、国ごとに異なる規制を事前に把握することで、不要な法的問題を防ぐことができます。",
      team: "チーム",
      teamText: "Is It Legal?は、法律専門家、開発者、デザイナーからなるグローバルチームが運営しています。",
      contact: "お問い合わせ",
      contactText: "ご質問がございましたら、お気軽にご連絡ください: support@lawornot.com"
    }
  };

  const c = content[language] || content.en;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={c.title}>
      <h3>{c.mission}</h3>
      <p>{c.missionText}</p>

      <h3>{c.whatWeDo}</h3>
      <ul>
        <li>{c.feature1}</li>
        <li>{c.feature2}</li>
        <li>{c.feature3}</li>
        <li>{c.feature4}</li>
      </ul>

      <h3>{c.whyItMatters}</h3>
      <p>{c.whyText}</p>

      <h3>{c.team}</h3>
      <p>{c.teamText}</p>

      <h3>{c.contact}</h3>
      <p>{c.contactText}</p>
    </Modal>
  );
}

export default AboutModal;
