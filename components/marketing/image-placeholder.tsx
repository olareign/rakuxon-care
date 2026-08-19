import { cn } from "@/lib/cn";
import type { Lane } from "@/lib/cms";

/**
 * Stands in for the commissioned photography PRD §10 still owes us.
 *
 * Deliberately reads as a placeholder rather than dressing up stock
 * imagery as the real thing — it states what shot belongs here so the
 * brief is visible in the layout. Swap for next/image when assets land.
 */
export function ImagePlaceholder({
  label,
  lane = "both",
  className,
  ratio = "4/3",
}: {
  label: string;
  lane?: Lane;
  className?: string;
  ratio?: "4/3" | "3/2" | "1/1" | "16/9";
}) {
  const ratios = {
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "1/1": "aspect-square",
    "16/9": "aspect-video",
  } as const;

  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed p-6 text-center",
        ratios[ratio],
        lane === "b2c"
          ? "border-care-500/40 bg-care-50"
          : "border-navy-600/30 bg-navy-50",
        className,
      )}
    >
      <span className="text-small text-ink-500">{label}</span>
    </div>
  );
}
