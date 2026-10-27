"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FloatingCard } from "@/components/motion/floating-card";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/context/language-context";
import {
  Code2,
  Server,
  Database,
  Rocket,
  ArrowDown,
  Sparkles,
  MapPin,
} from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#102A21] bg-grid-dark text-[#F3F5ED] pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      aria-label="Pengenalan dan Hero"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-[#D4F52B]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ── Main Headline Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status badge */}
            <Reveal delay={0.1}>
              <div className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17382C] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] sm:shadow-[3px_3px_0px_#111713] text-[11px] sm:text-xs font-mono font-bold text-[#D4F52B] mb-4 sm:mb-6 select-none">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4F52B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4F52B]" />
                </span>
                <span>{t.hero.role.toUpperCase()}</span>
                <span className="text-[#C5D4CA]/50">•</span>
                <span className="text-[#C5D4CA] inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                  {t.hero.location}
                </span>
              </div>
            </Reveal>

            {/* H1 Headline */}
            <Reveal delay={0.2}>
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black tracking-tight leading-[1.12] text-[#F3F5ED]">
                {t.hero.headlineBefore}
                <span className="inline-block relative mt-1">
                  <span className="relative z-10 text-[#111713] bg-[#D4F52B] px-2 sm:px-3 py-0.5 rounded-xl border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713] inline-block -rotate-1 hover:rotate-0 transition-transform">
                    {t.hero.headlineHighlight}
                  </span>
                </span>
              </h1>
            </Reveal>

            {/* Sub-highlight */}
            <Reveal delay={0.3}>
              <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#17382C]/70 border border-[#D4F52B]/30 text-xs sm:text-sm font-mono text-[#D4F52B]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{t.hero.subHighlight}</span>
              </div>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.4}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#C5D4CA] max-w-2xl font-normal leading-relaxed">
                {t.hero.description}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.5} className="w-full">
              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  onClick={scrollToProjects}
                  className="w-full xs:w-auto justify-center"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href="#contact"
                  onClick={scrollToContact}
                  className="w-full xs:w-auto justify-center"
                >
                  <span>{t.hero.secondaryCta}</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ── Decorative Floating Cards Column ── */}
          {/*
            On mobile (<lg): show as a 2-column grid, condensed.
            On lg+: show as a single stacked column with offsets.
          */}
          <div className="lg:col-span-5 relative w-full mt-2 sm:mt-4 lg:mt-0">
            {/* Dotted connector path — hidden on small mobile, subtle on sm+ */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block opacity-25"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 60 80 Q 200 150 280 200 T 120 320"
                fill="none"
                stroke="#D4F52B"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* 2-col on mobile/tablet, 1-col stacked on lg */}
            <div className="relative w-full grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
              {/* Card 1: Frontend */}
              <FloatingCard
                icon={<Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" aria-hidden="true" />}
                label={t.hero.floatingCards.frontend.label}
                sublabel={t.hero.floatingCards.frontend.sublabel}
                delay={0}
                duration={4.2}
                yDelta={6}
                className="lg:translate-x-3"
              />

              {/* Card 2: Backend */}
              <FloatingCard
                icon={<Server className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4F52B]" aria-hidden="true" />}
                label={t.hero.floatingCards.backend.label}
                sublabel={t.hero.floatingCards.backend.sublabel}
                delay={0.8}
                duration={4.8}
                yDelta={8}
                highlight={true}
                className="lg:translate-x-6"
              />

              {/* Card 3: Database */}
              <FloatingCard
                icon={<Database className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" aria-hidden="true" />}
                label={t.hero.floatingCards.database.label}
                sublabel={t.hero.floatingCards.database.sublabel}
                delay={1.5}
                duration={3.8}
                yDelta={5}
                className="lg:translate-x-2"
              />

              {/* Card 4: Deployment */}
              <FloatingCard
                icon={<Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" aria-hidden="true" />}
                label={t.hero.floatingCards.deployment.label}
                sublabel={t.hero.floatingCards.deployment.sublabel}
                delay={2.2}
                duration={4.5}
                yDelta={7}
                className="lg:translate-x-5"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
