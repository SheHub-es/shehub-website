import AboutHero from "@/sections/about/hero/Hero"
import OurTeam from "@/sections/about/ourTeam/OurTeam"
import AboutTimeline from "@/sections/about/ourStory/OurStory"
import Operation from "@/sections/about/operation/Operation"
import CallToAction from "@/sections/about/callToAction/CallToAction"
import Purpose from "@/sections/about/purpose/Purpose"

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Purpose />
      <AboutTimeline />
      <OurTeam />
      <Operation />
      <CallToAction />
    </main>
  )
}
