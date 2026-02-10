# Layout Plan

## Repository map
- `contracts/batch-registry`
- `contracts/coldchain-proof`
- `contracts/recall-manager`
- `apps/web`
- `docs`
- `configs`

## Application flows
- Manufacturer batch registration
- Distribution transfer verification
- Temperature checkpoint attestations
- Recall and quarantine execution flow

## Runtime layout (monorepo)

| Path | Responsibility |
| --- | --- |
| `contracts/*` | Soroban smart contracts — source of truth for rules |
| `apps/web` | Next.js — marketing, dashboards, contributor UX |
| `apps/backend` | Fastify — integrations, optional server-side signing gateway |

See also `docs/SITE_MAP.md` for the web route backlog.
