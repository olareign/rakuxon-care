"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button, buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useScrolled } from "@/lib/hooks/use-scrolled";
import { cn } from "@/lib/cn";
import type { Service } from "@/lib/cms";

export interface NavLane {
  label: string;
  href: string;
  blurb: string;
  services: Pick<Service, "slug" | "title" | "summary">[];
}

const PRIMARY_LINKS = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function SiteNav({ lanes }: { lanes: { b2c: NavLane; b2b: NavLane } }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const scrolled = useScrolled(8);

  // Radix keeps the drawer open across client-side navigation, so every link
  // inside it closes on click. Doing it here rather than in a pathname effect
  // avoids a cascading render on every route change.
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper-50/95 backdrop-blur transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between gap-6 transition-[padding] duration-200",
            scrolled ? "py-2" : "py-4",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-sm text-h4 text-navy-800"
          >
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-md bg-navy-800 text-small text-white"
            >
              R
            </span>
            Rakuxon Care
          </Link>

          {/* ---------- Desktop ---------- */}
          <NavigationMenu.Root
            className="relative hidden lg:flex"
            delayDuration={0}
          >
            <NavigationMenu.List className="flex items-center gap-1">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="inline-flex min-h-11 items-center gap-1.5 rounded-pill px-4 text-body text-ink-700 transition-colors hover:bg-navy-50 hover:text-navy-800 data-[state=open]:bg-navy-50">
                  Services
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="size-4 fill-current transition-transform group-data-[state=open]:rotate-180"
                  >
                    <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                  </svg>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-full left-0 w-max">
                  {/* Two lane columns — §4.2. */}
                  <div className="mt-2 grid w-[52rem] grid-cols-2 gap-6 rounded-lg border border-navy-100 bg-paper-100 p-6 shadow-card">
                    {[lanes.b2c, lanes.b2b].map((lane, idx) => (
                      <div key={lane.href} className="flex flex-col gap-3">
                        <div
                          className={cn(
                            "rounded-md p-4",
                            idx === 0 ? "bg-care-50" : "bg-navy-50",
                          )}
                        >
                          <NavigationMenu.Link asChild>
                            <Link href={lane.href} className="text-h4">
                              {lane.label}
                            </Link>
                          </NavigationMenu.Link>
                          <p className="mt-1 text-small text-ink-500">
                            {lane.blurb}
                          </p>
                        </div>
                        <ul className="flex flex-col">
                          {lane.services.map((s) => (
                            <li key={s.slug}>
                              <NavigationMenu.Link asChild>
                                <Link
                                  href={`${lane.href}#services`}
                                  className="flex min-h-11 flex-col justify-center rounded-md px-3 py-2 transition-colors hover:bg-paper-0"
                                >
                                  <span className="text-ink-900">
                                    {s.title}
                                  </span>
                                  <span className="text-small text-ink-500">
                                    {s.summary}
                                  </span>
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

              {PRIMARY_LINKS.map((l) => (
                <NavigationMenu.Item key={l.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-11 items-center rounded-pill px-4 text-body text-ink-700 transition-colors hover:bg-navy-50 hover:text-navy-800"
                    >
                      {l.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="inline-flex min-h-11 items-center rounded-pill px-4 text-body text-navy-800 transition-colors hover:bg-navy-50"
            >
              Log in
            </Link>
            <Link href="/contact" className={buttonClasses({ size: "sm" })}>
              Get in touch
            </Link>
          </div>

          {/* ---------- Mobile ---------- */}
          <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            <Dialog.Trigger asChild>
              <Button variant="secondary" size="sm" className="lg:hidden">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="size-5 fill-current"
                >
                  <path d="M3 5.5A1 1 0 0 1 4 4.5h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 4.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3.5a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H4Z" />
                </svg>
                Menu
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-900/40" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-paper-50 p-6 shadow-card">
                <div className="flex items-center justify-between gap-4">
                  <Dialog.Title className="text-h4">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      aria-label="Close menu"
                    >
                      Close
                    </Button>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Site navigation, starting with the two ways to work with
                  Rakuxon Care.
                </Dialog.Description>

                {/* Lane split first — §4.2. */}
                <div className="mt-6 flex flex-col gap-3">
                  {[lanes.b2c, lanes.b2b].map((lane, idx) => (
                    <Link
                      key={lane.href}
                      href={lane.href}
                      onClick={closeDrawer}
                      className={cn(
                        "flex flex-col gap-1 rounded-lg p-5",
                        idx === 0
                          ? "border border-care-100 bg-care-50"
                          : "border border-navy-100 bg-navy-50",
                      )}
                    >
                      <span className="text-h4">{lane.label}</span>
                      <span className="text-small text-ink-500">
                        {lane.blurb}
                      </span>
                    </Link>
                  ))}
                </div>

                <ul className="mt-6 flex flex-col border-t border-ink-300/50 pt-4">
                  {PRIMARY_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={closeDrawer}
                        className="flex min-h-11 items-center text-body-lg text-ink-700"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/login"
                      onClick={closeDrawer}
                      className="flex min-h-11 items-center text-body-lg text-ink-700"
                    >
                      Log in
                    </Link>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className={buttonClasses({
                    fullWidth: true,
                    className: "mt-6",
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
