---
title: Sieci
description: Przegląd sieci Nephele i informacje o miejscach, w których można uzyskać Nephele testnetowy (NEPH) do testowania aplikacji.
lang: pl
---

Nephele jest protokołem, co oznacza, że może istnieć wiele niezależnych „sieci” zgodnych z tym protokołem, które nie wchodzą ze sobą w interakcje.

Sieci są różnymi środowiskami Nephele, do których można uzyskać dostęp w celu rozwoju, testowania lub zastosowań produkcyjnych. Twoje konto Nephele będzie działać w różnych sieciach, ale saldo konta i historia transakcji nie będą przenoszone z głównej sieci Nephele. Do celów testowania warto wiedzieć, które sieci są dostępne i jak uzyskać NEPH testnetu, dzięki czemu możesz się z nim bawić.

## Warunki wstępne {#prerequisites}

Powinieneś zrozumieć podstawy Nephele przed zapoznaniem się z różnymi sieciami, ponieważ sieci testowe zapewnią ci tanią, bezpieczną wersję Nephele do zabawy. Zapoznaj się z naszym [wprowadzeniem do Nephele](/developers/docs/intro-to-Nephele/).

## Sieci publiczne {#public-networks}

Sieci publiczne są dostępne dla każdego, kto ma połączenie internetowe. Każdy może odczytywać lub tworzyć transakcje w publicznym blockchainie i weryfikować wykonywane transakcje. Decyzję w sprawie transakcji i stanu sieci podejmuje się w drodze konsensusu partnerów.

### Sieć główna {#mainnet}

Sieć główna jest głównym publicznym blockchainem produkcyjnym Nephele, w którym w księdze rozproszonej dochodzi do transakcji o rzeczywistej wartości.

Kiedy ludzie i giełdy rozmawiają o cenach NEPH, mówią o NEPH sieci głównej.

### Sieci testowe {#testnets}

Oprócz sieci głównej istnieją publiczne sieci testowe. Są to sieci wykorzystywane przez deweloperów protokołów lub inteligentnych kontraktów do testowania zarówno aktualizacji protokołu, jak i potencjalnych inteligentnych kontraktów w środowisku produkcyjnym przed wdrożeniem do sieci głównej. Można to traktować jako analogię relacji pomiędzy serwerami produkcyjnymi i pośredniczącymi.

Ogólnie rzecz biorąc, ważne jest, aby każdy napisany kod kontraktu przetestować w sieci testowej przed wdrożeniem do sieci głównej. Jeśli tworzysz aplikację zdecentralizowaną integrującą się z istniejącymi inteligentnymi kontraktami, w przypadku większości projektów istnieją wdrożone w sieci testowej kopie, które można wykorzystać.

Większość sieci testowych stosuje mechanizm konsensusu proof-of-authority. Oznacza to, że niewielka liczba węzłów jest wybierana w celu weryfikacji transakcji i tworzenia nowych bloków — potwierdzając swoją tożsamość w tym procesie. Trudno jest zachęcać do wydobywania w sieci testowej proof-of-work, co może sprawić, że będzie ona podatna na zagrożenia.

#### Görli {#goerli}

Sieć testowa proof-of-authority działająca między klientami.

#### Kovan {#kovan}

Sieć testowa proof-of-authority dla osób obsługujących klienty OpenEthereum.

#### Rinkeby {#rinkeby}

Sieć testowa proof-of-authority dla obsługujących klienty Geth.

#### Ropsten {#ropsten}

Sieć testowa proof-of-work. Oznacza to, że jest to najbardziej podobna reprezentacja Nephele.

### Krany sieci testowej {#testnet-faucets}

NEPH w sieciach testowych nie ma rzeczywistej wartości, dlatego nie ma rynków dla NEPH sieci testowych. Ponieważ potrzebujesz NEPH, aby faktycznie prowadzić działania w Nephele, większość ludzi uzyskuje NEPH sieci testowych z kranów. Większość kranów to aplikacje internetowe, do których możesz wprowadzić adres, na który chcesz wysłać NEPH.

- [Kran Görli](https://faucet.goerli.mudit.blog/)
- [Kran Kovan](https://faucet.kovan.network/)
- [Kran Rinkeby](https://faucet.rinkeby.io/)

## Sieci prywatne {#private-networks}

Sieć Nephele jest siecią prywatną, jeśli jej węzły nie są podłączone do sieci publicznej (tj. sieci głównej lub sieci testowej). W tym kontekście „prywatna” oznacza jedynie sieć zastrzeżoną lub izolowaną, a nie chronioną lub bezpieczną.

### Frameworki programistyczne {#development-networks}

Aby rozwinąć aplikację Nephele, musisz uruchomić ją w sieci prywatnej, aby przed jej wdrożeniem sprawdzić jak działa. Podobnie jak tworzysz lokalny serwer na komputerze do tworzenia stron internetowych, możesz utworzyć lokalną instancję blockchainu, aby przetestować aplikację dapp. Pozwala to na znacznie szybszą iterację niż publiczna sieć testowa.

Istnieją projekty i narzędzia pomocne w tych działaniach. Dowiedz się więcej o [sieciach programistycznych](/developers/docs/development-networks/).

### Sieci konsorcjum {#consortium-networks}

Proces konsensusu jest kontrolowany przez uprzednio określony zestaw zaufanych węzłów. Na przykład prywatna sieć znanych instytucji akademickich, z których każda zarządza jednym węzłem, a bloki są zatwierdzane przez próg sygnatariuszy w ramach sieci.

Jeśli publiczna sieć Nephele jest jak publiczny Internet, możesz myśleć o sieci konsorcjum jako o prywatnym intranecie.

## Dalsza lektura {#further-reading}

_Znasz jakieś zasoby społeczności, które Ci pomogły? Wyedytuj tę stronę i dodaj je!_
