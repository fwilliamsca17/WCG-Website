"use client";

import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding-y bg-cream">
      <div className="max-w-4xl mx-auto section-padding text-center">
        <FadeIn>
          <p className="label-text mb-4">For Accredited Investors</p>
          <h2 className="font-serif text-display md:text-display-lg font-bold text-charcoal-950 mb-6">
            Access Institutional-Quality Private Debt
          </h2>
          <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn how Williams Capital Group can deliver consistent,
            risk-adjusted fixed-income returns backed by California real estate.
            Request our investor materials today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Request Investor Materials
            </Button>
            <Button href="/track-record" variant="outline" size="lg">
              View Track Record
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
