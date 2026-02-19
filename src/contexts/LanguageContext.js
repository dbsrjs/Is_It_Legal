// LanguageContext.js - 언어 상태 관리를 위한 React Context

import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // 브라우저 언어 감지 또는 로컬 스토리지에서 저장된 언어 불러오기
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    // 브라우저 언어 감지
    const browserLanguage = navigator.language.split('-')[0]; // 'ko-KR' -> 'ko'
    if (translations[browserLanguage]) {
      return browserLanguage;
    }

    // 기본값: 영어
    return 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  // 언어 변경 시 로컬 스토리지에 저장 및 동적 SEO 업데이트
  useEffect(() => {
    localStorage.setItem('language', language);

    // HTML lang 속성 업데이트
    document.documentElement.lang = language;

    // 동적 title 업데이트
    const t = translations[language];
    if (t && t.meta) {
      document.title = t.meta.title;

      // meta description 동적 업데이트
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', t.meta.description);
      }
    }
  }, [language]);

  // 현재 언어의 번역 가져오기
  const t = translations[language];

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
