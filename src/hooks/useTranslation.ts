import { LanguageContext } from '@/components/providers/LanguageProvider'
import { useContext } from 'react'

export const useTranslation = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }

  return {
    t: context.t,
  }
}
