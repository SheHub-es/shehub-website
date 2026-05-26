"use client"

import IconHandHeart from "@/components/icons/IconHandHeart";
import IconRocket from "@/components/icons/IconRocket";
import IconCalendarCheck from "@/components/icons/IconCalendarCheck";
import IconUsers from "@/components/icons/IconUsers";
import FeaturesSection from "@/sections/shared/featuresSection/FeaturesSection";
import { useTranslation } from "@/hooks/useTranslation";

export default function WhyMentor() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('mentors.why.feature1.title'),
      description: t('mentors.why.feature1.description'),
      icon: IconHandHeart,
    },
    {
      title: t('mentors.why.feature2.title'),
      description: t('mentors.why.feature2.description'),
      icon: IconRocket,
    },
    {
      title: t('mentors.why.feature3.title'),
      description: t('mentors.why.feature3.description'),
      icon: IconCalendarCheck,
    },
    {
      title: t('mentors.why.feature4.title'),
      description: t('mentors.why.feature4.description'),
      icon: IconUsers,
    },
  ];

  return (
    <FeaturesSection
      id="why-mentor"
      title={
        <>
          {t('mentors.why.title.before')}{" "}
          <span className="text-primary">{t('mentors.why.title.highlight')}</span> {t('mentors.why.title.after')}
        </>
      }
      description={t('mentors.why.description')}
      features={features}
      gridCols={{ mobile: 1, tablet: 2, desktop: 4 }}
      button={{
        text: t('mentors.why.button'),
        variant: "secondary-primary",
        href: "/join",
      }}
      backgroundClassName="bg-purple-100"
      layout="left-aligned"
    />
  );
}
