import {
  ARMS,
  BUSINESS_PROCESS,
  CARE_PROCESS,
  FAQS,
  SERVICES,
  SITE_SETTINGS,
  STATS,
  TEAM,
  TESTIMONIALS,
} from "./data";
import type { Lane } from "./types";

export * from "./types";

/**
 * Accessors are async so Phase 4 can swap the stub dataset for real CMS
 * calls without touching a single call site. Lane filters include `both`,
 * which is how shared content reaches either hub.
 */

const matchesLane = (lane: Lane, filter?: Lane) =>
  !filter || filter === "both" || lane === filter || lane === "both";

export async function getSiteSettings() {
  return SITE_SETTINGS;
}

export async function getArms(lane?: Lane) {
  return ARMS.filter((a) => matchesLane(a.lane, lane));
}

export async function getServices(lane?: Lane) {
  return SERVICES.filter((s) => matchesLane(s.lane, lane));
}

export async function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export async function getServicesByArm(armSlug: string) {
  return SERVICES.filter((s) => s.arm === armSlug);
}

export async function getStats() {
  return STATS;
}

export async function getProcess(lane: Extract<Lane, "b2c" | "b2b">) {
  return lane === "b2c" ? CARE_PROCESS : BUSINESS_PROCESS;
}

export async function getTestimonials(lane?: Lane) {
  return TESTIMONIALS.filter((t) => matchesLane(t.lane, lane));
}

export async function getFaqs(lane?: Lane) {
  return FAQS.filter((f) => matchesLane(f.lane, lane));
}

export async function getTeam() {
  return TEAM;
}
