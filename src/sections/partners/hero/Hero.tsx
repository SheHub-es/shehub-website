"use client"

import HeroImage from "@/assets/images/photos/photo_heroPartners.webp"
import HeroLayout from "@/sections/shared/heroLayout/HeroLayout"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"
import PartnerLogosCarousel from "./components/PartnerLogosCarousel"
import { useTranslation } from "@/hooks/useTranslation"

export default function PartnersHero() {
  const { t } = useTranslation()

  return (
    <>
      <HeroLayout
        id="partners"
        eyebrow={t('partners.hero.eyebrow')}
        title={
          <>
            {t('partners.hero.title.before')}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--color-gradient-brand)" }}
            >
              {t('partners.hero.title.highlight')}
            </span>
          </>
        }
        paragraph={t('partners.hero.paragraph')}
        mainImage={HeroImage.src}
        alt={t('partners.hero.image.alt')}
        buttons={[
          { text: t('partners.hero.button.sponsor'), variant: "primary-primary", href: "/contact" },
          { text: t('partners.hero.button.findTalent'), variant: "secondary-primary", href: "/contact" },
        ]}
      />
      <SectionWrapper>
        <PartnerLogosCarousel />
      </SectionWrapper>
    </>
  )
}
