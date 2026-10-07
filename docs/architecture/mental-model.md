# Architecture Mental Model: Fractal Domain Decomposition

## 1. Core Principles
1. **Level-0 (Organization Umbrella)**: Does not couple to any single business domain. It defines the universal lifecycle scripts, CI pipeline, and agent router.
2. **Recursive Domain Nodes**: Business logic is divided into self-similar nodes. Any node can subdivide into deeper child nodes.
3. **Strict Barrels**: Inter-domain dependencies only interact through public `index.ts` contracts. Internal schemas, tables, and private helpers are encapsulated.

## 2. Invariants of a Domain Node
Every domain node contains:
- `DOMAIN.md`: Domain glossary, bounded context, and invariants.
- `index.ts`: The public contract surface.
- `domain/`: Pure domain types, entities, and value objects (no framework imports).
- `application/`: Service interfaces and use cases.
