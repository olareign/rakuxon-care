import { getArms, getServicesByArm } from "@/lib/cms";
import { SiteNav, type NavArm } from "./site-nav";

/* Server wrapper: the mega-menu's two arm columns come from the data layer
   (PRD §3.1). Arm 2 service lines point at their own pages where one exists
   and at the hub's services anchor until Phase 4 builds /services/{slug}. */
export async function SiteHeader() {
  const [armList, agencyServices] = await Promise.all([
    getArms(),
    getServicesByArm("agency"),
  ]);
  const [armOne, armTwo] = armList;

  const arms: { one: NavArm; two: NavArm } = {
    one: {
      eyebrow: `Arm ${armOne.number} — ${armOne.name}`,
      label: armOne.laneLabel,
      href: armOne.href,
      blurb: armOne.audience,
      links: [
        { label: "Home care services", href: "/find-care#services" },
        { label: "Personal care", href: "/find-care#services" },
        { label: "Domiciliary care", href: "/find-care#services" },
        { label: "For councils and ICBs", href: "/find-care#councils" },
        { label: "How it works", href: "/find-care#how-it-works" },
      ],
    },
    two: {
      eyebrow: `Arm ${armTwo.number} — ${armTwo.name}`,
      label: armTwo.laneLabel,
      href: armTwo.href,
      blurb: armTwo.audience,
      links: [
        ...agencyServices.map((s) => ({
          label: s.title,
          href: s.href ?? "/care-businesses#services",
        })),
        { label: "Care Business Launch Kit", href: "/launch-kit" },
      ],
    },
  };

  return <SiteNav arms={arms} />;
}
