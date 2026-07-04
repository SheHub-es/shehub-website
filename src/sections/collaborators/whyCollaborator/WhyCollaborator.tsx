"use client"

import IconEarth from "@/components/icons/IconEarth";
import IconHandHeart from "@/components/icons/IconHandHeart";
import IconMapPinHouse from "@/components/icons/IconMapPinHouse";
import IconRocket from "@/components/icons/IconRocket";
import FeaturesSection from "@/sections/shared/featuresSection/FeaturesSection";
import { useTranslation } from "@/hooks/useTranslation";

export default function WhyCollaborator() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('collaborators.why.feature1.title'),
      description: t('collaborators.why.feature1.description'),
      icon: IconRocket,
    },
    {
      title: t('collaborators.why.feature2.title'),
      description: t('collaborators.why.feature2.description'),
      icon: IconHandHeart,
    },
    {
      title: t('collaborators.why.feature3.title'),
      description: t('collaborators.why.feature3.description'),
      icon: IconMapPinHouse,
    },
    {
      title: t('collaborators.why.feature4.title'),
      description: t('collaborators.why.feature4.description'),
      icon: IconEarth,
    },
  ];

  return (
    <FeaturesSection
      id="why-collaborator"
      title={
        <>
          {t('collaborators.why.title.before')}{" "}
          <span className="text-primary">{t('collaborators.why.title.highlight')}</span> {t('collaborators.why.title.after')}
        </>
      }
      description={t('collaborators.why.description')}
      features={features}
      gridCols={{ mobile: 1, tablet: 2, desktop: 4 }}
      button={{
        text: t('collaborators.why.button'),
        variant: "secondary-primary",
        href: "/join",
      }}
      backgroundClassName="bg-purple-100"
      layout="left-aligned"
    />
  );
}
