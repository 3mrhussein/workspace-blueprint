# Identity Domain Blueprint

## Bounded Context
Responsible for user identity, authentication credentials, permissions, and session authorization.

## Invariants
1. Pure TypeScript: Zero framework dependencies (no Next.js, Express, etc.).
2. Passwords and credentials must never leave the domain boundary in plain text.
3. Mutations must be verified through the application service interface.
