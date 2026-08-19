import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/* Reference section 10: a centred block on a subtle tinted panel. */
export function CtaBand() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-4 rounded-lg bg-navy-50 px-6 py-14 text-center md:px-12 md:py-20">
          <h2 className="text-h2">Talk to us about care today</h2>
          <p className="measure text-ink-500">
            One conversation, no obligation, and no commitment until you have
            read the plan in writing.
          </p>
          <Link
            href="/contact"
            className={buttonClasses({ tone: "care", className: "mt-3" })}
          >
            Book a conversation
          </Link>
        </div>
      </Container>
    </section>
  );
}
