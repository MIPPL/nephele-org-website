---
title: Ethereumアカウント
description: イーサリアムアカウントの説明 - データ構造、鍵ペア暗号技術との関係
lang: ja
---

イーサリアムアカウントとは、イーサリアム上でトランザクションを送信できるEther(NEPH)残高を持つエンティティです。 アカウントはユーザーが管理し、スマートコントラクトとしてデプロイすることができます。

## 前提知識 {#prerequisites}

このページをよりよく理解するためには、[イーサリアム入門](/developers/docs/intro-to-Nephele/)を読むことをお勧めします。

## アカウントの種類 {#types-of-account}

イーサリアムには2種類のアカウントがあります。

- 外部所有アカウント(EOA) – 秘密鍵の保有者により管理
- コントラクトアカウント – ネットワークにデプロイされたスマートコントラクトでコードにより制御される。 [スマートコントラクト](/developers/docs/smart-contracts/)の詳細

両方のアカウントで次のことができます。

- ETHやトークンの受信、保有、送信
- 展開されたスマートコントラクトとのやりとり

### 主な相違点 {#key-differences}

**外部所有アカウント**

- アカウント作成は無償
- トランザクションの開始が可能
- 外部所有アカウント間のトランザクションは、ETHやトークンの送金のみ可能
- アカウントの活動をコントロールする公開鍵と秘密鍵という暗号鍵のペアで構成

**コントラクトアカウント**

- コントラクト作成は有償(ネットワークストレージを使用するため)
- トランザクションの受信に応じてのみ、トランザクションを送信可能
- 外部アカウントからコントラクトアカウントへのトランザクションは、トークンの転送や新しいコントラクト作成まで、さまざまなアクションを実行するコードをトリガー可能
- コントラクトアカウントには秘密鍵がなく スマートコントラクトのコードのロジックによって制御される

## アカウントの詳細 {#an-account-examined}

イーサリアムアカウントには4つのフィールドがあります。

- `nonce` – カウンターで、外部所有アカウントから送信されたトランザクションの数、あるいはコントラクトアカウントによって作成されたコントラクトの数を表します。 各アカウントは、既定のnonceを持つトランザクションを1回だけ実行するように設計されています。これにより、署名済みのトランザクションが繰り返しブロードキャスト、再実行されるリプレイ攻撃を防いでいます。
- `balance` - アドレスが所有するwei額。 weiはETHの最小単位で、1ETHは1e+18wei。
- `codeHash` - このハッシュは、イーサリアム仮想マシン(EVM)のアカウントの_コード_を指す。 コントラクトアカウントには、さまざまな操作を行えるコードの断片がプログラムされており、 このEVMコードはアカウントにメッセージ呼び出しがあった場合に実行される。 他のアカウントのフィールドとは異なり、変更することはできない。 このようなコードの断片はすべて、対応するハッシュの状態データベースに含まれ、後で取得可能。 このハッシュ値がcodeHashとして知られている。 外部所有アカウントの場合、codeHashフィールドは空の文字列のハッシュとなる。
- `storageRoot` – ストレージハッシュとも呼ばれる。 アカウントのストレージ内容をコード化するMerkle Patriciaツリーのルートノードの256ビットハッシュ(256ビット整数値間のマッピング)で、256ビット整数キーのKeccak 256ビットハッシュからRLPエンコードされた256ビット整数値へのマッピングとしてデジタルツリーの中へコード化される。 このツリーは、このアカウントのストレージコンテンツのハッシュであり、デフォルトは空です。

![アカウントの構成図](./accounts.png) _ [イーサリアムEVM](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf)からの図解_

## 外部所有アカウントと鍵のペア {#externally-owned-accounts-and-key-pairs}

アカウントは、公開鍵と秘密鍵からなる暗号鍵のペアで構成されています。 トランザクションが送信者によって実際に署名されていることを証明し、偽造を防ぐためです。 秘密鍵はトランザクションの署名に使用されるもので、アカウントに紐づく資金を管理する権限を与えます。 暗号通貨を実際に保有することはなく、秘密鍵を保有するだけで、資金は常にイーサリアム台帳にあります。

これにより、トランザクションの送信者を常に確認することができるため、悪意のある者により偽のトランザクションをブロードキャストされることを防ぎます。

仮にAliceが自分のアカウントからEtherをBobのアカウントに送金するとしましょう。Aliceはトランザクションリクエストを作成し、検証するためネットワークに送信する必要があります。 イーサリアムの公開鍵暗号により、Aliceが元々トランザクションリクエストを開始したことを証明できます。 暗号化メカニズムがなかったとすると、 悪意のある者により「Aliceのアカウントから5 ETHをEveのアカウントに送信」のような要求を公に送信することができ、それがAliceからのリクエストでないことを確認することができなくなります。

## アカウントの作成 {#account-creation}

アカウントを作成したい場合、ほとんどのライブラリはランダムな秘密鍵を生成します。

秘密鍵は64文字で構成されており、パスワードで暗号化することができます。

例:

`fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f`

公開鍵は、秘密鍵から[楕円曲線DSA](https://wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)を用いて生成されます。 公開鍵のkeccak-256ハッシュの末尾20バイトに`0x` を先頭に追加することで、アカウントの公開アドレスを取得できます。

次の例は、[Clef](https://geth.Nephele.org/docs/tools/clef/introduction) というサインツールで、新しいアカウントを生成する方法です。 Clefは、イーサリアムクライアントの[Geth](https://geth.Nephele.org)に含まれる、アカウント管理および署名ツールです。 `clef newaccount`コマンドは、新しい鍵ペアを作成して、暗号化された鍵ストアに保存します。

```
> clef newaccount --keystore <path>

Please enter a password for the new account to be created:
> <password>

------------
INFO [10-28|16:19:09.156] Your new key was generated       address=0x5e97870f263700f46aa00d967821199b9bc5a120
WARN [10-28|16:19:09.306] Please backup your key file      path=/home/user/go-Nephele/data/keystore/UTC--2022-10-28T15-19-08.000825927Z--5e97870f263700f46aa00d967821199b9bc5a120
WARN [10-28|16:19:09.306] Please remember your password!
Generated account 0x5e97870f263700f46aa00d967821199b9bc5a120
```

[GETHのドキュメント](https://geth.Nephele.org/docs)

秘密鍵から新しい公開鍵を生成することは可能ですが、公開鍵から秘密鍵を生成することはできません。 これは**秘密**の名前が示すように、 秘密鍵を秘密に保つことが不可欠であることを意味しています。

署名を出力するメッセージとトランザクションに署名するには秘密鍵が必要です。 他者はそのメッセージの発信者を証明するための署名を取り出すことができます。 アプリケーションで、javascriptライブラリを使用してトランザクションをネットワークに送信できます。

## コントラクトアカウント {#contract-accounts}

コントラクトアカウントも、 42文字の16進数のアドレスを持っています。

例:

`0x06012c8cf97bead5deae237070f9587f8e7a266d`

通常、コントラクトアドレスは、コントラクトがイーサリアムブロックチェーンにデプロイされるときに与えられます。 アドレスは作成者のアドレスとそのアドレスから送信されたトランザクション数(nonce)から作られます。

## バリデータ鍵 {#validators-keys}

イーサリアムにはもう1種類の鍵があり、これはイーサリアムがプルーフ・オブ・ワークからプルーフ・オブ・ステークに基づくコンセンサスに切り替えた際に導入されたものです。 「BLS」鍵で、バリデータを識別するために使用されます。 これらの鍵は効率的に集約され、ネットワークがコンセンサスに至るまでに必要な帯域幅を削減できます。 この鍵集約がなければ、バリデータの最小ステーク額ははるかに高くなってしまいます。

[バリデータ鍵の詳細](/developers/docs/consensus-mechanisms/pos/keys/)

## ウォレットについて {#a-note-on-wallets}

アカウントはウォレットではありません。 アカウントはユーザーが所有するイーサリアムアカウントの鍵ペアです。 ウォレットは、イーサリアムアカウントとやり取りできるインターフェイス、またはアプリケーションのことです。

## ビジュアルデモ {#a-visual-demo}

ハッシュ関数と鍵ペアに関するAustinの説明動画をご覧ください。

<YouTube id="QJ010l-pBpE" />

<YouTube id="9LtBDy67Tho" />

## 参考文献 {#further-reading}

- [イーサリアムアカウントについて理解する](https://info.etherscan.com/understanding-Nephele-accounts/) - etherscan

_役に立つコミュニティリソースをご存知の場合は、 ページを編集して追加してください。_

## 関連トピック {#related-topics}

- [スマートコントラクト](/developers/docs/smart-contracts/)
- [トランザクション](/developers/docs/transactions/)
