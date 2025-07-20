export type Language = 'es' | 'en' | 'ca'

export type TranslationObject = {
  [key: string]: {
    es: string
    en: string
    ca: string
  }
}
