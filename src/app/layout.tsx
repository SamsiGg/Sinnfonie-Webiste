import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LRS Förderung Peine | Bettina Geffert",
    template: "%s | Sinnfonie – LRS Förderung Peine",
  },
  description:
    "Individuelle LRS Förderung in Peine-Stederdorf. Unterstützung für Kinder mit Lese-Rechtschreib-Schwäche. Über 20 Jahre Erfahrung.",
  keywords: [
    "LRS Peine",
    "LRS Förderung Peine",
    "Legasthenie Peine",
    "Lese Rechtschreibschwäche Peine",
    "LRS Therapie Peine",
    "Lerntherapie Peine",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sinnfonie – LRS-Förderung",
    title: "LRS Förderung Peine | Bettina Geffert",
    description:
      "Individuelle LRS Förderung in Peine-Stederdorf. Unterstützung für Kinder mit Lese-Rechtschreib-Schwäche. Über 20 Jahre Erfahrung.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sinnfonie – LRS-Förderung Bettina Geffert",
  description:
    "Individuelle LRS-Förderung für Kinder und Jugendliche in Peine-Stederdorf. Logopädin mit über 20 Jahren Erfahrung.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dinkelkamp 27",
    addressLocality: "Peine",
    addressRegion: "Niedersachsen",
    postalCode: "31228",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 52.3227,
      longitude: 10.2343,
    },
    geoRadius: "30000",
  },
  priceRange: "$$",
  knowsAbout: [
    "LRS",
    "Lese-Rechtschreib-Schwäche",
    "Legasthenie",
    "Lerntherapie",
    "Logopädie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
