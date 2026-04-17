import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Williams Capital Group — Private Debt Fund",
  description:
    "Williams Capital Group LLC is a California-based private lending firm focused on real estate-secured transactions, with a capital preservation orientation and more than a decade of disciplined underwriting.",
  alternates: { canonical: "https://wcapitalgroupllc.com/about" },
  openGraph: {
    title: "About Williams Capital Group — Private Debt Fund",
    description:
      "California private lending firm with 11+ years of disciplined underwriting. Focused on real estate-secured transactions and capital preservation.",
    url: "https://wcapitalgroupllc.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
