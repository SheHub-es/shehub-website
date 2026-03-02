"use client";

import { translations, type Language } from '@/translations';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  startTransition,
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
  const scrollRestoreRef = useRef<{ x: number; y: number } | null>(null)

  // Sincronizar con localStorage solo en el primer mount; evitar re-render extra si ya es 'es'
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('language')
    const lang = (['es', 'en', 'ca'].includes(stored || '') ? stored : 'es') as Language
    document.documentElement.lang = lang
    if (lang !== 'es') setLanguageState(lang)
  }, [])

  // Restaurar scroll después de un cambio de idioma por el usuario (evita saltos)
  useEffect(() => {
    if (scrollRestoreRef.current) {
      const { x, y } = scrollRestoreRef.current
      scrollRestoreRef.current = null
      requestAnimationFrame(() => window.scrollTo(x, y))
    }
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window !== 'undefined') {
      scrollRestoreRef.current = { x: window.scrollX, y: window.scrollY }
    }
    startTransition(() => {
      setLanguageState(lang)
    })
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }, [])

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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
