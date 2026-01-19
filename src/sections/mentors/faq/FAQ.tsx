"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import ContactSection from "@/sections/home/frequentlyAskedQuestions/components/ContactSection";

interface FAQItem {
  header: string;
  text: string;
}

const faqItems: FAQItem[] = [
  {
    header: "Do I need to be a senior or team lead to mentor?",
    text: "Not at all. If you have 2+ years of experience in your tech role and want to support others, you're ready to mentor at SheHub.",
  },
  {
    header: "How much time do I need to commit?",
    text: "Most mentors dedicate 4-8 hours/week in an async format. You can mentor one cycle (2-3 months), pause, and return when it fits your schedule.",
  },
  {
    header: "Can I choose how to contribute?",
    text: "Yes. You can opt to be a standard mentor for one team, or a vertical lead supporting multiple teams with a strategic lens. It's your call.",
  },
  {
    header: "Is mentoring at SheHub paid?",
    text: "No—SheHub is a volunteer community. But you'll gain leadership experience, connect with peers, and see your impact in real time.",
  },
];

const AccordionBlock = () => {
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
  return (
    <SectionWrapper
      id="faq"
      className="flex flex-col items-center text-black py-28"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center text-center gap-6 max-w-[816px] px-4 mx-auto mb-16 md:mb-20">
        <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-900)] leading-[var(--spacing-line-height-heading-2)]">
          Still unsure?
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
          Here are quick answers to help you feel ready to lead your first SheHub team.
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
