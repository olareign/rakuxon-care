import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { PHOTOS } from "@/lib/images";

/* Reference section 4: centred eyebrow + heading + subtext, then one wide
   rounded feature image beneath. */
export function AboutIntro() {
  return (
    <section id="about" className="scroll-mt-24 py-14 md:py-20">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
            About
          </span>
          <h2 className="text-h2">Caring for you, backed by expertise</h2>
          <p className="measure text-ink-500">
            We combine hands-on home care with the operational knowledge that
            keeps a care service running, so families and providers both get the
            benefit of the same experience.
          </p>
        </div>
        <Photo
          photo={PHOTOS.aboutWide}
          ratio="16/9"
          duotone="navy"
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="mt-10 shadow-card"
        />
      </Container>
    </section>
  );
}
