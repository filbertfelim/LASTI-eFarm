# SMART FARMING eFarm
Smart farming eFarm merupakan layanan yang menyediakan manajemen berbasis teknologi modern untuk meningkatkan produktivitas dalam bidang pertanian. Kunci utama dari smart farming eFarm adalah penggunaan sensor untuk mendeteksi kondisi lahan pertanian, drone untuk melaksanakan kegiatan pertanian, dan website sebagai penghubung antara pengguna (petani) dengan sensor maupun drone. Melalui pemanfaatan Internet of Things (IoT) yang mengintegrasikan website dengan sensor dan drone, eFarm menyediakan solusi teknologi yang inovatif dan efektif dalam membantu usaha pertanian untuk melakukan pengelolaan lahan pertanian secara virtual. 

## Anggota Kelompok
| NIM | Nama |
| ----- | ---- |
| 18221073 | Jessica |
| 18221097 | Filbert Felim |
| 18221099 | Clara Alrosa Fernanda Sinaga |
| 18221137 | Felisa Aidadora Darmawan |
| 18221153 | Victoria Angelique |

## Prototype eFarm
Prototype yang dikembangkan berfokus pada proses bisnis penanaman dan pemeliharaan pertanian yang diimplementasikan dalam bentuk website eFarm. Website eFarm menyediakan komunikasi antara kebutuhan petani sebagai pengguna dengan sensor dan drone. Melalui website eFarm, petani dapat memperoleh informasi kondisi lahan pertaniannya berdasarkan data yang tersimpan maupun data dari hasil pengukuran sensor yang meliputi data kadar air pada lahan untuk mengetahui tingkat kelembaban lahan dan data pergerakan untuk mengetahui keberadaan hama pada lahan pertanian. Selain itu, website eFarm dapat menyampaikan kebutuhan petani untuk melakukan penanaman bibit dan pemeliharaan yang terdiri dari pemumpukan, penyiraman, dan pemberian pestisida, kepada drone sebagai pelaksana kegiatan pertanian tersebut.

## Cara Menjalankan Prototype eFarm
Silakan membuka website eFarm melalui link berikut ini : [website eFarm](https://lasti-e-farm.vercel.app/)
1. Ketika membuka website eFarm, Anda akan memasuki landing page.
   
   ![Screenshot 2023-12-07 140938](https://github.com/filbertfelim/LASTI-eFarm/assets/110410836/d7ae28f2-3511-4341-8476-4b647bd57d38)
   
2. Klik tombol "Mulai Menanam" untuk melihat tampilan lahan pertanian. Lahan pertanian ini dibagi berdasarkan petak-petak lahan. Terdapat dua kategori petak lahan, yaitu lahan kosong (yang ditampilkan dalam bentuk kotak berwarna abu-abu) dan lahan terisi (yang ditampilkan dalam bentuk kotak berisi daun). Lahan terisi dapat dibedakan menjadi dua, yaitu lahan terisi dengan kondisi normal (berwarna hijau) dan lahan terisi dengan kondisi yang membutuhkan perhatian (berwarna merah).
   
   ![Screenshot 2023-12-07 141150](https://github.com/filbertfelim/LASTI-eFarm/assets/110410836/d6e0cdf2-d713-4244-b442-c81a89ee7f84)
   
3. Untuk melakukan penanaman bibit, Anda dapat meng-klik petak lahan yang kosong sehingga akan muncul dialog "Tentukan Bibit" untuk memilih bibit yang ingin ditanam. Terdapat 5 jenis bibit, yaitu jagung, padi, cabai merah, tomat merah, dan selada, yang dapat dipilih pada dropdown "Pilih Bibit". Ketersediaan stok bibit yang dipilih akan ditampilkan di bawah dropdown tersebut. Setelah memilih bibit, Anda dapat meng-klik tombol "Mulai Menanam". Petak lahan tersebut yang semula merupakan lahan kosong akan berubah menjadi lahan terisi karena penanaman bibit telah dilakukan oleh drone.
   
   ![Screenshot 2023-12-07 141300](https://github.com/filbertfelim/LASTI-eFarm/assets/110410836/31274986-1187-421a-9a6d-e0e8df16a7b2)
  
4. Apabila meng-klik petak lahan terisi dengan kondisi normal yang berwarna hijau, Anda akan melihat informasi last fertilized (tanggal pemberian pupuk terakhir), humidity level (tingkat kadar air pada lahan), dan motion level (tingkat pergerakan pada lahan yang menunjukkan keberadaan hama). Ketiga informasi tersebut ditampilkan dalam teks berwarna hitam yang menunjukkan kondisi normal. Lahan dengan kondisi normal memiliki humidity level di atas 20 dan motion level yang bernilai low (tidak terdapat hama). Anda dapat mencoba untuk memberikan pupuk dengan meng-klik tombol "Beri Pupuk". Setelah memberikan pupuk, drone akan melaksanakan pemberian pupuk, sehingga apabila Anda kembali membuka petak lahan tersebut, maka tanggal last Fertilized akan berubah menjadi tanggal saat ini.
   
   ![Screenshot 2023-12-07 141414](https://github.com/filbertfelim/LASTI-eFarm/assets/110410836/fd045aab-6836-4ac7-91c6-ad184c7cfc65)
   
5. Apabila meng-klik petak lahan terisi dengan kondisi tidak normal yang berwarna merah, Anda akan melihat informasi dari humidity level dan/atau motion level ditampilkan dalam teks berwarna merah yang menunjukkan kondisi tidak normal. Lahan dengan kondisi tidak normal memiliki humidity level di bawah 20 (kondisi lahan kering) dan/atau motion level yang bernilai high (terdapat hama). Ketika humidity level tidak normal, Anda dapat meng-klik tombol "Siram Tanaman" yang akan memberikan perintah kepada drone untuk melakukan penyiraman tanaman. Apabila Anda meng-klik kembali petak lahan tersebut, maka humidity level telah berubah menjadi normal bernilai 100 karena penyiraman telah dilakukan. Ketika motion level tidak normal, Anda dapat meng-klik tombol "Beri Pestisida" yang akan memberikan perintah kepada drone agar melakukan pembasmian hama dengan memberikan pestisida pada lahan tersebut. Apabila Anda meng-klik kembali petak lahan tersebut, maka motion level telah berbah menjadi low yang berarti sudah tidak terdapat hama.
   
   ![Screenshot 2023-12-07 141503](https://github.com/filbertfelim/LASTI-eFarm/assets/110410836/ecaf4356-d4da-43de-80c5-2cdbab464428)

Dengan adanya website eFarm ini, maka proses penanaman dan pemeliharaan yang mencakup pemberian pupuk, penyiraman tanaman, dan pemberian pestisida untuk mengendalikan hama dapat dipantau dan dikelola secara virtual tanpa harus berada di lokasi lahan pertanian. Hal ini akan membantu pekerjaan petani dalam menghasilkan produktivitas pertanian yang maksimal.
