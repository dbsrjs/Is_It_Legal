import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './RelatedSearches.css';

function RelatedSearches({ searches, onSearchClick, loading }) {
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="related-section">
        <div className="container">
          <h3 className="related-title">{t.relatedSearches.title}</h3>
          <div className="related-buttons">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="related-btn related-skeleton">
                <div className="skeleton-line" style={{ width: `${80 + i * 20}px`, height: '14px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!searches || searches.length === 0) {
    return null;
  }

  return (
    <div className="related-section">
      <div className="container">
        <h3 className="related-title">{t.relatedSearches.title}</h3>
        <div className="related-buttons">
          {searches.map((query, index) => (
            <button
              key={index}
              className="related-btn"
              onClick={() => onSearchClick(query)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedSearches;