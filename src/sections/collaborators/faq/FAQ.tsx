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
    header: "Do I need professional experience to join?",
    text: "No, you don't need professional experience. SheHub is designed for women who are transitioning into tech, whether from bootcamps, self-taught backgrounds, or career changes. What matters most is your willingness to learn, collaborate, and contribute to real projects.",
  },
  {
    header: "What kind of roles can I join as?",
    text: "You can join as a contributor in various roles including product management, UX/UI design, development (frontend, backend, full-stack), data analysis, QA testing, or marketing. We match you with projects based on your interests and skills.",
  },
  {
    header: "How much time do I need to commit?",
    text: "Projects are designed to be part-time and flexible, typically requiring 8-12 hours per week. All work is remote, so you can fit it around your job, studies, or personal responsibilities.",
  },
  {
    header: "Will I get mentorship and feedback?",
    text: "Yes! Every team has experienced mentors who provide guidance, feedback, and support throughout your project. You'll also have access to the SheHub community for networking and peer support.",
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

export default function CollaboratorsFAQ() {
  return (
    <SectionWrapper
      id="faq"
      className="flex flex-col items-center gap-16 md:gap-20 text-black py-28"
    >
      {/* HEADER */}
      <div className="flex flex-col items-center text-center gap-6 max-w-[816px] px-4 mx-auto">
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
          These quick answers will help to feel ready to join your first SheHub
          team.
        </p>
      </div>

      {/* ACCORDION */}
      <div className="w-full max-w-[650px] px-4 mx-auto mb-10 md:mb-20">
        <AccordionBlock />
      </div>

      {/* CONTACT */}
      <ContactSection />
    </SectionWrapper>
  );
}
