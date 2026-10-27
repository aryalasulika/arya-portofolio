import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111713] disabled:opacity-50 disabled:pointer-events-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#111713] touch-manipulation";

    const variantStyles = {
      primary:
        "bg-[#D4F52B] text-[#111713] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111713] sm:hover:shadow-[6px_6px_0px_#111713] hover:bg-[#cbf018]",
      secondary:
        "bg-[#FFFFFF] text-[#111713] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111713] sm:hover:shadow-[6px_6px_0px_#111713] hover:bg-[#F3F5ED]",
      dark:
        "bg-[#102A21] text-[#F3F5ED] border-2 border-[#111713] shadow-[3px_3px_0px_#D4F52B] sm:shadow-[4px_4px_0px_#D4F52B] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#D4F52B] sm:hover:shadow-[6px_6px_0px_#D4F52B] hover:bg-[#17382C]",
      outline:
        "bg-transparent text-[#111713] border-2 border-[#111713] shadow-[3px_3px_0px_#111713] sm:shadow-[4px_4px_0px_#111713] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111713] sm:hover:shadow-[6px_6px_0px_#111713] hover:bg-[#FFFFFF]/50",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 min-h-[38px] gap-1.5",
      md: "text-xs sm:text-sm px-4 sm:px-5 py-2.5 min-h-[44px] gap-2",
      lg: "text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-3.5 min-h-[48px] gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
