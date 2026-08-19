import { getArms, getServicesByArm } from "@/lib/cms";
import { serviceHref } from "@/lib/services";
import { SiteNav, type NavArm } from "./site-nav";

/* Server wrapper: the mega-menu's two columns come from the data layer.
   Every link resolves to its own page or its own anchor — serviceHref() is
   the single source of truth for service URLs. */
export async function SiteHeader() {
  const [armList, careServices, agencyServices] = await Promise.all([
    getArms(),
    getServicesByArm("care"),
    getServicesByArm("agency"),
  ]);
  const [armOne, armTwo] = armList;
  const homeCare = careServices.find((s) => s.slug === "home-care");
  const homeCareHref = homeCare ? serviceHref(homeCare) : "/find-care";

  const arms: { one: NavArm; two: NavArm } = {
    one: {
      eyebrow: armOne.name,
      label: armOne.laneLabel,
      href: armOne.href,
      blurb: armOne.audience,
      links: [
        { label: "Home care services", href: homeCareHref },
        { label: "Personal care", href: `${homeCareHref}#personal-care` },
        { label: "Domiciliary care", href: `${homeCareHref}#domiciliary-care` },
        { label: "For councils and ICBs", href: "/find-care#councils" },
        { label: "How it works", href: "/find-care#how-it-works" },
      ],
    },
    two: {
      eyebrow: armTwo.name,
      label: armTwo.laneLabel,
      href: armTwo.href,
      blurb: armTwo.audience,
      links: [
        ...agencyServices.map((s) => ({
          label: s.title,
          href: serviceHref(s),
        })),
        { label: "Care Business Launch Kit", href: "/launch-kit" },
      ],
    },
  };

  return <SiteNav arms={arms} />;
}
