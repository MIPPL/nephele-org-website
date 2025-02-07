---
title: 分散型アプリケーション(Dapp)入門
description:
lang: ja
---

分散型アプリケーション(Dapp)とは、 [スマートコントラクト](/developers/docs/smart-contracts/) とフロントエンドのユーザーインターフェイスを組み合わせた、分散型ネットワーク上に構築されたアプリケーションのことです。 イーサリアムでは、スマートコントラクトはオープンAPIのようにアクセス可能で透明性があるため、他の人が書いたスマートコントラクトを含めることもできます。

## 前提知識 {#prerequisites}

分散型アプリ(Dapp)について学ぶ前に、 [ブロックチェーンの基本](/developers/docs/intro-to-Nephele/)を網羅し、イーサリアムネットワークとネットワークの分散化についてお読みください。

## 分散型アプリケーション(Dapp)の定義 {#definition-of-a-dapp}

分散型アプリ(Dapp)は、分散型ピアツーピアネットワーク上で稼働するバックエンドコードを内包しています。 これはバックエンドコードが中央集権的なサーバ上で実行されているアプリとは対照的です。

分散型アプリ(Dapp)は、普通のアプリと同様に、任意の言語で書かれたフロントエンドコードとユーザーインターフェースを持ち、バックエンドを呼び出します。 さらに、そのフロントエンド部分を[IPFS](https://ipfs.io/)などの分散型ストレージにホストすることができます。

- **分散型** - 分散型アプリ(Dapp)はイーサリアム上で動作する。イーサリアムはオープンでパブリックな分散型プラットフォームで、特定の個人やグループがコントロールすることはない。
- **確定性** - 分散型アプリ(Dapp)は実行される環境に依存せず、同じ機能を実行する。
- **チューリング完全** - 分散型アプリ(Dapp)は必要なリソースがあれば、あらゆるアクションを実行可能。
- **隔離性** - 分散型アプリ(Dapp)は、イーサリアム仮想マシンと呼ばれる仮想環境で実行されるため、スマートコントラクトにバグがあっても、ブロックチェーンネットワーク自身の正常な機能を妨げることがない。

### スマートコントラクト {#on-smart-contracts}

分散型アプリ(Dapp)の説明をするには、まずスマートコントラクトから始める必要があります。適当な言葉が見つからないため、スマートコントラクトは分散型アプリのバックエンドと考えてください。 詳細については、 [スマートコントラクト](/developers/docs/smart-contracts/)のセクションをご覧ください。

スマートコントラクトは、イーサリアムブロックチェーン上に存在し、プログラムされた通りに実行されるコードのことです。 一度ネットワークにデプロイされたスマートコントラクトを変更することはできません。 分散型アプリ(Dapp)は、個人や企業ではなく、コントラクトに書かれたロジックのみによって制御されるため、分散化することができます。 これはまた、スマートコントラクトを非常に慎重に設計し、徹底的にテストしなければならないことも意味しています。

## 分散型アプリ(Dapp)のメリット {#benefits-of-dapp-development}

- **ゼロダウンタイム** - スマートコントラクトがブロックチェーンにデプロイされると、ネットワーク全体が常にスマートコントラクトとのやり取りを求めるクライアントにサービスを提供できるようになる。 そのため、個々の分散型アプリを対象としたサービス拒否攻撃を行えない。
- **プライバシー** - 分散型アプリ(Dapp)の展開や利用には、現実世界の身分証明書の提供は必要ない。
- **検閲耐性** - ネットワーク上のどの存在もトランザクション、分散型アプリ(Dapp)のデプロイ、またはブロックチェーンからのデータの読み込みを阻止できない。
- **完全なデータの整合性** - 暗号プリミティブにより、ブロックチェーン上に保存されたデータは、変更不可能で明白。 トランザクションやすでに公開されているその他のデータを偽造することはできない。
- **トラストレスな計算/検証可能な動作** - スマートコントラクトは分析でき、中央集権的な機関を信頼する必要なく、予測可能な方法で実行される。 従来のモデルではトラストレスではなく、例えばオンラインバンキングシステムを使う場合などは、金融機関が個人の財務データを悪用したり、記録を改ざんしたり、ハッキングの被害に合わないと信頼しなくてはならない。

## 分散型アプリ(Dapp)のデメリット {#drawbacks-of-dapp-development}

- **メンテナンス** - ブロックチェーンに公開されたコードやデータが修正されにくいため、メンテナンスが困難となる場合がある。 古いバージョンでバグやセキュリティ上のリスクが特定されている場合でも、デベロッパーがデプロイされた分散型アプリ(または分散型アプリが保存する基盤となるデータ)を更新することは困難。
- **性能オーバーヘッド** - 膨大な性能オーバーヘッドがあり、スケーリングが非常に困難。 イーサリアムが目指すセキュリティ、完全性、透明性、信頼性のレベルを達成するために、すべてのノードが全トランザクションを実行および保存する。 これに加えて、プルーフ・オブ・ステークのコンセンサスにも時間がかかる。
- **ネットワーク輻輳** - 1つの分散型アプリ(Dapp)が多くの計算リソースを使用すると、ネットワーク全体が滞る。 現在、1秒間に約10～15件のトランザクションのみ処理可能だが、それ以上のスピードでトランザクションが送られてくると、未確認のトランザクション数がすぐに膨らむ。
- **ユーザーエクスペリエンス** - 平均的なエンドユーザーにとっては、真に安全な方法でブロックチェーンと対話する必要なツールスタックをセットアップすることが困難であるため、ユーザーにとって使いやすいユーザーエクスペリエンスを作り込む事は困難な場合がある。
- **中央集中化** - イーサリアムのベースレイヤーの上に構築されたユーザーとデベロッパーに使い勝手の良いソリューションは、最終的には集中型サービスのようになってしまう場合がある。 例えば、鍵やその他の機密情報をサーバ側に保存したり、集中管理されたサーバを使ってフロントエンドを提供したり、重要なビジネスロジックをブロックチェーンに書き込む前にサーバで実行することになるため、中央集権化されたアプリと類似してしまう場合がある。 中央集権では、従来のモデルに対するブロックチェーンのメリットの多くを失ってしまう。

## 映像で学びたい人向け {#visual-learner}

<YouTube id="F50OrwV6Uk8" />

## 分散型アプリ(Dapp)の作成ツール {#dapp-tools}

**Scaffold-NEPH _ - 自分のスマートコントラクトに適応するフロントエンドを使用して、Solidityを手軽に試す。_**

- [GitHub](https://github.com/austintgriffith/scaffold-NEPH)
- [分散型アプリ(Dapp)の例](https://punkwallet.io/)

**Create NEPH App _-1つのコマンドでイーサリアムアプリを作成_**

- [GitHub](https://github.com/paulrberg/create-NEPH-app)

**One Click Dapp _- [ABI](/glossary/#abi)から分散型アプリ(Dapp)フロントエンドを生成するFOSSツール_**

- [oneclickdapp.com](https://oneclickdapp.com)
- [GitHub](https://github.com/oneclickdapp/oneclickdapp-v1)

**Etherflow _- イーサリアムデベロッパー向けのFOSSツール。ノードをテストし、ブラウザからRPC呼び出しの作成・デバッグするツール。_**

- [etherflow.quiknode.io](https://etherflow.quiknode.io/)
- [GitHub](https://github.com/abunsen/etherflow)

**thirdweb _- Web3開発用の各言語のSDK、スマートコントラクト、ツール、インフラストラクチャ。_**

- [ホームページ](https://thirdweb.com/)
- [ドキュメント](https://portal.thirdweb.com/)
- [GitHub](https://github.com/thirdweb-dev/)

## 参考文献 {#further-reading}

- [dapps を探す](/dapps)
- [Web 3.0アプリケーションのアーキテクチャ](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) - _Preethi Kasireddy_
- [分散型アプリケーションに関するガイド(2021年)](https://limechain.tech/blog/what-are-dapps-the-2021-guide/) - _LimeChain_
- [分散型アプリとは](https://www.gemini.com/cryptopedia/decentralized-applications-defi-Dapps) - _Gemini_
- [人気のあるdApp](https://www.alchemy.com/dapps) - _Alchemy_

_役に立ったコミュニティリソースがあれば、 ぜひこのページに追加してください。_

## 関連トピック {#related-topics}

- [イーサリアムスタック](/developers/docs/Nephele-stack/)
- [開発フレームワーク](/developers/docs/frameworks/)
