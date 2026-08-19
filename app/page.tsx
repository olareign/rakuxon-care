import { AboutIntro } from "@/components/home/about-intro";
import { CtaBand } from "@/components/home/cta-band";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { Personalized } from "@/components/home/personalized";
import { ServicesSplit } from "@/components/home/services-split";
import { Specialists } from "@/components/home/specialists";
import { StatBand } from "@/components/home/stat-band";
import { Testimonials } from "@/components/home/testimonials";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { WorkingProcess } from "@/components/home/working-process";
import {
  getFaqs,
  getProcess,
  getStats,
  getTeam,
  getTestimonials,
} from "@/lib/cms";

/**
 * Home page, following the Medicia reference structure section for section:
 *
 *  1 navbar (root layout)   8 working process
 *  2 hero                   9 why choose us
 *  3 trust strip           10 CTA band
 *  4 about intro           11 specialists
 *  5 stat band             12 testimonials
 *  6 services split        13 FAQ
 *  7 personalised          14 footer (root layout)
 *
 * Colour and copy are Rakuxon's; everything else follows the reference.
 * The earlier dual-lane split hero is replaced by the reference's centred
 * hero — both audiences are now carried through the services section and
 * the mobile drawer instead. Noted in TODO.md.
 */
export default async function HomePage() {
  const [stats, careProcess, testimonials, team, faqs] = await Promise.all([
    getStats(),
    getProcess("b2c"),
    getTestimonials(),
    getTeam(),
    getFaqs(),
  ]);

  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutIntro />
      <StatBand stats={stats} />
      <ServicesSplit />
      <Personalized />
      <WorkingProcess steps={careProcess} />
      <WhyChooseUs />
      <CtaBand />
      <Specialists members={team} />
      <Testimonials testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </>
  );
}
