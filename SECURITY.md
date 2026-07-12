# Security Policy

## Supported Versions

RepoLens is pre-1.0 and under active development. Security fixes are made against the latest `main` branch and the most recent tagged release (see [.release-tag](.release-tag)).

| Version       | Supported |
| ------------- | --------- |
| latest `main` | ✅        |
| older tags    | ❌        |

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Instead, report it privately by emailing [ahmedbashir2028@gmail.com](mailto:ahmedbashir2028@gmail.com) with:

- A description of the vulnerability and its potential impact
- Steps to reproduce, including any proof-of-concept code
- The affected component (`apps/agent-server`, `packages/core-ingester`, or `packages/db-schema`) and version/commit

You should expect an initial response within 5 business days. We'll work with you to understand and validate the issue, and to coordinate a fix and disclosure timeline before any public write-up.

## Data Handling Notes

RepoLens is designed around Bring-Your-Own-Database (BYODB) and Zero-Data Retention (ZDR) principles — see the [README](README.md#-security--gdpr-compliance). If a report involves data handling or telemetry rather than a code vulnerability, please still report it through the channel above.
