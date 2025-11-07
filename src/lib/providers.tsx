"use client";

import { LanguageProvider } from "@/providers/LanguageProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <LanguageProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </ReduxProvider>
  );
}
