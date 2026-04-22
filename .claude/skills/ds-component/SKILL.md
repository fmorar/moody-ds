---
name: ds-component
description: Use when creating, refactoring, or extending design system React components in packages/ui — includes props, variants, tokens, accessibility, stories, and exports.
---

# Component Authoring Skill

You are implementing production-grade design system components for `@fmorar/moody-ui`.

## Before writing any code

1. Check whether a similar component already exists in `packages/ui/src/components/`
2. Review existing components (e.g. `Button`) for API patterns to follow
3. Confirm the component belongs in `packages/ui`, not in `apps/docs` or `apps/storybook`

## Component checklist

- [ ] Purpose is clearly defined — one responsibility per component
- [ ] Props reuse existing naming conventions (`variant`, `size`, `disabled`, etc.)
- [ ] No boolean prop explosion — prefer `variant` and semantic enums
- [ ] No hardcoded colors or spacing — use tokens from `@fmorar/moody-tokens`
- [ ] TypeScript interface exported alongside the component
- [ ] `forwardRef` used if the element is interactive or needs a DOM ref
- [ ] `"use client"` directive added if the component uses hooks or event handlers
- [ ] ARIA roles and attributes are correct — prefer native HTML semantics first
- [ ] Keyboard navigation works without a mouse
- [ ] Disabled state is handled and visually clear
- [ ] Component is exported from `packages/ui/src/index.ts`
- [ ] Storybook stories written (see `ds-storybook` skill)
- [ ] Code Connect mapping noted as pending or updated (see `ds-code-connect` skill)

## Brand tokens — mandatory usage

Components must style exclusively with **semantic token utilities**, which resolve to CSS variables defined in `packages/tokens/src/tokens.css` and re-mapped by Tailwind through `@theme inline`. The tokens flip automatically when `.dark` is added to `<html>`, so components get light/dark for free.

### Allowed utilities (semantic roles)

| Role                     | Use for                                               |
| ------------------------ | ----------------------------------------------------- |
| `bg-background`          | Page / surface background                             |
| `bg-muted`               | Subtle card / code block / table header background    |
| `bg-subtle`              | Brand-tinted highlight (active nav item, badges)      |
| `bg-primary`             | Primary action / brand-weight fill                    |
| `bg-accent`              | Secondary emphasis / CTA-blue                         |
| `bg-destructive`         | Danger action                                         |
| `bg-warning`             | Warning action                                        |
| `text-foreground`        | Default body text                                     |
| `text-muted-foreground`  | Secondary / metadata text                             |
| `text-primary-foreground`, `text-accent-foreground`, `text-subtle-foreground`, `text-destructive-foreground`, `text-warning-foreground` | Paired text on filled surfaces |
| `border-border`          | Default border                                        |
| `border-input`           | Form control border                                   |
| `ring-ring`              | Focus ring color                                      |
| `hover:bg-primary-hover`, `hover:bg-accent-hover` | Hover state on filled CTAs |

### Forbidden

- ❌ Tailwind color palettes: `zinc-*`, `slate-*`, `gray-*`, `blue-*`, etc.
- ❌ Hex values inline (`#0a1264`, `#fff`)
- ❌ `rgb()` / `rgba()` / `hsl()` inline
- ❌ Referencing primitives directly from a component (`bg-[var(--moody-navy-800)]`) — that bypasses the semantic layer and breaks theming
- ❌ `dark:` variants that hardcode a specific color — the semantic token already handles both modes

### Canonical example — Button variant mapping

```ts
const variantStyles: Record<Variant, string> = {
  primary:   "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "bg-muted text-foreground border border-border hover:bg-subtle hover:text-subtle-foreground hover:border-transparent",
  ghost:     "bg-transparent text-foreground hover:bg-muted",
};
// focus:
"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
```

Reference: `packages/ui/src/components/Button.tsx`.

### Adding a new semantic role

If the existing roles don't cover your need, **propose a token addition first** — don't invent one-off classes. A new role means:
1. Add the var in `:root` and `:where(.dark)` in `packages/tokens/src/tokens.css`
2. Add the mapping in both `@theme inline` blocks (`apps/docs/src/app/globals.css` + `apps/storybook/.storybook/preview.css`)
3. Document the role here in the allowed-utilities table

## API design rules

- Align prop names with existing system patterns before inventing new ones
- `variant` for visual/semantic style (primary, secondary, ghost, destructive…)
- `size` for t-shirt sizes (sm, md, lg)
- `disabled` for non-interactive state — never block pointer events without explanation
- Do not add props that solve a single screen-level edge case
- Reject `className` overrides as the primary API — it's an escape hatch, not the interface
- If requirements diverge too much, prefer composition over a god-component

## Output format

Respond with:
1. **Component contract** — name, props, types, defaults
2. **API rationale** — why this API, trade-offs considered
3. **Accessibility notes** — semantic HTML, ARIA, keyboard behavior
4. **Token usage** — which tokens are used and where
5. **Storybook needs** — which stories are required
6. **Code Connect follow-up** — whether a mapping update is needed
