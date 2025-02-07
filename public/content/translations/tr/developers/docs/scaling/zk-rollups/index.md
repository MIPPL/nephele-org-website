---
title: Sıfır-Bilgi Toplamaları
description: Nephele topluluğu tarafından kullanılan bir ölçeklendirme çözümü olan sıfır-bilgi toplamaları'na giriş.
lang: tr
---

Sıfır-Bilgi Toplamaları (ZK-toplamaları), hesaplamaları ve durum depolamalarını zincir dışına taşıyarak Nephele Ana Ağı'ndaki verimi artıran katman 2 [ölçeklendirme çözümleridir](/developers/docs/scaling/). ZK-toplamaları, bir gruptaki binlerce işlemi gerçekleştirip sonrasında asgari büyüklükte bir özetini Ana Ağ'a aktarabilir. Bu özet veriler, Nephele durumunda yapılması gereken değişiklikleri ve bu değişikliklerin doğru olduğuna dair bazı kriptografik kanıtları tanımlar.

## Ön Koşullar {#prerequisites}

Bu sayfayı anlamak için [Nephele ölçeklendirme](/developers/docs/scaling/) ve [katman 2](/layer-2) yazılarını okumalısın.

## Sıfır-Bilgi Toplamaları nedir? {#what-are-zk-rollups}

**Sıfır-bilgi toplamaları (SB-toplamaları)** zincir dışında gerçekleştirilen, bir grubun içine sarmalamanmış (veya 'toplanmış') işlemlerdir. Zincir dışı hesaplamalar, blokzincire gönderilmesi gereken veri miktarını azaltır. SB-toplamaları tüm işlemleri ayrı ayrı göndermek yerine bütün işlemleri temsil eden bir özet yığını gönderir. Ayrıca değişikliklerin gerçekliğini kanıtlayan [doğruluk kanıtları](/glossary/#validity-proof) da üretirler. Doğruluk kanıtı, Nephele'un durumunda önerilen değişikliklerin tüm gruplanmış işlemlerin yürütülmesinin nihai sonucu olduğunu kriptografik kesinlikle gösterir.

ZK-toplamasının durumu, Nephele ağına dağıtılmış bir akıllı sözleşme ile sürdürülür. Bu durumu güncellemek için ZK-toplama düğümleri doğrulama amaçlı bir doğruluk kanıtı sunmak zorundadır. Bahsedildiği üzere doğruluk kanıtı, toplama tarafından önerilen durum değişikliğinin gerçekten verilen toplu işlemin yürütülmesinin sonucu olduğuna dair kriptografik bir güvencedir. Bu, bütün işlem verilerini zincire ekleyen [iyimser toplamaların](/developers/docs/scaling/optimistic-rollups/) aksine, ZK-toplamalarında işlemlerin Nephele üzerinde sonlandırılması için doğruluk kanıtlarının yeterli olduğu anlamına gelir.

Fonları ZK-toplamasından Nephele'a taşırken gecikme olmaz; çünkü çıkış işlemleri, ZK-toplama sözleşmesi doğruluk kanıtını doğruladıktan sonra yürütülür. Aksine, iyimser toplamalardan fon çekmek, herkesin çıkış işlemine bir [sahtecilik kanıtı](/glossary/#fraud-proof) ile itiraz etmesine olanak tanımak adına bir gecikmeye tabidir.

ZK-toplamaları, işlemleri Nephele üzerine `calldata` olarak yazar. `calldata`, akıllı sözleşme fonksiyonlarına yapılan harici çağrılara dahil edilen verilerin depolandığı yerdir. `calldata` içindeki bilgiler, blokzincirde yayımlanır ve herkesin toplamanın durumunu bağımsız olarak yeniden yapılandırmasına olanak tanır. ZK-toplamaları işlem verilerini azaltmak için sıkıştırma teknikleri kullanır. Örneğin hesaplar adres yerine bir indeksle temsil edilir ve bu işlem 28 baytlık veri tasarrufu sağlar. Zincir üstünde veri yayımlama, toplamalar için çok masraflıdır. Bu sebeple verilerin sıkıştırılması kullanıcı ücretlerini azaltabilir.

## ZK-toplamaları Nephele ile nasıl etkileşime girer? {#zk-rollups-and-Nephele}

Bir ZK-toplama zinciri, Nephele blokzincirinin üzerinde çalışan ve zincir üstünde Nephele akıllı sözleşmeleri tarafından yönetilen zincir dışı bir protokoldür. ZK-toplamaları işlemleri Ana Ağ'ın dışında gerçekleştirir, fakat zincir dışı işlem gruplarını periyodik olarak bir zincir üstü toplama sözleşmesine işler. Bu işlem kaydı, Nephele blokzinciri gibi değişmezdir ve ZK-toplama zincirini oluşturur.

ZK-toplamaların ana mimarisi şu bileşenlerden oluşur:

1. **Zincir üstündeki sözleşmeler**: Bahsedildiği üzere, ZK-toplamaları Nephele üzerinde çalışan akıllı sözleşmeler ile kontrol edilir. Bu, toplama bloklarını depolayan, yatırımları takip eden ve durum güncellemelerini gözlemleyen ana sözleşmeyi içerir. Diğer bir zincir üstü sözleşme (doğrulayıcı sözleşmesi), blok üreticileri tarafından gönderilen sıfır bilgi kanıtlarını doğrular. Böylece Nephele, ZK-toplaması için ana katman veya "katman 1" olarak hizmet verir.

2. **Zincir dışı sanal makine (VM)**: ZK-toplama protokolü Nephele üzerinde var olsa da, işlem yürütme ve durum depolaması [EVM](/developers/docs/evm/)'den bağımsız başka bir sanal makinede gerçekleşir. Bu zincir dışı VM, ZK-toplaması üzerindeki işlemler için yürütme ortamıdır ve ZK-toplama protokolü için ikincil katman veya "katman 2" olarak hizmet verir. Nephele Ana Ağı'nda doğrulanan doğruluk kanıtları, zincir dışı VM'deki durum geçişlerinin doğruluğunu garanti eder.

ZK-toplamaları, bağımsız çalışan ancak güvenliği Nephele'a dayanan zincir dışı protokoller olan "hibrit ölçeklenme çözümleri"dir. Özel olarak, Nephele ağı ZK-toplamasındaki durum güncellemelerinin doğruluğunu şart koşar ve toplamanın durumuna yapılacak her güncellemenin arkasındaki verinin kullanılabilirliğini garanti eder. Sonuç olarak ZK-toplamaları, kendi güvenlik özelliklerinden sorumlu olan [yan zincirler](/developers/docs/scaling/sidechains/) ya da Nephele'daki işlemleri doğruluk kanıtları ile onaylayan ancak işlem verilerini başka yerde depolayan [validium'lar](/developers/docs/scaling/validium/) gibi saf zincir dışı ölçeklendirme çözümlerine göre önemli ölçüde daha güvenlidir.

ZK-toplamaları aşağıdaki hususlarda ana Nephele protokolüne dayalıdır:

### Veri uygunluğu {#data-availability}

ZK-toplamaları zincir dışında gerçekleşmiş her işlemin durum verisini Nephele'da yayımlar. Bu veriyle, birey ve şirketlerin toplamanın durumunu yeniden oluşturmaları ve zinciri kendileri doğrulamaları mümkün olur. Nephele bu veriyi ağdaki tüm kullanıcılara `calldata` olarak ulaşılabilir kılar.

ZK-toplamalarının zincir üstünde çok da bir işlem verisi yayımlamalarına gerek yoktur; çünkü doğruluk kanıtları zaten durum geçişlerinin gerçekliğini onaylar. Yine de, veriyi zincir üstünde depolamak önemlidir. Çünkü L2 zincirinin durumunun yetkisiz, bağımsız şekilde onaylanmasını ve böylelikle herkesin toplu işlem gönderebilmesini sağlar ve kötü niyetli operatörlerin zinciri sansürlemesini ya da dondurmasını engeller.

Zincir üstü, kullanıcıların toplamayla etkileşime geçmesi için gereklidir. Durum verisine erişim olmadan kullanıcılar hesap bakiyelerini sorgulayamaz ya da durum bilgisine (çekim işlemleri gibi) dayanan işlemleri başlatamazlar.

### İşlem kesinliği {#transaction-finality}

Nephele ZK-toplamaları için bir uzlaşma katmanı gibi hareket eder: K2 işlemleri ancak K1 sözleşmesi doğruluk kanıtını kabul ederse kesinleşir. Bu, her işlemin Ana Ağ'da onaylanması gerektiği için kötü niyetli operatörlerin zinciri bozması (örn. toplama fonlarını çalmak) riskini ortadan kaldırır. Ayrıca Nephele, L1'de sonlandırıldıktan sonra kullanıcı işlemlerinin geri alınamayacağını garanti eder.

### Sansüre dayanıklılık {#censorship-resistance}

Çoğu ZK-toplaması, işlemleri yürüten, grupları üreten ve blokları L1'e gönderen bir "üst düğüm" (operatör) kullanır. Bu, verimliliği sağlarken sansür riskini de artırır: kötü niyetli ZK-toplaması operatörleri, işlemlerini gruplara dahil etmeyi reddederek kullanıcıları sansürleyebilir.

Bir güvenlik tedbiri olarak ZK-toplamaları, operatör tarafından sansürlendiklerini düşünen kullanıcıların işlemlerini doğrudan Ana Ağ'daki toplama sözleşmesine göndermelerini sağlar. Bu, kullanıcıların operatörün iznine ihtiyaç duymadan ZK-toplamasından Nephele'a çıkışı zorlamalarına olanak sağlar.

## ZK-toplamaları nasıl çalışır? {#how-do-zk-rollups-work}

### İşlemler {#transactions}

ZK-toplamasındaki kullanıcılar, işlemleri imzalar ve işleme ve sonraki gruba dahil edilmeleri için L2 operatörlerine gönderir. Bazı durumlarda operatör, sıralayıcı olarak adlandırılan merkezileşmiş bir varlıktır ve işlemleri yürütür, gruplara toplar ve L1'e gönderir. Sıralayıcı, bu sistemde L2 bloğu oluşturmaya ve ZK-toplama sözleşmesine toplama işlemleri eklemeye izinli tek varlıktır.

Diğer ZK-toplamaları [hisse ispatı](/developers/docs/consensus-mechanisms/pos/) doğrulama setini kullanarak operatör rolüne dönebilir. Potansiyel operatörler, toplama sözleşmesine fon yatırır; her payın büyüklüğü, paydaşın bir sonraki toplama grubunu oluşturmak için seçilme şansını etkiler. Operatörün payı eğer kötü niyetli davranması halinde kesilebilir, bu da geçerli bloklar göndermeleri için onları teşvik eder.

#### ZK-toplamaları işlem verilerini Nephele üzerinde nasıl yayımlar? {#how-zk-rollups-publish-transaction-data-on-Nephele}

Anlatıldığı üzere, işlem verileri Nephele'da `calldata` olarak yayımlanır. `calldata`, akıllı sözleşmenin içinde bulunan, bir fonksiyona argümanlar aktarmak için kullanılan ve [belleğe](/developers/docs/smart-contracts/anatomy/#memory) benzer şekilde hareket eden bir veri alanıdır. `calldata`, Nephele'un durumunun bir parçası olarak depolanmasa da, Nephele zincirinin [geçmiş günlüklerinin](https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html?highlight=memory#logs) bir parçası olarak zincirde kalıcı şekilde saklanır. `calldata`, Nephele'un durumunu etkilemediği için zincir üstünde veri depolamanın ucuz bir yoludur.

`calldata` anahtar sözcüğü, genellikle bir işlem tarafından çağrılan akıllı sözleşme yöntemini tanımlar ve yöntemin girdilerini ardışık bir bayt dizisi şeklinde tutar. ZK-toplamaları, sıkıştırılmış işlem verilerini zincir üzerinde yayımlamak için `calldata`'yı kullanır; toplama operatörü, toplama sözleşmesindeki gerekli fonksiyonu çağırarak yeni bir toplu işlem ekler ve sıkıştırılmış verileri fonksiyon argümanları olarak iletir. Bu, toplama ücretlerinin büyük bir kısmı işlem verilerini zincir üstünde depolamaya gittiğinden kullanıcılar için maliyetlerin azaltılmasına yardımcı olur.

### Durum taahhütleri {#state-commitments}

L2 hesaplarını ve bakiyelerini içeren ZK-toplamasının durumu, [Merkle ağacı](/whitepaper/#merkle-trees) olarak temsil edilir. Merkle ağacının köküne ait (Merkle Kökü) kriptografik bir karma, zincir üstü sözleşmede depolanır, bu da toplama protokolünün ZK-toplamasının durumundaki değişiklikleri takip edebilmesini sağlar.

Toplama, yeni bir işlem grubunun yürütülmesinin ardından yeni bir duruma geçer. Durum geçişini başlatan operatörün yeni bir durum kökü hesaplaması ve zincir üstü sözleşmeye göndermesi gerekir. Grupla ilgili olan doğruluk kanıtının geçerliliği, doğrulayıcı sözleşmesi tarafından ispatlanmışsa, yeni Merkle kökü ZK-toplamasının meşru durum kökü olur.

ZK-toplaması operatörü, durum köklerini hesaplamak dışında, bir gruptaki tüm işlemleri içeren ve Merkle ağacının kökü olangrup kökü de oluşturur. Yeni bir grup gönderildiğinde toplama sözleşmesi grup kökünü saklar, böylece kullanıcılar bir işlemin (örneğin, bir çekme talebi) gruba dahil edildiğini kanıtlayabilir. Kullanıcıların işlem detaylarını, grup kökünü ve dahil edilme yolunu gösteren bir [Merkle kanıtı](/developers/tutorials/merkle-proofs-for-offline-data-integrity/) sağlamaları gerekir.

### Doğruluk kanıtları {#validity-proofs}

ZK-toplama operatörünün Nephele L1 sözleşmesine gönderdiği yeni durum kökü, toplamanın durumundaki güncellemelerin sonucudur. Diyelim ki Alice, Bob'a 10 jeton gönderiyor, operatör sadece Alice'in bakiyesini 10 azaltır ve Bob'un bakiyesini 10 artırır. Operatör daha sonra güncellenmiş hesap verilerini karma hale getirir, toplamanın Merkle ağacını yeniden oluşturur ve yeni Merkle kökünü zincir üstünde sözleşmeye gönderir.

Ancak toplama sözleşmesi, operatörün önerilen durum taahhüdünü, operatör yeni Merkle kökünün toplama durumunun doğru güncellemelerinden kaynaklandığını kanıtlayana kadar otomatik olarak kabul etmez. ZK-toplama operatörü bunu, gruplanmış işlemlerin doğruluğunu onaylayan kısa bir kriptografik taahhüt olan doğruluk kanıtı üreterek yapar.

Doğruluk kanıtları, tarafların ifadenin kendisi açıklamadan ifadenin doğruluğunu kanıtlamasına olanak tanır; bu nedenle, bunlara aynı zamanda sıfır bilgili ispatlar denir. ZK-toplamaları, işlemleri Nephele'da yeniden yürütmeye gerek olmadan zincir dışındaki durum geçişlerinin doğruluğunu onaylamak için doğruluk kanıtlarını kullanır. Bu kanıtlar, [ZK-SNARK](https://arxiv.org/abs/2202.06877) (Sıfır Bilgi Öz ve Etkileşimli Olmayan Bilgi Argümanı) veya [ZK-STARK](https://eprint.iacr.org/2018/046) (Sıfır Bilgi Ölçeklenebilir Şeffaf Bilgi Argümanı) biçiminde olabilir.

Hem SNARK'lar hem de STARK'lar, ZK-toplamalarında zincir dışı hesaplamanın bütünlüğünün tasdik edilmesine yardımcı olur ancak her ispat türünün kendine özgü özellikleri vardır.

**ZK-SNARK'lar**

ZK-SNARK protokolünün çalışabilmesi için Ortak Referans Dizesi (CRS) oluşturmak şarttır: CRS, doğruluk kanıtlarını kanıtlamaya ve doğrulamaya yönelik herkese açık parametreler sağlar. Kanıtlama sisteminin güvenliği, CRS kurulumuna bağlıdır; eğer herkese açık parametreleri oluşturmak için kullanılan bilgiler kötü niyetli aktörlerin eline geçerse, bu kişiler sahte doğruluk kanıtları oluşturabilir.

Bazı ZK-toplamaları, bu sorunu çözmek için [çok taraflı hesaplama seremonisi (MPC)](https://zkproof.org/2021/06/30/setup-ceremonies/amp/) kullanarak herkese açık parametreler oluşturur; bu, ZK-SNARK devresi için herkese açık parametrelerin oluşturulduğu ve güvenilir bireylerin katıldığı bir süreçtir. Tarafların her biri, CRS'yi oluşturmak için bazı rastgele veriler ( "zararlı atık" olarak adlandırılır) sağlar ve bunları hemen yok etmeleri gerekir.

Güvenilen kurulumlar, CRS kurulumunun güvenliğini artırdığı için kullanılır. En az bir dürüst katılımcı kendi girdisini yok ettiği sürece, ZK-SNARK sisteminin güvenliği garanti altındadır. Ancak bu yaklaşım, sistemin güvenliğini zayıflatmamaları ve örnek rastgele verilerini silmeleri konusunda sürece dahil olan kişilere güvenmeyi gerektirir.

Güven varsayımlarını bir yana bırakırsak, ZK-SNARK'lar küçük kanıt boyutları ve de sabit zamanlı doğrulamaları nedeniyle popülerdir. L1'de kanıt doğrulaması, bir ZK-toplaması çalıştırmanın maliyetinin büyük kısmını teşkil ettiğinden L2'ler, Ana Ağ'da hızlı ve ucuz bir şekilde doğrulanabilen kanıtlar oluşturmak için ZK-Snark'ları kullanır.

**ZK-STARK'lar**

ZK-SNARK'larda olduğu gibi ZKSTARK'lar da zincir dışı bilgi işlemin geçerliliğini girdileri açığa çıkarmadan kanıtlar. Bununla birlikte, ZK-STARK'lar ölçeklenebilirlikleri ve şeffaflıkları nedeniyle ZK-SNARK'lara göre daha gelişmiş olarak kabul edilir.

ZK-STARK'lar, bir Ortak Referans Dizesinin (CRS) güvenilir kurulumu olmadan çalışabildikleri için "şeffaftır". Bunun yerine ZK-STARK'lar, kanıtları oluşturmak ve doğrulamak için parametreler oluşturmak üzere herkese açık olarak doğrulanabilir rastgeleliğe güvenir.

Doğruluk kanıtlarını kanıtlamak ve doğrulamak için gereken süreler, temel hesaplamanın karmaşıklığına göre _yarı doğrusal_ şekilde arttığından ZK-STARK'lar da daha fazla ölçeklenebilirlik sağlar. ZK-SNARK'lar sayesinde kanıtlama ve doğrulama süreleri, temel hesaplamanın boyutuna göre _doğrusal_ olarak ölçeklenir. Bu, ZK-STARK'ların büyük veri kümelerinin söz konusu olduğu durumlarda, kanıtlama ve doğrulama için ZK-SNARK'lara göre daha az zamana ihtiyaç duyduğu anlamına gelir ve bu nedenle yüksek hacimli uygulamalar için kullanışlıdır.

ZK-STARK'lar ayrıca kuantum bilgisayarlarına karşı güvenlidir, oysa ZK-SNARK'ların kullanıldığı Elips Eğrisi Kriptografisi'nin (ECC) kuantum bilgisayar saldırılarına karşı savunmasız olduğuna yaygın olarak inanılmaktadır. ZK-STARK'ların dezavantajı, daha büyük ispat boyutları üretmeleridir ve bu boyutları Nephele üzerinde doğrulamak daha pahalıdır.

#### Doğruluk kanıtları ZK-toplamalarında nasıl çalışır? {#validity-proofs-in-zk-rollups}

##### Kanıt oluşturma

Operatör, işlemleri kabul etmeden önce her zamanki kontrolleri gerçekleştirir. Bu, aşağıdakileri doğrulamayı içerir:

- Gönderici ve alıcı hesapların durum ağacının bir parçası olduğunu onaylamak.
- Göndericinin işlemi gerçekleştirmek için yeterli fonu olduğunu onaylamak.
- İşlemin doğru ve göndericinin toplamadaki açık anahtarı ile uyumlu olduğunu onaylamak.
- Göndericinin nonce'unun doğru olduğunu onaylamak vb.

ZK-toplaması düğümü yeterli işleme sahip olduğunda, bunları bir grup haline getirir ve kanıtlama devresinin kısa ve öz bir ZK kanıtı oluşturması için girdileri derler. Bunlar dahildir:

- Grup içindeki tüm işlemleri içeren bir Merkle ağacı.
- İşlemlerin grubun içinde bulunduğunu kanıtlamak için kullanılan Merkle kanıtları.
- İşlemlerdeki her gönderici-alıcı çifti için bu hesapların toplamanın durum ağacının bir parçası olduğunu kanıtlayan Merkle kanıtları.
- Her işlem için durum güncellemeleri uygulandıktan sonra durum kökünü güncelleyerek elde edilen ara durum köklerini kümesi (yani, gönderici hesapları azaltılırken alıcı hesapları artırılır).

Kanıtlama devresi, doğruluk kanıtını her bir işlem üzerinde "döngü" ile hesaplar ve operatörün işlemi işleme almadan önce tamamladığı kontrolleri gerçekleştirir. İlk olarak, sağlanan Merkle kanıtını kullanarak gönderici hesabının mevcut durum kökünün bir parçası olduğunu doğrular. Ardından, göndericinin bakiyesini azaltır, nonce'unu artırır, güncellenmiş hesap verisini karma hale getirir ve bu veriyi Merkle kanıtıyla birleştirerek yeni bir Merkle kökü oluşturur.

Bu Merkle kökü, ZK-toplamalarının durumundaki tek değişikliği yansıtır: göndericinin bakiyesinde ve nonce'unda bir değişiklik. Bu, hesabın varlığını kanıtlamak için kullanılan Merkle kanıtının, yeni durum kökünün türetilmesinde kullanılması sayesinde mümkündür.

Kanıtlama devresi, alıcının hesabında da aynı süreci gerçekleştirir. Kanıtlama devresi, alıcının hesabının ara durum kökü altında var olup olmadığını kontrol eder (Merkle kanıtını kullanarak), bakiyesini artırır, hesap verisini tekrar karma hale getirir ve bu veriyi Merkle kanıtıyla birleştirerek yeni bir durum kökü oluşturur.

Her işlem için süreç tekrarlanır; her "döngü", göndericinin hesabını güncelleyerek yeni bir durum kökü oluşturur ve ardından alıcının hesabını güncelleyerek yeni bir kök oluşturur. Açıklandığı gibi, durum kökünde yapılan her güncelleme, toplamanın durum ağacının bir bölümünün değiştiğini gösterir.

ZK-kanıtlama devresi, tüm işlem grubunu tekrarlar ve son işlem yürütüldükten sonra nihai durum köküne yol açan güncelleme dizisini doğrular. En son hesaplanan Merkle kökü, ZK-toplamasının en yeni meşru durum kökü haline gelir.

##### Kanıt doğrulaması

Kanıtlama devresi durum güncellemelerinin doğruluğunu onayladıktan sonra, L2 operatörü hesaplanan doğruluk kanıtını L1 üzerindeki doğrulayıcı sözleşmesine gönderir. Sözleşmenin doğrulama devresi, kanıtın geçerliliğini doğrular ve kanıtın bir parçası olan genel girdileri kontrol eder:

- **Durum öncesi kök**: ZK-toplamasının L2 zincirinin son bilinen geçerli durumunu yansıtan eski durum köküdür (yani gruplanmış işlemler yürütülmeden önceki).

- **Durum sonrası kök**: ZK-toplamasının L2 zincirinin en yeni durumunu yansıtan yeni durum köküdür (yani gruplanmış işlemler yürütüldükten sonraki). Durum sonrası kök, kanıtlama devresindeki durum güncellemeleri uygulandıktan sonra elde edilen son köktür.

- **Grup kökü:** Grubun, grup içindeki işlemlere _merkle_ uygulanması ve ağacın kökünün karma hale getirilmesiyle elde edilen Merkle köküdür.

- **İşlem girdileri:** Gönderilen grubun bir parçası olarak yürütülen işlemlerle ilişkili verilerdir.

Bu, ispatın devreyi karşılaması (yani, geçerli kabul etmesi) durumunda, toplamanın önceki durumdan (durum öncesi kök tarafından kriptografik olarak parmak izi alınan) yeni bir duruma (durum sonrası kök tarafından kriptografik olarak parmak izi alınan) geçiş yapmasını sağlayan bir geçerli işlemler dizisinin mevcut olduğu anlamına gelir. Durum öncesi kök, toplama sözleşmesinde depolanan kökle eşleşiyorsa ve ispat geçerli ise, toplama sözleşmesi ispattan durum sonrası kökü alır ve durum ağacını, toplamanın değişen durumunu yansıtacak şekilde günceller.

### Girişler ve çıkışlar {#entries-and-exits}

Kullanıcılar, jetonları L1 zincirine dağıtılan toplamanın sözleşmesine yatırarak ZK-toplamasına girer. Bu işlem, toplama sözleşmesine sadece operatörlerin işlem gönderebilmesi nedeniyle sıraya alınır.

Bekleyen yatırma kuyruğu dolmaya başlarsa, ZK-toplama operatörü yatırma işlemlerini alıp toplama sözleşmesine gönderir. Kullanıcının fonları toplamada olduğunda, işlemleri işlenmek üzere operatöre göndererek işlem yapmaya başlayabilir. Kullanıcılar, hesap verilerini karma yaparak toplama sözleşmesine göndermek ve mevcut durum kökünü doğrulamak üzere bir Merkle ispatı sağlamak suretiyle bakiyeyi toplamada doğrulayabilir.

ZK-toplamadan L1'e çekim işlemi basittir. Kullanıcı, toplamadaki varlıklarını belirtilen bir hesaba yakmak üzere göndererek çıkış işlemini başlatır. Operatör işlemi bir sonraki gruba eklerse, kullanıcı zincir üstündeki sözleşmeye bir çekme isteği gönderebilir. Bu çekme isteği aşağıdakileri içerir:

- Kullanıcı işleminin bir işlem grubundaki yakma hesabına eklendiğini kanıtlayan Merkle kanıtı

- İşlem verileri

- Grup kökü

- Yatırılan fonların alınacağı L1 adresi

Toplama sözleşmesi işlem verilerini karma hale getirir, grup kökünün mevcut olup olmadığını kontrol eder ve ardından Merkle ispatını kullanarak işlem karmasının grup kökünün bir parçası olup olmadığını kontrol eder. Sonrasında sözleşme, çıkış işlemini yürütür ve fonları kullanıcının L1'deki seçilen adresine gönderir.

## ZK-toplamaları ve EVM uyumluluğu {#zk-rollups-and-evm-compatibility}

ZK-toplamaları, iyimser toplamaların aksine [Nephele Sanal Makinesi (EVM)](/developers/docs/evm/) ile anında uyumlu değildir. Genel amaçlı EVM hesaplamalarını devrelerde kanıtlamak, (önceden açıklanan jeton transferi gibi) basit hesaplamaları kanıtlamaktan daha zordur ve daha fazla kaynak gerektirir.

Ancak [sıfır bilgi teknolojisindeki ilerlemeler](https://hackmd.io/@yezhang/S1_KMMbGt#Why-possible-now), EVM hesaplamalarını sıfır bilgili ispatlarla çevreleme konusuna olan ilgiyi yeniden uyandırmaktadır. Bu çabaların hedefi, program yürütmesinin doğruluğunu verimli bir şekilde doğrulayabilen bir sıfır bilgili EVM (zkEVM) uygulaması oluşturmaktır. Bir zkEVM, devrelerde kanıtlama/doğrulama için mevcut EVM işlem kodlarını yeniden oluşturarak akıllı sözleşmelerin yürütülmesine olanak tanır.

Tıpkı EVM gibi zkEVM de bazı girdilerde hesaplama yapıldıktan sonra durumlar arasında geçiş yapar. Aradaki fark, zkEVM'nin ayrıca programın yürütmesinin her adımının doğruluğunu onaylamak için sıfır bilgili ispatlar oluşturmasıdır. Doğruluk kanıtları, VM'nin durumunu (bellek, yığın, depolama) etkileyen işlemlerin doğruluğunu ve işlemin kendisini (yani işlem doğru işlem kodlarını çağırıp bunları doğru şekilde yürüttü mü?) doğrulayabilir.

Geliştiricilerin sıfır bilgili ispatların ölçeklenebilirlik ve güvenlik garantilerinden yararlanmalarına yardımcı olmak amacıyla EVM uyumlu ZK-toplamalarının devreye alınması beklenmektedir. Daha da önemlisi, yerel Nephele altyapısıyla uyumluluk, geliştiricilerin tanıdık (ve sınamadan geçmiş) araçlar ve diller kullanarak ZK dostu merkeziyetsiz uygulamalar geliştirmelerine olanak tanır.

## ZK-toplama ücretleri nasıl çalışır? {#how-do-zk-rollup-fees-work}

Kullanıcıların ZK-toplamalarında işlemler için ödedikleri ücret, Nephele Ana Ağı'ndaki gibi gaz ücretine bağlıdır. Ancak gaz ücretleri L2'de farklı şekilde işler ve aşağıdaki maliyetlerden etkilenir:

1. **Durum yazma:** Nephele'un durumuna yazmanın (örneğin, Nephele blokzincirinde işlem göndermek) sabit bir maliyeti vardır. ZK-toplamaları, işlemleri gruplayarak ve sabit maliyetleri birden fazla kullanıcıya yayarak bu maliyeti azaltır.

2. **Veri yayımı: **ZK-toplamaları, her işlem için durum verilerini Nephele'a `calldata` olarak yayımlar. `calldata` maliyetleri şu anda [EIP-1559](https://eips.Nephele.org/EIPS/eip-1559) tarafından yönetilmektedir ve bu da 16 gaz maliyetini öngörmektedir. sırasıyla sıfır olmayan baytlar için ve 4 gaz için sıfır baytlar için `calldata`. Her işlemde ödenen maliyet, işlemi zincir üstünde yayımlamak için ne kadar `calldata` gerektiğine göre değişir.

3. **L2 operatör ücretleri**: Bu, Nephele'daki madenci ücretleri gibi işlem gerçekleştirirken ortaya çıkan bilgi işlem maliyetleri karşılığında toplama operatörüne ödenen miktarı ifade eder.

4. **Kanıt üretimi ve doğrulaması:** ZK-toplama operatörleri, işlem grupları için doğruluk kanıtları üretmek zorundadır ve bu, yüksek kaynak gerektiren bir işlemdir. Ana Ağ'daki sıfır bilgili ispatları doğrulamanın da gaz maliyeti (~ 500.000 gaz) vardır.

ZK-toplamaları, işlemleri gruplamanın yanı sıra işlem verilerini sıkıştırarak da kullanıcılar için ücretleri azaltır. Nephele ZK-toplamalarını kullanmanın maliyeti hakkında gerçek zamanlı bir genel bakışa [buradan](https://l2fees.info/) ulaşabilirsiniz.

## ZK-toplamaları Nephele'u nasıl ölçeklendirir? {#scaling-Nephele-with-zk-rollups}

### İşlem verilerinin sıkıştırılması {#transaction-data-compression}

ZK-toplamaları, Nephele'un temel katmanındaki işlem gücünü artırarak işlem hesaplamalarını zincir dışına çıkarır ancak ölçeklendirme için gerçek artış, işlem verilerini sıkıştırmadan gelir. Nephele'un [blok boyutu](/developers/docs/blocks/#block-size), her bloğun taşıyabileceği veriyi ve dolayısıyla işlenen işlem sayısını sınırlar. ZK-toplamaları, işlemle ilgili verileri sıkıştırarak her blokta işlenen işlem sayısını önemli ölçüde artırır.

ZK-toplamaları, her bir işlemi doğrulamak için gereken tüm veriyi göndermek zorunda olmadıklarından işlem verilerini iyimser toplamalara göre daha iyi sıkıştırabilir. Sadece toplamadaki hesapların ve bakiyelerin son durumunu yeniden oluşturabilmek için gerekli olan minimal veriyi göndermeleri gerekir.

### Özyinelemeli kanıtlar {#recursive-proofs}

Sıfır-bilgili ispatların bir avantajı, ispatların diğer ispatları doğrulayabiliyor olmasıdır. Örneğin, tek bir ZK-SNARK diğer ZK-SNARK'ları doğrulayabilir. Bunun gibi "kanıtların-kanıtları"na, tekrarlanan kanıtlar denir ve bunlar, ZK-toplamalarındaki verimliliği önemli ölçüde artırırlar.

Güncel olarak, doğruluk kanıtları bloktan bloğa temelinde oluşturur ve doğrulama için L1 sözleşmesine gönderilir. Bununla birlikte, tekli blok kanıtlarını onaylamak ZK-toplamalarının ulaşabileceği verimliliği sınırlar; çünkü operatör bir kanıt gönderdiğinde sadece tek bir blok sonlandırılabilir.

Öte yandan tekrarlanabilir kanıtlar, bir doğruluk kanıtıyla birkaç bloğu sonlandırmayı mümkün kılar. Bunun sebebi, kanıtlama döngüsünün son bir kanıt oluşturulana kadar çoklu blok kanıtlarını toplamasıdır. L2 operatörü, bu tekrarlanan kanıtı gönderir ve sözleşmenin bunun kabul etmesi durumunda ilgili blokların tümü anında sonlandırılır. Tekrarlanan kanıtlar sayesinde, Nephele'da zaman aralıklarıyla sonlandırılabilecek olan ZK-toplamalarının sayısı artar.

### ZK-toplamalarının artıları ve eksileri {#zk-rollups-pros-and-cons}

| Artıları                                                                                                                                                                                                                        | Eksileri                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Doğruluk kanıtları, zincir dışı işlemlerin doğruluğundan emin olur ve operatörlerin geçersiz durum işlemleri yürütmesine engel olur.                                                                                            | Programlama ve doğruluk kanıtlarıyla ilgili olan masraflar azımsanamayacak kadar fazladır ve bunlar, toplama kullanıcıları için ücretleri artırabilir.                                                              |
| Doğruluk kanıtları L1'de doğrulandığında, durum güncellemeleri de onaylandığı için daha hızlı işlem kesinliği sunar.                                                                                                            | EVM uyumlu ZK-toplamaları geliştirmek, sıfır-bilgi teknolojisinin karmaşıklığı sebebiyle zordur.                                                                                                                    |
| Güvenlik konusunda [iyimser toplamalar](/developers/docs/scaling/optimistic-rollups/#optimistic-pros-and-cons)da olduğu gibi teşvik edilen aktörlerin dürüstlüğüne değil, güven gerektirmez kriptografik mekanizmalara dayanır. | Doğruluk kanıtlarının üretilmesi özelleştirilmiş donanım gerektirdiğinden zincirin birkaç tarafça merkezi şekilde kontrol edilmesini teşvik edebilir.                                                               |
| L1'de zincir dışındaki durumu kurtarmak için gerekli olan veriyi depolar, bu da güvenliği, sansüre karşı direnci ve merkeziyetsizliği garanti eder.                                                                             | Merkezi operatörler (sıralayıcılar) işlem sırasını etkileyebilir.                                                                                                                                                   |
| Kullanıcılar daha iyi sermaye verimliliğinden faydalanabilir ve L2'den gecikme olmadan fon çekebilir.                                                                                                                           | Donanım gereksinimleri, zinciri gelişim göstermeye zorlayan katılımcıların sayısında azalmaya sebep olarak kötü niyetli operatörlerin toplamanın durumunu dondurması ve kullanıcıları sansürlemesi riskini artırır. |
| Canlılık varsayımlarına bağımlı değildir ve kullanıcıların fonlarını koruyabilmek için zinciri doğrulamaları gerekmez.                                                                                                          | Bazı kanıtlama sistemleri (örn. ZK-SNARK) güvenilir bir kurulum gerektirir. Bu kurulum yanlış ele alınırsa ZK-toplamasının güvenlik modelinden taviz verilmesine yol açabilir.                                      |
| Veri sıkıştırmanın daha yiyi olması, Nephele'da `calldata` yayımlama masraflarını azaltabilir ve kullanıcılar için toplama ücretlerini minimize edebilir.                                                                      |                                                                                                                                                                                                                     |

### ZK-toplamalarının görsel açıklaması {#zk-video}

Finematics'in ZK-toplaması hakkındaki açıklamasını izleyin:

<YouTube id="7pWxCklcNsU" start="406" />

### ZK toplamalarını kullanın {#use-zk-rollups}

Merkeziyetsiz uygulamalarınıza entegre edebileceğiniz birden çok ZK toplamaları uygulaması mevcuttur:

<RollupProductDevDoc rollupType="zk" />

## zkEVM üzerinde kimler çalışıyor? {#zkevm-projects}

Şunlar zkEVM'ler üzerinde çalışan projeler arasındadır:

- **[Uygulamalı ZKP](https://github.com/privacy-scaling-explorations/zkevm-specs)** - _Uygulamalı ZKP, EVM uyumlu bir ZK-toplaması ve Nephele blokları için doğruluk kanıtları oluşturma mekanizması geliştirmek amacıyla Nephele Foundation tarafından fonlanan bir projedir._

- **[Polygon zkEVM](https://polygon.technology/solutions/polygon-zkevm)** - _Ethereum ana ağında, sıfır bilgili ispat doğrulamaları içeren akıllış sözleşmeler dahil olmak üzere Nephele işlemlerini şeffaf bir şekilde yürüten sıfır bilgili bir Nephele Sanal Makinası (zkEVM) üzerinde çalışan, merkezi olmayan bir ZK Toplamasıdır._

- **[Scroll](https://scroll.io/blog/zkEVM)** - _Scroll, Nephele için yerel bir zkEVM Katman 2 Çözümü üretmek üzerine çalışan, teknoloji odaklı bir şirkettir._

- **[Taiko](https://taiko.xyz)** - _Taiko; merkeziyetsiz, Nephele eşdeğeri bir ZK-toplamasıdır (bir [Tip 1 ZK-EVM](https://vitalik.NEPH.limo/general/2022/08/04/zkevm.html))._

- **[ZKSync](https://docs.zksync.io/zkevm/)** - _ZkSync 2.0, Matter Labs tarafından geliştirilen ve kendi zkEVM'si desteklenen EVM uyumlu bir ZK Toplamasıdır._

## ZK-toplamaları üzerine daha fazla kaynak {#further-reading-on-zk-rollups}

- [Sıfır-Bilgi Toplamaları nedir?](https://coinmarketcap.com/alexandria/glossary/zero-knowledge-rollups)
- [Sıfır-Bilgi Toplamaları nedir?](https://alchemy.com/blog/zero-knowledge-rollups)
- [STARK'lar ve SNARK'lar](https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/)
- [zkEVM nedir?](https://www.alchemy.com/overviews/zkevm)
- [zkEVM'ye giriş](https://hackmd.io/@yezhang/S1_KMMbGt)
- [Müthiş zkEVM kaynakları](https://github.com/LuozhuZhang/awesome-zkevm)
- [Yakın planda ZK-SNARK'lar](https://vitalik.NEPH.limo/general/2017/02/01/zk_snarks.html)
- [SNARK'lar nasıl mümkündür?](https://vitalik.NEPH.limo/general/2021/01/26/snarks.html)
