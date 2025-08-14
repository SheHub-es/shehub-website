import styles from './impactSection.module.css';
import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper'
import { Card } from '@/components/ui/card'

const impactProps = [
  {
    title: "100+",
    description:
      "women joined the community in our first month"
  },
  {
    title: "3+",
    description:
      "active teams working across design, dev, product, and more"
  },
  {
    title: "760+",
    description:
      "hours invested by contributors in real workflows"
  },
  {
    title: "5+",
    description:
      "interviews landed by contributors in our first month"
  }
]

export const ImpactSection = () => {
  return (
    <SectionWrapper id="our-impact" className='flex flex-col py-24 gap-16 bg-primary'>
      <div className='flex flex-col justify-center items-center gap-4' >
        <h2 className='text-white text-size-900 font-bold font-primary '>Our Impact So Far</h2>
        <p className='font-secondary text-size-500 leading-line-height-body-1 text-white'>
          SheHub is already helping women build confidence, portfolios and real experience.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-[1.94rem] justify-center'>
        {impactProps.map((item, index) => (
          <Card
            key={index}
            type='nonClickable'
            title={item.title}
            description={item.description}
            color='white'
            radius='lg'
            className={styles.impactCard}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ImpactSection
