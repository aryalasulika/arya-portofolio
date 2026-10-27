"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  className?: string;
  delay?: number;
  duration?: number;
  yDelta?: number;
  highlight?: boolean;
}

export function FloatingCard({
  icon,
  label,
  sublabel,
  className,
  delay = 0,
  duration = 4,
  yDelta = 8,
  highlight = false,
}: FloatingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <div
      className={cn(
        "flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-[#111713] transition-all duration-200 select-none",
        highlight
          ? "bg-[#D4F52B] text-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713]"
          : "bg-[#FFFFFF] text-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-[#111713] shrink-0",
          highlight ? "bg-[#111713] text-[#D4F52B]" : "bg-[#F3F5ED] text-[#102A21]"
        )}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] sm:text-xs font-mono font-bold tracking-tight uppercase opacity-70 truncate">
          {label}
        </div>
        <div className="text-xs sm:text-sm font-extrabold tracking-tight truncate">
          {sublabel}
        </div>
      </div>
    </div>
  );

  if (shouldReduceMotion) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-yDelta, yDelta, -yDelta],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {content}
    </motion.div>
  );
}
