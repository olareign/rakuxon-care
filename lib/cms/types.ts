/**
 * Content model for the stubbed CMS layer.
 *
 * These shapes mirror the collections PRD §6 will specify. They exist now
 * so Phase 2 pages read from a data source rather than hardcoded JSX; in
 * Phase 4 the accessors in `./index.ts` swap to real CMS calls and the
 * pages do not change.
 */

/** The two audiences. `both` is for shared chrome and cross-lane content. */
export type Lane = "b2c" | "b2b" | "both";

export interface Arm {
  slug: string;
  /** 1–4. See the ARMS note in ./data.ts for the numbering assumption. */
  number: 1 | 2 | 3 | 4;
  name: string;
  lane: Lane;
  summary: string;
  href: string;
  /** Service slugs delivered under this arm. */
  services: string[];
}

export interface Service {
  slug: string;
  title: string;
  lane: Lane;
  arm: string;
  summary: string;
  features: string[];
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

export type CqcStatus =
  | { state: "registered"; rating: string; profileUrl: string }
  | { state: "in-progress" };

export interface SiteSettings {
  companyName: string;
  legalName: string;
  companyNumber: string;
  icoRegistration: string;
  cqc: CqcStatus;
  email: string;
  phone: string;
  address: string[];
  regionsServed: string[];
  socials: { label: string; href: string }[];
}
