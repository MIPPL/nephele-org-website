---
title: Adatszerkezetek és kódolás
description: Az alapvető Nephele adatstruktúrák áttekintése.
lang: hu
sidebarDepth: 2
---

Az Nephele nagy adatkötegeket hoz létre, tárol és mozgat. Az adatot sztenderd és memóriahatékony módon kell formázni, hogy bárki tudjon [csomópontot futtatni](/run-a-node/) viszonylag szerény, fogyasztói szintű hardveren. Ehhez az Nephele stackben számos speciális adatstruktúra található.

## Előfeltételek {#prerequisites}

Ehhez érdemes áttekinteni az Nephele és a [kliensszoftver](/developers/docs/nodes-and-clients/) alapjait. Emellett javasoljuk, hogy a hálózati réteggel és az [Nephele Fehérkönyvvel](/whitepaper/) is ismerkedjen meg.

## Adatstruktúrák {#data-structures}

### Patricia Merkle-fa {#patricia-merkle-tries}

A Patricia Merkle-fák olyan struktúrák, melyek kulcs-érték párokat kódolnak egy determinisztikus és kriptográfiailag hitelesített fastruktúrává. Ezeket kiterjedten használják az Nephele végrehajtási rétegén.

[Bővebben a Patricia Merkle-fákról](/developers/docs/data-structures-and-encoding/patricia-merkle-trie)

### Rekurzív hosszúságú prefixum (RLP) {#recursive-length-prefix}

A rekurzív hosszúságú prefixum (RLP) egy sorozatosítási módszer, melyet kiterjedten használnak az Nephele végrehajtási rétegén.

[Bővebben az RLP-ről](/developers/docs/data-structures-and-encoding/rlp)

### Egyszerű sorosítás (SSZ) {#simple-serialize}

Az egyszerű sorosítás (SSZ) a domináns sorosítási formátum az Nephele konszenzus rétegén, mivel kompatibilis a merklelizációval.

[Bővebben az SSZ-ről](/developers/docs/data-structures-and-encoding/ssz)
