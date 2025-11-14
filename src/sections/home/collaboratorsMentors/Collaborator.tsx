import CollaboratorHomeImage from "@/assets/images/photos/photo_collaboratorHome.webp"
import TextSection from "@/sections/home/collaboratorsMentors/components/TextSection"
import NextImage from "next/image"

export default function Collaborator() {
  const copy = {
    sectionHeading: "Collaborators",
    primaryHeading: (
      <>
        Work as a{" "}
        <span
          className="bg-clip-text text-transparent text-size-800 md:text-size-900 font-bold tracking-tight"
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          collaborator
        </span>{" "}
        in a real tech project and build your portfolio
      </>
    ),
    paragraphText:
      "Collaborate in multidisciplinary teams to design, build, and deliver real product features. Gain hands-on experience and create a portfolio that showcases your skills, process, and tangible results.",
    whatYouBringText:
      "As a collaborator, you can share your expertise, tools, or projects with a highly engaged community — and grow your impact while doing it.",
    whatWeOfferText:
      "We support you with visibility, feedback loops, mentorships and a trusted space to co-create with purpose-driven women.",
    buttonText: "Become a collaborator",
  }

  return (
    <section
      className="
        flex flex-col md:flex-row-reverse
        items-center justify-center w-full
        pt-10 md:pt-20 
        gap-10 md:gap-16
      "
    >
      {/* TEXT */}
      <div className="flex-1 flex items-center justify-center mb-[90px] md:mb-0">
        <TextSection {...copy} />
      </div>

      {/* IMAGE */}
      <div className="relative flex justify-center items-center w-full md:w-auto mt-50 md:mt-0">
        <NextImage
          src={CollaboratorHomeImage}
          alt="Collaborator at work"
          width={584}
          height={620}
          className="object-contain w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px] xl:w-[592px] h-auto"
          priority
        />
      </div>
    </section>
  )
}
