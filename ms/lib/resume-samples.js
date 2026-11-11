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
      "title": "Jururawat Berdaftar",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Jururawat berdaftar dengan pengalaman 6 tahun di unit perubatan-pembedahan dan telemetri. Mahir dalam penilaian pesakit, terapi IV, pemberian ubat dan rekod kesihatan elektronik. Dikenali kerana komunikasi yang tenang dan jelas dengan pesakit dan keluarga semasa situasi tekanan tinggi.",
    "experience": [
      {
        "role": "Jururawat Berdaftar",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Menjaga 5-6 pesakit setiap syif di unit perubatan-pembedahan 32 katil, termasuk penilaian, pemberian ubat dan penjagaan luka\nMelatih dan membimbing 4 jururawat graduan baharu, mengurangkan masa orientasi mereka sebanyak 2 minggu\nMengurangkan ralat ubat di unit sebanyak 18% dengan memperkenalkan rutin semakan berganda semasa penyerahan\nMendokumentasikan semua penjagaan dengan tepat dalam rekod kesihatan elektronik Epic"
      },
      {
        "role": "Jururawat Kakitangan",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Ogo 2019",
        "end": "Mei 2021",
        "current": false,
        "points": "Menjalankan triaj untuk 40+ pesakit datang terus sehari, mengutamakan kes segera untuk rawatan hari yang sama\nMemberi vaksinasi dan saringan kesihatan pada acara jangkauan komuniti bulanan\nMenyelaraskan rujukan kepada pakar dan membuat susulan keputusan ujian"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Kejururawatan",
        "start": "2015",
        "end": "2019",
        "notes": "Lesen Jururawat Berdaftar (Texas). Bertauliah BLS dan ACLS."
      }
    ],
    "skills": "Penilaian pesakit\nTerapi IV dan pemberian ubat\nRekod kesihatan elektronik (Epic)\nPemantauan telemetri\nPendidikan pesakit dan keluarga\nKawalan jangkitan",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (perbualan)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Pembangun Perisian",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Pembangun perisian dengan pengalaman 5 tahun membina aplikasi web dalam Python dan JavaScript. Melancarkan ciri yang digunakan oleh 200,000+ pengguna, mengurangkan masa respons API sebanyak 40% dan mengetuai penghijrahan monolit kepada perkhidmatan mikro. Kukuh dalam pengujian, semakan kod dan dokumentasi jelas.",
    "experience": [
      {
        "role": "Pembangun Perisian",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mac 2022",
        "end": "",
        "current": true,
        "points": "Membina dan menyelenggara ciri web untuk pelanggan dalam Python (Django) dan React, melayani 200,000+ pengguna\nMengurangkan purata masa respons API daripada 850 ms kepada 500 ms dengan menambah caching dan membaiki pertanyaan perlahan\nMengetuai penghijrahan perkhidmatan bil kepada perkhidmatan mikro dengan sifar masa henti\nMenyemak 10+ permintaan tarik seminggu dan membimbing 2 pembangun junior"
      },
      {
        "role": "Pembangun Junior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Membina papan pemuka dalaman dalam JavaScript yang menggantikan hamparan manual untuk 3 pasukan\nMenulis ujian automatik yang meningkatkan liputan daripada 45% kepada 78%\nMembaiki 120+ pepijat merentas produk pada tahun pertama"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Sains Komputer",
        "start": "2016",
        "end": "2020",
        "notes": "Kerja kursus dalam pangkalan data, algoritma dan sistem pengendalian."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript dan React\nPostgreSQL dan Redis\nAPI REST dan perkhidmatan mikro\nGit dan CI/CD\nPengujian automatik (pytest, Jest)",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Guru Sekolah Rendah",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Guru sekolah rendah dengan pengalaman 7 tahun mengajar tahun 3-5. Mahir dalam pengajaran berbeza, pengurusan bilik darjah dan komunikasi ibu bapa. Meningkatkan penguasaan membaca dalam kelas saya daripada 58% kepada 81% dalam dua tahun persekolahan.",
    "experience": [
      {
        "role": "Guru Sekolah Rendah (Tahun 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Ogo 2020",
        "end": "",
        "current": true,
        "points": "Mengajar bacaan, matematik dan sains kepada kelas 26 murid, termasuk 5 dengan pelan pembelajaran individu\nMeningkatkan penguasaan bacaan kelas daripada 58% kepada 81% dalam dua tahun melalui kumpulan bacaan berpandu\nMenjalankan surat berita ibu bapa mingguan dan mesyuarat kemajuan penggal untuk setiap keluarga\nMengetuai kelab bacaan sekolah untuk 40 murid tahun 3-5"
      },
      {
        "role": "Guru Sekolah Rendah (Tahun 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Ogo 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Merancang dan menyampaikan pelajaran harian untuk 24 murid merentas semua subjek teras\nMemperkenalkan rutin tingkah laku yang mengurangkan gangguan bilik darjah sebanyak separuh\nMenganjurkan pesta sains kumpulan tahun dengan 120 murid dan 80 ibu bapa"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Pendidikan Rendah",
        "start": "2014",
        "end": "2018",
        "notes": "Lesen mengajar negeri (Ohio, tahun K-5). Pengesahan bacaan."
      }
    ],
    "skills": "Pengajaran berbeza\nPengurusan bilik darjah\nKumpulan bacaan berpandu\nKomunikasi ibu bapa\nPerancangan pelajaran\nGoogle Classroom",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Akauntan Senior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA dengan pengalaman 8 tahun dalam penutupan akhir bulan, pelaporan kewangan dan audit dalaman. Menutup buku 3 hari lebih pantas dengan membina semula proses penyesuaian dan menemui $240,000 lebihan bayaran yang boleh dipulihkan dalam satu tahun audit. Mahir dalam Excel, QuickBooks dan sistem ERP.",
    "experience": [
      {
        "role": "Akauntan Senior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Mengendalikan penutupan akhir bulan untuk unit perniagaan $40M, menyiapkan 3 hari lebih pantas selepas membina semula penyesuaian\nMenyediakan penyata kewangan bulanan dan laporan varians untuk pengurusan kanan\nMenemui $240,000 lebihan bayaran pembekal yang boleh dipulihkan semasa audit dalaman 2024\nMenyelia 2 akauntan kakitangan dan menyemak entri jurnal mereka"
      },
      {
        "role": "Akauntan Kakitangan",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dis 2020",
        "current": false,
        "points": "Menyediakan penyata cukai dan penyata kewangan untuk 25 pelanggan perniagaan kecil\nMembantu audit 8 pelanggan, menguji kawalan dan mendokumentasikan penemuan\nMengautomasikan daftar aset tetap dalam Excel, menjimatkan 6 jam sebulan"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Perakaunan",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Ahli AICPA."
      }
    ],
    "skills": "Penutupan akhir bulan dan penyesuaian\nPelaporan kewangan dan analisis varians\nAudit dalaman\nExcel (jadual pangsi, VLOOKUP)\nQuickBooks dan SAP\nPenyediaan cukai",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Mandarin (perbualan)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Pemandu Lori CDL Kelas A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Pemandu CDL Kelas A dengan pengalaman 9 tahun dalam pengangkutan jarak jauh dan serantau. Lebih 900,000 batu tanpa kemalangan, kadar penghantaran tepat masa 99% dan pengalaman dengan muatan sejuk beku, katil rata dan van kering. Rekod pemanduan bersih, pengesahan HazMat dan lori tangki.",
    "experience": [
      {
        "role": "Pemandu Lori Jarak Jauh",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Memandu 2,800+ batu seminggu di laluan serantau merentas Texas, Oklahoma dan New Mexico\nMengekalkan kadar penghantaran tepat masa 99% merentas 1,100+ muatan setahun\nMengangkut muatan sejuk beku dan van kering; menyiapkan pemeriksaan sebelum dan selepas perjalanan setiap hari\nLebih 900,000 batu tanpa kemalangan secara keseluruhan"
      },
      {
        "role": "Pemandu Lori Penghantaran",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mac 2016",
        "end": "Mac 2019",
        "current": false,
        "points": "Menghantar bahan binaan ke 15-20 tapak kerja sehari di kawasan Dallas-Fort Worth\nMengendalikan forklift dan mengamankan muatan katil rata mengikut piawaian DOT\nMengekalkan kertas kerja penghantaran dan log tepat dengan sifar pelanggaran DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Sijil",
        "field": "Pemanduan Komersial (CDL Kelas A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Kelas A dengan pengesahan HazMat dan lori tangki. Rekod pemanduan bersih."
      }
    ],
    "skills": "Pemanduan jarak jauh dan serantau\nMuatan sejuk beku dan katil rata\nPeraturan DOT dan buku log\nPemeriksaan sebelum perjalanan\nPerancangan laluan (GPS, ELD)\nPengendalian forklift",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Bersekutu Jualan Runcit",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Bersekutu jualan runcit dengan pengalaman 4 tahun di kedai elektronik dan pakaian. Sentiasa dalam 3 penjual teratas dalam pasukan, dengan kadar jualan tambahan 32% bagi waranti dan aksesori. Mesra, pantas di kaunter bayaran dan dipercayai membuka dan menutup kedai.",
    "experience": [
      {
        "role": "Bersekutu Jualan Senior",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Menjual elektronik dan aksesori kepada 60+ pelanggan sehari; 3 teratas dalam jualan kedai selama 8 suku tahun berturut-turut\nMencapai kadar jualan tambahan 32% bagi waranti dan aksesori, tertinggi dalam pasukan\nMelatih 6 pekerja baharu tentang kaunter bayaran, bilik stok dan piawaian khidmat pelanggan\nPemegang kunci dipercayai: membuka dan menutup kedai dan mengendalikan kiraan tunai"
      },
      {
        "role": "Bersekutu Jualan",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Membantu pelanggan memilih pakaian dan saiz di lantai kedai yang sibuk\nMengekalkan paparan kemas dan mengisi semula rak pada setiap syif\nMengendalikan pemulangan dan pertukaran dengan sopan, mengekalkan aduan pada tahap minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Diploma Bersekutu",
        "field": "Perniagaan",
        "start": "2019",
        "end": "2021",
        "notes": "Belajar sambilan sambil bekerja dalam runcit."
      }
    ],
    "skills": "Khidmat pelanggan dan jualan tambahan\nPengendalian tunai dan sistem POS\nPengetahuan produk (elektronik)\nPengurusan stok\nPembukaan dan penutupan kedai\nLatihan pasukan",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (fasih)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Wakil Khidmat Pelanggan",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Wakil khidmat pelanggan dengan pengalaman 5 tahun mengendalikan sokongan telefon, e-mel dan sembang langsung. Menyelesaikan 45+ kes sehari dengan skor kepuasan 96% dan kadar penyelesaian hubungan pertama 88%. Tenang dengan pelanggan yang marah dan pantas mencari penyelesaian.",
    "experience": [
      {
        "role": "Wakil Khidmat Pelanggan",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "Mei 2021",
        "end": "",
        "current": true,
        "points": "Mengendalikan 45+ kes telefon, e-mel dan sembang sehari untuk bil, pesanan dan kerosakan teknikal\nMengekalkan skor kepuasan pelanggan 96% dan kadar penyelesaian hubungan pertama 88%\nMeredakan panggilan sukar dan menukar aduan menjadi perniagaan berulang\nMelatih 5 ejen baharu tentang skrip, sistem dan nada"
      },
      {
        "role": "Ejen Sokongan",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "Menjawab e-mel dan sembang pelanggan tentang pesanan, pemulangan dan bayaran balik\nMengekalkan purata masa respons pertama di bawah 2 jam\nMenulis 20 artikel pusat bantuan yang mengurangkan soalan berulang sebanyak satu perempat"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Diploma Bersekutu",
        "field": "Pentadbiran Perniagaan",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Sokongan telefon, e-mel dan sembang langsung\nPengendalian aduan dan de-eskalasi\nSistem CRM (Zendesk, Salesforce)\nPertanyaan bil dan pesanan\nMenaip 55 pspm\nLatihan pasukan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Pengurus Operasi",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Pengurus operasi dengan pengalaman 12 tahun mengendalikan pasukan sehingga 80 orang merentas pergudangan dan pengedaran. Mengurangkan kos pemprosesan pesanan sebanyak 22%, meningkatkan penghantaran tepat masa daripada 91% kepada 98% dan membuka dua tapak baharu tepat masa dan di bawah bajet.",
    "experience": [
      {
        "role": "Pengurus Operasi",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Menjalankan pusat pengedaran 120,000 kaki persegi dengan 80 kakitangan merentas 3 syif\nMengurangkan kos pemprosesan pesanan sebanyak 22% dengan mereka bentuk semula laluan pengambilan dan pola syif\nMeningkatkan penghantaran tepat masa daripada 91% kepada 98% dalam 18 bulan\nMembuka 2 tapak baharu tepat masa dan 8% di bawah bajet"
      },
      {
        "role": "Penyelia Gudang",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Menyelia 25 kakitangan gudang dan penghantaran harian 4,000+ pesanan\nMemperkenalkan pengimbasan kod bar, mengurangkan ralat pengambilan sebanyak 35%\nMenjalankan latihan keselamatan yang memastikan tapak bebas kemalangan selama 3 tahun"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Pengurusan Operasi",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Kepimpinan pasukan (sehingga 80 kakitangan)\nPergudangan dan pengedaran\nPenambahbaikan proses\nPembajetan dan kawalan kos\nPengurusan keselamatan\nSistem ERP dan WMS",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Juruelektrik Berlesen",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Juruelektrik mahir berlesen dengan pengalaman 8 tahun dalam kerja kediaman dan komersial. Mahir dalam pendawaian, naik taraf panel, pencahayaan dan pencarian kerosakan, dengan rekod keselamatan bersih merentas 400+ kerja. Pengetahuan kod NEC dan pengalaman menyelia perantis.",
    "experience": [
      {
        "role": "Juruelektrik Mahir",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mac 2019",
        "end": "",
        "current": true,
        "points": "Menyiapkan 400+ kerja kediaman dan komersial: pendawaian, naik taraf panel, pencahayaan dan pengecas EV\nMendiagnosis dan membaiki kerosakan dengan pantas, dengan kadar pembaikan lawatan pertama 92%\nMenyelia 2 perantis dan mengesahkan kerja mereka mengikut kod\nMengekalkan rekod keselamatan bersih dengan sifar kecederaan kehilangan masa"
      },
      {
        "role": "Perantis Juruelektrik",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Membantu juruelektrik berlesen dalam pendawaian binaan baharu dan pendawaian semula\nMempelajari lenturan konduit, penarikan kabel dan pemasangan panel\nMenamatkan 8,000 jam perantisan dan lulus peperiksaan pekerja mahir pada percubaan pertama"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Sijil",
        "field": "Teknologi Elektrik",
        "start": "2015",
        "end": "2016",
        "notes": "Lesen juruelektrik mahir (Colorado). Bertauliah OSHA 30."
      }
    ],
    "skills": "Pendawaian kediaman dan komersial\nNaik taraf panel dan pengecas EV\nPencarian kerosakan dan pengujian\nPematuhan kod NEC\nLenturan konduit dan penarikan kabel\nPenyeliaan perantis",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Penganalisis Kewangan",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Penganalisis kewangan dengan pengalaman 6 tahun dalam pembajetan, ramalan dan analisis pelaburan. Membina model ramalan yang mengurangkan varians bajet sebanyak 30% dan menyokong keputusan pelaburan $50M. Mahir dalam Excel, SQL dan pemodelan kewangan.",
    "experience": [
      {
        "role": "Penganalisis Kewangan",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Membina ramalan bulanan dan bajet tahunan untuk portfolio $120M\nMengurangkan varians bajet sebanyak 30% dengan model ramalan berasaskan pemacu\nMenyokong keputusan pelaburan bernilai $50M dengan penilaian dan analisis senario\nMembentangkan penemuan setiap bulan kepada CFO dan ketua jabatan"
      },
      {
        "role": "Penganalisis Kewangan Junior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mac 2021",
        "current": false,
        "points": "Menyediakan laporan prestasi mingguan untuk 12 cawangan\nMengautomasikan pelaporan dalam Excel, menjimatkan 10 jam seminggu\nMembantu pasukan kredit dengan analisis portfolio pinjaman"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Kewangan",
        "start": "2015",
        "end": "2019",
        "notes": "Calon CFA Tahap II. Kerja kursus dalam penilaian dan kewangan korporat."
      }
    ],
    "skills": "Pemodelan dan ramalan kewangan\nPembajetan dan analisis varians\nPenilaian (DCF, perbandingan)\nExcel (lanjutan) dan SQL\nBloomberg Terminal\nVisualisasi data (Power BI)",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Hindi (fasih)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Jurutera Awam",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Jurutera awam (PE) dengan pengalaman 7 tahun dalam reka bentuk infrastruktur jalan dan air. Mengetuai reka bentuk pelebaran lebuh raya 12 batu dan sistem air ribut yang melayani 8,000 rumah. Mahir dalam AutoCAD Civil 3D, anggaran kos dan penyelarasan permit.",
    "experience": [
      {
        "role": "Jurutera Awam",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Mengetuai reka bentuk pelebaran lebuh raya 12 batu, daripada ukur tanah hingga dokumen pembinaan\nMereka bentuk sistem air ribut yang melayani 8,000 rumah, diluluskan pada kali pertama oleh bandar raya\nMenyelaraskan permit dengan 4 agensi dan menguruskan bajet reka bentuk $2.5M\nMenyemak dan mengecap lukisan sebagai Jurutera Profesional berlesen"
      },
      {
        "role": "Jurutera Awam Junior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dis 2020",
        "current": false,
        "points": "Menyediakan pelan penggredan dan saliran untuk 20+ pembangunan kediaman\nMenjalankan anggaran kos dan pengiraan kuantiti untuk projek jalan\nMenghadiri pemeriksaan tapak dan menulis laporan kemajuan"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Kejuruteraan Awam",
        "start": "2014",
        "end": "2018",
        "notes": "Lesen Jurutera Profesional (Washington). Lulus EIT 2018."
      }
    ],
    "skills": "Reka bentuk jalan dan saliran\nAutoCAD Civil 3D\nPemodelan air ribut\nAnggaran kos\nPenyelarasan permit\nPenjadualan projek (MS Project)",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Jurutera Mekanikal",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Jurutera mekanikal dengan pengalaman 6 tahun mereka bentuk sistem HVAC dan peralatan pengeluaran. Mengurangkan penggunaan tenaga sebanyak 18% merentas 3 kilang dengan saluran udara dan kawalan yang direka semula, dan mengetuai reka bentuk semula mesin yang meningkatkan output sebanyak 25%. Mahir dalam SolidWorks, FEA dan analisis terma.",
    "experience": [
      {
        "role": "Jurutera Mekanikal",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Mereka bentuk peralatan HVAC dan pengeluaran untuk 3 kilang dengan 400+ kakitangan\nMengurangkan penggunaan tenaga sebanyak 18% dengan mereka bentuk semula saluran udara dan urutan kawalan\nMengetuai reka bentuk semula mesin yang meningkatkan output sebanyak 25% tanpa ruang lantai tambahan\nMenjalankan FEA dan analisis terma pada bahagian baharu sebelum prototaip"
      },
      {
        "role": "Jurutera Mekanikal Junior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Ogo 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Memodelkan bahagian dan pemasangan dalam SolidWorks untuk pelanggan automotif\nMenyediakan lukisan, bil bahan dan laporan ujian\nMenyokong binaan prototaip dan menyelesaikan isu padanan di lantai bengkel"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Kejuruteraan Mekanikal",
        "start": "2015",
        "end": "2019",
        "notes": "Kerja kursus dalam termodinamik, mekanik bendalir dan reka bentuk mesin."
      }
    ],
    "skills": "Reka bentuk HVAC\nSolidWorks dan AutoCAD\nFEA dan analisis terma\nReka bentuk mesin\nKecekapan tenaga\nGD&T dan toleransi",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Korea (perbualan)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Jurutera Elektrik",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Jurutera elektrik dengan pengalaman 6 tahun dalam sistem terbenam dan elektronik kuasa. Mereka bentuk papan kawalan yang kini digunakan dalam 50,000+ peranti dan mengurangkan kos papan sebanyak 22% melalui reka bentuk semula komponen. Mahir dalam Altium, C, pengujian perisian tegar dan pematuhan EMC.",
    "experience": [
      {
        "role": "Jurutera Elektrik",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Mereka bentuk papan kawalan terbenam yang digunakan dalam 50,000+ peranti setahun\nMengurangkan kos papan sebanyak 22% dengan mereka bentuk semula peringkat kuasa dan mendapatkan sumber alternatif\nMengetuai pengujian pematuhan EMC, lulus pada kali pertama untuk 4 barisan produk\nMenulis dan menyemak perisian tegar dalam C untuk mikropengawal"
      },
      {
        "role": "Jurutera Elektrik Junior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Menyusun atur PCB dalam Altium untuk pelanggan pengguna dan industri\nMembina dan menguji prototaip, menyahpepijat kerosakan perkakasan\nMenulis prosedur ujian yang mengurangkan masa ujian produksi sebanyak 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Kejuruteraan Elektrik",
        "start": "2015",
        "end": "2019",
        "notes": "Kerja kursus dalam sistem terbenam, elektronik kuasa dan pemprosesan isyarat."
      }
    ],
    "skills": "Sistem terbenam dan reka bentuk PCB\nAltium Designer\nC dan perisian tegar\nElektronik kuasa\nPengujian pematuhan EMC\nOsiloskop dan peralatan makmal",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Gujarati (perbualan)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Penganalisis Data",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Penganalisis data dengan pengalaman 4 tahun menukar data jualan dan operasi menjadi keputusan. Membina papan pemuka yang digunakan oleh 60+ pengurus, mengurangkan masa pelaporan bulanan daripada 3 hari kepada 4 jam dan menemui ralat harga bernilai $180,000 setahun. Mahir dalam SQL, Excel dan Power BI.",
    "experience": [
      {
        "role": "Penganalisis Data",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Membina papan pemuka Power BI yang digunakan oleh 60+ pengurus kedai dan wilayah\nMengurangkan pelaporan bulanan daripada 3 hari kepada 4 jam dengan saluran SQL automatik\nMenemui ralat harga bernilai $180,000 setahun dengan mengaudit data promosi\nMembentangkan penemuan setiap bulan kepada pasukan komersial"
      },
      {
        "role": "Penganalisis Data Junior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Ogo 2020",
        "end": "Dis 2021",
        "current": false,
        "points": "Membersih dan menggabungkan data penghantaran daripada 4 sistem menjadi satu jadual pelaporan\nMembina penjejak Excel yang menggantikan kiraan manual untuk 2 pasukan\nMenjawab soalan data ad-hoc untuk pengurus operasi setiap hari"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistik",
        "start": "2016",
        "end": "2020",
        "notes": "Kerja kursus dalam regresi, pangkalan data dan visualisasi data."
      }
    ],
    "skills": "SQL dan pembersihan data\nPower BI dan Tableau\nExcel (lanjutan)\nPython (pandas)\nReka bentuk papan pemuka\nAsas ujian A/B",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Vietnam (perbualan)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Saintis Data",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Saintis data dengan pengalaman 5 tahun membina model pembelajaran mesin untuk e-dagang. Model cadangan yang saya lancarkan meningkatkan hasil per lawatan sebanyak 12%, dan model churn kini menandakan 80% pelanggan berisiko. Mahir dalam Python, SQL dan penggunaan model.",
    "experience": [
      {
        "role": "Saintis Data",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Melancarkan model cadangan yang meningkatkan hasil per lawatan sebanyak 12%\nMembina model churn yang menandakan 80% pelanggan berisiko sebulan lebih awal\nMenggunakan model ke produksi dengan saluran pemantauan dan latihan semula\nMembentangkan hasil model kepada pasukan produk dan pemasaran setiap bulan"
      },
      {
        "role": "Saintis Data Junior",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Membina model ramalan untuk 3 pelanggan runcit dengan ketepatan 90%+\nMembersih dan menyediakan set data 10M+ baris untuk pemodelan\nMenulis dokumentasi supaya pelanggan boleh menjalankan semula model sendiri"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Sains Data",
        "start": "2018",
        "end": "2020",
        "notes": "Tesis tentang sistem cadangan. Sarjana Muda Sains dalam Matematik (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nPembelajaran mesin dan statistik\nSQL dan Spark\nPenggunaan model (Docker, AWS)\nUjian A/B\nVisualisasi data",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Arab (fasih)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Pembangun Web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Pembangun web dengan pengalaman 4 tahun membina laman web pantas dan boleh diakses dalam HTML, CSS dan JavaScript. Membina semula pembayaran kedai yang meningkatkan penukaran sebanyak 18% dan menyelenggara 12 laman pelanggan dengan masa operasi 99.9%. Kukuh dalam reka bentuk responsif, prestasi dan asas SEO.",
    "experience": [
      {
        "role": "Pembangun Web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mac 2022",
        "end": "",
        "current": true,
        "points": "Membina laman web responsif dalam HTML, CSS, JavaScript dan WordPress untuk 12 pelanggan\nMembina semula pembayaran kedai yang meningkatkan penukaran sebanyak 18%\nMengurangkan purata masa muat halaman daripada 4.2s kepada 1.8s dengan pengoptimuman imej dan kod\nMengekalkan semua laman pelanggan pada masa operasi 99.9% dengan pemantauan dan sandaran"
      },
      {
        "role": "Pembangun Web Junior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Membina halaman pendaratan dan membaiki pepijat merentas 20+ laman perniagaan kecil\nMempelajari Git, reka bentuk responsif dan SEO asas pada projek langsung\nMenjawab e-mel pelanggan dan membuat kemas kini kandungan pada hari yang sama"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Sains Komputer",
        "start": "2017",
        "end": "2021",
        "notes": "Kerja kursus dalam pembangunan web, pangkalan data dan interaksi manusia-komputer."
      }
    ],
    "skills": "HTML, CSS dan JavaScript\nReact dan WordPress\nReka bentuk responsif\nPengoptimuman kelajuan halaman\nGit dan GitHub\nSEO asas",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (fasih)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Pereka Grafik",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Pereka grafik dengan pengalaman 5 tahun dalam penjenamaan, pembungkusan dan reka bentuk media sosial. Mencipta identiti jenama untuk 25+ perniagaan kecil dan reka bentuk semula pembungkusan yang meningkatkan jualan rak sebanyak 14%. Mahir dalam Adobe Illustrator, Photoshop dan Figma.",
    "experience": [
      {
        "role": "Pereka Grafik",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Mereka bentuk identiti jenama, pembungkusan dan kempen sosial untuk 25+ pelanggan\nReka bentuk semula pembungkusan untuk jenama makanan meningkatkan jualan rak sebanyak 14%\nMenghasilkan 30+ aset sosial seminggu merentas Instagram, TikTok dan Facebook\nMembentangkan konsep kepada pelanggan dan menyemak semula daripada maklum balas dengan pantas"
      },
      {
        "role": "Pereka Grafik Junior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dis 2021",
        "current": false,
        "points": "Mereka bentuk risalah, menu dan siaran sosial untuk restoran dan kedai tempatan\nMenyediakan fail sedia cetak dan menyemak pruf dengan pencetak\nMembina perpustakaan templat yang mengurangkan masa reka bentuk sebanyak satu pertiga"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Reka Bentuk Grafik",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio dalam penjenamaan dan reka bentuk pembungkusan."
      }
    ],
    "skills": "Adobe Illustrator dan Photoshop\nFigma\nReka bentuk identiti jenama\nReka bentuk pembungkusan\nReka bentuk media sosial\nPengeluaran cetakan",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Korea (perbualan)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Pereka UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Pereka UX dengan pengalaman 5 tahun menyelidik pengguna dan mereka bentuk produk mudah alih dan web. Mereka bentuk semula aliran orientasi yang mengurangkan keciciran sebanyak 35% dan menjalankan 40+ ujian kebolehgunaan. Mahir dalam Figma, penyelidikan pengguna, rangka wayar dan prototaip.",
    "experience": [
      {
        "role": "Pereka UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Mereka bentuk semula orientasi mudah alih, mengurangkan keciciran sebanyak 35% dalam 3 bulan\nMenjalankan 40+ ujian kebolehgunaan dan temu duga pengguna setahun\nMembina rangka wayar dan prototaip dalam Figma untuk 2 pasukan produk\nBekerja setiap hari dengan jurutera dan pengurus produk tentang penghantaran"
      },
      {
        "role": "Pereka UX Junior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Ogo 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Mereka bentuk skrin dan aliran untuk 5 aplikasi pelanggan\nMenjalankan ujian kebolehgunaan pertama dan menulis penemuan untuk pelanggan\nMembina perpustakaan komponen yang mempercepat penyerahan reka bentuk"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psikologi",
        "start": "2016",
        "end": "2020",
        "notes": "Sijil reka bentuk UX (General Assembly, 2020). Kerja kursus dalam interaksi manusia-komputer."
      }
    ],
    "skills": "Penyelidikan pengguna dan ujian kebolehgunaan\nRangka wayar dan prototaip (Figma)\nSeni bina maklumat\nSistem reka bentuk\nPemetaan perjalanan\nBengkel pihak berkepentingan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Pengurus Pemasaran",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Pengurus pemasaran dengan pengalaman 8 tahun dalam kempen B2B dan pengguna. Menambah prospek layak sebanyak 60% dalam satu tahun, melancarkan barisan produk yang mencapai jualan tahun pertama $3M dan menguruskan bajet tahunan $500,000 merentas pasukan 5 orang.",
    "experience": [
      {
        "role": "Pengurus Pemasaran",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Mengetuai pasukan 5 orang dan bajet pemasaran tahunan $500,000\nMenambah prospek layak sebanyak 60% dalam satu tahun dengan kandungan dan kempen berbayar\nMelancarkan barisan produk yang mencapai jualan tahun pertama $3M\nMengurangkan kos per prospek sebanyak 28% dengan membina semula penyasaran kempen"
      },
      {
        "role": "Pakar Pemasaran",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Menjalankan kempen e-mel kepada 80,000 pelanggan dengan kadar buka 24%\nMenguruskan akaun sosial yang berkembang daripada 5,000 kepada 40,000 pengikut\nMenganjurkan 6 gerai pameran perdagangan setahun, menjana 300+ prospek setiap satu"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kerja kursus dalam tingkah laku pengguna, analitik dan pengurusan jenama."
      }
    ],
    "skills": "Strategi dan perancangan kempen\nPemasaran kandungan dan e-mel\nPengiklanan berbayar (Google, Meta)\nAnalitik pemasaran (GA4)\nKepimpinan pasukan\nPengurusan bajet",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Pengurus Projek",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Pengurus projek (PMP) dengan pengalaman 7 tahun menyiapkan projek perisian dan pembinaan tepat masa dan mengikut bajet. Menguruskan 15 projek bernilai sehingga $4M, dengan kadar penghantaran tepat masa 94%. Mahir dalam Agile, pengurusan risiko dan komunikasi pihak berkepentingan.",
    "experience": [
      {
        "role": "Pengurus Projek",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Menguruskan 15 projek bernilai sehingga $4M, dengan kadar penghantaran tepat masa 94%\nMenjalankan sprint Agile untuk 3 pasukan dan melaporkan kemajuan kepada eksekutif setiap minggu\nMengurangkan lebihan projek sebanyak 30% dengan semakan risiko lebih awal\nMenyelaraskan pembekal, pelanggan dan pasukan dalaman merentas 4 zon masa"
      },
      {
        "role": "Penyelaras Projek",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dis 2020",
        "current": false,
        "points": "Menjejak jadual, bajet dan permit untuk 8 projek bangunan\nMenyediakan laporan status dan nota mesyuarat untuk pelanggan\nMenyelesaikan konflik penjadualan yang menjimatkan 2 minggu pada binaan sekolah"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Pentadbiran Perniagaan",
        "start": "2014",
        "end": "2018",
        "notes": "Bertauliah PMP (2021). ScrumMaster Bertauliah."
      }
    ],
    "skills": "Perancangan dan penjadualan projek\nAgile dan Scrum\nPengurusan risiko\nKawalan bajet\nKomunikasi pihak berkepentingan\nMS Project dan Jira",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Pengurus Sumber Manusia",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Pengurus sumber manusia dengan pengalaman 9 tahun dalam pengambilan, hubungan pekerja dan faedah. Mengurangkan masa pengambilan daripada 45 kepada 28 hari, meningkatkan pengekalan sebanyak 15% dan mengendalikan HR untuk 250 pekerja merentas 3 tapak. Pengetahuan peringkat CIPD tentang undang-undang dan dasar pekerjaan.",
    "experience": [
      {
        "role": "Pengurus Sumber Manusia",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Menjalankan HR untuk 250 pekerja merentas 3 tapak, dengan pasukan 3 orang\nMengurangkan masa pengambilan daripada 45 kepada 28 hari dengan membina semula proses temu duga\nMeningkatkan pengekalan sebanyak 15% dengan program orientasi dan semakan baharu\nMengendalikan hubungan pekerja, rungutan dan kemas kini dasar"
      },
      {
        "role": "Pegawai Am Sumber Manusia",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "Mengambil 120+ kakitangan setahun untuk hotel dan restoran\nMenjalankan semakan gaji dan pendaftaran faedah untuk 400 pekerja\nMenyelesaikan pertikaian kakitangan dan mengekalkan pusing ganti di bawah purata industri"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Sumber Manusia",
        "start": "2012",
        "end": "2016",
        "notes": "Bertauliah SHRM-CP. Kerja kursus dalam undang-undang pekerjaan dan tingkah laku organisasi."
      }
    ],
    "skills": "Pengambilan dan orientasi\nHubungan pekerja\nFaedah dan gaji\nUndang-undang pekerjaan\nPengurusan prestasi\nHRIS (Workday, BambooHR)",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Peguam Bersekutu",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Peguam bersekutu dengan pengalaman 6 tahun dalam litigasi komersial dan undang-undang kontrak. Menguruskan 40+ kes, memenangi penghakiman ringkas dalam 8 kes, dan menggubal kontrak bernilai $25M. Diterima ke Illinois Bar; mahir dalam penyelidikan undang-undang, penggubalan dan nasihat pelanggan.",
    "experience": [
      {
        "role": "Peguam Bersekutu",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "Menguruskan 40+ kes litigasi komersial daripada pemfailan hingga penyelesaian\nMemenangi penghakiman ringkas dalam 8 kes dan menyelesaikan 20 lagi dengan baik\nMenggubal dan merundingkan kontrak bernilai sehingga $25M\nMenasihati pelanggan secara bersemuka dan bertulis tentang risiko dan strategi"
      },
      {
        "role": "Kerani Undang-Undang",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Ogo 2019",
        "end": "Ogo 2020",
        "current": false,
        "points": "Menyelidik undang-undang kes dan menggubal memo untuk 2 hakim\nMenyemak usul dan menyediakan ringkasan hakim untuk 100+ perbicaraan\nMemerhati perbicaraan dan persidangan penyelesaian merentas bahagian sivil"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Undang-Undang",
        "start": "2016",
        "end": "2019",
        "notes": "Diterima ke Illinois Bar (2019). Jurnal undang-undang, editor artikel."
      }
    ],
    "skills": "Litigasi komersial\nPenggubalan dan rundingan kontrak\nPenyelidikan undang-undang (Westlaw, LexisNexis)\nNasihat pelanggan\nDeposisi dan penemuan\nPemfailan dan prosedur mahkamah",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Ahli Farmasi Klinikal",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Ahli farmasi klinikal (PharmD) dengan pengalaman 7 tahun dalam farmasi hospital dan komuniti. Menyemak 100+ pesanan ubat sehari, mengurangkan kejadian ubat buruk sebanyak 25% melalui protokol semakan baharu dan menasihati pesakit tentang penggunaan ubat yang selamat. Berlesen di Pennsylvania.",
    "experience": [
      {
        "role": "Ahli Farmasi Klinikal",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Menyemak 100+ pesanan ubat sehari untuk keselamatan, dos dan interaksi\nMengurangkan kejadian ubat buruk sebanyak 25% dengan protokol semakan berganda baharu\nMenasihati doktor dan jururawat tentang pilihan ubat untuk pesakit kompleks\nMenjalankan rondaan pengawasan antibiotik hospital dua kali seminggu"
      },
      {
        "role": "Ahli Farmasi Kakitangan",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dis 2019",
        "current": false,
        "points": "Mengeluarkan 200+ preskripsi sehari tanpa sebarang ralat pengeluaran\nMenasihati pesakit tentang ubat baharu, kesan sampingan dan penyimpanan\nMemberi vaksinasi selesema dan menjalankan semakan tekanan darah"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmasi",
        "start": "2014",
        "end": "2018",
        "notes": "Ahli farmasi berlesen (Pennsylvania). Pakar Farmakoterapi Bertauliah Lembaga (BCPS)."
      }
    ],
    "skills": "Semakan dan keselamatan ubat\nFarmakologi klinikal\nKaunseling pesakit\nSistem farmasi (Epic, PioneerRx)\nPengawasan antibiotik\nPerkhidmatan vaksinasi",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Doktor Gigi Am",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Doktor gigi am (DDS) dengan pengalaman 8 tahun dalam pergigian restoratif, kosmetik dan pencegahan. Merawat 25+ pesakit sehari merentas amalan 2,000 pesakit, dengan skor kepuasan pesakit 98%. Mahir dalam korona, implan, rawatan saluran akar dan pendakap jernih.",
    "experience": [
      {
        "role": "Doktor Gigi Am",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Merawat 25+ pesakit sehari: tampalan, korona, rawatan saluran akar dan cabutan\nMengekalkan skor kepuasan pesakit 98% merentas 1,200+ ulasan\nMeletakkan 15+ implan sebulan dan menguruskan kes pendakap jernih\nMenyelia 2 ahli higienis dan 4 pembantu pergigian"
      },
      {
        "role": "Doktor Gigi Bersekutu",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Memberikan pergigian am untuk amalan 1,500 pesakit\nMemperkenalkan korona hari yang sama, mengurangkan lawatan semula sebanyak 40%\nMenjalankan lawatan jangkauan sekolah tentang kesihatan mulut kanak-kanak"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Pergigian",
        "start": "2013",
        "end": "2017",
        "notes": "Doktor gigi berlesen (Arizona). Bertauliah Invisalign. Bertauliah CPR/BLS."
      }
    ],
    "skills": "Pergigian restoratif (korona, tampalan)\nRawatan saluran akar\nImplan gigi\nPendakap jernih\nPenjagaan dan komunikasi pesakit\nX-ray digital dan CEREC",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Ahli Fisioterapi",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Ahli fisioterapi (DPT) dengan pengalaman 6 tahun dalam pemulihan ortopedik dan sukan. Merawat 12-15 pesakit sehari, dengan 90% mencapai matlamat mereka dalam sesi yang dirancang. Mahir dalam terapi manual, preskripsi senaman dan ujian kembali bersukan.",
    "experience": [
      {
        "role": "Ahli Fisioterapi",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Merawat 12-15 pesakit sehari untuk kecederaan sukan, pemulihan selepas pembedahan dan sakit belakang\n90% pesakit mencapai matlamat mereka dalam bilangan sesi yang dirancang\nMereka bentuk ujian kembali bersukan yang digunakan oleh 3 pasukan tempatan\nMembimbing 2 graduan baharu dan menyelia penempatan pelajar"
      },
      {
        "role": "Ahli Fisioterapi Kakitangan",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Ogo 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Memberikan pemulihan pesakit dalam untuk pesakit selepas pembedahan dan strok\nMenjalankan kelas senaman berkumpulan untuk 20+ pesakit warga emas seminggu\nMendokumentasikan kemajuan dalam Epic dan menyerahkan kepada pasukan wad"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Terapi Fizikal",
        "start": "2016",
        "end": "2019",
        "notes": "Ahli fisioterapi berlesen (Oregon). Pakar Klinikal Ortopedik (OCS)."
      }
    ],
    "skills": "Pemulihan ortopedik dan sukan\nTerapi manual\nPreskripsi senaman\nUjian kembali bersukan\nPendidikan pesakit\nDokumentasi (Epic)",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Ketua Cef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Ketua cef dengan pengalaman 10 tahun di dapur Creole dan Amerika moden. Mengetuai briged 12 orang di restoran 200 tempat duduk, mengurangkan kos makanan sebanyak 15% dengan pesanan lebih ketat dan memenangi 'Menu Baharu Terbaik' daripada panduan makanan bandar raya pada 2025.",
    "experience": [
      {
        "role": "Ketua Cef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Mengetuai briged 12 orang di restoran 200 tempat duduk yang melayani 300+ tetamu semalam\nMengurangkan kos makanan sebanyak 15% dengan pesanan lebih ketat dan menu bermusim\nMemenangi 'Menu Baharu Terbaik' daripada panduan makanan bandar raya pada 2025\nMereka bentuk menu, melatih tukang masak dan mengendalikan laluan hidangan pada perkhidmatan Jumaat dan Sabtu"
      },
      {
        "role": "Sous Cef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dis 2020",
        "current": false,
        "points": "Menjalankan dapur apabila ketua cef tiada, meliputi 150 tetamu semalam\nMenguruskan stok, pesanan dan hubungan pembekal\nMelatih 8 tukang masak barisan dan mengurangkan pusing ganti kakitangan sebanyak satu pertiga"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Seni Kulinari",
        "start": "2014",
        "end": "2016",
        "notes": "Bertauliah Pengurus Perlindungan Makanan ServSafe."
      }
    ],
    "skills": "Reka bentuk menu dan pengiraan kos\nMasakan Creole dan Amerika moden\nKepimpinan dapur (briged 12 orang)\nKeselamatan makanan (ServSafe)\nPengurusan pembekal\nKatering bankuet dan acara",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (fasih)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Pegawai Polis",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Pegawai polis dengan pengalaman 8 tahun dalam rondaan, kepolisan komuniti dan siasatan. Memberi respons kepada 30+ panggilan seminggu, dengan anugerah penghargaan untuk de-eskalasi dan jangkauan komuniti. Terlatih dalam intervensi krisis, pertolongan cemas dan penulisan laporan.",
    "experience": [
      {
        "role": "Pegawai Polis",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Meronda daerah 40,000 penduduk, memberi respons kepada 30+ panggilan seminggu\nMenerima 2 anugerah penghargaan untuk de-eskalasi dan jangkauan komuniti\nMenyiasat kecurian dan serangan, menulis laporan yang digunakan dalam 50+ pendakwaan\nMembimbing 3 pegawai baharu melalui latihan lapangan"
      },
      {
        "role": "Pegawai Rondaan",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Ogo 2017",
        "end": "Mei 2019",
        "current": false,
        "points": "Meronda jalan daerah dan memberi respons kepada panggilan kecemasan\nMenyampaikan kertas mahkamah dan membantu pengangkutan banduan\nMenamatkan latihan intervensi krisis dan pertolongan cemas"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Sijil",
        "field": "Penguatkuasaan Undang-Undang",
        "start": "2017",
        "end": "2017",
        "notes": "Graduan Akademi Latihan Pegawai Keamanan Ohio. Terlatih Pasukan Intervensi Krisis."
      }
    ],
    "skills": "Rondaan dan respons kecemasan\nKepolisan komuniti\nIntervensi krisis dan de-eskalasi\nPenulisan laporan\nSiasatan\nPertolongan cemas dan CPR",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Anggota Bomba / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Anggota bomba dan EMT dengan pengalaman 7 tahun dalam pemadaman kebakaran, penyelamatan dan respons perubatan kecemasan. Memberi respons kepada 900+ panggilan, termasuk kebakaran struktur, penyelamatan kenderaan dan kecemasan perubatan. Terlatih HazMat dengan rekod keselamatan bersih.",
    "experience": [
      {
        "role": "Anggota Bomba / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mac 2020",
        "end": "",
        "current": true,
        "points": "Memberi respons kepada 900+ panggilan kebakaran, penyelamatan dan perubatan merentas daerah 3 balai\nMemberikan rawatan perubatan kecemasan sebagai EMT bertauliah pada 60% panggilan\nTerlatih HazMat; mengetuai dekontaminasi pada insiden kimia\nMelatih rekrut baharu dalam pengendalian hos, tangga dan teknik pencarian"
      },
      {
        "role": "Anggota Bomba Sukarela",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Memberi respons kepada kebakaran hutan dan struktur sebagai sukarelawan\nMenamatkan latihan Anggota Bomba I & II dan EMT-Basic\nMembantu menjalankan ceramah keselamatan kebakaran komuniti di sekolah"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Sijil",
        "field": "Sains Kebakaran",
        "start": "2017",
        "end": "2018",
        "notes": "Anggota Bomba I & II. Bertauliah EMT-Basic. Terlatih Operasi HazMat."
      }
    ],
    "skills": "Pemadaman kebakaran dan penyelamatan\nRawatan perubatan kecemasan (EMT)\nOperasi HazMat\nTangga, hos dan pengudaraan\nKeselamatan kebakaran komuniti\nKerja berpasukan di bawah tekanan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Tukang Paip Berlesen",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Tukang paip utama berlesen dengan pengalaman 11 tahun dalam paip kediaman dan komersial. Menyiapkan 600+ kerja setahun, daripada pemasangan kasar hingga pemasangan dandang, dengan kadar pembaikan lawatan pertama 98%. Mahir dalam pemasangan paip, pembersihan longkang dan pematuhan kod.",
    "experience": [
      {
        "role": "Tukang Paip Utama",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Menyiapkan 600+ kerja kediaman dan komersial setahun\nMemasang dandang, pemanas air dan pemasangan kasar bilik mandi penuh\nMengekalkan kadar pembaikan lawatan pertama 98% pada panggilan perkhidmatan\nMenyelia 3 perantis dan mengesahkan kerja mereka"
      },
      {
        "role": "Tukang Paip Mahir",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dis 2018",
        "current": false,
        "points": "Menjalankan paip binaan baharu untuk 40+ rumah setahun\nMembersihkan longkang tersumbat dan membaiki kebocoran untuk rumah dan restoran\nMempelajari pemasangan gas dan pencegahan aliran balik"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Sijil",
        "field": "Teknologi Paip",
        "start": "2013",
        "end": "2014",
        "notes": "Lesen tukang paip utama (Tennessee). Bertauliah pencegahan aliran balik."
      }
    ],
    "skills": "Paip kediaman dan komersial\nPemasangan paip dan pematerian\nPembersihan longkang dan pemeriksaan kamera\nPemasangan dandang dan pemanas air\nPemasangan gas\nPematuhan kod paip",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Tukang Kayu Mahir",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Tukang kayu mahir dengan pengalaman 9 tahun dalam kerja rangka, kemasan dan kabinet khas. Membina rangka 30+ rumah dan memasang dapur di 60+ rumah, dengan reputasi ukuran tepat dan kemasan bersih. Mahir membaca pelan dan bekerja mengikut kod.",
    "experience": [
      {
        "role": "Tukang Kayu Mahir",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Membina rangka 30+ rumah dan memasang dapur di 60+ rumah\nMembina kabinet khas dan kemasan dengan toleransi 1/16 inci\nMembaca dan mengikuti pelan seni bina, menandakan ralat sebelum ia membazirkan wang\nMelatih 2 perantis dalam teknik rangka dan kemasan"
      },
      {
        "role": "Perantis Tukang Kayu",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Membantu kerja rangka, dinding kering dan lantai dalam projek ubah suai\nMempelajari cara menggunakan gergaji, router dan pistol paku dengan selamat\nMenamatkan 8,000 jam perantisan dan lulus peperiksaan pekerja mahir"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Sijil",
        "field": "Pertukangan Kayu",
        "start": "2015",
        "end": "2016",
        "notes": "Tukang kayu mahir. Bertauliah OSHA 10."
      }
    ],
    "skills": "Kerja rangka dan struktur\nPertukangan kemasan dan trim\nKabinet khas\nMembaca pelan seni bina\nAlat kuasa dan keselamatan\nDinding kering dan lantai",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Guru Sekolah Menengah (Matematik)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Guru sekolah menengah dengan pengalaman 8 tahun mengajar matematik untuk tahun 9-12. Meningkatkan kadar lulus algebra daripada 64% kepada 83% dan melatih pasukan matematik ke 2 perlawanan akhir peringkat negeri. Mahir dalam pengajaran berbeza, persediaan peperiksaan dan komunikasi ibu bapa.",
    "experience": [
      {
        "role": "Guru Matematik (Tahun 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Ogo 2019",
        "end": "",
        "current": true,
        "points": "Mengajar algebra, geometri dan pra-kalkulus kepada 120 murid merentas 5 kelas\nMeningkatkan kadar lulus algebra daripada 64% kepada 83% dalam 3 tahun\nMelatih pasukan matematik ke 2 perlawanan akhir peringkat negeri\nMenjalankan tuisyen selepas sekolah untuk 30 murid seminggu"
      },
      {
        "role": "Guru Matematik (Tahun 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Ogo 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Mengajar algebra dan geometri kepada 100 murid setahun\nMemperkenalkan kuiz mingguan yang mengurangkan jurang kerja rumah sebanyak separuh\nMenganjurkan pesta matematik pertama sekolah dengan 200 murid"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Pendidikan Matematik",
        "start": "2013",
        "end": "2017",
        "notes": "Lesen mengajar negeri (New Hampshire, tahun 7-12, matematik)."
      }
    ],
    "skills": "Pengajaran matematik (algebra hingga pra-kalkulus)\nPersediaan peperiksaan\nPengajaran berbeza\nPengurusan bilik darjah\nKomunikasi ibu bapa\nGoogle Classroom dan Desmos",
    "languages": "Bahasa Inggeris (fasih)",
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
    "summary": "Guru prasekolah dengan pengalaman 6 tahun menjaga kanak-kanak berumur 3-5 tahun. Mahir dalam pembelajaran berasaskan permainan, bimbingan tingkah laku dan komunikasi ibu bapa. Membina program fonik yang meningkatkan skor kesediaan sekolah di seluruh kelas saya.",
    "experience": [
      {
        "role": "Guru Prasekolah",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Ogo 2020",
        "end": "",
        "current": true,
        "points": "Mengajar dan menjaga kelas 18 kanak-kanak berumur 3-5 tahun\nMembina program fonik yang meningkatkan skor kesediaan sekolah di seluruh kelas\nMerancang tema mingguan, kraf dan permainan luar\nBerkongsi kemas kini harian dan laporan kemajuan penggal dengan ibu bapa"
      },
      {
        "role": "Penolong Guru Prasekolah",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "Menyokong guru utama dengan kelas 20 kanak-kanak\nMenjalankan masa cerita, lagu dan aktiviti seni setiap hari\nMengekalkan rekod keselamatan dan kebersihan mengikut piawaian negeri"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Diploma Bersekutu",
        "field": "Pendidikan Awal Kanak-Kanak",
        "start": "2016",
        "end": "2018",
        "notes": "Kelayakan Bersekutu Perkembangan Kanak-Kanak (CDA). Bertauliah pertolongan cemas dan CPR."
      }
    ],
    "skills": "Pembelajaran berasaskan permainan\nBimbingan tingkah laku\nFonik dan literasi awal\nKomunikasi ibu bapa\nKeselamatan bilik darjah\nPerancangan seni dan kraf",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Pekerja Sosial Kanak-Kanak dan Keluarga",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Pekerja sosial berlesen dengan pengalaman 7 tahun menyokong kanak-kanak dan keluarga. Menguruskan beban kes 25 keluarga, menyelaraskan perkhidmatan merentas sekolah dan penyedia kesihatan, dan menyiapkan laporan mahkamah yang diandalkan hakim. Mahir dalam penilaian, sokongan krisis dan perlindungan.",
    "experience": [
      {
        "role": "Pekerja Sosial Kanak-Kanak dan Keluarga",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Menguruskan beban kes 25 keluarga, melawat rumah dan sekolah setiap minggu\nMenyiapkan laporan mahkamah dan memberi keterangan di mahkamah keluarga\nMenyelaraskan sokongan perumahan, kesihatan dan sekolah untuk keluarga yang terdedah\nMengurangkan masa menunggu penilaian sebanyak 20% dengan sistem triaj baharu"
      },
      {
        "role": "Pekerja Kes",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dis 2019",
        "current": false,
        "points": "Menyokong 40+ keluarga dalam perumahan sementara dengan faedah dan rujukan\nMenjalankan bengkel keibubapaan dan pembajetan mingguan\nMengekalkan nota kes tepat untuk audit dan laporan pembiayaan"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Kerja Sosial",
        "start": "2016",
        "end": "2018",
        "notes": "Pekerja Sosial Berlesen (Ohio). Kerja kursus dalam kebajikan kanak-kanak dan sistem keluarga."
      }
    ],
    "skills": "Pengurusan kes (25 keluarga)\nPerlindungan kanak-kanak\nLaporan mahkamah keluarga\nSokongan krisis\nPenyelarasan pelbagai agensi\nRujukan faedah dan perumahan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Pembantu Guaman",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Pembantu guaman dengan pengalaman 6 tahun dalam sokongan litigasi dan pemfailan korporat. Menguruskan penemuan untuk 30+ kes, menggubal pliding dan kontrak, dan mengekalkan tarikh akhir pemfailan dengan rekod tepat masa 100%. Mahir dalam Westlaw, e-penemuan dan perisian pengurusan kes.",
    "experience": [
      {
        "role": "Pembantu Guaman",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Menguruskan penemuan untuk 30+ kes litigasi, menyemak 10,000+ dokumen\nMenggubal pliding, usul dan kontrak untuk semakan peguam\nMengekalkan rekod tepat masa 100% pada pemfailan mahkamah dan tarikh akhir\nMenyelaraskan saksi dan menyediakan fail perbicaraan"
      },
      {
        "role": "Pembantu Undang-Undang",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Ogo 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Temu duga pengambilan untuk 20+ pelanggan seminggu\nMenyediakan borang dan pemfailan untuk kes perumahan dan keluarga\nMenterjemah dokumen undang-undang untuk pelanggan berbahasa Sepanyol"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Diploma Bersekutu",
        "field": "Pengajian Paralegal",
        "start": "2017",
        "end": "2019",
        "notes": "Pembantu Guaman Bertauliah NALA (CP). Program diluluskan ABA."
      }
    ],
    "skills": "Sokongan litigasi dan penemuan\nPenggubalan undang-undang\nE-penemuan (Relativity)\nPengurusan kes (Clio)\nPemfailan mahkamah dan tarikh akhir\nPenyelidikan undang-undang (Westlaw)",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (fasih)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Kerani Simpan Kira",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Kerani simpan kira dengan pengalaman 5 tahun dalam akaun belum bayar, penginvoisan dan penyesuaian bank. Memproses 300+ invois sebulan dengan ketepatan 99.8% dan memastikan buku kemas untuk penutupan akhir bulan. Mahir dalam QuickBooks, Excel dan sokongan gaji.",
    "experience": [
      {
        "role": "Kerani Simpan Kira",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Memproses 300+ invois pembekal sebulan dengan ketepatan 99.8%\nMenyesuaikan 6 akaun bank setiap minggu dan menandakan perbezaan pada hari yang sama\nMenyediakan data gaji untuk 45 kakitangan dan mengejar bayaran pelanggan tertunggak\nMengekalkan rekod kemas untuk audit akhir tahun, dengan sifar penemuan"
      },
      {
        "role": "Pembantu Akaun",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mac 2021",
        "current": false,
        "points": "Memasukkan invois jualan dan resit ke dalam QuickBooks setiap hari\nMenjawab pertanyaan pembekal tentang bayaran melalui telefon dan e-mel\nMemfailkan kertas kerja dan memastikan arkib sentiasa terkini"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Sijil",
        "field": "Simpan Kira",
        "start": "2018",
        "end": "2019",
        "notes": "Pengguna Bertauliah QuickBooks."
      }
    ],
    "skills": "Akaun belum bayar dan belum terima\nPenyesuaian bank\nPenginvoisan (300+ sebulan)\nQuickBooks dan Excel\nSokongan gaji\nKemasukan data (65 pspm)",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Pembantu Tadbir",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Pembantu tadbir dengan pengalaman 6 tahun memastikan pejabat berjalan lancar. Menguruskan kalendar untuk 4 pengurus, mengatur perjalanan dan mesyuarat, serta mengendalikan 100+ e-mel sehari. Dikenali kerana ketepatan, budi bicara dan ketenangan di bawah tekanan tarikh akhir.",
    "experience": [
      {
        "role": "Pembantu Tadbir",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Menguruskan kalendar, perjalanan dan mesyuarat untuk 4 pengurus kanan\nMengendalikan 100+ e-mel sehari, menggubal balasan dan menandakan keutamaan\nMenyediakan kertas lembaga dan mengambil minit pada mesyuarat bulanan\nMenjalankan bekalan pejabat dan pesanan pembekal, mengurangkan kos sebanyak 12%"
      },
      {
        "role": "Penyambut Tetamu",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Ogo 2019",
        "end": "Dis 2020",
        "current": false,
        "points": "Menyambut 60+ pesakit sehari dan menguruskan buku janji temu\nMenjawab telefon dan mengendalikan pertanyaan insurans\nMengekalkan rekod pesakit tepat dan sulit"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Diploma Bersekutu",
        "field": "Pentadbiran Pejabat",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Pengurusan kalendar dan perjalanan\nE-mel dan surat-menyurat\nMinit mesyuarat\nMicrosoft Office (Word, Excel, Outlook)\nKemasukan data (70 pspm)\nBekalan pejabat dan pembekal",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Juruwang Bank",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Juruwang bank dengan pengalaman 4 tahun melayani 80+ pelanggan sehari dengan tepat dan cermat. Laci tunai seimbang hingga ke sen sepanjang 3 tahun, tanpa sebarang kekurangan. Mahir dalam deposit, pengeluaran, semakan penipuan dan merujuk pelanggan kepada produk yang sesuai.",
    "experience": [
      {
        "role": "Juruwang Bank",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mac 2022",
        "end": "",
        "current": true,
        "points": "Melayani 80+ pelanggan sehari: deposit, pengeluaran, bayaran dan pemindahan\nLaci tunai seimbang hingga ke sen selama 3 tahun tanpa sebarang kekurangan\nMengesan dan menghentikan 12 percubaan penipuan, menyelamatkan pelanggan $90,000+\nMerujuk pelanggan kepada produk simpanan dan pinjaman, mencapai sasaran rujukan setiap suku tahun"
      },
      {
        "role": "Bersekutu Khidmat Pelanggan",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Membuka akaun baharu dan mengeluarkan kad debit untuk ahli\nMenjawab pertanyaan telefon tentang baki dan penyata\nMembantu ahli menyediakan perbankan dalam talian dan mudah alih"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Diploma Bersekutu",
        "field": "Perniagaan",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Pengendalian dan pengimbangan tunai\nDeposit, pengeluaran dan bayaran\nPengesanan penipuan\nKhidmat pelanggan\nPerisian perbankan (Fiserv)\nRujukan produk",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Pengurus Jualan",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Pengurus jualan dengan pengalaman 10 tahun mengetuai pasukan sehingga 15 wakil. Mengembangkan hasil wilayah daripada $4M kepada $7.5M dalam 3 tahun, meningkatkan kadar kemenangan daripada 22% kepada 34% dan mengurangkan pusing ganti wakil sebanyak separuh dengan bimbingan dan orientasi lebih baik.",
    "experience": [
      {
        "role": "Pengurus Jualan Wilayah",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Mengetuai pasukan 15 wakil jualan merentas Texas dan Oklahoma\nMengembangkan hasil wilayah daripada $4M kepada $7.5M dalam 3 tahun\nMeningkatkan kadar kemenangan daripada 22% kepada 34% dengan bimbingan dan semakan saluran yang lebih baik\nMengurangkan pusing ganti wakil sebanyak separuh dengan program orientasi baharu"
      },
      {
        "role": "Wakil Jualan",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dis 2020",
        "current": false,
        "points": "Menjual peralatan industri kepada 80+ akaun, mencapai kuota 5 tahun berturut-turut\nWakil teratas di wilayah selama 3 tahun berturut-turut\nMembina rangkaian rujukan yang membawa masuk 25% perniagaan baharu"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kerja kursus dalam pengurusan jualan dan rundingan."
      }
    ],
    "skills": "Kepimpinan pasukan jualan (15 wakil)\nPertumbuhan dan ramalan hasil\nPengurusan saluran (Salesforce)\nBimbingan dan orientasi pekerja baharu\nRundingan\nPerancangan wilayah",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Pengurus Pembinaan",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Pengurus pembinaan dengan pengalaman 12 tahun menyiapkan projek komersial dan kediaman bernilai sehingga $12M. Menyiapkan 20+ projek dengan kadar tepat masa 95%, sifar kecederaan kehilangan masa di tapak saya dan bajet dikekalkan dalam lingkungan 3%. Mahir dalam penjadualan, pengurusan subkontraktor dan keselamatan.",
    "experience": [
      {
        "role": "Pengurus Pembinaan",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Menyiapkan projek komersial dan kediaman bernilai sehingga $12M\nMenyiapkan 20+ projek dengan kadar tepat masa 95% dan bajet dalam lingkungan 3%\nMenguruskan 30+ subkontraktor dan 50 pekerja merentas 3 tapak aktif\nSifar kecederaan kehilangan masa merentas semua tapak dalam 4 tahun"
      },
      {
        "role": "Penyelia Tapak",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Menjalankan operasi tapak harian untuk binaan pejabat dan runcit\nMenyelaraskan penghantaran, pemeriksaan dan jadual subkontraktor\nMengekalkan rekod keselamatan bersih dan lulus setiap pemeriksaan OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Pembinaan Bangunan",
        "start": "2009",
        "end": "2013",
        "notes": "Bertauliah OSHA 30. Calon CCM (Pengurus Pembinaan Bertauliah)."
      }
    ],
    "skills": "Penjadualan projek (MS Project, Procore)\nKawalan bajet\nPengurusan subkontraktor\nKeselamatan tapak (OSHA 30)\nMembaca pelan\nPelaporan pelanggan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Pembantu Perubatan Bertauliah",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Pembantu perubatan bertauliah dengan pengalaman 5 tahun dalam amalan keluarga dan rawatan segera. Menyediakan bilik untuk 25+ pesakit sehari, mengambil tanda vital, mengambil darah dan menguruskan kaunter hadapan dengan skor kepuasan pesakit 97%. Mahir dalam EHR, flebotomi dan semakan insurans.",
    "experience": [
      {
        "role": "Pembantu Perubatan Bertauliah",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Menyediakan bilik untuk 25+ pesakit sehari: tanda vital, sejarah dan persediaan peperiksaan\nMengambil darah dan menjalankan ujian makmal asas dengan kadar cucukan pertama 99%\nMenguruskan kaunter hadapan, penjadualan dan semakan insurans\nMengekalkan skor kepuasan pesakit 97% merentas 800+ tinjauan"
      },
      {
        "role": "Pembantu Perubatan",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Ogo 2019",
        "end": "Mac 2021",
        "current": false,
        "points": "Melakukan triaj pesakit datang terus dan membantu doktor dengan prosedur kecil\nMemberi vaksinasi dan mengendalikan pengumpulan spesimen\nMengekalkan bilik peperiksaan lengkap, bersih dan sedia antara pesakit"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Sijil",
        "field": "Bantuan Perubatan",
        "start": "2018",
        "end": "2019",
        "notes": "Pembantu Perubatan Bertauliah (CMA, AAMA). Bertauliah BLS. Terlatih dalam flebotomi."
      }
    ],
    "skills": "Pengambilan pesakit dan tanda vital\nFlebotomi\nEHR (eClinicalWorks)\nVaksinasi\nPengesahan insurans\nPengurusan kaunter hadapan",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (fasih)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Pelajar",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Pelajar senior sekolah menengah yang bermotivasi dengan gred kukuh dan pengalaman kerja sambilan. Pantas belajar, boleh diharap dan pandai bergaul. Mencari peranan sepenuh masa pertama atau kerja sambilan di samping kolej.",
    "experience": [
      {
        "role": "Pembantu Jualan Sambilan",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "Melayani 50+ pelanggan setiap syif pada hujung minggu dan selepas sekolah\nMengendalikan tunai, mengisi semula rak dan memastikan paparan kemas\nDipercayai membuka kedai pada pagi Sabtu"
      },
      {
        "role": "Tutor Sukarela",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Mengajar murid lebih muda matematik dua kali seminggu\nMembantu menganjurkan program bacaan musim panas untuk 40 kanak-kanak"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diploma Sekolah Menengah",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Senarai kepujian, 3 tahun. Kapten pasukan debat."
      }
    ],
    "skills": "Khidmat pelanggan\nPengendalian tunai\nKerja berpasukan\nPengurusan masa\nMicrosoft Office\nPengucapan awam (pasukan debat)",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Graduan Baharu \u2014 Pentadbiran Perniagaan",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Graduan pentadbiran perniagaan baharu dengan pengalaman latihan industri dalam pemasaran dan operasi. Menganjurkan pertandingan perniagaan kampus dengan 200 peserta dan menamatkan latihan industri 6 bulan di mana saya mengurangkan masa pelaporan sebanyak separuh. Bersemangat untuk memulakan kerjaya sepenuh masa dan belajar dengan pantas.",
    "experience": [
      {
        "role": "Pelatih Pemasaran",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Menjalankan akaun sosial syarikat, menambah pengikut daripada 2,000 kepada 6,500\nMembina papan pemuka pelaporan yang mengurangkan masa pelaporan mingguan sebanyak separuh\nMenulis 20 siaran blog yang membawa masuk 15,000+ bacaan"
      },
      {
        "role": "Ketua Sukarelawan Acara",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "Mei 2025",
        "current": false,
        "points": "Menganjurkan pertandingan perniagaan dengan 200 peserta dan 12 hakim\nMenguruskan bajet $5,000 dan pasukan 8 sukarelawan"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Pentadbiran Perniagaan",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Senarai Dekan, 2 tahun. Projek tahun akhir tentang pemasaran perniagaan kecil."
      }
    ],
    "skills": "Pemasaran media sosial\nExcel dan Google Sheets\nKemahiran pembentangan\nPenganjuran acara\nKerja berpasukan\nAnalisis data asas",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Bersekutu Pemasaran Junior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Bersekutu pemasaran junior dengan pengalaman 2 tahun dalam kandungan, e-mel dan media sosial. Mengembangkan surat berita pelanggan daripada 1,000 kepada 4,000 pelanggan dan menjalankan kempen dengan purata kadar buka 22%. Bersedia untuk tanggungjawab lebih besar dan portfolio akaun yang lebih besar.",
    "experience": [
      {
        "role": "Bersekutu Pemasaran Junior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Mengembangkan surat berita pelanggan daripada 1,000 kepada 4,000 pelanggan dalam 14 bulan\nMenulis dan menjadualkan 12 siaran sosial seminggu untuk 4 pelanggan\nMenjalankan kempen e-mel dengan purata kadar buka 22%\nMelaporkan hasil kempen kepada pelanggan setiap bulan"
      },
      {
        "role": "Pelatih Pemasaran",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Menulis penerangan produk untuk 200+ item di laman web syarikat\nMembantu menjalankan kempen jualan musim bunga yang meningkatkan pesanan dalam talian sebanyak 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Komunikasi",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Kerja kursus dalam pemasaran digital dan penulisan media."
      }
    ],
    "skills": "Penulisan kandungan\nPemasaran e-mel (Mailchimp)\nPengurusan media sosial\nGoogle Analytics\nCanva\nPelaporan pelanggan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Penyelia Operasi",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Penyelia operasi dengan pengalaman 8 tahun mengendalikan pasukan gudang 20-30 orang. Mengurangkan ralat pengambilan sebanyak 30%, meningkatkan penghantaran tepat masa daripada 90% kepada 97% dan melatih 15 pekerja baharu. Bersedia untuk peranan pengurus operasi dengan tapak dan bajet lebih besar.",
    "experience": [
      {
        "role": "Penyelia Operasi",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Menyelia 25 kakitangan gudang merentas 2 syif di tapak 90,000 kaki persegi\nMengurangkan ralat pengambilan sebanyak 30% dengan rutin semakan baharu dan pengimbasan kod bar\nMeningkatkan penghantaran tepat masa daripada 90% kepada 97% dalam 2 tahun\nMelatih 15 pekerja baharu dan menaikkan 3 kepada peranan ketua pasukan"
      },
      {
        "role": "Ketua Pasukan",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Mengetuai pasukan 10 pengambil dan pembungkus pada syif malam\nMemperkenalkan jadual giliran yang mengurangkan kerja lebih masa sebanyak 20% tanpa terlepas tarikh akhir\nMenjalankan taklimat keselamatan dan memastikan pasukan bebas kemalangan selama 2 tahun"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Pengurusan Rantaian Bekalan",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Kepimpinan pasukan (25 kakitangan)\nOperasi gudang\nPenambahbaikan proses\nPengurusan keselamatan\nKawalan inventori\nWMS dan Excel",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Hindi (perbualan)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Pengurus Projek Senior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Pengurus projek senior dengan pengalaman 14 tahun menyiapkan projek perisian bernilai sehingga $8M. Mengetuai 30+ projek dengan kadar tepat masa 92%, membina PMO dari awal dan membimbing 10 pengurus projek. Dikenali kerana penghantaran tenang di bawah tekanan dan pelaporan jujur kepada eksekutif.",
    "experience": [
      {
        "role": "Pengurus Projek Senior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Menyiapkan projek perisian bernilai sehingga $8M dengan kadar tepat masa 92%\nMembina PMO syarikat dari awal: templat, pelaporan dan tadbir urus\nMembimbing 10 pengurus projek dan mengendalikan komuniti PM bulanan\nMelaporkan terus kepada CTO tentang program 40 orang"
      },
      {
        "role": "Pengurus Projek",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dis 2018",
        "current": false,
        "points": "Menguruskan 20+ projek untuk pelanggan runcit dan penjagaan kesihatan\nMemperkenalkan amalan Agile yang mengurangkan masa penghantaran sebanyak 25%\nMengembangkan 2 akaun utama daripada $500k kepada $2M hasil tahunan"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Sistem Maklumat",
        "start": "2008",
        "end": "2012",
        "notes": "Bertauliah PMP (2015). ScrumMaster Bertauliah. Kerja kursus MBA (2018-2019, tidak lengkap)."
      }
    ],
    "skills": "Penghantaran program dan projek\nPersediaan dan tadbir urus PMO\nAgile dan Waterfall\nKawalan bajet ($8M)\nPelaporan eksekutif\nPementoran pasukan",
    "languages": "Bahasa Inggeris (fasih)\nBahasa Sepanyol (perbualan)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Ketua Pegawai Operasi",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Ketua pegawai operasi dengan pengalaman 18 tahun mengembangkan operasi untuk syarikat runcit dan logistik. Mengembangkan operasi 200 orang kepada 900 orang merentas 6 tapak, meningkatkan margin EBITDA daripada 8% kepada 14% dan mengetuai 2 pengambilalihan. Berpengalaman dalam pelaporan peringkat lembaga dan hubungan pelabur.",
    "experience": [
      {
        "role": "Ketua Pegawai Operasi",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Menjalankan operasi untuk 900 orang merentas 6 tapak dan bajet $180M\nMeningkatkan margin EBITDA daripada 8% kepada 14% dalam 3 tahun\nMengetuai 2 pengambilalihan dan menyepadukan kedua-dua pasukan dalam masa 6 bulan\nMelaporkan kepada lembaga setiap bulan tentang operasi, risiko dan pertumbuhan"
      },
      {
        "role": "Naib Presiden Operasi",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dis 2020",
        "current": false,
        "points": "Mengembangkan operasi daripada 200 kepada 600 orang merentas 4 tapak\nMembuka 3 pusat pengedaran tepat masa dan di bawah bajet\nMembina pasukan kepimpinan yang masih mengendalikan perniagaan hari ini"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Pentadbiran Perniagaan",
        "start": "2010",
        "end": "2012",
        "notes": "Sarjana Muda Sains dalam Ekonomi, NYU (2006). Kursus tadbir urus lembaga (2020)."
      }
    ],
    "skills": "Operasi berskala besar (900 orang)\nPemilikan P&L ($180M)\nPenggabungan dan pengambilalihan\nPelaporan kepada lembaga\nStrategi pertumbuhan\nPembinaan pasukan kepimpinan",
    "languages": "Bahasa Inggeris (fasih)",
    "template": "executive"
  }
};
});
