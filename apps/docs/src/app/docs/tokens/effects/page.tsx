import { duration, easing, zIndex } from "@moody-ds/tokens";

const shadows: { name: string; cssVar: string; utility: string }[] = [
  { name: "xs", cssVar: "--shadow-xs", utility: "shadow-xs" },
  { name: "sm", cssVar: "--shadow-sm", utility: "shadow-sm" },
  { name: "md", cssVar: "--shadow-md", utility: "shadow-md" },
  { name: "lg", cssVar: "--shadow-lg", utility: "shadow-lg" },
  { name: "xl", cssVar: "--shadow-xl", utility: "shadow-xl" },
];

export default function EffectsPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Tokens</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Effects &amp; motion
        </h1>
        <p className="text-lg text-muted-foreground">
          Elevation, animation timing, and layering. Shadows are the only
          category here that <b>flips with the theme</b> — alpha gets stronger
          in dark mode so elevation still reads on navy surfaces.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Shadows
        </h2>
        <p className="text-sm text-muted-foreground">
          Toggle the theme in the top-right — every card below keeps its
          elevation legible in both modes.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {shadows.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-muted p-5"
            >
              <div
                className="flex size-20 items-center justify-center rounded-lg bg-background text-sm font-semibold text-foreground"
                style={{ boxShadow: `var(${s.cssVar})` }}
              >
                {s.name}
              </div>
              <div className="text-center">
                <div className="font-mono text-xs font-medium text-foreground">
                  {s.utility}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  var({s.cssVar})
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Durations
        </h2>
        <p className="text-sm text-muted-foreground">
          UI-tuned: instant for hover tints, base for most state changes, slow
          for entrances and layout shifts.
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-[120px_140px_100px] gap-4 bg-muted px-5 py-2.5 text-xs font-medium text-muted-foreground">
            <span>Token</span>
            <span>CSS var</span>
            <span>Value</span>
          </div>
          <ul className="divide-y divide-border">
            {Object.entries(duration).map(([key, val]) => (
              <li
                key={key}
                className="grid grid-cols-[120px_140px_100px] items-center gap-4 px-5 py-3"
              >
                <span className="font-mono text-xs text-foreground">
                  duration-{key}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  --duration-{key}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {val}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Easings
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <ul className="divide-y divide-border">
            {Object.entries(easing).map(([key, val]) => (
              <li
                key={key}
                className="grid grid-cols-[120px_140px_1fr] items-center gap-4 px-5 py-3"
              >
                <span className="font-mono text-xs text-foreground">
                  ease-{key.replace("inOut", "in-out")}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  --ease-{key.replace("inOut", "in-out")}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {val}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Z-index
        </h2>
        <p className="text-sm text-muted-foreground">
          Named layers so app code never picks a magic number. Higher wins.
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <ul className="divide-y divide-border">
            {Object.entries(zIndex).map(([key, val]) => (
              <li
                key={key}
                className="grid grid-cols-[120px_120px_60px_1fr] items-center gap-4 px-5 py-3"
              >
                <span className="font-mono text-xs text-foreground">
                  z-{key}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  --z-{key}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {val}
                </span>
                <span className="text-xs text-muted-foreground">
                  {zIndexDescriptions[key as keyof typeof zIndex]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

const zIndexDescriptions: Record<keyof typeof zIndex, string> = {
  base: "Default flow.",
  raised: "Cards or panels lifted above the page.",
  sticky: "Sticky headers, topbars.",
  dropdown: "Menus, select popovers.",
  overlay: "Full-viewport scrims behind modals.",
  modal: "Dialogs, sheets.",
  popover: "Tooltips and small popovers above modals.",
  toast: "Notifications — always on top.",
};
