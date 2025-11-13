import HeroImage from "@/assets/images/photos/hero/image_hero_mentor.png"
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
      paragraph="At SheHub, you’ll join real tech teams where you can gain hands-on experience, grow with peers, and build your portfolio. Whether you're exploring product management, UX design, development, data, QA or marketing, you’ll work on impactful projects with support from mentors and a community that empowers you."
      mainImage={HeroImage.src}
      alt="SheHub mentors  collaborating"
      buttons={[
        { text: "Become a mentor", variant: "primary-primary" },
      ]}
    />
  )
}
