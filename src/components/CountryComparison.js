import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './CountryComparison.css';

function CountryComparison({ comparisons, loading }) {
  const { t } = useLanguage();

  const getStatusText = (status) => {
    return t.status[status] || t.status.unclear;
  };

  if (loading) {
    return (
      <div className="country-comparison-section">
        <div className="container">
          <h2 className="comparison-title serif">{t.comparison.title}</h2>
          <div className="comparison-grid">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="comparison-card comparison-skeleton">
                <div className="comparison-col-country">
                  <div className="skeleton-line skeleton-country" />
                </div>
                <div className="comparison-col-badge">
                  <div className="skeleton-circle" />
                  <div className="skeleton-line skeleton-badge" />
                </div>
                <div className="comparison-col-summary">
                  <div className="skeleton-line skeleton-text" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!comparisons || comparisons.length === 0) {
    return null;
  }

  return (
    <div className="country-comparison-section">
      <div className="container">
        <h2 className="comparison-title serif">{t.comparison.title}</h2>

        <div className="comparison-grid">
          {comparisons.map((item, index) => (
            <div key={index} className={`comparison-card comparison-card-${item.status}`}>
              <div className="comparison-col-country">
                <span className="comparison-country">{item.country}</span>
              </div>
              <div className="comparison-col-badge">
                <span className={`comparison-badge status-${item.status}`}>
                  {getStatusText(item.status)}
                </span>
              </div>
              <div className="comparison-col-summary">
                {item.summary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryComparison;
