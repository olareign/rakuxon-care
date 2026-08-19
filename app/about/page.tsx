import type { Metadata } from "next";
import { Building2, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CqcBadge } from "@/components/marketing/cqc-badge";
import { Photo } from "@/components/ui/photo";
import { IconCard, StatCard } from "@/components/marketing/cards";
import { PHOTOS } from "@/lib/images";
import { Section, SectionIntro } from "@/components/marketing/section";
import { TeamGrid } from "@/components/marketing/team-grid";
import { getArms, getMarketStats, getSiteSettings, getTeam } from "@/lib/cms";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rakuxon Care delivers CQC-registered home care and helps care businesses register, win contracts and recruit. One brand, two audiences, four arms.",
};

const ARM_ICONS = [HeartHandshake, Building2];

export default async function AboutPage() {
  const [arms, stats, team, settings] = await Promise.all([
    getArms(),
    getMarketStats("compact"),
    getTeam(),
    getSiteSettings(),
  ]);

  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex max-w-3xl flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
              About
            </span>
            <h1 className="text-h1">Two jobs, done by one team</h1>
            <p className="text-body-lg text-ink-500">
              Placeholder story pending PRD §1. The shape is set: Rakuxon Care
              both delivers care and builds the businesses that deliver it, and
              each side makes the other better informed.
            </p>
          </div>
        </Container>
      </section>

      <Section tint="paper">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo
            photo={PHOTOS.businessTeam}
            ratio="4/3"
            duotone="navy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="shadow-card"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-h2">Why both arms</h2>
            <p className="text-ink-700">
              Advising care businesses without running one produces advice that
              reads well and fails inspection. Every other consultancy in this
              market sells credibility it does not hold. Rakuxon holds it,
              because Arm 1 is a regulated service in its own right.
            </p>
            <p className="text-ink-700">
              Placeholder narrative. Final copy, founding date and the real
              origin story are owed by PRD §1.
            </p>
            <CqcBadge />
          </div>
        </div>
      </Section>

      <Section id="model">
        <SectionIntro
          eyebrow="Our model"
          title="Two arms, one authority"
          subtitle="One arm delivers regulated care. The other helps care businesses do the same. The first is what makes the second credible."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {arms.map((arm, i) => (
            <Link key={arm.slug} href={arm.href} className="group">
              <IconCard
                icon={ARM_ICONS[i % ARM_ICONS.length]}
                title={`Arm ${arm.number} — ${arm.name}`}
                body={arm.summary}
                lane={arm.lane}
                className="h-full transition-colors group-hover:bg-paper-0"
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section tint="navy">
        <SectionIntro eyebrow="Credibility" title="Where we stand today" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
        <p className="measure mx-auto mt-8 text-center text-small text-ink-500">
          Adult social care in England. Source citations to be confirmed before
          launch.
        </p>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Team"
          title="Who you will actually deal with"
          subtitle="Placeholder people pending PRD §10 team content and photography."
        />
        <div className="mt-12">
          <TeamGrid members={team} />
        </div>
      </Section>

      <Section tint="paper">
        <div className="flex flex-col items-start gap-5 rounded-lg bg-paper-100 p-8 shadow-card md:p-12">
          <h2 className="text-h3">Talk to us</h2>
          <p className="measure text-ink-700">
            Whichever side you are on, the first step is the same conversation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={buttonClasses({})}>
              Get in touch
            </Link>
            <a
              href={`mailto:${settings.email}`}
              className={buttonClasses({ variant: "secondary" })}
            >
              {settings.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
