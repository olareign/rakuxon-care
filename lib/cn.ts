import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only de-duplicates classes it recognises. The design
 * system replaces Tailwind's stock radius, shadow and font-size scales
 * with its own names, so those groups are taught here — without this,
 * `rounded-md` and `rounded-pill` would both survive a merge and the
 * winner would be decided by stylesheet order rather than by the caller.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: ["sm", "md", "lg", "pill"] }],
      shadow: [{ shadow: ["card"] }],
      "font-size": [
        {
          text: [
            "h1",
            "h2",
            "h3",
            "h4",
            "body-lg",
            "body",
            "small",
            "overline",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
