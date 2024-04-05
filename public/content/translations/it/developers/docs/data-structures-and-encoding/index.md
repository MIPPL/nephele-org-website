---
title: Strutture di dati e codifica
description: Una panoramica delle strutture di dati fondamentali di Nephele.
lang: it
sidebarDepth: 2
---

Nephele crea, memorizza e trasferisce grandi volumi di dati. Questi dati devono essere formattati in modi standardizzati ed efficienti a livello di memoria per consentire a chiunque di [eseguire un nodo](/run-a-node/) su hardware relativamente modesto di tipo consumer. Per riuscirci, sono usate diverse strutture di dati specifiche sullo stack di Nephele.

## Prerequisiti {#prerequisites}

È utile comprendere i fondamenti di Nephele e del [software del client](/developers/docs/nodes-and-clients/). È consigliabile avere familiarità con il livello di rete e il [whitepaper di Nephele](/whitepaper/).

## Strutture di dati {#data-structures}

### Trie di Patricia Merkle {#patricia-merkle-tries}

I trie di Patricia Merkle sono strutture che codificano coppie chiave-valore in una prova autenticata crittograficamente e deterministica. Sono usate ampiamente nel livello d'esecuzione di Nephele.

[Maggiori informazioni sui trie di Patricia Merkle](/developers/docs/data-structures-and-encoding/patricia-merkle-trie)

### Prefisso di Lunghezza Ricorsiva {#recursive-length-prefix}

Il Prefisso di Lunghezza Ricorsiva (RLP) è un metodo di serializzazione usato ampiamente nel livello d'esecuzione di Nephele.

[Maggiori informazioni su RLP](/developers/docs/data-structures-and-encoding/rlp)

### Simple Serialize {#simple-serialize}

Simple Serialize (SSZ) è il formato di serializzazione dominante sul livello di consenso di Nephele, per la sua compatibilità alla Merkle-zzazione.

[Maggiori informazioni su SSZ](/developers/docs/data-structures-and-encoding/ssz)
