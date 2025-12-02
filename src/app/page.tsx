"use client";

import { Card } from "@/components/ui/Card";
import CallToAction from "@/sections/home/callToAction/CallToAction";
import CollaboratorsMentors from "@/sections/home/collaboratorsMentors/CollaboratorsMentors";
import FrequentlyAskedQuestions from "@/sections/home/frequentlyAskedQuestions/FrequentlyAskedQuestions";
import Hero from "@/sections/home/hero/Hero";
import HowSheHubWorks from "@/sections/home/howSheHubWorks/HowSheHubWorks";
import Impact from "@/sections/home/impact/Impact";
import Partners from "@/sections/home/partners/Partners";
import Testimonials from "@/sections/home/testimonials/Testimonials";
import ValueProposition from "@/sections/home/valueProposition/ValueProposition";
import { RocketIcon } from "lucide-react";

export default function Home () {
  return (
    <>  
      <Hero/>
      <ValueProposition/>
      <div className="bg-purple-200 p-8">
        <Card
          type="nonClickableWithIconAndCorner"
          radius="md"
          corner="tl"
          title="Lorem"
          description="Description here"
          icon={RocketIcon}
          iconArialLabel="Icona del Card"
        />
      </div>
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