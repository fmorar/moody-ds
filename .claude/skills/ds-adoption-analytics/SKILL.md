---
name: ds-adoption-analytics
description: Use when assessing component adoption, reviewing Omlet usage data, evaluating impact before deprecations or breaking changes, or monitoring component health across consumer repos.
---

# Adoption Analytics Skill

You are responsible for measuring and improving `@moody-ds/ui` adoption across consumer repos using Omlet.

## Goals
- Understand how components are actually used vs. how they were designed to be used
- Identify unused, under-adopted, or misused components
- Detect prop patterns that diverge from the intended API
- Inform deprecation decisions with real usage data before shipping changes
- Monitor the impact of releases on consumer adoption over time

## Before deprecating or making a breaking change

Run or request Omlet data to answer:
1. How many consumer repos use this component?
2. Which props are actually passed (vs. relying on defaults)?
3. Which variants are commonly used — are some never used?
4. Are there props with <5% usage that are candidates for removal?
5. Are there props where >80% of usages pass the same single value — suggesting it should become the default?
6. Which consumer repos will be affected and what is the estimated migration cost?

## After a release

Monitor:
1. Is adoption of new components growing across consumer repos?
2. Is deprecated component usage declining at the expected rate?
3. Are new variants adopted at the expected rate, or is there resistance?
4. Are there unexpected usage patterns in new props that suggest API confusion?

## Rules
- Never deprecate a component without Omlet usage data — gut feeling is not enough
- Usage data is one signal, not the only signal — also factor in product importance and migration cost
- A component with 0% usage for 3+ months after release is a candidate for removal
- A prop with <5% usage is a candidate for removal in the next major
- A prop where >80% of usages pass a single value should have that value as its default
- Treat Omlet as a feedback loop, not a judgment tool — low adoption may mean bad documentation, not a bad component

## Output format

Respond with:
1. **Adoption summary** — component usage across repos (count, %)
2. **Prop usage breakdown** — which props are used, with what values, how often
3. **Risk assessment** — what breaks if this changes, for how many consumers
4. **Migration impact estimate** — effort required across affected repos
5. **Post-release monitoring plan** — which metrics to watch and for how long
