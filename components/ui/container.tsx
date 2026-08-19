import { cn } from "@/lib/cn";

/* §3: 12-col, max ~1200–1280px, mobile side padding 20–24px. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-8", className)}
    >
      {children}
    </div>
  );
}
