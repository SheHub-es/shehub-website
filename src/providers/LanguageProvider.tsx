"use client";

import { useCookieConsentContext } from '@/providers/CookieConsentProvider';
import { deleteCookie, setCookie } from '@/lib/cookies';
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

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export const LanguageProvider = ({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage ?? 'es')
  const scrollRestoreRef = useRef<{ x: number; y: number } | null>(null)
  const { consent, hasDecided } = useCookieConsentContext()

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.lang = language
    const stored = localStorage.getItem('language')
    const storedLang = (['es', 'en', 'ca'].includes(stored || '') ? stored : 'es') as Language
    if (initialLanguage === 'es' && storedLang !== 'es') {
      document.documentElement.lang = storedLang
      setLanguageState(storedLang)
    }
  }, [])

  useEffect(() => {
    if (scrollRestoreRef.current) {
      const { x, y } = scrollRestoreRef.current
      scrollRestoreRef.current = null
      requestAnimationFrame(() => window.scrollTo(x, y))
    }
  }, [language])

  useEffect(() => {
    if (typeof window === 'undefined' || !hasDecided) return
    if (consent.functional) {
      localStorage.setItem('language', language)
      setCookie('language', language, COOKIE_MAX_AGE)
    } else {
      localStorage.removeItem('language')
      deleteCookie('language')
    }
  }, [language, consent.functional, hasDecided])

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window !== 'undefined') {
      scrollRestoreRef.current = { x: window.scrollX, y: window.scrollY }
    }
    document.documentElement.lang = lang
    startTransition(() => {
      setLanguageState(lang)
    })
  }, [])

  const t = (key: string): string => {
    const translationObj = translations as Record<string, Record<string, string>>
    const langToUse = ['es', 'en', 'ca'].includes(language) ? language : 'es'

    if (translationObj[key]?.[langToUse]) return translationObj[key][langToUse]
    if (translationObj[key]?.['es']) return translationObj[key]['es']
    if (translationObj[key]?.['en']) return translationObj[key]['en']

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
