import { LanguageContext } from '@/components/providers/language-provider'
import { useContext } from 'react'

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return {
    language: context.language,
    setLanguage: context.setLanguage,
  }
}
