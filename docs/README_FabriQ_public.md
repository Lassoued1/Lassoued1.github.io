# FabriQ

[![CI](https://github.com/Lassoued1/FabriQ/actions/workflows/ci.yml/badge.svg)](https://github.com/Lassoued1/FabriQ/actions/workflows/ci.yml)

> **Portfolio Notice**
> This repository is a demonstrative, standalone build shared for portfolio purposes. It showcases architecture, technical decisions, and code quality. The database is an industrial demo dataset, not a client database.

FabriQ is an analytics assistant for industrial SMEs: ask a question in natural language, get a safe SQL query, executed read-only, then a readable answer with table, chart, visible SQL, and an operational explanation.

**Current version: v0.11.0** — questions in French and German driving parameterized queries, an AST-parser SQL guardrail, multi-user, multi-tenant, LangGraph orchestration, scheduled alerts, Prometheus/Grafana observability, CI and E2E tests.

![FabriQ demo](docs/assets/fabriq-v0.11.0-demo.gif)

## Problem

In an industrial SME, production, stock, sales, supplier, returns, and logistics data often stays locked inside relational databases. Business users need fast answers without writing SQL and without risking any modification to the database.

FabriQ turns a business question into a validated SQL query, executes that query read-only, then returns a result that is understandable and auditable.

## Design principles

- **The LLM proposes, the code decides.** The optional local LLM (Ollama) only acts as an intent router, as a fallback to the deterministic router. It never generates SQL directly.
- **No writes to the database, ever.** Dedicated read-only PostgreSQL role, backed by an application-level validation layer.
- **Everything is transparent.** The SQL, the orchestration trace, and the business explanation are visible in every response.
- **Accuracy is measured by execution result**, not by SQL text similarity — validated against a golden test harness and a paraphrase robustness suite.

## Feature overview

- **Analytics core** — natural-language questions in French and German, a hybrid deterministic/LLM-assisted router, a semantic layer covering 10 families of industrial questions (margin, stockouts, supplier delays, production, revenue, inventory, logistics, returns, customers, anomalies), and business-readable answers with tables and charts.
- **Multi-user & security** — JWT authentication, multi-tenant data isolation, role-based access (admin/user), rate limiting.
- **Alerts & observability** — scheduled alert rules with webhook/Slack/email notifications, a filterable audit log with CSV/Excel export, Prometheus metrics, and a provisioned Grafana dashboard.
- **Quality** — a layered test suite (backend, frontend, end-to-end), load testing, and a dedicated evaluation harness measured by execution correctness rather than text similarity, all running in CI on every push.

## Architecture

Full schema and technical decisions are detailed in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

```text
User
  -> React/Vite frontend (JWT auth, chat, charts, admin/alerts/audit panels)
  -> FastAPI (rate limiting, multi-tenant)
  -> LangGraph graph (routing -> SQL template -> validation -> execution -> response)
  -> SQL guard + read-only PostgreSQL role
  -> Response + chart + orchestration trace + audit log
  -> Prometheus / Grafana
```

## Quick start (Docker Compose)

```bash
git clone https://github.com/Lassoued1/FabriQ.git
cd FabriQ
cp .env.example .env
docker compose up -d
```

The frontend, API, and observability stack (Prometheus/Grafana) come up together. See `/docs` on the running API for interactive OpenAPI documentation.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, TypeScript |
| Backend | Python, FastAPI |
| Orchestration | LangGraph |
| Database | PostgreSQL (read-only application role) |
| Observability | Prometheus, Grafana |
| Containerization | Docker Compose |
| CI | GitHub Actions (backend, frontend, Docker smoke test, E2E) |

## Explicit limitations

- Questions supported in French and German (English still to come); the interface remains in French.
- No PDF ingestion or document RAG, no fine-tuning.
- The database is an industrial demo dataset, not a client database.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for planned improvements, and [CHANGELOG.md](CHANGELOG.md) for version history.

---

*Detailed operational documentation (full API reference, environment configuration, evaluation tooling) is maintained privately. Feel free to reach out if you'd like to discuss the implementation in more depth.*
