import TestimonialsCarousel from "@/sections/shared/testimonialsCarousel/TestimonialsCarousel"
import LauraImg from "@/assets/images/avatars/avatar_lauraGracia.webp"
import { Review } from "@/components/ui/carousel/CarouselReview"

const mentorsTestimonials: Review[] = [
  {
    id: '1',
    image: LauraImg,
    name: 'Laura G., Mentor',
    quote: 'Being a mentor at SheHub has been one of the most rewarding experiences of my career. Supporting women who are taking their first steps in tech has reminded me of the power of lifting each other up. At SheHub, it\'s not just about learning technical skills — it\'s about building community, finding role models, and realizing you\'re not alone on this journey.',
    role: 'Senior Product Manager',
    alt: 'Avatar of a female mentor, senior product manager'
  },
  {
    id: '2',
    image: LauraImg,
    name: 'Laura Gracia, Mentor',
    quote: 'Being a mentor at SheHub has been one of the most fulfilling experiences in my career. Watching contributors grow, gain confidence, and land their first tech roles — while I honed my own leadership skills — reminded me why I love this industry.',
    role: 'Project Manager / Team Lead',
    alt: 'Avatar of female mentor, project manager'
  }
]

export default function MentorsTestimonials() {
  return (
    <TestimonialsCarousel
      id="mentors-testimonials"
      items={mentorsTestimonials}
      className="
        bg-background-light
        flex flex-col
        items-center
        py-24
        gap-16
        md:gap-24
      "
    />
  )
}
