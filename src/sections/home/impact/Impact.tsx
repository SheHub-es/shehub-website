import { Card } from '@/components/ui/Card'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'

const impactProps = [
  {
    title: "100+",
    description: "Women joined the community in our first month"
  },
  {
    title: "3+",
    description: "Active teams working across design, dev, product, and more"
  },
  {
    title: "760+",
    description: "Hours invested by contributors in real workflows"
  },
  {
    title: "5+",
    description: "Interviews landed by contributors in our first month"
  }
]

export const Impact = () => {
  return (
    <SectionWrapper
      id="our-impact"
      className="flex flex-col bg-primary py-16 md:py-20 lg:py-24"
    >
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 text-center px-4">
        <h2 className="text-white text-size-800 md:text-size-900 font-bold font-primary">
          Our Impact So Far
        </h2>

        <p className="font-secondary text-size-400 md:text-size-500 leading-line-height-body-1 text-white">
          SheHub is already helping women build confidence, portfolios and real experience.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          grid 
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6 
          md:gap-8 
          lg:gap-10
          mt-10
          justify-items-center
        "
      >
        {impactProps.map((item, index) => (
          <Card
            key={index}
            type="nonClickable"
            title={item.title}
            description={item.description}
            color="white"
            radius="lg"
            tone="impact"
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Impact

