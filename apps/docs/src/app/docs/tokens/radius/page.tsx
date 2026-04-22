import { radius } from "@fmorar/moody-tokens";

export default function RadiusPage() {
  const entries = Object.entries(radius);
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Tokens</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Border radius
        </h1>
        <p className="text-lg text-muted-foreground">
          Named rounding scale consumed via{" "}
          <code className="rounded bg-muted px-1 text-xs">rounded-*</code>{" "}
          utilities. Button + Input use{" "}
          <code className="rounded bg-muted px-1 text-xs">rounded-md</code>,
          Card uses{" "}
          <code className="rounded bg-muted px-1 text-xs">rounded-lg</code>.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Scale
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {entries.map(([key, val]) => (
            <div
              key={key}
              className="space-y-3 rounded-lg border border-border bg-background p-4"
            >
              <div
                className="h-20 w-full border border-dashed border-border bg-subtle"
                style={{ borderRadius: val }}
                aria-hidden="true"
              />
              <div className="space-y-0.5">
                <div className="font-mono text-xs font-medium text-foreground">
                  rounded-{key}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  var(--radius-{key}) · {val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Usage
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
          <code>{`<Button />           // rounded-md (implicit in component)
<Card />             // rounded-lg
<div className="rounded-xl" />   // any utility via the token`}</code>
        </pre>
      </section>
    </>
  );
}
