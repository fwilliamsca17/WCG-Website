import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import InvestmentHighlights from "@/components/sections/InvestmentHighlights";
import FundOverview from "@/components/sections/FundOverview";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <InvestmentHighlights />
      <FundOverview />
      <CTASection />
    </>
  );
}
