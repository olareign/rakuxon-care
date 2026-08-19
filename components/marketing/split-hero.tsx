import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CqcBadge } from "@/components/marketing/cqc-badge";
import { cn } from "@/lib/cn";

interface LaneChoice {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  points: string[];
}

/* §4.3, the signature component: a neutral headline over two lane choice
   cards. The lanes differ by tint, position and label — never by colour
   alone (§5). Cards stack on mobile with the B2C lane first, since a family
   in the middle of arranging care is the more urgent visitor. */
export function SplitHero({ b2c, b2b }: { b2c: LaneChoice; b2b: LaneChoice }) {
  return (
    <section className="bg-paper-50 pt-12 pb-16 md:pt-20 md:pb-24">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="measure text-h1">
            Expert care, and the expertise to build it
          </h1>
          <p className="measure text-body-lg text-ink-500">
            Rakuxon Care arranges CQC-registered care at home, and helps care
            businesses register, win contracts and staff up. Two things, done
            properly, under one roof.
          </p>
          <CqcBadge />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            { lane: "b2c" as const, choice: b2c },
            { lane: "b2b" as const, choice: b2b },
          ].map(({ lane, choice }) => (
            <div
              key={choice.href}
              className={cn(
                "flex flex-col gap-5 rounded-lg border p-8 shadow-card",
                lane === "b2c"
                  ? "border-care-100 bg-care-50"
                  : "border-navy-100 bg-navy-50",
              )}
            >
              <span
                className={cn(
                  "inline-flex w-fit items-center rounded-pill px-3 py-1 text-overline uppercase",
                  lane === "b2c"
                    ? "bg-care-100 text-care-700"
                    : "bg-navy-100 text-navy-800",
                )}
              >
                {choice.eyebrow}
              </span>
              <h2 className="text-h3">{choice.title}</h2>
              <p className="text-ink-700">{choice.body}</p>
              <ul className="flex flex-col gap-2">
                {choice.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={cn(
                        "mt-1.5 size-4 shrink-0 fill-current",
                        lane === "b2c" ? "text-care-600" : "text-navy-800",
                      )}
                    >
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" />
                    </svg>
                    <span className="text-ink-700">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={choice.href}
                className={cn(
                  "mt-auto inline-flex min-h-12 w-fit items-center justify-center rounded-pill px-6 py-2 font-semibold text-white transition-colors",
                  lane === "b2c"
                    ? "bg-care-600 hover:bg-care-700"
                    : "bg-navy-800 hover:bg-navy-700",
                )}
              >
                {choice.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
