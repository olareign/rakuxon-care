/**
 * Photography registry.
 *
 * Every image ships from /public/images so next/image can optimise it and
 * the build stays self-contained (no remote patterns, no hotlinking).
 * Sources are Pexels, free licence — ids recorded in TODO.md.
 *
 * Intrinsic width/height are the real file dimensions, which is what
 * next/image needs to reserve space and avoid layout shift.
 */

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const PHOTOS = {
  // ---- B2C: warm, domestic, never clinical (§3) ----
  homeHero: {
    src: "/images/home-hero.jpg",
    width: 1600,
    height: 1067,
    alt: "A carer sitting with an older woman in her own bedroom, talking together",
  },
  heroCardCarer: {
    src: "/images/hero-card-carer.jpg",
    width: 800,
    height: 533,
    alt: "Two women sitting close together and smiling",
  },
  carerBedside: {
    src: "/images/carer-bedside.jpg",
    width: 1200,
    height: 1800,
    alt: "A carer making up a bed in a homely room lined with bookshelves",
  },
  coupleAtHome: {
    src: "/images/couple-at-home.jpg",
    width: 1400,
    height: 2100,
    alt: "An older couple sitting together at a table beside a window",
  },
  carerSupport: {
    src: "/images/carer-support.jpg",
    width: 1000,
    height: 667,
    alt: "A carer helping an older man settle comfortably in bed",
  },
  carerMobility: {
    src: "/images/carer-mobility.jpg",
    width: 1000,
    height: 667,
    alt: "A carer supporting an older man using crutches in his kitchen",
  },
  familySupport: {
    src: "/images/family-support.jpg",
    width: 1000,
    height: 667,
    alt: "A family sitting around a kitchen table with a relative who uses a wheelchair",
  },
  seniorMedication: {
    src: "/images/senior-medication.jpg",
    width: 1000,
    height: 1500,
    alt: "An older man sorting his medication into a daily organiser at home",
  },

  // ---- B2B: professional, credible ----
  businessHero: {
    src: "/images/business-hero.jpg",
    width: 1600,
    height: 1067,
    alt: "A group of colleagues seated along a boardroom table in discussion",
  },
  businessMeeting: {
    src: "/images/business-meeting.jpg",
    width: 1200,
    height: 800,
    alt: "Colleagues working through paperwork and plans together at a desk",
  },
  businessSigning: {
    src: "/images/business-signing.jpg",
    width: 1200,
    height: 800,
    alt: "Three colleagues reviewing and signing documents in an office",
  },
  businessReview: {
    src: "/images/business-review.jpg",
    width: 1200,
    height: 1800,
    alt: "Two colleagues reviewing figures on a tablet together",
  },
  businessTeam: {
    src: "/images/business-team.jpg",
    width: 1400,
    height: 2100,
    alt: "A team working together in a bright open-plan office",
  },
  businessPlanning: {
    src: "/images/business-planning.jpg",
    width: 1000,
    height: 667,
    alt: "Two colleagues planning a project across a shared desk",
  },

  // ---- Team ----
  team1: {
    src: "/images/team-1.jpg",
    width: 700,
    height: 467,
    alt: "Portrait of a smiling woman against a plain light background",
  },
  team2: {
    src: "/images/team-2.jpg",
    width: 700,
    height: 1050,
    alt: "Portrait of a smiling man in a light blazer",
  },
  team3: {
    src: "/images/team-3.jpg",
    width: 700,
    height: 1050,
    alt: "Portrait of a smiling woman in a navy suit",
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
