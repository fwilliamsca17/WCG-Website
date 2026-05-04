"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  CheckCircle2,
  Shield,
  BarChart3,
  TrendingUp,
  Clock,
  DollarSign,
  AlertCircle,
} from "lucide-react";

const FUND_TERMS = [
  { label: "Structure", value: "Private Lending LLC" },
  { label: "Strategy", value: "Senior & Second-Lien RE Secured Lending" },
  { label: "Collateral Types", value: "Residential, Multifamily, Commercial" },
  { label: "Lien Position", value: "Senior & Second Lien" },
  { label: "Target LTV Range", value: "Typically 55–70%" },
  { label: "Typical Loan Terms", value: "6–36 Months" },
  { label: "Geography", value: "California Focus" },
  { label: "Distribution Objective", value: "Income-Oriented" },
  { label: "Investor Eligibility", value: "Accredited Investors" },
  { label: "Minimum Investment", value: "See Offering Documents" },
];

const INVESTMENT_PHILOSOPHY = [
  {
    icon: Shield,
    title: "Capital Preservation Focus",
    description:
      "Every lending decision begins with downside analysis. Conservative loan-to-value ratios and rigorous underwriting are designed to maintain a meaningful margin of safety on each transaction.",
  },
  {
    icon: BarChart3,
    title: "Income-Oriented Strategy",
    description:
      "WCG's strategy seeks to generate a steady income stream from a diversified portfolio of real estate-secured loans. Distribution amounts and frequency are subject to the terms of the applicable offering and are not guaranteed.",
  },
  {
    icon: TrendingUp,
    title: "Seeking Risk-Adjusted Outcomes",
    description:
      "By focusing on senior and private loans secured by real estate, WCG seeks favorable risk-adjusted outcomes while actively managing credit and collateral risk. There is no assurance investment objectives will be achieved.",
  },
  {
    icon: Clock,
    title: "Short Duration, Real Asset Collateral",
    description:
      "Short-term loan durations may reduce interest-rate sensitivity, and real estate collateral provides a tangible asset base that is less directly correlated with public market movements.",
  },
];

const WHY_INVEST = [
  "More than a decade of disciplined underwriting experience",
  "Income-oriented strategy backed by real estate collateral",
  "Senior and second-lien positions with conservative LTV targets",
  "Integrated origination, underwriting, and servicing platform",
  "Diversified across residential, multifamily, and commercial collateral",
  "Disciplined risk management and portfolio construction",
  "California-focused, local-market expertise",
  "Transparent reporting to verified accredited investors",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Inquiry",
    description:
      "Contact our team to request investor materials, including the offering overview, terms, and historical activity data. We welcome the opportunity to discuss your investment objectives.",
  },
  {
    step: "02",
    title: "Third-Party Accreditation Verification",
    description:
      "Because WCG operates under Rule 506(c), accredited-investor status must be verified by a qualified third party (licensed CPA, attorney, registered broker-dealer, or SEC-registered investment adviser) before any offering documents are delivered.",
  },
  {
    step: "03",
    title: "Review Offering Documents",
    description:
      "After verification, review the Private Placement Memorandum, Operating Agreement, and Subscription Documents. Our team is available to answer questions and arrange follow-up diligence.",
  },
  {
    step: "04",
    title: "Subscribe & Fund",
    description:
      "Complete the subscription documents and fund your commitment. Distribution amounts, frequency, and investor reporting are described in the offering documents.",
  },
];

export default function InvestorsContent() {
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
            <p className="label-text text-silver-400 mb-4">For Investors</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Attractive Income With a Significant Margin of Safety
            </h1>
            <p className="text-body-lg text-slate-300 max-w-2xl leading-relaxed">
              Williams Capital Group operates a private lending strategy for
              accredited investors — focused on real estate-secured loans and
              disciplined underwriting with a capital preservation orientation.
            </p>
            <div className="mt-8 bg-silver-900/20 border border-silver-600/30 rounded-lg p-5 max-w-2xl">
              <p className="text-silver-200 text-body-sm leading-relaxed">
                <strong className="text-silver-100">Informational only.</strong>{" "}
                This page is not an offer to sell or a solicitation of an offer
                to buy any security. Any offer will be made solely through
                definitive offering documents to qualified accredited
                investors.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Strategy at a Glance */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="glass-card shadow-xl p-8 md:p-12">
            <p className="label-text text-center text-silver-600 mb-8">
              Strategy at a Glance
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "Senior", label: "Lien Positions", detail: "Senior & second-lien secured" },
                { value: "Short", label: "Duration", detail: "Typically 6–36 month terms" },
                { value: "Conservative", label: "LTV Targets", detail: "Margin-of-safety focus" },
                { value: "California", label: "Collateral", detail: "Statewide real estate focus" },
              ].map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  <div className="text-center">
                    <p className="font-serif text-heading md:text-heading-lg font-bold text-navy-800">
                      {stat.value}
                    </p>
                    <p className="font-semibold text-slate-800 text-body-sm mt-2">
                      {stat.label}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      {stat.detail}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fund Overview Table */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Fund Overview"
                  title="WCG Private Debt Fund"
                  align="left"
                />
                <div className="mt-8 space-y-6 text-slate-600 text-body leading-relaxed">
                  <p>
                    WCG&apos;s investment strategy focuses on seeking
                    risk-adjusted outcomes through a diverse range of real
                    estate-related debt vehicles — primarily senior and private
                    loans secured by residential and commercial investment
                    properties.
                  </p>
                  <p>
                    By carefully selecting and underwriting these loans, WCG
                    seeks to generate favorable outcomes while actively
                    managing credit, collateral, and market risk. The firm&apos;s
                    focus on capital preservation is reflected in conservative
                    loan-to-value targets and a disciplined margin of safety.
                  </p>
                  <p>
                    To support a continuous flow of investment opportunities,
                    WCG operates a comprehensive lending and loan servicing
                    platform that supports in-house origination, underwriting,
                    and asset management.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-slate-950 rounded-2xl p-10">
                <h3 className="font-serif text-heading font-semibold text-white mb-8">
                  Fund Terms
                </h3>
                <div className="space-y-5">
                  {FUND_TERMS.map(({ label, value }) => (
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
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="section-padding-y bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Investment Philosophy"
              title="How We Protect & Grow Your Capital"
              subtitle="WCG combines expertise in real estate lending with a meticulous approach to investment selection, always striving to provide investors with compelling risk-adjusted returns."
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {INVESTMENT_PHILOSOPHY.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-6 p-8 rounded-2xl bg-ivory border border-slate-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-heading-sm font-semibold text-slate-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-body-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding-y bg-slate-950">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="label-text text-silver-400 mb-4">
                  Why WCG
                </p>
                <h2 className="font-serif text-display font-bold text-white mb-6">
                  Built for Income &amp; Preservation
                </h2>
                <p className="text-slate-400 text-body leading-relaxed">
                  WCG&apos;s mission is to pursue consistent income for
                  investors while prioritizing capital preservation — reflected
                  in conservative lending parameters and active portfolio
                  management.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-4">
                {WHY_INVEST.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-navy-400 mt-0.5 shrink-0"
                    />
                    <span className="text-white text-body-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Getting Started"
              title="How to Invest"
              subtitle="A straightforward process designed to provide transparency and support at every stage."
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-100 p-8 h-full">
                  <span className="font-serif text-3xl font-bold text-navy-600 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-heading-sm font-semibold text-slate-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-body-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accredited Investor Definition */}
      <section className="section-padding-y bg-white">
        <div className="max-w-4xl mx-auto section-padding">
          <FadeIn>
            <div className="bg-navy-50 border border-navy-200 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                  <AlertCircle size={20} className="text-navy-700" />
                </div>
                <div>
                  <h3 className="font-serif text-heading font-semibold text-slate-950 mb-1">
                    Verified Accredited Investors Only
                  </h3>
                  <p className="text-slate-600 text-body-sm leading-relaxed">
                    WCG operates under{" "}
                    <strong>Rule 506(c) of Regulation D</strong>. Under 506(c),
                    accredited-investor status must be{" "}
                    <strong>verified by a qualified third party</strong> —
                    such as a licensed CPA, attorney, registered broker-dealer,
                    or SEC-registered investment adviser — before any offering
                    documents are provided. Self-certification alone is not
                    sufficient.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={18} className="text-navy-600" />
                    <h4 className="font-semibold text-slate-950 text-body-sm">
                      Income Threshold
                    </h4>
                  </div>
                  <p className="text-slate-600 text-body-sm leading-relaxed">
                    Individual income exceeding $200,000 (or $300,000 jointly
                    with a spouse) in each of the two most recent years, with a
                    reasonable expectation of reaching the same level in the
                    current year.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 size={18} className="text-navy-600" />
                    <h4 className="font-semibold text-slate-950 text-body-sm">
                      Net Worth Threshold
                    </h4>
                  </div>
                  <p className="text-slate-600 text-body-sm leading-relaxed">
                    Individual or joint net worth exceeding $1,000,000,
                    excluding the value of the primary residence.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reg D banner */}
      <section className="bg-slate-950 py-12">
        <div className="max-w-5xl mx-auto section-padding">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="label-text text-silver-400 mb-3">
                  Regulation D Rule 506(c)
                </p>
                <p className="text-slate-300 text-body-sm leading-relaxed max-w-2xl">
                  Interests are offered pursuant to Rule 506(c) of Regulation
                  D under the Securities Act of 1933. Available exclusively
                  to verified accredited investors. See{" "}
                  <a
                    href="/disclosures"
                    className="text-silver-400 underline hover:text-silver-300"
                  >
                    important disclosures
                  </a>
                  .
                </p>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="shrink-0">
                Request Investor Materials
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-y bg-cream">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <FadeIn>
            <h2 className="font-serif text-display font-bold text-slate-950 mb-6">
              Start the Conversation
            </h2>
            <p className="text-body-lg text-slate-600 mb-8">
              Contact our team to learn more about the WCG private debt fund,
              request offering documents, or discuss how our strategy can
              complement your portfolio.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <p className="text-slate-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
              This website is for informational purposes only and does not
              constitute an offer to sell or a solicitation of an offer to buy
              any security. Any offer will be made only through definitive
              offering documents delivered to qualified accredited investors.
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
