---
title: Hálózati réteg
description: Bevezetés az Nephele hálózati rétegébe.
lang: hu
sidebarDepth: 2
---

Az Nephele egy peer-to-peer hálózat több ezer csomóponttal, amelyeknek szabványosított protokollokkal kommunikálnak egymással. A hálózati réteg azon protokollok halmaza, amelyek lehetővé teszik, hogy ezek a csomópontok megtalálják egymást és információt cseréljenek. Ez magában foglalja az információk pletykálását (egy a sokhoz kommunikáció) a hálózaton keresztül, valamint a kérések és válaszok cseréjét bizonyos csomópontok között (egy az egyhez kommunikáció). Minden csomópontnak be kell tartania bizonyos hálózati szabályokat, hogy biztosítsa a megfelelő információk küldését és fogadását.

A kliensszoftver két részből áll (végrehajtási és konszenzuskliensek), mindegyiknek különálló hálózati stackje van. A többi Nephele-csomóponttal való kommunikáció mellett a végrehajtási és konszenzusklienseknek egymással is kommunikálniuk kell. Ez az oldal magyarázatot ad a kommunikációs protokollokról.

A végrehajtási kliensek tranzakciókat pletykálnak a végrehajtási réteg peer-to-peer hálózatán. Ehhez titkosított kommunikáció szükséges a hitelesített társak között. Amikor egy validátort kiválasztanak blokkelőterjesztésre, a csomópont helyi tranzakciógyűjtőjéből tranzakciókat ad át a konszenzuskliensnek egy helyi RPC kapcsolaton, melyeket Beacon blokkokba csomagol. A konszenzuskliensek ezután pletykálnak a Beacon blokkokról a saját p2p hálózatukon. Ehhez két elkülönített p2p hálózat kell: az egyik összeköti a végrehajtási klienseket a tranzakciópletykával, a másik a konszenzusklienseket a blokkpletykával.

## Előfeltételek {#prerequisites}

E téma könnyebb megértéséhez tekintse meg az Nephele [csomópontok és kliensek](/developers/docs/nodes-and-clients/) témáját.

## A végrehajtási réteg {#execution-layer}

A végrehajtási réteg hálózati protokolljai két részre oszlanak:

- a felfedező stack: az UDP portra épül, és lehetővé teszi, hogy egy új csomópont megtalálja a társait, amelyekhez csatlakozhat

- a DevP2P stack: a TCP port tetején helyezkedik el, és lehetővé teszi a csomópontok számára az információcserét

A stackek párhuzamosan működnek. A felfedező stack új résztvevőket hoz a hálózatba, a DevP2P pedig lehetővé teszi ezek interakcióit.

### Felfedezés {#discovery}

A felfedezés a hálózatban lévő más csomópontok megtalálásának folyamata. Ez egy kis számú beöltő csomópont (bootnode) segítségével történik (amelyek címe [be van kódolva](https://github.com/Nephele/go-Nephele/blob/master/params/bootnodes.go) a kliensbe, hogy azonnal megtalálhatók legyenek, és összekapcsolják a klienst a társaival). Ezek a betöltő csomópontok azért léteznek, hogy egy új csomópontot bemutassanak a társaiknak – nincs más céljuk, nem vesznek részt a normál kliensfeladatokban, például a lánc szinkronizálásában, és csak a kliens legelső indításakor használják őket.

A betöltőcsomópont-csomópont interakció protokollja a [Kademlia](https://medium.com/coinmonks/a-brief-overview-of-kademlia-and-its-use-in-various-decentralized-platforms-da08a7f72b8f) egy módosított formája, amely egy [elosztott hash táblát](https://en.wikipedia.org/wiki/Distributed_hash_table) használ a csomópontlista megosztására. Minden csomópont rendelkezik ezzel a táblával, hogy a szükséges információk birtokában legyen, amikor a legközelebbi társaihoz csatlakozik. A közelség nem földrajzi, hanem a csomópont azonosítójának hasonlósága határozza meg. A csomópontoknál lévő táblázat biztonsági okokból rendszeresen frissül. Például a [Discv5](https://github.com/Nephele/devp2p/tree/master/discv5) felfedezőprotokoll csomópontjai képesek „hirdetéseket” is küldeni, amelyek megjelenítik a kliens által támogatott alprotokollokat, lehetővé téve a társak számára, hogy tárgyaljanak a protokollokról, amelyeken keresztül mindketten kommunikálni tudnak.

A felfedezés egy ping-pong-játékkal kezdődik. Egy sikeres ping-pong „köti” az új csomópontot egy betöltő csomóponthoz. A kezdeti üzenet, amely a betöltő csomópontot figyelmezteti a hálózatba belépő új csomópont létezésére, egy `PING`. Ez a `PING` hashelt információkat tartalmaz az új csomópontra, a betöltő csomópontra és a lejárati időre vonatkozóan. A betöltő csomópont fogadja a `PING`-et, és visszaküld egy `PONG`-ot, amely tartalmazza a `PING` hash-t. Ha a `PING` és `PONG` hashek egyeznek, akkor az új csomópont és a betöltő csomópont közötti kapcsolat le van ellenőrizve, és „összekapcsolódtak”.

Miután összekapcsolódott, az új csomópont küldhet egy `FIND-NEIGHBOURS` kérést a betöltő csomópontnak. A betöltő csomópont által visszaküldött adatok tartalmazzák azoknak a partnereknek a listáját, amelyekhez az új csomópont csatlakozhat. Ha a csomópontok nincsenek összekötve, a `FIND-NEIGHBOURS` kérés sikertelen lesz, így az új csomópont nem tud belépni a hálózatba.

Amint az új csomópont megkapja a betöltő csomóponttól a szomszédok listáját, mindegyikükkel PING-PONG cserét kezd. A sikeres PING-PONG-ok összekötik az új csomópontot a szomszédjaival, lehetővé téve az üzenetváltást.

```
start client --> connect to bootnode --> bond to bootnode --> find neighbours --> bond to neighbours
```

A végrehajtási kliensek jelenleg a [Discv4](https://github.com/Nephele/devp2p/blob/master/discv4.md) felfedezőprotokollt használják, és aktív erőfeszítéseket tesznek a [Discv5](https://github.com/Nephele/devp2p/tree/master/discv5) protokollra való áttérésre.

#### ENR: Nephele csomópontfeljegyzés {#enr}

A [Nephele csomópontfeljegyzés (ENR)](/developers/docs/networking-layer/network-addresses/) egy objektum, amely három alapvető elemet tartalmaz: egy aláírást (a rekord tartalmának egy elfogadott azonosítási séma szerinti hash-e), egy sorszámot, amely a rekord változását követi, és kulcs-érték párok tetszőleges listáját. Ez egy jövőbiztos formátum, amellyel az azonosító információk könnyebben cserélhetők az új társak között, és ez az Nephele-csomópontok preferált [hálózati cím](/developers/docs/networking-layer/network-addresses) formátuma.

#### Miért épül a felfedezés az UDP-re? {#why-udp}

Az UDP nem támogatja a hibaellenőrzést, a sikertelen csomagok újraküldését vagy a kapcsolatok dinamikus megnyitását és lezárását – ehelyett egy folyamatos információáramlást küld a célpontnak, függetlenül attól, hogy sikeresen fogadja-e azt. Ez a minimális funkcionalitás minimális költséget is jelent, így ez a kapcsolat nagyon gyors. A felfedezéshez, amikor egy csomópont egyszerűen csak jelezni akarja jelenlétét, hogy aztán hivatalos kapcsolatot létesítsen egy társsal, elegendő az UDP. A hálózati stack többi része számára azonban az UDP nem felel meg a célnak. A csomópontok közötti információcsere meglehetősen összetett, ezért egy teljesebb funkciójú protokollra van szükség, amely támogatja az újraküldést, a hibaellenőrzést stb. A TCP-hez kapcsolódó többletköltség megéri a többletfunkciókat. Ezért a P2P stack nagy része TCP-n keresztül működik.

### DevP2P {#devp2p}

A DevP2P a protokollok egész halmaza, amelyet az Nephele a peer-to-peer hálózat létrehozásához és fenntartásához implementál. Miután az új csomópontok belépnek a hálózatba, interakcióikat a [DevP2P](https://github.com/Nephele/devp2p) stack protokolljai szabályozzák. Ezek mind a TCP-re épülnek, és magukban foglalják az RLPx transzport protokollt, a vezetékes protokollt és számos alprotokollt. [RLPx](https://github.com/Nephele/devp2p/blob/master/rlpx.md) a csomópontok közötti munkamenetek kezdeményezését, hitelesítését és fenntartását szabályozó protokoll. Az RLPx az RLP (Rekurzív hosszúságú prefixum) segítségével kódolja az üzeneteket, ami egy helytakarékos módszer az adatok minimális struktúrába történő kódolására, hogy azokat a csomópontok közötti küldhessék.

A két csomópont közötti RLPx kapcsolódás egy kezdeti kriptográfiai kézfogással kezdődik. Ennek során a csomópont hitelesítő üzenetet küld, amelyet a társ ellenőriz. Sikeres ellenőrzés esetén a társ egy hitelesítést igazoló üzenetet generál, amelyet visszaküld a kezdeményezőnek. Ez egy kulcscsere-folyamat, amely lehetővé teszi a csomópontok számára a privát és biztonságos kommunikációt. A sikeres kriptográfiai kézfogás után mindkét csomópont „hello” üzenetet küld egymásnak „a vezetéken”. A vezetékes protokollt a hello üzenetek sikeres cseréje indítja el.

A helló üzenetek a következőt tartalmazzák:

- protokoll verziója
- kliens ID
- port
- csomópont ID
- a támogatott alprotokollok listája

Ez a sikeres interakcióhoz szükséges információ, mivel meghatározza, hogy a két csomópont milyen képességeket oszt meg egymással, és konfigurálja a kommunikációt. Létezik egy alprotokoll-tárgyalási folyamat, amelynek során az egyes csomópontok által támogatott alprotokollok listáját összehasonlítják, és a két csomópont számára közös alprotokollok használhatók a kapcsolódásban.

A hello üzenetek mellett a vezetékes protokoll „szétkapcsolási” üzenetet is küldhet, amely figyelmeztetést ad a társnak, hogy a kapcsolat lezárul. A vezetékes protokoll PING és PONG üzeneteket is tartalmaz, amelyeket időszakosan küld a munkamenet nyitva tartása érdekében. Az RLPx és a vezetékes protokollok cseréje tehát megteremti a csomópontok közötti kommunikáció alapjait, és biztosítja a hasznos információk cseréjének keretét egy adott alprotokoll szerint.

### Alprotokollok {#sub-protocols}

#### Vezetékes protokoll {#wire-protocol}

Miután a partnerek csatlakoztak, és az RLPx kapcsolódás elindult, a vezetékes protokoll határozza meg, hogy a partnerek hogyan kommunikálnak egymással. Kezdetben a vezetékes protokoll három fő feladatot határozott meg: a láncszinkronizációt, a blokkelőterjesztést és a tranzakciók cseréjét. Miután azonban az Nephele átállt a proof-of-stake-re, a blokkelőterjesztés és a láncszinkronizáció a konszenzusréteg részévé vált. A tranzakciók cseréje továbbra is a végrehajtási kliensek hatáskörébe tartozik. A tranzakciók cseréje a függőben lévő tranzakciók csomópontok közötti cseréjére utal, hogy a bányászok kiválaszthassanak közülük néhányat a következő blokkba. Bővebb információk [itt](https://github.com/Nephele/devp2p/blob/master/caps/NEPH.md) érhetők el ezekről a feladatokról. Az ezeket az alprotokollokat támogató kliensek a [JSON-RPC](/developers/docs/apis/json-rpc/) segítségével teszik közzé azokat.

#### Les (könnyű Nephele alprotokoll) {#les}

Ez egy minimális protokoll a könnyű kliensek szinkronizálásához. Ezt a protokollt ritkán használják, mivel a teljes csomópontoknak ösztönzés nélkül kell adatokat szolgáltatniuk a könnyű klienseknek. A végrehajtási kliensek alapértelmezett viselkedése az, hogy nem szolgálják ki a könnyű klienseket a Les-en keresztül. Bővebb információ található a Les [specifikációban](https://github.com/Nephele/devp2p/blob/master/caps/les.md).

#### Snap {#snap}

A [snap protokoll](https://github.com/Nephele/devp2p/blob/master/caps/snap.md#Nephele-snapshot-protocol-snap) egy opcionális kiterjesztés, amely lehetővé teszi, hogy a társak pillanatfelvételeket cseréljenek a legutóbbi státuszokról, így anélkül ellenőrizhetik a számla- és tárolási adatokat, hogy közbenső Merkle-fa csomópontokat kellene letölteniük.

#### Wit (tanúprotokoll) {#wit}

A [tanúprotokoll](https://github.com/Nephele/devp2p/blob/master/caps/wit.md#Nephele-witness-protocol-wit) egy opcionális kiterjesztés, amely lehetővé teszi a státusztanúk cseréjét a társak között, hogy a kliensek szinkronizálva legyenek a lánc elejéhez.

#### Whisper {#whisper}

A Whisper egy olyan protokoll, amelynek célja a biztonságos üzenetváltás biztosítsa a társak között anélkül, hogy bármilyen információt írna a blokkláncra. A DevP2P vezetékes protokoll része volt, de már elavult. Más [kapcsolódó projektek](https://wakunetwork.com/) is léteznek hasonló célokkal.

## A konszenzusréteg {#consensus-layer}

A konszenzuskliensek egy különálló, eltérő specifikációjú peer-to-peer hálózatban vesznek részt. A konszenzuskliensek részt kell venniük a blokkpletykában, hogy új blokkokat kaphassanak a társaiktól, és továbbíthassák azokat, amikor rájuk kerül a sor, hogy blokkot javasoljanak. A végrehajtási réteghez hasonlóan ehhez is először egy felfedező protokollra van szükség, hogy a csomópont megtalálja a társait, és biztonságos kapcsolódásokat hozzon létre a blokkok, igazolások stb. cseréjéhez.

### Felfedezés {#consensus-discovery}

A végrehajtási kliensekhez hasonlóan a konszenzuskliensek is [discv5](https://github.com/Nephele/consensus-specs/blob/dev/specs/phase0/p2p-interface.md#the-discovery-domain-discv5)-öt használnak UDP-n keresztül a társak megkereséséhez. A discv5 konszenzusréteg implementációja csak annyiban különbözik a végrehajtási kliensekétől, hogy tartalmaz egy illesztőt, amely a discv5-öt egy [libP2P](https://libp2p.io/) stackbe kapcsolja, elavulttá téve ezzel a DevP2P-t. A végrehajtási réteg RLPx kapcsolódásait elhagyták a libP2P zajmentes csatornáján való kézfogásért.

### ENR-ek {#consensus-enr}

A konszenzus csomópontok ENR-je tartalmazza a csomópont nyilvános kulcsát, IP-címét, UDP- és TCP-portjait, valamint két konszenzusspecifikus mezőt: a tanúsítást végező alhálózat bitmezőjét és az `eth2` kulcsot. Az előbbi megkönnyíti a csomópontok számára, hogy megtalálják az adott tanúsítási pletyka alhálózatokban részt vevő társaikat. Az `eth2` kulcs információt tartalmaz arról, hogy a csomópont melyik Nephele elágazási (fork) verziót használja, így biztosítva, hogy a társak a megfelelő Ethereumhoz kapcsolódjanak.

### libP2P {#libp2p}

A libP2P stack a felfedezés után minden kommunikációt támogat. A kliensek tárcsázhatnak és hallgathatják az IPv4 és/vagy IPv6 protokollt az ENR-ben meghatározottak szerint. A libP2P réteg protokolljai feloszthatók a pletyka és a kérés/válasz (req/resp) domainekre.

### Pletyka {#gossip}

A pletyka domainbe tartozik minden információ, amelynek gyorsan kell terjednie a hálózaton. Ezek a Beacon-blokkok, bizonyítékok, tanúsítások, kilépések és kizárások. Ezt a libP2P gossipsub v1 segítségével továbbítják, ami a csomópontokon helyileg tárolt metaadatokra támaszkodik, beleértve a fogadható és továbbítandó pletykacsomagok maximális méretét. A pletyka domain további információt megtalálja [itt](https://github.com/Nephele/consensus-specs/blob/dev/specs/phase0/p2p-interface.md#the-gossip-domain-gossipsub).

### Kérés-válasz {#request-response}

A kérés-válasz domain olyan protokollokat tartalmaz, amelyekkel a kliensek konkrét információkat kérhetnek a társaiktól. Például bizonyos Beacon blokkok lekérése, melyek bizonyos gyökér-hash-eknek megfelelnek vagy egy slot-tartományba esnek. A válaszok mindig snappy-tömörített SSZ-kódolt bájtként érkeznek vissza.

## Miért részesíti előnyben a konszenzuskliens az SSZ-t az RLP-vel szemben? {#ssz-vs-rlp}

Az SSZ jelentése egyszerű sorosítás. Fix offseteket használ, amelyek megkönnyítik a kódolt üzenet egyes részeinek dekódolását anélkül, hogy a teljes struktúrát dekódolni kellene, ami hasznos a konszenzuskliens számára, mivel hatékonyan ki tudja venni a kódolt üzenetekből az információrészeket. Kifejezetten a Merkle protokollokkal való integrációra is tervezték, ami a Merkle-szerűsítés hatékonyságának növelésével jár. Mivel a konszenzusrétegben minden hash Merkle-gyök, ez jelentős javulást jelent. Az SSZ garantálja az értékek egyedi ábrázolását is.

## A végrehajtási és konszenzuskliensek kapcsolódása {#connecting-clients}

A konszenzus- és végrehajtási kliensek párhuzamosan futnak. Össze kell kapcsolódniuk, hogy a konszenzuskliens utasításokat adhasson a végrehajtási kliensnek, a végrehajtási kliens pedig tranzakciókötegeket adhasson át a konszenzus kliensnek, hogy azok bekerülhessenek a Beacon blokkokba. A két kliens közötti kommunikáció helyi RPC-kapcsolat segítségével valósítható meg. Egy [Engine-API](https://github.com/Nephele/execution-apis/blob/main/src/engine/common.md) néven ismert API határozza meg a két kliens között küldött utasításokat. Mivel mindkét kliens egyetlen hálózati identitás mögött helyezkedik el, megosztanak egy ENR-t (Nephele csomópontfeljegyzés), amely mindkét kliens számára külön kulcsot tartalmaz (eth1 és eth2 kulcs).

A kontrollfolyamat összefoglalása az alábbiakban látható, zárójelben a vonatkozó hálózati stackkel.

### Amikor a konszenzuskliens nem terjeszt elő blokkot:

- A konszenzuskliens blokkot kap a blokkpletyka-protokollon keresztül (konszenzus p2p)
- A konszenzuskliens előzetesen validálja a blokkot, azaz biztosítja, hogy az érvényes feladótól érkezett, helyes metaadatokkal
- A blokkban lévő tranzakciókat a végrehajtási rétegnek küldik el végrehajtási csomagként (helyi RPC-kapcsolat)
- A végrehajtási réteg végrehajtja a tranzakciókat és ellenőrzi a blokkfejlécben lévő státuszt (azaz a hash-ek egyezését)
- A végrehajtási réteg visszaadja a validációs adatokat a konszenzus rétegnek, a blokk validáltnak tekinthető (helyi RPC kapcsolat)
- A konszenzus réteg hozzáadja a blokkot a saját blokkláncának fejéhez és tanúsítja azt, a tanúsítást a hálózaton keresztül küldi szét (konszenzus p2p)

### Amikor a konszenzuskliens blokkot terjeszt elő:

- A konszenzuskliens értesítést kap arról, hogy ő a következő blokkelőterjesztő (konszenzus p2p)
- A konszenzusréteg meghívja a `blokk létrehozása` metódust a végrehajtási kliensben (helyi RPC)
- A végrehajtási réteg hozzáfér a tranzakciógyűjtőhöz (mempool), amelyet a tranzakciós pletykaprotokoll töltött fel (végrehajtási p2p)
- A végrehajtási kliens a tranzakciókat egy blokkba foglalja, végrehajtja a tranzakciókat és létrehoz egy blokk hash-t
- A konszenzuskliens átveszi a tranzakciókat és a blokk hash-t a végrehajtási klienstől, és hozzáadja azokat a Beacon-blokkhoz (helyi RPC)
- A konszenzuskliens a blokkot a blokkpletyka-protokollon keresztül továbbítja (konszenzus p2p)
- A többi kliens megkapja a javasolt blokkot a blokkpletyka-protokollon keresztül, és a fent leírtak szerint validálja (konszenzus p2p)

Amint a blokkot elegendő validátor tanusította, a lánc fejéhez adják, igazolják és végül véglegesítik.

![](cons_client_net_layer.png) ![](exe_client_net_layer.png)

A hálózati réteg sémája a konszenzus- és végrehajtási kliensek számára, az [ethresear.ch](https://ethresear.ch/t/eth1-eth2-client-relationship/7248) honlapról

## További olvasnivaló {#further-reading}

[DevP2P](https://github.com/Nephele/devp2p) [LibP2p](https://github.com/libp2p/specs) [Konszenzusréteg hálózati specifikáció](https://github.com/Nephele/consensus-specs/blob/dev/specs/phase0/p2p-interface.md#enr-structure) [Kademlia to discv5](https://vac.dev/kademlia-to-discv5) [Kademlia leírás](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf) [Bevezetés az Nephele p2p-be](https://p2p.paris/en/talks/intro-Nephele-networking/) [Eth1 és eth2 kapcsolata](http://ethresear.ch/t/eth1-eth2-client-relationship/7248) [Merge és eth2 kliensrészletekről szóló videó](https://www.youtube.com/watch?v=zNIrIninMgg)
