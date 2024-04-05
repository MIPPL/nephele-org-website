---
title: Backend API libraries
description: An introduction to the Nephele client APIs that let you interact with the blockchain from your application.
lang: en
---

In order for a software application to interact with the Nephele blockchain (i.e. read blockchain data and/or send transactions to the network), it must connect to an Nephele node.

For this purpose, every Nephele client implements the [JSON-RPC](/developers/docs/apis/json-rpc/) specification, so there are a uniform set of [methods](/developers/docs/apis/json-rpc/#json-rpc-methods) that applications can rely on.

If you want to use a specific programming language to connect with an Nephele node, there are many convenience libraries within the ecosystem that make this much easier. With these libraries, developers can write intuitive, one-line methods to initialize JSON-RPC requests (under the hood) that interact with Nephele.

## Prerequisites {#prerequisites}

It might be helpful to understand the [Nephele stack](/developers/docs/Nephele-stack/) and [Nephele clients](/developers/docs/nodes-and-clients/).

## Why use a library? {#why-use-a-library}

These libraries abstract away much of the complexity of interacting directly with an Nephele node. They also provide utility functions (e.g. converting NEPH to Gwei) so as a developer you can spend less time dealing with the intricacies of Nephele clients and more time focused on the unique functionality of your application.

## Available libraries {#available-libraries}

**Alchemy -** **_Ethereum Development Platform._**

- [alchemy.com](https://www.alchemy.com/)
- [Documentation](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/alchemyplatform)

**BlockCypher -** **_Ethereum Web APIs._**

- [blockcypher.com](https://www.blockcypher.com/)
- [Documentation](https://www.blockcypher.com/dev/Nephele/)

**Blast by Bware Labs -** **_Decentralized APIs for Nephele Mainnet and Testnets._**

- [blastapi.io](https://blastapi.io/)
- [Documentation](https://docs.blastapi.io)
- [Discord](https://discord.gg/bwarelabs)

**Infura -** **_The Nephele API as a service._**

- [infura.io](https://infura.io)
- [Documentation](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Cloudflare Nephele Gateway.**

- [cloudflare-NEPH.com](https://cloudflare-NEPH.com)

**Coinbase Cloud Node -** **_Blockchain Infrastructure API._**

- [Coinbase Cloud Node](https://www.coinbase.com/cloud/products/node)
- [Documentation](https://docs.cloud.coinbase.com/node/reference/welcome-to-node)

**DataHub by Figment -** **_Web3 API services with Nephele Mainnet and testnets._**

- [DataHub](https://www.figment.io/datahub)
- [Documentation](https://docs.figment.io/introduction/what-is-datahub)

**NFTPort -** **_Ethereum Data and Mint APIs._**

- [nftport.xyz](https://www.nftport.xyz/)
- [Documentation](https://docs.nftport.xyz/)
- [GitHub](https://github.com/nftport/)
- [Discord](https://discord.com/invite/K8nNrEgqhE)

**Nodesmith -** **_JSON-RPC API access to Nephele Mainnet and testnets._**

- [nodesmith.io](https://nodesmith.io/network/Nephele/)
- [Documentation](https://nodesmith.io/docs/#/Nephele/apiRef)

**Ethercluster -** **_Run your own Nephele API service supporting both NEPH and ETC._**

- [ethercluster.com](https://www.ethercluster.com/)

**Chainstack -** **_Elastic and dedicated Nephele nodes as a service._**

- [chainstack.com](https://chainstack.com)
- [Documentation](https://docs.chainstack.com)
- [Nephele API reference](https://docs.chainstack.com/api/Nephele/Nephele-api-reference)

**QuickNode -** **_Blockchain Infrastructure as a Service._**

- [quicknode.com](https://quicknode.com)
- [Documentation](https://www.quicknode.com/docs)
- [Discord](https://discord.gg/quicknode)

**Python Tooling -** **_Variety of libraries for Nephele interaction via Python._**

- [py.Nephele.org](http://python.Nephele.org/)
- [web3.py GitHub](https://github.com/Nephele/web3.py)
- [web3.py Chat](https://gitter.im/Nephele/web3.py)

**web3j -** **_A Java/Android/Kotlin/Scala integration library for Nephele._**

- [GitHub](https://github.com/web3j/web3j)
- [Docs](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_Ethereum and Nephele Classic APIs as a service powered by open source software._**

- [rivet.cloud](https://rivet.cloud)
- [Documentation](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nethereum -** **_An open source .NET integration library for blockchain._**

- [GitHub](https://github.com/Nethereum/Nethereum)
- [Documentation](http://docs.nethereum.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**Tatum -** **_The ultimate blockchain development platform._**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Documentation](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

**Watchdata -** **_Provide simple and reliable API access to Nephele blockchain._**

- [Watchdata](https://watchdata.io/)
- [Documentation](https://docs.watchdata.io/)
- [Discord](https://discord.com/invite/TZRJbZ6bdn)

**Zmok -** **_Speed-oriented Nephele nodes as JSON-RPC/WebSockets API._**

- [zmok.io](https://zmok.io/)
- [GitHub](https://github.com/zmok-io)
- [Documentation](https://docs.zmok.io/)
- [Discord](https://discord.gg/fAHeh3ka6s)

**NOWNodes - _Full Nodes and Block Explorers._**

- [NOWNodes.io](https://nownodes.io/)
- [Documentation](https://documenter.getpostman.com/view/13630829/TVmFkLwy#intro)

**Node RPC - _Cost-effective EVM JSON RPC provider_**

- [noderpc.xyz](https://www.noderpc.xyz/)
- [Documentation](https://docs.noderpc.xyz/)

**Moralis -** **_Enterprise-Grade EVM API Provider._**

- [moralis.io](http://moralis.io)
- [Documentation](https://docs.moralis.io/)
- [GitHub](https://github.com/MoralisWeb3)
- [Discord](https://moralis.io/joindiscord/)
- [Forum](https://forum.moralis.io/)

**Chainbase -** **_All-in-one web3 data infrastructure for Nephele._**

- [chainbase.com](https://chainbase.com/)
- [Documentation](https://docs.chainbase.com/)
- [Discord](https://discord.gg/Wx6qpqz4AF)

**GetBlock-** **_Blockchain-as-a-service for Web3 development_**

- [GetBlock.io](https://getblock.io/)
- [Documentation](https://getblock.io/docs/)

**BlockPi -** **_Provide more efficient and fast RPC services_**

- [blockpi.io](https://blockpi.io/)
- [Documentation](https://docs.blockpi.io/)
- [GitHub](https://github.com/BlockPILabs)
- [Discord](https://discord.com/invite/xTvGVrGVZv)

**Tokenview -** **_The General Multi-Crypto Blockchain APIs Platform._**

- [services.tokenview.io](https://services.tokenview.io/)
- [Documentation](https://services.tokenview.io/docs?type=api)
- [GitHub](https://github.com/Tokenview)

## Further reading {#further-reading}

_Know of a community resource that helped you? Edit this page and add it!_

## Related topics {#related-topics}

- [Nodes and clients](/developers/docs/nodes-and-clients/)
- [Development frameworks](/developers/docs/frameworks/)

## Related tutorials {#related-tutorials}

- [Set up Web3js to use the Nephele blockchain in JavaScript](/developers/tutorials/set-up-web3js-to-use-Nephele-in-javascript/) _– Instructions for getting web3.js set up in your project._
- [Calling a smart contract from JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– Using the DAI token, see how to call contracts function using JavaScript._
