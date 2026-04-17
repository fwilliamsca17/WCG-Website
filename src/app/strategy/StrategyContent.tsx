"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  ArrowDown,
  CheckCircle2,
  Building2,
  Home,
  Warehouse,
} from "lucide-react";

const LOAN_PROGRAMS = [
  {
    icon: Home,
    name: "Residential Bridge",
    description:
      "Short-term bridge loans for residential property acquisitions, fix-and-flip projects, and ground-up construction in California markets.",
    details: [
      "Loan sizes: $250K – $5M",
      "LTV: Up to 70%",
      "Terms: 6–24 months",
      "Interest-only payments",
      "1st lien position",
    ],
  },
  {
    icon: Building2,
    name: "Multifamily Bridge",
    description:
      "Transitional financing for value-add multifamily acquisitions, repositioning strategies, and stabilization capital across California.",
    details: [
      "Loan sizes: $500K – $10M",
      "LTV: Up to 65%",
      "Terms: 12–36 months",
      "Interest-only structure",
      "1st or 2nd lien position",
    ],
  },
  {
    icon: Warehouse,
    name: "Commercial Bridge",
    description:
      "Short-term financing solutions for commercial property acquisitions, refinances, and value-add business plans requiring speed and flexibility.",
    details: [
      "Loan sizes: $500K – $10M",
      "LTV: Up to 60%",
      "Terms: 12–24 months",
      "Interest-only payments",
      "1st or 2nd lien position",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Origination & Screening",
    description:
      "Proprietary deal flow through our broker network and direct borrower relationships. Initial screening evaluates borrower experience, property fundamentals, and exit strategy viability.",
  },
  {
    step: "02",
    title: "Underwriting & Due Diligence",
    description:
      "Comprehensive analysis including independent appraisals, title review, environmental screening, and detailed borrower financial assessment. Conservative LTV targets are designed to provide a meaningful collateral cushion.",
  },
  {
    step: "03",
    title: "Funding & Documentation",
    description:
      "Institutional-quality loan documentation with robust borrower covenants and collateral protections. Loans funded through the WCG debt fund structure.",
  },
  {
    step: "04",
    title: "Servicing & Asset Management",
    description:
      "In-house loan servicing monitors payment performance, property condition, and borrower compliance. Active asset management through loan maturity and successful exit.",
  },
];

export default function StrategyContent() {
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
              Investment Strategy
            </p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Short-Term Real Estate Secured Lending
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              A conservative, collateral-first approach to private debt —
              targeting attractive risk-adjusted returns while maintaining
              institutional-quality underwriting standards.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <SectionHeading
                  label="Investment Thesis"
                  title="Why Private Real Estate Debt?"
                  align="left"
                />
                <div className="mt-8 space-y-6 text-charcoal-600 text-body leading-relaxed">
                  <p>
                    Private real estate debt offers accredited investors a
                    compelling alternative to traditional fixed-income
                    instruments. By originating short-term, senior-secured loans
                    backed by tangible real estate assets, WCG provides:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Attractive yields above traditional fixed-income",
                      "Real asset collateral with conservative LTV ratios",
                      "Short duration reducing interest rate sensitivity",
                      "Low correlation to public equity and bond markets",
                      "Monthly income distributions",
                      "Downside protection through collateral cushion",
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
              <div className="bg-charcoal-950 rounded-2xl p-10 text-white">
                <h3 className="font-serif text-heading font-semibold mb-8">
                  Fund Parameters
                </h3>
                <div className="space-y-5">
                  {[
                    ["Strategy", "Short-Term RE Secured Lending"],
                    ["Collateral", "Residential, Multifamily, Commercial"],
                    ["Lien Position", "Senior & Second Lien"],
                    ["Target LTV", "55–70% (Weighted Average)"],
                    ["Loan Terms", "6–36 Months"],
                    ["Geography", "California"],
                    ["Min Investment", "Contact for Details"],
                    ["Distributions", "Monthly"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-charcoal-400 text-body-sm">
                        {label}
                      </span>
                      <span className="font-medium text-body-sm text-right">
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

      {/* Loan Programs */}
      <section className="section-padding-y bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Loan Programs"
              title="Collateral-Backed Lending Across Asset Classes"
              subtitle="Our lending platform serves experienced real estate operators with speed, certainty, and flexible structuring across three core property types."
            />
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {LOAN_PROGRAMS.map((program, i) => (
              <FadeIn key={program.name} delay={i * 0.1}>
                <div className="bg-ivory rounded-2xl p-8 border border-charcoal-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mb-5">
                    <program.icon size={22} className="text-forest-700" />
                  </div>
                  <h3 className="font-serif text-heading font-semibold text-charcoal-950 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-charcoal-600 text-body-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-body-sm text-charcoal-700"
                      >
                        <ArrowDown
                          size={12}
                          className="text-forest-600 rotate-[-90deg]"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding-y bg-charcoal-950">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Our Process"
              title="From Origination to Exit"
              subtitle="A rigorous, four-stage process is designed to evaluate every loan against institutional-quality standards from origination through resolution."
              dark
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-forest-600/30 transition-colors h-full">
                  <span className="font-serif text-3xl font-bold text-forest-500 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-heading-sm font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-400 text-body-sm leading-relaxed">
                    {step.description}
                  </p>
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
              Invest with Confidence
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Request our investor package for complete details on fund terms,
              performance, and subscription information.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Investor Package
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
