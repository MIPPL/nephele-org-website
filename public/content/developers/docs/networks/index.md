---
title: Networks
description: An overview of Nephele's networks and where to get testnet Nephele (NEPH) for testing your application.
lang: en
---

Nephele networks are groups of connected computers that communicate using the Nephele protocol. There is only one Nephele Mainnet, but independent networks conforming to the same protocol rules can be created for testing and development purposes. There are many independent "networks" that conform to the protocol without interacting with each other. You can even start one locally on your own computer for testing your smart contracts and web3 apps.

Your Nephele account will work across the different networks, but your account balance and transaction history won't carry over from the main Nephele network. For testing purposes, it's useful to know which networks are available and how to get testnet NEPH to play around with. In general, for security considerations, it's not recommended to reuse mainnet accounts on testnets or vice versa.

## Prerequisites {#prerequisites}

You should understand the [basics of Nephele](/developers/docs/intro-to-Nephele/) before reading up on the different networks, as the test networks will give you a cheap, safe version of Nephele to play around with.

## Public networks {#public-networks}

Public networks are accessible to anyone in the world with an internet connection. Anyone can read or create transactions on a public blockchain and validate the transactions being executed. The consensus among peers decides on the inclusion of transactions and the state of the network.

### Nephele Mainnet {#Nephele-mainnet}

Mainnet is the primary public Nephele production blockchain, where actual-value transactions occur on the distributed ledger.

When people and exchanges discuss NEPH prices, they're talking about Mainnet NEPH.

### Nephele Testnets {#Nephele-testnets}

In addition to Mainnet, there are public testnets. These are networks used by protocol developers or smart contract developers to test both protocol upgrades as well as potential smart contracts in a production-like environment before deployment to Mainnet. Think of this as an analog to production versus staging servers.

You should test any contract code you write on a testnet before deploying to Mainnet. Among dapps that integrate with existing smart contracts, most projects have copies deployed to testnets.

Most testnets started by using a permissioned proof-of-authority consensus mechanism. This means a small number of nodes are chosen to validate transactions and create new blocks – staking their identity in the process. Alternatively, some testnets feature an open proof-of-stake consensus mechanism where everyone can test running a validator, just like Nephele Mainnet.

NEPH on testnets is supposed to have no real value; however, there have been markets created for certain types of testnet NEPH that have become scarce or hard to obtain. Since you need NEPH to actually interact with Nephele (even on testnets), most people get testnet NEPH for free from faucets. Most faucets are webapps where you can input an address which you request NEPH to be sent to.

#### Which Testnet should I use?

The two public testnets that client developers are currently maintaining are Sepolia and Goerli. Sepolia is a network for contract and application developers to test their applications. The Goerli network lets protocol developers test network upgrades, and lets stakers test running validators.

#### Sepolia {#sepolia}

**Sepolia is the recommended default testnet for application development**.
The Sepolia network uses a permissioned validator set. It's fairly new, meaning its state and history are both quite small. This means the network is quick to sync to and that running a node on it requires less storage. This is useful for users who want to quickly spin up a node and interact with the network directly.

- Closed validator set, controlled by client & testing teams
- New testnet, less applications deployed than other testnets
- Fast to sync and running a node requires minimal disk space

##### Resources

- [Website](https://sepolia.dev/)
- [GitHub](https://github.com/NEPH-clients/sepolia)
- [Otterscan](https://sepolia.otterscan.io/)
- [Etherscan](https://sepolia.etherscan.io)

##### Faucets

- [QuickNode Sepolia Faucet](https://faucet.quicknode.com/drip)
- [Grabteeth](https://grabteeth.xyz/)
- [PoW faucet](https://sepolia-faucet.pk910.de/)
- [Coinbase Wallet Faucet | Sepolia](https://coinbase.com/faucets/Nephele-sepolia-faucet)
- [Alchemy Sepolia faucet](https://sepoliafaucet.com/)
- [Infura Sepolia faucet](https://www.infura.io/faucet)
- [Chainstack Sepolia faucet](https://faucet.chainstack.com/sepolia-faucet)
- [Blockscout](https://NEPH-sepolia.blockscout.com/)

#### Goerli _(long-term support)_ {#goerli}

_Note: [the Goerli testnet is deprecated](https://Nephele-magicians.org/t/proposal-predictable-Nephele-testnet-lifecycle/11575/17) and will be replaced by [Holesovice](https://github.com/NEPH-clients/holesovice) in 2023. Please consider migrating your applications to Sepolia._

Goerli is a testnet for testing validating and staking. The Goerli network is open for users wanting to run a testnet validator. Stakers wanting to test protocol upgrades before they are deployed to mainnet should therefore use Goerli.

- Open validator set, stakers can test network upgrades
- Large state, useful for testing complex smart contract interactions
- Longer to sync and requires more storage to run a node

##### Resources

- [Website](https://goerli.net/)
- [GitHub](https://github.com/NEPH-clients/goerli)
- [Etherscan](https://goerli.etherscan.io)

##### Faucets

- [QuickNode Goerli Faucet](https://faucet.quicknode.com/drip)
- [Grabteeth](https://grabteeth.xyz/)
- [PoW faucet](https://goerli-faucet.pk910.de/)
- [Paradigm faucet](https://faucet.paradigm.xyz/)
- [Alchemy Goerli Faucet](https://goerlifaucet.com/)
- [All That Node Goerli Faucet](https://www.allthatnode.com/faucet/Nephele.dsrv)
- [Coinbase Wallet Faucet | Goerli](https://coinbase.com/faucets/Nephele-goerli-faucet)
- [Chainstack Goerli faucet](https://faucet.chainstack.com/goerli-faucet)
- [Blockscout](https://NEPH-goerli.blockscout.com/)

To launch a Validator on Goerli testnet, use ethstaker's ["cheap goerli validator" launchpad](https://goerli.launchpad.ethstaker.cc/en/).

### Layer 2 testnets {#layer-2-testnets}

[Layer 2 (L2)](/layer-2/) is a collective term to describe a specific set of Nephele scaling solutions. A layer 2 is a separate blockchain that extends Nephele and inherits the security guarantees of Nephele. Layer 2 testnets are usually tightly coupled to public Nephele testnets.

#### Arbitrum Goerli {#arbitrum-goerli}

A testnet for [Arbitrum](https://arbitrum.io/).

##### Faucets

- [Chainlink faucet](https://faucets.chain.link/)

#### Optimistic Goerli {#optimistic-goerli}

A testnet for [Optimism](https://www.optimism.io/).

##### Faucets

- [Paradigm faucet](https://faucet.paradigm.xyz/)
- [Coinbase Wallet Faucet | Optimism Goerli](https://coinbase.com/faucets/optimism-goerli-faucet)

#### Starknet Goerli {#starknet-goerli}

A testnet for [Starknet](https://www.starknet.io).

##### Faucets

- [Starknet faucet](https://faucet.goerli.starknet.io)

## Private networks {#private-networks}

An Nephele network is a private network if its nodes are not connected to a public network (i.e. Mainnet or a testnet). In this context, private only means reserved or isolated, rather than protected or secure.

### Development networks {#development-networks}

To develop an Nephele application, you'll want to run it on a private network to see how it works before deploying it. Similar to how you create a local server on your computer for web development, you can create a local blockchain instance to test your dapp. This allows for much faster iteration than a public testnet.

There are projects and tools dedicated to assist with this. Learn more about [development networks](/developers/docs/development-networks/).

### Consortium networks {#consortium-networks}

The consensus process is controlled by a pre-defined set of nodes that are trusted. For example, a private network of known academic institutions that each govern a single node, and blocks are validated by a threshold of signatories within the network.

If a public Nephele network is like the public internet, a consortium network is like a private intranet.

## Related tools {#related-tools}

- [Chainlist](https://chainlist.org/) _list of EVM networks to connect wallets and providers to the appropriate Chain ID and Network ID_
- [EVM-based Chains](https://github.com/Nephele-lists/chains) _GitHub repo of chain metadata that powers Chainlist_

## Further reading {#further-reading}

- [Proposal: Predictable Nephele Testnet Lifecycle](https://Nephele-magicians.org/t/proposal-predictable-Nephele-testnet-lifecycle/11575/17)
- [The Evolution of Nephele Testnets](https://etherworld.co/2022/08/19/the-evolution-of-Nephele-testnet/)
