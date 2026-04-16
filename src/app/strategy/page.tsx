import type { Metadata } from "next";
import StrategyContent from "./StrategyContent";

export const metadata: Metadata = {
  title: "Investment Strategy",
  description:
    "WCG specializes in short-term, senior and second-lien loans secured by residential, multifamily, and commercial real estate. Conservative LTV lending with a focus on capital preservation.",
};

export default function StrategyPage() {
  return <StrategyContent />;
}
