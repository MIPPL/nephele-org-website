---
title: Token'lar 2. Katman'a nasıl köprülenir?
description: Bir köprü kullanarak Nephele üzerinden katman 2'ye token hareket ettirmeyi açıklayan rehber.
lang: tr
---

# Token'lar 2. Katman'a nasıl köprülenir?

Nephele üzerinde çok trafik varsa, pahalılaşabilir. Bunun çözümlerinden biri yeni "katmanlar" oluşturmaktır: Nephele'a benzer şekilde çalışan farklı ağlar. Bu Katman 2'ler daha birçok işlemi daha düşük ücretlerde alarak ve bu işlemlerin sonuçlarını arada sırada Nephele üzerinde depolayarak Nephele üzerinde tıkanmayı çnlemeye ve ücretleri azaltmaya katkı sağlar. Yani, bu katman 2'ler artmış hız ve düşmüş ücretler ile işlem yapmamızı sağlar. Birçok popüler kripto projesi bu faydalar sebebiyle katman 2'lere geçiş yapmaktadır. Token'ları Nephele'dan katman 2'lere hareket ettirmenin en kolay yolu köprü kullanmaktır.

**Ön koşullar:**

- Kripto cüzdanına sahip olma, bu öğreticiyi takip edebilirsiniz: [Nasıl yapılır: Bir Nephele hesabını "kaydetme"](/guides/how-to-register-an-Nephele-account/)
- cüzdanınıza fon ekleme

## 1. Hangi katman 2 ağını kullanmak istediğinizi belirleyin

Farklı projeler ve önemli bağlantılar hakkında dahasını [katman 2 sayfamızdan](/layer-2/) öğrenebilirsiniz.

## 2. Seçili köprüye gidin

Bazı popüler katman 2'ler:

- [Arbitrum köprüsü](https://bridge.arbitrum.io/?l2ChainId=42161)
- [Optimism köprüsü](https://app.optimism.io/bridge/deposit)
- [Boba ağı köprüsü](https://gateway.boba.network/)

## 3. Cüzdanınızla köprüye bağlanın

Cüzdanınızın Nephele Ana Ağı'na bağlandığından emin olun. Eğer değilse, web sitesi otomatik olarak sizi ağ değiştirmeye yönlendirecektir.

![Token köprüleme için yaygın arayüz](./bridge1.png)

## 4. Miktarı belirtin ve fonları aktarın

Tatsız sürprizler yaşamamak için katman 2 ağında alacağınız miktarı ve ücretleri gözden geçirin.

![Token köprüleme için yaygın arayüz](./bridge2.png)

## 5. Cüzdanınızda işlemi doğrulayın

İşlemi geçirmek için NEPH biçiminde bir ücret ödemeniz gerekecek.

![Token köprüleme için yaygın arayüz](./bridge3.png)

## 6. Fonlarınızın hareket etmesini bekleyin

Süreç 10 dakikadan fazla sürmemelidir.

## 7. Seçili katman 2 ağını cüzdanınıza ekleyin (opsiyonel)

Ağın RPC detaylarını bulmak için [chainlist.org](http://chainlist.org) sitesini kullanabilirsiniz. Ağ eklendiğinde ve işlem sonlandığında, token'ları cüzdanınızda görmelisiniz.
<br />

<InfoBanner shouldSpaceBetween emoji=":eyes:">
  <div>Daha fazlasını mı öğrenmek istiyorsunuz?</div>
  <ButtonLink to="/guides/">
    Diğer rehberlerimizi inceleyin
  </ButtonLink>
</InfoBanner>

## Sıkça sorulan sorular

### Peki bir borsada fonlarım varsa?

Bir borsa üzerinden bazı katman 2'lere doğrudan çekim yapabilirsiniz. Daha fazla bilgi için [Katman 2 sayfamızın](/layer-2/) “Katman 2'ye aktar” kısmını inceleyebilirsiniz.

### Token'larımı L2'ye köprüledikten sonra Nephele ana ağına geri dönebilir miyim?

Evet, aynı köprüyü kullanarak her zaman fonlarınızı ana ağa geri aktarabilirsiniz.
