import React, { useState } from 'react';
import './CountryComparison.css';
import { lawsData } from '../data/lawsData';

function CountryComparison() {
  const [selectedTopic, setSelectedTopic] = useState('');

  // Get unique topics
  const topics = [...new Set(lawsData.map(law => law.topic))];

  // Filter laws by selected topic
  const filteredLaws = selectedTopic
    ? lawsData.filter(law => law.topic === selectedTopic)
    : [];

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

  const getStatusClass = (status) => {
    return `comparison-status status-${status}`;
  };

  return (
    <div className="country-comparison-section">
      <div className="container">
        <h2>Compare Laws Across Countries</h2>
        <p className="comparison-description">
          Select a topic to see how different countries regulate it
        </p>

        <div className="topic-selector">
          <label htmlFor="topic-select">Choose a topic:</label>
          <select
            id="topic-select"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="topic-dropdown"
          >
            <option value="">-- Select a topic --</option>
            {topics.map(topic => (
              <option key={topic} value={topic}>
                {topic.replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {filteredLaws.length > 0 && (
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Summary</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {filteredLaws.map(law => (
                  <tr key={law.id}>
                    <td className="country-cell">
                      <strong>{law.countryName}</strong>
                    </td>
                    <td className="status-cell">
                      <span className={getStatusClass(law.status)}>
                        <span className="status-icon">{getStatusIcon(law.status)}</span>
                        <span>{law.status}</span>
                      </span>
                    </td>
                    <td className="summary-cell">
                      {law.summary}
                    </td>
                    <td className="date-cell">
                      {law.updated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTopic && filteredLaws.length === 0 && (
          <div className="no-data">
            <p>No data available for this topic yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryComparison;
