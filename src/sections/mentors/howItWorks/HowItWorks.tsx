"use client"

import HowItWorksSection from "@/sections/shared/howItWorksSection/HowItWorksSection";
import { useTranslation } from "@/hooks/useTranslation";

export default function MentorsHowItWorks() {
  const { t } = useTranslation();

  const timelineData = [
    {
      date: t('mentors.timeline.step1.date'),
      title: t('mentors.timeline.step1.title'),
      description: t('mentors.timeline.step1.description'),
    },
    {
      date: t('mentors.timeline.step2.date'),
      title: t('mentors.timeline.step2.title'),
      description: t('mentors.timeline.step2.description'),
    },
    {
      date: t('mentors.timeline.step3.date'),
      title: t('mentors.timeline.step3.title'),
      description: t('mentors.timeline.step3.description'),
    },
    {
      date: t('mentors.timeline.step4.date'),
      title: t('mentors.timeline.step4.title'),
      description: t('mentors.timeline.step4.description'),
    },
  ];

  return (
    <HowItWorksSection
      eyebrow={t('mentors.howItWorks.eyebrow')}
      title={
        <>
          {t('mentors.howItWorks.title.before')}{"\n"}
          <span className="text-gradient-steps">{t('mentors.howItWorks.title.highlight')}</span>
        </>
      }
      description={t('mentors.howItWorks.description')}
      timelineData={timelineData}
      variant="alternate"
      backgroundClassName="bg-white"
    />
  );
}
