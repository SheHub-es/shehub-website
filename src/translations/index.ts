import { authFormTranslations } from '@/translations/auth/authFormTranslations'
import { authSectionV1Translations } from '@/translations/auth/authSectionV1Translations'
import { authSectionV2Translations } from '@/translations/auth/authSectionV2Translations'
import { authTextV1Translations } from '@/translations/auth/authTextV1Translations'
import { authTextV2Translations } from '@/translations/auth/authTextV2Translations'
import { carouselV2Translations } from '@/translations/auth/carouselV2Translations'
import { loginFormTranslations } from '@/translations/auth/loginFormTranslations'
import { passwordIndicatorsTranslations } from '@/translations/auth/passwordIndicatorsTranslations'
import { passwordResetModalTranslations } from '@/translations/auth/passwordResetModalTranslations'
import { passwordResetTranslations } from '@/translations/auth/passwordResetTranslations'
import { registerFormTranslations } from '@/translations/auth/registerFormTranslations'
import { navigationMenuButtonTranslations } from '@/translations/layout/navbar/navigationMenuButtonTranslations'
import { navigationMenuTranslations } from '@/translations/layout/navbar/navigationMenuTranslations'
import { testTranslations } from '@/translations/testTranslations'
import type { TranslationObject } from '@/translations/types'

export const translations: TranslationObject = {
  ...testTranslations,
  ...navigationMenuTranslations,
  ...navigationMenuButtonTranslations,
  ...authFormTranslations,
  ...authTextV1Translations,
  ...authTextV2Translations,
  ...carouselV2Translations,
  ...passwordIndicatorsTranslations,
  ...passwordResetModalTranslations,
  ...authSectionV1Translations,
  ...authSectionV2Translations,
  ...loginFormTranslations,
  ...passwordResetTranslations,
  ...registerFormTranslations,
}

export type { Language } from '@/translations/types'

