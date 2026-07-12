---

## 🗺️ Project Roadmap

RepoLens is actively developed in modular phases to isolate data ingestion pipeline engineering from real-time authenticated agent execution tiers.

### 🟩 Phase 1: Core Ingestion Infrastructure
- [x] Establish Monorepo directory topology (`pnpm workspaces` + `Turborepo`).
- [x] Configure PostgreSQL database schema matching native `pgvector` parameters via Prisma.
- [ ] Implement Python `core-ingester` environment with isolated `venv` boundaries.
- [ ] Build syntax-aware language-specific text splitters (`Language.TS`) to parse classes/functions without context slicing.
- [ ] **[BYODB Core]** Configure Prisma connection parameters to support arbitrary dynamic target database connection strings.

### 🟨 Phase 2: Vectorization & Sync Pipeline
- [ ] Wire Python data extraction loops to process `.ts`/`.tsx` files while respecting `.gitignore` rules.
- [ ] Integrate free-tier cloud embedding generation hooks via Groq / Gemini APIs.
- [ ] Develop a raw SQL bulk-loading script (`psycopg2`) to optimize database inserts without application overhead.

### 🟧 Phase 3: Identity & Tool Integration (Auth & BYOK Tier)
- [ ] Construct the type-safe `apps/agent-server` utility using Node.js and TypeScript.
- [ ] **[Better Auth Integration]** Implement a type-safe authentication layer using `better-auth` combined with the Prisma database adapter to handle secure session management and developer identity.
- [ ] **[BYOK Implementation]** Engineer middleware to accept dynamic, runtime-supplied model API keys (Groq/Gemini) tied to the authenticated user's profile context instead of relying on fixed system environment variables.
- [ ] Create a custom vector-distance similarity matching tool using Prisma `$queryRaw`.
- [ ] Build a complementary lexical exact-match `grep` tool to quickly map exact function definitions and imports.

### 🟥 Phase 4: Cognitive Execution Loop
- [ ] Orchestrate multi-step tool-calling loops utilizing the **Vercel AI SDK** (`generateText` / `maxSteps`).
- [ ] Inject structural prompt engineering constraints forcing a **Plan-First** layout check before file modification.
- [ ] Implement token compaction routines to clean historic conversation buffers safely.

### 🔒 Phase 5: Hardening & Enterprise Compliance
- [ ] Deactivate default logging telemetry hooks within the Vercel AI SDK to prevent code context leaks.
- [ ] Enforce strict Zero-Data Retention (ZDR) infrastructure patterns across cloud inference nodes.
- [ ] Populate agent configurations (`.cursorrules`, `.github/copilot-instructions.md`) to finalize the repository setup.