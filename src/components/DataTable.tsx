import type { ReactNode } from "react";

export function DataTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="my-8 -mx-2 sm:mx-0 overflow-x-auto">
      <table
        className="w-full text-left text-[0.95rem] border-collapse"
        style={{ color: "var(--color-text)" }}
      >
        {caption && (
          <caption
            className="text-xs uppercase tracking-[0.18em] text-left pb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            {caption}
          </caption>
        )}
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-primary)" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-3 pr-6 font-medium text-xs uppercase tracking-[0.15em] align-bottom"
                style={{ color: "var(--color-primary)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr
              key={r}
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              {row.map((cell, c) => (
                <td
                  key={c}
                  className="py-4 pr-6 align-top leading-relaxed"
                  style={c === 1 ? { fontVariantNumeric: "tabular-nums" } : undefined}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
