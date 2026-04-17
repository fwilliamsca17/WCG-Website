"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const HEADLINE_STATS = [
  {
    value: "$170M+",
    label: "Capital Deployed",
    detail: "Aggregate, since inception",
  },
  {
    value: "400+",
    label: "Transactions Funded",
    detail: "Residential, multifamily, commercial",
  },
  {
    value: "11+",
    label: "Years in Operation",
    detail: "Disciplined underwriting approach",
  },
  {
    value: "$0",
    label: "Reported Principal Loss",
    detail: "Since inception",
  },
];

const PORTFOLIO_METRICS = [
  { label: "Target LTV Range", value: "Typically 55–70%" },
  { label: "Typical Loan Size", value: "See Offering Docs" },
  { label: "Typical Loan Term", value: "6–36 Months" },
  { label: "Primary Collateral", value: "California RE" },
  { label: "Lien Position", value: "Senior & Second" },
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
            <p className="label-text text-bronze-400 mb-4">Track Record</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Performance Built on Discipline
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              More than a decade of disciplined capital deployment with a
              focus on downside protection and capital preservation. Historical
              figures below reflect aggregate firm activity since inception and
              are not a guarantee of future results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Headline Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="glass-card shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {HEADLINE_STATS.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  <div className="text-center">
                    <p className="stat-number">{stat.value}</p>
                    <p className="font-semibold text-charcoal-800 text-body-sm mt-2">
                      {stat.label}
                    </p>
                    <p className="text-charcoal-500 text-xs mt-1">
                      {stat.detail}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="text-center text-charcoal-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
              Aggregate, unaudited firm figures. Past performance is not
              indicative of future results. See{" "}
              <a href="/disclosures" className="underline hover:text-charcoal-600">
                important disclosures
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Metrics */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Portfolio Overview"
                  title="Conservative by Design"
                  align="left"
                />
                <div className="mt-8 space-y-6 text-charcoal-600 text-body leading-relaxed">
                  <p>
                    Our portfolio is constructed with a singular focus:
                    protecting investor capital. Every parameter reflects a
                    commitment to conservative lending practices and active
                    risk management.
                  </p>
                  <p>
                    By maintaining conservative loan-to-value targets, short
                    durations, and rigorous borrower qualification standards,
                    WCG has operated for more than a decade with no reported
                    month of principal loss since inception.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "No reported month of principal loss since inception*",
                      "Conservative LTV targets across all asset classes",
                      "Diversified across 400+ individual transactions*",
                      "Operated through the 2020 market disruption",
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
                  <p className="text-charcoal-400 text-xs mt-6 leading-relaxed">
                    *Aggregate, unaudited firm figures since inception. Past
                    performance is not indicative of future results.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-charcoal-950 rounded-2xl p-10">
                <h3 className="font-serif text-heading font-semibold text-white mb-8">
                  Portfolio Metrics
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
                      <span className="text-white font-medium text-body-sm">
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

      {/* CTA */}
      <section className="section-padding-y bg-cream">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-serif text-display font-bold text-charcoal-950 mb-6">
              See the Full Picture
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Detailed historical activity data, loan-level portfolio
              information, and offering terms are made available to qualified
              accredited investors through our offering documents.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Investor Information
            </Button>
            <p className="text-charcoal-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
              This page is informational only and does not constitute an offer
              to sell or a solicitation of an offer to buy any security. Any
              offer will be made only through definitive offering documents.
              Historical figures are aggregate, unaudited, and reflect firm
              activity since inception. Past performance is not indicative of
              future results. All investments involve risk, including the
              potential loss of principal. See{" "}
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
