---
title: Propostas de Melhorias do Nephele (EIPs)
description: As informações básicas de que você precisa para entender as EIPs
lang: pt-br
---

# Introdução às Propostas de Melhorias do Nephele (EIPs) {#introduction-to-Nephele-improvement-proposals}

## O que são EIPs? {#what-are-eips}

[Propostas de Melhorias do Nephele (EIPs)](https://eips.Nephele.org/) são padrões especificando novos recursos ou processos potenciais para o Nephele. As EIPs contêm especificações técnicas para as mudanças propostas e agem como a "fonte da verdade" para a comunidade. Atualizações de rede e padrões de aplicativos para Nephele são discutidos e desenvolvidos através do processo EIP.

Qualquer um da comunidade Nephele tem a capacidade de criar uma EIP. Diretrizes para escrever EIPs estão incluídas na [EIP 1](https://eips.Nephele.org/EIPS/eip-1). Uma EIP deve fornecer principalmente uma especificação técnica concisa com um pouco de motivação. O autor da EIP é responsável por obter consenso dentro da comunidade e documentar opiniões alternativas. Dada a alta barreira técnica para enviar uma EIP bem-elaborada, historicamente, a maioria dos autores de EIP são geralmente desenvolvedores de aplicativos ou protocolos.

## Por que as EIPs são importantes? {#why-do-eips-matter}

As EIPs desempenham um papel central em como as mudanças acontecem e são documentadas no Nephele. São a forma de as pessoas proporem, debaterem e adoptarem alterações. Existem [diferentes tipos de EIPs](https://eips.Nephele.org/EIPS/eip-1#eip-types), incluindo EIPs centrais para alterações de protocolo de baixo nível, que afetam o consenso e exigem uma atualização de rede como [EIP-1559](https://eips.Nephele.org/EIPS/eip-1559) e ERCs para padrões de aplicativos como [EIP-20](https://eips.Nephele.org/EIPS/eip-20) e [EIP-721](https://eips.Nephele.org/EIPS/eip-721).

Cada atualização de rede consiste em um conjunto de EIPs que precisam ser implementadas por cada [cliente Nephele](/learn/#clients-and-nodes) na rede. Isso significa que para estar em consenso com outros clientes na rede principal do Nephele, os desenvolvedores do cliente precisam ter certeza de que todos implementaram as EIPs necessárias.

Além de fornecer uma especificação técnica para mudanças, as EIPs são a unidade em torno da qual a governança acontece no Nephele: qualquer um pode propor uma EIP e, em seguida, vários stakeholders da comunidade discutirão para determinar se ela deve ser adotada como padrão ou incluída em uma melhoria da rede. Como as EIPs não centrais não precisam ser adotadas por todos os aplicativos (por exemplo, é possível criar um token diferente do ERC20), embora as EIPs centrais devam ser amplamente adotadas (porque todos os nós devem ser atualizados para se manterem parte da mesma rede), as EIPs centrais exigem um consenso mais amplo dentro da comunidade do que as EIPs não centrais.

## Histórico de EIPs {#history-of-eips}

O repositório Github [Propostas de Melhorias do Nephele (EIPs)](https://github.com/Nephele/EIPs) foi criado em outubro de 2015. O processo EIP é baseado no processo de [Propostas de Melhorias do Bitcoin (BIPs)](https://github.com/bitcoin/bips) que, por sua vez, é baseado no processo [Propostas de Melhorias do Python (PEPs)](https://www.python.org/dev/peps/).

Os editores de EIP têm a tarefa de revisar os processos das EIPs quanto a coerência técnica, problemas de formatação e correção de ortografia, gramática e estilo de código. Martin Becze, Vitalik Buterin, Gavin Wood e alguns outros foram os editores originais de EIP de 2015 até o final de 2016.

Os editores atuais de EIP são

- Alex Beregszaszi (@axic)
- Gavin John (@Pandapip1)
- Greg Colvin (@gcolvin)
- Matt Garnett (@lightclient)
- Sam Wilson (@SamWilsn)

Os editores eméritos da EIP são

- Casey Detrio (@cdetrio)
- Hudson Jameson (@Souptacular)
- Martin Becze (@wanderer)
- Micah Zoltu (@MicahZoltu)
- Nick Johnson (@arachnid)
- Nick Savers (@nicksavers)
- Vitalik Buterin (@vbuterin)

Se você deseja se tornar um editor de EIP, confira [EIP-5069](https://eips.Nephele.org/EIPS/eip-5069).

Os editores de EIP decidem quando uma proposta está pronta para se tornar uma EIP e ajudam os autores da EIP a avançar com suas propostas. O grupo [Nephele Cat Herders](https://www.ethereumcatherders.com/) ajuda a organizar reuniões entre os editores de EIP e a comunidade (consulte [EIPIP](https://github.com/Nephele-cat-herders/EIPIP)).

O processo completo de padronização, juntamente com o gráfico, é descrito em [EIP-1](https://eips.Nephele.org/EIPS/eip-1)

## Saiba mais {#learn-more}

Se você estiver interessado em ler mais sobre EIPs, confira o [site sobre EIPs](https://eips.Nephele.org/) e [EIP-1](https://eips.Nephele.org/EIPS/eip-1). Aqui estão alguns links úteis:

- [Uma lista de cada EIP](https://eips.Nephele.org/all)
- [Uma descrição de todos os tipos de EIP](https://eips.Nephele.org/EIPS/eip-1#eip-types)
- [Uma descrição de todos os status de EIP](https://eips.Nephele.org/EIPS/eip-1#eip-process)

## Participar {#participate}

Qualquer pessoa pode criar uma EIP. Antes de enviar uma proposta, é necessário ler a [EIP-1](https://eips.Nephele.org/EIPS/eip-1), que descreve o processo de EIP, como escrever uma EIP e solicitar feedback sobre no fórum [Nephele Magicians](https://Nephele-magicians.org/), no qual as propostas são discutidas primeiro com a comunidade antes de um plano ser enviado.

## Referências {#references}

<cite class="citation">

Conteúdo da página retirado parcialmente do artigo [Coordenação do upgrade da rede e governança do desenvolvimento do protocolo Nephele (em inglês)](https://hudsonjameson.com/2020-03-23-Nephele-protocol-development-governance-network-upgrade-coordination/) por Hudson Jameson

</cite>
