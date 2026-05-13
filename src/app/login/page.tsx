export const dynamic = "force-dynamic";

type SearchParams = { error?: string };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { error } = await searchParams;
  const hasError = error === "1";

  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--color-dark-bg)" }}>
      <div className="w-full max-w-md">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] mb-6" style={{ color: "var(--color-accent-warm)" }}>
            ClinicBridge.ai
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight tracking-tight" style={{ color: "var(--color-dark-text)" }}>
            Confidential review
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--color-dark-text)", opacity: 0.7 }}>
            Prepared for RWJBarnabas Health
          </p>
        </div>

        <form action="/api/login" method="POST" className="space-y-4">
          <label htmlFor="password" className="block text-xs uppercase tracking-[0.15em]" style={{ color: "var(--color-dark-text)", opacity: 0.7 }}>
            Access password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            autoFocus
            className="w-full px-4 py-3 text-base rounded-[4px] border bg-transparent"
            style={{
              borderColor: "rgba(247,245,240,0.25)",
              color: "var(--color-dark-text)",
            }}
          />

          {hasError && (
            <p className="text-sm" style={{ color: "var(--color-accent-warm)" }}>
              Incorrect password.
            </p>
          )}

          <button
            type="submit"
            className="w-full px-5 py-3 text-sm font-medium rounded-[4px] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-accent-warm)", color: "var(--color-text)" }}
          >
            Continue
          </button>
        </form>

        <p className="mt-10 text-xs text-center" style={{ color: "var(--color-dark-text)", opacity: 0.5 }}>
          This document is intended solely for RWJBarnabas Health personnel involved in AI vendor evaluation.
        </p>
      </div>
    </main>
  );
}
