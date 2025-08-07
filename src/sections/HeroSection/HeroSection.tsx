import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper';
import { Icon } from '@/components/ui/icon';
import { Globe, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="gap-20 grid min-h-[716px] text-black mt-10">
      <h2>Hero Section</h2>
      <Icon icon={Globe} size="lg" aria-label='Language selector' />
      <Icon icon={Linkedin} size="2xl" interactive onClick={() => alert ("Go to LinkedIn")}/>
    </SectionWrapper>
  )
}

export default HeroSection
