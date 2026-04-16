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
  { label: "Fund Structure", value: "Private Debt Fund (LLC)" },
  { label: "Strategy", value: "Senior & Second-Lien RE Secured Lending" },
  { label: "Collateral Types", value: "Residential, Multifamily, Commercial" },
  { label: "Lien Position", value: "Senior & Second Lien" },
  { label: "Target LTV", value: "55–70% (Weighted Average)" },
  { label: "Loan Terms", value: "6–36 Months" },
  { label: "Geography", value: "California" },
  { label: "Distributions", value: "Monthly" },
  { label: "Investor Eligibility", value: "Accredited Investors" },
  { label: "Minimum Investment", value: "Contact for Details" },
];

const INVESTMENT_PHILOSOPHY = [
  {
    icon: Shield,
    title: "Capital Preservation First",
    description:
      "Every lending decision begins with downside analysis. Conservative loan-to-value ratios and rigorous underwriting ensure a healthy margin of safety protects investor capital in every transaction.",
  },
  {
    icon: BarChart3,
    title: "Consistent Income Generation",
    description:
      "Our fund is structured to deliver a stable and consistent income stream through monthly distributions, backed by a diversified portfolio of performing real estate-secured loans.",
  },
  {
    icon: TrendingUp,
    title: "Attractive Risk-Adjusted Returns",
    description:
      "By focusing on senior and private loans secured by real estate, WCG seeks to generate favorable returns while diligently managing risk — providing a compelling alternative to traditional fixed-income.",
  },
  {
    icon: Clock,
    title: "Short Duration, Low Correlation",
    description:
      "Short-term loan durations reduce interest rate sensitivity, while real estate collateral provides insulation from public market volatility and broader economic cycles.",
  },
];

const WHY_INVEST = [
  "Over $170M deployed across 400+ transactions",
  "11+ year track record with zero months of principal loss",
  "Monthly income distributions to investors",
  "Senior secured positions with conservative LTV ratios",
  "Vertically integrated origination, underwriting, and servicing",
  "Comprehensive lending and loan servicing platform",
  "Diversified across residential, multifamily, and commercial assets",
  "Disciplined risk management and portfolio construction",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Initial Inquiry",
    description:
      "Contact our team to request investor materials, including the fund overview, terms, and historical performance data. We welcome the opportunity to discuss your investment objectives.",
  },
  {
    step: "02",
    title: "Accredited Investor Verification",
    description:
      "As a private fund, WCG is available exclusively to accredited investors as defined by the SEC. We will verify your eligibility as part of the onboarding process.",
  },
  {
    step: "03",
    title: "Review & Due Diligence",
    description:
      "Review the fund's offering documents, subscription agreement, and operating agreement. Our team is available to answer questions and provide additional materials as needed.",
  },
  {
    step: "04",
    title: "Subscribe & Fund",
    description:
      "Complete the subscription documents and fund your investment. Once your capital is deployed, you will receive monthly distribution statements and quarterly portfolio reports.",
  },
];

export default function InvestorsContent() {
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
            <p className="label-text text-bronze-400 mb-4">For Investors</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Attractive Income With a Significant Margin of Safety
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              Williams Capital Group offers accredited investors access to a
              private debt fund focused on delivering consistent, risk-adjusted
              returns through disciplined real estate secured lending.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Headline Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="glass-card shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "$170M+", label: "Capital Deployed", detail: "Since inception" },
                { value: "400+", label: "Transactions", detail: "Funded to date" },
                { value: "11+", label: "Year Track Record", detail: "Consistent performance" },
                { value: "0", label: "Principal Loss", detail: "Months since inception" },
              ].map((stat, i) => (
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
                <div className="mt-8 space-y-6 text-charcoal-600 text-body leading-relaxed">
                  <p>
                    WCG&apos;s investment strategy revolves around seeking attractive
                    risk-adjusted returns by focusing on a diverse range of real
                    estate-related debt vehicles. This approach involves primarily
                    investing in senior and private loans that are secured by both
                    residential and commercial investment properties.
                  </p>
                  <p>
                    By carefully selecting and underwriting these loans, WCG aims
                    to generate favorable returns while diligently managing the
                    associated risks. The firm&apos;s focus on capital preservation,
                    coupled with its dedication to maintaining a healthy margin of
                    safety, reflects its commitment to safeguarding the interests
                    of its investors.
                  </p>
                  <p>
                    To ensure a continuous stream of investment opportunities, WCG
                    has developed a comprehensive lending and loan servicing
                    platform that supports in-house origination, underwriting,
                    and asset management.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-charcoal-950 rounded-2xl p-10">
                <h3 className="font-serif text-heading font-semibold text-white mb-8">
                  Fund Terms
                </h3>
                <div className="space-y-5">
                  {FUND_TERMS.map(({ label, value }) => (
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
                <div className="flex gap-6 p-8 rounded-2xl bg-ivory border border-charcoal-100 h-full">
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

      {/* Why Invest */}
      <section className="section-padding-y bg-charcoal-950">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="label-text text-bronze-400 mb-4">
                  Why WCG
                </p>
                <h2 className="font-serif text-display font-bold text-white mb-6">
                  Built for Income &amp; Preservation
                </h2>
                <p className="text-charcoal-400 text-body leading-relaxed">
                  WCG is dedicated to fulfilling its mission of delivering a
                  stable and consistent income stream to investors while
                  prioritizing capital preservation above all else.
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
                      className="text-forest-400 mt-0.5 shrink-0"
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
                <div className="bg-white rounded-2xl border border-charcoal-100 p-8 h-full">
                  <span className="font-serif text-3xl font-bold text-forest-600 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-heading-sm font-semibold text-charcoal-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 text-body-sm leading-relaxed">
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
            <div className="bg-forest-50 border border-forest-200 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                  <AlertCircle size={20} className="text-forest-700" />
                </div>
                <div>
                  <h3 className="font-serif text-heading font-semibold text-charcoal-950 mb-1">
                    Accredited Investor Eligibility
                  </h3>
                  <p className="text-charcoal-600 text-body-sm">
                    WCG&apos;s private debt fund is available exclusively to
                    accredited investors as defined by the U.S. Securities and
                    Exchange Commission.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={18} className="text-forest-600" />
                    <h4 className="font-semibold text-charcoal-950 text-body-sm">
                      Income Threshold
                    </h4>
                  </div>
                  <p className="text-charcoal-600 text-body-sm leading-relaxed">
                    Individual income exceeding $200,000 (or $300,000 jointly
                    with a spouse) in each of the two most recent years, with a
                    reasonable expectation of reaching the same level in the
                    current year.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 size={18} className="text-forest-600" />
                    <h4 className="font-semibold text-charcoal-950 text-body-sm">
                      Net Worth Threshold
                    </h4>
                  </div>
                  <p className="text-charcoal-600 text-body-sm leading-relaxed">
                    Individual or joint net worth exceeding $1,000,000,
                    excluding the value of the primary residence.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Licensing */}
      <section className="bg-charcoal-950 py-12">
        <div className="max-w-4xl mx-auto section-padding">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="label-text text-bronze-400 mb-2">Licensing</p>
                <p className="text-charcoal-400 text-body-sm">
                  California Department of Real Estate — DRE #02030467
                </p>
              </div>
              <Button href="/contact" variant="primary" size="lg">
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
            <h2 className="font-serif text-display font-bold text-charcoal-950 mb-6">
              Start the Conversation
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Contact our team to learn more about the WCG private debt fund,
              request offering documents, or discuss how our strategy can
              complement your portfolio.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <p className="text-charcoal-400 text-xs mt-8 max-w-xl mx-auto">
              Past performance is not indicative of future results. All
              investments carry risk, including the potential loss of principal.
              Securities offered through applicable exemptions. Available to
              accredited investors only.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
