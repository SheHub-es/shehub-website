import IconCalendarCheck from "@/components/icons/IconCalendarCheck";
import IconHeartHandshake from "@/components/icons/IconHeartHandshake";
import IconRocket from "@/components/icons/IconRocket";
import IconUsers from "@/components/icons/IconUsers";
import FeaturesSection from "@/sections/shared/featuresSection/FeaturesSection";

const features = [
  {
    title: "Brand visibility in the tech-for-good ecosystem",
    description: "Showcase your commitment to diversity and innovation alongside mission-driven talent.",
    icon: IconHeartHandshake,
  },
  {
    title: "Access to emerging female tech talent",
    description: "Connect with junior and mid-level women in tech eager to grow and contribute.",
    icon: IconRocket,
  },
  {
    title: "DEI-aligned social impact initiative",
    description: "Strengthen your diversity, equity, and inclusion strategy with measurable community engagement.",
    icon: IconCalendarCheck,
  },
  {
    title: "Access to collaborative innovation projects",
    description: "Co-create meaningful solutions while supporting hands-on learning and mentorship.",
    icon: IconUsers,
  },
];

export default function WhyPartner() {
  return (
    <FeaturesSection
      id="why-partner"
      title={
        <>
          Why <span className="text-primary">partner</span> with SheHub?
        </>
      }
      description="Join a movement that's shaping the future of tech through inclusive innovation and real impact. Sponsoring or partnering with SheHub connects you with emerging tech talent, strengthens your DEI impact, and positions your brand at the heart of a thriving women-in-tech community."
      features={features}
      gridCols={{ mobile: 1, tablet: 2, desktop: 4 }}
      button={{
        text: "Partner with us",
        variant: "secondary-primary",
        href: "/contact",
      }}
      backgroundClassName="bg-purple-100"
      layout="left-aligned"
    />
  );
}
