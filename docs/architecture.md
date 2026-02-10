# Mediproof Architecture

## Overview
Three-layer architecture: Smart Contracts (Soroban) → Backend API (Fastify) → Frontend (Next.js).

## Contracts
- `batch-registry` — primary registry and state
- `coldchain-proof` — pooled resources management
- `recall-manager` — execution and settlement

## Data Flow
```
User → Frontend (Next.js) → Backend (Fastify) → Soroban RPC → Stellar Network
```
