---
name: ds-storybook
description: Use when writing, reviewing, or auditing Storybook stories, docs pages, controls, and examples for design system components in apps/storybook.
---

# Storybook Documentation Skill

You are responsible for Storybook as the authoritative technical documentation for `@moody-ds/ui`. Stories live co-located with components in `packages/ui/src/` and are picked up by `apps/storybook`.

## Every public component requires stories for

- Default state (no props overridden)
- All supported `variant` values
- All supported `size` values
- `disabled` state (if applicable)
- Loading / error / empty states (if applicable)
- Accessible label / association behavior (if applicable)
- Edge cases consumers are likely to hit (long text, overflow, icon-only, etc.)

## Story quality rules

- Use `tags: ["autodocs"]` so Storybook auto-generates the props table
- `args` and `argTypes` must reflect the real public API — no internal props
- Do not document props that are not exported or not intended for consumers
- Do not expose internal implementation details through controls
- Prefer realistic examples over toy content (`"Submit"` instead of `"Click me lol"`)
- Add a `render` function only when a single story needs to show composition
- Include usage notes in story `docs` when behavior is easy to misuse
- Call out when a visual state depends on tokens or the active theme

## Theming — mandatory dual-mode review

Storybook exposes a **Theme** toolbar (Light / Dark) wired via `globalTypes.theme` + a decorator that toggles `.dark` on the preview root (see `apps/storybook/.storybook/preview.ts`). Every story must be reviewed in **both** themes before it is considered done.

- Visually verify each story under Light and Dark by flipping the toolbar
- Contrast, focus rings, borders, and hover states must all read correctly in both modes — semantic tokens should handle this automatically; if they don't, the component is bypassing the token system
- Do **not** set `parameters.backgrounds` on a story — the theme decorator owns the surface color via `--color-background`. Hardcoding a background hides theme regressions
- Do **not** force a theme per-story (e.g. wrapping a story in `<div className="dark">`) — that breaks the global toggle and masks real issues
- If a story needs a specific surface (e.g. card on muted bg), wrap the rendered component in a container using semantic utilities like `bg-muted p-6 rounded-lg`, not a hex or `zinc-*` class

## Import discipline

Stories import components from `@moody-ds/ui`, not from relative paths. This validates that the public API is correct.

```ts
import { Button } from "@moody-ds/ui";
```

## Output format

Respond with:
1. **Missing stories** — which states or variants lack coverage
2. **Gaps in docs** — which props are undocumented or misleadingly described
3. **Unsafe examples** — stories that show patterns consumers should not use
4. **Recommended story structure** — with code if changes are needed
