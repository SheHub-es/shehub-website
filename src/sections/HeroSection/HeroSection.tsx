import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Globe, Info, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="gap-20 grid min-h-[716px] text-black mt-10">
      <h2>Hero Section</h2>
      <Card
        type='nonClickableWithIcon'
        title='Este texto'
        description='Este texto es simulado para probar el elemento'
        icon={
          <Icon icon={Info} size="2xl" aria-label='Info icon'/>
        }
        color='lightPurple'
        />
    </SectionWrapper>
  )
}

export default HeroSection



