import { Container } from "@/components/ui/container";
import { PARTNERS } from "@/components/home/partner-logos";

/* Reference section 3. */
export function TrustStrip() {
  return (
    <section className="pb-12 md:pb-16">
      <Container>
        <p className="text-center text-small text-ink-500">
          Trusted by councils, families and care providers across the UK
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {PARTNERS.map((p) => (
            <li
              key={p.name}
              className="flex items-center gap-2 text-ink-500 grayscale transition-colors hover:text-ink-700"
            >
              {p.mark}
              <span className="font-display text-body font-semibold whitespace-nowrap">
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
