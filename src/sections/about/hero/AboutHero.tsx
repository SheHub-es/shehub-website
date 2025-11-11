import HeroLayout from "@/components/layout/heroLayout/HeroLayout"
import HeroImage from "@/assets/images/photos/photo_hero.jpg"

export default function AboutHero() {
  return (
    <HeroLayout
      id="about"
      reverse
      eyebrow="Who we are"
      title={
        <>
          Powering the tech future with{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            female talent
          </span>
        </>
      }
      paragraph="SheHub is a women led community for early career women in tech, where real collaboration and product building come first. We create hands on opportunities to grow, connect, and stand out, so more female talent gets hired, recognized, and empowered."
      mainImage={HeroImage.src}
      alt="Women collaborating and innovating in tech, representing the SheHub community"
      buttons={[
        { text: "Join a real project", variant: "primary-primary" },
      ]}
    />
  )
}
