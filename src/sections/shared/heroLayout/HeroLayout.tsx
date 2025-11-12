"use client"

import Button from "@/components/ui/Button"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/cn"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"
import clsx from "clsx"
import NextImage from "next/image"

type ButtonVariant =
  | "primary-primary"
  | "secondary-primary"

type HeroButton = {
  text: string
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
}

type HeroLayoutProps = {
  id?: string
  reverse?: boolean
  eyebrow?: string
  title: React.ReactNode
  paragraph: string
  mainImage: string
  alt: string
  buttons?: HeroButton[]
}

export default function HeroLayout({
  id,
  reverse = false,
  eyebrow,
  title,
  paragraph,
  mainImage,
  alt,
  buttons = [],
}: HeroLayoutProps) {
  const [heroImageRef, isHeroVisible] = useIntersectionObserver();
  
  return (
    <SectionWrapper
      id={id}
      className={clsx(
        // base structure
        "flex flex-col lg:flex-row items-center justify-center mx-auto",
        "sm:px-10 pt-12 md:py-10 lg:gap-16",
        reverse && "lg:flex-row-reverse"
      )}
    >
      {/* Text column */}
      <div
        className={clsx(
          "flex flex-col justify-center text-left",
          "lg:w-[592px] w-full h-auto"
        )}
      >
        {eyebrow && (
          <span className="text-[color:var(--color-primary)] text-base md:text-lg font-semibold tracking-wide mb-12 md:my-12">
            {eyebrow}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--color-black)] mb-12">
          {title}
        </h1>

        <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed mb-12">
          {paragraph}
        </p>

        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 mb-12">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant || "primary-primary"}
                size="sm"
                shape="rounded"
                onClick={btn.onClick}
                className={clsx(
                  "w-full sm:w-auto h-[40px] sm:h-[48px] min-w-[170px] min-h-[48px] font-[var(--font-weight-default)] transition-colors duration-200",
                  btn.variant === "secondary-primary" && "!text-black", // hardcoded so as not to touch Button.tsx
                  btn.variant === "primary-primary" && "hover:!text-black" // hardcoded so as not to touch Button.tsx
                )}
              >
                {btn.text}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Image column */}
      <div className="relative flex justify-center items-center lg:w-[592px] w-full h-auto mt-8">
        <div
          ref={heroImageRef}
          className={cn(
            "fade-on-scroll",
            isHeroVisible && "visible"
          )}
        >
          <NextImage
            src={mainImage}
            alt={alt}
            width={592}
            height={620}
            className="object-contain w-[500px] md:w-[540px] lg:w-[592px] h-auto"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
