import Link from "next/link";
import {
  duration,
  easing,
  navy,
  neutral,
  radius,
  semantic,
  space,
  zIndex,
} from "@fmorar/moody-tokens";
import { ChevronRight } from "lucide-react";
import { Separator } from "@fmorar/moody-ui";

type SemanticPair = {
  bg: string;
  fg: string;
  label: string;
  ratioNote: string;
};

const semanticPairs: SemanticPair[] = [
  {
    bg: "bg-background",
    fg: "text-foreground",
    label: "background / foreground",
    ratioNote: "15:1 · AAA",
  },
  {
    bg: "bg-muted",
    fg: "text-muted-foreground",
    label: "muted / muted-foreground",
    ratioNote: "7.8:1 · AAA",
  },
  {
    bg: "bg-subtle",
    fg: "text-subtle-foreground",
    label: "subtle / subtle-foreground",
    ratioNote: "14:1 · AAA",
  },
  {
    bg: "bg-primary",
    fg: "text-primary-foreground",
    label: "primary / primary-foreground",
    ratioNote: "14:1 · AAA",
  },
  {
    bg: "bg-accent",
    fg: "text-accent-foreground",
    label: "accent / accent-foreground",
    ratioNote: "5.3:1 · AA",
  },
  {
    bg: "bg-destructive",
    fg: "text-destructive-foreground",
    label: "destructive / destructive-foreground",
    ratioNote: "6.6:1 · AA",
  },
  {
    bg: "bg-warning",
    fg: "text-warning-foreground",
    label: "warning / warning-foreground",
    ratioNote: "5.5:1 · AA",
  },
];

const shadowEntries = ["xs", "sm", "md", "lg", "xl"] as const;

export default function TokensOverviewPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Tokens</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          All tokens
        </h1>
        <p className="text-lg text-muted-foreground">
          Every design token available to components in{" "}
          <code className="rounded bg-muted px-1 text-sm">@fmorar/moody-ui</code>.
          Grouped into <b>Colors</b>, <b>Typography</b>, <b>Spacing</b>,{" "}
          <b>Radius</b>, and <b>Effects &amp; motion</b>. Colors + shadows flip
          with the theme; everything else is constant.
        </p>
      </header>

      {/* Colors */}
      <section className="space-y-4">
        <SectionHeading
          title="Semantic colors"
          subtitle="Every pair passes WCAG AA in both themes. Toggle to verify."
          linkHref="/docs/tokens/colors"
          linkLabel="Full color reference"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {semanticPairs.map((pair) => (
            <div
              key={pair.label}
              className={`${pair.bg} ${pair.fg} flex items-center justify-between rounded-lg border border-border px-4 py-3`}
            >
              <div className="min-w-0">
                <div className="truncate font-mono text-xs font-medium">
                  {pair.label}
                </div>
                <div className="text-xs opacity-80">Sample text.</div>
              </div>
              <span className="shrink-0 text-[10px] uppercase tracking-wider opacity-70">
                {pair.ratioNote}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="Navy scale"
          subtitle="Brand primitive. 800 is the signature navy, 500 is the electric-blue CTA."
        />
        <ScaleRow scale={navy} prefix="navy" />
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="Neutral scale"
          subtitle="Grays with a subtle navy tint at 700."
        />
        <ScaleRow scale={neutral} prefix="neutral" />
      </section>

      <section className="space-y-4">
        <SectionHeading title="Semantic primitives" />
        <div className="grid grid-cols-2 gap-3">
          <PrimitiveSwatch
            name="danger-500"
            value={semantic.danger}
            fg="#ffffff"
          />
          <PrimitiveSwatch
            name="warning-500"
            value={semantic.warning}
            fg="#000000"
          />
        </div>
      </section>

      <Separator />

      {/* Typography */}
      <section className="space-y-4">
        <SectionHeading
          title="Typography"
          subtitle="Three font stacks. Geist powers sans + mono; serif is a Financier Display placeholder."
          linkHref="/docs/tokens/typography"
          linkLabel="Typography detail"
        />
        <div className="flex flex-col gap-3">
          <FontSample
            name="--font-sans"
            description="Default UI + body"
            className="font-sans"
          />
          <FontSample
            name="--font-mono"
            description="Code + tabular"
            className="font-mono"
          />
          <FontSample
            name="--font-serif"
            description="Editorial / display"
            style={{ fontFamily: "var(--font-serif)" }}
          />
        </div>
      </section>

      <Separator />

      {/* Spacing */}
      <section className="space-y-4">
        <SectionHeading
          title="Spacing"
          subtitle="4px base scale. Tailwind p-4 equals var(--space-4)."
          linkHref="/docs/tokens/spacing"
          linkLabel="Spacing detail"
        />
        <div className="flex flex-col gap-1.5">
          {Object.entries(space).map(([key, val]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="w-20 shrink-0 font-mono text-xs text-foreground">
                  space-{key}
                </span>
                <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                  {val}
                </span>
                <span
                  className="h-3 rounded-sm bg-primary"
                  style={{ width: val }}
                  aria-hidden="true"
                />
              </div>
            ))}
        </div>
      </section>

      <Separator />

      {/* Radius */}
      <section className="space-y-4">
        <SectionHeading
          title="Border radius"
          subtitle="Rounded utilities map to these. Buttons + inputs use md; cards use lg."
          linkHref="/docs/tokens/radius"
          linkLabel="Radius detail"
        />
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {Object.entries(radius).map(([key, val]) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-3"
            >
              <div
                className="h-14 w-full border border-dashed border-border bg-subtle"
                style={{ borderRadius: val }}
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] text-muted-foreground">
                {key}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Effects & motion */}
      <section className="space-y-4">
        <SectionHeading
          title="Shadows"
          subtitle="Elevation flips with the theme — stronger alpha on dark surfaces."
          linkHref="/docs/tokens/effects"
          linkLabel="Effects & motion detail"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {shadowEntries.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-muted p-4"
            >
              <div
                className="flex size-16 items-center justify-center rounded-lg bg-background text-xs font-semibold text-foreground"
                style={{ boxShadow: `var(--shadow-${name})` }}
              >
                {name}
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                shadow-{name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Motion" />
        <div className="grid gap-3 sm:grid-cols-2">
          <MiniTable
            title="Durations"
            rows={Object.entries(duration).map(([k, v]) => [
              `duration-${k}`,
              v,
            ])}
          />
          <MiniTable
            title="Easings"
            rows={Object.entries(easing).map(([k, v]) => [
              `ease-${k.replace("inOut", "in-out")}`,
              v,
            ])}
          />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading
          title="Z-index"
          subtitle="Named layers so app code never picks a magic number."
        />
        <MiniTable
          rows={Object.entries(zIndex).map(([k, v]) => [`z-${k}`, String(v)])}
        />
      </section>
    </>
  );
}

function SectionHeading({
  title,
  subtitle,
  linkHref,
  linkLabel,
}: {
  title: string;
  subtitle?: string;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {linkHref && linkLabel ? (
        <Link
          href={linkHref}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
        >
          {linkLabel}
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

function ScaleRow({
  scale,
  prefix,
}: {
  scale: Record<string | number, string>;
  prefix: string;
}) {
  return (
    <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
      {Object.entries(scale).map(([key, value]) => (
        <div
          key={key}
          className="overflow-hidden rounded-md border border-border"
          title={`${prefix}-${key} · ${value}`}
        >
          <div className="h-12 w-full" style={{ background: value }} />
          <div className="bg-background px-1.5 py-1 text-center font-mono text-[10px] text-muted-foreground">
            {key}
          </div>
        </div>
      ))}
    </div>
  );
}

function PrimitiveSwatch({
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
        className="flex h-16 items-center justify-center text-sm font-medium"
        style={{ background: value, color: fg }}
      >
        Sample
      </div>
      <div className="flex items-center justify-between bg-background px-3 py-2">
        <span className="font-mono text-xs text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}

function FontSample({
  name,
  description,
  className,
  style,
}: {
  name: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="rounded-lg border border-border p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="font-mono text-xs text-muted-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
      <p
        className={`text-2xl text-foreground ${className ?? ""}`}
        style={style}
      >
        The quick brown fox jumps over 13 lazy dogs.
      </p>
    </div>
  );
}

function MiniTable({
  title,
  rows,
}: {
  title?: string;
  rows: [string, string][];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {title ? (
        <div className="bg-muted px-4 py-2 text-xs font-semibold text-muted-foreground">
          {title}
        </div>
      ) : null}
      <ul className="divide-y divide-border">
        {rows.map(([k, v]) => (
          <li
            key={k}
            className="flex items-center justify-between gap-4 px-4 py-2.5"
          >
            <span className="font-mono text-xs text-foreground">{k}</span>
            <span className="truncate font-mono text-xs text-muted-foreground">
              {v}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
