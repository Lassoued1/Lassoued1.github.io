# FabriQ — Internal Operations Notes

*Private reference. Do not publish to the public repository. Keep this file in a private repo or local vault.*

---

## Local development

### 1. PostgreSQL

```bash
docker compose up -d postgres
```

Exposes `localhost:5432`, auto-creates the read-only application role `fabriq_readonly`.

### 2. Backend

```bash
cd backend
python -m pip install -r requirements.txt
$env:FABRIQ_DATABASE_URL="postgresql://fabriq_readonly:fabriq_readonly@127.0.0.1:5432/fabriq"
python -m uvicorn app.main:app --reload --port 8000
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

### Docker Compose — full startup

```bash
cp .env.example .env
python scripts/init_env.py   # generates JWT secret and bcrypt users
docker compose up -d
```

Services: frontend `http://localhost:80`, API `http://localhost:8000`, Prometheus `http://localhost:9090`, Grafana `http://localhost:3000`.

## Optional local LLM (Ollama)

```bash
$env:FABRIQ_LLM_PROVIDER="ollama"
$env:FABRIQ_OLLAMA_URL="http://127.0.0.1:11434"
$env:FABRIQ_OLLAMA_MODEL="llama3.1"
```

LLM status exposed at `/api/health` (non-blocking), also visible in the UI.

## Full API reference

| Group | Endpoints |
| --- | --- |
| Health | `GET /api/health`, `GET /metrics` |
| Auth | `POST /api/auth/login`, `POST /api/auth/refresh`, `GET /api/auth/me` |
| Analysis | `POST /api/ask` |
| Catalog | `GET /api/catalog`, `GET /api/examples` |
| Audit | `GET /api/audit/recent`, `GET /api/audit/export`, `GET /api/audit/export.xlsx` |
| Alerts | `GET/POST /api/alerts`, `DELETE /api/alerts/{id}`, `GET /api/alerts/events`, `GET /api/alerts/events/export` |
| Admin | `GET /api/admin/users`, `POST /api/admin/users/{email}/disable`, `POST /api/admin/users/{email}/enable` |

Interactive docs: `http://localhost:8000/docs` (OpenAPI).

## SQL guardrail — implementation details

- Dedicated PostgreSQL role `fabriq_readonly` (DB-level enforcement).
- Application-level validation: SELECT-only, table allowlist, blocked keyword list, forced LIMIT, single-statement enforcement.
- Formal AST parser + EXPLAIN-based validation: planned, not yet implemented.

## Evaluation harness

```bash
cd backend
python scripts/evaluate.py --database=env
python scripts/evaluate.py --database=env --suite=paraphrases
python scripts/evaluate.py --database=env --suite=german
```

Reports written to `backend/reports/`. Full methodology in `docs/EVALUATION.md`.

- Golden harness: 10/10
- Paraphrase suite: 10/10

## Tests

```bash
cd backend
python -m pytest tests -q          # 60 tests

cd frontend
npm run build && npm run lint
npx playwright test                # E2E
```

- 60 backend tests (pytest)
- 9 frontend unit tests (Vitest)
- Playwright E2E: auth, analysis, observability
- Load testing: Locust

## Demo script

See `docs/DEMO.md` for the full walkthrough. Reference questions:

- `Quels fournisseurs ont ete le plus souvent en retard ?`
- `Montre le chiffre d'affaires mensuel par categorie.`
- `Quels SKU risquent une rupture dans les 30 prochains jours ?`
- `Welche Lieferanten waren am häufigsten verspätet?`
- `Quels produits ont vu leur marge baisser le trimestre dernier ?`

## Open items / known gaps

- No external SSO/OAuth2 — users declared via environment variables.
- English question support not yet implemented; interface remains French.
- No PDF ingestion or document RAG, no fine-tuning.
- SQL guardrail is regex + allowlist, not a formal AST parser yet.
