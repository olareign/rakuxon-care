import * as React from "react";
import { cn } from "@/lib/cn";

export type BadgeTone =
  "navy" | "care" | "neutral" | "success" | "warning" | "danger";

const tones: Record<BadgeTone, string> = {
  navy: "bg-navy-100 text-navy-800",
  care: "bg-care-100 text-care-700",
  neutral: "bg-paper-0 text-ink-700",
  success: "bg-care-100 text-care-700",
  /* Semantic colours have no designed tint/text pair the way navy and
     care do (-100 background + -700 text), and their own 10% tints fall
     under 4.5:1. Solid fill keeps them in-token and passes AA — white on
     warning is 5.1:1, on danger 6.5:1. */
  warning: "bg-warning text-white",
  danger: "bg-danger text-white",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

/* The Eyebrow label (§4.18) and CQC rating badge (§4.5) are both built
   on this in Phase 1. */
export function Badge({
  tone = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-overline uppercase",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
