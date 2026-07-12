---
name: software-engineer
description: General engineering principles for editing code, validating changes, and keeping work scoped to the active repository slice.
---

# Software Engineer

Use this skill when making code changes, reviewing behavior, or deciding validation for RepoLens work.

## Core Rules

- Prefer the smallest change that fixes the actual problem.
- Validate the touched slice before expanding scope.
- Do not rewrite unrelated code or clean up unrelated technical debt.
- Preserve existing repo conventions unless the task explicitly requires a change.
- Keep explanations short and tied to the files or commands that changed.

## Validation

- Run the cheapest focused check that can disprove the current hypothesis.
- Prefer workspace-local checks over broad repo-wide commands.
- If a tool reports an environment issue, fix the environment before changing code.
