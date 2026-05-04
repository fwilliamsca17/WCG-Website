"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
const VALUES = [
  {
    title: "Capital Preservation First",
    description:
      "Every lending decision begins with downside analysis. We ask 'what can go wrong' before 'what can we earn.' This philosophy shapes our conservative approach to loan-to-value, collateral, and borrower selection.",
  },
  {
    title: "Disciplined Underwriting",
    description:
      "Conservative loan-to-value ratios, thorough due diligence, and experienced borrower assessment. We decline more opportunities than we fund — selectivity is our edge.",
  },
  {
    title: "Alignment of Interests",
    description:
      "Our principals invest alongside our fund investors. When your capital is at work, so is ours. This ensures every decision is made with a shared commitment to protecting capital.",
  },
  {
    title: "Vertical Integration",
    description:
      "In-house origination, underwriting, servicing, and asset management provides complete control over the loan lifecycle and enables rapid, informed decision-making at every stage.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 to-navy-950">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-7xl mx-auto section-padding">
          <FadeIn>
            <p className="label-text text-silver-400 mb-4">About WCG</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Eleven Years of Disciplined Capital Deployment
            </h1>
            <p className="text-body-lg text-slate-300 max-w-2xl leading-relaxed">
              Founded on the principle that sustainable outcomes are built
              through conservative underwriting and rigorous risk management —
              not aggressive yield-chasing.
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
                <div className="mt-8 space-y-6 text-slate-600 text-body leading-relaxed">
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
              <div className="bg-white rounded-md border border-slate-100 p-10">
                <h3 className="font-serif text-heading font-semibold text-slate-950 mb-8">
                  Fund at a Glance
                </h3>
                <div className="space-y-6">
                  {[
                    ["Structure", "Private Lending LLC"],
                    ["Domicile", "California"],
                    ["Strategy", "Senior & Second-Lien RE Lending"],
                    ["Collateral", "Residential, Multifamily, Commercial"],
                    ["Geography", "California Focus"],
                    ["Investor Type", "Verified Accredited Investors"],
                    ["Exemption", "Rule 506(c) of Regulation D"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-500 text-body-sm">
                        {label}
                      </span>
                      <span className="font-medium text-slate-950 text-body-sm text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-6 leading-relaxed">
                  Informational only. See{" "}
                  <a
                    href="/disclosures"
                    className="underline hover:text-slate-600"
                  >
                    important disclosures
                  </a>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding-y bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <FadeIn>
              <div className="lg:sticky lg:top-32">
                <p className="label-text text-silver-600 mb-4">Our Philosophy</p>
                <h2 className="font-serif text-display font-bold text-slate-950 mb-6 leading-tight">
                  Principles that guide every decision.
                </h2>
                <p className="text-body text-slate-600 leading-relaxed">
                  Durable outcomes are built on discipline, transparency, and
                  a consistent focus on protecting investor capital.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-10">
              {VALUES.map((value, i) => (
                <FadeIn key={value.title} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 pb-10 border-b border-slate-200 last:border-0 last:pb-0">
                    <span className="font-serif text-2xl font-light text-silver-500 tabular-nums leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-heading font-semibold text-slate-950 mb-3 leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-body leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-y bg-cream">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-serif text-display font-bold text-slate-950 mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-body-lg text-slate-600 mb-8">
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
