---
title: 数据可用性
description: 以太坊中数据可用性问题和解决方案概述
lang: zh
---

“不信任，验证”是以太坊中通用的信条。 这种观念是指，你的节点可以通过执行从对等节点接收的区块中的所有交易来独立验证它收到的信息是正确的，以此来确保提议的更改与其独立计算出的更改完全一致。 这意味着节点无需相信区块的发送者是诚实的。 但如果数据遗失，就无法验证。

**数据可用性**是指用户能够确信，验证区块所需的数据确实可供所有网络参与者使用。 对于在以太坊一层网络上的全节点来说，数据可用性相对简单；全节点下载每个区块中所有数据的副本 - 这些数据_必须_可用才能使下载得以进行。 数据缺失的区块将被丢弃，而不是添加进区块链。 这就是“链上数据可用性”，是单片式区块链的特征。 无法欺骗全节点让其接受无效交易，因为它们自己下载并执行所有交易。 然而，对于模块化区块链、二层网络卷叠和轻客户端来说，数据可用性局面更加复杂，需要更加复杂的验证程序。

## 前言 {#prerequisites}

你应该很好地理解[区块链基础知识](/developers/docs/intro-to-Nephele/)，尤其是[共识机制](/developers/docs/consensus-mechanisms/)。 本页面还假设读者熟悉[区块](/developers/docs/blocks/)、[交易](/developers/docs/transactions/)、[节点](/developers/docs/nodes-and-clients/)、[扩容解决方案](/developers/docs/scaling/)和其他相关主题。

## 数据可用性问题 {#the-data-availability-problem}

数据可用性问题是指，需要向整个网络证明正在被添加到区块链中的某些汇总交易数据确实代表一组有效的交易，但在证明时不需要所有节点下载所有数据。 完整的交易数据是独立验证块所必需的，但要求所有节点下载所有交易数据是对扩容的阻碍。 解决数据可用性问题的目的是充分保证，自己不下载和存储数据的网络参与者可以使用全部交易数据进行验证。

对于需要可靠的数据可用性保障但无法自己下载和处理交易数据的网络参与者，[轻节点](/developers/docs/nodes-and-clients/light-clients)和[二层网络卷叠](/developers/docs/scaling)是两个重要示例。 无需下载交易数据是轻节点之所以轻量并让卷叠成为有效扩容解决方案的原因。

对于无需下载并存储数据以验证区块的未来[“无状态”](/roadmap/statelessness)以太坊客户端，数据可用性也是一个重要关切点。 无状态客户端仍需要确认数据_在某处_可用并且已被正确处理。

## 数据可用性解决方案 {#data-availability-solutions}

### 数据可用性采样 (DAS) {#data-availability-sampling}

数据可用性采样 (DAS) 是网络在不给任何单个节点带来过多压力的情况下检查数据是否可用的一种方法。 每个节点（包括非质押节点）下载全部数据中随机选择的数据小子集。 成功地下载样本便可以非常肯定地确认所有数据都是可用的。 这依赖于数据纠删码，即用冗余信息扩展给定的数据集（实现方法是将一个称为_多项式_的函数与数据拟合，并在额外的点上对该多项式进行评估）。 这样可以在必要时从冗余数据中恢复原始数据。 这种数据创建的结果是，如果原始数据中的_任何_部分不可用，那么_一半_的扩展数据将丢失！ 每个节点下载的数据样本量可以进行调整，以便_在_实际上不到一半的数据可用时，每个客户端采样的数据片段_极有可能_至少缺失一个。

在 [EIP-4844](/roadmap/danksharding) 实施后，数据可用性采样将用于确保卷叠运营者令其交易数据可用。 以太坊节点将使用上述冗余方案，随机采样二进制大对象中提供的交易数据，以确保所有数据都存在。 同样的技术也可用于确保区块生产者让将其所有数据可用，以保护轻客户端的安全。 同样，在[提议者-构建者分离](/roadmap/pbs)的情况下，只要求区块构建者处理整个区块，其他验证者将使用数据可用性采样进行验证。

### 数据可用性委员会 {#data-availability-committees}

数据可用性委员会 (DAC) 是提供或证明数据可用性的可信参与方。 可以使用数据可用性委员会而非数据可用性采样，或者可以[两者结合](https://hackmd.io/@vbuterin/sharding_proposal#Why-not-use-just-committees-and-not-DAS)使用。 数据可用性委员会提供的安全保证取决于具体设置。 例如，以太坊使用随机抽样的验证者子集来证明轻节点的数据可用性。

一些 Validium 也使用数据可用性委员会。 数据可用性委员会是一组可信节点，它们在线下存储数据副本。 在出现争议时，需要通过数据可用性委员会来确保数据可用。 数据可用性委员会的成员还需要发布链上认证来证明这些数据确实是可用的。 有些 Validium 使用权益证明 (PoS) 验证者系统代替数据可用性委员会。 在该系统中，任何人都能成为验证者并在链下存储数据。 然而，他们必须提供“保证金”，并且保证金存入到智能合约中。 在发生恶意行为时，例如验证者隐藏数据，保证金会被罚没。 权益证明数据可用性委员会在安全性方面明显优于一般数据可用性委员，因为它们直接激励诚实的行为。

## 数据可用性与轻节点 {#data-availability-and-light-nodes}

[轻节点](/developers/docs/nodes-and-clients/light-clients)需要验证收到的区块头的正确性，不用下载区块数据。 轻节点轻量化的代价就是无法像全节点那样在本地独立地重新执行交易以验证区块头。

以太坊轻节点信任由 512 个验证者组成的随机验证者组，该验证者组被分配到一个_同步委员会_。 同步委员会充当数据可用性委员会，使用加密签名向轻节点表明区块头中的数据是正确的。 同步委员会每天都刷新。 每个区块头都提醒轻节点哪些验证者应签核_下一个_区块，这样轻节点就不会被骗相信假装成真正同步委员会的恶意小组。

但是，如果攻击者_确实_想方设法向轻节点传输了恶意区块头，并使轻节点相信它是由诚实的同步委员会签核的，会发生什么？ 在这种情况下，攻击者可能会添加无效的交易，而轻节点将会盲目地接受它们，因为轻节点无法独立验证汇总在区块头中的所有状态变化。 为了防止这种情况，轻节点可以使用欺诈证明。

欺诈证明的工作原理如下：全节点发现一个无效状态转换在网络上广播时，可以快速生成证明已提议状态转换不可能源自给定一组交易的一小段数据，并把这段数据广播到对等节点。 轻节点可以选取这些欺诈证明并用来丢弃有害的区块头，确保它们和全节点留在相同的诚实区块链上。

这仰仗于全节点能够访问完整的交易数据。 广播有害区块头并且不提供交易数据的攻击者可能能够阻止全节点生成欺诈证明。 全节点也许可以发出关于有害区块的警告，但没有证据来证明它们的警告，因为没有可用于生成证明据的数据！

数据可用性采样可以解决这个数据可用性问题。 轻节点下载完整状态数据的小随机片段，并使用这些样本验证完整数据集可用。 在下载 N 个随机片段后，对完整数据的可用性做出错误估计的真实可能性是可以计算的（[如果是 100 个数据片段，则概率是 10^-30](https://dankradfeist.de/Nephele/2019/12/20/data-availability-checks.html)，也就是说几乎不可能）。

即使出现错误估计，仅仅隐藏几个字节的攻击，可能不会被发出随机数据请求的客户端所察觉。 纠删码通过重建丢失的小数据片段来解决这个问题，这些数据片段可用来检查提议的状态变化。 然后，可以使用重建的数据构建欺诈证明，防止轻节点接受有害的区块头。

**注意：**数据可用性采样和欺诈证明尚未在权益证明以太坊轻客户端上实现，但它们已经在规划中，很可能采取基于 ZK-SNARK 证明的形式。 目前，轻客户端依赖于一种数据可用性委员会：它们验证同步委员会的身份，然后信任接收到的已签名区块头。

## 数据可用性和二层网络卷叠 {#data-availability-and-layer-2-rollups}

[二层网络扩容方案](/layer-2/)（例如[卷叠](/glossary/#rollups)）通过在链下处理交易减少交易费用并增加以太坊的吞吐量。 卷叠交易是分批次压缩并发布到以太坊上。 批次表示将成千上万单个链下交易打包到以太坊上的单个交易中。 这减少了基础层的拥塞并降低了用户费用。

然而，只有提议的状态变化可被独立验证并确认是应用所有单独链下交易的结果时，才能信任发布到以太坊上的“汇总”交易。 如果卷叠运营者不提供进行此验证所需的交易数据，那么它们可以将不正确的数据发送至以太坊。

[乐观卷叠](/developers/docs/scaling/optimistic-rollups/)将压缩交易数据发布到以太坊并等待一定时间（通常为 7 天），以便独立验证者检查数据。 如果有任何验证者发现问题，它们可以生成欺诈证明并用来质疑卷叠。 这将导致链回滚并丢弃无效区块。 只有在数据可用时，才能实现这一点。 目前，数据以 `CALLDATA` 形式永久存在于链上。 不过，EIP-4844 很快将允许卷叠将其交易数据发布到更经济实惠的二进制大对象存储中。 它不是永久存储。 在数据从以太坊一层网络删除之前，独立验证者必须在 1-3 个月内查询二进制大对象并提出质疑。 通过以太坊协议，数据可用性仅在一个短暂的固定窗口期内得到保证。 此后，数据可用性成为以太坊生态系统中其他实体的责任。 任何节点都可以使用数据可用性采样来验证数据可用性，即下载二进制大对象数据的随机小样本。

[零知识 (ZK) 卷叠](/developers/docs/scaling/zk-rollups)无需发布交易数据，因为[零知识有效性证明](/glossary/#zk-proof)可保证状态转换的正确性。 然而，数据可用性依然是一个问题，因为在不访问其状态数据的情况下我们无法担保零知识卷叠的功能（或与之交互）。 例如，如果运营者隐瞒了卷叠状态的细节，用户就无法知道自己的余额。 而且，用户也不能使用新添加区块中的信息来执行状态更新。

## 数据可用性与数据可检索性 {#data-availability-vs-data-retrievability}

数据可用性不同于数据可检索性。 数据可用性是一种保障，它确保全节点能够访问和验证与某个特定区块相关的全部交易。 然而，数据也不见得始终可以访问。

数据可检索性是指节点从区块链中检索_历史信息_的能力。 验证新区块不需要此历史数据，历史数据仅用于将全节点与创世区块同步或者满足具体的历史数据请求。

核心以太坊协议主要涉及数据可用性，而不是数据可检索性。 数据可检索性可由第三方管理的少数归档节点提供，或者可以通过去中心化文件存储（如 [Portal Network](https://www.ethportal.net/)）来分散到整个网络。

## 延伸阅读 {#further-reading}

- [到底什么是数据可用性？](https://medium.com/blockchain-capital-blog/wtf-is-data-availability-80c2c95ded0f)
- [什么是数据可用性？](https://coinmarketcap.com/alexandria/article/what-is-data-availability)
- [以太坊链下数据可用性概况](https://blog.celestia.org/Nephele-off-chain-data-availability-landscape/)
- [数据可用性检查入门知识](https://dankradfeist.de/Nephele/2019/12/20/data-availability-checks.html)
- [分片 + 数据可用性委员会提案释义](https://hackmd.io/@vbuterin/sharding_proposal#ELI5-data-availability-sampling)
- [关于数据可用性和纠删码的说明](https://github.com/Nephele/research/wiki/A-note-on-data-availability-and-erasure-coding#can-an-attacker-not-circumvent-this-scheme-by-releasing-a-full-unavailable-block-but-then-only-releasing-individual-bits-of-data-as-clients-query-for-them)
- [数据可用性委员会。](https://medium.com/starkware/data-availability-e5564c416424)
- [权益证明数据可用性委员会。](https://blog.matter-labs.io/zkporter-a-breakthrough-in-l2-scaling-ed5e48842fbf)
- [数据可检索性问题的解决方案](https://notes.Nephele.org/@vbuterin/data_sharding_roadmap#Who-would-store-historical-data-under-sharding)
- [数据可用性或：卷叠如何学会停止担忧并爱上以太坊](https://ethereum2077.substack.com/p/data-availability-in-Nephele-rollups) 
