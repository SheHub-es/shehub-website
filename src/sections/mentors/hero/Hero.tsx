import HeroImage from "@/assets/images/photos/photo_heroMentor.webp"
import HeroLayout from "@/sections/shared/heroLayout/HeroLayout"

export default function MentorsHero() {
  return (
    <HeroLayout
      id="mentors"
      eyebrow="Join SheHub as a mentor"
      title={
        <>
          Support the next generation in tech and {" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            grow as a leader
          </span>
        </>
      }
      paragraph="At SheHub, you'll guide emerging women in tech as they work on real projects, build confidence, and take their first steps in the industry. As a mentor, you'll share your expertise, strengthen your leadership skills, and make a lasting impact—all while growing in a flexible, supportive community."
      mainImage={HeroImage.src}
      alt="SheHub mentors collaborating"
      buttons={[
        { text: "Become a mentor", variant: "primary-primary" },
      ]}
    />
  )
}
