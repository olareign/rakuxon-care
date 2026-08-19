import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { PHOTOS } from "@/lib/images";
import type { Testimonial } from "@/lib/cms";

const AVATARS = [
  PHOTOS.avatar4,
  PHOTOS.avatar3,
  PHOTOS.avatar6,
  PHOTOS.avatar7,
  PHOTOS.avatar8,
  PHOTOS.avatar1,
];

function QuoteCard({
  testimonial,
  avatar,
}: {
  testimonial: Testimonial;
  avatar: (typeof AVATARS)[number];
}) {
  return (
    <figure className="flex break-inside-avoid flex-col gap-4 rounded-lg bg-paper-100 p-5 shadow-card">
      <blockquote className="font-serif text-body-lg text-ink-900">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span className="relative size-10 shrink-0 overflow-hidden rounded-pill">
          <Image
            src={avatar.src}
            alt=""
            aria-hidden="true"
            width={avatar.width}
            height={avatar.height}
            sizes="40px"
            className="h-full w-full object-cover"
          />
        </span>
        <span className="min-w-0">
          <span className="block text-small text-ink-900">
            {testimonial.name}
          </span>
          <span className="block text-small text-ink-500">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/* Reference section 12: a masonry of quote cards with one video-review
   card among them. CSS columns give the staggered heights of the
   reference without a JS masonry library. */
export function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const items = testimonials.slice(0, 6);
  const first = items.slice(0, 2);
  const rest = items.slice(2);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
            Testimonials
          </span>
          <h2 className="text-h2">What families and providers say</h2>
          <p className="measure text-ink-500">
            Placeholder testimonials pending real, consented quotes — PRD §10.
          </p>
        </div>

        <div className="mt-12 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {first.map((t, i) => (
            <QuoteCard key={t.id} testimonial={t} avatar={AVATARS[i]} />
          ))}

          {/* Video review card. Inert until a real video exists. */}
          <figure className="relative break-inside-avoid overflow-hidden rounded-lg shadow-card">
            <Photo
              photo={PHOTOS.videoReview}
              ratio="4/5"
              radius="none"
              duotone="navy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-center p-4">
              <span className="inline-flex items-center gap-2 rounded-pill bg-paper-100/95 px-4 py-2 text-small text-navy-800 shadow-card">
                <PlayCircle
                  className="size-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                Video review coming soon
              </span>
            </figcaption>
          </figure>

          {rest.map((t, i) => (
            <QuoteCard key={t.id} testimonial={t} avatar={AVATARS[i + 2]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
