import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ErrorMessage.css';

function ErrorMessage({ message, onRetry }) {
  const { t } = useLanguage();

  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">{t.error.title}</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          {t.error.retry}
        </button>
      )}
      <div className="error-tips">
        <h4>{t.error.tips}</h4>
        <ul>
          <li>{t.error.tip1}</li>
          <li>{t.error.tip2}</li>
          <li>{t.error.tip3}</li>
        </ul>
      </div>
    </div>
  );
}

export default ErrorMessage;
