"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

export default function UnderConstructionBanner() {
  const { t } = useTranslation();

  return (
    <div
      className="mt-3 sm:mt-4 bg-purple-100 border-b border-purple-200/60 py-2 px-4 sm:py-2.5 sm:px-5 md:py-2.5 md:px-6"
      role="status"
      aria-live="polite"
    >
      <div className="max-w-[1248px] mx-auto flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="font-secondary text-size-400 text-purple-800 leading-snug max-w-xl">
          {t("underConstruction.message")}
        </span>
        <Link
          href="/join"
          className="inline-flex items-center justify-center font-primary font-bold text-size-400 text-purple-600 hover:text-purple-700 bg-purple-200/80 hover:bg-purple-300/80 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shrink-0 transition-colors"
        >
          {t("underConstruction.cta")}
        </Link>
      </div>
    </div>
  );
}
