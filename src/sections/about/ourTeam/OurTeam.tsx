"use client"

import { MemberCarouselCard } from "@/components/ui/carousel/CarouselCard"
import { Carousel } from "@/components/ui/carousel/index"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"

const teamMembers: MemberCarouselCard[] = [
  {
    id: "1",
    name: "Full name",
    role: "Job title",
    socials: {
      linkedin: "https://linkedin.com/in/example"
    }
  },
  {
    id: "2",
    name: "Full name",
    role: "Job title",
    socials: {
      linkedin: "https://linkedin.com/in/example"
    }
  },
  {
    id: "3",
    name: "Full name",
    role: "Job title",
    socials: {
      linkedin: "https://linkedin.com/in/example"
    }
  },
  {
    id: "4",
    name: "Full name",
    role: "Job title",
    socials: {
      linkedin: "https://linkedin.com/in/example"
    }
  },
  {
    id: "5",
    name: "Full name",
    role: "Job title",
    socials: {
      linkedin: "https://linkedin.com/in/example"
    }
  }
]

export default function OurTeam() {
  return (
    <SectionWrapper
      id="our-team"
      className="
        bg-background-light
        py-24
      "
      innerClassName="
        flex flex-col
        items-start
        gap-8
        md:gap-12
      "
    >
      {/* Header */}
      <header className="flex flex-col gap-4 w-full">
        <h2 className="font-primary font-heavy text-size-800 md:text-size-900 tracking-tight text-black">
          Our team
        </h2>
        <p className="font-secondary text-size-400 md:text-size-500 text-black leading-line-height-body-1 max-w-3xl">
          Meet the passionate team behind SheHub—builders, mentors, and dreamers working together to make purposeful growth possible.
        </p>
      </header>

      {/* Carousel */}
      <div className="w-full">
        <Carousel variant="cards" items={teamMembers} loop={false} />
      </div>
    </SectionWrapper>
  )
}
