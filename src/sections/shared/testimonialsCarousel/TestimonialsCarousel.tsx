"use client"

import { Review } from "@/components/ui/carousel/CarouselReview"
import { Carousel } from "@/components/ui/carousel/index"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"

type TestimonialsCarouselProps = {
  id: string
  items: Review[]
  className?: string
}

export const TestimonialsCarousel = ({
  id,
  items,
  className,
}: TestimonialsCarouselProps) => {
  return (
    <SectionWrapper
      id={id}
      className={className}
    >
      <Carousel variant="review" items={items} loop={false} />
    </SectionWrapper>
  )
}

export default TestimonialsCarousel
