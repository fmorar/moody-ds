import { space } from "@fmorar/moody-tokens";

export default function SpacingPage() {
  const entries = Object.entries(space);
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Tokens</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Spacing
        </h1>
        <p className="text-lg text-muted-foreground">
          4-pixel base scale, aligned with Tailwind&apos;s defaults so{" "}
          <code className="rounded bg-muted px-1 text-xs">p-4</code> equals{" "}
          <code className="rounded bg-muted px-1 text-xs">var(--space-4)</code>.
          Use Tailwind utilities in day-to-day work and reach for the named
          token when the value carries intent that a raw number doesn&apos;t.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Scale
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-[80px_100px_80px_1fr] gap-4 bg-muted px-5 py-2.5 text-xs font-medium text-muted-foreground">
            <span>Token</span>
            <span>CSS var</span>
            <span>Value</span>
            <span>Visual</span>
          </div>
          <ul className="divide-y divide-border">
            {entries.map(([key, val]) => {
              const px = remToPx(val);
              return (
                <li
                  key={key}
                  className="grid grid-cols-[80px_100px_80px_1fr] items-center gap-4 px-5 py-3"
                >
                  <span className="font-mono text-xs text-foreground">
                    space-{key}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    --space-{key}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {val} {px ? `· ${px}px` : ""}
                  </span>
                  <span className="flex items-center">
                    <span
                      className="h-3 rounded-sm bg-primary"
                      style={{ width: val }}
                      aria-hidden="true"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Usage
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
          <code>{`// Tailwind utility (preferred)
<div className="p-4 gap-2" />

// Token directly (e.g. in a style prop or non-Tailwind CSS)
<div style={{ padding: "var(--space-4)" }} />`}</code>
        </pre>
      </section>
    </>
  );
}

function remToPx(rem: string): number | null {
  const match = rem.match(/^([\d.]+)rem$/);
  if (!match) return null;
  return Number(match[1]) * 16;
}
