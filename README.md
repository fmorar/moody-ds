# moody-ds

A small, opinionated React design system anchored to the Moody's brand. Two publishable packages, two dev-only apps, one cohesive token model that flips between light and dark with a class.

Published releases live at **https://github.com/fmorar?tab=packages**.

## Packages

| Package | Version | Purpose |
| --- | --- | --- |
| [`@fmorar/moody-tokens`](https://github.com/fmorar/moody-ds/pkgs/npm/moody-tokens) | `0.1.0` | Design tokens: color primitives (navy + neutral), semantic color roles, typography stacks, spacing, radius, shadows, motion, and z-index — as CSS variables and TS constants. |
| [`@fmorar/moody-ui`](https://github.com/fmorar/moody-ds/pkgs/npm/moody-ui) | `0.1.0` | React components: `Button`, `IconButton`, `Input`, `Switch`, `Separator`, `Avatar`, `Card`, `Select`. Styled exclusively with semantic token utilities so light/dark is free. |

## Apps (dev tools, not published)

| App | URL (local) | Purpose |
| --- | --- | --- |
| [`apps/docs`](./apps/docs) | http://localhost:3000 | Next.js docs site — component reference, token reference, and the Transfer flow pattern. |
| [`apps/storybook`](./apps/storybook) | http://localhost:6006 | Storybook 10 — per-component stories with a Light/Dark toolbar toggle. |

## Install in a consumer project

The packages are published to **GitHub Packages** (private, free). Consumers configure `.npmrc` with a GitHub personal access token once.

### 1. Create a PAT

Go to https://github.com/settings/tokens → generate a classic token with the single scope **`read:packages`**. Copy it.

### 2. Configure `.npmrc` in the consuming project

```ini
# .npmrc
@fmorar:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Export the token in your shell (or your CI secret):

```sh
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxx
```

> **Security note.** Keep the `${GITHUB_TOKEN}` placeholder in the committed `.npmrc` — never paste the raw token into a file that gets checked in. For local dev, set the env var in your shell rc (`~/.zshrc`); for CI, use a repository/organization secret. If you prefer, add `.npmrc` to `.gitignore` and generate it on demand.

### 3. Install

```sh
npm install @fmorar/moody-ui @fmorar/moody-tokens
```

### 4. Load the tokens + use a component

```tsx
// app/layout.tsx (or wherever your root is)
import "@fmorar/moody-tokens/tokens.css";

// anywhere else
import { Button } from "@fmorar/moody-ui";

export default function Page() {
  return <Button>Hello</Button>;
}
```

Dark mode: toggle `document.documentElement.classList.add("dark")` — every semantic token flips.

## Developing this repo

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
npm run -w @fmorar/moody-ui build   # tsup → packages/ui/dist
```

## Adding a component

1. Create `packages/ui/src/components/Foo.tsx` — use semantic token utilities only (no `zinc-*`, no hex).
2. Export from `packages/ui/src/index.ts`.
3. Add a `Foo.stories.tsx` with at least Default + variant coverage.
4. Add `apps/docs/src/app/docs/components/foo/page.tsx` and list it in `apps/docs/src/lib/docs-nav.ts`.
5. Verify in both themes via the Light/Dark toggle.
6. Run `npm run typecheck` and `npm run -w @fmorar/moody-ui build`.

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

Design source: [moody-project](https://www.figma.com/design/Sn6XcCHiq9y4aLYzkJsBkW/moody-project).

**Variables** live in two collections (**Primitives** and **Moody DS**) with Light + Dark modes; each Figma variable carries a `WEB` code syntax that maps 1:1 to the corresponding CSS custom property.

**Components** are published as Figma component sets with full variant + boolean coverage (e.g. Button has `Variant × Size` variants and a `Disabled` boolean; Card has `HasHeader`/`HasFooter`/`Interactive` booleans). The `.figma.tsx` files in `packages/ui/src/components/` bind each Figma prop to the matching React prop via Figma Code Connect, so Dev Mode shows real usage code next to the design.

### Publishing Code Connect mappings

Needs a [Figma personal access token](https://www.figma.com/developers/api#access-tokens) with the `code_connect:write` scope.

```sh
export FIGMA_ACCESS_TOKEN=figd_xxxxxxxxxxxxxxxx

# validate without pushing
npm run -w @fmorar/moody-ui figma:validate

# publish — uploads every Button.figma.tsx / Input.figma.tsx / … to Figma
npm run -w @fmorar/moody-ui figma:publish
```

Designers then see real code snippets in Figma Dev Mode for each selected component.

## Releasing

Publishing is automated via [`.github/workflows/publish.yml`](./.github/workflows/publish.yml). To cut a release:

```sh
# bump the version in both publishable package.json files
npm version -w @fmorar/moody-tokens 0.2.0
npm version -w @fmorar/moody-ui     0.2.0

# tag + push
git tag v0.2.0
git push origin main --tags
```

The workflow fires on any `v*.*.*` tag push: builds both packages and publishes them to GitHub Packages under the `@fmorar` scope using the built-in `GITHUB_TOKEN` (no extra secret needed). The workflow can also be triggered manually from the Actions tab (`workflow_dispatch`).

### Package visibility

GitHub Packages inherits its default visibility from the source repository. Because `fmorar/moody-ds` is public, the first release of each package is **public** — anyone with a `read:packages` token can install them.

To make a package private after the fact: go to https://github.com/fmorar?tab=packages → the package → **Package settings** → **Change package visibility** → **Private**. Consumers then need a PAT tied to an account with explicit access to the package.

See [`ds-release`](./.claude/skills/ds-release/SKILL.md) for the versioning + breaking-change matrix.

## License

MIT for the publishable packages (`@fmorar/moody-ui`, `@fmorar/moody-tokens`). Apps are private to the workspace.
