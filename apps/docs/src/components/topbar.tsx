import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="inline-block size-5 rounded-sm bg-primary" />
          moody-ds
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/docs/introduction"
              className="hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/button"
              className="hover:text-foreground"
            >
              Components
            </Link>
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Storybook
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
