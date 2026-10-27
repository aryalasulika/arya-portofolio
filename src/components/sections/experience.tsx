"use client";

import React from "react";
import { journeyData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="relative bg-[#FFFFFF] py-14 sm:py-20 lg:py-28 border-b-2 border-[#111713]"
      aria-label="Perjalanan Pengembangan dan Pencapaian"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.experience.eyebrow}
            title={
              <>
                {t.experience.titleBefore}
                <span className="inline-block bg-[#D4F52B] px-2.5 py-0.5 rounded-lg border-2 border-[#111713] shadow-[3px_3px_0px_#111713]">
                  {t.experience.titleHighlight}
                </span>
              </>
            }
            description={t.experience.description}
          />
        </Reveal>

        {/*
          Timeline layout:
          - Mobile: left border at 16px from left edge, dot at -9px (half of 18px dot)
          - sm+: left border at 24px, dot at -11px (half of 22px dot)
          - The dot is absolutely positioned relative to the list item,
            not the wrapper, so it always aligns to the border line.
        */}
        <div className="relative ml-4 sm:ml-6 border-l-2 border-[#111713] pl-6 sm:pl-10 space-y-8 sm:space-y-12">
          {t.experience.items.map((item, index) => {
            const rawTechnologies = journeyData[index]?.technologies || [];

            return (
              <Reveal key={item.period} delay={index * 0.15}>
                <div className="relative group">
                  {/* Timeline dot — sits on the border line */}
                  <div
                    className="absolute -left-[31px] sm:-left-[47px] top-3 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full bg-[#D4F52B] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] group-hover:scale-125 transition-transform shrink-0"
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#F3F5ED] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[5px_5px_0px_#111713] hover:-translate-y-1 hover:shadow-[5px_5px_0px_#111713] sm:hover:shadow-[7px_7px_0px_#111713] transition-all">

                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="min-w-0 flex-1">
                        {/* Period + Badge row */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-bold text-[#102A21] bg-[#FFFFFF] px-2 py-0.5 sm:py-1 rounded-md border border-[#111713] shrink-0">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" aria-hidden="true" />
                            <span>{item.period}</span>
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold font-mono bg-[#D4F52B] text-[#111713] border border-[#111713] shrink-0">
                            {item.badge}
                          </span>
                        </div>
                        {/* Role title */}
                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#111713] tracking-tight break-words leading-tight">
                          {item.role}
                        </h3>
                      </div>

                      {/* Organization badge */}
                      <div className="inline-flex items-center gap-1.5 font-medium text-xs sm:text-sm text-[#111713]/80 bg-[#FFFFFF] px-2.5 py-1 sm:py-1.5 rounded-xl border border-[#111713]/30 self-start shrink-0 max-w-full">
                        <Briefcase className="w-3.5 h-3.5 text-[#102A21] shrink-0" aria-hidden="true" />
                        <span className="truncate">{item.organization}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-[#111713]/85 leading-relaxed mb-4 sm:mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-2 mb-4 sm:mb-6">
                      <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#111713]/60 mb-1.5">
                        {t.experience.highlightsLabel}
                      </div>
                      {item.contributions.map((contribution, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#111713]/90 leading-relaxed"
                        >
                          <ChevronRight
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#102A21] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{contribution}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    {rawTechnologies.length > 0 && (
                      <div className="pt-3 sm:pt-4 border-t border-[#D6DDD6] flex flex-wrap gap-1.5 sm:gap-2">
                        {rawTechnologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium bg-[#FFFFFF] text-[#111713] border border-[#111713]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
