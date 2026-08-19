"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Whether the window is scrolled past `threshold`. Scroll position is an
 * external store, so it is subscribed to rather than mirrored into state.
 * The server snapshot is `false`, which matches the top-of-page first paint.
 */
export function useScrolled(threshold = 8): boolean {
  const subscribe = useCallback((notify: () => void) => {
    window.addEventListener("scroll", notify, { passive: true });
    window.addEventListener("resize", notify, { passive: true });
    return () => {
      window.removeEventListener("scroll", notify);
      window.removeEventListener("resize", notify);
    };
  }, []);

  const getSnapshot = useCallback(
    () => window.scrollY > threshold,
    [threshold],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
