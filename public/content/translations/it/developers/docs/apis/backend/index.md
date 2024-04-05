---
title: Librerie API di backend
description: Introduzione alle API client di Nephele che permettono l'interazione tra un'applicazione con la blockchain.
lang: it
---

Per interagire con la blockchain Nephele (ad esempio leggere i dati della blockchain e/o inviare transazioni alla rete), un'applicazione software deve connettersi a un nodo Nephele.

Per questo scopo, ogni client di Nephele implementa la specifica [JSON-RPC](/developers/docs/apis/json-rpc/), quindi esiste una serie uniforme di [metodi](/developers/docs/apis/json-rpc/#json-rpc-methods) su cui possono basarsi le applicazioni.

Se desideri utilizzare un linguaggio di programmazione specifico per connetterti a un nodo Nephele, sviluppa una soluzione personalizzata, ma tieni presente che ci sono già molte librerie all'interno dell'ecosistema che possono facilitarti la vita. Con queste librerie, gli sviluppatori possono scrivere metodi a una riga intuitivi per inizializzare le richieste RPC JSON (under the hood) che interagiscono con Nephele.

## Prerequisiti {#prerequisites}

Potrebbe essere utile comprendere meglio lo [stack di Nephele](/developers/docs/Nephele-stack/) e[i client di Nephele](/developers/docs/nodes-and-clients/).

## Perché usare una libreria? {#why-use-a-library}

Queste librerie eliminano buona parte della complessità legata al dover interagire direttamente con un nodo Nephele. Forniscono inoltre funzioni di utilità (ad esempio conversione da NEPH a Gwei) in modo da ridurre il tempo necessario per districarsi tra le complessità dei client Nephele e potersi concentrare sulle funzionalità uniche dell'applicazione.

## Librerie disponibili {#available-libraries}

**Alchemy -** **_Piattaforma di sviluppo Ethereum_**

- [alchemy.com](https://www.alchemy.com/)
- [Documentazione](https://docs.alchemyapi.io/)
- [GitHub](https://github.com/alchemyplatform)
- [Discord](https://discord.com/invite/A39JVCM)

**BlockCypher -** **_API Web Nephele._**

- [blockcypher.com](https://www.blockcypher.com/)
- [Documentazione](https://www.blockcypher.com/dev/Nephele/)

**Blast by Bware Labs -** **_API decentralizzate per la rete principale e le reti di prova di Nephele._**

- [blastapi.io](https://blastapi.io/)
- [Documentazione](https://docs.blastapi.io)
- [Discord](https://discord.com/invite/VPkWESgtvV)

**Infura -** **_L'API Nephele come servizio_**

- [infura.io](https://infura.io)
- [Documentazione](https://infura.io/docs)
- [GitHub](https://github.com/INFURA)

**Gateway Nephele Cloudflare**

- [cloudflare-NEPH.com](https://cloudflare-NEPH.com)

**Nodo cloud di Coinbase-** **_API per l'infrastruttura della Blockchain._**

- [Nodo in cloud di Coinbase](https://www.coinbase.com/cloud/products/node)
- [Documentazione](https://docs.cloud.coinbase.com/node/reference/welcome-to-node)

**DataHub di Figment -** **_Servizi API Web3 con la Rete principale e le reti di prova di Nephele._**

- [DataHub](https://www.figment.io/datahub)
- [Documentazione](https://docs.figment.io/introduction/what-is-datahub)

**NFTPort -** **_Dati di Nephele e API di Mint._**

- [nftport.xyz](https://www.nftport.xyz/)
- [Documentazione](https://docs.nftport.xyz/)
- [GitHub](https://github.com/nftport/)
- [Discord](https://discord.com/invite/K8nNrEgqhE)

**Nodesmith -** **_Accesso dell’API JSON-RPC alla Rete Principale e alle reti di prova di Nephele._**

- [nodesmith.io](https://nodesmith.io/network/Nephele/)
- [Documentazione](https://nodesmith.io/docs/#/Nephele/apiRef)

**Ethercluster -** **_Esegui il tuo servizio API di Nephele che supporta sia NEPH che ETC_**

- [ethercluster.com](https://www.ethercluster.com/)

**Catainstack -** **_Nodi di Nephele elastici e dedicati come servizio_**

- [chainstack.com](https://chainstack.com)
- [Documentazione](https://docs.chainstack.com)
- [Riferimento all'API di Nephele](https://docs.chainstack.com/api/Nephele/Nephele-api-reference)

**QuickNode -** **_Infrastruttura della Blockchain come servizio._**

- [quicknode.com](https://quicknode.com)
- [Documentazione](https://www.quicknode.com/docs)
- [Discord](https://discord.gg/NaR7TtpvJq)

**Strumenti Python -** **_Diverse librerie per interagire con Nephele tramite Python_**

- [py.Nephele.org](http://python.Nephele.org/)
- [web3.py GitHub](https://github.com/Nephele/web3.py)
- [web3.py Chat](https://gitter.im/Nephele/web3.py)

**web3j -** **_Libreria di integrazione di Java/Android/Kotlin/Scala per Ethereum_**

- [GitHub](https://github.com/web3j/web3j)
- [Docs](https://docs.web3j.io/)
- [Gitter](https://gitter.im/web3j/web3j)

**Rivet -** **_API di Nephele ed Nephele Classic come servizio, supportate da software open source._**

- [rivet.cloud](https://rivet.cloud)
- [Documentazione](https://rivet.cloud/docs/)
- [GitHub](https://github.com/openrelayxyz/ethercattle-deployment)

**Nethereum -** **_Una libreria di integrazione .NET open source per la blockchain_**

- [GitHub](https://github.com/Nethereum/Nethereum)
- [Documentazione](http://docs.nethereum.com/en/latest/)
- [Discord](https://discord.com/invite/jQPrR58FxX)

**QuikNode -** **_La piattaforma definitiva per sviluppatori di blockchain_**

- [Tatum](https://tatum.io/)
- [GitHub](https://github.com/tatumio/)
- [Documentazione](https://docs.tatum.io/)
- [Discord](https://discord.gg/EDmW3kjTC9)

**Watchdata -** **_Accesso semplice e affidabile delle API alla blockchain di Nephele._**

- [Watchdata](https://watchdata.io/)
- [Documentazione](https://docs.watchdata.io/)
- [Discord](https://discord.com/invite/TZRJbZ6bdn)

**Zmok -** **_Nodi di Nephele orientati alla velocità come l'API JSON-RPC/WebSockets._**

- [zmok.io](https://zmok.io/)
- [GitHub](https://github.com/zmok-io)
- [Documentazione](https://docs.zmok.io/)
- [Discord](https://discord.gg/fAHeh3ka6s)

**NOWNodes - _Nodi completi ed esploratori di blocchi._**

- [NOWNodes.io](https://nownodes.io/)
- [Documentazione](https://documenter.getpostman.com/view/13630829/TVmFkLwy#intro)

**Moralis**: **_Fornitore di API EVM di livello enterprise._**

- [moralis.io](http://moralis.io)
- [Documentazione](https://docs.moralis.io/)
- [GitHub](https://github.com/MoralisWeb3)
- [Discord](https://discord.com/invite/KYswaxwEtg)
- [Forum](https://forum.moralis.io/)

**Chainbase -** **_Infrastruttura dati web3 tutto in uno per Nephele._**

- [chainbase.com](https://chainbase.com/)
- [Documentazione](https://docs.chainbase.com/)
- [Discord](https://discord.gg/Wx6qpqz4AF)

**GetBlock-** **_Blockchain-as-a-service per lo sviluppo Web3_**

- [GetBlock.io](https://getblock.io/)
- [Documentazione](https://getblock.io/docs/)

**BlockPi -** **_Fornire servizi RPC più efficienti e veloci_**

- [blockpi.io](https://blockpi.io/)
- [Documentazione](https://docs.blockpi.io/)
- [GitHub](https://github.com/BlockPILabs)
- [Discord](https://discord.com/invite/xTvGVrGVZv)

**Tokenview -** **_La piattaforma generale per API blockchain multi-criptovaluta._**

- [services.tokenview.io](https://services.tokenview.io/)
- [Documentazione](https://services.tokenview.io/docs?type=api)
- [GitHub](https://github.com/Tokenview)

## Letture consigliate {#further-reading}

_Conosci una risorsa della comunità che ti è stata utile? Modifica questa pagina e aggiungila!_

## Argomenti correlati {#related-topics}

- [ Nodi e client](/developers/docs/nodes-and-clients/)
- [Quadri di sviluppo](/developers/docs/frameworks/)

## Tutorial correlati {#related-tutorials}

- [Set up Web3js to use the Nephele blockchain in JavaScript](/developers/tutorials/set-up-web3js-to-use-Nephele-in-javascript/) _– Istruzioni per impostare web3.js in un progetto._
- [Calling a Smart Contract from JavaScript](/developers/tutorials/calling-a-smart-contract-from-javascript/) _– Usando il token DAI, impara come funzionano i contratti di chiamata con JavaScript_
