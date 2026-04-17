"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-forest-950 to-charcoal-950" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bronze-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto section-padding w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="label-text text-bronze-400 mb-6"
          >
            Private Debt Fund &mdash; Accredited Investors
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-display-lg md:text-display-xl font-bold text-white mb-8 text-balance"
          >
            Capital Preservation Through{" "}
            <span className="text-forest-400">Disciplined Lending</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body-lg text-charcoal-300 max-w-2xl mb-10 leading-relaxed"
          >
            A California-based private lending firm focused on short-term
            real estate-secured transactions, seeking to deliver consistent
            income through disciplined underwriting and a conservative margin
            of safety.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Request Information
            </Button>
            <Button href="/strategy" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-charcoal-950 hover:border-white">
              Investment Strategy
            </Button>
          </motion.div>
        </div>

        {/* Decorative stat preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden xl:block absolute right-28 top-1/2 -translate-y-1/2"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 w-72">
            <p className="text-bronze-400 text-label uppercase tracking-widest mb-3">
              Firm Snapshot
            </p>
            <p className="font-serif text-5xl font-bold text-white mb-2">
              11+ <span className="text-2xl text-charcoal-400">Years</span>
            </p>
            <p className="text-charcoal-400 text-body-sm">
              Disciplined underwriting since inception
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-charcoal-400 text-body-sm">Capital Deployed</span>
                <span className="font-serif text-white font-bold text-xl">$170M+</span>
              </div>
            </div>
            <p className="text-charcoal-500 text-[10px] mt-4 leading-relaxed">
              Historical figures. Past performance is not indicative of future
              results.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
