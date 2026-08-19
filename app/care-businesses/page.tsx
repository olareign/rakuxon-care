import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { StatBand } from "@/components/marketing/stat-band";
import { getArms, getFaqs, getProcess, getServices, getStats } from "@/lib/cms";

export const metadata: Metadata = {
  title: "For care businesses",
  description:
    "CQC registration, tenders and bids, branding and staffing for UK care providers. End-to-end support from company formation to your first contract.",
};

export default async function CareBusinessesPage() {
  const [arms, services, process, faqs, stats] = await Promise.all([
    getArms("b2b"),
    getServices("b2b"),
    getProcess("b2b"),
    getFaqs("b2b"),
    getStats(),
  ]);

  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
                For care businesses
              </span>
              <h1 className="text-h1">
                Register, win contracts, and staff the rota
              </h1>
              <p className="measure text-body-lg text-ink-700">
                Most care businesses do not fail on care. They fail on
                registration, on evidence, and on recruitment. We handle the
                three things that decide whether you open and stay open.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className={buttonClasses({})}>
                  Talk to us about your business
                </Link>
                <Link
                  href="/start-a-care-business"
                  className={buttonClasses({ variant: "secondary" })}
                >
                  Starting from scratch?
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              lane="b2b"
              ratio="4/3"
              label="Care business owners reviewing documents in an office"
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-paper-100 py-8">
        <Container>
          <StatBand stats={stats} />
        </Container>
      </section>

      <Section id="arms">
        <SectionIntro
          eyebrow="Three arms"
          title="Where providers actually get stuck"
          subtitle="Registration, growth and staffing. Take one, or take all three as a bundle."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {arms.map((arm) => (
            <ServiceCard
              key={arm.slug}
              eyebrow={`Arm ${arm.number}`}
              title={arm.name}
              summary={arm.summary}
              href="#services"
              lane="b2b"
            />
          ))}
        </div>
      </Section>

      <Section id="services" tint="navy">
        <SectionIntro
          eyebrow="Services"
          title="What that looks like in practice"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              summary={s.summary}
              href="/contact"
              lane="b2b"
            />
          ))}
        </div>
      </Section>

      <Section id="why">
        <SectionIntro
          eyebrow="Why Rakuxon"
          title="We run a care service as well as advising on them"
          subtitle="The advice comes from operating, not from a template pack bought off a forum."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "We are inspected too",
              body: "Our advice is shaped by the same framework you are judged against, because we sit on the other side of it as well.",
            },
            {
              title: "Evidence, not templates",
              body: "A policy pack does not pass an inspection. We build the evidence trail that makes the policy true.",
            },
            {
              title: "One team, four arms",
              body: "Registration, tenders and staffing are handled by people who talk to each other, not three suppliers who do not.",
            },
            {
              title: "We say no",
              body: "If your application is not ready, we will tell you before you submit rather than after you are refused.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-lg bg-paper-100 p-6 shadow-card"
            >
              <h3 className="text-h4">{item.title}</h3>
              <p className="text-ink-500">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tint="paper">
        <SectionIntro
          eyebrow="The route"
          title="Foundation to growth"
          subtitle="Where you join depends on where you are. Most providers come to us at step two."
        />
        <div className="mt-12">
          <ProcessTimeline steps={process} lane="b2b" />
        </div>
      </Section>

      {/* Bundle teaser — pricing stays gated until PRD §9 question 3 is answered. */}
      <Section>
        <div className="flex flex-col items-start gap-6 rounded-lg border border-navy-100 bg-navy-50 p-8 md:p-12">
          <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
            Bundle
          </span>
          <h2 className="text-h2">Launch bundle</h2>
          <p className="measure text-body-lg text-ink-700">
            Registration, policies, brand and your first recruitment round, run
            as one project with one point of contact. Priced per provider after
            a scoping call.
          </p>
          <p className="text-small text-ink-500">
            Whether pricing is published or quoted is PRD §9 question 3.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={buttonClasses({})}>
              Book a scoping call
            </Link>
            <Link
              href="/start-a-care-business"
              className={buttonClasses({ variant: "secondary" })}
            >
              See the timeline
            </Link>
          </div>
        </div>
      </Section>

      <Section tint="paper">
        <SectionIntro eyebrow="Questions" title="What providers ask first" />
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
