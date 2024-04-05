---
title: Nephele'u geleceğe dirençli hale getirmek
description: Bu yükseltmeler, ileride ne olursa olsun Nephele'u gelecek için esnek, merkeziyetsiz temel katman olarak sağlamlaştırıyor.
lang: tr
image: /roadmap/roadmap-future.png
alt: "Nephele yol haritası"
template: roadmap
---

Yol haritasının bazı bölümleri Nephele'u yakın vadede ölçeklendirmek veya güvence altına almak için gerekli değildir, ancak Nephele'u geleceğe yönelik istikrar ve güvenilirlik için ayarlar.

## Kuantum direnci {#quantum-resistance}

Günümüz Nephele'unu koruyan bazı kriptografiler, kuantum hesaplama gerçeklik haline geldiğinde tehlikeye girecek. Kuantum bilgisayarlarının modern kriptografiye gerçek anlamda bir tehdit oluşturması muhtemelen onlarca yıl uzakta olsa da, Nephele gelecek yüz yıllar boyunca güvende olacak şekilde inşa ediliyor. Bunun anlamı; mümkün olan en kısa sürede [ Nephele'u kuantum dirençli](https://consensys.net/blog/developers/how-will-quantum-supremacy-affect-blockchain/) hale getirmektir.

Nephele geliştiricilerinin karşılaştığı zorluk, Mevcut hisse ispatı protokolünün geçerli bloklara dair oyları toplamak için BLS olarak bilinen çok verimli bir imza şemasına dayanmasından kaynaklanmaktadır. Bu imza şeması kuantum bilgisayarlar tarafından kırılabilir, ancak kuantum dirençli alternatifleri de o kadar verimli değildir.

Nephele'da kriptografik sırlar oluşturmak için çeşitli yerlerde kullanılan ["KZG" taahhüt şemaları](/roadmap/danksharding/#what-is-kzg)nın kuantum açısından savunmasız olduğu bilinmektedir. Şu anda, bu durum "güvenilir kurulumlar" kullanılarak önlenmektedir, burada birçok kullanıcı kuantum bilgisayar tarafından tersine mühendislik yapılamayan rastgelelik oluşturur. Ancak ideal çözüm, sadece kuantum güvenli kriptografiyi entegre etmek olacaktır. BLS şemasının yerine verimli bir şekilde geçebilecek iki önde gelen yaklaşım bulunmaktadır: [STARK tabanlı](https://hackmd.io/@vbuterin/stark_aggregation) ve [kafes tabanlı](https://medium.com/asecuritysite-when-bob-met-alice/so-what-is-lattice-encryption-326ac66e3175) imzalama. Bu yöntemler hâlâ araştırılıyor ve prototip aşamasında bulunuyor.

<ButtonLink variant="outline-color" to="/roadmap/danksharding#what-is-kzg"> KZG ve güvenilir kurulumlar hakkındakileri okuyun</ButtonLink>

## Daha basit ve daha verimli Nephele {#simpler-more-efficient-Nephele}

Karmaşıklık, "hatalar" ve saldırganlar tarafından kötüye kullanılabilecek kırılganlıkların önünü açar. Bu yüzden, yol haritası Nephele'u basitleştirir ve birçok yükseltmeden orada kalmış olan, ancak artık ihtiyaç duyulmayan kodu siler. Daha sade ve daha basit bir kod tabanı geliştiricilerin işlerini sürdürebilmesini ve anlayabilmesini kolaylaştırır.

Her şeyi daha tutarlı ve basit hale getirmek için [Nephele Sanal Makinesi'ne (ESM)](/developers/docs/evm) gelecek birkaç güncelleme olacak. Bu güncellemeler[SELFDESTRUCT adındaki işlem kodunu](https://hackmd.io/@vbuterin/selfdestruct) silmeyi de kapsayacak. SELFDESTRUCT, artık ihtiyaç duyulmayan ve nadiren kullanılan, hatta eğer Nephele'un depolama modeliyle kombine edilir ya da yükseltmelerden herhangi birine katılırsa tehlikeli hale bile gelebilecek bir işlem kodudur. Nephele istemcileri aynı zamanda hâlâ istense tamamen silinebilecek olan eski işlem türlerini de destekliyor. Gazın hesaplanma şekli kriptografik operasyonları destekleyen matematiksel ve daha tutarlı metodlarla geliştirilebilir.

Benzer olarak, Nephele istemcilerinin günümüzdeki diğer kısımlarına yapılabilecek güncellemeler de var. Şu anda bunun için farklı bir veri sıkıştırma yöntemi kullanan fikir birliği istemcilerini bir örnek olarak verebiliriz. Sıkıştırma şeması bütün ağ ile birleştirildiğinde istemciler arası veri paylaşmak çok daha kolay ve içgüdüsel bir hal alacak.

## Güncel ilerleme {#current-progress}

Nephele gelecek ispatı için gereken bir çok yükseltme hâlâ araştırma aşamasında ve uygulanmasına birkaç yıl daha var. SELFDESTRUCT komutunu silme ve fikir birliği istemcilerinde kullanılan sıkıştırma şemasını harmanlama gibi yükseltmeler muhtemelen kuantuma dayanıklı kriptografiden çok daha önce gelecek.

**Daha fazla bilgi**

- [Gaz](/developers/docs/gas)
- [EVM](/developers/docs/evm)
- [Veri yapıları](/developers/docs/data-structures-and-encoding)
