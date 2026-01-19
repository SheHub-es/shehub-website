import TestimonialsCarousel from "@/sections/shared/testimonialsCarousel/TestimonialsCarousel"
import MartaImg from "@/assets/images/avatars/avatar_martaV.webp"
import { Review } from "@/components/ui/carousel/CarouselReview"

const collaboratorsTestimonials: Review[] = [
  {
    id: '1',
    image: MartaImg,
    name: 'Marta V., Collaborator',
    quote: 'Being part of SheHub has been a game-changer. I\'ve connected with talented people, worked on real projects that matter, and grown more in a few months than I ever imagined. It\'s not just experience—it\'s purpose-driven growth.',
    role: 'UX/UI Designer',
    alt: 'Avatar of a female collaborator, UX/UI designer'
  },
  {
    id: '2',
    image: MartaImg,
    name: 'Julia, Collaborator',
    quote: 'Before SheHub, I felt stuck between theory and the real world. Working on an actual product with a supportive team and a mentor who challenged me changed everything. I finally feel ready — and confident — to apply for jobs in tech.',
    role: 'Frontend Developer',
    alt: 'Avatar of a female collaborator, frontend developer'
  }
]

export default function CollaboratorsTestimonials() {
  return (
    <TestimonialsCarousel
      id="collaborators-testimonials"
      items={collaboratorsTestimonials}
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
