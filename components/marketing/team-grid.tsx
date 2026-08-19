import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import type { TeamMember } from "@/lib/cms";

/* §4.20: responsive card grid of people on the soft canvas. */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <li
          key={`${m.name}-${i}`}
          className="flex flex-col gap-4 rounded-lg bg-paper-100 p-5 shadow-card"
        >
          <ImagePlaceholder label={`Portrait — ${m.role}`} ratio="1/1" />
          <div className="flex flex-col gap-1">
            <h3 className="text-h4">{m.name}</h3>
            <p className="text-small text-ink-500">{m.role}</p>
            <p className="mt-2 text-ink-700">{m.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
