"use client";

import AuthFormV1 from "@/sections/auth/components/AuthForm";
import CarouselV2 from "@/sections/auth/components/CarouselV2";
import { useTranslation } from "@/hooks/useTranslation";

export default function AuthSectionV2() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen flex justify-center px-2">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex flex-col justify-center items-center text-center gap-0 max-w-lg">
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--color-gradient-brand)" }}
            >
              {t("auth.sectionV2.title")}
            </h1>

            <h2
              className="
                font-medium
                text-[length:var(--text-size-600)]
                leading-[var(--spacing-line-height-heading-4)]
                text-[var(--carousel-text-sub)]
                text-center
                mb-4 md:mb-12
              "
            >
              {t("auth.sectionV2.subtitle")}
            </h2>

            <CarouselV2 />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end md:-mt-8">
          <div className="w-full max-w-lg">
            <AuthFormV1 />
          </div>
        </div>
      </div>
    </section>
  );
}

