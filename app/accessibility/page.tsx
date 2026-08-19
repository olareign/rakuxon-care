import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "Our commitment to WCAG 2.2 AA, what we have tested, and how to report a barrier.",
};

export default function Page() {
  return (
    <LegalPage
      title="Accessibility statement"
      summary="Our commitment to WCAG 2.2 AA, what we have tested, and how to report a barrier."
      sections={[
        {
          heading: "Our commitment",
          body: [
            "This site is built to meet WCAG 2.2 level AA. Accessibility is a build requirement here, not a post-launch audit.",
          ],
        },
        {
          heading: "What we have tested",
          body: [
            "Placeholder — the full statement is written once Phase 6’s accessibility pass is complete, and must list the assistive technologies tested and any known barriers.",
          ],
        },
        {
          heading: "Reporting a problem",
          body: [
            "Placeholder — the contact route for accessibility barriers and the response time we commit to.",
          ],
        },
      ]}
    />
  );
}
