"use client"

import IconCalendarCheck from "@/components/icons/IconCalendarCheck";
import IconHeartHandshake from "@/components/icons/IconHeartHandshake";
import IconRocket from "@/components/icons/IconRocket";
import IconUsers from "@/components/icons/IconUsers";
import FeaturesSection from "@/sections/shared/featuresSection/FeaturesSection";
import { useTranslation } from "@/hooks/useTranslation";

export default function WhyPartner() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('partners.why.feature1.title'),
      description: t('partners.why.feature1.description'),
      icon: IconHeartHandshake,
    },
    {
      title: t('partners.why.feature2.title'),
      description: t('partners.why.feature2.description'),
      icon: IconRocket,
    },
    {
      title: t('partners.why.feature3.title'),
      description: t('partners.why.feature3.description'),
      icon: IconCalendarCheck,
    },
    {
      title: t('partners.why.feature4.title'),
      description: t('partners.why.feature4.description'),
      icon: IconUsers,
    },
  ];

  return (
    <FeaturesSection
      id="why-partner"
      title={
        <>
          {t('partners.why.title.before')} <span className="text-primary">{t('partners.why.title.highlight')}</span> {t('partners.why.title.after')}
        </>
      }
      description={t('partners.why.description')}
      features={features}
      gridCols={{ mobile: 1, tablet: 2, desktop: 4 }}
      button={{
        text: t('partners.why.button'),
        variant: "secondary-primary",
        href: "/contact",
      }}
      backgroundClassName="bg-purple-100"
      layout="left-aligned"
    />
  );
}
