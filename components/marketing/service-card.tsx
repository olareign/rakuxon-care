import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Lane } from "@/lib/cms";

/* §4.4: icon, title, one-liner, link — lane-tinted. The whole card is the
   link target, with the visible focus ring on the card rather than the
   text so the hit area and the focus indicator agree. */
export function ServiceCard({
  title,
  summary,
  href,
  lane = "both",
  eyebrow,
}: {
  title: string;
  summary: string;
  href: string;
  lane?: Lane;
  eyebrow?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-3 rounded-lg border bg-paper-100 p-6 shadow-card transition-colors",
        lane === "b2c"
          ? "border-care-100 hover:border-care-500/50 hover:bg-care-50"
          : "border-navy-100 hover:border-navy-600/40 hover:bg-navy-50",
      )}
    >
      {eyebrow ? (
        <span className="text-overline text-ink-500 uppercase">{eyebrow}</span>
      ) : null}
      <h3 className="text-h4">{title}</h3>
      <p className="text-ink-500">{summary}</p>
      <span
        className={cn(
          "mt-auto inline-flex items-center gap-2 pt-2 text-small",
          lane === "b2c" ? "text-care-700" : "text-navy-800",
        )}
      >
        Learn more
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="size-4 fill-current transition-transform group-hover:translate-x-0.5"
        >
          <path d="M11.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
        </svg>
      </span>
    </Link>
  );
}
