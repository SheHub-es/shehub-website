import { navigationMenuButtonTranslations } from '@/translations/layout/navbar/navigationMenuButtonTranslations'
import { navigationMenuTranslations } from '@/translations/layout/navbar/navigationMenuTranslations'
import { testTranslations } from '@/translations/testTranslations'
import type { TranslationObject } from '@/translations/types'

export const translations: TranslationObject = {
  ...testTranslations,
  ...navigationMenuTranslations,
  ...navigationMenuButtonTranslations
}

export type { Language } from '@/translations/types'

