"use client";

import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import { useTranslation } from '@/hooks/useTranslation'

export const Purpose = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      id="purpose"
      className="flex flex-col bg-primary py-16 md:py-20 lg:py-24"
    >
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 text-center">
        <h2 className="text-white text-size-800 md:text-size-900 font-bold tracking-tight font-primary">
          {t('about.purpose.title')}
        </h2>

        <p className="font-secondary text-size-400 md:text-size-500 leading-line-height-body-1 text-white">
          {t('about.purpose.desc1')}
        </p>
        <p className="font-secondary text-size-400 md:text-size-500 leading-line-height-body-1 text-white">
          {t('about.purpose.desc2')}
        </p>
      </div>
    </SectionWrapper>
  )
}

export default Purpose;
