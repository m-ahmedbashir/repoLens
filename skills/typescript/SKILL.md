---
name: typescript
description: TypeScript and Node.js guidance for the agent-server workspace, including tsconfig setup, module boundaries, and validation.
---

# TypeScript

Use this skill for `apps/agent-server` changes and any Node.js-facing code in RepoLens.

## Focus

- Keep the agent server strict and explicit.
- Prefer modern Node.js/TypeScript module patterns.
- Treat `tsconfig.json` and package scripts as part of the workspace contract.
- Validate with `tsc`, typecheck scripts, or the smallest command that covers the touched files.

## Notes

- Match the existing workspace style when adding imports, exports, or build settings.
- Keep runtime-specific globals and Node assumptions local to the app that needs them.
