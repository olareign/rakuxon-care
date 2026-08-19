import { getServices } from "@/lib/cms";
import { SiteNav, type NavLane } from "./site-nav";

/* Server wrapper: the nav's content comes from the data layer, so the
   client component stays presentational. Service links point at the lane
   hubs until Phase 4 builds /services/[slug]. */
export async function SiteHeader() {
  const [b2c, b2b] = await Promise.all([
    getServices("b2c"),
    getServices("b2b"),
  ]);

  const lanes: { b2c: NavLane; b2b: NavLane } = {
    b2c: {
      label: "Find care",
      href: "/find-care",
      blurb: "For families arranging care and councils commissioning it.",
      services: b2c.map(({ slug, title, summary }) => ({
        slug,
        title,
        summary,
      })),
    },
    b2b: {
      label: "For care businesses",
      href: "/care-businesses",
      blurb: "Registration, tenders, branding and staffing for providers.",
      services: b2b.map(({ slug, title, summary }) => ({
        slug,
        title,
        summary,
      })),
    },
  };

  return <SiteNav lanes={lanes} />;
}
