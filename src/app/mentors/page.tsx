import MentorsHero from "@/sections/mentors/hero/Hero"
import WhyMentor from "@/sections/mentors/whyMentor/WhyMentor"
import MentorsHowItWorks from "@/sections/mentors/howItWorks/HowItWorks"
import MentorsTestimonials from "@/sections/mentors/testimonials/Testimonials"
import MentorsFAQ from "@/sections/mentors/faq/FAQ"
import MentorsCallToAction from "@/sections/mentors/callToAction/CallToAction"

export default function MentorsPage() {
  return (
    <main>
      <MentorsHero />
      <WhyMentor />
      <MentorsHowItWorks />
      <MentorsTestimonials />
      <MentorsFAQ />
      <MentorsCallToAction />
    </main>
  )
}
