'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import HowItWorksSection from '@/sections/shared/howItWorksSection/HowItWorksSection';

export default function OurHistory() {
  const { t } = useTranslation();
  const timelineWrapperRef = useRef<HTMLDivElement>(null);

  const timelineLabel = `${t('about.timeline.title.before')} ${t('about.timeline.title.highlight')}`.trim();

  useEffect(() => {
    const list = timelineWrapperRef.current?.querySelector('[role="list"]');
    list?.setAttribute('aria-label', timelineLabel);
  }, [timelineLabel]);

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
    {
      date: t('about.timeline.present.label'),
      title: t('about.timeline.present.title'),
      description: t('about.timeline.present.description'),
      variant: 'final' as const,
    },
  ];

  return (
    <div ref={timelineWrapperRef} className="-mb-16">
      <HowItWorksSection
        title={
          <>
            {t('about.timeline.title.before')}
            <span className="text-gradient-steps">{t('about.timeline.title.highlight')}</span>
          </>
        }
        timelineData={timelineData}
        variant="alternate"
        revealOnScroll={true}
        centerAlign={true}
        mobileLeftLine={true}
      />
    </div>
  );
}
