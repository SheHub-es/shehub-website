'use client';

import { useTranslation } from '@/hooks/useTranslation';
import HowItWorksSection from '@/sections/shared/howItWorksSection/HowItWorksSection';

export default function OurHistory() {
  const { t } = useTranslation();

  const timelineData = [
    {
      date: t('about.timeline.step1.date'),
      title: t('about.timeline.step1.title'),
      description: t('about.timeline.step1.description'),
    },
    {
      date: t('about.timeline.step2.date'),
      title: t('about.timeline.step2.title'),
      description: t('about.timeline.step2.description'),
    },
    {
      date: t('about.timeline.step3.date'),
      title: t('about.timeline.step3.title'),
      description: t('about.timeline.step3.description'),
    },
    {
      date: t('about.timeline.step4.date'),
      title: t('about.timeline.step4.title'),
      description: t('about.timeline.step4.description'),
    },
    {
      date: t('about.timeline.step5.date'),
      title: t('about.timeline.step5.title'),
      description: t('about.timeline.step5.description'),
    },
  ];

  return (
    <>
    <HowItWorksSection
      title={
        <>
          {t('about.timeline.title.before')}
          <span className="text-gradient-steps">{t('about.timeline.title.highlight')}</span>
        </>
      }
      timelineData={timelineData}
      variant="alternate"
    />
    <div
        className="
          flex flex-col
          items-center
          text-center
          gap-6
          px-4
          mx-auto
        "
      >
      <p className="font-secondary text-size-500 leading-line-height-body-1 font-heavy text-neutral-600">
        {t('about.timeline.present.label')}
      </p>
      <h2 className="font-primary text-size-700 leading-line-height-heading-4 font-heavy text-primary">
        {t('about.timeline.present.title')}
      </h2>
      <p className="font-secondary text-size-400 leading-line-height-body-2 text-black">
        {t('about.timeline.present.description')}
      </p>
    </div>
    </>
  );
}
