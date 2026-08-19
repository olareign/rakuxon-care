import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, ShieldCheck, UserPlus, Users } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { IconCard } from "@/components/marketing/cards";
import { Section, SectionIntro } from "@/components/marketing/section";
import { getService, getSiteSettings, getStaffingSafeguards } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Rakuxon Staffing",
  description:
    "Recruitment and temporary staffing supplying vetted carers and support workers to care providers. Enhanced DBS, right-to-work checks and a full audit trail for CQC.",
};

/* PRD §5.5 — Arm 2 service line. */
const SUPPLY = [
  {
    icon: UserPlus,
    title: "Permanent recruitment",
    body: "Care workers and support workers recruited, vetted and onboarded to your standards.",
  },
  {
    icon: Users,
    title: "Temporary and bank cover",
    body: "Short-notice cover for sickness, holiday and demand spikes, without dropping compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Temp-to-perm placements",
    body: "Try a worker in the role before committing, with the paperwork handled either way.",
  },
  {
    icon: ShieldCheck,
    title: "Manager and NI search",
    body: "Registered manager and nominated individual search, including interview preparation.",
  },
];

export default async function StaffingPage() {
  const [safeguards, service, settings] = await Promise.all([
    getStaffingSafeguards(),
    getService("staffing"),
    getSiteSettings(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-50 py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-2 rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
                <Users className="size-3.5" aria-hidden="true" />
                Arm 2 — service line
              </span>
              <h1 className="text-h1">Rakuxon Staffing</h1>
              <p className="measure text-body-lg text-ink-700">
                {service?.summary ??
                  "Recruitment and temporary staffing supplying vetted carers and support workers to care providers."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className={buttonClasses({})}>
                  Staffing enquiry
                </Link>
                <Link
                  href="/contact"
                  className={buttonClasses({ variant: "secondary" })}
                >
                  I am looking for work
                </Link>
              </div>
            </div>
            <Photo
              photo={PHOTOS.careTeamGroup}
              ratio="4/5"
              duotone="none"
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="shadow-card"
            />
          </div>
        </Container>
      </section>

      {/* What we supply */}
      <Section id="supply">
        <SectionIntro
          eyebrow="What we supply"
          title="Four ways we staff a service"
          subtitle="Whether the gap is one shift or a registered manager, the vetting standard is the same."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPLY.map(({ icon, title, body }) => (
            <IconCard
              key={title}
              icon={icon}
              title={title}
              body={body}
              lane="b2b"
            />
          ))}
        </div>
      </Section>

      {/* How we operate safely */}
      <Section tint="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
              How we operate safely
            </span>
            <h2 className="text-h2">Compliance is the product</h2>
            <p className="measure text-ink-700">
              A staffing supplier that cannot evidence its checks becomes your
              problem at inspection. Every worker we place arrives with the file
              already in order.
            </p>
            <ul className="flex flex-col gap-3">
              {safeguards.map((s) => (
                <li key={s} className="flex items-start gap-3 text-ink-700">
                  <ShieldCheck
                    className="mt-1 size-4 shrink-0 text-care-600"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <Photo
            photo={PHOTOS.businessTeam}
            ratio="4/3"
            duotone="navy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="shadow-card"
          />
        </div>
        <p className="measure mx-auto mt-10 text-center text-small text-ink-500">
          {settings.easNote}
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-navy-100 bg-navy-50 p-8 md:p-10">
            <h2 className="text-h3">Need workers?</h2>
            <p className="measure text-ink-700">
              Tell us the shifts, the location and the standard you need, and we
              will come back with availability.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ className: "mt-1" })}
            >
              Client staffing enquiry
            </Link>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg border border-care-100 bg-care-50 p-8 md:p-10">
            <h2 className="text-h3">Looking for care work?</h2>
            <p className="measure text-ink-700">
              We place carers and support workers with providers across the
              regions we cover. Live vacancies arrive with the careers page in a
              later phase.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({ tone: "care", className: "mt-1" })}
            >
              Register your interest
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
