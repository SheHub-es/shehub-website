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
import { waitlistTranslations } from '@/translations/auth/waitlistTranslations'
import { copyEmailTranslations } from '@/translations/layout/copyEmailTranslations'
import { navigationMenuButtonTranslations } from '@/translations/layout/navbar/navigationMenuButtonTranslations'
import { navigationMenuTranslations } from '@/translations/layout/navbar/navigationMenuTranslations'
import { evolutionTranslations } from '@/translations/evolution/evolutionTranslations'
import { homeTranslations } from '@/translations/home/homeTranslations'
import { underConstructionTranslations } from '@/translations/layout/underConstructionTranslations'
import { testTranslations } from '@/translations/testTranslations'
import type { TranslationObject } from '@/translations/types'

export const translations: TranslationObject = {
  ...testTranslations,
  ...homeTranslations,
  ...evolutionTranslations,
  ...navigationMenuTranslations,
  ...navigationMenuButtonTranslations,
  ...copyEmailTranslations,
  ...underConstructionTranslations,
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
  ...waitlistTranslations,
}

export type { Language } from '@/translations/types'

