# AGENTS.md

This file provides guidance to AI coding agents when working in the RepoLens monorepo.

## Essential Commands

### Development

- `pnpm install` - Install Node.js dependencies at the repo root. Node.js 18+ and pnpm 10.x are expected.
- `pnpm dev` - Start available workspace development scripts in watch mode.
- `pnpm --filter @repolens/agent-server dev` - Run the TypeScript agent server locally.
- `python -m venv venv` - Create the Python virtual environment for `packages/core-ingester` when needed.
- `venv\Scripts\Activate.ps1` - Activate the Python virtual environment on Windows.
- `pip install langchain-text-splitters psycopg2-binary` - Install the core ingester Python dependencies.

### Building

- `pnpm build` - Build all available workspace packages and apps.
- `pnpm --filter @repolens/agent-server build` - Build the agent server TypeScript app.
- `pnpm --filter @repolens/db-schema generate` - Generate the Prisma client for the schema workspace.

### Code Quality

- `pnpm --filter @repolens/agent-server typecheck` - Run TypeScript type checking for the agent server.
- `pnpm --filter @repolens/db-schema validate` - Validate the Prisma schema.
- Prefer focused validation for the touched workspace before expanding scope.

### Testing

- `pnpm test` - Run workspace tests when package-level scripts exist.
- Add or run package-specific tests through the relevant workspace filter when they are introduced.

### Maintenance

- `pnpm add <package> -w` - Add a dependency at the monorepo root.
- `pnpm add <package> --filter <workspace>` - Add a dependency to a specific workspace.
- Use `workspace:*` for internal monorepo dependencies when packages start depending on each other.

## Architecture Overview

RepoLens is a monorepo for repository indexing, retrieval, and agent-assisted code inspection.

### Directory Structure

```text
apps/
  agent-server/    - TypeScript/Node runtime for the agent loop and tool orchestration

packages/
  core-ingester/   - Python processing pipeline for parsing, splitting, and vectorizing source files
  db-schema/       - Shared Prisma schema for PostgreSQL and pgvector-backed storage
```

### Key Technologies

- **Runtime**: Node.js 18+
- **Package Manager**: pnpm 10.x
- **Build Orchestration**: Turborepo
- **Language**: TypeScript for the agent server, Python for the ingester
- **Database**: PostgreSQL with Prisma and pgvector-oriented schema design
- **AI/Agent Layer**: Vercel AI SDK-style tool orchestration in `apps/agent-server`

## Code Style

- Keep edits minimal and consistent with the surrounding code.
- Use TypeScript strictness where enabled.
- Prefer small, explicit modules over broad cross-package coupling.
- Keep Python code compatible with the existing `src/` layout in `packages/core-ingester`.

### Commenting Guidelines

- Default to no comments. Well-named functions, types, and variables should carry the meaning.
- Only comment the **why**, never the **what**: a non-obvious constraint, a workaround for a specific upstream bug, a subtle invariant a reader could easily violate.
- Do not comment on task history ("fixed for issue #123", "added for the ingest flow") — that belongs in the commit message, not the source.
- Do not leave commented-out code. Delete it; git history keeps it recoverable.
- TypeScript (`apps/agent-server`, `packages/db-schema`): use `//` line comments; reserve TSDoc (`/** */`) for exported functions/types whose contract isn't obvious from the signature.
- Python (`packages/core-ingester`): use `#` line comments; reserve docstrings for public functions/classes whose behavior isn't obvious from the name and signature.
- Prisma schema (`packages/db-schema/schema.prisma`): comment only on fields or indexes whose purpose isn't clear from the name (e.g., why a column backs a pgvector index).

## Workspace Notes

- `pnpm-workspace.yaml` is the source of truth for pnpm workspace discovery.
- Prisma validation requires `DATABASE_URL` to be set in the environment.
- Do not add parser or vectorizer implementation logic until the workspace scaffolding is complete and validated.

## Local Skills

- `skills/README.md` lists the RepoLens-specific skills that are worth loading first.
- Always apply `software-engineer` as the baseline for any task.
- Add `typescript` for `apps/agent-server` or other TypeScript/Node files.
- Add `python` for `packages/core-ingester` or other Python files.
- Use `context-engineering` when choosing what to read or how much context to keep active.
- Use `caveman` when the task should stay terse, direct, and validation-focused.
