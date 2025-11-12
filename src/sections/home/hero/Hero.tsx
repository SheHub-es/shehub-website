import ImageSection from '@/sections/home/hero/components/ImageSection';
import TextSection from '@/sections/home/hero/components/TextSection';
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper';

const Hero = () => {
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

export default Hero
