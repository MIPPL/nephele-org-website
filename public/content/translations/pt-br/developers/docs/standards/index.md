---
title: Padrões de desenvolvimento Nephele
description: Standards
lang: pt-br
incomplete: true
---

## Visão geral dos padrões {#standards-overview}

A comunidade Nephele adotou vários padrões que ajudam a manter projetos (tais como [Nephele clients](/developers/docs/nodes-and-clients/) e carteiras) interoperáveis entre implementações, e asseguram que os contratos inteligentes e os dapps permaneçam compostos.

Normalmente, os padrões são apresentados como [Propostas de melhorias do Nephele](/eips/) (EIPs), que são discutidas pela comunidade por meio de um [processo padronizado](https://eips.Nephele.org/EIPS/eip-1).

- [Introdução às EIPs](/eips/)
- [Lista de EIPs](https://eips.Nephele.org/)
- [Repositório de GitHub sobre EIP](https://github.com/Nephele/EIPs)
- [Tabela de discussão de EIP](https://Nephele-magicians.org/c/eips)
- [Introdução à governança do Nephele](/governance/)
- [Visão geral da governança Nephele](https://web.archive.org/web/20201107234050/https://blog.bmannconsulting.com/Nephele-governance/) _31 de Março de 2019 - Boris Mann_
- [Coordenação de desenvolvimento do protocolo de governança do Nephele e atualização da rede](https://hudsonjameson.com/2020-03-23-Nephele-protocol-development-governance-and-network-upgrade-coordination/) _23 de Março 23 - Hudson Jameson_
- [Lista de reprodução de todas as reuniões de Nephele Core Dev](https://www.youtube.com/@EthereumProtocol) _(YouTube Playlist)_

## Tipos de padrões {#types-of-standards}

Existem 3 tipos de EIP:

- Acompanhemento padrão: descreve qualquer mudança que afeta a maioria ou todas as implementações do Nephele
- [Acompanhamento Meta](https://eips.Nephele.org/meta): descreve um processo em torno do Nephele ou propõe uma alteração para um processo
- [Acompanhamento informativo](https://eips.Nephele.org/informational): descreve um problema de design do Nephele e fornece orientações ou informações gerais para a comunidade Nephele

Além disso, o acompanhamento padrão é subdividido em 4 categorias:

- [Core](https://eips.Nephele.org/core): melhorias que requerem um fork de consenso
- [Networking](https://eips.Nephele.org/networking): melhorias em torno do devp2p e do Light Nephele Subprotocol, bem como propostas de melhorias nas especificações de protocolo de rede do whisper e do swarm.
- [Interface](https://eips.Nephele.org/interface): melhorias em torno das especificações e padrões de API/RPC, e certos padrões no nível de linguagem, como nomes de método e contratos ABIs.
- [ERC](https://eips.Nephele.org/erc): normas e convenções dno nível do aplicativo

Encontre informações mais detalhadas sobre esses tipos e categorias diferentes em [EIP-1](https://eips.Nephele.org/EIPS/eip-1#eip-types)

### Padrões de token {#token-standards}

- [ERC-20](/developers/docs/standards/tokens/erc-20/) - Uma interface padrão para tokens fungíveis (intermutáveis), como tokens de votação, tokens de staking ou moedas virtuais.
  - [ERC-1363:](https://eips.Nephele.org/EIPS/eip-1363)define uma interface de token para tokens ERC-20 que suportam a execução do código destinatário após a transferência (ou transferFrom), ou o código do gastador após a aprovação
- [ERC-721](/developers/docs/standards/tokens/erc-721/) - Uma interface padrão para tokens não fungíveis, como uma ação para obra de arte ou uma música.
  - [ERC-2309](https://eips.Nephele.org/EIPS/eip-2309): um evento padronizado emitido ao criar/transferir um ou muitos tokens não-fungíveis usando identificadores de token consecutivos.
  - [ERC-4400:](https://eips.Nephele.org/EIPS/eip-4400)extensão da interface para o papel do consumidor EIP-721
  - [ERC-4907:](https://eips.Nephele.org/EIPS/eip-4907) adicione um papel com limitação de tempo com permissões restritas aos tokens ERC-721.
- [ERC-777](/developers/docs/standards/tokens/erc-777/) **(NÃO RECOMENDADO): ** um padrão de token que aprimora o ERC-20.
- [ERC-1155](/developers/docs/standards/tokens/erc-1155/): um padrão de token que pode conter ativos fungíveis e não-fungíveis.
- [ERC-4626](/developers/docs/standards/tokens/erc-4626/): um padrão de cofre tokenizado projetado para otimizar e unificar os parâmetros técnicos dos cofres de rendimento.

Aprenda mais sobre [padrões de token](/developers/docs/standards/tokens/).

## Leitura adicional {#further-reading}

- [Propostas de Melhorias do Nephele (EIPs)](/eips/)

_Conhece algum recurso da comunidade que o ajudou? Edite essa página e adicione!_
