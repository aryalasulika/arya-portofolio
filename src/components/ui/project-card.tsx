"use client";

import React from "react";
import { Project } from "@/data/projects";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon } from "./icons";
import { Button } from "./button";
import { useLanguage } from "@/context/language-context";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();
  const tProject = t.projects.items[project.slug];

  const title = tProject?.title || project.title;
  const category = tProject?.category || project.category;
  const tagline = tProject?.tagline || project.tagline;
  const problem = tProject?.problem || project.problem;
  const solution = tProject?.solution || project.solution;
  const role = tProject?.role || project.role;
  const status = tProject?.status || project.status;

  return (
    <article
      className="group relative flex flex-col bg-[#FFFFFF] rounded-2xl border-2 border-[#111713] shadow-[4px_4px_0px_#111713] sm:shadow-[5px_5px_0px_#111713] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111713] sm:hover:shadow-[8px_8px_0px_#111713] transition-all duration-200 overflow-hidden h-full"
      aria-labelledby={`project-title-${project.slug}`}
    >
      {/* Top Banner Accent */}
      <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#F3F5ED] border-b-2 border-[#111713] min-h-[44px]">
        {/* Index + Category */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
          <span className="font-mono text-xs font-bold text-[#111713]/60 shrink-0">
            #{String(index + 1).padStart(2, "0")}
          </span>
          <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#111713]/30 shrink-0" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-semibold text-[#111713] tracking-wide uppercase truncate">
            {category}
          </span>
        </div>
        {/* Status badge — always on same row, shrink-0 */}
        <div className="flex items-center gap-1 bg-[#D4F52B] px-2 py-0.5 rounded-full border border-[#111713] text-[10px] sm:text-[11px] font-bold text-[#111713] shrink-0 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111713] animate-pulse shrink-0" aria-hidden="true" />
          <span>{status}</span>
        </div>
      </div>

      {/* Main Card Content */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
        <h3
          id={`project-title-${project.slug}`}
          className="text-xl sm:text-2xl lg:text-3xl font-black text-[#111713] tracking-tight leading-snug group-hover:text-[#102A21] transition-colors break-words"
        >
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-[#111713]/80 leading-relaxed">
          {tagline}
        </p>

        {/* Problem & Solution */}
        <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3 flex-1">
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#F3F5ED] border border-[#111713]/20">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold font-mono text-[#111713] mb-1 uppercase">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
              <span>{t.projects.challengeLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#111713]/85 leading-relaxed break-words">
              {problem}
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-[#D4F52B]/15 border border-[#111713]/20">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold font-mono text-[#111713] mb-1 uppercase">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" aria-hidden="true" />
              <span>{t.projects.solutionLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#111713]/85 leading-relaxed break-words">
              {solution}
            </p>
          </div>
        </div>

        {/* Role */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#D6DDD6]">
          <div className="text-[11px] sm:text-xs font-mono font-bold text-[#111713]/60 uppercase mb-1">
            {t.projects.roleLabel}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#111713] break-words">
            {role}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-3.5 sm:mt-5">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium bg-[#F3F5ED] text-[#111713] border border-[#111713]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        {(project.liveUrl || project.repositoryUrl) && (
          <div className="mt-4 sm:mt-5 pt-4 border-t border-[#D6DDD6] flex flex-col xs:flex-row flex-wrap gap-2.5">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                external
                className="flex-1 xs:flex-none justify-center"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.projects.liveDemo}</span>
              </Button>
            )}
            {project.repositoryUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.repositoryUrl}
                external
                className="flex-1 xs:flex-none justify-center"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{t.projects.repository}</span>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
