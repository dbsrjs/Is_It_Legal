import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ message = 'Searching legal information...' }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="loading-message">{message}</p>
      <div className="loading-steps">
        <div className="loading-step">🔍 Analyzing your query...</div>
        <div className="loading-step">📚 Searching official sources...</div>
        <div className="loading-step">🤖 Processing legal information...</div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
