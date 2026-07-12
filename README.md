# 🔍 RepoLens

RepoLens is an industrial-grade, open-source, hybrid **Python + TypeScript** monorepo designed for high-fidelity codebase indexing, structural parsing, and agentic semantic search. 

Instead of passing massive directories blindly into context windows, RepoLens acts as a localized developer intelligence tool—processing codebases through syntax-aware splitting, storing data across user-isolated vector instances, and managing multi-step reasoning tool loops via the Vercel AI SDK.

Release notes and versioning details live in [.release-notes.md](.release-notes.md), [.release-version](.release-version), and [.release-tag](.release-tag), and the project uses semantic versioning for public releases.

---

## 🏗️ System Architecture

[ TARGET SOURCE CODE ]
                                │
                                ▼
            ┌───────────────────────────────────────┐
            │     1. Python Ingestion Pipeline      │ (Language-aware AST parsing)
            └───────────────────┬───────────────────┘
                                │
                                ▼
            ┌───────────────────────────────────────┐
            │     2. Prisma / PostgreSQL (pgvector)  │ (Unified Hybrid Storage)
            └───────────────────┬───────────────────┘
                                │
                                ▼
            ┌───────────────────────────────────────┐
            │  3. TypeScript Agent (Vercel AI SDK)  │ (Autonomous Tool Loop)
            └───────────────────────────────────────┘

[ TARGET SOURCE CODE ]
                                │
                                ▼
            ┌───────────────────────────────────────┐
            │     1. Python Ingestion Pipeline      │ (Language-aware AST parsing)
            └───────────────────┬───────────────────┘
                                │
                                ▼
            ┌───────────────────────────────────────┐
            │     2. Prisma / PostgreSQL (pgvector)  │ (Unified Hybrid Storage)
            └───────────────────┬───────────────────┘
                                │
                                ▼
            ┌───────────────────────────────────────┐
            │  3. TypeScript Agent (Vercel AI SDK)  │ (Autonomous Tool Loop)
            └───────────────────────────────────────┘

---

## 📂 Repository Layout

RepoLens utilizes a highly decoupled Monorepo topology to separate high-compute syntax-parsing layers from active user-facing streaming runtimes:

*   **`apps/agent-server`**: Type-safe Node.js environment orchestrating the **Vercel AI SDK**. Manages real-time LLM execution, recursive tool loops, and client streaming boundaries.
*   **`packages/core-ingester`**: High-performance Python module implementing Abstract Syntax Tree (AST) parsing via language-aware splitters to extract functions and classes without breaking code semantics.
*   **`packages/db-schema`**: Centralized database definition layer using **Prisma ORM** pre-configured for PostgreSQL and native `pgvector` indexing hooks.

---

## 🔒 Security & GDPR Compliance

RepoLens is strictly engineered around enterprise data privacy and strict EU compliance regulations:
*   **Bring-Your-Own-Database (BYODB):** Data isolation is 100% user-controlled. No multi-tenant cloud storage is utilized; connection parameters point exclusively to your private storage infrastructure.
*   **Zero-Data Retention (ZDR):** System pipelines prioritize data pipelines configured to target ephemeral cloud-processing models (e.g., Groq) where payloads are held exclusively in-memory and deleted immediately post-execution.
*   **Telemetry Opt-Out:** OpenTelemetry tracking channels within the Vercel AI SDK are explicitly disabled to guarantee structural codebase snippets never leak to telemetry mirrors.

---

## 🚀 Getting Started

### 1. Prerequisites & Node Installation
Initialize the workspace tracking system and install dependencies from the monorepo root:
```bash
# Core workspace dependency initialization
pnpm install
```

### 2. Configure Python Processing Layer
Navigate to the ingester module, instantiate an isolated virtual runtime environment, and load the text parsing packages:

```bash
cd packages/core-ingester
python -m venv venv

# Activate based on your local environment setup:
source venv/bin/activate  # macOS / Linux
.\venv\Scripts\activate   # Windows

pip install -r requirements.txt
```

### 3. Environment Architecture Setup
Create a `.env` file mapping out connection strings for your localized or remote infrastructure layers:

```env
# Database Core Configuration
DATABASE_URL="postgresql://<user>:<password>@<host>:5432/<db>?sslmode=require"

# Inference Providers Configuration
GROQ_API_KEY="gsk_..."
```

## 🤖 Agentic Multi-Entry Compatibility
RepoLens includes dedicated semantic mapping layers out of the box, allowing modern IDE agents and autonomous software engineers to ingest local repository rules instantly without execution drift:

- **`AGENTS.md` / `AGENT.md`**: Canonical configuration matrix definitions.
- **`CLAUDE.md`**: Direct integration path for Claude Code workflows.
- **`.github/copilot-instructions.md`**: Global workspace prompt context mapping for GitHub Copilot.
- **`.cursor/rules/repolens.mdc`**: Target automation rules for structural Cursor code enforcement.
- **`skills/README.md`**: Directory tracking functional engineering task configurations.

## 📦 Release Notes & Versioning

RepoLens follows semantic versioning for public releases: `MAJOR.MINOR.PATCH`.

- Breaking changes increment `MAJOR`.
- New backward-compatible features increment `MINOR`.
- Backward-compatible fixes increment `PATCH`.

Current and historical release notes are tracked in [.release-notes.md](.release-notes.md).

## 📜 License

RepoLens is licensed under the [Apache License 2.0](LICENSE).

