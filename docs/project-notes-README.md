# Project Notes

Private internal reference for my active projects. Each file holds the operational details I don't publish in public repos — full API references, environment configuration, evaluation tooling, guardrail internals, and anything else I need to pick a project back up quickly without re-reading the whole codebase.

**This repo is private and stays that way.** Public-facing repos link back here only in spirit ("detailed docs maintained privately") — never by URL.

## Index

| Project | Public repo | Notes file | Status |
|---|---|---|---|
| FabriQ | [Lassoued1/FabriQ](https://github.com/Lassoued1/FabriQ) | [FabriQ_OPERATIONS.md](./FabriQ_OPERATIONS.md) | Active |
| FabriCore | [Lassoued1/FabriCore](https://github.com/Lassoued1/FabriCore) | [FabriCore_OPERATIONS.md](./FabriCore_OPERATIONS.md) | Active |
| PharmaLink | [Lassoued1/PharmaLink](https://github.com/Lassoued1/PharmaLink) | [PharmaLink_OPERATIONS.md](./PharmaLink_OPERATIONS.md) | To document |
| WerkPilot VLBG | *(not yet pushed)* | [WerkPilot_OPERATIONS.md](./WerkPilot_OPERATIONS.md) | In progress |
| SkillPulse | [Lassoued1/QuizLive](https://github.com/Lassoued1/QuizLive) | [SkillPulse_OPERATIONS.md](./SkillPulse_OPERATIONS.md) | To document |
| A1Simulator | [Lassoued1/A1Simulator](https://github.com/Lassoued1/A1Simulator) | [A1Simulator_OPERATIONS.md](./A1Simulator_OPERATIONS.md) | To document |
| Die Lernplattform | [Lassoued1/die-lernplattform](https://github.com/Lassoued1/die-lernplattform) | [DeutschLernen_OPERATIONS.md](./DeutschLernen_OPERATIONS.md) | To document |

*Update this table whenever a project's status changes or a new one starts.*

## Template

[`TEMPLATE_OPERATIONS.md`](./TEMPLATE_OPERATIONS.md) is the reusable skeleton. For a new project:

1. Copy it to `<ProjectName>_OPERATIONS.md`
2. Fill in each section — delete any that don't apply
3. Add a row to the index table above

## Conventions

- One file per project, named `<ProjectName>_OPERATIONS.md`, matching the name used on the public portfolio site — not necessarily the GitHub repo name if they differ (e.g. SkillPulse / `QuizLive`).
- Keep commands copy-pasteable — exact env vars, exact flags, no placeholders unless genuinely project-specific.
- Note explicit gaps/limitations honestly; future-me needs the truth, not a polished version.
- No client data, credentials, or secrets — even here. Use `.env.example`-style placeholders for anything sensitive; real secrets belong in a password manager, not in Markdown.
