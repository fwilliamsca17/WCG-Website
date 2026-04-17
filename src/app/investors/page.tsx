import type { Metadata } from "next";
import InvestorsContent from "./InvestorsContent";

export const metadata: Metadata = {
  title: "Invest in Private Real Estate Debt — Accredited Investors",
  description:
    "Informational overview of WCG's private lending strategy for accredited investors — real estate-secured loans, conservative LTV targets, and disciplined underwriting. Not an offer of securities.",
  alternates: { canonical: "https://wcapitalgroupllc.com/investors" },
  openGraph: {
    title: "Invest in Private Real Estate Debt — Williams Capital Group",
    description:
      "WCG private lending strategy for accredited investors — capital preservation focus through California real estate-secured lending. Informational only.",
    url: "https://wcapitalgroupllc.com/investors",
  },
};

export default function InvestorsPage() {
  return <InvestorsContent />;
}
