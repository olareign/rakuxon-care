import * as React from "react";
import { cn } from "@/lib/cn";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Filter chips are toggles — selection is announced via aria-pressed. */
  selected?: boolean;
}

/* §3 puts chips on --radius-sm alongside inputs. Selection is carried by
   fill *and* border weight so it never depends on colour alone (§5). */
export function Chip({
  selected = false,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-sm border px-4 py-2 text-small transition-colors",
        "disabled:cursor-not-allowed disabled:border-ink-300 disabled:text-ink-300",
        selected
          ? "border-2 border-navy-800 bg-navy-50 text-navy-800"
          : "border-ink-300 text-ink-700 hover:border-navy-600 hover:bg-navy-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
