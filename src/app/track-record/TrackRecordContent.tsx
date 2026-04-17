"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckCircle2, Shield, Layers, TrendingDown, Target } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Shield,
    title: "Senior Secured Positioning",
    description:
      "Loans are structured as senior or second-lien positions secured by real estate collateral — designed to provide priority repayment protection.",
  },
  {
    icon: TrendingDown,
    title: "Conservative LTV Targets",
    description:
      "Loan-to-value targets are set conservatively to maintain a meaningful collateral cushion relative to the underlying asset value.",
  },
  {
    icon: Layers,
    title: "Portfolio Diversification",
    description:
      "Capital is deployed across residential, multifamily, and commercial collateral types in California markets, seeking diversification of concentration risk.",
  },
  {
    icon: Target,
    title: "Active Asset Management",
    description:
      "In-house servicing and asset management monitor performance throughout each loan's life — from funding through exit — to identify and address issues early.",
  },
];

const PORTFOLIO_METRICS = [
  { label: "Target LTV Range", value: "Typically 55–70%" },
  { label: "Typical Loan Term", value: "6–36 Months" },
  { label: "Primary Collateral", value: "California Real Estate" },
  { label: "Lien Position", value: "Senior & Second" },
  { label: "Asset Classes", value: "Res., Multi, Commercial" },
  { label: "Geography", value: "California Focus" },
];

export default function TrackRecordContent() {
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
            <p className="label-text text-bronze-400 mb-4">
              Approach &amp; Experience
            </p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              A Discipline Built Over Time
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              Williams Capital Group&apos;s underwriting and asset-management
              discipline has been refined through more than a decade of
              real estate-secured lending across California markets.
              Detailed historical activity data is available to verified
              accredited investors through our offering documents.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Portfolio Principles"
              title="Conservative by Design"
              subtitle="Our portfolio is constructed around a set of disciplined principles that reflect the firm's capital preservation orientation."
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {PRINCIPLES.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-6 p-8 rounded-2xl bg-white border border-charcoal-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-heading-sm font-semibold text-charcoal-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 text-body-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="section-padding-y bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Strategy Parameters"
                  title="How Loans Are Structured"
                  align="left"
                />
                <div className="mt-8 space-y-6 text-charcoal-600 text-body leading-relaxed">
                  <p>
                    WCG&apos;s lending parameters reflect the firm&apos;s
                    conservative, capital-preservation-first philosophy. Each
                    transaction is evaluated against underwriting guidelines
                    designed to maintain a meaningful margin of safety.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "Senior and second-lien positions secured by real estate",
                      "Conservative loan-to-value targets across all asset classes",
                      "Short-duration loans to reduce interest-rate exposure",
                      "Diversified across residential, multifamily, and commercial collateral",
                      "In-house servicing and active asset management",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-forest-600 mt-0.5 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-charcoal-950 rounded-2xl p-10">
                <h3 className="font-serif text-heading font-semibold text-white mb-8">
                  Typical Parameters
                </h3>
                <div className="space-y-5">
                  {PORTFOLIO_METRICS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-charcoal-400 text-body-sm">
                        {label}
                      </span>
                      <span className="text-white font-medium text-body-sm text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-charcoal-500 text-xs mt-6 leading-relaxed">
                  Illustrative of typical WCG underwriting parameters. Actual
                  loan terms vary by transaction. See{" "}
                  <a
                    href="/disclosures"
                    className="underline hover:text-charcoal-400"
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

      {/* CTA */}
      <section className="section-padding-y bg-cream">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-serif text-display font-bold text-charcoal-950 mb-6">
              Request Historical Activity Data
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Loan-level portfolio information, historical activity data, and
              offering terms are made available to verified accredited
              investors through our offering documents.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Investor Information
            </Button>
            <p className="text-charcoal-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
              This page is informational only and does not constitute an offer
              to sell or a solicitation of an offer to buy any security. Any
              offer is made only through definitive offering documents to
              verified accredited investors under Rule 506(c) of Regulation D.
              Past performance is not indicative of future results. All
              investments involve risk, including the potential loss of
              principal. See{" "}
              <a href="/disclosures" className="underline hover:text-charcoal-600">
                important disclosures
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
