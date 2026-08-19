import { Container } from "@/components/ui/container";

/* Structure now, approved copy later — PRD §9 question 6 assigns ownership
   of the legal text. Each page states plainly that it is not final rather
   than presenting placeholder text as a binding policy. */
export function LegalPage({
  title,
  summary,
  sections,
}: {
  title: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <article className="py-16 md:py-24">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-pill bg-navy-100 px-3 py-1 text-overline text-navy-800 uppercase">
            Legal
          </span>
          <h1 className="text-h1">{title}</h1>
          <p className="text-body-lg text-ink-500">{summary}</p>

          <p
            role="note"
            className="rounded-md border-2 border-warning bg-paper-100 px-5 py-4 text-ink-900"
          >
            <strong>Not final.</strong> This page carries the structure only.
            The binding text must be written and approved before launch — see
            PRD §9, question 6.
          </p>

          <div className="mt-6 flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.heading} className="flex flex-col gap-3">
                <h2 className="text-h3">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="text-ink-700">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
