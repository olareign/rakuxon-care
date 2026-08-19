import {
  BadgeCheck,
  FileCheck2,
  FileSignature,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/cms";

/** Icons keyed to the service slugs in PRD §4.2. */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "home-care": HeartHandshake,
  "cqc-registration": BadgeCheck,
  "tender-writing": FileSignature,
  "policies-procedures": FileCheck2,
  "digital-branding": Megaphone,
  consulting: Lightbulb,
  staffing: Users,
};

/**
 * Canonical URL for a service. Services with their own top-level page (only
 * Rakuxon Staffing, PRD §5.5) use that; everything else uses the
 * /services/{slug} detail template. Keeping this in one place is what stops
 * the menu and footer drifting back to duplicate targets.
 */
export function serviceHref(service: Pick<Service, "slug" | "href">) {
  return service.href ?? `/services/${service.slug}`;
}
