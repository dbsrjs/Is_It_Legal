import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './CountryComparison.css';

function CountryComparison({ comparisons }) {
  const { t } = useLanguage();

  if (!comparisons || comparisons.length === 0) {
    return null;
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'legal':
        return '\uD83D\uDFE2';
      case 'conditional':
        return '\uD83D\uDFE1';
      case 'illegal':
        return '\uD83D\uDD34';
      default:
        return '\u26AB';
    }
  };

  const getStatusText = (status) => {
    return t.status[status] || t.status.unclear;
  };

  return (
    <div className="country-comparison-section">
      <div className="container">
        <h2 className="comparison-title">{t.comparison.title}</h2>
        <p className="comparison-description">{t.comparison.description}</p>

        <div className="comparison-grid">
          {comparisons.map((item, index) => (
            <div key={index} className={`comparison-card comparison-card-${item.status}`}>
              <div className="comparison-card-header">
                <span className="comparison-icon">{getStatusIcon(item.status)}</span>
                <div>
                  <h4 className="comparison-country">{item.country}</h4>
                  <span className={`comparison-badge status-${item.status}`}>
                    {getStatusText(item.status)}
                  </span>
                </div>
              </div>
              <p className="comparison-summary">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryComparison;
