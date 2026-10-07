# Seam Contract Specification: Cross-App Integration

## 1. Philosophy: Topological Context Stitching

When micro-frontends or distributed services interact without direct code dependencies (e.g. sharing browser cookies, localStorage, custom events, or message queues), neither application should directly depend on or understand the other's internal component tree.

Instead, the interaction is governed by a **Seam Contract**.

When an agent or developer is tasked with an integration bug, **they receive this Seam Contract + their local app**, eliminating context drowning while providing complete integration clarity.

---

## 2. Standard Seam Specification Template

```yaml
# SEAM-001: Storefront to Checkout Session Transition
name: storefront-checkout-session
version: 1.0.0

participants:
  producer:
    app: apps/storefront
    role: Authenticates user or provisions guest cart
  consumer:
    app: apps/checkout
    role: Reads active session and renders payment flow

medium:
  type: browser-cookie # Options: browser-cookie, local-storage, session-storage, custom-event, message-bus
  identifier: session_token

contract:
  schema:
    type: string
    format: jwt
    claims:
      sub: string        # User ID or Guest UUID
      role: string       # customer | guest | staff
      cartId: string     # Active cart reference
  attributes:
    domain: .findeg.com
    path: /
    sameSite: Lax
    secure: true
    httpOnly: true
    maxAgeSeconds: 86400 # 24 hours

invariants:
  - "Producer MUST write session_token before redirecting to consumer route."
  - "Consumer MUST NOT mutate session_token claims directly; mutations require auth service."
  - "If session_token is expired or malformed, Consumer MUST redirect to Producer login with return_to URL."
```

---

## 3. How Agents Consume This Seam

1. **Delegation**: When a task impacts the integration, the task router provides:
   - Primary target: The app being modified (e.g., `apps/storefront`).
   - Integration context: The relevant `SEAM.md` specification.
2. **Result**: The agent has exact knowledge of the medium, schema, and invariant expectations, without reading the consumer's thousands of lines of UI code.
