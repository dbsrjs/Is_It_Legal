import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './RecentSearches.css';

function RecentSearches({ searches, onSearchClick, onRemove, onClearAll }) {
  const { t } = useLanguage();

  if (!searches || searches.length === 0) {
    return null;
  }

  return (
    <div className="recent-searches">
      <div className="recent-searches-header">
        <span className="recent-searches-title">{t.recentSearches.title}</span>
        <button className="recent-clear-all" onClick={onClearAll}>
          {t.recentSearches.clearAll}
        </button>
      </div>
      <div className="recent-searches-chips">
        {searches.map((query, index) => (
          <div key={index} className="recent-chip">
            <button
              className="recent-chip-text"
              onClick={() => onSearchClick(query)}
            >
              {query}
            </button>
            <button
              className="recent-chip-remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(query);
              }}
              aria-label="Remove"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
