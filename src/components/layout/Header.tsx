"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Williams Capital Group home">
          <div
            className={cn(
              "relative h-11 w-12 transition-all duration-300",
              isScrolled ? "" : "brightness-0 invert"
            )}
          >
            <Image
              src="/wcg-logo-mark.svg"
              alt=""
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-sans font-bold text-sm md:text-base tracking-[0.04em] transition-colors",
                isScrolled ? "text-navy-800" : "text-white"
              )}
            >
              WILLIAMS CAPITAL
            </span>
            <span
              className={cn(
                "text-[10px] tracking-[0.22em] uppercase font-semibold transition-colors",
                isScrolled ? "text-silver-500" : "text-white/70"
              )}
            >
              Group LLC
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
                  ? "text-slate-700 hover:text-navy-700 hover:bg-navy-50"
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
              ? "text-slate-700 hover:bg-slate-100"
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
              className="px-4 py-3 text-body-lg font-medium text-slate-800 hover:text-navy-700 hover:bg-navy-50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-100">
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
