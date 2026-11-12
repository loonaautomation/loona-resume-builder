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
      "title": "Diplomás ápoló",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Diplomás ápoló 6 éves tapasztalattal orvos-sebészeti és telemetriai osztályokon. Jártas vagyok a páciensfelmérésben, az IV-terápiában, a gyógyszerbeadásban és az elektronikus egészségügyi nyilvántartásban. Nagy nyomású helyzetekben a páciensekkel és családokkal való nyugodt, világos kommunikációmról ismernek.",
    "experience": [
      {
        "role": "Diplomás ápoló",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "2021. június",
        "end": "",
        "current": true,
        "points": "Műszakonként 5-6 páciens ellátása egy 32 ágyas orvos-sebészeti osztályon, beleértve a felmérést, a gyógyszerbeadást és a sebellátást\n4 új diplomás ápoló képzése és mentorálása, betanulási idejüket 2 héttel csökkentve\n18%-kal csökkentettem a gyógyszerelési hibákat az osztályon azzal, hogy átadáskor kettős ellenőrzési rutint vezettem be\nMinden ellátás pontos dokumentálása az Epic elektronikus egészségügyi nyilvántartásban"
      },
      {
        "role": "Ápoló",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "2019. augusztus",
        "end": "2021. május",
        "current": false,
        "points": "Napi 40+ bejáró páciens osztályozását végeztem, a sürgős eseteket aznapi ellátásra rangsorolva\nVédőoltásokat adtam és egészségügyi szűréseket végeztem havi közösségi rendezvényeken\nKoordináltam a szakorvosi beutalásokat és nyomon követtem a vizsgálati eredményeket"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Ápolás",
        "start": "2015",
        "end": "2019",
        "notes": "Diplomás ápolói engedély (Texas). BLS- és ACLS-tanúsítvány."
      }
    ],
    "skills": "Páciensfelmérés\nIV-terápia és gyógyszerbeadás\nElektronikus egészségügyi nyilvántartás (Epic)\nTelemetriai felügyelet\nPáciens- és családi oktatás\nFertőzéskontroll",
    "languages": "Angol (folyékony)\nSpanyol (társalgási)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Szoftverfejlesztő",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Szoftverfejlesztő 5 éves tapasztalattal webalkalmazások építésében Pythonban és JavaScriptben. Olyan funkciókat vezettem be, amelyeket 200,000+ felhasználó használ, 40%-kal csökkentettem az API-válaszidőket, és egy monolit mikroszolgáltatásokra történő átállítását vezettem. Erős vagyok tesztelésben, kódátvizsgálásban és világos dokumentációban.",
    "experience": [
      {
        "role": "Szoftverfejlesztő",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "2022. március",
        "end": "",
        "current": true,
        "points": "Ügyféloldali webfunkciókat fejlesztek és tartok karban Python (Django) és React környezetben, 200,000+ felhasználót kiszolgálva\nAz átlagos API-válaszidőt 850 ms-ról 500 ms-ra csökkentettem gyorsítótárazás hozzáadásával és a lassú lekérdezések javításával\nA számlázási szolgáltatás mikroszolgáltatásokra történő átállítását vezettem, nulla leállással\nHeti 10+ lehívási kérelem átvizsgálása és 2 junior fejlesztő mentorálása"
      },
      {
        "role": "Junior fejlesztő",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "2020. július",
        "end": "2022. február",
        "current": false,
        "points": "Belső irányítópultokat készítettem JavaScriptben, amelyek 3 csapatnál váltották fel a kézi táblázatokat\nAutomatizált teszteket írtam, amelyek 45%-ról 78%-ra emelték a lefedettséget\n120+ hibát javítottam a termékben az első évben"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatika",
        "start": "2016",
        "end": "2020",
        "notes": "Tanulmányok adatbázisok, algoritmusok és operációs rendszerek témában."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript és React\nPostgreSQL és Redis\nREST API-k és mikroszolgáltatások\nGit és CI/CD\nAutomatizált tesztelés (pytest, Jest)",
    "languages": "Angol (folyékony)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Általános iskolai tanár",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Általános iskolai tanár 7 éves tapasztalattal a 3-5. osztályok tanításában. Jártas vagyok a differenciált oktatásban, az osztálytermi irányításban és a szülői kommunikációban. Két tanév alatt 58%-ról 81%-ra emeltem az osztályom olvasási szintjét.",
    "experience": [
      {
        "role": "Általános iskolai tanár (4. osztály)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "2020. augusztus",
        "end": "",
        "current": true,
        "points": "Olvasás, matematika és természettudomány tanítása egy 26 tanulós osztálynak, köztük 5 egyéni tanulási tervvel rendelkezőnek\nAz osztály olvasási szintjét 58%-ról 81%-ra emeltem két év alatt vezetett olvasócsoportokkal\nHeti szülői hírlevél és időszakos előrehaladási megbeszélések vitele minden családnak\nAz iskola olvasóklubjának vezetése 40, 3-5. osztályos tanuló számára"
      },
      {
        "role": "Általános iskolai tanár (3. osztály)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "2018. augusztus",
        "end": "2020. június",
        "current": false,
        "points": "Napi órákat terveztem és tartottam 24 tanulónak minden alaptantárgyban\nMagatartási rutinokat vezettem be, amelyek felére csökkentették az osztálytermi zavarásokat\nMegszerveztem az évfolyam természettudományos vásárát 120 tanulóval és 80 szülővel"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Általános iskolai pedagógia",
        "start": "2014",
        "end": "2018",
        "notes": "Állami tanári engedély (Ohio, K-5. osztály). Olvasási kiegészítés."
      }
    ],
    "skills": "Differenciált oktatás\nOsztálytermi vezetés\nIrányított olvasócsoportok\nSzülői kommunikáció\nÓratervezés\nGoogle Classroom",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Szenior könyvelő",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA 8 éves tapasztalattal hóvégi zárás, pénzügyi jelentéskészítés és belső audit területén. Az egyeztetési folyamat újjáépítésével 3 nappal gyorsabban zártam a könyveket, és egy auditévben 240,000 dollár visszaigényelhető túlfizetést találtam. Erős vagyok Excelben, QuickBooksban és ERP-rendszerekben.",
    "experience": [
      {
        "role": "Szenior könyvelő",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "Egy 40 millió dolláros üzletág hóvégi zárásának felelőse, az egyeztetések újjáépítése után 3 nappal gyorsabb befejezéssel\nHavi pénzügyi kimutatások és eltérésjelentések előkészítése a felső vezetés számára\n240,000 dollár visszaigényelhető beszállítói túlfizetést találtam a 2024-es belső audit során\n2 könyvelő felügyelete és naplóbejegyzéseik átvizsgálása"
      },
      {
        "role": "Könyvelő",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "2017. június",
        "end": "2020. december",
        "current": false,
        "points": "Adóbevallásokat és pénzügyi kimutatásokat készítettem 25 kisvállalkozó ügyfélnek\n8 ügyfél auditjában segítettem, kontrollokat teszteltem és megállapításokat dokumentáltam\nAutomatizáltam a tárgyieszköz-nyilvántartást Excelben, havi 6 órát takarítva meg"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Számvitel",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Az AICPA tagja."
      }
    ],
    "skills": "Hóvégi zárás és egyeztetések\nPénzügyi jelentéskészítés és eltéréselemzés\nBelső audit\nExcel (kimutatástáblák, FKERES)\nQuickBooks és SAP\nAdóbevallás-készítés",
    "languages": "Angol (folyékony)\nMandarin (társalgási)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A teherautó-sofőr",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A sofőr 9 éves tapasztalattal távolsági és regionális fuvarozásban. Több mint 900,000 balesetmentes mérföld, 99%-os pontos szállítási arány, valamint tapasztalat hűtött, platós és zárt rakterű szállítmányokkal. Tiszta vezetési múlt, HazMat és tartálykocsi-kiegészítések.",
    "experience": [
      {
        "role": "Távolsági teherautó-sofőr",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "2019. április",
        "end": "",
        "current": true,
        "points": "Heti 2,800+ mérföld vezetése regionális útvonalakon Texason, Oklahomán és Új-Mexikón át\n99%-os pontos szállítási arány fenntartása évi 1,100+ rakománynál\nHűtött és zárt rakterű áruk fuvarozása; napi indulás előtti és érkezés utáni ellenőrzések elvégzése\nÖsszesen több mint 900,000 balesetmentes mérföld"
      },
      {
        "role": "Áruszállító teherautó-sofőr",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "2016. március",
        "end": "2019. március",
        "current": false,
        "points": "Építőanyagokat szállítottam napi 15-20 építkezésre a Dallas-Fort Worth térségben\nTargoncákat kezeltem és platós rakományokat rögzítettem a DOT-szabványok szerint\nA szállítási papírmunkát és naplókat pontosan tartottam, DOT-szabálysértések nélkül"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Tanúsítvány",
        "field": "Hivatásos vezetés (CDL A kategória)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A HazMat és tartálykocsi-kiegészítésekkel. Tiszta vezetési múlt."
      }
    ],
    "skills": "Távolsági és regionális fuvarozás\nHűtött és platós rakományok\nDOT-előírások és menetlevelek\nIndulás előtti járműellenőrzések\nÚtvonaltervezés (GPS, ELD)\nTargonca-kezelés",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Kiskereskedelmi eladó",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Kiskereskedelmi eladó 4 éves tapasztalattal elektronikai és ruházati üzletekben. Következetesen a csapat 3 legjobb eladója között, 32%-os kapcsolódó értékesítési aránnyal garanciákra és kiegészítőkre. Barátságos, gyors a pénztárnál, és megbíznak bennem az üzlet nyitásával és zárásával.",
    "experience": [
      {
        "role": "Szenior eladó",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "2022. február",
        "end": "",
        "current": true,
        "points": "Elektronika és kiegészítők értékesítése napi 60+ ügyfélnek; a bolti értékesítésben a legjobb 3 között 8 egymást követő negyedéven át\n32%-os kapcsolódó értékesítési arány elérése garanciákra és kiegészítőkre, a csapatban a legmagasabb\n6 új kezdő képzése a pénztárra, a raktárra és az ügyfélszolgálati szabványokra\nMegbízható kulcsos: az üzlet nyitása és zárása, valamint a készpénzszámlálás kezelése"
      },
      {
        "role": "Eladó",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "2021. június",
        "end": "2022. január",
        "current": false,
        "points": "Segítettem az ügyfeleknek ruhákat és méreteket választani egy forgalmas eladótérben\nMinden műszakban rendezetten tartottam a kiállításokat és újratöltöttem a polcokat\nA visszaküldéseket és cseréket udvariasan kezeltem, a panaszokat minimálisra csökkentve"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Főiskolai végzettség",
        "field": "Üzleti",
        "start": "2019",
        "end": "2021",
        "notes": "Részidős tanulmányok kiskereskedelmi munka mellett."
      }
    ],
    "skills": "Ügyfélszolgálat és felülértékesítés\nKészpénzkezelés és POS-rendszerek\nTermékismeret (elektronika)\nKészletkezelés\nÜzletnyitás és -zárás\nCsapatképzés",
    "languages": "Angol (folyékony)\nSpanyol (folyékony)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Ügyfélszolgálati munkatárs",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Ügyfélszolgálati munkatárs 5 éves tapasztalattal telefonos, e-mail- és élő csevegéses támogatásban. Napi 45+ esetet oldok meg 96%-os elégedettségi pontszámmal és 88%-os első kapcsolatfelvételkor történő megoldási aránnyal. Nyugodt maradok a dühös ügyfelekkel, és gyorsan megtalálom a megoldást.",
    "experience": [
      {
        "role": "Ügyfélszolgálati munkatárs",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "2021. május",
        "end": "",
        "current": true,
        "points": "Napi 45+ telefonos, e-mail- és csevegéses eset kezelése számlázásról, rendelésekről és műszaki hibákról\n96%-os ügyfél-elégedettségi pontszámot és 88%-os első kapcsolatfelvételkor történő megoldási arányt tartok\nNehéz hívások enyhítése és a panaszok visszatérő üzletté alakítása\n5 új ügynök képzése forgatókönyvekre, rendszerekre és hangvételre"
      },
      {
        "role": "Támogatási ügynök",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "2019. szeptember",
        "end": "2021. április",
        "current": false,
        "points": "Válaszoltam az ügyfelek rendelésekkel, visszaküldésekkel és visszatérítésekkel kapcsolatos e-mailjeire és csevegéseire\nAz átlagos első válaszadási időt 2 óra alatt tartottam\n20 súgócikk-cikket írtam, amelyek negyedével csökkentették az ismétlődő kérdéseket"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Főiskolai végzettség",
        "field": "Üzleti adminisztráció",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Telefonos, e-mailes és élő chates támogatás\nPanaszkezelés és feszültségcsökkentés\nCRM-rendszerek (Zendesk, Salesforce)\nSzámlázási és rendelési kérdések\nGépelés 55 wpm\nCsapatképzés",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Üzemeltetési vezető",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Üzemeltetési vezető 12 éves tapasztalattal akár 80 fős csapatok vezetésében raktározásban és elosztásban. 22%-kal csökkentettem a rendelésfeldolgozási költségeket, a pontos szállításokat 91%-ról 98%-ra emeltem, és két új telephelyet nyitottam határidőre és a költségvetés alatt.",
    "experience": [
      {
        "role": "Üzemeltetési vezető",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "2020. február",
        "end": "",
        "current": true,
        "points": "Egy 120,000 négyzetlábas elosztóközpont vitele 80 alkalmazottal 3 műszakban\n22%-kal csökkentettem a rendelésfeldolgozási költségeket a komissiózási útvonalak és a műszakminták újratervezésével\nA pontos szállításokat 91%-ról 98%-ra emeltem 18 hónap alatt\n2 új telephelyet nyitottam határidőre és 8%-kal a költségvetés alatt"
      },
      {
        "role": "Raktári felügyelő",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "2013. június",
        "end": "2020. január",
        "current": false,
        "points": "25 raktári alkalmazottat és napi 4,000+ rendelés kiszállítását felügyeltem\nBevezettem a vonalkód-leolvasást, 35%-kal csökkentve a komissiózási hibákat\nBiztonsági képzést tartottam, amely 3 éven át balesetmentesen tartotta a telephelyet"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Üzemeltetés-menedzsment",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Csapatvezetés (akár 80 alkalmazott)\nRaktározás és elosztás\nFolyamatfejlesztés\nKöltségvetés-tervezés és költségellenőrzés\nBiztonságirányítás\nERP- és WMS-rendszerek",
    "languages": "Angol (folyékony)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Engedéllyel rendelkező villanyszerelő",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Engedéllyel rendelkező szakmunkás villanyszerelő 8 éves tapasztalattal lakossági és kereskedelmi munkában. Jártas vagyok a vezetékezésben, az elosztó-felújításokban, a világításban és a hibakeresésben, 400+ munkán át tiszta biztonsági múlttal. NEC-előírásismeret és tapasztalat tanulók felügyeletében.",
    "experience": [
      {
        "role": "Szakmunkás villanyszerelő",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "2019. március",
        "end": "",
        "current": true,
        "points": "400+ lakossági és kereskedelmi munka elvégzése: vezetékezés, elosztó-felújítások, világítás és elektromosautó-töltők\nHibák gyors diagnosztizálása és javítása, 92%-os első látogatásra történő javítási aránnyal\n2 tanuló felügyelete és munkájuk jóváhagyása az előírások szerint\nTiszta biztonsági múlt munkaidő-kieséses sérülések nélkül"
      },
      {
        "role": "Villanyszerelő tanuló",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "2016. június",
        "end": "2019. február",
        "current": false,
        "points": "Engedéllyel rendelkező villanyszerelőknek segítettem új építésű vezetékezésnél és átvezetékezésnél\nMegtanultam a védőcső-hajlítást, a kábelhúzást és a paneltelepítést\n8,000 tanulóórát teljesítettem és elsőre letettem a szakmunkás-vizsgát"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Tanúsítvány",
        "field": "Villamos technológia",
        "start": "2015",
        "end": "2016",
        "notes": "Szakmunkás villanyszerelői engedély (Colorado). OSHA 30 tanúsítvány."
      }
    ],
    "skills": "Lakossági és kereskedelmi villanyszerelés\nKapcsolótábla-cserék és EV-töltők\nHibakeresés és tesztelés\nNEC-előírások betartása\nVédőcsőhajlítás és kábelhúzás\nTanoncok felügyelete",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Pénzügyi elemző",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Pénzügyi elemző 6 éves tapasztalattal költségvetés-tervezésben, előrejelzésben és befektetéselemzésben. Előrejelzési modelleket készítettem, amelyek 30%-kal csökkentették a költségvetési eltérést, és 50 millió dolláros befektetési döntéseket támogattam. Erős vagyok Excelben, SQL-ben és pénzügyi modellezésben.",
    "experience": [
      {
        "role": "Pénzügyi elemző",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "2021. április",
        "end": "",
        "current": true,
        "points": "Havi előrejelzések és éves költségvetések készítése egy 120 millió dolláros portfólióhoz\n30%-kal csökkentettem a költségvetési eltérést egy tényezőalapú előrejelzési modellel\n50 millió dolláros befektetési döntések támogatása értékeléssel és forgatókönyv-elemzéssel\nA megállapítások havi bemutatása a pénzügyi igazgatónak és az osztályvezetőknek"
      },
      {
        "role": "Junior pénzügyi elemző",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "2019. július",
        "end": "2021. március",
        "current": false,
        "points": "Heti teljesítményjelentéseket készítettem 12 fióknak\nAutomatizáltam a jelentéskészítést Excelben, heti 10 órát takarítva meg\nSegítettem a hitelcsapatnak a hitelportfólió elemzésében"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Pénzügy",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II jelölt. Tanulmányok értékelés és vállalati pénzügyek témában."
      }
    ],
    "skills": "Pénzügyi modellezés és előrejelzés\nKöltségvetés-tervezés és eltéréselemzés\nÉrtékelés (DCF, összehasonlítók)\nExcel (haladó) és SQL\nBloomberg Terminal\nAdatvizualizáció (Power BI)",
    "languages": "Angol (folyékony)\nHindi (folyékony)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Építőmérnök",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Építőmérnök (PE) 7 éves tapasztalattal út- és vízi infrastruktúra tervezésében. Egy 12 mérföldes autópálya-bővítés és egy 8,000 otthont kiszolgáló csapadékvíz-rendszer tervezését vezettem. Jártas vagyok az AutoCAD Civil 3D, a költségbecslés és az engedélykoordináció területén.",
    "experience": [
      {
        "role": "Építőmérnök",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "Egy 12 mérföldes autópálya-bővítés tervezésének vezetése, a felméréstől a kiviteli tervekig\nCsapadékvíz-rendszert terveztem 8,000 otthon kiszolgálására, amelyet a város elsőre jóváhagyott\nEngedélyek koordinálása 4 hatósággal és egy 2.5 millió dolláros tervezési költségvetés kezelése\nRajzok átvizsgálása és lepecsételése engedéllyel rendelkező Professional Engineerként"
      },
      {
        "role": "Junior építőmérnök",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "2018. július",
        "end": "2020. december",
        "current": false,
        "points": "Tereprendezési és vízelvezetési terveket készítettem 20+ lakófejlesztéshez\nKöltségbecsléseket és mennyiségkimutatásokat végeztem útprojektekhez\nRészt vettem helyszíni szemléken és előrehaladási jelentéseket írtam"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Építőmérnöki",
        "start": "2014",
        "end": "2018",
        "notes": "Professional Engineer engedély (Washington). EIT letéve 2018-ban."
      }
    ],
    "skills": "Út- és vízelvezetés-tervezés\nAutoCAD Civil 3D\nCsapadékvíz-modellezés\nKöltségbecslés\nEngedélyek koordinálása\nProjektütemezés (MS Project)",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Gépészmérnök",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Gépészmérnök 6 éves tapasztalattal HVAC-rendszerek és gyártóberendezések tervezésében. 18%-kal csökkentettem az energiafelhasználást 3 üzemben újratervezett légcsatornákkal és vezérlésekkel, és gépújratervezést vezettem, amely 25%-kal emelte a teljesítményt. Jártas vagyok a SolidWorks, a végeselemes elemzés és a hőtechnikai elemzés területén.",
    "experience": [
      {
        "role": "Gépészmérnök",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "2021. február",
        "end": "",
        "current": true,
        "points": "HVAC- és gyártóberendezések tervezése 3 üzem számára, 400+ alkalmazottal\n18%-kal csökkentettem az energiafelhasználást a légcsatornák és a vezérlési sorrendek újratervezésével\nGépújratervezést vezettem, amely 25%-kal emelte a teljesítményt, plusz alapterület nélkül\nVégeselemes és hőtechnikai elemzés futtatása új alkatrészeken a prototípus előtt"
      },
      {
        "role": "Junior gépészmérnök",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "2019. augusztus",
        "end": "2021. január",
        "current": false,
        "points": "Alkatrészeket és szerelvényeket modelleztem SolidWorksben autóipari ügyfeleknek\nRajzokat, anyagjegyzékeket és vizsgálati jelentéseket készítettem\nPrototípus-építéseket támogattam és illesztési problémákat oldottam meg a gyártósoron"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Gépészmérnöki",
        "start": "2015",
        "end": "2019",
        "notes": "Tanulmányok termodinamika, áramlástan és géptervezés témában."
      }
    ],
    "skills": "HVAC-tervezés\nSolidWorks és AutoCAD\nVégeselemes és hőtechnikai elemzés\nGéptervezés\nEnergiahatékonyság\nGD&T és tűrésezés",
    "languages": "Angol (folyékony)\nKoreai (társalgási)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Villamosmérnök",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Villamosmérnök 6 éves tapasztalattal beágyazott rendszerekben és teljesítményelektronikában. Vezérlőpaneleket terveztem, amelyeket ma már 50,000+ eszközben használnak, és az alkatrészek újratervezésével 22%-kal csökkentettem a panelköltséget. Jártas vagyok az Altium, a C, a firmware-tesztelés és az EMC-megfelelőség területén.",
    "experience": [
      {
        "role": "Villamosmérnök",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "2021. március",
        "end": "",
        "current": true,
        "points": "Beágyazott vezérlőpanelek tervezése, amelyeket évente 50,000+ eszközben használnak\n22%-kal csökkentettem a panelköltséget a teljesítményfokozat újratervezésével és alternatív alkatrészek beszerzésével\nAz EMC-megfelelőségi tesztelés vezetése, elsőre átmenve 4 termékvonalon\nFirmware írása és átvizsgálása C-ben mikrokontrollerekhez"
      },
      {
        "role": "Junior villamosmérnök",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "2019. július",
        "end": "2021. február",
        "current": false,
        "points": "NYÁK-okat terveztem Altiumban fogyasztói és ipari ügyfeleknek\nPrototípusokat készítettem és teszteltem, hardverhibákat kerestem\nTeszteljárásokat írtam, amelyek 30%-kal csökkentették a gyártási tesztidőt"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Villamosmérnöki",
        "start": "2015",
        "end": "2019",
        "notes": "Tanulmányok beágyazott rendszerek, teljesítményelektronika és jelfeldolgozás témában."
      }
    ],
    "skills": "Beágyazott rendszerek és NYÁK-tervezés\nAltium Designer\nC és firmware\nTeljesítményelektronika\nEMC-megfelelőségi tesztelés\nOszcilloszkópok és laboratóriumi műszerek",
    "languages": "Angol (folyékony)\nGudzsaráti (társalgási)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Adatelemző",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Adatelemző 4 éves tapasztalattal abban, hogy értékesítési és működési adatokat döntésekké alakítsak. Irányítópultokat készítettem, amelyeket 60+ vezető használ, a havi jelentéskészítési időt 3 napról 4 órára csökkentettem, és találtam egy évi 180,000 dollárt érő árazási hibát. Erős vagyok SQL-ben, Excelben és Power BI-ban.",
    "experience": [
      {
        "role": "Adatelemző",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "2022. január",
        "end": "",
        "current": true,
        "points": "Power BI irányítópultokat készítettem, amelyeket 60+ bolti és regionális vezető használ\nA havi jelentéskészítést 3 napról 4 órára csökkentettem automatizált SQL-folyamatokkal\nÉvi 180,000 dollárt érő árazási hibát találtam a promóciós adatok auditálásával\nA megállapítások havi bemutatása a kereskedelmi csapatnak"
      },
      {
        "role": "Junior adatelemző",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "2020. augusztus",
        "end": "2021. december",
        "current": false,
        "points": "4 rendszer szállítási adatait tisztítottam és egyesítettem egyetlen jelentési táblába\nExcel-követőket készítettem, amelyek 2 csapatnál váltották fel a kézi számolást\nNapi szinten válaszoltam az üzemeltetési vezetők ad hoc adatkérdéseire"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statisztika",
        "start": "2016",
        "end": "2020",
        "notes": "Tanulmányok regresszió, adatbázisok és adatvizualizáció témában."
      }
    ],
    "skills": "SQL és adattisztítás\nPower BI és Tableau\nExcel (haladó)\nPython (pandas)\nIrányítópult-tervezés\nAz A/B tesztelés alapjai",
    "languages": "Angol (folyékony)\nVietnami (társalgási szint)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Adattudós",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Adattudós 5 éves tapasztalattal gépi tanulási modellek építésében e-kereskedelem számára. Egy általam bevezetett ajánlómotor 12%-kal emelte a látogatásonkénti bevételt, és egy lemorzsolódási modell most az ügyfelek 80%-át jelzi a veszélyeztetettek közül. Erős vagyok Pythonban, SQL-ben és a modellek üzembe helyezésében.",
    "experience": [
      {
        "role": "Adattudós",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "2022. február",
        "end": "",
        "current": true,
        "points": "Ajánlómodellt vezettem be, amely 12%-kal emelte a látogatásonkénti bevételt\nLemorzsolódási modellt készítettem, amely a veszélyeztetett ügyfelek 80%-át egy hónappal korábban jelzi\nModelleket helyeztem üzembe felügyeleti és újratanítási folyamatokkal\nA modelleredmények havi bemutatása a termék- és marketingcsapatoknak"
      },
      {
        "role": "Junior adattudós",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "2020. július",
        "end": "2022. január",
        "current": false,
        "points": "Előrejelzési modelleket készítettem 3 kiskereskedelmi ügyfélnek, 90%+ pontossággal\n10M+ soros adathalmazokat tisztítottam és készítettem elő modellezéshez\nDokumentációt írtam, hogy az ügyfelek maguk is újra tudják futtatni a modelleket"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Adattudomány",
        "start": "2018",
        "end": "2020",
        "notes": "Szakdolgozat ajánlórendszerekről. BS matematika szakon (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nGépi tanulás és statisztika\nSQL és Spark\nModellüzembe helyezés (Docker, AWS)\nA/B tesztelés\nAdatvizualizáció",
    "languages": "Angol (folyékony)\nArab (folyékony)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webfejlesztő",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webfejlesztő 4 év tapasztalattal gyors, akadálymentes weboldalak készítésében HTML, CSS és JavaScript nyelven. Újraépítettem egy áruház pénztárát, ami 18%-kal növelte a konverziókat, és 12 ügyféloldalt tartok karban 99.9%-os rendelkezésre állással. Erős vagyok reszponzív tervezésben, teljesítményben és a SEO alapjaiban.",
    "experience": [
      {
        "role": "Webfejlesztő",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "2022. március",
        "end": "",
        "current": true,
        "points": "Reszponzív weboldalak készítése HTML, CSS, JavaScript és WordPress használatával 12 ügyfél számára\nÚjjáépítettem egy bolti pénztárat, amely 18%-kal emelte a konverziókat\nAz átlagos oldalbetöltési időt 4.2 másodpercről 1.8 másodpercre csökkentettem kép- és kódoptimalizálással\nMinden ügyféloldal 99.9%-os rendelkezésre állása felügyelettel és biztonsági mentésekkel"
      },
      {
        "role": "Junior webfejlesztő",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "2021. június",
        "end": "2022. február",
        "current": false,
        "points": "Céloldalakat készítettem és hibákat javítottam 20+ kisvállalkozási oldalon\nÉlő projekteken tanultam Gitet, reszponzív tervezést és alapszintű SEO-t\nVálaszoltam az ügyfelek e-mailjeire, és még aznap elvégeztem a tartalmi frissítéseket"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatika",
        "start": "2017",
        "end": "2021",
        "notes": "Tanulmányok webfejlesztés, adatbázisok és ember-számítógép interakció témában."
      }
    ],
    "skills": "HTML, CSS és JavaScript\nReact és WordPress\nReszponzív tervezés\nOldalsebesség-optimalizálás\nGit és GitHub\nAlapszintű SEO",
    "languages": "Angol (folyékony)\nSpanyol (folyékony)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafikus",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafikus 5 éves tapasztalattal márkaépítésben, csomagolástervezésben és közösségimédia-tervezésben. Márkaarculatokat készítettem 25+ kisvállalkozásnak és egy csomagolás-újratervezést, amely 14%-kal emelte a polci értékesítést. Jártas vagyok az Adobe Illustrator, a Photoshop és a Figma használatában.",
    "experience": [
      {
        "role": "Grafikus",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "2022. január",
        "end": "",
        "current": true,
        "points": "Márkaarculatok, csomagolások és közösségi kampányok tervezése 25+ ügyfél számára\nEgy élelmiszermárka csomagolásának újratervezése 14%-kal emelte a polci értékesítést\nHeti 30+ közösségi anyag készítése Instagramra, TikTokra és Facebookra\nKoncepciók bemutatása az ügyfeleknek és gyors átdolgozás a visszajelzések alapján"
      },
      {
        "role": "Junior grafikus",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "2020. július",
        "end": "2021. december",
        "current": false,
        "points": "Szórólapokat, étlapokat és közösségi posztokat terveztem helyi éttermeknek és üzleteknek\nNyomdakész fájlokat készítettem és levonatokat ellenőriztem a nyomdákkal\nSablonkönyvtárat készítettem, amely harmadával csökkentette a tervezési időt"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafikai tervezés",
        "start": "2016",
        "end": "2020",
        "notes": "Portfólió márkaépítésben és csomagolástervezésben."
      }
    ],
    "skills": "Adobe Illustrator és Photoshop\nFigma\nMárkaarculat-tervezés\nCsomagolástervezés\nKözösségimédia-tervezés\nNyomdai gyártás",
    "languages": "Angol (folyékony)\nKoreai (társalgási)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX-tervező",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX-tervező 5 éves tapasztalattal felhasználók kutatásában és mobil- és webtermékek tervezésében. Újraterveztem egy beillesztési folyamatot, amely 35%-kal csökkentette a lemorzsolódást, és 40+ használhatósági tesztet futtattam. Jártas vagyok a Figma, a felhasználói kutatás, a drótváz-készítés és a prototípus-készítés területén.",
    "experience": [
      {
        "role": "UX-tervező",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "2022. február",
        "end": "",
        "current": true,
        "points": "Újraterveztem a mobilos beillesztést, 35%-kal csökkentve a lemorzsolódást 3 hónap alatt\nÉvente 40+ használhatósági teszt és felhasználói interjú futtatása\nDrótvázak és prototípusok készítése Figmában 2 termékcsapat számára\nNapi munka mérnökökkel és termékvezetőkkel a szállításon"
      },
      {
        "role": "Junior UX-tervező",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "2020. augusztus",
        "end": "2022. január",
        "current": false,
        "points": "Képernyőket és folyamatokat terveztem 5 ügyfélalkalmazáshoz\nElső használhatósági teszteket végeztem és megállapításokat írtam az ügyfeleknek\nKomponenskönyvtárat készítettem, amely felgyorsította a tervek átadását"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Pszichológia",
        "start": "2016",
        "end": "2020",
        "notes": "UX-tervezői tanúsítvány (General Assembly, 2020). Tanulmányok ember-számítógép interakció témában."
      }
    ],
    "skills": "Felhasználói kutatás és használhatósági tesztelés\nDrótváz- és prototípus-készítés (Figma)\nInformációs architektúra\nTervezési rendszerek\nÜgyfélút-térképezés\nÉrdekelt felek műhelyei",
    "languages": "Angol (folyékony)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marketingvezető",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marketingvezető 8 éves tapasztalattal B2B és fogyasztói kampányokban. 60%-kal növeltem a minősített érdeklődőket egy év alatt, termékvonalat indítottam, amely az első évben 3 millió dolláros értékesítést ért el, és egy 500,000 dolláros éves költségvetést kezelek egy 5 fős csapaton át.",
    "experience": [
      {
        "role": "Marketingvezető",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "2021. március",
        "end": "",
        "current": true,
        "points": "5 fős csapat és egy 500,000 dolláros éves marketingköltségvetés vezetése\n60%-kal növeltem a minősített érdeklődőket egy év alatt tartalommal és fizetett kampányokkal\nTermékvonalat indítottam, amely az első évben 3 millió dolláros értékesítést ért el\n28%-kal csökkentettem az érdeklődőnkénti költséget a kampánycélzás újjáépítésével"
      },
      {
        "role": "Marketingszakember",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "2017. június",
        "end": "2021. február",
        "current": false,
        "points": "E-mail-kampányokat futtattam 80,000 feliratkozónak 24%-os megnyitási aránnyal\nKözösségi fiókokat kezeltem, amelyek 5,000-ről 40,000 követőre nőttek\nÉvente 6 szakkiállítási standot szerveztem, egyenként 300+ érdeklődőt generálva"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Tanulmányok fogyasztói magatartás, elemzés és márkamenedzsment témában."
      }
    ],
    "skills": "Kampánystratégia és -tervezés\nTartalom- és e-mail-marketing\nFizetett hirdetések (Google, Meta)\nMarketingelemzés (GA4)\nCsapatvezetés\nKöltségvetés-kezelés",
    "languages": "Angol (folyékony)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektvezető",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektvezető (PMP) 7 éves tapasztalattal szoftver- és építési projektek határidőre és költségvetésen belüli szállításában. 15, akár 4 millió dolláros projektet kezeltem, 94%-os határidőre történő szállítási aránnyal. Jártas vagyok az Agile, a kockázatkezelés és az érdekelt felekkel való kommunikáció területén.",
    "experience": [
      {
        "role": "Projektvezető",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "15, akár 4 millió dolláros projekt kezelése, 94%-os határidőre történő szállítási aránnyal\nAgilis sprintek futtatása 3 csapatnak és heti előrehaladási jelentés a vezetőknek\n30%-kal csökkentettem a projekttúllépéseket korábbi kockázatértékelésekkel\nBeszállítók, ügyfelek és belső csapatok koordinálása 4 időzónán át"
      },
      {
        "role": "Projektkoordinátor",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "2018. július",
        "end": "2020. december",
        "current": false,
        "points": "Ütemterveket, költségvetéseket és engedélyeket követtem 8 építési projektnél\nÁllapotjelentéseket és megbeszélési jegyzeteket készítettem az ügyfeleknek\nÜtemezési konfliktusokat oldottam meg, amelyek 2 hetet takarítottak meg egy iskolaépítésen"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Üzleti adminisztráció",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-tanúsítvány (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Projekttervezés és ütemezés\nAgile és Scrum\nKockázatkezelés\nKöltségvetés-ellenőrzés\nÉrdekelt felekkel való kommunikáció\nMS Project és Jira",
    "languages": "Angol (folyékony)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Humánerőforrás-vezető",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Humánerőforrás-vezető 9 éves tapasztalattal felvételben, munkavállalói kapcsolatokban és juttatásokban. A felvételi időt 45 napról 28 napra csökkentettem, a megtartást 15%-kal emeltem, és 250 alkalmazott HR-jét viszem 3 telephelyen. CIPD-szintű munkajogi és szabályzati ismeretek.",
    "experience": [
      {
        "role": "Humánerőforrás-vezető",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "2020. február",
        "end": "",
        "current": true,
        "points": "250 alkalmazott HR-jének vitele 3 telephelyen, 3 fős csapattal\nA felvételi időt 45 napról 28 napra csökkentettem az interjúfolyamat újjáépítésével\n15%-kal emeltem a megtartást egy új beillesztési és értékelési programmal\nMunkavállalói kapcsolatok, panaszok és szabályzatfrissítések kezelése"
      },
      {
        "role": "HR-generalista",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "2016. június",
        "end": "2020. január",
        "current": false,
        "points": "Évente 120+ alkalmazottat toboroztam szállodáknak és éttermeknek\nBérszámfejtési ellenőrzéseket és juttatási beiratkozást végeztem 400 alkalmazottnak\nAlkalmazotti vitákat oldottam meg, és az ágazati átlag alatt tartottam a fluktuációt"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Humánerőforrás",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP tanúsítvány. Tanulmányok munkajog és szervezeti magatartás témában."
      }
    ],
    "skills": "Toborzás és beillesztés\nMunkavállalói kapcsolatok\nJuttatások és bérszámfejtés\nMunkajog\nTeljesítménymenedzsment\nHRIS (Workday, BambooHR)",
    "languages": "Angol (folyékony)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Társult ügyvéd",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Társult ügyvéd 6 éves tapasztalattal gazdasági perekben és szerződési jogban. 40+ ügyet kezeltem, 8 esetben értem el sommás ítéletet, és 25 millió dollár értékű szerződéseket fogalmaztam. Felvételt nyertem az Illinois-i Ügyvédi Kamarába; jártas vagyok a jogi kutatásban, a fogalmazásban és az ügyféltanácsadásban.",
    "experience": [
      {
        "role": "Társult ügyvéd",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "2020. szeptember",
        "end": "",
        "current": true,
        "points": "40+ gazdasági peres ügy kezelése a benyújtástól a megegyezésig\n8 ügyben értem el sommás ítéletet, és további 20-at előnyösen egyezséggel zártam\nAkár 25 millió dolláros szerződések fogalmazása és tárgyalása\nÜgyfelek tanácsadása személyesen és írásban kockázat és stratégia kérdésében"
      },
      {
        "role": "Jogi ügyintéző",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "2019. augusztus",
        "end": "2020. augusztus",
        "current": false,
        "points": "Esetjogot kutattam és feljegyzéseket fogalmaztam 2 bírónak\nIndítványokat vizsgáltam át és tárgyalási összefoglalókat készítettem 100+ tárgyalásra\nTárgyalásokat és megegyezési konferenciákat figyeltem meg a polgári osztályokon"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Jog",
        "start": "2016",
        "end": "2019",
        "notes": "Felvétel az Illinois-i Ügyvédi Kamarába (2019). Jogi folyóirat, cikkszerkesztő."
      }
    ],
    "skills": "Kereskedelmi peres ügyek\nSzerződéskészítés és tárgyalás\nJogi kutatás (Westlaw, LexisNexis)\nÜgyféltanácsadás\nTanúmeghallgatások és bizonyításfelvétel\nBírósági beadványok és eljárásrend",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinikai gyógyszerész",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinikai gyógyszerész (PharmD) 7 éves tapasztalattal kórházi és közösségi gyógyszertárban. Napi 100+ gyógyszerelést ellenőrzök, egy új ellenőrzési protokollal 25%-kal csökkentettem a gyógyszermellékhatásokat, és tanácsot adok a pácienseknek a biztonságos gyógyszerhasználatról. Pennsylvaniában rendelkezem működési engedéllyel.",
    "experience": [
      {
        "role": "Klinikai gyógyszerész",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "2020. január",
        "end": "",
        "current": true,
        "points": "Napi 100+ gyógyszerelés átvizsgálása biztonság, adagolás és kölcsönhatások szempontjából\n25%-kal csökkentettem a gyógyszermellékhatásokat egy új kettős ellenőrzési protokollal\nOrvosok és ápolók tanácsadása a gyógyszerválasztásban összetett esetű pácienseknél\nA kórház antibiotikum-felügyeleti vizitjeinek vitele hetente kétszer"
      },
      {
        "role": "Gyógyszerész",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "2018. július",
        "end": "2019. december",
        "current": false,
        "points": "Napi 200+ receptet adtam ki, kiadási hiba nélkül\nTanácsot adtam a pácienseknek az új gyógyszerekről, a mellékhatásokról és a tárolásról\nInfluenza elleni védőoltásokat adtam és vérnyomásméréseket végeztem"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Gyógyszerészet",
        "start": "2014",
        "end": "2018",
        "notes": "Engedéllyel rendelkező gyógyszerész (Pennsylvania). Testület által minősített farmakoterápiás szakember (BCPS)."
      }
    ],
    "skills": "Gyógyszer-felülvizsgálat és -biztonság\nKlinikai farmakológia\nPácientanácsadás\nGyógyszertári rendszerek (Epic, PioneerRx)\nAntibiotikum-felügyeleti program\nVédőoltási szolgáltatások",
    "languages": "Angol (folyékony)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Általános fogorvos",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Általános fogorvos (DDS) 8 éves tapasztalattal helyreállító, esztétikai és megelőző fogászatban. Napi 25+ pácienst kezelek egy 2,000 pácienses praxisban, 98%-os páciens-elégedettségi pontszámmal. Jártas vagyok a koronák, implantátumok, gyökérkezelések és átlátszó fogszabályozók területén.",
    "experience": [
      {
        "role": "Általános fogorvos",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "2019. február",
        "end": "",
        "current": true,
        "points": "Napi 25+ páciens kezelése: tömések, koronák, gyökérkezelések és húzások\n98%-os páciens-elégedettségi pontszámot tartok 1,200+ értékelésben\nHavi 15+ implantátum behelyezése és átlátszó fogszabályozós esetek kezelése\n2 higiénikus és 4 fogászati asszisztens felügyelete"
      },
      {
        "role": "Munkatárs fogorvos",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "2017. július",
        "end": "2019. január",
        "current": false,
        "points": "Általános fogászatot végeztem egy 1,500 pácienses praxisnak\nBevezettem az aznapi koronákat, 40%-kal csökkentve a visszatérő látogatásokat\nIskolai kapcsolattartó látogatásokat végeztem a gyermekek szájegészségéről"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Fogászat",
        "start": "2013",
        "end": "2017",
        "notes": "Engedéllyel rendelkező fogorvos (Arizona). Invisalign tanúsítvány. CPR/BLS tanúsítvány."
      }
    ],
    "skills": "Helyreállító fogászat (koronák, tömések)\nGyökérkezelés\nFogászati implantátumok\nÁtlátszó fogszabályozók\nPáciensellátás és -kommunikáció\nDigitális röntgen és CEREC",
    "languages": "Angol (folyékony)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Gyógytornász",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Gyógytornász (DPT) 6 éves tapasztalattal ortopédiai és sportrehabilitációban. Napi 12-15 pácienst kezelek, akiknek 90%-a eléri céljait a tervezett alkalmakon belül. Jártas vagyok a manuálterápiában, a mozgásterápia-előírásban és a sportba való visszatérési tesztelésben.",
    "experience": [
      {
        "role": "Gyógytornász",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "2021. március",
        "end": "",
        "current": true,
        "points": "Napi 12-15 páciens kezelése sportsérülésekre, műtét utáni rehabilitációra és hátfájásra\nA páciensek 90%-a eléri céljait a tervezett alkalmak számán belül\nSportba való visszatérési tesztelés tervezése, amelyet 3 helyi csapat használ\n2 új diplomás mentorálása és hallgatói gyakorlatok felügyelete"
      },
      {
        "role": "Gyógytornász",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "2019. augusztus",
        "end": "2021. február",
        "current": false,
        "points": "Fekvőbeteg-rehabilitációt végeztem műtét utáni és stroke-os pácienseknek\nCsoportos mozgásórákat tartottam heti 20+ idősebb páciensnek\nDokumentáltam az előrehaladást az Epicben, és átadtam az osztályos csapatoknak"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Gyógytorna",
        "start": "2016",
        "end": "2019",
        "notes": "Engedéllyel rendelkező gyógytornász (Oregon). Ortopédiai klinikai szakember (OCS)."
      }
    ],
    "skills": "Ortopédiai és sportrehabilitáció\nManuálterápia\nMozgásterápia-előírás\nSportba való visszatérési tesztelés\nPáciensoktatás\nDokumentáció (Epic)",
    "languages": "Angol (folyékony)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Konyhafőnök",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Konyhafőnök 10 éves tapasztalattal kreol és modern amerikai konyhákban. 12 fős brigádot vezet egy 200 férőhelyes étteremben, szigorúbb rendeléssel 15%-kal csökkentette az élelmiszerköltségeket, és 2025-ben elnyerte a városi gasztrokalauz 'Best New Menu' díját.",
    "experience": [
      {
        "role": "Konyhafőnök",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "12 fős brigád vezetése egy 200 férőhelyes étteremben, amely esténként 300+ vendéget szolgál ki\n15%-kal csökkentettem az élelmiszerköltségeket szorosabb rendeléssel és szezonális étlappal\n2025-ben elnyertem a városi étteremkalauz 'Legjobb új étlap' díját\nÉtlapok tervezése, szakácsok képzése és a passz vezetése a pénteki és szombati szolgálatban"
      },
      {
        "role": "Helyettes konyhafőnök",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "2017. június",
        "end": "2020. december",
        "current": false,
        "points": "A konyhát vittem, amikor a konyhafőnök távol volt, esténként 150 vendéget lefedve\nKészletet, rendelést és beszállítói kapcsolatokat kezeltem\n8 szakácsot képeztem ki, és harmadával csökkentettem a személyzet fluktuációját"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Oklevél",
        "field": "Gasztronómia",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager tanúsítvány."
      }
    ],
    "skills": "Étlaptervezés és költségkalkuláció\nKreol és modern amerikai konyha\nKonyhavezetés (12 fős brigád)\nÉlelmiszer-biztonság (ServSafe)\nBeszállítókezelés\nBankett- és rendezvényvendéglátás",
    "languages": "Angol (folyékony)\nSpanyol (folyékony)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Rendőr",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Rendőr 8 éves tapasztalattal járőrözésben, közösségi rendészetben és nyomozásokban. Heti 30+ riasztásra reagálok, dicséretekkel enyhítésért és közösségi kapcsolatépítésért. Képzett vagyok krízisintervencióban, elsősegélyben és jelentésírásban.",
    "experience": [
      {
        "role": "Rendőr",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "2019. június",
        "end": "",
        "current": true,
        "points": "Egy 40,000 lakosú körzet járőrözése, heti 30+ riasztásra reagálva\n2 dicséretet kaptam enyhítésért és közösségi kapcsolatépítésért\nLopások és támadások kivizsgálása, 50+ vádemelésben felhasznált jelentések írásával\n3 új tiszt mentorálása a terepképzés során"
      },
      {
        "role": "Járőrtiszt",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "2017. augusztus",
        "end": "2019. május",
        "current": false,
        "points": "Megyei utakon járőröztem és vészhívásokra reagáltam\nBírósági iratokat kézbesítettem és fogolyszállításban segédkeztem\nElvégeztem a krízisintervenciós és elsősegély-képzést"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Tanúsítvány",
        "field": "Rendészet",
        "start": "2017",
        "end": "2017",
        "notes": "Az Ohio Peace Officer Training Academy végzőse. Crisis Intervention Team képzéssel."
      }
    ],
    "skills": "Járőrözés és vészhelyzeti reagálás\nKözösségi rendészet\nKrízisintervenció és feszültségcsökkentés\nJelentésírás\nNyomozások\nElsősegély és újraélesztés",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Tűzoltó / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Tűzoltó és EMT 7 éves tapasztalattal tűzoltásban, mentésben és sürgősségi orvosi reagálásban. 900+ riasztásra reagáltam, beleértve épülettüzeket, járműmentéseket és egészségügyi vészhelyzeteket. HazMat-képzett, tiszta biztonsági múlttal.",
    "experience": [
      {
        "role": "Tűzoltó / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "2020. március",
        "end": "",
        "current": true,
        "points": "900+ tűz-, mentési és orvosi riasztásra reagálok egy 3 állomásos körzetben\nSürgősségi orvosi ellátás nyújtása minősített EMT-ként a riasztások 60%-ánál\nHazMat-képzett; a fertőtlenítés vezetése vegyi incidenseknél\nÚj újoncok képzése tömlőkezelésben, létrákban és keresési technikákban"
      },
      {
        "role": "Önkéntes tűzoltó",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "2018. június",
        "end": "2020. február",
        "current": false,
        "points": "Önkéntesként reagáltam terep- és épülettüzekre\nElvégezte a Tűzoltó I. és II., valamint az EMT-Basic képzést\nSegítettem közösségi tűzbiztonsági előadások tartásában iskolákban"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Tanúsítvány",
        "field": "Tűzvédelem",
        "start": "2017",
        "end": "2018",
        "notes": "Tűzoltó I. és II. szint. EMT-Basic tanúsítvánnyal. HazMat műveleti képzettséggel."
      }
    ],
    "skills": "Tűzoltás és mentés\nSürgősségi betegellátás (EMT)\nHazMat műveletek\nLétrák, tömlők és szellőztetés\nKözösségi tűzbiztonság\nCsapatmunka nyomás alatt",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Engedéllyel rendelkező vízvezeték-szerelő",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Engedéllyel rendelkező mester vízvezeték-szerelő 11 éves tapasztalattal lakossági és kereskedelmi vízvezeték-szerelésben. Évente 600+ munkát végeztem el, az alapszerelésektől a kazántelepítésekig, 98%-os első látogatásra történő javítási aránnyal. Jártas vagyok a csőszerelésben, a lefolyótisztításban és az előírások betartásában.",
    "experience": [
      {
        "role": "Mester vízvezeték-szerelő",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "2019. január",
        "end": "",
        "current": true,
        "points": "Évente 600+ lakossági és kereskedelmi munka elvégzése\nKazánok, vízmelegítők és teljes fürdőszobai alapszerelések telepítése\n98%-os első látogatásra történő javítási arányt tartok a szervizhívásoknál\n3 tanuló felügyelete és munkájuk jóváhagyása"
      },
      {
        "role": "Szakmunkás vízvezeték-szerelő",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "2014. június",
        "end": "2018. december",
        "current": false,
        "points": "Új építésű vízvezeték-szerelést végeztem évi 40+ házhoz\nLefolyókat tisztítottam és szivárgásokat javítottam otthonokban és éttermekben\nMegtanultam a gázszerelést és a visszafolyás megelőzését"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Tanúsítvány",
        "field": "Vízvezeték-technológia",
        "start": "2013",
        "end": "2014",
        "notes": "Mester vízvezeték-szerelői engedély (Tennessee). Visszafolyás-megelőzési tanúsítvány."
      }
    ],
    "skills": "Lakossági és kereskedelmi vízvezeték-szerelés\nCsőszerelés és forrasztás\nLefolyótisztítás és kamerás vizsgálat\nKazánok és vízmelegítők szerelése\nGázszerelés\nVízvezeték-előírások betartása",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Szakmunkás ács",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Szakmunkás ács 9 éves tapasztalattal vázépítésben, befejező munkákban és egyedi szekrénykészítésben. 30+ ház vázát építettem fel és 60+ otthonba építettem be konyhát, pontos méretekkel és tiszta kivitelezéssel szerezve hírnevet. Jártas vagyok a tervek olvasásában és az előírások szerinti munkavégzésben.",
    "experience": [
      {
        "role": "Szakmunkás ács",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "2019. február",
        "end": "",
        "current": true,
        "points": "30+ ház vázának felépítése és konyhák beépítése 60+ otthonban\nEgyedi szekrények és díszlécek készítése 1/16 hüvelykes tűréssel\nÉpítészeti tervek olvasása és követése, a hibák megjelölésével, mielőtt pénzbe kerülnének\n2 tanuló képzése vázépítési és befejező technikákban"
      },
      {
        "role": "Ács tanuló",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "2016. június",
        "end": "2019. január",
        "current": false,
        "points": "Segédkeztem vázépítésben, gipszkartonozásban és padlóburkolásban felújításoknál\nMegtanultam a fűrészek, marógépek és szögbelövők biztonságos használatát\n8,000 tanulóórát teljesítettem és letettem a szakmunkás-vizsgát"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Tanúsítvány",
        "field": "Ácsmunka",
        "start": "2015",
        "end": "2016",
        "notes": "Szakmunkás ács. OSHA 10 tanúsítvány."
      }
    ],
    "skills": "Vázépítés és szerkezeti munkák\nBefejező ácsmunkák és szegélylécek\nEgyedi szekrénykészítés\nÉpítészeti tervek olvasása\nElektromos szerszámok és biztonság\nGipszkartonozás és padlóburkolás",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Középiskolai tanár (matematika)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Középiskolai tanár 8 éves tapasztalattal a 9-12. osztályok matematikatanításában. Az algebra átmenési arányait 64%-ról 83%-ra emeltem, és a matematikacsapatot 2 állami döntőig készítem fel. Jártas vagyok a differenciált oktatásban, a vizsgafelkészítésben és a szülői kommunikációban.",
    "experience": [
      {
        "role": "Matematikatanár (9-12. osztály)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "2019. augusztus",
        "end": "",
        "current": true,
        "points": "Algebra, geometria és előkalkulus tanítása 120 tanulónak 5 osztályban\nAz algebra átmenési arányait 64%-ról 83%-ra emeltem 3 év alatt\nA matematikacsapat felkészítése 2 állami döntőre\nIskola utáni korrepetálás vitele heti 30 tanulónak"
      },
      {
        "role": "Matematikatanár (9-10. osztály)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "2017. augusztus",
        "end": "2019. június",
        "current": false,
        "points": "Évente 100 tanulónak tanítottam algebrát és geometriát\nHeti kvízeket vezettem be, amelyek felére csökkentették a házi feladatbeli hiányosságokat\nMegszerveztem az iskola első matematikavásárát 200 tanulóval"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Matematikapedagógia",
        "start": "2013",
        "end": "2017",
        "notes": "Állami tanári engedély (New Hampshire, 7-12. osztály, matematika)."
      }
    ],
    "skills": "Matematikaoktatás (algebrától az analízis előkészítéséig)\nVizsgafelkészítés\nDifferenciált oktatás\nOsztálytermi vezetés\nSzülői kommunikáció\nGoogle Classroom és Desmos",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Óvodapedagógus",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Óvodapedagógus 6 éves tapasztalattal 3-5 éves gyermekek gondozásában. Jártas vagyok a játékalapú tanulásban, a magatartásirányításban és a szülői kommunikációban. Hangtan-programot dolgoztam ki, amely az osztályomban emelte az iskolaérettségi pontszámokat.",
    "experience": [
      {
        "role": "Óvodapedagógus",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "2020. augusztus",
        "end": "",
        "current": true,
        "points": "Egy 18, 3-5 éves gyermekből álló osztály tanítása és gondozása\nHangtan-programot dolgoztam ki, amely az egész osztályban emelte az iskolaérettségi pontszámokat\nHeti témák, kézműves foglalkozások és szabadtéri játék tervezése\nNapi frissítések és időszakos előrehaladási jelentések megosztása a szülőkkel"
      },
      {
        "role": "Óvodapedagógus-asszisztens",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "2018. június",
        "end": "2020. július",
        "current": false,
        "points": "A vezető tanárt támogattam egy 20 gyermekes osztályban\nNaponta tartottam meseolvasást, éneklést és kézműves foglalkozásokat\nA biztonsági és higiéniai nyilvántartásokat az állami szabványok szerint tartottam"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Főiskolai végzettség",
        "field": "Óvodapedagógia",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA) képesítés. Elsősegély- és újraélesztési tanúsítvány."
      }
    ],
    "skills": "Játékos tanulás\nViselkedésirányítás\nHangtan és korai írás-olvasás\nSzülői kommunikáció\nOsztálytermi biztonság\nKézműves foglalkozások tervezése",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Gyermek- és családvédelmi szociális munkás",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Engedéllyel rendelkező szociális munkás 7 éves tapasztalattal gyermekek és családok támogatásában. 25 családos esetteheret kezelek, szolgáltatásokat koordinálok iskolák és egészségügyi szolgáltatók között, és bírósági jelentéseket készítek, amelyekre a bírák támaszkodnak. Jártas vagyok a felmérésben, a krízistámogatásban és a védelemben.",
    "experience": [
      {
        "role": "Gyermek- és családvédelmi szociális munkás",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "2020. január",
        "end": "",
        "current": true,
        "points": "25 családos esetteher kezelése, heti otthon- és iskolalátogatásokkal\nBírósági jelentések készítése és tanúvallomás a családjogi bíróságon\nLakhatási, egészségügyi és iskolai támogatás koordinálása veszélyeztetett családok számára\n20%-kal csökkentettem a felmérési várakozási időt egy új osztályozási rendszerrel"
      },
      {
        "role": "Esetmunkás",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "2018. július",
        "end": "2019. december",
        "current": false,
        "points": "40+ családot támogattam ideiglenes lakhatásban ellátásokkal és beutalásokkal\nHeti szülői és költségvetési műhelyeket tartottam\nAz esetjegyzeteket pontosan tartottam az auditokhoz és finanszírozási jelentésekhez"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Szociális munka",
        "start": "2016",
        "end": "2018",
        "notes": "Engedéllyel rendelkező szociális munkás (Ohio). Tanulmányok gyermekjólét és családrendszerek témában."
      }
    ],
    "skills": "Esetmenedzsment (25 család)\nGyermekvédelem\nCsaládjogi jelentések\nKrízistámogatás\nTöbbhatósági koordináció\nJuttatási és lakhatási tanácsadás",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Jogi asszisztens",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Jogi asszisztens 6 éves tapasztalattal peres támogatásban és vállalati beadványokban. 30+ ügy bizonyításfelvételét kezelem, beadványokat és szerződéseket fogalmazok, és 100%-os határidő-tartási múlttal tartom a benyújtási határidőket. Jártas vagyok a Westlaw, az e-discovery és az esetkezelő szoftverek használatában.",
    "experience": [
      {
        "role": "Jogi asszisztens",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "2021. február",
        "end": "",
        "current": true,
        "points": "Bizonyításfelvétel kezelése 30+ peres ügyben, 10,000+ dokumentum átvizsgálásával\nBeadványok, indítványok és szerződések fogalmazása ügyvédi felülvizsgálatra\n100%-os határidő-tartási múlt bírósági beadványoknál és határidőknél\nTanúk koordinálása és tárgyalási dossziék előkészítése"
      },
      {
        "role": "Jogi asszisztens",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "2019. augusztus",
        "end": "2021. január",
        "current": false,
        "points": "Heti 20+ ügyfél felvételi interjúja\nŰrlapokat és beadványokat készítettem lakhatási és családi ügyekhez\nJogi dokumentumokat fordítottam spanyolul beszélő ügyfeleknek"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Főiskolai végzettség",
        "field": "Jogi asszisztensi tanulmányok",
        "start": "2017",
        "end": "2019",
        "notes": "NALA minősített jogi asszisztens (CP). ABA által jóváhagyott program."
      }
    ],
    "skills": "Peres támogatás és bizonyításfelvétel\nJogi fogalmazás\nE-discovery (Relativity)\nEsetkezelés (Clio)\nBírósági beadványok és határidők\nJogi kutatás (Westlaw)",
    "languages": "Angol (folyékony)\nSpanyol (folyékony)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Könyvelési ügyintéző",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Könyvelési ügyintéző 5 éves tapasztalattal szállítói tartozások, számlázás és banki egyeztetések területén. Havi 300+ számlát dolgozok fel 99.8%-os pontossággal, és tisztán tartom a könyvelést a hóvégi záráshoz. Jártas vagyok a QuickBooks, az Excel és a bérszámfejtési támogatás használatában.",
    "experience": [
      {
        "role": "Könyvelési ügyintéző",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "2021. április",
        "end": "",
        "current": true,
        "points": "Havi 300+ beszállítói számla feldolgozása 99.8%-os pontossággal\nHeti 6 bankszámla egyeztetése és az eltérések aznapi megjelölése\nBérszámfejtési adatok előkészítése 45 alkalmazottnak és a lejárt ügyfélfizetések behajtása\nA nyilvántartások rendezetten tartása az év végi audithoz, megállapítások nélkül"
      },
      {
        "role": "Könyvelési asszisztens",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "2019. június",
        "end": "2021. március",
        "current": false,
        "points": "Naponta rögzítettem az értékesítési számlákat és bizonylatokat a QuickBooksba\nVálaszoltam a beszállítók kifizetésekkel kapcsolatos kérdéseire telefonon és e-mailben\nPapírmunkát iktattam és naprakészen tartottam az archívumot"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Tanúsítvány",
        "field": "Könyvelés",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks minősített felhasználó."
      }
    ],
    "skills": "Szállítói és vevői számlák kezelése\nBanki egyeztetések\nSzámlázás (havi 300+)\nQuickBooks és Excel\nBérszámfejtési támogatás\nAdatrögzítés (65 wpm)",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Adminisztratív asszisztens",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Adminisztratív asszisztens 6 éves tapasztalattal az irodák zökkenőmentes működésének fenntartásában. 4 vezető naptárát kezelem, utazásokat és megbeszéléseket szervezek, és napi 100+ e-mailt kezelek. Pontosságomról, diszkréciómról és határidős nyomás alatti nyugalmamról ismernek.",
    "experience": [
      {
        "role": "Adminisztratív asszisztens",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "Naptárak, utazások és megbeszélések kezelése 4 felső vezető számára\nNapi 100+ e-mail kezelése, válaszok fogalmazása és prioritások megjelölése\nIgazgatósági anyagok előkészítése és jegyzőkönyvvezetés a havi üléseken\nIrodaszer- és beszállítói rendelések vitele, a költségek 12%-os csökkentésével"
      },
      {
        "role": "Recepciós",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "2019. augusztus",
        "end": "2020. december",
        "current": false,
        "points": "Napi 60+ pácienst fogadtam és az időpontkönyvet kezeltem\nTelefonokat fogadtam és biztosítási kérdéseket kezeltem\nA páciensnyilvántartásokat pontosan és bizalmasan tartottam"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Főiskolai végzettség",
        "field": "Irodai adminisztráció",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Naptár- és utazásszervezés\nE-mail és levelezés\nÉrtekezleti jegyzőkönyvek\nMicrosoft Office (Word, Excel, Outlook)\nAdatrögzítés (70 wpm)\nIrodaszerek és beszállítók",
    "languages": "Angol (folyékony)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Banki pénztáros",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Banki pénztáros 4 éves tapasztalattal, napi 80+ ügyfél pontos és gondos kiszolgálásával. A pénztárfiók 3 éven át centre pontosan egyezett, hiány nélkül. Jártas vagyok a befizetésekben, kifizetésekben, csalásellenőrzésben és az ügyfelek megfelelő termékekhez irányításában.",
    "experience": [
      {
        "role": "Banki pénztáros",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "2022. március",
        "end": "",
        "current": true,
        "points": "Napi 80+ ügyfél kiszolgálása: befizetések, kifizetések, átutalások és átvezetések\nA pénztárfiók 3 éven át centre pontosan egyezett, hiány nélkül\n12 csalási kísérlet észlelése és megállítása, az ügyfeleknek 90,000+ dollárt takarítva meg\nÜgyfelek irányítása megtakarítási és hiteltermékekhez, a negyedéves ajánlási célok elérése"
      },
      {
        "role": "Ügyfélszolgálati munkatárs",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "2021. június",
        "end": "2022. február",
        "current": false,
        "points": "Új számlákat nyitottam és bankkártyákat adtam ki a tagoknak\nVálaszoltam az egyenlegekkel és kivonatokkal kapcsolatos telefonos kérdésekre\nSegítettem a tagoknak az online és mobilbank beállításában"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Főiskolai végzettség",
        "field": "Üzleti",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Készpénzkezelés és pénztáregyeztetés\nBefizetések, kifizetések és átutalások\nCsalásfelderítés\nÜgyfélszolgálat\nBanki szoftver (Fiserv)\nTermékajánlások",
    "languages": "Angol (folyékony)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Értékesítési vezető",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Értékesítési vezető 10 éves tapasztalattal akár 15 értékesítőből álló csapatok vezetésében. A regionális bevételt 4 millió dollárról 7.5 millió dollárra növeltem 3 év alatt, a nyerési arányt 22%-ról 34%-ra emeltem, és jobb coachinggal és beillesztéssel felére csökkentettem az értékesítők fluktuációját.",
    "experience": [
      {
        "role": "Regionális értékesítési vezető",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "15 értékesítőből álló csapat vezetése Texason és Oklahomán át\nA regionális bevételt 4 millió dollárról 7.5 millió dollárra növeltem 3 év alatt\nA nyerési arányt 22%-ról 34%-ra emeltem jobb coachinggal és csatorna-felülvizsgálatokkal\nFelére csökkentettem az értékesítők fluktuációját egy új beillesztési programmal"
      },
      {
        "role": "Értékesítési képviselő",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "2015. június",
        "end": "2020. december",
        "current": false,
        "points": "Ipari berendezéseket értékesítettem 80+ ügyfélnek, 5 éven át elérve a kvótát\nA régió legjobb értékesítője 3 egymást követő évben\nAjánlási hálózatot építettem ki, amely az új üzletek 25%-át hozta"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Tanulmányok értékesítés-menedzsment és tárgyalástechnika témában."
      }
    ],
    "skills": "Értékesítési csapat vezetése (15 értékesítő)\nBevételnövekedés és előrejelzés\nCsatornakezelés (Salesforce)\nCoaching és beillesztés\nTárgyalás\nTerülettervezés",
    "languages": "Angol (folyékony)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Építési vezető",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Építési vezető 12 éves tapasztalattal, akár 12 millió dolláros kereskedelmi és lakóprojektek megvalósításában. 20+ projektet fejeztem be 95%-os határidő-tartással, a telephelyeimen nulla munkaidő-kieséses sérüléssel és 3%-on belül tartott költségvetésekkel. Jártas vagyok az ütemezésben, az alvállalkozók kezelésében és a munkabiztonságban.",
    "experience": [
      {
        "role": "Építési vezető",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "2020. február",
        "end": "",
        "current": true,
        "points": "Akár 12 millió dolláros kereskedelmi és lakóprojektek megvalósítása\n20+ projektet fejeztem be 95%-os határidő-tartással és 3%-on belüli költségvetésekkel\n30+ alvállalkozó és 50 munkás kezelése 3 aktív építkezésen\n4 év alatt az összes telephelyen egyetlen munkaidő-kieséssel járó sérülés sem történt"
      },
      {
        "role": "Építésvezető",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "2013. június",
        "end": "2020. január",
        "current": false,
        "points": "Irodai és kiskereskedelmi építkezések napi működését vittem\nKoordináltam a szállításokat, az ellenőrzéseket és az alvállalkozók ütemterveit\nTisztán tartottam a biztonsági nyilvántartásokat és minden OSHA-ellenőrzésen átmentem"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Építőipari kivitelezés",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 tanúsítvány. CCM (Certified Construction Manager) jelölt."
      }
    ],
    "skills": "Projektütemezés (MS Project, Procore)\nKöltségvetés-ellenőrzés\nAlvállalkozó-kezelés\nÉpítkezésbiztonság (OSHA 30)\nTervrajzolvasás\nÜgyféljelentések",
    "languages": "Angol (folyékony)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Minősített egészségügyi asszisztens",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Minősített egészségügyi asszisztens 5 éves tapasztalattal családorvosi és sürgősségi ellátásban. Napi 25+ pácienst fogadok, életjeleket mérek, vért veszek és a recepciót kezelem, 97%-os páciens-elégedettségi pontszámmal. Jártas vagyok az EHR, a vérvétel és a biztosítási ellenőrzések területén.",
    "experience": [
      {
        "role": "Minősített egészségügyi asszisztens",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "2021. április",
        "end": "",
        "current": true,
        "points": "Napi 25+ páciens fogadása: életjelek, anamnézis és vizsgálat-előkészítés\nVérvétel és alapvető laborvizsgálatok elvégzése 99%-os első szúrásra történő sikeraránnyal\nA recepció, az időpontfoglalás és a biztosítási ellenőrzések kezelése\n97%-os páciens-elégedettségi pontszámot tartok 800+ felmérésben"
      },
      {
        "role": "Egészségügyi asszisztens",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "2019. augusztus",
        "end": "2021. március",
        "current": false,
        "points": "Bejáró pácienseket osztályoztam és orvosoknak segédkeztem kisebb eljárásoknál\nVédőoltásokat adtam és mintavételt kezeltem\nA vizsgálószobákat felszerelve, tisztán és készen tartottam a páciensek között"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Tanúsítvány",
        "field": "Egészségügyi asszisztens",
        "start": "2018",
        "end": "2019",
        "notes": "Minősített egészségügyi asszisztens (CMA, AAMA). BLS-minősítéssel. Vérvételi képzéssel."
      }
    ],
    "skills": "Páciensfelvétel és életjel-mérés\nVérvétel\nEHR (eClinicalWorks)\nVédőoltások\nBiztosítás-ellenőrzés\nRecepciókezelés",
    "languages": "Angol (folyékony)\nSpanyol (folyékony)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Diák",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Motivált középiskolás végzős erős jegyekkel és részmunkaidős tapasztalattal. Gyorsan tanulok, megbízható vagyok és jól bánok az emberekkel. Első teljes munkaidős szerepet vagy az egyetem melletti részmunkaidős állást keresek.",
    "experience": [
      {
        "role": "Részmunkaidős eladó",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "2024. szeptember",
        "end": "",
        "current": true,
        "points": "Műszakonként 50+ ügyfél kiszolgálása hétvégén és iskola után\nKészpénz kezelése, polcok újratöltése és a kiállítások rendezetten tartása\nMegbíznak bennem az üzlet kinyitásával szombat reggelenként"
      },
      {
        "role": "Önkéntes korrepetáló",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "2024. január",
        "end": "2025. június",
        "current": false,
        "points": "Fiatalabb tanulókat korrepetáltam matematikából heti kétszer\nSegítettem megszervezni a nyári olvasóprogramot 40 gyermek számára"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Középiskolai érettségi",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Kitüntetési lista, 3 év. A vitacsapat kapitánya."
      }
    ],
    "skills": "Ügyfélszolgálat\nKészpénzkezelés\nCsapatmunka\nIdőgazdálkodás\nMicrosoft Office\nNyilvános beszéd (vitacsapat)",
    "languages": "Angol (folyékony)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Friss diplomás \u2014 Üzleti adminisztráció",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Friss üzleti adminisztráció szakos diplomás szakmai gyakorlati tapasztalattal marketingben és működésben. Egyetemi üzleti versenyt szerveztem 200 résztvevővel, és elvégeztem egy 6 hónapos gyakorlatot, ahol felére csökkentettem a jelentéskészítési időt. Vágyom rá, hogy teljes munkaidős karriert kezdjek és gyorsan tanuljak.",
    "experience": [
      {
        "role": "Marketinggyakornok",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "2025. január",
        "end": "2025. június",
        "current": false,
        "points": "A cég közösségi fiókjait vittem, a követőket 2,000-ről 6,500-ra növelve\nJelentési irányítópultot készítettem, amely felére csökkentette a heti jelentéskészítési időt\n20 blogposztot írtam, amelyek 15,000+ olvasást hoztak"
      },
      {
        "role": "Rendezvényönkéntesek vezetője",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "2024. szeptember",
        "end": "2025. május",
        "current": false,
        "points": "Üzleti versenyt szerveztem 200 résztvevővel és 12 zsűritaggal\nEgy 5,000 dolláros költségvetést és egy 8 fős önkéntescsapatot kezeltem"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Üzleti adminisztráció",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 év. Záróéves projekt a kisvállalkozások marketingjéről."
      }
    ],
    "skills": "Közösségimédia-marketing\nExcel és Google Táblázatok\nPrezentációs készségek\nRendezvényszervezés\nCsapatmunka\nAlapszintű adatelemzés",
    "languages": "Angol (folyékony)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior marketingmunkatárs",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior marketingmunkatárs 2 éves tapasztalattal tartalom, e-mail és közösségi média területén. Egy ügyfél hírlevelét 1,000-ről 4,000 feliratkozóra növeltem, és olyan kampányokat viszek, amelyek átlagosan 22%-os megnyitási arányt érnek el. Készen állok nagyobb felelősségre és nagyobb ügyfélportfólióra.",
    "experience": [
      {
        "role": "Junior marketingmunkatárs",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "2024. július",
        "end": "",
        "current": true,
        "points": "Egy ügyfél hírlevelét 1,000-ről 4,000 feliratkozóra növeltem 14 hónap alatt\nHeti 12 közösségi poszt írása és ütemezése 4 ügyfélnek\nE-mail-kampányok vitele átlagosan 22%-os megnyitási aránnyal\nKampányeredmények havi jelentése az ügyfeleknek"
      },
      {
        "role": "Marketinggyakornok",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "2024. január",
        "end": "2024. június",
        "current": false,
        "points": "Termékleírásokat írtam 200+ tételhez a cég weboldalán\nSegítettem egy tavaszi akciós kampány lebonyolításában, amely 15%-kal emelte az online rendeléseket"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Kommunikáció",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Tanulmányok digitális marketing és médiaírás témában."
      }
    ],
    "skills": "Tartalomírás\nE-mail-marketing (Mailchimp)\nKözösségimédia-kezelés\nGoogle Analytics\nCanva\nÜgyféljelentések",
    "languages": "Angol (folyékony)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Üzemeltetési felügyelő",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Üzemeltetési felügyelő 8 éves tapasztalattal 20-30 fős raktári csapatok vezetésében. 30%-kal csökkentettem a komissiózási hibákat, a pontos indítást 90%-ról 97%-ra emeltem, és 15 új kezdőt képeztem ki. Készen állok egy üzemeltetési vezetői szerepre nagyobb telephellyel és költségvetéssel.",
    "experience": [
      {
        "role": "Üzemeltetési felügyelő",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "2021. március",
        "end": "",
        "current": true,
        "points": "25 raktári alkalmazott felügyelete 2 műszakban egy 90,000 négyzetlábas telephelyen\n30%-kal csökkentettem a komissiózási hibákat új ellenőrzési rutinokkal és vonalkód-leolvasással\nA pontos indítást 90%-ról 97%-ra emeltem 2 év alatt\n15 új kezdőt képeztem ki, és 3-at csapatvezetői szerepre léptettem elő"
      },
      {
        "role": "Csapatvezető",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "2017. június",
        "end": "2021. február",
        "current": false,
        "points": "10 komissiózóból és csomagolóból álló csapatot vezettem az éjszakai műszakban\nOlyan beosztást vezettem be, amely 20%-kal csökkentette a túlórákat, határidő-mulasztás nélkül\nBiztonsági eligazításokat tartottam és 2 éven át balesetmentesen tartottam a csapatot"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Ellátásilánc-menedzsment",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Csapatvezetés (25 alkalmazott)\nRaktári műveletek\nFolyamatfejlesztés\nBiztonságirányítás\nKészletellenőrzés\nWMS és Excel",
    "languages": "Angol (folyékony)\nHindi (társalgási)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Szenior projektvezető",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Szenior projektvezető 14 éves tapasztalattal akár 8 millió dolláros szoftverprojektek szállításában. 30+ projektet vezettem 92%-os határidő-tartással, a nulláról építettem fel egy PMO-t, és 10 projektvezetőt mentoráltam. Nyomás alatt nyugodt szállításomról és a vezetők felé tett őszinte jelentéseimről ismernek.",
    "experience": [
      {
        "role": "Szenior projektvezető",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "2019. január",
        "end": "",
        "current": true,
        "points": "Akár 8 millió dolláros szoftverprojektek szállítása 92%-os határidő-tartással\nA nulláról építettem fel a cég PMO-ját: sablonok, jelentéskészítés és irányítás\n10 projektvezető mentorálása és a havi PM-közösség vezetése\nKözvetlen jelentés a CTO-nak egy 40 fős programról"
      },
      {
        "role": "Projektvezető",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "2012. június",
        "end": "2018. december",
        "current": false,
        "points": "20+ projektet kezeltem kiskereskedelmi és egészségügyi ügyfeleknek\nAgilis gyakorlatokat vezettem be, amelyek 25%-kal csökkentették a szállítási időt\n2 kulcsügyfelet növeltem 500 ezer dollárról 2 millió dolláros éves bevételre"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Információs rendszerek",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-tanúsítvány (2015). Certified ScrumMaster. MBA tanulmányok (2018-2019, befejezetlen)."
      }
    ],
    "skills": "Program- és projektmegvalósítás\nPMO felállítása és irányítása\nAgile és Waterfall módszertan\nKöltségvetés-ellenőrzés ($8M)\nVezetői jelentések\nCsapatmentorálás",
    "languages": "Angol (folyékony)\nSpanyol (társalgási)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Operatív vezérigazgató (COO)",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Operatív vezérigazgató 18 éves tapasztalattal kiskereskedelmi és logisztikai cégek működésének bővítésében. Egy 200 fős működést 900 főre növeltem 6 telephelyen, az EBITDA-árrést 8%-ról 14%-ra emeltem, és 2 felvásárlást vezettem. Igazgatósági szintű jelentéskészítési és befektetői kapcsolattartási tapasztalat.",
    "experience": [
      {
        "role": "Operatív vezérigazgató (COO)",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "2021. január",
        "end": "",
        "current": true,
        "points": "900 ember működésének vitele 6 telephelyen és egy 180 millió dolláros költségvetéssel\nAz EBITDA-árrést 8%-ról 14%-ra emeltem 3 év alatt\n2 felvásárlást vezettem, és 6 hónapon belül integráltam mindkét csapatot\nHavi jelentés az igazgatótanácsnak a működésről, a kockázatról és a növekedésről"
      },
      {
        "role": "Üzemeltetési alelnök",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "2014. június",
        "end": "2020. december",
        "current": false,
        "points": "A működést 200-ról 600 emberre bővítettem 4 telephelyen\n3 elosztóközpontot nyitottam határidőre és a költségvetés alatt\nFelépítettem azt a vezetői csapatot, amely ma is vezeti a vállalkozást"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Üzleti adminisztráció",
        "start": "2010",
        "end": "2012",
        "notes": "BS közgazdaságtan szakon, NYU (2006). Vállalatirányítási tanfolyam (2020)."
      }
    ],
    "skills": "Működés nagy léptékben (900 ember)\nP&L-felelősség ($180M)\nEgyesülések és felvásárlások\nIgazgatósági jelentéskészítés\nNövekedési stratégia\nVezetői csapatépítés",
    "languages": "Angol (folyékony)",
    "template": "executive"
  }
};
});
