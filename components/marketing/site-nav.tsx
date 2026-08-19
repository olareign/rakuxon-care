"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/marketing/logo";
import { useScrolled } from "@/lib/hooks/use-scrolled";
import { cn } from "@/lib/cn";

export interface NavLane {
  label: string;
  href: string;
  blurb: string;
}

/* Reference section 1: logo left, links centred, one outlined pill CTA on
   the right. The two-lane Services mega-menu from the earlier build is
   replaced by a plain "Services" link to match the reference; the lane
   split is preserved at the top of the mobile drawer. Noted in TODO.md. */
const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/faq" },
];

export function SiteNav({ lanes }: { lanes: { b2c: NavLane; b2b: NavLane } }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const scrolled = useScrolled(8);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper-50/90 backdrop-blur transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-4 transition-[padding] duration-200",
            scrolled ? "py-2" : "py-3 md:py-4",
          )}
        >
          <Link
            href="/"
            aria-label="Rakuxon Care — home"
            className="flex min-h-11 shrink-0 items-center rounded-sm py-1"
          >
            <Logo priority className="h-6 md:h-7" />
          </Link>

          {/* Centred links (lg and up). */}
          <nav
            aria-label="Main"
            className="hidden lg:flex lg:flex-1 lg:justify-center"
          >
            <ul className="flex items-center gap-1">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-11 items-center rounded-pill px-4 text-body text-ink-700 transition-colors hover:bg-navy-50 hover:text-navy-800"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Outlined CTA, as in the reference. */}
          <Link
            href="/contact"
            className={cn(
              buttonClasses({ variant: "secondary", size: "sm" }),
              "hidden shrink-0 lg:inline-flex",
            )}
          >
            Contact
          </Link>

          {/* Hamburger drawer below lg. */}
          <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            <Dialog.Trigger
              aria-label="Open menu"
              className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-pill border-2 border-navy-800 px-4 text-small font-semibold text-navy-800 transition-colors hover:bg-navy-50 lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
              <span className="hidden sm:inline">Menu</span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-900/50" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-paper-50 p-5 shadow-card sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <Dialog.Title asChild>
                    <span className="flex items-center">
                      <Logo className="h-6" />
                      <span className="sr-only">Rakuxon Care menu</span>
                    </span>
                  </Dialog.Title>
                  <Dialog.Close
                    aria-label="Close menu"
                    className="inline-flex size-11 items-center justify-center rounded-pill text-ink-700 transition-colors hover:bg-navy-50"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Site navigation, starting with the two ways to work with
                  Rakuxon Care.
                </Dialog.Description>

                {/* Lane split first. */}
                <div className="mt-6 flex flex-col gap-3">
                  {[lanes.b2c, lanes.b2b].map((lane, idx) => (
                    <Link
                      key={lane.href}
                      href={lane.href}
                      onClick={closeDrawer}
                      className={cn(
                        "flex flex-col gap-1 rounded-lg border p-5",
                        idx === 0
                          ? "border-care-100 bg-care-50"
                          : "border-navy-100 bg-navy-50",
                      )}
                    >
                      <span className="font-display text-h4 text-ink-900">
                        {lane.label}
                      </span>
                      <span className="text-small text-ink-500">
                        {lane.blurb}
                      </span>
                    </Link>
                  ))}
                </div>

                <ul className="mt-6 flex flex-col border-t border-ink-300/50 pt-2">
                  {LINKS.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        onClick={closeDrawer}
                        className="flex min-h-12 items-center text-body-lg text-ink-700"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  onClick={closeDrawer}
                  className={buttonClasses({
                    fullWidth: true,
                    className: "mt-auto",
                  })}
                >
                  Contact
                </Link>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
