"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ASSET_CLASSES } from "@/lib/constants";

export default function FundOverview() {
  return (
    <section className="section-padding-y bg-charcoal-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }} />

      <div className="relative max-w-7xl mx-auto section-padding">
        <FadeIn>
          <SectionHeading
            label="Lending Platform"
            title="Real Estate Secured Debt"
            subtitle="Short-term, senior and second-lien loans across California's most active real estate markets. Conservative underwriting with a focus on downside protection."
            dark
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {ASSET_CLASSES.map((asset, i) => (
            <FadeIn key={asset.name} delay={i * 0.12}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-forest-600/30 transition-all duration-300 h-full">
                <h3 className="font-serif text-heading font-semibold text-white mb-4">
                  {asset.name}
                </h3>
                <p className="text-charcoal-400 text-body-sm leading-relaxed mb-6">
                  {asset.description}
                </p>
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-charcoal-500 text-body-sm">LTV</span>
                    <span className="text-white font-medium text-body-sm">
                      {asset.ltvRange}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500 text-body-sm">Term</span>
                    <span className="text-white font-medium text-body-sm">
                      {asset.termRange}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center mt-14">
            <Button href="/strategy" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-charcoal-950">
              View Full Strategy
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
