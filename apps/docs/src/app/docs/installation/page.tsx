export default function InstallationPage() {
  return (
    <>
      <header className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Getting Started
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Installation
        </h1>
        <p className="text-lg text-muted-foreground">
          Install the packages and import components directly from{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-base">
            @fmorar/moody-ui
          </code>
          .
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Install
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
          <code>npm install @fmorar/moody-ui @fmorar/moody-tokens</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Load tokens
        </h2>
        <p className="text-foreground/90">
          Import the tokens stylesheet once at the root of your app. Components
          read semantic CSS variables (<code className="rounded bg-muted px-1 text-xs">--color-primary</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">--color-foreground</code>, …) so
          swapping themes only requires toggling a class.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
          <code>{`import "@fmorar/moody-tokens/tokens.css";`}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Peer dependencies
        </h2>
        <p className="text-foreground/90">
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">react</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            react-dom
          </code>{" "}
          &gt;= 18. Tailwind CSS is recommended but not required — components
          accept a{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            className
          </code>{" "}
          prop for overrides.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Import
        </h2>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
          <code>{`import { Button } from "@fmorar/moody-ui";

export function Example() {
  return <Button>Hello</Button>;
}`}</code>
        </pre>
      </section>
    </>
  );
}
