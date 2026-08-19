import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* Placeholder. The real home — the dual-lane split hero of §4.3 — is
   built in Phase 2. */
export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-6 py-16 md:px-8">
      <Badge tone="navy">Phase 0</Badge>
      <h1 className="mt-4 text-h1">Rakuxon Care</h1>
      <p className="measure mt-4 text-body-lg text-ink-500">
        Foundation and design tokens are in place. The split hero, the two lane
        hubs, and everything below the fold arrive in Phase 2.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button>Get in touch</Button>
        <Link
          href="/styleguide"
          className="text-body text-navy-800 underline-offset-4 hover:underline"
        >
          View the styleguide
        </Link>
      </div>
    </div>
  );
}
