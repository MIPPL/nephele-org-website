---
title: 블록체인 브리지에 대한 소개
description: 브리지를 통해 사용자는 자금을 다른 블록체인으로 옮길 수 있음
lang: ko
---

# 블록체인 브리지 {#prerequisites}

_웹3는 L1 블록체인과 L2 확장 솔루션의 생태계로 진화했으며, 각각은 고유한 기능과 장단점을 지니고 있습니다. 블록체인 프로토콜의 수가 증가함에 따라, [체인 간에 자금을 이동하기 위한 수요](<https://dune.xyz/eliasimos/Bridge-Away-(from-Nephele)>) 또한 증가하고 있습니다. 이를 충족시키기 위해 브리지가 필요합니다._

<Divider />

## 브리지란 무엇인가요? {#what-are-bridges}

블록체인 브리지는 현실에서의 브리지(다리)와 비슷한 역할을 합니다. 현실에서의 브리지가 서로 다른 두 위치를 이어 주는 것처럼, 블록체인 브리지는 두 개의 블록체인 생태계를 연결합니다. 브리지는 정보와 자산을 전송하여 블록체인 간의 통신을 원활하게 합니다.

다음 예시를 살펴보겠습니다.

미국에 살고 있으며 유럽 여행을 계획하고 있다고 가정해 봅시다. USD 화폐가 있지만, 여행지에서는 EUR 화폐를 사용해야 합니다. USD를 EUR로 바꾸려면 약간의 수수료를 지불하고 환전소를 이용할 수 있습니다.

그렇다면 가지고 있는 자금을 다른 블록체인의 자금으로 환전하여 사용하려면 어떻게 해야 할까요? 예를 들어 이더리움 메인넷의 ETH를 [아비트럼](https://arbitrum.io/)의 ETH로 환전하고 싶을 수 있습니다. 이러한 경우, EUR 화폐를 위한 환전소가 있었던 것처럼 이더리움에서 아비트럼으로 ETH를 이동하기 위한 메커니즘이 필요합니다. 브리지는 이러한 거래를 가능하게 합니다. 상단 예시의 경우, 아비트럼에는 메인넷의 ETH를 아비트럼으로 이전할 수 있는 [자체적인 브리지](https://bridge.arbitrum.io/)가 있습니다.

## 브리지가 왜 필요한가요? {#why-do-we-need-bridges}

모든 블록체인에는 한계가 있습니다. 수요에 맞춰 이더리움을 확장하려면 롤업이 필요합니다. 반면, Solana 및 Avalanche 등의 L1은 더 많은 요청을 처리할 수 있도록 다르게 설계되었지만 탈중앙화를 위한 비용이 따릅니다.

앞서 알아본 바와 같이, 모든 블록체인은 독립된 환경에서 개발되며 서로 다른 규칙과 합의 메커니즘이 작용합니다. 즉, 블록체인은 자체적으로 통신할 수 없으며 토큰은 블록체인 간에 자유롭게 이동할 수 없습니다.

브리지는 블록체인을 연결하고, 블록체인 간에 정보 및 토큰이 교환될 수 있게 합니다.

브리지를 통해 다음 작업을 할 수 있습니다.

- 블록체인 간의 정보 및 자산의 이동
- 디앱의 다양한 블록체인 활용도 증가를 통한 기능의 강화(프로토콜에 혁신을 위한 더 많은 설계 여력이 생김)
- 사용자의 새로운 플랫폼 및 다른 체인의 장점에 대한 접근성 및 활용도 증가
- 서로 다른 블록체인 생태계의 개발자들이 협업하고 사용자를 위해 새로운 플랫폼을 구축

<Divider />

## 브리지 사용 사례 {#bridge-use-cases}

다음은 브리지를 사용할 수 있는 몇 가지 시나리오입니다.

### 보다 저렴한 거래 수수료 {#transaction-fees}

이더리움 메인넷에 ETH가 있지만 다른 디앱을 사용하기 위해 더 낮은 거래 수수료를 찾고 있다고 가정해 봅시다. 이러한 경우, ETH를 메인넷에서 이더리움 L2 롤업으로 브리징함으로써 더 저렴한 거래 수수료를 지불할 수 있습니다.

### 다른 블록체인 상의 디앱 {#dapps-other-chains}

USDT를 빌려주는 플랫폼으로 이더리움 메인넷의 Aave를 사용하고 있는 경우, Polygon에서 Aave를 사용하여 USDT를 대출하면 이자율이 더 높습니다.

### 블록체인 생태계 살펴보기 {#explore-ecosystems}

이더리움 메인넷에 ETH를 보유하고 있을 때 다른 네이티브 디앱을 사용하기 위해 알트 L1을 살펴보고자 할 수 있습니다. 이러한 경우, 브리지를 사용하여 이더리움 메인넷의 ETH를 알트 L1으로 이전할 수 있습니다.

### 네이티브 크립토 자산 소유 {#own-native}

네이티브 비트코인(BTC)을 소유하고 있지만 이더리움 메인넷에만 자금이 있다고 가정해 봅시다. 이더리움에서 BTC에 연결하기 위해 랩트비트코인(WBTC)을 구매할 수 있습니다. 다만 WBTC는 이더리움 네트워크 기반인 ERC-20 토큰이며, 비트코인 블록체인 상의 원본 화폐가 아닌, 이더리움 버전의 비트코인입니다. 네이티브 BTC를 소유하려면 브리지를 사용하여 이더리움의 자산을 비트코인으로 옮겨야 합니다. 이는 WBTC를 연결하고 네이티브 BTC로 변환합니다. 또는 BTC를 소유하고 있을 때 이더리움 디파이 프로토콜에서 사용하고자 할 수도 있습니다. 이 또한 브리지를 통해 가능하며, BTC를 WBTC로 전환하여 이더리움에서 자금으로 사용할 수 있습니다.

<InfoBanner shouldCenter emoji=":bulb:">
  상단의 모든 작업은 <a href="/get-NEPH/">중앙화 거래소</a>에서도 실행할 수 있습니다. 하지만 자금이 이미 거래소에 등록되어 있지 않으면 여러 단계를 거쳐야 하며, 브리지를 사용하는 것이 더욱 간단합니다.
</InfoBanner>

<Divider />

## 브리지의 종류 {#types-of-bridge}

브리지는 설계 방법 및 그 정교함에 따라 여러 가지로 나뉩니다. 일반적으로 브리지는 신뢰할 수 있는 브리지와 신뢰할 수 없는 브리지의 두 개의 카테고리로 나뉩니다.

| 특정 주체 신뢰 브리지                                                                                                     | 특정 주체 신뢰 불필요 브리지                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 신뢰 브리지는 작업에 대해 중앙 기관이나 시스템에 의존합니다.                                                              | 신뢰 불필요 브리지는 스마트 계약과 알고리즘을 활용합니다.                                             |
| 자금의 보관과 브리지의 보안에 있어 특정 주체에 대한 신뢰를 가정합니다. 사용자는 대부분 브리지 운영자의 평판에 의존합니다. | 특정 주체에 대한 신뢰가 필요하지 않습니다. 즉, 브리지의 보안은 적용되는 블록체인의 보안과 동일합니다. |
| 사용자는 가상 화폐 자산에 대한 제어권을 포기해야 합니다.                                                                  | 스마트 계약을 통해 사용자는 자금에 대한 제어 권한을 그대로 유지합니다.                                |

간단히 말하면, 특정 주체 신뢰 브리지는 신뢰에 대한 가정을 필요로 하는 반면, 신뢰 불필요 브리지는 신뢰가 최소화되어 있고 기반이 되는 도메인을 넘어서는 부분(제3자 등)에 대한 신뢰와 가정을 필요로 하지 않습니다. 주요 용어의 뜻은 다음과 같습니다.

- **신뢰 불필요**: 기반이 되는 블록체인과 동일한 보안성을 지닙니다. [이 문서에서 Arjun Bhuptani](https://medium.com/connext/the-interoperability-trilemma-657c2cf69f17) 님의 설명을 참고하세요.
- **신뢰 가정**: 기반이 되는 도메인의 보안에서 벗어나 시스템에 외부 검증자를 추가하므로 가상 화폐 경제적 측면에서는 덜 안전합니다.

두 접근 방식의 주요 차이점을 이해하기 위해 예시를 살펴보겠습니다.

현재 공항 보안 검색대에 있다고 가정해 보겠습니다. 여기에는 두 가지 확인 방법이 있습니다.

1. 보안 검색 요원이 진행: 탑승 수속 전 보안 요원이 직접 수동으로 표와 신원 등 상세 사항을 확인합니다.
2. 셀프 체크인: 비행 정보를 입력한 후 정보가 확인되면 탑승권을 출력하는 기계가 진행합니다.

보안 검색 요원 진행 방식은 요원과 같은 제3자에게 의지하므로 신뢰 가정 모델과 유사합니다. 사용자는 해당 요원이 올바른 결정을 내리고 개인 정보를 적합하게 다룰 것이라고 신뢰합니다.

셀프 체크인은 운영자의 역할을 제거하고 기술을 사용하므로 신뢰 불필요 모델과 유사합니다. 사용자는 언제든지 데이터를 제어할 수 있으며, 자신의 개인 정보에 대해 제3자를 신뢰하지 않아도 됩니다.

다양한 브리지 솔루션이 이 두 개의 극명한 모델 중에서 채택하고 있으며, 신뢰 정도는 각각 다릅니다.

<Divider />

## 브리지 사용의 리스크 {#bridge-risk}

브리지는 아직 초기 개발 단계입니다. 최적화된 브리지 디자인은 아직 발견되지 않았을 가능성이 큽니다. 어느 브리지에서 작업하더라도 리스크가 존재합니다.

- **스마트 계약 리스크:** 사용자가 자금을 잃을 수도 있는 버그가 코드 상에 존재할 수 있습니다.
- **기술 리스크:** 소프트웨어 오류, 코드의 버그, 사용자 실수, 스팸, 해킹 등 다양한 요인이 사용자를 방해할 수 있습니다.

특히 특정 주체 신뢰 브리지의 경우, 신뢰 가정을 추가하므로 다음과 같은 추가 위험을 수반합니다.

- **검열 리스크:** 브리지 운영자는 이론상 사용자가 브리지를 통해 자산을 이동하지 못하게 할 수 있습니다.
- **보관 리스크:** 브리지 운영자가 사용자의 자금을 훔치기 위해 공모할 수 있습니다.

사용자의 자금은 다음과 같은 경우에 리스크에 노출됩니다.

- 스마트 계약 상에 버그가 존재하는 경우
- 사용자가 오류를 발생하는 경우
- 기반이 되는 블록체인이 해킹당하는 경우
- 브리지 운영자가 신뢰 브리지를 악의적으로 사용하려는 경우
- 브리지가 해킹당하는 경우

최근 해킹의 예시로는 Solana의 웜홀 브리지 해킹이 있으며, [120,000개의 wETH(3.25억 USD)가 손실되었습니다](https://rekt.news/wormhole-rekt/).

브리지는 이더리움 L2에 등록하는 사용자 또는 다른 생태계를 살펴보고자 하는 사용자에게 매우 중요합니다. 하지만 브리지 사용에 포함되는 리스크를 생각한다면, 사용자는 브리지의 장단점을 잘 이해해야 합니다.

<Divider />

## 더 읽을거리 {#further-reading}

- [블록체인 브리지란 무엇이고, 어떻게 분류할 수 있는가?](https://blog.li.finance/what-are-blockchain-bridges-and-how-can-we-classify-them-560dc6ec05fa) _2021년 2월 18일, Arjun Chand_
- [크로스체인 브리지란?](https://www.alchemy.com/overviews/cross-chain-bridges) *2022년 5월 10일, Alchemy*
- [블록체인 브리지: 크립토네트워크로 네트워크 만들기](https://medium.com/1kxnetwork/blockchain-bridges-5db6afac44f8) _2021년 9월 8일, Dmitriy Berenzon_
- [크립토 공간의 브리지](https://medium.com/chainsafe-systems/bridges-in-crypto-space-12e158f5fd1e) _2021년 8월 23일, Ben Adar Hyman_
- [상호 운용성 트릴레마](https://medium.com/connext/the-interoperability-trilemma-657c2cf69f17) _2021년 10월 1일, Arjun Bhuptani_
- [브리지의 보안성: 올바른 크로스체인 커뮤니케이션](https://medium.com/dragonfly-research/secure-the-bridge-cross-chain-communication-done-right-part-i-993f76ffed5d) _2021년 8월 23일, Celia Wan_
