import type { Metadata } from "next";
import Link from "next/link";
import { Building2, HeartHandshake } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconCard } from "@/components/marketing/cards";
import { Section, SectionIntro } from "@/components/marketing/section";
import { SERVICE_ICONS, serviceHref } from "@/lib/services";
import { getArms, getServices } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything Rakuxon Care does: home care delivered in the person's own home, and the registration, tenders, policies, digital, consulting and staffing that care businesses need.",
};

/* Index for /services/{slug}. Target of the home page's "See all services". */
export default async function ServicesIndexPage() {
  const [arms, services] = await Promise.all([getArms(), getServices()]);
  const [armOne, armTwo] = arms;

  /* A service's sub-sections earn their own card here, so the Rakuxon Care
     row matches the Services mega-menu and fills its grid rather than
     leaving a single card against six. Derived from the data, not hardcoded,
     so adding a section to a service surfaces it automatically. */
  const toCards = (list: typeof services) =>
    list.flatMap((s) => [
      {
        key: s.slug,
        title: s.title,
        body: s.summary,
        href: serviceHref(s),
        icon: SERVICE_ICONS[s.slug],
      },
      ...(s.sections ?? []).map((sec) => ({
        key: `${s.slug}#${sec.id}`,
        title: sec.title,
        body: sec.body,
        href: `${serviceHref(s)}#${sec.id}`,
        icon: SERVICE_ICONS[sec.id],
      })),
    ]);

  const groups = [
    {
      arm: armOne,
      icon: HeartHandshake,
      lane: "b2c" as const,
      cards: toCards(services.filter((s) => s.arm === "care")),
    },
    {
      arm: armTwo,
      icon: Building2,
      lane: "b2b" as const,
      cards: toCards(services.filter((s) => s.arm === "agency")),
    },
  ];

  return (
    <>
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
              Services
            </span>
            <h1 className="text-h1">Everything we do</h1>
            <p className="measure text-body-lg text-ink-500">
              Care delivered in people&rsquo;s homes, and the work that lets
              other providers do the same.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ tone: "care", className: "mt-2" })}
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      {groups.map((group, i) => (
        <Section
          key={group.arm.slug}
          id={group.arm.slug}
          tint={i === 0 ? "none" : "paper"}
        >
          <SectionIntro
            lane={group.lane}
            eyebrow={group.arm.name}
            title={group.arm.laneLabel}
            subtitle={group.arm.summary}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.cards.map((card) => (
              <Link key={card.key} href={card.href} className="group">
                <IconCard
                  icon={card.icon ?? group.icon}
                  title={card.title}
                  body={card.body}
                  lane={group.lane}
                  className="h-full transition-colors group-hover:bg-paper-0"
                />
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
