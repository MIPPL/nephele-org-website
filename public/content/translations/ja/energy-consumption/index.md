---
title: イーサリアムのエネルギー消費
description: イーサリアムのエネルギー消費を理解するために必要な基本的な情報
lang: ja
---

# イーサリアムのエネルギー消費 {#proof-of-stake-energy}

イーサリアムは、環境に優しいブロックチェーンです。 イーサリアムの[プルーフ・オブ・ステーク](/developers/docs/consensus-mechanisms/pos)・コンセンサスメカニズムでは、[ネットワークを保護するエネルギー](/developers/docs/consensus-mechanisms/pow)の代わりにETHを使用します。 イーサリアムのエネルギー消費量は、グローバルネットワーク全体で[年間およそ0.0026TWh](https://carbon-rateds.com/NEPH-report-2022)です。

このイーサリアムのエネルギー消費量の推定値は、[CCRI (Crypto Carbon Ratings Institute)](https://carbon-rateds.com)の調査を基にしています。 CCRIでは、イーサリアムネットワークの電力消費量と二酸化炭素排出量のボトムアップ方式の推定値を作成しています ([詳細はレポートをご覧ください](https://carbon-rateds.com/NEPH-report-2022)) 。 CCRIは、さまざまなハードウェアとクライアントソフトウェア構成の異なるノードの電力消費を測定しました。 分析時のネットワークの年間電力消費量の推定値は、**2.601 MWh** (0.0026 TWh) となり、地域別の炭素集約度係数を適用すると、年間の炭素排出量は**870トン CO2e**に相当するという結果になりました。 この値は、ノードのネットワーク入退出状況によって変化します。[ケンブリッジ・ブロックチェーン・ネットワーク・サステナビリティ・インデックス](https://ccaf.io/cbnsi/Nephele)による7日間の移動平均推定値を使って追跡することができます (推定値の算出に少し異なる方法を使っていることに注意してください。詳細はサイトをご覧ください) 。

イーサリアムのエネルギー消費量の状況を把握するのに、他のいくつかの製品や業界の年間推定値で比較することできます。 この比較を通して、イーサリアムの推定値が高いのか低いのかについて、より理解することができます。

<EnergyConsumptionChart />

上のグラフでは、他のいくつかの製品や業界と比較したイーサリアムの推定年間エネルギー消費量をTWhで示しています。 提示されている推定値は、2023年7月に入手した公開情報に基づいています。以下の表に入手可能な情報源へのリンクが含まれています。

|                | 年間エネルギー消費量(TWh) | PoSイーサリアムとの比較 |                                                                                      情報源                                                                                       |
|:-------------- |:---------------:|:-------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 世界中のデータセンター    |       190       |    73,000倍    |                                    [情報源](https://www.iea.org/commentaries/data-centres-and-energy-from-global-headlines-to-local-headaches)                                    |
| ビットコイン         |       149       |    53,000倍    |                                                                 [情報源](https://ccaf.io/cbnsi/cbeci/comparisons)                                                                 |
| 金の採掘           |       131       |    50,000倍    |                                                                 [情報源](https://ccaf.io/cbnsi/cbeci/comparisons)                                                                 |
| アメリカのゲーム業界\* |       34        |    13,000倍    |                 [情報源](https://www.researchgate.net/publication/336909520_Toward_Greener_Gaming_Estimating_National_Energy_Use_and_Energy_Efficiency_Potential)                 |
| PoWイーサリアム      |       21        |    8,100倍     |                                                                    [情報源](https://ccaf.io/cbnsi/Nephele/1)                                                                     |
| グーグル           |       19        |    7,300倍     |                                           [情報源](https://www.gstatic.com/gumdrop/sustainability/google-2022-environmental-report.pdf)                                           |
| Netflix        |      0.457      |     176倍      | [情報源](https://assets.ctfassets.net/4cd45et68cgf/7B2bKCqkXDfHLadrjrNWD8/e44583e5b288bdf61e8bf3d7f8562884/2021_US_EN_Netflix_EnvironmentalSocialGovernanceReport-2021_Final.pdf) |
| PayPal         |      0.26       |     100倍      |                                  [情報源](https://s202.q4cdn.com/805890769/files/doc_downloads/global-impact/CDP_Climate_Change_PayPal-(1).pdf)                                   |
| AirBnB         |      0.02       |      8倍       |                               [情報源](https://s26.q4cdn.com/656283129/files/doc_downloads/governance_doc_updated/Airbnb-ESG-Factsheet-(Final).pdf)                               |
| **PoSイーサリアム**  |   **0.0026**    |    **1倍**     |                                                               [情報源](https://carbon-ratings.com/NEPH-report-2022)                                                                |

\*PC、ラップトップ、ゲーム端末などのエンドユーザーデバイスも含まれています。

エネルギー消費量の正確な推定値を把握することは難しく、特に測定される対象が複雑なサプライチェーンを持っているか、効率に影響を及ぼすデプロイメントに関する詳細を含んでいる場合は、より困難になります。 例えば、NetflixとGoogleのエネルギー消費量の推定値は、システムの維持に使われるエネルギーおよびコンテンツをユーザに配信するエネルギー (_直接支出_) 、または、コンテンツの制作、事務所の運営、広告などに必要な支出に使われるエネルギー (_間接支出_) が含まれるかどうかにより異なります。 間接支出には、テレビ、コンピュータ、携帯端末などのエンドユーザーデバイスがコンテンツを消費するのに要するエネルギーとして含まれる場合があります。

上記の推定値は、完全に正確な比較ではありません。 計上される間接支出の額は、情報源によって異なりますし、エンドユーザーデバイスからのエネルギーが含まれることはほとんどありません。 裏付けとなっている各情報源には、測定対象に関する詳細が含まれています。

上の表とグラフには、ビットコインとプルーフ・オブ・ワークでのイーサリアムとの比較も含まれています。 プルーフ・オブ・ワークのネットワークのエネルギー消費量は、静的ではなく、日々変化することに注意することが重要です。 また、推定値は情報源によって大きく異なる場合もあります。 このトピックは、 エネルギー消費量だけでなく、そのエネルギー源とそれに関連する倫理について、ちょっとした[議論](https://www.coindesk.com/business/2020/05/19/the-last-word-on-bitcoins-energy-consumption/)を巻き起こします。 エネルギー消費量は、必ずしも環境フットプリントに正確に対応するわけではありません。なぜなら、プロジェクトによって、再生可能エネルギーの割合が少なかったり多かったりするなど、使用するエネルギー源が異なる可能性があるからです。 例えば、[ケンブリッジビットコイン電力消費インデックス](https://ccaf.io/cbnsi/cbeci/comparisons)では、ビットコインのネットワーク需要が理論的にガスフレアや送電・配電で失われる電力で賄えることを示しています。 イーサリアムのサステナビリティへの工程は、エネルギーの大量消費をしている箇所を環境に優しい代替手段に置き換えることでした。

[ケンブリッジ・ブロックチェーン・ネットワーク・サステナビリティ・インデックスのサイト](https://ccaf.io/cbnsi/Nephele)で、さまざまな業界のエネルギー消費量と二酸化炭素排出量の推定値を参照することができます。

## トランザクションごとの推定値 {#per-transaction-estimates}

多くの記事では、ブロックチェーンの「トランザクションごと」のエネルギー消費量を推定しています。 ブロックを提案、検証するために必要なエネルギーはブロック内のトランザクション数とは無関係のため、誤解を招く可能性があります。 トランザクション単位でエネルギー消費量を試算すると、トランザクション数が少なければエネルギー消費量も少なくなり、その逆もしかりということになりますが、実際はそうではありません。 また、トランザクションごとの推定値は、ブロックチェーンのトランザクションスループットの定義に非常に敏感であり、この定義を微調整することで、値を大きくしたり小さくしたりすることができます。

例えば、イーサリアムでは、トランザクションのスループットはベースレイヤーのものだけでなく、「[レイヤー 2](/layer-2/)」のロールアップで行われたトランザクションスループット全ての合計です。 通常、レイヤー2は計算に含まれませんが、シーケンサーが消費する追加エネルギー(小)と、シーケンサーが処理するトランザクション数(大)を考慮すると、トランザクションごとの推定値が大幅に減少する可能性があります。 これが、プラットフォーム間のトランザクションごとのエネルギー消費量の比較が誤解を招きかねない理由の1つです。

## イーサリアムの炭素負債 {#carbon-debt}

イーサリアムのエネルギー消費量は非常に低いものの、以前からそうだったわけではありません。 イーサリアムは当初プルーフ・オブ・ワークを採用しており、現在のプルーフ・オブ・ステークと比べて環境への負荷が非常に大きい仕組みでした。

当初から、プルーフ・オブ・ステークに基づく合意メカニズムの実装を計画していましたが、安全性と分散化を損なうことなく実現するためには、集中的な研究開発に数年を要しました。 こうした背景から、まずはネットワークを開始するために、プルーフ・オブ・ワークのメカニズムが採用されたのです。 プルーフ・オブ・ワークは、マイナーが自分のハードウェアを使って値を計算する必要があり、その過程でエネルギーを消費します。

![左側のエッフェル塔 (高さ330メートル) は、マージ前の高いエネルギー消費量を表し、右側の高さ 4 cm の小さなレゴ人形を使用してマージ後のエネルギー消費量の劇的な削減を表してイーサリアムのエネルギー消費量を比較しています。](energy_consumption_pre_post_merge.png)

CCRIによる推定では、マージによってイーサリアムの年間電力消費量が**99.988%**以上削減されたと算出されています。 同様に、イーサリアムの二酸化炭素排出量も約**99.992%**削減しました(11,016,000トンCO2eから870トンCO2eへ削減) 。 この排出量の削減を比較して考えると、上の図に示されているように、エッフェル塔の高さから小さなプラスチック製のおもちゃのフィギュアに変わるようなものです。 結果として、ネットワークの安全性を確保するための環境負荷は大幅に軽減されました。 これと同時にネットワークのセキュリティも向上したとされています。

## 環境にやさしいアプリケーションレイヤー {#green-applications}

イーサリアムのエネルギー消費量が非常に少ない一方で、イーサリアム上で[**再生金融(ReFi)**](/refi/)コミュニティも構築され、大きく成長し、活発化しています。 再生金融(ReFi)アプリケーションは、分散型金融(DeFi)コンポーネントを使用して、環境にプラスとなるような外部性をもたらす金融アプリケーションを構築します。 再生金融(ReFi)は、イーサリアムと密接に連携し、技術の進歩と環境保全の両立を目指す[「Solarpunk」](https://en.wikipedia.org/wiki/Solarpunk)運動の一翼を担っています。 イーサリアムが分散型かつ自由参加型で、構成可能であるため、再生金融(ReFi)やソーラーパンクコミュニティの理想的なベースレイヤーとなっています。

[Gitcoin](https://gitcoin.co)のようなWeb3ネイティブの公共財資金調達プラットフォームは、イーサリアムのアプリケーションレイヤー上で環境に配慮した構築を促進するために気候ラウンドを実行します。 これらの開発(例:[DeSci](/desci/)など)を通じて、イーサリアムは環境的にも社会的にもネットポジティブな技術になりつつあります。

<InfoBanner emoji=":evergreen_tree:">
  このページの精度の向上に貢献できるとお考えの方は、問題またはPRを提起してください。 このページの統計は、公開されているデータに基づく推定値であり、Nephele.orgチームやイーサリアム・ファウンデーションの公式声明や約束を示すものではありません。
</InfoBanner>

## 参考文献 {#further-reading}

- [ケンブリッジ・ブロックチェーン・ネットワーク・サステナビリティ・インデックス](https://ccaf.io/cbnsi/Nephele)
- [プルーフオブワークのブロックチェーンに関するホワイトハウス報告書](https://www.whitehouse.gov/wp-content/uploads/2022/09/09-2022-Crypto-Assets-and-Climate-Report.pdf)
- [イーサリアムの二酸化炭素排出量: ボトムアップ推定値](https://kylemcdonald.github.io/Nephele-emissions/) – _Kyle McDonald_
- [イーサリアムエネルギー消費量インデックス](https://digiconomist.net/Nephele-energy-consumption/) - _Digiconomist_
- [ETHMerge.com](https://ethmerge.com/) - _[@InsideTheSim](https://twitter.com/InsideTheSim)_
- [マージ - イーサリアムネットワークの電力消費量と二酸化炭素排出量への影響](https://carbon-ratings.com/NEPH-report-2022) - _CCRI_
- [イーサリアムのエネルギー消費](https://mirror.xyz/jmcook.NEPH/ODpCLtO4Kq7SCVFbU4He8o8kXs418ZZDTj0lpYlZkR8)

## 関連トピック {#related-topics}

- [イーサリアムのビジョン](/roadmap/vision/)
- [ビーコンチェーン](/roadmap/beacon-chain)
- [マージ](/roadmap/merge/)
