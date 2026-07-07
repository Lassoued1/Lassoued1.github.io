# FabriQ

**Natural-language analytics agent for industrial SMEs.** Ask production questions in plain English (or French/German) and get validated, transparent SQL answers — no notebook, no manual query writing, no black-box guessing.

> **Portfolio Notice**
> This repository is a demonstrative, standalone build shared for portfolio purposes. It showcases architecture, technical decisions, and code quality. Any sample data included is synthetic.

---

## What it does

Industrial teams sit on production, machine, and operations data they can't easily query themselves — every question becomes a ticket to a data/BI person. FabriQ closes that gap: a plant manager types *"what was our scrap rate on line 3 last week?"* and gets back a real, validated SQL query, executed read-only, with a plain-language answer.

The core design constraint: **never let a language model write and silently execute arbitrary SQL against production data.** Every generated query goes through deterministic templates and strict validation before it touches the database.

## Architecture

```
┌─────────────┐      ┌──────────────┐      ┌─────────────────┐
│   Frontend   │─────▶│   Backend     │─────▶│   PostgreSQL     │
│ React 19 +   │ REST │  FastAPI      │ RO   │  (read-only role)│
│ Vite + TS    │◀─────│  + LangGraph  │◀─────│                  │
└─────────────┘      └──────┬───────┘      └─────────────────┘
                             │
                    ┌────────▼─────────┐
                    │  Query Pipeline    │
                    │  1. Intent parse   │
                    │  2. Template match │
                    │  3. SQL validation │
                    │  4. RO execution   │
                    └────────────────────┘
```

- **Frontend** — React 19, Vite, TypeScript. Talks to the backend over a typed REST API.
- **Backend** — Python, FastAPI, orchestrated with **LangGraph** for the multi-step reasoning flow (intent recognition → template selection → validation → execution → response formatting).
- **Database** — PostgreSQL, accessed through a **read-only application role** — the app is structurally incapable of writing to production data. SQLite is used as a local fallback for development and tests.
- **Observability** — Prometheus + Grafana included in the Docker Compose stack for query latency, error rates, and usage metrics.

## Why these choices

- **LangGraph over a single LLM call** — the query pipeline needs distinct, auditable steps (intent → template → validation → execution), not one opaque generation. LangGraph makes each step inspectable and testable in isolation.
- **Deterministic templates + validation, not free-form SQL generation** — the model's job is to select and parameterize a known-safe query pattern, not to invent SQL from scratch. This is what makes the accuracy measurable and the failure modes bounded.
- **Read-only DB role at the infrastructure level** — safety by construction rather than by prompt instruction. Even a successful prompt injection can't write to the database, because the role doesn't have write permissions.
- **FastAPI + typed React** — fast iteration on the API surface with automatic OpenAPI docs, paired with end-to-end type safety on the frontend.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, TypeScript |
| Backend | Python, FastAPI |
| Orchestration | LangGraph |
| Database | PostgreSQL (read-only role), SQLite (local dev/test fallback) |
| Observability | Prometheus, Grafana |
| Containerization | Docker Compose (5 services: postgres, backend, frontend/nginx, prometheus, grafana) |
| CI | GitHub Actions |

## Getting started

```bash
git clone https://github.com/Lassoued1/FabriQ.git
cd FabriQ
docker compose up
```

The frontend will be available on the port configured in `docker-compose.yml`, proxied through nginx; the backend exposes its OpenAPI docs at `/docs`.

## Testing

FabriQ is tested at every layer:

- **Backend** — 78 tests (pytest), covering 135 sub-cases across the query pipeline
- **Frontend** — 9 unit tests (Vitest)
- **End-to-end** — 10 tests (Playwright)
- **Evaluation suites** — 3 dedicated suites: golden-query accuracy, paraphrase robustness, and German-language queries
- **CI** — all suites run on GitHub Actions on every push

## License

Apache License 2.0
