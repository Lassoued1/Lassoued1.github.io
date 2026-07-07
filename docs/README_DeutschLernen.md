# Die Lernplattform

A German learning web platform covering **A1 to C1**, with interactive lessons, corrected exercises, and timed practice tests.

> Aligned with **Goethe-Institut**, **ÖSD**, and **telc** reference frameworks.

> **Portfolio Notice**
> This repository is a demonstrative build shared for portfolio purposes, showcasing architecture, technical decisions, and code quality. Pedagogical content is proprietary — see License.

---

## What it does

DeutschLernen is a self-built, self-paced German learning platform structured around the Studio 21 curriculum. It combines structured lessons with an interactive test module — diagnostic tests, a tiered practice test bank, and a student progress dashboard — built while learning German for integration in Austria.

## Content coverage

| Level | Status | Scope |
|---|---|---|
| A1 | ✅ Complete | A1.1 + A1.2 (Studio 21, units 1–12) — 120 interactive exercises |
| A2 | ✅ Complete | A2.1 + A2.2 — grammar progression from Perfekt/Präteritum to future tense & politeness forms — ~216 exercises |
| B1 | 🚧 Planned | Roadmap covers Plusquamperfekt, Genitiv, Konjunktiv II, Relativsätze, Passiv, advanced connectors |

## Test module

- **Diagnostic test** per level — 40 questions, 30 minutes, overall assessment
- **Tiered practice test bank** (A1) — 3 difficulty tiers (Preliminary / Advanced / Heroes), 9 tests total
- **6 question types** — multiple choice, multiple answer, fill-in-the-blank, translation, ordering, matching
- **Student dashboard** — history, average score, best score, per-tier progress

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 19, react-router-dom 7 |
| Build tool | Vite 8 |
| State management | Zustand (test module) |
| Language | JavaScript (inline styles + CSS variables — no TypeScript, no Tailwind) |
| Persistence | localStorage (frontend-only mode) |

## Quick start

```bash
git clone https://github.com/Lassoued1/die-lernplattform.git
cd die-lernplattform
npm install
npm run dev
```

Open `http://localhost:5173`.

## Architecture

The lesson engine and test module are both built around generic, reusable components rather than one-off pages per lesson: a shared `LessonShell` renders lesson content from data files, and a shared test runner (with a refresh-resistant timer and auto-submit) drives all six question types from a common scoring layer. A `testService` abstraction layer already separates data access from UI, so the current localStorage-only persistence can be swapped for a real backend without touching the components.

## License

All rights reserved. Pedagogical content is proprietary.

---

*Detailed operational documentation (full route map, folder structure, and content data conventions) is maintained privately. Feel free to reach out if you'd like to discuss the implementation in more depth.*
