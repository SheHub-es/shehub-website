import SectionWrapper from '@/components/layout/sectionWrapper/SectionWrapper';
import ImageSection from '@/sections/hero/elements/ImageSection';
import TextSection from '@/sections/hero/elements/TextSection';

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="w-[1248px] h-[862px] flex flex-row gap-[80px] mt-10 ">
      <div className="flex-1">
        <TextSection/>
      </div>
      <div className="flex-1">
        <ImageSection/>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection
