import HeroImage from "@/assets/images/photos/hero/image_hero_partners.png"
import HeroLayout from "@/sections/shared/heroLayout/HeroLayout"

export default function PartnersHero() {
  return (
    <HeroLayout
      id="partners"
      eyebrow="Join SheHub as a partner"
      title={
        <>
          Join the movement shaping the{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            future of tech
          </span>
        </>
      }
      paragraph="Partner with SheHub to support diverse talent, drive real impact, and connect with the next generation of women in tech."
      mainImage={HeroImage.src}
      alt="SheHub partners collaborating"
      buttons={[
        { text: "Sponsor", variant: "primary-primary" },
        { text: "Find talent", variant: "secondary-primary" },
      ]}
    />
  )
}
