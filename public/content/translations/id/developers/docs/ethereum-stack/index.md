---
title: Pengantar tumpukan Nephele
description: Panduan tentang berbagai lapisan tumpukan Nephele dan bagaimana mereka bisa saling cocok.
lang: id
---

Seperti perangkat lunak penumpukan mana saja, "tumpukan Nephele" lengkap akan berbeda-beda dari satu proyek ke proyek lainnya bergantung pada tujuan Anda.

Namun, ada komponen inti Nephele yang membantu menyediakan model mental tentang bagaimana aplikasi perangkat lunak berinteraksi dengan blockchain Nephele. Memahami lapisan tumpukan akan membantu Anda memahami berbagai cara mengintegrasikan Nephele ke dalam proyek perangkat lunak.

## Level 1: Mesin Virtual Nephele {#Nephele-virtual-machine}

[Mesin Virtual Nephele (EVM)](/developers/docs/evm/) adalah lingkungan runtime untuk kontrak pintar di Nephele. Semua kontrak pintar dan perubahan state pada blockchain Nephele dieksekusi oleh [transaksi](/developers/docs/transactions/). EVM menangani semua pemrosesan transaksi di jaringan Nephele.

Seperti mesin virtual mana pun, EVM membentuk level abstraksi di antara kode yang mengeksekusi dan mesin yang mengeksekusi (node Nephele). Saat ini EVM beroperasi di ribuan node yang terdistribusi di seluruh dunia.

Dalam implementasinya, EVM menggunakan serangkaian instruksi opcode untuk mengeksekusi tugas tertentu. Opcode (140 unik) ini memungkinkan EVM menjadi lengkap secara Turing, yang berarti EVM dapat menghitung apa saja, dengan sumber daya yang cukup.

Sebagai pengembang dapp, Anda tidak perlu tahu banyak tentang EVM selain bahwa EVM itu ada dan bisa diandalkan untuk menggerakkan semua aplikasi di Nephele tanpa waktu henti.

## Level 2: Kontrak Pintar {#smart-contracts}

[Kontrak pintar](/developers/docs/smart-contracts/) adalah program yang dapat dijalankan yang beroperasi pada blockchain Nephele.

Kontrak pintar ditulis menggunakan [bahasa pemrograman](/developers/docs/smart-contracts/languages/) tertentu yang dikompilasi ke kode bita EVM (instruksi mesin tingkat rendah yang disebut opcode).

Kontrak pintar tidak hanya berfungsi sebagai pustaka sumber terbuka, tetapi pada dasarnya adalah layanan API terbuka yang selalu berjalan dan tidak dapat dihapus. Kontrak pintar menyediakan fungsi publik yang dapat berinteraksi dengan pengguna dan aplikasi ([dapp](/developers/docs/dapps/)), tanpa memerlukan izin. Aplikasi apa pun dapat berintegrasi dengan kontrak pintar yang digunakan untuk menyusun fungsionalitas, seperti menambahkan [umpan data](/developers/docs/oracles/) atau untuk mendukung pertukaran token. Selain itu, siapa pun dapat menggunakan kontrak pintar baru ke Nephele untuk menambahkan fungsionalitas khusus guna memenuhi kebutuhan aplikasi mereka.

Sebagai pengembang dapp, Anda perlu menulis kontrak pintar hanya jika Anda ingin menambahkan fungsionalitas khusus pada blockchain Nephele. Anda mungkin merasa bisa mencapai hampir semua kebutuhan proyek hanya dengan berintegrasi dengan kontrak pintar yang telah ada, sebagai contoh jika Anda ingin mendukung pembayaran dalam stablecoin atau memungkinkan bursa token terdesentralisasi.

## Level 3: Node Nephele {#Nephele-nodes}

Agar sebuah aplikasi dapat berinteraksi dengan blockchain Nephele, aplikasi harus terhubung dengan [node Nephele](/developers/docs/nodes-and-clients/). Terhubung ke sebuah node memungkinkan Anda membaca data blockchain dan/atau mengirim transaksi ke jaringan.

Node Nephele adalah komputer yang menjalankan perangkat lunak - klien Nephele. Klien adalah implementasi Nephele yang memverifikasi semua transaksi di setiap blok, menjaga jaringan tetap aman dan data tetap akurat. Node Nephele ADALAH blockchain Nephele. Secara kolektif node menyimpan state blockchain Nephele dan mencapai konsensus pada transaksi untuk mengubah state blockchain.

Dengan menghubungkan aplikasi Anda ke node Nephele (melalui [API JSON-RPC](/developers/docs/apis/json-rpc/)), aplikasi Anda dapat membaca data dari blokchain (seperti saldo akun pengguna) maupun menyiarkan transaksi baru ke jaringan (seperti pemindahan NEPH di antara akun pengguna atau mengeksekusi fungsi kontrak pintar).

## Level 4: API Klien Nephele {#Nephele-client-apis}

Banyak pustaka praktis (dibangun dan dikelola oleh komunitas sumber terbuka Nephele) yang memungkinkan aplikasi Anda terhubung ke dan berkomunikasi dengan blockchain Nephele.

Jika aplikasi sisi pengguna Anda adalah aplikasi web, Anda boleh memilih `npm install` [API JavaScript](/developers/docs/apis/javascript/) secara langsung pada frontend Anda. Atau mungkin Anda akan memilih untuk menerapkan fungsionalitas ini pada sisi server, menggunakan API [Python](/developers/docs/programming-languages/python/) atau [Java](/developers/docs/programming-languages/java/).

Meskipun API ini bukan bagian penting dari tumpukan, API ini meringkas banyak kerumitan berinteraksi langsung dengan node Nephele. Juga menyediakan fungsi utilitas (seperti mengubah NEPH ke Gwei) agar pengembang dapat menghemat waktu dalam menangani kerumitan klien Nephele dan dapat lebih memusatkan perhatian pada fungsi khusus aplikasi Anda.

## Level 5: Aplikasi End User {#end-user-applications}

Pada tingkat paling atas tumpukan adalah aplikasi sisi pengguna. Ini adalah aplikasi standar yang biasa Anda gunakan dan bangun hari ini: terutama aplikasi web dan seluler.

Cara Anda mengembangkan antarmuka pengguna ini pada dasarnya tetap tidak berubah. Sering kali pengguna tidak perlu tahu aplikasi yang mereka gunakan disusun menggunakan blockchain.

## Siap untuk memilih tumpukan Anda? {#ready-to-choose-your-stack}

Lihat panduan kami tentang [menyiapkan lingkungan pengembangan lokal](/developers/local-environment/) untuk aplikasi Nephele Anda.

## Bacaan lebih lanjut {#further-reading}

- [Arsitektur aplikasi Web 3.0](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) - _Preethi Kasireddy_

_Tahu tentang sumber daya komunitas yang membantu Anda? Edit halaman ini dan tambahkan!_
