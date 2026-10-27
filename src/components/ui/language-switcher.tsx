"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "navbar" | "mobile";
}

export function LanguageSwitcher({
  className,
  variant = "navbar",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "flex items-center justify-between p-3 rounded-xl bg-[#17382C] border-2 border-[#111713] shadow-[3px_3px_0px_#111713]",
          className
        )}
        role="group"
        aria-label={t.nav.languageAriaLabel}
      >
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C5D4CA]">
          <Globe className="w-4 h-4 text-[#D4F52B]" />
          <span>Bahasa / Language:</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setLocale("id")}
            aria-pressed={locale === "id"}
            className={cn(
              "px-3.5 py-2 min-h-[40px] text-xs font-mono font-bold rounded-lg transition-all duration-150 cursor-pointer select-none touch-manipulation",
              locale === "id"
                ? "bg-[#D4F52B] text-[#111713] border-2 border-[#111713] shadow-[2px_2px_0px_#111713]"
                : "text-[#C5D4CA] hover:text-[#F3F5ED] hover:bg-[#102A21]"
            )}
          >
            ID
          </button>
          <span className="text-[#C5D4CA]/40 font-mono text-xs">|</span>
          <button
            type="button"
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
            className={cn(
              "px-3.5 py-2 min-h-[40px] text-xs font-mono font-bold rounded-lg transition-all duration-150 cursor-pointer select-none touch-manipulation",
              locale === "en"
                ? "bg-[#D4F52B] text-[#111713] border-2 border-[#111713] shadow-[2px_2px_0px_#111713]"
                : "text-[#C5D4CA] hover:text-[#F3F5ED] hover:bg-[#102A21]"
            )}
          >
            EN
          </button>
        </div>
      </div>
    );
  }

  // Desktop / Header Navbar Switcher
  return (
    <div
      className={cn(
        "inline-flex items-center p-0.5 sm:p-1 rounded-xl bg-[#17382C]/90 border border-[#D4F52B]/30 shadow-[2px_2px_0px_#111713] backdrop-blur-sm select-none",
        className
      )}
      role="group"
      aria-label={t.nav.languageAriaLabel}
    >
      <div className="pl-1 sm:pl-1.5 pr-0.5 sm:pr-1 text-[#D4F52B]" aria-hidden="true">
        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        className={cn(
          "px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono font-bold rounded-lg transition-all duration-150 cursor-pointer touch-manipulation",
          locale === "id"
            ? "bg-[#D4F52B] text-[#111713] border border-[#111713] shadow-[1px_1px_0px_#111713]"
            : "text-[#C5D4CA] hover:text-[#D4F52B]"
        )}
      >
        ID
      </button>
      <span className="text-[#C5D4CA]/40 font-mono text-[10px] sm:text-xs px-0.5">/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono font-bold rounded-lg transition-all duration-150 cursor-pointer touch-manipulation",
          locale === "en"
            ? "bg-[#D4F52B] text-[#111713] border border-[#111713] shadow-[1px_1px_0px_#111713]"
            : "text-[#C5D4CA] hover:text-[#D4F52B]"
        )}
      >
        EN
      </button>
    </div>
  );
}
