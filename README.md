# moody-ds

A small, opinionated React design system anchored to the Moody's brand. Two publishable packages, two dev-only apps, one cohesive token model that flips between light and dark with a class.

## Packages

| Package | Published | Purpose |
| --- | --- | --- |
| [`@moody-ds/tokens`](./packages/tokens) | ✓ | Design tokens: color primitives (navy + neutral), semantic color roles, typography stacks, spacing, radius, shadows, motion, and z-index — as CSS variables and TS constants. |
| [`@moody-ds/ui`](./packages/ui) | ✓ | React components: `Button`, `IconButton`, `Input`, `Switch`, `Separator`, `Avatar`, `Card`, `Select`. Styled exclusively with semantic token utilities so light/dark is free. |

## Apps (dev tools, not published)

| App | URL (local) | Purpose |
| --- | --- | --- |
| [`apps/docs`](./apps/docs) | http://localhost:3000 | Next.js docs site — component reference, token reference, and the Transfer flow pattern. |
| [`apps/storybook`](./apps/storybook) | http://localhost:6006 | Storybook 10 — per-component stories with a Light/Dark toolbar toggle. |

## Getting started

Requirements: Node 20.9+, npm 11.

```sh
git clone git@github.com:fmorar/moody-ds.git
cd moody-ds
npm install
```

Run the docs site:

```sh
npm run docs         # http://localhost:3000
```

Run Storybook:

```sh
npm run storybook    # http://localhost:6006
```

Run both in parallel (two terminals, or use `turbo run dev`).

## Token architecture

Two layers, everything else follows:

1. **Primitives** (`--moody-navy-*`, `--moody-neutral-*`, `--moody-danger-500`, `--moody-warning-500`, plus `--space-*`, `--radius-*`, `--shadow-*`, `--duration-*`, `--ease-*`, `--z-*`) — raw brand values. Defined once in `:root`. Primitives never flip.
2. **Semantic roles** (`--color-background`, `--color-primary`, `--color-foreground`, `--color-ring`, …) — aliases of primitives, redefined inside `.dark`. Components consume **only these** via Tailwind utilities (`bg-primary`, `text-foreground`, `border-border`).

Dark mode is a single `document.documentElement.classList.toggle("dark")`. Every semantic token swaps, every component follows.

See the in-app references:
- http://localhost:3000/docs/tokens — complete token index (live swatches, contrast ratios, CSS var reference table)
- http://localhost:3000/docs/tokens/colors
- http://localhost:3000/docs/tokens/typography
- http://localhost:3000/docs/tokens/spacing
- http://localhost:3000/docs/tokens/radius
- http://localhost:3000/docs/tokens/effects

## Commands

```sh
npm run docs         # dev: Next.js docs
npm run storybook    # dev: Storybook
npm run build        # turbo: build all packages + apps
npm run typecheck    # turbo: tsc across the monorepo
```

Package-level commands are available via `npm run -w <pkg> <script>`, e.g.:

```sh
npm run -w @moody-ds/ui build   # tsup → packages/ui/dist
```

## Adding a component

1. Create `packages/ui/src/components/Foo.tsx` — use semantic token utilities only (no `zinc-*`, no hex).
2. Export from `packages/ui/src/index.ts`.
3. Add a `Foo.stories.tsx` with at least Default + variant coverage.
4. Add `apps/docs/src/app/docs/components/foo/page.tsx` and list it in `apps/docs/src/lib/docs-nav.ts`.
5. Verify in both themes via the Light/Dark toggle.
6. Run `npm run typecheck` and `npm run -w @moody-ds/ui build`.

The checklist and conventions live in [`.claude/skills/ds-component/SKILL.md`](./.claude/skills/ds-component/SKILL.md).

## Project playbooks

Design-system conventions encoded as reusable skills (also power the AI assistant):

- [`ds-component`](./.claude/skills/ds-component/SKILL.md) — component authoring rules (mandatory tokens, a11y, exports)
- [`ds-architecture`](./.claude/skills/ds-architecture/SKILL.md) — monorepo boundaries + the two-layer token model
- [`ds-storybook`](./.claude/skills/ds-storybook/SKILL.md) — dual-theme story review
- [`ds-a11y-review`](./.claude/skills/ds-a11y-review/SKILL.md) — WCAG checklist with contrast in both modes
- [`ds-code-connect`](./.claude/skills/ds-code-connect/SKILL.md) — Figma ↔ code parity
- [`ds-release`](./.claude/skills/ds-release/SKILL.md) — versioning + breaking-change matrix
- [`ds-adoption-analytics`](./.claude/skills/ds-adoption-analytics/SKILL.md) — Omlet-based adoption tracking

## Figma

Design source: [moody-project](https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project). Variables live in two collections (**Primitives** and **Moody DS**) with Light + Dark modes; each Figma variable carries a `WEB` code syntax that maps 1:1 to the corresponding CSS custom property.

## License

MIT for the publishable packages (`@moody-ds/ui`, `@moody-ds/tokens`). Apps are private to the workspace.
