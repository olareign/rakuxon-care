import type { Metadata } from "next";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { Section, SectionIntro } from "@/components/marketing/section";
import { getFaqs } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers for families arranging care and for care businesses working towards CQC registration, tenders and recruitment.",
};

export default async function FaqPage() {
  const [b2c, b2b] = await Promise.all([getFaqs("b2c"), getFaqs("b2b")]);

  return (
    <>
      <Section>
        <SectionIntro
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Split by lane, because the two audiences almost never have the same question."
        />
      </Section>

      <Section id="families" tint="care" className="pt-0 md:pt-0">
        <SectionIntro
          lane="b2c"
          align="start"
          as="h3"
          eyebrow="Families and councils"
          title="Arranging care"
        />
        <div className="mt-8 w-full max-w-3xl">
          <FaqAccordion faqs={b2c} />
        </div>
      </Section>

      <Section id="businesses">
        <SectionIntro
          align="start"
          as="h3"
          eyebrow="Care businesses"
          title="Registration and growth"
        />
        <div className="mt-8 w-full max-w-3xl">
          <FaqAccordion faqs={b2b} />
        </div>
      </Section>
    </>
  );
}
