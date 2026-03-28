"use client";

import { useTranslation } from "@/hooks/useTranslation";
import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout";

export const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <CallToActionLayout
      title={t('home.cta.title')}
      buttonText={t('home.cta.button')}
      buttonHref="/join"
      buttonVariant="secondary-primary"
    />
  )
}

export default CallToAction
