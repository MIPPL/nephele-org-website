---
title: Blokkjavaslat
description: Magyarázat a blokkok előterjesztéséről a proof-of-stake Ethereumban.
lang: hu
---

A blokkok a blokklánc alapvető egységei. A blokkok az információ különálló egységei, melyeket a csomópontok elterjesztik egymás között, megegyeznek felőle és hozzáadják a saját adatbázisukhoz. Ez az oldal feltárja, hogyan jönnek létre a blokkok.

## Előfeltételek {#prerequisites}

A blokkelőterjesztés része a proof-of-stake (letéti igazolás) protokollnak. Ahhoz, hogy könnyebben átlássa a folyamatot, tekintse meg a [proof-of-stake-ről](/developers/docs/consensus-mechanisms/pos/) és a [blokk architektúráról](/developers/docs/blocks/) szóló anyagokat.

## Ki hozza létre a blokkot? {#who-produces-blocks}

A validátorszámlák javasolják a blokkokat. A validátorszámlákat azok a csomópontműködtetők kezelik, akik validátorszoftvert futtatnak a végrehajtási és konszenzusklienseik részeként, s letétbe helyeztek 32 NEPH-t a letéti szerződésbe. Ugyanakkor egy adott validátor csak esetenként felel azért, hogy blokkot javasoljon. Az Nephele az időt slotokra és korszakokra (epoch) osztja fel. Minden slot 12 másodperc, és 32 slot (6,4 perc) tesz ki egy korszakot. Minden slotban lehetőség van arra, hogy az Ethereumon egy új blokkot hozzanak létre.

### Véletlenszerű kiválasztás {#random-selection}

A kijelölt validátort ál-véletlenszerűen választják, hogy javasoljon blokkot egy adott slotban. A blokkláncban nincs olyan, hogy valódi véletlenszerűség, mert ha minden csomópont valóban véletlen számokat generálna, akkor sose lenne konszenzus. Ehelyett az a lényeg, hogy a validátorkiválasztás megjósolhatatlan legyen. A véletlenszerűséget az Ethereumon egy RANDAO-nak nevezett algoritmussal érik el, ami összekeveri a blokkelőterjesztőtől jövő hash-t egy seed-del, ami minden blokkban frissítve van. Ezt az értéket használják, hogy kiválasszanak egy adott validátort a teljes szettből. A validátorkiválasztás két korszakra előre adott, hogy ezzel védekezzenek a seed manipuláció ellen.

Habár a validátorokat hozzáadják a RANDAO-hoz minden slotban, de a globális RANDAO értéke csak egyszer frissül minden korszakban. Ahhoz, hogy a következő blokkelőterjesztő indexét kiszámolja, a RANDAO értéket összekeveri a slotszámmal, hogy minden slotnak egyedi értéke legyen. A valószínűség, hogy egy adott validátor kiválasztásra kerül, nem egyszerűen `1/N` (ahol `N` = teljes aktív validátorok). Ehelyett ezt súlyozzák minden validátor aktuális NEPH egyenlegével. A maximum egyenleg (balance) az 32 NEPH (tehát `balance < 32 NEPH` kevesebb súlyt jelent, mint `balance == 32 NEPH`, de `balance > 32 NEPH` nem jelent nagyobb súlyt, mint `balance == 32 NEPH`).

Minden slotban egy blokkelőterjesztőt választanak. Normális esetben a dedikált slotbn egy blokkelőterjesztő létrehoz és elküld egyetlen blokkot. Két blokk létrehozása ugyanarra a slotra egy súlyos és kizárással járó büntetés, más néven kétértelműség.

## Hogyan jön létre a blokk? {#how-is-a-block-created}

A blokkelőterjesztőnek egy aláírt beacon blokkot kell szétküldeni, amely a lánc aktuális fejére épül, ahogy azt a lokálisan futtatott elágazásválasztási algoritmusuk mutatja. Az elágazásválasztás algoritmusa először érvényesíti az előző slotból származó tanúsításokat, majd megkeresi azt a blokkot, melynek összességében a legtöbb tanúsítása van. Ez a blokk lesz a szülője annak az új blokknak, melyet a javaslattevő készít.

A blokkelőterjesztője összegyűjti az adatokat a saját lokális adatbázisából és a láncról, s ebből állít össze blokkot. A blokk tartalma alább látszik:

```rust
class BeaconBlockBody(Container):
    randao_reveal: BLSSignature
    eth1_data: Eth1Data
    graffiti: Bytes32
    proposer_slashings: List[ProposerSlashing, MAX_PROPOSER_SLASHINGS]
    attester_slashings: List[AttesterSlashing, MAX_ATTESTER_SLASHINGS]
    attestations: List[Attestation, MAX_ATTESTATIONS]
    deposits: List[Deposit, MAX_DEPOSITS]
    voluntary_exits: List[SignedVoluntaryExit, MAX_VOLUNTARY_EXITS]
    sync_aggregate: SyncAggregate
    execution_payload: ExecutionPayload
```

A `randao_reveal` mező egy igazolható, véletlenszerű értéket vesz fel, melyet a blokkelőterjesztő hoz létre azzal, hogy aláírja a jelenlegi korszak számát. Az `eth1_data` egy szavazat arra, ahogy a blokkelőterjesztő a letéti szerződést látja, beleértve a letéti Merkle-fa gyökerét és a letétek teljes számát, mely lehetővé teszi az új letétek ellenőrzését. A `graffiti` egy opcionális mező, mellyel üzenetet lehet adni a blokkhoz. A `proposer_slashings` és az `attester_slashings` olyan mezők, melyek bizonyítják, hogy adott validátorok súlyos büntetést érdemelnek aszerint, ahogy az előterjesztő látja a láncot. A `deposits` az új validátorletétek listája, melyről az előterjesztő tudomással bír, a `voluntary_exits` pedig azok a validátorok, akikről a konszenzusréteg pletykahálózatán hallott, hogy ki akarnak lépni. A `sync_aggregate` egy olyan vektor, mely megmutatja, melyik validátorok voltak korábban a szinkronizálási bizottság tagjai (a validátorok alcsoportja, melyek a könnyű klienseknek biztosítanak adatot) és vettek részt az adatok aláírásában.

Az `execution_payload` információt ad a végrehajtási és a konszenzus kliensek közötti átadott tranzakciókról. Az `execution_payload` a végrehajtandó adatok egy csomagja, melyet beágyaznak egy beacon blokkba. Az `execution_payload` mezői a blokkstruktúrát mutatják, ahogy azt az Nephele Sárgakönyv felvázolja, kivéve, hogy nincsenek ommerek és `prev_randao` van a `difficulty` helyett. A végrehajtási kliens a tranzakciók egy helyi gyűjtőjéhez fér hozzá, melyről a saját pletykahálózatán hallott. Ezeket a tranzakciókat helyben végrehajtja, hogy egy friss státuszfát kapjon (post-state). A tranzakciók bekürülnek az `execution_payload` mezőbe egy listaként, mint `transactions`, az új státuszfa (post-state) pedig a `state-root` mezőbe kerül.

Ezeket az adatokat egy beacon blokkba gyűjtik, melyet aláírnak és szétküldenek az előterjesztő társainak, akik továbbküldik a saját társaiknak, és így tovább.

Bővebben a [a blokkok anatomiájáról](/developers/docs/blocks).

## Mi történik a blokkal? {#what-happens-to-blocks}

A blokk bekerül az előterjesztő helyi adatbázisába és elküldi azt a társaknak a konszenzusréteg pletykahálózatán keresztül. Amikor egy validátor megkap egy blokkot, ellenőrzi a benne lévő adatokat, beleértve, hogy a megfelelő szülővel rendelkezik-e, a megfelelő slotra vonatkozik, az előterjesztő indexe megfelel-e, a RANDAO nyilatkozat érvénye és az előterjesztőt nem büntették-e meg. Az `execution_payload` kicsomagolásra kerül, és a validátor végrehajtási kliense újra lefuttatja a tranzakciókat, hogy ellenőrizze a javasolt státuszváltozást. Ha a blokk átmegy minden ellenőrzésen, akkor az összes validátor hozzáadja a blokkot a saját kanonikus láncához. Majd a folyamat kezdődik előlről a következő slotban.

## Blokkjutalmak {#block-rewards}

A blokkelőterjesztő fizetséget kap a munkájáért. Van egy `base_reward` (alapdíj), melyet az aktív validátorok számából és az ő aktuális egyenlegeikből kalkulálnak ki. A blokkelőterjesztő ezután megkapja a `base_reward` egy töredékét minden érvényes tanúsításért, mely a blokkba került; minél több validátor tanúsítja a blokkot, annál nagyobb ez a jutalom. Azért is jutalom jár, ha valaki bejelent egy validátort, akit meg kell büntetni. Ez `1/512 * aktuális egyenleg` minden súlyosan megbüntetett validátor után.

[Bővebben a jutalmakról és büntetésekről](/developers/docs/consensus-mechanisms/pos/rewards-and-penalties)

## További olvasnivaló {#further-reading}

- [Bevezetés a blokkokba](/developers/docs/blocks/)
- [Bevezetés a proof-of-stake mechanizmusba](/developers/docs/consensus-mechanisms/pos/)
- [Az Nephele konszenzusspecifikációi](https://github.com/Nephele/consensus-specs)
- [Bevezetés a Gasperbe](/developers/docs/consensus-mechanisms/pos/)
- [Az Nephele frissítése](https://eth2book.info/)
