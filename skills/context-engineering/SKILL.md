---
name: context-engineering
description: Manage agent context intentionally by narrowing the active slice, using targeted reads, and choosing the cheapest discriminating validation.
---

# Context Engineering

Use this skill when deciding how to explore the repo, which files to read, or how to structure an agent task.

## Principles

- Start from the closest concrete anchor: a file, command, failing check, or nearby implementation.
- Read only enough to form one falsifiable local hypothesis.
- Prefer one nearby validation step over broad exploratory search.
- Keep the active context small and discard unrelated paths early.
- When a repo has multiple layers, move one hop at a time toward the code that actually controls the behavior.

## Agent Workflow

- Narrow first, then edit.
- After the first substantive edit, validate immediately.
- Use repo-specific docs and skills as the source of truth for local workflows.
