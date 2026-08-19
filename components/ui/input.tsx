"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id"
> {
  /** Persistent visible label — §5 forbids placeholder-only labelling. */
  label: string;
  /** Optional supporting text rendered below the field. */
  hint?: string;
  /** Presence flips the field into its error state and announces the message. */
  error?: string;
  id?: string;
}

/* §5: labels are persistent, errors are inline, announced, and never
   signalled by colour alone — hence the icon alongside the message. */
export function Input({
  label,
  hint,
  error,
  id,
  className,
  required,
  ...props
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-small text-ink-900">
        {label}
        {required ? (
          <span className="text-danger"> *</span>
        ) : (
          <span className="text-ink-500"> (optional)</span>
        )}
      </label>

      {hint ? (
        <p id={hintId} className="text-small text-ink-500">
          {hint}
        </p>
      ) : null}

      <input
        id={inputId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "min-h-12 rounded-sm border bg-paper-100 px-4 py-2 text-body text-ink-900",
          "transition-colors placeholder:text-ink-500",
          "disabled:cursor-not-allowed disabled:border-ink-300 disabled:bg-paper-0 disabled:text-ink-500",
          error
            ? "border-2 border-danger"
            : "border-ink-300 hover:border-ink-500",
          className,
        )}
        {...props}
      />

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-start gap-2 text-small text-danger"
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 fill-current"
          >
            <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 3.75a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1Zm0 9.75a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Z" />
          </svg>
          {error}
        </p>
      ) : null}
    </div>
  );
}
