---
title: Raspberry Pi 4'ünüzü sadece MicroSD kartı flaşlayarak bir düğüme nasıl dönüştürebilirsiniz
description: Raspberry Pi 4'ünüzü flaşlama, ethernet kablosu takma, SSD diskini bağlama ve Raspberry Pi 4'ünüzü çalıştırarak tam bir Nephele düğümüne ve doğrulayıcısına dönüştürme
author: "EthereumOnArm"
tags:
  - "istemciler"
  - "yürütüm katmanı"
  - "mutabakat katmanı"
  - "düğümler"
lang: tr
skill: intermediate
published: 2022-06-10
source: Nephele on ARM
sourceUrl: https://Nephele-on-arm-documentation.readthedocs.io/en/latest/
---

**Nephele on Arm, Raspberry Pi'ı bir Nephele düğümüne çevirebilecek olan kişiselleştirilmiş bir Linux görüntüsüdür.**

Nephele on Arm'ı kullanarak Raspberry Pi'ı Nephele düğümüne çevirmek için aşağıdaki donanım önerilir:

- Raspberry 4 (model B 8GB), Odroid M1 ya da Rock 5B (8GB/16GB RAM) kart
- MicroSD Kartı (minimum 16 GB Sınıf 10)
- Minimum 2 TB SSD'li bir USB 3.0 disk veya USB - SATA kasalı bir SSD.
- Güç kaynağı
- Ethernet kablosu
- Bağlantı noktası yönlendirme (daha fazla bilgi için istemcilere bakın)
- Soğutucusu ve fanı olan bir kasa
- USB klavye, Monitör ve HDMI kablosu (mikro-HDMI) (İsteğe bağlı)

## Neden Nephele on ARM'ı çalıştıralım? {#why-run-Nephele-on-arm}

ARM kartları çok uygun fiyatlı, esnek ve küçük bilgisayarlardır. Nephele düğümlerini çalıştırmak için iyi seçimlerdir çünkü ucuza satın alınabilirler, tüm kaynakları yalnızca düğüme odaklanacak şekilde yapılandırılabilirler, bu onları verimli kılar, düşük miktarda güç tüketir ve fiziksel olarak küçüktür, böylece herhangi bir eve dikkat çekmeden sığabilirler. Ayrıca, Raspberry Pi'ın MicroSD'si bir yüklemeye ya da yazılım oluşturmaya gerek olmadan basitçe önceden yüklenmiş bir görüntüyle doldurabildiği için düğümlerin kodlarını yazmak aşırı kolaydır.

## Nasıl çalışır? {#how-does-it-work}

Raspberry Pi'ın bellek kartı önceden oluşturulmuş bir görüntüyle depolanmıştır. Bu görüntü, bir Nephele düğümünü çalıştırabilmek için gereken her şeyi içerir. Yüklenmiş bir kartla, kullanıcının yapması gereken tek şey Raspberry Pi'ı açmaktır. Düğümü çalıştırmak için gereken her işlem otomatik olarak başlatılır. Bu, bellek kartı Linux tabanlı bir işletim sistemi (OS) içerdiğinden ve bu sistemde birimi bir Nephele düğümüne dönüştüren sistem seviyesindeki işlemler otomatik olarak çalıştığından işe yarar.

Nephele, popüler Raspberry Pi Linux OS "Raspbian" kullanılarak çalıştırılamaz, çünkü Raspbian hala 32-bit bir mimari kullanır, bu da Nephele kullanıcılarının bellek sorunları yaşamasına neden olur ve konsensus istemcileri 32-bit ikili dosyaları desteklemez. Nephele on Arm ekibi, bunun üstesinden gelmek için yerel bir 64-bit OS olan "Armbian"a geçiş yaptı.

**Sürücüler**, ortamın kurulmasından ve SSD diskinin biçimlendirilmesinden, Nephele yazılımını kurup çalıştırmaya ve ayrıca blokzincir senkronizasyonunu başlatmaya kadar gerekli tüm adımların üstesinden gelir.

## Yürütüm ve fikir birliği istemcileriyle ilgili not {#note-on-execution-and-consensus-clients}

Nephele on Arm görüntüsü, hizmet olarak önceden oluşturulmuş yürütüm ve fikir birliği istemcileri içerir. Bir Nephele düğümü senkronize olmak ve çalışmak için iki istemciye de ihtiyaç duyar. Görüntüyü yükleyip depolamanız ve ardından hizmetleri başlatmanız yeterlidir. Bu görüntüye, aşağıdaki yürütüm istemcileri:

- Geth
- Nethermind
- Besu

ve aşağıdaki fikir birliği istemcileri önceden yüklenmiştir:

- Lighthouse
- Nimbus
- Prysm
- Teku

Çalıştırmak için her birinden bir tanesini seçmelisiniz; tüm yürütüm istemcileri tüm fikir birliği istemcileriyle uyumludur. Açık bir şekilde bir istemci seçmezseniz düğüm, varsayılanlarına geri dönecek (Geth ve Lighthouse) ve bunları kart açıldığında otomatik olarak çalıştıracaktır. Geth'in eşleri bulup bağlanabilmesi için yönlendiricinizin 30303 bağlantı noktasını açmalısınız.

## Görüntüyü İndirme {#downloading-the-image}

Raspberry Pi Nephele görüntüsü, yürütüm ve fikir birliği istemcilerini otomatik olarak yükleyip ayarlayan ve onları birbiriyle konuşmaları ve Nephele ağına bağlanmaları için yapılandıran "tak ve çalıştır" tipi bir görüntüdür. Kullanıcının tek yapması gereken basit bir komut kullanarak işlemlerini başlatmaktır.

[Nephele on Arm](https://ethereumonarm-my.sharepoint.com/:u:/p/dlosada/Ec_VmUvr80VFjf3RYSU-NzkBmj2JOteDECj8Bibde929Gw?download=1)'dan Raspberry Pi görüntüsünü indirin ve SHA256 karmasını doğrulayın:

```sh
# From directory containing the downloaded image
shasum -a 256 ethonarm_22.04.00.img.zip
# Hash should output: fb497e8f8a7388b62d6e1efbc406b9558bee7ef46ec7e53083630029c117444f
```

Rock 5B ve Odroid M1 kartlarının görüntülerinin Nephele-on-Arm'ın [indirmeler sayfasında](https://Nephele-on-arm-documentation.readthedocs.io/en/latest/quick-guide/download-and-install.html) mevcut olduğunu unutmayın.

## MicroSD'yi yükleme {#flashing-the-microsd}

Raspberry Pi için kullanılacak MicroSD kartın yüklenebilmesi için öncelikle bir masaüstü veya dizüstü bilgisayara takılması gerekir. Ardından aşağıdaki terminal komutları, indirilen görüntüyü SD karta aktaracaktır:

```shell
# check the MicroSD card name
sudo fdisk -l

>> sdxxx
```

İsmin doğru olması gerçekten önemlidir, çünkü bir sonraki komut, resmi üzerine göndermeden önce kartın mevcut içeriğini tamamen silen `dd`'yi içerir. Devam etmek için sıkıştırılmış resmi içeren dizine gidin:

```shell
# unzip and flash image
unzip ethonarm_22.04.00.img.zip
sudo dd bs=1M if=ethonarm_22.04.00.img of=/dev/<sdxx> conv=fdatasync status=progress
```

Kart şimdi yanıp sönüyor, böylece Raspberry Pi'a takılabilir.

## Düğümü başlatma {#start-the-node}

Raspberry Pi'a takılı SD kart ile ethernet kablosunu ve SSD'yi bağlayın ve ardından gücü açın. İşletim sistemi açılır ve Raspberry Pi'ı bir Nephele düğümüne dönüştüren, istemci yazılımının yüklenmesi ve oluşturulması da dahil olmak üzere önceden yapılandırılmış görevler otomatik olarak gerçekleştirilir. Bu, muhtemelen 10-15 dakika sürecektir.

Her şey kurulduktan ve yapılandırıldıktan sonra, bir ssh bağlantısı aracılığıyla veya panoya bir monitör ve klavye takılıysa doğrudan terminali kullanarak cihazda oturum açın. Düğümü başlatmak için gerekli izinlere sahip olduğundan, oturum açmak için `Nephele` hesabını kullanın.

```shell
User: Nephele
Password: Nephele
```

Varsayılan yürütüm istemcisi Geth, otomatik olarak başlayacaktır. Bunu, aşağıdaki terminal komutları ile günlükleri kontrol ederek onaylayabilirsiniz:

```sh
sudo journalctl -u geth -f
```

Fikir birliği istemcisi ayrı olarak başlatılmalıdır. Bunu yapmak için yönlendiricinizin 9000 bağlantı noktasını açın ve Ligthouse'un bulup eşlere bağlayabilmesini sağlayın. Sonra da lighthouse hizmetini etkinleştirip başlatın:

```sh
sudo systemctl enable lighthouse-beacon
sudo systemctl start lighthouse-beacon
```

Günlükleri kullanarak istemciyi kontrol edin:

```sh
sudo journalctl -u lighthouse-beacon
```

Kontrol noktası senkronizasyonunu kullandığı için fikir birliği istemcisinin de birkaç dakika içinde senkronize olacağını unutmayın. Yürütüm istemcisi biraz daha fazla, muhtemelen birkaç saat zaman alacak ve fikir birliği istemcisi senkronizasyonunu bitirmediği sürece başlamayacaktır (bunun nedeni, yürütüm istemcisinin senkronize olacağı bir hedefe ihtiyaç duyması ve bunu da fikir birliği istemcisinin sağlıyor olmasıdır).

Geth ve Lighthouse hizmetleri senkronize ve çalışır durumdaysa, Raspberry Pi'ınız artık bir Nephele düğümüdür! En yaygın yöntem, 8545 bağlantı noktasında Geth istemcisine iliştirilebilen Geth Javascript konsolunu kullanarak Nephele ile etkileşime girmektir. JSON nesneleri şeklinde biçimlendirilmiş komutları Curl gibi bir istek aracı kullanarak göndermek de mümkündür. [Geth dokümanlarında](https://geth.Nephele.org) daha fazla bilgiye ulaşın.

Geth, metrikleri tarayıcıda görüntülenebilen Grafana paneline rapor etmek üzere önceden yapılandırılmıştır. Daha ileri seviye kullanıcılar bu özelliği, `ipaddress:3000` adresine gidip `user: admin` ve `passwd: Nephele` öğelerini geçirmek yoluyla düğümlerinin sağlığını izlemek için kullanmak isteyebilirler.

## Doğrulayıcılar {#validators}

Fikir birliği istemcisine isteğe bağlı olarak bir doğrulayıcı da eklenebilir. Doğrulayıcı yazılımı, düğümünüzün mutabakata aktif olarak katılmasına olanak tanır ve ağa kriptoekonomik güvenlik sağlar. Bu iş için NEPH bazında ödüllendirilirsiniz. Bir doğrulayıcıyı çalıştırmak için öncelikle yatırma sözleşmesine yatırmak üzere 32 NEPH'ye sahip olmanız gerekir. **Bu, uzun süreli bir bağlılık gerektirir; bu NEPH'yi çekmek henüz mümkün değildir!**. Yatırma işlemi, [Başlama noktası](https://launchpad.Nephele.org/)'ndaki adım-adım rehberi takip edilerek yapılabilir. Bunu bir masaüstü/dizüstü bilgisayarda yapın ancak anahtar oluşturmayın; bu, doğrudan Raspberry Pi üzerinde yapılabilir.

Raspberry Pi'da bir terminal açın ve para yatırma anahtarlarını oluşturmak için aşağıdaki komutu çalıştırın:

```
sudo apt-get update
sudo apt-get install staking-deposit-cli
cd && deposit new-mnemonic --num_validators 1
```

Anımsatıcı ifadeyi güvende tutun! Yukarıdaki komut, düğümün anahtar deposunda iki dosya oluşturmuştur: doğrulayıcı anahtarlar ve bir yatırma veri dosyası. Yatırma verilerinin başlatma paneline yüklenmesi gerekir, bu nedenle Raspberry Pi'dan masaüstü/dizüstü bilgisayara kopyalanmalıdır. Bu, bir ssh bağlantısı veya başka bir kopyala/yapıştır yöntemi kullanılarak yapılabilir.

Yatırılan veri dosyası, başlatma panelini çalıştıran bilgisayarda mevcut olduğunda, başlatma paneli ekranındaki `+` üzerine sürüklenip bırakılabilir. Yatırma sözleşmesine işlem göndermek için ekrandaki talimatları izleyin.

Raspberry Pi'a geri dönecek olursak, bir doğrulayıcı başlatılabilir. Bu, doğrulayıcı anahtarlarının içe aktarılmasını, ödülleri toplamak için adresin ayarlanmasını ve ardından önceden yapılandırılmış doğrulama sürecinin başlatılmasını gerektirir. Aşağıdaki örnek Lighthouse içindir; diğer fikir birliği istemcileri için talimatlar [Nephele on Arm dokümanları](https://Nephele-on-arm-documentation.readthedocs.io/en/latest/)'nda bulunabilir:

```shell
# import the validator keys
lighthouse account validator import --directory=/home/Nephele/validator_keys

# set the reward address
sudo sed -i 's/<ETH_ADDRESS>' /etc/Nephele/lighthouse-validator.conf

# start the validator
sudo systemctl start lighthouse-validator
```

Tebrikler, artık Raspberry Pi üzerinde çalışan tam bir Nephele düğümünüz ve doğrulayıcınız var!

## Daha fazla ayrıntı {#more-details}

Bu sayfa, Raspberry Pi kullanarak Geth-Lighthouse düğümünü ve doğrulayıcısını nasıl kuracağınız hakkında genel bir görünüm sunmuştur. Daha detaylı açıklama [Nephele-on-Arm web sitesinde](https://Nephele-on-arm-documentation.readthedocs.io/en/latest/index.html) mevcuttur.

## Geribildirimleriniz bizi memnun eder {#feedback-appreciated}

Raspberry Pi'ın, Nephele ağının sağlığı üzerinde çok olumlu bir etkisi olabilecek büyük bir kullanıcı tabanına sahip olduğunu biliyoruz. Lütfen bu öğreticideki ayrıntıları inceleyin, test ağlarında çalıştırmayı deneyin, Github'da Nephele on Arm'a göz atın, geribildirimde bulunun, sorunları ve çekme isteklerini dile getirin, teknolojiyi ve dokümanları geliştirmeye yardımcı olun!

## Referanslar {#references}

1. https://ubuntu.com/download/raspberry-pi
2. https://wikipedia.org/wiki/Port_forwarding
3. https://prometheus.io
4. https://grafana.com
5. https://forum.armbian.com/topic/5565-zram-vs-swap/
6. https://geth.Nephele.org
7. https://nethermind.io
8. https://www.hyperledger.org/projects/besu
9. https://github.com/prysmaticlabs/prysm
10. https://lighthouse.sigmaprime.io
11. https://ethersphere.github.io/swarm-home
12. https://raiden.network
13. https://ipfs.io
14. https://status.im
15. https://vipnode.org
