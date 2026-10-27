"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(56);

  const localizedNavItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  // Track actual header height for mobile menu positioning
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    if (headerRef.current) ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Allow drawer close animation before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#102A21]/95 backdrop-blur-md border-b-2 border-[#111713] py-2.5 shadow-md"
            : "bg-[#102A21]/80 backdrop-blur-sm py-3 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="group flex items-center gap-2 text-base sm:text-xl font-black tracking-tight text-[#F3F5ED] hover:opacity-95 transition-opacity shrink-0"
              aria-label="Arya.dev — kembali ke awal halaman"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4F52B] text-[#111713] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] group-hover:rotate-6 transition-transform shrink-0">
                <Terminal className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span>
                {siteConfig.name}
                <span className="text-[#D4F52B]">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links (lg+) */}
            <nav
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#17382C]/80 border border-[#D4F52B]/20 backdrop-blur-sm"
              aria-label="Navigasi utama"
            >
              {localizedNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#C5D4CA] hover:text-[#D4F52B] focus-visible:text-[#D4F52B] transition-colors rounded-full hover:bg-[#102A21] focus-visible:bg-[#102A21] focus-visible:outline-none"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right: Language Switcher + CTA (md+) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <LanguageSwitcher variant="navbar" />
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
              >
                <span>{t.nav.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Right: Language Switcher + Hamburger (below md) */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher variant="navbar" />
              <button
                type="button"
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#17382C] text-[#D4F52B] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] hover:bg-[#15372B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B] touch-manipulation cursor-pointer shrink-0"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — rendered outside header to avoid stacking issues */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 z-40 bg-[#102A21]/98 backdrop-blur-xl border-b-4 border-[#111713] flex flex-col md:hidden"
          style={{ top: `${headerHeight}px` }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          {/* Scrollable inner content */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
            <div className="flex flex-col gap-2.5">
              {/* Section label */}
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#D4F52B] uppercase mb-1 select-none">
                {"// "}{t.nav.mobileTitle}
              </div>

              {/* Language Switcher inside drawer */}
              <div className="mb-2">
                <LanguageSwitcher variant="mobile" />
              </div>

              {/* Nav links — large touch targets */}
              {localizedNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#17382C] border-2 border-[#111713] text-base font-bold text-[#F3F5ED] hover:bg-[#D4F52B] hover:text-[#111713] active:bg-[#D4F52B] active:text-[#111713] transition-colors shadow-[2px_2px_0px_#111713] min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-sm opacity-50" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sticky bottom CTA */}
          <div className="shrink-0 px-4 sm:px-6 pt-4 pb-6 border-t border-[#17382C] flex flex-col gap-3 bg-[#102A21]/95">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center min-h-[52px]"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <p className="text-center font-mono text-xs text-[#C5D4CA] select-none">
              {siteConfig.location} • {t.nav.mobileTagline}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
