"use client";

import Navbar from "@/components/layout/navbar/Navbar";
import CallToAction from "@/sections/callToAction/CallToAction";
import CollaboratorsMentors from "@/sections/collaboratorsMentors/CollaboratorsMentors";
import FrequentlyAskedQuestions from "@/sections/frequentlyAskedQuestions/FrequentlyAskedQuestions";
import Hero from "@/sections/hero/Hero";
import HowSheHubWorks from "@/sections/howSheHubWorks/HowSheHubWorks";
import Impact from "@/sections/impact/Impact";
import Partners from "@/sections/partners/Partners";
import Testimonials from "@/sections/testimonials/Testimonials";
import ValueProposition from "@/sections/valueProposition/ValueProposition";

export default function Home () {
  return (
    <>
      <Navbar/>
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