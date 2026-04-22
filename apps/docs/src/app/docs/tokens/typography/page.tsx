export default function TypographyPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Tokens</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Typography
        </h1>
        <p className="text-lg text-muted-foreground">
          Three font stacks exposed as CSS variables so components read them
          consistently. Today Geist powers sans + mono; serif is a placeholder
          for <b>Financier Display</b> (proprietary — real Moody&apos;s uses
          it alongside <b>GT America</b>).
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Font stacks
        </h2>
        <div className="space-y-3">
          <StackCard
            token="--font-sans"
            utility="font-sans"
            stack={`var(--font-geist-sans, "Inter"), ui-sans-serif, system-ui, sans-serif`}
            description="Default for all body and UI text."
            className="font-sans"
          />
          <StackCard
            token="--font-mono"
            utility="font-mono"
            stack={`var(--font-geist-mono, "JetBrains Mono"), ui-monospace, monospace`}
            description="Code, numeric tables, identifiers."
            className="font-mono"
          />
          <StackCard
            token="--font-serif"
            utility="font-serif"
            stack={`"Financier Display", ui-serif, Georgia, serif`}
            description="Reserved for editorial / display headings. Falls back to system serif until Financier Display is licensed."
            style={{ fontFamily: "var(--font-serif)" }}
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Scale
        </h2>
        <p className="text-sm text-muted-foreground">
          We don&apos;t ship custom size tokens — components use Tailwind
          defaults (<code className="rounded bg-muted px-1 text-xs">text-xs</code>{" "}
          through <code className="rounded bg-muted px-1 text-xs">text-5xl</code>).
          The samples below show the sizes components actually reach for.
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <dl className="divide-y divide-border">
            {scaleSamples.map((s) => (
              <div
                key={s.utility}
                className="grid grid-cols-[140px_1fr] items-baseline gap-6 px-5 py-4"
              >
                <dt className="font-mono text-xs text-muted-foreground">
                  {s.utility}
                </dt>
                <dd className={`${s.utility} text-foreground`}>{s.sample}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Weights
        </h2>
        <div className="space-y-1 rounded-lg border border-border p-5">
          <p className="text-lg font-normal text-foreground">
            font-normal — The quick brown fox.
          </p>
          <p className="text-lg font-medium text-foreground">
            font-medium — The quick brown fox.
          </p>
          <p className="text-lg font-semibold text-foreground">
            font-semibold — The quick brown fox.
          </p>
          <p className="text-lg font-bold text-foreground">
            font-bold — The quick brown fox.
          </p>
        </div>
      </section>
    </>
  );
}

const scaleSamples = [
  { utility: "text-5xl font-semibold", sample: "Display — $10.00" },
  { utility: "text-3xl font-semibold", sample: "Section heading" },
  { utility: "text-xl font-semibold", sample: "Subsection heading" },
  { utility: "text-lg", sample: "Lead paragraph / intro copy." },
  { utility: "text-base", sample: "Body text for long-form content." },
  { utility: "text-sm", sample: "Default UI text." },
  { utility: "text-xs", sample: "Captions, metadata, footnotes." },
];

function StackCard({
  token,
  utility,
  stack,
  description,
  className,
  style,
}: {
  token: string;
  utility: string;
  stack: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="rounded-lg border border-border p-5">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <div className="space-y-0.5">
          <div className="font-mono text-xs text-muted-foreground">{token}</div>
          <div className="text-xs text-muted-foreground">
            Tailwind:{" "}
            <code className="rounded bg-muted px-1">{utility}</code>
          </div>
        </div>
        <p className="max-w-sm text-right text-xs text-muted-foreground">
          {description}
        </p>
      </div>
      <p
        className={`text-3xl tracking-tight text-foreground ${className ?? ""}`}
        style={style}
      >
        The quick brown fox jumps over 13 lazy dogs.
      </p>
      <p
        className={`mt-1 text-sm text-muted-foreground ${className ?? ""}`}
        style={style}
      >
        abcdefghijklmnopqrstuvwxyz · ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789
      </p>
      <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted-foreground">
        {stack}
      </p>
    </div>
  );
}
