---
title: "Floresta v0.10.0"
author: "The Floresta Team"
date: "2026-11-24"
tags: ["release", "update", "announcement"]
image: "/images/blog/v0-10-0-release.png"
excerpt: "This release adds SwiftSync support, strengthens consensus validation and expands compatibility with Bitcoin Core’s RPC interface. It also changes a few defaults that node operators should review before upgrading."
---

Floresta v0.10.0 is out!

This release adds SwiftSync support, strengthens consensus validation and expands compatibility with Bitcoin Core’s RPC interface. It also changes a few defaults that node operators should review before upgrading.

## Changes for node operators

First, here are the important changes for those already running Floresta. Please read this section before upgrading.

Starting with v0.10.0, JSON-RPC authentication is enabled by default. The RPC interface gives access to the node and its wallet, and leaving it open was not a reasonable default.

Local clients running under the same user can use cookie authentication without extra configuration. External clients will need credentials. Username and password authentication is supported, including configurations with multiple users. If you have scripts or applications that talk to Floresta over RPC from another user or machine, check that they are configured before you upgrade.

Floresta now writes logs to `debug.log` in the network-specific data directory by default. You can change the location with `--log-file`, or turn file logging off with `--no-log-file`.

We have also introduced options to disable individual services:

- `--disable-rpc`
- `--disable-electrum`
- `--disable-zmq` (when built with ZMQ support)

This is useful when Floresta is embedded in another application, or when you simply do not need a given service. Keep in mind that disabling Electrum also stops the watch-only wallet from receiving new blocks. If you enable it again later, you can use `rescan` to catch up.

## SwiftSync and Utreexo

[SwiftSync](https://gist.github.com/RubenSomsen/a61a37d14182ccd78760e477c78133cd) is a proposed method for speeding up Bitcoin's initial block download (IBD). The node starts from a hints file that tells it which outputs will still be unspent at a given block height. Outputs that are created and spent within that range do not need to be stored and looked up one by one. Instead, they are accounted for in an aggregate that must equal zero when synchronization reaches the end of the range. The hints do not need to be trusted, since incorrect hints cause validation to fail.

This fits well with Utreexo. A Utreexo node does not need to store the full UTXO set locally, but it still has to build its accumulator, and with SwiftSync only the outputs that survive need to be added to it. With v0.10.0, Floresta supports SwiftSync with Utreexo accumulator construction.

SwiftSync is used only when a suitable hints file is provided. Without one, the node follows the regular synchronization process, so nothing changes for operators who do not opt in.

We still have a lot to learn about what this combination offers in practice, in terms of synchronization time, storage and computational requirements, especially on modest hardware. Measurements from different machines would help us a lot here. But preliminary results show promising timings, with our current record standing at 19m 45s using a 5Gbps network.

We have also updated the assume-utreexo checkpoints for mainnet and signet. The new mainnet checkpoint is at block 976,679.

## Networking

- Support for connecting to onion addresses.
- Improvements to peer discovery and address handling.
- Changes to peer timeouts and handshakes.
- Revised block-request management during synchronization.

## Consensus validation

We spent a good part of this development cycle revisiting our consensus validation code.

This release adds BIP68 relative lock-time enforcement during block validation, checks for non-final transactions and duplicate transaction inputs, and enforcement of block-wide signature-operation limits.

On the header side, we worked on the required difficulty bits, testnet minimum-difficulty rules and block-version checks. Other changes address Utreexo proof handling and partial-chain validation.

An independent implementation has to get every one of these rules right, and a missing check is not always obvious until someone goes looking for it. Consensus validation remains the area where we most want more eyes on the code. If you are familiar with Bitcoin consensus rules, and especially if you are interested in independent implementations, reviews and test cases are very welcome.

## Bitcoin Core RPC compatibility

Our goal is that an application written against Bitcoin Core's RPC can be pointed at Floresta with as few changes as possible.

In this release, we updated our RPC models and integration tests for Bitcoin Core 31.0, including changes to `getblock` and `getdeploymentinfo`. Several other methods were implemented or improved, including `getnetworkinfo`, `getdifficulty`, `getaddrmaninfo` and `getconnectioncount`.

We are not at full compatibility yet. If you are building on top of Floresta and run into a missing method or a response that differs from Bitcoin Core, please open an issue.

## Wallet and Electrum

- Descriptor address derivation beyond the previous limit of 100.
- Fixed cached transaction ordering.
- Improved descriptor persistence.
- Fixed issues with processing new blocks while serving Electrum client requests.
- Corrected Electrum protocol-version reporting.
- Fixed an error path in `listunspent`.

## Codebase and testing

As discussed in our Q4 roadmap, we have started separating shared domain interfaces from their implementations through a new crate, `floresta-domain`. The goal is a codebase where each component can be understood and tested on its own, which matters more as the number of contributors grows.

This release also includes improvements to accumulator persistence and chain reorganization handling, along with more functional tests and fuzzing coverage.

We now provide multi-architecture Docker builds, and our minimum supported Rust version is 1.85.0.

## A few words before we go

One of the reasons we work on Floresta is that we want people to run Bitcoin full nodes on hardware they already own.

We would like to see more people trying Floresta on mobile devices, old computers and other resource-constrained environments. We are particularly interested in real-world experience with Utreexo and, now, SwiftSync. If you run Floresta in one of these setups, we would love to hear how it went, including the things that did not work.

Thanks to everyone who contributed to this release, through code, reviews, discussions or bug reports.

The full changelog is available here in the [release notes](https://github.com/getfloresta/Floresta/releases/tag/v0.10.0).

And we go together.
