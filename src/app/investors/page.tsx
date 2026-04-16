import type { Metadata } from "next";
import InvestorsContent from "./InvestorsContent";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Explore WCG's private debt fund — attractive risk-adjusted returns through senior secured real estate lending with a focus on capital preservation and monthly distributions.",
};

export default function InvestorsPage() {
  return <InvestorsContent />;
}
