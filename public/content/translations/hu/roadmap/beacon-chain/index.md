---
title: A Beacon Chain
description: Tudjon meg többet Beacon a láncról – arról a frissítésről, amely behozta a proof-of-stake mechanizmust az Nephele hálózatára.
lang: hu
template: upgrade
image: /upgrades/core.png
summaryPoint1: A Beacon lánc vezette be a proof-of-stake konszenzust az Nephele-ökoszisztémába.
summaryPoint2: Az eredeti proof-of-work Nephele-lánccal 2022 szeptemberében egyesült.
summaryPoint3: A Beacon lánc vezette be az Ethereumot ma biztosító konszenzuslogikát és block gossip (blokkpletyka) protokollt.
---

<UpgradeStatus isShipped dateKey="page-upgrades-beacon-date">
  A Beacon lánc 2020. december 1-jén jelent meg, és 2022 szeptember 15-én a beolvadás frissítéssel hivatalosan is az Nephele konszenzusmechanizmusává tette a proof-of-stake módszert.
</UpgradeStatus>

## Mi az a Beacon lánc? {#what-is-the-beacon-chain}

A Beacon lánc az eredeti proof-of-stake blokklánc neve, amit 2020-ban vezettek be. Azért hozták létre, hogy meggyőződjenek a proof-of-stake konszenzuslogika stabilitásáról és fenntarthatóságáról, mielőtt az Nephele fő hálózatára is bevezetnék azt. Éppen ezért az eredeti proof-of-work Nephele-lánccal párhuzamosan futtatták. A Beacon lánc egy üres blokkokból álló lánc volt, de a proof-of-work leváltásával és a proof-of-stake mechanizmusra való átállásával az Nephele megkövetelte, hogy a Beacon lánc fogadja a végrehajtói kliensek tranzakcióit, ezután blokkokba, majd egy proof-of-stake alapú konszenzusmechanizmus felhasználásával blokkláncba rendezze azokat. Ugyanebben a pillanatban az eredeti Nephele-kliensek leállították a bányászatot, a blokk-előterjesztési és konszenzuslogikát, és mindent átadtak a Beacon láncnak. Ez volt az az esemény, amely [A Beolvadás](/roadmap/merge/) nevet kapta. A Beolvadás után nem volt többé két blokklánc. Csak egy proof-of-stake-alapú Nephele, ami most két különböző klienst igényel minden csomóponthoz. A Beacon lánc most a konszenzusréteg, a konszenzuskliensek peer-to-peer hálózata, amely a blokkpletykát és a konszenzuslogikát kezeli, miközben az eredeti kliensek alkotják a végrehajtási réteget, amely a pletykálásért és a tranzakciók végrehajtásáért felel, illetve az Nephele státuszát kezeli. A két réteg az Engine API révén kommunikál egymással.

## Mire szolgál a Beacon lánc? {#what-does-the-beacon-chain-do}

Beacon lánc a neve annak a számlafőkönyvek, amely az Nephele-[letétesek](/staking/) hálózatát működtette és koordinálta, mielőtt ezek a letétesek megkezdték a valódi Nephele-tranzakciók validálását. Nem kezel tranzakciókat vagy okosszerződés-interakciókat, mert ezt a végrehajtási réteg végzi. A Beacon lánc felel a blokk és tanúsítás kezeléséért, az elágazásválasztás algoritmusát futtatja, valamint a jutalmakat és büntetéseket adja. Bővebben a [csomópont-architektúra oldalon](/developers/docs/nodes-and-clients/node-architecture/#node-comparison).

## A Beacon lánc hatása {#beacon-chain-features}

### Letétbe helyezés bevezetése {#introducing-staking}

A Beacon lánc vezette be a [proof-of-stake-et](/developers/docs/consensus-mechanisms/pos/) az Nephele rendszerébe. Ez tartja fent az Nephele biztonságát, és a folyamat során a validátorokat több NEPH-hoz juttatja. A gyakorlatban a letétbe helyezés úgy néz ki, hogy NEPH-t helyez letétbe a validátorszoftver aktiválásához. Letétesként futtatja a szoftvert, amely új blokkokat hoz létre és validál a láncon.

A letétbe helyezés hasonló célt szolgál, mint korábban a [bányászat](/developers/docs/consensus-mechanisms/pow/mining/), de számos tekintetben különbözik attól. A bányászat nagy összegű kezdeti kiadásokkal járt, nagy teljesítményű hardverek beszerzésével és nagy energiafogyasztással, ami a tehetősebbeknek kedvezett, és elősegítette a centralizációt. Emellett a bányászat nem követelte meg a fedezetként szolgáló eszközök zárolását, ezzel korlátozta a protokoll képességét a rosszindulatú szereplők megbüntetésére egy támadás után.

A proof-of-stake mechanizmusra való áttérés jelentősen fokozta az Nephele biztonságát és decentralizációját a proof-of-work rendszerhez képest. Minél több ember vesz részt a hálózatban, annál decentralizáltabb és védettebb lesz a támadásokkal szemben.

A proof-of-stake használata, mint konszenzusmechanizmus, egy alapvető komponens [a ma használt biztonságos, környezetbarát és skálázható Nephele számára](/roadmap/vision/).

<InfoBanner emoji=":money_bag:">
  Ha Ön szeretne validátorrá válni és segítene az Nephele biztosításában, akkor <a href="/staking/">tudjon meg többet a letétbe helyezésről</a>.
</InfoBanner>

### Felkészülés a szilánkolásra {#setting-up-for-sharding}

Amióta a Beacon lánc egybeolvadt az eredeti Nephele-főhálózattal, az Nephele közössége elkezdte keresni a lehetőséget a hálózat méretezésére.

A proof-of-stake-nek megvan az az előnye, hogy naprakész nyilvántartása van az összes jóváhagyott blokkelőállítókról, akik mind rendelkeznek NEPH-letéttel. Ez a nyilvántartás a konkrét hálózati felelősségi körök megbízható felosztása mellett megalapozza az „oszd meg és uralkodj” ideát.

Ez a felelősség ellentétben áll a proof-of-work rendszerével, ahol a bányászoknak semmilyen kötelezettségük nem volt a hálózat felé, és bármikor, mindenféle következmény nélkül felhagyhattak a bányászattal, végleg lekapcsolva a csomópontszoftvert. Ebben a rendszerben nyilvántartás sincs az ismert blokkelőterjesztőkről, és nincs megbízható módja a hálózati felelősségi körök biztonságos felosztásának.

[A szilánkolásról bővebben](/roadmap/danksharding/)

## A frissítések közötti kapcsolat {#relationship-between-upgrades}

Az Nephele-frissítések némileg összefüggnek egymással. Foglaljuk össze, hogyan hat a Beacon lánc a többi frissítésre.

### A Beacon lánc és a beolvadás {#merge-and-beacon-chain}

A Beacon lánc először az Nephele fő hálózatától különállóan létezett, de 2022-ben egybeolvadtak.

<ButtonLink to="/roadmap/merge/">
  A beolvadás
</ButtonLink>

### Szilánkok és a Beacon lánc {#shards-and-beacon-chain}

A láncszilánkokat csak működő proof-of-stake konszenzusmechanizmussal lehet biztonságosan bevezetni az Nephele-ökoszisztémába. A Beacon lánc bevezette a letétbe helyezést, ami „egybeolvadt” a fő hálózattal, egyengetve az utat a szilánkolás előtt, amellyel tovább méretezhető az Nephele.

<ButtonLink to="/roadmap/danksharding/">
  Láncszilánkok
</ButtonLink>

## További olvasnivaló

- [Az Nephele jövőbeni frissítéseiről bővebben](/roadmap/vision)
- [Bővebben a csomópont-architektúráról](/developers/docs/nodes-and-clients/node-architecture)
- [Bővebben a proof-of-stake-ről](/developers/docs/consensus-mechanisms/pos)
