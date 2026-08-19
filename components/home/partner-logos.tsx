/**
 * Placeholder partner marks for the trust strip.
 *
 * The reference uses invented company logos in this row. Real partner
 * logos cannot be shown until Rakuxon confirms who may be named, and
 * putting real organisations' marks here would assert relationships that
 * have not been agreed. These are therefore invented names drawn as simple
 * greyscale marks, matching the reference's treatment. Logged in TODO.md.
 */

const Mark = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 shrink-0">
    {children}
  </svg>
);

export const PARTNERS: { name: string; mark: React.ReactNode }[] = [
  {
    name: "Northgate Trust",
    mark: (
      <Mark>
        <circle
          cx="12"
          cy="12"
          r="10"
          className="fill-none stroke-current"
          strokeWidth="1.6"
        />
        <path
          d="M8 15V9l8 6V9"
          className="fill-none stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Mark>
    ),
  },
  {
    name: "Brightpath",
    mark: (
      <Mark>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          className="fill-none stroke-current"
          strokeWidth="1.6"
        />
        <path
          d="M9 12h6M12 9v6"
          className="stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </Mark>
    ),
  },
  {
    name: "Elmwood Group",
    mark: (
      <Mark>
        <path
          d="M12 2 4 7v10l8 5 8-5V7l-8-5Z"
          className="fill-none stroke-current"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          className="fill-none stroke-current"
          strokeWidth="1.6"
        />
      </Mark>
    ),
  },
  {
    name: "Carevale",
    mark: (
      <Mark>
        <circle
          cx="12"
          cy="12"
          r="9"
          className="fill-none stroke-current"
          strokeWidth="1.6"
        />
        <path
          d="M7 13c2.5 3 7.5 3 10 0"
          className="fill-none stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </Mark>
    ),
  },
  {
    name: "Meridian Health",
    mark: (
      <Mark>
        <circle
          cx="12"
          cy="12"
          r="9"
          className="fill-none stroke-current"
          strokeWidth="1.6"
        />
        <path
          d="M12 3v18M3 12h18"
          className="stroke-current"
          strokeWidth="1.2"
        />
      </Mark>
    ),
  },
  {
    name: "Oakline",
    mark: (
      <Mark>
        <path
          d="M12 3v18"
          className="stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 8 6 5m6 3 6-3M12 14l-6-3m6 3 6-3"
          className="fill-none stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </Mark>
    ),
  },
];
