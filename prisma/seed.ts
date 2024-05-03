import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const rawData = [
    {
      X: '104.9724743',
      Y: '-5.3477895',
      Name: 'Universitas Muhammadiyah Pringsewu Lampung',
      Alamat: 'Jln. KH. Ahmad Dahlan 112 Pringsewu, Lampung 35373',
      Deskripsi:
        'Universitas Muhammadiyah Pringsewu (UMPRI) Lampung adalah lembaga pendidikan tinggi yang berdiri dari proses penggabungan tiga Perguruan Tinggi Muhammadiyah di Kabupaten Pringsewu, yaitu STKIP Muhammadiyah Pringsewu Lampung, STIE Muhammadiyah Pringsewu Lampung, dan STIKes Muhammadiyah Pringsewu Lampung',
      Image:
        'https://lampuung.com/wp-content/uploads/2021/05/IMG_20210509_135449-scaled.jpg',
      Jumlah_Prodi: '23',
      Kabupaten: 'Pringsewu',
      Tahun_Berdiri: '2019',
    },
    {
      X: '105.0408494',
      Y: '-5.3742771',
      Name: 'Universitas Aisyah Pringsewu',
      Alamat:
        'Jl. Ahmad Yani No. 1 A Tambak Rejo, Wonodadi, Kec. Pringsewu, Kab. Pringsewu, Lampung,',
      Deskripsi:
        'Universitas Aisyah Pringsewu berdiri pada tanggal 20 Juni 2019 sebagai hasil penggabungan dari tiga institusi perguruan tinggi, yaitu STIKES Aisyah Pringsewu, STT Aisyah dan Akbid Medica Bakti Nusantara (Akbid MBN). Untuk STIKES Aisyah sendiri berdiri pada tanggal 20 Agustus 2009 sebagai Sekolah Tinggi Ilmu Kesehatan (STIKes) Aisyah Pringsewu berdasarkan Surat Keputusan Direktur Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan Nomor 131/D/O/2009',
      Image:
        'https://www.aisyahuniversity.ac.id/wp-content/uploads/2022/01/IMG-20220131-0001.jpg',
      Jumlah_Prodi: '2',
      Kabupaten: 'Pringsewu',
      Tahun_Berdiri: '2009',
    },
    {
      X: '105.2428973',
      Y: '-5.3641812',
      Name: 'Universitas Lampung',
      Alamat:
        'Jl. Prof. Dr. Sumantri Brojonegoro No.1, Kota Bandar Lampung, Lampung.',
      Deskripsi:
        'Universitas Lampung (UNILA) adalah universitas negeri pertama dan tertua di Provinsi Lampung, Indonesia. Hari jadi Unila ditetapkan pada tanggal 23 September 1965, berdasarkan pada keluarnya Surat Keputusan Menteri PTIP yang menetapkan berdirinya Unila.',
      Image:
        'https://www.unila.ac.id/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-10.39.08.jpeg',
      Jumlah_Prodi: '154',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '1965',
    },
    {
      X: '105.3148495',
      Y: '-5.3582643',
      Name: 'Institut Teknologi Sumatera',
      Alamat:
        'Jalan Terusan Ryacudu, Way Hui, Kec. Jati Agung, Lampung Selatan, Lampung.',
      Deskripsi:
        'Institut Teknologi Sumatera, disingkat ITERA, adalah sebuah perguruan tinggi negeri yang terdapat di Provinsi Lampung di Pulau Sumatra . Lokasinya berada di antara wilayah Kabupaten Lampung Selatan dengan Kota Bandar Lampung. ITERA didirikan berdasarkan Peraturan Presiden Nomor 124 Tahun 2014 tentang Pendirian Institut Teknologi Sumatera (Lembaran Negara Republik Indonesia Tahun 2014 Nomor 253) yang ditetapkan Presiden Republik Indonesia Dr. H. Susilo Bambang Yudhoyono pada tanggal 6 Oktober 2014 dan diundangkan tanggal 9 Oktober 2014. Walaupun peresmiannya dilaksanakan pada tahun 2014, tetapi ITERA sudah memulai kegiatan akademik dengan menerima mahasiswa baru sejak tahun 2012-2013. Selain ITB dan ITS, dengan dibukanya ITERA dan ITK, maka pemerintah Indonesia memiliki empat institut teknologi.',
      Image:
        'https://www.itera.ac.id/wp-content/uploads/2024/02/Gerbang-ITERA-Drone-2.jpg',
      Jumlah_Prodi: '42',
      Kabupaten: 'Lampung Selatan',
      Tahun_Berdiri: '2014',
    },
    {
      X: '105.2187336',
      Y: '-5.3814733',
      Name: 'Universitas Malahayati',
      Alamat: 'Jl. Pramuka No 27 Kemiling-, Bandar Lampung, Lampung.',
      Deskripsi:
        'Universitas Malahayati (Unmal) adalah sebuah perguruan tinggi swasta di Indonesia. Universitas ini didirikan di bawah Yayasan Alih Teknologi pada tanggal 27 Agustus 1993 dan disahkan berdasarkan SK Menteri Pendidikan dan Kebudayaan RI No.02/D/0/1994 pada tanggal 28 Januari 1994.',
      Image:
        'https://asset.kompas.com/crop/0x7:740x500/750x500/data/photo/2019/08/22/5d5e3396f16bc.jpg',
      Jumlah_Prodi: '22',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '1993',
    },
    {
      X: '104.9586187',
      Y: '-5.2192567',
      Name: "STAI Al- MA'ARIF KALIREJO LAMPUNG TENGAH",
      Alamat: 'Jln. Jendral Sudirman No. 14 Kalirejo Lampung Tengah, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Agama Islam (STAI) Ma’arif  Lampung Tengah, merupakan tindak lanjut dari STAI Ma’arif Metro Lampung, dan Mulai Tanggal : 5 Januari 2005, telah membuka kelas jauh STAI Ma’arif di Kalirejo Lampung Tengah, Sesuai arahan dan berbagai pertimbangan Bapak Zaeni selaku Ketua STAI Ma’arif Metro pada Tanggal : 20 Februari 2005, maka perlunya di tunjuk Koordinator kelas jauh di STAI Ma’arif Kalirejo Sdr. Sungkowo, S.Ag, untuk melaksanakan perekrutan Mahasiswa, dikarnakan jarah tempuh STAI Ma’arif Metro Lampung dengan Kalirejo Lampung Tengah maksiml 75 Km',
      Image:
        'https://staimaarifkalirejo.ac.id/wp-content/uploads/2017/07/KAMPUS-1-1-959x400.jpeg',
      Jumlah_Prodi: '4',
      Kabupaten: 'Lampung Tengah',
      Tahun_Berdiri: '2005',
    },
    {
      X: '105.1650031',
      Y: '-4.9436422',
      Name: 'KAMPUS UT SEPUTIH AGUNG LAMTENG',
      Alamat:
        'Pergunu Al Falah Rumbia Jl Minak Brajo Kutan Teluk Dalem Ilir Kec Rumbia Kab Lampung Tengah, Lampung.',
      Deskripsi:
        'Universitas Terbuka (UT) merupakan perguruan tinggi negeri yang memberikan layanan pendidikan tinggi dengan sistem belajar jarak jauh. Proses layanan “administrasi akademik dan pembelajaran” dimediasi oleh multimedia yang didukung oleh sistem teknologi berbasis Information and Communication Technology (ICT) sehingga dimungkinkan mahasiswa dapat menerima dan melakukan kegiatan akademik dan administrasi akademik tanpa harus datang atau bertatap muka dengan petugas layanan atau dosen.',
      Image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5sSQVh6U4iAf82hNlIeYEjQYG0IrVi5Zz4TbrrtsVw&s',
      Jumlah_Prodi: '50',
      Kabupaten: 'Lampung Tengah',
      Tahun_Berdiri: '1984',
    },
    {
      X: '105.3130608',
      Y: '-4.9798854',
      Name: 'Sekolah Tinggi Ilmu Syariah Darusy Syafa’ah Lampung Tengah',
      Alamat:
        'Jl Jenderal Sudirman RT.012 Rw. 006 Kotasari Kota Gajah Lampung Tengah, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Ilmu Syariah Darusy Syafa’ah (STISDA) Lampung Tengah adalah perguruan tinggi berbasis pesantren. STISDA didirikan oleh Drs. KH Ngaliman Marzuki, M.Pd.I, pengasuh utama Pesantren Darusy Syafa’ah Kotagajah, Kabupaten Lampung Tengah. Izin operasional STISDA diterbitkan berdasarkan Surat Keputusan Direktorat Jenderal Pendidikan Islam (SK Dirjend Pendis): 3379 Tanggal 16 Juni 2017.',
      Image: 'https://i.ytimg.com/vi/qOlrSn35ktA/maxresdefault.jpg',
      Jumlah_Prodi: '2',
      Kabupaten: 'Lampung Tengah',
      Tahun_Berdiri: '2017',
    },
    {
      X: '105.4213325',
      Y: '-4.7527332',
      Name: 'STIT AL MUBAROK BANDAR MATARAM',
      Alamat:
        'Jln. Jenderal Sudirman No. 06, Kotasari I, Kota Gajah, Lampung Tengah, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Ilmu Tarbiyah (STIT) Al Mubarok Bandar Mataram adalah lembaga pendidikan tinggi yang berlokasi di Jln. Jenderal Sudirman No. 06, Kotasari I, Kota Gajah, Lampung Tengah. STIT Al Mubarok didirikan berdasarkan Surat Keputusan Direktorat Jenderal Pendidikan Islam (SK Dirjend Pendis): 3379 Tanggal 16 Juni 2017.',
      Image:
        'https://shine.co.id/wp-content/uploads/2022/12/Sekolah-Tinggi-Ilmu-Tarbiyah-Al-Mubarok-Bandar-Mataram.jpg',
      Jumlah_Prodi: '3',
      Kabupaten: 'Lampung Tengah',
      Tahun_Berdiri: '2017',
    },
    {
      X: '105.2319719',
      Y: '-4.7949149',
      Name: 'STIT NURUL QODIRI',
      Alamat:
        'Jln. Jenderal Sudirman No. 06, Kotasari I, Kota Gajah, Lampung Tengah, Lampung.',
      Deskripsi:
        'STIT Nurul Qodiri adalah lembaga pendidikan tinggi yang menawarkan tiga program studi, yaitu MPI (Manajemen Pendidikan Islam) S.Pd, PGMI (Pendidikan Guru Madrasah Ibtidaiyah) S.Pd, dan PIAUD (Pendidikan Islam Anak Usia Dini) S.Pd. Selain itu, STIT Nurul Qodiri juga berencana untuk membuka program studi Akuntansi dan Ekonomi. Lembaga ini dilengkapi dengan berbagai fasilitas seperti gedung milik sendiri, sarana ibadah, sarana olahraga, kantin, perpustakaan, lab. komputer, lab. IPA, asrama pesantren, sound system, gedung balai latihan kerja komunitas (BLKK), dan UKS.',
      Image:
        'https://www.laduni.id/panel/themes/default/uploads/2LempuyangBdr.jpg',
      Jumlah_Prodi: '3',
      Kabupaten: 'Lampung Tengah',
      Tahun_Berdiri: '2005',
    },
    {
      X: '105.2328896',
      Y: '-5.3583797',
      Name: 'Politeknik Negeri Lampung',
      Alamat:
        'Jl. Soekarno Hatta No.10, Rajabasa Raya, Kec. Rajabasa, Kota Bandar Lampung, Lampung.',
      Deskripsi:
        'Politeknik Negeri Lampung (POLINELA) adalah Perguruan Tinggi Negeri yang menyelenggarakan pendidikan vokasi di Provinsi Lampung untuk menciptakan lulusan ahli madya dan sarjana terapan berjiwa disiplin, mandiri dan profesional di Indonesia. Politeknik Negeri Lampung berdiri pada tanggal 7 April 1984.',
      Image:
        'https://lampung.rilis.id/image/static/2021/06/08/20210608064916IMG_20210608_184729.jpg',
      Jumlah_Prodi: '58',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '1984',
    },
    {
      X: '105.2451878',
      Y: '-5.4198484',
      Name: 'STKIP PGRI Bandar Lampung',
      Alamat: 'Jl. Khairil Anwar No. 79 Palapa, Bandar Lampung, Lampung.',
      Deskripsi:
        'STKIP PGRI Bandar Lampung adalah perguruan tinggi yang berfokus pada bidang pendidikan. Lembaga ini menawarkan berbagai program studi seperti Matematika, Bahasa Inggris, Sejarah, Ekonomi, PGSD, S2 Bahasa Indonesia, dan Bimbingan dan Konseling S1. STKIP PGRI Bandar Lampung berkomitmen untuk mencetak guru yang profesional dan menjadi generasi penerus bangsa yang baik.',
      Image:
        'https://stkippgribl.ac.id/wp-content/uploads/2022/03/SDS07151-copy-scaled.jpg',
      Jumlah_Prodi: '7',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '1982',
    },
    {
      X: '105.3036449',
      Y: '-5.3834784',
      Name: 'Universitas Islam Negeri Raden Intan Lampung',
      Alamat:
        'Jl. Letnan Kolonel H Jl. Endro Suratmin, Sukarame, Kec. Sukarame, Bandar Lampung, Lampung.',
      Deskripsi:
        'Universitas Islam Negeri Raden Intan Lampung (UINRIL) adalah perguruan tinggi keagamaan Islam yang berlokasi di Sukarame, Bandar Lampung. UINRIL memiliki visi “Intellectuality, Spirituality, Integrity” dan berkomitmen untuk mencetak generasi penerus bangsa yang baik. UINRIL juga memiliki berbagai fasilitas seperti masjid, gedung pusat akademik & riset, laboratorium terpadu, pesantren mahasiswa (Ma’had), perpustakaan pusat & fakultas, poliklinik kesehatan, lingkungan asri & nyaman, free internet hotspot area, sarana olahraga modern, sarana transportasi bebas emisi, dan kantin/foodcourt.',
      Image:
        'https://asset-2.tstatic.net/lampung/foto/bank/images/uin-radin-inten-lampung2.jpg',
      Jumlah_Prodi: '46',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '2017',
    },
    {
      X: '105.2360201',
      Y: '-5.3706861',
      Name: 'Universitas Satu Nusa Lampung',
      Alamat:
        'Jl Zainal Abidin Pagar Alam No 17A Rajabasa, Bandar Lampung, Lampung.',
      Deskripsi:
        'Universitas Satu Nusa (USN) Lampung adalah perguruan tinggi swasta (PTS) dibawah naungan Yayasan Pendidikan Satu Nusa (YPSN) Lampung. Yayasan ini didirikan pada 1 Agustus 1986 oleh H. Ismet Inonu, S.E,.M.M. dan Hj. Rita Herlina, S.Sos., M.M. bermula dari pembukaan Lembaga Kursus Bahasa Inggris yang bernama Supreme Collage yang berubah menjadi Lembaga Pendidikan Satu Nusa. Selanjutnya atas persetujuan Depatemen Pendidikan dan Kebudayaan (Depdikbud) Republik Indonesia pada tahun 1990 YPSN Lampung mendirikan sekolah menengah swasta (SMEA, SMIP dan STM) dengan  program studi akuntansi, perhotelan, perjalanan wisata, dan teknik mesin (saat ini SMK Satu Nusa 1, 2, dan 3). Dengan perjuangan tiada henti pada tahun 1999 para pendiri YPSN Lampung akhirnya mendirikan sebuah Sekolah Tinggi Ilmu Ekonomi (STIE) Satu Nusa dan Akademi Pariwisata Satu Nusa (AKPARSAN) dan menerima alih kelola beberapa sekolah tinggi yakni Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Tunas Bangsa, Sekolah Tinggi Bahasa Asing (STBA) Yunisla dan Sekolah Tinggi Perkenunan (STIBUN) Lampung. Tidak berhenti sampai disitu dalam upaya meningkatkan kualitas pendidikan serta mengikuti pertumbuhan dan perkembangan Ilmu Pengetahuan dan Teknologi (IPTEK), dengan penuh jerih payah, suka dan duka, pada akhirnya tahun 2022 didirikanlah Universitas Satu Nusa Lampung. Kampus swasta yang disingkat USN Lampung ini berdiri pada 4 April 2022 yang tertuang pada surat keputusan Menteri Pendidikan, Kebudayaan,  Riset, dan Teknologi nomor: 245/E/O/2022.',
      Image:
        'https://shine.co.id/wp-content/uploads/2022/12/ff95f88d-db62-457f-9a82-321845972274.jpeg',
      Jumlah_Prodi: '6',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '1986',
    },
    {
      X: '105.2578159',
      Y: '-5.382384',
      Name: 'Universitas Teknokrat Indonesia',
      Alamat:
        'Jl. ZA. Pagar Alam No.9 -11, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung, Lampung.',
      Deskripsi:
        'Lembaga Pendidikan Teknokrat yang ditunjuk sebagai model percontohan Program Pendidikan Sistem Ganda (link and match) tingkat nasional, didirikan pada tanggal 19 Februari 1986 dengan nama “Kursus dan Pembinaan Teknokrat” dengan izin dari Departemen Pendidikan. dan Kebudayaan (Depdiknas) Provinsi Lampung. UTI bertujuan menjadi universitas terkemuka dan bereputasi internasional yang berkontribusi terhadap pembangunan nasional dan global melalui pendidikan, penelitian, dan tanggung jawab sosial yang berkualitas.',
      Image:
        'https://radarlampung.disway.id/upload/35599ab90f9dbb9c77bfee4adfd73b5e.jpg',
      Jumlah_Prodi: '15',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '1986',
    },
    {
      X: '105.245803',
      Y: '-5.3774589',
      Name: 'STIE Gentiaras',
      Alamat: 'Jl Purnawirawan No 14 Gedong Meneng Bandar Lampung, Lampung.',
      Deskripsi:
        'Gentiaras, sebagai Perguruan Tinggi Swasta Katolik, hendaknya setia dan loyal melaksanakan tugas pewartaan kabar gembira melalui keunggulan misi-nya yang diwujudkan melalui pembinaan manusia secara utuh. Bukan saja intelektual melainkan juga pengembangan bakat-bakat fisik, psikis, emosional, moral, spiritual, dan budaya secara harmonis.',
      Image:
        'https://lh3.googleusercontent.com/p/AF1QipMN9TW4-CQd0zTeMuqO0f0ufTqqbkzjjIpT07sW=s680-w680-h510',
      Jumlah_Prodi: '2',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '2000',
    },
    {
      X: '105.256711',
      Y: '-5.3788758',
      Name: 'Politeknik Gajah Sakti',
      Alamat:
        'Jl. Jendral Sudirman No.14/4, Ganjarasri, Kec. Metro Bar., Kota Metro, Lampung.',
      Deskripsi:
        'Politeknik Gajah Sakti, Lampung adalah Perguruan Tinggi Swasta yang berada di Kota Metro, Lampung. Politeknik Gajah Sakti didirikan pada 2 Oktober 2007. Politeknik Gajah Sakti menyelenggarakan pendidikan dan pengajaran, penelitian dan pengabdian kepada masyarakat dalam bidang tenaga trampil yang responsif terhadap perkembangan dan teknologi. Melakukan penelitian dibidang teknik sipil, otomotif, elektro dan mesin. Melakukan pengabdian masyarakat dibidang teknik sipil, otomotif, elektro dan mesin. Menghasilkan ahli madya teknik sipil,elektro,otomotif dan mesin yang profesional dalam bidang teknologi berdasarkan IPTEK dan IMTAQ. Mengadakan kerjasama dengan pihak eksternal.',
      Image: 'https://www.datadikti.com/images/uploads/025008/025008.png',
      Jumlah_Prodi: '4',
      Kabupaten: 'Metro',
      Tahun_Berdiri: '2007',
    },
    {
      X: '105.2681201',
      Y: '-5.3687043',
      Name: 'Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Dharma Wacana',
      Alamat:
        'Jalan Kenanga No 3 Kelurahan Mulyojati 16-C, Kota Metro, Lampung.',
      Deskripsi:
        'STISIPOL Dharma Wacana adalah sebuah institusi pendidikan yang berlokasi di Metro, Provinsi Lampung. STISIPOL Dharma Wacana juga menerbitkan jurnal ilmiah yang dikelola oleh Pusat Penelitian dan Pengabdian pada Masyarakat STISIPOL Dharma Wacana. Jurnal ini bernama “Wacana Publik” dan terbit dua kali dalam setahun, yaitu pada bulan Juni dan Desember.',
      Image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1z-bIYWjacUfeSQx7WV_23u-_fT5F51HRBskB6FBsbQxVS8nmaiy4IIJcRSKUR2lMvJbh46lJlT83PNa4GcDlS9PIW474PF74ep7SsyKduCIx_EqydIpN3tVtG0kGVe9V2h3DgbcdFK-ZZuv43Ulvru9CaFn1AydXmR5Yct4flrt0UUu3_hm-Jqfsxg/s768/IMG-20220330-WA0640.jpg',
      Jumlah_Prodi: '1',
      Kabupaten: 'Metro',
      Tahun_Berdiri: '1980',
    },
    {
      X: '105.233107',
      Y: '-5.359479',
      Name: 'Sekolah Tinggi Ilmu Kesehatan Adila',
      Alamat:
        'Jl. Soekarno Hatta No.110, Rajabasa, Kec. Rajabasa, Kota Bandar Lampung, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Ilmu Kesehatan Adila (Stikes Adila) adalah perguruan tinggi yang bergerak pada bidang kesehatan yang bertempat di Rajabasa, Bandar Lampung. Stikes adila berusaha menjunjung nilai kesehatan dan menciptakan lulusan yang berkualitas dengan visi menjadi Sekolah Tinggi Ilmu Kesehatan Yang Menghasilkan Tenaga Kesehatan Yang Unggul dan Berkarakter di Tingkat Nasional Pada Tahun 2024',
      Image:
        'https://shine.co.id/wp-content/uploads/2022/12/Sekolah-Tinggi-Ilmu-Kesehatan-Adila-Bandar-Lampung.jpg',
      Jumlah_Prodi: '3',
      Kabupaten: 'Bandar Lampung',
      Tahun_Berdiri: '2018',
    },
    {
      X: '104.9481611',
      Y: '-4.8662386',
      Name: 'Sekolah Tinggi Agama Islam Nahdlatul Ulama Kotabumi Lampung',
      Alamat:
        'Jl. Lintas Sumatera No.184, Kembang Tj., Kec. Abung Sel., Kabupaten Lampung Utara, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Agama Islam Nahdlatul Ulama Kotabumi Lampung (STAINU Kotabumi Lampung) merupakan perguruan tinggi keagamaan islam swasta binaan Nahdlatul Ulama yang berdiri pada tahun 2009, dan pada tahun 2012, STAINU Kotabumi mendapatkan izin operasional dari Derektorat Jendral Pendidikan Islam Kementrian Agama RI dengan: SK Dijend No.Dj.I/149/2012.',
      Image: 'https://storage.nu.or.id/storage/post/1_1/mid/1601079683.jpg',
      Jumlah_Prodi: '3',
      Kabupaten: 'Lampung Utara',
      Tahun_Berdiri: '2012',
    },
    {
      X: '104.8830655',
      Y: '-4.8383731',
      Name: 'Sekolah Tinggi Agama Islam Ibnu Rusyd Kotabumi',
      Alamat:
        'Jl. Masjid Al-Falah No.768, Tj. Aman, Kec. Kotabumi Sel., Kabupaten Lampung Utara, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Agama Islam (STAI) Ibnu Rusyd kotabumi lampung utara menjadi perguruan tinggi islam yang profesional dan menjadi kebanggaan masyarakat lampung utara dalam upaya transformasi dan pengembangan ilmu pengetahuan, teknologi dan seni didasari pendidikan yang berdasarkan islam.',
      Image:
        'https://pr0.nicelocal.id/VrLEjse6kcIFdY8cipLMBg/587x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2StNpSybWr-NWybmf1z3PPh48JtuOsys0cXv_SCo7tZKupTwjZcDvPmPd27Xi3IBXA',
      Jumlah_Prodi: '5',
      Kabupaten: 'Lampung Utara',
      Tahun_Berdiri: '2012',
    },
    {
      X: '104.8791244',
      Y: '-4.822077',
      Name: 'STMIK Surya Intan',
      Alamat:
        'Jl. Ibrahim Syarif No.107, Cempedak, Kec. Kotabumi, Kabupaten Lampung Utara, Lampung.',
      Deskripsi:
        'Sekolah Tinggi Manajemen Informatika dan Komputer Surya Intan yang berkedudukan di Kotabumi didirikan pada tanggal 10 Juli 2000 oleh Yayasan Pucak Surya Intan. Berdasarkan Surat Keputusan Mentri Pendidikan dan Kebudayaan Republik Indonesia Nomor 1671D10/2000 tentang setatus terdaptar Sekolah Tinggi Manajemen Informatika dan Komputer. Sekolah Tinggi Manajemen Informatika dan Komputer Surya Intan memiliki program pendidikan Strata1(satu),program pendidikan Diploma3(tiga), program pendidikan Diploma1(satu).',
      Image:
        'https://radarkotabumi.co.id/read/wp-content/uploads/2023/01/IMG-20230127-WA0046.jpg',
      Jumlah_Prodi: '3',
      Kabupaten: 'Lampung Utara',
      Tahun_Berdiri: '2000',
    },
    {
      X: '104.8716728',
      Y: '-4.8132714',
      Name: 'Universitas Muhammadiyah Kotabumi',
      Alamat:
        'Jln. Hasan Kepala Ratu No. 1052 Sindangsari Kotabumi, Lampung Utara, Lampung.',
      Deskripsi:
        'Universitas Muhammadiyah Kotabumi (UMKO) adalah perguruan tinggi penggabungan STKIP dan STIH Muhammadiyah Kotabumi. Izin penggabungan menjadi Universitas Muhammadiyah Kotabumi ditandai dengan dikeluarkannya SK/Izin Penggabungan No. 477/KPT/I/2019 oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi.',
      Image:
        'https://www.umko.ac.id/wp-content/uploads/2023/06/Rektorat-e1687490286997.jpg',
      Jumlah_Prodi: '13',
      Kabupaten: 'Lampung Utara',
      Tahun_Berdiri: '2019',
    },
  ];

  const data = rawData.map((item) => {
    return {
      X: +item.X,
      Y: +item.Y,
      Name: item.Name,
      Alamat: item.Alamat,
      Deskripsi: item.Deskripsi,
      Image: item.Image,
      Jumlah_Prodi: +item.Jumlah_Prodi,
      Kabupaten: item.Kabupaten,
      Tahun_Berdiri: +item.Tahun_Berdiri,
    };
  });

  const createdData = await prisma.perguruan_Tinggi.createMany({
    data,
  });

  console.log({ createdData });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
