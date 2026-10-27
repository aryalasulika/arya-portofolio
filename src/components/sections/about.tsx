"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Layout, ShieldCheck, Cpu, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  const principleIcons = [
    <Layout key="layout" className="w-5 h-5 sm:w-6 sm:h-6 text-[#102A21]" />,
    <ShieldCheck key="shield" className="w-5 h-5 sm:w-6 sm:h-6 text-[#102A21]" />,
    <Cpu key="cpu" className="w-5 h-5 sm:w-6 sm:h-6 text-[#102A21]" />,
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FFFFFF] py-14 sm:py-20 lg:py-28 border-b-2 border-[#111713]"
      aria-label="About the Developer"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={
              <>
                {t.about.titleBefore}
                <span className="inline-block bg-[#D4F52B] px-2.5 py-0.5 rounded-lg border-2 border-[#111713] shadow-[3px_3px_0px_#111713]">
                  {t.about.titleHighlight}
                </span>
              </>
            }
            description={t.about.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Editorial Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-[#111713]/85 leading-relaxed font-normal">
            <Reveal delay={0.1}>
              <p>
                {t.about.p1.greeting}
                <strong className="font-extrabold text-[#111713] underline decoration-[#D4F52B] decoration-4 underline-offset-2">
                  {t.about.p1.name}
                </strong>
                {t.about.p1.suffix}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>{t.about.p2}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <p>{t.about.p3}</p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F5ED] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713]">
                <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase text-[#102A21] mb-2">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#102A21] shrink-0" />
                  <span>{t.about.focusBadge}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#111713]/85 leading-relaxed">{t.about.focusText}</p>
              </div>
            </Reveal>
          </div>

          {/* Core Principles Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {t.about.principles.map((item, idx) => (
              <Reveal key={item.title} delay={0.2 + idx * 0.1}>
                <div className="p-4 sm:p-6 rounded-2xl bg-[#F3F5ED] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713] hover:-translate-y-1 hover:shadow-[5px_5px_0px_#111713] sm:hover:shadow-[6px_6px_0px_#111713] transition-all">
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                    <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#D4F52B] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] shrink-0">
                      {principleIcons[idx % principleIcons.length]}
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#111713] break-words">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#111713]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
