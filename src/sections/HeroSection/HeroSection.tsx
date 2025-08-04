import SectionWrapper from '@/components/layout/SectionWrapper/SectionWrapper'
import Avatar from '@/components/ui/avatar'
import ImagePlaceholder from '@/components/ui/image-placeholders'

export const HeroSection = () => {
  return (
    <SectionWrapper className='gap-20 grid min-h-[962px] bg-gray-100'>
        <div>HeroSection</div>
        <Avatar type="initials" size="xl" initials="SH" disabled/>
        <div style={{display:'flex', gap: '10px'}}>
        <ImagePlaceholder size="sm" corner="topRight" loading />
        <ImagePlaceholder size="sm" corner="bottomLeft" imageUrl='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d' />
    </div>
    </SectionWrapper>
  )
}

export default HeroSection



