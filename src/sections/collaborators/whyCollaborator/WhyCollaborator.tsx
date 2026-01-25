import IconEarth from "@/components/icons/IconEarth";
import IconHandHeart from "@/components/icons/IconHandHeart";
import IconMapPinHouse from "@/components/icons/IconMapPinHouse";
import IconRocket from "@/components/icons/IconRocket";
import FeaturesSection from "@/sections/shared/featuresSection/FeaturesSection";

const features = [
  {
    title: "Build real projects",
    description: "Practice your skills in real, iterative tech projects with impact.",
    icon: IconRocket,
  },
  {
    title: "Grow with guidance",
    description: "Learn from experienced mentors and collaborate in cross-functional teams.",
    icon: IconHandHeart,
  },
  {
    title: "Learn on your terms",
    description: "Flexible, remote, and part-time—designed to fit your life.",
    icon: IconMapPinHouse,
  },
  {
    title: "Zero cost, global reach",
    description: "Join for free and work with peers from around the world.",
    icon: IconEarth,
  },
];

export default function WhyCollaborator() {
  return (
    <FeaturesSection
      id="why-collaborator"
      title={
        <>
          Why be a{" "}
          <span className="text-primary">collaborator</span> at SheHub?
        </>
      }
      description="Gain real experience in a safe, supportive environment while growing your tech career. At SheHub, you'll work in real teams, build your portfolio, and connect with a global network of mentors and peers."
      features={features}
      gridCols={{ mobile: 1, tablet: 2, desktop: 4 }}
      button={{
        text: "Become a collaborator",
        variant: "secondary-primary",
        href: "/auth",
      }}
      backgroundClassName="bg-purple-100"
      layout="left-aligned"
    />
  );
}
