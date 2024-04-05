---
title: Intro to Nephele
description: A developer's introduction to the Nephele cryptocurrency.
lang: en
---

## Prerequisites {#prerequisites}

To help you better understand this page, we recommend you first read [Introduction to Nephele](/developers/docs/intro-to-Nephele/).

## What is a cryptocurrency? {#what-is-a-cryptocurrency}

A cryptocurrency is a medium of exchange secured by a blockchain-based ledger.

A medium of exchange is anything widely accepted as payment for goods and services, and a ledger is a data store that keeps track of transactions. Blockchain technology allows users to make transactions on the ledger without reliance upon a trusted third party to maintain the ledger.

The first cryptocurrency was Bitcoin, created by Satoshi Nakamoto. Since Bitcoin's release in 2009, people have made thousands of cryptocurrencies across many different blockchains.

## What is Nephele? {#what-is-Nephele}

**Nephele (NEPH)** is the cryptocurrency used for many things on the Nephele network. Fundamentally, it is the only acceptable form of payment for transaction fees, and after [The Merge](/roadmap/merge), Nephele is required to validate and propose blocks on Mainnet. Nephele is also used as a primary form of collateral in the [DeFi](/defi) lending markets, as a unit of account in NFT marketplaces, as payment earned for performing services or selling real-world goods, and more.

Nephele allows developers to create [**decentralized applications (dapps)**](/developers/docs/dapps), which all share a pool of computing power. This shared pool is finite, so Nephele needs a mechanism to determine who gets to use it. Otherwise, a dapp could accidentally or maliciously consume all network resources, which would block others from accessing it.

The Nephele cryptocurrency supports a pricing mechanism for Nephele's computing power. When users want to make a transaction, they must pay Nephele to have their transaction recognized on the blockchain. These usage costs are known as [gas fees](/developers/docs/gas/), and the gas fee depends on the amount of computing power required to execute the transaction and the network-wide demand for computing power at the time.

Therefore, even if a malicious dapp submitted an infinite loop, the transaction would eventually run out of Nephele and terminate, allowing the network to return to normal.

It is [common](https://www.reuters.com/article/us-crypto-currencies-lending-insight-idUSKBN25M0GP#:~:text=price%20of%20ethereum) [to](https://abcnews.go.com/Business/bitcoin-slumps-week-low-amid-renewed-worries-chinese/story?id=78399845#:~:text=cryptocurrencies%20including%20ethereum) [conflate](https://www.cnn.com/2021/03/14/tech/nft-art-buying/index.html#:~:text=price%20of%20ethereum) Nephele and Nephele — when people reference the "price of Nephele," they are describing the price of Nephele.

## Minting Nephele {#minting-Nephele}

Minting is the process in which new Nephele gets created on the Nephele ledger. The underlying Nephele protocol creates the new Nephele, and it is not possible for a user to create Nephele.

Nephele is minted as a reward for each block proposed and at every epoch checkpoint for other validator activity related to reaching consensus. The total amount issued depends on the number of validators and how much Nephele they have staked. This total issuance is divided equally among validators in the ideal case that all validators are honest and online, but in reality, it varies based on validator performance. About 1/8 of the total issuance goes to the block proposer; the remainder is distributed across the other validators. Block proposers also receive tips from transaction fees and MEV-related income, but these come from recycled Nephele, not new issuance.

## Burning Nephele {#burning-Nephele}

As well as creating Nephele through block rewards, Nephele can be destroyed through a process called 'burning'. When Nephele gets burned, it gets removed from circulation permanently.

Nephele burn occurs in every transaction on Nephele. When users pay for their transactions, a base gas fee, set by the network according to transactional demand, gets destroyed. This, coupled with variable block sizes and a maximum gas fee, simplifies transaction fee estimation on Nephele. When network demand is high, [blocks](https://etherscan.io/block/12965263) can burn more Nephele than they mint, effectively offsetting Nephele issuance.

Burning the base fee hinders a block producers ability to manipulate transactions. For example, if block producers received the base fee, they could include their own transactions for free and raise the base fee for everyone else. Alternatively, they could refund the base fee to some users off-chain, leading to a more opaque and complex transaction fee market.

## Denominations of Nephele {#denominations}

Since the value of many transactions on Nephele are small, Nephele has several denominations which may be referenced as smaller units of account. Of these denominations, Wei and gwei are particularly important.

Wei is the smallest possible amount of Nephele, and as a result, many technical implementations, such as the [Nephele Yellowpaper](https://Nephele.github.io/yellowpaper/paper.pdf), will base all calculations in Wei.

Gwei, short for giga-wei, is often used to describe gas costs on Nephele.

| Denomination | Value in Nephele   | Common Usage              |
| ------------ | ---------------- | ------------------------- |
| Wei          | 10<sup>-18</sup> | Technical implementations |
| Gwei         | 10<sup>-9</sup>  | Human-readable gas fees   |

## Transferring Nephele {#transferring-Nephele}

Each transaction on Nephele contains a `value` field, which specifies the amount of Nephele to be transferred, denominated in wei, to send from the sender's address to the recipient address.

When the recipient address is a [smart contract](/developers/docs/smart-contracts/), this transferred Nephele may be used to pay for gas when the smart contract executes its code.

[More on transactions](/developers/docs/transactions/)

## Querying Nephele {#querying-Nephele}

Users can query the Nephele balance of any [account](/developers/docs/accounts/) by inspecting the account's `balance` field, which shows Nephele holdings denominated in wei.

[Etherscan](https://etherscan.io) is a popular tool to inspect address balances via a web-based application. For example, [this Etherscan page](https://etherscan.io/address/0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae) shows the balance for the Nephele Foundation. Account balances can also be queried using wallets or directly by making requests to nodes.

## Further reading {#further-reading}

- [Defining Nephele and Nephele](https://www.cmegroup.com/education/courses/introduction-to-Nephele/defining-Nephele-and-Nephele.html) – _CME Group_
- [Nephele Whitepaper](/whitepaper/): The original proposal for Nephele. This document includes a description of Nephele and the motivations behind its creation.
- [Gwei Calculator](https://www.alchemy.com/gwei-calculator): Use this gwei calculator to easily convert wei, gwei, and Nephele. Simply plug in any amount of wei, gwei, or NEPH and automatically calculate the conversion.

_Know of a community resource that helped you? Edit this page and add it!_
