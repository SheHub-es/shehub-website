"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";

import { useTranslation } from "@/hooks/useTranslation";
import PasswordResetModal from "@/sections/auth/components/PasswordResetModal";
import AuthForm from "./components/AuthForm";

function AuthSectionV1Content() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    if (token) setShowResetModal(true);
  }, [token]);

  // - firstWord: "women" / "mujeres" / "dones" (NEGRO)
  // - gradLine2: resto de la primera línea (GRADIENTE)
  // - gradLine3: segunda línea (GRADIENTE)
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
              {/* Línea 1 */}
              <span className="auth-hero-line1">
                {t("auth.sectionV1.title.line1")}
              </span>

              <br />

              {/* Línea 2 + 3 */}
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

            {/* Benefits list */}
            <ul className="mt-8 space-y-4" aria-label={t('auth.sectionV1.benefits.ariaLabel') || 'Benefits list'}>
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

        {/* RIGHT side form section */}
        <div className="w-full flex justify-center md:justify-end md:-mt-8">
          <div className="w-full max-w-xl">
            <AuthForm />
          </div>
        </div>
      </div>

      {/* Password Reset Modal */}
      <PasswordResetModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        token={token}
      />
    </section>
  );
}

export default function AuthSectionV1() {
  return (
    <Suspense fallback={
      <section
        className="w-full min-h-screen flex justify-center px-2 font-primary"
        style={{ backgroundColor: "var(--color-background-light)" }}
      >
        <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center py-12">
          <div className="w-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
          </div>
        </div>
      </section>
    }>
      <AuthSectionV1Content />
    </Suspense>
  );
}
