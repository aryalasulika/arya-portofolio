"use client";

import React from "react";
import { siteConfig } from "@/data/navigation";
import { Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { BackToTop } from "@/components/ui/back-to-top";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = 2026;

  const localizedNavItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#102A21] text-[#F3F5ED] border-t-2 border-[#111713] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/*
          Grid:
          - Mobile: 1 column, stacked
          - sm (640px): 2 columns — brand takes full row, links + status side-by-side
          - lg (1024px): 4 columns — brand 2, links 1, status 1
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand + Social — spans 2 cols on lg */}
          <div className="sm:col-span-2 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4F52B] text-[#111713] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] shrink-0">
                <Terminal className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight">
                {siteConfig.name}
                <span className="text-[#D4F52B]">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#C5D4CA] max-w-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>

            {/* Social icons */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#17382C] border-2 border-[#111713] flex items-center justify-center text-[#F3F5ED] hover:bg-[#D4F52B] hover:text-[#111713] active:bg-[#D4F52B] active:text-[#111713] transition-colors shadow-[2px_2px_0px_#111713] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                aria-label="Profil GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#17382C] border-2 border-[#111713] flex items-center justify-center text-[#F3F5ED] hover:bg-[#D4F52B] hover:text-[#111713] active:bg-[#D4F52B] active:text-[#111713] transition-colors shadow-[2px_2px_0px_#111713] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                aria-label="Profil LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-xl bg-[#17382C] border-2 border-[#111713] flex items-center justify-center text-[#F3F5ED] hover:bg-[#D4F52B] hover:text-[#111713] active:bg-[#D4F52B] active:text-[#111713] transition-colors shadow-[2px_2px_0px_#111713] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                aria-label="Kirim Email"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D4F52B] mb-3 sm:mb-4">
              {"// "}{t.footer.navHeader}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {localizedNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#C5D4CA] hover:text-[#D4F52B] transition-colors inline-flex items-center gap-1.5 py-0.5 focus-visible:text-[#D4F52B] focus-visible:outline-none"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Status + Back to Top */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D4F52B] mb-3 sm:mb-4">
                {"// "}{t.footer.statusHeader}
              </h4>
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#17382C] border border-[#D4F52B]/30 text-[11px] sm:text-xs text-[#C5D4CA]">
                <span className="w-2 h-2 rounded-full bg-[#D4F52B] animate-pulse shrink-0" aria-hidden="true" />
                <span>{t.nav.mobileTagline}</span>
              </div>
              <p className="mt-2 text-[11px] sm:text-xs font-mono text-[#C5D4CA]/70">
                {siteConfig.location}
              </p>
            </div>

            <div>
              <BackToTop />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#17382C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-xs font-mono text-[#C5D4CA]/70">
          <div>
            © {currentYear} {siteConfig.name}. {t.footer.copyrightText}
          </div>
          <div className="sm:text-right">
            {t.footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
