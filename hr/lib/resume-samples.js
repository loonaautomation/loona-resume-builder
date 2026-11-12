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
      "title": "Medicinska sestra",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Medicinska sestra sa 6 godina iskustva na medicinsko-kirurškim i telemetrijskim odjelima. Vješta u procjeni pacijenata, IV terapiji, primjeni lijekova i elektroničkim zdravstvenim kartonima. Poznata po smirenoj i jasnoj komunikaciji s pacijentima i obiteljima u situacijama pod velikim pritiskom.",
    "experience": [
      {
        "role": "Medicinska sestra",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "lip 2021.",
        "end": "",
        "current": true,
        "points": "Brinem o 5-6 pacijenata po smjeni na medicinsko-kirurškom odjelu s 32 kreveta, uključujući procjenu, davanje lijekova i njegu rana\nObučavam i mentoriram 4 nove diplomirane medicinske sestre, skraćujući njihovo uhodavanje za 2 tjedna\nSmanjio pogreške u lijekovima na odjelu za 18% uvođenjem rutine dvostruke provjere pri primopredaji\nSvu njegu točno dokumentiram u Epic elektroničkim zdravstvenim kartonima"
      },
      {
        "role": "Medicinska sestra na odjelu",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "kol 2019.",
        "end": "svi 2021.",
        "current": false,
        "points": "Vodio trijažu za 40+ pacijenata bez najave dnevno, dajući prednost hitnim slučajevima za skrb istog dana\nDavao cjepiva i provodio zdravstvene preglede na mjesečnim događajima za zajednicu\nKoordinirao upućivanje specijalistima i pratio rezultate pretraga"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Sestrinstvo",
        "start": "2015",
        "end": "2019",
        "notes": "Licenca medicinske sestre (Texas). Certificiran za BLS i ACLS."
      }
    ],
    "skills": "Procjena pacijenata\nIV terapija i davanje lijekova\nElektronički zdravstveni kartoni (Epic)\nTelemetrijski nadzor\nEdukacija pacijenata i obitelji\nKontrola infekcija",
    "languages": "Engleski (tečno)\nŠpanjolski (konverzacijski)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Programer softvera",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Programer softvera s 5 godina iskustva u izradi web aplikacija u Pythonu i JavaScriptu. Isporučio značajke koje koristi više od 200,000 korisnika, smanjio vrijeme odziva API-ja za 40% i vodio migraciju monolita na mikroservise. Jak u testiranju, pregledu koda i jasnoj dokumentaciji.",
    "experience": [
      {
        "role": "Programer softvera",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "ožu 2022.",
        "end": "",
        "current": true,
        "points": "Izrađujem i održavam korisničke web značajke u Pythonu (Django) i Reactu, za 200,000+ korisnika\nSkratio prosječno vrijeme odziva API-ja s 850 ms na 500 ms dodavanjem predmemorije i popravljanjem sporih upita\nVodio migraciju usluge naplate na mikroservise bez zastoja\nPregledavam 10+ zahtjeva za povlačenje tjedno i mentoriram 2 mlađa programera"
      },
      {
        "role": "Mlađi programer",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "srp 2020.",
        "end": "velj 2022.",
        "current": false,
        "points": "Izradio interne nadzorne ploče u JavaScriptu koje su zamijenile ručne proračunske tablice za 3 tima\nPisao automatizirane testove koji su podigli pokrivenost s 45% na 78%\nPopravio 120+ pogrešaka u proizvodu u prvoj godini"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Računarstvo",
        "start": "2016",
        "end": "2020",
        "notes": "Kolegiji iz baza podataka, algoritama i operativnih sustava."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript i React\nPostgreSQL i Redis\nREST API-ji i mikroservisi\nGit i CI/CD\nAutomatizirano testiranje (pytest, Jest)",
    "languages": "Engleski (tečno)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Učitelj razredne nastave",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Učitelj razredne nastave sa 7 godina iskustva u poučavanju razreda 3-5. Vješt u diferenciranoj nastavi, upravljanju razredom i komunikaciji s roditeljima. Podigao čitateljsku sposobnost u svom razredu s 58% na 81% u dvije školske godine.",
    "experience": [
      {
        "role": "Učitelj razredne nastave (4. razred)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "kol 2020.",
        "end": "",
        "current": true,
        "points": "Poučavam čitanje, matematiku i prirodu i društvo razred od 26 učenika, uključujući 5 s individualnim planovima učenja\nPodigao razinu čitanja razreda s 58% na 81% u dvije godine kroz vođene čitateljske skupine\nVodim tjedni bilten za roditelje i tromjesečne sastanke o napretku za svaku obitelj\nVodim školski čitateljski klub za 40 učenika od 3. do 5. razreda"
      },
      {
        "role": "Učitelj razredne nastave (3. razred)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "kol 2018.",
        "end": "lip 2020.",
        "current": false,
        "points": "Planirao i održavao svakodnevnu nastavu za 24 učenika iz svih temeljnih predmeta\nUveo rutine ponašanja koje su prepolovile ometanja u razredu\nOrganizirao sajam znanosti godišta sa 120 učenika i 80 roditelja"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Razredna nastava",
        "start": "2014",
        "end": "2018",
        "notes": "Državna učiteljska licenca (Ohio, razredi K-5). Ovlast za čitanje."
      }
    ],
    "skills": "Diferencirana nastava\nUpravljanje razredom\nVođene čitateljske skupine\nKomunikacija s roditeljima\nPlaniranje nastave\nGoogle Classroom",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Viši računovođa",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA s 8 godina iskustva u zaključenju mjeseca, financijskom izvještavanju i internoj reviziji. Zatvorio knjige 3 dana brže ponovnom izgradnjom procesa usklađivanja i pronašao $240,000 nadoknadivih preplata u jednoj revizijskoj godini. Jak u Excelu, QuickBooksu i ERP sustavima.",
    "experience": [
      {
        "role": "Viši računovođa",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Vodim zatvaranje mjeseca za poslovnu jedinicu od $40M, završavajući 3 dana brže nakon preuređenja usklađivanja\nPripremam mjesečne financijske izvještaje i izvješća o odstupanjima za više rukovodstvo\nPronašao $240,000 nadoknadivih preplata dobavljačima tijekom interne revizije 2024.\nNadgledam 2 računovođe i pregledavam njihove dnevničke unose"
      },
      {
        "role": "Računovođa",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "lip 2017.",
        "end": "pro 2020.",
        "current": false,
        "points": "Pripremao porezne prijave i financijske izvještaje za 25 klijenata malih poduzeća\nPomagao u revizijama 8 klijenata, testirajući kontrole i dokumentirajući nalaze\nAutomatizirao registar dugotrajne imovine u Excelu, uštedjevši 6 sati mjesečno"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Računovodstvo",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Član AICPA-e."
      }
    ],
    "skills": "Zatvaranje mjeseca i usklađivanja\nFinancijsko izvještavanje i analiza odstupanja\nInterna revizija\nExcel (zaokretne tablice, VLOOKUP)\nQuickBooks i SAP\nPriprema poreznih prijava",
    "languages": "Engleski (tečno)\nMandarinski (konverzacijski)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Vozač kamiona CDL Class A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Vozač CDL Class A s 9 godina iskustva u dugolinijskom i regionalnom prijevozu. Više od 900,000 milja bez nesreća, stopa pravovremenih isporuka od 99% i iskustvo s rashladnim, ravnim i suhim teretima. Čista vozačka evidencija, HazMat i ovlasti za cisterne.",
    "experience": [
      {
        "role": "Vozač kamiona na dugim relacijama",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "tra 2019.",
        "end": "",
        "current": true,
        "points": "Vozim 2,800+ milja tjedno na regionalnim rutama diljem Teksasa, Oklahome i Novog Meksika\nOdržavam 99% isporuke na vrijeme kod 1,100+ tereta godišnje\nPrevozim hlađeni i suhi teret u furgonima; svakodnevno obavljam preglede prije i nakon puta\nUkupno više od 900,000 milja bez nesreće"
      },
      {
        "role": "Vozač dostavnog kamiona",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "ožu 2016.",
        "end": "ožu 2019.",
        "current": false,
        "points": "Isporučivao građevinski materijal na 15-20 gradilišta dnevno diljem područja Dallas-Fort Worth\nUpravljao sam viličarima i osiguravao terete na plato prikolicama prema DOT standardima\nVodio sam dokumentaciju i zapise o isporuci točno, bez ijednog DOT prekršaja"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certifikat",
        "field": "Komercijalna vožnja (CDL kategorija A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A s HazMat i ovlastima za cisterne. Čista vozačka evidencija."
      }
    ],
    "skills": "Dugolinijski i regionalni prijevoz\nHlađeni tereti i tereti na plato prikolicama\nDOT propisi i dnevnici vožnje\nPregledi prije puta\nPlaniranje ruta (GPS, ELD)\nUpravljanje viličarom",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Prodajni suradnik u maloprodaji",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Prodajni suradnik u maloprodaji s 4 godine iskustva u trgovinama elektronikom i odjećom. Stalno među 3 najbolja prodavača u timu, sa stopom vezane prodaje jamstava i dodatne opreme od 32%. Ljubazan, brz na blagajni i od povjerenja za otvaranje i zatvaranje trgovine.",
    "experience": [
      {
        "role": "Viši prodajni suradnik",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "velj 2022.",
        "end": "",
        "current": true,
        "points": "Prodajem elektroniku i dodatke za 60+ kupaca dnevno; među 3 najbolja u prodaji trgovine 8 uzastopnih tromjesečja\nPostižem stopu vezane prodaje jamstava i dodataka od 32%, najvišu u timu\nObučavam 6 novih početnika za blagajnu, skladište i standarde korisničke službe\nPouzdani nositelj ključa: otvaram i zatvaram trgovinu i obrađujem brojanje gotovine"
      },
      {
        "role": "Prodajni suradnik",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "lip 2021.",
        "end": "sij 2022.",
        "current": false,
        "points": "Pomagao kupcima u odabiru odjeće i veličina na prometnom prodajnom prostoru\nOdržavao izloge urednima i nadopunjavao police u svakoj smjeni\nLjubazno sam obrađivao povrate i zamjene, svodeći pritužbe na minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Viša stručna sprema",
        "field": "Poslovanje",
        "start": "2019",
        "end": "2021",
        "notes": "Izvanredni studij uz rad u maloprodaji."
      }
    ],
    "skills": "Korisnička služba i dodatna prodaja\nRukovanje gotovinom i POS sustavima\nPoznavanje proizvoda (elektronika)\nUpravljanje zalihama\nOtvaranje i zatvaranje trgovine\nObuka tima",
    "languages": "Engleski (tečno)\nŠpanjolski (tečno)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Predstavnik korisničke službe",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Predstavnik korisničke službe s 5 godina iskustva u telefonskoj, e-poštanskoj i live-chat podršci. Rješava 45+ slučajeva dnevno s ocjenom zadovoljstva od 96% i stopom rješavanja pri prvom kontaktu od 88%. Smiren s ljutitim klijentima i brz u pronalaženju rješenja.",
    "experience": [
      {
        "role": "Predstavnik korisničke službe",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "svi 2021.",
        "end": "",
        "current": true,
        "points": "Obrađujem 45+ telefonskih, e-mail i chat slučajeva dnevno za naplatu, narudžbe i tehničke kvarove\nOdržavam ocjenu zadovoljstva korisnika od 96% i stopu rješavanja pri prvom kontaktu od 88%\nSmirujem teške pozive i pretvaram pritužbe u ponovne poslove\nObučavam 5 novih agenata za skripte, sustave i ton"
      },
      {
        "role": "Agent podrške",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "ruj 2019.",
        "end": "tra 2021.",
        "current": false,
        "points": "Odgovarao na e-poštu i razgovore korisnika o narudžbama, povratima i refundacijama\nOdržavao prosječno vrijeme prvog odgovora ispod 2 sata\nNapisao 20 članaka centra za pomoć koji su smanjili ponovljena pitanja za četvrtinu"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Viša stručna sprema",
        "field": "Poslovna administracija",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Podrška telefonom, e-poštom i razgovorom uživo\nObrada pritužbi i smirivanje sukoba\nCRM sustavi (Zendesk, Salesforce)\nUpiti o naplati i narudžbama\nTipkanje 55 riječi/min\nObuka tima",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Voditelj operacija",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Voditelj operacija s 12 godina iskustva u vođenju timova do 80 ljudi u skladištenju i distribuciji. Smanjio troškove obrade narudžbi za 22%, podigao pravovremene pošiljke s 91% na 98% i otvorio dvije nove lokacije na vrijeme i unutar proračuna.",
    "experience": [
      {
        "role": "Voditelj operacija",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "velj 2020.",
        "end": "",
        "current": true,
        "points": "Vodim distribucijski centar od 120,000 kvadratnih stopa s 80 zaposlenika u 3 smjene\nSmanjio troškove obrade narudžbi za 22% preuređenjem putova komisioniranja i obrazaca smjena\nPodigao isporuke na vrijeme s 91% na 98% u 18 mjeseci\nOtvorio 2 nove lokacije na vrijeme i 8% ispod proračuna"
      },
      {
        "role": "Nadzornik skladišta",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "lip 2013.",
        "end": "sij 2020.",
        "current": false,
        "points": "Nadgledao 25 skladišnih radnika i svakodnevnu otpremu 4,000+ narudžbi\nUveo skeniranje crtičnih kodova, smanjivši pogreške komisioniranja za 35%\nVodio obuku o sigurnosti koja je lokaciju održala bez nesreća 3 godine"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Upravljanje operacijama",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma zeleni pojas."
      }
    ],
    "skills": "Vodstvo tima (do 80 zaposlenika)\nSkladištenje i distribucija\nPoboljšanje procesa\nProračun i kontrola troškova\nUpravljanje sigurnošću\nERP i WMS sustavi",
    "languages": "Engleski (tečno)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Licencirani električar",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Licencirani majstor električar s 8 godina iskustva u stambenim i komercijalnim radovima. Vješt u ožičenju, nadogradnjama ploča, rasvjeti i pronalaženju kvarova, s čistom sigurnosnom evidencijom kroz 400+ poslova. Poznavanje NEC propisa i iskustvo nadziranja naučnika.",
    "experience": [
      {
        "role": "Majstor električar",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "ožu 2019.",
        "end": "",
        "current": true,
        "points": "Završio 400+ stambenih i poslovnih poslova: ožičenje, nadogradnje razvodnih ploča, rasvjeta i punjači za električna vozila\nBrzo dijagnosticiram i popravljam kvarove, s 92% popravaka pri prvom dolasku\nNadgledam 2 naučnika i odobravam njihov rad prema propisima\nOdržavam čistu sigurnosnu evidenciju bez ozljeda s izgubljenim vremenom"
      },
      {
        "role": "Električarski naučnik",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "lip 2016.",
        "end": "velj 2019.",
        "current": false,
        "points": "Pomagao licenciranim električarima pri ožičenju novogradnje i preinakama\nNaučio savijanje cijevi, provlačenje kabela i ugradnju razvodnih ploča\nOdradio 8,000 sati naukovanja i iz prve položio majstorski ispit"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certifikat",
        "field": "Elektrotehnička tehnologija",
        "start": "2015",
        "end": "2016",
        "notes": "Licenca majstora električara (Colorado). OSHA 30 certificiran."
      }
    ],
    "skills": "Stambeno i poslovno ožičenje\nNadogradnje razvodnih ploča i punjači za električna vozila\nPronalaženje kvarova i ispitivanje\nUsklađenost s NEC propisima\nSavijanje cijevi i provlačenje kabela\nNadzor naučnika",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Financijski analitičar",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Financijski analitičar s 6 godina iskustva u proračunu, predviđanju i investicijskoj analizi. Izradio modele predviđanja koji su smanjili odstupanje proračuna za 30% i podržali $50M investicijskih odluka. Jak u Excelu, SQL-u i financijskom modeliranju.",
    "experience": [
      {
        "role": "Financijski analitičar",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "tra 2021.",
        "end": "",
        "current": true,
        "points": "Izrađujem mjesečne prognoze i godišnje proračune za portfelj od $120M\nSmanjio odstupanja proračuna za 30% modelom prognoziranja temeljenim na pokretačima\nPodržavam investicijske odluke vrijedne $50M vrednovanjem i analizom scenarija\nMjesečno predstavljam nalaze financijskom direktoru i voditeljima odjela"
      },
      {
        "role": "Mlađi financijski analitičar",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "srp 2019.",
        "end": "ožu 2021.",
        "current": false,
        "points": "Pripremao tjedna izvješća o učinku za 12 podružnica\nAutomatizirao izvještavanje u Excelu, uštedjevši 10 sati tjedno\nPomagao kreditnom timu u analizi portfelja zajmova"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Financije",
        "start": "2015",
        "end": "2019",
        "notes": "Kandidat za CFA Level II. Kolegiji iz vrednovanja i korporativnih financija."
      }
    ],
    "skills": "Financijsko modeliranje i prognoziranje\nProračun i analiza odstupanja\nVrednovanje (DCF, usporedive tvrtke)\nExcel (napredno) i SQL\nBloomberg Terminal\nVizualizacija podataka (Power BI)",
    "languages": "Engleski (tečno)\nHindski (tečno)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Građevinski inženjer",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Građevinski inženjer (PE) sa 7 godina iskustva u projektiranju cestovne i vodne infrastrukture. Vodio projektiranje proširenja autoceste od 12 milja i sustava oborinske odvodnje koji opslužuje 8,000 domova. Vješt u AutoCAD Civil 3D, procjeni troškova i koordinaciji dozvola.",
    "experience": [
      {
        "role": "Građevinski inženjer",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Vodim projektiranje proširenja autoceste od 12 milja, od snimanja do građevinske dokumentacije\nProjektirao sustav oborinskih voda za 8,000 domova, koji je grad odobrio iz prve\nKoordiniram dozvole s 4 agencije i upravljam proračunom projektiranja od $2.5M\nPregledavam i ovjeravam crteže kao licencirani profesionalni inženjer"
      },
      {
        "role": "Mlađi građevinski inženjer",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "srp 2018.",
        "end": "pro 2020.",
        "current": false,
        "points": "Pripremao planove niveliranja i odvodnje za 20+ stambenih naselja\nIzrađivao procjene troškova i iskaze količina za cestovne projekte\nSudjelovao u nadzorima gradilišta i pisao izvješća o napretku"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Građevinarstvo",
        "start": "2014",
        "end": "2018",
        "notes": "Licenca Professional Engineer (Washington). EIT položen 2018."
      }
    ],
    "skills": "Projektiranje cesta i odvodnje\nAutoCAD Civil 3D\nModeliranje oborinskih voda\nProcjena troškova\nKoordinacija dozvola\nRaspoređivanje projekata (MS Project)",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Inženjer strojarstva",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Inženjer strojarstva s 6 godina iskustva u projektiranju HVAC sustava i proizvodne opreme. Smanjio potrošnju energije za 18% u 3 pogona preoblikovanim kanalima i upravljanjem te vodio redizajn stroja koji je podigao učinak za 25%. Vješt u SolidWorksu, FEA i termičkoj analizi.",
    "experience": [
      {
        "role": "Inženjer strojarstva",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "velj 2021.",
        "end": "",
        "current": true,
        "points": "Projektiram HVAC i proizvodnu opremu za 3 tvornice s 400+ zaposlenika\nSmanjio potrošnju energije za 18% preuređenjem kanala i upravljačkih sekvenci\nVodio preuređenje stroja koje je podiglo učinak za 25% bez dodatnog prostora\nProvodim FEA i termičku analizu novih dijelova prije izrade prototipa"
      },
      {
        "role": "Mlađi inženjer strojarstva",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "kol 2019.",
        "end": "sij 2021.",
        "current": false,
        "points": "Modelirao dijelove i sklopove u SolidWorksu za automobilske klijente\nPripremao crteže, specifikacije materijala i izvješća o ispitivanju\nPodržavao izradu prototipa i rješavao probleme uklapanja na proizvodnom podu"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Strojarstvo",
        "start": "2015",
        "end": "2019",
        "notes": "Kolegiji iz termodinamike, mehanike fluida i konstruiranja strojeva."
      }
    ],
    "skills": "HVAC projektiranje\nSolidWorks i AutoCAD\nFEA i termička analiza\nProjektiranje strojeva\nEnergetska učinkovitost\nGD&T i tolerancije",
    "languages": "Engleski (tečno)\nKorejski (konverzacijski)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Inženjer elektrotehnike",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Inženjer elektrotehnike s 6 godina iskustva u ugrađenim sustavima i energetskoj elektronici. Projektirao upravljačke ploče koje se sada koriste u 50,000+ uređaja i smanjio trošak ploče za 22% preoblikovanjem komponenata. Vješt u Altiumu, C-u, testiranju firmvera i EMC sukladnosti.",
    "experience": [
      {
        "role": "Inženjer elektrotehnike",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "ožu 2021.",
        "end": "",
        "current": true,
        "points": "Projektiram ugrađene upravljačke ploče koje se koriste u 50,000+ uređaja godišnje\nSmanjio trošak ploče za 22% preuređenjem energetskog stupnja i nabavom alternativa\nVodim ispitivanje EMC usklađenosti, prolaz iz prve na 4 linije proizvoda\nPišem i pregledavam firmware u C-u za mikrokontrolere"
      },
      {
        "role": "Mlađi inženjer elektrotehnike",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "srp 2019.",
        "end": "velj 2021.",
        "current": false,
        "points": "Rasporedio PCB-e u Altiumu za potrošačke i industrijske klijente\nIzrađivao i testirao prototipe, otklanjajući hardverske kvarove\nPisao postupke ispitivanja koji su skratili vrijeme proizvodnog ispitivanja za 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektrotehnika",
        "start": "2015",
        "end": "2019",
        "notes": "Kolegiji iz ugrađenih sustava, energetske elektronike i obrade signala."
      }
    ],
    "skills": "Ugrađeni sustavi i dizajn PCB-a\nAltium Designer\nC i firmware\nEnergetska elektronika\nIspitivanje EMC usklađenosti\nOsciloskopi i laboratorijski instrumenti",
    "languages": "Engleski (tečno)\nGudžaratski (konverzacijski)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analitičar podataka",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analitičar podataka s 4 godine iskustva u pretvaranju prodajnih i operativnih podataka u odluke. Izradio nadzorne ploče koje koristi 60+ voditelja, skratio vrijeme mjesečnog izvještavanja s 3 dana na 4 sata i pronašao pogrešku u cijenama vrijednu $180,000 godišnje. Jak u SQL-u, Excelu i Power BI-ju.",
    "experience": [
      {
        "role": "Analitičar podataka",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "sij 2022.",
        "end": "",
        "current": true,
        "points": "Izrađujem Power BI nadzorne ploče koje koristi 60+ voditelja trgovina i regionalnih voditelja\nSkraćujem mjesečno izvještavanje s 3 dana na 4 sata automatiziranim SQL cjevovodima\nPronašao pogrešku u cijenama vrijednu $180,000 godišnje revizijom podataka o promocijama\nMjesečno predstavljam nalaze komercijalnom timu"
      },
      {
        "role": "Mlađi analitičar podataka",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "kol 2020.",
        "end": "pro 2021.",
        "current": false,
        "points": "Čistio sam i spajao podatke o isporuci iz 4 sustava u jednu tablicu za izvještavanje\nIzradio sam Excel praćenja koja su zamijenila ručna brojanja za 2 tima\nSvakodnevno sam odgovarao na ad hoc pitanja operativnih voditelja o podacima"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistika",
        "start": "2016",
        "end": "2020",
        "notes": "Kolegiji iz regresije, baza podataka i vizualizacije podataka."
      }
    ],
    "skills": "SQL i čišćenje podataka\nPower BI i Tableau\nExcel (napredno)\nPython (pandas)\nDizajn nadzornih ploča\nOsnove A/B testiranja",
    "languages": "Engleski (tečno)\nVijetnamski (konverzacijski)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Znanstvenik za podatke",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Znanstvenik za podatke s 5 godina iskustva u izgradnji modela strojnog učenja za e-trgovinu. Model preporuka koji sam isporučio podigao je prihod po posjetu za 12%, a model odljeva sada označava 80% rizičnih klijenata. Jak u Pythonu, SQL-u i uvođenju modela.",
    "experience": [
      {
        "role": "Znanstvenik za podatke",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "velj 2022.",
        "end": "",
        "current": true,
        "points": "Isporučio model preporuka koji je podigao prihod po posjetu za 12%\nIzradio model odljeva koji označava 80% rizičnih kupaca mjesec dana ranije\nImplementirao modele u produkciju s cjevovodima nadzora i ponovne obuke\nMjesečno predstavljam rezultate modela timovima proizvoda i marketinga"
      },
      {
        "role": "Mlađi znanstvenik za podatke",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "srp 2020.",
        "end": "sij 2022.",
        "current": false,
        "points": "Izradio modele prognoziranja za 3 maloprodajna klijenta s točnošću većom od 90%\nČistio i pripremao skupove podataka od 10M+ redaka za modeliranje\nPisao dokumentaciju kako bi klijenti sami mogli ponovno pokretati modele"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Znanost o podacima",
        "start": "2018",
        "end": "2020",
        "notes": "Diplomski rad o sustavima preporuka. prvostupnik matematike (2018.)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nStrojno učenje i statistika\nSQL i Spark\nImplementacija modela (Docker, AWS)\nA/B testiranje\nVizualizacija podataka",
    "languages": "Engleski (tečno)\nArapski (tečno)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Web programer",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Web programer s 4 godine iskustva u izradi brzih, pristupačnih web stranica u HTML-u, CSS-u i JavaScriptu. Preuredio naplatu trgovine koja je podigla konverzije za 18% i održavam 12 stranica klijenata s dostupnošću od 99.9%. Jak u responzivnom dizajnu, performansama i osnovama SEO-a.",
    "experience": [
      {
        "role": "Web programer",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "ožu 2022.",
        "end": "",
        "current": true,
        "points": "Izrađujem responzivne web stranice u HTML-u, CSS-u, JavaScriptu i WordPressu za 12 klijenata\nPreuredio naplatu trgovine koja je podigla konverzije za 18%\nSkratio prosječno vrijeme učitavanja stranice s 4.2s na 1.8s optimizacijom slika i koda\nOdržavam sve stranice klijenata na 99.9% dostupnosti uz nadzor i sigurnosne kopije"
      },
      {
        "role": "Mlađi web programer",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "lip 2021.",
        "end": "velj 2022.",
        "current": false,
        "points": "Izradio odredišne stranice i popravljao pogreške na 20+ stranica malih poduzeća\nUčio Git, responzivni dizajn i osnove SEO-a na stvarnim projektima\nOdgovarao na e-poštu klijenata i isti dan ažurirao sadržaj"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Računarstvo",
        "start": "2017",
        "end": "2021",
        "notes": "Kolegiji iz web razvoja, baza podataka i interakcije čovjeka i računala."
      }
    ],
    "skills": "HTML, CSS i JavaScript\nReact i WordPress\nResponzivni dizajn\nOptimizacija brzine stranice\nGit i GitHub\nOsnove SEO-a",
    "languages": "Engleski (tečno)\nŠpanjolski (tečno)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafički dizajner",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafički dizajner s 5 godina iskustva u brendiranju, ambalaži i dizajnu društvenih mreža. Izradio identitete robnih marki za 25+ malih poduzeća i redizajn ambalaže koji je podigao prodaju na policama za 14%. Vješt u Adobe Illustratoru, Photoshopu i Figmi.",
    "experience": [
      {
        "role": "Grafički dizajner",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "sij 2022.",
        "end": "",
        "current": true,
        "points": "Projektiram identitete robnih marki, ambalažu i društvene kampanje za 25+ klijenata\nPreuređenje ambalaže za prehrambenu marku podiglo je prodaju na policama za 14%\nIzrađujem 30+ društvenih materijala tjedno za Instagram, TikTok i Facebook\nPredstavljam koncepte klijentima i brzo ih revidiram prema povratnim informacijama"
      },
      {
        "role": "Mlađi grafički dizajner",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "srp 2020.",
        "end": "pro 2021.",
        "current": false,
        "points": "Dizajnirao letke, jelovnike i objave za lokalne restorane i trgovine\nPripremao datoteke spremne za tisak i provjeravao otiske s tiskarama\nIzgradio biblioteku predložaka koja je skratila vrijeme dizajna za trećinu"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafički dizajn",
        "start": "2016",
        "end": "2020",
        "notes": "Portfelj u brendiranju i dizajnu ambalaže."
      }
    ],
    "skills": "Adobe Illustrator i Photoshop\nFigma\nDizajn identiteta robne marke\nDizajn ambalaže\nDizajn za društvene mreže\nPriprema za tisak",
    "languages": "Engleski (tečno)\nKorejski (konverzacijski)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX dizajner",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX dizajner s 5 godina iskustva u istraživanju korisnika i dizajniranju mobilnih i web proizvoda. Redizajnirao tijek uvođenja korisnika koji je smanjio odustajanje za 35% i proveo više od 40 testova upotrebljivosti. Vješt u Figmi, istraživanju korisnika, izradi žičanih modela i prototipova.",
    "experience": [
      {
        "role": "UX dizajner",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "velj 2022.",
        "end": "",
        "current": true,
        "points": "Preuredio mobilno uhodavanje, smanjivši odustajanje za 35% u 3 mjeseca\nProvodim 40+ testova uporabljivosti i razgovora s korisnicima godišnje\nIzrađujem žičane okvire i prototipe u Figmi za 2 tima proizvoda\nSvakodnevno radim s inženjerima i voditeljima proizvoda na isporuci"
      },
      {
        "role": "Mlađi UX dizajner",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "kol 2020.",
        "end": "sij 2022.",
        "current": false,
        "points": "Dizajnirao zaslone i tijekove za 5 aplikacija klijenata\nProvodio prve testove uporabljivosti i zapisivao nalaze za klijente\nIzgradio biblioteku komponenti koja je ubrzala primopredaju dizajna"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psihologija",
        "start": "2016",
        "end": "2020",
        "notes": "Certifikat iz UX dizajna (General Assembly, 2020.). Kolegiji iz interakcije čovjeka i računala."
      }
    ],
    "skills": "Istraživanje korisnika i testiranje uporabljivosti\nŽičani okviri i izrada prototipa (Figma)\nInformacijska arhitektura\nDizajnerski sustavi\nMapiranje putovanja\nRadionice s dionicima",
    "languages": "Engleski (tečno)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marketinški voditelj",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marketinški voditelj s 8 godina iskustva u B2B i potrošačkim kampanjama. Povećao kvalificirane potencijalne klijente za 60% u jednoj godini, lansirao liniju proizvoda koja je dosegla $3M prodaje u prvoj godini i upravlja godišnjim proračunom od $500,000 u timu od 5.",
    "experience": [
      {
        "role": "Marketinški voditelj",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "ožu 2021.",
        "end": "",
        "current": true,
        "points": "Vodim tim od 5 ljudi i godišnji marketinški proračun od $500,000\nPovećao kvalificirane potencijalne klijente za 60% u jednoj godini sadržajnim i plaćenim kampanjama\nLansirao liniju proizvoda koja je dosegla $3M prodaje u prvoj godini\nSmanjio trošak po potencijalnom klijentu za 28% preuređenjem ciljanja kampanja"
      },
      {
        "role": "Marketinški stručnjak",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "lip 2017.",
        "end": "velj 2021.",
        "current": false,
        "points": "Vodio e-mail kampanje za 80,000 pretplatnika sa stopom otvaranja od 24%\nUpravljao društvenim računima koji su narasli s 5,000 na 40,000 pratitelja\nOrganizirao 6 štandova na sajmovima godišnje, generirajući 300+ potencijalnih klijenata svaki"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kolegiji iz ponašanja potrošača, analitike i upravljanja robnom markom."
      }
    ],
    "skills": "Strategija i planiranje kampanja\nSadržajni i e-mail marketing\nPlaćeno oglašavanje (Google, Meta)\nMarketinška analitika (GA4)\nVodstvo tima\nUpravljanje proračunom",
    "languages": "Engleski (tečno)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektni voditelj",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Voditelj projekata (PMP) sa 7 godina iskustva u isporuci softverskih i građevinskih projekata na vrijeme i unutar proračuna. Upravljao s 15 projekata vrijednih do $4M, sa stopom pravovremene isporuke od 94%. Vješt u Agileu, upravljanju rizicima i komunikaciji s dionicima.",
    "experience": [
      {
        "role": "Projektni voditelj",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Upravljam s 15 projekata vrijednih do $4M, sa stopom isporuke na vrijeme od 94%\nVodim Agile sprintove za 3 tima i tjedno izvještavam rukovoditelje o napretku\nSmanjio prekoračenja projekata za 30% ranijim pregledima rizika\nKoordiniram dobavljače, klijente i interne timove u 4 vremenske zone"
      },
      {
        "role": "Koordinator projekata",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "srp 2018.",
        "end": "pro 2020.",
        "current": false,
        "points": "Pratio rasporede, proračune i dozvole za 8 građevinskih projekata\nPripremao izvješća o statusu i bilješke sa sastanaka za klijente\nRiješio sukobe u rasporedu koji su uštedjeli 2 tjedna na gradnji škole"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Poslovna administracija",
        "start": "2014",
        "end": "2018",
        "notes": "PMP certificiran (2021.). Certificirani ScrumMaster."
      }
    ],
    "skills": "Planiranje i raspoređivanje projekata\nAgile i Scrum\nUpravljanje rizicima\nKontrola proračuna\nKomunikacija s dionicima\nMS Project i Jira",
    "languages": "Engleski (tečno)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Voditelj ljudskih resursa",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Voditelj ljudskih resursa s 9 godina iskustva u zapošljavanju, odnosima sa zaposlenicima i pogodnostima. Smanjio vrijeme do zapošljavanja s 45 na 28 dana, podigao zadržavanje za 15% i vodio ljudske resurse za 250 zaposlenika na 3 lokacije. Poznavanje radnog prava i pravila na razini CIPD-a.",
    "experience": [
      {
        "role": "Voditelj ljudskih resursa",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "velj 2020.",
        "end": "",
        "current": true,
        "points": "Vodim ljudske resurse za 250 zaposlenika na 3 lokacije, s timom od 3\nSkratio vrijeme zapošljavanja s 45 na 28 dana preuređenjem procesa razgovora\nPodigao zadržavanje za 15% novim programom uhodavanja i ocjenjivanja\nObrađujem odnose sa zaposlenicima, pritužbe i ažuriranja politika"
      },
      {
        "role": "HR generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "lip 2016.",
        "end": "sij 2020.",
        "current": false,
        "points": "Zapošljavao 120+ zaposlenika godišnje za hotele i restorane\nProvodio provjere plaća i upis beneficija za 400 zaposlenika\nRješavao sporove osoblja i održavao fluktuaciju ispod prosjeka industrije"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Ljudski resursi",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP certificiran. Kolegiji iz radnog prava i organizacijskog ponašanja."
      }
    ],
    "skills": "Zapošljavanje i uhodavanje\nOdnosi sa zaposlenicima\nBeneficije i plaće\nRadno pravo\nUpravljanje učinkom\nHRIS (Workday, BambooHR)",
    "languages": "Engleski (tečno)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Suradnik odvjetnik",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Suradnik odvjetnik s 6 godina iskustva u trgovačkim sporovima i ugovornom pravu. Upravljao s 40+ slučajeva, dobio skraćenu presudu u 8 i sastavio ugovore vrijedne $25M. Primljen u odvjetničku komoru Illinoisa; vješt u pravnom istraživanju, sastavljanju i savjetovanju klijenata.",
    "experience": [
      {
        "role": "Suradnik odvjetnik",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "ruj 2020.",
        "end": "",
        "current": true,
        "points": "Vodim 40+ slučajeva gospodarskih sporova od podnošenja do nagodbe\nDobio skraćene presude u 8 slučajeva i povoljno riješio još 20 nagodbom\nSastavljam i pregovaram ugovore vrijedne do $25M\nSavjetujem klijente osobno i pisano o riziku i strategiji"
      },
      {
        "role": "Pravni službenik",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "kol 2019.",
        "end": "kol 2020.",
        "current": false,
        "points": "Istraživao sudsku praksu i sastavljao dopise za 2 suca\nPregledavao prijedloge i pripremao sažetke za 100+ rasprava\nPromatrao suđenja i konferencije o nagodbi u građanskim odjelima"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Pravo",
        "start": "2016",
        "end": "2019",
        "notes": "Primljen u odvjetničku komoru Illinoisa (2019.). Pravni časopis, urednik članaka."
      }
    ],
    "skills": "Gospodarski sporovi\nSastavljanje i pregovaranje ugovora\nPravna istraživanja (Westlaw, LexisNexis)\nSavjetovanje klijenata\nIskazi i otkrivanje dokaza\nSudski podnesci i postupak",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinički farmaceut",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinički farmaceut (PharmD) sa 7 godina iskustva u bolničkoj i javnoj ljekarni. Pregledava više od 100 naloga za lijekove dnevno, smanjio štetne događaje povezane s lijekovima za 25% novim protokolom provjere i savjetuje pacijente o sigurnoj uporabi lijekova. Licenciran u Pennsylvaniji.",
    "experience": [
      {
        "role": "Klinički farmaceut",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "sij 2020.",
        "end": "",
        "current": true,
        "points": "Pregledavam 100+ naloga za lijekove dnevno radi sigurnosti, doziranja i interakcija\nSmanjio štetne događaje od lijekova za 25% novim protokolom dvostruke provjere\nSavjetujem liječnike i medicinske sestre o izboru lijekova za složene pacijente\nVodim bolničke runde upravljanja antibioticima dvaput tjedno"
      },
      {
        "role": "Farmaceut u ljekarni",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "srp 2018.",
        "end": "pro 2019.",
        "current": false,
        "points": "Izdavao 200+ recepata dnevno bez ijedne pogreške pri izdavanju\nSavjetovao pacijente o novim lijekovima, nuspojavama i pohrani\nDavao cjepiva protiv gripe i provodio mjerenja krvnog tlaka"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacija",
        "start": "2014",
        "end": "2018",
        "notes": "Licencirani farmaceut (Pennsylvania). Certificirani specijalist farmakoterapije (BCPS)."
      }
    ],
    "skills": "Pregled lijekova i sigurnost\nKlinička farmakologija\nSavjetovanje pacijenata\nLjekarnički sustavi (Epic, PioneerRx)\nUpravljanje antibioticima\nUsluge cijepljenja",
    "languages": "Engleski (tečno)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Opći stomatolog",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Opći stomatolog (DDS) s 8 godina iskustva u restaurativnoj, kozmetičkoj i preventivnoj stomatologiji. Liječi 25+ pacijenata dnevno u praksi od 2,000 pacijenata, s ocjenom zadovoljstva pacijenata od 98%. Vješt u krunicama, implantatima, liječenju korijenskih kanala i prozirnim aparatićima.",
    "experience": [
      {
        "role": "Opći stomatolog",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "velj 2019.",
        "end": "",
        "current": true,
        "points": "Liječim 25+ pacijenata dnevno: ispuni, krunice, liječenje korijenskih kanala i vađenja\nOdržavam ocjenu zadovoljstva pacijenata od 98% u 1,200+ recenzija\nUgrađujem 15+ implantata mjesečno i vodim slučajeve prozirnih alignera\nNadgledam 2 dentalna higijeničara i 4 dentalna asistenta"
      },
      {
        "role": "Suradnik stomatolog",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "srp 2017.",
        "end": "sij 2019.",
        "current": false,
        "points": "Pružao opću stomatološku skrb za ordinaciju s 1,500 pacijenata\nUveo krunice istog dana, smanjivši povratne posjete za 40%\nProvodio školske terenske posjete o oralnom zdravlju djece"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Stomatologija",
        "start": "2013",
        "end": "2017",
        "notes": "Licencirani stomatolog (Arizona). Invisalign certificiran. CPR/BLS certificiran."
      }
    ],
    "skills": "Restaurativna stomatologija (krunice, ispuni)\nLiječenje korijenskog kanala\nZubni implantati\nProzirni aligneri\nSkrb i komunikacija s pacijentima\nDigitalne rendgenske snimke i CEREC",
    "languages": "Engleski (tečno)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fizioterapeut",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fizioterapeut (DPT) sa 6 godina iskustva u ortopedskoj i sportskoj rehabilitaciji. Liječi 12-15 pacijenata dnevno, pri čemu 90% postiže ciljeve unutar planiranih seansi. Vješt u manualnoj terapiji, propisivanju vježbi i testiranju povratka sportu.",
    "experience": [
      {
        "role": "Fizioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "ožu 2021.",
        "end": "",
        "current": true,
        "points": "Liječim 12-15 pacijenata dnevno zbog sportskih ozljeda, postkirurške rehabilitacije i bolova u leđima\n90% pacijenata postiže svoje ciljeve unutar planiranog broja seansi\nOsmišljavam testiranje povratka sportu koje koriste 3 lokalna tima\nMentoriram 2 nova diplomanta i nadgledam studentske prakse"
      },
      {
        "role": "Fizioterapeut u ustanovi",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "kol 2019.",
        "end": "velj 2021.",
        "current": false,
        "points": "Pružao bolničku rehabilitaciju za postkirurške pacijente i pacijente nakon moždanog udara\nVodio grupne vježbe za 20+ starijih pacijenata tjedno\nDokumentirao napredak u Epicu i predavao odjelskim timovima"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fizikalna terapija",
        "start": "2016",
        "end": "2019",
        "notes": "Licencirani fizioterapeut (Oregon). Specijalist ortopedske klinike (OCS)."
      }
    ],
    "skills": "Ortopedska i sportska rehabilitacija\nManualna terapija\nPropisivanje vježbi\nTestiranje povratka sportu\nEdukacija pacijenata\nDokumentacija (Epic)",
    "languages": "Engleski (tečno)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Šef kuhinje",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Glavni kuhar s 10 godina iskustva u kreolskim i modernim američkim kuhinjama. Vodim brigadu od 12 ljudi u restoranu s 200 mjesta, smanjio sam troškove hrane za 15% strožim naručivanjem i osvojio nagradu „Najbolji novi jelovnik“ gradskog vodiča za hranu 2025.",
    "experience": [
      {
        "role": "Šef kuhinje",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Vodim brigadu od 12 ljudi u restoranu s 200 mjesta koji poslužuje 300+ gostiju po večeri\nSmanjio troškove hrane za 15% strožim naručivanjem i sezonskim jelovnikom\nOsvojio sam nagradu „Najbolji novi jelovnik“ gradskog vodiča za hranu 2025.\nOsmišljavam jelovnike, obučavam kuhare i vodim izdavanje jela na uslugama petkom i subotom"
      },
      {
        "role": "Zamjenik šefa kuhinje",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "lip 2017.",
        "end": "pro 2020.",
        "current": false,
        "points": "Vodio kuhinju kad glavnog kuhara nije bilo, pokrivajući 150 gostiju po večeri\nUpravljao zalihama, naručivanjem i odnosima s dobavljačima\nObučio 8 linijskih kuhara i smanjio fluktuaciju osoblja za trećinu"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Kulinarstvo",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager certificiran."
      }
    ],
    "skills": "Osmišljavanje jelovnika i kalkulacija troškova\nKreolska i moderna američka kuhinja\nVođenje kuhinje (brigada od 12)\nSigurnost hrane (ServSafe)\nUpravljanje dobavljačima\nBanketni i događajni catering",
    "languages": "Engleski (tečno)\nŠpanjolski (tečno)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Policijski službenik",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Policijski službenik s 8 godina iskustva u ophodnji, policiji u zajednici i istragama. Odaziva se na više od 30 poziva tjedno, s pohvalama za deeskalaciju i rad u zajednici. Obučen za krizne intervencije, prvu pomoć i pisanje izvješća.",
    "experience": [
      {
        "role": "Policijski službenik",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "lip 2019.",
        "end": "",
        "current": true,
        "points": "Patroliram okrugom od 40,000 stanovnika, odgovarajući na 30+ poziva tjedno\nPrimio 2 pohvale za smirivanje sukoba i rad sa zajednicom\nIstražujem krađe i napade, pišući izvješća korištena u 50+ kaznenih progona\nMentoriram 3 nova službenika kroz terensku obuku"
      },
      {
        "role": "Policijski službenik u ophodnji",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "kol 2017.",
        "end": "svi 2019.",
        "current": false,
        "points": "Patrolirao okružnim cestama i odgovarao na hitne pozive\nUručivao sudske pozive i pomagao pri prijevozu zatvorenika\nZavršio obuku za krizne intervencije i prvu pomoć"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certifikat",
        "field": "Provedba zakona",
        "start": "2017",
        "end": "2017",
        "notes": "Završio Ohio Peace Officer Training Academy. Obučen za tim za krizne intervencije."
      }
    ],
    "skills": "Patrola i hitni odziv\nPolicijski rad u zajednici\nKrizna intervencija i smirivanje sukoba\nPisanje izvješća\nIstrage\nPrva pomoć i KPR",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Vatrogasac / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Vatrogasac i EMT sa 7 godina iskustva u gašenju požara, spašavanju i hitnom medicinskom odgovoru. Odgovorio na 900+ poziva, uključujući požare građevina, spašavanja iz vozila i medicinske hitne slučajeve. HazMat obučen s čistom sigurnosnom evidencijom.",
    "experience": [
      {
        "role": "Vatrogasac / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "ožu 2020.",
        "end": "",
        "current": true,
        "points": "Odgovaram na 900+ poziva za požare, spašavanje i medicinske slučajeve u okrugu s 3 postaje\nPružam hitnu medicinsku pomoć kao certificirani EMT na 60% poziva\nObučen za opasne tvari; vodim dekontaminaciju pri kemijskim incidentima\nObučavam nove regrute za rukovanje crijevima, ljestvama i tehnikama pretrage"
      },
      {
        "role": "Volonterski vatrogasac",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "lip 2018.",
        "end": "velj 2020.",
        "current": false,
        "points": "Odgovarao na požare u prirodi i objektima kao volonter\nZavršio obuku Vatrogasac I i II te EMT-osnovna razina\nPomagao voditi razgovore o požarnoj sigurnosti u školama"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certifikat",
        "field": "Znanost o požarnoj zaštiti",
        "start": "2017",
        "end": "2018",
        "notes": "Vatrogasac I i II. Certificirani EMT-osnovna razina. Obučen za operacije s opasnim tvarima."
      }
    ],
    "skills": "Gašenje požara i spašavanje\nHitna medicinska pomoć (EMT)\nOperacije s opasnim tvarima (HazMat)\nLjestve, crijeva i ventilacija\nPožarna sigurnost zajednice\nTimski rad pod pritiskom",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Licencirani vodoinstalater",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Licencirani majstor vodoinstalater s 11 godina iskustva u stambenim i komercijalnim instalacijama. Obavljao više od 600 poslova godišnje, od grubih instalacija do ugradnje bojlera, sa stopom popravaka pri prvom posjetu od 98%. Vješt u postavljanju cijevi, čišćenju odvoda i usklađenosti s propisima.",
    "experience": [
      {
        "role": "Majstor vodoinstalater",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "sij 2019.",
        "end": "",
        "current": true,
        "points": "Završim 600+ stambenih i poslovnih poslova godišnje\nUgrađujem bojlere, grijače vode i kompletne grube instalacije kupaonica\nOdržavam 98% popravaka pri prvom dolasku na servisnim pozivima\nNadgledam 3 naučnika i odobravam njihov rad"
      },
      {
        "role": "Kvalificirani vodoinstalater",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "lip 2014.",
        "end": "pro 2018.",
        "current": false,
        "points": "Vodio vodoinstalacije novogradnje za 40+ kuća godišnje\nČistio odvode i popravljao curenja za domove i restorane\nNaučio plinske instalacije i sprječavanje povratnog toka"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certifikat",
        "field": "Vodoinstalaterska tehnologija",
        "start": "2013",
        "end": "2014",
        "notes": "Majstorska vodoinstalaterska licenca (Tennessee). Certificiran za sprječavanje povratnog toka."
      }
    ],
    "skills": "Stambene i poslovne vodoinstalacije\nUgradnja cijevi i lemljenje\nČišćenje odvoda i pregled kamerom\nUgradnja bojlera i grijača vode\nPlinske instalacije\nUsklađenost s vodoinstalaterskim propisima",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Majstor stolar",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Majstor stolar s 9 godina iskustva u konstrukciji, završnim radovima i ormarićima po mjeri. Konstruirao 30+ kuća i ugradio kuhinje u 60+ domova, s reputacijom točnih mjera i urednih završnih obrada. Vješt u čitanju planova i radu prema propisima.",
    "experience": [
      {
        "role": "Majstor stolar",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "velj 2019.",
        "end": "",
        "current": true,
        "points": "Izrađujem okvire za 30+ kuća i ugrađujem kuhinje u 60+ domova\nIzrađujem ormariće po mjeri i obloge s tolerancijom od 1/16 inča\nČitam i slijedim arhitektonske planove, označavajući pogreške prije nego prouzroče trošak\nObučavam 2 naučnika u tehnikama izrade okvira i završnih radova"
      },
      {
        "role": "Stolarski naučnik",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "lip 2016.",
        "end": "sij 2019.",
        "current": false,
        "points": "Pomagao pri izradi okvira, suhozidu i podovima na preuređenjima\nNaučio sigurno koristiti pile, glodalice i pištolje za čavle\nOdradio 8,000 sati naukovanja i položio majstorski ispit"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certifikat",
        "field": "Stolarstvo",
        "start": "2015",
        "end": "2016",
        "notes": "Majstor stolar. OSHA 10 certificiran."
      }
    ],
    "skills": "Izrada okvira i konstrukcijski radovi\nZavršna stolarija i obloge\nOrmarići po mjeri\nČitanje arhitektonskih planova\nElektrični alati i sigurnost\nSuhozid i podovi",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Učitelj u srednjoj školi (matematika)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Učitelj u srednjoj školi s 8 godina iskustva u poučavanju matematike u razredima 9-12. Podigao stope prolaznosti iz algebre s 64% na 83% i vodi matematički tim do 2 državna finala. Vješt u diferenciranoj nastavi, pripremi za ispite i komunikaciji s roditeljima.",
    "experience": [
      {
        "role": "Učitelj matematike (razredi 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "kol 2019.",
        "end": "",
        "current": true,
        "points": "Poučavam algebru, geometriju i predkalkulus za 120 učenika u 5 razreda\nPodigao prolaznost iz algebre s 64% na 83% u 3 godine\nVodim matematički tim do 2 državna finala\nVodim dopunsku nastavu nakon škole za 30 učenika tjedno"
      },
      {
        "role": "Učitelj matematike (razredi 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "kol 2017.",
        "end": "lip 2019.",
        "current": false,
        "points": "Poučavao algebru i geometriju za 100 učenika godišnje\nUveo tjedne kvizove koji su prepolovili praznine u domaćim zadaćama\nOrganizirao prvi školski sajam matematike s 200 učenika"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Obrazovanje iz matematike",
        "start": "2013",
        "end": "2017",
        "notes": "Državna nastavnička licenca (New Hampshire, razredi 7-12, matematika)."
      }
    ],
    "skills": "Poučavanje matematike (od algebre do predkalkulusa)\nPriprema za ispite\nDiferencirana nastava\nUpravljanje razredom\nKomunikacija s roditeljima\nGoogle Classroom i Desmos",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Odgojitelj u predškoli",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Odgojitelj u predškoli sa 6 godina iskustva u skrbi o djeci u dobi od 3-5 godina. Vješt u učenju kroz igru, usmjeravanju ponašanja i komunikaciji s roditeljima. Izradio program fonike koji je podigao rezultate spremnosti za školu u mojoj skupini.",
    "experience": [
      {
        "role": "Odgojitelj u predškoli",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "kol 2020.",
        "end": "",
        "current": true,
        "points": "Poučavam i brinem o razredu od 18 djece u dobi od 3-5 godina\nIzradio program fonike koji je podigao rezultate spremnosti za školu u cijelom razredu\nPlaniram tjedne teme, kreativne aktivnosti i igru na otvorenom\nDijelim svakodnevne novosti i tromjesečna izvješća o napretku s roditeljima"
      },
      {
        "role": "Pomoćni odgojitelj u predškoli",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "lip 2018.",
        "end": "srp 2020.",
        "current": false,
        "points": "Podržavao glavnog učitelja s razredom od 20 djece\nSvakodnevno vodio vrijeme priča, pjesme i likovne aktivnosti\nVodio evidenciju sigurnosti i higijene prema državnim standardima"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Viša stručna sprema",
        "field": "Rani i predškolski odgoj",
        "start": "2016",
        "end": "2018",
        "notes": "Uvjerenje suradnika za dječji razvoj (CDA). Certificiran za prvu pomoć i KPR."
      }
    ],
    "skills": "Učenje kroz igru\nUsmjeravanje ponašanja\nFonika i rana pismenost\nKomunikacija s roditeljima\nSigurnost u razredu\nPlaniranje likovnih i kreativnih aktivnosti",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Socijalni radnik za djecu i obitelj",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Licencirani socijalni radnik sa 7 godina iskustva u podršci djeci i obiteljima. Vodi 25 obitelji, koordinira usluge među školama i zdravstvenim pružateljima te sastavlja sudska izvješća na koja se suci oslanjaju. Vješt u procjeni, kriznoj podršci i zaštiti.",
    "experience": [
      {
        "role": "Socijalni radnik za djecu i obitelj",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "sij 2020.",
        "end": "",
        "current": true,
        "points": "Vodim 25 obitelji, tjedno posjećujući domove i škole\nIzrađujem sudska izvješća i svjedočim na obiteljskom sudu\nKoordiniram stambenu, zdravstvenu i školsku podršku za ranjive obitelji\nSmanjio sam vrijeme čekanja na procjenu za 20% novim sustavom trijaže"
      },
      {
        "role": "Voditelj slučaja",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "srp 2018.",
        "end": "pro 2019.",
        "current": false,
        "points": "Podržavao 40+ obitelji u privremenom smještaju naknadama i upućivanjem\nVodio tjedne radionice roditeljstva i proračuna\nVodio bilješke o slučajevima točno za revizije i izvješća o financiranju"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Socijalni rad",
        "start": "2016",
        "end": "2018",
        "notes": "Licencirani socijalni radnik (Ohio). Kolegiji iz dobrobiti djece i obiteljskih sustava."
      }
    ],
    "skills": "Vođenje slučajeva (25 obitelji)\nZaštita djece\nIzvješća za obiteljski sud\nKrizna podrška\nKoordinacija više agencija\nUpućivanje na naknade i smještaj",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Paralegalni asistent",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Paralegalni asistent s 6 godina iskustva u podršci sporovima i korporativnim podnescima. Upravlja otkrivanjem za 30+ slučajeva, sastavlja podneske i ugovore te održava rokove podnošenja s evidencijom od 100% pravovremenosti. Vješt u Westlawu, e-otkrivanju i softveru za upravljanje slučajevima.",
    "experience": [
      {
        "role": "Paralegalni asistent",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "velj 2021.",
        "end": "",
        "current": true,
        "points": "Vodim otkrivanje dokaza za 30+ slučajeva sporova, pregledavajući 10,000+ dokumenata\nSastavljam podneske, prijedloge i ugovore za pregled odvjetnika\nOdržavam 100% točnosti u sudskim podnescima i rokovima\nKoordiniram svjedoke i pripremam spise za suđenje"
      },
      {
        "role": "Pravni asistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "kol 2019.",
        "end": "sij 2021.",
        "current": false,
        "points": "Razgovori o prijemu za 20+ klijenata tjedno\nPripremao obrasce i podneske za stambene i obiteljske slučajeve\nPrevodio sam pravne dokumente za klijente koji govore španjolski"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Viša stručna sprema",
        "field": "Paralegalni studij",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Certified Paralegal (CP). Program odobren od ABA-e."
      }
    ],
    "skills": "Podrška u sporovima i otkrivanje dokaza\nPravno sastavljanje\nE-otkrivanje (Relativity)\nVođenje slučajeva (Clio)\nSudski podnesci i rokovi\nPravna istraživanja (Westlaw)",
    "languages": "Engleski (tečno)\nŠpanjolski (tečno)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Knjigovodstveni službenik",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Knjigovodstveni službenik s 5 godina iskustva u obvezama prema dobavljačima, fakturiranju i bankovnim usklađivanjima. Obrađuje 300+ računa mjesečno s točnošću od 99.8% i održava knjige urednima za zaključenje mjeseca. Vješt u QuickBooksu, Excelu i podršci plaćama.",
    "experience": [
      {
        "role": "Knjigovodstveni službenik",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "tra 2021.",
        "end": "",
        "current": true,
        "points": "Obrađujem 300+ faktura dobavljača mjesečno s točnošću od 99.8%\nUsklađujem 6 bankovnih računa tjedno i isti dan označavam razlike\nPripremam podatke o plaćama za 45 zaposlenika i naplaćujem dospjela plaćanja korisnika\nVodim evidenciju urednom za reviziju na kraju godine, bez ijednog nalaza"
      },
      {
        "role": "Asistent za račune",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "lip 2019.",
        "end": "ožu 2021.",
        "current": false,
        "points": "Svakodnevno unosio prodajne fakture i račune u QuickBooks\nOdgovarao na upite dobavljača o plaćanjima telefonom i e-poštom\nArhivirao dokumentaciju i održavao arhivu ažurnom"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certifikat",
        "field": "Knjigovodstvo",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "Obveze i potraživanja\nUsklađivanje bankovnih računa\nFakturiranje (300+ mjesečno)\nQuickBooks i Excel\nPodrška obračunu plaća\nUnos podataka (65 riječi/min)",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Administrativni asistent",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Administrativni asistent s 6 godina iskustva u održavanju nesmetanog rada ureda. Upravlja kalendarima za 4 voditelja, organizira putovanja i sastanke te obrađuje 100+ e-poruka dnevno. Poznat po točnosti, diskreciji i smirenosti pod pritiskom rokova.",
    "experience": [
      {
        "role": "Administrativni asistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Upravljam kalendarima, putovanjima i sastancima za 4 viša voditelja\nObrađujem 100+ e-poruka dnevno, sastavljajući odgovore i označavajući prioritete\nPripremam materijale za upravu i vodim zapisnike na mjesečnim sastancima\nVodim narudžbe uredskog pribora i dobavljača, smanjujući troškove za 12%"
      },
      {
        "role": "Recepcionar",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "kol 2019.",
        "end": "pro 2020.",
        "current": false,
        "points": "Dočekivao 60+ pacijenata dnevno i vodio knjigu termina\nOdgovarao na telefone i obrađivao upite o osiguranju\nVodio evidenciju pacijenata točnom i povjerljivom"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Viša stručna sprema",
        "field": "Uredska administracija",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Upravljanje kalendarom i putovanjima\nE-pošta i korespondencija\nZapisnici sa sastanaka\nMicrosoft Office (Word, Excel, Outlook)\nUnos podataka (70 riječi/min)\nUredski pribor i dobavljači",
    "languages": "Engleski (tečno)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankovni blagajnik",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankovni blagajnik s 4 godine iskustva u posluživanju 80+ klijenata dnevno s točnošću i pažnjom. Blagajna usklađena do centa kroz 3 godine, bez manjkova. Vješt u polozima, isplatama, provjerama prijevara i upućivanju klijenata na prave proizvode.",
    "experience": [
      {
        "role": "Bankovni blagajnik",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "ožu 2022.",
        "end": "",
        "current": true,
        "points": "Poslužujem 80+ kupaca dnevno: polozi, isplate, plaćanja i prijenosi\nBlagajna usklađena do centa 3 godine bez ikakvih manjkova\nUočio i zaustavio 12 pokušaja prijevare, uštedjevši kupcima $90,000+\nUpućujem kupce na štedne i kreditne proizvode, ispunjavajući tromjesečne ciljeve preporuka"
      },
      {
        "role": "Suradnik korisničke službe",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "lip 2021.",
        "end": "velj 2022.",
        "current": false,
        "points": "Otvarao nove račune i izdavao debitne kartice članovima\nOdgovarao na telefonske upite o stanjima i izvodima\nPomagao članovima postaviti internetsko i mobilno bankarstvo"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Viša stručna sprema",
        "field": "Poslovanje",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Rukovanje gotovinom i usklađivanje blagajne\nPolozi, isplate i plaćanja\nOtkrivanje prijevara\nKorisnička služba\nBankarski softver (Fiserv)\nPreporuke proizvoda",
    "languages": "Engleski (tečno)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Voditelj prodaje",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Voditelj prodaje s 10 godina iskustva u vođenju timova do 15 predstavnika. Povećao regionalni prihod s $4M na $7.5M u 3 godine, podigao stopu dobivenih poslova s 22% na 34% i prepolovio fluktuaciju predstavnika boljim mentorstvom i uvođenjem u posao.",
    "experience": [
      {
        "role": "Regionalni voditelj prodaje",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Vodim tim od 15 prodajnih predstavnika diljem Teksasa i Oklahome\nPovećao regionalni prihod s $4M na $7.5M u 3 godine\nPodigao stopu dobivanja poslova s 22% na 34% boljim vođenjem i pregledima prodajnog kanala\nPrepolovio fluktuaciju predstavnika novim programom uhodavanja"
      },
      {
        "role": "Prodajni predstavnik",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "lip 2015.",
        "end": "pro 2020.",
        "current": false,
        "points": "Prodavao industrijsku opremu za 80+ klijenata, ispunjavajući kvotu 5 godina zaredom\nNajbolji predstavnik u regiji 3 godine zaredom\nIzgradio mrežu preporuka koja je donijela 25% novih poslova"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kolegiji iz upravljanja prodajom i pregovaranja."
      }
    ],
    "skills": "Vodstvo prodajnog tima (15 predstavnika)\nRast prihoda i prognoziranje\nUpravljanje prodajnim kanalom (Salesforce)\nVođenje i uhodavanje\nPregovaranje\nPlaniranje teritorija",
    "languages": "Engleski (tečno)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Voditelj gradnje",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Voditelj gradnje s 12 godina iskustva u isporuci komercijalnih i stambenih projekata vrijednih do $12M. Završio 20+ projekata s 95% pravovremenosti, nula ozljeda s izgubljenim vremenom na mojim gradilištima i proračunima održanima unutar 3%. Vješt u planiranju, upravljanju podizvođačima i sigurnosti.",
    "experience": [
      {
        "role": "Voditelj gradnje",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "velj 2020.",
        "end": "",
        "current": true,
        "points": "Isporučujem poslovne i stambene projekte vrijedne do $12M\nZavršio 20+ projekata s 95% isporuke na vrijeme i proračunima unutar 3%\nUpravljam s 30+ podizvođača i 50 radnika na 3 aktivna gradilišta\nNula ozljeda s izgubljenim vremenom na svim gradilištima u 4 godine"
      },
      {
        "role": "Nadzornik gradilišta",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "lip 2013.",
        "end": "sij 2020.",
        "current": false,
        "points": "Vodio svakodnevne operacije gradilišta za uredske i maloprodajne gradnje\nKoordinirao isporuke, nadzore i rasporede podizvođača\nOdržavao sigurnosnu evidenciju čistom i prošao svaki OSHA nadzor"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Visokogradnja",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 certificiran. CCM (Certified Construction Manager) kandidat."
      }
    ],
    "skills": "Raspoređivanje projekata (MS Project, Procore)\nKontrola proračuna\nUpravljanje podizvođačima\nSigurnost na gradilištu (OSHA 30)\nČitanje nacrta\nIzvještavanje klijenata",
    "languages": "Engleski (tečno)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certificirani medicinski asistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certificirani medicinski asistent s 5 godina iskustva u obiteljskoj praksi i hitnoj njezi. Prima 25+ pacijenata dnevno, mjeri vitalne znakove, vadi krv i upravlja recepcijom s ocjenom zadovoljstva pacijenata od 97%. Vješt u EHR-u, flebotomiji i provjerama osiguranja.",
    "experience": [
      {
        "role": "Certificirani medicinski asistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "tra 2021.",
        "end": "",
        "current": true,
        "points": "Primam 25+ pacijenata dnevno: vitalni znakovi, anamneze i priprema za pregled\nVadim krv i provodim osnovne laboratorijske pretrage s 99% uspjeha iz prvog uboda\nVodim recepciju, raspoređivanje i provjere osiguranja\nOdržavam ocjenu zadovoljstva pacijenata od 97% u 800+ anketa"
      },
      {
        "role": "Medicinski asistent",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "kol 2019.",
        "end": "ožu 2021.",
        "current": false,
        "points": "Trijažirao pacijente bez najave i pomagao liječnicima pri manjim zahvatima\nDavao cjepiva i obrađivao prikupljanje uzoraka\nOdržavao prostorije za pregled opskrbljenima, čistima i spremnima između pacijenata"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certifikat",
        "field": "Medicinska asistencija",
        "start": "2018",
        "end": "2019",
        "notes": "Certificirani medicinski asistent (CMA, AAMA). BLS certificiran. Obučen za flebotomiju."
      }
    ],
    "skills": "Prijem pacijenata i vitalni znakovi\nFlebotomija\nEHR (eClinicalWorks)\nCijepljenja\nProvjera osiguranja\nUpravljanje recepcijom",
    "languages": "Engleski (tečno)\nŠpanjolski (tečno)",
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
    "summary": "Motivirani maturant s jakim ocjenama i iskustvom honorarnog rada. Brzo uči, pouzdan i dobar s ljudima. Traži prvu ulogu s punim radnim vremenom ili honorarni posao uz fakultet.",
    "experience": [
      {
        "role": "Prodajni asistent s nepunim radnim vremenom",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "ruj 2024.",
        "end": "",
        "current": true,
        "points": "Poslužujem 50+ kupaca po smjeni vikendom i nakon škole\nRukujem gotovinom, nadopunjujem police i održavam izloge urednima\nPouzdano otvaram trgovinu subotom ujutro"
      },
      {
        "role": "Volonterski podučavatelj",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "sij 2024.",
        "end": "lip 2025.",
        "current": false,
        "points": "Dvaput tjedno podučavao mlađe učenike matematici\nPomagao organizirati ljetni program čitanja za 40 djece"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Srednjoškolska diploma",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "Prosjek 3.6. Popis najboljih studenata, 3 godine. Kapetan debatnog tima."
      }
    ],
    "skills": "Korisnička služba\nRukovanje gotovinom\nTimski rad\nUpravljanje vremenom\nMicrosoft Office\nJavni nastup (debatni tim)",
    "languages": "Engleski (tečno)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Nedavni diplomant \u2014 Poslovna administracija",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Nedavni diplomant poslovne administracije s iskustvom stažiranja u marketingu i operacijama. Organizirao poslovno natjecanje na kampusu s 200 sudionika i završio stažiranje od 6 mjeseci gdje sam prepolovio vrijeme izvještavanja. Željan započeti karijeru s punim radnim vremenom i brzo učiti.",
    "experience": [
      {
        "role": "Marketinški pripravnik",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "sij 2025.",
        "end": "lip 2025.",
        "current": false,
        "points": "Vodio društvene račune tvrtke, povećavši pratitelje s 2,000 na 6,500\nIzradio nadzornu ploču za izvještavanje koja je prepolovila tjedno vrijeme izvještavanja\nNapisao 20 objava na blogu koje su donijele 15,000+ čitanja"
      },
      {
        "role": "Voditelj volontiranja na događajima",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "ruj 2024.",
        "end": "svi 2025.",
        "current": false,
        "points": "Organizirao poslovno natjecanje s 200 sudionika i 12 sudaca\nUpravljao proračunom od $5,000 i timom od 8 volontera"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Poslovna administracija",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dekanov popis, 2 godine. Završni projekt o marketingu malih poduzeća."
      }
    ],
    "skills": "Marketing na društvenim mrežama\nExcel i Google Tablice\nPrezentacijske vještine\nOrganizacija događaja\nTimski rad\nOsnovna analiza podataka",
    "languages": "Engleski (tečno)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Mlađi marketinški suradnik",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Mlađi marketinški suradnik s 2 godine iskustva u sadržaju, e-pošti i društvenim mrežama. Povećao klijentov bilten s 1,000 na 4,000 pretplatnika i vodi kampanje s prosječnom stopom otvaranja od 22%. Spreman za više odgovornosti i veći portfelj klijenata.",
    "experience": [
      {
        "role": "Mlađi marketinški suradnik",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "srp 2024.",
        "end": "",
        "current": true,
        "points": "Povećao newsletter klijenta s 1,000 na 4,000 pretplatnika u 14 mjeseci\nPišem i zakazujem 12 objava tjedno za 4 klijenta\nVodim e-mail kampanje s prosječnom stopom otvaranja od 22%\nMjesečno izvještavam klijente o rezultatima kampanja"
      },
      {
        "role": "Marketinški pripravnik",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "sij 2024.",
        "end": "lip 2024.",
        "current": false,
        "points": "Pisao opise proizvoda za 200+ artikala na web stranici tvrtke\nPomagao voditi proljetnu rasprodajnu kampanju koja je podigla internetske narudžbe za 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Komunikacije",
        "start": "2020",
        "end": "2024",
        "notes": "Prosjek 3.4. Kolegiji iz digitalnog marketinga i medijskog pisanja."
      }
    ],
    "skills": "Pisanje sadržaja\nE-mail marketing (Mailchimp)\nUpravljanje društvenim mrežama\nGoogle Analytics\nCanva\nIzvještavanje klijenata",
    "languages": "Engleski (tečno)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Nadzornik operacija",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Nadzornik operacija s 8 godina iskustva u vođenju skladišnih timova od 20-30 ljudi. Smanjio pogreške pri komisioniranju za 30%, podigao pravovremenu otpremu s 90% na 97% i obučio 15 novih zaposlenika. Spreman za ulogu voditelja operacija s većom lokacijom i proračunom.",
    "experience": [
      {
        "role": "Nadzornik operacija",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "ožu 2021.",
        "end": "",
        "current": true,
        "points": "Nadgledam 25 skladišnih radnika u 2 smjene na lokaciji od 90,000 kvadratnih stopa\nSmanjio pogreške komisioniranja za 30% novim rutinama provjere i skeniranjem crtičnih kodova\nPodigao otpremu na vrijeme s 90% na 97% u 2 godine\nObučio 15 novih početnika i promaknuo 3 u voditelje tima"
      },
      {
        "role": "Voditelj tima",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "lip 2017.",
        "end": "velj 2021.",
        "current": false,
        "points": "Vodio tim od 10 komisionara i pakiratelja u noćnoj smjeni\nUveo raspored koji je smanjio prekovremeni rad za 20% bez probijanja rokova\nVodio sigurnosne upute i održao tim bez nesreća 2 godine"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Upravljanje lancem opskrbe",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma žuti pojas."
      }
    ],
    "skills": "Vodstvo tima (25 zaposlenika)\nSkladišne operacije\nPoboljšanje procesa\nUpravljanje sigurnošću\nKontrola zaliha\nWMS i Excel",
    "languages": "Engleski (tečno)\nHindski (konverzacijski)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Viši projektni voditelj",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Viši projektni voditelj s 14 godina iskustva u isporuci softverskih projekata vrijednih do $8M. Vodio 30+ projekata s 92% pravovremenih isporuka, izgradio PMO od nule i mentorirao 10 projektnih voditelja. Poznat po smirenoj isporuci pod pritiskom i iskrenom izvještavanju rukovodstva.",
    "experience": [
      {
        "role": "Viši projektni voditelj",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "sij 2019.",
        "end": "",
        "current": true,
        "points": "Isporučujem softverske projekte vrijedne do $8M s 92% isporuke na vrijeme\nIzgradio PMO tvrtke od nule: predlošci, izvještavanje i upravljanje\nMentoriram 10 projektnih voditelja i vodim mjesečnu PM zajednicu\nIzravno izvještavam tehničkog direktora o programu od 40 osoba"
      },
      {
        "role": "Projektni voditelj",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "lip 2012.",
        "end": "pro 2018.",
        "current": false,
        "points": "Vodio 20+ projekata za maloprodajne i zdravstvene klijente\nUveo Agile prakse koje su skratile vrijeme isporuke za 25%\nPovećao 2 ključna klijenta s $500k na $2M godišnjeg prihoda"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informacijski sustavi",
        "start": "2008",
        "end": "2012",
        "notes": "PMP certificiran (2015.). Certificirani ScrumMaster. MBA kolegiji (2018.-2019., nedovršeno)."
      }
    ],
    "skills": "Isporuka programa i projekata\nUspostava PMO-a i upravljanje\nAgile i Waterfall\nKontrola proračuna ($8M)\nIzvještavanje rukovoditelja\nMentorstvo tima",
    "languages": "Engleski (tečno)\nŠpanjolski (konverzacijski)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Glavni operativni direktor",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Glavni operativni direktor s 18 godina iskustva u širenju poslovanja maloprodajnih i logističkih tvrtki. Narastao poslovanje od 200 ljudi na 900 ljudi na 6 lokacija, podigao EBITDA maržu s 8% na 14% i vodio 2 akvizicije. Iskustvo u izvještavanju na razini uprave i odnosima s ulagačima.",
    "experience": [
      {
        "role": "Glavni operativni direktor",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "sij 2021.",
        "end": "",
        "current": true,
        "points": "Vodim operacije za 900 ljudi na 6 lokacija s proračunom od $180M\nPodigao EBITDA maržu s 8% na 14% u 3 godine\nVodio 2 preuzimanja i integrirao oba tima unutar 6 mjeseci\nMjesečno izvještavam upravu o operacijama, riziku i rastu"
      },
      {
        "role": "Potpredsjednik operacija",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "lip 2014.",
        "end": "pro 2020.",
        "current": false,
        "points": "Proširio operacije s 200 na 600 ljudi na 4 lokacije\nOtvorio 3 distribucijska centra na vrijeme i ispod proračuna\nIzgradio rukovoditeljski tim koji i danas vodi poslovanje"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Poslovna administracija",
        "start": "2010",
        "end": "2012",
        "notes": "prvostupnik ekonomije, NYU (2006.). Tečaj korporativnog upravljanja (2020.)."
      }
    ],
    "skills": "Operacije velikih razmjera (900 ljudi)\nOdgovornost za dobit i gubitak ($180M)\nSpajanja i preuzimanja\nIzvještavanje upravi\nStrategija rasta\nIzgradnja rukovoditeljskog tima",
    "languages": "Engleski (tečno)",
    "template": "executive"
  }
};
});
