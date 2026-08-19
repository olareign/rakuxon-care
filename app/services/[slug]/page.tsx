import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { CheckRow } from "@/components/marketing/cards";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Section, SectionIntro } from "@/components/marketing/section";
import { SERVICE_ICONS } from "@/lib/services";
import { getFaqs, getProcess, getService, getServices } from "@/lib/cms";
import { PHOTOS } from "@/lib/images";
import type { Photo as PhotoData } from "@/lib/images";

/* PRD §5.6 — the service detail template: hero → overview / who it's for →
   what's included → process → FAQ → context-aware CTA. */

const HERO_PHOTO: Record<string, PhotoData> = {
  "home-care": PHOTOS.carerSupport,
  "cqc-registration": PHOTOS.businessSigning,
  "tender-writing": PHOTOS.businessReview,
  "policies-procedures": PHOTOS.businessMeeting,
  "digital-branding": PHOTOS.businessPlanning,
  consulting: PHOTOS.businessTeam,
};

const SECTION_PHOTO: PhotoData[] = [PHOTOS.carerMobility, PHOTOS.carerBedside];

export async function generateStaticParams() {
  const services = await getServices();
  // Staffing lives at /staffing, so it is excluded here.
  return services.filter((s) => !s.href).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service || service.href) notFound();

  const isCare = service.lane === "b2c";
  const [process, faqs] = await Promise.all([
    getProcess(isCare ? "b2c" : "b2b"),
    getFaqs(isCare ? "b2c" : "b2b"),
  ]);
  const Icon = SERVICE_ICONS[service.slug];
  const hubHref = isCare ? "/find-care" : "/care-businesses";
  const hubLabel = isCare ? "Find care" : "For care businesses";

  return (
    <>
      {/* Hero */}
      <section
        className={
          isCare ? "bg-care-50 py-14 md:py-20" : "bg-navy-50 py-14 md:py-20"
        }
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center gap-2 text-small text-ink-700 underline-offset-4 hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All services
              </Link>
              <span
                className={
                  isCare
                    ? "inline-flex items-center gap-2 rounded-pill bg-care-100 px-3 py-1 text-overline text-care-700 uppercase"
                    : "inline-flex items-center gap-2 rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase"
                }
              >
                {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
                {isCare ? "Rakuxon Care" : "Rakuxon Care Agency"}
              </span>
              <h1 className="text-h1">{service.title}</h1>
              <p className="measure text-body-lg text-ink-700">
                {service.overview}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={buttonClasses({ tone: isCare ? "care" : "navy" })}
                >
                  {isCare ? "Make a care enquiry" : "Make a business enquiry"}
                </Link>
                <Link
                  href={hubHref}
                  className={buttonClasses({
                    variant: "secondary",
                    tone: isCare ? "care" : "navy",
                  })}
                >
                  {hubLabel}
                </Link>
              </div>
            </div>
            <Photo
              photo={HERO_PHOTO[service.slug] ?? PHOTOS.businessMeeting}
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
          lane={service.lane}
          eyebrow="Who it is for"
          title="Is this you?"
          subtitle={service.summary}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.whoFor.map((w) => (
            <div
              key={w}
              className="rounded-lg bg-paper-100 p-6 text-ink-700 shadow-card"
            >
              {w}
            </div>
          ))}
        </div>
      </Section>

      {/* Sub-sections (home care) or what's included */}
      {service.sections?.length ? (
        <Section tint="paper">
          <SectionIntro
            lane={service.lane}
            eyebrow="What is included"
            title="Two kinds of support"
          />
          <div className="mt-12 flex flex-col gap-16">
            {service.sections.map((sec, i) => (
              <div
                key={sec.id}
                id={sec.id}
                className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <Photo
                    photo={SECTION_PHOTO[i % SECTION_PHOTO.length]}
                    ratio="4/3"
                    duotone={isCare ? "care" : "navy"}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="shadow-card"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-h3">{sec.title}</h3>
                  <p className="text-ink-500">{sec.body}</p>
                  <ul className="flex flex-col gap-3">
                    {sec.items.map((it) => (
                      <CheckRow key={it} lane={service.lane}>
                        {it}
                      </CheckRow>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : (
        <Section tint="paper">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <span className="text-overline text-ink-500 uppercase">
                What is included
              </span>
              <h2 className="text-h2">What you get</h2>
              <ul className="flex flex-col gap-3">
                {service.features.map((f) => (
                  <CheckRow key={f} lane={service.lane}>
                    {f}
                  </CheckRow>
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
        </Section>
      )}

      {/* Process */}
      <Section tint="deep">
        <SectionIntro
          invert
          eyebrow="How it works"
          title={
            isCare ? "Four steps to care starting" : "Foundation to growth"
          }
        />
        <div className="mt-12">
          <ProcessTimeline
            steps={process}
            lane={isCare ? "b2c" : "b2b"}
            invert
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionIntro
          lane={service.lane}
          eyebrow="Questions"
          title="Common questions"
        />
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
