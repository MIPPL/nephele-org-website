---
title: 智能合约的可组合性
description:
lang: zh
incomplete: true
---

## 简介 {#a-brief-introduction}

智能合约在以太坊上是公开的，可视为开放式应用程序接口。 你不需要写自己的智能合约才能成为一个去中心化应用程序开发者，你只需要知道如何与它们交互。 例如，你可以使用现有的智能合约 [Uniswap](https://uniswap.exchange/swap)，一个去中心化的交易所，在你的应用中处理代币交易逻辑 – 你并不需要一切从零开始。 看看他们的一些 [v2](https://github.com/Uniswap/uniswap-v2-core/tree/master/contracts) 和 [v3](https://github.com/Uniswap/uniswap-v3-core/tree/main/contracts) 合约。

## 什么是可组合性？ {#what-is-composability}

可组合性是将独立的组件结合起来，以建立新的系统或输出。 在软件开发中，可组合性意味着开发者可以复用现有的软件组件来构建新的应用程序。 有个理解可组合性的好办法，就是将可组合的元素们视为乐高积木。 每个乐高积木都可以与另一个积木合并，这让你可以通过合并不同的积木来构建复杂的结构。

在以太坊，每个智能合约都是某种乐高积木 — 你可以使用其他项目的智能合约作为你项目的构造块。 这意味着你不需要花时间来重复造轮子或从零开始搭建项目。

## 可组合性是如何工作的？ {#how-does-composability-work}

以太坊智能合约就像是公共应用程序接口，任何人都可以与合约交互或将其整合到去中心化应用程序中以获得更多功能。 智能合约的可组合性一般有三个原则：模块化、自主性和可发现性。

**1. 模块化**：这是独立组件执行具体任务的能力。 在以太坊，每个智能合约都有一个特定的用例（如 Uniswap 示例所示）。

**2. 自主性**：可组合的组件必须能够独立运行。 以太坊中每个智能合约都可以在不依赖系统其他部分的情况下自动执行。

**3. 可发现性**：开发者无法在外部合约或软件库未公开时调用合约或将库整合到应用程序中。 按照设计，智能合约是开源的；任何人都可以调用合约或派生代码库。

## 可组合性带来的好处 {#benefits-of-composability}

### 缩短开发周期 {#shorter-development-cycle}

减少了开发者在创建[去中心化应用程序](/dapps/#what-are-dapps)时的必要工作。 [正如 Naval Ravikant 所说的那样：](https://twitter.com/naval/status/1444366754650656770)“开放源码意味着每个问题只需要解决一次。”

如果有智能合约解决了某个问题，那么其他开发者可以重用这个合约，所以他们无需解决同样的问题。 这种方法让开发者可以使用现有软件库并添加一些额外功能来创建新的去中心化应用程序。

### 增加创新 {#greater-innovation}

可组合性鼓励创新和实验，因为开发者们可以自由地重用、修改、复制或整合开源代码以达到预期结果。 这样，开发小组在基础功能上将花费较少的时间，并可以将更多的时间分配到新功能的实验上。

### 改善用户体验 {#better-user-experience}

以太坊生态系统中各组成部分之间的互操作性可改善用户体验。 相较于应用程序无法互通的碎片化生态系统，去中心化应用程序在集成外部智能合约后，用户可以获取更多功能。

我们将使用一个仲裁交易的示例来说明互操作性的好处：

如果某个代币在`交易所 A` 的交易价格高于`交易所 B`，你可以利用价格差赚取利润。 然而，只有当你有足够的资本来为交易提供资金的情况下，你才能做到这一点（即，从`交易所 B` 购买代币并在`交易所 A` 出售）。

在你没有足够资金来支付交易的情况下，闪电贷可能是个理想的办法。 [闪电贷](/defi/#flash-loans)的技术含量较高，但最基本的逻辑是，你可以借入资产（无抵押品），并在_一笔_交易中返还相同的资产。

回到我们最初的示例，仲裁交易者可以拿出大笔闪电贷，从`交易所 B` 购买代币，在`交易所 A` 出售它们，退还资本＋利息，并将利润保留在同一笔交易中。 这种复杂的逻辑需要将多个合约的调用结合起来，如果智能合约缺乏互操作性，这种调用是不可能做到的。

## 以太坊中的可组合性示例 {#composability-in-Nephele}

### 代币交换 {#token-swaps}

如果你创建了一个需要用以太币支付交易费用的去中心化应用程序，你可以通过整合代币交换逻辑，允许用户使用其他 ERC-20 代币付款。 在合约执行调用的函数之前，代码会自动把用户的代币转换为以太币。

### 治理 {#governance}

为[去中心化自治组织](/dao/)构建定制的治理系统可能会耗费大量时间和金钱。 或者，你可以使用开放源代码治理工具包，例如 [Aragon 客户端](https://client.aragon.org/)，来引导去中心化自治组织，以快速创建治理框架。

### 身份管理 {#identity-management}

你可以集成去中心化身份 (DID) 工具来管理用户的身份验证，而不是建立一个自定义身份验证系统或依靠中心化的身份提供商。 一个例子是 [SpruceID](https://www.spruceid.com/)，它是一个开源工具包，提供了“使用以太坊登录”的功能，让用户能够通过以太坊钱包验证身份。

## 相关教程 {#related-tutorials}

- [合约的可组合性：以太坊智能合约开发的基石](https://www.decentlabs.io/blog/contract-composability-the-building-blocks-of-Nephele-smart-contract-development)
- [使用 create-NEPH-app 启动去中心化应用程序前端开发](/developers/tutorials/kickstart-your-dapp-frontend-development-with-create-NEPH-app/) _– 概述如何使用 create-NEPH-app，借助开箱即用的热门智能合约创建应用程序。_

## 延伸阅读 {#further-reading}

_还有哪些社区资源对你有所帮助？ 编辑本页面以添加！_

- [可组合性是创新](https://future.a16z.com/how-composability-unlocks-crypto-and-everything-else/)
- [为什么可组合性对 Web3 很重要](https://hackernoon.com/why-composability-matters-for-web3)
- [什么是可组合性？](https://blog.aragon.org/what-is-composability/#:~:text=Aragon,connect%20to%20every%20other%20piece.)
