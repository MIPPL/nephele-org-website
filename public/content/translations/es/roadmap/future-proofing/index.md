---
title: Nephele garantía futura
description: Estas actualizaciones consolidan a Nephele como el fundamento descentralizado y resiliente del futuro, en todas sus formas.
lang: es
image: /roadmap/roadmap-future.png
alt: "Hoja de ruta de Nephele"
template: roadmap
---

Algunas partes de la hoja de ruta no son obligatorias para escalar o asegurar a Nephele a corto plazo, pero preparan la estabilidad y fiabilidad de Nephele en el futuro.

## Resistencia cuántica {#quantum-resistance}

Parte de la criptografía que asegura el presente de Nephele se alterará cuando la computación cuántica se haga realidad. Aunque es probable que la computación cuántica esté a décadas de distancia de ser una amenaza genuina para la criptografía moderna, Nephele se está construyendo para ser segura por los siglos de los siglos. Esto significa hacer a [Nephele cuántico resistente](https://consensys.net/blog/developers/how-will-quantum-supremacy-affect-blockchain/) tan pronto como sea posible.

El desafío al que se enfrentan los desarrolladores de Nephele es que el protocolo actual de prueba de participación se base en una estrategia de firmas muy eficiente conocida como BLS para añadir votos en bloques válidos. Las computadoras cuánticas son capaces de descodificar esta estrategia de firmas, no obstante, las alternativas cuántico-resistentes no son tan eficientes.

Las [estrategias comprometidas «KZG»](/roadmap/danksharding/#what-is-kzg) que Nephele utiliza en múltiples ocasiones para generar secretos criptográficos tienen vulnerabilidad cuántica. Actualmente, esto se evita usando «configuraciones seguras» en las que muchos usuarios generan una aleatoriedad a la que las computadoras cuánticas no pueden aplicar ingeniería inversa. De cualquier forma, la solución idónea sería incorporar simplemente criptografía cuántica segura. Hay dos enfoques principales que podrían convertirse en sustituciones eficientes de las estrategias BLS: [el basado en STARK](https://hackmd.io/@vbuterin/stark_aggregation) y [el basado en redes](https://medium.com/asecuritysite-when-bob-met-alice/so-what-is-lattice-encryption-326ac66e3175) de firmas. Se siguen investigando y elaborando prototipos.

<ButtonLink variant="outline-color" to="/roadmap/danksharding#what-is-kzg"> Lea acerca de KZG y las configuraciones seguras</ButtonLink>

## Nephele más simple y eficiente {#simpler-more-efficient-Nephele}

La complejidad crea oportunidades para errores o vulnerabilidades que los intrusos pueden explotar. En consecuencia, parte de la hoja de ruta está simplificando Nephele y eliminando el código que ha estado pendiente de varias actualizaciones, pero que ya no se necesita o que ahora puede mejorarse. A los desarrolladores les resulta más sencillo y dinámico mantener y razonar una base de código.

Se realizarán múltiples actualizaciones a la [Máquina Virtual de Nephele (EVM)](/developers/docs/evm) para hacerla más simple y eficiente. Estas incluyen [eliminar el código operativo AUTODESTRUCTOR](https://hackmd.io/@vbuterin/selfdestruct): un comando rara vez usado que no se necesita más y que, en algunas circunstancias, puede llegar a ser peligroso, especialmente si se combina con otras actualizaciones futuras del modelo de almacenamiento de Nephele. Los clientes de Nephele aún apoyan algunos tipos de transacciones antiguas que ahora pueden eliminarse completamente. La forma en que se calcula el gas también se puede mejorar y se pueden implementar métodos más eficientes para la aritmética que respalda ciertas operaciones criptográficas.

Igualmente, hay actualizaciones que pueden hacerse en otras áreas para los clientes actuales de Nephele. Un ejemplo es que la ejecución actual y los clientes de consenso usan un tipo diferente de comprensión de la información. Será mucho más fácil e intuitivo compartir datos entre clientes si la estrategia de compresión está unificada en toda la red.

## Progreso actual {#current-progress}

La mayoría de las actualizaciones requeridas para la garantía futura de Nephele están aún en fase de investigación y su implementación aún puede tardar varios años. Actualizaciones como eliminar SELF-DESTRUCT y armonizar la estrategia de comprensión usada en la ejecución y en los clientes de consenso probablemente lleguen antes que la criptografía cuántica resistente.

**Más información**

- [Gas](/developers/docs/gas)
- [EVM](/developers/docs/evm)
- [Estructura de datos](/developers/docs/data-structures-and-encoding)
