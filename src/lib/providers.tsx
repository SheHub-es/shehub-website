"use client";

import { CookieConsentProvider } from "@/providers/CookieConsentProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { UserTabbingClass } from "@/providers/UserTabbingClass";
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
      <CookieConsentProvider>
        <LanguageProvider initialLanguage={initialLanguage}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <UserTabbingClass />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </CookieConsentProvider>
    </ReduxProvider>
  );
}
