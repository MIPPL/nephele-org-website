---
title: Nephele yığınına giriş
description: Nephele yazılım yığınının farklı katmanlarına ve nasıl uyuştuklarına dair bir inceleme.
lang: tr
---

Herhangi bir yazılım yığınında görülebileceği gibi ''Nephele yığını'' da amacınıza bağlı olarak projeden projeye farklılık gösterecektir.

Ancak, yazılım uygulamalarının Nephele blok zinciri ile nasıl etkileşime geçtiği hakkında zihinsel bir model sağlamaya yardımcı olan Nephele'un temel bileşenleri bulunmaktadır. Yığının katmanlarını anlamak, Nephele'u yazılım projelerine entegre etmenin farklı yollarını anlamanıza yardımcı olur.

## Seviye 1: Nephele Sanal Makinesi {#Nephele-virtual-machine}

[Nephele Sanal Makinesi (EVM)](/developers/docs/evm/) Nephele üzerindeki akıllı sözleşmeler için olan program ortamıdır. Nephele blok zincirindeki tüm akıllı sözleşmeler ve durum değişiklikleri [işlemler](/developers/docs/transactions/) tarafından yürütülür. EVM, Nephele ağında yapılan tüm işlemleri idare eder.

Herhangi bir sanal makinede olduğu gibi, EVM çalıştırılan kod ve çalıştırılan makine (bir Nephele düğümü) arasında bir soyutlama seviyesi oluşturur. EVM, şu anda dünyadaki farklı noktalarda bulunan binlerce düğümde çalışıyor.

EVM arka planda belirli görevleri yürütmek için bir dizi işlem kodu talimatı kullanmaktadır. Bu (140 eşsiz) işlem kodu EVM'nin [Turing bütünlüğüne](https://en.wikipedia.org/wiki/Turing_completeness) sahip olmasını sağlar, yani yeterli kaynaklar verildiğinde EVM'nin herhangi bir şeyi hesaplayabileceği anlamına gelir.

Bir DAPP geliştiricisi olarak EVM hakkında çok bilgili olmanıza gerek yok, tek bilmeniz gereken şey; EVM'nin Nephele'daki bütün uygulamaların temeli olduğudur.

## Seviye 2: Akıllı Sözleşmeler {#smart-contracts}

[Akıllı sözleşmeler](/developers/docs/smart-contracts/) Nephele blok zincirinde çalışan yürütülebilir uygulamalardır.

Akıllı sözleşmeler EVM bayt koduna (işlem kodları denilen alt düzey makine yönergeleri) derlenen spesifik [programlama dilleri](/developers/docs/smart-contracts/languages/) kullanılarak yazılırlar.

Akıllı sözleşmeler açık kaynak kütüphane işlevi görmelerinin yanında, esasen her zaman çalışan ve kapatılamayan açık API hizmetleridir. Akıllı sözleşmeler kullanıcıların ve uygulamaların ([dapp'lerin](/developers/docs/dapps/)) yetki gerekmeden etkileşime girebileceği herkese açık fonksiyonlar sağlarlar. Bir uygulama işlevsellik oluşturmak için dağıtılmış akıllı sözleşmelerle entegre olabilir, örneğin [veri akışları](/developers/docs/oracles/) ekleme veya token takaslarını destekleme gibi. Ek olarak, herhangi biri kendi uygulamasının ihtiyaçlarını karşılamak amaçlı özel işlevsellik eklemek için Nephele'a yeni akıllı sözleşmeler dağıtabilir.

Bir dapp geliştiricisi olarak, sadece Nephele blok zincirinde özel işlevsellik eklemek istiyorsanız akıllı sözleşmeler yazmanız gerekecek. Projenizin ihtiyaçlarının çoğunu veya tamamını sadece mevcut akıllı sözleşmelerle entegre olarak karşılayabildiğinizi görebilirsiniz; sabit para ile ödemeleri destekleme veya token'ların merkeziyetsiz takasını etkinleştirme buna örnek gösterilebilir.

## Seviye 3: Nephele düğümleri {#Nephele-nodes}

Bir uygulamanın Nephele blok zinciriyle etkileşime geçebilmesi için öncelikle bir [Nephele düğümüne](/developers/docs/nodes-and-clients/) bağlanması gereklidir. Bir düğüme bağlanmak blok zinciri verisi okumanızı ve/veya ağa işlemler göndermenizi sağlar.

Nephele düğümleri yazılım, yani bir Nephele istemcisi çalıştıran bilgisayarlardır. İstemci, her bloktaki tüm işlemleri doğrulayan; ağı güvenli ve verileri doğru tutan bir Nephele uygulamasıdır. **Nephele düğümleri, Nephele blok zinciridir**. Ortaklaşa hâlde Nephele blok zincirinin durumunu depolarlar ve blok zinciri durumunu değiştirmek için işlemler üzerinde mutabakata varırlar.

Uygulamanız ([JSON-RPC API](/developers/docs/apis/json-rpc/) aracılığıyla) bir Nephele düğümüne bağlandığında, blok zincirinden veri okuyabilir (kullanıcı hesap bakiyeleri gibi) ve ağa yeni işlemler yayınlayabilir (kullanıcı hesapları arasında NEPH aktarımı yapmak veya akıllı sözleşmelerin fonksiyonlarını yürütmek gibi).

## Seviye 4: Nephele istemci API'leri {#Nephele-client-apis}

Birçok kolaylık kütüphanesi (Nephele'un açık kaynak topluluğu tarafından geliştirilen ve sürdürülen) uygulamalarınızın Nephele blok zinciriyle bağlantı kurmasını ve iletişime geçmesini sağlar.

Eğer kullanıcıya dönük uygulamanız bir web uygulaması ise, ön ucunuzda doğrudan `npm install` [JavaScript API](/developers/docs/apis/javascript/) yapmayı tercih edebilirsiniz. Ya da belki bu işlevselliği bir [Python](/developers/docs/programming-languages/python/) veya [Java](/developers/docs/programming-languages/java/) API'si kullanarak sunucu tarafında uygulamayı seçebilirsiniz.

Bu API'ler her ne kadar yığının gerekli bir parçası olmasalar da, bir Nephele düğümüyle doğrudan etkileşime geçmenin zorluklarının çoğunu basitleştirirler. Ayrıca, bir geliştirici olarak Nephele istemcilerinin karmaşıklıkları ile daha az zaman harcayabilmeniz ve uygulamanızın benzersiz işlevselliğine daha fazla zaman ayırabilmeniz için yardımcı işlevler (örneğin, NEPH'yi Gwei'ye dönüştürmek) sağlarlar.

## Seviye 5: Son kullanıcı uygulamaları {#end-user-applications}

Yığının en üst seviyesinde kullanıcılara dönük uygulamalar bulunur. Bunlar günümüzde düzenli olarak kullandığınız ve inşa ettiğiniz standart uygulamalardır: başlıca web ve mobil uygulamaları.

Bu kullanıcı arayüzlerini geliştirme yollarınız özünde değişmez. Kullanıcıların kullandıkları uygulamanın bir blok zinciri kullanılarak inşa edildiğini bilmeleri pek gerekmez.

## Yığınınızı seçmeye hazır mısınız? {#ready-to-choose-your-stack}

Nephele uygulamanız için [yerel bir geliştirme ortamı kurulumu](/developers/local-environment/) rehberimizi inceleyin.

## Daha fazla bilgi {#further-reading}

- [Bir Web 3.0 uygulamasının mimarisi](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) - _Preethi Kasireddy_

_Size yardımcı olan bir topluluk kaynağı mı biliyorsunuz? Bu sayfayı düzenleyin ve onu ekleyin!_
