import { SiteNav, type NavLane } from "./site-nav";

/* Server wrapper. The nav itself is presentational; the lane copy shown at
   the top of the mobile drawer comes from here. */
export async function SiteHeader() {
  const lanes: { b2c: NavLane; b2b: NavLane } = {
    b2c: {
      label: "Find care",
      href: "/find-care",
      blurb: "For families arranging care and councils commissioning it.",
    },
    b2b: {
      label: "For care businesses",
      href: "/care-businesses",
      blurb: "Registration, tenders, branding and staffing for providers.",
    },
  };

  return <SiteNav lanes={lanes} />;
}
