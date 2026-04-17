import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/SEO/StructuredData";
import { SITE_CONFIG } from "@/lib/constants";

const BASE_URL = SITE_CONFIG.url;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "private debt fund",
    "real estate lending",
    "accredited investors",
    "fixed income alternative",
    "bridge loans",
    "California private lending",
    "capital preservation",
    "Williams Capital Group",
    "WCG",
    "private lending fund",
    "real estate secured lending",
    "senior secured loans",
    "second lien loans",
    "residential bridge loans",
    "multifamily bridge loans",
    "commercial bridge loans",
    "alternative lending",
    "private credit",
    "West Covina",
    "Los Angeles",
    "Southern California",
    "monthly distributions",
    "accredited investor fund",
    "Francisco Williams CCIM",
    "Frank Williams",
    "Capital Direct Funding",
    "fix and flip loans",
    "ground up construction loans",
  ],
  authors: [{ name: "Williams Capital Group LLC" }],
  creator: "Williams Capital Group LLC",
  publisher: "Williams Capital Group LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "California private lending firm focused on real estate-secured transactions for accredited investors. Disciplined underwriting and a capital preservation orientation. Informational only; not an offer of securities.",
    url: BASE_URL,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Williams Capital Group — Capital Preservation Through Disciplined Lending",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "California private lending firm — real estate-secured transactions for accredited investors. Informational only.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
