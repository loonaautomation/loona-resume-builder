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
      "title": "Registrovaná zdravotná sestra",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Registrovaná zdravotná sestra so 6 rokmi skúseností na interných, chirurgických a telemetrických oddeleniach. Zručná v posudzovaní stavu pacientov, intravenóznej terapii, podávaní liekov a elektronických zdravotných záznamoch. Známa pokojnou a jasnou komunikáciou s pacientmi a rodinami v náročných situáciách.",
    "experience": [
      {
        "role": "Registrovaná zdravotná sestra",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "jún 2021",
        "end": "",
        "current": true,
        "points": "Starám sa o 5-6 pacientov za zmenu na 32-lôžkovom interno-chirurgickom oddelení vrátane posudzovania stavu, podávania liekov a starostlivosti o rany\nŠkolím a mentorujem 4 nové absolventky zdravotných škôl a skrátil som ich adaptačný čas o 2 týždne\nZnížil som chyby v medikácii na oddelení o 18 % zavedením dvojitej kontroly pri odovzdávaní služby\nVšetku starostlivosť presne dokumentujem v elektronických zdravotných záznamoch Epic"
      },
      {
        "role": "Zdravotná sestra",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "aug. 2019",
        "end": "máj 2021",
        "current": false,
        "points": "Vykonával som triáž pre viac ako 40 pacientov bez objednania denne a uprednostňoval urgentné prípady na ošetrenie v ten istý deň\nOčkoval som a robil zdravotné prehliadky na mesačných komunitných podujatiach\nKoordinoval som odporúčania k špecialistom a sledoval výsledky testov"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Ošetrovateľstvo",
        "start": "2015",
        "end": "2019",
        "notes": "Licencia registrovanej zdravotnej sestry (Texas). Certifikáty BLS a ACLS."
      }
    ],
    "skills": "Posúdenie stavu pacienta\nIntravenózna terapia a podávanie liekov\nElektronické zdravotné záznamy (Epic)\nMonitorovanie telemetrie\nVzdelávanie pacientov a rodín\nKontrola infekcií",
    "languages": "Angličtina (plynule)\nŠpanielčina (konverzačná úroveň)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Softvérový vývojár",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Softvérový vývojár s 5 rokmi skúseností s tvorbou webových aplikácií v Pythone a JavaScripte. Vytvoril som funkcie, ktoré používa viac ako 200 000 používateľov, skrátil časy odozvy API o 40 % a viedol migráciu monolitu na mikroslužby. Silný v testovaní, kontrole kódu a prehľadnej dokumentácii.",
    "experience": [
      {
        "role": "Softvérový vývojár",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Vytváram a udržiavam zákaznícke webové funkcie v Pythone (Django) a Reacte pre viac ako 200 000 používateľov\nSkrátil som priemerný čas odozvy API z 850 ms na 500 ms pridaním cache a opravou pomalých dotazov\nViedol som migráciu fakturačnej služby na mikroslužby s nulovým výpadkom\nKontrolujem viac ako 10 pull requestov týždenne a mentorujem 2 juniorných vývojárov"
      },
      {
        "role": "Junior vývojár",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "júl 2020",
        "end": "feb. 2022",
        "current": false,
        "points": "Vytvoril som interné dashboardy v JavaScripte, ktoré nahradili manuálne tabuľky pre 3 tímy\nNapísal som automatizované testy, ktoré zvýšili pokrytie zo 45 % na 78 %\nV prvom roku som opravil viac ako 120 chýb v celom produkte"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatika",
        "start": "2016",
        "end": "2020",
        "notes": "Kurzy v databázach, algoritmoch a operačných systémoch."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript a React\nPostgreSQL a Redis\nREST API a mikroslužby\nGit a CI/CD\nAutomatizované testovanie (pytest, Jest)",
    "languages": "Angličtina (plynule)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Učiteľ základnej školy",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Učiteľ základnej školy so 7 rokmi skúseností s vyučovaním v 3. – 5. ročníku. Zručný v diferencovanom vyučovaní, riadení triedy a komunikácii s rodičmi. Čitateľskú úroveň svojej triedy zvýšil z 58 % na 81 % za dva školské roky.",
    "experience": [
      {
        "role": "Učiteľ základnej školy (4. ročník)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "aug. 2020",
        "end": "",
        "current": true,
        "points": "Učím čítanie, matematiku a prírodovedu triedu 26 žiakov, vrátane 5 s individuálnymi vzdelávacími plánmi\nZvýšil som úroveň čítania v triede z 58 % na 81 % za dva roky prostredníctvom skupín riadeného čítania\nVydávam týždenný newsletter pre rodičov a organizujem stretnutia o pokroku za každé obdobie pre každú rodinu\nVediem školský čitateľský klub pre 40 žiakov v ročníkoch 3-5"
      },
      {
        "role": "Učiteľ základnej školy (3. ročník)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "aug. 2018",
        "end": "jún 2020",
        "current": false,
        "points": "Plánoval som a viedol každodenné hodiny pre 24 žiakov vo všetkých hlavných predmetoch\nZaviedol som rutiny správania, ktoré znížili vyrušovanie v triede na polovicu\nOrganizoval som ročníkový vedecký veľtrh so 120 žiakmi a 80 rodičmi"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Vzdelávanie pre základné školy",
        "start": "2014",
        "end": "2018",
        "notes": "Štátna učiteľská licencia (Ohio, ročníky K-5). Rozšírenie pre čítanie."
      }
    ],
    "skills": "Diferencovaná výučba\nRiadenie triedy\nSkupiny riadeného čítania\nKomunikácia s rodičmi\nPlánovanie hodín\nGoogle Classroom",
    "languages": "Angličtina (plynule)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Seniorský účtovník",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA s 8 rokmi skúseností v mesačnej uzávierke, finančnom vykazovaní a internom audite. Uzávierku som zrýchlil o 3 dni prestavbou procesu odsúhlasovania a v jednom auditnom roku som našiel $240,000 v vymáhateľných preplatkoch. Silný v Exceli, QuickBooks a ERP systémoch.",
    "experience": [
      {
        "role": "Seniorský účtovník",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Zodpovedám za mesačnú uzávierku obchodnej jednotky v hodnote 40 mil. $ a po prepracovaní odsúhlasovaní ju dokončujem o 3 dni rýchlejšie\nPripravujem mesačné finančné výkazy a správy o odchýlkach pre vrcholový manažment\nPočas interného auditu v roku 2024 som našiel vrátiteľné preplatky dodávateľom vo výške 240 000 $\nDohliadam na 2 účtovníkov a kontrolujem ich účtovné zápisy"
      },
      {
        "role": "Účtovník",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "jún 2017",
        "end": "dec. 2020",
        "current": false,
        "points": "Pripravoval som daňové priznania a finančné výkazy pre 25 klientov z radov malých podnikov\nAsistoval som pri auditoch 8 klientov, testoval kontroly a dokumentoval zistenia\nAutomatizoval som register dlhodobého majetku v Exceli, čím som ušetril 6 hodín mesačne"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Účtovníctvo",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Člen AICPA."
      }
    ],
    "skills": "Mesačná uzávierka a odsúhlasovanie účtov\nFinančný reporting a analýza odchýlok\nInterný audit\nExcel (kontingenčné tabuľky, VLOOKUP)\nQuickBooks a SAP\nPríprava daní",
    "languages": "Angličtina (plynule)\nMandarínčina (konverzačná úroveň)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Vodič nákladných vozidiel CDL Class A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Vodič s oprávnením CDL Class A s 9 rokmi skúseností v diaľkovej a regionálnej doprave. Viac než 900,000 míľ bez nehody, 99 % dochvíľnosť dodávok a skúsenosti s chladiarenskými, valníkovými a skriňovými nákladmi. Čistý vodičský register, oprávnenia HazMat a cisterny.",
    "experience": [
      {
        "role": "Vodič diaľkovej dopravy",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "apr. 2019",
        "end": "",
        "current": true,
        "points": "Jazdím viac ako 2 800 míľ týždenne na regionálnych trasách po Texase, Oklahome a Novom Mexiku\nUdržiavam 99 % mieru včasného doručenia pri viac ako 1 100 nákladoch ročne\nPrepravujem chladený a suchý náklad; denne vykonávam kontroly pred jazdou a po jazde\nCelkovo viac ako 900 000 míľ bez nehody"
      },
      {
        "role": "Vodič dodávkového nákladného vozidla",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar. 2016",
        "end": "mar. 2019",
        "current": false,
        "points": "Doručoval som stavebné materiály na 15-20 pracovísk denne v oblasti Dallas-Fort Worth\nObsluhoval som vysokozdvižné vozíky a zabezpečoval náklady na plošinových návesoch podľa noriem DOT\nUdržiaval som dodacie doklady a záznamy presné s nulovými porušeniami DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certifikát",
        "field": "Komerčná jazda (CDL trieda A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A s oprávneniami HazMat a cisterny. Čistý vodičský register."
      }
    ],
    "skills": "Diaľková a regionálna jazda\nChladené a plošinové náklady\nPredpisy DOT a denníky jázd\nKontroly pred jazdou\nPlánovanie trás (GPS, ELD)\nObsluha vysokozdvižného vozíka",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Predavač v maloobchode",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Predavač v maloobchode so 4 rokmi skúseností v predajniach elektroniky a oblečenia. Pravidelne medzi 3 najlepšími predajcami tímu, s 32 % mierou predaja záruk a príslušenstva. Priateľský, rýchly pri pokladni a s dôverou na otváranie a zatváranie predajne.",
    "experience": [
      {
        "role": "Seniorský obchodný asistent",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Predávam elektroniku a príslušenstvo viac ako 60 zákazníkom denne; 8 štvrťrokov po sebe medzi 3 najlepšími v predaji predajne\nDosahujem 32 % mieru predaja záruk a príslušenstva, najvyššiu v tíme\nŠkolím 6 nových zamestnancov v práci s pokladňou, skladom a štandardmi zákazníckej podpory\nDôveryhodný držiteľ kľúčov: otváram a zatváram predajňu a počítam hotovosť"
      },
      {
        "role": "Obchodný asistent",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "jún 2021",
        "end": "jan. 2022",
        "current": false,
        "points": "Pomáhal som zákazníkom vybrať oblečenie a veľkosti na rušnej predajnej ploche\nUdržiaval som výklady upratané a počas každej zmeny dopĺňal regály\nVybavoval som vrátenia a výmeny slušne a sťažnosti som udržiaval na minime"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Pridružený titul (Associate Degree)",
        "field": "Podnikanie",
        "start": "2019",
        "end": "2021",
        "notes": "Štúdium na čiastočný úväzok popri práci v maloobchode."
      }
    ],
    "skills": "Zákaznícky servis a upselling\nPráca s hotovosťou a pokladničné systémy\nZnalosť produktov (elektronika)\nSpráva zásob\nOtváranie a zatváranie predajne\nŠkolenie tímu",
    "languages": "Angličtina (plynule)\nŠpanielčina (plynule)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Pracovník zákazníckej podpory",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Pracovník zákazníckej podpory s 5 rokmi skúseností s telefonickou, e-mailovou a live-chat podporou. Denne vyriešim 45+ prípadov so skóre spokojnosti 96 % a mierou vyriešenia pri prvom kontakte 88 %. Pokojný pri nahnevaných zákazníkoch a rýchly pri hľadaní riešenia.",
    "experience": [
      {
        "role": "Pracovník zákazníckej podpory",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "máj 2021",
        "end": "",
        "current": true,
        "points": "Vybavujem viac ako 45 telefonických, e-mailových a chatových prípadov denne o fakturácii, objednávkach a technických poruchách\nUdržiavam skóre spokojnosti zákazníkov 96 % a mieru vyriešenia pri prvom kontakte 88 %\nDeeskalujem náročné hovory a mením sťažnosti na opakovaný obchod\nŠkolím 5 nových agentov v scenároch, systémoch a tóne komunikácie"
      },
      {
        "role": "Agent podpory",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "sep. 2019",
        "end": "apr. 2021",
        "current": false,
        "points": "Odpovedal som na e-maily a chaty zákazníkov o objednávkach, vráteniach a refundáciách\nUdržal som priemerný čas prvej odpovede pod 2 hodinami\nNapísal som 20 článkov do centra pomoci, ktoré znížili opakované otázky o štvrtinu"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Pridružený titul (Associate Degree)",
        "field": "Obchodná administratíva",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Podpora cez telefón, e-mail a živý chat\nVybavovanie sťažností a deeskalácia\nCRM systémy (Zendesk, Salesforce)\nOtázky k fakturácii a objednávkam\nPísanie 55 slov za minútu\nŠkolenie tímu",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Prevádzkový manažér",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Prevádzkový manažér s 12 rokmi skúseností s riadením tímov do 80 ľudí v oblasti skladovania a distribúcie. Znížil som náklady na spracovanie objednávok o 22 %, zvýšil včasné odoslanie zásielok z 91 % na 98 % a otvoril dve nové prevádzky načas a pod rozpočtom.",
    "experience": [
      {
        "role": "Prevádzkový manažér",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Vediem distribučné centrum s rozlohou 120 000 štvorcových stôp s 80 zamestnancami v 3 zmenách\nZnížil som náklady na spracovanie objednávok o 22 % redizajnom trás vychystávania a vzorov zmien\nZvýšil som včasné odoslanie zásielok z 91 % na 98 % za 18 mesiacov\nOtvoril som 2 nové prevádzky načas a o 8 % pod rozpočtom"
      },
      {
        "role": "Skladový supervízor",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "jún 2013",
        "end": "jan. 2020",
        "current": false,
        "points": "Dohliadal som na 25 skladníkov a každodennú expedíciu viac ako 4 000 objednávok\nZaviedol som skenovanie čiarových kódov, čím som znížil chybovosť pri vychystávaní o 35 %\nViedol som bezpečnostné školenia, vďaka ktorým bolo pracovisko 3 roky bez úrazu"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Riadenie prevádzky",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Vedenie tímu (do 80 zamestnancov)\nSkladovanie a distribúcia\nZlepšovanie procesov\nRozpočtovanie a kontrola nákladov\nRiadenie bezpečnosti\nSystémy ERP a WMS",
    "languages": "Angličtina (plynule)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Licencovaný elektrikár",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Licencovaný elektrikár tovariš s 8 rokmi skúseností v rezidenčných a komerčných prácach. Zručný v elektroinštalácii, modernizácii rozvádzačov, osvetlení a hľadaní porúch, s bezchybným bezpečnostným záznamom pri viac ako 400 zákazkách. Znalosť predpisov NEC a skúsenosti s vedením učňov.",
    "experience": [
      {
        "role": "Elektrikár – tovariš",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar. 2019",
        "end": "",
        "current": true,
        "points": "Dokončujem viac ako 400 obytných a komerčných zákaziek: rozvody, modernizácia rozvádzačov, osvetlenie a nabíjačky elektromobilov\nRýchlo diagnostikujem a opravujem poruchy s mierou opravy pri prvej návšteve 92 %\nDohliadam na 2 učňov a schvaľujem ich prácu podľa predpisov\nUdržiavam čistú bezpečnostnú históriu s nulovými úrazmi so stratou času"
      },
      {
        "role": "Elektrikár – učeň",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "jún 2016",
        "end": "feb. 2019",
        "current": false,
        "points": "Pomáhal som licencovaným elektrikárom pri rozvodoch v novostavbách a prekáblovaniach\nNaučil som sa ohýbať rúrky, ťahať káble a inštalovať rozvádzače\nAbsolvoval som 8 000 hodín učňovskej praxe a tovaryšskú skúšku som zložil na prvý pokus"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certifikát",
        "field": "Elektrotechnika",
        "start": "2015",
        "end": "2016",
        "notes": "Licencia elektrikára tovariša (Colorado). Certifikát OSHA 30."
      }
    ],
    "skills": "Obytné a komerčné rozvody\nModernizácia rozvádzačov a nabíjačky elektromobilov\nVyhľadávanie porúch a testovanie\nDodržiavanie predpisov NEC\nOhýbanie rúrok a ťahanie káblov\nDohľad nad učňami",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Finančný analytik",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Finančný analytik so 6 rokmi skúseností s rozpočtovaním, prognózovaním a investičnou analýzou. Vytvoril prognostické modely, ktoré znížili odchýlku rozpočtu o 30 % a podporili investičné rozhodnutia za $50M. Silný v Exceli, SQL a finančnom modelovaní.",
    "experience": [
      {
        "role": "Finančný analytik",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Vytváram mesačné prognózy a ročné rozpočty pre portfólio v hodnote 120 mil. $\nZnížil som odchýlku rozpočtu o 30 % modelom prognózovania podľa faktorov\nPodporujem investičné rozhodnutia v hodnote 50 mil. $ oceňovaním a analýzou scenárov\nPrezentujem zistenia mesačne finančnému riaditeľovi a vedúcim oddelení"
      },
      {
        "role": "Junior finančný analytik",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "júl 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Pripravoval som týždenné správy o výkonnosti pre 12 pobočiek\nAutomatizoval som reporting v Exceli, čím som ušetril 10 hodín týždenne\nPomáhal som úverovému tímu s analýzou úverového portfólia"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Financie",
        "start": "2015",
        "end": "2019",
        "notes": "Kandidát CFA Level II. Kurzy v oceňovaní a podnikových financiách."
      }
    ],
    "skills": "Finančné modelovanie a prognózovanie\nRozpočtovanie a analýza odchýlok\nOceňovanie (DCF, porovnateľné spoločnosti)\nExcel (pokročilý) a SQL\nBloomberg Terminal\nVizualizácia dát (Power BI)",
    "languages": "Angličtina (plynule)\nHindčina (plynule)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Stavebný inžinier",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Stavebný inžinier (PE) so 7 rokmi skúseností v navrhovaní cestnej a vodnej infraštruktúry. Viedol som návrh rozšírenia diaľnice v dĺžke 12 míľ a dažďového systému pre 8,000 domov. Zručný v AutoCAD Civil 3D, odhadoch nákladov a koordinácii povolení.",
    "experience": [
      {
        "role": "Stavebný inžinier",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Vediem návrh rozšírenia diaľnice v dĺžke 12 míľ, od prieskumu po realizačnú dokumentáciu\nNavrhol som systém dažďových vôd pre 8 000 domácností, schválený mestom na prvý pokus\nKoordinujem povolenia so 4 úradmi a spravujem rozpočet návrhu 2,5 mil. $\nKontrolujem a pečiatkujem výkresy ako licencovaný Professional Engineer"
      },
      {
        "role": "Junior stavebný inžinier",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "júl 2018",
        "end": "dec. 2020",
        "current": false,
        "points": "Pripravoval som plány terénnych úprav a odvodnenia pre viac ako 20 obytných projektov\nVypracúval som odhady nákladov a výmery pre cestné projekty\nZúčastňoval som sa inšpekcií na stavenisku a písal správy o pokroku"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Stavebné inžinierstvo",
        "start": "2014",
        "end": "2018",
        "notes": "Licencia Professional Engineer (Washington). Skúška EIT zložená v roku 2018."
      }
    ],
    "skills": "Projektovanie ciest a odvodnenia\nAutoCAD Civil 3D\nModelovanie dažďových vôd\nOdhad nákladov\nKoordinácia povolení\nHarmonogramy projektov (MS Project)",
    "languages": "Angličtina (plynule)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Strojný inžinier",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Strojný inžinier so 6 rokmi skúseností s navrhovaním systémov HVAC a výrobných zariadení. Znížil spotrebu energie o 18 % v 3 závodoch prepracovaním potrubí a riadenia a viedol redizajn stroja, ktorý zvýšil výkon o 25 %. Zručný v SolidWorks, FEA a tepelnej analýze.",
    "experience": [
      {
        "role": "Strojný inžinier",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Navrhujem HVAC a výrobné zariadenia pre 3 závody s viac ako 400 zamestnancami\nZnížil som spotrebu energie o 18 % redizajnom vzduchotechniky a riadiacich sekvencií\nViedol som redizajn stroja, ktorý zvýšil výkon o 25 % bez ďalšej podlahovej plochy\nVykonávam analýzu MKP a tepelnú analýzu nových dielov pred prototypovaním"
      },
      {
        "role": "Junior strojný inžinier",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "aug. 2019",
        "end": "jan. 2021",
        "current": false,
        "points": "Modeloval som diely a zostavy v SolidWorks pre klientov z automobilového priemyslu\nPripravoval som výkresy, kusovníky a protokoly o skúškach\nPodporoval som stavbu prototypov a riešil problémy s lícovaním vo výrobe"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Strojníctvo",
        "start": "2015",
        "end": "2019",
        "notes": "Kurzy v termodynamike, mechanike tekutín a konštruovaní strojov."
      }
    ],
    "skills": "Návrh HVAC\nSolidWorks a AutoCAD\nAnalýza MKP a tepelná analýza\nKonštrukcia strojov\nEnergetická účinnosť\nGD&T a tolerancie",
    "languages": "Angličtina (plynule)\nKórejčina (konverzačná úroveň)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektrotechnický inžinier",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Elektrotechnický inžinier so 6 rokmi skúseností so vstavanými systémami a výkonovou elektronikou. Navrhol riadiace dosky, ktoré sa dnes používajú vo viac ako 50,000 zariadeniach, a prepracovaním komponentov znížil náklady na dosku o 22 %. Zručný v Altiume, jazyku C, testovaní firmvéru a zhode EMC.",
    "experience": [
      {
        "role": "Elektrotechnický inžinier",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Navrhujem vstavané riadiace dosky používané vo viac ako 50 000 zariadeniach ročne\nZnížil som náklady na dosku o 22 % redizajnom výkonového stupňa a výberom alternatív\nVediem testovanie zhody EMC s úspechom na prvý pokus pri 4 produktových radoch\nPíšem a kontrolujem firmvér v jazyku C pre mikrokontroléry"
      },
      {
        "role": "Junior elektrotechnický inžinier",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "júl 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Navrhoval som rozloženie DPS v Altium pre spotrebiteľských a priemyselných klientov\nStaval a testoval som prototypy a ladil hardvérové poruchy\nNapísal som testovacie postupy, ktoré skrátili čas výrobných testov o 30 %"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektrotechnické inžinierstvo",
        "start": "2015",
        "end": "2019",
        "notes": "Kurzy vo vstavaných systémoch, výkonovej elektronike a spracovaní signálov."
      }
    ],
    "skills": "Vstavané systémy a návrh DPS\nAltium Designer\nC a firmvér\nVýkonová elektronika\nTestovanie zhody EMC\nOsciloskopy a laboratórne prístroje",
    "languages": "Angličtina (plynule)\nGudžarátčina (konverzačná úroveň)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Dátový analytik",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Dátový analytik so 4 rokmi skúseností s premieňaním predajných a prevádzkových údajov na rozhodnutia. Vytvoril som dashboardy, ktoré používa 60+ manažérov, skrátil mesačné vykazovanie z 3 dní na 4 hodiny a našiel cenovú chybu v hodnote $180,000 ročne. Silný v SQL, Exceli a Power BI.",
    "experience": [
      {
        "role": "Dátový analytik",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "jan. 2022",
        "end": "",
        "current": true,
        "points": "Vytváram dashboardy Power BI, ktoré používa viac ako 60 manažérov predajní a regiónov\nSkrátil som mesačný reporting z 3 dní na 4 hodiny automatizovanými SQL kanálmi\nAuditom údajov o akciách som našiel cenovú chybu v hodnote 180 000 $ ročne\nPrezentujem zistenia mesačne obchodnému tímu"
      },
      {
        "role": "Junior dátový analytik",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "aug. 2020",
        "end": "dec. 2021",
        "current": false,
        "points": "Čistil a spájal som údaje o dodávkach zo 4 systémov do jednej reportingovej tabuľky\nVytvoril som sledovače v Exceli, ktoré nahradili manuálne počítanie pre 2 tímy\nKaždý deň som odpovedal na ad hoc otázky o dátach pre prevádzkových manažérov"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Štatistika",
        "start": "2016",
        "end": "2020",
        "notes": "Kurzy v regresii, databázach a vizualizácii údajov."
      }
    ],
    "skills": "SQL a čistenie dát\nPower BI a Tableau\nExcel (pokročilý)\nPython (pandas)\nDizajn dashboardov\nZáklady A/B testovania",
    "languages": "Angličtina (plynule)\nVietnamčina (konverzačná úroveň)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Dátový vedec",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Dátový vedec s 5 rokmi skúseností s tvorbou modelov strojového učenia pre e-commerce. Odporúčací model, ktorý som nasadil, zvýšil výnos na návštevu o 12 % a model odchodov teraz označí 80 % ohrozených zákazníkov. Silný v Pythone, SQL a nasadzovaní modelov.",
    "experience": [
      {
        "role": "Dátový vedec",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Do praxe som nasadil odporúčací model, ktorý zvýšil tržby na návštevu o 12 %\nVytvoril som model odchodu zákazníkov, ktorý označuje 80 % ohrozených zákazníkov o mesiac skôr\nNasadil som modely do produkcie s monitorovaním a kanálmi pretrénovania\nPrezentujem výsledky modelov mesačne produktovým a marketingovým tímom"
      },
      {
        "role": "Junior dátový vedec",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "júl 2020",
        "end": "jan. 2022",
        "current": false,
        "points": "Vytvoril som prognostické modely pre 3 maloobchodných klientov s presnosťou viac ako 90 %\nČistil a pripravoval datasety s viac ako 10 mil. riadkov na modelovanie\nNapísal som dokumentáciu, aby si klienti mohli modely spúšťať sami"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Dátová veda",
        "start": "2018",
        "end": "2020",
        "notes": "Diplomová práca o odporúčacích systémoch. BS z matematiky (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nStrojové učenie a štatistika\nSQL a Spark\nNasadzovanie modelov (Docker, AWS)\nA/B testovanie\nVizualizácia dát",
    "languages": "Angličtina (plynule)\nArabčina (plynule)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webový vývojár",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webový vývojár so 4 rokmi skúseností s tvorbou rýchlych a prístupných webových stránok v HTML, CSS a JavaScripte. Prepracoval som pokladňu obchodu, ktorá zvýšila konverzie o 18 %, a spravujem 12 klientskych stránok s dostupnosťou 99,9 %. Silný v responzívnom dizajne, výkone a základoch SEO.",
    "experience": [
      {
        "role": "Webový vývojár",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Vytváram responzívne webové stránky v HTML, CSS, JavaScripte a WordPresse pre 12 klientov\nPrepracoval som pokladňu obchodu, ktorá zvýšila konverzie o 18 %\nSkrátil som priemerný čas načítania stránky zo 4,2 s na 1,8 s optimalizáciou obrázkov a kódu\nUdržiavam všetky klientske stránky na dostupnosti 99,9 % s monitorovaním a zálohami"
      },
      {
        "role": "Junior webový vývojár",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "jún 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Vytváral som vstupné stránky a opravoval chyby na viac ako 20 stránkach malých podnikov\nNaučil som sa Git, responzívny dizajn a základné SEO na živých projektoch\nOdpovedal som na e-maily klientov a robil aktualizácie obsahu v ten istý deň"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatika",
        "start": "2017",
        "end": "2021",
        "notes": "Kurzy vo vývoji webu, databázach a interakcii človeka s počítačom."
      }
    ],
    "skills": "HTML, CSS a JavaScript\nReact a WordPress\nResponzívny dizajn\nOptimalizácia rýchlosti stránky\nGit a GitHub\nZákladné SEO",
    "languages": "Angličtina (plynule)\nŠpanielčina (plynule)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafický dizajnér",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafický dizajnér s 5 rokmi skúseností v brandingu, obalovom dizajne a dizajne pre sociálne siete. Vytvoril identity značiek pre viac ako 25 malých podnikov a redizajn obalu, ktorý zvýšil predaj z regálov o 14 %. Zručný v programoch Adobe Illustrator, Photoshop a Figma.",
    "experience": [
      {
        "role": "Grafický dizajnér",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "jan. 2022",
        "end": "",
        "current": true,
        "points": "Navrhujem identity značiek, obaly a sociálne kampane pre viac ako 25 klientov\nRedizajn obalu pre potravinársku značku zvýšil predaj v regáloch o 14 %\nVytváram viac ako 30 materiálov pre sociálne siete týždenne pre Instagram, TikTok a Facebook\nPrezentujem koncepty klientom a rýchlo ich upravujem podľa spätnej väzby"
      },
      {
        "role": "Junior grafický dizajnér",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "júl 2020",
        "end": "dec. 2021",
        "current": false,
        "points": "Navrhoval som letáky, menu a príspevky na sociálne siete pre miestne reštaurácie a obchody\nPripravoval som súbory pripravené na tlač a kontroloval náhľady s tlačiarňami\nVytvoril som knižnicu šablón, ktorá skrátila čas návrhu o tretinu"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafický dizajn",
        "start": "2016",
        "end": "2020",
        "notes": "Portfólio v oblasti brandingu a dizajnu obalov."
      }
    ],
    "skills": "Adobe Illustrator a Photoshop\nFigma\nDizajn identity značky\nDizajn obalov\nDizajn pre sociálne siete\nTlačová výroba",
    "languages": "Angličtina (plynule)\nKórejčina (konverzačná úroveň)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX dizajnér",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX dizajnér s 5 rokmi skúseností so skúmaním používateľov a navrhovaním mobilných a webových produktov. Redizajnoval som proces onboardingu, ktorý znížil mieru odchodov o 35 %, a viedol viac ako 40 testov použiteľnosti. Zručný vo Figme, používateľskom výskume, wireframingu a prototypovaní.",
    "experience": [
      {
        "role": "UX dizajnér",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Redizajnoval som mobilný onboarding a za 3 mesiace znížil mieru odchodov o 35 %\nVykonávam viac ako 40 testov použiteľnosti a používateľských rozhovorov ročne\nVytváram wireframy a prototypy vo Figme pre 2 produktové tímy\nKaždý deň pracujem s inžiniermi a produktovými manažérmi na dodávaní"
      },
      {
        "role": "Junior UX dizajnér",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "aug. 2020",
        "end": "jan. 2022",
        "current": false,
        "points": "Navrhoval som obrazovky a toky pre 5 klientskych aplikácií\nViedol som prvé testy použiteľnosti a spísal zistenia pre klientov\nVytvoril som knižnicu komponentov, ktorá zrýchlila odovzdávanie návrhov"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychológia",
        "start": "2016",
        "end": "2020",
        "notes": "Certifikát UX dizajnu (General Assembly, 2020). Štúdium interakcie človeka s počítačom."
      }
    ],
    "skills": "Používateľský výskum a testovanie použiteľnosti\nWireframing a prototypovanie (Figma)\nInformačná architektúra\nDizajnové systémy\nMapovanie cesty zákazníka\nWorkshopy so zainteresovanými stranami",
    "languages": "Angličtina (plynule)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marketingový manažér",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marketingový manažér s 8 rokmi skúseností v B2B a spotrebiteľských kampaniach. Zvýšil kvalifikované leady o 60 % za jeden rok, uviedol produktový rad s tržbami $3M v prvom roku a spravuje ročný rozpočet $500,000 v tíme 5 ľudí.",
    "experience": [
      {
        "role": "Marketingový manažér",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Vediem tím 5 ľudí a ročný marketingový rozpočet 500 000 $\nZvýšil som počet kvalifikovaných potenciálnych zákazníkov o 60 % za jeden rok obsahovými a platenými kampaňami\nUviedol som produktový rad, ktorý v prvom roku dosiahol tržby 3 mil. $\nZnížil som cenu za potenciálneho zákazníka o 28 % prepracovaním cielenia kampaní"
      },
      {
        "role": "Marketingový špecialista",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "jún 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Viedol som e-mailové kampane pre 80 000 odberateľov s mierou otvorenia 24 %\nSpravoval som sociálne účty, ktoré narástli z 5 000 na 40 000 sledovateľov\nOrganizoval som 6 veľtržných stánkov ročne, z ktorých každý priniesol viac ako 300 potenciálnych zákazníkov"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kurzy v spotrebiteľskom správaní, analytike a riadení značky."
      }
    ],
    "skills": "Stratégia a plánovanie kampaní\nObsahový a e-mailový marketing\nPlatená reklama (Google, Meta)\nMarketingová analytika (GA4)\nVedenie tímu\nSpráva rozpočtu",
    "languages": "Angličtina (plynule)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektový manažér",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektový manažér (PMP) so 7 rokmi skúseností s dodávaním softvérových a stavebných projektov načas a v rámci rozpočtu. Riadil som 15 projektov v hodnote až 4 mil. $ s 94 % mierou včasného dodania. Zručný v Agile, riadení rizík a komunikácii so zainteresovanými stranami.",
    "experience": [
      {
        "role": "Projektový manažér",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Spravujem 15 projektov v hodnote až 4 mil. $ s 94 % mierou včasného dodania\nVediem agilné šprinty pre 3 tímy a týždenne reportujem pokrok vedeniu\nZnížil som prekročenia projektov o 30 % skoršími kontrolami rizík\nKoordinujem dodávateľov, klientov a interné tímy naprieč 4 časovými pásmami"
      },
      {
        "role": "Koordinátor projektov",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "júl 2018",
        "end": "dec. 2020",
        "current": false,
        "points": "Sledoval som harmonogramy, rozpočty a povolenia pre 8 stavebných projektov\nPripravoval som správy o stave a poznámky zo stretnutí pre klientov\nVyriešil som konflikty v harmonograme, ktoré ušetrili 2 týždne na stavbe školy"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Obchodná administratíva",
        "start": "2014",
        "end": "2018",
        "notes": "Certifikát PMP (2021). Certifikovaný ScrumMaster."
      }
    ],
    "skills": "Plánovanie projektov a harmonogramy\nAgile a Scrum\nRiadenie rizík\nKontrola rozpočtu\nKomunikácia so zainteresovanými stranami\nMS Project a Jira",
    "languages": "Angličtina (plynule)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Personálny manažér",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Personálny manažér s 9 rokmi skúseností s náborom, zamestnaneckými vzťahmi a benefitmi. Skrátil čas náboru zo 45 na 28 dní, zvýšil retenciu o 15 % a riadi ľudské zdroje pre 250 zamestnancov na 3 pracoviskách. Znalosť pracovného práva a smerníc na úrovni CIPD.",
    "experience": [
      {
        "role": "Personálny manažér",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Vediem HR pre 250 zamestnancov na 3 pracoviskách, s tímom 3 ľudí\nSkrátil som čas náboru zo 45 na 28 dní prepracovaním procesu pohovorov\nZvýšil som retenciu o 15 % novým programom adaptácie a hodnotenia\nRiešim vzťahy so zamestnancami, sťažnosti a aktualizácie smerníc"
      },
      {
        "role": "HR generalista",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "jún 2016",
        "end": "jan. 2020",
        "current": false,
        "points": "Ročne som prijal viac ako 120 zamestnancov pre hotely a reštaurácie\nVykonával som kontroly miezd a prihlasovanie na benefity pre 400 zamestnancov\nRiešil som spory medzi zamestnancami a udržal fluktuáciu pod priemerom odvetvia"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Ľudské zdroje",
        "start": "2012",
        "end": "2016",
        "notes": "Certifikát SHRM-CP. Štúdium pracovného práva a organizačného správania."
      }
    ],
    "skills": "Nábor a adaptácia zamestnancov\nVzťahy so zamestnancami\nBenefity a mzdy\nPracovné právo\nRiadenie výkonnosti\nHRIS (Workday, BambooHR)",
    "languages": "Angličtina (plynule)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Pridružený právnik",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Pridružený právnik so 6 rokmi skúseností v obchodných sporoch a zmluvnom práve. Viedol som 40+ prípadov, v 8 som dosiahol skrátené rozsudky a pripravil som zmluvy v hodnote $25M. Prijatý do Illinoiskej advokátskej komory; zručný v právnom výskume, príprave dokumentov a poradenstve klientom.",
    "experience": [
      {
        "role": "Pridružený právnik",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "sep. 2020",
        "end": "",
        "current": true,
        "points": "Spravujem viac ako 40 prípadov obchodných sporov od podania po urovnanie\nVyhral som skrátené konanie v 8 prípadoch a ďalších 20 výhodne urovnal\nVypracúvam a vyjednávam zmluvy v hodnote až 25 mil. $\nRadím klientom osobne a písomne v oblasti rizík a stratégie"
      },
      {
        "role": "Súdny asistent",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "aug. 2019",
        "end": "aug. 2020",
        "current": false,
        "points": "Skúmal som judikatúru a vypracúval memorandá pre 2 sudcov\nKontroloval som návrhy a pripravoval zhrnutia pre viac ako 100 pojednávaní\nZúčastnil som sa pojednávaní a konferencií o urovnaní na občianskoprávnych oddeleniach"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Právo",
        "start": "2016",
        "end": "2019",
        "notes": "Prijatý do Illinoiskej advokátskej komory (2019). Právnický časopis, redaktor článkov."
      }
    ],
    "skills": "Obchodné spory\nVypracúvanie a vyjednávanie zmlúv\nPrávny výskum (Westlaw, LexisNexis)\nPoradenstvo klientom\nSvedecké výpovede a sprístupňovanie dôkazov\nSúdne podania a postupy",
    "languages": "Angličtina (plynule)",
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
    "summary": "Klinický farmaceut (PharmD) so 7 rokmi skúseností v nemocničnej a verejnej lekárni. Denne skontrolujem 100+ liekových príkazov, novým kontrolným protokolom som znížil nežiaduce liekové udalosti o 25 % a radím pacientom v bezpečnom používaní liekov. Licencia v Pensylvánii.",
    "experience": [
      {
        "role": "Klinický farmaceut",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "jan. 2020",
        "end": "",
        "current": true,
        "points": "Kontrolujem viac ako 100 ordinácií liekov denne z hľadiska bezpečnosti, dávkovania a interakcií\nZnížil som nežiaduce účinky liekov o 25 % novým protokolom dvojitej kontroly\nRadím lekárom a sestrám pri výbere liekov pre zložitých pacientov\nVediem nemocničné kolá antibiotického stewardshipu dvakrát týždenne"
      },
      {
        "role": "Farmaceut",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "júl 2018",
        "end": "dec. 2019",
        "current": false,
        "points": "Vydával som viac ako 200 receptov denne s nulovými chybami pri výdaji\nRadil som pacientom o nových liekoch, vedľajších účinkoch a skladovaní\nOčkoval som proti chrípke a meral krvný tlak"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmácia",
        "start": "2014",
        "end": "2018",
        "notes": "Licencovaný lekárnik (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Kontrola medikácie a bezpečnosť\nKlinická farmakológia\nPoradenstvo pre pacientov\nLekárenské systémy (Epic, PioneerRx)\nAntibiotický stewardship\nOčkovacie služby",
    "languages": "Angličtina (plynule)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Všeobecný zubný lekár",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Všeobecný zubný lekár (DDS) s 8 rokmi skúseností v rekonštrukčnej, kozmetickej a preventívnej stomatológii. Denne ošetrí viac ako 25 pacientov v praxi s 2,000 pacientmi, so skóre spokojnosti pacientov 98 %. Zručný v korunkách, implantátoch, koreňových kanálikoch a priehľadných zarovnávačoch.",
    "experience": [
      {
        "role": "Všeobecný zubný lekár",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Ošetrujem viac ako 25 pacientov denne: plomby, korunky, koreňové kanáliky a extrakcie\nUdržiavam skóre spokojnosti pacientov 98 % vo viac ako 1 200 hodnoteniach\nMesačne umiestňujem viac ako 15 implantátov a vediem prípady priehľadných vyrovnávačov\nDohliadam na 2 dentálnych hygienikov a 4 dentálnych asistentov"
      },
      {
        "role": "Pridružený zubný lekár",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "júl 2017",
        "end": "jan. 2019",
        "current": false,
        "points": "Poskytoval som všeobecnú stomatológiu v ambulancii s 1 500 pacientmi\nZaviedol som korunky v ten istý deň, čím som znížil opakované návštevy o 40 %\nRealizoval som osvetové návštevy škôl o zdraví detských zubov"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Stomatológia",
        "start": "2013",
        "end": "2017",
        "notes": "Licencovaný zubný lekár (Arizona). Certifikát Invisalign. Certifikát CPR/BLS."
      }
    ],
    "skills": "Záchovná stomatológia (korunky, plomby)\nOšetrenie koreňových kanálikov\nZubné implantáty\nPriehľadné vyrovnávače\nStarostlivosť o pacientov a komunikácia\nDigitálne röntgeny a CEREC",
    "languages": "Angličtina (plynule)",
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
    "summary": "Fyzioterapeut (DPT) so 6 rokmi skúseností v ortopedickej a športovej rehabilitácii. Denne ošetrím 12-15 pacientov, pričom 90 % z nich dosiahne svoje ciele v rámci plánovaných terapií. Ovládam manuálnu terapiu, predpisovanie cvičení a testovanie návratu k športu.",
    "experience": [
      {
        "role": "Fyzioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Ošetrujem 12-15 pacientov denne so športovými zraneniami, pooperačnou rehabilitáciou a bolesťou chrbta\n90 % pacientov dosiahne svoje ciele v rámci plánovaného počtu terapií\nNavrhujem testovanie návratu k športu, ktoré používajú 3 miestne tímy\nMentorujem 2 nových absolventov a dohliadam na praxe študentov"
      },
      {
        "role": "Fyzioterapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "aug. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Poskytoval som lôžkovú rehabilitáciu pacientom po operáciách a cievnych mozgových príhodách\nViedol som skupinové cvičenia pre viac ako 20 starších pacientov týždenne\nDokumentoval som pokrok v Epic a odovzdával oddeleniam"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fyzioterapia",
        "start": "2016",
        "end": "2019",
        "notes": "Licencovaný fyzioterapeut (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Ortopedická a športová rehabilitácia\nManuálna terapia\nPredpisovanie cvičení\nTestovanie návratu k športu\nVzdelávanie pacientov\nDokumentácia (Epic)",
    "languages": "Angličtina (plynule)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Šéfkuchár",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Šéfkuchár s 10 rokmi skúseností v kreolskej a modernej americkej kuchyni. Vediem brigádu 12 kuchárov v reštaurácii s 200 miestami, prísnejším objednávaním som znížil náklady na potraviny o 15 % a v roku 2025 som získal ocenenie „Najlepšie nové menu“ od mestského sprievodcu reštauráciami.",
    "experience": [
      {
        "role": "Šéfkuchár",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Vediem brigádu 12 kuchárov v reštaurácii s 200 miestami, ktorá obslúži viac ako 300 hostí za večer\nZnížil som náklady na potraviny o 15 % prísnejším objednávaním a sezónnym menu\nV roku 2025 som získal ocenenie „Najlepšie nové menu“ od mestského sprievodcu reštauráciami\nNavrhujem menu, školím kuchárov a vediem výdaj v piatok a sobotu"
      },
      {
        "role": "Zástupca šéfkuchára",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "jún 2017",
        "end": "dec. 2020",
        "current": false,
        "points": "Viedol som kuchyňu počas neprítomnosti šéfkuchára, s obsluhou 150 hostí za večer\nSpravoval som zásoby, objednávanie a vzťahy s dodávateľmi\nZaškolil som 8 kuchárov na linke a znížil fluktuáciu zamestnancov o tretinu"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diplom",
        "field": "Kulinárske umenie",
        "start": "2014",
        "end": "2016",
        "notes": "Certifikát ServSafe Food Protection Manager."
      }
    ],
    "skills": "Návrh menu a kalkulácie\nKreolská a moderná americká kuchyňa\nVedenie kuchyne (brigáda 12 kuchárov)\nBezpečnosť potravín (ServSafe)\nRiadenie dodávateľov\nBanketový a eventový catering",
    "languages": "Angličtina (plynule)\nŠpanielčina (plynule)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Policajt",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Policajt s 8 rokmi skúseností v hliadkovaní, komunitnej policajnej práci a vyšetrovaní. Reagujem na viac ako 30 výjazdov týždenne, s pochvalami za deeskaláciu a prácu s komunitou. Vyškolený v krízovej intervencii, prvej pomoci a písaní hlásení.",
    "experience": [
      {
        "role": "Policajt",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "jún 2019",
        "end": "",
        "current": true,
        "points": "Hliadkujem v obvode so 40 000 obyvateľmi a reagujem na viac ako 30 výjazdov týždenne\nZískal som 2 pochvaly za deeskaláciu a prácu s komunitou\nVyšetrujem krádeže a útoky a píšem hlásenia použité vo viac ako 50 trestných stíhaniach\nMentorujem 3 nových príslušníkov počas terénneho výcviku"
      },
      {
        "role": "Hliadkový policajt",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "aug. 2017",
        "end": "máj 2019",
        "current": false,
        "points": "Hliadkoval som na okresných cestách a reagoval na tiesňové volania\nDoručoval som súdne listiny a pomáhal pri prevoze väzňov\nAbsolvoval som výcvik krízovej intervencie a prvej pomoci"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certifikát",
        "field": "Bezpečnostné zložky",
        "start": "2017",
        "end": "2017",
        "notes": "Absolvent Ohio Peace Officer Training Academy. Vyškolený v tíme krízovej intervencie."
      }
    ],
    "skills": "Hliadkovanie a tiesňové zásahy\nKomunitná policajná práca\nKrízová intervencia a deeskalácia\nPísanie hlásení\nVyšetrovanie\nPrvá pomoc a KPR",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Hasič / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Hasič a EMT so 7 rokmi skúseností s hasením požiarov, záchranou a pohotovostnou zdravotnou pomocou. Zasahoval pri viac ako 900 výjazdoch vrátane požiarov budov, vyslobodzovania z vozidiel a zdravotných núdzových stavov. Výcvik HazMat a bezchybný bezpečnostný záznam.",
    "experience": [
      {
        "role": "Hasič / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar. 2020",
        "end": "",
        "current": true,
        "points": "Reagujem na viac ako 900 hasičských, záchranných a zdravotníckych výjazdov v obvode s 3 stanicami\nPoskytujem urgentnú zdravotnú starostlivosť ako certifikovaný záchranár pri 60 % výjazdov\nVyškolený na HazMat; vediem dekontamináciu pri chemických incidentoch\nŠkolím nových príslušníkov v manipulácii s hadicami, rebríkmi a pátracích technikách"
      },
      {
        "role": "Dobrovoľný hasič",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "jún 2018",
        "end": "feb. 2020",
        "current": false,
        "points": "Zasahoval som ako dobrovoľník pri požiaroch v prírode a budov\nAbsolvoval som výcvik Hasič I a II a EMT-Basic\nPomáhal som viesť komunitné prednášky o požiarnej bezpečnosti na školách"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certifikát",
        "field": "Požiarna veda",
        "start": "2017",
        "end": "2018",
        "notes": "Hasič I a II. Certifikát EMT-Basic. Vyškolený na operácie HazMat."
      }
    ],
    "skills": "Hasenie požiarov a záchrana\nUrgentná zdravotná starostlivosť (EMT)\nOperácie HazMat\nRebríky, hadice a ventilácia\nPožiarna bezpečnosť v komunite\nTímová práca pod tlakom",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Licencovaný inštalatér",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Licencovaný inštalatérsky majster s 11 rokmi skúseností v rezidenčnom a komerčnom inštalatérstve. Ročne dokončil viac ako 600 zákaziek, od hrubých rozvodov po inštalácie kotlov, s mierou opráv pri prvej návšteve 98 %. Zručný v montáži potrubí, čistení odpadov a dodržiavaní predpisov.",
    "experience": [
      {
        "role": "Inštalatérsky majster",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "jan. 2019",
        "end": "",
        "current": true,
        "points": "Dokončujem viac ako 600 obytných a komerčných zákaziek ročne\nInštalujem kotly, ohrievače vody a kompletné hrubé rozvody kúpeľní\nUdržiavam 98 % mieru opravy pri prvej návšteve pri servisných výjazdoch\nDohliadam na 3 učňov a schvaľujem ich prácu"
      },
      {
        "role": "Inštalatér – tovariš",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "jún 2014",
        "end": "dec. 2018",
        "current": false,
        "points": "Realizoval som inštalácie v novostavbách pre viac ako 40 domov ročne\nČistil som odpady a opravoval úniky v domácnostiach a reštauráciách\nNaučil som sa plynové inštalácie a prevenciu spätného toku"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certifikát",
        "field": "Inštalatérska technológia",
        "start": "2013",
        "end": "2014",
        "notes": "Licencia inštalatérskeho majstra (Tennessee). Certifikát prevencie spätného toku."
      }
    ],
    "skills": "Obytné a komerčné inštalácie\nPotrubné práce a spájkovanie\nČistenie odpadov a kamerová inšpekcia\nInštalácia kotlov a ohrievačov vody\nPlynové inštalácie\nDodržiavanie inštalatérskych predpisov",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Tesár – tovariš",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Tesár tovariš s 9 rokmi skúseností s rámami, dokončovacími prácami a skriňami na mieru. Postavil rámy viac ako 30 domov a namontoval kuchyne vo viac ako 60 domácnostiach, s povesťou presných mier a čistých povrchových úprav. Zručný v čítaní plánov a práci podľa predpisov.",
    "experience": [
      {
        "role": "Tesár – tovariš",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Staviam kostry viac ako 30 domov a montujem kuchyne vo viac ako 60 domácnostiach\nVyrábam nábytok a obklady na mieru s toleranciou 1/16 palca\nČítam a dodržiavam architektonické plány a upozorňujem na chyby skôr, než spôsobia náklady\nŠkolím 2 učňov v technikách kostier a dokončovacích prác"
      },
      {
        "role": "Tesársky učeň",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "jún 2016",
        "end": "jan. 2019",
        "current": false,
        "points": "Pomáhal som pri kostrách, sadrokartóne a podlahách pri rekonštrukciách\nNaučil som sa bezpečne používať píly, frézy a klincovačky\nAbsolvoval som 8 000 hodín učňovskej praxe a zložil tovaryšskú skúšku"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certifikát",
        "field": "Tesárstvo",
        "start": "2015",
        "end": "2016",
        "notes": "Tesár tovariš. Certifikát OSHA 10."
      }
    ],
    "skills": "Práce na kostrách a konštrukciách\nDokončovacie tesárstvo a obklady\nNábytok na mieru\nČítanie architektonických plánov\nElektrické náradie a bezpečnosť\nSadrokartón a podlahy",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Učiteľ strednej školy (matematika)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Učiteľ strednej školy s 8 rokmi skúseností s výučbou matematiky v ročníkoch 9-12. Zvýšil som úspešnosť v algebre zo 64 % na 83 % a vediem matematický tím, ktorý 2-krát postúpil do štátneho finále. Zručný v diferencovanej výučbe, príprave na skúšky a komunikácii s rodičmi.",
    "experience": [
      {
        "role": "Učiteľ matematiky (9. – 12. ročník)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "aug. 2019",
        "end": "",
        "current": true,
        "points": "Učím algebru, geometriu a základy diferenciálneho počtu 120 žiakov v 5 triedach\nZvýšil som úspešnosť v algebre zo 64 % na 83 % za 3 roky\nVediem matematický tím, ktorý 2-krát postúpil do štátneho finále\nVediem poobedné doučovanie pre 30 žiakov týždenne"
      },
      {
        "role": "Učiteľ matematiky (9. – 10. ročník)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "aug. 2017",
        "end": "jún 2019",
        "current": false,
        "points": "Učil som algebru a geometriu 100 žiakov ročne\nZaviedol som týždenné kvízy, ktoré znížili medzery v domácich úlohách na polovicu\nOrganizoval som prvý matematický veľtrh školy s 200 žiakmi"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Vzdelávanie v matematike",
        "start": "2013",
        "end": "2017",
        "notes": "Štátna učiteľská licencia (New Hampshire, ročníky 7-12, matematika)."
      }
    ],
    "skills": "Výučba matematiky (algebra až základy diferenciálneho počtu)\nPríprava na skúšky\nDiferencovaná výučba\nRiadenie triedy\nKomunikácia s rodičmi\nGoogle Classroom a Desmos",
    "languages": "Angličtina (plynule)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Učiteľ materskej školy",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Učiteľ materskej školy so 6 rokmi skúseností so starostlivosťou o deti vo veku 3-5 rokov. Zručný v učení hrou, usmerňovaní správania a komunikácii s rodičmi. Vytvoril som fonický program, ktorý zvýšil výsledky pripravenosti na školu v celej mojej triede.",
    "experience": [
      {
        "role": "Učiteľ materskej školy",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "aug. 2020",
        "end": "",
        "current": true,
        "points": "Učím a starám sa o triedu 18 detí vo veku 3-5 rokov\nVytvoril som fonický program, ktorý zvýšil výsledky pripravenosti na školu v celej triede\nPlánujem týždenné témy, tvorivé dielne a hry vonku\nZdieľam s rodičmi každodenné novinky a správy o pokroku za každé obdobie"
      },
      {
        "role": "Asistent učiteľa materskej školy",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "jún 2018",
        "end": "júl 2020",
        "current": false,
        "points": "Pomáhal som vedúcemu učiteľovi s triedou 20 detí\nKaždý deň som viedol čítanie rozprávok, piesne a výtvarné aktivity\nViedol som bezpečnostné a hygienické záznamy podľa štátnych noriem"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Pridružený titul (Associate Degree)",
        "field": "Vzdelávanie v ranom detstve",
        "start": "2016",
        "end": "2018",
        "notes": "Osvedčenie Child Development Associate (CDA). Certifikáty prvej pomoci a CPR."
      }
    ],
    "skills": "Učenie hrou\nUsmerňovanie správania\nFonika a raná gramotnosť\nKomunikácia s rodičmi\nBezpečnosť v triede\nPlánovanie výtvarných a tvorivých aktivít",
    "languages": "Angličtina (plynule)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Sociálny pracovník pre deti a rodiny",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Licencovaný sociálny pracovník so 7 rokmi skúseností s podporou detí a rodín. Spravuje počet prípadov 25 rodín, koordinuje služby naprieč školami a poskytovateľmi zdravotnej starostlivosti a vypracúva súdne správy, na ktoré sa sudcovia spoliehajú. Zručný v posudzovaní, krízovej podpore a ochrane.",
    "experience": [
      {
        "role": "Sociálny pracovník pre deti a rodiny",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "jan. 2020",
        "end": "",
        "current": true,
        "points": "Spravujem agendu 25 rodín a týždenne navštevujem domácnosti a školy\nVypĺňam súdne správy a vypovedám na rodinnom súde\nKoordinujem podporu v bývaní, zdraví a škole pre zraniteľné rodiny\nNovým systémom triáže som skrátil čakaciu dobu na posúdenie o 20 %"
      },
      {
        "role": "Prípadový pracovník",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "júl 2018",
        "end": "dec. 2019",
        "current": false,
        "points": "Podporoval som viac ako 40 rodín v dočasnom bývaní s dávkami a odporúčaniami\nViedol som týždenné workshopy o rodičovstve a hospodárení s peniazmi\nUdržiaval som poznámky k prípadom presné pre audity a správy o financovaní"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Sociálna práca",
        "start": "2016",
        "end": "2018",
        "notes": "Licencovaný sociálny pracovník (Ohio). Predmety zo starostlivosti o deti a rodinných systémov."
      }
    ],
    "skills": "Správa prípadov (25 rodín)\nOchrana detí\nSprávy pre rodinný súd\nKrízová podpora\nKoordinácia viacerých inštitúcií\nOdporúčania na dávky a bývanie",
    "languages": "Angličtina (plynule)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Právny asistent",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Právny asistent so 6 rokmi skúseností v podpore sporovej agendy a firemných podaniach. Spravujem sprístupňovanie dôkazov pre viac ako 30 prípadov, vypracúvam podania a zmluvy a dodržiavam lehoty podaní so 100 % včasnosťou. Ovládam Westlaw, e-discovery a softvér na správu prípadov.",
    "experience": [
      {
        "role": "Právny asistent",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Spravujem sprístupňovanie dôkazov pre viac ako 30 sporových prípadov a kontrolujem viac ako 10 000 dokumentov\nVypracúvam podania, návrhy a zmluvy na kontrolu právnikom\nUdržiavam 100 % včasnosť pri súdnych podaniach a lehotách\nKoordinujem svedkov a pripravujem spisy na pojednávanie"
      },
      {
        "role": "Právny asistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "aug. 2019",
        "end": "jan. 2021",
        "current": false,
        "points": "Príjmové rozhovory s viac ako 20 klientmi týždenne\nPripravoval som formuláre a podania pre bytové a rodinné veci\nPrekladal som právne dokumenty pre španielsky hovoriacich klientov"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Pridružený titul (Associate Degree)",
        "field": "Štúdium pre právnych asistentov",
        "start": "2017",
        "end": "2019",
        "notes": "Certifikovaný právny asistent NALA (CP). Program schválený ABA."
      }
    ],
    "skills": "Podpora sporovej agendy a sprístupňovanie dôkazov\nVypracúvanie právnych dokumentov\nE-discovery (Relativity)\nSpráva prípadov (Clio)\nSúdne podania a lehoty\nPrávny výskum (Westlaw)",
    "languages": "Angličtina (plynule)\nŠpanielčina (plynule)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Účtovný referent",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Účtovný referent s 5 rokmi skúseností v záväzkoch, fakturácii a odsúhlasovaní bankových výpisov. Mesačne spracujem 300+ faktúr s presnosťou 99.8 % a udržiavam účtovné knihy čisté pre mesačnú uzávierku. Zručný v QuickBooks, Exceli a podpore miezd.",
    "experience": [
      {
        "role": "Účtovný referent",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Spracúvam viac ako 300 dodávateľských faktúr mesačne s presnosťou 99,8 %\nTýždenne odsúhlasujem 6 bankových účtov a rozdiely hlásim v ten istý deň\nPripravujem mzdové podklady pre 45 zamestnancov a vymáham oneskorené platby zákazníkov\nUdržiavam záznamy upratané pre koncoročný audit, s nulovými nálezmi"
      },
      {
        "role": "Účtovný asistent",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "jún 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Denne som zadával predajné faktúry a pokladničné doklady do QuickBooks\nOdpovedal som na otázky dodávateľov o platbách telefonicky a e-mailom\nZakladal som dokumenty a udržiaval archív aktuálny"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certifikát",
        "field": "Vedenie účtovníctva",
        "start": "2018",
        "end": "2019",
        "notes": "Certifikovaný používateľ QuickBooks."
      }
    ],
    "skills": "Záväzky a pohľadávky\nOdsúhlasovanie bankových účtov\nFakturácia (viac ako 300 mesačne)\nQuickBooks a Excel\nPodpora miezd\nZadávanie údajov (65 slov za minútu)",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Administratívny asistent",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Administratívny asistent so 6 rokmi skúseností s bezproblémovým chodom kancelárií. Spravujem kalendáre pre 4 manažérov, organizujem cesty a stretnutia a denne vybavím 100+ e-mailov. Som známy presnosťou, diskrétnosťou a pokojom pod tlakom termínov.",
    "experience": [
      {
        "role": "Administratívny asistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Spravujem kalendáre, cesty a stretnutia pre 4 seniorských manažérov\nVybavujem viac ako 100 e-mailov denne, píšem návrhy odpovedí a označujem priority\nPripravujem podklady pre predstavenstvo a zapisujem zápisnice na mesačných schôdzach\nSpravujem kancelárske potreby a objednávky dodávateľov, čím som znížil náklady o 12 %"
      },
      {
        "role": "Recepčná",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "aug. 2019",
        "end": "dec. 2020",
        "current": false,
        "points": "Prijímal som viac ako 60 pacientov denne a spravoval knihu objednávok\nOdpovedal som na telefóny a vybavoval otázky o poistení\nUdržiaval som záznamy pacientov presné a dôverné"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Pridružený titul (Associate Degree)",
        "field": "Kancelárska administratíva",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Správa kalendára a ciest\nE-mail a korešpondencia\nZápisnice zo stretnutí\nMicrosoft Office (Word, Excel, Outlook)\nZadávanie údajov (70 slov za minútu)\nKancelárske potreby a dodávatelia",
    "languages": "Angličtina (plynule)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankový pokladník",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankový pokladník so 4 rokmi skúseností, denne obslúžim 80+ zákazníkov s presnosťou a starostlivosťou. Pokladničná zásuvka zladená na cent presne počas 3 rokov, bez jediného manka. Zručný vo vkladoch, výberoch, kontrolách podvodov a odporúčaní správnych produktov zákazníkom.",
    "experience": [
      {
        "role": "Bankový pokladník",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Obsluhujem viac ako 80 zákazníkov denne: vklady, výbery, platby a prevody\nPokladňa vyrovnaná na cent presne 3 roky s nulovými mankami\nOdhalil a zastavil som 12 pokusov o podvod, čím som zákazníkom ušetril viac ako 90 000 $\nOdporúčam zákazníkom sporiace a úverové produkty a štvrťročne plním ciele odporúčaní"
      },
      {
        "role": "Asistent zákazníckej podpory",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "jún 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Otváral som nové účty a vydával debetné karty pre členov\nOdpovedal som na telefonické otázky o zostatkoch a výpisoch\nPomáhal som členom nastaviť online a mobilné bankovníctvo"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Pridružený titul (Associate Degree)",
        "field": "Podnikanie",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Práca s hotovosťou a jej vyrovnávanie\nVklady, výbery a platby\nOdhaľovanie podvodov\nZákaznícky servis\nBankový softvér (Fiserv)\nOdporúčania produktov",
    "languages": "Angličtina (plynule)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Obchodný manažér",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Obchodný manažér s 10 rokmi skúseností s vedením tímov do 15 zástupcov. Zvýšil som regionálne tržby zo 4 mil. $ na 7,5 mil. $ za 3 roky, zvýšil mieru úspešnosti z 22 % na 34 % a lepším koučingom a adaptáciou znížil fluktuáciu zástupcov na polovicu.",
    "experience": [
      {
        "role": "Regionálny obchodný manažér",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Vediem tím 15 obchodných zástupcov po Texase a Oklahome\nZvýšil som regionálne tržby zo 4 mil. $ na 7,5 mil. $ za 3 roky\nZvýšil som mieru úspešnosti z 22 % na 34 % lepším koučingom a kontrolami lievika\nZnížil som fluktuáciu zástupcov na polovicu novým adaptačným programom"
      },
      {
        "role": "Obchodný zástupca",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "jún 2015",
        "end": "dec. 2020",
        "current": false,
        "points": "Predával som priemyselné zariadenia viac ako 80 klientom a 5 rokov po sebe plnil kvótu\nNajlepší zástupca v regióne 3 roky po sebe\nVybudoval som sieť odporúčaní, ktorá priniesla 25 % nového obchodu"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kurzy v riadení predaja a vyjednávaní."
      }
    ],
    "skills": "Vedenie obchodného tímu (15 zástupcov)\nRast tržieb a prognózovanie\nSpráva obchodného lievika (Salesforce)\nKoučing a adaptácia\nVyjednávanie\nPlánovanie teritória",
    "languages": "Angličtina (plynule)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Stavebný manažér",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Stavebný manažér s 12 rokmi skúseností s realizáciou komerčných a rezidenčných projektov v hodnote až $12M. Dokončil som 20+ projektov s 95 % dochvíľnosťou, bez úrazov so stratou pracovného času na mojich stavbách a s rozpočtami v rámci 3 %. Zručný v plánovaní, riadení subdodávateľov a bezpečnosti.",
    "experience": [
      {
        "role": "Stavebný manažér",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Dodávam komerčné a obytné projekty v hodnote až 12 mil. $\nDokončil som viac ako 20 projektov s 95 % mierou včasnosti a rozpočtami v rámci 3 %\nRiadim viac ako 30 subdodávateľov a 50 pracovníkov na 3 aktívnych pracoviskách\nNulové úrazy so stratou času na všetkých pracoviskách za 4 roky"
      },
      {
        "role": "Stavbyvedúci",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "jún 2013",
        "end": "jan. 2020",
        "current": false,
        "points": "Riadil som každodennú prevádzku staveniska pri kancelárskych a obchodných stavbách\nKoordinoval som dodávky, inšpekcie a harmonogramy subdodávateľov\nUdržiaval som bezpečnostné záznamy čisté a prešiel každou inšpekciou OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Pozemné staviteľstvo",
        "start": "2009",
        "end": "2013",
        "notes": "Certifikát OSHA 30. Kandidát na CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Harmonogramy projektov (MS Project, Procore)\nKontrola rozpočtu\nRiadenie subdodávateľov\nBezpečnosť na stavenisku (OSHA 30)\nČítanie plánov\nReporting pre klientov",
    "languages": "Angličtina (plynule)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certifikovaný zdravotnícky asistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certifikovaný zdravotnícky asistent s 5 rokmi skúseností v rodinnej praxi a urgentnej starostlivosti. Denne prijmem 25+ pacientov, meriam vitálne funkcie, odoberám krv a spravujem recepciu so skóre spokojnosti pacientov 97 %. Zručný v EHR, odbere krvi a overovaní poistenia.",
    "experience": [
      {
        "role": "Certifikovaný zdravotnícky asistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Prijímam viac ako 25 pacientov denne: životné funkcie, anamnézy a príprava na vyšetrenie\nOdoberám krv a robím základné laboratórne testy s 99 % úspešnosťou vpichu na prvý pokus\nSpravujem recepciu, plánovanie a kontroly poistenia\nUdržiavam skóre spokojnosti pacientov 97 % vo viac ako 800 prieskumoch"
      },
      {
        "role": "Zdravotnícky asistent",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "aug. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Vykonával som triáž pacientov bez objednania a pomáhal lekárom pri menších zákrokoch\nOčkoval som a zabezpečoval odber vzoriek\nUdržiaval som vyšetrovne zásobené, čisté a pripravené medzi pacientmi"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certifikát",
        "field": "Zdravotnícka asistencia",
        "start": "2018",
        "end": "2019",
        "notes": "Certifikovaný zdravotnícky asistent (CMA, AAMA). Certifikát BLS. Vyškolený v odbere krvi."
      }
    ],
    "skills": "Príjem pacientov a meranie životných funkcií\nOdber krvi\nEHR (eClinicalWorks)\nOčkovania\nOverovanie poistenia\nSpráva recepcie",
    "languages": "Angličtina (plynule)\nŠpanielčina (plynule)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Študent",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Motivovaný maturant s výbornými známkami a skúsenosťami z brigád. Rýchlo sa učím, som spoľahlivý a dobre vychádzam s ľuďmi. Hľadám prvú pozíciu na plný úväzok alebo brigádu popri vysokej škole.",
    "experience": [
      {
        "role": "Predavač na čiastočný úväzok",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "sep. 2024",
        "end": "",
        "current": true,
        "points": "Obsluhujem viac ako 50 zákazníkov za zmenu cez víkendy a po škole\nPracujem s hotovosťou, dopĺňam regály a udržiavam výklady upratané\nS dôverou otváram predajňu v sobotu ráno"
      },
      {
        "role": "Dobrovoľný doučovateľ",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "jan. 2024",
        "end": "jún 2025",
        "current": false,
        "points": "Doučoval som mladších žiakov matematiku dvakrát týždenne\nPomáhal som organizovať letný čitateľský program pre 40 detí"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Maturitné vysvedčenie",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3,6. Čestná listina, 3 roky. Kapitán debatného tímu."
      }
    ],
    "skills": "Zákaznícky servis\nPráca s hotovosťou\nTímová práca\nRiadenie času\nMicrosoft Office\nVerejné vystupovanie (debatný tím)",
    "languages": "Angličtina (plynule)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Čerstvý absolvent \u2014 Obchodná administratíva",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Čerstvý absolvent obchodnej administratívy so skúsenosťami zo stáží v marketingu a prevádzke. Organizoval som univerzitnú podnikateľskú súťaž s 200 účastníkmi a absolvoval 6-mesačnú stáž, počas ktorej som skrátil čas reportingu na polovicu. Túžim začať kariéru na plný úväzok a rýchlo sa učiť.",
    "experience": [
      {
        "role": "Marketingový stážista",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "jan. 2025",
        "end": "jún 2025",
        "current": false,
        "points": "Spravoval som sociálne účty spoločnosti a zvýšil počet sledovateľov z 2 000 na 6 500\nVytvoril som reportingový dashboard, ktorý skrátil týždenný reporting na polovicu\nNapísal som 20 blogových článkov, ktoré priniesli viac ako 15 000 prečítaní"
      },
      {
        "role": "Vedúci dobrovoľníkov na podujatiach",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "sep. 2024",
        "end": "máj 2025",
        "current": false,
        "points": "Organizoval som podnikateľskú súťaž s 200 účastníkmi a 12 porotcami\nSpravoval som rozpočet 5 000 $ a tím 8 dobrovoľníkov"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Obchodná administratíva",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3,5. Zoznam dekana, 2 roky. Záverečný projekt o marketingu malých podnikov."
      }
    ],
    "skills": "Marketing na sociálnych sieťach\nExcel a Google Sheets\nPrezentačné zručnosti\nOrganizácia podujatí\nTímová práca\nZákladná analýza dát",
    "languages": "Angličtina (plynule)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior marketingový špecialista",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior marketingový špecialista s 2 rokmi skúseností v obsahu, e-maile a sociálnych sieťach. Rozšíril klientsky newsletter z 1,000 na 4,000 odberateľov a vedie kampane s priemernou mierou otvorenia 22 %. Pripravený na väčšiu zodpovednosť a väčšie portfólio klientov.",
    "experience": [
      {
        "role": "Junior marketingový špecialista",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "júl 2024",
        "end": "",
        "current": true,
        "points": "Zvýšil som klientsky newsletter z 1 000 na 4 000 odberateľov za 14 mesiacov\nPíšem a plánujem 12 príspevkov na sociálne siete týždenne pre 4 klientov\nVediem e-mailové kampane s priemernou mierou otvorenia 22 %\nHlásim výsledky kampaní klientom mesačne"
      },
      {
        "role": "Marketingový stážista",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "jan. 2024",
        "end": "jún 2024",
        "current": false,
        "points": "Napísal som popisy produktov pre viac ako 200 položiek na webe spoločnosti\nPomáhal som viesť jarnú výpredajovú kampaň, ktorá zvýšila online objednávky o 15 %"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Komunikácie",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3,4. Predmety z digitálneho marketingu a písania pre médiá."
      }
    ],
    "skills": "Písanie obsahu\nE-mailový marketing (Mailchimp)\nSpráva sociálnych sietí\nGoogle Analytics\nCanva\nReporting pre klientov",
    "languages": "Angličtina (plynule)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Prevádzkový supervízor",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Prevádzkový supervízor s 8 rokmi skúseností s riadením skladových tímov 20-30 ľudí. Znížil som chybovosť pri vychystávaní o 30 %, zvýšil včasnú expedíciu z 90 % na 97 % a zaškolil 15 nových zamestnancov. Pripravený na pozíciu prevádzkového manažéra s väčšou prevádzkou a rozpočtom.",
    "experience": [
      {
        "role": "Prevádzkový supervízor",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Dohliadam na 25 skladníkov v 2 zmenách v areáli s rozlohou 90 000 štvorcových stôp\nZnížil som chybovosť pri vychystávaní o 30 % novými kontrolnými rutinami a skenovaním čiarových kódov\nZvýšil som včasnú expedíciu z 90 % na 97 % za 2 roky\nZaškolil som 15 nových zamestnancov a 3 povýšil na vedúcich tímov"
      },
      {
        "role": "Vedúci tímu",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "jún 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Viedol som tím 10 vychystávačov a baličov na nočnej zmene\nZaviedol som rozpis, ktorý znížil nadčasy o 20 % bez zmeškania termínov\nViedol som bezpečnostné školenia a udržal tím 2 roky bez úrazu"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Riadenie dodávateľského reťazca",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Vedenie tímu (25 zamestnancov)\nSkladová prevádzka\nZlepšovanie procesov\nRiadenie bezpečnosti\nKontrola zásob\nWMS a Excel",
    "languages": "Angličtina (plynule)\nHindčina (konverzačná úroveň)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Seniorský projektový manažér",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Seniorský projektový manažér so 14 rokmi skúseností s dodávaním softvérových projektov v hodnote až 8 mil. $. Viedol som viac ako 30 projektov s 92 % mierou včasného dodania, vybudoval PMO od nuly a mentoroval 10 projektových manažérov. Známy pokojným dodávaním pod tlakom a úprimným reportingom vedeniu.",
    "experience": [
      {
        "role": "Seniorský projektový manažér",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "jan. 2019",
        "end": "",
        "current": true,
        "points": "Dodávam softvérové projekty v hodnote až 8 mil. $ s 92 % mierou včasnosti\nVybudoval som firemné PMO od nuly: šablóny, reporting a riadenie\nMentorujem 10 projektových manažérov a vediem mesačnú komunitu PM\nReportujem priamo technickému riaditeľovi o programe so 40 ľuďmi"
      },
      {
        "role": "Projektový manažér",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "jún 2012",
        "end": "dec. 2018",
        "current": false,
        "points": "Riadil som viac ako 20 projektov pre maloobchodných a zdravotníckych klientov\nZaviedol som agilné postupy, ktoré skrátili čas dodania o 25 %\nZvýšil som ročné tržby 2 kľúčových klientov z 500 tis. $ na 2 mil. $"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informačné systémy",
        "start": "2008",
        "end": "2012",
        "notes": "Certifikát PMP (2015). Certifikovaný ScrumMaster. Štúdium MBA (2018-2019, nedokončené)."
      }
    ],
    "skills": "Realizácia programov a projektov\nVybudovanie a riadenie PMO\nAgile a Waterfall\nKontrola rozpočtu (8 mil. $)\nReporting pre vedenie\nMentoring tímu",
    "languages": "Angličtina (plynule)\nŠpanielčina (konverzačná úroveň)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Prevádzkový riaditeľ",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Prevádzkový riaditeľ s 18 rokmi skúseností s rozširovaním prevádzok maloobchodných a logistických spoločností. Zväčšil som prevádzku z 200 ľudí na 900 ľudí na 6 pracoviskách, zvýšil maržu EBITDA z 8 % na 14 % a viedol 2 akvizície. Skúsenosti s vykazovaním pre predstavenstvo a vzťahmi s investormi.",
    "experience": [
      {
        "role": "Prevádzkový riaditeľ",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Vediem prevádzku pre 900 ľudí na 6 pracoviskách s rozpočtom 180 mil. $\nZvýšil som maržu EBITDA z 8 % na 14 % za 3 roky\nViedol som 2 akvizície a integroval oba tímy do 6 mesiacov\nReportujem predstavenstvu mesačne o prevádzke, rizikách a raste"
      },
      {
        "role": "Viceprezident pre prevádzku",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "jún 2014",
        "end": "dec. 2020",
        "current": false,
        "points": "Rozšíril som prevádzku z 200 na 600 ľudí na 4 pracoviskách\nOtvoril som 3 distribučné centrá načas a pod rozpočtom\nVybudoval som vedúci tím, ktorý podnik vedie dodnes"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Obchodná administratíva",
        "start": "2010",
        "end": "2012",
        "notes": "BS v odbore ekonómia, NYU (2006). Kurz správy a riadenia spoločností (2020)."
      }
    ],
    "skills": "Prevádzka vo veľkom rozsahu (900 ľudí)\nZodpovednosť za výkaz ziskov a strát (180 mil. $)\nFúzie a akvizície\nReporting predstavenstvu\nStratégia rastu\nBudovanie vedúceho tímu",
    "languages": "Angličtina (plynule)",
    "template": "executive"
  }
};
});
