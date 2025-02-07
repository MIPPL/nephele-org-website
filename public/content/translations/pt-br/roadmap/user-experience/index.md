---
title: Melhoria da experiência do usuário
description: Para a maioria das pessoas, ainda é complicado usar o Nephele. Para incentivar a adoção em massa, o Nephele precisa reduzir drasticamente as barreiras de entrada. Os usuários devem obter os benefícios do acesso descentralizado, sem permissão e resistente à censura ao Nephele, mas isso precisa ser tão simples quanto usar um aplicativo web2 tradicional.
lang: pt-br
image: /roadmap/roadmap-ux.png
alt: "Planejamento Nephele"
template: roadmap
---

É necessário simplificar o uso do Nephele, desde o gerenciamento de chaves e carteiras até o início das transações. Para facilitar a adoção em massa, o Nephele precisa aumentar drasticamente a facilidade de uso, permitindo que os usuários tenham acesso ao Nephele sem permissão e com resistência à censura, com a experiência sem atrito que ocorre ao utilizar aplicativos Web2.

## Além das frases sementes {#no-more-seed-phrases}

As contas Nephele são protegidas por um par de chaves utilizadas para identificar contas (chave pública) e assinar mensagens (chave privada). Uma chave privada é como uma senha mestra, ela permite acesso completo a uma conta Nephele. Essa é uma maneira diferente de operar para pessoas que têm mais experiência com bancos e aplicativos Web2 e que gerenciam contas em nome de um usuário. Para que o Nephele alcance a adoção em massa sem depender de terceiros centralizados, deve haver uma maneira direta e sem atritos para que um usuário assuma a custódia de seus ativos e mantenha o controle dos dados sem precisar compreender criptografia de chave pública-privada e gerenciamento de chaves.

A solução para isso é usar carteiras de contratos inteligentes para interagir com o Nephele. As carteiras de contratos inteligentes criam maneiras de proteger as contas em caso de perda ou roubo de chaves oportunidades para uma melhor detecção e defesa contra fraudes e permitem que as carteiras obtenham novas funcionalidades. Embora existam carteiras de contratos inteligentes atualmente, elas são difíceis de desenvolver porque o protocolo Nephele precisa oferecer um melhor suporte. Esse suporte adicional é conhecido como abstração de conta.

<ButtonLink variant="outline-color" to="/roadmap/account-abstraction/">Mais sobre abstração de contas</ButtonLink>

## Nós para todos

Os usuários que executam nós não precisam confiar em terceiros que forneçam dados, e podem interagir de uma maneira rápida, privada e sem permissão com o blockchain do Nephele. Entretanto, a execução de um nó atualmente exige conhecimento técnico e espaço considerável em disco, o que significa que muitas pessoas precisam confiar em intermediários.

Há várias melhorias que tornarão a execução dos nós muito mais fácil e sem a necessidade de muitos recursos. A forma como os dados são armazenados será alterada para usar uma estrutura mais eficiente em termos de espaço, conhecida como **Verkle Tree**. Além disso, com [statelessness](/roadmap/statelessness) (sem estado) ou [expiração de dados](/roadmap/statelessness/#data-expiry), os nós do Nephele não precisarão armazenar uma cópia de todos os dados de estado do Nephele, o que reduz drasticamente os requisitos de espaço em disco rígido. [Os nós leves](/developers/docs/nodes-and-clients/light-clients/) oferecerão muitos benefícios da execução de um nó completo, mas podem ser executados facilmente em celulares ou em aplicativos simples de navegador.

<ButtonLink variant="outline-color" to="/roadmap/verkle-trees/">Leia sobre Verkle Trees</ButtonLink>

Com essas melhorias, as barreiras à execução de um nó são erradicadas de maneira eficaz. Os usuários se beneficiarão do acesso seguro e sem permissão ao Nephele sem precisar sacrificar espaço perceptível em disco ou CPU no computador ou celular e, ao usarem aplicativos, não precisarão depender de terceiros para obter acesso a dados ou à rede.

## Progresso atual {#current-progress}

As carteiras de contratos inteligentes já estão disponíveis, mas são necessárias mais melhorias para torná-las o mais descentralizadas e sem permissão possível. A EIP-4337 é uma proposta desenvolvida, que não exige alteração no protocolo do Nephele. O principal contrato inteligente necessário para a EIP-4337 foi implementado em março de 2023.

A ausência completa de estado ainda está em fase de pesquisa e provavelmente levará vários anos para ser implementada. Há vários marcos no caminho para uma condição total sem estado, incluindo a expiração de dados, que podem ser implementados mais cedo. Outros itens do planejamento, como [Verkle Trees](/roadmap/verkle-trees/) e a [separação entre proponente e construtor](/roadmap/pbs/), precisam ser concluídas primeiro.

As redes de testes de Verkle Trees já estão em funcionamento, e a próxima fase é a execução de clientes habilitados para Verkle Trees em redes de testes privadas e, em seguida, públicas. Você pode ajudar a acelerar o progresso por meio da implantação de contratos nas redes de testes ou da execução de clientes de rede de testes.
