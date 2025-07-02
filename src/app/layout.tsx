import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReduxProvider } from "@/components/providers/redux-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://design.shehub.es"), // Adjusts according to actual domain
  title: "SheHub Design System",
  description:
    "Reusable components, styles, and documentation for building SheHub’s digital products.",
  openGraph: {
    title: "SheHub Design System",
    description:
      "A centralized system of UI components and design guidelines for SheHub projects.",
    url: "https://design.shehub.es", // Adjusts according to actual domain
    siteName: "SheHub Design System",
    images: [
      {
        url: "/og-design-system.png",
        width: 1200,
        height: 630,
        alt: "SheHub Design System Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
