# ADR 0002: Inversion-of-Control Test Artifact Contract

## Context
When test runners (Cypress, Playwright, Vitest) output failure evidence (screenshots, videos, reports), CI workflows historically hardcoded internal tool paths (e.g. `frontend/storefront/cypress/screenshots`), leaking tool internals to the orchestrator.

## Decision
CI provides the output destination via the `TEST_ARTIFACTS_DIR` environment variable:
```bash
TEST_ARTIFACTS_DIR=${RUNNER_TEMP}/artifacts
```
Every test runner config reads this environment variable:
- If set, it writes evidence to `path.join(process.env.TEST_ARTIFACTS_DIR, '<package-name>')`.
- If unset (local dev), it writes cleanly to `<package>/artifacts/`.

## Consequences
Root CI workflows upload `${{ runner.temp }}/artifacts` without needing to know any package paths or test tool names.
