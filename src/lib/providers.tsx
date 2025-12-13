"use client";

import { LanguageProvider } from "@/providers/LanguageProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!googleClientId) {
    console.error('Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID');
    // En producción podrías lanzar un error o deshabilitar el botón
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId || ''}>
      <ReduxProvider>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </ReduxProvider>
    </GoogleOAuthProvider>
  );
}
