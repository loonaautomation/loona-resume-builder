/* Loona Resume Builder — sample resumes (fictional people, for the
 * resume-templates pages). Loaded by resume-builder/?sample=<slug>.
 * Every sample is clearly labelled SAMPLE on its page. */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  if (root) { root.ResumeSamples = api; }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  return {
  "registered-nurses": {
    "contact": {
      "name": "Maria Santos",
      "title": "Perawat Terdaftar",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Perawat terdaftar dengan pengalaman 6 tahun di unit medis-bedah dan telemetri. Terampil dalam pengkajian pasien, terapi IV, pemberian obat, dan rekam medis elektronik. Dikenal karena komunikasi yang tenang dan jelas dengan pasien dan keluarga selama situasi bertekanan tinggi.",
    "experience": [
      {
        "role": "Perawat Terdaftar",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Merawat 5-6 pasien per shift di unit medis-bedah berkapasitas 32 tempat tidur, termasuk penilaian, pemberian obat, dan perawatan luka\nMelatih dan membimbing 4 perawat lulusan baru, memangkas waktu orientasi mereka sebesar 2 minggu\nMengurangi kesalahan pengobatan di unit sebesar 18% dengan memperkenalkan rutinitas pemeriksaan ganda saat serah terima\nMendokumentasikan semua perawatan secara akurat di rekam kesehatan elektronik Epic"
      },
      {
        "role": "Perawat Staf",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Agu 2019",
        "end": "Mei 2021",
        "current": false,
        "points": "Menjalankan triase untuk 40+ pasien datang langsung per hari, memprioritaskan kasus mendesak untuk perawatan di hari yang sama\nMemberikan vaksinasi dan pemeriksaan kesehatan pada acara penjangkauan komunitas bulanan\nMengkoordinasikan rujukan ke spesialis dan menindaklanjuti hasil pengujian"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Keperawatan",
        "start": "2015",
        "end": "2019",
        "notes": "Lisensi Perawat Terdaftar (Texas). Bersertifikat BLS dan ACLS."
      }
    ],
    "skills": "Penilaian pasien\nTerapi IV dan pemberian obat\nRekam kesehatan elektronik (Epic)\nPemantauan telemetri\nEdukasi pasien dan keluarga\nPengendalian infeksi",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (percakapan)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Pengembang Perangkat Lunak",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Pengembang perangkat lunak dengan pengalaman 5 tahun membangun aplikasi web dalam Python dan JavaScript. Merilis fitur yang digunakan oleh 200,000+ pengguna, memangkas waktu respons API sebesar 40%, dan memimpin migrasi monolit ke microservices. Kuat dalam pengujian, peninjauan kode, dan dokumentasi yang jelas.",
    "experience": [
      {
        "role": "Pengembang Perangkat Lunak",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Membangun dan memelihara fitur web yang menghadap pelanggan dalam Python (Django) dan React, melayani 200,000+ pengguna\nMemangkas waktu respons API rata-rata dari 850 ms menjadi 500 ms dengan menambahkan caching dan memperbaiki kueri yang lambat\nMemimpin migrasi layanan penagihan ke microservices tanpa waktu henti\nMeninjau 10+ pull request per minggu dan membimbing 2 pengembang junior"
      },
      {
        "role": "Pengembang Junior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Membangun dasbor internal dalam JavaScript yang menggantikan spreadsheet manual untuk 3 tim\nMenulis pengujian otomatis yang meningkatkan cakupan dari 45% menjadi 78%\nMemperbaiki 120+ bug di seluruh produk pada tahun pertama"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Ilmu Komputer",
        "start": "2016",
        "end": "2020",
        "notes": "Mata kuliah basis data, algoritme, dan sistem operasi."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript dan React\nPostgreSQL dan Redis\nREST API dan microservices\nGit dan CI/CD\nPengujian otomatis (pytest, Jest)",
    "languages": "Bahasa Inggris (fasih)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Guru Sekolah Dasar",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Guru sekolah dasar dengan pengalaman 7 tahun mengajar kelas 3-5. Terampil dalam pengajaran terdiferensiasi, manajemen kelas, dan komunikasi dengan orang tua. Meningkatkan kemampuan membaca di kelas saya dari 58% menjadi 81% selama dua tahun ajaran.",
    "experience": [
      {
        "role": "Guru Sekolah Dasar (Kelas 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Agu 2020",
        "end": "",
        "current": true,
        "points": "Mengajar membaca, matematika, dan sains kepada kelas berisi 26 siswa, termasuk 5 siswa dengan rencana pembelajaran individual\nMeningkatkan kecakapan membaca kelas dari 58% menjadi 81% dalam dua tahun melalui kelompok membaca terbimbing\nMenjalankan buletin orang tua mingguan dan pertemuan kemajuan per semester untuk setiap keluarga\nMemimpin klub membaca sekolah untuk 40 siswa di kelas 3-5"
      },
      {
        "role": "Guru Sekolah Dasar (Kelas 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Agu 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Merencanakan dan menyampaikan pelajaran harian untuk 24 siswa di semua mata pelajaran inti\nMemperkenalkan rutinitas perilaku yang memangkas gangguan kelas hingga setengahnya\nMengorganisasi pameran sains tingkat angkatan dengan 120 siswa dan 80 orang tua"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Pendidikan Dasar",
        "start": "2014",
        "end": "2018",
        "notes": "Lisensi mengajar negara bagian (Ohio, kelas K-5). Pengesahan membaca."
      }
    ],
    "skills": "Pengajaran terdiferensiasi\nManajemen kelas\nKelompok membaca terbimbing\nKomunikasi orang tua\nPerencanaan pelajaran\nGoogle Classroom",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Akuntan Senior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA dengan pengalaman 8 tahun dalam penutupan akhir bulan, pelaporan keuangan, dan audit internal. Menutup pembukuan 3 hari lebih cepat dengan membangun ulang proses rekonsiliasi dan menemukan $240,000 kelebihan pembayaran yang dapat dipulihkan dalam satu tahun audit. Kuat dalam Excel, QuickBooks, dan sistem ERP.",
    "experience": [
      {
        "role": "Akuntan Senior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Memiliki penutupan akhir bulan untuk unit bisnis $40M, selesai 3 hari lebih cepat setelah membangun ulang rekonsiliasi\nMenyiapkan laporan keuangan bulanan dan laporan varians untuk manajemen senior\nMenemukan $240,000 kelebihan pembayaran pemasok yang dapat ditagih kembali selama audit internal 2024\nMengawasi 2 akuntan staf dan meninjau entri jurnal mereka"
      },
      {
        "role": "Akuntan Staf",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Des 2020",
        "current": false,
        "points": "Menyiapkan pengembalian pajak dan laporan keuangan untuk 25 klien usaha kecil\nMembantu audit 8 klien, menguji pengendalian dan mendokumentasikan temuan\nMengotomatiskan daftar aset tetap di Excel, menghemat 6 jam per bulan"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Akuntansi",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Anggota AICPA."
      }
    ],
    "skills": "Penutupan akhir bulan dan rekonsiliasi\nPelaporan keuangan dan analisis varians\nAudit internal\nExcel (tabel pivot, VLOOKUP)\nQuickBooks dan SAP\nPersiapan pajak",
    "languages": "Bahasa Inggris (fasih)\nBahasa Mandarin (percakapan)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Pengemudi Truk CDL Kelas A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Pengemudi CDL Kelas A dengan pengalaman 9 tahun dalam angkutan jarak jauh dan regional. Lebih dari 900,000 mil tanpa kecelakaan, tingkat pengiriman tepat waktu 99%, dan pengalaman dengan muatan berpendingin, bak datar, dan boks kering. Catatan mengemudi bersih, dengan pengesahan HazMat dan tangki.",
    "experience": [
      {
        "role": "Pengemudi Truk Jarak Jauh",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Mengemudi 2,800+ mil per minggu pada rute regional di Texas, Oklahoma, dan New Mexico\nMenjaga tingkat pengiriman tepat waktu 99% pada 1,100+ muatan per tahun\nMengangkut kargo berpendingin dan dry-van; menyelesaikan pemeriksaan sebelum dan sesudah perjalanan setiap hari\nTotal lebih dari 900,000 mil bebas kecelakaan"
      },
      {
        "role": "Pengemudi Truk Pengiriman",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mar 2016",
        "end": "Mar 2019",
        "current": false,
        "points": "Mengantarkan bahan bangunan ke 15-20 lokasi kerja per hari di wilayah Dallas-Fort Worth\nMengoperasikan forklift dan mengamankan muatan flatbed sesuai standar DOT\nMenjaga dokumen pengiriman dan catatan tetap akurat dengan nol pelanggaran DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Sertifikat",
        "field": "Mengemudi Komersial (CDL Kelas A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Kelas A dengan pengesahan HazMat dan tangki. Catatan mengemudi bersih."
      }
    ],
    "skills": "Mengemudi jarak jauh dan regional\nMuatan berpendingin dan flatbed\nPeraturan DOT dan buku catatan\nPemeriksaan sebelum perjalanan\nPerencanaan rute (GPS, ELD)\nPengoperasian forklift",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Staf Penjualan Ritel",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Staf penjualan ritel dengan pengalaman 4 tahun di toko elektronik dan pakaian. Secara konsisten masuk 3 penjual teratas dalam tim, dengan tingkat penjualan tambahan 32% pada garansi dan aksesori. Ramah, cepat di kasir, dan dipercaya untuk membuka dan menutup toko.",
    "experience": [
      {
        "role": "Staf Penjualan Senior",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Menjual elektronik dan aksesori kepada 60+ pelanggan per hari; 3 teratas dalam penjualan toko selama 8 kuartal berturut-turut\nMencapai tingkat lampiran 32% pada garansi dan aksesori, tertinggi di tim\nMelatih 6 karyawan baru tentang kasir, gudang stok, dan standar layanan pelanggan\nPemegang kunci tepercaya: membuka dan menutup toko serta menangani penghitungan uang tunai"
      },
      {
        "role": "Staf Penjualan",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Membantu pelanggan memilih pakaian dan ukuran di lantai toko yang ramai\nMenjaga pajangan tetap rapi dan mengisi ulang rak selama setiap shift\nMenangani pengembalian dan penukaran dengan sopan, menjaga keluhan seminimal mungkin"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate Degree",
        "field": "Bisnis",
        "start": "2019",
        "end": "2021",
        "notes": "Belajar paruh waktu sambil bekerja di ritel."
      }
    ],
    "skills": "Layanan pelanggan dan penjualan tambahan\nPenanganan uang tunai dan sistem POS\nPengetahuan produk (elektronik)\nManajemen stok\nPembukaan dan penutupan toko\nPelatihan tim",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (fasih)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Perwakilan Layanan Pelanggan",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Perwakilan layanan pelanggan dengan pengalaman 5 tahun menangani dukungan melalui telepon, email, dan obrolan langsung. Menyelesaikan 45+ kasus per hari dengan skor kepuasan 96% dan tingkat penyelesaian pada kontak pertama 88%. Tenang menghadapi pelanggan yang marah dan cepat menemukan solusinya.",
    "experience": [
      {
        "role": "Perwakilan Layanan Pelanggan",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "Mei 2021",
        "end": "",
        "current": true,
        "points": "Menangani 45+ kasus telepon, email, dan chat per hari untuk penagihan, pesanan, dan gangguan teknis\nMenjaga skor kepuasan pelanggan 96% dan tingkat penyelesaian kontak pertama 88%\nMeredakan panggilan yang sulit dan mengubah keluhan menjadi bisnis berulang\nMelatih 5 agen baru tentang naskah, sistem, dan nada bicara"
      },
      {
        "role": "Agen Dukungan",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "Menjawab email dan chat pelanggan tentang pesanan, pengembalian, dan pengembalian dana\nMenjaga waktu respons pertama rata-rata di bawah 2 jam\nMenulis 20 artikel pusat bantuan yang memangkas pertanyaan berulang hingga seperempat"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate Degree",
        "field": "Administrasi Bisnis",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Dukungan telepon, email, dan live chat\nPenanganan keluhan dan de-escalasi\nSistem CRM (Zendesk, Salesforce)\nPertanyaan penagihan dan pesanan\nMengetik 55 kpm\nPelatihan tim",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Manajer Operasional",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Manajer operasional dengan pengalaman 12 tahun mengelola tim hingga 80 orang di pergudangan dan distribusi. Memangkas biaya pemrosesan pesanan sebesar 22%, meningkatkan pengiriman tepat waktu dari 91% menjadi 98%, dan membuka dua lokasi baru tepat waktu dan di bawah anggaran.",
    "experience": [
      {
        "role": "Manajer Operasional",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Menjalankan pusat distribusi seluas 120,000 kaki persegi dengan 80 staf dalam 3 shift\nMemangkas biaya pemrosesan pesanan sebesar 22% dengan merancang ulang jalur pengambilan dan pola shift\nMeningkatkan pengiriman tepat waktu dari 91% menjadi 98% dalam 18 bulan\nMembuka 2 lokasi baru tepat waktu dan 8% di bawah anggaran"
      },
      {
        "role": "Pengawas Gudang",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Mengawasi 25 staf gudang dan pengiriman harian 4,000+ pesanan\nMemperkenalkan pemindaian barcode, memangkas kesalahan pengambilan sebesar 35%\nMenjalankan pelatihan keselamatan yang menjaga lokasi bebas kecelakaan selama 3 tahun"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Manajemen Operasional",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Kepemimpinan tim (hingga 80 staf)\nPergudangan dan distribusi\nPeningkatan proses\nPenganggaran dan pengendalian biaya\nManajemen keselamatan\nSistem ERP dan WMS",
    "languages": "Bahasa Inggris (fasih)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Teknisi Listrik Berlisensi",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Teknisi listrik terampil berlisensi dengan pengalaman 8 tahun dalam pekerjaan residensial dan komersial. Terampil dalam pemasangan kabel, peningkatan panel, pencahayaan, dan pencarian kerusakan, dengan catatan keselamatan yang bersih di 400+ pekerjaan. Pengetahuan kode NEC dan pengalaman mengawasi peserta magang.",
    "experience": [
      {
        "role": "Teknisi Listrik Terampil",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mar 2019",
        "end": "",
        "current": true,
        "points": "Menyelesaikan 400+ pekerjaan residensial dan komersial: pemasangan kabel, peningkatan panel, pencahayaan, dan pengisi daya EV\nMendiagnosis dan memperbaiki gangguan dengan cepat, dengan tingkat perbaikan kunjungan pertama 92%\nMengawasi 2 peserta magang dan mengesahkan pekerjaan mereka sesuai peraturan\nMenjaga catatan keselamatan yang bersih dengan nol cedera yang menyebabkan kehilangan waktu kerja"
      },
      {
        "role": "Magang Teknisi Listrik",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Membantu teknisi listrik berlisensi pada pemasangan kabel bangunan baru dan pemasangan ulang\nMempelajari pembengkokan konduit, penarikan kabel, dan pemasangan panel\nMenyelesaikan 8,000 jam magang dan lulus ujian pekerja terampil pada percobaan pertama"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Sertifikat",
        "field": "Teknologi Elektro",
        "start": "2015",
        "end": "2016",
        "notes": "Lisensi teknisi listrik terampil (Colorado). Bersertifikat OSHA 30."
      }
    ],
    "skills": "Pemasangan kabel residensial dan komersial\nPeningkatan panel dan pengisi daya EV\nPencarian gangguan dan pengujian\nKepatuhan peraturan NEC\nPembengkokan konduit dan penarikan kabel\nPengawasan peserta magang",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analis Keuangan",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analis keuangan dengan pengalaman 6 tahun dalam penganggaran, prakiraan, dan analisis investasi. Membangun model prakiraan yang memangkas varians anggaran sebesar 30% dan mendukung keputusan investasi senilai $50M. Kuat dalam Excel, SQL, dan pemodelan keuangan.",
    "experience": [
      {
        "role": "Analis Keuangan",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Membangun prakiraan bulanan dan anggaran tahunan untuk portofolio $120M\nMemangkas varians anggaran sebesar 30% dengan model prakiraan berbasis pendorong\nMendukung keputusan investasi senilai $50M dengan penilaian dan analisis skenario\nMempresentasikan temuan setiap bulan kepada CFO dan kepala departemen"
      },
      {
        "role": "Analis Keuangan Junior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Menyiapkan laporan kinerja mingguan untuk 12 cabang\nMengotomatiskan pelaporan di Excel, menghemat 10 jam per minggu\nMembantu tim kredit dengan analisis portofolio pinjaman"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Keuangan",
        "start": "2015",
        "end": "2019",
        "notes": "Kandidat CFA Level II. Mata kuliah penilaian dan keuangan perusahaan."
      }
    ],
    "skills": "Pemodelan dan prakiraan keuangan\nPenganggaran dan analisis varians\nPenilaian (DCF, pembanding)\nExcel (lanjutan) dan SQL\nBloomberg Terminal\nVisualisasi data (Power BI)",
    "languages": "Bahasa Inggris (fasih)\nHindi (fasih)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Insinyur Sipil",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Insinyur sipil (PE) dengan pengalaman 7 tahun dalam desain infrastruktur jalan dan air. Memimpin desain pelebaran jalan raya sepanjang 12 mil dan sistem air hujan yang melayani 8,000 rumah. Terampil dalam AutoCAD Civil 3D, estimasi biaya, dan koordinasi perizinan.",
    "experience": [
      {
        "role": "Insinyur Sipil",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Memimpin desain pelebaran jalan raya sepanjang 12 mil, dari survei hingga dokumen konstruksi\nMerancang sistem air hujan yang melayani 8,000 rumah, disetujui kota pada percobaan pertama\nMengkoordinasikan perizinan dengan 4 lembaga dan mengelola anggaran desain $2.5M\nMeninjau dan mengesahkan gambar sebagai Insinyur Profesional berlisensi"
      },
      {
        "role": "Insinyur Sipil Junior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Des 2020",
        "current": false,
        "points": "Menyiapkan rencana perataan tanah dan drainase untuk 20+ pengembangan residensial\nMenjalankan perkiraan biaya dan perhitungan kuantitas untuk proyek jalan\nMenghadiri inspeksi lokasi dan menulis laporan kemajuan"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Teknik Sipil",
        "start": "2014",
        "end": "2018",
        "notes": "Lisensi Professional Engineer (Washington). Lulus EIT pada 2018."
      }
    ],
    "skills": "Desain jalan dan drainase\nAutoCAD Civil 3D\nPemodelan air hujan\nPerkiraan biaya\nKoordinasi perizinan\nPenjadwalan proyek (MS Project)",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Insinyur Mesin",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Insinyur mesin dengan pengalaman 6 tahun merancang sistem HVAC dan peralatan produksi. Memangkas penggunaan energi sebesar 18% di 3 pabrik dengan saluran udara dan pengendalian yang didesain ulang, serta memimpin desain ulang mesin yang meningkatkan output sebesar 25%. Terampil dalam SolidWorks, FEA, dan analisis termal.",
    "experience": [
      {
        "role": "Insinyur Mesin",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Merancang HVAC dan peralatan produksi untuk 3 pabrik dengan 400+ staf\nMemangkas penggunaan energi sebesar 18% dengan merancang ulang saluran udara dan urutan pengendalian\nMemimpin perancangan ulang mesin yang meningkatkan output sebesar 25% tanpa ruang lantai tambahan\nMenjalankan FEA dan analisis termal pada komponen baru sebelum pembuatan prototipe"
      },
      {
        "role": "Insinyur Mesin Junior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Agu 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Memodelkan komponen dan rakitan di SolidWorks untuk klien otomotif\nMenyiapkan gambar, daftar bahan, dan laporan pengujian\nMendukung pembangunan prototipe dan menyelesaikan masalah kecocokan di lantai produksi"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Teknik Mesin",
        "start": "2015",
        "end": "2019",
        "notes": "Mata kuliah termodinamika, mekanika fluida, dan desain mesin."
      }
    ],
    "skills": "Desain HVAC\nSolidWorks dan AutoCAD\nFEA dan analisis termal\nDesain mesin\nEfisiensi energi\nGD&T dan toleransi",
    "languages": "Bahasa Inggris (fasih)\nBahasa Korea (percakapan)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Insinyur Elektro",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Insinyur elektro dengan pengalaman 6 tahun dalam sistem tertanam dan elektronika daya. Merancang papan kendali yang kini digunakan pada 50,000+ perangkat dan memangkas biaya papan sebesar 22% melalui desain ulang komponen. Terampil dalam Altium, C, pengujian firmware, dan kepatuhan EMC.",
    "experience": [
      {
        "role": "Insinyur Elektro",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Merancang papan kendali tertanam yang digunakan pada 50,000+ perangkat per tahun\nMemangkas biaya papan sebesar 22% dengan merancang ulang tahap daya dan mencari alternatif\nMemimpin pengujian kepatuhan EMC, lulus pada percobaan pertama untuk 4 lini produk\nMenulis dan meninjau firmware dalam C untuk mikrokontroler"
      },
      {
        "role": "Insinyur Elektro Junior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Menata PCB di Altium untuk klien konsumen dan industri\nMembangun dan menguji prototipe, men-debug gangguan perangkat keras\nMenulis prosedur pengujian yang memangkas waktu pengujian produksi sebesar 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Teknik Elektro",
        "start": "2015",
        "end": "2019",
        "notes": "Mata kuliah sistem tertanam, elektronika daya, dan pemrosesan sinyal."
      }
    ],
    "skills": "Sistem tertanam dan desain PCB\nAltium Designer\nC dan firmware\nElektronika daya\nPengujian kepatuhan EMC\nOsiloskop dan instrumen laboratorium",
    "languages": "Bahasa Inggris (fasih)\nGujarati (percakapan)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analis Data",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analis data dengan pengalaman 4 tahun mengubah data penjualan dan operasional menjadi keputusan. Membangun dasbor yang digunakan oleh 60+ manajer, memangkas waktu pelaporan bulanan dari 3 hari menjadi 4 jam, dan menemukan kesalahan harga senilai $180,000 per tahun. Kuat dalam SQL, Excel, dan Power BI.",
    "experience": [
      {
        "role": "Analis Data",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Membangun dasbor Power BI yang digunakan oleh 60+ manajer toko dan regional\nMemangkas pelaporan bulanan dari 3 hari menjadi 4 jam dengan pipeline SQL otomatis\nMenemukan kesalahan harga senilai $180,000 per tahun dengan mengaudit data promosi\nMempresentasikan temuan setiap bulan kepada tim komersial"
      },
      {
        "role": "Analis Data Junior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Agu 2020",
        "end": "Des 2021",
        "current": false,
        "points": "Membersihkan dan menggabungkan data pengiriman dari 4 sistem menjadi satu tabel pelaporan\nMembangun pelacak Excel yang menggantikan penghitungan manual untuk 2 tim\nMenjawab pertanyaan data ad-hoc untuk manajer operasional setiap hari"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistika",
        "start": "2016",
        "end": "2020",
        "notes": "Mata kuliah regresi, basis data, dan visualisasi data."
      }
    ],
    "skills": "SQL dan pembersihan data\nPower BI dan Tableau\nExcel (lanjutan)\nPython (pandas)\nDesain dasbor\nDasar-dasar pengujian A/B",
    "languages": "Bahasa Inggris (fasih)\nBahasa Vietnam (percakapan)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Ilmuwan Data",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Ilmuwan data dengan pengalaman 5 tahun membangun model pembelajaran mesin untuk e-commerce. Model rekomendasi yang saya rilis meningkatkan pendapatan per kunjungan sebesar 12%, dan model churn kini menandai 80% pelanggan yang berisiko. Kuat dalam Python, SQL, dan penerapan model.",
    "experience": [
      {
        "role": "Ilmuwan Data",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Merilis model rekomendasi yang meningkatkan pendapatan per kunjungan sebesar 12%\nMembangun model churn yang menandai 80% pelanggan berisiko sebulan lebih awal\nMenerapkan model ke produksi dengan pipeline pemantauan dan pelatihan ulang\nMempresentasikan hasil model kepada tim produk dan pemasaran setiap bulan"
      },
      {
        "role": "Ilmuwan Data Junior",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Membangun model prakiraan untuk 3 klien ritel dengan akurasi 90%+\nMembersihkan dan menyiapkan kumpulan data berisi 10M+ baris untuk pemodelan\nMenulis dokumentasi agar klien dapat menjalankan ulang model sendiri"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Ilmu Data",
        "start": "2018",
        "end": "2020",
        "notes": "Tesis tentang sistem rekomendasi. BS di bidang Matematika (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nPembelajaran mesin dan statistika\nSQL dan Spark\nPenerapan model (Docker, AWS)\nPengujian A/B\nVisualisasi data",
    "languages": "Bahasa Inggris (fasih)\nBahasa Arab (fasih)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Pengembang Web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Pengembang web dengan pengalaman 4 tahun membangun situs web yang cepat dan mudah diakses dalam HTML, CSS, dan JavaScript. Membangun ulang checkout sebuah toko yang meningkatkan konversi sebesar 18% dan mengelola 12 situs klien dengan waktu aktif 99.9%. Kuat dalam desain responsif, kinerja, dan dasar-dasar SEO.",
    "experience": [
      {
        "role": "Pengembang Web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Membangun situs web responsif dalam HTML, CSS, JavaScript, dan WordPress untuk 12 klien\nMembangun ulang checkout sebuah toko yang meningkatkan konversi sebesar 18%\nMemangkas waktu muat halaman rata-rata dari 4.2s menjadi 1.8s dengan pengoptimalan gambar dan kode\nMenjaga semua situs klien pada waktu aktif 99.9% dengan pemantauan dan pencadangan"
      },
      {
        "role": "Pengembang Web Junior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Membangun halaman arahan dan memperbaiki bug di 20+ situs usaha kecil\nMempelajari Git, desain responsif, dan SEO dasar pada proyek yang berjalan\nMenjawab email klien dan melakukan pembaruan konten pada hari yang sama"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Ilmu Komputer",
        "start": "2017",
        "end": "2021",
        "notes": "Mata kuliah pengembangan web, basis data, dan interaksi manusia-komputer."
      }
    ],
    "skills": "HTML, CSS, dan JavaScript\nReact dan WordPress\nDesain responsif\nPengoptimalan kecepatan halaman\nGit dan GitHub\nSEO dasar",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (fasih)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Desainer Grafis",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Desainer grafis dengan pengalaman 5 tahun dalam pencitraan merek, kemasan, dan desain media sosial. Membuat identitas merek untuk 25+ bisnis kecil dan desain ulang kemasan yang meningkatkan penjualan di rak sebesar 14%. Terampil dalam Adobe Illustrator, Photoshop, dan Figma.",
    "experience": [
      {
        "role": "Desainer Grafis",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Merancang identitas merek, kemasan, dan kampanye sosial untuk 25+ klien\nPerancangan ulang kemasan untuk merek makanan meningkatkan penjualan di rak sebesar 14%\nMemproduksi 30+ aset sosial per minggu di Instagram, TikTok, dan Facebook\nMempresentasikan konsep kepada klien dan merevisi dengan cepat berdasarkan masukan"
      },
      {
        "role": "Desainer Grafis Junior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Des 2021",
        "current": false,
        "points": "Merancang brosur, menu, dan unggahan sosial untuk restoran dan toko lokal\nMenyiapkan berkas siap cetak dan memeriksa bukti cetak bersama percetakan\nMembangun perpustakaan templat yang memangkas waktu desain hingga sepertiga"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Desain Grafis",
        "start": "2016",
        "end": "2020",
        "notes": "Portofolio dalam pencitraan merek dan desain kemasan."
      }
    ],
    "skills": "Adobe Illustrator dan Photoshop\nFigma\nDesain identitas merek\nDesain kemasan\nDesain media sosial\nProduksi cetak",
    "languages": "Bahasa Inggris (fasih)\nBahasa Korea (percakapan)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Desainer UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Desainer UX dengan pengalaman 5 tahun meneliti pengguna dan merancang produk mobile dan web. Merancang ulang alur orientasi yang memangkas kegagalan sebesar 35% dan menjalankan 40+ pengujian kegunaan. Terampil dalam Figma, riset pengguna, wireframing, dan prototyping.",
    "experience": [
      {
        "role": "Desainer UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Merancang ulang orientasi mobile, memangkas kegagalan sebesar 35% dalam 3 bulan\nMenjalankan 40+ pengujian kegunaan dan wawancara pengguna per tahun\nMembangun wireframe dan prototipe di Figma untuk 2 tim produk\nBekerja setiap hari dengan insinyur dan manajer produk dalam pengiriman"
      },
      {
        "role": "Desainer UX Junior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Agu 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Merancang layar dan alur untuk 5 aplikasi klien\nMenjalankan pengujian kegunaan pertama dan menuliskan temuan untuk klien\nMembangun perpustakaan komponen yang mempercepat serah terima desain"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psikologi",
        "start": "2016",
        "end": "2020",
        "notes": "Sertifikat desain UX (General Assembly, 2020). Mata kuliah dalam interaksi manusia-komputer."
      }
    ],
    "skills": "Riset pengguna dan pengujian kegunaan\nWireframing dan prototyping (Figma)\nArsitektur informasi\nSistem desain\nPemetaan perjalanan\nLokakarya pemangku kepentingan",
    "languages": "Bahasa Inggris (fasih)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Manajer Pemasaran",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Manajer pemasaran dengan pengalaman 8 tahun dalam kampanye B2B dan konsumen. Menumbuhkan prospek berkualitas sebesar 60% dalam satu tahun, meluncurkan lini produk yang mencapai penjualan tahun pertama $3M, dan mengelola anggaran tahunan $500,000 untuk tim berisi 5 orang.",
    "experience": [
      {
        "role": "Manajer Pemasaran",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Memimpin tim berisi 5 orang dan anggaran pemasaran tahunan $500,000\nMenumbuhkan prospek yang memenuhi syarat sebesar 60% dalam satu tahun dengan kampanye konten dan berbayar\nMeluncurkan lini produk yang mencapai penjualan $3M pada tahun pertama\nMemangkas biaya per prospek sebesar 28% dengan membangun ulang penargetan kampanye"
      },
      {
        "role": "Spesialis Pemasaran",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Menjalankan kampanye email kepada 80,000 pelanggan dengan tingkat buka 24%\nMengelola akun sosial yang tumbuh dari 5,000 menjadi 40,000 pengikut\nMengorganisasi 6 stan pameran dagang per tahun, masing-masing menghasilkan 300+ prospek"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Pemasaran",
        "start": "2013",
        "end": "2017",
        "notes": "Mata kuliah perilaku konsumen, analitik, dan manajemen merek."
      }
    ],
    "skills": "Strategi dan perencanaan kampanye\nPemasaran konten dan email\nIklan berbayar (Google, Meta)\nAnalitik pemasaran (GA4)\nKepemimpinan tim\nManajemen anggaran",
    "languages": "Bahasa Inggris (fasih)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Manajer Proyek",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Manajer proyek (PMP) dengan pengalaman 7 tahun menyelesaikan proyek perangkat lunak dan konstruksi tepat waktu dan sesuai anggaran. Mengelola 15 proyek senilai hingga $4M, dengan tingkat penyelesaian tepat waktu 94%. Terampil dalam Agile, manajemen risiko, dan komunikasi dengan pemangku kepentingan.",
    "experience": [
      {
        "role": "Manajer Proyek",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Mengelola 15 proyek senilai hingga $4M, dengan tingkat pengiriman tepat waktu 94%\nMenjalankan sprint Agile untuk 3 tim dan melaporkan kemajuan kepada eksekutif setiap minggu\nMemangkas pembengkakan proyek sebesar 30% dengan peninjauan risiko yang lebih awal\nMengkoordinasikan pemasok, klien, dan tim internal di 4 zona waktu"
      },
      {
        "role": "Koordinator Proyek",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Des 2020",
        "current": false,
        "points": "Melacak jadwal, anggaran, dan perizinan untuk 8 proyek bangunan\nMenyiapkan laporan status dan catatan rapat untuk klien\nMenyelesaikan konflik penjadwalan yang menghemat 2 minggu pada pembangunan sekolah"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Administrasi Bisnis",
        "start": "2014",
        "end": "2018",
        "notes": "Bersertifikat PMP (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Perencanaan dan penjadwalan proyek\nAgile dan Scrum\nManajemen risiko\nPengendalian anggaran\nKomunikasi pemangku kepentingan\nMS Project dan Jira",
    "languages": "Bahasa Inggris (fasih)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Manajer Sumber Daya Manusia",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Manajer sumber daya manusia dengan pengalaman 9 tahun dalam perekrutan, hubungan karyawan, dan tunjangan. Memangkas waktu rekrutmen dari 45 menjadi 28 hari, meningkatkan retensi sebesar 15%, dan mengelola SDM untuk 250 karyawan di 3 lokasi. Pengetahuan setingkat CIPD tentang hukum dan kebijakan ketenagakerjaan.",
    "experience": [
      {
        "role": "Manajer Sumber Daya Manusia",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Menjalankan SDM untuk 250 karyawan di 3 lokasi, dengan tim berisi 3 orang\nMemangkas waktu rekrutmen dari 45 menjadi 28 hari dengan membangun ulang proses wawancara\nMeningkatkan retensi sebesar 15% dengan program orientasi dan peninjauan baru\nMenangani hubungan karyawan, keluhan, dan pembaruan kebijakan"
      },
      {
        "role": "Generalis SDM",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "Merekrut 120+ staf per tahun untuk hotel dan restoran\nMenjalankan pemeriksaan penggajian dan pendaftaran tunjangan untuk 400 karyawan\nMenyelesaikan perselisihan staf dan menjaga pergantian di bawah rata-rata industri"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Sumber Daya Manusia",
        "start": "2012",
        "end": "2016",
        "notes": "Bersertifikat SHRM-CP. Mata kuliah hukum ketenagakerjaan dan perilaku organisasi."
      }
    ],
    "skills": "Rekrutmen dan orientasi\nHubungan karyawan\nTunjangan dan penggajian\nHukum ketenagakerjaan\nManajemen kinerja\nHRIS (Workday, BambooHR)",
    "languages": "Bahasa Inggris (fasih)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Pengacara Asosiasi",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Pengacara asosiasi dengan pengalaman 6 tahun di bidang litigasi komersial dan hukum kontrak. Mengelola 40+ kasus, memenangkan putusan ringkas dalam 8 kasus, dan menyusun kontrak senilai $25M. Diterima sebagai anggota Illinois Bar; terampil dalam riset hukum, penyusunan dokumen, dan pemberian nasihat kepada klien.",
    "experience": [
      {
        "role": "Pengacara Asosiasi",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "Mengelola 40+ kasus litigasi komersial dari pengajuan hingga penyelesaian\nMemenangkan putusan ringkas dalam 8 kasus dan menyelesaikan 20 kasus lagi dengan hasil yang menguntungkan\nMenyusun dan menegosiasikan kontrak senilai hingga $25M\nMemberi nasihat kepada klien secara langsung dan tertulis tentang risiko dan strategi"
      },
      {
        "role": "Asisten Pengacara",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Agu 2019",
        "end": "Agu 2020",
        "current": false,
        "points": "Meneliti hukum kasus dan menyusun memo untuk 2 hakim\nMeninjau mosi dan menyiapkan ringkasan majelis untuk 100+ sidang\nMengamati persidangan dan konferensi penyelesaian di berbagai divisi sipil"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Hukum",
        "start": "2016",
        "end": "2019",
        "notes": "Diterima sebagai anggota Illinois Bar (2019). Jurnal hukum, editor artikel."
      }
    ],
    "skills": "Litigasi komersial\nPenyusunan dan negosiasi kontrak\nRiset hukum (Westlaw, LexisNexis)\nKonsultasi klien\nDeposisi dan discovery\nPengajuan pengadilan dan prosedur",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Apoteker Klinis",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Apoteker klinis (PharmD) dengan pengalaman 7 tahun di farmasi rumah sakit dan komunitas. Meninjau 100+ pesanan obat per hari, mengurangi kejadian efek samping obat sebesar 25% melalui protokol pemeriksaan baru, dan memberikan konseling kepada pasien tentang penggunaan obat yang aman. Berlisensi di Pennsylvania.",
    "experience": [
      {
        "role": "Apoteker Klinis",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Meninjau 100+ pesanan obat per hari untuk keamanan, dosis, dan interaksi\nMemangkas kejadian obat merugikan sebesar 25% dengan protokol pemeriksaan ganda baru\nMemberi nasihat kepada dokter dan perawat tentang pilihan obat untuk pasien kompleks\nMenjalankan putaran pengelolaan antibiotik rumah sakit dua kali seminggu"
      },
      {
        "role": "Apoteker Staf",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Des 2019",
        "current": false,
        "points": "Menyerahkan 200+ resep per hari dengan nol kesalahan penyerahan\nMemberi konseling kepada pasien tentang obat baru, efek samping, dan penyimpanan\nMemberikan vaksinasi flu dan menjalankan pemeriksaan tekanan darah"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmasi",
        "start": "2014",
        "end": "2018",
        "notes": "Apoteker berlisensi (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Peninjauan dan keamanan pengobatan\nFarmakologi klinis\nKonseling pasien\nSistem farmasi (Epic, PioneerRx)\nPengelolaan antibiotik\nLayanan vaksinasi",
    "languages": "Bahasa Inggris (fasih)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Dokter Gigi Umum",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Dokter gigi umum (DDS) dengan pengalaman 8 tahun dalam kedokteran gigi restoratif, kosmetik, dan preventif. Merawat 25+ pasien per hari di praktik dengan 2,000 pasien, dengan skor kepuasan pasien 98%. Terampil dalam mahkota gigi, implan, perawatan saluran akar, dan aligner transparan.",
    "experience": [
      {
        "role": "Dokter Gigi Umum",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Merawat 25+ pasien per hari: tambalan, mahkota, saluran akar, dan pencabutan\nMenjaga skor kepuasan pasien 98% pada 1,200+ ulasan\nMemasang 15+ implan per bulan dan mengelola kasus aligner bening\nMengawasi 2 ahli kesehatan gigi dan 4 asisten dokter gigi"
      },
      {
        "role": "Dokter Gigi Asosiasi",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Memberikan kedokteran gigi umum untuk praktik berisi 1,500 pasien\nMemperkenalkan mahkota di hari yang sama, memangkas kunjungan kembali sebesar 40%\nMenjalankan kunjungan penjangkauan sekolah tentang kesehatan mulut anak"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Kedokteran Gigi",
        "start": "2013",
        "end": "2017",
        "notes": "Dokter gigi berlisensi (Arizona). Bersertifikat Invisalign. Bersertifikat CPR/BLS."
      }
    ],
    "skills": "Kedokteran gigi restoratif (mahkota, tambalan)\nPerawatan saluran akar\nImplan gigi\nAligner bening\nPerawatan dan komunikasi pasien\nSinar-X digital dan CEREC",
    "languages": "Bahasa Inggris (fasih)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fisioterapis",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fisioterapis (DPT) dengan pengalaman 6 tahun dalam rehabilitasi ortopedi dan olahraga. Merawat 12-15 pasien per hari, dengan 90% mencapai tujuan mereka dalam sesi yang direncanakan. Terampil dalam terapi manual, peresepan latihan, dan pengujian kembali berolahraga.",
    "experience": [
      {
        "role": "Fisioterapis",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Merawat 12-15 pasien per hari untuk cedera olahraga, rehabilitasi pasca-bedah, dan nyeri punggung\n90% pasien mencapai tujuan mereka dalam jumlah sesi yang direncanakan\nMerancang pengujian kembali berolahraga yang digunakan oleh 3 tim lokal\nMembimbing 2 lulusan baru dan mengawasi penempatan mahasiswa"
      },
      {
        "role": "Fisioterapis Staf",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Agu 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Memberikan rehabilitasi rawat inap untuk pasien pasca-bedah dan stroke\nMenjalankan kelas latihan kelompok untuk 20+ pasien lanjut usia per minggu\nMendokumentasikan kemajuan di Epic dan menyerahkannya kepada tim bangsal"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fisioterapi",
        "start": "2016",
        "end": "2019",
        "notes": "Fisioterapis berlisensi (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Rehabilitasi ortopedi dan olahraga\nTerapi manual\nResep latihan\nPengujian kembali berolahraga\nEdukasi pasien\nDokumentasi (Epic)",
    "languages": "Bahasa Inggris (fasih)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Kepala Koki",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Kepala koki dengan pengalaman 10 tahun di dapur Kreol dan Amerika modern. Memimpin brigade berisi 12 orang di restoran berkapasitas 200 kursi, memangkas biaya makanan sebesar 15% dengan pemesanan yang lebih ketat, dan memperoleh 'Best New Menu' dari panduan kuliner kota pada tahun 2025.",
    "experience": [
      {
        "role": "Kepala Koki",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Memimpin brigade berisi 12 orang di restoran berkapasitas 200 kursi yang melayani 300+ tamu per malam\nMemangkas biaya makanan sebesar 15% dengan pemesanan yang lebih ketat dan menu musiman\nMemperoleh 'Best New Menu' dari panduan kuliner kota pada tahun 2025\nMerancang menu, melatih juru masak, dan menjalankan pass pada layanan Jumat dan Sabtu"
      },
      {
        "role": "Sous Chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Des 2020",
        "current": false,
        "points": "Menjalankan dapur ketika kepala koki tidak ada, melayani 150 tamu per malam\nMengelola stok, pemesanan, dan hubungan pemasok\nMelatih 8 juru masak lini dan memangkas pergantian staf hingga sepertiga"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Seni Kuliner",
        "start": "2014",
        "end": "2016",
        "notes": "Bersertifikat ServSafe Food Protection Manager."
      }
    ],
    "skills": "Desain menu dan perhitungan biaya\nMasakan Kreol dan Amerika modern\nKepemimpinan dapur (brigade berisi 12 orang)\nKeamanan pangan (ServSafe)\nManajemen pemasok\nKatering perjamuan dan acara",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (fasih)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Petugas Kepolisian",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Petugas kepolisian dengan pengalaman 8 tahun dalam patroli, kepolisian masyarakat, dan investigasi. Menanggapi 30+ panggilan per minggu, dengan penghargaan untuk de-escalasi dan penjangkauan masyarakat. Terlatih dalam intervensi krisis, pertolongan pertama, dan penulisan laporan.",
    "experience": [
      {
        "role": "Petugas Kepolisian",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Berpatroli di distrik berisi 40,000 penduduk, menanggapi 30+ panggilan per minggu\nMenerima 2 penghargaan untuk de-escalasi dan penjangkauan komunitas\nMenyelidiki pencurian dan penyerangan, menulis laporan yang digunakan dalam 50+ penuntutan\nMembimbing 3 petugas baru melalui pelatihan lapangan"
      },
      {
        "role": "Petugas Patroli",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Agu 2017",
        "end": "Mei 2019",
        "current": false,
        "points": "Berpatroli di jalan kabupaten dan menanggapi panggilan darurat\nMengantarkan dokumen pengadilan dan membantu pengangkutan tahanan\nMenyelesaikan pelatihan intervensi krisis dan pertolongan pertama"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Sertifikat",
        "field": "Penegakan Hukum",
        "start": "2017",
        "end": "2017",
        "notes": "Lulusan Ohio Peace Officer Training Academy. Terlatih dalam Tim Intervensi Krisis."
      }
    ],
    "skills": "Patroli dan tanggap darurat\nKepolisian komunitas\nIntervensi krisis dan de-escalasi\nPenulisan laporan\nPenyelidikan\nPertolongan pertama dan CPR",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Petugas Pemadam Kebakaran / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Petugas pemadam kebakaran dan EMT dengan pengalaman 7 tahun dalam pemadaman kebakaran, penyelamatan, dan tanggap medis darurat. Menanggapi 900+ panggilan, termasuk kebakaran bangunan, penyelamatan kendaraan, dan keadaan darurat medis. Terlatih dalam HazMat dengan catatan keselamatan yang bersih.",
    "experience": [
      {
        "role": "Petugas Pemadam Kebakaran / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mar 2020",
        "end": "",
        "current": true,
        "points": "Menanggapi 900+ panggilan kebakaran, penyelamatan, dan medis di distrik berisi 3 stasiun\nMemberikan perawatan medis darurat sebagai EMT tersertifikasi pada 60% panggilan\nTerlatih HazMat; memimpin dekontaminasi pada insiden kimia\nMelatih rekrutan baru dalam penanganan selang, tangga, dan teknik pencarian"
      },
      {
        "role": "Petugas Pemadam Kebakaran Relawan",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Menanggapi kebakaran hutan dan bangunan sebagai relawan\nMenyelesaikan pelatihan Firefighter I & II dan EMT-Basic\nMembantu menjalankan ceramah keselamatan kebakaran komunitas di sekolah"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Sertifikat",
        "field": "Ilmu Pemadam Kebakaran",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. Tersertifikasi EMT-Basic. Terlatih Operasi HazMat."
      }
    ],
    "skills": "Pemadaman kebakaran dan penyelamatan\nPerawatan medis darurat (EMT)\nOperasi HazMat\nTangga, selang, dan ventilasi\nKeselamatan kebakaran komunitas\nKerja tim di bawah tekanan",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Tukang Ledeng Berlisensi",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Tukang ledeng master berlisensi dengan pengalaman 11 tahun dalam perpipaan residensial dan komersial. Menyelesaikan 600+ pekerjaan per tahun, dari instalasi kasar hingga pemasangan boiler, dengan tingkat perbaikan pada kunjungan pertama 98%. Terampil dalam pemasangan pipa, pembersihan saluran, dan kepatuhan terhadap peraturan.",
    "experience": [
      {
        "role": "Tukang Ledeng Master",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Menyelesaikan 600+ pekerjaan residensial dan komersial per tahun\nMemasang boiler, pemanas air, dan instalasi awal kamar mandi lengkap\nMenjaga tingkat perbaikan kunjungan pertama 98% pada panggilan layanan\nMengawasi 3 peserta magang dan mengesahkan pekerjaan mereka"
      },
      {
        "role": "Tukang Ledeng Terampil",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Des 2018",
        "current": false,
        "points": "Menjalankan perpipaan bangunan baru untuk 40+ rumah per tahun\nMembersihkan saluran dan memperbaiki kebocoran untuk rumah dan restoran\nMempelajari pemasangan gas dan pencegahan aliran balik"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Sertifikat",
        "field": "Teknologi Perpipaan",
        "start": "2013",
        "end": "2014",
        "notes": "Lisensi tukang ledeng master (Tennessee). Bersertifikat pencegahan aliran balik."
      }
    ],
    "skills": "Perpipaan residensial dan komersial\nPemasangan pipa dan penyolderan\nPembersihan saluran dan inspeksi kamera\nPemasangan boiler dan pemanas air\nPemasangan gas\nKepatuhan peraturan perpipaan",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Tukang Kayu Terampil",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Tukang kayu terampil dengan pengalaman 9 tahun dalam pekerjaan rangka, penyelesaian akhir, dan lemari khusus. Membangun rangka 30+ rumah dan memasang dapur di 60+ rumah, dengan reputasi pengukuran yang tepat dan hasil akhir yang bersih. Terampil membaca gambar teknis dan bekerja sesuai peraturan.",
    "experience": [
      {
        "role": "Tukang Kayu Terampil",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Memasang rangka 30+ rumah dan memasang dapur di 60+ rumah\nMembangun lemari dan lis khusus dengan toleransi 1/16 inci\nMembaca dan mengikuti rencana arsitektur, menandai kesalahan sebelum menimbulkan biaya\nMelatih 2 peserta magang dalam teknik rangka dan penyelesaian akhir"
      },
      {
        "role": "Magang Tukang Kayu",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Membantu pemasangan rangka, dinding kering, dan lantai pada renovasi\nMempelajari cara menggunakan gergaji, router, dan pistol paku dengan aman\nMenyelesaikan 8,000 jam magang dan lulus ujian pekerja terampil"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Sertifikat",
        "field": "Pertukangan Kayu",
        "start": "2015",
        "end": "2016",
        "notes": "Tukang kayu terampil. Bersertifikat OSHA 10."
      }
    ],
    "skills": "Pekerjaan rangka dan struktural\nPertukangan penyelesaian dan lis\nLemari khusus\nMembaca rencana arsitektur\nPerkakas listrik dan keselamatan\nDinding kering dan lantai",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Guru Sekolah Menengah (Matematika)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Guru sekolah menengah dengan pengalaman 8 tahun mengajar matematika untuk kelas 9-12. Meningkatkan tingkat kelulusan aljabar dari 64% menjadi 83% dan melatih tim matematika hingga 2 final tingkat negara bagian. Terampil dalam pengajaran terdiferensiasi, persiapan ujian, dan komunikasi dengan orang tua.",
    "experience": [
      {
        "role": "Guru Matematika (Kelas 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Agu 2019",
        "end": "",
        "current": true,
        "points": "Mengajar aljabar, geometri, dan pra-kalkulus kepada 120 siswa di 5 kelas\nMeningkatkan tingkat kelulusan aljabar dari 64% menjadi 83% dalam 3 tahun\nMelatih tim matematika hingga 2 final tingkat negara bagian\nMenjalankan bimbingan sepulang sekolah untuk 30 siswa per minggu"
      },
      {
        "role": "Guru Matematika (Kelas 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Agu 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Mengajar aljabar dan geometri kepada 100 siswa per tahun\nMemperkenalkan kuis mingguan yang memangkas kesenjangan pekerjaan rumah hingga setengahnya\nMengorganisasi pameran matematika pertama sekolah dengan 200 siswa"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Pendidikan Matematika",
        "start": "2013",
        "end": "2017",
        "notes": "Lisensi mengajar negara bagian (New Hampshire, kelas 7-12, matematika)."
      }
    ],
    "skills": "Pengajaran matematika (aljabar hingga pra-kalkulus)\nPersiapan ujian\nPengajaran terdiferensiasi\nManajemen kelas\nKomunikasi orang tua\nGoogle Classroom dan Desmos",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Guru Prasekolah",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Guru prasekolah dengan pengalaman 6 tahun merawat anak-anak berusia 3-5 tahun. Terampil dalam pembelajaran berbasis bermain, bimbingan perilaku, dan komunikasi dengan orang tua. Membangun program fonik yang meningkatkan skor kesiapan sekolah di seluruh kelas saya.",
    "experience": [
      {
        "role": "Guru Prasekolah",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Agu 2020",
        "end": "",
        "current": true,
        "points": "Mengajar dan merawat kelas berisi 18 anak berusia 3-5 tahun\nMembangun program fonik yang meningkatkan skor kesiapan sekolah di seluruh kelas\nMerencanakan tema mingguan, kerajinan, dan permainan luar ruang\nBerbagi kabar harian dan laporan kemajuan per semester dengan orang tua"
      },
      {
        "role": "Asisten Guru Prasekolah",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "Mendukung guru utama dengan kelas berisi 20 anak\nMenjalankan waktu bercerita, lagu, dan kegiatan seni setiap hari\nMenjaga catatan keselamatan dan kebersihan sesuai standar negara bagian"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate Degree",
        "field": "Pendidikan Anak Usia Dini",
        "start": "2016",
        "end": "2018",
        "notes": "Kredensial Child Development Associate (CDA). Bersertifikat pertolongan pertama dan CPR."
      }
    ],
    "skills": "Pembelajaran berbasis bermain\nBimbingan perilaku\nFonik dan literasi awal\nKomunikasi orang tua\nKeselamatan kelas\nPerencanaan seni dan kerajinan",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Pekerja Sosial Anak dan Keluarga",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Pekerja sosial berlisensi dengan pengalaman 7 tahun mendukung anak-anak dan keluarga. Mengelola beban kasus 25 keluarga, mengoordinasikan layanan di sekolah dan penyedia layanan kesehatan, serta menyelesaikan laporan pengadilan yang diandalkan hakim. Terampil dalam pengkajian, dukungan krisis, dan perlindungan.",
    "experience": [
      {
        "role": "Pekerja Sosial Anak dan Keluarga",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Mengelola beban kasus 25 keluarga, mengunjungi rumah dan sekolah setiap minggu\nMenyelesaikan laporan pengadilan dan memberikan kesaksian di pengadilan keluarga\nMengkoordinasikan dukungan perumahan, kesehatan, dan sekolah untuk keluarga rentan\nMemangkas waktu tunggu penilaian sebesar 20% dengan sistem triase baru"
      },
      {
        "role": "Pekerja Kasus",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Des 2019",
        "current": false,
        "points": "Mendukung 40+ keluarga di perumahan sementara dengan tunjangan dan rujukan\nMenjalankan lokakarya pengasuhan dan penganggaran mingguan\nMenjaga catatan kasus tetap akurat untuk audit dan laporan pendanaan"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Pekerjaan Sosial",
        "start": "2016",
        "end": "2018",
        "notes": "Pekerja Sosial Berlisensi (Ohio). Mata kuliah kesejahteraan anak dan sistem keluarga."
      }
    ],
    "skills": "Manajemen kasus (25 keluarga)\nPerlindungan anak\nLaporan pengadilan keluarga\nDukungan krisis\nKoordinasi multi-lembaga\nRujukan tunjangan dan perumahan",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Paralegal",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Paralegal dengan pengalaman 6 tahun dalam dukungan litigasi dan pengajuan korporat. Mengelola pengumpulan bukti untuk 30+ kasus, menyusun gugatan dan kontrak, serta menjaga tenggat pengajuan dengan catatan 100% tepat waktu. Terampil dalam Westlaw, e-discovery, dan perangkat lunak manajemen kasus.",
    "experience": [
      {
        "role": "Paralegal",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Mengelola discovery untuk 30+ kasus litigasi, meninjau 10,000+ dokumen\nMenyusun pledoi, mosi, dan kontrak untuk ditinjau pengacara\nMenjaga catatan 100% tepat waktu pada pengajuan pengadilan dan tenggat\nMengkoordinasikan saksi dan menyiapkan map persidangan"
      },
      {
        "role": "Asisten Hukum",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Agu 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Wawancara penerimaan untuk 20+ klien per minggu\nMenyiapkan formulir dan pengajuan untuk kasus perumahan dan keluarga\nMenerjemahkan dokumen hukum untuk klien berbahasa Spanyol"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate Degree",
        "field": "Studi Paralegal",
        "start": "2017",
        "end": "2019",
        "notes": "Paralegal Bersertifikat NALA (CP). Program yang disetujui ABA."
      }
    ],
    "skills": "Dukungan litigasi dan discovery\nPenyusunan dokumen hukum\nE-discovery (Relativity)\nManajemen kasus (Clio)\nPengajuan pengadilan dan tenggat\nRiset hukum (Westlaw)",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (fasih)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Petugas Pembukuan",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Petugas pembukuan dengan pengalaman 5 tahun di bidang hutang usaha, pembuatan faktur, dan rekonsiliasi bank. Memproses 300+ faktur per bulan dengan akurasi 99.8% dan menjaga pembukuan tetap rapi untuk penutupan akhir bulan. Terampil dalam QuickBooks, Excel, dan dukungan penggajian.",
    "experience": [
      {
        "role": "Petugas Pembukuan",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Memproses 300+ faktur pemasok per bulan dengan akurasi 99.8%\nMerekonsiliasi 6 rekening bank setiap minggu dan menandai perbedaan pada hari yang sama\nMenyiapkan data penggajian untuk 45 staf dan menagih pembayaran pelanggan yang terlambat\nMenjaga catatan tetap rapi untuk audit akhir tahun, dengan nol temuan"
      },
      {
        "role": "Asisten Akuntansi",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Memasukkan faktur penjualan dan tanda terima ke QuickBooks setiap hari\nMenjawab pertanyaan pemasok tentang pembayaran melalui telepon dan email\nMengarsipkan dokumen dan menjaga arsip tetap mutakhir"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Sertifikat",
        "field": "Pembukuan",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "Utang usaha dan piutang usaha\nRekonsiliasi bank\nPenagihan (300+ per bulan)\nQuickBooks dan Excel\nDukungan penggajian\nEntri data (65 kpm)",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Asisten Administrasi",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Asisten administrasi dengan pengalaman 6 tahun menjaga kantor berjalan lancar. Mengelola kalender untuk 4 manajer, mengatur perjalanan dan rapat, serta menangani 100+ email per hari. Dikenal karena ketelitian, kemampuan menjaga kerahasiaan, dan ketenangan di bawah tekanan tenggat waktu.",
    "experience": [
      {
        "role": "Asisten Administrasi",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Mengelola kalender, perjalanan, dan rapat untuk 4 manajer senior\nMenangani 100+ email per hari, menyusun balasan dan menandai prioritas\nMenyiapkan dokumen dewan dan membuat notulen pada rapat bulanan\nMenjalankan perlengkapan kantor dan pesanan pemasok, memangkas biaya sebesar 12%"
      },
      {
        "role": "Resepsionis",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Agu 2019",
        "end": "Des 2020",
        "current": false,
        "points": "Menyambut 60+ pasien per hari dan mengelola buku janji temu\nMenjawab telepon dan menangani pertanyaan asuransi\nMenjaga catatan pasien tetap akurat dan rahasia"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate Degree",
        "field": "Administrasi Perkantoran",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Manajemen kalender dan perjalanan\nEmail dan korespondensi\nNotulen rapat\nMicrosoft Office (Word, Excel, Outlook)\nEntri data (70 kpm)\nPerlengkapan kantor dan pemasok",
    "languages": "Bahasa Inggris (fasih)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Teller Bank",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Teller bank dengan pengalaman 4 tahun melayani 80+ nasabah per hari dengan teliti dan penuh perhatian. Laci kas seimbang hingga sen terakhir selama 3 tahun, tanpa kekurangan sedikit pun. Terampil dalam setoran, penarikan, pemeriksaan penipuan, dan mengarahkan nasabah ke produk yang tepat.",
    "experience": [
      {
        "role": "Teller Bank",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Melayani 80+ pelanggan per hari: setoran, penarikan, pembayaran, dan transfer\nLaci uang seimbang hingga sen terakhir selama 3 tahun dengan nol kekurangan\nMenemukan dan menghentikan 12 percobaan penipuan, menyelamatkan nasabah $90,000+\nMerujuk pelanggan ke produk tabungan dan pinjaman, mencapai target rujukan setiap kuartal"
      },
      {
        "role": "Staf Layanan Pelanggan",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Membuka rekening baru dan menerbitkan kartu debit untuk anggota\nMenjawab pertanyaan telepon tentang saldo dan laporan\nMembantu anggota mengatur perbankan online dan mobile"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate Degree",
        "field": "Bisnis",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Penanganan dan penyeimbangan uang tunai\nSetoran, penarikan, dan pembayaran\nDeteksi penipuan\nLayanan pelanggan\nPerangkat lunak perbankan (Fiserv)\nRujukan produk",
    "languages": "Bahasa Inggris (fasih)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Manajer Penjualan",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Manajer penjualan dengan pengalaman 10 tahun memimpin tim hingga 15 staf penjualan. Menumbuhkan pendapatan regional dari $4M menjadi $7.5M dalam 3 tahun, meningkatkan tingkat kemenangan dari 22% menjadi 34%, dan memangkas pergantian staf penjualan hingga setengahnya dengan pembinaan dan orientasi yang lebih baik.",
    "experience": [
      {
        "role": "Manajer Penjualan Regional",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Memimpin tim berisi 15 staf penjualan di Texas dan Oklahoma\nMenumbuhkan pendapatan regional dari $4M menjadi $7.5M dalam 3 tahun\nMeningkatkan tingkat kemenangan dari 22% menjadi 34% dengan pembinaan dan peninjauan pipeline yang lebih baik\nMemangkas pergantian staf penjualan hingga setengahnya dengan program orientasi baru"
      },
      {
        "role": "Perwakilan Penjualan",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Des 2020",
        "current": false,
        "points": "Menjual peralatan industri kepada 80+ akun, mencapai kuota 5 tahun berturut-turut\nStaf penjualan terbaik di wilayah selama 3 tahun berturut-turut\nMembangun jaringan rujukan yang menghasilkan 25% bisnis baru"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Pemasaran",
        "start": "2011",
        "end": "2015",
        "notes": "Mata kuliah manajemen penjualan dan negosiasi."
      }
    ],
    "skills": "Kepemimpinan tim penjualan (15 staf)\nPertumbuhan dan prakiraan pendapatan\nManajemen pipeline (Salesforce)\nPembinaan dan orientasi\nNegosiasi\nPerencanaan wilayah",
    "languages": "Bahasa Inggris (fasih)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Manajer Konstruksi",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Manajer konstruksi dengan pengalaman 12 tahun menyelesaikan proyek komersial dan residensial senilai hingga $12M. Menyelesaikan 20+ proyek dengan tingkat ketepatan waktu 95%, nol cedera yang menyebabkan kehilangan waktu kerja di lokasi saya, dan anggaran terjaga dalam batas 3%. Terampil dalam penjadwalan, manajemen subkontraktor, dan keselamatan kerja.",
    "experience": [
      {
        "role": "Manajer Konstruksi",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Menyelesaikan proyek komersial dan residensial senilai hingga $12M\nMenyelesaikan 20+ proyek dengan tingkat tepat waktu 95% dan anggaran dalam batas 3%\nMengelola 30+ subkontraktor dan 50 pekerja di 3 lokasi aktif\nNol cedera yang menyebabkan kehilangan waktu kerja di semua lokasi dalam 4 tahun"
      },
      {
        "role": "Pengawas Lokasi",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Menjalankan operasional lokasi harian untuk pembangunan kantor dan ritel\nMengkoordinasikan pengiriman, inspeksi, dan jadwal subkontraktor\nMenjaga catatan keselamatan tetap bersih dan lulus setiap inspeksi OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Konstruksi Bangunan",
        "start": "2009",
        "end": "2013",
        "notes": "Bersertifikat OSHA 30. Kandidat CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Penjadwalan proyek (MS Project, Procore)\nPengendalian anggaran\nManajemen subkontraktor\nKeselamatan lokasi (OSHA 30)\nMembaca cetak biru\nPelaporan klien",
    "languages": "Bahasa Inggris (fasih)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Asisten Medis Bersertifikat",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Asisten medis bersertifikat dengan pengalaman 5 tahun di praktik keluarga dan perawatan darurat. Menyiapkan ruang periksa untuk 25+ pasien per hari, mengukur tanda vital, mengambil darah, dan mengelola meja depan dengan skor kepuasan pasien 97%. Terampil dalam EHR, flebotomi, dan pemeriksaan asuransi.",
    "experience": [
      {
        "role": "Asisten Medis Bersertifikat",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Menyiapkan ruang untuk 25+ pasien per hari: tanda vital, riwayat, dan persiapan pemeriksaan\nMengambil darah dan menjalankan tes laboratorium dasar dengan tingkat keberhasilan tusukan pertama 99%\nMengelola meja depan, penjadwalan, dan pemeriksaan asuransi\nMenjaga skor kepuasan pasien 97% pada 800+ survei"
      },
      {
        "role": "Asisten Medis",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Agu 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Melakukan triase pasien datang langsung dan membantu dokter dengan prosedur minor\nMemberikan vaksinasi dan menangani pengambilan spesimen\nMenjaga ruang pemeriksaan tetap terisi, bersih, dan siap di antara pasien"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Sertifikat",
        "field": "Asistensi Medis",
        "start": "2018",
        "end": "2019",
        "notes": "Asisten Medis Bersertifikat (CMA, AAMA). Bersertifikat BLS. Terlatih dalam flebotomi."
      }
    ],
    "skills": "Penerimaan pasien dan tanda vital\nFlebotomi\nEHR (eClinicalWorks)\nVaksinasi\nVerifikasi asuransi\nManajemen meja depan",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (fasih)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Mahasiswa",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Siswa kelas akhir sekolah menengah yang termotivasi dengan nilai kuat dan pengalaman kerja paruh waktu. Cepat belajar, dapat diandalkan, dan pandai bergaul. Mencari peran penuh waktu pertama atau pekerjaan paruh waktu di samping kuliah.",
    "experience": [
      {
        "role": "Asisten Penjualan Paruh Waktu",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "Melayani 50+ pelanggan per shift pada akhir pekan dan sepulang sekolah\nMenangani uang tunai, mengisi ulang rak, dan menjaga pajangan tetap rapi\nDipercaya untuk membuka toko pada Sabtu pagi"
      },
      {
        "role": "Tutor Relawan",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Mengajari siswa yang lebih muda matematika dua kali seminggu\nMembantu mengorganisasi program membaca musim panas untuk 40 anak"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Ijazah Sekolah Menengah Atas",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "IPK 3.6. Daftar kehormatan, 3 tahun. Kapten tim debat."
      }
    ],
    "skills": "Layanan pelanggan\nPenanganan uang tunai\nKerja tim\nManajemen waktu\nMicrosoft Office\nBerbicara di depan umum (tim debat)",
    "languages": "Bahasa Inggris (fasih)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Lulusan Baru \u2014 Administrasi Bisnis",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Lulusan administrasi bisnis baru dengan pengalaman magang di pemasaran dan operasional. Menyelenggarakan kompetisi bisnis kampus dengan 200 peserta dan menyelesaikan magang 6 bulan di mana saya memangkas waktu pelaporan hingga setengahnya. Bersemangat untuk memulai karier penuh waktu dan belajar dengan cepat.",
    "experience": [
      {
        "role": "Magang Pemasaran",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Menjalankan akun sosial perusahaan, menumbuhkan pengikut dari 2,000 menjadi 6,500\nMembangun dasbor pelaporan yang memangkas waktu pelaporan mingguan hingga setengahnya\nMenulis 20 artikel blog yang menghasilkan 15,000+ pembacaan"
      },
      {
        "role": "Koordinator Relawan Acara",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "Mei 2025",
        "current": false,
        "points": "Mengorganisasi kompetisi bisnis dengan 200 peserta dan 12 juri\nMengelola anggaran $5,000 dan tim berisi 8 relawan"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Administrasi Bisnis",
        "start": "2021",
        "end": "2025",
        "notes": "IPK 3.5. Dean's List, 2 tahun. Proyek tahun terakhir tentang pemasaran usaha kecil."
      }
    ],
    "skills": "Pemasaran media sosial\nExcel dan Google Sheets\nKeterampilan presentasi\nPengorganisasian acara\nKerja tim\nAnalisis data dasar",
    "languages": "Bahasa Inggris (fasih)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Staf Pemasaran Junior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Staf pemasaran junior dengan pengalaman 2 tahun dalam konten, email, dan media sosial. Menumbuhkan buletin klien dari 1,000 menjadi 4,000 pelanggan dan menjalankan kampanye dengan rata-rata tingkat buka 22%. Siap untuk tanggung jawab yang lebih besar dan portofolio akun yang lebih besar.",
    "experience": [
      {
        "role": "Staf Pemasaran Junior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Menumbuhkan buletin klien dari 1,000 menjadi 4,000 pelanggan dalam 14 bulan\nMenulis dan menjadwalkan 12 unggahan sosial per minggu untuk 4 klien\nMenjalankan kampanye email dengan tingkat buka rata-rata 22%\nMelaporkan hasil kampanye kepada klien setiap bulan"
      },
      {
        "role": "Magang Pemasaran",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Menulis deskripsi produk untuk 200+ item di situs web perusahaan\nMembantu menjalankan kampanye obral musim semi yang meningkatkan pesanan online sebesar 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Komunikasi",
        "start": "2020",
        "end": "2024",
        "notes": "IPK 3.4. Mata kuliah pemasaran digital dan penulisan media."
      }
    ],
    "skills": "Penulisan konten\nPemasaran email (Mailchimp)\nManajemen media sosial\nGoogle Analytics\nCanva\nPelaporan klien",
    "languages": "Bahasa Inggris (fasih)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Supervisor Operasional",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Supervisor operasional dengan pengalaman 8 tahun mengelola tim gudang berisi 20-30 orang. Mengurangi kesalahan pengambilan barang sebesar 30%, meningkatkan pengiriman tepat waktu dari 90% menjadi 97%, dan melatih 15 karyawan baru. Siap untuk peran manajer operasional dengan lokasi dan anggaran yang lebih besar.",
    "experience": [
      {
        "role": "Supervisor Operasional",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Mengawasi 25 staf gudang dalam 2 shift di lokasi seluas 90,000 kaki persegi\nMemangkas kesalahan pengambilan sebesar 30% dengan rutinitas pemeriksaan baru dan pemindaian barcode\nMeningkatkan pengiriman tepat waktu dari 90% menjadi 97% dalam 2 tahun\nMelatih 15 karyawan baru dan mempromosikan 3 orang ke peran pemimpin tim"
      },
      {
        "role": "Pemimpin Tim",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Memimpin tim berisi 10 pemetik dan pengemas pada shift malam\nMemperkenalkan jadwal bergilir yang memangkas lembur sebesar 20% tanpa melewatkan tenggat\nMenjalankan pengarahan keselamatan dan menjaga tim bebas kecelakaan selama 2 tahun"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Manajemen Rantai Pasokan",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Kepemimpinan tim (25 staf)\nOperasional gudang\nPeningkatan proses\nManajemen keselamatan\nPengendalian persediaan\nWMS dan Excel",
    "languages": "Bahasa Inggris (fasih)\nHindi (percakapan)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Manajer Proyek Senior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Manajer proyek senior dengan pengalaman 14 tahun menyelesaikan proyek perangkat lunak senilai hingga $8M. Memimpin 30+ proyek dengan tingkat ketepatan waktu 92%, membangun PMO dari nol, dan membimbing 10 manajer proyek. Dikenal karena penyelesaian yang tenang di bawah tekanan dan pelaporan yang jujur kepada eksekutif.",
    "experience": [
      {
        "role": "Manajer Proyek Senior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Menyelesaikan proyek perangkat lunak senilai hingga $8M dengan tingkat tepat waktu 92%\nMembangun PMO perusahaan dari nol: templat, pelaporan, dan tata kelola\nMembimbing 10 manajer proyek dan menjalankan komunitas PM bulanan\nMelapor langsung kepada CTO tentang program beranggotakan 40 orang"
      },
      {
        "role": "Manajer Proyek",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Des 2018",
        "current": false,
        "points": "Mengelola 20+ proyek untuk klien ritel dan layanan kesehatan\nMemperkenalkan praktik Agile yang memangkas waktu pengiriman sebesar 25%\nMenumbuhkan 2 akun utama dari $500k menjadi $2M dalam pendapatan tahunan"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Sistem Informasi",
        "start": "2008",
        "end": "2012",
        "notes": "Bersertifikat PMP (2015). Certified ScrumMaster. Mata kuliah MBA (2018-2019, tidak selesai)."
      }
    ],
    "skills": "Pengiriman program dan proyek\nPenyiapan dan tata kelola PMO\nAgile dan Waterfall\nPengendalian anggaran ($8M)\nPelaporan eksekutif\nPembimbingan tim",
    "languages": "Bahasa Inggris (fasih)\nBahasa Spanyol (percakapan)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Chief Operating Officer",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Chief operating officer dengan pengalaman 18 tahun mengembangkan operasional perusahaan ritel dan logistik. Mengembangkan operasional 200 orang menjadi 900 orang di 6 lokasi, meningkatkan margin EBITDA dari 8% menjadi 14%, dan memimpin 2 akuisisi. Berpengalaman dalam pelaporan tingkat dewan dan hubungan investor.",
    "experience": [
      {
        "role": "Chief Operating Officer",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Menjalankan operasional untuk 900 orang di 6 lokasi dan anggaran $180M\nMeningkatkan margin EBITDA dari 8% menjadi 14% dalam 3 tahun\nMemimpin 2 akuisisi dan mengintegrasikan kedua tim dalam waktu 6 bulan\nMelapor kepada dewan setiap bulan tentang operasional, risiko, dan pertumbuhan"
      },
      {
        "role": "Wakil Presiden Operasional",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Des 2020",
        "current": false,
        "points": "Meningkatkan skala operasional dari 200 menjadi 600 orang di 4 lokasi\nMembuka 3 pusat distribusi tepat waktu dan di bawah anggaran\nMembangun tim kepemimpinan yang masih menjalankan bisnis hingga hari ini"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Administrasi Bisnis",
        "start": "2010",
        "end": "2012",
        "notes": "BS di bidang Ekonomi, NYU (2006). Kursus tata kelola dewan (2020)."
      }
    ],
    "skills": "Operasional berskala besar (900 orang)\nKepemilikan laba rugi ($180M)\nMerger dan akuisisi\nPelaporan dewan\nStrategi pertumbuhan\nPembangunan tim kepemimpinan",
    "languages": "Bahasa Inggris (fasih)",
    "template": "executive"
  }
};
});
