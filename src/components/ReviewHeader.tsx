export function ReviewHeader() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{
        backgroundColor: "rgba(247,245,240,0.92)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="font-display text-xl md:text-2xl tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            ClinicBridge<span style={{ color: "var(--color-accent-warm)" }}>.ai</span>
          </span>
          <span
            className="hidden md:inline-block h-4 w-px"
            style={{ backgroundColor: "var(--color-border)" }}
            aria-hidden
          />
          <span
            className="hidden md:inline text-xs uppercase tracking-[0.15em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Prepared for RWJBarnabas Health
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span
            className="hidden sm:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-[4px]"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-accent-warm)" }}
              aria-hidden
            />
            Confidential
          </span>
          <a
            href="/api/logout"
            className="text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
}
