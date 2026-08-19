import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/marketing/logo";
import { getArms, getSiteSettings } from "@/lib/cms";

/* §4.15: four columns plus a utility bar carrying legal, CQC/ICO/company
   registration and socials. Navy surface, so data-surface flips the focus
   ring to white. */
export async function SiteFooter() {
  const [settings, arms] = await Promise.all([getSiteSettings(), getArms()]);

  const columns = [
    {
      heading: "Find care",
      links: [
        { label: "Home care visits", href: "/find-care#services" },
        { label: "Live-in care", href: "/find-care#services" },
        { label: "Dementia care", href: "/find-care#services" },
        { label: "For councils", href: "/find-care#councils" },
      ],
    },
    {
      heading: "Care businesses",
      links: [
        { label: "CQC registration", href: "/care-businesses#services" },
        { label: "Tenders and bids", href: "/care-businesses#services" },
        { label: "Branding", href: "/care-businesses#services" },
        { label: "Start a care business", href: "/start-a-care-business" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
        { label: "Terms", href: "/terms" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Complaints", href: "/complaints" },
      ],
    },
  ];

  return (
    <footer data-surface="navy" className="bg-navy-900 text-navy-100">
      <Container>
        <div className="flex flex-col gap-4 border-b border-navy-700 py-12">
          <Logo variant="white" className="h-7 self-start" />
          <p className="measure text-navy-100">
            CQC-registered care at home, and end-to-end support for the
            businesses that deliver it.
          </p>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h2 className="text-overline text-white uppercase">
                {col.heading}
              </h2>
              <ul className="flex flex-col">
                {col.links.map((l) => (
                  <li key={`${col.heading}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="flex min-h-11 items-center text-navy-100 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-navy-700 py-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={`mailto:${settings.email}`}
              className="inline-flex min-h-11 items-center text-white underline-offset-4 hover:underline"
            >
              {settings.email}
            </a>
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center text-white underline-offset-4 hover:underline"
            >
              {settings.phone}
            </a>
            <ul className="flex flex-wrap gap-x-6">
              {settings.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex min-h-11 items-center text-navy-100 underline-offset-4 hover:text-white hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-small text-navy-100">
            <p>
              {settings.legalName} · Registered in England and Wales, company
              number {settings.companyNumber} · ICO registration{" "}
              {settings.icoRegistration}
            </p>
            <p>
              {settings.cqc.state === "registered"
                ? `CQC registered — rated ${settings.cqc.rating}.`
                : "CQC registration in progress."}{" "}
              Serving {settings.regionsServed.join(", ")}.
            </p>
            <p className="text-navy-100/80">
              Placeholder registration details and regions — PRD §9 questions 2
              and 5.
            </p>
            <p>
              {arms.length} arms, one brand. © {new Date().getFullYear()}{" "}
              {settings.legalName}.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
