const SECTIONS = [
  { id: "section-i", roman: "I", title: "Description of Platforms, Products, and Offerings" },
  { id: "section-ii", roman: "II", title: "Fidelity" },
  { id: "section-iii", roman: "III", title: "Bias, Ethical Considerations, and Fairness" },
  { id: "section-iv", roman: "IV", title: "Ongoing Maintenance" },
  { id: "section-v", roman: "V", title: "Data Handling, Training, and IP" },
  { id: "section-vi", roman: "VI", title: "Return on Investment" },
];

export function TOC() {
  return (
    <nav aria-label="Contents" className="max-w-3xl mx-auto">
      <p
        className="text-xs uppercase tracking-[0.18em] mb-6"
        style={{ color: "var(--color-accent-warm)" }}
      >
        Contents
      </p>
      <ol className="space-y-3">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group flex items-baseline gap-5 py-2 border-b transition-colors"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span
                className="font-display text-xl tabular-nums shrink-0 w-8"
                style={{ color: "var(--color-text-muted)" }}
              >
                {s.roman}
              </span>
              <span
                className="font-display text-xl md:text-2xl leading-snug group-hover:opacity-80 transition-opacity"
                style={{ color: "var(--color-primary)" }}
              >
                {s.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
