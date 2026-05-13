import type { ReactNode } from "react";

export function QABlock({
  id,
  q,
  number,
  children,
}: {
  id?: string;
  q: string;
  number?: string;
  children: ReactNode;
}) {
  return (
    <article id={id} className="max-w-3xl mx-auto mb-16 scroll-mt-24">
      <div className="flex items-baseline gap-4 mb-4">
        {number && (
          <span
            className="text-xs uppercase tracking-[0.18em] shrink-0 tabular-nums"
            style={{ color: "var(--color-accent-warm)" }}
          >
            {number}
          </span>
        )}
        <h3
          className="font-display text-2xl md:text-[2rem] leading-snug tracking-tight"
          style={{ color: "var(--color-primary)" }}
        >
          {q}
        </h3>
      </div>
      <div
        className="space-y-4 text-[1.0625rem] leading-relaxed"
        style={{ color: "var(--color-text)" }}
      >
        {children}
      </div>
    </article>
  );
}
