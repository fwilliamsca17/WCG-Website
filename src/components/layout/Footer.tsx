import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 brightness-0 invert">
                <Image
                  src="/wcg-logo-mark.svg"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="font-sans font-bold text-sm tracking-[0.04em]">
                  WILLIAMS CAPITAL
                </p>
                <p className="text-[10px] tracking-[0.22em] uppercase font-semibold text-silver-400">
                  Group LLC
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-body-sm leading-relaxed mb-6">
              A California-based private debt fund specializing in short-term
              real estate secured lending for accredited investors.
            </p>
            <p className="text-slate-500 text-body-sm">
              West Covina, California
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold text-heading-sm mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-body-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-heading-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-navy-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-body-sm">
                  {SITE_CONFIG.contact.address}
                  <br />
                  {SITE_CONFIG.contact.city}, {SITE_CONFIG.contact.state}{" "}
                  {SITE_CONFIG.contact.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-navy-500 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-slate-400 hover:text-white transition-colors text-body-sm"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-navy-500 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-slate-400 hover:text-white transition-colors text-body-sm"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold text-heading-sm mb-6">
              Important Information
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed mb-3">
              This website is for informational purposes only and does not
              constitute an offer to sell or a solicitation of an offer to
              buy any security. Any offer is made only through definitive
              offering documents to verified accredited investors under{" "}
              <strong className="text-slate-400">
                Rule 506(c) of Regulation D
              </strong>
              .
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Past performance is not indicative of future results. All
              investments involve risk, including the potential loss of
              principal. See our{" "}
              <Link
                href="/disclosures"
                className="text-silver-400 hover:text-silver-300 underline transition-colors"
              >
                important disclosures
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto section-padding py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-body-sm">
            &copy; {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-body-sm">
            <Link
              href="/disclosures"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Disclosures
            </Link>
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
