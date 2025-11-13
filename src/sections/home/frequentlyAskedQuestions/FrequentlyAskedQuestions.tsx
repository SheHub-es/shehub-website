import AccordionSection from '@/sections/home/frequentlyAskedQuestions/components/AccordionSection'
import ContactSection from '@/sections/home/frequentlyAskedQuestions/components/ContactSection'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'

export const FrequentlyAskedQuestions = () => {
  return (
    <SectionWrapper id="faq" className="gap-[80px] text-black flex flex-col items-center justify-center my-[24px]">
      <div className="w-[816px] h-[148px] gap-[24px] flex flex-col items-center justify-center">
        <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-900)] leading-[var(--spacing-line-height-heading-2)]">
          FAQs
        </h2>
        <h2 className="font-[var(--font-weight-default)] text-[length:var(--text-size-500)] leading-[var(--spacing-line-height-body-1)] text-center" style={{ fontFamily: 'var(--font-secondary)' }}>
          Welcome to our FAQ section, your place for quick, honest answers about how SheHub works, who it’s for, and how you can get involved.
        </h2>
      </div>
      <AccordionSection/>
      <ContactSection/>
    </SectionWrapper>
  )
}

export default FrequentlyAskedQuestions
