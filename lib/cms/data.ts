import type {
  Arm,
  Faq,
  ProcessStep,
  Service,
  SiteSettings,
  Stat,
  TeamMember,
  Testimonial,
} from "./types";

/* ===========================================================================
   PLACEHOLDER CONTENT — NOT APPROVED COPY
   ---------------------------------------------------------------------------
   Every string below is scaffolding written to give Phase 2 real structure
   to render. It is replaced wholesale when PRD §3 and §5 are written, and
   again by the CMS in Phase 4. Nothing here is a claim of fact:
   registration numbers, statistics, regions and testimonials are invented
   and must not go live.

   ASSUMPTION — the "four arms" (PRD §3 is a TODO).
   The docs reference "four arms" sitewide, "three arms" on the B2B hub, and
   call careers the "Arm 4 surface". The only numbering consistent with all
   three is:
     1. Find Care          (B2C care delivery)
     2. Registration       (B2B — CQC registration and compliance)
     3. Growth             (B2B — tenders, bids, branding)
     4. Staffing           (B2B — recruitment; careers is its surface)
   Branding is treated as a service under Growth rather than its own arm,
   because a fourth B2B arm would make five in total. Change ARMS below if
   the PRD lands differently.
   =========================================================================== */

export const ARMS: Arm[] = [
  {
    slug: "find-care",
    number: 1,
    name: "Find care",
    lane: "b2c",
    summary:
      "CQC-registered care delivered at home, arranged for families and commissioned by councils.",
    href: "/find-care",
    services: ["home-care", "live-in-care", "dementia-care", "respite-care"],
  },
  {
    slug: "registration",
    number: 2,
    name: "Registration and compliance",
    lane: "b2b",
    summary:
      "From company formation to a registered manager in post and your CQC application accepted.",
    href: "/care-businesses",
    services: ["cqc-registration", "policies-and-compliance"],
  },
  {
    slug: "growth",
    number: 3,
    name: "Tenders and growth",
    lane: "b2b",
    summary:
      "Win local-authority contracts and build a brand families recognise and trust.",
    href: "/care-businesses",
    services: ["tender-writing", "branding-and-marketing"],
  },
  {
    slug: "staffing",
    number: 4,
    name: "Staffing and recruitment",
    lane: "b2b",
    summary:
      "Recruit, vet and retain carers who pass inspection and stay past their first year.",
    href: "/care-businesses",
    services: ["staffing-and-recruitment"],
  },
];

export const SERVICES: Service[] = [
  {
    slug: "home-care",
    title: "Home care visits",
    lane: "b2c",
    arm: "find-care",
    summary:
      "Planned visits for personal care, medication and everyday support, from 30 minutes upwards.",
    features: [
      "Personal care and medication support",
      "Meal preparation and light housekeeping",
      "Consistent carers, not a rota of strangers",
      "Visit notes families can see",
    ],
  },
  {
    slug: "live-in-care",
    title: "Live-in care",
    lane: "b2c",
    arm: "find-care",
    summary:
      "A carer living in the home, for people who need support through the day and reassurance at night.",
    features: [
      "One-to-one support around the clock",
      "Stay in familiar surroundings",
      "Matched on interests, not just availability",
      "Respite cover built into the plan",
    ],
  },
  {
    slug: "dementia-care",
    title: "Dementia care",
    lane: "b2c",
    arm: "find-care",
    summary:
      "Specialist support from carers trained in dementia, delivered with routine and patience.",
    features: [
      "Carers trained in dementia and distressed behaviour",
      "Routines built around the person",
      "Family guidance between visits",
      "Care plans reviewed as needs change",
    ],
  },
  {
    slug: "respite-care",
    title: "Respite care",
    lane: "b2c",
    arm: "find-care",
    summary:
      "Short-term cover so family carers can rest, recover or take a holiday.",
    features: [
      "Cover from a single day upwards",
      "Same assessment and care plan standards",
      "Emergency cover where we have capacity",
      "Handover notes on return",
    ],
  },
  {
    slug: "cqc-registration",
    title: "CQC registration",
    lane: "b2b",
    arm: "registration",
    summary:
      "End-to-end support through registration: provider application, registered manager and interview preparation.",
    features: [
      "Statement of purpose and provider application",
      "Registered manager sourcing and interview prep",
      "Policy suite mapped to the quality statements",
      "Support through to the registration decision",
    ],
  },
  {
    slug: "policies-and-compliance",
    title: "Policies and compliance",
    lane: "b2b",
    arm: "registration",
    summary:
      "A policy suite that survives inspection, plus the audit routine to keep it current.",
    features: [
      "Policies mapped to the single assessment framework",
      "Audit calendar and evidence templates",
      "Mock inspection and action plan",
      "Annual review and updates",
    ],
  },
  {
    slug: "tender-writing",
    title: "Tenders and bids",
    lane: "b2b",
    arm: "growth",
    summary:
      "Get onto local-authority frameworks and win the contracts that make a care business viable.",
    features: [
      "Framework and portal registration",
      "Bid writing and social value responses",
      "Pricing and capacity modelling",
      "Post-award mobilisation support",
    ],
  },
  {
    slug: "branding-and-marketing",
    title: "Branding and marketing",
    lane: "b2b",
    arm: "growth",
    summary:
      "A brand, a website and a referral route, so enquiries arrive without you chasing them.",
    features: [
      "Identity, tone and print collateral",
      "Website built for local search",
      "Referral routes with social workers and hospitals",
      "Recruitment marketing that fills shifts",
    ],
  },
  {
    slug: "staffing-and-recruitment",
    title: "Staffing and recruitment",
    lane: "b2b",
    arm: "staffing",
    summary:
      "Recruit and vet carers properly the first time, and keep them past their first year.",
    features: [
      "Right-to-work and DBS compliant onboarding",
      "Induction mapped to the Care Certificate",
      "Retention and supervision frameworks",
      "Temporary cover for gaps in the rota",
    ],
  },
];

export const STATS: Stat[] = [
  { value: "120+", label: "Care businesses supported" },
  { value: "94%", label: "First-time CQC registrations" },
  { value: "12", label: "Local authority frameworks" },
  { value: "10 yrs", label: "In the UK care sector" },
];

export const CARE_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Enquiry",
    description:
      "Tell us what is happening. One conversation, no obligation, no sales script.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We visit at home to understand the person, the routine and the risks.",
  },
  {
    number: "03",
    title: "Care plan",
    description:
      "A written plan you agree to, with named carers and a clear schedule.",
  },
  {
    number: "04",
    title: "Care starts",
    description:
      "Support begins, and the plan is reviewed as needs change rather than annually.",
  },
];

export const BUSINESS_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Foundation",
    description:
      "Company, insurance, banking and the statement of purpose that anchors everything else.",
  },
  {
    number: "02",
    title: "Registration",
    description:
      "Provider application, registered manager in post, and interview preparation.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Policies live, staff onboarded, first packages delivered and evidenced.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Framework applications, tenders and the brand that brings enquiries to you.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "They handled our CQC registration end to end. We opened three months earlier than planned.",
    name: "Placeholder name",
    role: "Director, placeholder home care provider",
    lane: "b2b",
  },
  {
    id: "t2",
    quote:
      "The same two carers every week. Mum knows them, and I stopped worrying about the handover.",
    name: "Placeholder name",
    role: "Daughter of a client",
    lane: "b2c",
  },
  {
    id: "t3",
    quote:
      "We had been rejected once before. They rebuilt the application and it went through first time.",
    name: "Placeholder name",
    role: "Registered manager",
    lane: "b2b",
  },
  {
    id: "t4",
    quote:
      "Booking took one phone call. The assessment happened at Dad's kitchen table two days later, and nothing was rushed.",
    name: "Placeholder name",
    role: "Teacher",
    lane: "b2c",
  },
  {
    id: "t5",
    quote:
      "The care notes go straight to my phone. I live four hours away and I finally stopped feeling guilty about it.",
    name: "Placeholder name",
    role: "Engineer",
    lane: "b2c",
  },
  {
    id: "t6",
    quote:
      "They told us we were not ready to submit, six weeks before we would have found out the hard way.",
    name: "Placeholder name",
    role: "Business consultant",
    lane: "b2b",
  },
];

export const FAQS: Faq[] = [
  {
    question: "How quickly can care start?",
    answer:
      "Most packages begin within a week of the assessment. Where a hospital discharge is involved we can often move faster.",
    lane: "b2c",
  },
  {
    question: "Are your carers CQC registered and DBS checked?",
    answer:
      "Care is delivered under a CQC-registered service, and every carer holds an enhanced DBS check with verified right-to-work documents before their first shift.",
    lane: "b2c",
  },
  {
    question: "Can the council pay for care?",
    answer:
      "Yes. We work with local-authority commissioners on funded packages, and we can explain the assessment route if funding is not yet in place.",
    lane: "b2c",
  },
  {
    question: "How long does CQC registration take?",
    answer:
      "Ten to sixteen weeks is typical once the application is submitted, though the preparation before submission is what usually determines the outcome.",
    lane: "b2b",
  },
  {
    question: "Do I need a registered manager before I apply?",
    answer:
      "Yes. The registered manager application runs alongside the provider application, and we help source and prepare candidates where you do not have one.",
    lane: "b2b",
  },
  {
    question: "What happens if the application is rejected?",
    answer:
      "We review the decision, rebuild the weak evidence and resubmit. Rejections are usually about missing evidence rather than an unfixable problem.",
    lane: "b2b",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Placeholder name",
    role: "Founder",
    bio: "Placeholder biography pending PRD §10 team content.",
  },
  {
    name: "Placeholder name",
    role: "Head of registration",
    bio: "Placeholder biography pending PRD §10 team content.",
  },
  {
    name: "Placeholder name",
    role: "Head of care",
    bio: "Placeholder biography pending PRD §10 team content.",
  },
];

/* PRD §9 open question 2 keeps this in the `in-progress` state until the
   real registration status is confirmed. Flip to `registered` with the
   rating and profile URL when it is. */
export const SITE_SETTINGS: SiteSettings = {
  companyName: "Rakuxon Care",
  legalName: "Rakuxon Care Ltd",
  companyNumber: "00000000 (placeholder)",
  icoRegistration: "ZA000000 (placeholder)",
  cqc: { state: "in-progress" },
  email: "hello@example.com",
  phone: "0000 000 0000",
  address: ["Placeholder address line 1", "Placeholder city", "AA1 1AA"],
  regionsServed: ["Placeholder region — PRD §9 open question 5"],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
  ],
};
