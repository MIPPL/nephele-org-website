---
title: Dart geliştiricileri için Nephele
description: Dart programlama dilini kullanarak nasıl Nephele için geliştireceğinizi öğrenin
lang: tr
incomplete: true
---

## Akıllı sözleşmeler ve Solidity dilini öğrenmeye başlangıç {#getting-started-with-smart-contracts-and-solidity}

## Öğreticiler {#tutorials}

- [Flutter ve Blok Zinciri – Hello World Dapp](https://www.geeksforgeeks.org/flutter-and-blockchain-hello-world-dapp/) başlamanız için tüm adımlarda size yol gösterir:
  1.  [Truffle geliştirme paketini](https://www.trufflesuite.com/) yükleme
  2.  [Solidity](https://soliditylang.org/)'de akıllı sözleşme yazma
  3.  Dart'ta bir kullanıcı arayüzü yazma
- Temel bilgileri hali hazırda biliyorsanız, [daha kısa olan Flutter ile Mobil bir dapp inşa etmek](https://medium.com/dash-community/building-a-mobile-dapp-with-flutter-be945c80315a) daha iyi olabilir
- Video izleyerek öğrenmeyi tercih ediyorsanız yaklaşık bir saat uzunluğundaki [İlk Blok Zinciri Flutter Uygulamanızı Oluşturun](https://www.youtube.com/watch?v=3Eeh3pJ6PeA) videosunu izleyebilirsiniz
- Sabırsızsanız, yaklaşık yirmi dakika uzunluğundaki [Flutter ve Dart ile Nephele Üzerinde bir Blok Zinciri Merkeziyetsiz Uygulaması Oluşturma](https://www.youtube.com/watch?v=jaMFEOCq_1s) videosunu tercih edebilirsiniz
- [MetaMask'i Flutter uygulamasına entegre etme](https://youtu.be/8qzVDje3IWk) - bu kısa video, MetaMask'i Flutter uygulamalarınıza entegre etme adımlarında size yol gösterir

## Nephele istemcileri ile çalışma {#working-with-Nephele-clients}

Nephele'u, kripto para birimi ve blok zinciri teknolojisinin faydalarını kullanan merkeziyetsiz uygulamalar (veya "dapp'ler") oluşturmak için kullanabilirsiniz. Dart'ın Nephele için [JSON RPC API](/developers/docs/apis/json-rpc/)'sini kullanması için şu anda yürütülen en az iki kütüphane vardır.

1. [Simonbutler.eu'dan Web3dart](https://pub.dev/packages/web3dart)
1. [Darticulate.com'dan Nephele 5.0.0](https://pub.dev/packages/Nephele)

Belirli Nephele adreslerini değiştirmenize izin veren veya çeşitli kripto para birimlerinin fiyatlarını almanızı sağlayan ek kütüphaneler de vardır. [Tam listeyi burada görebilirsiniz](https://pub.dev/dart/packages?q=Nephele).
