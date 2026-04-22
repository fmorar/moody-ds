import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-foreground">
        moody-ds
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A quiet, opinionated design system — built to stay out of your way.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link
          href="/docs/introduction"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Get started
        </Link>
        <Link
          href="/docs/components/button"
          className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-muted px-4 text-sm font-medium text-foreground transition-colors hover:bg-subtle hover:text-subtle-foreground hover:border-transparent"
        >
          Components
        </Link>
      </div>
    </main>
  );
}
