/**
 * Cookie consent store.
 *
 * Analytics must not load until the user opts in (PRD §8, UK GDPR / PECR).
 * The banner writes here; the analytics loader reads here and nowhere else,
 * so there is exactly one gate to audit. No provider is wired yet — that is
 * Phase 6 — but the gate exists now so analytics cannot be added without
 * passing through it.
 */

export type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "rakuxon-consent";
const EVENT = "rakuxon-consent-change";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    // Private browsing or blocked storage — treat as no consent given.
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Non-fatal: the banner will simply ask again next visit.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: choice }));
}

export function onConsentChange(cb: (choice: ConsentChoice) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<ConsentChoice>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

/** Analytics entry point. Phase 6 loads the provider here — never elsewhere. */
export function loadAnalytics() {
  if (readConsent() !== "accepted") return;
  // Phase 6: initialise the chosen privacy-first provider.
}
