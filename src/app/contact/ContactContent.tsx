"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Building2,
} from "lucide-react";

type InquiryType = "investor" | "borrower" | "general";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>("investor");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", SITE_CONFIG.web3formsKey);
    formData.append("subject", `WCG ${inquiryType} Inquiry — ${formData.get("name")}`);
    formData.append("from_name", "WCG Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Silently handle — form stays visible for retry
    } finally {
      setSubmitting(false);
    }
  }

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
            <p className="label-text text-bronze-400 mb-4">Contact</p>
            <h1 className="font-serif text-display-lg font-bold text-white mb-6 max-w-3xl">
              Start a Conversation
            </h1>
            <p className="text-body-lg text-charcoal-300 max-w-2xl leading-relaxed">
              Whether you&apos;re an accredited investor seeking portfolio
              diversification or a real estate professional exploring financing
              options, we welcome the opportunity to connect.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding-y bg-ivory">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            {/* Form */}
            <FadeIn>
              <div className="bg-white rounded-2xl border border-charcoal-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2
                        size={32}
                        className="text-forest-600"
                      />
                    </div>
                    <h3 className="font-serif text-heading-lg font-bold text-charcoal-950 mb-4">
                      Thank You
                    </h3>
                    <p className="text-charcoal-600 text-body max-w-md mx-auto mb-8">
                      We&apos;ve received your inquiry and will respond within
                      one business day. We look forward to connecting with you.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-heading-lg font-bold text-charcoal-950 mb-2">
                      Inquiry Form
                    </h2>
                    <p className="text-charcoal-500 text-body-sm mb-8">
                      All fields marked with * are required.
                    </p>

                    {/* Inquiry Type Selector */}
                    <div className="flex gap-2 mb-8">
                      {(
                        [
                          ["investor", "Investor"],
                          ["borrower", "Borrower"],
                          ["general", "General"],
                        ] as const
                      ).map(([type, label]) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`px-5 py-2.5 rounded-lg text-body-sm font-medium transition-all ${
                            inquiryType === type
                              ? "bg-forest-700 text-white"
                              : "bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input
                        type="hidden"
                        name="inquiry_type"
                        value={inquiryType}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal-800 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-body-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal-800 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-body-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal-800 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-body-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal-800 mb-2">
                            Company / Entity
                          </label>
                          <input
                            type="text"
                            name="company"
                            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-body-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white"
                            placeholder="Your company or entity name"
                          />
                        </div>
                      </div>

                      {inquiryType === "investor" && (
                        <div>
                          <label className="block text-body-sm font-medium text-charcoal-800 mb-2">
                            Accredited Investor Status *
                          </label>
                          <select
                            name="accredited_status"
                            required
                            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-body-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white"
                          >
                            <option value="">Select status</option>
                            <option value="yes_individual">
                              Yes — Individual
                            </option>
                            <option value="yes_entity">Yes — Entity</option>
                            <option value="no">
                              No / Not Sure
                            </option>
                          </select>
                        </div>
                      )}

                      <div>
                        <label className="block text-body-sm font-medium text-charcoal-800 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-charcoal-200 rounded-lg text-body-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all bg-white resize-none"
                          placeholder={
                            inquiryType === "investor"
                              ? "I'm interested in learning more about the WCG fund..."
                              : inquiryType === "borrower"
                                ? "I have a project I'd like to discuss financing for..."
                                : "How can we help you?"
                          }
                        />
                      </div>

                      <div className="flex items-start gap-3 bg-ivory rounded-lg p-4 border border-charcoal-100">
                        <input
                          type="checkbox"
                          name="consent"
                          required
                          id="consent"
                          className="mt-1 h-4 w-4 rounded border-charcoal-300 text-forest-600 focus:ring-forest-500"
                        />
                        <label
                          htmlFor="consent"
                          className="text-charcoal-600 text-xs leading-relaxed"
                        >
                          I acknowledge that this inquiry is informational
                          only, does not create an investment relationship,
                          and that I have reviewed WCG&apos;s{" "}
                          <a
                            href="/privacy"
                            className="text-forest-700 underline hover:text-forest-800"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="/disclosures"
                            className="text-forest-700 underline hover:text-forest-800"
                          >
                            Important Disclosures
                          </a>
                          . I consent to Williams Capital Group contacting me
                          regarding my inquiry.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={submitting}
                      >
                        {submitting ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={18} />
                            Send Inquiry
                          </span>
                        )}
                      </Button>

                      <p className="text-charcoal-400 text-xs leading-relaxed">
                        Submission of this form does not constitute an offer,
                        solicitation, or investment agreement. Any offer of
                        securities will be made only through definitive
                        offering documents to qualified accredited investors.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.15}>
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl border border-charcoal-100 p-8">
                  <h3 className="font-serif text-heading-sm font-semibold text-charcoal-950 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                        <Building2 size={18} className="text-forest-700" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-800 text-body-sm">
                          Office
                        </p>
                        <p className="text-charcoal-500 text-body-sm">
                          {SITE_CONFIG.contact.address}
                          <br />
                          {SITE_CONFIG.contact.city},{" "}
                          {SITE_CONFIG.contact.state}{" "}
                          {SITE_CONFIG.contact.zip}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-forest-700" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-800 text-body-sm">
                          Phone
                        </p>
                        <a
                          href={`tel:${SITE_CONFIG.contact.phone}`}
                          className="text-charcoal-500 hover:text-forest-700 transition-colors text-body-sm"
                        >
                          {SITE_CONFIG.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-forest-700" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal-800 text-body-sm">
                          Email
                        </p>
                        <a
                          href={`mailto:${SITE_CONFIG.contact.email}`}
                          className="text-charcoal-500 hover:text-forest-700 transition-colors text-body-sm"
                        >
                          {SITE_CONFIG.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investor Info */}
                <div className="bg-forest-800 rounded-2xl p-8">
                  <h3 className="font-serif text-heading-sm font-semibold text-white mb-4">
                    For Accredited Investors
                  </h3>
                  <p className="text-forest-200 text-body-sm leading-relaxed mb-6">
                    Request our investor package for detailed information on fund
                    terms, historical performance, and subscription process.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Fund overview & terms",
                      "Historical performance data",
                      "Subscription documents",
                      "Due diligence materials",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-forest-100 text-body-sm"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-forest-300 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-forest-300 text-xs">
                    Materials available to verified accredited investors.
                  </p>
                </div>

                {/* Map placeholder */}
                <div className="bg-charcoal-100 rounded-2xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      size={28}
                      className="text-charcoal-400 mx-auto mb-2"
                    />
                    <p className="text-charcoal-500 text-body-sm">
                      West Covina, California
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
