import MentorHomeImage from "@/assets/images/photos/photo_mentorHome.webp"
import TextSection from "@/sections/home/collaboratorsMentors/components/TextSection"
import NextImage from "next/image"

export default function Mentor() {
  const copy = {
    sectionHeading: "Mentors",
    primaryHeading: (
      <>
        <span
          className="bg-clip-text text-transparent tracking-tight"
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          Mentor a team
        </span>{" "}
        and grow as a leader
      </>
    ),
    paragraphText:
      "You’ve walked the path — now help someone take their next step. SheHub connects experienced professionals with emerging talent in tech and digital fields.",
    whatWeOfferText:
      "We make it easy and rewarding, offering a structured yet flexible experience, ongoing support, and a community that values mutual learning and care.",
    whatYouBringText:
      "As a mentor, your insights can spark real growth in someone's journey — and you'll grow too.",
    buttonText: "Become a mentor",
  }

  return (
    <section
      className="
        flex flex-col md:flex-row 
        items-center justify-center w-full
        pt-10 md:pt-40 mb-4 md:mb-16
        gap-10 md:gap-16
      "
    >
      {/* TEXT */}
      <div className="flex-1 flex items-center justify-center mb-[60px] mt-10 md:mt-0 md:mb-0">
        <TextSection {...copy} />
      </div>

      {/* IMAGE */}
      <div className="relative flex justify-center items-center w-full md:w-auto mt-10 md:mt-0">
        <NextImage
          src={MentorHomeImage}
          alt="Mentor supporting talent"
          width={584}
          height={620}
          className="object-contain w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px] xl:w-[592px] h-auto"
          priority
        />
      </div>
    </section>
  )
}
