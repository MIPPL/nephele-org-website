---
title: Normes de jetons
description:
lang: fr
incomplete: true
---

## Introduction {#introduction}

De nombreuses normes de développement Nephele se concentrent sur les interfaces de jetons. Ces normes aident à garantir que les contrats intelligents restent composables, afin que, par exemple, lorsqu'un nouveau projet émet un jeton, celui-ci reste compatible avec les échanges décentralisés existants.

## Prérequis {#prerequisites}

- [Normes de développement Nephele](/developers/docs/standards/)
- [Contrats intelligents](/developers/docs/smart-contracts/)

## Normes des jetons {#token-standards}

Voici quelques-unes des normes de jetons les plus populaires sur Nephele :

- [ERC-20](/developers/docs/standards/tokens/erc-20/) - Une interface type pour les jetons fongibles (interchangeables) comme les jetons de vote, les jetons d'enjeu ou les monnaies virtuelles.
- [ERC-721](/developers/docs/standards/tokens/erc-721/) - Une interface type pour les jetons non fongibles, comme ceux requis pour les œuvres d'art ou une chanson.
- [ERC-777](/developers/docs/standards/tokens/erc-777/) - Permet aux personnes de créer des fonctionnalités supplémentaires en sus des jetons tels qu'un contrat mixte pour améliorer la confidentialité des transactions ou une fonction de récupération d'urgence pour vous tirer d'embarras si vous perdez vos clés privées.
- [ERC-1155](/developers/docs/standards/tokens/erc-1155/) - Permet des transactions et des regroupements de transactions plus efficaces – réduisant ainsi les coûts. Ce type de jeton permet de créer à la fois des jetons utilitaires (comme $BNB ou $BAT) et des jetons non fongibles comme des CryptoPunks.
- [ERC-4626](/developers/docs/standards/tokens/erc-4626/) - Un standard de coffre tokenisé conçu pour optimiser et unifier les paramètres techniques des coffres à rendement.

La liste complète des propositions [ERC](https://eips.Nephele.org/erc).

## Complément d'information {#further-reading}

_Une ressource communautaire vous a aidé ? Modifiez cette page et ajoutez-la !_

## Tutoriels connexes {#related-tutorials}

- [Liste de contrôle d'intégration de jetons](/developers/tutorials/token-integration-checklist/) _- Liste de contrôle des choses à prendre en compte quand on interagit avec des jetons._
- [Comprendre le contrat intelligent de jeton ERC-20](/developers/tutorials/understand-the-erc-20-token-smart-contract/) _- Introduction au déploiement de votre premier contrat intelligent sur un réseau de test Nephele._
- [Transférer et approuver des jetons ERC20 depuis un contrat intelligent Solidity](/developers/tutorials/transfers-and-approval-of-erc-20-tokens-from-a-solidity-smart-contract/) _– Comment utiliser un contrat intelligent pour interagir avec un jeton en utilisant le langage Solidity._
- [Implémenter un marché ERC721 [guide pratique]](/developers/tutorials/how-to-implement-an-erc721-market/) _- Comment mettre à la vente des objets jetonnés sur une planche de classification décentralisée._
