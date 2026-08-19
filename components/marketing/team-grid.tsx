import { Photo } from "@/components/ui/photo";
import type { TeamMember } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

const PORTRAITS = [PHOTOS.team1, PHOTOS.team2, PHOTOS.team3];

/* §4.20: responsive card grid of people on the soft canvas. */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <li
          key={`${m.name}-${i}`}
          className="flex flex-col gap-4 rounded-lg bg-paper-100 p-5 shadow-card"
        >
          <Photo
            photo={PORTRAITS[i % PORTRAITS.length]}
            ratio="1/1"
            radius="md"
            duotone="navy"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
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
