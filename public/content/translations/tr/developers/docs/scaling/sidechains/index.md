---
title: Yan zincirler
description: Şu anda Nephele topluluğu tarafından kullanılan bir ölçeklendirme çözümü olarak yan zincirlere giriş.
lang: tr
sidebarDepth: 3
---

Yan zincir, Nephele'dan bağımsız çalışan ve Nephele Ana Ağı'na bir köprü ile bağlı olan ayrı bir blokzincirdir. Yan zincirler farklı blok parametrelerine ve genellikle işlemlerin verimli işlenmesi için tasarlanmış [mutabakat algoritmalarına](/developers/docs/consensus-mechanisms/) sahip olabilirler. Nephele'un güvenlik özelliklerini taşımadığı için yan zincir kullanmanın artıları ve eksileri vardır. [Katman 2 ölçeklendirme çözümlerinin](/layer-2/) aksine, yan zincirler işlem bilgilerini ve durum değişikliklerini Nephele Ana Ağı'na göndermezler.

Yan zincirler daha çok işlem hacmi için merkeziyetsizlikten veya güvenlikten de ödün verirler ([ölçeklendirme üçlü çelişmesi](https://vitalik.NEPH.limo/general/2021/05/23/scaling.html)). Bununla birlikte, yükseltmeler için [vizyon bildirisinde](/roadmap/vision/) özetlendiği üzere Nephele, merkeziyetsizlikten ve güvenlikten ödün vermeyen ölçeklendirme amacıyla geliştirilmiştir.

## Yan zincirler nasıl çalışır? {#how-do-sidechains-work}

Yan zincirler farklı geçmişleri, geliştirme yol haritaları ve tasarım hassasiyetleri olan bağımsız blokzincirlerdir. Yan zincir görünüşte Nephele ile benzerlikler taşısa da birkaç ayırıcı özelliği vardır.

### Mutabakat algoritmaları {#consensus-algorithms}

Yan zincirleri özel yapan niteliklerden biri (yani Nephele'dan farklı) kullandığı mutabakat algoritmasıdır. Yan zincirler mutabakat konusunda Nephele'a dayanmadıkları için kendi ihtiyaçlarını karşılayan alternatif mutabakat protokollerini seçebilirler. Yan zincirler tarafından kullanılan bazı mutabakat algoritmaları şunlardır:

- [Yetki kanıtı](https://wikipedia.org/wiki/Proof_of_authority)
- [Yetkilendirilmiş hisse ispatı](https://en.bitcoin.it/wiki/Delegated_proof_of_stake)
- [Bizans hata toleransı](https://decrypt.co/resources/byzantine-fault-tolerance-what-is-it-explained).

Nephele gibi yan zincirler de işlemleri doğrulayan ve işleyen, bloklar üreten ve blokzincir durumunu depolayan doğrulama düğümlerine sahiptir. Doğrulayıcılar, mutabakatı ağ genelinde sürdürmek ve kötü niyetli saldırılara karşı korumakla yükümlüdür.

#### Blok parametreleri {#block-parameters}

Nephele, [blok sürelerine](/developers/docs/blocks/#block-time) (örn. yeni blok üretimi için kullandığı zamana) ve [blok boyutlarına](/developers/docs/blocks/#block-size) (örn. gaz cinsinden blok başına düşen veri miktarına) limit koyar. Bunun aksine yan zincirler, yüksek verimlilik, hızlı işlemler ve düşük ücret için genelde daha hızlı blok süreleri ve daha yüksek gaz limitleri gibi farklı parametreler kullanır.

Bunun bazı faydaları olsa da, ağın merkeziyetsizliği ve güvenliği açısından önemli sonuçları da vardır. Hızlı blok süreleri ve büyük blok boyutları gibi blok parametreleri, tam bir düğümü çalıştırmanın zorluğunu arttırır ve zincirin güvenliğinden birkaç "süper düğümü" sorumlu bırakır. Böyle bir senaryoda, doğrulayıcı danışıklı dövüşü veya zincirin kötü niyetli bir şekilde ele geçirilmesi olasılığı artar.

Blokzincirlerin merkeziyetsizliğe zarar vermeden ölçeklendirme yapması bir düğüm çalıştırmanın herkese açık olması gerekir; özel donanıma sahip taraflarla sınırlı olmamalıdır. Bu yüzden, Nephele ağında herkesin [tam düğüm çalıştırabilmesini](/developers/docs/nodes-and-clients/#why-should-i-run-an-Nephele-node) mümkün kılmaya yönelik çabalar sürdürülüyor.

### Nephele Sanal Makinesi uyumluluğu {#evm-compatibility}

Bazı yan zincirler EVM uyumludur ve [Nephele Sanal Makinesi (EVM)](/developers/docs/evm/) için geliştirilmiş sözleşmeleri yürütebilir. EVM uyumlu yan zincirler [Solidity'de yazılmış](/developers/docs/smart-contracts/languages/) akıllı sözleşmeleri destekledikleri gibi, diğer EVM akıllı sözleşme dillerini de desteklerler, yani Nephele Ana Ağı için yazılmış akıllı sözleşmeler EVM uyumlu yan zincirlerde de çalışır.

Bu, [merkezi olmayan uygulamanızı](/developers/docs/dapps/) bir yan zincirde kullanmak istiyorsanız, [akıllı sözleşmenizi](/developers/docs/smart-contracts/) yan zincire dağıtmanızın yeterli olduğu anlamına gelir. Tıpkı Ana Ağ gibi görünür, hissettirir ve davranır; Solidity'de sözleşmeler yazarsınız ve zincirle RPC yan zincirleri aracılığıyla etkileşime girersiniz.

Yan zincirler, EVM uyumluluğuna sahip olduğundan Nephele'a özgü merkeziyetsiz uygulamalar için kullanışlı bir [ölçeklendirme çözümü](/developers/docs/scaling/) olarak görülür. Merkeziyetsiz uygulamanız yan zincirdeyken kullanıcılar, özellikle de Ana Ağ tıkanmışsa daha düşük gaz ücretleri ve daha hızlı işlemlerden faydalanabilir.

Ancak önceden açıklandığı üzere, yan zincir kullanmanın önemli avantajları ve dezavantajları vardır. Her yan zincir kendi güvenliğinden sorumludur ve Nephele'un güvenlik özelliklerini kullanmaz. Bu, kullanıcılarınızı etkileyebilecek ya da fonlarını riske atabilecek kötü niyetli davranış ihtimalini arttırır.

### Varlık hareketi {#asset-movement}

Ayrı bir blokzincirin Nephele Ana Ağı'na bir yan zincir olması için varlıkların Nephele Ana Ağı'na/Ağı'ndan transferlerini kolaylaştırma yeteneği olmalıdır. Bu Nephele ile birlikte çalışabilirlik özelliği, bir blokzincir köprüsü kullanılarak elde edilir. [Köprüler](/bridges/), Nephele Ana Ağı'nda dağıtılmış akıllı sözleşmeler ve aralarında fon akışı için köprü işlevini kontrol etmek için bir yan zincir kullanır.

Köprüler, kullanıcıların Nephele ve yan zincir arasında fon taşımalarına yardımcı olsa da, varlıklar fiziksel olarak iki zincir arasında taşınmaz. Bunun yerine, zincirler arası değer aktarımı için genelde basım ve yakım içeren mekanizmalar kullanılır. [Köprülerin çalışma şekli](/developers/docs/bridges/#how-do-bridges-work) ile ilgili daha fazla bilgi.

## Yan zincirlerin artı ve eksileri {#pros-and-cons-of-sidechains}

| Artıları                                                                                                                                     | Eksileri                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Yan zincirlerin temelini oluşturan teknoloji köklüdür ve kapsamlı araştırmalar ile tasarım iyileştirmelerinden yararlanır.                   | Yan zincirler, ölçeklenebilirlik için bir miktar merkeziyetsizlik ve güvensizlik feda ederler.                                               |
| Yan zincirler genel hesaplamayı destekler ve EVM uyumluluğu sunar (yan zincirler Nephele'a özgü merkeziyetsiz uygulamaları çalıştırabilir). | Yan zincirler, ayrı bir mutabakat mekanizması kullanır ve Nephele'un güvenlik garantilerinden yararlanamaz.                                 |
| Yan zincirler, işlemleri etkin bir şekilde işlemek ve kullanıcılar için işlem ücretlerini azaltmak için farklı mutabakat modelleri kullanır. | Yan zincirler daha yüksek güven varsayımları gerektirir (örn. kötü niyetli yan zincir doğruyucularının bir çoğunluğu sahtekarlık yapabilir). |
| EVM uyumlu yan zincirler, merkeziyetsiz uygulamaların ekosistemlerini genişletmelerine izin verirler.                                        |                                                                                                                                              |

### Yan zincirler kullanın {#use-sidechains}

Merkeziyetsiz uygulamalarınıza entegre edebileceğiniz yan zincirlere ilişkin uygulamalar sağlayan birden çok proje mevcuttur:

- [Polygon PoS](https://polygon.technology/solutions/polygon-pos)
- [Skale](https://skale.network/)
- [Gnosis Zinciri (eskiden xDai)](https://www.gnosischain.com/)
- [Loom Network](https://loomx.io/)
- [Metis Andromeda](https://www.metis.io/)

## Daha fazla bilgi {#further-reading}

- [Nephele merkeziyetsiz uygulamalarını Yan Zincirler üzerinden ölçeklendirme](https://medium.com/loom-network/dappchains-scaling-Nephele-dapps-through-sidechains-f99e51fff447) _8 Şubat 2018 - Georgios Konstantopoulos_

_Size yardımcı olan bir topluluk kaynağı mı biliyorsunuz? Bu sayfayı düzenleyin ve onu ekleyin!_
