import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './CategoryBrowse.css';

const categoryConfig = {
  digital: { icon: '\uD83D\uDCBB' },
  drone: { icon: '\uD83D\uDE81' },
  gambling: { icon: '\uD83C\uDFB0' },
  substances: { icon: '\uD83C\uDF3F' },
  possessions: { icon: '\uD83D\uDD2A' },
  privacy: { icon: '\uD83D\uDCDE' },
  traffic: { icon: '\uD83D\uDE97' },
  business: { icon: '\uD83D\uDCBC' }
};

const categorySearchQueries = {
  digital: { ko: '중국 VPN', en: 'VPN China', ja: '中国 VPN', es: 'VPN China' },
  drone: { ko: '일본 드론', en: 'drone Japan', ja: '日本 ドローン', es: 'drones Japón' },
  gambling: { ko: '한국 온라인 도박', en: 'online gambling Korea', ja: '韓国 オンラインギャンブル', es: 'apuestas en línea Corea' },
  substances: { ko: '독일 대마초', en: 'cannabis Germany', ja: 'ドイツ 大麻', es: 'cannabis Alemania' },
  possessions: { ko: '영국 칼 규제', en: 'knife laws UK', ja: 'イギリス ナイフ法', es: 'leyes de cuchillos Reino Unido' },
  privacy: { ko: '미국 통화 녹음', en: 'recording calls USA', ja: 'アメリカ 通話録音', es: 'grabar llamadas EE.UU.' },
  traffic: { ko: '프랑스 음주운전', en: 'DUI limits France', ja: 'フランス 飲酒運転', es: 'límites de alcoholemia Francia' },
  business: { ko: '싱가포르 암호화폐', en: 'crypto regulations Singapore', ja: 'シンガポール 暗号通貨', es: 'regulaciones cripto Singapur' }
};

const categoryKeys = ['digital', 'drone', 'gambling', 'substances', 'possessions', 'privacy', 'traffic', 'business'];

function CategoryBrowse({ onCategoryClick }) {
  const { language, t } = useLanguage();

  const handleClick = (categoryKey) => {
    const query = categorySearchQueries[categoryKey][language] || categorySearchQueries[categoryKey].en;
    if (onCategoryClick) {
      onCategoryClick(query);
    }
  };

  return (
    <section className="category-browse">
      <div className="container">
        <h3 className="category-browse-title">{t.categories.title}</h3>
        <div className="category-grid">
          {categoryKeys.map((key) => (
            <button
              key={key}
              className="category-card"
              onClick={() => handleClick(key)}
              aria-label={t.categories[key].title}
            >
              <span className="category-icon">{categoryConfig[key].icon}</span>
              <h4 className="category-name">{t.categories[key].title}</h4>
              <p className="category-desc">{t.categories[key].description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryBrowse;
