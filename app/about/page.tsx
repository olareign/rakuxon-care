import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CqcBadge } from "@/components/marketing/cqc-badge";
import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import { Section, SectionIntro } from "@/components/marketing/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { StatBand } from "@/components/marketing/stat-band";
import { TeamGrid } from "@/components/marketing/team-grid";
import { getArms, getSiteSettings, getStats, getTeam } from "@/lib/cms";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rakuxon Care delivers CQC-registered home care and helps care businesses register, win contracts and recruit. One brand, two audiences, four arms.",
};

export default async function AboutPage() {
  const [arms, stats, team, settings] = await Promise.all([
    getArms(),
    getStats(),
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
          <ImagePlaceholder
            ratio="4/3"
            label="The team at work — candid, professional, not stock-posed"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-h2">Why both sides</h2>
            <p className="text-ink-700">
              Advising care businesses without running one produces advice that
              reads well and fails inspection. Running a service without seeing
              the wider sector produces a business that survives but never
              grows. Doing both is the point.
            </p>
            <p className="text-ink-700">
              Placeholder narrative. Final copy, founding date and the real
              origin story are owed by PRD §1.
            </p>
            <CqcBadge />
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Structure"
          title="Four arms"
          subtitle="One arm serves families and councils directly. Three serve the businesses that do the same."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {arms.map((arm) => (
            <ServiceCard
              key={arm.slug}
              eyebrow={`Arm ${arm.number}`}
              title={arm.name}
              summary={arm.summary}
              href={arm.href}
              lane={arm.lane}
            />
          ))}
        </div>
      </Section>

      <Section tint="navy">
        <SectionIntro eyebrow="Credibility" title="Where we stand today" />
        <div className="mt-12">
          <StatBand stats={stats} />
        </div>
        <p className="measure mx-auto mt-8 text-center text-small text-ink-500">
          Placeholder figures. Real numbers are owed by PRD §10 and must be
          verifiable before launch.
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
