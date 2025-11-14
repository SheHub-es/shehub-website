import Button from "@/components/ui/Button";
import { CalendarCheck, FilePenLine, HeartHandshake, UserPlus } from "lucide-react";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";

export default function HowSheHubWorks() {
  const steps = [
    {
      icon: FilePenLine,
      title: "Apply",
      desc: "Share your interests, background, and what motivates you. You don’t need to be an expert — just bring your curiosity and enthusiasm."
    },
    {
      icon: HeartHandshake,
      title: "Get matched",
      desc: "We’ll connect you with other women in tech and experienced mentors who can guide and support you throughout the journey."
    },
    {
      icon: UserPlus,
      title: "Join a team",
      desc: "You'll join a diverse, multidisciplinary team where you can learn, collaborate, and contribute to real projects in a safe space."
    },
    {
      icon: CalendarCheck,
      title: "Start the project",
      desc: "Put your skills into practice, gain real-world experience, and grow your confidence — all while building your network in tech."
    },
  ];

  return (
    <SectionWrapper className="text-black bg-background-footer py-24 font-primary">
      <div className="text-center mb-16">
        <p className="text-sm md:text-lg font-bold text-[var(--color-black-text)]">How SheHub works</p>

        <h2 className="mt-4 text-size-800 md:text-size-900 font-bold tracking-tight leading-[1.2] whitespace-pre-line">
          Join, connect, and start building{"\n"}
          real experience <span className="text-primary">in just 4 steps</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center px-2">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-5 w-71">
          
            <step.icon className="w-11 h-11 text-[var(--color-black-text)]" />
            <div className="flex flex-col gap-2">
              <h3 className="text-heading-400 font-bold text-[var(--color-black-text)]">
                {step.title}
              </h3>
              <p className="text-body-300 text-[var(--color-black-text)] w-54">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button
          variant="primary-primary"
          size="sm"
          shape="rounded" >
          Join a real project
        </Button>
      </div>
    </SectionWrapper>
  );
}
