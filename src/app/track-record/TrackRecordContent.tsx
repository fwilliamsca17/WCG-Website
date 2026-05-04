"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Senior Secured Positioning",
    description:
      "Loans are structured as senior or second-lien positions secured by real estate collateral — designed to provide priority repayment protection.",
  },
  {
    title: "Conservative LTV Targets",
    description:
      "Loan-to-value targets are set conservatively to maintain a meaningful collateral cushion relative to the underlying asset value.",
  },
  {
    title: "Portfolio Diversification",
    description:
      "Capital is deployed across residential, multifamily, and commercial collateral types in California markets, seeking diversification of concentration risk.",
  },
  {
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
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 to-navy-950">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-7xl mx-auto section-padding">
          <FadeIn>
            <p className="label-text text-silver-400 mb-4">
              Approach &amp; Experience
            </p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              A Discipline Built Over Time
            </h1>
            <p className="text-body-lg text-slate-300 max-w-2xl leading-relaxed">
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
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <FadeIn>
              <div className="lg:sticky lg:top-32">
                <p className="label-text text-silver-600 mb-4">Portfolio Principles</p>
                <h2 className="font-serif text-display font-bold text-slate-950 mb-6 leading-tight">
                  Conservative by design.
                </h2>
                <p className="text-body text-slate-600 leading-relaxed">
                  The portfolio is constructed around a small set of
                  disciplined principles that reflect the firm&apos;s capital
                  preservation orientation.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-10">
              {PRINCIPLES.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 pb-10 border-b border-slate-200 last:border-0 last:pb-0">
                    <span className="font-serif text-2xl font-light text-silver-500 tabular-nums leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-heading font-semibold text-slate-950 mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
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
                <div className="mt-8 space-y-6 text-slate-600 text-body leading-relaxed">
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
                          className="text-navy-600 mt-0.5 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-slate-950 rounded-md p-10">
                <h3 className="font-serif text-heading font-semibold text-white mb-8">
                  Typical Parameters
                </h3>
                <div className="space-y-5">
                  {PORTFOLIO_METRICS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-400 text-body-sm">
                        {label}
                      </span>
                      <span className="text-white font-medium text-body-sm text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-6 leading-relaxed">
                  Illustrative of typical WCG underwriting parameters. Actual
                  loan terms vary by transaction. See{" "}
                  <a
                    href="/disclosures"
                    className="underline hover:text-slate-400"
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
            <h2 className="font-serif text-display font-bold text-slate-950 mb-6">
              Request Historical Activity Data
            </h2>
            <p className="text-body-lg text-slate-600 mb-8">
              Loan-level portfolio information, historical activity data, and
              offering terms are made available to verified accredited
              investors through our offering documents.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Investor Information
            </Button>
            <p className="text-slate-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
              This page is informational only and does not constitute an offer
              to sell or a solicitation of an offer to buy any security. Any
              offer is made only through definitive offering documents to
              verified accredited investors under Rule 506(c) of Regulation D.
              Past performance is not indicative of future results. All
              investments involve risk, including the potential loss of
              principal. See{" "}
              <a href="/disclosures" className="underline hover:text-slate-600">
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
