export function ReviewFooter() {
  return (
    <footer
      className="py-16 px-6"
      style={{ backgroundColor: "var(--color-dark-bg)", color: "var(--color-dark-text)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-2xl md:text-3xl leading-snug mb-6">
          Confidential — intended solely for RWJBarnabas Health personnel involved in AI vendor evaluation.
        </p>
        <p className="text-sm mb-10" style={{ opacity: 0.7 }}>
          Not for reproduction or distribution without prior written consent.
        </p>

        <div className="pt-10 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.15em]" style={{ borderColor: "rgba(247,245,240,0.15)", opacity: 0.75 }}>
          <span>ClinicBridge.ai</span>
          <span>AI Governance Response · v2.0</span>
        </div>
      </div>
    </footer>
  );
}
