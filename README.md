# repoLens

repoLens is a monorepo for a code indexing and search workflow.

## Layout

- `apps/agent-server` - TypeScript runtime for the agent loop and tool orchestration.
- `packages/core-ingester` - Python pipeline for parsing, chunking, and vectorizing source files.
- `packages/db-schema` - Shared Prisma schema for PostgreSQL and pgvector-backed storage.

## Getting Started

1. Install Node.js dependencies at the repo root with your workspace manager of choice.
2. Set up a Python environment for `packages/core-ingester`.
3. Configure database and embedding provider environment variables before running the indexer or agent server.

## Next Steps

- Add concrete agent tools for database queries and full-text search.
- Wire the Python ingester into the shared database schema.
- Add package-specific scripts once the implementation is filled in.
