import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Two prepared variants rather than a CSS filter.
 *
 * The supplied /logo.png is an opaque navy wordmark on a light background,
 * so `filter: invert()` would have produced a dark rectangle on the navy
 * footer. /logo-navy.png and /logo-white.png are transparent-background
 * variants generated from it — see TODO.md.
 */
const SRC = {
  navy: "/logo-navy.png",
  white: "/logo-white.png",
} as const;

const INTRINSIC = { width: 919, height: 267 };

/* Size with a height class (`h-6`, `h-7`); width follows the aspect ratio.
   In a `flex-col` parent, add `self-start` — otherwise align-items:stretch
   expands `width:auto` to the full column. */
export function Logo({
  variant = "navy",
  className,
  priority = false,
}: {
  variant?: keyof typeof SRC;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt="Rakuxon Care"
      width={INTRINSIC.width}
      height={INTRINSIC.height}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
