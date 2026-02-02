import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LawDetails.css';

function LawDetails({ laws }) {
  const { t } = useLanguage();

  if (!laws || laws.length === 0) {
    return null;
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'legal':
        return '🟢';
      case 'conditional':
        return '🟡';
      case 'illegal':
        return '🔴';
      default:
        return '⚫';
    }
  };

  const getStatusText = (status) => {
    return t.status[status] || t.status.unclear;
  };

  return (
    <div className="law-details-section">
      <div className="container">
        <h2 className="details-section-title">{t.details.title}</h2>

        {laws.map((law) => (
          <div key={law.id} id={`law-${law.id}`} className="law-detail-card">
            <div className="detail-header">
              <div>
                <h3 className="detail-title">
                  {law.topicName} {t.results.in} {law.countryName}
                </h3>
                <div className="detail-status">
                  <span className="status-icon-large">{getStatusIcon(law.status)}</span>
                  <span className="status-text-large">{getStatusText(law.status)}</span>
                </div>
              </div>
            </div>

            <div className="detail-summary">
              <h4>{t.details.summary}</h4>
              <p>{law.summary}</p>
            </div>

            <div className="detail-content">
              <h4>{t.details.details}</h4>
              <p>{law.details}</p>
            </div>

            {law.conditions && law.conditions.length > 0 && (
              <div className="detail-conditions">
                <h4>{t.details.conditions}</h4>
                <ul>
                  {law.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="detail-penalties">
              <h4>{t.details.penalties}</h4>
              <p className="penalties-text">{law.penalties}</p>
            </div>

            <div className="detail-sources">
              <h4>{t.details.sources}</h4>
              <ul className="sources-list">
                {law.sources.map((source, index) => (
                  <li key={index}>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-footer">
              <div className="detail-meta">
                <span className="category-badge">{law.category}</span>
                <span className="last-updated">{t.details.updated} {law.updated}</span>
              </div>
              <div className="disclaimer-box">
                <strong>{t.details.disclaimer}:</strong> {t.details.disclaimerText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LawDetails;
