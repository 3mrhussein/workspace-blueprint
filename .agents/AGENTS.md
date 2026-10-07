# Autonomous Workspace Rules & Agent Hierarchy

## 1. Operating Philosophy
This repository is an autonomous multi-domain workspace overseen by a Human Chief Architect. 
AI agents operate hierarchically based on **Fractal Domain Decomposition**.

## 2. Invariant Contracts

### The Universal Script Contract
Every sub-package (apps or packages) MUST expose standard lifecycle scripts in `package.json`:
- `build`: Produces build artifacts
- `lint`: Static analysis and formatting
- `type-check`: Static typing via `tsc --noEmit`
- `test`: In-memory unit tests
- `test:integration`: Service / DB integration tests
- `test:e2e`: End-to-end / journey tests

### The Inversion-of-Control Artifact Contract
Never hardcode output paths into root CI workflows.
If `process.env.TEST_ARTIFACTS_DIR` is defined, test runners (Playwright, Cypress, Vitest, Jest) MUST write test evidence (screenshots, videos, reports) inside:
```
path.join(process.env.TEST_ARTIFACTS_DIR, '<package-name>')
```
When running locally without the variable, default cleanly to `<package>/artifacts/` or `<package>/test-results/`.

### Bounded Context & Barrel Seams
- Packages in `packages/domain-core` contain business domains.
- Each domain has a localized `DOMAIN.md` describing its context and invariants.
- Inter-domain communication MUST only occur through the domain's public `index.ts` barrel. Never import deep internal paths across domains.

## 3. Branching & Commit Conventions
- Branches: `<type>/<kebab-slug>` (e.g., `feat/auth-passkeys`, `fix/token-leak`).
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`).
