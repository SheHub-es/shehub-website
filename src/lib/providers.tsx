"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReduxProvider } from "@/components/providers/redux-provider";
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
}
