---
title: "Floresta Roadmap 2026: From Building Capabilities to Hardening the Node"
author: "Chris G."
date: "2026-08-07"
tags: ["roadmap", "announcement"]
image: "/images/blog/post3.png"
excerpt: "A look back at Floresta's Q2 2026 progress and what's next for Q3: hardening the node through testing, observability and developer experience"
---

# Floresta Roadmap 2026: From Building Capabilities to Hardening the Node

## Floresta Roadmap: What We Shipped in Q2, What We're Hardening in Q3

If you're new here: **Floresta** is a lightweight Bitcoin node that performs full consensus validation, providing a resource-efficient alternative to traditional full nodes, being able to run using only a fraction of the resources required by other implementations.

Floresta is written in Rust and designed as a set of separable components rather than one large binary. This allows applications to validate the Bitcoin chain independently, without the storage requirements of a conventional node, while depending only on the components they actually need.

If you already follow the project: this is the first post in our new quarterly roadmap. It looks back at what we shipped in Q2 and outlines our priorities for Q3.

The central theme is a shift in emphasis.

For most of Floresta's history, development has focused on adding new capabilities. Now, the priority is making those capabilities easier to trust, test, observe and maintain. That is the work required to turn a promising node implementation into infrastructure that applications can confidently depend on.

## What Floresta Is Built For

Floresta's value is not simply that it uses less storage. The more important question is what developers can build with it.

The project is divided into components with clearly defined responsibilities. One part handles consensus validation and maintains the small Utreexo commitment that stands in for the full set of unspent coins. Networking handles peer connections, synchronization and transaction relay. An emerging mempool component is being developed to handle unconfirmed transactions. RPC and Electrum interfaces let applications interact with Floresta using familiar interfaces.

These boundaries are intentional.

Applications can use Floresta's validation capabilities without embedding an entire node stack, while users who want to run the full node can interact with it through familiar interfaces. Preserving this modularity is a major consideration behind many of the architectural decisions on our roadmap.

## Q2 2026: Synchronization, Relay and Ecosystem Compatibility

Q2 focused on the parts that connect Floresta to the network and to the applications built on top of it.

**Floresta 0.9.0 shipped.** This closed a planned development cycle and is the baseline the Q3 hardening work builds on.

Synchronization became more predictable across different network and chain conditions. The goal was not simply to make syncing faster. It was to make Floresta behave consistently without weakening the validation guarantees that make running a fully-validating node valuable in the first place.

Architectural boundaries were sharpened. A major part of this work was the introduction of `floresta-domain`, which places core domain logic behind a clear boundary and separates it from infrastructure concerns such as networking and storage. This is how the separability described above is enforced in practice. The cleaner these internal lines are, the easier it becomes to depend on one part of Floresta without dragging in the rest.

Work on mempool also began alongside the new domain architecture. The mempool remains one of the most important areas of ongoing development. A mempool will allow Floresta to maintain and validate its own view of unconfirmed transactions and participate more fully in transaction relay. Q2 established the architectural boundaries for this work, which continues through Q3.

We also continued improving RPC compatibility. Many applications assume a Bitcoin node exposes familiar methods with familiar behavior. We kept closing that gap so developers can try Floresta without redesigning their workflows. The aim is for the behavior to match, not just the method names.

## Q3 2026: Testing, Observability and Developer Experience

Q3 is about making Floresta easy to trust, diagnose and maintain.

As the codebase grows, correctness cannot depend on scattered tests and maintainers remembering how every component interacts. We are concentrating this work in three areas.

### Testing

We are expanding tests that exercise complete workflows from start to finish, covering areas like synchronization, peer communication, chain updates and transaction processing.

We are also adopting a general rule: bug fixes should include a regression test whenever the behavior can be reproduced reliably, so the same problem cannot quietly come back in a later release.

Alongside broader coverage, we are making the tests easier to run and giving contributors better tools to reproduce specific network and chain conditions.

The payoff is practical. A contributor should be able to change one part with confidence that regressions elsewhere will be caught early, before they reach production.

### Observability

Production infrastructure needs to explain what it is doing.

We are auditing logging across the codebase to identify missing context, duplicated messages and unnecessary noise. We are also standardizing log levels and formats so that errors correspond to conditions requiring attention, warnings highlight unusual but recoverable situations, and debug output provides useful detail without overwhelming normal operation.

Critical paths, including synchronization, block validation and transaction processing, will receive enough instrumentation to make progress and failures easier to investigate.

This becomes especially important when Floresta is embedded inside another application. Clear and consistent logs allow developers to incorporate Floresta into their own monitoring instead of treating it as a black box.

### Developer Experience

Slow or flaky continuous integration delays feedback and makes changes harder to review.

We are working to make CI faster and more consistent, so that runs are dependable and failures are easier to understand.

We are also identifying repetitive maintenance work that can be safely automated, like routine checks and release preparation. The purpose of this automation is not to replace engineering judgment. It is to remove predictable manual work so maintainers can focus on design, review and correctness.

### Adaptive Priorities: SwiftSync and Compact Block Filters

Q2 also showed why we treat the roadmap as a direction rather than a rigid checklist. Work around SwiftSync and compact block filters gained importance during the quarter even though neither was originally planned as an explicit roadmap priority. Both became more relevant as development progressed and as we learned more about the synchronization and lightweight-client capabilities Floresta needs.

That work will continue in parallel with the main Q3 priorities. Testing, observability and developer experience remain the quarter's primary focus, but the roadmap deliberately leaves room to pursue work such as SwiftSync and compact block filters when they become important to the project.

This is part of how we expect the roadmap to work, establishing clear priorities without preventing us from responding to technical discoveries and the evolving needs of Floresta.

## A Roadmap That Evolves with Floresta and Bitcoin

This roadmap is a commitment to a direction and to specific near-term priorities, not to a fixed list of features and deadlines. Public roadmaps can easily become promises about work whose complexity is not yet fully understood. A quarterly planning cycle allows us to set concrete priorities while remaining responsive to what we learn along the way.

Future priorities may change based on technical discoveries, emerging security needs, available contributor capacity and the evolving needs of the wider Bitcoin ecosystem.

## Get Involved

Floresta is community-driven, and some of the most useful contributions right now are in the areas described above: **testing, observability and developer experience**.

You can follow the public roadmap in the GitHub repository, join the discussion on an existing issue, or open a new issue before beginning substantial work.

**And we go together.**

_Chris G._
