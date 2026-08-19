import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { AvatarStack } from "@/components/home/avatar-stack";
import { PHOTOS } from "@/lib/images";

/* Reference section 2.
   Centred two-line heading, muted subtext, one pill CTA, then a horizontal
   row of three floating cards: info card with avatar stack, badge card, and
   an image card carrying a floating tag. Faint corner accents sit at the
   panel's edges and are decorative only. */
export function Hero() {
  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-paper-0 px-5 py-14 sm:px-8 md:px-12 md:py-20">
          {/* Corner accents — decorative. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-8 left-8 hidden text-navy-600/25 md:block"
          >
            <svg viewBox="0 0 16 16" className="size-4">
              <path
                d="M8 1v14M1 8h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-10 right-10 hidden size-2 rounded-pill bg-care-500/40 md:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-24 left-12 hidden size-2 rounded-pill bg-navy-600/25 lg:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-8 bottom-28 hidden text-care-600/30 lg:block"
          >
            <svg viewBox="0 0 16 16" className="size-4">
              <path
                d="M8 1v14M1 8h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 hidden size-64 rounded-lg border border-navy-600/10 lg:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -bottom-20 hidden size-72 rounded-lg border border-care-500/10 lg:block"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="text-h1">
              Expert care at home,
              <br className="hidden sm:block" /> and the expertise behind it
            </h1>
            <p className="measure mt-5 text-body-lg text-ink-500">
              Arrange CQC-registered care for someone you love, or build the
              care business that delivers it. One team, both sides.
            </p>
            <Link
              href="/contact"
              className={buttonClasses({
                tone: "care",
                size: "lg",
                className: "mt-8",
              })}
            >
              Book a conversation
            </Link>
          </div>

          {/* Floating card row. */}
          <div className="relative mt-14 grid items-center gap-5 lg:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-lg bg-paper-100 p-5 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-h4 text-ink-900">
                  Latest matched
                  <br /> carer
                </p>
                <ArrowUpRight
                  className="size-5 shrink-0 text-ink-500"
                  aria-hidden="true"
                />
              </div>
              <AvatarStack
                photos={[
                  PHOTOS.avatar3,
                  PHOTOS.avatar4,
                  PHOTOS.avatar7,
                  PHOTOS.avatar2,
                  PHOTOS.avatar6,
                ]}
              />
              <p className="text-small text-ink-500">
                More than 4,000 carers matched to families
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-lg bg-paper-100 p-5 shadow-card">
              <div className="flex min-w-0 flex-col gap-3">
                <p className="font-display text-h4 text-ink-900">
                  Families supported
                </p>
                <AvatarStack
                  photos={[
                    PHOTOS.avatar8,
                    PHOTOS.avatar1,
                    PHOTOS.avatar5,
                    PHOTOS.avatar4,
                  ]}
                />
              </div>
              <span className="grid size-14 shrink-0 place-items-center rounded-pill bg-care-600 text-small font-semibold text-white">
                5k+
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <Photo
                  photo={PHOTOS.carerSupport}
                  ratio="1/1"
                  radius="lg"
                  duotone="none"
                  sizes="160px"
                  className="w-32 sm:w-40"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-pill bg-navy-800 px-3 py-1 text-small whitespace-nowrap text-white shadow-card">
                  On call today
                </span>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <p className="font-display text-h4 text-ink-900">
                  24 hours
                  <br /> support
                </p>
                <a
                  href="tel:00000000000"
                  className="inline-flex min-h-11 items-center gap-2 text-small text-ink-700 underline-offset-4 hover:underline"
                >
                  <Phone className="size-4 text-care-600" aria-hidden="true" />
                  0000 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
