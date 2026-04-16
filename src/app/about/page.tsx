import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Williams Capital Group — Private Debt Fund",
  description:
    "Williams Capital Group LLC is a California-based private debt fund dedicated to delivering stable income to investors while prioritizing capital preservation. Over $170M deployed across 400+ transactions with zero months of principal loss.",
  alternates: { canonical: "https://wcapitalgroupllc.com/about" },
  openGraph: {
    title: "About Williams Capital Group — Private Debt Fund",
    description:
      "California private debt fund with 11+ year track record. Specializing in real estate-backed lending with a focus on capital preservation and consistent investor income.",
    url: "https://wcapitalgroupllc.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
