import SectionWrapper from '@/components/layout/SectionWrapper/SectionWrapper'
import Avatar from '@/components/ui/avatar'

export const HeroSection = () => {
  return (
    <SectionWrapper className='gap-20 grid min-h-[962px] bg-gray-100'>
        <div>HeroSection</div>
        <Avatar type="initials" size="xl" initials="SH" disabled/>
    </SectionWrapper>
  )
}

export default HeroSection



