import { navy, neutral, semantic } from "@moody-ds/tokens";

type SemanticRow = {
  bgClass: string;
  fgClass: string;
  label: string;
  note: string;
};

const semanticRows: SemanticRow[] = [
  {
    bgClass: "bg-background",
    fgClass: "text-foreground",
    label: "background / foreground",
    note: "Default surface + body text",
  },
  {
    bgClass: "bg-muted",
    fgClass: "text-muted-foreground",
    label: "muted / muted-foreground",
    note: "Subtle surfaces — cards, code blocks, table headers",
  },
  {
    bgClass: "bg-subtle",
    fgClass: "text-subtle-foreground",
    label: "subtle / subtle-foreground",
    note: "Brand-tinted highlights — active nav, badges",
  },
  {
    bgClass: "bg-primary",
    fgClass: "text-primary-foreground",
    label: "primary / primary-foreground",
    note: "Primary actions (hover: primary-hover)",
  },
  {
    bgClass: "bg-accent",
    fgClass: "text-accent-foreground",
    label: "accent / accent-foreground",
    note: "Emphasis / CTA-blue (hover: accent-hover)",
  },
  {
    bgClass: "bg-destructive",
    fgClass: "text-destructive-foreground",
    label: "destructive / destructive-foreground",
    note: "Danger actions",
  },
  {
    bgClass: "bg-warning",
    fgClass: "text-warning-foreground",
    label: "warning / warning-foreground",
    note: "Warning actions (black text — AA on the orange)",
  },
];

export default function ColorsPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Tokens</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Colors
        </h1>
        <p className="text-lg text-muted-foreground">
          Two layers: raw <b>primitives</b> (navy &amp; neutral scales, anchored
          to the Moody&apos;s palette) and <b>semantic roles</b> that components
          use. Toggle the theme in the top-right to verify every pair holds up
          in both modes.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Semantic roles
        </h2>
        <p className="text-sm text-muted-foreground">
          Every pair below is validated for WCAG AA contrast (4.5:1 for normal
          text, 3:1 for large text / UI) in both light and dark themes.
        </p>
        <div className="flex flex-col gap-3">
          {semanticRows.map((row) => (
            <div
              key={row.label}
              className="overflow-hidden rounded-lg border border-border"
            >
              <div
                className={`${row.bgClass} ${row.fgClass} flex items-center justify-between px-5 py-4`}
              >
                <div>
                  <div className="font-mono text-sm font-medium">
                    {row.label}
                  </div>
                  <div className="text-sm opacity-80">
                    Sample text — the quick brown fox jumps.
                  </div>
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70">
                  AA ✓
                </div>
              </div>
              <div className="border-t border-border bg-muted px-5 py-2 text-xs text-muted-foreground">
                {row.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Navy scale
        </h2>
        <p className="text-sm text-muted-foreground">
          Brand primitive. <code className="rounded bg-muted px-1 text-xs">--moody-navy-800</code>{" "}
          (#0a1264) is the signature navy from moodys.com;{" "}
          <code className="rounded bg-muted px-1 text-xs">--moody-navy-500</code>{" "}
          (#005eff) is the electric-blue CTA color.
        </p>
        <Swatches scale={navy} prefix="navy" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Neutral scale
        </h2>
        <Swatches scale={neutral} prefix="neutral" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Semantic primitives
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <SemanticSwatch
            name="danger-500"
            value={semantic.danger}
            fg="#ffffff"
          />
          <SemanticSwatch
            name="warning-500"
            value={semantic.warning}
            fg="#000000"
          />
        </div>
      </section>
    </>
  );
}

function Swatches({
  scale,
  prefix,
}: {
  scale: Record<string | number, string>;
  prefix: string;
}) {
  const entries = Object.entries(scale);
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
      {entries.map(([key, value]) => (
        <div
          key={key}
          className="overflow-hidden rounded-md border border-border"
        >
          <div className="h-16 w-full" style={{ background: value }} />
          <div className="flex items-center justify-between bg-background px-3 py-2">
            <span className="font-mono text-xs text-foreground">
              {prefix}-{key}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SemanticSwatch({
  name,
  value,
  fg,
}: {
  name: string;
  value: string;
  fg: string;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div
        className="flex h-20 items-center justify-center text-sm font-medium"
        style={{ background: value, color: fg }}
      >
        Sample text
      </div>
      <div className="flex items-center justify-between bg-background px-3 py-2">
        <span className="font-mono text-xs text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}
