import type { Metadata } from "next";
import StrategyContent from "./StrategyContent";

export const metadata: Metadata = {
  title: "Investment Strategy — Real Estate Secured Lending",
  description:
    "WCG's strategy focuses on short-term senior and second-lien loans secured by California residential, multifamily, and commercial real estate. Conservative LTV ratios from 55-70% with 6-36 month terms.",
  alternates: { canonical: "https://wcapitalgroupllc.com/strategy" },
  openGraph: {
    title: "Investment Strategy — Williams Capital Group",
    description:
      "Short-term real estate secured lending across residential, multifamily, and commercial assets in California. Senior and second-lien positions with conservative underwriting.",
    url: "https://wcapitalgroupllc.com/strategy",
  },
};

export default function StrategyPage() {
  return <StrategyContent />;
}
