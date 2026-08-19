"use client";

import { useSyncExternalStore } from "react";
import {
  onConsentChange,
  readConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Consent lives in localStorage, which is an external store — reading it in
 * an effect and calling setState causes the cascading render React 19 warns
 * about. useSyncExternalStore is the sanctioned way to subscribe to it and
 * gives correct SSR behaviour for free: the server snapshot is always null,
 * so the markup is stable, and React re-reads after hydration.
 */
export function useConsent(): ConsentChoice | null {
  return useSyncExternalStore(
    (notify) => onConsentChange(() => notify()),
    () => readConsent(),
    () => null,
  );
}
