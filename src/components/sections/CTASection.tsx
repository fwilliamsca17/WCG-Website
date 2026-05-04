"use client";

import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding-y bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-navy-900/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto section-padding">
        <FadeIn>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="label-text text-silver-400 mb-4">For Accredited Investors</p>
              <h2 className="font-serif text-display md:text-display-lg font-bold text-white mb-6 leading-tight max-w-2xl">
                Request the WCG investor package.
              </h2>
              <p className="text-body-lg text-slate-300 max-w-xl leading-relaxed">
                Fund overview, terms, and historical activity data are available
                to verified accredited investors under Rule 506(c) of Regulation D.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button href="/contact" variant="primary" size="lg" className="w-full lg:w-auto">
                Request Investor Materials
              </Button>
              <Button
                href="/track-record"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-slate-950 w-full lg:w-auto"
              >
                Review Strategy
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
