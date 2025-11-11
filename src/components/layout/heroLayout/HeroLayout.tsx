"use client"

import SectionWrapper from "@/components/layout/sectionWrapper/SectionWrapper"
import Button from "@/components/ui/Button"
import InfoCard from "@/components/ui/HeroInfoCard"
import ImagePlaceholder from "@/components/ui/ImagePlaceholders"
import clsx from "clsx"
import NextImage from "next/image"

// ✅ Tipos locales (idénticos a los del DS)
type ButtonVariant =
  | "primary-primary"
  | "secondary-primary"
  | "primary-secondary"
  | "secondary-secondary"
  | "primary-tertiary"
  | "secondary-tertiary"
  | "disabled"
  | "gradient"

type FloatingImage = {
  src: string
  alt: string
  width: number
  height: number
  className: string
}

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
  floatingImages?: FloatingImage[]
  topCard?: {
    title: string
    subtitle: string
    imageSrc: string
    width?: string
  }
  bottomCard?: {
    title: string
    subtitle: string
    imageSrc: string
    width?: string
  }
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
  floatingImages = [],
  topCard,
  bottomCard,
  buttons = [],
}: HeroLayoutProps) {
  return (
    <SectionWrapper
      id={id}
      className={clsx(
        "flex flex-col md:flex-row items-center justify-start gap-10 md:gap-10 my-16 w-full max-w-8xl mx-auto px-6 sm:px-10",
        reverse && "md:flex-row-reverse"
      )}
    >

      {/* 🟣 Columna de texto */}
      <div className="flex flex-col gap-6 text-left max-w-[560px] lg:max-w-[600px] flex-shrink-0">
        {/* Eyebrow / subtítulo */}
        {eyebrow && (
          <span className="text-[color:var(--color-primary)] text-sm md:text-base font-semibold tracking-wide">
            {eyebrow}
          </span>
        )}

        {/* Título principal */}
        <h1 className="font-primary text-4xl md:text-5xl font-bold leading-tight text-[color:var(--color-black)]">
          {title}
        </h1>

        {/* Párrafo */}
        <p className="text-[color:var(--color-black)] text-sm md:text-lg leading-relaxed max-w-xl">
          {paragraph}
        </p>

        {/* 🔘 Botones (opcionales) */}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 mt-4 w-full md:w-auto justify-center sm:justify-start">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant || "primary-primary"}
                size="sm"
                shape="rounded"
                className={clsx(
                  "w-full sm:w-auto h-[40px] sm:h-[48px] min-w-[170px] min-h-[48px] font-[var(--font-weight-default)] transition-colors duration-200",
                  btn.variant === "secondary-primary" && "!text-black",
                  btn.variant === "primary-primary" && "hover:!text-black"
                )}
                onClick={btn.onClick}
              >
                {btn.text}
              </Button>
            ))}
          </div>
        )}

      </div>

      {/* 🟣 Columna visual */}
      <div className="relative flex-1 flex justify-center items-center min-h-[460px]">
        <ImagePlaceholder
          size="lg"
          corner="bottomLeft"
          imageUrl={mainImage}
          alt={alt}
        />

        {floatingImages.map((img, i) => (
          <NextImage
            key={i}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className={img.className}
          />
        ))}

        {topCard && (
          <div className="absolute top-[40px] left-[-130px] -translate-y-1/2">
            <InfoCard
              width={topCard.width || "180px"}
              title={topCard.title}
              subtitle={topCard.subtitle}
              imageSrc={topCard.imageSrc}
              corner="bottomRight"
            />
          </div>
        )}

        {bottomCard && (
          <div className="absolute bottom-[-70px] right-[-60px]">
            <InfoCard
              width={bottomCard.width || "220px"}
              title={bottomCard.title}
              subtitle={bottomCard.subtitle}
              imageSrc={bottomCard.imageSrc}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
