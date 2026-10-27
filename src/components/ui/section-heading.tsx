import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-6 sm:mb-10 lg:mb-14",
        align === "center"
          ? "items-center text-center w-full max-w-2xl mx-auto"
          : "items-start text-left w-full max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase mb-3 sm:mb-4 border select-none",
            dark
              ? "bg-[#17382C] text-[#D4F52B] border-[#D4F52B]/30"
              : "bg-[#FFFFFF] text-[#111713] border-[#111713] shadow-[2px_2px_0px_#111713]"
          )}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4F52B] shrink-0" aria-hidden="true" />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] break-words",
          dark ? "text-[#F3F5ED]" : "text-[#111713]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal",
            dark ? "text-[#C5D4CA]" : "text-[#111713]/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
