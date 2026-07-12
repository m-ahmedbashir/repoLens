# Contributing to RepoLens

Thanks for your interest in improving RepoLens. This guide covers how to set up the project, the conventions we follow, and how to submit a change.

## Prerequisites

- Node.js 18+
- pnpm 10.x
- Python 3.10+ (for `packages/core-ingester`)
- A PostgreSQL instance with the `pgvector` extension (for anything touching `packages/db-schema`)

## Getting Set Up

```bash
# Install Node.js workspace dependencies from the repo root
pnpm install

# Set up the Python ingester
cd packages/core-ingester
python -m venv venv
.\venv\Scripts\activate   # Windows
source venv/bin/activate  # macOS / Linux
pip install -r requirements.txt
```

Copy `.env.example` (if present) or create a `.env` at the repo root with `DATABASE_URL` and any provider keys you need — see [README.md](README.md#3-environment-architecture-setup). Never commit `.env` files; they're already covered by `.gitignore`.

## Running Things

- `pnpm dev` — start workspace dev scripts in watch mode
- `pnpm --filter @repolens/agent-server dev` — run the TypeScript agent server locally
- `pnpm build` — build all workspace packages and apps
- `pnpm --filter @repolens/agent-server typecheck` — type-check the agent server
- `pnpm --filter @repolens/db-schema validate` — validate the Prisma schema (`DATABASE_URL` required)
- `pnpm test` — run workspace tests where they exist

See [AGENTS.md](AGENTS.md) for the full command reference and architecture notes.

## Making a Change

1. Keep changes focused and minimal — prefer the smallest diff that solves the problem.
2. Validate the workspace you touched (typecheck/build/test) before expanding scope.
3. Follow the existing code style; see [AGENTS.md § Code Style](AGENTS.md#code-style) and the [Commenting Guidelines](AGENTS.md#commenting-guidelines) — default to no comments, and when you do add one, explain *why*, not *what*.
4. Do not introduce parser or vectorizer logic in `packages/core-ingester` ahead of scaffolding decisions already made in that workspace — check `AGENTS.md` before adding new implementation surface there.

## Commit Messages

Write clear, descriptive commit messages that explain *why* a change was made, not just what changed. There's no enforced commit format yet — just keep messages specific enough that `git log` is useful on its own.

## Pull Requests

- Reference any related issue.
- Describe what changed and why, and how you validated it (commands run, output).
- Keep the PR scoped to one logical change; split unrelated fixes into separate PRs.

## Reporting Issues

Open a GitHub issue with steps to reproduce, expected vs. actual behavior, and relevant environment details (OS, Node/Python/pnpm versions).

## License

By contributing, you agree that your contributions will be licensed under the [Apache License 2.0](LICENSE).
