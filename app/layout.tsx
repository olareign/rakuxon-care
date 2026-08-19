import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

/* docs/design-system.md §2: serif is scoped to testimonial pull-quotes
   only — never applied to UI. Exposed as `font-serif`, applied nowhere
   globally. */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Rakuxon Care",
    template: "%s · Rakuxon Care",
  },
  description:
    "CQC-registered home care for families and councils, and end-to-end support for care businesses — registration, tenders, branding and staffing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Next 16 no longer overrides scroll-behavior on navigation;
    // data-scroll-behavior restores the instant scroll-to-top on route
    // change while keeping smooth scrolling for in-page anchors.
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${sourceSerif.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only rounded-md focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-navy-800 focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {/* Header and footer landmarks arrive in Phase 1. */}
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
