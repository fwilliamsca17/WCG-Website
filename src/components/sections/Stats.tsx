"use client";

import FadeIn from "@/components/ui/FadeIn";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="glass-card shadow-xl p-8 md:p-12">
          <p className="label-text text-center text-bronze-600 mb-8">
            Firm Activity Since Inception
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="stat-number">{stat.value}</p>
                  <p className="text-charcoal-500 text-body-sm mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-charcoal-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
            Historical figures reflect aggregate firm activity since inception.
            Past performance is not indicative of future results. See{" "}
            <a href="/disclosures" className="underline hover:text-charcoal-600">
              important disclosures
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
