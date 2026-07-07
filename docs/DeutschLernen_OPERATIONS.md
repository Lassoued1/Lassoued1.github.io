# Die Lernplattform — Internal Operations Notes

*Private reference. Do not publish to the public repository.*

- **Public repo:** https://github.com/Lassoued1/die-lernplattform
- **Status:** Active — A1/A2 complete, B1 planned
- **Last updated:** <update when edited>

---

## Overview

Self-built German learning platform (A1–C1), structured around the Studio 21 curriculum, aligned with Goethe-Institut/ÖSD/telc reference frameworks. Built while learning German for integration in Austria. Frontend-only React app with a lesson engine and a full test module (diagnostic + tiered practice bank + dashboard).

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

### Other scripts

```bash
npm run build      # production build
npm run preview    # test the build
npm run lint        # ESLint
```

No backend, no database, no Docker — fully static, frontend-only. State persists via `localStorage`.

## Full folder structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, MainLayout
│   ├── lesson/         # LessonShell, Block, themes — generic lesson component
│   └── test/            # ChronoBar, QuestionCard, ReadingPassage, ProgressDots
│       └── questions/  # QcmSingle, QcmMulti, FillInput, OrderingQuestion, MatchingQuestion
├── data/
│   ├── registry.js     # Levels + sublevels + lessons (status)
│   ├── lessons/          # Lesson pedagogical data (separated from components)
│   └── tests/            # TESTS (diagnostic) + TEST_BANK (practice) + TIERS
│       ├── a1.js, a2.js
│       ├── a1/            # Test bank by tier: prelim-1..3, avance-1..3, heroes-1..3
│       ├── scoring.js    # Scoring logic (6 types) + score bands
│       ├── randomize.js
│       └── SCHEMA.md    # Question/test object convention
├── hooks/
│   └── useTestTimer.js  # Refresh-resistant timer + auto-submit
├── lessons/              # Per-level lesson components (use LessonShell)
├── pages/
│   ├── Home, Niveaux, Methode, NotFound
│   ├── levels/           # LevelPage
│   ├── sublevels/        # SublevelPage, LessonRouter
│   └── tests/             # TestIntro, TestList, TestRun, TestResult, TestDashboard
├── services/
│   └── testService.js   # Async abstraction layer (mocked), ready for a future backend
└── stores/
    └── testStore.js      # Zustand: current test global state
```

## Full route map

```
/                                       Home
/niveaux                                Level list
/niveaux/:levelId                       Level detail (A1/A2/B1/…)
/niveaux/:levelId/:sublevelId           Sublevel (A1.1, A2.1, …)
/niveaux/:levelId/:sublevelId/:lessonId Lesson
/niveaux/:levelId/test                  Diagnostic test intro
/niveaux/:levelId/tests                 Practice test bank
/niveaux/:levelId/test/run              Test in progress (timer active)
/niveaux/:levelId/test/result           Detailed results
/niveaux/:levelId/dashboard             Student dashboard
/methode                                Teaching methodology
```

## Content inventory

- A1.1 (Studio 21, units 1–6): Im Café, Städte, Berufe, Wohnen, Termine, Essen
- A1.2 (Studio 21, units 7–12): Alltag, Berlin, Urlaub, Essen+Trinken, Kleidung, Gesundheit
- A1 total: 120 interactive exercises
- A2.1: Perfekt, Präteritum, subordinate clauses, Wechselpräpositionen, reflexives, comparative
- A2.2: declined adjectives, pronouns, verbs with prepositions, connectors, temporal prepositions, future tense & politeness forms
- A2 total: ~216 exercises
- B1 (planned): Plusquamperfekt, Genitiv, Konjunktiv II, Relativsätze, Passiv, advanced connectors

### A1 practice test bank detail

| Tier | Tests | Questions |
|---|---|---|
| Preliminary | 3 | 30 |
| Advanced | 3 | 36 |
| Heroes | 3 | 34 |

Diagnostic test: 40 questions, 30 minutes, per level.

## Data/content conventions

Question/test object schema documented in `src/data/tests/SCHEMA.md` — keep this updated whenever the question object shape changes, since `scoring.js` and all six question components depend on it.

## Known gaps / open items

- B1 content not yet started (roadmap only).
- No backend yet — `testService.js` is a mock async layer, deliberately structured so a real backend can be swapped in later without touching UI components.
- No automated test suite currently in place (unit/E2E) — worth adding if this becomes a long-term maintained product rather than a personal/portfolio project.

## License note

Pedagogical content (lessons, exercises, question bank) is proprietary — "all rights reserved" on the public repo. Only the code/architecture is meant to be showcased publicly, not the full content bank.
