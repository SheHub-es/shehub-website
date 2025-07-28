import { navigationMenuTranslations } from '@/translations/navigation_menu_translations'
import { testTranslations } from '@/translations/test_translations'
import type { TranslationObject } from '@/translations/types'

export const translations: TranslationObject = {
  ...testTranslations,
  ...navigationMenuTranslations
}

export type { Language } from '@/translations/types'

