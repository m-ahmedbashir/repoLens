# RepoLens Skills

This repository keeps a small set of local agent skills for recurring workflows.

## Default Skill Stack

- Start with `software-engineer` for every task.
- Add `typescript` for TypeScript and Node.js files.
- Add `python` for Python files.
- Add `context-engineering` when the task is about context, tool use, or planning.
- Add `caveman` only when the user explicitly wants terse, low-noise operation.

## Available Skills

- [software-engineer](software-engineer/SKILL.md) - General engineering hygiene, validation, and change discipline.
- [typescript](typescript/SKILL.md) - TypeScript and Node.js work in `apps/agent-server`.
- [python](python/SKILL.md) - Python workspace work in `packages/core-ingester`.
- [context-engineering](context-engineering/SKILL.md) - Context control, tool usage, and agent orchestration.
- [caveman](caveman/SKILL.md) - Concise, low-noise operating mode for quick edits and validation.
