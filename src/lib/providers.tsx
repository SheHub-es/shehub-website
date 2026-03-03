"use client";

import { LanguageProvider } from "@/providers/LanguageProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Language } from "@/translations";
import { ReactNode } from "react";

export function AppProviders({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  return (
    <ReduxProvider>
      <LanguageProvider initialLanguage={initialLanguage}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </ReduxProvider>
  );
}
