import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollbarVisibility from "@/components/layout/ScrollbarVisibility";
import ScrollToTop from "@/components/layout/ScrollToTop";
import UnderConstructionBanner from "@/components/layout/UnderConstructionBanner";
import { AppProviders } from "@/lib/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito, Ubuntu } from "next/font/google";
import { cookies } from "next/headers";


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
  title: {
    default: "SheHub — Comunidad tech para mujeres",
    template: "%s | SheHub",
  },
  description:
    "SheHub conecta a recién graduadas y profesionales que buscan su primera experiencia en tech con mentoras con experiencia para trabajar en proyectos reales. Mentoría, experiencia práctica y comunidad tech. Empoderamos a mujeres en tech, diseño e innovación digital.",
  keywords: [
    "mujeres en tech",
    "mentoría tech",
    "comunidad tech",
    "proyectos colaborativos",
    "carrera tech",
    "SheHub",
  ],
  authors: [{ name: "SheHub", url: "https://shehub.es" }],
  creator: "SheHub",
  openGraph: {
    title: "SheHub — Comunidad tech para mujeres",
    description:
      "Conectamos a recién graduadas y a quienes buscan su primera experiencia en tech con mentoras para proyectos reales. Mentoría, experiencia práctica y comunidad tech. Únete a SheHub.",
    url: "https://shehub.es",
    siteName: "SheHub",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SheHub — Comunidad tech para mujeres",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SheHub — Comunidad tech para mujeres",
    description:
      "Conectamos a recién graduadas y a quienes buscan su primera experiencia en tech con mentoras para proyectos reales. Mentoría, experiencia práctica y comunidad tech.",
  },
  robots: {
    index: true,
    follow: true,
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
