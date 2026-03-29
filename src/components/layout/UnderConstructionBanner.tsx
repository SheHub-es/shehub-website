"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

export default function UnderConstructionBanner() {
  const { t } = useTranslation();

  return (
    <div
      className="border-b-2 border-purple-200 bg-white py-2 px-4 shadow-[0_6px_16px_-8px_rgba(55,24,158,0.18)] sm:py-2.5 sm:px-5 md:py-2.5 md:px-6"
      role="status"
      aria-live="polite"
    >
      <div className="max-w-[1248px] mx-auto flex w-full min-w-0 flex-col items-center justify-center gap-2 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-x-3 sm:gap-y-0 md:gap-x-4">
        <span className="min-w-0 font-secondary text-size-300 sm:text-size-400 text-purple-800 leading-snug text-balance text-center sm:text-left">
          {t("underConstruction.message")}
        </span>
        <Link
          href="/join"
          className="inline-flex items-center justify-center font-primary font-bold text-size-300 sm:text-size-400 text-purple-600 hover:text-purple-700 bg-purple-200/80 hover:bg-purple-300/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shrink-0 transition-colors"
        >
          {t("underConstruction.cta")}
        </Link>
      </div>
    </div>
  );
}
