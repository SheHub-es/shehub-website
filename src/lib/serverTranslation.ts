import { cookies } from 'next/headers'
import { translations } from '@/translations'
import type { Language } from '@/translations/types'

const LANGS: Language[] = ['es', 'en', 'ca']

export async function getLanguageFromCookies(): Promise<Language> {
  const raw = (await cookies()).get('language')?.value
  return LANGS.includes(raw as Language) ? (raw as Language) : 'es'
}

export function getServerTranslation(lang: Language, key: string): string {
  const entry = (translations as Record<string, Record<Language, string> | undefined>)[key]
  if (!entry) return ''
  return entry[lang] ?? entry.es ?? ''
}
