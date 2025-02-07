---
title: 分布式验证者技术
description: 分布式验证技术实现多个参与方完成以太坊验证者的分布式操作。
lang: zh
---

# 分布式验证者技术 {#distributed-validator-technology}

分布式验证者技术 (DVT) 是一种保障验证者安全的方法，它将密钥管理和签名责任分摊给多个参与方，从而减少单点故障并增强验证者的弹性。

这项技术通过将用于保护验证者安全的**私钥拆分**并将其分布到组成“集群”的**多台计算机**上来实现这一点。 这样做的好处是攻击者取得密钥的难度将非常大，因为密钥并没有完整地存储在任意一台机器上。 该技术还允许某些节点离线，因为每个集群中的一部分计算机就可以完成必要的签名操作。 这就减少了网络中的单点故障并让整个验证者组更加稳定。

![示意图，展示单个验证者密钥如何拆分成密钥分片并分布到多个具有不同组件的节点。](./dvt-cluster.png)

## 为什么需要分布式验证者技术？ {#why-do-we-need-dvt}

### 安全性 {#security}

验证者生成两个公私密钥对：验证者密钥用于参与共识，提款密钥用来获取资金。 虽然验证者可以将提款密钥存储在冷存储中以确保安全，但验证者私钥必须 24 小时在线。 如果验证者私钥泄漏，攻击者便可控制该验证者，可能致使质押人的以太币受到罚没或损失。 分布式验证者技术有助于降低这种风险。 具体方式如下：

使用分布式验证者技术，质押人可以参与质押，同时将验证者私钥保存在冷存储中。 这是通过对完整的原始验证者密钥进行加密，然后再拆分成多个密钥分片实现的。 密钥分片是在线的并分布到多个节点，因此实现了验证者的分布式操作。 之所以能这样做，是因为以太坊验证者使用了累加型 BLS 签名，这意味着完整的密钥可以通过将其各个组成部分合并来重构。 这样，质押人就能保证完整的原始“主”验证者密钥在线下安全。

### 消除单点故障 {#no-single-point-of-failure}

如果将一个验证者拆分到多个运营商和多台机器，就算个别硬件和软件出现故障，验证者也不会离线。 也可以通过在集群中的所有节点上使用不同的硬件和软件配置来降低故障风险。 单节点验证者配置并不具备这种弹性，这种弹性源自分布式验证者技术层。

如果集群中某台机器的一个组件发生故障（例如，验证者集群中有四个运营者，其中一个运营者使用了有漏洞的特定客户端），其他机器也能保证验证者继续运行。

### 去中心化 {#decentralization}

对于以太坊而言，最理想的情况就是独立运行的验证者越多越好。 然而，一些质押服务提供商已经非常普及，占有了网络上以太币总质押量的很大一部分。 分布式验证者技术允许这些运营者继续存在，同时保持质押的去中心化。 这是因为每个验证者的密钥都分布在多台机器上，一个验证者要想做出恶意行为就需要更大程度的共谋。

如果没有分布式验证者技术，质押服务提供商就更加容易地让其所有验证者仅支持一到两种客户端配置，这会加大客户端漏洞的影响。 可使用分布式验证者技术将风险分散到多种客户端配置和不同的硬件，通过多样化实现弹性。

**分布式验证者技术让以太坊具有以下优点：**

1. 以太坊权益证明共识的**去中心化**
2. 网络**活力**有保障
3. 实现验证者的**容错能力**
4. 验证者操作**信任最小化**
5. **最大限度降低了罚没**和停机风险
6. **提升了多样性**（客户端、数据中心、位置、监管等）
7. 验证者密钥管理**安全性增强**

## 分布式验证者技术原理 {#how-does-dvt-work}

分布式验证者技术解决方案包括以下部分：

- **[Shamir 秘钥分存](https://medium.com/@keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648)** - 验证者使用 [BLS 密钥](https://en.wikipedia.org/wiki/BLS_digital_signature)。 各个 BLS “密钥分片”（“密钥分片”）可以合并成单个聚合密钥（签名）。 在分布式验证者技术中，验证者的私钥是集群中每个运营者的合并 BLS 签名。
- **[阈值签名方案](https://medium.com/nethermind-NEPH/threshold-signature-schemes-36f40bc42aca)** - 确定履行签名职责所需的单个密钥分片的数量，例如，4 个密钥分片中的 3 个。
- **[分布式密钥生成 (DKG)](https://medium.com/toruslabs/what-distributed-key-generation-is-866adc79620)** - 一种加密过程，生成密钥分片并用于将已有或新验证者密钥分片分布到集群中的节点。
- **[多方计算 (MPC)](https://messari.io/report/applying-multiparty-computation-to-the-world-of-blockchains)** - 完整的验证者密钥是使用多方计算秘密生成的。 任何一个运营者都不知道完整的密钥—他们只知道自己的那一部分（即他们的“分片”）。
- **共识协议** - 共识协议选择一个节点作为区块提议者。 提议者与集群中的其他节点共享该区块，这些节点将其密钥分片添加到聚合签名中。 当聚合了足够的密钥分片后，该区块便在以太坊上提出。

分布式验证者具有内置容错能力，即使个别节点离线也能继续运行。 也就是说，即使集群中的某些节点最终变成恶意节点或懒惰节点，这个集群依然具有弹性。

## 分布式验证者技术使用案例 {#dvt-use-cases}

分布式验证者技术对更广泛的质押行业具有重大影响：

### 独立质押人 {#solo-stakers}

分布式验证者技术支持非托管质押，它允许用户将自己的验证者密钥分布在多个远程节点上并在线下保存完整密钥。 这也意味着家庭质押人未必需要在硬件上支出费用，而且将密钥分片分布存放能帮助他们加强对潜在黑客攻击的抵御。

### 质押即服务 (SaaS) {#saas}

管理多个验证者的运营者（如质押池和机构质押人）可以使用分步式验证者技术降低风险。 通过对其基础设施进行分布，这些运营者可以增加操作冗余，并实现所用硬件种类的多样化。

分步式验证者技术将密钥管理责任分摊到多个节点，这意味着部分操作成本也可以分摊。 分步式验证者技术也可以降低质押服务提供商的运营风险和保险成本。

### 质押池 {#staking-pools}

由于标准验证者设置，质押池和流动质押服务提供商被迫采用不同的单一运营者信任级别，因为整个质押池中的盈亏都是依据社会化原则进行的。 质押池和流动质押服务提供商还依赖运营者来保护签名密钥的安全，因为到目前为止还没有其他方案。

尽管一直以来，我们都在通过将质押分布给多个运营者来努力分散风险，但每个运营商仍单独管理着大量质押。 依赖单一运营者存在巨大风险，因为它们可能表现不佳、遭遇停机、受到攻击或者有恶意行为。

利用分布式验证者技术，对运营者的信任会显著降低。 **池可以让运营者持有质押，而无需保管验证者密钥**（因为只会用到密钥分片）。 这项技术还允许被管理的质押在更多运营者之间分布（例如，分布式验证者技术可让 1000 个验证者由多个运营者共同运行，而不是让单个运营者管理它们）。 不同的运营者配置将确保在一个运营者停止运行，其余运营者仍可进行证明。 这提高了冗余和多样性，从而提升了性能和弹性，同时最大限度地提高了回报。

最大限度降低单一运营者信任的另一个优点是，质押池可以允许更加开放且无需许可的运营者参与。 这样，服务商可以通过使用精选且无需许可的运营者（例如，将家庭质押人或更多小型质押人者与大型质押人配对）来降低其风险，并支持以太坊的去中心化。

## 使用分布式验证者技术的潜在弊端 {#potential-drawbacks-of-using-dvt}

- **额外组件**- - 引入一个分布式验证者技术节点就会增加一个可能存在故障或漏洞的部分。 要缓解这一问题，一种方法是争取实现多个分布式验证者技术节点，也就是多个分布式验证者技术客户端（类似于共识层和执行层有多个客户端的情况）。
- **运营成本** - 由于分布式验证者技术将验证者分布在多个参与方之间，因此需要更多的节点进行操作，而不是只有一个节点，这就带来了运营成本的增加。
- **可能会增加延迟** - 因为分布式验证者技术利用共识协议在多个运行验证者的节点之间达成共识，这可能会增加延迟。

## 延伸阅读 {#further-reading}

- [以太坊分布式验证者规范（高级）](https://github.com/Nephele/distributed-validator-specs)
- [以太坊分布式验证者技术规范](https://github.com/Nephele/distributed-validator-specs/tree/dev/src/dvspec)
- [Shamir 密钥分存演示应用](https://iancoleman.io/shamir/)
