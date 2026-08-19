import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Home, ShieldCheck } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { CqcBadge } from "@/components/marketing/cqc-badge";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { CheckRow, IconCard } from "@/components/marketing/cards";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { StatBand } from "@/components/home/stat-band";
import {
  getDemandStats,
  getFaqs,
  getProcess,
  getSiteSettings,
} from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Find care",
  description:
    "Personal care and domiciliary care at home from Rakuxon Care, Arm 1 of the Rakuxon model. For families, local authorities, ICBs and NHS Continuing Healthcare.",
};

/* PRD §5.2 — Arm 1 hub. Warm, reassurance-led. */
const PERSONAL_CARE = [
  "Washing, dressing and personal hygiene",
  "Continence and mobility support",
  "Medication support and prompts",
  "Meal preparation and nutrition",
];

const DOMICILIARY_CARE = [
  "Scheduled visits, from short calls upwards",
  "Live-in care and overnight support",
  "Respite cover for family carers",
  "Companionship and complex, dementia-informed care",
];

const WHO_WE_SERVE = [
  {
    title: "Private-pay and self-funders",
    body: "Families arranging and paying for care directly, with a written plan before anything begins.",
  },
  {
    title: "Local authority and ICB packages",
    body: "Commissioned packages with the reporting and audit trail a contract requires.",
  },
  {
    title: "NHS Continuing Healthcare",
    body: "Care funded through CHC, coordinated with the wider clinical team.",
  },
  {
    title: "Direct payments and personal budgets",
    body: "You hold the budget and choose us; we handle the paperwork around it.",
  },
];

export default async function FindCarePage() {
  const [process, faqs, settings, demandStats] = await Promise.all([
    getProcess("b2c"),
    getFaqs("b2c"),
    getSiteSettings(),
    getDemandStats(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-care-50 py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-2 rounded-pill bg-care-100 px-3 py-1 text-overline text-care-700 uppercase">
                <HeartHandshake className="size-3.5" aria-hidden="true" />
                Arm 1 — Rakuxon Care
              </span>
              <h1 className="text-h1">Care at home, for people you love</h1>
              <p className="measure text-body-lg text-ink-700">
                Personal care and domiciliary care delivered in the
                person&rsquo;s own home. One conversation, an assessment at
                home, and a written plan you agree to before anything starts.
              </p>
              <CqcBadge />
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={buttonClasses({ tone: "care" })}
                >
                  Make a care enquiry
                </Link>
                <Link
                  href="#how-it-works"
                  className={buttonClasses({
                    variant: "secondary",
                    tone: "care",
                  })}
                >
                  See how it works
                </Link>
              </div>
            </div>
            <Photo
              photo={PHOTOS.coupleAtHome}
              ratio="4/5"
              duotone="none"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="shadow-card"
            />
          </div>
        </Container>
      </section>

      {/* Services: personal care + domiciliary care */}
      <Section id="services">
        <SectionIntro
          lane="b2c"
          eyebrow="Services"
          title="What we provide"
          subtitle="Two kinds of support, both delivered at home and both built from an assessment rather than a template."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-lg bg-paper-100 p-6 shadow-card sm:p-8">
            <span className="grid size-11 place-items-center rounded-md bg-care-100 text-care-700">
              <ShieldCheck
                className="size-5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <h3 className="text-h3">Personal care</h3>
            <p className="text-ink-500">
              Hands-on support with the things that make a day possible.
            </p>
            <ul className="flex flex-col gap-3">
              {PERSONAL_CARE.map((f) => (
                <CheckRow key={f} lane="b2c">
                  {f}
                </CheckRow>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 rounded-lg bg-paper-100 p-6 shadow-card sm:p-8">
            <span className="grid size-11 place-items-center rounded-md bg-care-100 text-care-700">
              <Home className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="text-h3">Domiciliary care</h3>
            <p className="text-ink-500">
              Care arranged around the household, from short visits to living
              in.
            </p>
            <ul className="flex flex-col gap-3">
              {DOMICILIARY_CARE.map((f) => (
                <CheckRow key={f} lane="b2c">
                  {f}
                </CheckRow>
              ))}
            </ul>
          </div>
        </div>
        <p className="measure mx-auto mt-8 text-center text-small text-ink-500">
          Rakuxon Care is registered for personal care and domiciliary care
          only. We do not run care homes, residential or nursing services.
        </p>
      </Section>

      {/* Who we serve */}
      <Section id="councils" tint="care">
        <SectionIntro
          lane="b2c"
          eyebrow="Who we serve"
          title="Families, councils and ICBs"
          subtitle="However the care is funded, the assessment and the plan work the same way."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WHO_WE_SERVE.map((w) => (
            <div
              key={w.title}
              className="flex flex-col gap-2 rounded-lg bg-paper-100 p-6 shadow-card"
            >
              <h3 className="text-h4">{w.title}</h3>
              <p className="text-ink-500">{w.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className={buttonClasses({})}>
            Commissioning enquiry
          </Link>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <SectionIntro
          lane="b2c"
          eyebrow="How it works"
          title="Four steps, and you can stop at any of them"
          subtitle="Nothing is committed until you have read the care plan and agreed to it."
        />
        <div className="mt-12">
          <ProcessTimeline steps={process} lane="b2c" />
        </div>
      </Section>

      {/* Demand context — real figures from PRD §7 */}
      <StatBand
        stats={demandStats}
        caption="Adult social care in England. Source citations to be confirmed before launch."
      />

      {/* Areas covered */}
      <Section tint="paper">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-overline text-ink-500 uppercase">
              Areas covered
            </span>
            <h2 className="text-h2">Where we work</h2>
            <ul className="flex flex-col gap-2">
              {settings.regionsServed.map((r) => (
                <li key={r} className="text-ink-700">
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-small text-ink-500">
              Placeholder until PRD §10 decision 6 is settled. These regions
              also feed the LocalBusiness schema in Phase 6.
            </p>
          </div>
          <IconCard
            icon={HeartHandshake}
            lane="b2c"
            title="Not sure where to start?"
            body="Tell us what is happening and we will talk you through the options, including funding routes, with no obligation."
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionIntro
          lane="b2c"
          eyebrow="Questions"
          title="Things families ask first"
        />
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
