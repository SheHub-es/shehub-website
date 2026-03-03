"use client";

import AccordionSection from '@/sections/home/frequentlyAskedQuestions/components/AccordionSection'
import ContactSection from '@/sections/home/frequentlyAskedQuestions/components/ContactSection'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import { useTranslation } from '@/hooks/useTranslation'

export const FrequentlyAskedQuestions = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      id="faq"
      className="
        flex flex-col 
        items-center 
        gap-16 
        md:gap-20 
        text-black
        py-28
      "
    >
      {/* HEADER */}
      <div
        className="
          flex flex-col 
          items-center 
          text-center
          gap-6
          max-w-[816px]
          px-4
          mx-auto
        "
      >
        <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-900)] leading-[var(--spacing-line-height-heading-2)]">
          {t('home.faq.title')}
        </h2>

        <h2
          className="
            font-[var(--font-weight-default)] 
            text-[length:var(--text-size-500)] 
            leading-[var(--spacing-line-height-body-1)] 
            text-center mb-10 md:mb-20
          "
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          {t('home.faq.intro')}
        </h2>
      </div>

      {/* ACCORDION */}
      <div className="w-full max-w-[650px] px-4 mx-auto mb-10 md:mb-20">
        <AccordionSection />
      </div>

      {/* CONTACT */}
      <ContactSection />
    </SectionWrapper>
  )
}

export default FrequentlyAskedQuestions
