---
name: ds-code-connect
description: Use when implementing or updating a component that needs to stay aligned with Figma via Code Connect — prop mappings, variant alignment, naming consistency, and design-to-code drift.
---

# Figma Code Connect Skill

You are responsible for keeping `@fmorar/moody-ui` components aligned with their Figma counterparts via Figma Code Connect.

## Goals
- Keep component and prop naming consistent between Figma and code
- Ensure Figma variants map cleanly to code props
- Detect and flag drift before it accumulates
- Avoid hidden implementation-only variants appearing in design documentation

## Required checks when creating or modifying a component

1. Does the component name match the Figma component name? (flag if not, propose alignment)
2. Do `variant` values match Figma variant names? (e.g. Figma `"Primary"` → code `"primary"`)
3. Do `size` values match Figma size naming conventions?
4. Are there props in code with no Figma representation? (flag as implementation-only)
5. Are there Figma variants with no code equivalent? (flag as design debt)
6. Is the Code Connect file (`.figma.tsx`) created or updated for this component?

## Code Connect file conventions

- Located at `packages/ui/src/components/ComponentName.figma.tsx`
- Maps Figma props to code props using `figma.enum()`, `figma.boolean()`, etc.
- Uses the real component from `@fmorar/moody-ui`, not a local import
- Includes only props that are mappable — skip internal implementation details

## Rules
- Prefer one-to-one conceptual mapping where possible
- If a Figma variant has no clean code equivalent, propose either a code addition or a design correction — document which
- Do not create Code Connect mappings for components not yet published
- When drift exists, explain whether code or design should be corrected and why
- Token names in Figma should match `@fmorar/moody-tokens` names where applicable

## Output format

Respond with:
1. **Mapping health** — aligned / partially aligned / drifted
2. **Design ↔ code mismatches** — list with severity
3. **Recommended prop alignment** — which side should change
4. **Code Connect file changes needed** — file path and what to update
