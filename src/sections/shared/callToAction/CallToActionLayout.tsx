import Button from "@/components/ui/Button"
import React from "react"
import Link from "next/link"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"

type ButtonVariant = "secondary-primary"

interface CTAProps {
  title: string | React.ReactNode
  buttonText: string
  buttonHref?: string
  buttonVariant?: ButtonVariant
  className?: string
}

export const CallToActionLayout = ({
  title,
  buttonText,
  buttonHref = "/",
  buttonVariant = "secondary-primary",
  className,
}: CTAProps) => {
  return (
    <div
      id="cta"
      className={`
        w-full
        py-28
        px-4
        bg-[linear-gradient(90deg,_#f76702_0%,_#f83c85_50%,_#7858ff_100%)]
        ${className || ""}
      `}
    >
      <SectionWrapper aria-labelledby="cta-heading">
        <div className="w-full flex flex-col items-center justify-center text-white gap-8">
          <h2 id="cta-heading" className="font-[var(--font-weight-heavy)] text-size-800 md:text-size-900 leading-[var(--spacing-line-height-heading-2)] text-center pb-12">
            {title}
          </h2>

          <Button asChild variant={buttonVariant} shape="rounded" className="w-52 h-10 !text-black">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default CallToActionLayout
