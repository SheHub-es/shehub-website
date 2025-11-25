"use client";

import CallToAction from "@/sections/home/callToAction/CallToAction";
import CollaboratorsMentors from "@/sections/home/collaboratorsMentors/CollaboratorsMentors";
import FrequentlyAskedQuestions from "@/sections/home/frequentlyAskedQuestions/FrequentlyAskedQuestions";
import Hero from "@/sections/home/hero/Hero";
import HowSheHubWorks from "@/sections/home/howSheHubWorks/HowSheHubWorks";
import Impact from "@/sections/home/impact/Impact";
import Partners from "@/sections/home/partners/Partners";
import Testimonials from "@/sections/home/testimonials/Testimonials";
import ValueProposition from "@/sections/home/valueProposition/ValueProposition";

export default function Home () {
  return (
    <>  
      <Hero/>
      <ValueProposition/>
      <CollaboratorsMentors/>
      <Impact/>
      <HowSheHubWorks/>
      <Testimonials/>
      <Partners/>
      <FrequentlyAskedQuestions/>
      <CallToAction/>
    </>
  )
}