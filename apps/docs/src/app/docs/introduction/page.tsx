export default function IntroductionPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Getting Started
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground">
          moody-ds is a small, portable React design system. Headless where it
          matters, opinionated where it helps.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Principles
        </h2>
        <ul className="list-inside list-disc space-y-1.5 text-foreground/90">
          <li>Framework-light — no Next.js coupling in the package itself.</li>
          <li>Accessible by default. Semantics first, ARIA only when needed.</li>
          <li>Tokens over hardcoded values. Variants over boolean props.</li>
          <li>Public API is intentional — what ships is what&apos;s exported.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          What&apos;s inside
        </h2>
        <p className="text-foreground/90">
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            @moody-ds/ui
          </code>{" "}
          ships the React components.{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            @moody-ds/tokens
          </code>{" "}
          ships the design tokens. Storybook and this docs site are development
          tools, not consumers.
        </p>
      </section>
    </>
  );
}
