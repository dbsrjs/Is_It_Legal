import React from 'react';
import './SearchResults.css';

function SearchResults({ results, query }) {
  if (!results || results.length === 0) {
    return (
      <div className="search-results-container">
        <div className="no-results">
          <h3>No results found for "{query}"</h3>
          <p>Try different keywords or check the spelling</p>
        </div>
      </div>
    );
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

  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  return (
    <div className="search-results-container">
      <div className="results-header">
        <h2>Search Results for "{query}"</h2>
        <p className="results-count">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
      </div>

      <div className="results-grid">
        {results.map((law) => (
          <div key={law.id} className="result-card">
            <div className="result-header">
              <div className="result-title">
                <h3>{law.topicName} in {law.countryName}</h3>
              </div>
              <div className={getStatusClass(law.status)}>
                <span className="status-icon">{getStatusIcon(law.status)}</span>
                <span className="status-text">{getStatusText(law.status)}</span>
              </div>
            </div>

            <p className="result-summary">{law.summary}</p>

            <div className="result-details">
              <button
                className="view-details-btn"
                onClick={() => {
                  // Scroll to detailed view
                  const detailsSection = document.getElementById(`law-${law.id}`);
                  if (detailsSection) {
                    detailsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Full Details →
              </button>
            </div>

            <div className="result-meta">
              <span className="category-tag">{law.category}</span>
              <span className="update-date">Updated: {law.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
