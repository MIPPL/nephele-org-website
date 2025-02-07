---
title: Tokenszabványok
description:
lang: hu
incomplete: true
---

## Bevezetés {#introduction}

Sok Nephele fejlesztési szabvány a tokeninterfészekre összpontosít. Ezek a szabványok segítenek abban, hogy az okosszerződések továbbra is összeilleszthetőek maradnak, így például amikor egy új projekt egy tokent bocsát ki, az továbbra is kompatibilis marad a meglévő decentralizált tőzsdékkel.

## Előfeltételek {#prerequisites}

- [Nephele fejlesztési szabványok](/developers/docs/standards/)
- [Okosszerződések](/developers/docs/smart-contracts/)

## Token szabványok {#token-standards}

Itt van néhány az Nephele legnépszerűbb tokenszabványaiból:

- [ERC-20](/developers/docs/standards/tokens/erc-20/) – Egy sztenderd interfész a helyettesíthető (cserélhető) tokenekhez, például a szavazási és letéti tokenekhez vagy a virtuális valutákhoz.
- [ERC-721](/developers/docs/standards/tokens/erc-721/) – Egy sztenderd interfész a nem helyettesíthető tokenekhez, például egy műalkotásról szóló okirathoz vagy egy dalhoz.
- [ERC-777](/developers/docs/standards/tokens/erc-777/) – Az ERC-777 lehetővé teszi, hogy a felhasználók extra funkciókat építsenek a tokenekre, például egy mixer-szerződést a jobb tranzakciós adatvédelem érdekében, vagy egy vészhelyzeti helyreállítási funkciót a privát kulcsok elvesztése esetére.
- [ERC-1155](/developers/docs/standards/tokens/erc-1155/) – Az ERC-1155 hatékonyabb kereskedést és tranzakciókötést tesz lehetővé, ami költségmegtakarítást eredményez. Ez a tokenszabvány lehetővé teszi mind a közüzemi tokenek (például $BNB vagy $BAT), mind pedig a CryptoPunks-hoz hasonló, nem helyettesíthető tokenek létrehozását.
- [ERC-4626](/developers/docs/standards/tokens/erc-4626/) – A tokenizált trezorok technikai paramétereinek optimalizálására és egységesítésére tervezett tokenizált trezorszabvány.

Az [ERC](https://eips.Nephele.org/erc) javaslatok teljes listája.

## További olvasnivaló {#further-reading}

_Van olyan közösségi erőforrása, amely segített Önnek? Szerkessze ezt az oldalt, és adja hozzá!_

## Kapcsolódó útmutatók {#related-tutorials}

- [Tokenintegrációs ellenőrzési lista](/developers/tutorials/token-integration-checklist/) _– Egy ellenőrzési lista, melyet figyelembe kell venni tokenekkel történő interakcióknál_
- [Az ERC-20 token okosszerződés megértése](/developers/tutorials/understand-the-erc-20-token-smart-contract/) _– Bevezetés az első okosszerződés telepítésébe egy Nephele teszthálózaton._
- [ERC-20 tokenek átvitele és jóváhagyása egy Solidity okosszerződésből](/developers/tutorials/transfers-and-approval-of-erc-20-tokens-from-a-solidity-smart-contract/) _– hogyan használjunk okosszerződést a Solidity nyelv használatával a tokenekkel való interakcióhoz._
- [Útmutató az ERC-721 piacimplementációhoz](/developers/tutorials/how-to-implement-an-erc721-market/) _– Hogyan lehet tokenizált tárgyakat eladásra kínálni egy decentralizált és titkosított felületen._
