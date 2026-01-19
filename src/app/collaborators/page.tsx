import CollaboratorsHero from "@/sections/collaborators/hero/Hero"
import WhyCollaborator from "@/sections/collaborators/whyCollaborator/WhyCollaborator"
import HowItWorks from "@/sections/collaborators/howItWorks/HowItWorks"
import CollaboratorsTestimonials from "@/sections/collaborators/testimonials/Testimonials"
import CollaboratorsFAQ from "@/sections/collaborators/faq/FAQ"
import CollaboratorsCallToAction from "@/sections/collaborators/callToAction/CallToAction"

export default function CollaboratorsPage() {
  return (
    <main>
      <CollaboratorsHero />
      <WhyCollaborator />
      <HowItWorks />
      <CollaboratorsTestimonials />
      <CollaboratorsFAQ />
      <CollaboratorsCallToAction />
    </main>
  )
}
