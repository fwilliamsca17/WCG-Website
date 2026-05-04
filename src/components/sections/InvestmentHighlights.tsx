"use client";

import FadeIn from "@/components/ui/FadeIn";
import { FUND_HIGHLIGHTS } from "@/lib/constants";

export default function InvestmentHighlights() {
  return (
    <section className="section-padding-y bg-ivory">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Anchor heading — editorial, left-aligned */}
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="label-text text-silver-600 mb-4">Why WCG</p>
              <h2 className="font-serif text-display font-bold text-slate-950 mb-6 leading-tight">
                A disciplined approach to private lending.
              </h2>
              <p className="text-body text-slate-600 leading-relaxed">
                Vertically integrated origination, underwriting, servicing,
                and asset management — built around capital preservation
                first, yield second.
              </p>
            </div>
          </FadeIn>

          {/* Numbered pillars — editorial list, no icon-in-circle pattern */}
          <div className="space-y-10">
            {FUND_HIGHLIGHTS.map((item, i) => (
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
  );
}
