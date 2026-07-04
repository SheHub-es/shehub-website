import EvolutionPageContent from '@/sections/evolution/EvolutionPageContent'
import { getLanguageFromCookies, getServerTranslation } from '@/lib/serverTranslation'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguageFromCookies()
  return {
    title: getServerTranslation(lang, 'evolution.metaTitle'),
    description: getServerTranslation(lang, 'evolution.metaDescription'),
  }
}

export default function EvolutionPage() {
  return <EvolutionPageContent />
}
