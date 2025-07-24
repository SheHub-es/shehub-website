"use client";

import CollaboratorsSection from "@/sections/CollaboratorsSection/CollaboratorsSection";
import CTASection from "@/sections/CTASection/CTASection";
import FAQsSection from "@/sections/FAQsSection/FAQsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import HowSheHubWorksSection from "@/sections/HowSheHubWorksSection/HowSheHubWorksSection";
import ImpactSection from "@/sections/ImpactSection/ImpactSection";
import MentorsSection from "@/sections/MentorsSection/MentorsSection";
import PartnersSection from "@/sections/PartnersSection/PartnersSection";
import TestimonialsSection from "@/sections/TestimonialsSection/TestimonialsSection";
import ValuePropositionSection from "@/sections/ValuePropositionSection/ValuePropositionSection";

export const Home = () => {
  return (
    <>
      <HeroSection/>
      <ValuePropositionSection/>
      <CollaboratorsSection/>
      <MentorsSection/>
      <ImpactSection/>
      <HowSheHubWorksSection/>
      <TestimonialsSection/>
      <PartnersSection/>
      <FAQsSection/>
      <CTASection/>
    </>
  )
}

export default Home
