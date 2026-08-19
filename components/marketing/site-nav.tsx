"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/marketing/logo";
import { useScrolled } from "@/lib/hooks/use-scrolled";
import { cn } from "@/lib/cn";

export interface NavArm {
  /** "Arm 1 — Rakuxon Care" */
  eyebrow: string;
  label: string;
  href: string;
  blurb: string;
  links: { label: string; href: string }[];
}

/* PRD §3.1. The full spec also lists Resources ▾ (Blog, Case Studies,
   Guides, FAQ) and Careers; those routes arrive in Phases 4–5, so only FAQ
   is surfaced for now rather than shipping links that 404. Logged in
   TODO.md. */
const LINKS = [
  { label: "Home", href: "/" },
  { label: "Find care", href: "/find-care" },
  { label: "Launch Kit", href: "/launch-kit" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function SiteNav({ arms }: { arms: { one: NavArm; two: NavArm } }) {
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

          {/* ---------------- Desktop (lg and up) ---------------- */}
          <NavigationMenu.Root
            className="relative hidden lg:flex lg:flex-1 lg:justify-center"
            delayDuration={0}
          >
            <NavigationMenu.List className="flex items-center gap-0.5">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group inline-flex min-h-11 items-center gap-1.5 rounded-pill px-3 text-body text-ink-700 transition-colors hover:bg-navy-50 hover:text-navy-800 data-[state=open]:bg-navy-50 data-[state=open]:text-navy-800">
                  Services
                  <ChevronDown
                    className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </NavigationMenu.Trigger>

                {/* Two columns keyed to the two arms — PRD §3.1. Width is
                    clamped so the panel can never exceed the viewport. */}
                <NavigationMenu.Content className="absolute top-full left-1/2 z-50 w-[min(58rem,calc(100vw-3rem))] -translate-x-1/2">
                  <div className="mt-3 grid gap-6 rounded-lg border border-navy-100 bg-paper-100 p-6 shadow-card md:grid-cols-2">
                    {[arms.one, arms.two].map((arm, idx) => (
                      <div
                        key={arm.href}
                        className="flex min-w-0 flex-col gap-3"
                      >
                        <NavigationMenu.Link asChild>
                          <Link
                            href={arm.href}
                            className={cn(
                              "rounded-md p-4 transition-colors",
                              idx === 0
                                ? "bg-care-50 hover:bg-care-100"
                                : "bg-navy-50 hover:bg-navy-100",
                            )}
                          >
                            <span
                              className={cn(
                                "block text-overline uppercase",
                                idx === 0 ? "text-care-700" : "text-navy-800",
                              )}
                            >
                              {arm.eyebrow}
                            </span>
                            <span className="font-display mt-1 block text-h4 text-ink-900">
                              {arm.label}
                            </span>
                            <span className="mt-1 block text-small text-ink-500">
                              {arm.blurb}
                            </span>
                          </Link>
                        </NavigationMenu.Link>
                        <ul className="flex min-w-0 flex-col">
                          {arm.links.map((l) => (
                            <li key={l.label} className="min-w-0">
                              <NavigationMenu.Link asChild>
                                <Link
                                  href={l.href}
                                  className="flex min-h-11 min-w-0 items-center rounded-md px-3 py-2 text-ink-700 transition-colors hover:bg-paper-0 hover:text-navy-800"
                                >
                                  <span className="truncate">{l.label}</span>
                                </Link>
                              </NavigationMenu.Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {LINKS.map((l) => (
                <NavigationMenu.Item key={l.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-11 items-center rounded-pill px-3 text-body whitespace-nowrap text-ink-700 transition-colors hover:bg-navy-50 hover:text-navy-800"
                    >
                      {l.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Ghost Log in + filled Get in touch — PRD §3.1. */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href="/login"
              className="inline-flex min-h-11 items-center rounded-pill px-3 text-body whitespace-nowrap text-navy-800 transition-colors hover:bg-navy-50"
            >
              Log in
            </Link>
            <Link
              href="/contact"
              className={cn(buttonClasses({ size: "sm" }), "whitespace-nowrap")}
            >
              Get in touch
            </Link>
          </div>

          {/* ---------------- Below lg ---------------- */}
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
                  Site navigation, starting with the two arms.
                </Dialog.Description>

                {/* Lane split first — PRD §3.1. */}
                <div className="mt-6 flex flex-col gap-3">
                  {[arms.one, arms.two].map((arm, idx) => (
                    <Link
                      key={arm.href}
                      href={arm.href}
                      onClick={closeDrawer}
                      className={cn(
                        "flex flex-col gap-1 rounded-lg border p-5",
                        idx === 0
                          ? "border-care-100 bg-care-50"
                          : "border-navy-100 bg-navy-50",
                      )}
                    >
                      <span
                        className={cn(
                          "text-overline uppercase",
                          idx === 0 ? "text-care-700" : "text-navy-800",
                        )}
                      >
                        {arm.eyebrow}
                      </span>
                      <span className="font-display text-h4 text-ink-900">
                        {arm.label}
                      </span>
                      <span className="text-small text-ink-500">
                        {arm.blurb}
                      </span>
                    </Link>
                  ))}
                </div>

                <ul className="mt-6 flex flex-col border-t border-ink-300/50 pt-2">
                  {[
                    { label: "Home", href: "/" },
                    { label: "All services", href: "/services" },
                    { label: "Launch Kit", href: "/launch-kit" },
                    { label: "Rakuxon Staffing", href: "/staffing" },
                    { label: "About", href: "/about" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Log in", href: "/login" },
                  ].map((l) => (
                    <li key={l.href}>
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
                  Get in touch
                </Link>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
