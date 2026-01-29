import HowItWorksSection from "@/sections/shared/howItWorksSection/HowItWorksSection";
import { mentorsTimelineData } from "@/components/data/mentorsTimelineData";

export default function MentorsHowItWorks() {
  return (
    <HowItWorksSection
      eyebrow="How SheHub works"
      title={
        <>
          Your journey as a mentor{"\n"}
          <span className="text-gradient-steps">in just 4 steps</span>
        </>
      }
      description="From joining the community to guiding your first team, SheHub makes it easy to share your expertise, empower emerging talent, and make a real impact—step by step."
      timelineData={mentorsTimelineData}
      variant="alternate"
      backgroundClassName="bg-white"
    />
  );
}
