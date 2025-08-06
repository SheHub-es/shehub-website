import SectionWrapper from '@/components/layout/SectionWrapper/SectionWrapper'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Avatar from '@/components/ui/avatar'

export const HeroSection = () => {
  return (
    <SectionWrapper className='gap-20 grid min-h-[962px] bg-gray-100'>
        <div>HeroSection</div>
        <Avatar type="initials" size="xl" initials="SH" />
        <div style={{display:'flex', gap: '10px'}}>
        <Accordion type='single' collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Accordion heading text that is so long it takes 2 lines
          </AccordionTrigger>
          <AccordionContent>
            Content section text Make sure accordion adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </SectionWrapper>
  )
}

export default HeroSection



