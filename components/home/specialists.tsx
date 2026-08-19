import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { PHOTOS } from "@/lib/images";
import type { TeamMember } from "@/lib/cms";
import { cn } from "@/lib/cn";

const PORTRAITS = [PHOTOS.team1, PHOTOS.team2, PHOTOS.team3];
/* Lucide 1.x ships no brand icons, so these three glyphs are drawn inline.
   They are intentionally inert: the placeholder team has no real profiles
   to link to, and a social icon that goes nowhere is worse than none.
   Logged in TODO.md. */
const SOCIALS = [
  {
    label: "LinkedIn",
    path: (
      <>
        <path d="M4.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.2 8.2h2.6V16H3.2V8.2Z" />
        <path d="M7.8 8.2h2.5v1.06h.04c.35-.63 1.2-1.3 2.47-1.3 2.64 0 3.13 1.66 3.13 3.83V16h-2.6v-3.65c0-.87-.02-1.99-1.25-1.99-1.25 0-1.44.94-1.44 1.92V16H7.8V8.2Z" />
      </>
    ),
  },
  {
    label: "Facebook",
    path: (
      <path d="M12.4 10.2h-1.9V16H8.1v-5.8H6.8V8.3h1.3V7.1c0-1.7.75-2.7 2.8-2.7h1.7v1.9h-1.06c-.8 0-.85.3-.85.85v1.15h1.92l-.22 1.9Z" />
    ),
  },
  {
    label: "X",
    path: (
      <path d="M14.2 4h2.1l-4.6 5.26L17.1 16h-4.2l-3.3-4.3L5.8 16H3.7l4.9-5.6L3.6 4h4.3l3 3.95L14.2 4Zm-.74 10.7h1.16L7.6 5.22H6.35l7.11 9.48Z" />
    ),
  },
];

/* Reference section 11: three people cards with photo, name, role and a
   row of social icons. The middle card is tinted, as in the reference.
   Links are inert until PRD §10 supplies real profiles. */
export function Specialists({ members }: { members: TeamMember[] }) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-pill bg-care-100 px-3 py-1 text-overline text-care-700 uppercase">
            Our team
          </span>
          <h2 className="text-h2">Meet the people you will deal with</h2>
          <p className="measure text-ink-500">
            Placeholder people and portraits pending real team content — see
            TODO.md.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.slice(0, 3).map((m, i) => (
            <li
              key={`${m.name}-${i}`}
              className={cn(
                "flex flex-col gap-4 rounded-lg p-5",
                i === 1
                  ? "bg-care-50 ring-1 ring-care-100"
                  : "bg-paper-100 shadow-card",
              )}
            >
              <Photo
                photo={PORTRAITS[i % PORTRAITS.length]}
                ratio="4/5"
                radius="md"
                duotone="navy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-h4">{m.name}</h3>
                <p className="text-small text-ink-500">{m.role}</p>
              </div>
              <ul className="flex items-center gap-1">
                {SOCIALS.map(({ label, path }) => (
                  <li key={label}>
                    <span className="grid size-11 place-items-center rounded-pill text-ink-500">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-4 fill-current"
                      >
                        {path}
                      </svg>
                      <span className="sr-only">
                        {label} profile pending for {m.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
