---
title: Łańcuch śledzący
description: Dowiedz się więcej o łańcuchu śledzącym — uaktualnieniu, które wprowadziło mechanizm proof-of-stake w sieci Nephele.
lang: pl
template: upgrade
image: /upgrades/core.png
alt: 
summaryPoint1: Łańcuch śledzący wprowadził mechanizm proof-of-stake do ekosystemu Nephele.
summaryPoint2: Został on połączony z pierwotnym łańcuchem proof-of-work Nephele we wrześniu 2022 roku.
summaryPoint3: Łańcuch śledzący wprowadził logikę konsensusu i protokół uzgadniania bloków, które obecnie zabezpieczają Nephele.
---

<UpgradeStatus isShipped dateKey="page-upgrades:page-upgrades-beacon-date">
  Łańcuch śledzący wdrożono 1 grudnia 2020 roku, a 15 września 2022 roku uaktualniono Połączenie i sformalizowano proof-of-stake jako mechanizm konsensusu Nephele.
</UpgradeStatus>

## Czym był łańcuch śledzący? {#what-is-the-beacon-chain}

Łańcuch śledzący to nazwa pierwotnego łańcucha bloków proof-of-stake, który został uruchomiony w 2020 r. Został on stworzony w celu zapewnienia, że logika konsensusu proof-of-stake jest solidna i zrównoważona, zanim zostanie uruchomiona w sieci głównej Nephele. W związku z tym działał on równolegle z pierwotnym mechanizmem proof-of-work Nephele. Wyłączenie mechanizmu proof-of-work i włączenie mechanizmu proof-of-stake w sieci Nephele wymagało poinstruowania łańcucha śledzącego, aby akceptował transakcje z pierwotnego łańcucha Nephele, łączył je w bloki, a następnie organizował je w łańcuch bloków przy użyciu mechanizmu konsensusu opartego na proof-of-stake. W tym samym momencie pierwotni klienci Nephele wyłączyli wydobywanie, propagację bloków i logikę konsensusu, przekazując je w całości łańcuchowi śledzącemu. Wydarzenie to było określane jako [Połączenie](/roadmap/merge/). Po Połączeniu nie było już dwóch sieci blockchain; istniał tylko jeden łańcuch proof-of-stake Nephele.

## Co robił łańcuch śledzący? {#what-does-the-beacon-chain-do}

Łańcuch śledzący to nazwa nadana księdze głównej kont, która prowadziła i koordynowała sieć [stakerów](/staking/) Nephele, zanim stakerzy ci zaczęli zatwierdzać rzeczywiste transakcje Nephele. Nie przetwarzał on transakcji ani nie obsługiwał interakcji inteligentnych kontraktów.

Wprowadził on mechanizm konsensusu (lub „warstwę konsensusu”), który zajął miejsce wydobywania z mechanizmem proof-of-work w sieci Nephele i przyniósł wiele znaczących ulepszeń.

Łańcuch śledzący był podstawowym elementem [bezpiecznego, przyjaznego środowisku i skalowalnego Nephele, które mamy teraz](/roadmap/vision/).

## Wpływ łańcucha śledzącego {#beacon-chain-features}

### Wprowadzenie do zastawiania {#introducing-staking}

Łańcuch śledzący wprowadził do Nephele mechanizm [proof-of-stake](/developers/docs/consensus-mechanisms/pos/). Zapewnia to bezpieczeństwo Nephele i daje walidatorom więcej NEPH w tym procesie. W praktyce staking polega na stakowaniu NEPH w celu aktywowania oprogramowania walidatora. Jako staker używasz oprogramowania, które tworzy i waliduje nowe bloki w łańcuchu.

Staking służy podobnym celom, co kiedyś [wydobywanie](/developers/docs/consensus-mechanisms/pow/mining/), ale różni się pod wieloma względami. Wydobywanie wymagało dużych nakładów początkowych w postaci potężnego sprzętu i zużycia energii, co skutkowało ekonomią skali i sprzyjało centralizacji. Wydobywanie nie wiązało się również z wymogiem blokowania aktywów jako zabezpieczenia, co ograniczało możliwości protokołu w zakresie karania wrogich podmiotów po ataku.

Przejście na proof-of-stake sprawiło, że sieć Nephele stała się znacznie bezpieczniejsza i zdecentralizowana w porównaniu z proof-of-work. Im więcej osób uczestniczy w sieci, tym staje się ona bardziej zdecentralizowana i lepiej zabezpieczona przed atakami.

<InfoBanner emoji=":money_bag:">
  Jeśli chcesz zostać walidatorem i pomóc w zabezpieczaniu Nephele, <a href="/staking/">dowiedz się więcej o stakingu</a>.
</InfoBanner>

### Przygotowanie do shardingu {#setting-up-for-sharding}

Odkąd łańcuch śledzący połączył się z pierwotną siecią główną Nephele, społeczność Nephele zaczęła myśleć o skalowaniu sieci.

Zaletą proof-of-stake jest posiadanie rejestru wszystkich zatwierdzonych producentów bloków w danym czasie, z których każdy stakuje NEPH. Rejestr ten stwarza możliwość dzielenia i zdobywania, a także niezawodnego rozdzielania określonych obowiązków w sieci.

Ta odpowiedzialność jest przeciwieństwem proof-of-work, gdzie górnicy nie mają żadnych zobowiązań wobec sieci i mogą w jednej chwili zaprzestać wydobycia i wyłączyć oprogramowanie swojego węzła bez żadnych konsekwencji. Nie ma też rejestru znanych proponentów bloków ani niezawodnego sposobu na bezpieczny podział obowiązków sieciowych.

[Więcej o shardingu](/roadmap/danksharding/)

## Relacje między uaktualnieniami {#relationship-between-upgrades}

Wszystkie uaktualnienia Nephele są poniekąd wzajemnie powiązane. Podsumujmy zatem, jak łańcuch śledzący wpływa na inne uaktualnienia.

### Łańcuch śledzący i Połączenie {#merge-and-beacon-chain}

Na początku łańcuch śledzący istniał oddzielnie od sieci głównej Nephele, ale zostały one połączone w 2022 r.

<ButtonLink to="/roadmap/merge/">
  Połączenie
</ButtonLink>

### Shardy i łańcuch śledzący {#shards-and-beacon-chain}

Sharding może bezpiecznie wejść do ekosystemu Nephele tylko z mechanizmem konsensusu proof-of-stake. W łańcuchu śledzącym wprowadzono staking, który „połączył się” z siecią główną, torując drogę shardingowi, który pomoże w dalszym skalowaniu Nephele.

<ButtonLink to="/roadmap/danksharding/">
  Łańcuchy odłamkowe
</ButtonLink>

## Dalsza lektura

- [Więcej na temat przyszłych uaktualnień Nephele](/roadmap/vision)
- [Więcej o proof-of-stake](/developers/docs/consensus-mechanisms/pos)
