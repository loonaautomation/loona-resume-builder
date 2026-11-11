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
      "title": "Registrovaná zdravotní sestra",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Registrovaná zdravotní sestra se 6 lety praxe na interních, chirurgických a telemetrických odděleních. Zkušená v hodnocení pacientů, intravenózní terapii, podávání léků a elektronické zdravotní dokumentaci. Známá klidnou a jasnou komunikací s pacienty a rodinami v náročných situacích.",
    "experience": [
      {
        "role": "Registrovaná zdravotní sestra",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "čvn 2021",
        "end": "",
        "current": true,
        "points": "Péče o 5-6 pacientů za směnu na 32lůžkovém interním a chirurgickém oddělení včetně hodnocení stavu, podávání léků a ošetřování ran\nŠkolení a mentoring 4 nových absolventek ošetřovatelství, zkrácení jejich adaptace o 2 týdny\nSnížení medikačních chyb na oddělení o 18 % zavedením dvojí kontroly při předávání směny\nPřesné dokumentování veškeré péče v elektronické zdravotní dokumentaci Epic"
      },
      {
        "role": "Sestra na oddělení",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "srp 2019",
        "end": "kvě 2021",
        "current": false,
        "points": "Provádění triáže u 40+ příchozích pacientů denně, upřednostňování urgentních případů k ošetření týž den\nOčkování a zdravotní screeningy na měsíčních komunitních akcích\nKoordinace odesílání ke specialistům a sledování výsledků vyšetření"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Ošetřovatelství",
        "start": "2015",
        "end": "2019",
        "notes": "Licence registrované zdravotní sestry (Texas). Certifikáty BLS a ACLS."
      }
    ],
    "skills": "Hodnocení pacientů\nIntravenózní terapie a podávání léků\nElektronická zdravotní dokumentace (Epic)\nTelemetrický monitoring\nEdukace pacientů a rodin\nKontrola infekcí",
    "languages": "Angličtina (plynně)\nŠpanělština (konverzačně)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Vývojář softwaru",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Vývojář softwaru s 5 lety praxe v tvorbě webových aplikací v Pythonu a JavaScriptu. Nasadil jsem funkce používané 200,000+ uživateli, zkrátil odezvy API o 40 % a vedl migraci monolitu na mikroservisy. Silný v testování, code review a přehledné dokumentaci.",
    "experience": [
      {
        "role": "Vývojář softwaru",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "bře 2022",
        "end": "",
        "current": true,
        "points": "Vývoj a údržba zákaznických webových funkcí v Pythonu (Django) a Reactu pro 200,000+ uživatelů\nZkrácení průměrné odezvy API z 850 ms na 500 ms přidáním cachování a opravou pomalých dotazů\nVedení migrace fakturační služby na mikroservisy bez výpadku\nKontrola 10+ pull requestů týdně a mentoring 2 juniorních vývojářů"
      },
      {
        "role": "Juniorní vývojář",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "čvc 2020",
        "end": "úno 2022",
        "current": false,
        "points": "Vytvoření interních dashboardů v JavaScriptu, které nahradily ruční tabulky u 3 týmů\nNapsání automatických testů, které zvýšily pokrytí ze 45 % na 78 %\nOprava 120+ chyb v produktu během prvního roku"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatika",
        "start": "2016",
        "end": "2020",
        "notes": "Kurzy z databází, algoritmů a operačních systémů."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript a React\nPostgreSQL a Redis\nREST API a mikroservisy\nGit a CI/CD\nAutomatizované testování (pytest, Jest)",
    "languages": "Angličtina (plynně)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Učitel základní školy",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Učitel základní školy se 7 lety praxe ve výuce 3.–5. ročníku. Zkušený v diferencované výuce, řízení třídy a komunikaci s rodiči. Úroveň čtení v mé třídě jsem za dva školní roky zvýšil z 58 % na 81 %.",
    "experience": [
      {
        "role": "Učitel základní školy (4. ročník)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "srp 2020",
        "end": "",
        "current": true,
        "points": "Výuka čtení, matematiky a přírodovědy ve třídě s 26 žáky, včetně 5 s individuálními vzdělávacími plány\nZvýšení úrovně čtení ve třídě z 58 % na 81 % za dva roky díky skupinám řízeného čtení\nVedení týdenního zpravodaje pro rodiče a čtvrtletních schůzek o pokroku pro každou rodinu\nVedení školního čtenářského klubu pro 40 žáků 3.–5. ročníku"
      },
      {
        "role": "Učitel základní školy (3. ročník)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "srp 2018",
        "end": "čvn 2020",
        "current": false,
        "points": "Plánování a vedení každodenních hodin pro 24 žáků ve všech klíčových předmětech\nZavedení pravidel chování, která snížila rušení ve třídě o polovinu\nZorganizování ročníkového vědeckého veletrhu se 120 žáky a 80 rodiči"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Základní vzdělávání",
        "start": "2014",
        "end": "2018",
        "notes": "Státní učitelská licence (Ohio, ročníky K-5). Oprávnění pro výuku čtení."
      }
    ],
    "skills": "Diferencovaná výuka\nŘízení třídy\nSkupiny řízeného čtení\nKomunikace s rodiči\nPlánování hodin\nGoogle Classroom",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Seniorní účetní",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Certifikovaný účetní (CPA) s 8 lety praxe v měsíčních uzávěrkách, finančním výkaznictví a interním auditu. Uzavření účetních knih o 3 dny rychleji díky přepracování procesu odsouhlasování a odhalení $240,000 vratných přeplatků v jednom auditním roce. Silný v Excelu, QuickBooks a ERP systémech.",
    "experience": [
      {
        "role": "Seniorní účetní",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Zodpovědnost za měsíční uzávěrku obchodní jednotky v hodnotě $40M, po přepracování odsouhlasování o 3 dny rychlejší\nPříprava měsíčních finančních výkazů a zpráv o odchylkách pro vrcholové vedení\nNalezení $240,000 vratných přeplatků dodavatelům během interního auditu 2024\nDohled nad 2 účetními a kontrola jejich účetních zápisů"
      },
      {
        "role": "Účetní",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "čvn 2017",
        "end": "pro 2020",
        "current": false,
        "points": "Příprava daňových přiznání a finančních výkazů pro 25 klientů z řad malých firem\nAsistence při auditech 8 klientů, testování kontrol a dokumentování zjištění\nAutomatizace evidence dlouhodobého majetku v Excelu, úspora 6 hodin měsíčně"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Účetnictví",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Člen AICPA."
      }
    ],
    "skills": "Měsíční uzávěrka a odsouhlasování\nFinanční výkaznictví a analýza odchylek\nInterní audit\nExcel (kontingenční tabulky, SVYHLEDAT)\nQuickBooks a SAP\nPříprava daní",
    "languages": "Angličtina (plynně)\nMandarínština (konverzačně)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Řidič nákladního vozidla CDL třídy A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Řidič CDL třídy A s 9 lety praxe v dálkové a regionální přepravě. Přes 900,000 mil bez nehody, 99% včasnost dodávek a zkušenosti s chlazenými, valníkovými a skříňovými náklady. Čistý záznam řidiče, oprávnění HazMat a pro cisterny.",
    "experience": [
      {
        "role": "Řidič dálkové přepravy",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "dub 2019",
        "end": "",
        "current": true,
        "points": "Najetí 2,800+ mil týdně na regionálních trasách po Texasu, Oklahomě a Novém Mexiku\nUdržování 99% včasnosti dodávek při 1,100+ nákladech ročně\nPřeprava chlazených a skříňových nákladů; každodenní kontroly před jízdou i po ní\nCelkem přes 900,000 mil bez nehody"
      },
      {
        "role": "Řidič dodávky",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "bře 2016",
        "end": "bře 2019",
        "current": false,
        "points": "Rozvoz stavebních materiálů na 15-20 staveb denně v oblasti Dallas-Fort Worth\nObsluha vysokozdvižných vozíků a zajišťování valníkových nákladů podle standardů DOT\nPřesná evidence dodávek a záznamů bez porušení předpisů DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certifikát",
        "field": "Profesionální řízení (CDL třídy A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL třídy A s oprávněním HazMat a pro cisterny. Čistý záznam řidiče."
      }
    ],
    "skills": "Dálková a regionální přeprava\nChlazené a valníkové náklady\nPředpisy DOT a deníky jízd\nKontroly před jízdou\nPlánování tras (GPS, ELD)\nObsluha vysokozdvižného vozíku",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Prodavač v maloobchodě",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Prodavač v maloobchodě se 4 lety praxe v prodejnách elektroniky a oblečení. Trvale mezi 3 nejlepšími prodejci týmu, s 32% mírou připojení záruk a příslušenství. Přátelský, rychlý u pokladny a důvěryhodný pro otevírání a zavírání prodejny.",
    "experience": [
      {
        "role": "Seniorní prodavač",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "úno 2022",
        "end": "",
        "current": true,
        "points": "Prodej elektroniky a příslušenství 60+ zákazníkům denně; mezi 3 nejlepšími v prodeji prodejny po 8 čtvrtletí v řadě\nDosažení 32% míry připojení záruk a příslušenství, nejvyšší v týmu\nŠkolení 6 nových pracovníků v pokladně, skladu a standardech zákaznického servisu\nDůvěryhodný držitel klíčů: otevírání a zavírání prodejny a počítání hotovosti"
      },
      {
        "role": "Prodavač",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "čvn 2021",
        "end": "led 2022",
        "current": false,
        "points": "Pomoc zákazníkům s výběrem oblečení a velikostí na rušné prodejní ploše\nUdržování pořádku ve výlohách a doplňování regálů při každé směně\nZdvořilé vyřizování vratek a výměn, stížnosti držené na minimu"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Titul Associate Degree",
        "field": "Obchod",
        "start": "2019",
        "end": "2021",
        "notes": "Studium při zaměstnání v maloobchodě, na částečný úvazek."
      }
    ],
    "skills": "Zákaznický servis a dosazování prodeje\nPráce s hotovostí a pokladní systémy (POS)\nZnalost produktů (elektronika)\nSpráva skladu\nOtevírání a zavírání prodejny\nŠkolení týmu",
    "languages": "Angličtina (plynně)\nŠpanělština (plynně)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Zástupce zákaznického servisu",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Zástupce zákaznického servisu s 5 lety praxe v telefonické, e-mailové a chatové podpoře. Denně vyřeším 45+ případů se spokojeností 96 % a 88% mírou vyřešení při prvním kontaktu. Klidný i u rozzlobených zákazníků a rychlý v hledání řešení.",
    "experience": [
      {
        "role": "Zástupce zákaznického servisu",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "kvě 2021",
        "end": "",
        "current": true,
        "points": "Vyřizování 45+ telefonických, e-mailových a chatových případů denně ohledně fakturace, objednávek a technických závad\nUdržování spokojenosti zákazníků 96 % a 88% míry vyřešení při prvním kontaktu\nUklidňování obtížných hovorů a přeměna stížností v opakované nákupy\nŠkolení 5 nových agentů ve skriptech, systémech a tónu komunikace"
      },
      {
        "role": "Agent podpory",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "zář 2019",
        "end": "dub 2021",
        "current": false,
        "points": "Odpovídání na e-maily a chaty zákazníků o objednávkách, vracení a refundacích\nUdržování průměrné doby první odpovědi pod 2 hodinami\nNapsání 20 článků centra nápovědy, které snížily opakující se dotazy o čtvrtinu"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Titul Associate Degree",
        "field": "Podniková administrativa",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Podpora po telefonu, e-mailu a živém chatu\nVyřizování stížností a deeskalace\nCRM systémy (Zendesk, Salesforce)\nDotazy k fakturaci a objednávkám\nPsaní 55 slov/min\nŠkolení týmu",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Provozní manažer",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Provozní manažer s 12 lety praxe ve vedení týmů až 80 lidí ve skladování a distribuci. Snížil jsem náklady na zpracování objednávek o 22 %, zvýšil včasnost zásilek z 91 % na 98 % a otevřel dvě nové lokality v termínu a pod rozpočtem.",
    "experience": [
      {
        "role": "Provozní manažer",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "úno 2020",
        "end": "",
        "current": true,
        "points": "Vedení distribučního centra o rozloze 120,000 čtverečních stop s 80 zaměstnanci ve 3 směnách\nSnížení nákladů na zpracování objednávek o 22 % přepracováním vychystávacích tras a směn\nZvýšení včasnosti zásilek z 91 % na 98 % za 18 měsíců\nOtevření 2 nových lokalit v termínu a 8 % pod rozpočtem"
      },
      {
        "role": "Supervizor skladu",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "čvn 2013",
        "end": "led 2020",
        "current": false,
        "points": "Dohled nad 25 skladníky a každodenní expedice 4,000+ objednávek\nZavedení skenování čárových kódů, snížení chyb při vychystávání o 35 %\nVedení bezpečnostních školení, která udržela areál bez úrazů po 3 roky"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Řízení provozu",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Vedení týmu (až 80 zaměstnanců)\nSkladování a distribuce\nZlepšování procesů\nRozpočtování a kontrola nákladů\nŘízení bezpečnosti\nSystémy ERP a WMS",
    "languages": "Angličtina (plynně)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Licencovaný elektrikář",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Licencovaný tovaryš – elektrikář s 8 lety praxe v rezidenčních a komerčních zakázkách. Zkušený v elektroinstalaci, modernizaci rozvaděčů, osvětlení a hledání závad, s čistým bezpečnostním záznamem z 400+ zakázek. Znalost předpisů NEC a zkušenosti s vedením učňů.",
    "experience": [
      {
        "role": "Tovaryš – elektrikář",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "bře 2019",
        "end": "",
        "current": true,
        "points": "Realizace 400+ zakázek pro domácnosti i firmy: elektroinstalace, modernizace rozvaděčů, osvětlení a nabíječky pro elektromobily\nRychlá diagnostika a opravy závad, 92% úspěšnost opravy při první návštěvě\nDohled nad 2 učni a schvalování jejich práce podle předpisů\nČistý bezpečnostní záznam bez úrazů s pracovní neschopností"
      },
      {
        "role": "Elektrikářský učeň",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "čvn 2016",
        "end": "úno 2019",
        "current": false,
        "points": "Pomoc licencovaným elektrikářům při elektroinstalaci v novostavbách a při rekonstrukcích\nOsvojení ohýbání instalačních trubek, protahování kabelů a montáže rozvaděčů\nAbsolvování 8,000 hodin praxe a složení tovaryšské zkoušky na první pokus"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certifikát",
        "field": "Elektrotechnologie",
        "start": "2015",
        "end": "2016",
        "notes": "Tovaryšská licence elektrikáře (Colorado). Certifikát OSHA 30."
      }
    ],
    "skills": "Rezidenční a komerční elektroinstalace\nModernizace rozvaděčů a nabíječky EV\nHledání závad a testování\nSoulad s předpisy NEC\nOhýbání instalačních trubek a protahování kabelů\nDohled nad učni",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Finanční analytik",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Finanční analytik se 6 lety praxe v rozpočtování, prognózování a investiční analýze. Vytvořil jsem prognostické modely, které snížily odchylky rozpočtu o 30 %, a podpořil investiční rozhodnutí v hodnotě $50M. Silný v Excelu, SQL a finančním modelování.",
    "experience": [
      {
        "role": "Finanční analytik",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "dub 2021",
        "end": "",
        "current": true,
        "points": "Tvorba měsíčních prognóz a ročních rozpočtů pro portfolio v hodnotě $120M\nSnížení odchylek rozpočtu o 30 % díky prognostickému modelu založenému na klíčových faktorech\nPodpora investičních rozhodnutí v hodnotě $50M oceňováním a analýzou scénářů\nMěsíční prezentace zjištění finančnímu řediteli a vedoucím oddělení"
      },
      {
        "role": "Juniorní finanční analytik",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "čvc 2019",
        "end": "bře 2021",
        "current": false,
        "points": "Příprava týdenních zpráv o výkonnosti pro 12 poboček\nAutomatizace reportingu v Excelu, úspora 10 hodin týdně\nPomoc úvěrovému týmu s analýzou úvěrového portfolia"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finance",
        "start": "2015",
        "end": "2019",
        "notes": "Kandidát na CFA Level II. Kurzy oceňování a podnikových financí."
      }
    ],
    "skills": "Finanční modelování a prognózování\nRozpočtování a analýza odchylek\nOceňování (DCF, srovnání)\nExcel (pokročilý) a SQL\nBloomberg Terminal\nVizualizace dat (Power BI)",
    "languages": "Angličtina (plynně)\nHindština (plynně)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Stavební inženýr",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Stavební inženýr (PE) se 7 lety praxe v navrhování silniční a vodohospodářské infrastruktury. Vedl jsem návrh rozšíření dálnice v délce 12 mil a systému dešťové kanalizace pro 8,000 domácností. Zkušený v AutoCAD Civil 3D, odhadech nákladů a koordinaci povolení.",
    "experience": [
      {
        "role": "Stavební inženýr",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Vedení návrhu rozšíření dálnice v délce 12 mil od zaměření po stavební dokumentaci\nNávrh systému dešťové kanalizace pro 8,000 domácností, městem schválený napoprvé\nKoordinace povolení se 4 úřady a správa rozpočtu návrhu $2.5M\nKontrola a razítkování výkresů jako licencovaný autorizovaný inženýr"
      },
      {
        "role": "Juniorní stavební inženýr",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "čvc 2018",
        "end": "pro 2020",
        "current": false,
        "points": "Příprava plánů terénních úprav a odvodnění pro 20+ rezidenčních projektů\nProvádění odhadů nákladů a výkazů výměr pro silniční projekty\nÚčast na kontrolách staveb a psaní zpráv o postupu"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Stavební inženýrství",
        "start": "2014",
        "end": "2018",
        "notes": "Licence Professional Engineer (Washington). EIT složeno 2018."
      }
    ],
    "skills": "Návrh silnic a odvodnění\nAutoCAD Civil 3D\nModelování dešťových vod\nOdhad nákladů\nKoordinace povolení\nHarmonogramy projektů (MS Project)",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Strojní inženýr",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Strojní inženýr se 6 lety praxe v navrhování systémů vzduchotechniky a výrobních zařízení. Snížil jsem spotřebu energie o 18 % ve 3 závodech přepracováním vzduchovodů a řízení a vedl přepracování stroje, které zvýšilo výstup o 25 %. Zkušený v SolidWorks, MKP a tepelné analýze.",
    "experience": [
      {
        "role": "Strojní inženýr",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "úno 2021",
        "end": "",
        "current": true,
        "points": "Návrh vzduchotechniky a výrobních zařízení pro 3 závody se 400+ zaměstnanci\nSnížení spotřeby energie o 18 % přepracováním vzduchovodů a řídicích sekvencí\nVedení přepracování stroje, které zvýšilo výstup o 25 % bez další podlahové plochy\nProvádění analýz MKP a tepelných analýz nových dílů před prototypováním"
      },
      {
        "role": "Juniorní strojní inženýr",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "srp 2019",
        "end": "led 2021",
        "current": false,
        "points": "Modelování dílů a sestav v SolidWorks pro automobilové klienty\nPříprava výkresů, kusovníků a zkušebních protokolů\nPodpora stavby prototypů a řešení problémů s lícováním ve výrobě"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Strojní inženýrství",
        "start": "2015",
        "end": "2019",
        "notes": "Kurzy z termodynamiky, mechaniky tekutin a konstruování strojů."
      }
    ],
    "skills": "Návrh vzduchotechniky\nSolidWorks a AutoCAD\nAnalýzy MKP a tepelné analýzy\nKonstruování strojů\nEnergetická účinnost\nGD&T a tolerování",
    "languages": "Angličtina (plynně)\nKorejština (konverzačně)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektroinženýr",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Elektroinženýr se 6 lety praxe ve vestavěných systémech a výkonové elektronice. Navrhl jsem řídicí desky, které se dnes používají v 50,000+ zařízeních, a snížil náklady desky o 22 % přepracováním komponent. Zkušený v Altiu, C, testování firmwaru a shodě EMC.",
    "experience": [
      {
        "role": "Elektroinženýr",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "bře 2021",
        "end": "",
        "current": true,
        "points": "Návrh vestavěných řídicích desek používaných v 50,000+ zařízeních ročně\nSnížení nákladů desky o 22 % přepracováním napájecího stupně a hledáním náhrad\nVedení testů shody EMC, u 4 produktových řad úspěšně hned napoprvé\nPsaní a kontrola firmwaru v C pro mikrokontroléry"
      },
      {
        "role": "Juniorní elektroinženýr",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "čvc 2019",
        "end": "úno 2021",
        "current": false,
        "points": "Návrh DPS v Altiu pro spotřebitelské a průmyslové klienty\nStavba a testování prototypů, ladění hardwarových závad\nSepsání testovacích postupů, které zkrátily dobu výrobních testů o 30 %"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektrotechnika",
        "start": "2015",
        "end": "2019",
        "notes": "Kurzy z vestavěných systémů, výkonové elektroniky a zpracování signálů."
      }
    ],
    "skills": "Vestavěné systémy a návrh DPS\nAltium Designer\nC a firmware\nVýkonová elektronika\nTestování shody EMC\nOsciloskopy a laboratorní přístroje",
    "languages": "Angličtina (plynně)\nGudžarátština (konverzačně)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Datový analytik",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Datový analytik se 4 lety praxe v přetváření prodejních a provozních dat v rozhodnutí. Vytvořil jsem dashboardy používané 60+ manažery, zkrátil měsíční reporting ze 3 dnů na 4 hodiny a odhalil cenovou chybu v hodnotě $180,000 ročně. Silný v SQL, Excelu a Power BI.",
    "experience": [
      {
        "role": "Datový analytik",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "led 2022",
        "end": "",
        "current": true,
        "points": "Tvorba dashboardů v Power BI, které používá 60+ manažerů prodejen a regionů\nZkrácení měsíčního reportingu ze 3 dnů na 4 hodiny díky automatizovaným SQL procesům\nOdhalení cenové chyby v hodnotě $180,000 ročně auditem propagačních dat\nMěsíční prezentace zjištění obchodnímu týmu"
      },
      {
        "role": "Juniorní datový analytik",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "srp 2020",
        "end": "pro 2021",
        "current": false,
        "points": "Čištění a spojování dat o dodávkách ze 4 systémů do jedné reportovací tabulky\nVytvoření excelových přehledů, které nahradily ruční počítání u 2 týmů\nKaždodenní odpovídání na ad-hoc datové dotazy provozních manažerů"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistika",
        "start": "2016",
        "end": "2020",
        "notes": "Kurzy z regrese, databází a vizualizace dat."
      }
    ],
    "skills": "SQL a čištění dat\nPower BI a Tableau\nExcel (pokročilý)\nPython (pandas)\nNávrh dashboardů\nZáklady A/B testování",
    "languages": "Angličtina (plynně)\nVietnamština (konverzačně)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Datový vědec",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Datový vědec s 5 lety praxe v tvorbě modelů strojového učení pro e-commerce. Doporučovací model, který jsem nasadil, zvýšil tržby na návštěvu o 12 % a model odchodu zákazníků nyní označuje 80 % ohrožených zákazníků. Silný v Pythonu, SQL a nasazování modelů.",
    "experience": [
      {
        "role": "Datový vědec",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "úno 2022",
        "end": "",
        "current": true,
        "points": "Nasazení doporučovacího modelu, který zvýšil tržby na návštěvu o 12 %\nVytvoření modelu odchodu zákazníků, který označuje 80 % ohrožených zákazníků s měsíčním předstihem\nNasazování modelů do produkce s monitorovacími a přetrénovacími procesy\nMěsíční prezentace výsledků modelů produktovým a marketingovým týmům"
      },
      {
        "role": "Juniorní datový vědec",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "čvc 2020",
        "end": "led 2022",
        "current": false,
        "points": "Vytvoření prognostických modelů pro 3 maloobchodní klienty s přesností 90 %+ \nČištění a příprava datových sad o 10M+ řádcích pro modelování\nSepsání dokumentace, aby si klienti mohli modely spouštět sami"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Datová věda",
        "start": "2018",
        "end": "2020",
        "notes": "Diplomová práce o doporučovacích systémech. Bakalářský titul (BS) z matematiky (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nStrojové učení a statistika\nSQL a Spark\nNasazování modelů (Docker, AWS)\nA/B testování\nVizualizace dat",
    "languages": "Angličtina (plynně)\nArabština (plynně)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webový vývojář",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webový vývojář se 4 lety praxe v tvorbě rychlých a přístupných webů v HTML, CSS a JavaScriptu. Přestavěl jsem pokladnu obchodu, která zvýšila konverze o 18 %, a spravuji 12 klientských webů s dostupností 99.9 %. Silný v responzivním designu, výkonu a základech SEO.",
    "experience": [
      {
        "role": "Webový vývojář",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "bře 2022",
        "end": "",
        "current": true,
        "points": "Tvorba responzivních webů v HTML, CSS, JavaScriptu a WordPressu pro 12 klientů\nPřestavba pokladny e-shopu, která zvýšila konverze o 18 %\nZkrácení průměrného načítání stránky z 4.2 s na 1.8 s optimalizací obrázků a kódu\nUdržování dostupnosti všech klientských webů na 99.9 % díky monitoringu a zálohám"
      },
      {
        "role": "Juniorní webový vývojář",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "čvn 2021",
        "end": "úno 2022",
        "current": false,
        "points": "Tvorba vstupních stránek a opravy chyb na 20+ webech malých firem\nOsvojení Gitu, responzivního designu a základů SEO na reálných projektech\nOdpovídání na e-maily klientů a aktualizace obsahu ještě týž den"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatika",
        "start": "2017",
        "end": "2021",
        "notes": "Kurzy z vývoje webů, databází a interakce člověk–počítač."
      }
    ],
    "skills": "HTML, CSS a JavaScript\nReact a WordPress\nResponzivní design\nOptimalizace rychlosti stránek\nGit a GitHub\nZáklady SEO",
    "languages": "Angličtina (plynně)\nŠpanělština (plynně)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafický designér",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafický designér s 5 lety praxe v brandingu, obalech a designu pro sociální sítě. Vytvořil jsem identity značek pro 25+ malých firem a redesign obalu, který zvýšil prodeje z regálů o 14 %. Zkušený v Adobe Illustratoru, Photoshopu a Figmě.",
    "experience": [
      {
        "role": "Grafický designér",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "led 2022",
        "end": "",
        "current": true,
        "points": "Návrh identit značek, obalů a kampaní na sociálních sítích pro 25+ klientů\nRedesign obalu potravinové značky zvýšil prodeje z regálů o 14 %\nTvorba 30+ materiálů týdně pro Instagram, TikTok a Facebook\nPrezentace konceptů klientům a rychlé úpravy podle zpětné vazby"
      },
      {
        "role": "Juniorní grafický designér",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "čvc 2020",
        "end": "pro 2021",
        "current": false,
        "points": "Návrh letáků, menu a příspěvků na sociální sítě pro místní restaurace a obchody\nPříprava souborů připravených k tisku a kontrola nátisků s tiskárnami\nVytvoření knihovny šablon, která zkrátila čas návrhu o třetinu"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafický design",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio v oblasti brandingu a designu obalů."
      }
    ],
    "skills": "Adobe Illustrator a Photoshop\nFigma\nNávrh identity značky\nDesign obalů\nDesign pro sociální sítě\nTisková produkce",
    "languages": "Angličtina (plynně)\nKorejština (konverzačně)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX designér",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX designér s 5 lety praxe ve výzkumu uživatelů a navrhování mobilních a webových produktů. Přepracoval jsem proces onboardingu, který snížil odchody o 35 %, a provedl 40+ testů použitelnosti. Zkušený ve Figmě, výzkumu uživatelů, wireframech a prototypování.",
    "experience": [
      {
        "role": "UX designér",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "úno 2022",
        "end": "",
        "current": true,
        "points": "Redesign mobilního onboardingu, snížení odchodů o 35 % za 3 měsíce\nProvádění 40+ testů použitelnosti a rozhovorů s uživateli ročně\nTvorba wireframů a prototypů ve Figmě pro 2 produktové týmy\nKaždodenní spolupráce s vývojáři a produktovými manažery na dodávkách"
      },
      {
        "role": "Juniorní UX designér",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "srp 2020",
        "end": "led 2022",
        "current": false,
        "points": "Návrh obrazovek a toků pro 5 klientských aplikací\nProvádění prvních testů použitelnosti a sepsání zjištění pro klienty\nVytvoření knihovny komponent, která urychlila předávání návrhů"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychologie",
        "start": "2016",
        "end": "2020",
        "notes": "Certifikát z UX designu (General Assembly, 2020). Kurzy z interakce člověk–počítač."
      }
    ],
    "skills": "Výzkum uživatelů a testování použitelnosti\nWireframy a prototypování (Figma)\nInformační architektura\nDesign systémy\nMapování cest zákazníka\nWorkshopy se zainteresovanými stranami",
    "languages": "Angličtina (plynně)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Manažer marketingu",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Manažer marketingu s 8 lety praxe v B2B a spotřebitelských kampaních. Zvýšil jsem počet kvalifikovaných leadů o 60 % za jeden rok, uvedl produktovou řadu, která v prvním roce dosáhla tržeb $3M, a spravuji roční rozpočet $500,000 v týmu 5 lidí.",
    "experience": [
      {
        "role": "Manažer marketingu",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "bře 2021",
        "end": "",
        "current": true,
        "points": "Vedení týmu 5 lidí a ročního marketingového rozpočtu $500,000\nZvýšení počtu kvalifikovaných leadů o 60 % za jeden rok díky obsahu a placeným kampaním\nUvedení produktové řady, která dosáhla tržeb $3M v prvním roce\nSnížení ceny za lead o 28 % přepracováním cílení kampaní"
      },
      {
        "role": "Specialista marketingu",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "čvn 2017",
        "end": "úno 2021",
        "current": false,
        "points": "Vedení e-mailových kampaní pro 80,000 odběratelů s 24% mírou otevření\nSpráva sociálních účtů, které vyrostly z 5,000 na 40,000 sledujících\nOrganizace 6 veletržních stánků ročně, každý přinesl 300+ leadů"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kurzy z chování spotřebitelů, analytiky a řízení značky."
      }
    ],
    "skills": "Strategie a plánování kampaní\nObsahový a e-mailový marketing\nPlacená reklama (Google, Meta)\nMarketingová analytika (GA4)\nVedení týmu\nSpráva rozpočtu",
    "languages": "Angličtina (plynně)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektový manažer",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektový manažer (PMP) se 7 lety praxe v dodávání softwarových a stavebních projektů v termínu a v rozpočtu. Řídil jsem 15 projektů v hodnotě až $4M s 94% mírou včasného dodání. Zkušený v Agile, řízení rizik a komunikaci se zainteresovanými stranami.",
    "experience": [
      {
        "role": "Projektový manažer",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Řízení 15 projektů v hodnotě až $4M s 94% mírou včasného dodání\nVedení agilních sprintů pro 3 týmy a týdenní reporting vedení\nSnížení překročení projektů o 30 % dřívějšími kontrolami rizik\nKoordinace dodavatelů, klientů a interních týmů ve 4 časových pásmech"
      },
      {
        "role": "Koordinátor projektů",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "čvc 2018",
        "end": "pro 2020",
        "current": false,
        "points": "Sledování harmonogramů, rozpočtů a povolení u 8 stavebních projektů\nPříprava zpráv o stavu a zápisů ze schůzek pro klienty\nVyřešení konfliktů v harmonogramu, které ušetřily 2 týdny při stavbě školy"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Podniková administrativa",
        "start": "2014",
        "end": "2018",
        "notes": "Certifikát PMP (2021). Certifikovaný ScrumMaster."
      }
    ],
    "skills": "Plánování projektů a harmonogramy\nAgile a Scrum\nŘízení rizik\nKontrola rozpočtu\nKomunikace se zainteresovanými stranami\nMS Project a Jira",
    "languages": "Angličtina (plynně)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Manažer lidských zdrojů",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Manažer lidských zdrojů s 9 lety praxe v náboru, vztazích se zaměstnanci a benefitech. Zkrátil jsem dobu náboru ze 45 na 28 dnů, zvýšil retenci o 15 % a vedu HR pro 250 zaměstnanců ve 3 lokalitách. Znalost pracovního práva a politik na úrovni CIPD.",
    "experience": [
      {
        "role": "Manažer lidských zdrojů",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "úno 2020",
        "end": "",
        "current": true,
        "points": "Vedení HR pro 250 zaměstnanců ve 3 lokalitách, s týmem 3 lidí\nZkrácení doby náboru ze 45 na 28 dnů přepracováním procesu pohovorů\nZvýšení retence o 15 % novým programem adaptace a hodnocení\nŘešení vztahů se zaměstnanci, stížností a aktualizací politik"
      },
      {
        "role": "HR generalista",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "čvn 2016",
        "end": "led 2020",
        "current": false,
        "points": "Nábor 120+ zaměstnanců ročně pro hotely a restaurace\nProvádění kontrol mezd a registrace benefitů pro 400 zaměstnanců\nŘešení sporů mezi zaměstnanci a udržování fluktuace pod průměrem odvětví"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Lidské zdroje",
        "start": "2012",
        "end": "2016",
        "notes": "Certifikát SHRM-CP. Kurzy z pracovního práva a organizačního chování."
      }
    ],
    "skills": "Nábor a adaptace\nVztahy se zaměstnanci\nBenefity a mzdy\nPracovní právo\nŘízení výkonnosti\nHRIS (Workday, BambooHR)",
    "languages": "Angličtina (plynně)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Spolupracující advokát",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Spolupracující advokát se 6 lety praxe v obchodních sporech a smluvním právu. Vedl jsem 40+ případů, v 8 jsem dosáhl zkráceného rozsudku a připravil smlouvy v hodnotě $25M. Přijat do advokátní komory státu Illinois; zkušený v právním výzkumu, přípravě dokumentů a poradenství klientům.",
    "experience": [
      {
        "role": "Spolupracující advokát",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "zář 2020",
        "end": "",
        "current": true,
        "points": "Vedení 40+ případů obchodních sporů od podání po vypořádání\nV 8 případech dosažen zkrácený rozsudek a dalších 20 vypořádáno výhodně\nPříprava a vyjednávání smluv v hodnotě až $25M\nPoradenství klientům osobně i písemně ohledně rizik a strategie"
      },
      {
        "role": "Právní referent",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "srp 2019",
        "end": "srp 2020",
        "current": false,
        "points": "Výzkum judikatury a příprava memorand pro 2 soudce\nKontrola návrhů a příprava shrnutí pro soudce u 100+ jednání\nSledování hlavních líčení a smírčích konferencí napříč občanskými odděleními"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Právo",
        "start": "2016",
        "end": "2019",
        "notes": "Přijat do advokátní komory státu Illinois (2019). Odborný právnický časopis, redaktor článků."
      }
    ],
    "skills": "Obchodní spory\nPříprava a vyjednávání smluv\nPrávní výzkum (Westlaw, LexisNexis)\nPoradenství klientům\nVýslechy a dokazování\nSoudní podání a procesní postupy",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinický farmaceut",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinický farmaceut (PharmD) se 7 lety praxe v nemocniční a veřejné lékárně. Denně kontroluji 100+ lékových předpisů, snížil jsem nežádoucí účinky léků o 25 % novým kontrolním protokolem a radím pacientům s bezpečným užíváním léků. Licence pro stát Pennsylvania.",
    "experience": [
      {
        "role": "Klinický farmaceut",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "led 2020",
        "end": "",
        "current": true,
        "points": "Kontrola 100+ lékových předpisů denně z hlediska bezpečnosti, dávkování a interakcí\nSnížení nežádoucích účinků léků o 25 % novým protokolem dvojí kontroly\nPoradenství lékařům a sestrám při volbě léků u složitých pacientů\nVedení nemocničních vizit antibiotické politiky dvakrát týdně"
      },
      {
        "role": "Lékárník",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "čvc 2018",
        "end": "pro 2019",
        "current": false,
        "points": "Výdej 200+ receptů denně bez jediné chyby ve výdeji\nPoradenství pacientům o nových lécích, vedlejších účincích a skladování\nOčkování proti chřipce a měření krevního tlaku"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacie",
        "start": "2014",
        "end": "2018",
        "notes": "Licencovaný lékárník (Pennsylvania). Certifikovaný specialista na farmakoterapii (BCPS)."
      }
    ],
    "skills": "Kontrola léků a bezpečnost\nKlinická farmakologie\nPoradenství pacientům\nLékárenské systémy (Epic, PioneerRx)\nRacionální antibiotická politika\nOčkovací služby",
    "languages": "Angličtina (plynně)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Všeobecný zubař",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Všeobecný zubař (DDS) s 8 lety praxe v záchovné, estetické a preventivní stomatologii. Denně ošetřím 25+ pacientů v praxi s 2,000 pacienty, se spokojeností pacientů 98 %. Zkušený v korunkách, implantátech, ošetření kořenových kanálků a průhledných rovnátek.",
    "experience": [
      {
        "role": "Všeobecný zubař",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "úno 2019",
        "end": "",
        "current": true,
        "points": "Ošetřování 25+ pacientů denně: výplně, korunky, ošetření kořenových kanálků a extrakce\nUdržování spokojenosti pacientů 98 % v 1,200+ hodnoceních\nZavádění 15+ implantátů měsíčně a vedení případů průhledných rovnátek\nDohled nad 2 dentálními hygienistkami a 4 zubními asistenty"
      },
      {
        "role": "Spolupracující zubař",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "čvc 2017",
        "end": "led 2019",
        "current": false,
        "points": "Poskytování všeobecné stomatologie v praxi s 1,500 pacienty\nZavedení korunek na počkání, snížení návratných návštěv o 40 %\nVedení školních osvětových návštěv o zdraví dětských zubů"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Zubní lékařství",
        "start": "2013",
        "end": "2017",
        "notes": "Licencovaný zubař (Arizona). Certifikát Invisalign. Certifikáty KPR/BLS."
      }
    ],
    "skills": "Záchovná stomatologie (korunky, výplně)\nOšetření kořenových kanálků\nZubní implantáty\nPrůhledná rovnátka\nPéče o pacienty a komunikace\nDigitální rentgeny a CEREC",
    "languages": "Angličtina (plynně)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fyzioterapeut",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fyzioterapeut (DPT) se 6 lety praxe v ortopedické a sportovní rehabilitaci. Denně ošetřím 12–15 pacientů, z nichž 90 % dosáhne svých cílů v rámci plánovaných sezení. Zkušený v manuální terapii, předpisu cvičení a testování návratu ke sportu.",
    "experience": [
      {
        "role": "Fyzioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "bře 2021",
        "end": "",
        "current": true,
        "points": "Ošetřování 12–15 pacientů denně se sportovními úrazy, pooperační rehabilitací a bolestmi zad\n90 % pacientů dosáhne svých cílů v rámci plánovaného počtu sezení\nNávrh testování návratu ke sportu používaného 3 místními týmy\nMentoring 2 nových absolventů a dohled nad praxemi studentů"
      },
      {
        "role": "Fyzioterapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "srp 2019",
        "end": "úno 2021",
        "current": false,
        "points": "Poskytování lůžkové rehabilitace pacientům po operacích a po mozkových příhodách\nVedení skupinových cvičení pro 20+ starších pacientů týdně\nDokumentování pokroku v Epic a předávání týmům na odděleních"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fyzioterapie",
        "start": "2016",
        "end": "2019",
        "notes": "Licencovaný fyzioterapeut (Oregon). Klinický specialista na ortopedii (OCS)."
      }
    ],
    "skills": "Ortopedická a sportovní rehabilitace\nManuální terapie\nPředpis cvičení\nTestování návratu ke sportu\nEdukace pacientů\nDokumentace (Epic)",
    "languages": "Angličtina (plynně)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Šéfkuchař",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Šéfkuchař s 10 lety praxe v kreolské a moderní americké kuchyni. Vedu brigádu 12 lidí v restauraci pro 200 hostů, snížil jsem náklady na potraviny o 15 % přísnějším objednáváním a v roce 2025 získal ocenění „Best New Menu“ od městského gastronomického průvodce.",
    "experience": [
      {
        "role": "Šéfkuchař",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Vedení brigády 12 lidí v restauraci pro 200 hostů, která obslouží 300+ hostů za večer\nSnížení nákladů na potraviny o 15 % přísnějším objednáváním a sezónním menu\nZisk ocenění „Best New Menu“ od městského gastronomického průvodce v roce 2025\nSestavování menu, školení kuchařů a vedení výdeje při pátečním a sobotním servisu"
      },
      {
        "role": "Zástupce šéfkuchaře",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "čvn 2017",
        "end": "pro 2020",
        "current": false,
        "points": "Vedení kuchyně v nepřítomnosti šéfkuchaře, obsluha 150 hostů za večer\nSpráva zásob, objednávek a vztahů s dodavateli\nZaškolení 8 kuchařů a snížení fluktuace personálu o třetinu"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diplom",
        "field": "Kuchařské umění",
        "start": "2014",
        "end": "2016",
        "notes": "Certifikát ServSafe Food Protection Manager."
      }
    ],
    "skills": "Návrh menu a kalkulace nákladů\nKreolská a moderní americká kuchyně\nVedení kuchyně (brigáda 12 lidí)\nBezpečnost potravin (ServSafe)\nŘízení dodavatelů\nBanketový a eventový catering",
    "languages": "Angličtina (plynně)\nŠpanělština (plynně)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Policista",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Policista s 8 lety praxe v hlídkách, komunitní policii a vyšetřování. Reaguji na 30+ hlášení týdně, s pochvalami za deeskalaci a práci s komunitou. Vyškolen v krizové intervenci, první pomoci a psaní zpráv.",
    "experience": [
      {
        "role": "Policista",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "čvn 2019",
        "end": "",
        "current": true,
        "points": "Hlídkování v okrsku se 40,000 obyvateli, reakce na 30+ hlášení týdně\nZisk 2 pochval za deeskalaci a práci s komunitou\nVyšetřování krádeží a napadení, psaní zpráv použitých v 50+ stíháních\nMentoring 3 nových policistů během terénního výcviku"
      },
      {
        "role": "Hlídkový policista",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "srp 2017",
        "end": "kvě 2019",
        "current": false,
        "points": "Hlídkování na okresních silnicích a reakce na tísňová volání\nDoručování soudních listin a pomoc při přepravě vězňů\nAbsolvování výcviku krizové intervence a první pomoci"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certifikát",
        "field": "Vymáhání práva",
        "start": "2017",
        "end": "2017",
        "notes": "Absolvent Ohio Peace Officer Training Academy. Vyškolen v týmu krizové intervence."
      }
    ],
    "skills": "Hlídky a reakce na mimořádné události\nKomunitní policie\nKrizová intervence a deeskalace\nPsaní zpráv\nVyšetřování\nPrvní pomoc a KPR",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Hasič / zdravotnický záchranář",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Hasič a zdravotnický záchranář se 7 lety praxe v hašení požárů, záchraně a urgentní zdravotní péči. Zasahoval jsem u 900+ výjezdů včetně požárů budov, vyprošťování z vozidel a zdravotních urgentních stavů. Vyškolen pro HazMat, s čistým bezpečnostním záznamem.",
    "experience": [
      {
        "role": "Hasič / zdravotnický záchranář",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "bře 2020",
        "end": "",
        "current": true,
        "points": "Reakce na 900+ požárních, záchranných a zdravotních výjezdů v okrsku se 3 stanicemi\nPoskytování urgentní zdravotní péče jako certifikovaný EMT u 60 % výjezdů\nVyškolen pro HazMat; vedení dekontaminace při chemických událostech\nŠkolení nových rekrutů v zacházení s hadicemi, žebříky a pátracími technikami"
      },
      {
        "role": "Dobrovolný hasič",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "čvn 2018",
        "end": "úno 2020",
        "current": false,
        "points": "Zasahování u požárů v přírodě i budov jako dobrovolník\nAbsolvování výcviku Hasič I a II a EMT-Basic\nPomoc při vedení besed o požární bezpečnosti ve školách"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certifikát",
        "field": "Požární věda",
        "start": "2017",
        "end": "2018",
        "notes": "Hasič I a II. Certifikát EMT-Basic. Vyškolen pro zásahy HazMat."
      }
    ],
    "skills": "Hašení požárů a záchrana\nUrgentní zdravotní péče (EMT)\nZásahy HazMat\nŽebříky, hadice a ventilace\nPožární bezpečnost v komunitě\nTýmová práce pod tlakem",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Licencovaný instalatér",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Licencovaný instalatér – mistr s 11 lety praxe v rezidenční a komerční instalatéřině. Realizuji 600+ zakázek ročně, od hrubých instalací po montáže kotlů, s 98% úspěšností opravy při první návštěvě. Zkušený v potrubních pracích, čištění odpadů a dodržování předpisů.",
    "experience": [
      {
        "role": "Instalatér – mistr",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "led 2019",
        "end": "",
        "current": true,
        "points": "Realizace 600+ zakázek pro domácnosti i firmy ročně\nMontáž kotlů, ohřívačů vody a kompletních hrubých instalací v koupelnách\n98% úspěšnost opravy při první návštěvě u servisních výjezdů\nDohled nad 3 učni a schvalování jejich práce"
      },
      {
        "role": "Tovaryš – instalatér",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "čvn 2014",
        "end": "pro 2018",
        "current": false,
        "points": "Provádění instalatérských prací v novostavbách u 40+ domů ročně\nČištění odpadů a opravy netěsností v domech a restauracích\nOsvojení plynových instalací a ochrany proti zpětnému toku"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certifikát",
        "field": "Instalatérská technologie",
        "start": "2013",
        "end": "2014",
        "notes": "Instalatérská licence – mistr (Tennessee). Certifikát na ochranu proti zpětnému toku."
      }
    ],
    "skills": "Rezidenční a komerční instalatérství\nPotrubářství a pájení\nČištění odpadů a kamerová prohlídka\nMontáže kotlů a ohřívačů vody\nPlynové instalace\nSoulad s instalatérskými předpisy",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Tovaryš – tesař",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Tovaryš – tesař s 9 lety praxe v rámových pracích, dokončovacích pracích a nábytku na míru. Postavil jsem rámy 30+ domů a namontoval kuchyně v 60+ domácnostech a mám pověst přesných měr a čistých povrchů. Zkušený ve čtení plánů a práci podle předpisů.",
    "experience": [
      {
        "role": "Tovaryš – tesař",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "úno 2019",
        "end": "",
        "current": true,
        "points": "Stavba rámů 30+ domů a montáž kuchyní v 60+ domácnostech\nVýroba nábytku a lišt na míru s tolerancí 1/16 palce\nČtení a dodržování architektonických plánů, upozorňování na chyby dřív, než způsobí náklady\nŠkolení 2 učňů v rámových a dokončovacích technikách"
      },
      {
        "role": "Tesařský učeň",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "čvn 2016",
        "end": "led 2019",
        "current": false,
        "points": "Pomoc při stavbě rámů, sádrokartonu a podlah při rekonstrukcích\nOsvojení bezpečné práce s pilami, frézkami a hřebíkovačkami\nAbsolvování 8,000 hodin praxe a složení tovaryšské zkoušky"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certifikát",
        "field": "Tesařství",
        "start": "2015",
        "end": "2016",
        "notes": "Tovaryš – tesař. Certifikát OSHA 10."
      }
    ],
    "skills": "Rámové a konstrukční práce\nDokončovací tesařina a lišty\nNábytek na míru\nČtení architektonických plánů\nElektrické nářadí a bezpečnost\nSádrokarton a podlahy",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Učitel střední školy (matematika)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Učitel střední školy s 8 lety praxe ve výuce matematiky v 9.–12. ročníku. Zvýšil jsem úspěšnost v algebře z 64 % na 83 % a vedu matematický tým, který se dostal do 2 státních finále. Zkušený v diferencované výuce, přípravě na zkoušky a komunikaci s rodiči.",
    "experience": [
      {
        "role": "Učitel matematiky (9.–12. ročník)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "srp 2019",
        "end": "",
        "current": true,
        "points": "Výuka algebry, geometrie a úvodu do analýzy pro 120 žáků v 5 třídách\nZvýšení úspěšnosti v algebře z 64 % na 83 % za 3 roky\nVedení matematického týmu do 2 státních finále\nVedení odpoledního doučování pro 30 žáků týdně"
      },
      {
        "role": "Učitel matematiky (9.–10. ročník)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "srp 2017",
        "end": "čvn 2019",
        "current": false,
        "points": "Výuka algebry a geometrie pro 100 žáků ročně\nZavedení týdenních testů, které snížily mezery v domácích úkolech o polovinu\nZorganizování prvního školního matematického veletrhu s 200 žáky"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Výuka matematiky",
        "start": "2013",
        "end": "2017",
        "notes": "Státní učitelská licence (New Hampshire, 7.–12. ročník, matematika)."
      }
    ],
    "skills": "Výuka matematiky (od algebry po úvod do analýzy)\nPříprava na zkoušky\nDiferencovaná výuka\nŘízení třídy\nKomunikace s rodiči\nGoogle Classroom a Desmos",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Učitel mateřské školy",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Učitel mateřské školy se 6 lety praxe v péči o děti ve věku 3–5 let. Zkušený v učení hrou, vedení chování a komunikaci s rodiči. Vytvořil jsem fonetický program, který zvýšil připravenost na školu v celé mé třídě.",
    "experience": [
      {
        "role": "Učitel mateřské školy",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "srp 2020",
        "end": "",
        "current": true,
        "points": "Výuka a péče o třídu 18 dětí ve věku 3–5 let\nVytvoření fonetického programu, který zvýšil připravenost na školu v celé třídě\nPlánování týdenních témat, tvoření a her venku\nSdílení denních aktualizací a čtvrtletních zpráv o pokroku s rodiči"
      },
      {
        "role": "Asistent učitele mateřské školy",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "čvn 2018",
        "end": "čvc 2020",
        "current": false,
        "points": "Podpora vedoucího učitele ve třídě s 20 dětmi\nKaždodenní vedení času na pohádky, písničky a výtvarné činnosti\nVedení bezpečnostní a hygienické evidence podle státních standardů"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Titul Associate Degree",
        "field": "Předškolní vzdělávání",
        "start": "2016",
        "end": "2018",
        "notes": "Osvědčení Child Development Associate (CDA). Certifikáty první pomoci a KPR."
      }
    ],
    "skills": "Učení hrou\nVedení chování\nFonetika a raná gramotnost\nKomunikace s rodiči\nBezpečnost ve třídě\nPlánování výtvarných činností",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Sociální pracovník pro děti a rodiny",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Licencovaný sociální pracovník se 7 lety praxe v podpoře dětí a rodin. Vedu případy 25 rodin, koordinuji služby mezi školami a poskytovateli zdravotní péče a vypracovávám soudní zprávy, na které se soudci spoléhají. Zkušený v hodnocení, krizové podpoře a ochraně ohrožených osob.",
    "experience": [
      {
        "role": "Sociální pracovník pro děti a rodiny",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "led 2020",
        "end": "",
        "current": true,
        "points": "Vedení případů 25 rodin, týdenní návštěvy domácností a škol\nVypracovávání soudních zpráv a svědectví u rodinného soudu\nKoordinace podpory bydlení, zdravotní péče a škol pro zranitelné rodiny\nZkrácení čekací doby na posouzení o 20 % novým systémem třídění"
      },
      {
        "role": "Sociální pracovník pro případy",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "čvc 2018",
        "end": "pro 2019",
        "current": false,
        "points": "Podpora 40+ rodin v dočasném bydlení s dávkami a doporučeními\nVedení týdenních workshopů o rodičovství a rozpočtu\nUdržování přesných záznamů případů pro audity a zprávy o financování"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Sociální práce",
        "start": "2016",
        "end": "2018",
        "notes": "Licencovaný sociální pracovník (Ohio). Kurzy z ochrany dětí a rodinných systémů."
      }
    ],
    "skills": "Vedení případů (25 rodin)\nOchrana dětí\nZprávy pro rodinné soudy\nKrizová podpora\nKoordinace mezi institucemi\nDoporučování dávek a bydlení",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Právní asistent",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Právní asistent se 6 lety praxe v podpoře soudních sporů a firemních podáních. Řídím dokazování u 30+ případů, připravuji podání a smlouvy a držím lhůty pro podání se 100% včasností. Zkušený ve Westlaw, e-discovery a softwaru pro správu případů.",
    "experience": [
      {
        "role": "Právní asistent",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "úno 2021",
        "end": "",
        "current": true,
        "points": "Řízení dokazování u 30+ soudních sporů, kontrola 10,000+ dokumentů\nPříprava podání, návrhů a smluv ke kontrole advokátem\n100% včasnost soudních podání a lhůt\nKoordinace svědků a příprava spisů k jednání"
      },
      {
        "role": "Právní asistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "srp 2019",
        "end": "led 2021",
        "current": false,
        "points": "Vstupní pohovory s 20+ klienty týdně\nPříprava formulářů a podání pro bytové a rodinné případy\nPřeklady právních dokumentů pro španělsky mluvící klienty"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Titul Associate Degree",
        "field": "Studium pro právní asistenty",
        "start": "2017",
        "end": "2019",
        "notes": "Certifikovaný právní asistent NALA (CP). Program schválený ABA."
      }
    ],
    "skills": "Podpora v soudních sporech a dokazování\nPříprava právních dokumentů\nE-discovery (Relativity)\nSpráva případů (Clio)\nSoudní podání a lhůty\nPrávní výzkum (Westlaw)",
    "languages": "Angličtina (plynně)\nŠpanělština (plynně)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Pracovník účetnictví",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Pracovník účetnictví s 5 lety praxe v závazcích, fakturaci a odsouhlasování bankovních výpisů. Zpracuji 300+ faktur měsíčně s přesností 99.8 % a udržuji účetnictví v pořádku pro měsíční uzávěrku. Zkušený v QuickBooks, Excelu a podpoře mezd.",
    "experience": [
      {
        "role": "Pracovník účetnictví",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "dub 2021",
        "end": "",
        "current": true,
        "points": "Zpracování 300+ faktur dodavatelů měsíčně s přesností 99.8 %\nTýdenní odsouhlasování 6 bankovních účtů a označování rozdílů týž den\nPříprava mzdových podkladů pro 45 zaměstnanců a upomínání opožděných plateb zákazníků\nUdržování pořádku v evidenci pro roční audit, bez nálezů"
      },
      {
        "role": "Asistent účetnictví",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "čvn 2019",
        "end": "bře 2021",
        "current": false,
        "points": "Každodenní zadávání prodejních faktur a účtenek do QuickBooks\nOdpovídání na dotazy dodavatelů k platbám telefonicky a e-mailem\nZakládání dokumentů a udržování aktuálního archivu"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certifikát",
        "field": "Účetní agenda",
        "start": "2018",
        "end": "2019",
        "notes": "Certifikovaný uživatel QuickBooks."
      }
    ],
    "skills": "Závazky a pohledávky\nOdsouhlasování bankovních výpisů\nFakturace (300+ měsíčně)\nQuickBooks a Excel\nPodpora mezd\nZadávání dat (65 slov/min)",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Administrativní asistent",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Administrativní asistent se 6 lety praxe v zajišťování hladkého chodu kanceláře. Spravuji kalendáře 4 manažerů, organizuji cesty a schůzky a vyřídím 100+ e-mailů denně. Jsem známý přesností, diskrétností a klidem i pod tlakem termínů.",
    "experience": [
      {
        "role": "Administrativní asistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Správa kalendářů, cest a schůzek pro 4 vrcholové manažery\nVyřizování 100+ e-mailů denně, příprava odpovědí a označování priorit\nPříprava podkladů pro představenstvo a zápisy z měsíčních porad\nObjednávání kancelářských potřeb a dodavatelů, snížení nákladů o 12 %"
      },
      {
        "role": "Recepční",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "srp 2019",
        "end": "pro 2020",
        "current": false,
        "points": "Vítání 60+ pacientů denně a správa knihy objednávek\nZvedání telefonů a vyřizování dotazů k pojištění\nUdržování přesné a důvěrné dokumentace pacientů"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Titul Associate Degree",
        "field": "Administrativa kanceláře",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Správa kalendářů a cest\nE-mail a korespondence\nZápisy ze schůzek\nMicrosoft Office (Word, Excel, Outlook)\nZadávání dat (70 slov/min)\nKancelářské potřeby a dodavatelé",
    "languages": "Angličtina (plynně)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankovní pokladník",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankovní pokladník se 4 lety praxe; denně obsloužím 80+ zákazníků přesně a s péčí. Pokladna seděla na cent přesně po 3 roky, bez jediného manka. Zkušený ve vkladech, výběrech, kontrolách podvodů a doporučování vhodných produktů zákazníkům.",
    "experience": [
      {
        "role": "Bankovní pokladník",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "bře 2022",
        "end": "",
        "current": true,
        "points": "Obsluha 80+ zákazníků denně: vklady, výběry, platby a převody\nPokladna sedící na cent po 3 roky bez mank\nOdhalení a zastavení 12 pokusů o podvod, úspora zákazníkům $90,000+\nDoporučování spořicích a úvěrových produktů zákazníkům, plnění čtvrtletních cílů doporučení"
      },
      {
        "role": "Pracovník zákaznického servisu",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "čvn 2021",
        "end": "úno 2022",
        "current": false,
        "points": "Zakládání nových účtů a vydávání debetních karet členům\nOdpovídání na telefonické dotazy ohledně zůstatků a výpisů\nPomoc členům s nastavením internetového a mobilního bankovnictví"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Titul Associate Degree",
        "field": "Obchod",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Práce s hotovostí a její odsouhlasování\nVklady, výběry a platby\nOdhalování podvodů\nZákaznický servis\nBankovní software (Fiserv)\nDoporučování produktů",
    "languages": "Angličtina (plynně)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Manažer prodeje",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Manažer prodeje s 10 lety praxe ve vedení týmů až 15 zástupců. Zvýšil jsem regionální tržby z $4M na $7.5M za 3 roky, zvýšil míru úspěšnosti z 22 % na 34 % a snížil fluktuaci zástupců na polovinu lepším koučinkem a adaptací.",
    "experience": [
      {
        "role": "Regionální manažer prodeje",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Vedení týmu 15 obchodních zástupců v Texasu a Oklahomě\nZvýšení regionálních tržeb z $4M na $7.5M za 3 roky\nZvýšení míry úspěšnosti z 22 % na 34 % lepším koučinkem a kontrolami pipeline\nSnížení fluktuace zástupců na polovinu novým adaptačním programem"
      },
      {
        "role": "Obchodní zástupce",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "čvn 2015",
        "end": "pro 2020",
        "current": false,
        "points": "Prodej průmyslového vybavení 80+ klientům, plnění kvóty 5 let v řadě\nNejlepší zástupce v regionu po 3 roky v řadě\nVybudování sítě doporučení, která přinesla 25 % nových obchodů"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kurzy z řízení prodeje a vyjednávání."
      }
    ],
    "skills": "Vedení obchodního týmu (15 zástupců)\nRůst tržeb a prognózování\nSpráva pipeline (Salesforce)\nKoučink a adaptace\nVyjednávání\nPlánování teritorií",
    "languages": "Angličtina (plynně)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Manažer stavebních projektů",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Manažer stavebních projektů s 12 lety praxe v realizaci komerčních a rezidenčních projektů v hodnotě až $12M. Dokončil jsem 20+ projektů s 95% včasností, bez úrazů s pracovní neschopností na mých stavbách a s rozpočty drženými v rozmezí 3 %. Zkušený v plánování, řízení subdodavatelů a bezpečnosti.",
    "experience": [
      {
        "role": "Manažer stavebních projektů",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "úno 2020",
        "end": "",
        "current": true,
        "points": "Realizace komerčních a rezidenčních projektů v hodnotě až $12M\nDokončení 20+ projektů s 95% včasností a rozpočty v rozmezí 3 %\nŘízení 30+ subdodavatelů a 50 pracovníků na 3 aktivních stavbách\nŽádný úraz s pracovní neschopností na všech stavbách za 4 roky"
      },
      {
        "role": "Stavbyvedoucí",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "čvn 2013",
        "end": "led 2020",
        "current": false,
        "points": "Vedení každodenního provozu staveb kanceláří a obchodů\nKoordinace dodávek, kontrol a harmonogramů subdodavatelů\nUdržování čisté bezpečnostní evidence a úspěšné absolvování každé kontroly OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Pozemní stavitelství",
        "start": "2009",
        "end": "2013",
        "notes": "Certifikát OSHA 30. Kandidát na CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Harmonogramy projektů (MS Project, Procore)\nKontrola rozpočtu\nŘízení subdodavatelů\nBezpečnost na stavbě (OSHA 30)\nČtení výkresů\nReporting klientům",
    "languages": "Angličtina (plynně)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certifikovaný zdravotnický asistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certifikovaný zdravotnický asistent s 5 lety praxe v rodinné praxi a urgentní péči. Denně připravím 25+ pacientů, měřím životní funkce, odebírám krev a vedu recepci se spokojeností pacientů 97 %. Zkušený v EHR, odběrech krve a ověřování pojištění.",
    "experience": [
      {
        "role": "Certifikovaný zdravotnický asistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "dub 2021",
        "end": "",
        "current": true,
        "points": "Příjem 25+ pacientů denně: životní funkce, anamnézy a příprava na vyšetření\nOdběry krve a základní laboratorní testy s 99% úspěšností na první vpich\nVedení recepce, plánování a kontroly pojištění\nUdržování spokojenosti pacientů 97 % v 800+ průzkumech"
      },
      {
        "role": "Zdravotnický asistent",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "srp 2019",
        "end": "bře 2021",
        "current": false,
        "points": "Třídění příchozích pacientů a asistence lékařům při drobných zákrocích\nOčkování a odběry vzorků\nUdržování vyšetřoven zásobených, čistých a připravených mezi pacienty"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certifikát",
        "field": "Zdravotnická asistence",
        "start": "2018",
        "end": "2019",
        "notes": "Certifikovaný zdravotnický asistent (CMA, AAMA). Certifikát BLS. Vyškolen v odběrech krve."
      }
    ],
    "skills": "Příjem pacientů a životní funkce\nOdběry krve\nEHR (eClinicalWorks)\nOčkování\nOvěřování pojištění\nVedení recepce",
    "languages": "Angličtina (plynně)\nŠpanělština (plynně)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Student",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Motivovaný maturant se silnými známkami a praxí z brigád. Rychle se učím, jsem spolehlivý a dobře vycházím s lidmi. Hledám první pozici na plný úvazek nebo brigádu při studiu.",
    "experience": [
      {
        "role": "Prodavač na částečný úvazek",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "zář 2024",
        "end": "",
        "current": true,
        "points": "Obsluha 50+ zákazníků za směnu o víkendech a po škole\nPráce s hotovostí, doplňování regálů a udržování pořádku ve výlohách\nDůvěra při otevírání prodejny v sobotu ráno"
      },
      {
        "role": "Dobrovolný doučovatel",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "led 2024",
        "end": "čvn 2025",
        "current": false,
        "points": "Doučování mladších žáků z matematiky dvakrát týdně\nPomoc s organizací letního čtenářského programu pro 40 dětí"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Maturitní vysvědčení",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Čestný seznam, 3 roky. Kapitán debatního týmu."
      }
    ],
    "skills": "Zákaznický servis\nPráce s hotovostí\nTýmová práce\nŘízení času\nMicrosoft Office\nVeřejné vystupování (debatní tým)",
    "languages": "Angličtina (plynně)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Čerstvý absolvent \u2014 podniková administrativa",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Čerstvý absolvent podnikové administrativy s praxí ze stáží v marketingu a provozu. Zorganizoval jsem univerzitní podnikatelskou soutěž s 200 účastníky a absolvoval 6měsíční stáž, kde jsem zkrátil dobu reportingu na polovinu. Toužím zahájit kariéru na plný úvazek a rychle se učit.",
    "experience": [
      {
        "role": "Stážista v marketingu",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "led 2025",
        "end": "čvn 2025",
        "current": false,
        "points": "Vedení firemních sociálních účtů, nárůst sledujících z 2,000 na 6,500\nVytvoření reportovacího dashboardu, který zkrátil týdenní reporting na polovinu\nNapsání 20 blogových článků, které přinesly 15,000+ přečtení"
      },
      {
        "role": "Vedoucí dobrovolníků na akcích",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "zář 2024",
        "end": "kvě 2025",
        "current": false,
        "points": "Zorganizování podnikatelské soutěže s 200 účastníky a 12 porotci\nSpráva rozpočtu $5,000 a týmu 8 dobrovolníků"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Podniková administrativa",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Děkanův seznam, 2 roky. Projekt posledního ročníku o marketingu malých firem."
      }
    ],
    "skills": "Marketing na sociálních sítích\nExcel a Tabulky Google\nPrezentační dovednosti\nOrganizace akcí\nTýmová práce\nZákladní analýza dat",
    "languages": "Angličtina (plynně)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Juniorní marketingový specialista",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Juniorní marketingový specialista se 2 lety praxe v obsahu, e-mailu a sociálních sítích. Rozšířil jsem klientský newsletter z 1,000 na 4,000 odběratelů a vedu kampaně s průměrnou mírou otevření 22 %. Připraven na větší odpovědnost a větší portfolio klientů.",
    "experience": [
      {
        "role": "Juniorní marketingový specialista",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "čvc 2024",
        "end": "",
        "current": true,
        "points": "Rozšíření klientského newsletteru z 1,000 na 4,000 odběratelů za 14 měsíců\nPsaní a plánování 12 příspěvků týdně pro 4 klienty\nVedení e-mailových kampaní s průměrnou mírou otevření 22 %\nMěsíční reporting výsledků kampaní klientům"
      },
      {
        "role": "Stážista v marketingu",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "led 2024",
        "end": "čvn 2024",
        "current": false,
        "points": "Psaní popisů produktů pro 200+ položek na firemním webu\nPomoc s vedením jarní výprodejové kampaně, která zvýšila online objednávky o 15 %"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Komunikace",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Kurzy z digitálního marketingu a psaní pro média."
      }
    ],
    "skills": "Tvorba obsahu\nE-mailový marketing (Mailchimp)\nSpráva sociálních sítí\nGoogle Analytics\nCanva\nReporting pro klienty",
    "languages": "Angličtina (plynně)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Provozní supervizor",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Provozní supervizor s 8 lety praxe ve vedení skladových týmů o 20–30 lidech. Snížil jsem chyby při vychystávání o 30 %, zvýšil včasnost expedice z 90 % na 97 % a zaškolil 15 nových pracovníků. Připraven na roli provozního manažera s větší lokalitou a rozpočtem.",
    "experience": [
      {
        "role": "Provozní supervizor",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "bře 2021",
        "end": "",
        "current": true,
        "points": "Dohled nad 25 skladníky ve 2 směnách v areálu o rozloze 90,000 čtverečních stop\nSnížení chyb při vychystávání o 30 % novými kontrolními postupy a skenováním čárových kódů\nZvýšení včasnosti expedice z 90 % na 97 % za 2 roky\nZaškolení 15 nových pracovníků a povýšení 3 na vedoucí týmů"
      },
      {
        "role": "Vedoucí týmu",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "čvn 2017",
        "end": "úno 2021",
        "current": false,
        "points": "Vedení týmu 10 skladníků a baličů na noční směně\nZavedení rozpisu směn, který snížil přesčasy o 20 % bez porušení termínů\nVedení bezpečnostních školení a udržení týmu bez úrazů po 2 roky"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Řízení dodavatelského řetězce",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Vedení týmu (25 zaměstnanců)\nSkladové operace\nZlepšování procesů\nŘízení bezpečnosti\nKontrola zásob\nWMS a Excel",
    "languages": "Angličtina (plynně)\nHindština (konverzačně)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Seniorní projektový manažer",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Seniorní projektový manažer se 14 lety praxe v dodávání softwarových projektů v hodnotě až $8M. Vedl jsem 30+ projektů s 92% mírou včasnosti, vybudoval PMO od nuly a mentoroval 10 projektových manažerů. Známý klidným dodáváním pod tlakem a poctivým reportingem pro vedení.",
    "experience": [
      {
        "role": "Seniorní projektový manažer",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "led 2019",
        "end": "",
        "current": true,
        "points": "Realizace softwarových projektů v hodnotě až $8M s 92% včasností\nVybudování firemního PMO od nuly: šablony, reporting a řízení\nMentoring 10 projektových manažerů a vedení měsíční komunity projektových manažerů\nPřímý reporting technickému řediteli u programu se 40 lidmi"
      },
      {
        "role": "Projektový manažer",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "čvn 2012",
        "end": "pro 2018",
        "current": false,
        "points": "Řízení 20+ projektů pro klienty z maloobchodu a zdravotnictví\nZavedení agilních praktik, které zkrátily dobu dodání o 25 %\nRozvoj 2 klíčových klientů z $500k na $2M ročních tržeb"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informační systémy",
        "start": "2008",
        "end": "2012",
        "notes": "Certifikát PMP (2015). Certifikovaný ScrumMaster. Kurzy MBA (2018-2019, nedokončeno)."
      }
    ],
    "skills": "Realizace programů a projektů\nZřízení a řízení PMO\nAgile a Waterfall\nKontrola rozpočtu ($8M)\nReporting pro vedení\nMentoring týmu",
    "languages": "Angličtina (plynně)\nŠpanělština (konverzačně)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Provozní ředitel",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Provozní ředitel s 18 lety praxe v rozšiřování provozu maloobchodních a logistických firem. Rozrostl jsem provoz z 200 na 900 lidí v 6 lokalitách, zvýšil marži EBITDA z 8 % na 14 % a vedl 2 akvizice. Zkušenosti s reportingem pro představenstvo a vztahy s investory.",
    "experience": [
      {
        "role": "Provozní ředitel",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "led 2021",
        "end": "",
        "current": true,
        "points": "Vedení provozu pro 900 lidí v 6 lokalitách s rozpočtem $180M\nZvýšení marže EBITDA z 8 % na 14 % za 3 roky\nVedení 2 akvizic a integrace obou týmů do 6 měsíců\nMěsíční reporting představenstvu o provozu, rizicích a růstu"
      },
      {
        "role": "Viceprezident pro provoz",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "čvn 2014",
        "end": "pro 2020",
        "current": false,
        "points": "Rozšíření provozu z 200 na 600 lidí ve 4 lokalitách\nOtevření 3 distribučních center v termínu a pod rozpočtem\nVybudování vedoucího týmu, který podnik vede dodnes"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Podniková administrativa",
        "start": "2010",
        "end": "2012",
        "notes": "Bakalářský titul (BS) z ekonomie, NYU (2006). Kurz správy a řízení společností (2020)."
      }
    ],
    "skills": "Provoz ve velkém měřítku (900 lidí)\nOdpovědnost za výsledek hospodaření ($180M)\nFúze a akvizice\nReporting představenstvu\nStrategie růstu\nBudování vedoucího týmu",
    "languages": "Angličtina (plynně)",
    "template": "executive"
  }
};
});
