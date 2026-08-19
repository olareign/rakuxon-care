import { Container } from "@/components/ui/container";
import type { Stat } from "@/lib/cms";

/* Reference section 5: four big numbers with captions, on the canvas
   rather than in cards. */
export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-h2 text-ink-900">{s.value}</dd>
              <p aria-hidden="true" className="text-small text-ink-500">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
