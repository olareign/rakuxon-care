import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FeatureRow } from "@/components/marketing/feature-row";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { SplitHero } from "@/components/marketing/split-hero";
import { StatBand } from "@/components/marketing/stat-band";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { getArms, getProcess, getStats, getTestimonials } from "@/lib/cms";

export default async function HomePage() {
  const [arms, stats, testimonials, careProcess] = await Promise.all([
    getArms(),
    getStats(),
    getTestimonials(),
    getProcess("b2c"),
  ]);

  return (
    <>
      <SplitHero
        b2c={{
          eyebrow: "I need care",
          title: "Care at home, arranged properly",
          body: "For families arranging support for someone they love, and for councils commissioning packages they can rely on.",
          href: "/find-care",
          cta: "Find care",
          points: [
            "Assessment at home within days",
            "Consistent, named carers",
            "Council-funded packages welcome",
          ],
        }}
        b2b={{
          eyebrow: "I run or want to start a care business",
          title: "Register, win work, and staff up",
          body: "From CQC registration to framework tenders and recruitment, with people who have done it before.",
          href: "/care-businesses",
          cta: "For care businesses",
          points: [
            "CQC registration end to end",
            "Tender and framework support",
            "Recruitment that survives inspection",
          ],
        }}
      />

      {/* Trust bar */}
      <section className="border-y border-navy-100 bg-paper-100 py-8">
        <Container>
          <StatBand stats={stats} />
        </Container>
      </section>

      <Section id="arms">
        <SectionIntro
          eyebrow="What we do"
          title="Four arms, one brand"
          subtitle="One business, two audiences, and four ways we work — care delivery on one side, and everything a care business needs on the other."
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

      <Section tint="paper">
        <div className="flex flex-col gap-20">
          <FeatureRow
            lane="b2c"
            eyebrow="Find care"
            title="Care that fits the person, not the rota"
            body="We assess at home, agree a written plan with you, and send carers who know the person by name."
            imageLabel="Carer and older client at home, warm natural light"
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
            body="Registration, policies, tenders and staffing. The parts that stall a launch, handled by people who have been through them."
            imageLabel="Care business owners in a meeting, professional setting"
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

      <Section>
        <SectionIntro
          eyebrow="How it works"
          title="Arranging care takes four steps"
          subtitle="No sales script, no pressure, and no commitment until you have seen the plan in writing."
          lane="b2c"
        />
        <div className="mt-12">
          <ProcessTimeline steps={careProcess} lane="b2c" />
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

      {/* Dual final CTA — one per lane, never a single blended ask. */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg border border-care-100 bg-care-50 p-8">
            <h2 className="text-h3">Looking for care?</h2>
            <p className="text-ink-700">
              Tell us what is happening and we will talk you through the
              options. No obligation.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ tone: "care", className: "w-fit" })}
            >
              Talk to us about care
            </Link>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-navy-100 bg-navy-50 p-8">
            <h2 className="text-h3">Building a care business?</h2>
            <p className="text-ink-700">
              Whether you are pre-registration or scaling, tell us where you are
              stuck.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ className: "w-fit" })}
            >
              Talk to us about your business
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
