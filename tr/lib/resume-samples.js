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
      "title": "Lisanslı Hemşire",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Tıbbi-cerrahi ve telemetri birimlerinde 6 yıllık deneyime sahip lisanslı hemşire. Hasta değerlendirmesi, IV tedavisi, ilaç uygulaması ve elektronik sağlık kayıtlarında yetenekli. Yüksek baskı durumlarında hastalar ve ailelerle sakin, net iletişimiyle bilinir.",
    "experience": [
      {
        "role": "Lisanslı Hemşire",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Haz 2021",
        "end": "",
        "current": true,
        "points": "Vardiya başına 5-6 hastaya, 32 yataklı bir tıbbi-cerrahi birimde bakım vermek; değerlendirme, ilaç uygulaması ve yara bakımı dahil\n4 yeni mezun hemşireyi eğitmek ve mentorluk etmek, oryantasyon sürelerini 2 hafta azaltmak\nDevir teslimde çift kontrol rutini tanıtarak birimdeki ilaç hatalarını %18 azaltmak\nTüm bakımı Epic elektronik sağlık kayıtlarında doğru şekilde belgelemek"
      },
      {
        "role": "Personel Hemşire",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Ağu 2019",
        "end": "May 2021",
        "current": false,
        "points": "Günde 40'tan fazla ayakta hasta için triyaj yürüttü, acil vakaları aynı gün bakım için önceliklendirdi\nAylık toplum sağlığı etkinliklerinde aşılar ve sağlık taramaları yaptı\nUzmanlara yönlendirmeleri koordine etti ve test sonuçlarını takip etti"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Nursing",
        "start": "2015",
        "end": "2019",
        "notes": "Lisanslı Hemşire lisansı (Teksas). BLS ve ACLS sertifikalı."
      }
    ],
    "skills": "Hasta değerlendirmesi\nIV tedavisi ve ilaç uygulaması\nElektronik sağlık kayıtları (Epic)\nTelemetri izleme\nHasta ve aile eğitimi\nEnfeksiyon kontrolü",
    "languages": "İngilizce (akıcı)\nİspanyolca (konuşma düzeyinde)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Yazılım Geliştirici",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Python ve JavaScript'te web uygulamaları oluşturmada 5 yıllık deneyime sahip yazılım geliştirici. 200.000'den fazla kullanıcının kullandığı özellikler gönderdi, API yanıt sürelerini %40 azalttı ve monolitin mikro hizmetlere geçişine liderlik etti. Test, kod incelemesi ve net belgelendirme konusunda güçlü.",
    "experience": [
      {
        "role": "Yazılım Geliştirici",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "200.000'den fazla kullanıcıya hizmet veren, Python (Django) ve React'te müşteriye dönük web özellikleri oluşturmak ve sürdürmek\nÖnbellek ekleyerek ve yavaş sorguları düzelterek ortalama API yanıt süresini 850 ms'den 500 ms'ye indirmek\nFaturalandırma hizmetinin mikro hizmetlere geçişini sıfır kesintiyle yönetmek\nHaftada 10'dan fazla pull request incelemek ve 2 genç geliştiriciye mentorluk etmek"
      },
      {
        "role": "Genç Geliştirici",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Tem 2020",
        "end": "Şub 2022",
        "current": false,
        "points": "3 ekip için manuel elektronik tabloların yerini alan JavaScript'te dahili panolar oluşturdu\nKapsamı %45'ten %78'e yükselten otomatik testler yazdı\nİlk yılda ürün genelinde 120'den fazla hatayı düzeltti"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Bilgisayar Bilimi",
        "start": "2016",
        "end": "2020",
        "notes": "Veritabanları, algoritmalar ve işletim sistemleri alanında dersler."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript ve React\nPostgreSQL ve Redis\nREST API'leri ve mikro hizmetler\nGit ve CI/CD\nOtomatik test (pytest, Jest)",
    "languages": "İngilizce (akıcı)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "İlkokul Öğretmeni",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "7 yıllık deneyime sahip ilkokul öğretmeni; 3-5. sınıfları öğretir. Farklılaştırılmış öğretim, sınıf yönetimi ve veli iletişiminde yetenekli. Sınıfımın okuma yeterliliğini iki okul yılında %58'den %81'e yükseltti.",
    "experience": [
      {
        "role": "İlkokul Öğretmeni (4. Sınıf)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Ağu 2020",
        "end": "",
        "current": true,
        "points": "26 öğrencilik bir sınıfa okuma, matematik ve fen öğretmek; 5'i bireysel öğrenme planlarına sahip\nRehberli okuma gruplarıyla sınıf okuma yeterliliğini %58'den %81'e iki yılda yükseltmek\nHer aile için haftalık bir veli bülteni ve dönemlik ilerleme toplantıları yürütmek\nOkulun okuma kulübüne liderlik etmek — 40 öğrenci, 3-5. sınıflar"
      },
      {
        "role": "İlkokul Öğretmeni (3. Sınıf)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Ağu 2018",
        "end": "Haz 2020",
        "current": false,
        "points": "Tüm temel derslerde 24 öğrenci için günlük dersler planladı ve verdi\nSınıf içi bozulmaları yarıya indiren davranış rutinleri tanıttı\nYıl grubu bilim fuarını 120 öğrenci ve 80 veliyle organize etti"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "İlköğretim",
        "start": "2014",
        "end": "2018",
        "notes": "Eyalet öğretmenlik lisansı (Ohio, K-5. sınıflar). Okuma onayı."
      }
    ],
    "skills": "Farklılaştırılmış öğretim\nSınıf yönetimi\nRehberli okuma grupları\nVeli iletişimi\nDers planlama\nGoogle Classroom",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Kıdemli Muhasebeci",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Ay sonu kapanışı, mali raporlama ve iç denetimde 8 yıllık deneyime sahip CPA. Mutabakat sürecini yeniden kurarak defterleri 3 gün daha hızlı kapattı ve bir denetim yılında 240.000 dolarlık geri alınabilir fazla ödeme tespit etti. Excel, QuickBooks ve ERP sistemlerinde güçlü.",
    "experience": [
      {
        "role": "Kıdemli Muhasebeci",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "40 milyon dolarlık bir iş birimi için ay sonu kapanışını üstlenmek, mutabakatları yeniden oluşturduktan sonra 3 gün daha hızlı bitirmek\nÜst yönetim için aylık mali tablolar ve sapma raporları hazırlamak\n240.000 dolarlık geri alınabilir tedarikçi fazla ödemesi tespit etmek — 2024 iç denetimi sırasında\n2 personel muhasebecisini denetlemek ve yevmiye kayıtlarını incelemek"
      },
      {
        "role": "Personel Muhasebecisi",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Haz 2017",
        "end": "Ara 2020",
        "current": false,
        "points": "25 küçük işletme müşterisi için vergi beyannameleri ve mali tablolar hazırladı\n8 müşterinin denetimlerine yardım etti, kontrolleri test etti ve bulguları belgeledi\nSabit varlık kaydını Excel'de otomatikleştirdi, ayda 6 saat tasarruf sağladı"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Accounting",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). AICPA üyesi."
      }
    ],
    "skills": "Month-end close and reconciliations\nFinancial reporting and variance analysis\nInternal audit\nExcel (pivot tables, VLOOKUP)\nQuickBooks and SAP\nTax preparation",
    "languages": "İngilizce (akıcı)\nMandarin (konuşma düzeyinde)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A Kamyon Şoförü",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Uzun yol ve bölgesel yük taşımacılığında 9 yıllık deneyime sahip CDL Class A sürücüsü. 900.000'den fazla kazasız mil, %99 zamanında teslimat oranı ve frigorifik, düz yataklı ve kuru van yüklerinde deneyim. Temiz sürüş kaydı, HazMat ve tanker onayları.",
    "experience": [
      {
        "role": "Uzun Yol Kamyon Şoförü",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Nis 2019",
        "end": "",
        "current": true,
        "points": "Teksas, Oklahoma ve New Mexico'da bölgesel rotalarda haftada 2.800'den fazla mil sürmek\n%99 zamanında teslimat oranını yılda 1.100'den fazla yükte korumak\nFrigorifik ve kuru van yükü taşımak; her gün yolculuk öncesi ve sonrası denetimleri tamamlamak\nToplamda 900.000'den fazla kazasız mil"
      },
      {
        "role": "Teslimat Kamyonu Şoförü",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mar 2016",
        "end": "Mar 2019",
        "current": false,
        "points": "Dallas-Fort Worth bölgesinde günde 15-20 şantiyeye inşaat malzemeleri teslim etti\nForkliftler kullandı ve açık kasa yükleri DOT standartlarına göre sabitledi\nTeslimat evraklarını ve kayıtları sıfır DOT ihlaliyle doğru tuttu"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificate",
        "field": "Ticari Sürüş (CDL Sınıf A)",
        "start": "2015",
        "end": "2016",
        "notes": "HazMat ve tanker onaylarına sahip CDL Class A. Temiz sürüş kaydı."
      }
    ],
    "skills": "Uzun yol ve bölgesel sürüş\nFrigorifik ve açık kasa yükler\nDOT yönetmelikleri ve kayıt defterleri\nYolculuk öncesi denetimler\nRota planlama (GPS, ELD)\nForklift kullanımı",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Perakende Satış Temsilcisi",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Elektronik ve giyim mağazalarında 4 yıllık deneyime sahip perakende satış temsilcisi. Sürekli olarak ekipteki en iyi 3 satıcı arasında, garanti ve aksesuarlarda %32 ek satış oranı ile. Dost canlısı, kasada hızlı ve mağazayı açıp kapatmak için güvenilir.",
    "experience": [
      {
        "role": "Kıdemli Satış Temsilcisi",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Şub 2022",
        "end": "",
        "current": true,
        "points": "Günde 60'tan fazla müşteriye elektronik ve aksesuar satmak; mağaza satışlarında ilk 3 — 8 çeyrek üst üste\nGaranti ve aksesuarlarda %32 ek satış oranına ulaşmak, ekipteki en yüksek\n6 yeni başlayanı kasa, depo ve müşteri hizmetleri standartlarında eğitmek\nGüvenilir anahtar sorumlusu: mağazayı açıp kapatmak ve nakit sayımlarını ele almak"
      },
      {
        "role": "Satış Temsilcisi",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Haz 2021",
        "end": "Oca 2022",
        "current": false,
        "points": "Yoğun bir mağaza katında müşterilerin kıyafet ve beden seçmesine yardımcı oldu\nHer vardiyada teşhirleri düzenli tuttu ve rafları yeniledi\nİade ve değişimleri kibarca ele aldı, şikayetleri en aza indirdi"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Ön Lisans Derecesi",
        "field": "Business",
        "start": "2019",
        "end": "2021",
        "notes": "Perakendede çalışırken yarı zamanlı eğitim."
      }
    ],
    "skills": "Müşteri hizmetleri ve ek satış\nNakit işlemleri ve POS sistemleri\nÜrün bilgisi (elektronik)\nStok yönetimi\nMağaza açma ve kapatma\nEkip eğitimi",
    "languages": "İngilizce (akıcı)\nİspanyolca (akıcı)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Müşteri Hizmetleri Temsilcisi",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Telefon, e-posta ve canlı sohbet desteği verme konusunda 5 yıllık deneyime sahip müşteri hizmetleri temsilcisi. Günde 45'ten fazla vakayı %96 memnuniyet puanı ve %88 ilk temasta çözüm oranıyla çözer. Kızgın müşteriler karşısında sakin ve çözümü bulmakta hızlıdır.",
    "experience": [
      {
        "role": "Müşteri Hizmetleri Temsilcisi",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "May 2021",
        "end": "",
        "current": true,
        "points": "Faturalama, siparişler ve teknik arızalar için günde 45'ten fazla telefon, e-posta ve sohbet vakasını ele almak\n%96 müşteri memnuniyet puanı ve %88 ilk temas çözüm oranı tutmak\nZor çağrıların gerilimini azaltmak ve şikayetleri tekrarlanan işe dönüştürmek\n5 yeni temsilciyi senaryolar, sistemler ve üslup konusunda eğitmek"
      },
      {
        "role": "Destek Temsilcisi",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Eyl 2019",
        "end": "Nis 2021",
        "current": false,
        "points": "Siparişler, iadeler ve geri ödemeler hakkındaki müşteri e-postalarını ve sohbetlerini yanıtladı\nOrtalama ilk yanıt süresini 2 saatin altında tuttu\nTekrarlanan soruları dörtte bir azaltan 20 yardım merkezi makalesi yazdı"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Ön Lisans Derecesi",
        "field": "İşletme",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Telefon, e-posta ve canlı sohbet desteği\nŞikayet ele alma ve gerilimi azaltma\nCRM sistemleri (Zendesk, Salesforce)\nFaturalama ve sipariş sorguları\nDakikada 55 kelime yazma\nEkip eğitimi",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Operasyon Yöneticisi",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "12 yıllık deneyime sahip operasyon yöneticisi; depolama ve dağıtımda 80 kişiye kadar ekipleri yönetir. Sipariş işleme maliyetlerini %22 azalttı, zamanında gönderileri %91'den %98'e yükseltti ve iki yeni lokasyonu zamanında ve bütçe altında açtı.",
    "experience": [
      {
        "role": "Operasyon Yöneticisi",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Şub 2020",
        "end": "",
        "current": true,
        "points": "120.000 fit karelik bir dağıtım merkezini 80 personelle 3 vardiyada yönetmek\nToplama yollarını ve vardiya düzenlerini yeniden tasarlayarak sipariş işleme maliyetlerini %22 azaltmak\nZamanında gönderileri %91'den %98'e 18 ayda yükseltmek\n2 yeni lokasyonu zamanında ve %8 bütçe altında açmak"
      },
      {
        "role": "Depo Amiri",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Haz 2013",
        "end": "Oca 2020",
        "current": false,
        "points": "25 depo personelini ve 4.000'den fazla siparişin günlük sevkiyatını denetledi\nBarkod taramayı tanıttı, toplama hatalarını %35 azalttı\nŞantiyeyi 3 yıl kazasız tutan güvenlik eğitimi yürüttü"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Operasyon Yönetimi",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Yeşil Kuşak."
      }
    ],
    "skills": "Ekip liderliği (80 personele kadar)\nDepolama ve dağıtım\nSüreç iyileştirme\nBütçeleme ve maliyet kontrolü\nGüvenlik yönetimi\nERP ve WMS sistemleri",
    "languages": "İngilizce (akıcı)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Lisanslı Elektrikçi",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Konut ve ticari işlerde 8 yıllık deneyime sahip lisanslı kalfa elektrikçi. Kablolama, pano yükseltmeleri, aydınlatma ve arıza bulmada yetenekli; 400'den fazla işte temiz bir güvenlik kaydı. NEC yönetmelik bilgisi ve çırakları denetleme deneyimi.",
    "experience": [
      {
        "role": "Kalfa Elektrikçi",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mar 2019",
        "end": "",
        "current": true,
        "points": "400'den fazla konut ve ticari işi tamamlamak: kablolama, pano yükseltmeleri, aydınlatma ve EV şarj cihazları\nArızaları hızlı teşhis edip onarmak, %92 ilk ziyarette onarım oranıyla\n2 çırağı denetlemek ve çalışmalarını yönetmeliğe göre onaylamak\nSıfır zaman kayıplı yaralanma ile temiz bir güvenlik kaydı tutmak"
      },
      {
        "role": "Elektrikçi Çırağı",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Haz 2016",
        "end": "Şub 2019",
        "current": false,
        "points": "Yeni inşaat kablolaması ve yeniden kablolamalarda lisanslı elektrikçilere yardım etti\nBoru bükme, kablo çekme ve pano montajı öğrendi\n8.000 çıraklık saatini tamamladı ve kalfalık sınavını ilk seferde geçti"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificate",
        "field": "Elektrik Teknolojisi",
        "start": "2015",
        "end": "2016",
        "notes": "Kalfa elektrikçi lisansı (Colorado). OSHA 30 sertifikalı."
      }
    ],
    "skills": "Konut ve ticari kablolama\nPano yükseltmeleri ve EV şarj cihazları\nArıza bulma ve test\nNEC yönetmelik uyumu\nBoru bükme ve kablo çekme\nÇırak denetimi",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Finans Analisti",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Bütçeleme, tahmin ve yatırım analizinde 6 yıllık deneyime sahip finans analisti. Bütçe sapmasını %30 azaltan tahmin modelleri oluşturdu ve 50 milyon dolarlık yatırım kararlarını destekledi. Excel, SQL ve finansal modellemede güçlü.",
    "experience": [
      {
        "role": "Finans Analisti",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Nis 2021",
        "end": "",
        "current": true,
        "points": "Build monthly forecasts and annual budgets for a $120M portfolio\nCut budget variance by 30% with a driver-based forecasting model\nSupport investment decisions worth $50M with valuation and scenario analysis\nPresent findings monthly to the CFO and department heads"
      },
      {
        "role": "Genç Finans Analisti",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Tem 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "12 şube için haftalık performans raporları hazırladı\nExcel'de raporlamayı otomatikleştirdi, haftada 10 saat tasarruf sağladı\nKredi ekibine kredi portföyü analizinde yardım etti"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finance",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II adayı. Değerleme ve kurumsal finans alanında dersler."
      }
    ],
    "skills": "Finansal modelleme ve tahmin\nBütçeleme ve sapma analizi\nDeğerleme (DCF, karşılaştırılabilirler)\nExcel (ileri) ve SQL\nBloomberg Terminal\nVeri görselleştirme (Power BI)",
    "languages": "İngilizce (akıcı)\nHintçe (akıcı)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "İnşaat Mühendisi",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Yol ve su altyapısı tasarımında 7 yıllık deneyime sahip inşaat mühendisi (PE). 12 millik bir otoyol genişletmesinin ve 8.000 haneye hizmet veren bir yağmur suyu sisteminin tasarımına liderlik etti. AutoCAD Civil 3D, maliyet tahmini ve izin koordinasyonunda yetenekli.",
    "experience": [
      {
        "role": "İnşaat Mühendisi",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "Ölçümden inşaat belgelerine kadar 12 millik bir otoyol genişletmesinin tasarımına liderlik etmek\n8.000 eve hizmet veren, şehir tarafından ilk seferde onaylanan bir yağmur suyu sistemi tasarlamak\n4 kurumla izinleri koordine etmek ve 2,5 milyon dolarlık bir tasarım bütçesini yönetmek\nLisanslı bir Profesyonel Mühendis olarak çizimleri incelemek ve mühürlemek"
      },
      {
        "role": "Genç İnşaat Mühendisi",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Tem 2018",
        "end": "Ara 2020",
        "current": false,
        "points": "20'den fazla konut projesi için tesviye ve drenaj planları hazırladı\nYol projeleri için maliyet tahminleri ve metrajlar yürüttü\nŞantiye denetimlerine katıldı ve ilerleme raporları yazdı"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "İnşaat Mühendisliği",
        "start": "2014",
        "end": "2018",
        "notes": "Profesyonel Mühendis lisansı (Washington). EIT 2018'de geçildi."
      }
    ],
    "skills": "Yol ve drenaj tasarımı\nAutoCAD Civil 3D\nYağmur suyu modellemesi\nMaliyet tahmini\nİzin koordinasyonu\nProje programlama (MS Project)",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Makine Mühendisi",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "HVAC sistemleri ve üretim ekipmanları tasarlamada 6 yıllık deneyime sahip makine mühendisi. Enerji kullanımını %18 azalttı — 3 tesiste yeniden tasarlanan kanal sistemi ve kontrollerle — ve çıktıyı %25 artıran bir makine yeniden tasarımına liderlik etti. SolidWorks, FEA ve termal analizde yetenekli.",
    "experience": [
      {
        "role": "Makine Mühendisi",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Şub 2021",
        "end": "",
        "current": true,
        "points": "3 tesis için HVAC ve üretim ekipmanları tasarlamak — 400'den fazla personeli olan\nKanal sistemini ve kontrol dizilerini yeniden tasarlayarak enerji kullanımını %18 azaltmak\nEk zemin alanı olmadan çıktıyı %25 artıran bir makine yeniden tasarımına liderlik etmek\nPrototiplemeden önce yeni parçalarda FEA ve termal analiz yürütmek"
      },
      {
        "role": "Genç Makine Mühendisi",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Ağu 2019",
        "end": "Oca 2021",
        "current": false,
        "points": "Modelled parts and assemblies in SolidWorks for automotive clients\nPrepared drawings, bills of materials and test reports\nSupported prototype builds and resolved fit issues on the shop floor"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Makine Mühendisliği",
        "start": "2015",
        "end": "2019",
        "notes": "Termodinamik, akışkanlar mekaniği ve makine tasarımı alanında dersler."
      }
    ],
    "skills": "HVAC tasarımı\nSolidWorks ve AutoCAD\nFEA ve termal analiz\nMakine tasarımı\nEnerji verimliliği\nGD&T ve toleranslama",
    "languages": "İngilizce (akıcı)\nKorece (konuşma düzeyinde)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektrik Mühendisi",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Gömülü sistemler ve güç elektroniğinde 6 yıllık deneyime sahip elektrik mühendisi. Artık 50.000'den fazla cihazda kullanılan kontrol kartları tasarladı ve bileşen yeniden tasarımıyla kart maliyetini %22 azalttı. Altium, C, ürün yazılımı testi ve EMC uyumluluğunda yetenekli.",
    "experience": [
      {
        "role": "Elektrik Mühendisi",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Yılda 50.000'den fazla cihazda kullanılan gömülü kontrol kartları tasarlamak\nGüç katını yeniden tasarlayarak ve alternatifler tedarik ederek kart maliyetini %22 azaltmak\nEMC uyumluluk testlerine liderlik etmek, 4 ürün serisinde ilk seferde geçmek\nMikrodenetleyiciler için C'de donanım yazılımı yazmak ve incelemek"
      },
      {
        "role": "Genç Elektrik Mühendisi",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Tem 2019",
        "end": "Şub 2021",
        "current": false,
        "points": "Tüketici ve endüstriyel müşteriler için Altium'da PCB'ler tasarladı\nPrototipler oluşturdu ve test etti, donanım arızalarını ayıkladı\nÜretim test süresini %30 azaltan test prosedürleri yazdı"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektrik Mühendisliği",
        "start": "2015",
        "end": "2019",
        "notes": "Gömülü sistemler, güç elektroniği ve sinyal işleme alanında dersler."
      }
    ],
    "skills": "Gömülü sistemler ve PCB tasarımı\nAltium Designer\nC ve donanım yazılımı\nGüç elektroniği\nEMC uyumluluk testi\nOsiloskoplar ve laboratuvar aletleri",
    "languages": "İngilizce (akıcı)\nGuceratça (konuşma düzeyinde)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Veri Analisti",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Satış ve operasyon verilerini kararlara dönüştürme konusunda 4 yıllık deneyime sahip veri analisti. 60'tan fazla yöneticinin kullandığı panolar oluşturdu, aylık raporlama süresini 3 günden 4 saate indirdi ve yılda 180.000 dolar değerinde bir fiyatlandırma hatası buldu. SQL, Excel ve Power BI'da güçlü.",
    "experience": [
      {
        "role": "Veri Analisti",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Oca 2022",
        "end": "",
        "current": true,
        "points": "60'tan fazla mağaza ve bölge yöneticisinin kullandığı Power BI panoları oluşturmak\nOtomatik SQL boru hatlarıyla aylık raporlamayı 3 günden 4 saate indirmek\nPromosyon verilerini denetleyerek yılda 180.000 dolar değerinde bir fiyatlandırma hatası bulmak\nBulguları aylık olarak ticari ekibe sunmak"
      },
      {
        "role": "Genç Veri Analisti",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Ağu 2020",
        "end": "Ara 2021",
        "current": false,
        "points": "4 sistemden teslimat verilerini temizledi ve tek bir raporlama tablosunda birleştirdi\n2 ekip için manuel sayımların yerini alan Excel takipçileri oluşturdu\nOperasyon yöneticileri için günlük özel veri sorularını yanıtladı"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistics",
        "start": "2016",
        "end": "2020",
        "notes": "Regresyon, veritabanları ve veri görselleştirme alanında dersler."
      }
    ],
    "skills": "SQL ve veri temizleme\nPower BI ve Tableau\nExcel (ileri)\nPython (pandas)\nPano tasarımı\nA/B testi temelleri",
    "languages": "İngilizce (akıcı)\nVietnamca (konuşma düzeyinde)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Veri Bilimci",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "E-ticaret için makine öğrenmesi modelleri geliştirme konusunda 5 yıllık deneyime sahip veri bilimci. Yayına aldığım bir öneri modeli ziyaret başına geliri %12 artırdı ve bir kayıp modeli artık risk altındaki müşterilerin %80'ini işaretliyor. Python, SQL ve model dağıtımında güçlü.",
    "experience": [
      {
        "role": "Veri Bilimci",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Şub 2022",
        "end": "",
        "current": true,
        "points": "Ziyaret başına geliri %12 artıran bir öneri modeli gönderdi\nRisk altındaki müşterilerin %80'ini bir ay önceden işaretleyen bir kayıp modeli oluşturdu\nModelleri izleme ve yeniden eğitim boru hatlarıyla üretime dağıttı\nModel sonuçlarını aylık olarak ürün ve pazarlama ekiplerine sundu"
      },
      {
        "role": "Genç Veri Bilimci",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Tem 2020",
        "end": "Oca 2022",
        "current": false,
        "points": "3 perakende müşterisi için %90'ın üzerinde doğrulukla tahmin modelleri oluşturdu\nModelleme için 10 milyondan fazla satırlık veri kümelerini temizledi ve hazırladı\nMüşterilerin modelleri kendilerinin yeniden çalıştırabilmesi için belgeler yazdı"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Veri Bilimi",
        "start": "2018",
        "end": "2020",
        "notes": "Öneri sistemleri üzerine tez. Matematik alanında BS (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMakine öğrenimi ve istatistik\nSQL ve Spark\nModel dağıtımı (Docker, AWS)\nA/B testi\nVeri görselleştirme",
    "languages": "İngilizce (akıcı)\nArapça (akıcı)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Web Geliştirici",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "HTML, CSS ve JavaScript'te hızlı, erişilebilir web siteleri oluşturmada 4 yıllık deneyime sahip web geliştirici. Bir mağazanın dönüşümleri %18 artıran ödeme sürecini yeniden oluşturdu ve 12 müşteri sitesini %99,9 çalışma süresiyle korur. Duyarlı tasarım, performans ve SEO temelleri konusunda güçlü.",
    "experience": [
      {
        "role": "Web Geliştirici",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Build responsive websites in HTML, CSS, JavaScript and WordPress for 12 clients\nRebuilt a store checkout that lifted conversions by 18%\nCut average page load time from 4.2s to 1.8s with image and code optimisation\nKeep all client sites at 99.9% uptime with monitoring and backups"
      },
      {
        "role": "Genç Web Geliştirici",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Haz 2021",
        "end": "Şub 2022",
        "current": false,
        "points": "20'den fazla küçük işletme sitesinde açılış sayfaları oluşturdu ve hataları düzeltti\nCanlı projelerde Git, duyarlı tasarım ve temel SEO öğrendi\nMüşteri e-postalarını yanıtladı ve aynı gün içerik güncellemeleri yaptı"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Bilgisayar Bilimi",
        "start": "2017",
        "end": "2021",
        "notes": "Web geliştirme, veritabanları ve insan-bilgisayar etkileşimi alanında dersler."
      }
    ],
    "skills": "HTML, CSS ve JavaScript\nReact ve WordPress\nDuyarlı tasarım\nSayfa hızı optimizasyonu\nGit ve GitHub\nTemel SEO",
    "languages": "İngilizce (akıcı)\nİspanyolca (akıcı)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafik Tasarımcı",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Markalama, ambalaj ve sosyal medya tasarımında 5 yıllık deneyime sahip grafik tasarımcı. 25'ten fazla küçük işletme için marka kimlikleri oluşturdu ve raf satışlarını %14 artıran bir ambalaj yeniden tasarımı yaptı. Adobe Illustrator, Photoshop ve Figma'da yetenekli.",
    "experience": [
      {
        "role": "Grafik Tasarımcı",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Oca 2022",
        "end": "",
        "current": true,
        "points": "25'ten fazla müşteri için marka kimlikleri, ambalaj ve sosyal kampanyalar tasarlamak\nBir gıda markası için ambalaj yeniden tasarımı raf satışlarını %14 artırdı\nInstagram, TikTok ve Facebook'ta haftada 30'dan fazla sosyal içerik üretmek\nKonseptleri müşterilere sunmak ve geri bildirimden hızlıca revize etmek"
      },
      {
        "role": "Genç Grafik Tasarımcı",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Tem 2020",
        "end": "Ara 2021",
        "current": false,
        "points": "Yerel restoranlar ve dükkanlar için broşürler, menüler ve sosyal gönderiler tasarladı\nBaskıya hazır dosyalar hazırladı ve provaları matbaalarla kontrol etti\nTasarım süresini üçte bir azaltan bir şablon kütüphanesi oluşturdu"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafik Tasarım",
        "start": "2016",
        "end": "2020",
        "notes": "Markalama ve ambalaj tasarımı portföyü."
      }
    ],
    "skills": "Adobe Illustrator ve Photoshop\nFigma\nMarka kimliği tasarımı\nAmbalaj tasarımı\nSosyal medya tasarımı\nBaskı üretimi",
    "languages": "İngilizce (akıcı)\nKorece (konuşma düzeyinde)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX Tasarımcısı",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Kullanıcıları araştırmada ve mobil ve web ürünleri tasarlamada 5 yıllık deneyime sahip UX tasarımcısı. Bırakmayı %35 azaltan bir işe alıştırma akışını yeniden tasarladı ve 40'tan fazla kullanılabilirlik testi yürüttü. Figma, kullanıcı araştırması, tel kafes ve prototiplemede yetenekli.",
    "experience": [
      {
        "role": "UX Tasarımcısı",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Şub 2022",
        "end": "",
        "current": true,
        "points": "Mobil işe alıştırmayı yeniden tasarlayarak bırakmayı %35 azalttı (3 ayda)\nYılda 40'tan fazla kullanılabilirlik testi ve kullanıcı görüşmesi yürüttü\n2 ürün ekibi için Figma'da tel kafesler ve prototipler oluşturdu\nTeslimatta mühendisler ve ürün yöneticileriyle günlük çalıştı"
      },
      {
        "role": "Genç UX Tasarımcısı",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Ağu 2020",
        "end": "Oca 2022",
        "current": false,
        "points": "5 müşteri uygulaması için ekranlar ve akışlar tasarladı\nİlk kullanılabilirlik testlerini yürüttü ve bulguları müşteriler için yazdı\nTasarım devrini hızlandıran bir bileşen kütüphanesi oluşturdu"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychology",
        "start": "2016",
        "end": "2020",
        "notes": "UX tasarım sertifikası (General Assembly, 2020). İnsan-bilgisayar etkileşimi alanında dersler."
      }
    ],
    "skills": "Kullanıcı araştırması ve kullanılabilirlik testi\nTel kafes ve prototipleme (Figma)\nBilgi mimarisi\nTasarım sistemleri\nYolculuk haritalama\nPaydaş atölyeleri",
    "languages": "İngilizce (akıcı)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Pazarlama Yöneticisi",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "8 yıllık deneyime sahip pazarlama yöneticisi — B2B ve tüketici kampanyalarında. Nitelikli potansiyel müşterileri bir yılda %60 büyüttü, ilk yıl satışlarında 3 milyon dolara ulaşan bir ürün serisi başlattı ve 500.000 dolarlık yıllık bütçeyi 5 kişilik bir ekip genelinde yönetir.",
    "experience": [
      {
        "role": "Pazarlama Yöneticisi",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "5 kişilik bir ekibe ve 500.000 dolarlık yıllık pazarlama bütçesine liderlik etmek\nİçerik ve ücretli kampanyalarla nitelikli potansiyel müşterileri bir yılda %60 büyütmek\nİlk yıl satışlarında 3 milyon dolara ulaşan bir ürün serisi başlatmak\nKampanya hedeflemesini yeniden oluşturarak potansiyel müşteri başına maliyeti %28 azaltmak"
      },
      {
        "role": "Pazarlama Uzmanı",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Haz 2017",
        "end": "Şub 2021",
        "current": false,
        "points": "80.000 aboneye %24 açılma oranıyla e-posta kampanyaları yürüttü\n5.000'den 40.000 takipçiye büyüyen sosyal hesapları yönetti\nYılda 6 fuar standı organize etti, her biri 300'den fazla potansiyel müşteri üretti"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Tüketici davranışı, analitik ve marka yönetimi alanında dersler."
      }
    ],
    "skills": "Kampanya stratejisi ve planlama\nİçerik ve e-posta pazarlaması\nÜcretli reklamcılık (Google, Meta)\nPazarlama analitiği (GA4)\nEkip liderliği\nBütçe yönetimi",
    "languages": "İngilizce (akıcı)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Proje Yöneticisi",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Yazılım ve inşaat projelerini zamanında ve bütçesinde teslim etmede 7 yıllık deneyime sahip proje yöneticisi (PMP). 15 projeyi yönetti — 4 milyon dolara kadar değerde, %94 zamanında teslimat oranıyla. Agile, risk yönetimi ve paydaş iletişiminde yetenekli.",
    "experience": [
      {
        "role": "Proje Yöneticisi",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "15 projeyi yönetmek — 4 milyon dolara kadar değerde, %94 zamanında teslimat oranıyla\n3 ekip için Agile sprintler yürütmek ve ilerlemeyi yöneticilere haftalık raporlamak\nDaha erken risk incelemeleriyle proje aşımını %30 azaltmak\n4 saat diliminde tedarikçileri, müşterileri ve dahili ekipleri koordine etmek"
      },
      {
        "role": "Proje Koordinatörü",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Tem 2018",
        "end": "Ara 2020",
        "current": false,
        "points": "8 bina projesi için programları, bütçeleri ve izinleri takip etti\nMüşteriler için durum raporları ve toplantı notları hazırladı\nBir okul inşaatında 2 hafta kazandıran programlama çakışmalarını çözdü"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "İşletme",
        "start": "2014",
        "end": "2018",
        "notes": "PMP sertifikalı (2021). Sertifikalı ScrumMaster."
      }
    ],
    "skills": "Proje planlama ve programlama\nAgile ve Scrum\nRisk yönetimi\nBütçe kontrolü\nPaydaş iletişimi\nMS Project ve Jira",
    "languages": "İngilizce (akıcı)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "İnsan Kaynakları Yöneticisi",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "İşe alımlarda, çalışan ilişkilerinde ve yan haklarda 9 yıllık deneyime sahip insan kaynakları yöneticisi. İşe alım süresini 45 günden 28 güne indirdi, elde tutma oranını %15 artırdı ve 250 çalışan için İK'yı 3 lokasyonda yönetir. CIPD düzeyinde iş hukuku ve politika bilgisi.",
    "experience": [
      {
        "role": "İnsan Kaynakları Yöneticisi",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Şub 2020",
        "end": "",
        "current": true,
        "points": "250 çalışan için İK'yı 3 lokasyonda, 3 kişilik bir ekiple yürütmek\nMülakat sürecini yeniden oluşturarak işe alım süresini 45 günden 28 güne indirmek\nYeni bir işe alıştırma ve değerlendirme programıyla elde tutmayı %15 artırmak\nÇalışan ilişkilerini, şikayetleri ve politika güncellemelerini ele almak"
      },
      {
        "role": "İK Genel Uzmanı",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Haz 2016",
        "end": "Oca 2020",
        "current": false,
        "points": "Oteller ve restoranlar için yılda 120'den fazla personel işe aldı\n400 çalışan için bordro kontrolleri ve yan hak kayıtları yürüttü\nPersonel anlaşmazlıklarını çözdü ve personel devir hızını sektör ortalamasının altında tuttu"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "İnsan Kaynakları",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP sertifikalı. İş hukuku ve örgütsel davranış alanında dersler."
      }
    ],
    "skills": "İşe alım ve işe alıştırma\nÇalışan ilişkileri\nYan haklar ve bordro\nİş hukuku\nPerformans yönetimi\nHRIS (Workday, BambooHR)",
    "languages": "İngilizce (akıcı)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Avukat",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Ticaret davaları ve sözleşme hukukunda 6 yıllık deneyime sahip avukat. 40'tan fazla davayı yönetti, 8 davada özet yargı kararı kazandı ve 25 milyon dolar değerinde sözleşmeler hazırladı. Illinois Barosu'na kabul edildi; hukuki araştırma, yazım ve müvekkil danışmanlığında yetenekli.",
    "experience": [
      {
        "role": "Avukat",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Eyl 2020",
        "end": "",
        "current": true,
        "points": "40'tan fazla ticari dava dosyasını başvurudan uzlaşmaya kadar yönetmek\n8 davada özet yargı kazanmak ve 20 davayı daha lehte sonuçlandırmak\n25 milyon dolara kadar değerde sözleşmeler hazırlamak ve müzakere etmek\nMüşterilere risk ve strateji konusunda yüz yüze ve yazılı danışmanlık vermek"
      },
      {
        "role": "Hukuk Katibi",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Ağu 2019",
        "end": "Ağu 2020",
        "current": false,
        "points": "İçtihat hukukunu araştırdı ve 2 hakim için muhtıralar hazırladı\nÖnerileri inceledi ve 100'den fazla duruşma için mahkeme özetleri hazırladı\nHukuk bölümlerinde duruşmaları ve uzlaşma konferanslarını gözlemledi"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Law",
        "start": "2016",
        "end": "2019",
        "notes": "Illinois Barosu'na kabul edildi (2019). Hukuk dergisi, makale editörü."
      }
    ],
    "skills": "Ticari dava\nSözleşme hazırlama ve müzakere\nHukuki araştırma (Westlaw, LexisNexis)\nMüşteri danışmanlığı\nİfadeler ve keşif\nMahkeme başvuruları ve usul",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinik Eczacı",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Hastane ve serbest eczacılıkta 7 yıllık deneyime sahip klinik eczacı (PharmD). Günde 100'den fazla ilaç talimatını inceler, yeni bir kontrol protokolüyle advers ilaç olaylarını %25 azalttı ve hastalara güvenli ilaç kullanımı konusunda danışmanlık yapar. Pennsylvania'da lisanslı.",
    "experience": [
      {
        "role": "Klinik Eczacı",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Oca 2020",
        "end": "",
        "current": true,
        "points": "Güvenlik, dozaj ve etkileşimler için günde 100'den fazla ilaç emrini incelemek\nYeni bir çift kontrol protokolüyle olumsuz ilaç olaylarını %25 azaltmak\nKarmaşık hastalar için ilaç seçimlerinde doktorlara ve hemşirelere danışmanlık vermek\nHastanenin antibiyotik yönetim turlarını haftada iki kez yürütmek"
      },
      {
        "role": "Personel Eczacı",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Tem 2018",
        "end": "Ara 2019",
        "current": false,
        "points": "Günde 200'den fazla reçeteyi sıfır dağıtım hatasıyla dağıttı\nHastalara yeni ilaçlar, yan etkiler ve saklama konusunda danışmanlık verdi\nGrip aşıları yaptı ve tansiyon kontrolleri gerçekleştirdi"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Pharmacy",
        "start": "2014",
        "end": "2018",
        "notes": "Lisanslı eczacı (Pensilvanya). Kurul Sertifikalı Farmakoterapi Uzmanı (BCPS)."
      }
    ],
    "skills": "İlaç incelemesi ve güvenliği\nKlinik farmakoloji\nHasta danışmanlığı\nEczane sistemleri (Epic, PioneerRx)\nAntibiyotik yönetimi\nAşılama hizmetleri",
    "languages": "İngilizce (akıcı)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Genel Diş Hekimi",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Restoratif, kozmetik ve koruyucu diş hekimliğinde 8 yıllık deneyime sahip genel diş hekimi (DDS). Günde 25'ten fazla hastayı 2.000 hastalı bir klinikte %98 hasta memnuniyet puanıyla tedavi eder. Kuronlar, implantlar, kanal tedavileri ve şeffaf plaklarda yetenekli.",
    "experience": [
      {
        "role": "Genel Diş Hekimi",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Şub 2019",
        "end": "",
        "current": true,
        "points": "Günde 25'ten fazla hasta tedavi etmek: dolgular, kuronlar, kanal tedavileri ve çekimler\n%98 hasta memnuniyet puanını 1.200'den fazla yorumda tutmak\nAyda 15'ten fazla implant yerleştirmek ve şeffaf plak vakalarını yönetmek\n2 hijyenisti ve 4 diş asistanını denetlemek"
      },
      {
        "role": "Diş Hekimi",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Tem 2017",
        "end": "Oca 2019",
        "current": false,
        "points": "1.500 hastalı bir klinik için genel diş hekimliği sağladı\nAynı gün kuronları tanıttı, geri dönüş ziyaretlerini %40 azalttı\nÇocukların ağız sağlığı konusunda okul erişim ziyaretleri yürüttü"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Dentistry",
        "start": "2013",
        "end": "2017",
        "notes": "Lisanslı diş hekimi (Arizona). Invisalign sertifikalı. CPR/BLS sertifikalı."
      }
    ],
    "skills": "Restoratif diş hekimliği (kuronlar, dolgular)\nKanal tedavisi\nDiş implantları\nŞeffaf plaklar\nHasta bakımı ve iletişimi\nDijital röntgenler ve CEREC",
    "languages": "İngilizce (akıcı)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fizyoterapist",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Ortopedik ve spor rehabilitasyonunda 6 yıllık deneyime sahip fizyoterapist (DPT). Günde 12-15 hasta tedavi eder, %90'ı planlanan seanslar içinde hedeflerine ulaşır. Manuel terapi, egzersiz reçetesi ve spora dönüş testlerinde yetenekli.",
    "experience": [
      {
        "role": "Fizyoterapist",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Spor yaralanmaları, ameliyat sonrası rehabilitasyon ve sırt ağrısı için günde 12-15 hasta tedavi etmek\nHastaların %90'ı planlanan seans sayısı içinde hedeflerine ulaşır\n3 yerel ekibin kullandığı spora dönüş testleri tasarlamak\n2 yeni mezuna mentorluk etmek ve öğrenci yerleştirmelerini denetlemek"
      },
      {
        "role": "Personel Fizyoterapist",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Ağu 2019",
        "end": "Şub 2021",
        "current": false,
        "points": "Ameliyat sonrası ve felçli hastalar için yatan hasta rehabilitasyonu sağladı\nHaftada 20'den fazla yaşlı hasta için grup egzersiz dersleri yürüttü\nİlerlemeyi Epic'te belgeledi ve servis ekiplerine devretti"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fizik Tedavi",
        "start": "2016",
        "end": "2019",
        "notes": "Lisanslı fizyoterapist (Oregon). Ortopedik Klinik Uzman (OCS)."
      }
    ],
    "skills": "Ortopedik ve spor rehabilitasyonu\nManuel terapi\nEgzersiz reçetesi\nSpora dönüş testi\nHasta eğitimi\nBelgelendirme (Epic)",
    "languages": "İngilizce (akıcı)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Baş Aşçı",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Kreol ve modern Amerikan mutfaklarında 10 yıllık deneyime sahip baş aşçı. 12 kişilik bir mutfak ekibine 200 kişilik bir restoranda liderlik eder, daha sıkı siparişle gıda maliyetlerini %15 azalttı ve 2025 yılında şehir yemek rehberinden 'En İyi Yeni Menü' ödülünü kazandı.",
    "experience": [
      {
        "role": "Baş Aşçı",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "12 kişilik bir ekibe 200 kişilik bir restoranda liderlik etmek — gecede 300'den fazla misafir ağırlayan\nDaha sıkı sipariş ve mevsimlik bir menüyle gıda maliyetlerini %15 azaltmak\n2025 yılında şehir yemek rehberinden 'En İyi Yeni Menü' ödülünü kazanmak\nMenüler tasarlamak, aşçıları eğitmek ve Cuma ve Cumartesi servisinde pası yönetmek"
      },
      {
        "role": "Sous Chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Haz 2017",
        "end": "Ara 2020",
        "current": false,
        "points": "Baş aşçı yokken mutfağı yürüttü, gecede 150 misafir ağırladı\nStoku, siparişleri ve tedarikçi ilişkilerini yönetti\n8 hat aşçısını eğitti ve personel devir hızını üçte bir azalttı"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Mutfak Sanatları",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Gıda Koruma Yöneticisi sertifikalı."
      }
    ],
    "skills": "Menü tasarımı ve maliyetlendirme\nKreol ve modern Amerikan mutfağı\nMutfak liderliği (12 kişilik ekip)\nGıda güvenliği (ServSafe)\nTedarikçi yönetimi\nBanket ve etkinlik catering",
    "languages": "İngilizce (akıcı)\nİspanyolca (akıcı)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Polis Memuru",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Devriye, toplum polisi ve soruşturmalarda 8 yıllık deneyime sahip polis memuru. Haftada 30'dan fazla çağrıya yanıt verir; gerilimi azaltma ve toplum erişimi için takdirler aldı. Kriz müdahalesi, ilk yardım ve rapor yazımı konusunda eğitimli.",
    "experience": [
      {
        "role": "Polis Memuru",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Haz 2019",
        "end": "",
        "current": true,
        "points": "40.000 sakini olan bir bölgede devriye gezmek, haftada 30'dan fazla çağrıya yanıt vermek\nGerilimi azaltma ve toplum erişimi için 2 takdir almak\nHırsızlık ve saldırıları araştırmak, 50'den fazla kovuşturmada kullanılan raporlar yazmak\n3 yeni memura saha eğitiminde mentorluk etmek"
      },
      {
        "role": "Devriye Memuru",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Ağu 2017",
        "end": "May 2019",
        "current": false,
        "points": "İlçe yollarında devriye gezdi ve acil çağrılara yanıt verdi\nMahkeme belgelerini tebliğ etti ve mahkum nakline yardım etti\nKriz müdahalesi ve ilk yardım eğitimini tamamladı"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificate",
        "field": "Kolluk Kuvvetleri",
        "start": "2017",
        "end": "2017",
        "notes": "Ohio Barış Memuru Eğitim Akademisi mezunu. Kriz Müdahale Ekibi eğitimli."
      }
    ],
    "skills": "Devriye ve acil müdahale\nToplum polisi\nKriz müdahalesi ve gerilimi azaltma\nRapor yazımı\nSoruşturmalar\nİlk yardım ve CPR",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "İtfaiyeci / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Yangın söndürme, kurtarma ve acil tıbbi müdahalede 7 yıllık deneyime sahip itfaiyeci ve EMT. Bina yangınları, araç kurtarmaları ve tıbbi acil durumlar dahil 900'den fazla çağrıya yanıt verdi. Temiz bir güvenlik kaydına sahip HazMat eğitimli.",
    "experience": [
      {
        "role": "İtfaiyeci / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mar 2020",
        "end": "",
        "current": true,
        "points": "900'den fazla yangın, kurtarma ve tıbbi çağrıya 3 istasyonlu bir bölgede yanıt vermek\nÇağrıların %60'ında sertifikalı bir EMT olarak acil tıbbi bakım sağlamak\nHazMat eğitimli; kimyasal olaylarda dekontaminasyona liderlik etmek\nYeni askerleri hortum kullanımı, merdivenler ve arama tekniklerinde eğitmek"
      },
      {
        "role": "Gönüllü İtfaiyeci",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Haz 2018",
        "end": "Şub 2020",
        "current": false,
        "points": "Gönüllü olarak orman ve bina yangınlarına yanıt verdi\nİtfaiyeci I & II ve EMT-Basic eğitimini tamamladı\nOkullarda toplum yangın güvenliği konuşmalarının yürütülmesine yardımcı oldu"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificate",
        "field": "Yangın Bilimi",
        "start": "2017",
        "end": "2018",
        "notes": "İtfaiyeci I & II. EMT-Basic sertifikalı. HazMat Operasyonları eğitimli."
      }
    ],
    "skills": "Yangın söndürme ve kurtarma\nAcil tıbbi bakım (EMT)\nHazMat operasyonları\nMerdivenler, hortumlar ve havalandırma\nToplum yangın güvenliği\nBaskı altında ekip çalışması",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Lisanslı Tesisatçı",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Konut ve ticari tesisatta 11 yıllık deneyime sahip lisanslı usta tesisatçı. Kaba tesisattan kazan montajlarına kadar yılda 600'den fazla işi %98 ilk ziyarette onarım oranıyla tamamladı. Boru tesisatı, gider temizleme ve yönetmelik uyumunda yetenekli.",
    "experience": [
      {
        "role": "Usta Tesisatçı",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Oca 2019",
        "end": "",
        "current": true,
        "points": "Yılda 600'den fazla konut ve ticari işi tamamlamak\nKazanlar, su ısıtıcıları ve tam banyo kaba tesisatı monte etmek\nServis çağrılarında %98 ilk ziyarette onarım oranı tutmak\n3 çırağı denetlemek ve çalışmalarını onaylamak"
      },
      {
        "role": "Kalfa Tesisatçı",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Haz 2014",
        "end": "Ara 2018",
        "current": false,
        "points": "Yılda 40'tan fazla ev için yeni inşaat tesisatı yürüttü\nEvler ve restoranlar için giderleri temizledi ve sızıntıları onardı\nGaz tesisatı ve geri akış önlemeyi öğrendi"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificate",
        "field": "Tesisat Teknolojisi",
        "start": "2013",
        "end": "2014",
        "notes": "Usta tesisatçı lisansı (Tennessee). Geri akış önleme sertifikalı."
      }
    ],
    "skills": "Konut ve ticari tesisat\nBoru tesisatı ve lehimleme\nGider temizleme ve kamera denetimi\nKazan ve su ısıtıcısı montajları\nGaz tesisatı\nTesisat yönetmeliği uyumu",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Kalfa Marangoz",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Karkas, ince işler ve özel dolap yapımında 9 yıllık deneyime sahip kalfa marangoz. 30'dan fazla evin karkasını yaptı ve 60'tan fazla eve mutfak monte etti; hassas ölçümleri ve temiz işçiliğiyle tanınır. Plan okuma ve yönetmeliğe uygun çalışma konusunda yetenekli.",
    "experience": [
      {
        "role": "Kalfa Marangoz",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Şub 2019",
        "end": "",
        "current": true,
        "points": "30'dan fazla evin karkasını yapmak ve 60'tan fazla eve mutfak monte etmek\n1/16 inç toleransla özel dolap ve kaplama yapmak\nMimari planları okumak ve izlemek, hataları para kaybettirmeden önce işaretlemek\n2 çırağı karkas ve ince iş tekniklerinde eğitmek"
      },
      {
        "role": "Marangoz Çırağı",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Haz 2016",
        "end": "Oca 2019",
        "current": false,
        "points": "Yenilemelerde karkas, alçıpan ve döşemeye yardım etti\nTestereleri, frezeleri ve çivi tabancalarını güvenli kullanmayı öğrendi\n8.000 çıraklık saatini tamamladı ve kalfalık sınavını geçti"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificate",
        "field": "Carpentry",
        "start": "2015",
        "end": "2016",
        "notes": "Kalfa marangoz. OSHA 10 sertifikalı."
      }
    ],
    "skills": "Karkas ve yapısal işler\nİnce marangozluk ve kaplama\nÖzel dolap yapımı\nMimari plan okuma\nElektrikli aletler ve güvenlik\nAlçıpan ve döşeme",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Ortaöğretim Öğretmeni (Matematik)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "8 yıllık deneyime sahip ortaöğretim öğretmeni; 9-12. sınıflara matematik öğretir. Cebir geçiş oranlarını %64'ten %83'e yükseltti ve matematik ekibini 2 eyalet finaline taşıdı. Farklılaştırılmış öğretim, sınav hazırlığı ve veli iletişiminde yetenekli.",
    "experience": [
      {
        "role": "Matematik Öğretmeni (9-12. Sınıflar)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Ağu 2019",
        "end": "",
        "current": true,
        "points": "120 öğrenciye cebir, geometri ve pre-kalkülüs öğretmek — 5 sınıfta\nCebir geçiş oranlarını %64'ten %83'e 3 yılda yükseltmek\nMatematik ekibini 2 eyalet finaline taşımak\nHaftada 30 öğrenci için okul sonrası özel ders yürütmek"
      },
      {
        "role": "Matematik Öğretmeni (9-10. Sınıflar)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Ağu 2017",
        "end": "Haz 2019",
        "current": false,
        "points": "Yılda 100 öğrenciye cebir ve geometri öğretti\nÖdev eksiklerini yarıya indiren haftalık kısa sınavlar tanıttı\nOkulun ilk matematik fuarını 200 öğrenciyle organize etti"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Matematik Eğitimi",
        "start": "2013",
        "end": "2017",
        "notes": "Eyalet öğretmenlik lisansı (New Hampshire, 7-12. sınıflar, matematik)."
      }
    ],
    "skills": "Matematik öğretimi (cebirden pre-kalkülüse)\nSınav hazırlığı\nFarklılaştırılmış öğretim\nSınıf yönetimi\nVeli iletişimi\nGoogle Classroom ve Desmos",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Okul Öncesi Öğretmeni",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "6 yıllık deneyime sahip okul öncesi öğretmeni; 3-5 yaş arası çocuklara bakar. Oyun tabanlı öğrenme, davranış rehberliği ve veli iletişiminde yetenekli. Sınıfımda okula hazırlık puanlarını yükselten bir fonik programı oluşturdu.",
    "experience": [
      {
        "role": "Okul Öncesi Öğretmeni",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Ağu 2020",
        "end": "",
        "current": true,
        "points": "18 çocukluk bir sınıfa öğretmek ve bakmak — 3-5 yaş arası\nSınıfta okula hazırlık puanlarını yükselten bir fonik programı oluşturmak\nHaftalık temalar, el işleri ve açık hava oyunları planlamak\nGünlük güncellemeleri ve dönemlik ilerleme raporlarını velilerle paylaşmak"
      },
      {
        "role": "Okul Öncesi Öğretmen Yardımcısı",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Haz 2018",
        "end": "Tem 2020",
        "current": false,
        "points": "20 çocukluk bir sınıfta baş öğretmeni destekledi\nHer gün hikaye zamanı, şarkılar ve sanat etkinlikleri yürüttü\nGüvenlik ve hijyen kayıtlarını eyalet standartlarında tuttu"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Ön Lisans Derecesi",
        "field": "Erken Çocukluk Eğitimi",
        "start": "2016",
        "end": "2018",
        "notes": "Çocuk Gelişimi Ortak (CDA) belgesi. İlk yardım ve CPR sertifikalı."
      }
    ],
    "skills": "Oyun tabanlı öğrenme\nDavranış rehberliği\nFonik ve erken okuryazarlık\nVeli iletişimi\nSınıf güvenliği\nSanat ve el işleri planlama",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Çocuk ve Aile Sosyal Hizmet Uzmanı",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Çocukları ve aileleri desteklemede 7 yıllık deneyime sahip lisanslı sosyal hizmet uzmanı. 25 ailelik bir vaka yükünü yönetir, okullar ve sağlık sağlayıcılar arasında hizmetleri koordine eder ve hakimlerin güvendiği mahkeme raporlarını tamamlar. Değerlendirme, kriz desteği ve koruma konularında yetenekli.",
    "experience": [
      {
        "role": "Çocuk ve Aile Sosyal Hizmet Uzmanı",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Oca 2020",
        "end": "",
        "current": true,
        "points": "25 ailelik bir vaka yükünü yönetmek, evleri ve okulları haftalık ziyaret etmek\nMahkeme raporlarını tamamlamak ve aile mahkemesinde ifade vermek\nSavunmasız aileler için konut, sağlık ve okul desteğini koordine etmek\nYeni bir triyaj sistemiyle değerlendirme bekleme süresini %20 azaltmak"
      },
      {
        "role": "Vaka Çalışanı",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Tem 2018",
        "end": "Ara 2019",
        "current": false,
        "points": "Geçici konutta 40'tan fazla aileyi yan haklar ve yönlendirmelerle destekledi\nHaftalık ebeveynlik ve bütçeleme atölyeleri yürüttü\nDenetimler ve finansman raporları için vaka notlarını doğru tuttu"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Sosyal Hizmet",
        "start": "2016",
        "end": "2018",
        "notes": "Lisanslı Sosyal Hizmet Uzmanı (Ohio). Çocuk refahı ve aile sistemleri alanında dersler."
      }
    ],
    "skills": "Vaka yönetimi (25 aile)\nÇocuk koruma\nAile mahkemesi raporları\nKriz desteği\nÇok kurumlu koordinasyon\nYan hak ve konut yönlendirmeleri",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Hukuk Asistanı",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Dava desteği ve kurumsal başvurularda 6 yıllık deneyime sahip hukuk asistanı. 30'dan fazla dava için keşfi yönetir, dilekçeler ve sözleşmeler hazırlar ve başvuru son tarihlerini %100 zamanında kayıtla tutar. Westlaw, e-keşif ve dava yönetim yazılımında yetenekli.",
    "experience": [
      {
        "role": "Hukuk Asistanı",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Şub 2021",
        "end": "",
        "current": true,
        "points": "30'dan fazla dava için keşfi yönetmek, 10.000'den fazla belgeyi incelemek\nAvukat incelemesi için dilekçeler, öneriler ve sözleşmeler hazırlamak\nMahkeme başvuruları ve son tarihlerde %100 zamanında kayıt tutmak\nTanıkları koordine etmek ve duruşma dosyaları hazırlamak"
      },
      {
        "role": "Hukuk Asistanı",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Ağu 2019",
        "end": "Oca 2021",
        "current": false,
        "points": "Haftada 20'den fazla müşteri için kabul görüşmeleri\nKonut ve aile davaları için formlar ve başvurular hazırladı\nİspanyolca konuşan müşteriler için hukuki belgeleri çevirdi"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Ön Lisans Derecesi",
        "field": "Hukuk Asistanlığı Çalışmaları",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Sertifikalı Hukuk Asistanı (CP). ABA onaylı program."
      }
    ],
    "skills": "Dava desteği ve keşif\nHukuki yazım\nE-keşif (Relativity)\nDava yönetimi (Clio)\nMahkeme başvuruları ve son tarihler\nHukuki araştırma (Westlaw)",
    "languages": "İngilizce (akıcı)\nİspanyolca (akıcı)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Muhasebe Kayıt Elemanı",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Borç hesapları, faturalama ve banka mutabakatlarında 5 yıllık deneyime sahip muhasebe kayıt elemanı. Ayda 300'den fazla faturayı %99,8 doğrulukla işler ve defterleri ay sonu kapanışı için temiz tutar. QuickBooks, Excel ve bordro desteğinde yetenekli.",
    "experience": [
      {
        "role": "Muhasebe Kayıt Elemanı",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Nis 2021",
        "end": "",
        "current": true,
        "points": "Ayda 300'den fazla tedarikçi faturasını %99,8 doğrulukla işlemek\n6 banka hesabını haftalık mutabakat yapmak ve farkları aynı gün işaretlemek\n45 personel için bordro verileri hazırlamak ve gecikmiş müşteri ödemelerini takip etmek\nYıl sonu denetimi için kayıtları düzenli tutmak, sıfır bulgu ile"
      },
      {
        "role": "Muhasebe Asistanı",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Haz 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Satış faturalarını ve makbuzları her gün QuickBooks'a girdi\nTedarikçilerin ödemeler hakkındaki sorularını telefon ve e-postayla yanıtladı\nEvrakları dosyaladı ve arşivi güncel tuttu"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificate",
        "field": "Bookkeeping",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Sertifikalı Kullanıcı."
      }
    ],
    "skills": "Ödenecek ve alacak hesaplar\nBanka mutabakatları\nFaturalama (ayda 300'den fazla)\nQuickBooks ve Excel\nBordro desteği\nVeri girişi (dakikada 65 kelime)",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "İdari Asistan",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Ofislerin sorunsuz çalışmasını sağlayan 6 yıllık deneyime sahip idari asistan. 4 yöneticinin takvimini yönetir, seyahat ve toplantıları organize eder ve günde 100'den fazla e-postayı ele alır. Doğruluğu, gizliliği ve teslim tarihi baskısı altında sakin kalmasıyla tanınır.",
    "experience": [
      {
        "role": "İdari Asistan",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "4 üst düzey yönetici için takvimleri, seyahatleri ve toplantıları yönetmek\nGünde 100'den fazla e-postayı ele almak, yanıtlar hazırlamak ve öncelikleri işaretlemek\nYönetim kurulu belgeleri hazırlamak ve aylık toplantılarda tutanak tutmak\nOfis malzemelerini ve tedarikçi siparişlerini yürütmek, maliyetleri %12 azaltmak"
      },
      {
        "role": "Resepsiyonist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Ağu 2019",
        "end": "Ara 2020",
        "current": false,
        "points": "Günde 60'tan fazla hastayı karşıladı ve randevu defterini yönetti\nTelefonları yanıtladı ve sigorta sorularını ele aldı\nHasta kayıtlarını doğru ve gizli tuttu"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Ön Lisans Derecesi",
        "field": "Ofis Yönetimi",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Takvim ve seyahat yönetimi\nE-posta ve yazışmalar\nToplantı tutanakları\nMicrosoft Office (Word, Excel, Outlook)\nVeri girişi (dakikada 70 kelime)\nOfis malzemeleri ve tedarikçiler",
    "languages": "İngilizce (akıcı)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Banka Veznedarı",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "4 yıllık deneyime sahip banka veznedarı; günde 80'den fazla müşteriye doğruluk ve özenle hizmet verir. Kasa çekmecesi 3 yıl boyunca hiç açık vermeden kuruşu kuruşuna dengelendi. Para yatırma, çekme, dolandırıcılık kontrolleri ve müşterileri doğru ürünlere yönlendirme konularında yetenekli.",
    "experience": [
      {
        "role": "Banka Veznedarı",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Günde 80'den fazla müşteriye hizmet vermek: para yatırma, çekme, ödemeler ve transferler\n3 yıl boyunca sıfır açıkla kasa kuruşuna kadar dengeli\n12 dolandırıcılık girişimini tespit edip durdurmak, müşterilere 90.000 dolardan fazla tasarruf sağlamak\nMüşterileri tasarruf ve kredi ürünlerine yönlendirmek, üç aylık yönlendirme hedeflerine ulaşmak"
      },
      {
        "role": "Müşteri Hizmetleri Çalışanı",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Haz 2021",
        "end": "Şub 2022",
        "current": false,
        "points": "Üyeler için yeni hesaplar açtı ve banka kartları verdi\nBakiyeler ve ekstreler hakkındaki telefon sorularını yanıtladı\nÜyelerin çevrimiçi ve mobil bankacılığı kurmasına yardımcı oldu"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Ön Lisans Derecesi",
        "field": "Business",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Nakit işlemleri ve dengeleme\nPara yatırma, çekme ve ödemeler\nDolandırıcılık tespiti\nMüşteri hizmetleri\nBankacılık yazılımı (Fiserv)\nÜrün yönlendirmeleri",
    "languages": "İngilizce (akıcı)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Satış Yöneticisi",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "10 yıllık deneyime sahip satış yöneticisi; 15 temsilciye kadar ekipler yönetir. Bölgesel geliri 4 milyon dolardan 7,5 milyon dolara 3 yılda büyüttü, kazanma oranını %22'den %34'e yükseltti ve daha iyi koçluk ve işe alıştırmayla temsilci devir hızını yarıya indirdi.",
    "experience": [
      {
        "role": "Bölgesel Satış Yöneticisi",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "Teksas ve Oklahoma'da 15 satış temsilcisinden oluşan bir ekibe liderlik etmek\nBölgesel geliri 4 milyon dolardan 7,5 milyon dolara 3 yılda büyütmek\nDaha iyi koçluk ve boru hattı incelemeleriyle kazanma oranını %22'den %34'e yükseltmek\nYeni bir işe alıştırma programıyla temsilci devir hızını yarıya indirmek"
      },
      {
        "role": "Satış Temsilcisi",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Haz 2015",
        "end": "Ara 2020",
        "current": false,
        "points": "80'den fazla hesaba endüstriyel ekipman sattı, 5 yıl üst üste kotaya ulaştı\n3 yıl üst üste bölgede en iyi temsilci\nYeni işin %25'ini getiren bir yönlendirme ağı oluşturdu"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Satış yönetimi ve müzakere alanında dersler."
      }
    ],
    "skills": "Satış ekibi liderliği (15 temsilci)\nGelir büyümesi ve tahmin\nBoru hattı yönetimi (Salesforce)\nKoçluk ve işe alıştırma\nMüzakere\nBölge planlama",
    "languages": "İngilizce (akıcı)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "İnşaat Yöneticisi",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "12 milyon dolara kadar ticari ve konut projelerini teslim etme konusunda 12 yıllık deneyime sahip inşaat yöneticisi. 20'den fazla projeyi %95 zamanında teslim oranıyla, sahalarında sıfır kayıp zamanlı yaralanmayla ve %3 içinde tutulan bütçelerle tamamladı. Planlama, taşeron yönetimi ve güvenlik konularında yetenekli.",
    "experience": [
      {
        "role": "İnşaat Yöneticisi",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Şub 2020",
        "end": "",
        "current": true,
        "points": "12 milyon dolara kadar değerde ticari ve konut projeleri teslim etmek\n20'den fazla projeyi %95 zamanında oran ve %3 içinde bütçelerle tamamlamak\n30'dan fazla taşeronu ve 50 çalışanı 3 aktif şantiyede yönetmek\n4 yılda tüm şantiyelerde sıfır zaman kayıplı yaralanma"
      },
      {
        "role": "Şantiye Amiri",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Haz 2013",
        "end": "Oca 2020",
        "current": false,
        "points": "Ofis ve perakende inşaatları için günlük şantiye operasyonları yürüttü\nTeslimatları, denetimleri ve taşeron programlarını koordine etti\nGüvenlik kayıtlarını temiz tuttu ve her OSHA denetiminden geçti"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Bina İnşaatı",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 sertifikalı. CCM (Sertifikalı İnşaat Yöneticisi) adayı."
      }
    ],
    "skills": "Proje programlama (MS Project, Procore)\nBütçe kontrolü\nTaşeron yönetimi\nŞantiye güvenliği (OSHA 30)\nPlan okuma\nMüşteri raporlaması",
    "languages": "İngilizce (akıcı)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Sertifikalı Tıbbi Asistan",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Aile hekimliği ve acil bakımda 5 yıllık deneyime sahip sertifikalı tıbbi asistan. Günde 25'ten fazla hastayı odaya alır, vital bulguları ölçer, kan alır ve %97 hasta memnuniyet puanıyla ön büroyu yönetir. EHR, flebotomi ve sigorta kontrollerinde yetenekli.",
    "experience": [
      {
        "role": "Sertifikalı Tıbbi Asistan",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Nis 2021",
        "end": "",
        "current": true,
        "points": "Günde 25'ten fazla hastayı odaya almak: hayati bulgular, öyküler ve muayene hazırlığı\n%99 ilk iğnede başarı oranıyla kan almak ve temel laboratuvar testleri yapmak\nÖn büroyu, planlamayı ve sigorta kontrollerini yönetmek\n%97 hasta memnuniyet puanını 800'den fazla ankette tutmak"
      },
      {
        "role": "Tıbbi Asistan",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Ağu 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Ayakta hastaları triyaj etti ve doktorlara küçük prosedürlerde yardım etti\nAşılar yaptı ve numune toplamayı üstlendi\nMuayene odalarını hastalar arasında dolu, temiz ve hazır tuttu"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificate",
        "field": "Tıbbi Asistanlık",
        "start": "2018",
        "end": "2019",
        "notes": "Sertifikalı Tıbbi Asistan (CMA, AAMA). BLS sertifikalı. Flebotomi eğitimi almış."
      }
    ],
    "skills": "Hasta kabulü ve hayati bulgular\nFlebotomi\nEHR (eClinicalWorks)\nAşılamalar\nSigorta doğrulama\nÖn büro yönetimi",
    "languages": "İngilizce (akıcı)\nİspanyolca (akıcı)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Öğrenci",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Güçlü notlara ve yarı zamanlı iş deneyimine sahip motive olmuş lise son sınıf öğrencisi. Çabuk öğrenir, güvenilir ve insanlarla iyi anlaşır. İlk tam zamanlı bir rol veya üniversitenin yanında yarı zamanlı bir iş arıyor.",
    "experience": [
      {
        "role": "Yarı Zamanlı Satış Asistanı",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Eyl 2024",
        "end": "",
        "current": true,
        "points": "Hafta sonları ve okul sonrası vardiya başına 50'den fazla müşteriye hizmet vermek\nNakiti ele almak, rafları yenilemek ve teşhirleri düzenli tutmak\nCumartesi sabahları mağazayı açmak için güvenilir"
      },
      {
        "role": "Gönüllü Özel Ders Öğretmeni",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Oca 2024",
        "end": "Haz 2025",
        "current": false,
        "points": "Haftada iki kez küçük öğrencilere matematik özel dersi verdi\n40 çocuk için yaz okuma programının organize edilmesine yardımcı oldu"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Lise Diploması",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3,6. Onur listesi, 3 yıl. Münazara ekibi kaptanı."
      }
    ],
    "skills": "Müşteri hizmetleri\nNakit işlemleri\nEkip çalışması\nZaman yönetimi\nMicrosoft Office\nTopluluk önünde konuşma (münazara ekibi)",
    "languages": "İngilizce (akıcı)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Yeni Mezun \u2014 İşletme",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Pazarlama ve operasyonlarda staj deneyimine sahip yeni işletme mezunu. 200 katılımcıyla bir kampüs iş yarışması organize etti ve raporlama süresini yarıya indirdiği 6 aylık bir stajı tamamladı. Tam zamanlı bir kariyere başlamak ve hızlı öğrenmek için istekli.",
    "experience": [
      {
        "role": "Pazarlama Stajyeri",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Oca 2025",
        "end": "Haz 2025",
        "current": false,
        "points": "Şirketin sosyal hesaplarını yürüttü, takipçileri 2.000'den 6.500'e büyüttü\nHaftalık raporlama süresini yarıya indiren bir raporlama panosu oluşturdu\n20 blog yazısı yazdı — 15.000'den fazla okuma getiren"
      },
      {
        "role": "Etkinlik Gönüllüleri Lideri",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Eyl 2024",
        "end": "May 2025",
        "current": false,
        "points": "200 katılımcı ve 12 jüri üyesiyle bir iş yarışması organize etti\n5.000 dolarlık bir bütçeyi ve 8 gönüllüden oluşan bir ekibi yönetti"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "İşletme",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3,5. Dean's List, 2 yıl. Küçük işletme pazarlaması üzerine bitirme projesi."
      }
    ],
    "skills": "Sosyal medya pazarlaması\nExcel ve Google Sheets\nSunum becerileri\nEtkinlik organizasyonu\nEkip çalışması\nTemel veri analizi",
    "languages": "İngilizce (akıcı)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Genç Pazarlama Uzmanı",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "İçerik, e-posta ve sosyal medyada 2 yıllık deneyime sahip genç pazarlama uzmanı. Bir müşteri bültenini 1.000 aboneden 4.000 aboneye büyüttü ve ortalama %22 açılma oranına sahip kampanyalar yürütür. Daha fazla sorumluluk ve daha büyük bir hesap portföyü için hazır.",
    "experience": [
      {
        "role": "Genç Pazarlama Uzmanı",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Tem 2024",
        "end": "",
        "current": true,
        "points": "Bir müşteri bültenini 1.000 aboneden 4.000 aboneye 14 ayda büyütmek\nHaftada 12 sosyal gönderiyi 4 müşteri için yazmak ve planlamak\nOrtalama %22 açılma oranına sahip e-posta kampanyaları yürütmek\nKampanya sonuçlarını müşterilere aylık raporlamak"
      },
      {
        "role": "Pazarlama Stajyeri",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Oca 2024",
        "end": "Haz 2024",
        "current": false,
        "points": "Şirket web sitesinde 200'den fazla ürün için ürün açıklamaları yazdı\nÇevrimiçi siparişleri %15 artıran bir ilkbahar satış kampanyasının yürütülmesine yardımcı oldu"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Communications",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3,4. Dijital pazarlama ve medya yazarlığı alanında dersler."
      }
    ],
    "skills": "İçerik yazarlığı\nE-posta pazarlaması (Mailchimp)\nSosyal medya yönetimi\nGoogle Analytics\nCanva\nMüşteri raporlaması",
    "languages": "İngilizce (akıcı)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Operasyon Amiri",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "8 yıllık deneyime sahip operasyon amiri; 20-30 kişilik depo ekiplerini yönetir. Toplama hatalarını %30 azalttı, zamanında sevkiyatı %90'dan %97'ye yükseltti ve 15 yeni başlayanı eğitti. Daha büyük bir lokasyon ve bütçeyle bir operasyon yöneticisi rolü için hazır.",
    "experience": [
      {
        "role": "Operasyon Amiri",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "25 depo personelini 2 vardiyada, 90.000 fit karelik bir tesiste denetlemek\nYeni kontrol rutinleri ve barkod taramayla toplama hatalarını %30 azaltmak\nZamanında sevkiyatı %90'dan %97'ye 2 yılda yükseltmek\n15 yeni başlayanı eğitmek ve 3'ünü ekip lideri rollerine terfi ettirmek"
      },
      {
        "role": "Ekip Lideri",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Haz 2017",
        "end": "Şub 2021",
        "current": false,
        "points": "Gece vardiyasında 10 toplayıcı ve paketleyiciden oluşan bir ekibe liderlik etti\nSon teslim tarihlerini kaçırmadan fazla mesaiyi %20 azaltan bir nöbet çizelgesi tanıttı\nGüvenlik brifingleri yürüttü ve ekibi 2 yıl kazasız tuttu"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Tedarik Zinciri Yönetimi",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Sarı Kuşak."
      }
    ],
    "skills": "Ekip liderliği (25 personel)\nDepo operasyonları\nSüreç iyileştirme\nGüvenlik yönetimi\nEnvanter kontrolü\nWMS ve Excel",
    "languages": "İngilizce (akıcı)\nHintçe (konuşma düzeyinde)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Kıdemli Proje Yöneticisi",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "14 yıllık deneyime sahip kıdemli proje yöneticisi — 8 milyon dolara kadar değerde yazılım projeleri teslim eder. 30'dan fazla projeye %92 zamanında oranla liderlik etti, sıfırdan bir PMO kurdu ve 10 proje yöneticisine mentorluk etti. Baskı altında sakin teslimatı ve yöneticilere dürüst raporlamasıyla bilinir.",
    "experience": [
      {
        "role": "Kıdemli Proje Yöneticisi",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Oca 2019",
        "end": "",
        "current": true,
        "points": "8 milyon dolara kadar değerde yazılım projelerini %92 zamanında oranla teslim etmek\nŞirketin PMO'sunu sıfırdan kurmak: şablonlar, raporlama ve yönetişim\n10 proje yöneticisine mentorluk etmek ve aylık PM topluluğunu yönetmek\n40 kişilik bir programda doğrudan CTO'ya rapor vermek"
      },
      {
        "role": "Proje Yöneticisi",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Haz 2012",
        "end": "Ara 2018",
        "current": false,
        "points": "Perakende ve sağlık müşterileri için 20'den fazla projeyi yönetti\nTeslimat süresini %25 azaltan Agile uygulamaları tanıttı\n2 kilit hesabı yıllık gelirde 500 bin dolardan 2 milyon dolara büyüttü"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Bilgi Sistemleri",
        "start": "2008",
        "end": "2012",
        "notes": "PMP sertifikalı (2015). Sertifikalı ScrumMaster. MBA dersleri (2018-2019, tamamlanmadı)."
      }
    ],
    "skills": "Program ve proje teslimi\nPMO kurulumu ve yönetişimi\nAgile ve Waterfall\nBütçe kontrolü (8 milyon dolar)\nYönetici raporlaması\nEkip mentorluğu",
    "languages": "İngilizce (akıcı)\nİspanyolca (konuşma düzeyinde)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Operasyon Direktörü (COO)",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Perakende ve lojistik şirketlerinde operasyonları büyütme konusunda 18 yıllık deneyime sahip operasyon direktörü. 200 kişilik bir operasyonu 900 kişiye büyüttü, 6 lokasyona yayarak, EBITDA marjını %8'den %14'e yükseltti ve 2 satın almaya liderlik etti. Yönetim kurulu düzeyinde raporlama ve yatırımcı ilişkileri deneyimi.",
    "experience": [
      {
        "role": "Operasyon Direktörü (COO)",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Oca 2021",
        "end": "",
        "current": true,
        "points": "900 kişi için operasyonları 6 lokasyonda ve 180 milyon dolarlık bir bütçeyle yürütmek\nEBITDA marjını %8'den %14'e 3 yılda yükseltmek\n2 satın almaya liderlik etmek ve her iki ekibi de 6 ay içinde entegre etmek\nOperasyonlar, risk ve büyüme hakkında yönetim kuruluna aylık rapor vermek"
      },
      {
        "role": "Operasyonlardan Sorumlu Başkan Yardımcısı",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Haz 2014",
        "end": "Ara 2020",
        "current": false,
        "points": "Operasyonları 200 kişiden 600 kişiye 4 lokasyonda ölçeklendirdi\n3 dağıtım merkezini zamanında ve bütçe altında açtı\nBugün hâlâ işi yöneten liderlik ekibini oluşturdu"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "İşletme",
        "start": "2010",
        "end": "2012",
        "notes": "Ekonomi Lisans Derecesi, NYU (2006). Yönetim kurulu yönetişimi kursu (2020)."
      }
    ],
    "skills": "Ölçekte operasyonlar (900 kişi)\nP&L sahipliği (180 milyon dolar)\nBirleşmeler ve satın almalar\nKurul raporlaması\nBüyüme stratejisi\nLiderlik ekibi oluşturma",
    "languages": "İngilizce (akıcı)",
    "template": "executive"
  }
};
});
