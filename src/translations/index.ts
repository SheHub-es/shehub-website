import { aboutTranslations } from '@/translations/about/aboutTranslations';
import { authFormTranslations } from '@/translations/auth/authFormTranslations';
import { authSectionV1Translations } from '@/translations/auth/authSectionV1Translations';
import { authSectionV2Translations } from '@/translations/auth/authSectionV2Translations';
import { authTextV1Translations } from '@/translations/auth/authTextV1Translations';
import { authTextV2Translations } from '@/translations/auth/authTextV2Translations';
import { carouselV2Translations } from '@/translations/auth/carouselV2Translations';
import { loginFormTranslations } from '@/translations/auth/loginFormTranslations';
import { passwordIndicatorsTranslations } from '@/translations/auth/passwordIndicatorsTranslations';
import { passwordResetModalTranslations } from '@/translations/auth/passwordResetModalTranslations';
import { passwordResetTranslations } from '@/translations/auth/passwordResetTranslations';
import { registerFormTranslations } from '@/translations/auth/registerFormTranslations';
import { waitlistTranslations } from '@/translations/auth/waitlistTranslations';
import { collaboratorsTranslations } from '@/translations/collaborators/collaboratorsTranslations';
import { contactTranslations } from '@/translations/contact/contactTranslations';
import { evolutionTranslations } from '@/translations/evolution/evolutionTranslations';
import { homeTranslations } from '@/translations/home/homeTranslations';
import { cookieBannerTranslations } from '@/translations/layout/cookieBannerTranslations';
import { copyEmailTranslations } from '@/translations/layout/copyEmailTranslations';
import { footerTranslations } from '@/translations/layout/footerTranslations';
import { navigationMenuButtonTranslations } from '@/translations/layout/navbar/navigationMenuButtonTranslations';
import { navigationMenuTranslations } from '@/translations/layout/navbar/navigationMenuTranslations';
import { underConstructionTranslations } from '@/translations/layout/underConstructionTranslations';
import { mentorsTranslations } from '@/translations/mentors/mentorsTranslations';
import { partnersTranslations } from '@/translations/partners/partnersTranslations';
import { testTranslations } from '@/translations/testTranslations';
import type { TranslationObject } from '@/translations/types';

export const translations: TranslationObject = {
  ...testTranslations,
  ...homeTranslations,
  ...evolutionTranslations,
  ...aboutTranslations,
  ...collaboratorsTranslations,
  ...contactTranslations,
  ...partnersTranslations,
  ...mentorsTranslations,
  ...navigationMenuTranslations,
  ...navigationMenuButtonTranslations,
  ...copyEmailTranslations,
  ...footerTranslations,
  ...underConstructionTranslations,
  ...cookieBannerTranslations,
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
};

export type { Language } from '@/translations/types';
