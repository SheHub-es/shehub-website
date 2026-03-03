"use client";

import { Card } from '@/components/ui/Card'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import { useTranslation } from '@/hooks/useTranslation'

const IMPACT_TITLES = ['100+', '3+', '760+', '5+'];
const IMPACT_KEYS = ['home.impact.stat1', 'home.impact.stat2', 'home.impact.stat3', 'home.impact.stat4'] as const;

export const Impact = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      id="our-impact"
      className="flex flex-col bg-primary py-16 md:py-20 lg:py-24"
    >
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 text-center">
        <h2 className="text-white text-size-800 md:text-size-900 font-bold tracking-tight font-primary">
          {t('home.impact.title')}
        </h2>

        <p className="font-secondary text-size-400 md:text-size-500 leading-line-height-body-1 text-white">
          {t('home.impact.subtitle')}
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          grid 
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6 
          md:gap-8 
          lg:gap-10
          mt-10
          md:px-3
          justify-items-center
        "
      >
        {IMPACT_TITLES.map((title, index) => (
          <Card
            key={index}
            type="nonClickable"
            title={title}
            description={t(IMPACT_KEYS[index])}
            color="white"
            radius="lg"
            tone="impact"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Impact
