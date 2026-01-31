import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
      <div className="error-tips">
        <h4>Tips:</h4>
        <ul>
          <li>Make sure you include both a topic and country (e.g., "drone Japan")</li>
          <li>Check your internet connection</li>
          <li>Try rephrasing your search query</li>
        </ul>
      </div>
    </div>
  );
}

export default ErrorMessage;
