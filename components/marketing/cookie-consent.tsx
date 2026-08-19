"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { loadAnalytics, writeConsent } from "@/lib/consent";
import { useConsent } from "@/lib/hooks/use-consent";

/* §4.16. Accept and reject carry equal weight — a reject button that is
   harder to find than accept is not valid consent under UK GDPR/PECR. */
export function CookieConsent() {
  const consent = useConsent();

  React.useEffect(() => {
    if (consent === "accepted") loadAnalytics();
  }, [consent]);

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-heading"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-lg border border-navy-100 bg-paper-100 p-6 shadow-card"
    >
      <h2 id="cookie-consent-heading" className="text-h4">
        Cookies
      </h2>
      <p className="measure mt-2 text-ink-700">
        We use essential cookies to make the site work. We would also like to
        set analytics cookies to understand how the site is used. Analytics stay
        off unless you accept.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button onClick={() => writeConsent("accepted")}>
          Accept analytics
        </Button>
        <Button variant="secondary" onClick={() => writeConsent("rejected")}>
          Reject analytics
        </Button>
        <Link
          href="/cookies"
          className="min-h-11 content-center text-navy-800 underline-offset-4 hover:underline"
        >
          Cookie policy
        </Link>
      </div>
    </div>
  );
}
