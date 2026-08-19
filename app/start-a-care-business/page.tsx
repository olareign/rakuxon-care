import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { getFaqs, getProcess } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Start a care business",
  description:
    "A guided route from company formation to CQC registration and your first care package: what is included, how long it takes, and what it depends on.",
};

const INCLUDED = [
  {
    title: "Company and governance",
    items: [
      "Company formation and structure advice",
      "Insurance, banking and information governance",
      "Statement of purpose",
    ],
  },
  {
    title: "CQC application",
    items: [
      "Provider application, prepared and submitted",
      "Registered manager sourcing and interview prep",
      "Policy suite mapped to the quality statements",
    ],
  },
  {
    title: "Launch",
    items: [
      "Recruitment and compliant onboarding",
      "Brand, website and local referral routes",
      "First package mobilisation and evidence",
    ],
  },
];

export default async function StartACareBusinessPage() {
  const [process, faqs] = await Promise.all([
    getProcess("b2b"),
    getFaqs("b2b"),
  ]);

  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
                Start a care business
              </span>
              <h1 className="text-h1">From nothing to your first package</h1>
              <p className="measure text-body-lg text-ink-700">
                One project, one point of contact, and a route that ends with a
                registered service delivering care — not a folder of documents
                you still have to act on.
              </p>
              <Link
                href="/contact"
                className={buttonClasses({ className: "w-fit" })}
              >
                Book a scoping call
              </Link>
            </div>
            <ImagePlaceholder
              lane="b2b"
              ratio="4/3"
              label="Founder at a desk planning a new care service"
            />
          </div>
        </Container>
      </section>

      <Section>
        <SectionIntro
          eyebrow="The package"
          title="What is included"
          subtitle="Scope is confirmed at the scoping call — some providers already have a company, or a manager, or a brand."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {INCLUDED.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-4 rounded-lg bg-paper-100 p-6 shadow-card"
            >
              <h3 className="text-h4">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-700">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="mt-1.5 size-4 shrink-0 fill-current text-navy-800"
                    >
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tint="navy">
        <SectionIntro
          eyebrow="Timeline"
          title="Four stages, roughly six months"
          subtitle="The CQC decision is the long pole. Everything before it is preparation that shortens it."
        />
        <div className="mt-12">
          <ProcessTimeline steps={process} lane="b2b" />
        </div>
        <p className="measure mx-auto mt-8 text-center text-small text-ink-500">
          Indicative only. Registration timescales are set by CQC, not by us,
          and depend on the quality of the application and manager availability.
        </p>
      </Section>

      <Section tint="paper">
        <SectionIntro eyebrow="Questions" title="Before you commit" />
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
