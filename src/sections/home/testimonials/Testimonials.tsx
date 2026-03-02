"use client";

import LauraImg from "@/assets/images/avatars/avatar_lauraGracia.webp"
import MartaImg from "@/assets/images/avatars/avatar_martaV.webp"
import { Avatar } from "@/components/ui/Avatar"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"
import { useTranslation } from "@/hooks/useTranslation"

const TESTIMONIAL_IMAGES = [MartaImg, LauraImg];
const QUOTE_KEYS = ['home.testimonials.quote1', 'home.testimonials.quote2'] as const;
const NAME_KEYS = ['home.testimonials.name1', 'home.testimonials.name2'] as const;
const ROLE_KEYS = ['home.testimonials.role1', 'home.testimonials.role2'] as const;
const ALT_KEYS = ['home.testimonials.alt1', 'home.testimonials.alt2'] as const;

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      id="testimonials"
      className="
        bg-background-light
        flex flex-col
        items-center
        py-24
        gap-16
        md:gap-24
      "
    >
      <header
        className="
          flex flex-col 
          items-center 
          text-center 
          mx-auto
          px-4 
          max-w-3xl 
          mb-10
          md:mb-20
        "
      >
        <div className="flex flex-col leading-tight">
          <h2 className="font-primary font-heavy text-size-800 md:text-size-900 tracking-tight text-black">
            {t('home.testimonials.line1')}
          </h2>

          <h2
            className="
              font-primary 
              font-heavy 
              text-size-800
              md:text-size-900 
              bg-clip-text 
              text-transparent 
              tracking-tight
            "
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            {t('home.testimonials.line2')}
          </h2>
        </div>

        <p className="mt-4 font-secondary text-size-400 md:text-size-500 text-black leading-line-height-body-1">
          {t('home.testimonials.subtitle')}
        </p>
      </header>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
          md:gap-20
          w-full
          max-w-6xl
          px-4
        "
      >
        {[0, 1].map((id) => (
          <article
            key={id}
            className="
              flex
              flex-col
              items-center
              text-center
              gap-8
              max-w-[548px]
              mx-auto
            "
          >
            <p className="font-secondary text-black text-size-500 leading-relaxed">
              {t(QUOTE_KEYS[id])}
            </p>

            <Avatar
              type="image"
              size="xl"
              imageUrl={TESTIMONIAL_IMAGES[id]}
              alt={t(ALT_KEYS[id])}
            />

            <div className="flex flex-col gap-1">
              <p className="font-primary font-bold text-black text-size-500">
                {t(NAME_KEYS[id])}
              </p>
              <p className="font-secondary text-black text-size-400">
                {t(ROLE_KEYS[id])}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
