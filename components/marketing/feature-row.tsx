import { ImagePlaceholder } from "@/components/marketing/image-placeholder";
import { cn } from "@/lib/cn";
import type { Lane } from "@/lib/cms";

/* §4.19: rounded image panel one side, heading + checklist the other,
   alternating down the page. */
export function FeatureRow({
  eyebrow,
  title,
  body,
  features,
  imageLabel,
  lane = "both",
  reverse = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  features?: string[];
  imageLabel: string;
  lane?: Lane;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  const tick = lane === "b2c" ? "text-care-600" : "text-navy-800";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <ImagePlaceholder
        label={imageLabel}
        lane={lane}
        ratio="4/3"
        className={cn(reverse && "lg:order-2")}
      />
      <div className="flex flex-col gap-5">
        {eyebrow ? (
          <span className="text-overline text-ink-500 uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-h2">{title}</h2>
        {body ? (
          <p className="measure text-body-lg text-ink-500">{body}</p>
        ) : null}
        {features?.length ? (
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-md bg-paper-100 px-4 py-3 shadow-card"
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className={cn("mt-1 size-4 shrink-0 fill-current", tick)}
                >
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z" />
                </svg>
                <span className="text-ink-700">{f}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {children}
      </div>
    </div>
  );
}
