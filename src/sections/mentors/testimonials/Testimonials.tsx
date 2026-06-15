"use client"

import TestimonialsCarousel from "@/sections/shared/testimonialsCarousel/TestimonialsCarousel"
import LauraImg from "@/assets/images/avatars/avatar_lauraGracia.webp"
import { Review } from "@/components/ui/carousel/CarouselReview"
import { useTranslation } from "@/hooks/useTranslation"

export default function MentorsTestimonials() {
  const { t } = useTranslation()

  const mentorsTestimonials: Review[] = [
    {
      id: '1',
      image: LauraImg,
      name: t('mentors.testimonials.item1.name'),
      quote: t('mentors.testimonials.item1.quote'),
      role: t('mentors.testimonials.item1.role'),
      alt: t('mentors.testimonials.item1.alt'),
    },
    {
      id: '2',
      image: LauraImg,
      name: t('mentors.testimonials.item2.name'),
      quote: t('mentors.testimonials.item2.quote'),
      role: t('mentors.testimonials.item2.role'),
      alt: t('mentors.testimonials.item2.alt'),
    },
  ]

  return (
    <TestimonialsCarousel
      id="mentors-testimonials"
      items={mentorsTestimonials}
      className="
        bg-purple-100
        flex flex-col
        items-center
        py-24
        gap-16
        md:gap-24
      "
    />
  )
}
