'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { dictionary } from '@/data/content';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr');

  useEffect(() => {
    const saved = localStorage.getItem('zenthra_lang');
    if (saved && (saved === 'tr' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'tr' ? 'en' : 'tr';
    setLang(nextLang);
    localStorage.setItem('zenthra_lang', nextLang);
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
