"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/navigation";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useLanguage } from "@/context/language-context";
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
  Send,
} from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
    } catch {
      // Fallback silently
    } finally {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#102A21] bg-grid-dark text-[#F3F5ED] py-14 sm:py-20 lg:py-28 overflow-hidden"
      aria-label="Kontak dan Kolaborasi"
    >
      {/* Background glow accent */}
      <div
        className="absolute bottom-0 right-1/4 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-[#D4F52B]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={t.contact.eyebrow}
            title={
              <>
                {t.contact.titleBefore}
                <span className="inline-block bg-[#D4F52B] text-[#111713] px-2.5 sm:px-3 py-0.5 rounded-xl border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713]">
                  {t.contact.titleHighlight}
                </span>
              </>
            }
            description={t.contact.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          {/* ── Main Contact Action Box ── */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="h-full flex flex-col p-4 sm:p-7 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#17382C] border-2 border-[#D4F52B]/40 shadow-[4px_4px_0px_#111713] sm:shadow-[6px_6px_0px_#111713]">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#102A21] border border-[#D4F52B]/30 text-[11px] sm:text-xs font-mono text-[#D4F52B] mb-4 sm:mb-6 self-start select-none">
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{t.contact.directCommBadge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#F3F5ED] tracking-tight mb-3 sm:mb-4 break-words">
                  {t.contact.directTitle}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-[#C5D4CA] mb-5 sm:mb-8 leading-relaxed">
                  {t.contact.directDesc}
                </p>

                {/* Email address container */}
                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#102A21] border-2 border-[#111713]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Email info */}
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#D4F52B] text-[#111713] border border-[#111713] shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="text-[10px] sm:text-xs font-mono text-[#C5D4CA] uppercase mb-0.5">
                          {t.contact.emailLabel}
                        </div>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="block text-xs sm:text-sm md:text-base font-bold text-[#F3F5ED] hover:text-[#D4F52B] transition-colors focus-visible:text-[#D4F52B] focus-visible:outline-none"
                          style={{ wordBreak: "break-all", overflowWrap: "anywhere" }}
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    {/* Copy button */}
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-[#17382C] hover:bg-[#D4F52B] active:bg-[#D4F52B] text-[#F3F5ED] hover:text-[#111713] active:text-[#111713] text-xs font-mono font-bold border border-[#D4F52B]/30 transition-all cursor-pointer touch-manipulation select-none min-h-[44px] sm:self-auto self-stretch focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                      aria-label="Salin alamat email"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                          <span>{t.contact.copiedBtn}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{t.contact.copyBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-5 sm:mt-8 pt-5 sm:pt-6 border-t border-[#102A21] flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20via%20Arya.dev`}
                    className="w-full sm:w-auto justify-center"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>{t.contact.launchEmailBtn}</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Social Profiles & Availability Cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Social Networks */}
            <Reveal delay={0.2}>
              <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#17382C] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[5px_5px_0px_#111713]">
                <h4 className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D4F52B] mb-3 sm:mb-4">
                  {"// "}{t.contact.networksHeader}
                </h4>

                <div className="space-y-3">
                  {/* GitHub */}
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-xl bg-[#102A21] border-2 border-[#111713] hover:border-[#D4F52B] transition-all min-h-[56px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#17382C] flex items-center justify-center text-[#F3F5ED] group-hover:text-[#D4F52B] transition-colors shrink-0">
                        <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#F3F5ED] truncate">
                          {t.contact.githubTitle}
                        </div>
                        <div className="text-[10px] sm:text-xs font-mono text-[#C5D4CA]/70 truncate">
                          {t.contact.githubDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#C5D4CA] group-hover:text-[#D4F52B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2"
                      aria-hidden="true"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-xl bg-[#102A21] border-2 border-[#111713] hover:border-[#D4F52B] transition-all min-h-[56px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F52B]"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#17382C] flex items-center justify-center text-[#F3F5ED] group-hover:text-[#D4F52B] transition-colors shrink-0">
                        <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-[#F3F5ED] truncate">
                          {t.contact.linkedinTitle}
                        </div>
                        <div className="text-[10px] sm:text-xs font-mono text-[#C5D4CA]/70 truncate">
                          {t.contact.linkedinDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#C5D4CA] group-hover:text-[#D4F52B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Availability Status */}
            <Reveal delay={0.3}>
              <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#17382C] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[5px_5px_0px_#111713]">
                <div className="flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-xs font-bold text-[#D4F52B] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D4F52B] animate-pulse shrink-0" aria-hidden="true" />
                  <span>{t.contact.statusHeader}</span>
                </div>
                <div className="text-lg sm:text-xl font-black text-[#F3F5ED] mb-2 break-words">
                  {t.contact.statusTitle}
                </div>
                <p className="text-xs sm:text-sm text-[#C5D4CA] leading-relaxed">
                  {t.contact.statusDesc}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
