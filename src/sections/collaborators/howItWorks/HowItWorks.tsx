"use client"

import HowItWorksSection from "@/sections/shared/howItWorksSection/HowItWorksSection";
import { useTranslation } from "@/hooks/useTranslation";

export default function HowItWorks() {
  const { t } = useTranslation();

  const timelineData = [
    {
      date: t('collaborators.timeline.step1.date'),
      title: t('collaborators.timeline.step1.title'),
      description: t('collaborators.timeline.step1.description'),
    },
    {
      date: t('collaborators.timeline.step2.date'),
      title: t('collaborators.timeline.step2.title'),
      description: t('collaborators.timeline.step2.description'),
    },
    {
      date: t('collaborators.timeline.step3.date'),
      title: t('collaborators.timeline.step3.title'),
      description: t('collaborators.timeline.step3.description'),
    },
    {
      date: t('collaborators.timeline.step4.date'),
      title: t('collaborators.timeline.step4.title'),
      description: t('collaborators.timeline.step4.description'),
    },
  ];

  return (
    <HowItWorksSection
      eyebrow={t('collaborators.howItWorks.eyebrow')}
      title={
        <>
          {t('collaborators.howItWorks.title.before')}{" "}
          <span className="text-black">{t('collaborators.howItWorks.title.middle')}</span>{" "}
          <span className="text-gradient-steps">{t('collaborators.howItWorks.title.highlight')}</span>
        </>
      }
      description={t('collaborators.howItWorks.description')}
      timelineData={timelineData}
      variant="alternate"
      backgroundClassName="bg-white"
    />
  );
}
