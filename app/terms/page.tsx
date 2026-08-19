import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms on which you may use this website. Care services are governed by a separate service agreement.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of use"
      summary="The terms on which you may use this website. Care services are governed by a separate service agreement."
      sections={[
        {
          heading: "Using this site",
          body: [
            "Placeholder — acceptable use and the limits of the information published here.",
          ],
        },
        {
          heading: "Accounts",
          body: [
            "Placeholder — account eligibility, security obligations and termination.",
          ],
        },
        {
          heading: "Our services",
          body: [
            "Placeholder — the relationship between this site and the separate care service agreement or consultancy engagement letter.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "Placeholder — limitations, and the statutory rights that cannot be excluded.",
          ],
        },
      ]}
    />
  );
}
