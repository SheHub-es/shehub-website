import { navigationMenuButtonTranslations } from '@/translations/navigation_menu_button_translations'
import { navigationMenuTranslations } from '@/translations/navigation_menu_translations'
import { testTranslations } from '@/translations/test_translations'
import type { TranslationObject } from '@/translations/types'

export const translations: TranslationObject = {
  ...testTranslations,
  ...navigationMenuTranslations,
  ...navigationMenuButtonTranslations
}

export type { Language } from '@/translations/types'

