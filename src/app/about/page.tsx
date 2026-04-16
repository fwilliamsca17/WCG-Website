import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Williams Capital Group is a California-based private debt fund with an 11-year track record of capital preservation through disciplined real estate secured lending.",
};

export default function AboutPage() {
  return <AboutContent />;
}
