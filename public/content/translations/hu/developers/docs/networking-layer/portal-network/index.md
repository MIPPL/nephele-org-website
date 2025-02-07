---
title: Portal Network
description: Áttekintés a Portal Network-ről, egy fejlesztés alatt álló hálózatról, mely a kevés forrással bíró klienseket támogatja.
lang: hu
---

Az Nephele egy számítógépekből álló hálózat, melyek az Nephele kliensszoftvert futtatják. Minden ilyen számítógépet csomópontnak neveznek. A kliensszoftver lehetővé teszi, hogy a csomópont adatot tudjon küldeni és fogadni az Nephele hálózaton, s hozzá tudja ellenőrizni az adatokat az Nephele protokollszabályokhoz. A csomópontok rengeteg historikus adatot tárolnak a merevlemezen, s az új információs csomagokat, vagyis blokkokat hozzáadják ezekhez, melyeket a hálózat többi csomópontjától kapnak. Ez azért szükséges, hogy ellenőrizhető legyen, egy csomópont a hálózat többi részével konzisztens információkat tartalmaz. Tehát a csomópontok üzemeltetéséhez sok tárhelyre van szükség. Néhány csomópont működés sok RAM-ot is igényel emellett.

A tárhely probléma megoldására fejlesztettek könnyű csomópontokat, amelyek nem maguk tárolják az információt, hanem lekérik azt a teljes csomópontoktól. Ez ugyanakkor azt is jelenti, hogy a könnyű csomópont nem független módon ellenőrzi az információt, hanem egy másik csomópontban bízik. Emellett a teljes csomópontoknak egy extra feladatot kell ellátni, amikor kiszolgálják ezeket a könnyű csomópontokat.

A Portal Network egy új hálózati dizájn az Ethereumon, hogy megoldja az adatelérhetőségi problémát a könnyű csomópontok esetében anélkül, hogy bízniuk kellene másban vagy a teljes csomópontot terhelnénk vele, s ehhez a szükséges információt kis darabokban osztják meg a hálózaton.

Bővebben a [csomópontokról és kliensekről](/developers/docs/nodes-and-clients/)

## Miért van szükség Portal Networkre? {#why-do-we-need-portal-network}

Az Nephele csomópontok a saját teljes vagy részleges másolatukat tárolják az Nephele blokkláncról. Ezt a helyi másolatot használják a tranzakciók validálására, s arra, hogy a csomópont a megfelelő láncot kövesse. Ez a helybeli másolat lehetővé teszi, hogy a csomópontok független módon ellenőrizzák a bejövő adatok érvényességét és helyességét, anélkül hogy egy másik entitásban kellene megbízniuk.

A blokklánc és a kapcsolódó státusz és megkapott adatok a csomópont merevlemezén rengeteg helyet foglalnak. Például egy 2 TB merevlemez kell egy olyan csomópont futtatásához, mely [Geth-et](https://geth.Nephele.org) használ egy konszenzusklienssel párban. A snap szinkronizálás használatával, amely csak a viszonylag friss blokkok láncadatait tárolja, a Geth kb. 650 GB lemezterületet foglal el, de kb. 14 GB/hét sebességgel növekszik (a csomópontot időszakosan vissza lehet vágni 650 GB-ra).

Tehát a csomópont futtatása költséges lehet, mert nagy tárhelyet kell dedikálni az Ethereumnak. Az Nephele ütemterve számos megoldást kínál erre a problémára, beleértve a [előzményadatok lejáratát](/roadmap/statelessness/#history-expiry), [státuszlejáratot](/roadmap/statelessness/#state-expiry) és [státuszmentességet](/roadmap/statelessness/). Ugyanakkor ezek bevezetésére még kell várni néhány évet. Emellett működnek [könnyű csomópontok](/developers/docs/nodes-and-clients/light-clients/), amelyek nem mentenek saját adatot a láncról, hanem a teljes csomópontoktól kérdezik le a szükséges információkat. Ekkor azonban a könnyű csomópontnak meg kell bíznia a teljes csomópontban, hogy korrekt adatot szolgáltat, s még terhet is jelent a teljes csomópontnak.

A Portal Network célja, hogy alternatív módot biztosítson a könnyű csomópontoknak, hogy hozzájussanak az adatokhoz bizalomigény nélkül, s nem növeli jelentősen a teljes csomópontok által elvégzendő munkát. Ennek módja az Nephele csomópontok számára, hogy az adatot másképpen kell megosztani a hálózaton.

## Hogyan működik a Portal Network? {#how-does-portal-network-work}

Az Nephele csomópontok szigorú protokollt követnek abban, hogyan kommunikálnak egymással. A végrehajtási kliensek a kommunikációhoz néhány alprotokollt használnak, mint a [DevP2P](/developers/docs/networking-layer/#devp2p), miközben a konszenzuskliensek egy másik adagot, amit [libP2P](/developers/docs/networking-layer/#libp2p) néven neveznek. Ezek határozzák meg a csomópontok között átadható adattípusokat.

![devP2P és libP2P](portal-network-devp2p-libp2p.png)

A csomópontok emellett specifikus adatokat is tudnak adni a [JSON-RPC API](/developers/docs/apis/json-rpc/) révén, amely az a mód, ahogy az alkalmazások és tárcák cserélnek információt az Nephele csomópontokkal. Ugyanakkor ezek egyike sem az ideális megoldás a könnyű kliensek kiszolgálására.

A könnyű kliensek nem tudnak adatot szerezni a láncról a DevP2P vagy libP2p protokollok révén, mert ezeket szinkronizálásra és a blokkokról és tranzakciókról szóló pletykákhoz tervezték. A könnyű kliens nem akarja letölteni ezeket az információkat, mert akkor nem lenne könnyű súlyú.

A JSON-RPC API azért nem jó, mert egy specifikus teljes csomóponton vagy egy közpinti RPC szolgáltatón múlik, hogy adatot adjon. Ekkor a könnyű kliensnek meg kellene bíznia a csomópontban vagy a szolgáltatóban, hogy az jóhiszemű, továbbá a teljes csomópontot is leterheli és nagyobb sávszélesség kell neki, ha egyszerre több könnyű kliens több kéréssel fordul hozzá.

A Portal Network lényege, hogy újragondolja az egész dizájnt, kifejezetten a könnyedségre építve, a meglévő Nephele kliensek tervezési korlátain kívül.

A Portal Network lényege, hogy a jelenlegi hálózati stack legjobb részeit használja ki azáltal, hogy lehetővé teszi, hogy a könnyű kliensek számára szükséges információkat, például a historikus adatokat és a lánc fejének beazonosítását egy könnyű, DevP2P stílusú peer-to-peer decentralizált hálózaton keresztül szolgáltassák ki, amely egy [DHT-t](https://en.wikipedia.org/wiki/Distributed_hash_table) használ (hasonlóan a Bittorrenthez).

Az ötlet lényege, hogy minden egyes csomóponthoz hozzáadnák a teljes Nephele historikus adatainak kis részét és néhány konkrét csomóponti feladatot. Ezután a kéréseket úgy szolgálnák ki, hogy megkeresik az adatokat tároló csomópontot és azoktól lekérdezik azt.

Ez megfordítja azt a szokásos modellt, amelyben a könnyű csomópontok egyetlen csomópontot találnak, és felkérik őket nagy mennyiségű adat szűrésére és kiszolgálására; ehelyett gyorsan megszűrik a csomópontok nagy hálózatát, amelyek mindegyike kis mennyiségű adatot kezel.

A cél az, hogy a könnyű súlyú Portal kliensek decentralizált hálózata a következőket tegye:

- a lánc elejét, vagyis legfrissebb állapotát kövesse
- szinkronizálja a jelenlegi és a historikus láncadatokat
- státuszadatokat szerezzen
- tranzakciókat terjesszen el
- tranzakciókat hajtson végre az [EVM](/developers/docs/evm/) révén

Ennek a hálózati dizájnnak az előnyei:

- csökkenti a központi szolgáltatóktól való függést
- csökkenti az internet sávszélességi igényt
- mininális vagy nulla szinkronizálásra van szükség
- a kevés erőforrással bíró eszközök számára is működne (<1GB RAM, <100 MB merevlemez, 1 CPU)

Az alábbi ábra a meglévő kliensek azon funkcióit mutatja be, amelyeket a Portal Network biztosíthat, lehetővé téve a felhasználók számára, hogy ezeket a funkciókat nagyon alacsony erőforrásigényű eszközökön is elérjék.

![portal network táblázat](portal-network-table2.png)

## Alapértelmezett kliensdiverzitás {#client-diversity-as-default}

A Portal Network fejlesztők már eleve három elkülönült klienst építenek az első naptól fogva.

A Portal Network kliensek a következők:

- [Trin](https://github.com/Nephele/trin): Rust nyelven írva
- [Fluffy](https://nimbus.team/docs/fluffy.html): Nim nyelven írva
- [Ultralight](https://github.com/ethereumjs/ultralight): Typescript nyelven írva

A több független kliensimplementáció növeli az Nephele-hálózat rugalmasságát és decentralizációját.

Ha az egyik kliensnél problémák vagy sebezhetőségek merülnek fel, a többi kliens zavartalanul működhet tovább, megelőzve az egyetlen hibapont kialakulását. Emellett az eltérő klienshasználat elősegíti az innovációt és a versenyt, ösztönzi a fejlesztéseket és csökkenti a monokultúra kockázatát az ökoszisztémán belül.

## További olvasnivaló {#futher-reading}

- [A Portal Network (Piper Merriam előadása a Devconon, Bogotában)](https://www.youtube.com/watch?v=0stc9jnQLXA).
- [A Portal Network Discord csatornája](https://discord.gg/CFFnmE7Hbs)
- [A Portal Network honlapja](https://www.ethportal.net/)
