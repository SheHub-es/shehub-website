"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useMemo } from "react";
import WaitlistForm from "./components/WaitlistForm";

export default function WaitlistSection() {
  const { t } = useTranslation();

  const { firstWord, gradLine2, gradLine3 } = useMemo(() => {
    const raw = String(t("auth.sectionV1.title.highlight") ?? "").trim();
    const match = raw.match(/^(\S+)\s+([\s\S]+)$/);
    if (!match) return { firstWord: raw, gradLine2: "", gradLine3: "" };
    const [, first, rest] = match;
    const [line2 = "", line3 = ""] = rest.split("\n");
    return {
      firstWord: first,
      gradLine2: line2.trim(),
      gradLine3: line3.trim(),
    };
  }, [t]);

  return (
    <section
      className="w-full max-w-[100vw] min-h-screen flex justify-center px-6 md:px-4 pt-4 md:pt-10 font-primary overflow-x-hidden box-border"
      style={{ backgroundColor: "var(--color-background-light)" }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 items-start justify-items-stretch sm:pt-10 md:pt-12 lg:pt-16 pb-10 sm:pb-12 md:pb-12 lg:pb-16 min-w-0">
        <div className="w-full min-w-0 md:-mt-20 relative z-0 overflow-hidden">
          <div className="w-full min-w-0 text-left overflow-hidden">
            <span
              className="block text-base md:text-lg font-semibold tracking-wide my-8 md:my-8"
              style={{ color: "var(--color-primary)" }}
            >
              {t("waitlist.heroIntro")}
            </span>
            <h1 className="auth-hero-title auth-hero-title--wrap mb-4 md:mb-12 text-[color:var(--color-black)] break-words">
              <span className="auth-hero-line1">
                {t("auth.sectionV1.title.line1")}
              </span>
              <br />
              <span className="auth-hero-line2">
                <span className="auth-hero-word">{firstWord}</span>{" "}
                <span
                  className="auth-hero-gradient bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--color-gradient-brand)" }}
                >
                  {gradLine2}
                  <br />
                  {gradLine3}
                </span>
              </span>
            </h1>
            <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed mt-6">
              {t("auth.sectionV1.description")}
            </p>
            <ul className="mt-8 space-y-4" aria-label={t("auth.sectionV1.benefits.ariaLabel") || "Benefits list"}>
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[color:var(--color-black)] text-base md:text-lg">
                    {t(`auth.sectionV1.benefits.item${item}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full min-w-0 md:-mt-8 relative z-10">
          <div className="w-full min-w-0">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
