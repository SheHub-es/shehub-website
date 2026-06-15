"use client"

import TestimonialsCarousel from "@/sections/shared/testimonialsCarousel/TestimonialsCarousel"
import MartaImg from "@/assets/images/avatars/avatar_martaV.webp"
import { Review } from "@/components/ui/carousel/CarouselReview"
import { useTranslation } from "@/hooks/useTranslation"

export default function CollaboratorsTestimonials() {
  const { t } = useTranslation()

  const collaboratorsTestimonials: Review[] = [
    {
      id: '1',
      image: MartaImg,
      name: t('collaborators.testimonials.item1.name'),
      quote: t('collaborators.testimonials.item1.quote'),
      role: t('collaborators.testimonials.item1.role'),
      alt: t('collaborators.testimonials.item1.alt'),
    },
    {
      id: '2',
      image: MartaImg,
      name: t('collaborators.testimonials.item2.name'),
      quote: t('collaborators.testimonials.item2.quote'),
      role: t('collaborators.testimonials.item2.role'),
      alt: t('collaborators.testimonials.item2.alt'),
    },
  ]

  return (
    <TestimonialsCarousel
      id="collaborators-testimonials"
      items={collaboratorsTestimonials}
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
