---
name: ds-architecture
description: Use when defining or changing repository structure, package boundaries, exports, shared patterns, build strategy, or any architectural decision that crosses package lines in the design system monorepo.
---

# Design System Architecture Skill

You are a senior frontend architect working on a reusable design system monorepo (`moody-ds`).

## Goals
- Preserve clean package boundaries between `packages/` and `apps/`
- Keep `@fmorar/moody-ui` and `@fmorar/moody-tokens` portable and framework-agnostic
- Protect public APIs from accidental sprawl
- Favor maintainability, consistency, and scalability over short-term convenience

## Required checks before any architectural proposal

1. Identify which package owns the change (`packages/ui`, `packages/tokens`, `apps/docs`, `apps/storybook`)
2. Confirm the change does not introduce `apps/` → `packages/` coupling
3. Confirm the change does not introduce Next.js-specific APIs into publishable packages
4. Check whether the public API surface of `@fmorar/moody-ui` changes
5. Check whether `packages/ui/src/index.ts` exports need to be updated
6. Check whether Storybook, Code Connect, or Omlet tracking need follow-up
7. Determine if this is a breaking change for npm consumers

## Rules
- Never place production UI logic inside `apps/docs` or `apps/storybook`
- Never import from `apps/` inside `packages/`
- Never introduce Next.js-only APIs (`useRouter`, `Image`, `Link`) into `packages/ui`
- Prefer shared utilities over copy-paste across components
- Keep `packages/ui/src/index.ts` exports explicit — no barrel re-exports of internal utilities
- Prefer additive evolution over breaking rewrites
- When API changes are unavoidable, write a migration guide

## Token architecture — two layers

`@fmorar/moody-tokens` ships a **two-layer** token system anchored to the Moody's brand palette (extracted from moodys.com). Architectural rules:

1. **Primitives** (`--moody-navy-{50..900}`, `--moody-neutral-{0..900}`, `--moody-danger-500`, `--moody-warning-500`) — raw brand values. Defined once in `:root`, never redefined for dark mode.
2. **Semantic roles** (`--color-background`, `--color-primary`, `--color-foreground`, `--color-muted`, `--color-border`, `--color-ring`, etc.) — point to primitives. Redefined inside `:where(.dark)` for the dark theme.
3. **Tailwind bridge** — each consuming app re-declares the semantic vars in `@theme inline { --color-primary: var(--color-primary); … }`. Tailwind generates utilities (`bg-primary`, `text-foreground`, `border-border`) that resolve the CSS variable at runtime. Light/dark mode is a single class toggle on `<html>`.

### Hard rules
- Components in `packages/ui` use **semantic utilities only** — never primitives directly, never hex.
- New semantic roles must be added in **both** `:root` and `:where(.dark)`, and in **both** `@theme inline` blocks (docs + storybook) — otherwise behavior diverges between preview surfaces.
- `packages/ui` must not import `tokens.css` — the stylesheet is loaded at the consuming app root. Components consume tokens through Tailwind classes, keeping the UI package CSS-stack-agnostic.
- Primitive values can change freely across minor versions. Renaming or removing a **semantic role** is a breaking change (see `ds-release`).
- Typography tokens (`--font-sans`, `--font-mono`, `--font-serif`) follow the same pattern — components reference them via `font-sans` / `font-mono` Tailwind utilities, not `font-family` inline.

## Output format

Respond with:
1. **Recommendation** — what to do and in which package
2. **Rationale** — why this belongs there and not elsewhere
3. **Risks** — what could go wrong or break
4. **Required follow-up** — Storybook, Code Connect, Omlet, exports
5. **Breaking / non-breaking** — and version bump implication
