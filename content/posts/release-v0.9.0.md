---
title: "Floresta v0.9.0: Toward a More Complete, Reliable, and Developer-Ready Node"
author: "The Floresta Team"
date: "2026-04-02"
tags: ["release", "update", "announcement"]
image: "/images/blog/v0-9-0-release-art.png"
excerpt: "This release represents a significant step toward making Floresta a production-ready, embeddable Bitcoin client.
It focuses on improving correctness, reliability, and developer experience, while continuing our long-term effort toward
full compatibility with Bitcoin Core."
---

We’re excited to announce [Floresta v0.9.0](https://github.com/getfloresta/Floresta/releases/latest).

At a high level, this release introduces [BIP-0183-compatible](https://github.com/utreexo/biptreexo/blob/main/bip-0183.md) P2P networking, 
expands RPC coverage, improves sync performance, and strengthens the testing and validation infrastructure across the project.

### A More Efficient and Robust Networking Layer

Floresta v0.9.0 aligns its networking layer with the Utreexo messaging flow defined in BIP-0183, improving how UTXO inclusion proofs are 
exchanged across the network.

While earlier versions of Floresta already explored proof-driven synchronization, this release brings the implementation in line with
the finalized BIP design. In practice, this enables more efficient handling of UTXO proofs, with improved caching strategies that
reduce bandwidth usage and improve synchronization performance over time. Full cache integration is planned for the next release,
this release contains all the protocol-level changes required for it.

We’ve also improved peer selection by preferring historically faster peers, rather than selecting them randomly. Combined with
batched outbound connections, this leads to faster and more reliable initial block download.

Additionally, several fixes improve resilience against adversarial peers, including protections against memory exhaustion and rate-limit
bypass attacks. Together, these changes make Floresta more robust under real-world network conditions.

### Stronger Guarantees Through Testing and Validation

A major focus of this release is improving confidence in correctness.

Floresta now imports Bitcoin Core’s transaction validation tests directly, ensuring that its behavior remains aligned with the reference
implementation.

We also significantly expanded our RPC compatibility testing framework, running identical RPC calls against both Floresta and Bitcoin
Core and comparing results. This helps catch subtle behavioral mismatches early.

On top of that, the functional test framework has been improved to be faster, more configurable, and more reliable, including support
for parallel execution. This reduces feedback loops for contributors and makes it easier to safely evolve the codebase.

Fuzz testing has also been expanded to cover more components, including the chainstore and core data structures, improving
resilience against malformed inputs and hard-to-reproduce edge cases.

### Continued Progress Toward Bitcoin Core Compatibility

Floresta continues its effort to provide a Bitcoin Core-compatible RPC interface, making it easier to integrate into
existing tooling and workflows.

This release adds and improves several RPC endpoints, including rescanblockchain and gettxout, while expanding coverage and fixing
inconsistencies across the interface.

We also added JSON-RPC v1 compatibility, improving interoperability with older clients and infrastructure.

These changes bring Floresta closer to being a drop-in alternative in environments that already rely on Bitcoin Core RPC.

### Better Performance and Resource Efficiency

Several changes in this release improve performance across the system.

Peer selection based on response times helps accelerate synchronization. The new Utreexo messaging flow reduces bandwidth usage.
Internal optimizations, such as avoiding repeated txid computation during validation, reduce unnecessary work.

libbitcoinconsensus has been replaced by libbitcoinkernel for script validation. While libbitcoinconsensus was an unmaintained 
snapshot removed in Bitcoin Core v28.0, libbitcoinkernel is actively maintained, keeping Floresta's consensus logic in sync with
Bitcoin Core, and it also makes validation about 15× faster.

Together, these improvements contribute to a faster and more efficient node, particularly during IBD and validation-heavy workloads.

### Improved Developer Experience

Floresta v0.9.0 includes several improvements aimed at developers building on top of it.

We introduced a new RPC documentation system, with structured Markdown files that include explanations, examples, and detailed behavior
descriptions. These docs are integrated into CLI help, generated documentation, and future website rendering.

We also improved the Nix development environment, added useful just commands for common workflows, and introduced a guided installation
script for Debian-based systems.

The migration from log to tracing provides more flexibility for downstream applications, allowing better control over logging and
observability when embedding Floresta.

Additionally, we now enforce conventional commits and expanded CI checks, including documentation builds and typo detection, helping
maintain consistency and quality across contributions.

### Hardening the Node for Real-World Usage

This release includes a large number of fixes targeting stability, edge cases, and security.

We improved reindexing logic to avoid inconsistent states and infinite loops, removed potential panic paths in the RPC server and
Electrum integration, and fixed issues that could lead to excessive reconnection attempts.

We also addressed multiple peer-induced DoS vectors and improved error handling across the codebase.

In addition, validation logic now checks for integer overflows, preventing invalid blocks with inflationary outputs from being accepted.

These changes significantly improve the reliability of Floresta as a long-running node.

### Laying the Groundwork for What Comes Next

Beyond user-visible changes, this release includes important architectural work.

The mempool has been refactored into its own module, preparing the codebase for future transaction relay support. Header-chain logic
has been consolidated, and block processing has been centralized to reduce duplication and improve consistency.

We also continue to move toward a more modular and portable architecture, including efforts to support no_std environments and reduce
unnecessary dependencies.

### Looking Ahead

Floresta v0.9.0 is an important step toward our long-term vision: a lightweight, embeddable, and fully validating Bitcoin node that is
accessible across a wide range of environments.

Future improvementes include Swfit Sync support, which should improve IBD performance substatially, UTXO caching for reduced bandwidth
usage and full transaction relay support.

As always, we’re grateful to everyone contributing to the project, whether through code, review, testing, or feedback.

If you’d like to get involved, build on top of Floresta, or run it in your own environment, now is a great time to start.

