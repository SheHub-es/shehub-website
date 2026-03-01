"use client";

import { useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
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
      className="w-full min-h-screen flex justify-center px-2 font-primary"
      style={{ backgroundColor: "var(--color-background-light)" }}
    >
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center py-12">
        {/* LEFT side text section */}
        <div className="w-full flex justify-center md:justify-start md:-mt-20">
          <div className="w-full max-w-xl text-left">
            <h1 className="auth-hero-title mb-4 md:mb-12 text-[color:var(--color-black)]">
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

        {/* RIGHT side form - solo lista de espera */}
        <div className="w-full flex justify-center md:justify-end md:-mt-8">
          <div className="w-full max-w-xl">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
