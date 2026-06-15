"use client"

import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout";
import { useTranslation } from "@/hooks/useTranslation";

export default function CollaboratorsCallToAction() {
  const { t } = useTranslation();

  return (
    <CallToActionLayout
      title={t('collaborators.cta.title')}
      buttonText={t('collaborators.cta.button')}
      buttonHref="/join"
      buttonVariant="secondary-primary"
    />
  );
}
