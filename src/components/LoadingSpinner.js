import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LoadingSpinner.css';

function LoadingSpinner() {
  const { t } = useLanguage();

  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="loading-message">{t.loading.title}</p>
      <div className="loading-steps">
        <div className="loading-step">🔍 {t.loading.analyzing}</div>
        <div className="loading-step">📚 {t.loading.searching}</div>
        <div className="loading-step">🤖 {t.loading.processing}</div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
