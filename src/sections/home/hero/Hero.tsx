import HeroLayout from "@/sections/shared/heroLayout/HeroLayout";
import ImageSection from "@/sections/home/hero/components/ImageSection";
import HeroText from "@/sections/home/hero/components/TypewriterAnimation";

export default function Hero() {
  return (
    <HeroLayout
      id="home"
      eyebrow="Join SheHub as a collaborator"
      title={
        <>
          <p className="whitespace-pre-line">
            {`Real tech
            experience for
            women in`}
          </p>

          <div className="mb-10 relative">
            <HeroText />
          </div>
        </>
      }
      paragraph="SheHub connects early-career talent and experienced mentors to work on real-world, collaborative projects that are built and shipped — just like in a tech company."
      buttons={[
        { text: "Join a real project", variant: "primary-primary" },
        { text: "Mentor a team", variant: "secondary-primary" },
      ]}
      imageComponent={
        <div
          className="
            scale-[0.6]            /* mobile */
            sm:scale-[0.75]        /* sm */
            md:scale-[0.9]         /* tablet */
            lg:scale-100           /* desktop */
            origin-center
            -mt-30
          "
        >
          <ImageSection />
        </div>
      }
    />
  );
}
