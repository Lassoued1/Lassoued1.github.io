# <ProjectName> — Internal Operations Notes

*Private reference. Do not publish to the public repository.*

- **Public repo:** <link, or "not yet pushed">
- **Status:** <Active / In progress / To document / Archived>
- **Last updated:** <date>

---

## Overview

<1-3 sentences: what it does, for whom, and why it exists. The "explain it to yourself in six months" version.>

## Local development

### Prerequisites

<Runtime versions, required local services, accounts/API keys needed (names only — real values go in a password manager, not here).>

### 1. <Service/DB setup>

```bash
<commands>
```

### 2. Backend

```bash
<commands>
```

### 3. Frontend

```bash
<commands>
```

### Full stack (Docker Compose)

```bash
<commands>
```

Services and ports:

| Service | URL |
|---|---|
| Frontend | |
| API | |
| DB | |
| Other | |

## Environment variables

| Variable | Purpose | Example / default |
|---|---|---|
| | | |

*Real secrets live in a password manager — this table documents what exists, not the actual values.*

## Full API reference

| Group | Endpoints |
|---|---|
| | |

Interactive docs (if any): `<url>`

## Architecture notes

<Anything not obvious from the code: why a dependency was chosen, a tradeoff that was made, a constraint that shaped a design decision, a piece of business logic that isn't self-explanatory.>

## Guardrails / security internals

<Any validation layers, permission models, rate limits, data-isolation mechanisms — the parts you'd want to explain carefully to a recruiter but not hand over as a how-to.>

## Evaluation / testing

```bash
<commands>
```

- <test counts, coverage notes, what's covered vs not>

## Demo script

<Steps or example inputs to demo the project live — the ones that reliably show it off well.>

## Known gaps / open items

- <Honest list — future-you needs the truth, not a polished version.>

## Related notes

<Links to other files in this repo, external docs, design docs, or the original requirements/cahier des charges if one exists.>
