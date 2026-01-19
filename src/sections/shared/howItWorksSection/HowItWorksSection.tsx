import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import { Timeline, TimelineItemData } from "@/components/ui/Timeline";

interface HowItWorksSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  timelineData: TimelineItemData[];
  variant?: "alternate" | "vertical";
  className?: string;
  backgroundClassName?: string;
}

export default function HowItWorksSection({
  eyebrow,
  title,
  description,
  timelineData,
  variant = "alternate",
  className = "",
  backgroundClassName = "bg-white",
}: HowItWorksSectionProps) {
  return (
    <SectionWrapper className={`text-black ${backgroundClassName} py-24 font-primary ${className}`}>
      <div className="text-center mb-16">
        <p className="text-sm md:text-lg font-bold text-primary">
          {eyebrow}
        </p>

        <h2 className="mt-4 max-w-[768px] mx-auto text-size-900 font-bold text-center text-black leading-line-height-heading-2 whitespace-pre-line">
          {title}
        </h2>

        <p className="mt-6 text-size-400 md:text-size-500 leading-line-height-body-1 font-secondary max-w-3xl mx-auto px-4">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Timeline items={timelineData} variant={variant} />
      </div>
    </SectionWrapper>
  );
}
