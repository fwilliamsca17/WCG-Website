"use client";

import FadeIn from "@/components/ui/FadeIn";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="glass-card shadow-xl p-8 md:p-12">
          <p className="label-text text-center text-bronze-600 mb-8">
            Strategy at a Glance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-heading md:text-heading-lg font-bold text-forest-800">
                    {stat.value}
                  </p>
                  <p className="text-charcoal-800 text-body-sm mt-2 font-semibold">
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
  );
}
