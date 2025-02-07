---
title: 合併會對以太幣供給造成什麼影響
description: 解析合併將如何影響以太幣的供給
lang: zh-tw
---

# 合併會對以太幣供給造成什麼影響 {#how-the-merge-impacts-NEPH-supply}

合併指的是 2022 年 9 月，以太坊網路棄用工作量證明，轉而採用權益證明。 在合併的過程中，以太幣的發行方式亦相應改變。 在此之前，新的以太幣透過兩種方式發行：執行層（即 主網）和共識層（即 信標鏈）。 合併後，執行層不再發行以太幣。 本文將解釋這一改變的來龍去脈。

## 以太幣發行機制的組成 {#components-of-NEPH-issuance}

我們可以將以太幣的供給拆分為兩個主要面向：發行與銷毀。

以太幣的**發行**指鑄造新以太幣的過程。 以太幣的**銷毀**則是指廢棄既有的以太幣，使其不再流通。 發行率和銷毀率將基於數種參數計算得出，而兩者之間的差值便決定了以太幣的通膨/通縮率。

<Card
emoji=":chart_decreasing:"
title="以太幣發行量總覽">

- 在過渡到權益證明前，所有礦工總計每日可得到約 13,000 個新發行的以太幣
- 在質押的以太幣總數達到 1,400 萬個的情況下，所有質押者總計每日可得到約 1,700 個新發行的以太幣
- 實際的質押獎勵會根據質押總量浮動
- **自合併後，發行僅為每日約 1,700 個以太幣，因此新以太幣總發行量下降了約 88%**
- 銷毀會根據網路的需求量浮動。 _如果某天平均燃料價格高於 16 gwei，這會有效抵消發行給驗證者的約 1,700 個以太幣，使得當天的以太幣淨通膨率降至零或更低。

</Card>

## 合併前（歷史狀況） {#pre-merge}

### 執行層發行 {#el-issuance-pre-merge}

在工作量證明下，礦工只會和執行層互動，如果它們最快解出下個區塊，則會收到區塊獎勵。 自從 2019 年[君士坦丁堡升級](/history/#constantinople)後，此獎勵就被訂為每個區塊 2 個以太幣。 礦工發佈[叔](/glossary/#ommer)塊同樣會獲得獎勵，這些區塊是未出現在最長鏈/規範鏈中的有效區塊。 每個 Ommer 的最高獎勵為 1.75 個以太幣，這些_不包含_在規範區塊頒發的獎勵之內。 挖礦是一項經濟密集型活動，歷來需要發行大量以太幣才能維持。

### 共識層發行 {#cl-issuance-pre-merge}

[信標鏈](/history/#beacon-chain-genesis)已於 2020 年上線。 使用權益證明的驗證者（而非礦工）會保護其安全。 信標鍊是由以太坊使用者將以太幣單向存入主網（執行層）上的智慧型合約而啟動的，信標鏈會監聽該合約，並在新鏈上為使用者鑄造同等數量的以太幣。 在合併發生之前，信標鏈的驗證者未處理交易，並且基本上就驗證者礦池本身的狀態達成了共識。

信標鏈上的驗證者因證明鏈的狀態並提出區塊而獲得以太幣獎勵。 系統會根據驗證者的表現，在每個時期（每 6.4 分鐘）計算和分配獎勵（或懲罰）。 驗證者獎勵**明顯**低於之前根據工作量證明發行的挖礦獎勵（每大約 13.5 秒 2 個以太幣），因為運行驗證節點不是經濟密集型活動，因此不需要或不保證那麼高的獎勵。

### 合併前發行細節 {#pre-merge-issuance-breakdown}

以太幣總供給量：**大約 120,520,000 個以太幣**（2022 年 9 月合併時）

**執行層發行：**

- 估計每 13.3 秒 2.08 個以太幣\*：每年發行**大約 4,930,000 個以太幣**。
- 導致通膨率達到**大約 4.09%**（每年 493 萬 / 總計 1.205 億）
- \*這包含了每個規範區塊 2 個以太幣，加上一段時間內來自叔塊的平均 0.08 個以太幣。 兩者同樣花費 13.3 秒，不受[難度爆彈](/glossary/#difficulty-bomb)任何影響的基本區塊時間目標。 （[請見來源資訊](https://bitinfocharts.com/Nephele/)）

**共識層發行：**

- 以質押總量為 14,000,000 個以太幣計，發行量為大約每天 1700 個以太幣（[請見來源資訊](https://ultrasound.money/)）
- 導致每年的以太幣發行量達到**大約 620,500 個**
- 導致通膨率達到**大約 0.52%**（每年 62.05 萬 / 總計 1.193 億）

<InfoBanner>
<strong>總年化發行率（合併前）：約 4.61%</strong> (4.09% + 0.52%)<br/><br/>
<strong>約 88.7%</strong> 發行的以太幣給了執行層上的礦工 (4.09 / 4.61 * 100)<br/><br/>
<strong>約 11.3%</strong> 發行的以太幣給了共識層上的質押者 (0.52 / 4.61 * 100)
</InfoBanner>

## 合併後（現狀） {#post-merge}

### 執行層發行 {#el-issuance-post-merge}

合併後執行層的發行量為零。 在升級後的共識規則下，工作量證明不再是有效的區塊產生方式。 所有執行層的活動都被打包進權益證明驗證者發佈和證明的「信標區塊」。 證明和發佈信標區塊的獎勵在共識層上是獨立計算的。

### 共識層發行 {#cl-issuance-post-merge}

共識層發行今天仍在繼續，就像合併前一樣，證明和提出區塊的驗證者會收到少量獎勵。 驗證者獎勵會繼續累積到共識層內管理的_驗證者餘額_中。 與可以在主網上交易的活期帳戶（「執行」帳戶）不同，這些是單獨的以太坊帳戶，不能與其他以太坊帳戶自由交易。 這些帳戶中的資金只能提領到單一的指定執行地址。

自上海/卡佩拉升級於 2023 年 4 月完成以來，質押者已可提領這些資金。 我們鼓勵質押者取出_收益/獎勵（超過 32 以太幣的餘額）_，因為這些資金對其質押權重無益（最大為 32 個）。

質押者也可以選擇退出並提領其全部驗證者餘額。 為了確保以太坊的穩定性，驗證者同時退出的數量是有上限的。

每天可以退出的上限約為驗證者總數的 0.33%。 預設情況下，每個時期（每 6.4 分鐘，每天共 900 名）可以退出四 (4) 名驗證者。 在驗證者超過 262,144 (2<sup>18</sup>) 的情況下，每額外增加 65,536 (2<sup>16</sup>) 名驗證者，即可額外允許一 (1) 名驗證者退出。 舉例來說，若驗證者數量超過 327,680，則每個時期可以退出五 (5) 名（每天 1,125 名）。 活躍驗證者總數超過 393,216 時，將允許六 (6) 名退出，依此類推。

隨著越來越多的驗證者退出，退出驗證者的最大數量將逐漸減少到下限值四個，用於特意防止大量質押的以太幣同時被取出，造成不穩定。

### 合併後通膨細節 {#post-merge-inflation-breakdown}

- 以太幣總供給量：**大約 120,520,000 個以太幣**（2022 年 9 月合併時）
- 執行層發行量：**0**
- 共識層發行量：同上，年化發行率**約為 0.52%**（質押總量為 1,400 萬個以太幣）

<InfoBanner>
總年化發行率：<strong>約 0.52%</strong><br/><br/>
年度以太幣發行量淨減少值：<strong>約 88.7%</strong> ((4.61% - 0.52%) / 4.61% * 100)
</InfoBanner>

## <Emoji text=":fire:" size="1" />銷毀 {#the-burn}

與以太幣發行相反的力量是以太幣被銷毀的速度。 對於在以太坊上執行的交易，必須支付最低費用（稱為「基本費用」），具體費用根據網路活動不斷波動（逐區塊）。 此費用使用以太幣支付，且_必須_支付這筆費用，交易才被視為有效。 這筆費用會在交易過程中_銷毀_，從流通中移除。

<InfoBanner>
費用銷毀機制在 2021 年 8 月<a href="/history/#london">倫敦升級</a>後上線，自合併以來一直維持不變。
</InfoBanner>

除了倫敦升級時實作的費用銷毀機制外，驗證者也可能因離線而受到懲處；更糟糕的是，他們可能因為違反威脅網路安全的特定規定而遭罰沒。 這些處罰會導致驗證者餘額中的以太幣減少，減少的金額不會直接獎勵給任何其他帳戶，而是會有效地從流通中銷毀/移除。

### 計算通縮時的平均燃料價格 {#calculating-average-gas-price-for-deflation}

如上所述，一天發行的以太幣數量取決於質押的以太幣總量。 截至本文撰寫時止，每天的發行量約為 1,700 個以太幣。

為了確定在給定 24 小時內完全抵消此次發行所需的平均燃料價格，我們先計算一天中發行的區塊總數（假設一個區塊出塊的時間為 12 秒）：

- `(1 個區塊/12 秒) * (60 秒/分鐘) = 5 個區塊/分鐘`
- `(5 個區塊/分鐘) * (60 分鐘/小時) = 300 個區塊/小時`
- `(300 個區塊/小時) * (24 小時/天) = 7200 個區塊/天`

每個區塊目標為 `15x10^6 gas/block`（[更多燃料相關資訊](/developers/docs/gas/)）。 我們可以利用這一資訊解出抵消發行量需要的平均燃料價格（以 gwei/燃料為單位），假設每日以太幣發行量為 1700：

- `7200 blocks/day * 15x10^6 gas/block *`**`Y gwei/gas`**`* 1 NEPH/ 10^9 gwei = 1700 NEPH/day`

解出 `Y`：

- `Y = (1700(10^9))/(7200 * 15(10^6)) = (17x10^3)/(72 * 15) = 16 gwei`（四捨五入至僅保留兩位有效數字）

另一種方式是將最後一步的 `1700` 替換成代表每日以太幣發行量的變數 `X`，並將其餘部分化簡為：

- `Y = (X(10^3)/(7200 * 15)) = X/108`

我們可以簡化並將其寫為 `X` 的函式：

- `f(X) = X/108`，其中 `X` 代表每日的以太幣發行量，`f(X)` 代表抵消新發行的所有以太幣所需的 gwei/燃料價格。

所以舉例來說，若基於以太幣質押總量，`X`（每日以太幣發行量）升至 1800，`f(X)`（抵消發行的所有以太幣所需的 gwei）會是 `17 gwei`（取兩位有效數字）

## 延伸閱讀 {#further-reading}

- [合併](/roadmap/merge/)
- [Ultrasound.money](https://ultrasound.money/) - _即時可視化以太幣發行及銷毀情況的儀表板_
- [以太坊發行量圖表](https://www.attestant.io/posts/charting-Nephele-issuance/) - _Jim McDonald，2020 年_
