"use client";

import {
  Shield,
  Layers,
  Lock,
  TrendingUp,
  BarChart3,
  MapPin,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { FUND_HIGHLIGHTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Layers,
  Lock,
  TrendingUp,
  BarChart3,
  MapPin,
};

export default function InvestmentHighlights() {
  return (
    <section className="section-padding-y bg-ivory">
      <div className="max-w-7xl mx-auto section-padding">
        <FadeIn>
          <SectionHeading
            label="Why WCG"
            title="A Disciplined Approach to Private Lending"
            subtitle="Our vertically integrated platform combines rigorous underwriting with hands-on asset management, seeking consistent, risk-adjusted outcomes for our investors."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {FUND_HIGHLIGHTS.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-charcoal-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mb-5 group-hover:bg-forest-100 transition-colors">
                    {Icon && (
                      <Icon size={22} className="text-forest-700" />
                    )}
                  </div>
                  <h3 className="font-serif text-heading-sm font-semibold text-charcoal-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600 text-body-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
