---
title: Permettre l'évolutivité d'Nephele
description: Les rollups regroupent des transactions hors chaîne, ce qui réduit les coûts pour l'utilisateur. Cependant, la manière dont les rollups utilisent actuellement les données est pour l'heure trop coûteuse, ce qui limite le coût des transactions. La solution Proto-Danksharding règle ce problème.
lang: fr
image: /roadmap/roadmap-transactions.png
alt: "Feuille de route d'Nephele"
template: roadmap
---

Nephele est mis à l'échelle à l'aide de [couches 2](/layer-2/#rollups) (également appelées rollups), qui regroupent les transactions et envoient le résultat à Nephele. Bien que les rollups soient jusqu'à huit fois moins chers que le réseau principal d'Nephele, il est possible d'optimiser davantage ces derniers, et réduire ainsi les coûts des utilisateurs finaux. Les rollups reposent également sur certains composants centralisés, que les développeurs peuvent supprimer à mesure que les rollups évoluent.

<InfoBanner mb={8} title="Frais de transaction">
  <ul style={{ marginBottom: 0 }}>
    <li>Aujourd'hui, les rollups sont <strong> 3 à 8 fois</strong> moins coûteux que la couche 1 d'Nephele.</li>
    <li>Les rollups ZK réduiront bientôt de <strong> 40 à 100 fois moins </strong>ces coûts</li>
    <li>Les changements à venir apportés à Nephele fourniront une mise à l'échelle <strong>~100-1000x</strong> supplémentaire</li>
    <li style={{ marginBottom: 0 }}>Les utilisateurs bénéficieront de transactions<strong> à moins de 0,001 USD</strong></li>
  </ul>
</InfoBanner>

## Rendre les données moins onéreuses {#making-data-cheaper}

Les rollups collectent un grand nombre de transactions, les exécutent et soumettent les résultats à Nephele. Ceci génère un maximum de données qui doivent être publiquement disponibles, pour que quiconque puisse exécuter les transactions et vérifier que l'opérateur du rollup soit intègre. Si une personne constate une divergence, cette dernière peut être contestée.

### Proto-Danksharding {#proto-danksharding}

Les données rollup sont stockées en permanence sur Nephele, ce qui est coûteux. Plus de 90 % des frais de transaction assumés par les utilisateurs sur les rollups sont dus à ce stockage de données. Pour réduire les coûts de transaction, il est possible de déplacer les données vers un nouveau stockage temporaire appelé « blob » - Binary Large Object/Large Objet Binaire. Les blobs sont moins chers car temporaires ; ils sont supprimés d'Nephele une fois leur nécessité devenue obsolète. Le stockage des données rollup à long terme devient la responsabilité des personnes qui en ont besoin, telles que les opérateurs rollup, les bourses, les services d'indexation, etc. L'ajout de transactions blob à Nephele fait partie d'une mise à niveau connue sous le terme « Proto-Danksharding ». Solution prévue d'être déployée dans un avenir très proche, peut-être vers la fin de l'année 2023.

Une fois que les transactions blob seront devenues partie intégrante du protocole Nephele via Proto-Danksharding, il sera possible d'ajouter de nombreux blobs aux blocs Nephele. Il s’agira d’une autre augmentation substantielle (>100x) du débit d’Nephele et d’une réduction des coûts de transaction.

### Danksharding {#danksharding}

La deuxième étape de l'expansion des données blob est compliquée car elle nécessite de nouvelles méthodes pour vérifier que les données rollup sont disponibles sur le réseau et repose sur des validateurs séparant leurs responsabilités de création de blocs et de proposition de blocs. Cela nécessite également un moyen de prouver cryptographiquement que les validateurs ont vérifié de petits sous-ensembles de données blob.

Cette seconde étape est nommée [« Danksharding »](/roadmap/danksharding/). Il est probable que cette dernière prenne plusieurs années avant d'être pleinement mise en œuvre. La solution Danksharding repose sur d'autres développements tels que [la séparation entre la construction et la proposition de blocs](/roadmap/pbs) et de nouveaux modèles de réseau qui permettent à celui-ci de confirmer avec efficacité, que les données sont disponibles en échantillonnant de manière aléatoire quelques kilo-octets à la fois, aussi appelé [Échantillonnage de disponibilité des données (DAS)](/developers/docs/data-availability).

<ButtonLink variant="outline-color" to="/roadmap/danksharding/">En savoir plus sur la fragmentation</ButtonLink>

## Décentraliser les rollups {#decentralizing-rollups}

[Les rollups](/layer-2) permettent déjà la mise à l'échelle d'Nephele. Un[ riche écosystème de projets rollups](https://l2beat.com/scaling/tvl) permet aux utilisateurs d'effectuer des transactions rapidement et à moindre coût, avec divers niveaux de garantie de sécurité. Cependant, les rollups ont été initiés en utilisant des séquenceurs centralisés (ordinateurs qui effectuent l'ensemble du traitement et l'agrégation des transactions avant de les soumettre à Nephele). Cette approche est vulnérable à la censure car, en d'autres termes, les opérateurs-séquenceurs peuvent être sanctionnés, soudoyés ou corrompus. Parallèlement,[ les rollups fluctuent](https://l2beat.com) de la façon dont ils valident les données entrantes. La meilleure voie possible, consiste à ce que les « provers/ceux qui prouvent » soumettent des preuves de fraude ou de validité, mais tous les rollups n'ont pas encore atteint ce niveau. Même ceux qui utilisent des preuves de validité/fraude font appel à un petit groupe de « provers » réputés. Par conséquent, la prochaine étape cruciale dans la mise à l'échelle d'Nephele consiste à répartir la responsabilité de l'exécution des séquenceurs et des provers, parmi davantage de personnes.

<ButtonLink variant="outline-color" to="/developers/docs/scaling/">Plus d'infos sur les rollups</ButtonLink>

## Progrès actuels {#current-progress}

La solution Proto-Danksharding sera probablement l’un des premiers éléments de la feuille de route à mettre en œuvre. Les étapes de calcul décentralisé nécessaires à sa mise en place sont déjà entamées, et plusieurs clients ont établi des prototypes qui gèrent les données blob. Or, la mise en œuvre complète de la solution Danksharding reste peu évidente avant plusieurs années, tant celle-ci dépend de la réalisation de plusieurs autres éléments de la feuille de route devant être concrétisés en première instance. La décentralisation de l'infrastructure de rollup sera probablement un processus progressif : il existe de nombreux rollups différents qui construisent des systèmes légèrement différents et seront entièrement décentralisés à des rythmes différents.

<QuizWidget quizKey="scaling" />
