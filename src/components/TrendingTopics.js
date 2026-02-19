import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './TrendingTopics.css';

const recommendedPool = {
  ko: [
    { query: "태국 대마초", icon: "🌿", status: "conditional" },
    { query: "일본 드론", icon: "🚁", status: "conditional" },
    { query: "중국 VPN", icon: "💻", status: "illegal" },
    { query: "네덜란드 도박", icon: "🎰", status: "legal" },
    { query: "미국 총기", icon: "🔫", status: "conditional" },
    { query: "한국 온라인 도박", icon: "🎰", status: "illegal" },
    { query: "캐나다 대마초", icon: "🌿", status: "legal" },
    { query: "호주 전자담배", icon: "🚬", status: "conditional" },
    { query: "싱가포르 껌", icon: "🍬", status: "illegal" },
    { query: "독일 맥주 길거리 음주", icon: "🍺", status: "legal" },
    { query: "영국 칼 소지", icon: "🔪", status: "illegal" },
    { query: "프랑스 음주운전", icon: "🚗", status: "conditional" },
    { query: "러시아 VPN", icon: "💻", status: "conditional" },
    { query: "브라질 총기", icon: "🔫", status: "conditional" },
    { query: "일본 암호화폐", icon: "💼", status: "legal" },
    { query: "미국 통화 녹음", icon: "📞", status: "conditional" },
    { query: "두바이 음주", icon: "🍺", status: "conditional" },
    { query: "스위스 CBD", icon: "🌿", status: "legal" },
    { query: "태국 전자담배", icon: "🚬", status: "illegal" },
    { query: "멕시코 대마초", icon: "🌿", status: "conditional" },
    { query: "북한 인터넷", icon: "🌐", status: "illegal" },
    { query: "이란 VPN", icon: "💻", status: "illegal" },
    { query: "포르투갈 마약", icon: "💊", status: "conditional" },
    { query: "인도 암호화폐", icon: "💼", status: "conditional" },
    { query: "필리핀 총기", icon: "🔫", status: "conditional" },
    { query: "쿠바 인터넷", icon: "🌐", status: "conditional" },
    { query: "우루과이 대마초", icon: "🌿", status: "legal" },
    { query: "사우디 음주", icon: "🍺", status: "illegal" },
    { query: "뉴질랜드 드론", icon: "🚁", status: "conditional" },
    { query: "영국 CCTV", icon: "📷", status: "legal" },
    { query: "터키 VPN", icon: "💻", status: "conditional" },
    { query: "호주 후추 스프레이", icon: "🔪", status: "conditional" },
    { query: "스페인 길거리 음주", icon: "🍺", status: "conditional" },
    { query: "체코 총기", icon: "🔫", status: "conditional" },
    { query: "이탈리아 드론", icon: "🚁", status: "conditional" },
    { query: "남아공 대마초", icon: "🌿", status: "legal" },
    { query: "베트남 도박", icon: "🎰", status: "illegal" },
    { query: "중국 암호화폐", icon: "💼", status: "illegal" },
    { query: "미국 스포츠 베팅", icon: "🎰", status: "conditional" },
    { query: "독일 토렌트", icon: "💻", status: "illegal" }
  ],
  en: [
    { query: "cannabis Thailand", icon: "🌿", status: "conditional" },
    { query: "drone Japan", icon: "🚁", status: "conditional" },
    { query: "VPN China", icon: "💻", status: "illegal" },
    { query: "gambling Netherlands", icon: "🎰", status: "legal" },
    { query: "guns USA", icon: "🔫", status: "conditional" },
    { query: "online gambling Korea", icon: "🎰", status: "illegal" },
    { query: "cannabis Canada", icon: "🌿", status: "legal" },
    { query: "vaping Australia", icon: "🚬", status: "conditional" },
    { query: "chewing gum Singapore", icon: "🍬", status: "illegal" },
    { query: "street drinking Germany", icon: "🍺", status: "legal" },
    { query: "knife carry UK", icon: "🔪", status: "illegal" },
    { query: "DUI limits France", icon: "🚗", status: "conditional" },
    { query: "VPN Russia", icon: "💻", status: "conditional" },
    { query: "guns Brazil", icon: "🔫", status: "conditional" },
    { query: "crypto Japan", icon: "💼", status: "legal" },
    { query: "recording calls USA", icon: "📞", status: "conditional" },
    { query: "alcohol Dubai", icon: "🍺", status: "conditional" },
    { query: "CBD Switzerland", icon: "🌿", status: "legal" },
    { query: "vaping Thailand", icon: "🚬", status: "illegal" },
    { query: "cannabis Mexico", icon: "🌿", status: "conditional" },
    { query: "internet North Korea", icon: "🌐", status: "illegal" },
    { query: "VPN Iran", icon: "💻", status: "illegal" },
    { query: "drugs Portugal", icon: "💊", status: "conditional" },
    { query: "crypto India", icon: "💼", status: "conditional" },
    { query: "guns Philippines", icon: "🔫", status: "conditional" },
    { query: "internet Cuba", icon: "🌐", status: "conditional" },
    { query: "cannabis Uruguay", icon: "🌿", status: "legal" },
    { query: "alcohol Saudi Arabia", icon: "🍺", status: "illegal" },
    { query: "drone New Zealand", icon: "🚁", status: "conditional" },
    { query: "CCTV UK", icon: "📷", status: "legal" },
    { query: "VPN Turkey", icon: "💻", status: "conditional" },
    { query: "pepper spray Australia", icon: "🔪", status: "conditional" },
    { query: "street drinking Spain", icon: "🍺", status: "conditional" },
    { query: "guns Czech Republic", icon: "🔫", status: "conditional" },
    { query: "drone Italy", icon: "🚁", status: "conditional" },
    { query: "cannabis South Africa", icon: "🌿", status: "legal" },
    { query: "gambling Vietnam", icon: "🎰", status: "illegal" },
    { query: "crypto China", icon: "💼", status: "illegal" },
    { query: "sports betting USA", icon: "🎰", status: "conditional" },
    { query: "torrenting Germany", icon: "💻", status: "illegal" }
  ],
  ja: [
    { query: "タイ 大麻", icon: "🌿", status: "conditional" },
    { query: "日本 ドローン", icon: "🚁", status: "conditional" },
    { query: "中国 VPN", icon: "💻", status: "illegal" },
    { query: "オランダ ギャンブル", icon: "🎰", status: "legal" },
    { query: "アメリカ 銃", icon: "🔫", status: "conditional" },
    { query: "韓国 オンラインギャンブル", icon: "🎰", status: "illegal" },
    { query: "カナダ 大麻", icon: "🌿", status: "legal" },
    { query: "オーストラリア 電子タバコ", icon: "🚬", status: "conditional" },
    { query: "シンガポール ガム", icon: "🍬", status: "illegal" },
    { query: "ドイツ 路上飲酒", icon: "🍺", status: "legal" },
    { query: "イギリス ナイフ", icon: "🔪", status: "illegal" },
    { query: "フランス 飲酒運転", icon: "🚗", status: "conditional" },
    { query: "ロシア VPN", icon: "💻", status: "conditional" },
    { query: "ブラジル 銃", icon: "🔫", status: "conditional" },
    { query: "日本 暗号通貨", icon: "💼", status: "legal" },
    { query: "アメリカ 通話録音", icon: "📞", status: "conditional" },
    { query: "ドバイ 飲酒", icon: "🍺", status: "conditional" },
    { query: "スイス CBD", icon: "🌿", status: "legal" },
    { query: "タイ 電子タバコ", icon: "🚬", status: "illegal" },
    { query: "メキシコ 大麻", icon: "🌿", status: "conditional" },
    { query: "北朝鮮 インターネット", icon: "🌐", status: "illegal" },
    { query: "イラン VPN", icon: "💻", status: "illegal" },
    { query: "ポルトガル 薬物", icon: "💊", status: "conditional" },
    { query: "インド 暗号通貨", icon: "💼", status: "conditional" },
    { query: "フィリピン 銃", icon: "🔫", status: "conditional" },
    { query: "キューバ インターネット", icon: "🌐", status: "conditional" },
    { query: "ウルグアイ 大麻", icon: "🌿", status: "legal" },
    { query: "サウジアラビア 飲酒", icon: "🍺", status: "illegal" },
    { query: "ニュージーランド ドローン", icon: "🚁", status: "conditional" },
    { query: "イギリス 監視カメラ", icon: "📷", status: "legal" },
    { query: "トルコ VPN", icon: "💻", status: "conditional" },
    { query: "オーストラリア 催涙スプレー", icon: "🔪", status: "conditional" },
    { query: "スペイン 路上飲酒", icon: "🍺", status: "conditional" },
    { query: "チェコ 銃", icon: "🔫", status: "conditional" },
    { query: "イタリア ドローン", icon: "🚁", status: "conditional" },
    { query: "南アフリカ 大麻", icon: "🌿", status: "legal" },
    { query: "ベトナム ギャンブル", icon: "🎰", status: "illegal" },
    { query: "中国 暗号通貨", icon: "💼", status: "illegal" },
    { query: "アメリカ スポーツベッティング", icon: "🎰", status: "conditional" },
    { query: "ドイツ トレント", icon: "💻", status: "illegal" }
  ],
  es: [
    { query: "cannabis Tailandia", icon: "🌿", status: "conditional" },
    { query: "drones Japón", icon: "🚁", status: "conditional" },
    { query: "VPN China", icon: "💻", status: "illegal" },
    { query: "apuestas Países Bajos", icon: "🎰", status: "legal" },
    { query: "armas EE.UU.", icon: "🔫", status: "conditional" },
    { query: "apuestas en línea Corea", icon: "🎰", status: "illegal" },
    { query: "cannabis Canadá", icon: "🌿", status: "legal" },
    { query: "vapeo Australia", icon: "🚬", status: "conditional" },
    { query: "chicle Singapur", icon: "🍬", status: "illegal" },
    { query: "beber en la calle Alemania", icon: "🍺", status: "legal" },
    { query: "portar cuchillo Reino Unido", icon: "🔪", status: "illegal" },
    { query: "límites alcoholemia Francia", icon: "🚗", status: "conditional" },
    { query: "VPN Rusia", icon: "💻", status: "conditional" },
    { query: "armas Brasil", icon: "🔫", status: "conditional" },
    { query: "cripto Japón", icon: "💼", status: "legal" },
    { query: "grabar llamadas EE.UU.", icon: "📞", status: "conditional" },
    { query: "alcohol Dubái", icon: "🍺", status: "conditional" },
    { query: "CBD Suiza", icon: "🌿", status: "legal" },
    { query: "vapeo Tailandia", icon: "🚬", status: "illegal" },
    { query: "cannabis México", icon: "🌿", status: "conditional" },
    { query: "internet Corea del Norte", icon: "🌐", status: "illegal" },
    { query: "VPN Irán", icon: "💻", status: "illegal" },
    { query: "drogas Portugal", icon: "💊", status: "conditional" },
    { query: "cripto India", icon: "💼", status: "conditional" },
    { query: "armas Filipinas", icon: "🔫", status: "conditional" },
    { query: "internet Cuba", icon: "🌐", status: "conditional" },
    { query: "cannabis Uruguay", icon: "🌿", status: "legal" },
    { query: "alcohol Arabia Saudita", icon: "🍺", status: "illegal" },
    { query: "drones Nueva Zelanda", icon: "🚁", status: "conditional" },
    { query: "CCTV Reino Unido", icon: "📷", status: "legal" },
    { query: "VPN Turquía", icon: "💻", status: "conditional" },
    { query: "spray pimienta Australia", icon: "🔪", status: "conditional" },
    { query: "beber en la calle España", icon: "🍺", status: "conditional" },
    { query: "armas República Checa", icon: "🔫", status: "conditional" },
    { query: "drones Italia", icon: "🚁", status: "conditional" },
    { query: "cannabis Sudáfrica", icon: "🌿", status: "legal" },
    { query: "apuestas Vietnam", icon: "🎰", status: "illegal" },
    { query: "cripto China", icon: "💼", status: "illegal" },
    { query: "apuestas deportivas EE.UU.", icon: "🎰", status: "conditional" },
    { query: "torrents Alemania", icon: "💻", status: "illegal" }
  ]
};

const STORAGE_KEY = 'searchFrequency';

function getSearchFrequency() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TrendingTopics({ onSearchClick }) {
  const { language, t } = useLanguage();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const pool = recommendedPool[language] || recommendedPool.en;
    const freq = getSearchFrequency();

    const userTopQueries = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([query]) => query);

    const userTopics = [];
    const usedQueries = new Set();

    for (const q of userTopQueries) {
      const match = pool.find((item) => item.query === q);
      if (match) {
        userTopics.push(match);
        usedQueries.add(q);
      }
    }

    const remaining = pool.filter((item) => !usedQueries.has(item.query));
    const shuffled = shuffle(remaining);
    const fill = shuffled.slice(0, 10 - userTopics.length);

    setTopics([...userTopics, ...fill]);
  }, [language]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'legal': return '#22c55e';
      case 'conditional': return '#eab308';
      case 'illegal': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const handleClick = (query) => {
    const freq = getSearchFrequency();
    freq[query] = (freq[query] || 0) + 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(freq));
    onSearchClick(query);
  };

  const title = topics.some((_, i) => i < 5 && getSearchFrequency()[topics[i]?.query])
    ? t.trending.personalTitle || t.trending.title
    : t.trending.title;

  return (
    <section className="trending-section" aria-label="Recommended topics">
      <div className="container">
        <h3 className="trending-title">{title}</h3>
        <div className="trending-scroll">
          {topics.map((item, index) => (
            <button
              key={index}
              className="trending-chip"
              onClick={() => handleClick(item.query)}
              aria-label={item.query}
            >
              <span className="trending-icon">{item.icon}</span>
              <span className="trending-text">{item.query}</span>
              <span
                className="trending-dot"
                style={{ backgroundColor: getStatusColor(item.status) }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingTopics;
