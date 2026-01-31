import React from 'react';
import './LawDetails.css';

function LawDetails({ laws }) {
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
    switch (status) {
      case 'legal':
        return 'Legal';
      case 'conditional':
        return 'Conditional';
      case 'illegal':
        return 'Illegal';
      default:
        return 'Unclear';
    }
  };

  return (
    <div className="law-details-section">
      <div className="container">
        <h2 className="details-section-title">Detailed Information</h2>

        {laws.map((law) => (
          <div key={law.id} id={`law-${law.id}`} className="law-detail-card">
            <div className="detail-header">
              <div>
                <h3 className="detail-title">
                  {law.topicName} in {law.countryName}
                </h3>
                <div className="detail-status">
                  <span className="status-icon-large">{getStatusIcon(law.status)}</span>
                  <span className="status-text-large">{getStatusText(law.status)}</span>
                </div>
              </div>
            </div>

            <div className="detail-summary">
              <h4>Summary</h4>
              <p>{law.summary}</p>
            </div>

            <div className="detail-content">
              <h4>Details</h4>
              <p>{law.details}</p>
            </div>

            {law.conditions && law.conditions.length > 0 && (
              <div className="detail-conditions">
                <h4>Conditions & Requirements</h4>
                <ul>
                  {law.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="detail-penalties">
              <h4>Penalties</h4>
              <p className="penalties-text">{law.penalties}</p>
            </div>

            <div className="detail-sources">
              <h4>Official Sources</h4>
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
                <span className="last-updated">Last updated: {law.updated}</span>
              </div>
              <div className="disclaimer-box">
                <strong>Disclaimer:</strong> This information is for general guidance only and
                should not be considered legal advice. Laws may change. Always consult official
                sources or a legal professional for specific situations.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LawDetails;
