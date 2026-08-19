import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  FileCheck2,
  FileSignature,
  Megaphone,
  Lightbulb,
  Users,
} from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { IconCard } from "@/components/marketing/cards";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { StatBand } from "@/components/home/stat-band";
import {
  getFaqs,
  getMarketStats,
  getProcess,
  getSegments,
  getServicesByArm,
} from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "For care businesses",
  description:
    "Rakuxon Care Agency: CQC registration, tender and framework writing, policies, digital and branding, consulting and Rakuxon Staffing — from a team that runs its own regulated care service.",
};

/* PRD §5.3 — Arm 2 hub. Icons keyed to the six service-line slugs. */
const SERVICE_ICONS: Record<string, typeof BadgeCheck> = {
  "cqc-registration": BadgeCheck,
  "tender-writing": FileSignature,
  "policies-procedures": FileCheck2,
  "digital-branding": Megaphone,
  consulting: Lightbulb,
  staffing: Users,
};

export default async function CareBusinessesPage() {
  const [services, segments, process, faqs, stats] = await Promise.all([
    getServicesByArm("agency"),
    getSegments(),
    getProcess("b2b"),
    getFaqs("b2b"),
    getMarketStats("compact"),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-50 py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-2 rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
                <Building2 className="size-3.5" aria-hidden="true" />
                Arm 2 — Rakuxon Care Agency
              </span>
              <h1 className="text-h1">
                Register, win work, and staff the rota
              </h1>
              <p className="measure text-body-lg text-ink-700">
                Everything a care business needs to open and stay open — from a
                team that runs its own regulated service and sells only what it
                uses.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className={buttonClasses({})}>
                  Make a business enquiry
                </Link>
                <Link
                  href="/launch-kit"
                  className={buttonClasses({ variant: "secondary" })}
                >
                  See the Launch Kit
                </Link>
              </div>
            </div>
            <Photo
              photo={PHOTOS.businessHero}
              ratio="4/5"
              duotone="none"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="shadow-card"
            />
          </div>
        </Container>
      </section>

      {/* Market context — real figures from PRD §7 */}
      <StatBand
        stats={stats}
        caption="Adult social care in England. Source citations to be confirmed before launch."
      />

      {/* Segments served */}
      <Section id="segments" tint="paper">
        <SectionIntro
          eyebrow="Who we work with"
          title="Three kinds of provider"
          subtitle="Where you join depends on where you are. Most providers come to us at the second stage."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className="flex flex-col gap-2 rounded-lg bg-paper-100 p-6 shadow-card"
            >
              <h3 className="text-h4">{seg.title}</h3>
              <p className="text-ink-500">{seg.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Service lines */}
      <Section id="services">
        <SectionIntro
          eyebrow="Service lines"
          title="What Arm 2 does"
          subtitle="Take one line, take several, or take the Launch Kit as a fixed-scope bundle."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const card = (
              <IconCard
                icon={SERVICE_ICONS[s.slug] ?? BadgeCheck}
                title={s.title}
                body={s.summary}
                lane="b2b"
                className={
                  s.href
                    ? "transition-colors group-hover:bg-paper-0"
                    : undefined
                }
              />
            );
            return s.href ? (
              <Link key={s.slug} href={s.href} className="group">
                {card}
              </Link>
            ) : (
              <div key={s.slug}>{card}</div>
            );
          })}
        </div>
        <p className="measure mx-auto mt-8 text-center text-small text-ink-500">
          Individual service detail pages arrive with the CMS in Phase 4.
        </p>
      </Section>

      {/* Authority moat */}
      <Section id="why" tint="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo
            photo={PHOTOS.businessSigning}
            ratio="4/3"
            duotone="navy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="shadow-card"
          />
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
              Why Rakuxon
            </span>
            <h2 className="text-h2">We are on the other side of it too</h2>
            <p className="measure text-ink-700">
              Care consultancies sell credibility they do not hold. Rakuxon runs
              its own CQC-registered service, so every policy, bid and framework
              we hand over is one we are inspected against ourselves.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Policies we supply are policies we run",
                "Bids written by people who mobilise the contract afterwards",
                "Recruitment that survives a safe-recruitment audit",
                "We will tell you when an application is not ready",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink-700">
                  <BadgeCheck
                    className="mt-1 size-4 shrink-0 text-care-600"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Route */}
      <Section tint="deep">
        <SectionIntro
          invert
          eyebrow="The route"
          title="Foundation to growth"
          subtitle="Four stages from company formation to winning and mobilising contracts."
        />
        <div className="mt-12">
          <ProcessTimeline steps={process} lane="b2b" invert />
        </div>
      </Section>

      {/* Launch Kit teaser */}
      <Section>
        <div className="flex flex-col items-start gap-5 rounded-lg border border-navy-100 bg-navy-50 p-8 md:p-12">
          <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
            Productised offer
          </span>
          <h2 className="text-h2">Care Business Launch Kit</h2>
          <p className="measure text-body-lg text-ink-700">
            One fixed-scope package: governance and registration, HR documents,
            operations templates, and the presence items that make a new
            provider look established on day one.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/launch-kit" className={buttonClasses({})}>
              See what is included
            </Link>
            <Link
              href="/contact"
              className={buttonClasses({ variant: "secondary" })}
            >
              Book a scoping call
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tint="paper">
        <SectionIntro eyebrow="Questions" title="What providers ask first" />
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
