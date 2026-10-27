"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface BackToTopProps {
  label?: string;
}

export function BackToTop({ label }: BackToTopProps) {
  const { t } = useLanguage();
  const displayLabel = label || t.footer.backToTop;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-[#D4F52B] text-[#111713] font-bold text-xs uppercase tracking-wider border-2 border-[#111713] shadow-[3px_3px_0px_#111713] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111713] active:translate-y-0.5 active:shadow-[1px_1px_0px_#111713] transition-all cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111713]"
      aria-label={displayLabel}
    >
      <span>{displayLabel}</span>
      <ArrowUp className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />
    </button>
  );
}
