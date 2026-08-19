import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CqcBadge } from "@/components/marketing/cqc-badge";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { getFaqs, getProcess, getServices, getSiteSettings } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Find care",
  description:
    "CQC-registered care at home for families and councils: home care visits, live-in care, dementia care and respite. Assessment at home, consistent carers, plans reviewed as needs change.",
};

export default async function FindCarePage() {
  const [services, process, faqs, settings] = await Promise.all([
    getServices("b2c"),
    getProcess("b2c"),
    getFaqs("b2c"),
    getSiteSettings(),
  ]);

  return (
    <>
      <section className="bg-care-50 py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-pill bg-care-100 px-3 py-1 text-overline text-care-700 uppercase">
                Find care
              </span>
              <h1 className="text-h1">Care at home, for people you love</h1>
              <p className="measure text-body-lg text-ink-700">
                Arranging care usually starts on a bad day. We keep it simple:
                one conversation, an assessment at home, and a written plan you
                agree to before anything begins.
              </p>
              <CqcBadge />
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={buttonClasses({ tone: "care" })}
                >
                  Talk to us about care
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
            <ImagePlaceholder
              lane="b2c"
              ratio="4/3"
              label="Carer supporting an older person at home — warm, domestic, unposed"
            />
          </div>
        </Container>
      </section>

      <Section id="services">
        <SectionIntro
          lane="b2c"
          eyebrow="Services"
          title="The support we provide"
          subtitle="Every package starts from an assessment at home, so the plan matches the person rather than a template."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              summary={s.summary}
              href="/contact"
              lane="b2c"
            />
          ))}
        </div>
      </Section>

      <Section id="how-it-works" tint="care">
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

      <Section id="councils">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-overline text-ink-500 uppercase">
              For councils and commissioners
            </span>
            <h2 className="text-h2">
              Commissioned packages, evidenced properly
            </h2>
            <p className="measure text-body-lg text-ink-500">
              We work with local-authority commissioners on funded packages,
              with the reporting and audit trail a contract requires.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Framework and spot-purchase packages",
                "Capacity confirmed before acceptance, not after",
                "Incident and safeguarding reporting to contract standard",
                "Care plans and visit evidence available on request",
              ].map((p) => (
                <li
                  key={p}
                  className="rounded-md bg-paper-100 px-4 py-3 text-ink-700 shadow-card"
                >
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={buttonClasses({ className: "w-fit" })}
            >
              Commissioning enquiry
            </Link>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-navy-100 bg-navy-50 p-8">
            <h3 className="text-h4">Areas we serve</h3>
            <ul className="flex flex-col gap-2">
              {settings.regionsServed.map((r) => (
                <li key={r} className="text-ink-700">
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-small text-ink-500">
              Regions are a placeholder until PRD §9 question 5 is answered.
              They also feed the LocalBusiness schema in Phase 6.
            </p>
          </div>
        </div>
      </Section>

      <Section tint="paper">
        <SectionIntro
          lane="b2c"
          eyebrow="Questions"
          title="Things families ask first"
        />
        <div className="measure mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
