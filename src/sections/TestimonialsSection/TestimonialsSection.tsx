import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper'
import { Testimonials, TestimonialsCard } from '@/sections/TestimonialsSection/elements/TestimonialCard'
import MartaImg from '@/assets/images/Marta-V-avatar.png'
import LauraImg from '@/assets/images/Laura-Gracia-avatar.png'

const testimonialsData: Testimonials[] = [
  {
    id: '1',
    image: MartaImg,
    name:'Marta V., Collaborator',
    quote:'"Before SheHub, I felt stuck between theory and the real world. Working on an actual product with a supportive team and a mentor who challenged me changed everything. I finally feel ready — and confident — to apply for jobs in tech."',
    role: 'UX/UI Designer'
  },
  {
    id: '2',
    image: LauraImg,
    name: 'Laura Gracia, Mentor',
    quote:
      '"Being a mentor at SheHub has been one of the most fulfilling experiences in my career. Watching contributors grow, gain confidence, and land their first tech roles — while I honed my own leadership skills — reminded me why I love this industry."',
    role: 'Project Manager / Team Lead',
  }
]

export const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className='bg-background-light gap-20 flex flex-col items-center py-14'>
      <section className='flex flex-col gap-6'>
        <div className='font-primary text-center self-stretch font-heavy leading-line-height-heading-2 text-size-900'>
          <h2 className='text-black'>Because when you build with us,</h2>
          <h2 className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--color-gradient-brand)' }} >you build for change</h2>
        </div>
        <p className='font-secondary text-center self-stretch text-size-500 text-black leading-line-height-body-1'>
          At SheHub we empower women who want to build their career in tech
        </p>
      </section>
      <div className='grid grid-cols-2 gap-20'>
        {testimonialsData.map((testimonial) => (
      <TestimonialsCard
      key={testimonial.id}
      testimonial={testimonial} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default TestimonialsSection
