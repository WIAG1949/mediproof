# MediProof: Decentralized Clinical Data Integrity

MediProof is a privacy-first protocol built on the Stellar Soroban network, engineered for the secure management of medical records and professional healthcare credentials. It provides a "source of truth" for clinical data without compromising patient confidentiality or violating data sovereignty.

## Architectural Integrity

MediProof does not store patient data on-chain. Instead, it manages **Integrity Hashes** and **Access Control Lists (ACLs)** that govern the off-chain encrypted medical records.

### Core Modules

| Module | Description | Repository Path |
| :--- | :--- | :--- |
| **Record Registry** | Immutable indexing of encrypted medical documents. | `contracts/record-registry` |
| **Consent Manager** | Granular, patient-controlled access permissions. | `contracts/consent-manager` |
| **Provider Verify** | On-chain verification of healthcare professional licenses. | `contracts/provider-verify` |

## Security & Privacy Model

- **Zero-Knowledge Readiness**: The protocol is designed to support future ZK-proof integrations for private credential verification.
- **Data Sovereignty**: Patients hold the primary authorization keys to their health data.
- **Emergency Protocols**: Includes specialized "Break-Glass" functions for immediate access by verified emergency responders.

## Technical Implementation

### System Prerequisites
- Rust 1.78+
- Soroban CLI
- Node.js 20+

### Build Process
```bash
# Build smart contracts
cargo build --target wasm32-unknown-unknown --release

# Initialize local environment
pnpm install
```

### Repository Structure
```text
.
├── apps/
│   ├── backend/       # Resilient API with HL7 FHIR compatibility
│   └── web/           # Patient & Provider secure portal
├── contracts/
│   ├── record-registry/    # Record integrity logic
│   ├── consent-manager/    # Access control engine
│   └── provider-verify/    # Professional identity verification
└── docs/              # Technical specifications and API docs
```

## Compliance Note
MediProof provides the technical infrastructure required for HIPAA/GDPR-aligned implementations. It ensures data auditability and integrity at the protocol layer while leaving policy enforcement to the application layer.

---

*Secure, sovereign, and verifiable healthcare data.*
