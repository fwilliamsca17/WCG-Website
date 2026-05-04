"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const LOAN_PROGRAMS = [
  {
    name: "Residential Bridge",
    description:
      "Short-term bridge loans for residential property acquisitions, fix-and-flip projects, and ground-up construction in California markets.",
    details: [
      ["Loan sizes", "$250K – $5M"],
      ["LTV", "Up to 70%"],
      ["Terms", "6–24 months"],
      ["Payments", "Interest-only"],
      ["Position", "1st lien"],
    ],
  },
  {
    name: "Multifamily Bridge",
    description:
      "Transitional financing for value-add multifamily acquisitions, repositioning strategies, and stabilization capital across California.",
    details: [
      ["Loan sizes", "$500K – $10M"],
      ["LTV", "Up to 65%"],
      ["Terms", "12–36 months"],
      ["Payments", "Interest-only"],
      ["Position", "1st or 2nd lien"],
    ],
  },
  {
    name: "Commercial Bridge",
    description:
      "Short-term financing solutions for commercial property acquisitions, refinances, and value-add business plans requiring speed and flexibility.",
    details: [
      ["Loan sizes", "$500K – $10M"],
      ["LTV", "Up to 60%"],
      ["Terms", "12–24 months"],
      ["Payments", "Interest-only"],
      ["Position", "1st or 2nd lien"],
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
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 to-navy-950">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-7xl mx-auto section-padding">
          <FadeIn>
            <p className="label-text text-silver-400 mb-4">
              Investment Strategy
            </p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Short-Term Real Estate Secured Lending
            </h1>
            <p className="text-body-lg text-slate-300 max-w-2xl leading-relaxed">
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
                <div className="mt-8 space-y-6 text-slate-600 text-body leading-relaxed">
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
              <div className="bg-slate-950 rounded-md p-10 text-white">
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
                      <span className="text-slate-400 text-body-sm">
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
            <div className="max-w-3xl">
              <p className="label-text text-silver-600 mb-4">Loan Programs</p>
              <h2 className="font-serif text-display font-bold text-slate-950 mb-6 leading-tight">
                Collateral-backed lending across three asset classes.
              </h2>
              <p className="text-body-lg text-slate-600 leading-relaxed">
                Speed, certainty, and flexible structuring for experienced
                real estate operators.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-px mt-16 bg-slate-200 border border-slate-200">
            {LOAN_PROGRAMS.map((program, i) => (
              <FadeIn key={program.name} delay={i * 0.1}>
                <div className="bg-white p-8 lg:p-10 h-full flex flex-col">
                  <p className="label-text text-silver-600 mb-3">
                    Program 0{i + 1}
                  </p>
                  <h3 className="font-serif text-heading font-semibold text-slate-950 mb-4 leading-tight">
                    {program.name}
                  </h3>
                  <p className="text-slate-600 text-body-sm leading-relaxed mb-8">
                    {program.description}
                  </p>
                  <dl className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    {program.details.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between items-baseline text-body-sm tabular-nums"
                      >
                        <dt className="text-slate-500">{label}</dt>
                        <dd className="text-slate-950 font-medium text-right">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding-y bg-slate-950">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <FadeIn>
              <div className="lg:sticky lg:top-32">
                <p className="label-text text-silver-400 mb-4">Our Process</p>
                <h2 className="font-serif text-display font-bold text-white mb-6 leading-tight">
                  From origination to exit.
                </h2>
                <p className="text-body text-slate-300 leading-relaxed">
                  A rigorous four-stage process evaluates every loan against
                  institutional-quality standards from origination through
                  resolution.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 pb-10 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="font-serif text-2xl font-light text-silver-400 tabular-nums leading-none mt-1">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-heading font-semibold text-white mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 text-body leading-relaxed">
                        {step.description}
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
              Invest with Confidence
            </h2>
            <p className="text-body-lg text-slate-600 mb-8">
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
