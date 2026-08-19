import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Rakuxon Care collects, uses and stores personal data, and the rights you have over it.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy notice"
      summary="How Rakuxon Care collects, uses and stores personal data, and the rights you have over it."
      sections={[
        {
          heading: "Who we are",
          body: [
            "Placeholder — the data controller, registered address and ICO registration number.",
          ],
        },
        {
          heading: "What we collect",
          body: [
            "Placeholder — enquiry form fields, account details, care assessment data and job applications, each with its own basis.",
          ],
        },
        {
          heading: "Why we collect it",
          body: [
            "Placeholder — the lawful basis for each category, including consent, contract and legitimate interests.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Placeholder — retention periods per category, including the care records retention schedule.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Placeholder — access, rectification, erasure, restriction, portability and objection, plus how to exercise them.",
            "The erasure route for enquiry data is a build requirement in Phase 6.",
          ],
        },
        {
          heading: "Complaints",
          body: [
            "Placeholder — how to complain to us and to the Information Commissioner’s Office.",
          ],
        },
      ]}
    />
  );
}
