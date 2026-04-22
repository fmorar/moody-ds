---
name: ds-release
description: Use when preparing a release of @fmorar/moody-ui or @fmorar/moody-tokens — version bumps, changelogs, breaking change analysis, deprecations, and migration notes.
---

# Release Governance Skill

You are reviewing changes before they ship to npm consumers of `@fmorar/moody-ui` and `@fmorar/moody-tokens`.

## Pre-release checklist

### Breaking change analysis
- [ ] Did any exported prop name change?
- [ ] Did any prop type narrow or widen in a way that breaks existing usage?
- [ ] Did any prop default change in a behavior-visible way?
- [ ] Did any component get removed from `packages/ui/src/index.ts`?
- [ ] Did any **semantic** token role (`--color-primary`, `--color-foreground`, etc.) get renamed or removed in `@fmorar/moody-tokens`? → breaking
- [ ] Did any entry in the `@fmorar/moody-tokens` package `exports` field change? → breaking
- [ ] Did a semantic token's *meaning* shift (e.g. `--color-accent` repointed from blue to red)? → breaking
- [ ] Did any primitive token value change (`--moody-navy-800` hex)? → minor if semantic roles absorb it transparently, major if downstream theming breaks
- [ ] Did styling behavior change in a way consumers might not expect?

### Documentation
- [ ] Storybook stories reflect the current API (no outdated examples)
- [ ] Component prop tables are accurate
- [ ] Any deprecated usage is marked with `@deprecated` JSDoc

### Quality gates
- [ ] TypeScript compiles without errors (`npm run typecheck`)
- [ ] Build succeeds (`npm run build`)
- [ ] All new components have stories and are exported

### Post-release monitoring
- [ ] Omlet adoption tracking is aware of the change (if deprecating or renaming)
- [ ] Migration guide written if this is a major bump

## Versioning rules

| Change type | Bump |
|---|---|
| Internal fix, no API change | patch |
| Primitive token value tweak (no semantic role change) | patch |
| New component or new optional prop | minor |
| New semantic token role | minor |
| New required prop, removed prop, renamed prop, changed default | **major** |
| Removed component | **major** |
| Semantic token rename, removal, or repointed meaning | **major** |
| `@fmorar/moody-tokens` export surface change | **major** |

## Changelog format

Use human-readable entries grouped by type:

```
## [x.y.z] — YYYY-MM-DD

### Breaking changes
- `Button`: renamed prop `kind` → `variant` — update all usages

### New
- Added `Badge` component with `variant` and `size` support

### Fixed
- `Button`: focus ring now visible in Windows high contrast mode
```

## Output format

Respond with:
1. **Recommended version bump** — patch / minor / major and why
2. **Consumer impact** — what breaks, what is new, what is fixed
3. **Changelog entry** — ready to paste
4. **Migration guide** — required for major bumps, optional for minor
5. **Post-release monitoring** — which Omlet metrics to watch
