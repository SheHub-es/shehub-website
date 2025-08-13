import { Rocket, Users, HeartHandshake, MapPin, Gift, Globe2 } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper/SectionWrapper";
import { Card } from "@/components/ui/card";

const valueProps = [

  {
    title: "Real projects",
    description:
      "Contributors deliver real features through short and iterative cycles, focusing on learning, value and continuous improvement",
    icon: Rocket,
    color: "white",
  },

  {
    title: "Cross-functional teams",
    description:
      "Teams include UX/UI, Dev, Product, Marketing, and Data — like in real companies.",
    icon: Users,
    color: "white",
  },

  {
    title: "Networking & Mentorship",
    description:
      "Mentors provide guidance, feedback, and leadership development. They help you feel confident and ready to step into your next role.",
    icon: HeartHandshake,
    color: "white",
  },

  {
    title: "Remote & Flexible",
    description:
      "Every project is fully remote and part-time, designed to fit around your job, studies, or personal life, so you can grow on your terms.",
    icon: MapPin,
    color: "white",
  },

  {
    title: "Free",
    description:
      "Contributors never pay to be part of SheHub. Access mentorship, real-world experience, and a supportive tech community — all at zero cost.",
    icon: Gift,
    color: "white",
  },

  {
    title: "International environment",
    description:
      "Collaborators join from different countries and backgrounds, bringing diverse perspectives and creating a global, inclusive team dynamic that mirrors real tech workplaces.",
    icon: Globe2,
    color: "white",
  },

];

export const ValuePropositionSection = () => {
  return (
    <SectionWrapper
      id="value-proposition"
      className="bg-purple-100 text-black py-24"
    >
  

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {valueProps.map((item, index) => (
          <Card
            key={index}
            type="nonClickableWithIcon"
            icon={item.icon} 
            title={item.title}
            description={item.description}
            color="white"
          />
        ))}

      </div>
    </SectionWrapper>
  );
}; 

export default ValuePropositionSection;
