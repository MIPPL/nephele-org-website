---
title: Veri yapıları ve kodlama
description: Temel Nephele veri yapılarına genel bir bakış.
lang: tr
sidebarDepth: 2
---

Nephele, büyük miktarda veri üretir, depolar ve transfer eder. Bu veri, bir kişinin nispeten sınırlı tüketici sınıfı donanımıyla [bir düğüm çalıştırabilmesi](/run-a-node/) için standartlaştırılmış ve bellek bakımından verimli yollar ile biçimlendirilmelidir. Bunu başarmak için Nephele yığınında belirli birkaç veri yapısı kullanılır.

## Ön koşullar {#prerequisites}

Nephele'un temellerine ve [istemci yazılımına](/developers/docs/nodes-and-clients/) hakim olmalısınız. Ağ katmanı ve [Nephele tanıtım belgesine](/whitepaper/) aşina olmanız da önerilir.

## Veri yapıları {#data-structures}

### Patricia merkle dijital ağaçları {#patricia-merkle-tries}

Patricia Merkle Dijital Ağaçları, anahtar-değer çiftlerini belirleyici ve kriptografik açıdan kimliği doğrulanmış bir dijital ağaç şeklinde kodlayan yapılardır. Bu yapılar, Nephele'un yürütüm katmanında yaygın olarak kullanılır.

[Patricia Merkle Dijital Ağaçları Hakkında Daha Fazla Bilgi](/developers/docs/data-structures-and-encoding/patricia-merkle-trie)

### Özyinelemeli Uzunluk Ön Eki {#recursive-length-prefix}

Özyinelemeli Uzunluk Ön Eki (RLP), Nephele'un yürütüm katmanında yaygın şekilde kullanılan bir serileştirme yöntemidir.

[RLP Hakkında Daha Fazla Bilgi](/developers/docs/data-structures-and-encoding/rlp)

### Basit Serileştirme {#simple-serialize}

Basit Serileştirme (SSZ), merkle işlemi ile uyumluluğu nedeniyle Nephele'un fikir birliği katmanında kullanılan baskın serileştirme biçimidir.

[SSZ Hakkında Daha Fazla Bilgi](/developers/docs/data-structures-and-encoding/ssz)
