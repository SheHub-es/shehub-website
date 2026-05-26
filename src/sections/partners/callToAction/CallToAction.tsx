"use client"

import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout";
import { useTranslation } from "@/hooks/useTranslation";

export default function PartnersCallToAction() {
  const { t } = useTranslation();

  return (
    <CallToActionLayout
      title={t('partners.cta.title')}
      buttonText={t('partners.cta.button')}
      buttonHref="/join"
      buttonVariant="secondary-primary"
    />
  );
}
