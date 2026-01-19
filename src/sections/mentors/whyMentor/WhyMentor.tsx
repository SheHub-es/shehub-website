import IconHandHeart from "@/components/icons/IconHandHeart";
import IconRocket from "@/components/icons/IconRocket";
import IconCalendarCheck from "@/components/icons/IconCalendarCheck";
import IconUsers from "@/components/icons/IconUsers";
import FeaturesSection from "@/sections/shared/featuresSection/FeaturesSection";

const features = [
  {
    title: "Make an impact",
    description: "Support emerging women in tech as they work on real projects, build confidence, and take their first steps in the industry—with your guidance making a lasting impact.",
    icon: IconHandHeart,
  },
  {
    title: "Grow your leadership",
    description: "Practice guiding teams, and mentoring asynchronously. Strengthen your leadership skills while building your CV.",
    icon: IconRocket,
  },
  {
    title: "Flexible & async",
    description: "Mentor a team for 2-3 months with light leadership—just 4-8 hours/week. Flexible and async, ideal if you're balancing work or returning after a break.",
    icon: IconCalendarCheck,
  },
  {
    title: "Peer community",
    description: "Join a network of mentors to share practices, support one another, and rebuild confidence through meaningful collaboration.",
    icon: IconUsers,
  },
];

export default function WhyMentor() {
  return (
    <FeaturesSection
      id="why-mentor"
      title={
        <>
          Why become a{" "}
          <span className="text-primary">mentor</span> at SheHub?
        </>
      }
      description="Mentoring isn't just about giving back—it's about growing with purpose. SheHub is a flexible, low-pressure space where you can support new talent, build your confidence, and strengthen your leadership—all while making a real impact."
      features={features}
      gridCols={{ mobile: 1, tablet: 2, desktop: 4 }}
      button={{
        text: "Become a mentor",
        variant: "secondary-primary",
      }}
      backgroundClassName="bg-purple-100"
      layout="left-aligned"
    />
  );
}
