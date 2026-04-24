import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SearchResults.css';

function SearchResults({ results, query }) {
  const { t } = useLanguage();

  if (!results || results.length === 0) {
    return (
      <div className="search-results-container">
        <div className="no-results">
          <h3>"{query}" {t.results.noResults}</h3>
          <p>{t.results.noResultsTip}</p>
        </div>
      </div>
    );
  }

  const getStatusGlyph = (status) => {
    switch (status) {
      case 'legal':
        return '✓';
      case 'conditional':
        return '!';
      case 'illegal':
        return '×';
      default:
        return '?';
    }
  };

  const getStatusText = (status) => {
    return t.status[status] || t.status.unclear;
  };

  return (
    <div className="search-results-container">
      <div className="results-grid">
        {results.map((law) => (
          <article key={law.id} className="result-card">
            <div className="result-meta-top">
              {law.countryName && <span>{law.countryName}</span>}
              {law.category && (
                <>
                  <span className="sep">·</span>
                  <span className="meta-category">{law.category}</span>
                </>
              )}
              {law.updated && (
                <>
                  <span className="sep">·</span>
                  <span>{t.details.updated} {law.updated}</span>
                </>
              )}
            </div>

            <h2 className="result-title serif">
              {law.topicName}{law.countryName ? ` · ${law.countryName}` : ''}
            </h2>

            <div className={`verdict verdict-${law.status}`}>
              <div className="verdict-icon" aria-hidden="true">
                {getStatusGlyph(law.status)}
              </div>
              <div className="verdict-body">
                <div className="verdict-label">{getStatusText(law.status)}</div>
                <div className="verdict-summary">{law.summary}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
