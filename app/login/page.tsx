import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Log in",
  robots: { index: false, follow: false },
  description: "Sign in to your Rakuxon Care account.",
};

/* Phase 2 placeholder. Accounts are Phase 3 (PRD §7.4); this exists so the
   nav's "Log in" control does not point at a 404 in the meantime. */
export default function LoginPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="flex max-w-xl flex-col gap-5">
          <h1 className="text-h1">Log in</h1>
          <p className="text-body-lg text-ink-500">
            Accounts are not open yet. Sign-in, email verification and the
            resource area arrive in Phase 3.
          </p>
          <p className="text-ink-700">
            If you need something now, the quickest route is a direct enquiry.
          </p>
          <Link
            href="/contact"
            className={buttonClasses({ className: "w-fit" })}
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </div>
  );
}
