import type { Metadata } from "next";
import InvestorsContent from "./InvestorsContent";

export const metadata: Metadata = {
  title: "Invest in Private Real Estate Debt — Accredited Investors",
  description:
    "WCG's private debt fund offers accredited investors attractive risk-adjusted returns through senior secured real estate lending. Monthly distributions, conservative LTV, and 11+ years with zero principal loss.",
  alternates: { canonical: "https://wcapitalgroupllc.com/investors" },
  openGraph: {
    title: "Invest in Private Real Estate Debt — Williams Capital Group",
    description:
      "Accredited investor fund offering monthly distributions, capital preservation, and consistent income through California real estate secured lending.",
    url: "https://wcapitalgroupllc.com/investors",
  },
};

export default function InvestorsPage() {
  return <InvestorsContent />;
}
