"use client";

import Navbar from "@/components/layout/NavBar/Navbar";
import { TimelineItemContent } from "@/components/ui/timelineItemContent";
import CollaboratorsMentorsSection from "@/sections/CollaboratorsMentorsSection/CollaboratorsMentorsSection";
import CTASection from "@/sections/CTASection/CTASection";
import FAQsSection from "@/sections/FAQsSection/FAQsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import HowSheHubWorksSection from "@/sections/HowSheHubWorksSection/HowSheHubWorksSection";
import ImpactSection from "@/sections/ImpactSection/ImpactSection";
import PartnersSection from "@/sections/PartnersSection/PartnersSection";
import TestimonialsSection from "@/sections/TestimonialsSection/TestimonialsSection";
import ValuePropositionSection from "@/sections/ValuePropositionSection/ValuePropositionSection";

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
      <TimelineItemContent date="Day 1" title="Event Planning" description="Welcome to our FAQ section, your place for quick, honest answers about how SheHub works, who it’s for, and how you can get involved." align={"right"}/>
    </>
  )
}