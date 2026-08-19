import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "The cookies this site sets, what they do, and how to change your choice.",
};

export default function Page() {
  return (
    <LegalPage
      title="Cookie policy"
      summary="The cookies this site sets, what they do, and how to change your choice."
      sections={[
        {
          heading: "Essential cookies",
          body: [
            "Placeholder — the cookies required to make the site work, which cannot be switched off.",
          ],
        },
        {
          heading: "Analytics cookies",
          body: [
            "Placeholder — the analytics provider and what it measures. Analytics are off until you accept them; no analytics cookie is set before consent.",
          ],
        },
        {
          heading: "Changing your choice",
          body: [
            "Placeholder — how to withdraw consent, including clearing the stored preference.",
          ],
        },
      ]}
    />
  );
}
