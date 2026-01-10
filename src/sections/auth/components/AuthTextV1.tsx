"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function AuthTextV1() {
  const { t } = useTranslation();

  return (
    <div className="font-primary">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--color-black)] mb-4 md:mb-12">
        {t('authText.title.line1')}
        <br />
        {t('authText.title.line2')}{" "}
        <span 
          className="bg-clip-text text-transparent" 
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          {t('authText.title.gradient.line1')}
          <br />
          {t('authText.title.gradient.line2')}
        </span>
      </h1>

      <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed mt-6">
        {t('authText.description')}
      </p>
    </div>
  );
}
