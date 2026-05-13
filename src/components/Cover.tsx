export function Cover() {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center px-6 py-24"
      style={{ backgroundColor: "var(--color-dark-bg)", color: "var(--color-dark-text)" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <p
          className="text-xs uppercase tracking-[0.22em] mb-10"
          style={{ color: "var(--color-accent-warm)" }}
        >
          ClinicBridge.ai
        </p>

        <p
          className="text-sm uppercase tracking-[0.18em] mb-8"
          style={{ opacity: 0.6 }}
        >
          Prepared for · RWJBarnabas Health
        </p>

        <h1
          className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight mb-10"
          style={{ color: "var(--color-dark-text)" }}
        >
          Response to the
          <br />
          AI Governance
          <br />
          Questionnaire
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl leading-relaxed mb-16"
          style={{ opacity: 0.75 }}
        >
          A complete response to the vendor evaluation questionnaire for the
          ClinicBridge.ai voice AI platform — covering platform description,
          fidelity, bias and fairness, ongoing maintenance, data handling, and
          return on investment.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 pt-10 border-t" style={{ borderColor: "rgba(247,245,240,0.18)" }}>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] mb-1.5" style={{ opacity: 0.55 }}>
              Document
            </p>
            <p className="text-sm">AI Governance Response</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] mb-1.5" style={{ opacity: 0.55 }}>
              Version
            </p>
            <p className="text-sm tabular-nums">v2.0</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] mb-1.5" style={{ opacity: 0.55 }}>
              Status
            </p>
            <p className="text-sm">Confidential</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] mb-1.5" style={{ opacity: 0.55 }}>
              Audience
            </p>
            <p className="text-sm">RWJBarnabas Health</p>
          </div>
        </div>
      </div>
    </section>
  );
}
