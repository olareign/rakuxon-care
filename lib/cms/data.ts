import type {
  Arm,
  Faq,
  LaunchKitGroup,
  ProcessStep,
  Segment,
  Service,
  SiteSettings,
  Stat,
  TeamMember,
  Testimonial,
} from "./types";

/* ===========================================================================
   Content aligned to PRD v2.0 — two arms, one authority.

   The market figures in MARKET_STATS are REAL, taken from PRD §7 ("use
   these, not placeholders"). Everything else — testimonials, team, company
   registration numbers, contact details — remains placeholder and is marked
   as such in the UI. See TODO.md.
   =========================================================================== */

/** PRD §1.3. Arm 1 delivers care; Arm 2 enables other providers. */
export const ARMS: Arm[] = [
  {
    slug: "care",
    number: 1,
    name: "Rakuxon Care",
    laneLabel: "Find care",
    lane: "b2c",
    audience: "Families, councils and ICBs",
    summary:
      "A CQC-registered provider of personal care and domiciliary care at home. Private-pay clients, and packages commissioned by councils, ICBs and NHS Continuing Healthcare.",
    href: "/find-care",
    services: ["home-care"],
  },
  {
    slug: "agency",
    number: 2,
    name: "Rakuxon Care Agency",
    laneLabel: "For care businesses",
    lane: "b2b",
    audience: "Other care providers",
    summary:
      "Enablement for care businesses: CQC registration, tenders and frameworks, policies, digital and branding, consulting, and Rakuxon Staffing.",
    href: "/care-businesses",
    services: [
      "cqc-registration",
      "tender-writing",
      "policies-procedures",
      "digital-branding",
      "consulting",
      "staffing",
    ],
  },
];

/* PRD §4.2 slugs. Arm 1 has a single `home-care` service covering personal
   and domiciliary care; Arm 2 has six service lines. */
export const SERVICES: Service[] = [
  {
    slug: "home-care",
    title: "Home care services",
    lane: "b2c",
    arm: "care",
    summary:
      "Personal care and domiciliary care delivered in the person's own home, from scheduled visits to live-in support.",
    overview:
      "Care that happens where the person already lives, built from an assessment at home rather than a template. Every package starts with a visit, a conversation with the family, and a written plan you agree to before anything begins.",
    whoFor: [
      "Families arranging care for a relative",
      "Councils and ICBs commissioning packages",
      "People funded through NHS Continuing Healthcare",
      "Direct-payment and personal-budget holders",
    ],
    features: [
      "Washing, dressing and personal hygiene",
      "Continence, mobility and medication support",
      "Scheduled visits, live-in, respite and companionship",
      "Complex and dementia-informed care",
    ],
    sections: [
      {
        id: "personal-care",
        title: "Personal care",
        body: "Hands-on support with the things that make a day possible, delivered with dignity and without rushing.",
        items: [
          "Washing, dressing and personal hygiene",
          "Continence and mobility support",
          "Medication support and prompts",
          "Meal preparation and nutrition",
        ],
      },
      {
        id: "domiciliary-care",
        title: "Domiciliary care",
        body: "Care arranged around the household, from short daily calls through to a carer living in.",
        items: [
          "Scheduled visits, from short calls upwards",
          "Live-in care and overnight support",
          "Respite cover for family carers",
          "Companionship and complex, dementia-informed care",
        ],
      },
    ],
  },
  {
    slug: "cqc-registration",
    title: "CQC registration",
    lane: "b2b",
    arm: "agency",
    summary:
      "End-to-end registration: provider application, registered manager, statement of purpose and interview preparation.",
    overview:
      "Registration is decided long before the application is submitted. We build the evidence, the policies and the manager's readiness first, then take the application through to the decision.",
    whoFor: [
      "Founders preparing a first registration",
      "Providers who have been refused once already",
      "Registered providers adding a regulated activity",
    ],
    features: [
      "Statement of purpose and provider application",
      "Registered manager and nominated individual support",
      "Evidence mapped to the single assessment framework",
      "Interview preparation through to the decision",
    ],
  },
  {
    slug: "tender-writing",
    title: "Tender and framework writing",
    lane: "b2b",
    arm: "agency",
    summary:
      "Get onto local-authority frameworks and dynamic purchasing systems, and win the contracts that make a provider viable.",
    overview:
      "Most providers lose bids on evidence, not price. We write the responses, model the pricing and capacity, and stay involved through mobilisation once the contract lands.",
    whoFor: [
      "Providers applying to a framework or DPS for the first time",
      "Providers who bid regularly but rarely win",
      "Providers scaling into a new local authority area",
    ],
    features: [
      "Framework, DPS and portal registration",
      "Bid writing and social value responses",
      "Pricing and capacity modelling",
      "Post-award mobilisation",
    ],
  },
  {
    slug: "policies-procedures",
    title: "Policies and procedures",
    lane: "b2b",
    arm: "agency",
    summary:
      "A policy suite that survives inspection, plus the audit routine that keeps it true in practice.",
    overview:
      "A policy pack does not pass an inspection; the evidence behind it does. We supply the suite we use in our own service, along with the audit calendar that keeps it current.",
    whoFor: [
      "New providers building a compliance framework",
      "Providers preparing for an inspection",
      "Providers whose paperwork has drifted from practice",
    ],
    features: [
      "Policies mapped to the quality statements",
      "Audit calendar and evidence templates",
      "Mock inspection and action plan",
      "Annual review and updates",
    ],
  },
  {
    slug: "digital-branding",
    title: "Digital and branding",
    lane: "b2b",
    arm: "agency",
    summary:
      "Brand, website and referral routes, so enquiries arrive without chasing them.",
    overview:
      "Families and commissioners both check you online before they call. We build the identity, the site and the referral routes that make a new provider look established.",
    whoFor: [
      "New providers with no brand or website yet",
      "Providers whose enquiries all come from cold outreach",
      "Providers recruiting and needing to look credible",
    ],
    features: [
      "Identity, tone and print collateral",
      "Website built for local search",
      "Referral routes with social workers and hospitals",
      "Recruitment marketing that fills shifts",
    ],
  },
  {
    slug: "consulting",
    title: "Consulting",
    lane: "b2b",
    arm: "agency",
    summary:
      "Business planning, governance and growth advice from people running a regulated service themselves.",
    overview:
      "Advice from operators rather than advisers. We sit on the same side of the framework you are judged against, so the plan has to work in practice, not just on paper.",
    whoFor: [
      "Founders deciding whether the business is viable",
      "Providers planning growth or a second location",
      "Providers needing governance and quality assurance",
    ],
    features: [
      "Business plans and financial modelling",
      "Governance and quality assurance",
      "Growth and mobilisation planning",
      "Ongoing advisory retainer",
    ],
  },
  {
    slug: "staffing",
    title: "Rakuxon Staffing",
    lane: "b2b",
    arm: "agency",
    summary:
      "Recruitment and temporary staffing supplying vetted carers and support workers to other providers.",
    overview:
      "Permanent, temporary and temp-to-perm placements, with every worker's file in order before their first shift so you can evidence safe recruitment.",
    whoFor: [
      "Providers with gaps in the rota",
      "Providers recruiting permanent care staff",
      "Providers searching for a registered manager",
    ],
    features: [
      "Permanent care-worker recruitment",
      "Temporary and bank cover",
      "Temp-to-perm placements",
      "Registered manager and nominated individual search",
    ],
    href: "/staffing",
  },
];

/* PRD §7 — real market figures, not placeholders. Public source citations
   still need adding before launch; see TODO.md. */
export const MARKET_STATS: Stat[] = [
  {
    value: "£77.8bn",
    label:
      "Adult social care's contribution to the England economy, up 12.2% year on year",
  },
  {
    value: "15,232",
    label:
      "CQC-registered domiciliary care locations in England, up 81% since 2017",
  },
  {
    value: "1.71m",
    label: "Jobs across the adult social care workforce in England",
  },
  {
    value: "+11%",
    label: "Growth in home care locations this year, while residential shrank",
  },
];

/** A shorter set for tighter bands. */
export const MARKET_STATS_COMPACT: Stat[] = [
  { value: "£77.8bn", label: "Sector contribution to the England economy" },
  { value: "15,232", label: "Registered domiciliary care locations" },
  { value: "1.71m", label: "Adult social care jobs in England" },
  { value: "~10%", label: "Vacancy rate in home care roles" },
];

/** PRD §7 — demand-side figures for the Arm 1 lane. */
export const DEMAND_STATS: Stat[] = [
  { value: "683,000", label: "People receiving long-term council-funded care" },
  {
    value: "2.02m",
    label: "New requests for support logged by councils last year",
  },
  {
    value: "~10%",
    label: "Vacancy rate in home care roles, nearly double care homes",
  },
  { value: "+11%", label: "Growth in home care locations this year" },
];

/** PRD §5.3 — the three segments Arm 2 serves. */
export const SEGMENTS: Segment[] = [
  {
    title: "Pre-start-up founders",
    body: "You have decided to start a care business and need registration, policies and a route to first contracts.",
  },
  {
    title: "Existing minority-led providers",
    body: "You are registered but under-resourced, and the tender and compliance work keeps slipping.",
  },
  {
    title: "Growth-stage providers",
    body: "You are winning work and need staffing, systems and governance to scale without losing your rating.",
  },
];

/** PRD §5.4 — Launch Kit contents, grouped exactly as the deck defines. */
export const LAUNCH_KIT: LaunchKitGroup[] = [
  {
    title: "Governance and registration",
    items: [
      "Business plan",
      "Business intention letter",
      "Business registration",
      "Policies and procedures",
      "Terms and conditions",
    ],
  },
  {
    title: "People and HR documents",
    items: [
      "Job application form",
      "Interview forms (x3)",
      "Reference forms",
      "Staff handbook",
      "Casual worker agreement",
      "Temp-to-perm contract",
      "Staff profile",
      "Staff feedback form",
    ],
  },
  {
    title: "Operations documents",
    items: [
      "Timesheet",
      "Mileage form",
      "Invoice template",
      "Price list",
      "Accident and incident investigation report",
    ],
  },
  {
    title: "Presence and credibility",
    items: [
      "Virtual landline",
      "Listing on our website",
      "Listing on the national booking form",
      "Two-hour 1:1 coaching webinar",
    ],
  },
];

/** PRD §5.5 — how Rakuxon Staffing operates safely. */
export const STAFFING_SAFEGUARDS: string[] = [
  "Enhanced DBS and right-to-work checks on every worker",
  "EAS-regulated under the Conduct of Employment Agencies and Employment Businesses Regulations 2003",
  "Reference checks before placement",
  "Mandatory training and Care Certificate tracking",
  "Full audit trail so clients can evidence safe recruitment to CQC",
];

export const CARE_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Enquiry",
    description: "Tell us what is happening. One conversation, no obligation.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We visit at home to understand the person, routine and risks.",
  },
  {
    number: "03",
    title: "Care plan",
    description:
      "A written plan you agree to, with named carers and a schedule.",
  },
  {
    number: "04",
    title: "Care starts",
    description: "Support begins, and the plan is reviewed as needs change.",
  },
];

export const BUSINESS_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Foundation",
    description: "Company, insurance, banking and the statement of purpose.",
  },
  {
    number: "02",
    title: "Registration",
    description: "Provider application, registered manager, interview prep.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Policies live, staff onboarded, first packages evidenced.",
  },
  {
    number: "04",
    title: "Growth",
    description: "Frameworks, tenders and the brand that brings enquiries in.",
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
    role: "Family carer",
    lane: "b2c",
  },
  {
    id: "t5",
    quote:
      "They filled a fortnight of bank shifts at three days' notice, and every worker's file was already in order.",
    name: "Placeholder name",
    role: "Operations lead, placeholder provider",
    lane: "b2b",
  },
  {
    id: "t6",
    quote:
      "They told us we were not ready to submit, six weeks before we would have found out the hard way.",
    name: "Placeholder name",
    role: "Founder, placeholder provider",
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
    question: "Do you take council-funded and NHS packages?",
    answer:
      "Yes. We work with local authorities, ICBs and NHS Continuing Healthcare, and with direct-payment and personal-budget clients.",
    lane: "b2c",
  },
  {
    question: "Are your carers DBS checked?",
    answer:
      "Every carer holds an enhanced DBS check with verified right-to-work documents before their first shift.",
    lane: "b2c",
  },
  {
    question: "What makes Rakuxon different from other care consultancies?",
    answer:
      "We run our own CQC-registered care service. Every framework, policy and bid we sell is one we use in a service that is inspected against the same standards.",
    lane: "b2b",
  },
  {
    question: "How long does CQC registration take?",
    answer:
      "Ten to sixteen weeks is typical once submitted, though the preparation beforehand is what usually decides the outcome.",
    lane: "b2b",
  },
  {
    question: "What is included in the Care Business Launch Kit?",
    answer:
      "A fixed-scope package covering governance and registration, HR documents, operations templates, and presence and credibility items. The full contents are listed on the Launch Kit page.",
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
    role: "Registered manager, Rakuxon Care",
    bio: "Placeholder biography pending PRD §10 team content.",
  },
  {
    name: "Placeholder name",
    role: "Head of Rakuxon Staffing",
    bio: "Placeholder biography pending PRD §10 team content.",
  },
];

/* PRD §10 Q2 keeps CQC pinned to in-progress: Arm 1 is pre-registration per
   the roadmap. Flip to `registered` with rating and profile URL when it is. */
export const SITE_SETTINGS: SiteSettings = {
  companyName: "Rakuxon Care",
  legalName: "Rakuxon Care Ltd",
  companyNumber: "00000000 (placeholder)",
  icoRegistration: "ZA000000 (placeholder)",
  cqc: { state: "in-progress" },
  easNote:
    "Rakuxon Staffing operates under the Conduct of Employment Agencies and Employment Businesses Regulations 2003.",
  email: "hello@example.com",
  phone: "0000 000 0000",
  address: ["Placeholder address line 1", "Placeholder city", "AA1 1AA"],
  regionsServed: ["Placeholder region — PRD §10 open decision 6"],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
  ],
};
