"use client";

import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout"
import { useTranslation } from "@/hooks/useTranslation"

export const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <CallToActionLayout
      title={t('home.cta.title')}
      buttonText={t('home.cta.button')}
      buttonHref="/auth"
      buttonVariant="secondary-primary"
    />
  )
}

export default CallToAction
