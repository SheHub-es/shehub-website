"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ImageSection from "@/sections/home/hero/components/ImageSection";
import HeroText from "@/sections/home/hero/components/TypewriterAnimation";
import HeroLayout from "@/sections/shared/heroLayout/HeroLayout";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <HeroLayout
      id="home"
      eyebrow={t("home.hero.eyebrow")}
      title={
        <>
          <p className="whitespace-pre-line">
            {t("home.hero.titlePrefix")}
          </p>

          <div className="mb-10 relative">
            <HeroText
              roleStrings={[
                t("home.hero.roleDev"),
                t("home.hero.roleUX"),
                t("home.hero.rolePM"),
                t("home.hero.roleData"),
                t("home.hero.roleMarketing"),
                t("home.hero.roleQA"),
              ]}
            />
          </div>
        </>
      }
      paragraph={t("home.hero.paragraph")}
      buttons={[
        { text: t("home.hero.ctaProject"), variant: "primary-primary", href: "/join" },
        { text: t("home.hero.ctaMentor"), variant: "secondary-primary", href: "/mentors" },
      ]}
      imageComponent={
        <div
          className="
            scale-[0.6]            /* mobile */
            sm:scale-[0.75]        /* sm */
            md:scale-[0.9]         /* tablet */
            lg:scale-100           /* desktop */
            origin-center
            -mt-30
          "
        >
          <ImageSection />
        </div>
      }
    />
  );
}
