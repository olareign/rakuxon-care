/**
 * Content model for the stubbed CMS layer, aligned to PRD v2.0 (two-arm
 * model). Phase 4 swaps the accessors in ./index.ts for real CMS calls;
 * these shapes stay put.
 */

/** PRD §1.3. `both` is for shared chrome and cross-arm content. */
export type Lane = "b2c" | "b2b" | "both";

export interface Arm {
  slug: "care" | "agency";
  number: 1 | 2;
  /** Trading name, e.g. "Rakuxon Care" / "Rakuxon Care Agency". */
  name: string;
  laneLabel: string;
  lane: Lane;
  audience: string;
  summary: string;
  href: string;
  services: string[];
}

export interface Service {
  slug: string;
  title: string;
  lane: Lane;
  arm: Arm["slug"];
  summary: string;
  features: string[];
  /** Arm 2 service lines get their own page where one exists. */
  href?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  lane: Lane;
}

export interface Faq {
  question: string;
  answer: string;
  lane: Lane;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

/** PRD §5.3 — the three B2B segments Arm 2 serves. */
export interface Segment {
  title: string;
  body: string;
}

/** PRD §5.4 — Launch Kit contents, grouped exactly as the deck defines. */
export interface LaunchKitGroup {
  title: string;
  items: string[];
}

export type CqcStatus =
  | { state: "registered"; rating: string; profileUrl: string }
  | { state: "in-progress" };

export interface SiteSettings {
  companyName: string;
  legalName: string;
  companyNumber: string;
  icoRegistration: string;
  cqc: CqcStatus;
  /** PRD §3.2 — EAS note for Rakuxon Staffing. */
  easNote: string;
  email: string;
  phone: string;
  address: string[];
  regionsServed: string[];
  socials: { label: string; href: string }[];
}
