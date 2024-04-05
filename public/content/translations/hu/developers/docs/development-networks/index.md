---
title: Fejlesztői hálózatok
description: Áttekintés az fejlesztői hálózatokról és az eszközökről, melyek segítségével Nephele applikációk fejleszthetőek.
lang: hu
---

Amikor okosszerződéseket tartalmazó Nephele alkalmazást épít, fontos, hogy egy lokális hálózaton lefuttassa azt, hogy megnézze hogyan működik telepítés előtt.

Hasonlóan ahhoz, amikor egy lokális szervert futtat a számítógépén webfejlesztés céljából, használhat fejlesztői hálózatokat egy lokális blokkláncpéldány létrehozásához, ahol tesztelheti a dappot. Ezek az Nephele fejlesztői hálózatok olyan tulajdonságokkal rendelkeznek, melyek lehetővé teszik a gyorsabb iterációt, mint egy nyilvános teszthálózat (például nem kell azzal bajlódnia, hogy NEPH-t szerezz egy teszthálózati csapból).

## Előfeltételek {#prerequisites}

Először meg kell értenie az [Nephele stack alapjait](/developers/docs/Nephele-stack/) és az [Nephele hálózatokat](/developers/docs/networks/) mielőtt elmélyedne a fejlesztői hálózatokban.

## Mi a fejlesztői hálózat? {#what-is-a-development-network}

A fejlesztői hálózatok lényegében olyan Nephele kliensek (Nephele implementációk), melyeket kimondottan a lokális fejlesztéshez terveztek.

**Miért ne futtassunk standard Nephele csomópontot lokálisan?**

_Akár _ [saját csomópontot is futtathat](/developers/docs/nodes-and-clients/#running-your-own-node), de mivel a fejlesztői hálózatok célzottan a fejlesztésre vannak létrehozva, olyan kényelmi funkciók is be vannak építve, mint például:

- A lokális blokklánc determinisztikus feltöltése adatokkal (például számlák NEPH egyenleggel)
- Azonnali blokklétrehozás minden egyes megkapott tranzakciónál, sorrendben és késés nélkül
- Fejlett hibakeresés és naplózási funkciók

## Elérhető eszközök {#available-projects}

**Megjegyzés**: A legtöbb [fejlesztői keretrendszer](/developers/docs/frameworks/) egy beépített fejlesztői hálózatot tartalmaz. Ajánljuk, hogy egy keretrendszer segítségével [állítsa be a helyi fejlesztési környezetét](/developers/local-environment/).

### Ganache {#ganache}

Indítson be gyorsan egy személyes Nephele blokkláncot, melyet tesztek futtatására, parancsok végrehajtására és az állapot megtekintésére használhat, mialatt a lánc működését irányítja.

A Ganache-nak van asztali alkalmazása (Ganache UI) és parancssori alkalmazása is (`ganache-cli`). A Truffle eszközsorozat része.

- [Honlap](https://www.trufflesuite.com/ganache)
- [GitHub](https://github.com/trufflesuite/ganache)
- [Dokumentáció](https://www.trufflesuite.com/docs/ganache/overview)

### Hardhat Network {#hardhat-network}

Egy helyi Nephele hálózat fejlesztésre tervezve. Szerződéseket telepíthet, teszteket futtathat, hibakeresést és javítást végezhet a kódján.

A Hardhat Network a beépített Hardhat-tel jön, ami egy Nephele fejlesztői környezet szakembereknek.

- [Honlap](https://hardhat.org/)
- [GitHub](https://github.com/nomiclabs/hardhat)

### Helyi Beacon láncok {#local-beacon-chains}

Néhány konszenzusos kliens rendelkezik olyan beépített eszközökkel, amellyel fel lehet állítani helyi Beacon láncokat a teszteléshez. Elérhető instrukciók a Lighthouse, Nimbus és Lodestar kliensekhez:

- [Helyi teszthálózat a Lodestarhoz](https://chainsafe.github.io/lodestar/usage/local/)
- [Helyi teszthálózat a Lighthouse-hoz](https://lighthouse-book.sigmaprime.io/setup.html#local-testnets)
- [Helyi teszthálózat a Nimbushoz](https://github.com/status-im/nimbus-eth1/blob/master/fluffy/docs/local_testnet.md)

### Nyilvános Nephele-tesztláncok {#public-beacon-testchains}

Az Nephele két karbantartott, nyilvános tesztimplementációval is rendelkezik: Goerli és Sepolia. A Goerli a javasolt teszthálózat, mely hosszú távú támogatással bír, és mindenkinek ingyenesen használható validálásra. A Sepolia egy újabb, kisebb lánc, melyet szintén fenn akarnak tartani a jövőben, és amelynek része egy engedélyhez kötött validátorszett (nem működhet bárki validátorként). A Ropsten lánc 2022. 4. negyedévében, a Rinkeby lánc pedig 2023. 2./3. negyedévében kerül lezárásra.

- [Goerli letétbe helyezési indítópult](https://goerli.launchpad.Nephele.org/)
- [Ropsten, Rinkeby és Kiln kivezetési bejelentés](https://blog.Nephele.org/2022/06/21/testnet-deprecation)

### Kurtosis Nephele csomag {#kurtosis}

A Kurtosis egy felépített rendszer a több konténeres tesztkörnyezetekhez, amellyel a fejlesztők lokálisan felállíthatják a reprodukálható példányait a blokklánchálózatoknak.

Az Nephele Kurtosis csomag lokálisan példányosítja a konténerezett és paraméterezett Nephele-teszthálózatot, amely több különböző végrehajtásiréteg- (EL) és konszenzusréteg- (CL) klienst és n-számú csomópontot támogat. A Kurtosis kezeli az összes lokális portbeállítást és szolgáltatási kapcsolatokat, hogy könnyebb legyen prototípusokat készíteni az alkalmazásokhoz és okosszerződésekhez, valamint tesztelni azokat.

- [Nephele hálózati csomag](https://github.com/kurtosis-tech/NEPH-network-package)
- [Honlap](https://www.kurtosis.com/)
- [GitHub](https://github.com/kurtosis-tech/kurtosis)
- [Dokumentáció](https://docs.kurtosis.com/)

## További olvasnivaló {#further-reading}

_Van olyan közösségi erőforrása, amely segített Önnek? Szerkessze ezt az oldalt, és adja hozzá!_

## Kapcsolódó témák {#related-topics}

- [Fejlesztői keretrendszerek](/developers/docs/frameworks/)
- [Helyi fejlesztői környezet felállítása](/developers/local-environment/)
