import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Complaints procedure",
  description:
    "How to raise a concern about your care or our service, and what happens next.",
};

export default function Page() {
  return (
    <LegalPage
      title="Complaints procedure"
      summary="How to raise a concern about your care or our service, and what happens next."
      sections={[
        {
          heading: "Raising a concern",
          body: ["Placeholder — how to complain, and who receives it."],
        },
        {
          heading: "What happens next",
          body: ["Placeholder — acknowledgement and resolution timescales."],
        },
        {
          heading: "If you are not satisfied",
          body: [
            "Placeholder — escalation to the Local Government and Social Care Ombudsman, and the role of the Care Quality Commission in monitoring concerns.",
          ],
        },
      ]}
    />
  );
}
