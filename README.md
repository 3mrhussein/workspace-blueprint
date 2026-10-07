# Workspace Blueprint

> **The Autonomous Agentic Enterprise Starter**: A domain-agnostic, contract-driven monorepo template engineered for autonomous multi-agent hierarchies and single-architect operations.

## Architecture Highlights

1. **Fractal Domain Decomposition**: Business domains decompose recursively into self-similar bounded contexts.
2. **Universal Lifecycle Contract**: Every package exposes identical verbs (`build`, `lint`, `type-check`, `test`, `test:integration`, `test:e2e`).
3. **Inversion of Control for Test Artifacts**: CI dictates `TEST_ARTIFACTS_DIR`; packages write evidence without CI needing internal path knowledge.
4. **Machine-Readable Agent Brain**: `.agents/AGENTS.md` and `.agents/router.json` guide autonomous agents directly to the domain that owns a task.

## Quickstart

```bash
# Install workspace dependencies
pnpm install

# Run static verification
pnpm build
pnpm type-check
pnpm lint

# Run universal test contracts
pnpm test
pnpm test:e2e
```

## Creating a New Project From This Template

```bash
gh repo create my-project --template 3mrhussein/workspace-blueprint
```
