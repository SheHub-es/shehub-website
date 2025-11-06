"use client";

import Navbar from "@/components/layout/navBar/Navbar";
import CTASection from "@/sections/callToAction/CTASection";
import CollaboratorsMentorsSection from "@/sections/collaboratorsMentors/CollaboratorsMentorsSection";
import FAQsSection from "@/sections/frequentlyAskedQuestions/FAQsSection";
import HeroSection from "@/sections/hero/HeroSection";
import HowSheHubWorksSection from "@/sections/howSheHubWorks/HowSheHubWorksSection";
import ImpactSection from "@/sections/impact/ImpactSection";
import PartnersSection from "@/sections/partners/PartnersSection";
import TestimonialsSection from "@/sections/testimonials/TestimonialsSection";
import ValuePropositionSection from "@/sections/valueProposition/ValuePropositionSection";

export default function Home () {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ValuePropositionSection/>
      <CollaboratorsMentorsSection/>
      <ImpactSection/>
      <HowSheHubWorksSection/>
      <TestimonialsSection/>
      <PartnersSection/>
      <FAQsSection/>
      <CTASection/>
    </>
  )
}