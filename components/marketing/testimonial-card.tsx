import type { Testimonial } from "@/lib/cms";

/* §4.7: serif pull-quote is the one permitted use of the serif family. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-lg bg-paper-100 p-6 shadow-card">
      <blockquote className="font-serif text-h4 text-ink-900">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto text-small text-ink-500">
        <span className="block text-ink-900">{testimonial.name}</span>
        {testimonial.role}
      </figcaption>
    </figure>
  );
}
