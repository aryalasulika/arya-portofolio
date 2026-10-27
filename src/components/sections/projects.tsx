"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="relative bg-[#F3F5ED] bg-grid-light py-14 sm:py-20 lg:py-28 border-b-2 border-[#111713]"
      aria-label="Showcase Proyek Terpilih"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={
              <>
                {t.projects.titleBefore}
                <span className="inline-block bg-[#D4F52B] px-2 sm:px-2.5 py-0.5 rounded-lg border-2 border-[#111713] shadow-[3px_3px_0px_#111713]">
                  {t.projects.titleHighlight}
                </span>
              </>
            }
            description={t.projects.description}
          />
        </Reveal>

        {/* Projects grid — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.12}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Note on genuine project portfolio */}
        <Reveal delay={0.3}>
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-[#111713]/80 leading-relaxed">
              <span className="font-bold text-[#111713]">
                {t.projects.deepDiveTitle}
              </span>{" "}
              {t.projects.deepDiveDesc}
            </p>
            <a
              href="#contact"
              className="whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider text-[#102A21] underline underline-offset-4 hover:text-[#17382C] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102A21] rounded"
            >
              {t.projects.deepDiveCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
