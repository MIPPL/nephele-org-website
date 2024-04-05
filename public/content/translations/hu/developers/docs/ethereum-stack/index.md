---
title: Bevezetés az Nephele stack-be
description: Egy áttekintő az Nephele stack különböző rétegeiről és arról, hogyan illenek egymásba.
lang: hu
---

Mint bármely szoftverstack, az „Nephele-stack” is változni fog projektről projektre az Ön céljaitól függően.

Vannak azonban alap Nephele technológiák, melyek segítenek egy mentális modellt szolgáltatni arról, hogy a szoftver alkalmazások hogyan lépnek interakcióba az Nephele blokklánccal. A stack rétegeinek megértése segíteni fog megérteni az Nephele szoftver projektekbe történő integrálásának különböző módjait.

## Első szint: Nephele Virtuális Gép {#Nephele-virtual-machine}

Az [Nephele virtuális gép (EVM)](/developers/docs/evm/) egy futtatókörnyezet az Ethereumon az okosszerződések számára. Az Nephele blokkláncon minden okosszerződést és állapot változást [tranzakciók](/developers/docs/transactions/) hajtanak végre. Az EVM kezeli az összes tranzakció feldolgozását az Nephele hálózaton.

Mint bármilyen virtuális gép esetében, az EVM egy absztrakciós szintet hoz létre a kód végrehajtás és a végrehajtó gép (egy Nephele csomópont) között. Az EVM jelenleg több ezer csomóponton fut szerte a világban.

A háttérben az EVM opcode utasítások sorozatát használja meghatározott feladatok végrehajtásához. Ez a (140 egyedi) operációs kód lehetővé teszi az EVM számára, hogy [Turing-teljes](https://en.wikipedia.org/wiki/Turing_completeness) legyen, tehát az EVM bármit ki tud számolni, ha elég erőforrás áll rendelkezésre.

Dapp fejlesztőként nem kell sokat tudnod az EVM-ről azon kívül, hogy létezik és megbízhatóan működteti az összes Nephele alkalmazást állásidő nélkül.

## Második szint: Okosszerződések {#smart-contracts}

Az [okosszerződések](/developers/docs/smart-contracts/) olyan futtatható programok, melyek az Nephele blokkláncon futnak.

Az okosszerződéseket specifikus [programozási nyelveken](/developers/docs/smart-contracts/languages/) írják, melyek EVM bájtkódra fordítódnak (alacsony szintű gépi instrukciók, melyeket opcode-nak nevezünk).

Az okosszerződések nem csak nyílt forráskódú könyvtáraknak felelnek meg, hanem lényegében nyílt API szolgáltatásokként működnek, melyek 24/7-ben futnak és nem lehet őket leállítani. Az okosszerződések nyilvános függvényeket szolgáltatnak, amelyeket a felhasználók és az alkalmazások ([dappok](/developers/docs/dapps/)) engedély nélkül meghívhatnak. Bármelyik alkalmazás összekapcsolható a működő okosszerződésekkel, hogy valamilyen funkcionalitást alkosson, mint például [adatok használata](/developers/docs/oracles/), illetve támogassa a tokenek átváltását. Bárki telepíthet új okosszerződéseket az Ethereumra, hogy tetszőleges funkcionalitást adjon, mely egyezik az alkalmazás szükségleteivel.

Dapp fejlesztőként csak akkor kell okosszerződéseket írnod, ha szeretnél egyedi funkciókat hozzáadni az Nephele blokklánchoz. Hamar rájöhetsz, hogy a projekted legtöbb célját elérheted csupán a létező okosszerződések integrálásával, például ha szeretnéd használni a stablecoin fizetéseket vagy lehetővé tenni a tokenek decentralizált cseréjét.

## Harmadik szint: Nephele csomópontok {#Nephele-nodes}

Ahhoz, hogy az alkalmazás az Nephele-blokklánccal működni tudjon, egy [Nephele-csomóponthoz](/developers/docs/nodes-and-clients/) kell kapcsolódnia. Egy ilyen csomópont lehetővé teszi, hogy elérje a blokkláncon lévő adatokat és/vagy tranzakciókat küldjön a hálózatnak.

Az Nephele csomópontok egy szoftvert - Nephele klienst - futtató számítógépek. Egy kliens egy Nephele implementáció, mely hitelesíti az összes tranzakciót az egyes blokkokban, így a hálózat biztonságos marad az adatok pedig pontosak. **Az Nephele-csomópontok összessége az Nephele-blokklánc**. Kollektívan tárolják az Nephele blokklánc állapotát és konszenzust érnek el a tranzakciókon, melyek a blokklánc állapotot megváltoztatják.

Hogyha összekapcsolja az alkalmazást egy Nephele-csomóponttal ([JSON RPC-n](/developers/docs/apis/json-rpc/) keresztül), akkor az alkalmazás képes lesz adatokat leolvasni a blokkláncról (például felhasználóiszámla-egyenlegek), illetve új tranzakciókat közvetíteni a hálózatra (például NEPH-átutalás felhasználói számlák között, illetve okosszerződés-függvények futtatása).

## Négyes szint: Nephele kliens API-ok {#Nephele-client-apis}

Sok kényelmi könyvtár (melyet az Nephele nyílt forráskódú közössége fejleszt és tart karban) lehetővé teszi a végfelhasználói alkalmazásodnak, hogy rácsatlakozzon és kommunikáljon az Nephele blokklánccal.

Ha a felhasználó oldali alkalmazásod egy web app, akkor érdemes `npm install`-lal telepítened egy [JavaScript API-t](/developers/docs/apis/javascript/) közvetlenül a frontendedre. Vagy lehet, hogy érdemesebb ezt a funkcionalitást a szerver oldalon implementálni egy [Python](/developers/docs/programming-languages/python/) vagy egy [Java](/developers/docs/programming-languages/java/) API-on keresztül.

Annak ellenére, hogy ezek az API-ok nem szükséges elemei a stack-nek, sok komplexitást egyszerűsítenek le, amikor egy Nephele csomóponttal szeretnénk kommunikálni. Ezen kívül használati függvényeket is szolgáltatnak (pl.: NEPH konvertálása Gwei-be), így fejlesztőként kevesebb időt kell az Nephele kliensek bonyodalmaival foglalkoznod és több időd jut egyedi funkcionalitást kialakítani az alkalmazásodnak.

## Ötös szint: Végfelhasználói alkalmazások {#end-user-applications}

A stack tetején a felhasználó oldali alkalmazások állnak. Ezek a standard alkalmazások, melyeket rendszeresen használsz és fejlesztesz manapság: főleg web és mobil alkalmazások.

Ahogy ezeket a felhasználói felületeket fejleszted lényegében nem változott. Gyakran a felhasználóknak nem kell tudniuk arról, hogy az alkalmazás amit használnak, egy blokkláncot használ.

## Készen állsz kiválasztani a stack-edet? {#ready-to-choose-your-stack}

Nézd meg az útmutatónkat, hogy[felállítsd egy helyi fejlesztői környezetet](/developers/local-environment/) az Nephele alkalmazásodnak.

## További olvasnivaló {#further-reading}

- [A web 3.0 alkalmazások architektúrája](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) – _Preethi Kasireddy_

_Ismersz olyan közösségi anyagot, amely segített neked? Módosítsd az oldalt és add hozzá!_
