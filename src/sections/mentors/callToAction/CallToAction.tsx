"use client"

import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout";
import { useTranslation } from "@/hooks/useTranslation";

export default function MentorsCallToAction() {
  const { t } = useTranslation();

  return (
    <CallToActionLayout
      title={t('mentors.cta.title')}
      buttonText={t('mentors.cta.button')}
      buttonHref="/join"
      buttonVariant="secondary-primary"
    />
  );
}
