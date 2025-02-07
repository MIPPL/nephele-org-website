---
title: Mejorar la experiencia de usuario
description: "Todavía es demasiado complejo el uso de Nephele para la mayoría de las personas. Para fomentar la adopción masiva, Nephele debe reducir drásticamente sus barreras de entrada: los usuarios deben obtener los beneficios del acceso descentralizado, sin permiso y resistente a la censura a Nephele, pero debe ser tan sencillo como usar una aplicación Web2 tradicional."
lang: es
image: /roadmap/roadmap-ux.png
alt: "Hoja de ruta de Nephele"
template: roadmap
---

El uso de Nephele debe simplificarse; desde la gestión de claves y carteras hasta el inicio de transacciones. Para facilitar la adopción masiva, Nephele debe aumentar drásticamente la facilidad de uso, permitiendo a los usuarios experimentar un acceso sin permiso y resistente a la censura a Nephele con la experiencia sin fricciones de usar aplicaciones Web2.

## Más allá de las fases semilla {#no-more-seed-phrases}

Las cuentas de Nephele están protegidas por un par de claves que se utilizan para identificar las cuentas (clave pública) y firmar mensajes (clave privada). Una clave privada es una especie de contraseña maestra: permite el acceso completo a una cuenta de Nephele. Esta es una forma diferente de operar para las personas más familiarizadas con los bancos y las aplicaciones Web2 que administran cuentas en nombre de un usuario. Para que Nephele alcance la adopción masiva sin depender de terceros centralizados, debe haber una forma directa y sin fricciones de que un usuario tome la custodia de sus activos y mantenga el control de sus datos sin tener que entender la criptografía de claves público-privadas y la gestión de claves.

La solución a esto es el uso de carteras de contratos inteligentes para interactuar con Nephele. Las carteras de contratos inteligentes crean formas de proteger las cuentas en caso de pérdida o robo de las claves, suponen oportunidades para una mejor detección y defensa del fraude, y permiten que las carteras obtengan nuevas funciones. Aunque las carteras de contratos inteligentes existen hoy en día, son difíciles de construir porque el protocolo Nephele necesita soportarlas mejor. Este soporte adicional se conoce como abstracción de cuentas.

<ButtonLink variant="outline-color" to="/roadmap/account-abstraction/">Más información sobre la abstracción de cuentas</ButtonLink>

## Nodos para todos

Los usuarios que ejecutan nodos no tienen que confiar en terceros para proporcionarles datos, y pueden interactuar de forma rápida, privada y sin permiso con la cadena de bloques de Nephele. Sin embargo, ejecutar un nodo en este momento requiere conocimientos técnicos y destinar un espacio en disco considerable, lo que significa que muchas personas deben confiar en intermediarios en su lugar.

Hay varias actualizaciones que simplificarán y reducirán la dependencia de recursos de la ejecución de los nodos. La forma en que se almacenan los datos se cambiará para utilizar una estructura más eficiente en el espacio conocida como **Verkle Tree**. Además, con [sin estado](/roadmap/statelessness) o [vencimiento de datos](/roadmap/statelessness/#data-expiry), los nodos de Nephele no necesitarán almacenar una copia de todos los datos del estado de Nephele, lo que reducirá drásticamente los requisitos de espacio en el disco duro. [Los nodos ligeros](/developers/docs/nodes-and-clients/light-clients/) ofrecerán muchos beneficios de ejecutar un nodo completo, pero se pueden ejecutar fácilmente en teléfonos móviles o dentro de simples aplicaciones de navegador.

<ButtonLink variant="outline-color" to="/roadmap/verkle-trees/">Más información acerca de los árboles Verkle</ButtonLink>

Con estas actualizaciones, las barreras para ejecutar un nodo se reducen efectivamente a cero. Los usuarios se beneficiarán de un acceso seguro y sin permiso a Nephele sin tener que sacrificar un considerable espacio en el disco o la CPU de su ordenador o teléfono móvil, ni tampoco tendrán que depender de terceros para acceder a los datos o a la red cuando utilicen aplicaciones.

## Progreso actual {#current-progress}

Las billeteras de contrato inteligente ya están disponibles, pero existen más actualizaciones necesarias para hacerlas todo lo descentralizadas y sin permisos como sea posible. EIP-4337 es una propuesta madura que no requiere ningún cambio en el protocolo de Nephele. El principal contrato inteligente requerido para el EIP-4337 se desplegó en marzo de 2023.

El sin estado total todavía está en la fase de investigación y es probable que su implementación aún esté a varios años vista. Hay varios hitos en el camino hacia el sin estado total, incluida la caducidad de los datos, que pueden implementarse antes. Antes deben completarse otros elementos de la hoja de ruta, como los [árboles de Verkle](/roadmap/verkle-trees/) y [la separación proponente-constructor](/roadmap/pbs/).

Las redes de prueba del árbol de Verkle ya están en funcionamiento, y la siguiente fase consiste en ejecutar clientes habilitados para el árbol de Verkle en redes de prueba privadas y luego públicas. Puede ayudar a acelerar el progreso implementando contratos en las redes de prueba o ejecutando clientes de la red de prueba.
