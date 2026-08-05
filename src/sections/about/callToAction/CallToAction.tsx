"use client";

import { useTranslation } from "@/hooks/useTranslation";
import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout";

export const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <CallToActionLayout
      title={t('about.cta.title')}
      buttonText={t('about.cta.button')}
      buttonHref="/contact"
      buttonVariant="secondary-primary"
    />
  )
}

export default CallToAction
