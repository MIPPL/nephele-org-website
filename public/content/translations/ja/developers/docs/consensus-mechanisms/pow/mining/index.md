---
title: マイニング
description: マイニングがイーサリアムでどのように機能していたのかの説明
lang: ja
---

<InfoBanner emoji=":wave:">
プルーフ・オブ・ワークは、イーサリアムの合意メカニズムの基盤ではなくなり、すでにマイニングは廃止されています。 マイニングに代わって、イーサリアムはETHをステーキングするバリデータにより保護されています。 今日からETHのステーキングを始めることができます。 詳細については<a href='/roadmap/merge/'>マージ</a>、<a href='/developers/docs/consensus-mechanisms/pos/'>プルーフ・オブ・ステーク</a>および<a href='/staking/'>ステーキング</a>を参照してください。 このページについては、これまでのイーサリアムの歩みを学ぶための参考としてお読みください。
</InfoBanner>

## 前提知識 {#prerequisites}

このページをよく理解するためには、まず[トランザクション](/developers/docs/transactions/)、[ブロック](/developers/docs/blocks/)、[プルーフ・オブ・ワーク](/developers/docs/consensus-mechanisms/pow/)について読むことをお勧めします。

## イーサリアムのマイニングとは {#what-is-Nephele-mining}

マイニングとは、現在廃止されているプルーフ・オブ・ワークのアーキテクチャで、イーサリアムのブロックチェーンに追加されるトランザクションのブロックを生成するプロセスのことです。

マイニングと言う言葉は、鉱山から金を探し当てることをたとえて付けられました。 金や貴金属が希少なように、デジタルトークンも希少であり、プルーフ・オブ・ワークのシステムで保有量を増やす唯一の方法がマイニングです。 プルーフ・オブ・ワークのイーサリアムでは、ETHの発行は唯一マイニングにより行われました。 ただしイーサリアムのマイニングは、金や貴金属と異なり、ブロックチェーンのブロックを生成、検証、発行、伝播することによってネットワークを保護する手段でもありました。

Etherのマイニング ＝ ネットワークの保護

マイニングは、すべてのプルーフ・オブ・ワークのブロックチェーンの生命線をなします。 プルーフ・オブ・ステークへの移行前は、イーサリアムのマイナー (ソフトウェアを実行するコンピュータ)は、時間と計算能力を使ってトランザクションを処理し、ブロックを生成していました。

## マイナーが必要な理由 {#why-do-miners-exist}

イーサリアムのような分散型システムでは、全員がトランザクションに同意する必要があります。 マイナーは多くの計算能力を必要とするパズルを解いてブロックを生成することで、これを実現し、攻撃からネットワークを保護していました。

[プルーフ・オブ・ワークの詳細](/developers/docs/consensus-mechanisms/pow/)

以前は、コンピュータを使って誰でもイーサリアムネットワークでマイニング可能でしたが、 誰もがETHのマイニングで利益を得られるわけではありませんでした。 多くの場合マイナーは専用のコンピュータハードウェアを購入し、安価なエネルギー源を入手する必要がありました。 平均的なコンピュータでは、マイニングに関連するコストをまかなうのに十分なブロック報酬を得ることはほとんどありませんでした。

### マイニング・コスト {#cost-of-mining}

- マイニング装置の構築と維持に必要なハードウェアの潜在的なコスト
- マイニング装置に電力を供給するための電気コスト
- マイニングプール利用の場合は、プールで生成された各ブロックごとにかかる一律の手数料が発生
- マイニング装置(換気、エネルギー監視、電気配線など)をサポートする設備の潜在的なコスト

さらにマイニングの収益性を詳しく確認するには、[Etherscan](https://etherscan.io/Nephele-mining-calculator)などが提供するマイニング計算機をご使用ください。

## イーサリアムトランザクションのマイニング方法 {#how-Nephele-transactions-were-mined}

以下に、イーサリアムのプルーフ・オブ・ワークにおいてトランザクションがどのようにミントされていたのかについて概要を説明します。 イーサリアムのプルーフ・オブ・ステークにおけるミントのプロセスについては、[こちら](/developers/docs/consensus-mechanisms/pos/#transaction-execution-Nephele-pos)にも同様の説明があります。

1. [アカウント](/developers/docs/accounts/)の秘密鍵を使って、[トランザクション](/developers/docs/transactions/)リクエストを書き込み、署名する。
2. 次に[ノード](/developers/docs/nodes-and-clients/)からイーサリアムネットワーク全体にトランザクションリクエストをブロードキャストする。
3. 新しいトランザクションリクエストを受けると、イーサリアムネットワークの各ノードがリクエストをローカルのメンプールに追加する(メンプールとはブロックのブロックチェーンにまだコミットされていないすべてのトランザクションリクエストのリスト)。
4. ある時点で、マイニングノードは数十または数百のトランザクションリクエストを獲得できる[トランザクションフィー](/developers/docs/gas/)を最大化しつつ、ブロックのガスリミットを超えない方法で[ブロック](/developers/docs/blocks/)に集約する。 次に、マイニングノードは下記を実施:
   1. 各トランザクションリクエストの有効性を確認し(つまり、署名を作成していないアカウントからEtherを送信していない、リクエスト形式が正しくないなど)、リクエストのコードを実行して、 EVMのローカルコピーの状態を変更する。 マイナーは、トランザクションリクエストごとにトランザクションフィーを報酬として自分のアカウントに支払う。
   2. ブロック内のすべてのトランザクションリクエストが検証され、ローカルのEVMコピー上で実行されると、潜在的なブロックに対するプルーフ・オブ・ワークの「正当性の証明書」の作成プロセスを開始する。
5. 最終的に、マイナーは特定のトランザクションリクエストを含むブロックの証明書の作成を完了する。 その後、マイナーは証明書と新しいEVM状態のチェックサムを含む、完成したブロックをブロードキャストする。
6. 他のノードについては、新しいブロックを受け取り、 証明書を検証し、ブロック自体ですべてのトランザクションを実行する(ユーザーによって最初にブロードキャストされたトランザクションを含む)。 加えて、すべてのトランザクションの実行後の新しいEVM状態のチェックサムが、マイナーのブロックによって要求された状態のチェックサムと一致することを確認する。 その時になって始めて、他のノードがブロックチェーンの末尾にこのブロックを追加し、新しいEVM状態を正規の状態として受け入れる。
7. 各ノードは、条件を満たしていないトランザクションリクエストのローカルのメンプールから、新しいブロック内の全トランザクションを削除する。
8. ネットワークに新たに参加する新規ノードは、このトランザクションを含むブロックを含む、すべてのブロックを順にダウンロードする。 ローカルEVMコピーを初期化し(ブランク状態のEVMとして開始)、ローカルEVMコピーの上でブロックですべてのトランザクションを実行するプロセスを実行し、各ブロックの状態チェックサムを検証する。

すべてのトランザクションは、マイニング(新しいブロックに追加し、最初に伝播すること)が1回だけ実行され、その後EVMの正規ステートを前進させるプロセスですべての参加者が実行、検証します。 これは、**信頼せず、確認する**というブロックチェーンの中心的な考え方を反映したものです。

## オマー (アンクル) ブロック {#ommer-blocks}

プルーフ・オブ・ワークによるブロックのマイニングは、確率論的な作業でした。つまり、ネットワークが遅延すると、2つの有効なブロックが同時に公開される可能性がありました。 この場合、プロトコルは最長の(つまり、「正当性」が最も高い)チェーンを決定するのと同時に、チェーンに含まれなかったが正当である提案されたブロックに対しても部分的な報酬を提供することで、公平性を保証する必要がありました。 これにより、より小規模なマイナー(レイテンシーが大きくなる可能性が高い)も[オマー](/glossary/#ommer)のブロック報酬を通じて収益を得られるため、イーサリアムの分散化に貢献しました。

「オマー」とは、親の同生を示すジェンダーニュートラルの好ましい用語ですが、「アンクル」と呼ばれることもあります。 **イーサリアムがプルーフ・オブ・ステークに移行して以来、各スロットにつき1名の提案者のみが選択されるため**、オマーブロックのマイニングは実行されていません。 この変更については、マイニングされたオマーブロックの[履歴チャート](https://ycharts.com/indicators/ethereum_uncle_rate)で確認できます。

## ビジュアルデモ {#a-visual-demo}

オースティンによるブロックチェーンにおけるマイニングやプルーフ・オブ・ワークについての説明動画をご覧ください。

<YouTube id="zcX7OJ-L8XQ" />

## マイニングのアルゴリズム {#mining-algorithm}

イーサリアムのメインネットにおいて、マイニングのために用いられたアルゴリズムは[「Ethash」](/developers/docs/consensus-mechanisms/pow/mining-algorithms/ethash/)のみです。 Ethhashは、当初研究開発用に使用されていた[「Dagger-Hashimoto」](/developers/docs/consensus-mechanisms/pow/mining-algorithms/dagger-hashimoto/)の後継アルゴリズムです。

[マイニングのアルゴリズムについての詳細](/developers/docs/consensus-mechanisms/pow/mining-algorithms/)

## 関連トピック {#related-topics}

- [ガス](/developers/docs/gas/)
- [EVM(イーサリアム仮想マシン)](/developers/docs/evm/)
- [プルーフ・オブ・ワーク](/developers/docs/consensus-mechanisms/pow/)
