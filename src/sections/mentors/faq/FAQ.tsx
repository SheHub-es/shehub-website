"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import ContactSection from "@/sections/home/frequentlyAskedQuestions/components/ContactSection";
import { useTranslation } from "@/hooks/useTranslation";

const AccordionBlock = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      header: t('mentors.faq.item1.header'),
      text: t('mentors.faq.item1.text'),
    },
    {
      header: t('mentors.faq.item2.header'),
      text: t('mentors.faq.item2.text'),
    },
    {
      header: t('mentors.faq.item3.header'),
      text: t('mentors.faq.item3.text'),
    },
    {
      header: t('mentors.faq.item4.header'),
      text: t('mentors.faq.item4.text'),
    },
  ];

  return (
    <Accordion type="multiple" className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.header}</AccordionTrigger>
          <AccordionContent>{item.text}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default function MentorsFAQ() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      id="faq"
      className="flex flex-col items-center text-black py-28"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center text-center gap-6 max-w-[816px] px-4 mx-auto mb-16 md:mb-20">
        <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-900)] leading-[var(--spacing-line-height-heading-2)]">
          {t('mentors.faq.title')}
        </h2>

        <p
          className="
            font-[var(--font-weight-default)]
            text-[length:var(--text-size-500)]
            leading-[var(--spacing-line-height-body-1)]
            text-center
          "
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          {t('mentors.faq.description')}
        </p>
      </div>

      {/* ACCORDION */}
      <div className="w-full max-w-[800px] px-4 mx-auto mb-16 md:mb-20">
        <AccordionBlock />
      </div>

      {/* CONTACT */}
      <ContactSection />
    </SectionWrapper>
  );
}
