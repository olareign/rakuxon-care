import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Photo } from "@/lib/images";

/* Overlapping circular avatars, as in the reference's hero cards. The
   images are decorative here — the surrounding copy carries the meaning —
   so they take empty alt text rather than inventing identities. */
export function AvatarStack({
  photos,
  size = 34,
  className,
}: {
  photos: Photo[];
  size?: number;
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center", className)}>
      {photos.map((p, i) => (
        <li
          key={p.src}
          className="relative overflow-hidden rounded-pill ring-2 ring-paper-100"
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -size / 3.2,
            zIndex: photos.length - i,
          }}
        >
          <Image
            src={p.src}
            alt=""
            aria-hidden="true"
            width={p.width}
            height={p.height}
            sizes={`${size}px`}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
