"use client";

import MentorHomeImage from "@/assets/images/photos/photo_mentorHome.webp"
import TextSection from "@/sections/home/collaboratorsMentors/components/TextSection"
import { useTranslation } from "@/hooks/useTranslation"
import NextImage from "next/image"

export default function Mentor() {
  const { t } = useTranslation();
  const copy = {
    sectionHeading: t("home.collabMentors.sectionMentors"),
    primaryHeading: (
      <span className="leading-tight block">
        <span
          className="bg-clip-text text-transparent tracking-tight leading-tight font-bold"
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          {t("home.collabMentors.mentorHeadingHighlight")}
        </span>{" "}
        {t("home.collabMentors.mentorHeadingAfter")}
      </span>
    ),
    paragraphText: t("home.collabMentors.mentorParagraph"),
    whatWeOfferText: t("home.collabMentors.mentorWhatWeOffer"),
    whatYouBringText: t("home.collabMentors.mentorWhatYouBring"),
    whatYouBringLabel: t("home.collabMentors.whatYouBring"),
    whatWeOfferLabel: t("home.collabMentors.whatWeOffer"),
    buttonText: t("home.collabMentors.ctaMentor"),
    buttonHref: "/mentors",
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
