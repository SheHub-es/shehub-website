"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

type LegalPlaceholderProps = {
  titleKey:
    | "legal.privacyPolicy"
    | "legal.termsOfService"
    | "legal.privacyAndTerms"
    | "legal.cookieSettings";
};

export default function LegalPlaceholder({ titleKey }: LegalPlaceholderProps) {
  const { t } = useTranslation();

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center font-secondary">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        {t(titleKey)}
      </h1>
      <p className="text-size-400 text-muted-foreground max-w-md mb-8">
        {t("underConstruction.legalPlaceholder")}
      </p>
      <Link
        href="/"
        className="text-size-400 font-semibold text-purple-600 hover:text-purple-700 underline focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
      >
        {t("legal.backToHome")}
      </Link>
    </main>
  );
}
