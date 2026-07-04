"use client"

import HeroImage from "@/assets/images/photos/photo_heroMentor.webp"
import HeroLayout from "@/sections/shared/heroLayout/HeroLayout"
import { useTranslation } from "@/hooks/useTranslation"

export default function MentorsHero() {
  const { t } = useTranslation()

  return (
    <HeroLayout
      id="mentors"
      eyebrow={t('mentors.hero.eyebrow')}
      title={
        <>
          {t('mentors.hero.title.before')}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            {t('mentors.hero.title.highlight')}
          </span>
        </>
      }
      paragraph={t('mentors.hero.paragraph')}
      mainImage={HeroImage.src}
      alt={t('mentors.hero.image.alt')}
      buttons={[
        { text: t('mentors.hero.button'), variant: "primary-primary", href: "/join" },
      ]}
    />
  )
}
