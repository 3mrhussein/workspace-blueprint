# ADR 0001: Universal Lifecycle Script Contract

## Context
In monorepos and multi-project workspaces, top-level CI workflows often become tightly coupled to individual packages by hardcoding framework-specific test and build commands.

## Decision
All packages in the workspace MUST implement a uniform set of standard lifecycle scripts:
- `build`: Production bundle generation.
- `lint`: Static analysis and formatting check.
- `type-check`: Static type analysis.
- `test`: In-memory fast unit tests.
- `test:integration`: Service integration tests.
- `test:e2e`: End-to-end / journey tests.

## Consequences
Root CI workflows only execute `turbo run <script>` and never contain app-specific commands. Adding a new app requires zero changes to the root CI workflow.
