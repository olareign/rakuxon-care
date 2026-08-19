# TODO

Open items, stubs and decisions taken during the polish pass. Grouped by
what unblocks them.

---

## Assets

### Logo

- **Supplied file is `public/logo.png`, not `logo.svg`.** The brief said to
  reference `/logo.svg`; the actual file is a PNG, so the code references the
  real filename. Replacing it with a true SVG would be a straight win — the
  wordmark is flat vector artwork and would render sharper at every size.
- **Two variants were generated, not CSS-filtered.** `logo.png` is an opaque
  navy wordmark on a light background with **no alpha channel**, so the
  suggested `filter: invert()` for the footer would have produced a dark
  rectangle on navy rather than a reversed logo. Instead
  `public/logo-navy.png` and `public/logo-white.png` were derived from it by
  keying out the background to transparency and recolouring the ink.
  - Both are 919×267 after trimming the source's padding.
  - **Ask the brand owner for the original vector** so these can be replaced
    with `logo.svg` + `logo-white.svg`. The derived PNGs are a stopgap.
- `public/logo.png` is kept as the untouched original. It is not referenced
  by the app and can be deleted once a vector is supplied.

### Photography

All 17 images are real photographs from **Pexels** (free licence, no
attribution required), downloaded to `public/images/` so the build is
self-contained and `next/image` can optimise them. Source ids:

| File                | Pexels id | Lane |
| ------------------- | --------- | ---- |
| `home-hero`         | 18459193  | B2C  |
| `hero-card-carer`   | 34913372  | B2C  |
| `carer-bedside`     | 29372710  | B2C  |
| `couple-at-home`    | 8088906   | B2C  |
| `carer-support`     | 7551675   | B2C  |
| `carer-mobility`    | 29372734  | B2C  |
| `family-support`    | 7446757   | B2C  |
| `senior-medication` | 8088868   | B2C  |
| `business-hero`     | 1181738   | B2B  |
| `business-meeting`  | 7693692   | B2B  |
| `business-signing`  | 7433919   | B2B  |
| `business-review`   | 34159023  | B2B  |
| `business-team`     | 12903168  | B2B  |
| `business-planning` | 10375908  | B2B  |
| `team-1`            | 29405854  | Team |
| `team-2`            | 31268612  | Team |
| `team-3`            | 29995644  | Team |

- **These are stock, and should be replaced with commissioned photography
  before launch.** They are stand-ins that match the brief's intent, not
  pictures of Rakuxon's actual carers, clients or staff. Using stock people
  on a team grid labelled with real names would misrepresent the business.
- `team-*` portraits are captioned with the placeholder names from
  `lib/cms/data.ts`. **Do not publish** until either real portraits or
  generic role illustrations replace them.
- A navy/teal duotone is applied via `.duotone-*` in `globals.css` so the
  mixed-source set reads as one. Turn it off per image with
  `<Photo duotone="none" />` — used on hero images where fidelity matters.

---

## PRD v2.0 — two-arm model (this pass)

The site now follows PRD v2.0: **Arm 1 Rakuxon Care** (CQC-registered
personal + domiciliary care) and **Arm 2 Rakuxon Care Agency** (enablement
for other providers). Changes made, and what is still owed:

* **Real market figures are live.** The stat bands now use PRD §7 data
  (£77.8bn, 15,232 locations, 1.71m jobs, ~10% vacancy rate, 683,000
  long-term clients, 2.02m council requests, +11% growth). **Citations are
  not attached.** Each band carries a source line naming the internal
  strategy deck; before launch these need proper public citations (Skills
  for Care / CQC / ADASS as applicable) or they should not be published.
* **Invented company metrics were removed.** The hero previously claimed
  "more than 4,000 carers matched" and "5k+ families supported". Arm 1 is
  pre-registration per PRD §10 decision 2, so those were false. They are
  replaced by real market figures and an honest "CQC in progress" tag.
* **`/start-a-care-business` is gone**, replaced by `/launch-kit` with a
  permanent redirect in `next.config.ts`.
* **New pages:** `/launch-kit` (PRD §5.4, all four content groups) and
  `/staffing` (PRD §5.5, including the EAS regulatory note).
* **Nav follows PRD §3.1** — Services mega-menu with two arm columns, plus
  Find Care, Launch Kit, About, FAQ, ghost Log in and filled Get in touch.
  **Held back until their routes exist:** `Resources ▾` (Blog, Case
  Studies, Guides) and `Careers`. Shipping them now would mean 404s. Add
  them in Phases 4–5.
* **Footer follows PRD §3.2** — four columns keyed to the two arms, company
  and get-started, plus the EAS note in the trust bar.
* **Launch Kit pricing is not shown.** PRD §10 decision 3 is unresolved, so
  the page says "one fixed price, quoted on enquiry" and names the open
  decision.
* **Arm 1 scope is stated explicitly** on Find Care: personal and
  domiciliary care only, no care home / residential / nursing.

### Still conflicting with the reference build

* `02_design-system.md` §4.3 still specifies the **dual-lane split hero**.
  The reference has a single centred hero, so lane selection now lives in
  the "Two arms" section directly beneath it. **One of the two documents
  should be updated.**
* Service detail pages (`/services/{slug}`, PRD §4.2) do not exist yet, so
  Arm 2 service cards link to the hub's services anchor.

## Reference-structure rebuild

The home page now follows the Medicia reference section for section (navbar,
hero, trust strip, about, stats, services, personalised, working process,
why-choose-us, CTA band, specialists, testimonials, FAQ, footer). Colour and
copy are Rakuxon's; everything else follows the reference. Consequences:

- **The dual-lane split hero is gone.** `design-system.md` §4.3 calls the
  split hero the signature component; the reference has a single centred
  hero, and matching the reference was the explicit instruction. Both
  audiences are now carried by the services section's two cards and by the
  lane split at the top of the mobile drawer. **§4.3 and this build now
  disagree — one of them should be updated.**
- **The Services mega-menu is gone.** The reference navbar is plain centred
  links, so the two-lane mega-menu (§4.2) was replaced by a `Services` link
  to the home services section. The lane split survives in the drawer only.
- **Partner logos in the trust strip are invented.** Real partner marks
  cannot be shown until Rakuxon confirms who may be named; showing real
  organisations would assert relationships that do not exist. The six marks
  are drawn placeholders with invented names (Northgate Trust, Brightpath,
  Elmwood Group, Carevale, Meridian Health, Oakline). **Replace or remove
  before launch.**
- **Social icons are hand-drawn.** Lucide 1.x ships no brand icons at all,
  so LinkedIn/Facebook/X glyphs are inline SVG in `specialists.tsx` and
  `site-footer.tsx`. The specialists' icons are deliberately **inert** —
  the placeholder team has no profiles, and an icon that links nowhere is
  worse than none. Wire them up with the real team content.
- **The video-review card has no video.** It shows a still with a "Video
  review coming soon" label rather than a play control that does nothing.
- **Step numerals are less faint than the reference.** The reference's
  01–04 are extremely light; at `navy-100` on `paper-50` they measured
  1.19:1. Because they carry the step order they are text, not decoration,
  so they use `navy-600/70` (3.29:1, passing AA for large text).

## Decisions taken (change if you disagree)

- **Nav collapses to the drawer below `lg` (1024px), not below `md`
  (768px).** The brief said "below the tablet breakpoint", but at 768px a
  logo, a Services trigger, two links and two CTAs only fit by cramming —
  which the same brief rules out. 768px therefore shows the hamburger. Move
  the `lg:` prefixes in `components/marketing/site-nav.tsx` to `md:` if you
  want the horizontal nav at tablet width.
- **Three fonts, against `design-system.md` §2**, which asks for one family
  across headings and body. Locked project decision: Plus Jakarta Sans for
  headings (`--font-display`), Inter for body (`--font-sans`), Lora for
  pull-quotes (`--font-serif`). Lora replaces §2's Source Serif 4.
- **`ImagePlaceholder`, `StatBand` and `ServiceCard` were deleted**, having
  been superseded by `Photo`, `StatCard` and `IconCard`/`ImageCard`.

---

## Still owed by the PRD

These are unchanged from the Phase 0–2 build and still block launch.

- **PRD §3 — the "four arms" are an assumption.** Numbering is inferred in
  `lib/cms/data.ts`; see the comment block there.
- **PRD §5** — per-page content outlines. All body copy is on-brand filler.
- **PRD §7.1** — enquiry form fields. `/contact` is a shell until Phase 3.
- **PRD §9 Q2** — CQC registration status. Pinned to `in-progress`.
- **PRD §9 Q3** — public vs gated pricing. Bundle teaser quotes on request.
- **PRD §9 Q5** — regions served. Placeholder string, also feeds
  `LocalBusiness` schema in Phase 6.
- **PRD §9 Q6** — legal copy. All five legal pages are structure only and
  say so on the page.
- **PRD §10** — real statistics, testimonials with consent, team names and
  bios, and real contact details. Everything currently rendered is invented
  and must not go live.

## Palette gaps

Recorded in `docs/design-system.md` §7.1: no `care-800`/`accent-700` for
active button states, no tint/text pair for semantic colours, and
`care-500`/`accent-500` being large-text-only at ~3.4:1.
