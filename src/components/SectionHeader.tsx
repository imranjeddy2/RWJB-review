type Tone = "cream" | "surface";

export function SectionHeader({
  roman,
  title,
  intro,
  tone = "cream",
}: {
  roman: string;
  title: string;
  intro?: string;
  tone?: Tone;
}) {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <div className="flex items-baseline gap-6 mb-6">
        <span
          className="font-display text-2xl"
          style={{ color: "var(--color-accent-warm)" }}
        >
          {roman}
        </span>
        <span
          className="flex-1 h-px"
          style={{ backgroundColor: "var(--color-border)" }}
          aria-hidden
        />
      </div>
      <h2
        className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight"
        style={{ color: "var(--color-primary)" }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          {intro}
        </p>
      )}
      {/* Avoid unused tone warning */}
      <span className="hidden" data-tone={tone} />
    </div>
  );
}
