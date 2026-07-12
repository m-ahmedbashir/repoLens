# CLAUDE.md

RepoLens is a pnpm + Turborepo monorepo with a TypeScript agent server, a Python ingester, and a Prisma schema package.

## Read First

- [AGENTS.md](AGENTS.md) for the canonical repo rules.
- [skills/README.md](skills/README.md) for the local skill pack.
- [skills/software-engineer/SKILL.md](skills/software-engineer/SKILL.md) for the baseline engineering rules.
- [skills/typescript/SKILL.md](skills/typescript/SKILL.md) for TypeScript and Node work.
- [skills/python/SKILL.md](skills/python/SKILL.md) for Python workspace work.
- [skills/caveman/SKILL.md](skills/caveman/SKILL.md) for terse, low-noise operation when requested.

## Working Style

- Keep changes focused and minimal.
- Validate the touched slice before expanding scope.
- Always use `software-engineer` as the baseline skill.
- Add `typescript` or `python` automatically based on the files being touched.
- Use the narrowest additional repo-local skill that matches the task.
