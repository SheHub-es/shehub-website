import HowItWorksSection from "@/sections/shared/howItWorksSection/HowItWorksSection";
import { collaboratorsTimelineData } from "@/components/data/collaboratorsTimelineData";

export default function HowItWorks() {
  return (
    <HowItWorksSection
      eyebrow="How SheHub works"
      title={
        <>
          Join, connect, and start building{" "}
          <span className="text-black">real experience</span>{" "}
          <span className="text-gradient-steps">in just 4 steps</span>
        </>
      }
      description="From signing up to launching your first project, SheHub makes it easy to grow your skills, connect with a purpose-driven team, and make a real impact—step by step."
      timelineData={collaboratorsTimelineData}
      variant="alternate"
      backgroundClassName="bg-white"
    />
  );
}
