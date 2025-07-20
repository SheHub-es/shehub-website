import "@/styles/globals.css";
import type { Metadata } from "next";

import { AppProviders } from "@/lib/providers";

import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://shehub.es"),
  title: "SheHub",
  description:
    "Reusable components, styles, and documentation for building SheHub’s digital products.",
  openGraph: {
    title: "SheHub",
    description:
      "A centralized system of UI components and design guidelines for SheHub projects.",
    url: "https://shehub.es",
    siteName: "SheHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SheHub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <Navbar />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
