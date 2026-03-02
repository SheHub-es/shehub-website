"use client";

import CollaboratorHomeImage from "@/assets/images/photos/photo_collaboratorHome.webp"
import TextSection from "@/sections/home/collaboratorsMentors/components/TextSection"
import { useTranslation } from "@/hooks/useTranslation"
import NextImage from "next/image"

export default function Collaborator() {
  const { t } = useTranslation();
  const copy = {
    sectionHeading: t("home.collabMentors.sectionCollaborators"),
    primaryHeading: (
      <span className="leading-tight block">
        {t("home.collabMentors.collabHeadingBefore")}{" "}
        <span
          className="bg-clip-text text-transparent text-size-800 md:text-size-900 font-bold tracking-tight leading-tight"
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          {t("home.collabMentors.collabHeadingWord")}
        </span>{" "}
        {t("home.collabMentors.collabHeadingAfter")}
      </span>
    ),
    paragraphText: t("home.collabMentors.collabParagraph"),
    whatYouBringText: t("home.collabMentors.collabWhatYouBring"),
    whatWeOfferText: t("home.collabMentors.collabWhatWeOffer"),
    whatYouBringLabel: t("home.collabMentors.whatYouBring"),
    whatWeOfferLabel: t("home.collabMentors.whatWeOffer"),
    buttonText: t("home.collabMentors.ctaCollaborator"),
    buttonHref: "/collaborators",
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
