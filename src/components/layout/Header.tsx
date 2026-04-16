"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-forest-700 flex items-center justify-center group-hover:bg-forest-800 transition-colors">
            <span className="font-serif text-white font-bold text-lg">W</span>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-serif font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-charcoal-950" : "text-white"
              )}
            >
              {SITE_CONFIG.shortName}
            </span>
            <span
              className={cn(
                "text-[10px] tracking-[0.15em] uppercase font-medium transition-colors",
                isScrolled ? "text-charcoal-500" : "text-white/70"
              )}
            >
              Capital Group
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-body-sm font-medium rounded-lg transition-all duration-300",
                isScrolled
                  ? "text-charcoal-700 hover:text-forest-700 hover:bg-forest-50"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="sm" className="ml-4">
            Investor Inquiry
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled
              ? "text-charcoal-700 hover:bg-charcoal-100"
              : "text-white hover:bg-white/10"
          )}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300",
          isMobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="px-4 py-3 text-body-lg font-medium text-charcoal-800 hover:text-forest-700 hover:bg-forest-50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-charcoal-100">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Investor Inquiry
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
