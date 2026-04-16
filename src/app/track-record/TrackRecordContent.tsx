"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const HEADLINE_STATS = [
  {
    value: "$170M+",
    label: "Total Capital Deployed",
    detail: "Since inception across all asset classes",
  },
  {
    value: "400+",
    label: "Transactions Funded",
    detail: "Residential, multifamily, and commercial",
  },
  {
    value: "11+",
    label: "Year Track Record",
    detail: "Consistent performance through market cycles",
  },
  {
    value: "0",
    label: "Months of Principal Loss",
    detail: "Capital preservation at its core",
  },
];

const PORTFOLIO_METRICS = [
  { label: "Weighted Average LTV", value: "~62%" },
  { label: "Average Loan Size", value: "$425K" },
  { label: "Average Loan Term", value: "12 Months" },
  { label: "Primary Collateral", value: "California RE" },
  { label: "Lien Position", value: "Senior & Second" },
  { label: "Distribution Frequency", value: "Monthly" },
];

const MILESTONES = [
  {
    year: "2013–2015",
    title: "Foundation & Early Deployment",
    description:
      "Established the fund with a disciplined approach to residential bridge lending in Southern California. Built proprietary origination channels and underwriting infrastructure.",
  },
  {
    year: "2016–2018",
    title: "Expansion & Diversification",
    description:
      "Expanded lending into multifamily and commercial asset classes. Crossed $50M in cumulative capital deployed with zero principal losses.",
  },
  {
    year: "2019–2021",
    title: "Market Resilience",
    description:
      "Navigated the COVID-19 economic disruption without a single month of principal loss — a testament to conservative underwriting and proactive asset management.",
  },
  {
    year: "2022–Present",
    title: "Institutional Growth",
    description:
      "Surpassed $170M in cumulative deployments and 400+ transactions. Enhanced operational capabilities with expanded in-house servicing and asset management infrastructure.",
  },
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
              Over a decade of consistent capital deployment with an unwavering
              focus on downside protection. Our numbers tell the story.
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
                    Our portfolio is constructed with a singular focus: protecting
                    investor capital. Every metric reflects our commitment to
                    conservative lending practices and prudent risk management.
                  </p>
                  <p>
                    By maintaining low loan-to-value ratios, short durations, and
                    rigorous borrower qualification standards, we&apos;ve built a
                    track record that speaks for itself — 11+ years of consistent
                    performance without a single month of principal loss.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {[
                      "No month of principal loss since inception",
                      "Conservative LTV ratios across all asset classes",
                      "Diversified across 400+ individual transactions",
                      "Navigated 2020 market disruption without loss",
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

      {/* Timeline */}
      <section className="section-padding-y bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Milestones"
              title="A Decade of Disciplined Growth"
            />
          </FadeIn>

          <div className="mt-16 space-y-8 max-w-3xl mx-auto">
            {MILESTONES.map((milestone, i) => (
              <FadeIn key={milestone.year} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-10">
                  <div className="shrink-0 w-28 md:w-36">
                    <span className="label-text text-bronze-600">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="pb-8 border-l-2 border-forest-200 pl-6 md:pl-10 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest-600 border-4 border-white" />
                    <h3 className="font-serif text-heading-sm font-semibold text-charcoal-950 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-charcoal-600 text-body-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="section-padding-y bg-cream">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-serif text-display font-bold text-charcoal-950 mb-6">
              See the Full Picture
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Request our detailed investor package for comprehensive performance
              data, fund terms, and subscription information.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Performance Data
            </Button>
            <p className="text-charcoal-400 text-xs mt-8 max-w-xl mx-auto">
              Past performance is not indicative of future results. All
              investments carry risk, including the potential loss of principal.
              Performance data available to qualified, accredited investors upon
              request.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
