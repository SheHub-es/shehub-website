import { navigationMenuButtonTranslations } from '@/translations/layout/navbar/navigationMenuButtonTranslations'
import { navigationMenuTranslations } from '@/translations/layout/navbar/navigationMenuTranslations'
import { testTranslations } from '@/translations/testTranslations'
import type { TranslationObject } from '@/translations/types'
import { authTextV1Translations } from '@/translations/auth/authTextV1Translations' 
import { authFormV1Translations } from '@/translations/auth/authFormV1Translations'

export const translations: TranslationObject = {
  ...testTranslations,
  ...navigationMenuTranslations,
  ...navigationMenuButtonTranslations
,  ...authTextV1Translations
,  ...authFormV1Translations
}

export type { Language } from '@/translations/types'

