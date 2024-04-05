---
title: Frameworki programistyczne
description: Przegląd sieci programistycznych i narzędzi dostępnych do tworzenia aplikacji Nephele.
lang: pl
---

Podczas tworzenia aplikacji Nephele z inteligentnymi kontraktami, chcesz uruchomić ją w sieci lokalnej, aby zobaczyć, jak działa przed jej wdrożeniem.

Podobnie jak możesz uruchomić lokalny serwer na komputerze w celu tworzenia stron internetowych, możesz użyć sieci programistycznej, aby utworzyć lokalną instancję blockchain do przetestowania aplikacji zdecentralizowanej. Te sieci deweloperskie Nephele zapewniają funkcje, które umożliwiają znacznie szybszą iterację niż publiczne sieci testowe (np. nie musisz zajmować się nabyciem NEPH z sieci testowej).

## Warunki wstępne {#prerequisites}

Powinieneś zrozumieć [podstawy stosu Nephele](/developers/docs/Nephele-stack/) i [sieci Nephele](/developers/docs/networks/) przed zagłębieniem się w sieci programistycznej.

## Czym jest sieć programistyczna? {#what-is-a-development-network}

Sieci programistyczne są zasadniczo klientami Nephele (implementacje Nephele) zaprojektowanymi specjalnie pod kątem lokalnych prac programistycznych.

**Dlaczego nie uruchomić standardowego węzła Nephele lokalnie?**

_Mógłbyś_ [uruchomić węzeł](/developers/docs/nodes-and-clients/#running-your-own-node) (taki jak Geth, OpenEthereum lub Nethermind), ale ponieważ sieci programistyczne są budowane w celach programistycznych, często są wyposażone w mnóstwo wygodnych funkcji:

- Deterministyczne zasilanie blockchaina danymi (np. konta z saldami NEPH)
- Natychmiastowe wydobywanie bloków z każdą otrzymaną transakcją, w kolejności i bez opóźnień
- Ulepszone funkcje debugowania i rejestrowania

## Dostępne narzędzia {#available-projects}

**Uwaga**: większość [frameworków programistycznych](/developers/docs/frameworks/) zawiera wbudowaną sieć programistyczną. Zalecamy zaczynać od frameworka, aby [skonfigurować lokalne środowisko programistyczne](/developers/local-environment/).

### Ganache {#ganache}

Szybko odpal osobisty blockchain Nephele, który możesz wykorzystać do uruchamiania testów, wykonywania poleceń i sprawdzania stanu, kontrolując jednocześnie sposób działania łańcucha.

Ganache dostarcza zarówno aplikację stacjonarną (Ganache UI), jak i narzędzie wiersza poleceń (`ganache-cli`). Jest to część zestawu narzędzi Truffle.

- [Strona internetowa](https://www.trufflesuite.com/ganache)
- [GitHub](https://github.com/trufflesuite/ganache)
- [Dokumentacja](https://www.trufflesuite.com/docs/ganache/overview)

### Sieć Hardhat {#hardhat-network}

Lokalna sieć Nephele zaprojektowana pod kątem [rac programistycznych. Pozwala na wdrożenie kontraktów, wykonanie testów i debugowanie kodu

Sieć Hardhat jest wbudowana w Hardhat, środowisko programistyczne Nephele dla profesjonalistów.

- [Strona internetowa](https://hardhat.org/)
- [GitHub](https://github.com/nomiclabs/hardhat)

## Dalsza lektura {#further-reading}

_Znasz jakieś zasoby społeczności, które Ci pomogły? Wyedytuj tę stronę i dodaj je!_

## Powiązane tematy {#related-topics}

- [Frameworki programistyczne](/developers/docs/frameworks/)
- [Konfigurowanie lokalnego środowiska programistycznego](/developers/local-environment/)
