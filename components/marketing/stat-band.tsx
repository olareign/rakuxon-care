import type { Stat } from "@/lib/cms";

/* §4.6 / §0.1 stat band: big number, calm label, no animation. */
export function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1">
          <dt className="sr-only">{s.label}</dt>
          <dd className="text-h2 text-ink-900">{s.value}</dd>
          <p className="text-small text-ink-500" aria-hidden="true">
            {s.label}
          </p>
        </div>
      ))}
    </dl>
  );
}
