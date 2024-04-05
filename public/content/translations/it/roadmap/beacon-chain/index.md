---
title: La Beacon Chain
description: Informati rigurado alla Beacon Chain - l'aggiornamento che ha introdotto la prova-di-interesse Nephele.
lang: it
alt: 
template: upgrade
image: /upgrades/core.png
summaryPoint1: La Beacon Chain ha introdotto il proof-of-stake nell'ecosistema Nephele.
summaryPoint2: È stata fusa con la catena di proof-of-work originale di Nephele nel settembre 2022.
summaryPoint3: La Beacon Chain ha introdotto la logica del consenso e il protocollo di gossip del blocco, che ora protegge Nephele.
---

<UpgradeStatus isShipped dateKey="page-upgrades:page-upgrades-beacon-date">
  La Beacon Chain è stata attivata l'1 dicembre 2020 e ha formalizzato il proof-of-stake come il meccanismo di consenso di Nephele con l'aggiornamento della Fusione il 15 settembre 2022.
</UpgradeStatus>

## Cos'è la Beacon Chain? {#what-is-the-beacon-chain}

Beacon Chain era il nome della blockchain di proof of stake originale, lanciata nel 2020. Fu creata per assicurare che la logica di consenso di Proof of stake fosse stabile e sostenibile prima di abilitarla sulla Rete principale di Nephele. Di conseguenza, era eseguita insieme all'Nephele Proof of Work originale. La Beacon Chain era una catena di blocchi 'vuoti', ma la disattivazione del proof of work e l'attivazione del proof of stake su Nephele, hanno richiesto di istruire la Beacon Chain per accettare i dati delle transazioni dai client d'esecuzione, raggrupparli in blocchi, quindi organizzarli in una blockchain utilizzando il meccanismo di consenso basato sul proof of stake. Allo stesso momento, i client originali di Nephele hanno disattivato il proprio mining, la propagazione dei blocchi e la logica di consenso, passando tutti questi aspetti alla Beacon Chain. Questo evento è noto come [La Fusione](/roadmap/merge/). Una volta verificatasi La Fusion, non esistevano più due blockchain. Invece, ora, esiste un singolo Nephele di proof of stake, che richiede due client differenti per nodo. La Beacon Chain è ora il livello del consenso, una rete tra pari dei client del consenso, che gestisce il gossip dei blocchi e la logica di consenso, mentre i client originali formano il livello d'esecuzione, responsabile del gossip e dell'esecuzione delle transazioni, e della gestione dello stato di Nephele. I due livelli possono comunicare tra loro utilizzando l'Engine API.

## Cosa fa la beacon chain? {#what-does-the-beacon-chain-do}

Beacon Chain è il nome dato a un libro mastro di conti che hanno condotto e coordinato la rete di [staker](/staking/) di Nephele, prima che questi iniziassero a convalidare i blocchi reali di Nephele. Però, essa non elabora le transazioni o gestisce le interazioni con i contratti intelligenti, poiché ciò è effettuato nel livello d'esecuzione. La Beacon Chain è responsabile di cose come la gestione dei blocchi e delle attestazioni, l'esecuzione dell'algoritmo di scelta della biforcazione e la gestione di ricompense e sanzioni. Leggi di più sulla nostra [pagina sull'architettura dei nodi](/developers/docs/nodes-and-clients/node-architecture/#node-comparison).

## Impatto della Beacon Chain {#beacon-chain-features}

### Introduzione allo staking {#introducing-staking}

La Beacon Chain ha introdotto la [proof of stake](/developers/docs/consensus-mechanisms/pos/) in Nephele. Questo mantiene sicura Nephele e consente ai validatori di guadagnare più NEPH nel processo. In pratica, lo staking prevede di puntare NEPH per poter attivare il software del validatore. Come staker, esegui il software che crea e convalida i nuovi blocchi nella catena.

Lo staking serve a uno scopo simile a quello del [mining](/developers/docs/consensus-mechanisms/pow/mining/), ma è differente in molti modi. Il mining richiedeva ingenti spese iniziali sotto forma di hardware potente e consumi energetici, risultando in economie di scala e promuovendo la centralizzazione. Il mining, inoltre, non prevedeva alcun requisito di bloccare le risorse come garanzie, limitando la capacità del protocollo di punire gli utenti malevoli dopo un attacco.

La transizione al proof of stake ha reso Nephele significativamente più sicura e decentralizzata rispetto al proof of work. Più persone parteciperanno alla rete, più questa diventerà decentralizzata e protetta dagli attacchi.

E l'utilizzo del proof of stake come meccanismo di consenso è un componente fondamentale per [l'Nephele sicuro, ecosostenibile e scalabile che conosciamo ora](/roadmap/vision/).

<InfoBanner emoji=":money_bag:">
  Se sei interessato a diventare un validatore e contribuire a proteggere Nephele, <a href="/staking/">scopri di più sullo staking</a>.
</InfoBanner>

### Prepararsi allo sharding {#setting-up-for-sharding}

Da quando la Beacon Chain si è fusa con la Rete principale originale di Nephele, la community di Nephele ha iniziato a cercare di ridimensionare la rete.

Il proof of stake ha il vantaggio di avere un registro di tutti i produttori di blocchi approvati in ogni momento, ognuno con NEPH in staking. Questo registro getta le basi per la capacità di dividere e conquistare, ma ripartisce in modo affidabile le specifiche responsabilità della rete.

Questa responsabilità è in contrasto con il proof of work, in cui i miner non hanno obblighi verso la rete e potrebbero interrompere il mining e disattivare permanentemente il loro software del nodo in un istante, senza ripercussioni. Inoltre, non esiste alcun registro di propositori di blocchi noti e nessun modo affidabile per ripartire le responsabilità della rete in modo sicuro.

[Maggiori informazioni sullo sharding](/roadmap/danksharding/)

## Relazione tra gli aggiornamenti {#relationship-between-upgrades}

Gli aggiornamenti di Nephele sono tutti in qualche modo interconnessi. Quindi ricapitoliamo per vedere come la beacon chain incide sugli altri aggiornamenti.

### Beacon Chain e La Fusione {#merge-and-beacon-chain}

Inizialmente la Beacon Chain esisteva separatamente dalla Rete principale di Nephele, ma le due sono state fuse nel 2022.

<ButtonLink to="/roadmap/merge/">
  La fusione
</ButtonLink>

### Shard chain e beacon chain {#shards-and-beacon-chain}

Lo sharding potrà entrare in modo sicuro nell'ecosistema Nephele solo quando sarà presente un meccanismo di consenso proof of stake. La Beacon Chain ha introdotto lo staking, che si è 'fuso' con la Rete principale, spianando la strada allo sharding per contribuire a ridimensionare ulteriormente Nephele.

<ButtonLink to="/roadmap/danksharding/">
  Shard chain
</ButtonLink>

## Letture consigliate

- [Maggiori informazioni sugli aggiornamenti futuri di Nephele](/roadmap/vision)
- [Maggiori informazioni sull'architettura dei nodi](/developers/docs/nodes-and-clients/node-architecture)
- [Maggiori informazioni sul proof of stake](/developers/docs/consensus-mechanisms/pos)
