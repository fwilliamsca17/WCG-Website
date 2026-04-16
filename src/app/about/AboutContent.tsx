"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Shield, Target, Users, Building2 } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Capital Preservation First",
    description:
      "Every lending decision begins with downside analysis. We ask 'what can go wrong' before 'what can we earn.' This philosophy has produced 11 years of consistent performance without a single month of principal loss.",
  },
  {
    icon: Target,
    title: "Disciplined Underwriting",
    description:
      "Conservative loan-to-value ratios, thorough due diligence, and experienced borrower assessment. We decline more opportunities than we fund — selectivity is our edge.",
  },
  {
    icon: Users,
    title: "Alignment of Interests",
    description:
      "Our principals invest alongside our fund investors. When your capital is at work, so is ours. This ensures every decision is made with a shared commitment to protecting capital.",
  },
  {
    icon: Building2,
    title: "Vertical Integration",
    description:
      "In-house origination, underwriting, servicing, and asset management provides complete control over the loan lifecycle and enables rapid, informed decision-making at every stage.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-charcoal-950 to-forest-950">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-7xl mx-auto section-padding">
          <FadeIn>
            <p className="label-text text-bronze-400 mb-4">About WCG</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Eleven Years of Disciplined Capital Deployment
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              Founded on the principle that consistent returns are built through
              conservative underwriting and rigorous risk management — not
              aggressive yield-chasing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Our Story"
                  title="Built for Capital Preservation"
                  align="left"
                />
                <div className="mt-8 space-y-6 text-charcoal-600 text-body leading-relaxed">
                  <p>
                    Williams Capital Group LLC is dedicated to fulfilling its
                    mission of delivering a stable and consistent income stream
                    to investors while prioritizing capital preservation. The
                    firm operates with a steadfast commitment to maintaining a
                    healthy margin of safety in every investment it undertakes.
                  </p>
                  <p>
                    WCG specializes in the field of private and alternative
                    lending, with a strong emphasis on real estate-backed
                    transactions. To ensure a continuous stream of investment
                    opportunities for its funds, WCG has developed a
                    comprehensive lending and loan servicing platform.
                  </p>
                  <p>
                    The investment strategy revolves around seeking attractive
                    risk-adjusted returns by focusing on a diverse range of real
                    estate-related debt vehicles — primarily investing in senior
                    and private loans secured by both residential and commercial
                    investment properties. By carefully selecting and
                    underwriting these loans, WCG generates favorable returns
                    while diligently managing the associated risks.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-charcoal-100 p-10">
                <h3 className="font-serif text-heading font-semibold text-charcoal-950 mb-8">
                  Fund at a Glance
                </h3>
                <div className="space-y-6">
                  {[
                    ["Structure", "Private Debt Fund (LLC)"],
                    ["Domicile", "California"],
                    ["Strategy", "Senior & Second-Lien Real Estate Lending"],
                    ["Collateral", "Residential, Multifamily, Commercial"],
                    ["Geography", "California"],
                    ["Investor Type", "Accredited Investors"],
                    ["Track Record", "11+ Years"],
                    ["Principal Loss", "Zero Months"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center pb-4 border-b border-charcoal-50 last:border-0 last:pb-0"
                    >
                      <span className="text-charcoal-500 text-body-sm">
                        {label}
                      </span>
                      <span className="font-medium text-charcoal-950 text-body-sm text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding-y bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Our Philosophy"
              title="Principles That Guide Every Decision"
              subtitle="We believe that exceptional long-term performance comes from discipline, transparency, and an unwavering commitment to protecting investor capital."
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="flex gap-6 p-6 rounded-2xl hover:bg-forest-50/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center shrink-0">
                    <value.icon size={22} className="text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-heading-sm font-semibold text-charcoal-950 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-charcoal-600 text-body-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-y bg-cream">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-serif text-display font-bold text-charcoal-950 mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Request our investor materials to understand how WCG can fit into
              your portfolio.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Information
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
