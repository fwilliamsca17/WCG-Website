"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TEAM_MEMBERS, SITE_CONFIG } from "@/lib/constants";
import { Mail } from "lucide-react";

export default function TeamContent() {
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
            <p className="label-text text-bronze-400 mb-4">Leadership</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Experienced Leadership, Proven Results
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              Our team combines deep real estate expertise with disciplined
              underwriting — pursuing consistent outcomes for our investors
              through a conservative, capital preservation-oriented approach.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <FadeIn>
            <SectionHeading
              label="Our Team"
              title="Meet the Leadership"
              subtitle="The people leading Williams Capital Group's disciplined, capital preservation-oriented approach to private lending."
            />
          </FadeIn>

          <div className="mt-16 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-charcoal-100 overflow-hidden mb-8">
                  <div className="grid md:grid-cols-[300px_1fr] gap-0">
                    <div className="relative bg-gradient-to-br from-forest-800 to-forest-950 min-h-[320px] md:min-h-full">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.title}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>

                    {/* Bio */}
                    <div className="p-8 md:p-10">
                      <h3 className="font-serif text-heading-lg font-bold text-charcoal-950 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-forest-700 font-medium text-body mb-6">
                        {member.title}
                      </p>
                      <p className="text-charcoal-600 text-body-sm leading-relaxed mb-8">
                        {member.bio}
                      </p>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-charcoal-500 hover:text-forest-700 transition-colors text-body-sm"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            LinkedIn
                          </a>
                        )}
                        <a
                          href={`mailto:${SITE_CONFIG.contact.email}`}
                          className="inline-flex items-center gap-2 text-charcoal-500 hover:text-forest-700 transition-colors text-body-sm"
                        >
                          <Mail size={18} />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
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
              Connect With Our Team
            </h2>
            <p className="text-body-lg text-charcoal-600 mb-8">
              Whether you&apos;re an accredited investor or a real estate
              professional, we&apos;d welcome the opportunity to discuss how WCG
              can serve your needs.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
