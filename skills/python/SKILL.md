---
name: python
description: Python workspace guidance for the core ingester, including virtual environments, package installation, and src-layout discipline.
---

# Python

Use this skill for `packages/core-ingester` work.

## Focus

- Create and use a local virtual environment for the ingester when needed.
- Install only the libraries required by the current workflow.
- Keep the `src/` layout intact and avoid mixing packaging patterns.
- Validate with lightweight checks like syntax compilation or import-focused tests before adding behavior.

## Notes

- Prefer explicit interpreter paths on Windows when the active environment is ambiguous.
- Treat dependency installation as part of the workspace setup, not as implementation logic.
