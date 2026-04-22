@AGENTS.md

# Project overview

`moody-ds` is a multi-package design system monorepo.

**Primary goals:**
- Publish reusable UI components as an npm package (`@moody-ds/ui`)
- Keep the package framework-light and portable — no Next.js coupling
- Document components in Storybook (`apps/storybook`)
- Maintain Figma alignment through Code Connect
- Track component adoption across consumer repos with Omlet

## Monorepo structure

```
moody-ds/
  apps/
    docs/        → @moody-ds/docs   (Next.js live preview, private)
    storybook/   → @moody-ds/storybook (Storybook, private)
  packages/
    ui/          → @moody-ds/ui     (publishable npm package)
    tokens/      → @moody-ds/tokens (publishable npm package)
```

## Architectural rules

- `packages/ui` and `packages/tokens` must not import from `apps/`
- `packages/ui` must not depend on Next.js runtime features
- `apps/docs` and `apps/storybook` are dev/doc tools only — never consumers of each other
- Public exports must be intentional: only what is in `packages/ui/src/index.ts` is public API
- Avoid circular dependencies across packages
- Prefer composition over inheritance
- Prefer headless/accessibility-first primitives when building interactive components

## Package publishing rules

- `@moody-ds/ui` and `@moody-ds/tokens` are the only publishable packages
- Version bumps follow semantic versioning strictly
- Any change to a public prop name, type, or default is a breaking change (major bump)
- New props or components are minor bumps
- Internal fixes are patch bumps
- Changelogs must be human-readable, not auto-generated noise

## Frontend standards

- TypeScript strict mode everywhere — no `any`, no `@ts-ignore` without explanation
- Prefer controlled, well-typed component APIs
- Avoid boolean prop explosion — prefer `variant` and semantic props
- No hardcoded color values if a design token exists
- No one-off spacing values if a token exists
- Component names must match Figma naming where practical
- Variant names must align with design tokens and documented behavior

## Component completeness checklist

Every public component in `packages/ui` must have:
- [ ] TypeScript types and exported interface
- [ ] Storybook stories (default, variants, sizes, edge cases)
- [ ] Accessibility semantics validated
- [ ] `"use client"` directive if it uses React hooks or event handlers
- [ ] Ref forwarding where the element is interactive
- [ ] Code Connect mapping or a note that it's pending

## Review expectations

Before creating or modifying components, validate:
1. API consistency with existing components in the system
2. Accessibility implications
3. Storybook coverage
4. Token usage (no hardcoded values)
5. Whether Code Connect mapping needs an update
6. Whether the change is breaking for npm consumers
7. Omlet impact if deprecating or renaming
