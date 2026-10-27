"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Code, Server, Database, Wrench, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function SkillsSection() {
  const { t } = useLanguage();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" />;
      case 1:
        return <Server className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" />;
      case 2:
        return <Database className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" />;
      default:
        return <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#102A21]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative bg-[#F3F5ED] bg-grid-light py-14 sm:py-20 lg:py-28 border-b-2 border-[#111713]"
      aria-label="Technical Skills and Stack"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={
              <>
                {t.skills.titleBefore}
                <span className="inline-block bg-[#D4F52B] px-2.5 py-0.5 rounded-lg border-2 border-[#111713] shadow-[3px_3px_0px_#111713]">
                  {t.skills.titleHighlight}
                </span>
              </>
            }
            description={t.skills.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const catTranslation = t.skills.categoryTitles[category.title];
            const title = catTranslation?.title || category.title;
            const description = catTranslation?.description || category.description;

            return (
              <Reveal key={category.title} delay={idx * 0.12}>
                <div className="h-full flex flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#FFFFFF] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[5px_5px_0px_#111713] hover:-translate-y-1 hover:shadow-[5px_5px_0px_#111713] sm:hover:shadow-[7px_7px_0px_#111713] transition-all duration-200">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D4F52B] border-2 border-[#111713] shadow-[2px_2px_0px_#111713] shrink-0">
                        {getCategoryIcon(idx)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#111713] tracking-tight break-words">
                          {title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#111713]/75 mb-4 sm:mb-6 leading-relaxed">
                      {description}
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium border-2 border-[#111713] transition-all select-none ${
                            skill.highlight
                              ? "bg-[#D4F52B] text-[#111713] shadow-[2px_2px_0px_#111713] font-bold"
                              : "bg-[#F3F5ED] text-[#111713]/90 shadow-[1px_1px_0px_#111713] hover:bg-[#FFFFFF]"
                          }`}
                        >
                          {skill.highlight && (
                            <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#111713] shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#D6DDD6] flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#111713]/60">
                    <span>{t.skills.stackFocus}</span>
                    <span className="font-bold text-[#111713]">
                      {category.skills.filter((s) => s.highlight).length}{" "}
                      {t.skills.coreSpecialties}
                    </span>
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
