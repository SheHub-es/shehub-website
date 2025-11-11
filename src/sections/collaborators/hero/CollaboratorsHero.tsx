import HeroLayout from "@/components/layout/heroLayout/HeroLayout"
import HeroImage from "@/assets/images/photos/photo_hero.jpg"

export default function CollaboratorsHero() {
  return (
    <HeroLayout
      id="collaborators"
      eyebrow="Join SheHub as a collaborator"
      title={
        <>
          Gain{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--color-gradient-brand)" }}>
            real tech experience
          </span>{" "}
          and grow your portfolio
        </>
      }
      paragraph="At SheHub, you’ll join real tech teams where you can gain hands-on experience, grow with peers, and build your portfolio. Whether you're exploring product management, UX design, development, data, QA or marketing, you’ll work on impactful projects with support from mentors and a community that empowers you."
      mainImage={HeroImage.src}
      alt="Collaborators working together"
      buttons={[
        { text: "Become a collaborator", variant: "primary-primary" },
      ]}
    />
  )
}
