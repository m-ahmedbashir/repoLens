# Copilot Instructions

- Keep changes minimal and aligned with the existing monorepo layout.
- Prefer workspace-local scripts and package boundaries over cross-package shortcuts.
- Keep the TypeScript app, Prisma schema, and Python ingester decoupled.
- Do not introduce new dependencies unless they are needed by the current task.
- Keep generated or build output out of source control.
- Update README or package metadata when the structure changes.
