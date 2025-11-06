import SectionWrapper from "@/components/layout/sectionWrapper/SectionWrapper";
import { Card } from "@/components/ui/card";
import { Gift, Globe2, HeartHandshake, MapPin, Rocket, Users } from "lucide-react";

const valueProps = [
  {
    title: "Real projects",
    description:
      "Contributors deliver real features through short and iterative cycles, focusing on learning, value and continuous improvement",
    icon: Rocket,
  },
  {
    title: "Cross-functional teams",
    description:
      "Teams include UX/UI, Dev, Product, Marketing, and Data — like in real companies.",
    icon: Users,
  },
  {
    title: "Networking & Mentorship",
    description:
      "Mentors provide guidance, feedback, and leadership development. They help you feel confident and ready to step into your next role.",
    icon: HeartHandshake,
  },
  {
    title: "Remote & Flexible",
    description:
      "Every project is fully remote and part-time, designed to fit around your job, studies, or personal life, so you can grow on your terms.",
    icon: MapPin,
  },
  {
    title: "Free",
    description:
      "Contributors never pay to be part of SheHub. Access mentorship, real-world experience, and a supportive tech community — all at zero cost.",
    icon: Gift,
  },
  {
    title: "International environment",
    description:
      "Collaborators join from different countries and backgrounds, bringing diverse perspectives and creating a global, inclusive team dynamic that mirrors real tech workplaces.",
    icon: Globe2,
  },
];

export const ValuePropositionSection = () => {
  return (
    <SectionWrapper
      id="value-proposition"
      className="bg-purple-100 text-black py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center text-center mb-20 gap-4">

        <h2 className="text-size-900 font-bold font-primary leading-line-height-heading-2">
          
            Value <span className="text-primary">proposition</span>

        </h2>

        <p className="text-size-500 leading-line-height-body-1 font-secondary max-w-[768px]">

          SheHub simulates real tech teams, so contributors grow through
          collaboration, ownership, and mentorship.

        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueProps.map((item, index) => (
          <div key={index} className="flex justify-center">
            <Card
              type="nonClickableWithIcon"
              icon={item.icon}
              title={item.title}
              description={item.description}
              color="white"
              radius="lg"
              className="w-full"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ValuePropositionSection;
