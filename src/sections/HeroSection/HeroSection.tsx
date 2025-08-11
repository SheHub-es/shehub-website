import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper';
import ImageSection from '@/sections/HeroSection/elements/ImageSection';
import TextSection from '@/sections/HeroSection/elements/TextSection';

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="w-[1248px] h-[962px] flex flex-row gap-[80px] mt-10">
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
