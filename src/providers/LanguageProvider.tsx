"use client";

import { translations, type Language } from '@/translations';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const stored = localStorage.getItem('language')
    const lang = (['es', 'en', 'ca'].includes(stored || '') ? stored : 'es') as Language
    setLanguageState(lang)
    document.documentElement.lang = lang
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const translationObj = translations as Record<string, Record<string, string>>
    const langToUse = ['es', 'en', 'ca'].includes(language) ? language : 'es'

    if (translationObj[key]?.[langToUse]) return translationObj[key][langToUse]
    if (translationObj[key]?.['es']) return translationObj[key]['es']

    console.warn(`⚠️ Missing translation for key: "${key}"`)
    return ''
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 🆕 Hook para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
