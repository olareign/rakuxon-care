import { Badge } from "@/components/ui/badge";
import type { Lane } from "@/lib/cms";

/* §4.18: the small pill above every section H2, tinted by lane. */
export function Eyebrow({
  lane = "both",
  children,
}: {
  lane?: Lane;
  children: React.ReactNode;
}) {
  return <Badge tone={lane === "b2c" ? "care" : "navy"}>{children}</Badge>;
}
