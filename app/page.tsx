import Link from "next/link";
import {
  Award,
  Building2,
  ClipboardCheck,
  FileSignature,
  HeartHandshake,
  Users,
} from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { IconCard, ImageCard, StatCard } from "@/components/marketing/cards";
import { FeatureRow } from "@/components/marketing/feature-row";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { SplitHero } from "@/components/marketing/split-hero";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import {
  getArms,
  getProcess,
  getSiteSettings,
  getStats,
  getTestimonials,
} from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

const ARM_ICONS = [HeartHandshake, ClipboardCheck, FileSignature, Users];
const STAT_ICONS = [Building2, Award, FileSignature, Users];

export default async function HomePage() {
  const [arms, stats, testimonials, careProcess, settings] = await Promise.all([
    getArms(),
    getStats(),
    getTestimonials(),
    getProcess("b2c"),
    getSiteSettings(),
  ]);

  return (
    <>
      <SplitHero
        cqc={settings.cqc}
        b2c={{
          eyebrow: "I need care",
          title: "Care at home, arranged properly",
          body: "For families arranging support, and councils commissioning packages.",
          href: "/find-care",
          cta: "Find care",
        }}
        b2b={{
          eyebrow: "I run or want to start a care business",
          title: "Register, win work, staff up",
          body: "CQC registration, tenders and recruitment, run as one project.",
          href: "/care-businesses",
          cta: "For care businesses",
        }}
      />

      {/* Credibility band — stat cards rather than a bare row of numbers. */}
      <Section tint="paper">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              label={s.label}
              icon={STAT_ICONS[i % STAT_ICONS.length]}
            />
          ))}
        </div>
      </Section>

      <Section id="arms">
        <SectionIntro
          eyebrow="What we do"
          title="Four arms, one brand"
          subtitle="One business, two audiences. Care delivery on one side, and everything a care business needs on the other."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {arms.map((arm, i) => (
            <Link key={arm.slug} href={arm.href} className="group">
              <IconCard
                icon={ARM_ICONS[i % ARM_ICONS.length]}
                title={arm.name}
                body={arm.summary}
                lane={arm.lane}
                className="transition-colors group-hover:bg-paper-0"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* Alternating image/text rows — the reference's core rhythm. */}
      <Section tint="paper">
        <div className="flex flex-col gap-20 md:gap-28">
          <FeatureRow
            lane="b2c"
            eyebrow="Find care"
            title="Care that fits the person, not the rota"
            body="We assess at home, agree a written plan with you, and send carers who know the person by name."
            photo={PHOTOS.carerMobility}
            features={[
              "Assessment at home, not over the phone",
              "The same carers week to week",
              "Visit notes families can actually see",
              "Plans reviewed when needs change",
            ]}
          >
            <Link
              href="/find-care"
              className={buttonClasses({
                tone: "care",
                className: "mt-2 w-fit",
              })}
            >
              Find care
            </Link>
          </FeatureRow>

          <FeatureRow
            lane="b2b"
            reverse
            eyebrow="For care businesses"
            title="The unglamorous work that decides whether you open"
            body="Registration, policies, tenders and staffing — the parts that stall a launch, handled by people who have been through them."
            photo={PHOTOS.businessSigning}
            features={[
              "Provider and registered manager applications",
              "Policy suite mapped to the assessment framework",
              "Framework registration and bid writing",
              "Compliant recruitment and induction",
            ]}
          >
            <Link
              href="/care-businesses"
              className={buttonClasses({ className: "mt-2 w-fit" })}
            >
              For care businesses
            </Link>
          </FeatureRow>
        </div>
      </Section>

      {/* Navy band — breaks the page rhythm roughly two thirds down. */}
      <Section tint="deep">
        <SectionIntro
          invert
          eyebrow="How it works"
          title="Arranging care takes four steps"
          subtitle="No sales script, no pressure, and no commitment until you have seen the plan in writing."
        />
        <div className="mt-12">
          <ProcessTimeline steps={careProcess} lane="b2c" invert />
        </div>
      </Section>

      {/* Image-topped cards, a third card shape. */}
      <Section>
        <SectionIntro
          lane="b2c"
          eyebrow="Support at home"
          title="The care we provide"
          subtitle="Every package starts from an assessment at home, so the plan matches the person rather than a template."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ImageCard
            lane="b2c"
            photo={PHOTOS.carerSupport}
            title="Home care visits"
            body="Planned visits for personal care, medication and everyday support."
            href="/find-care#services"
          />
          <ImageCard
            lane="b2c"
            photo={PHOTOS.carerBedside}
            title="Live-in care"
            body="A carer living in the home, for support through the day and night."
            href="/find-care#services"
          />
          <ImageCard
            lane="b2c"
            photo={PHOTOS.seniorMedication}
            title="Dementia care"
            body="Specialist support built around routine, delivered with patience."
            href="/find-care#services"
          />
          <ImageCard
            lane="b2c"
            photo={PHOTOS.familySupport}
            title="Respite care"
            body="Short-term cover so family carers can rest, recover or take a holiday."
            href="/find-care#services"
          />
        </div>
      </Section>

      <Section tint="paper">
        <SectionIntro
          eyebrow="Testimonials"
          title="What people say"
          subtitle="Placeholder testimonials pending real, consented quotes — PRD §10."
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.id}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Dual final CTA — one ask per lane, never a single blended one. */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-care-100 bg-care-50 p-8 md:p-10">
            <HeartHandshake
              className="size-8 text-care-600"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="text-h3">Looking for care?</h2>
            <p className="measure text-ink-700">
              Tell us what is happening and we will talk you through the
              options. No obligation.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ tone: "care", className: "mt-2" })}
            >
              Talk to us about care
            </Link>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-navy-100 bg-navy-50 p-8 md:p-10">
            <Building2
              className="size-8 text-navy-800"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="text-h3">Building a care business?</h2>
            <p className="measure text-ink-700">
              Whether you are pre-registration or scaling, tell us where you are
              stuck.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ className: "mt-2" })}
            >
              Talk to us about your business
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
