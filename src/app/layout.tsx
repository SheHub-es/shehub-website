import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ScrollbarVisibility from "@/components/layout/ScrollbarVisibility";
import UnderConstructionBanner from "@/components/layout/UnderConstructionBanner";
import { AppProviders } from "@/lib/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Nunito, Ubuntu } from "next/font/google";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-primary",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-secondary",
});

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
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SheHub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("language")?.value;
  const initialLanguage = (langCookie === "en" || langCookie === "ca" ? langCookie : "es") as "es" | "en" | "ca";

  return (
    <html lang={initialLanguage} className={`${ubuntu.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <AppProviders initialLanguage={initialLanguage}>
          <ScrollToTop />
          <ScrollbarVisibility />
          <div className="pt-10" aria-hidden />
          <Navbar/>
          <UnderConstructionBanner />
          {children}
          <Footer/>
        </AppProviders>
      </body>
    </html>
  );
}
