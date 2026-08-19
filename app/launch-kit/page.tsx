import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ClipboardList,
  Package,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { getLaunchKit, getProcess, getSegments } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Care Business Launch Kit",
  description:
    "A fixed-scope package for new and existing care providers: governance and registration, HR documents, operations templates, and presence and credibility items.",
};

/* PRD §5.4 — productised offer. Contents come from the data layer and are
   grouped exactly as PRD §5.4 defines them. */
const GROUP_ICONS = [ScrollText, Users, ClipboardList, Sparkles];

export default async function LaunchKitPage() {
  const [groups, segments, process] = await Promise.all([
    getLaunchKit(),
    getSegments(),
    getProcess("b2b"),
  ]);

  const itemCount = groups.reduce((n, g) => n + g.items.length, 0);

  const faqs = [
    {
      question: "Who is the Launch Kit for?",
      answer:
        "New providers preparing to register, and existing providers whose paperwork has not kept up with the service. It is a fixed scope, so you know exactly what arrives.",
      lane: "b2b" as const,
    },
    {
      question: "How much does it cost?",
      answer:
        "The Launch Kit is a single fixed price, quoted on enquiry. Whether the price is published on this page is still being decided — PRD §10, decision 3.",
      lane: "b2b" as const,
    },
    {
      question: "Does it include CQC registration itself?",
      answer:
        "The Kit provides the governance and registration documents. Submitting and managing the application end to end is our CQC registration service, which can be added.",
      lane: "b2b" as const,
    },
    {
      question: "Can I buy it online?",
      answer:
        "Not in this version. The Kit is sold through an enquiry and a short scoping call so the scope matches your situation before anything is paid.",
      lane: "b2b" as const,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-50 py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-2 rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
                <Package className="size-3.5" aria-hidden="true" />
                Arm 2 — productised offer
              </span>
              <h1 className="text-h1">Care Business Launch Kit</h1>
              <p className="measure text-body-lg text-ink-700">
                Everything a care business needs on paper, in one fixed-scope
                package: {itemCount} items across governance, HR, operations and
                credibility.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className={buttonClasses({})}>
                  Enquire about the Kit
                </Link>
                <Link
                  href="#contents"
                  className={buttonClasses({ variant: "secondary" })}
                >
                  See what is included
                </Link>
              </div>
            </div>
            <Photo
              photo={PHOTOS.businessReview}
              ratio="4/5"
              duotone="none"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="shadow-card"
            />
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <Section>
        <SectionIntro
          eyebrow="Who it is for"
          title="Built for three situations"
          subtitle="The scope is fixed, but the starting point is not — the scoping call confirms what you already have."
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

      {/* Contents — the four groups */}
      <Section id="contents" tint="paper">
        <SectionIntro
          eyebrow="What is included"
          title="Four groups, one fixed scope"
          subtitle="Every item below is part of the Kit. Nothing is an optional extra unless it is listed as one."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group, i) => {
            const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
            return (
              <div
                key={group.title}
                className="flex flex-col gap-4 rounded-lg bg-paper-100 p-6 shadow-card"
              >
                <span className="grid size-11 place-items-center rounded-md bg-navy-100 text-navy-800">
                  <Icon
                    className="size-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="text-h4">{group.title}</h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ink-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-pill bg-care-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section tint="deep">
        <SectionIntro
          invert
          eyebrow="How it runs"
          title="From scoping call to launch"
          subtitle="The Kit lands alongside the same four stages every provider goes through."
        />
        <div className="mt-12">
          <ProcessTimeline steps={process} lane="b2b" invert />
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="flex flex-col items-start gap-5 rounded-lg border border-navy-100 bg-navy-50 p-8 md:p-12">
          <span className="inline-flex items-center gap-2 rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
            <Briefcase className="size-3.5" aria-hidden="true" />
            Pricing
          </span>
          <h2 className="text-h2">One fixed price, quoted on enquiry</h2>
          <p className="measure text-ink-700">
            The Launch Kit is sold at a single fixed price rather than by the
            hour. Tell us where you are and we will confirm the scope and the
            figure on a short call.
          </p>
          <p className="text-small text-ink-500">
            Whether the price is published on this page is PRD §10, decision 3.
          </p>
          <Link
            href="/contact"
            className={buttonClasses({ className: "mt-1" })}
          >
            Book a scoping call
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section tint="paper">
        <SectionIntro eyebrow="Questions" title="Before you commit" />
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
