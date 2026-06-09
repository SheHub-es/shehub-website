"use client"

import HeroImage from "@/assets/images/photos/photo_heroCollaborator.webp"
import HeroLayout from "@/sections/shared/heroLayout/HeroLayout"
import { useTranslation } from "@/hooks/useTranslation"

export default function CollaboratorsHero() {
  const { t } = useTranslation()

  return (
    <HeroLayout
      id="collaborators"
      eyebrow={t('collaborators.hero.eyebrow')}
      title={
        <>
          {t('collaborators.hero.title.before')}{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--color-gradient-brand)" }}>
            {t('collaborators.hero.title.highlight')}
          </span>{" "}
          {t('collaborators.hero.title.after')}
        </>
      }
      paragraph={t('collaborators.hero.paragraph')}
      mainImage={HeroImage.src}
      alt={t('collaborators.hero.image.alt')}
      buttons={[
        { text: t('collaborators.hero.button'), variant: "primary-primary", href: "/join" },
      ]}
    />
  )
}
