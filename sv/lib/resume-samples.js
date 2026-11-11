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
      "title": "Legitimerad sjuksköterska",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Legitimerad sjuksköterska med 6 års erfarenhet från medicinsk-kirurgiska och telemetrienheter. Skicklig på patientbedömning, IV-behandling, läkemedelsadministrering och elektroniska patientjournaler. Känd för lugn, tydlig kommunikation med patienter och familjer i pressade situationer.",
    "experience": [
      {
        "role": "Legitimerad sjuksköterska",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Vårdar 5-6 patienter per pass på en medicinsk-kirurgisk avdelning med 32 sängplatser, inklusive bedömning, läkemedelsadministrering och sårvård\nUtbilda och mentora 4 nyutexaminerade sjuksköterskor, vilket sänkte deras introduktionstid med 2 veckor\nSänkte läkemedelsfelen på enheten med 18 % genom att införa en dubbelkontrollrutin vid överlämning\nDokumentera all vård korrekt i Epic journalsystem"
      },
      {
        "role": "Sjuksköterska",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Maj 2021",
        "current": false,
        "points": "Körde triage för 40+ drop-in-patienter om dagen, och prioriterade akuta ärenden för vård samma dag\nGav vaccinationer och hälsoundersökningar vid månatliga uppsökande evenemang i samhället\nSamordnade hänvisningar till specialister och följde upp provresultat"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Omvårdnad",
        "start": "2015",
        "end": "2019",
        "notes": "Licens som legitimerad sjuksköterska (Texas). BLS- och ACLS-certifierad."
      }
    ],
    "skills": "Patientbedömning\nIV-behandling och läkemedelsadministrering\nElektroniska patientjournaler (Epic)\nTelemetriövervakning\nPatient- och familjeutbildning\nInfektionskontroll",
    "languages": "Engelska (flytande)\nSpanska (samtalsnivå)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Mjukvaruutvecklare",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Mjukvaruutvecklare med 5 års erfarenhet av att bygga webbapplikationer i Python och JavaScript. Levererade funktioner som används av 200 000+ användare, sänkte API-svarstiderna med 40 % och ledde migreringen av en monolit till mikrotjänster. Stark på testning, kodgranskning och tydlig dokumentation.",
    "experience": [
      {
        "role": "Mjukvaruutvecklare",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Bygg och underhåll kundvända webbfunktioner i Python (Django) och React, för 200 000+ användare\nSänkte den genomsnittliga API-svarstiden från 850 ms till 500 ms genom att lägga till cache och åtgärda långsamma frågor\nLedde migreringen av faktureringstjänsten till mikrotjänster med noll driftstopp\nGranska 10+ pull requests i veckan och mentora 2 juniora utvecklare"
      },
      {
        "role": "Junior utvecklare",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Byggde interna instrumentpaneler i JavaScript som ersatte manuella kalkylblad för 3 team\nSkrev automatiserade tester som höjde täckningen från 45 % till 78 %\nÅtgärdade 120+ buggar i produkten under det första året"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Datavetenskap",
        "start": "2016",
        "end": "2020",
        "notes": "Kurser i databaser, algoritmer och operativsystem."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript och React\nPostgreSQL och Redis\nREST-API:er och mikrotjänster\nGit och CI/CD\nAutomatiserad testning (pytest, Jest)",
    "languages": "Engelska (flytande)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Lågstadielärare",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Lågstadielärare med 7 års erfarenhet av att undervisa årskurs 3-5. Skicklig på differentierad undervisning, klassrumshantering och föräldrakommunikation. Höjde läsförmågan i min klass från 58 % till 81 % under två läsår.",
    "experience": [
      {
        "role": "Lågstadielärare (årskurs 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "Undervisa läsning, matematik och naturvetenskap för en klass på 26 elever, inklusive 5 med individuella lärandeplaner\nHöjde klassens läsförmåga från 58 % till 81 % på två år genom guidade läsgrupper\nDriv ett veckovist föräldra-nyhetsbrev och terminsvisa framstegsmöten för varje familj\nLed skolans läsclub för 40 elever i årskurs 3-5"
      },
      {
        "role": "Lågstadielärare (årskurs 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Aug 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Planerade och höll dagliga lektioner för 24 elever i alla kärnämnen\nInförde beteenderutiner som halverade störningarna i klassrummet\nOrganiserade årskursens naturvetenskapsmässa med 120 elever och 80 föräldrar"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Grundskoleutbildning",
        "start": "2014",
        "end": "2018",
        "notes": "Statlig lärarlicens (Ohio, årskurs K-5). Läsbehörighet."
      }
    ],
    "skills": "Differentierad undervisning\nKlassrumshantering\nGuidade läsgrupper\nFöräldrakommunikation\nLektionsplanering\nGoogle Classroom",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Senior redovisningsekonom",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA med 8 års erfarenhet av månadsbokslut, finansiell rapportering och internrevision. Stängde böckerna 3 dagar snabbare genom att bygga om avstämningsprocessen och hittade $240 000 i återvinningsbara överbetalningar under ett revisionsår. Stark i Excel, QuickBooks och ERP-system.",
    "experience": [
      {
        "role": "Senior redovisningsekonom",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Äg månadsbokslutet för en affärsenhet på $40M, och avsluta 3 dagar snabbare efter att ha byggt om avstämningarna\nFörbered månatliga finansiella rapporter och avvikelseanalyser för senior ledning\nHittade $240 000 i återvinningsbara överbetalningar till leverantörer under den interna revisionen 2024\nHandleda 2 redovisningsekonomer och granska deras journalposter"
      },
      {
        "role": "Redovisningsekonom",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "Förberedde skattedeklarationer och finansiella rapporter för 25 småföretagsklienter\nAssisterade vid revisioner av 8 klienter, testade kontroller och dokumenterade iakttagelser\nAutomatiserade anläggningsregistret i Excel, vilket sparar 6 timmar i månaden"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Redovisning",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Medlem i AICPA."
      }
    ],
    "skills": "Månadsbokslut och avstämningar\nFinansiell rapportering och avvikelseanalys\nInternrevision\nExcel (pivottabeller, VLOOKUP)\nQuickBooks och SAP\nSkatteförberedelse",
    "languages": "Engelska (flytande)\nMandarin (samtalsnivå)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Lastbilschaufför med CDL klass A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Chaufför med CDL klass A och 9 års erfarenhet av långdistans- och regionala transporter. Över 900 000 olycksfria mil, leveranssäkerhet i tid på 99 % och erfarenhet av kyl-, flatbed- och torrlast. Rent körregister, behörigheter för farligt gods och tank.",
    "experience": [
      {
        "role": "Långdistanschaufför",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Kör 2 800+ mil i veckan på regionala rutter i Texas, Oklahoma och New Mexico\nUpprätthåll en leveranssäkerhet i tid på 99 % över 1 100+ laster per år\nTransportera kyl- och torrlast; utför inspektioner före och efter varje tur dagligen\nÖver 900 000 olycksfria mil totalt"
      },
      {
        "role": "Leveranschaufför",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mar 2016",
        "end": "Mar 2019",
        "current": false,
        "points": "Levererade byggmaterial till 15-20 arbetsplatser om dagen i Dallas-Fort Worth-området\nKörde gaffeltruckar och säkrade flatbedlaster enligt DOT-standarder\nHöll leveranspapper och loggar korrekta med noll DOT-överträdelser"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certifikat",
        "field": "Kommersiell körning (CDL klass A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL klass A med behörigheter för farligt gods och tank. Rent körregister."
      }
    ],
    "skills": "Långdistans- och regional körning\nKyl- och flatbedlaster\nDOT-regler och loggböcker\nInspektioner före tur\nRuttplanering (GPS, ELD)\nGaffeltruckskörning",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Butikssäljare",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Butikssäljare med 4 års erfarenhet från elektronik- och klädbutiker. Konsekvent bland de 3 bästa säljarna i teamet, med en merförsäljningsgrad på 32 % på garantier och tillbehör. Vänlig, snabb i kassan och betrodd att öppna och stänga butiken.",
    "experience": [
      {
        "role": "Senior säljassistent",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Sälj elektronik och tillbehör till 60+ kunder om dagen; topp 3 i butiksförsäljning i 8 raka kvartal\nUppnå en merförsäljningsgrad på 32 % på garantier och tillbehör, högst i teamet\nUtbilda 6 nyanställda i kassan, lagret och kundtjänststandarderna\nBetrodd nyckelinnehavare: öppna och stäng butiken och hantera kontanträkningar"
      },
      {
        "role": "Säljare",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Hjälpte kunder att välja kläder och storlekar på ett hektiskt butiksgolv\nHöll hyllorna prydliga och fyllde på under varje pass\nHanterade returer och byten artigt, och höll klagomålen till ett minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate Degree",
        "field": "Företag",
        "start": "2019",
        "end": "2021",
        "notes": "Deltidsstudier vid sidan av arbete i detaljhandeln."
      }
    ],
    "skills": "Kundtjänst och merförsäljning\nKontanthantering och POS-system\nProduktkunskap (elektronik)\nStock management\nLagerhantering\nTeamutbildning",
    "languages": "Engelska (flytande)\nSpanska (flytande)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Kundtjänstmedarbetare",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Kundtjänstmedarbetare med 5 års erfarenhet av att hantera support via telefon, e-post och livechatt. Löser 45+ ärenden om dagen med en nöjdhetspoäng på 96 % och en lösningsgrad vid första kontakt på 88 %. Lugn med arga kunder och snabb på att hitta lösningen.",
    "experience": [
      {
        "role": "Kundtjänstmedarbetare",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "Maj 2021",
        "end": "",
        "current": true,
        "points": "Hantera 45+ ärenden via telefon, e-post och chatt om dagen för fakturering, beställningar och tekniska fel\nHåller en kundnöjdhet på 96 % och en lösningsgrad vid första kontakt på 88 %\nAvtrappa svåra samtal och förvandla klagomål till återkommande affärer\nUtbilda 5 nya medarbetare i manus, system och ton"
      },
      {
        "role": "Supportmedarbetare",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "Besvarade kundmejl och chattar om beställningar, returer och återbetalningar\nHöll den genomsnittliga första svarstiden under 2 timmar\nSkrev 20 hjälpcenterartiklar som sänkte upprepade frågor med en fjärdedel"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate Degree",
        "field": "Företagsekonomi",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Support via telefon, e-post och livechatt\nKlagomålshantering och avtrappning\nCRM-system (Zendesk, Salesforce)\nFakturerings- och orderfrågor\nSkriver 55 ord/min\nTeamutbildning",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Verksamhetschef",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Verksamhetschef med 12 års erfarenhet av att driva team på upp till 80 personer inom lager och distribution. Sänkte orderhanteringskostnaderna med 22 %, höjde leveranser i tid från 91 % till 98 % och öppnade två nya platser i tid och under budget.",
    "experience": [
      {
        "role": "Verksamhetschef",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Driv ett distributionscenter på 120 000 sq ft med 80 anställda i 3 skift\nSänkte orderhanteringskostnaderna med 22 % genom att omdesigna plockvägar och skiftmönster\nHöjde leveranser i tid från 91 % till 98 % på 18 månader\nÖppnade 2 nya platser i tid och 8 % under budget"
      },
      {
        "role": "Lagerhandledare",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Handledde 25 lageranställda och den dagliga expedieringen av 4 000+ beställningar\nInförde streckkodsskanning, vilket sänkte plockfelen med 35 %\nKörde säkerhetsutbildning som höll platsen olycksfri i 3 år"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Verksamhetsledning",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Teamledning (upp till 80 anställda)\nLager och distribution\nProcessförbättring\nBudgetering och kostnadskontroll\nSäkerhetshantering\nERP- och WMS-system",
    "languages": "Engelska (flytande)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Legitimerad elektriker",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Legitimerad gesällelektriker med 8 års erfarenhet av bostads- och kommersiellt arbete. Skicklig på kablage, paneluppgraderingar, belysning och felsökning, med ett rent säkerhetsregister över 400+ jobb. Kunskap om NEC-koden och erfarenhet av att handleda lärlingar.",
    "experience": [
      {
        "role": "Gesällelektriker",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mar 2019",
        "end": "",
        "current": true,
        "points": "Slutför 400+ bostads- och kommersiella jobb: kablage, paneluppgraderingar, belysning och EV-laddare\nDiagnostisera och reparera fel snabbt, med en åtgärdsgrad vid första besök på 92 %\nHandleda 2 lärlingar och godkänn deras arbete enligt kod\nHåller ett rent säkerhetsregister med noll förlorade arbetsskador"
      },
      {
        "role": "Elektrikerlärling",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Assisterade legitimerade elektriker vid nybyggnadskablage och omdragningar\nLärde mig böja ledningar, dra kablar och installera paneler\nSlutförde 8 000 lärlingstimmar och klarade gesällprovet vid första försöket"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certifikat",
        "field": "Elteknik",
        "start": "2015",
        "end": "2016",
        "notes": "Legitimerad gesällelektriker (Colorado). OSHA 30-certifierad."
      }
    ],
    "skills": "Kablage för bostäder och kommersiellt\nPaneluppgraderingar och EV-laddare\nFelsökning och testning\nEfterlevnad av NEC-kod\nBöjning av ledningar och kabeldragning\nHandledning av lärlingar",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Finansanalytiker",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Finansanalytiker med 6 års erfarenhet av budgetering, prognostisering och investeringsanalys. Byggde prognosmodeller som sänkte budgetavvikelsen med 30 % och stödde investeringsbeslut på $50M. Stark i Excel, SQL och finansiell modellering.",
    "experience": [
      {
        "role": "Finansanalytiker",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Bygg månadsprognoser och årsbudgetar för en portfölj på $120M\nSänkte budgetavvikelsen med 30 % med en förardriven prognosmodell\nStöd investeringsbeslut värda $50M med värdering och scenarioanalys\nPresentera iakttagelser månadsvis för CFO och avdelningschefer"
      },
      {
        "role": "Junior finansanalytiker",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Förberedde veckovisa prestationsrapporter för 12 filialer\nAutomatiserad rapportering i Excel, vilket sparar 10 timmar i veckan\nAssisterade kreditteamet med analys av låneportföljen"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finans",
        "start": "2015",
        "end": "2019",
        "notes": "CFA-kandidat nivå II. Kurser i värdering och företagsfinansiering."
      }
    ],
    "skills": "Finansiell modellering och prognostisering\nBudgetering och avvikelseanalys\nVärdering (DCF, jämförelser)\nExcel (avancerad) och SQL\nBloomberg Terminal\nDatavisualisering (Power BI)",
    "languages": "Engelska (flytande)\nHindi (flytande)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "New York, NY",
      "title": "Väg- och vattenbyggnadsingenjör",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Väg- och vattenbyggnadsingenjör (PE) med 7 års erfarenhet av väg- och vatteninfrastrukturdesign. Ledde utformningen av en 12-mil lång motorvägsbreddning och ett dagvattensystem för 8 000 bostäder. Skicklig på AutoCAD Civil 3D, kostnadsberäkning och tillståndssamordning.",
    "experience": [
      {
        "role": "Väg- och vattenbyggnadsingenjör",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Led utformningen av en 12-mil lång motorvägsbreddning, från mätning till bygghandlingar\nDesignade ett dagvattensystem för 8 000 bostäder, godkänt vid första försöket av staden\nSamordna tillstånd med 4 myndigheter och hantera en designbudget på $2,5M\nGranska och stämpla ritningar som legitimerad Professional Engineer"
      },
      {
        "role": "Junior väg- och vattenbyggnadsingenjör",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "Förberedde planerings- och dräneringsritningar för 20+ bostadsprojekt\nKörde kostnadsberäkningar och mängdavtagningar för vägprojekt\nNärvarade vid platsinspektioner och skrev lägesrapporter"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Väg- och vattenbyggnad",
        "start": "2014",
        "end": "2018",
        "notes": "Legitimerad ingenjör (Professional Engineer, Washington). EIT klarad 2018."
      }
    ],
    "skills": "Väg- och dräneringsdesign\nAutoCAD Civil 3D\nDagvattenmodellering\nKostnadsberäkning\nTillståndssamordning\nProjektschemaläggning (MS Project)",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Maskiningenjör",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Maskiningenjör med 6 års erfarenhet av att designa VVS-system och produktionsutrustning. Sänkte energianvändningen med 18 % på 3 anläggningar med omdesignade kanaler och styrningar, och ledde en maskinomkonstruktion som höjde produktionen med 25 %. Skicklig på SolidWorks, FEA och termisk analys.",
    "experience": [
      {
        "role": "Maskiningenjör",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Designa VVS- och produktionsutrustning för 3 anläggningar med 400+ anställda\nSänkte energianvändningen med 18 % genom att omdesigna kanaler och styrsekvenser\nLedde en maskinomkonstruktion som höjde produktionen med 25 % utan extra golvyta\nKör FEA och termisk analys på nya delar före prototypframställning"
      },
      {
        "role": "Junior maskiningenjör",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Modellerade delar och sammansättningar i SolidWorks för bilkunder\nFörberedde ritningar, materiallistor och testrapporter\nStödde prototypbyggen och löste passningsproblem på verkstadsgolvet"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Maskinteknik",
        "start": "2015",
        "end": "2019",
        "notes": "Kurser i termodynamik, fluidmekanik och maskinkonstruktion."
      }
    ],
    "skills": "VVS-design\nSolidWorks och AutoCAD\nFEA och termisk analys\nMaskinkonstruktion\nEnergieffektivitet\nGD&T och toleranser",
    "languages": "Engelska (flytande)\nKoreanska (samtalsnivå)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektroingenjör",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Elektroingenjör med 6 års erfarenhet av inbyggda system och kraftelektronik. Designade styrkort som nu används i 50 000+ enheter och sänkte kortkostnaden med 22 % genom omkonstruktion av komponenter. Skicklig på Altium, C, firmwaretestning och EMC-överensstämmelse.",
    "experience": [
      {
        "role": "Elektroingenjör",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Designa inbyggda styrkort som används i 50 000+ enheter per år\nSänkte kortkostnaden med 22 % genom att omdesigna effektsteget och hitta alternativa komponenter\nLed EMC-överensstämmelsetestning, godkänd vid första försöket på 4 produktlinjer\nSkriv och granska firmware i C för mikrokontroller"
      },
      {
        "role": "Junior elektroingenjör",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Layoutade kretskort i Altium för konsument- och industrikunder\nByggde och testade prototyper, felsökte maskinvarufel\nSkrev testprocedurer som sänkte produktionstesttiden med 30 %"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektroteknik",
        "start": "2015",
        "end": "2019",
        "notes": "Kurser i inbyggda system, kraftelektronik och signalbehandling."
      }
    ],
    "skills": "Inbyggda system och kretskortsdesign\nAltium Designer\nC och firmware\nKraftelektronik\nEMC-överensstämmelsetestning\nOscilloskop och labbinstrument",
    "languages": "Engelska (flytande)\nGujarati (samtalsnivå)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Dataanalytiker",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Dataanalytiker med 4 års erfarenhet av att omvandla försäljnings- och verksamhetsdata till beslut. Byggde instrumentpaneler som används av 60+ chefer, sänkte den månatliga rapporteringstiden från 3 dagar till 4 timmar och hittade ett prissättningsfel värt $180 000 per år. Stark i SQL, Excel och Power BI.",
    "experience": [
      {
        "role": "Dataanalytiker",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Bygg Power BI-instrumentpaneler som används av 60+ butiks- och regionchefer\nSänkte den månatliga rapporteringen från 3 dagar till 4 timmar med automatiserade SQL-pipelines\nHittade ett prissättningsfel värt $180 000 per år genom att granska kampanjdata\nPresentera iakttagelser månadsvis för det kommersiella teamet"
      },
      {
        "role": "Junior dataanalytiker",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Aug 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "Rensade och slog samman leveransdata från 4 system till en rapporteringstabell\nByggde Excel-spårare som ersatte manuella räkningar för 2 team\nBesvarade ad hoc-datafrågor för verksamhetschefer dagligen"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistik",
        "start": "2016",
        "end": "2020",
        "notes": "Kurser i regression, databaser och datavisualisering."
      }
    ],
    "skills": "SQL och datarensning\nPower BI och Tableau\nExcel (avancerad)\nPython (pandas)\nInstrumentpanelsdesign\nGrunder i A/B-testning",
    "languages": "Engelska (flytande)\nVietnamesiska (samtalsnivå)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Datavetare",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Datavetare med 5 års erfarenhet av att bygga maskininlärningsmodeller för e-handel. En rekommendationsmodell jag levererade höjde intäkten per besök med 12 %, och en churn-modell flaggar nu 80 % av riskkunder. Stark i Python, SQL och modelldistribution.",
    "experience": [
      {
        "role": "Datavetare",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Levererade en rekommendationsmodell som höjde intäkten per besök med 12 %\nByggde en churn-modell som flaggar 80 % av riskkunder en månad i förväg\nDistribuerade modeller till produktion med övervaknings- och omträningspipelines\nPresentera modellresultat för produkt- och marknadsteam månadsvis"
      },
      {
        "role": "Junior datavetare",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Byggde prognosmodeller för 3 detaljhandelsklienter med 90 %+ noggrannhet\nRensade och förberedde datamängder på 10M+ rader för modellering\nSkrev dokumentation så att klienter kunde köra modellerna själva igen"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Datavetenskap",
        "start": "2018",
        "end": "2020",
        "notes": "Avhandling om rekommendationssystem. BS i matematik (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMaskininlärning och statistik\nSQL och Spark\nModelldistribution (Docker, AWS)\nA/B-testning\nDatavisualisering",
    "languages": "Engelska (flytande)\nArabiska (flytande)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webbutvecklare",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webbutvecklare med 4 års erfarenhet av att bygga snabba, tillgängliga webbplatser i HTML, CSS och JavaScript. Byggde om en butiks kassa som höjde konverteringarna med 18 % och underhåller 12 klientwebbplatser med 99,9 % drifttid. Stark på responsiv design, prestanda och SEO-grunder.",
    "experience": [
      {
        "role": "Webbutvecklare",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Bygg responsiva webbplatser i HTML, CSS, JavaScript och WordPress för 12 klienter\nByggde om en butikskassa som höjde konverteringarna med 18 %\nSänkte den genomsnittliga sidladdningstiden från 4,2s till 1,8s med bild- och kodoptimering\nHåller alla klientwebbplatser på 99,9 % drifttid med övervakning och säkerhetskopior"
      },
      {
        "role": "Junior webbutvecklare",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Byggde landningssidor och rättade buggar på 20+ småföretagswebbplatser\nLärde mig Git, responsiv design och grundläggande SEO på liveprojekt\nBesvarade klientmejl och gjorde innehållsuppdateringar samma dag"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Datavetenskap",
        "start": "2017",
        "end": "2021",
        "notes": "Kurser i webbutveckling, databaser och människa-datorinteraktion."
      }
    ],
    "skills": "HTML, CSS och JavaScript\nReact och WordPress\nResponsiv design\nSidhastighetsoptimering\nGit och GitHub\nGrundläggande SEO",
    "languages": "Engelska (flytande)\nSpanska (flytande)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafisk formgivare",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafisk formgivare med 5 års erfarenhet av varumärkesarbete, förpackningar och design för sociala medier. Skapade varumärkesidentiteter för 25+ småföretag och en förpackningsomdesign som höjde hyllförsäljningen med 14 %. Skicklig på Adobe Illustrator, Photoshop och Figma.",
    "experience": [
      {
        "role": "Grafisk formgivare",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Designa varumärkesidentiteter, förpackningar och sociala kampanjer för 25+ klienter\nFörpackningsomdesign för ett livsmedelsvarumärke höjde hyllförsäljningen med 14 %\nProducera 30+ sociala tillgångar i veckan på Instagram, TikTok och Facebook\nPresentera koncept för klienter och revidera snabbt utifrån feedback"
      },
      {
        "role": "Junior grafisk formgivare",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "Designade flygblad, menyer och sociala inlägg för lokala restauranger och butiker\nFörberedde tryckfärdiga filer och kontrollerade provtryck med tryckerier\nByggde ett mallbibliotek som minskade designtiden med en tredjedel"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafisk design",
        "start": "2016",
        "end": "2020",
        "notes": "Portfölj i varumärkes- och förpackningsdesign."
      }
    ],
    "skills": "Adobe Illustrator och Photoshop\nFigma\nVarumärkesidentitetsdesign\nFörpackningsdesign\nDesign för sociala medier\nTryckproduktion",
    "languages": "Engelska (flytande)\nKoreanska (samtalsnivå)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX-designer",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX-designer med 5 års erfarenhet av att forska om användare och designa mobil- och webbprodukter. Omdesignade ett introduktionsflöde som sänkte avhoppet med 35 % och körde 40+ användbarhetstester. Skicklig på Figma, användarforskning, wireframing och prototypframställning.",
    "experience": [
      {
        "role": "UX-designer",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Omdesignade mobil introduktion, vilket sänkte avhoppet med 35 % på 3 månader\nKör 40+ användbarhetstester och användarintervjuer per år\nBygg wireframes och prototyper i Figma för 2 produktteam\nArbeta dagligen med ingenjörer och produktchefer om leverans"
      },
      {
        "role": "Junior UX-designer",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Aug 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Designade skärmar och flöden för 5 klientappar\nKörde de första användbarhetstesterna och skrev upp iakttagelserna för klienter\nByggde ett komponentbibliotek som snabbspolade designöverlämningen"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psykologi",
        "start": "2016",
        "end": "2020",
        "notes": "UX-designcertifikat (General Assembly, 2020). Kurser i människa-datorinteraktion."
      }
    ],
    "skills": "Användarforskning och användbarhetstestning\nWireframing och prototyper (Figma)\nInformationsarkitektur\nDesignsystem\nJourney mapping\nIntressentworkshops",
    "languages": "Engelska (flytande)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marknadschef",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marknadschef med 8 års erfarenhet av B2B- och konsumentkampanjer. Växte kvalificerade leads med 60 % på ett år, lanserade en produktlinje som nådde $3M i försäljning första året och hanterar en årlig budget på $500 000 i ett team på 5.",
    "experience": [
      {
        "role": "Marknadschef",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Led ett team på 5 och en årlig marknadsbudget på $500 000\nVäxte kvalificerade leads med 60 % på ett år med innehåll och betalda kampanjer\nLanserade en produktlinje som nådde $3M i försäljning första året\nSänkte kostnaden per lead med 28 % genom att bygga om kampanjinriktningen"
      },
      {
        "role": "Marknadsspecialist",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Körde e-postkampanjer till 80 000 prenumeranter med en öppningsgrad på 24 %\nHanterade sociala konton som växte från 5 000 till 40 000 följare\nOrganiserade 6 mässmontrar per år, vilket genererade 300+ leads vardera"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marknadsföring",
        "start": "2013",
        "end": "2017",
        "notes": "Kurser i konsumentbeteende, analys och varumärkeshantering."
      }
    ],
    "skills": "Kampanjstrategi och planering\nInnehålls- och e-postmarknadsföring\nBetald annonsering (Google, Meta)\nMarknadsanalys (GA4)\nTeamledning\nBudgethantering",
    "languages": "Engelska (flytande)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektledare",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektledare (PMP) med 7 års erfarenhet av att leverera programvaru- och byggprojekt i tid och inom budget. Hanterade 15 projekt värda upp till $4M, med en leveranssäkerhet i tid på 94 %. Skicklig på Agile, riskhantering och intressentkommunikation.",
    "experience": [
      {
        "role": "Projektledare",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Hantera 15 projekt värda upp till $4M, med en leveranssäkerhet i tid på 94 %\nKör agila sprintar för 3 team och rapportera framsteg till chefer varje vecka\nSänkte projektöverskridanden med 30 % med tidigare riskgranskningar\nSamordna leverantörer, klienter och interna team i 4 tidszoner"
      },
      {
        "role": "Projektkoordinator",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "Spårade scheman, budgetar och tillstånd för 8 byggprojekt\nFörberedde statusrapporter och mötesanteckningar för klienter\nLöste schemakonflikter som sparade 2 veckor på ett skolbygge"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Företagsekonomi",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-certifierad (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Projektplanering och schemaläggning\nAgile och Scrum\nRiskhantering\nBudgetkontroll\nIntressentkommunikation\nMS Project och Jira",
    "languages": "Engelska (flytande)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "HR-chef",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "HR-chef med 9 års erfarenhet av rekrytering, personalrelationer och förmåner. Sänkte tiden till anställning från 45 till 28 dagar, höjde personalbehållningen med 15 % och driver HR för 250 anställda på 3 platser. Kunskap på CIPD-nivå om arbetsrätt och policy.",
    "experience": [
      {
        "role": "HR-chef",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Driv HR för 250 anställda på 3 platser, med ett team på 3\nSänkte tiden till anställning från 45 till 28 dagar genom att bygga om intervjuprocessen\nHöjde behållningen med 15 % med ett nytt introduktions- och utvärderingsprogram\nHantera personalrelationer, klagomål och policyuppdateringar"
      },
      {
        "role": "HR-generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "Rekryterade 120+ anställda per år för hotell och restauranger\nKörde lönekontroller och förmånsregistrering för 400 anställda\nLöste personalkonflikter och höll omsättningen under branschgenomsnittet"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Personalresurser",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP-certifierad. Kurser i arbetsrätt och organisationsbeteende."
      }
    ],
    "skills": "Rekrytering och introduktion\nPersonalrelationer\nFörmåner och lön\nArbetsrätt\nPrestationshantering\nHRIS (Workday, BambooHR)",
    "languages": "Engelska (flytande)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Biträdande jurist",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Biträdande jurist med 6 års erfarenhet av affärstvist och avtalsrätt. Hanterade 40+ ärenden, vann summarisk dom i 8, och upprättade avtal värda $25M. Antagen till Illinois advokatsamfund; skicklig på juridisk research, drafting och klientrådgivning.",
    "experience": [
      {
        "role": "Biträdande jurist",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "Hantera 40+ affärstvistärenden från inlämning till förlikning\nVann summarisk dom i 8 ärenden och avgjorde 20 till fördelaktigt\nUpprätta och förhandla avtal värda upp till $25M\nGer råd till klienter personligen och skriftligen om risk och strategi"
      },
      {
        "role": "Juridikbiträde",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Aug 2019",
        "end": "Aug 2020",
        "current": false,
        "points": "Researchade rättspraxis och upprättade promemorior för 2 domare\nGranskade yrkanden och förberedde bänksammanfattningar för 100+ förhandlingar\nObserverade rättegångar och förlikningskonferenser i civilavdelningar"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Juridik",
        "start": "2016",
        "end": "2019",
        "notes": "Antagen till Illinois advokatsamfund (2019). Law review, artiklarredaktör."
      }
    ],
    "skills": "Affärstvist\nUpprättande och förhandling av avtal\nJuridisk research (Westlaw, LexisNexis)\nKlientrådgivning\nVittnesförhör och discovery\nDomstolsinlämningar och förfarande",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinisk farmaceut",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinisk farmaceut (PharmD) med 7 års erfarenhet inom sjukhus- och öppenvårdsapotek. Granskar 100+ läkemedelsbeställningar om dagen, sänkte läkemedelsbiverkningar med 25 % genom ett nytt kontrollprotokoll och ger råd till patienter om säker läkemedelsanvändning. Legitimerad i Pennsylvania.",
    "experience": [
      {
        "role": "Klinisk farmaceut",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Granska 100+ läkemedelsbeställningar om dagen för säkerhet, dosering och interaktioner\nSänkte läkemedelsbiverkningar med 25 % med ett nytt dubbelkontrollprotokoll\nGer råd till läkare och sjuksköterskor om läkemedelsval för komplexa patienter\nDriv sjukhusets antibiotikastyrningsronder två gånger i veckan"
      },
      {
        "role": "Apoteksfarmaceut",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "Expedierade 200+ recept om dagen med noll expedieringsfel\nRådge patienter om nya läkemedel, biverkningar och förvaring\nGav influensavaccinationer och körde blodtryckskontroller"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Apotek",
        "start": "2014",
        "end": "2018",
        "notes": "Legitimerad farmaceut (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Läkemedelsgranskning och säkerhet\nKlinisk farmakologi\nPatientrådgivning\nApotekssystem (Epic, PioneerRx)\nAntibiotikastyrning\nVaccinationstjänster",
    "languages": "Engelska (flytande)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Allmäntandläkare",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Allmäntandläkare (DDS) med 8 års erfarenhet av restaurerande, kosmetisk och förebyggande tandvård. Behandlar 25+ patienter om dagen i en mottagning med 2 000 patienter, med en patientnöjdhet på 98 %. Skicklig på kronor, implantat, rotfyllningar och osynliga tandställningar.",
    "experience": [
      {
        "role": "Allmäntandläkare",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Behandla 25+ patienter om dagen: fyllningar, kronor, rotfyllningar och extraktioner\nHåller en patientnöjdhet på 98 % över 1 200+ omdömen\nPlacera 15+ implantat i månaden och hantera clear aligner-ärenden\nHandleda 2 tandhygienister och 4 tandsköterskeassistenter"
      },
      {
        "role": "Biträdande tandläkare",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Gav allmän tandvård för en mottagning med 1 500 patienter\nInförde kronor samma dag, vilket sänkte återbesöken med 40 %\nKörde skolbesök om barns munhälsa"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Tandvård",
        "start": "2013",
        "end": "2017",
        "notes": "Legitimerad tandläkare (Arizona). Invisalign-certifierad. HLR/BLS-certifierad."
      }
    ],
    "skills": "Restaurerande tandvård (kronor, fyllningar)\nRotfyllningsbehandling\nTandimplantat\nOsynliga tandställningar (clear aligners)\nPatientvård och kommunikation\nDigitala röntgenbilder och CEREC",
    "languages": "Engelska (flytande)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fysioterapeut",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fysioterapeut (DPT) med 6 års erfarenhet av ortopedisk och idrottsrehabilitering. Behandlar 12-15 patienter om dagen, där 90 % når sina mål inom de planerade behandlingarna. Skicklig på manuell terapi, träningsrecept och tester för återgång till sport.",
    "experience": [
      {
        "role": "Fysioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Behandla 12-15 patienter om dagen för idrottsskador, postkirurgisk rehab och ryggsmärtor\n90 % av patienterna når sina mål inom det planerade antalet behandlingar\nDesigna tester för återgång till sport som används av 3 lokala lag\nMentora 2 nyutexaminerade och handled studentplaceringar"
      },
      {
        "role": "Fysioterapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Aug 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Gav slutenvårdsrehabilitering för postkirurgiska patienter och strokepatienter\nKörde gruppträningspass för 20+ äldre patienter i veckan\nDokumenterade framsteg i Epic och lämnade över till avdelningsteam"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fysioterapi",
        "start": "2016",
        "end": "2019",
        "notes": "Legitimerad fysioterapeut (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Ortopedisk och idrottsrehabilitering\nManuell terapi\nTräningsrecept\nTester för återgång till sport\nPatientutbildning\nDokumentation (Epic)",
    "languages": "Engelska (flytande)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Kökschef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Kökschef med 10 års erfarenhet av kreolska och moderna amerikanska kök. Leder en brigad på 12 i en restaurang med 200 platser, sänkte matkostnaderna med 15 % genom striktare beställningar och vann 'Bästa nya meny' från stadens matguide 2025.",
    "experience": [
      {
        "role": "Kökschef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Led en brigad på 12 i en restaurang med 200 platser som serverar 300+ gäster per kväll\nSänkte matkostnaderna med 15 % med striktare beställningar och en säsongsmeny\nVann 'Bästa nya meny' från stadens matguide 2025\nDesigna menyer, utbilda kockar och driv passet under fredags- och lördagsservering"
      },
      {
        "role": "Souschef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "Drev köket när kökschefen var borta, med 150 gäster per kväll\nHanterade lager, beställningar och leverantörsrelationer\nUtbildade 8 linjekockar och sänkte personalomsättningen med en tredjedel"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diplom",
        "field": "Kulinarisk konst",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe-certifierad som Food Protection Manager."
      }
    ],
    "skills": "Menydesign och kalkylering\nKreolsk och modern amerikansk matlagning\nKöksledning (brigad på 12)\nLivsmedelssäkerhet (ServSafe)\nLeverantörshantering\nBankett- och eventcatering",
    "languages": "Engelska (flytande)\nSpanska (flytande)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Polis",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Polis med 8 års erfarenhet av patrull, samhällspolisarbete och utredningar. Svarar på 30+ larm i veckan, med utmärkelser för avtrappning och samhällsarbete. Utbildad i krisintervention, första hjälpen och rapportskrivning.",
    "experience": [
      {
        "role": "Polis",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Patrullera ett distrikt med 40 000 invånare, och svara på 30+ larm i veckan\nFick 2 utmärkelser för avtrappning och samhällsarbete\nUtreda stölder och överfall, och skriva rapporter som använts i 50+ åtal\nMentora 3 nya poliser under fältutbildning"
      },
      {
        "role": "Patrullpolis",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Aug 2017",
        "end": "Maj 2019",
        "current": false,
        "points": "Patrullerade länsvägar och svarade på nödsamtal\nDelgav domstolshandlingar och assisterade vid fångtransporter\nSlutförde utbildning i krisintervention och första hjälpen"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certifikat",
        "field": "Brottsbekämpning",
        "start": "2017",
        "end": "2017",
        "notes": "Utexaminerad från Ohio Peace Officer Training Academy. Utbildad i krisinterventionsteam."
      }
    ],
    "skills": "Patrull och akutinsatser\nSamhällspolisarbete\nKrisintervention och avtrappning\nRapportskrivning\nUtredningar\nFörsta hjälpen och HLR",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Brandman / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Brandman och EMT med 7 års erfarenhet av brandbekämpning, räddning och akut medicinsk respons. Svarade på 900+ larm, inklusive husbränder, fordonsräddningar och medicinska nödsituationer. Utbildad för farligt gods med ett rent säkerhetsregister.",
    "experience": [
      {
        "role": "Brandman / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mar 2020",
        "end": "",
        "current": true,
        "points": "Svara på 900+ brand-, räddnings- och medicinska larm i ett distrikt med 3 stationer\nGe akut medicinsk vård som certifierad EMT vid 60 % av larmen\nUtbildad för farligt gods; leder sanering vid kemikalieincidenter\nUtbilda nya rekryter i slanghantering, stegar och söktekniker"
      },
      {
        "role": "Frivillig brandman",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Svarade på vildmarks- och husbränder som volontär\nSlutförde utbildningarna Brandman I & II och EMT-Basic\nHjälpte till att hålla brandskyddssamtal i skolor"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certifikat",
        "field": "Brandvetenskap",
        "start": "2017",
        "end": "2018",
        "notes": "Brandman I &amp; II. EMT-Basic-certifierad. Utbildad för insatser med farligt gods."
      }
    ],
    "skills": "Brandbekämpning och räddning\nAkut medicinsk vård (EMT)\nInsatser med farligt gods\nStegar, slangar och ventilation\nSamhällsbrandskydd\nTeamarbete under press",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Legitimerad rörmokare",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Legitimerad mästerörmokare med 11 års erfarenhet av bostads- och kommersiellt VVS. Slutförde 600+ jobb per år, från grovinstallationer till panninstallationer, med en åtgärdsgrad vid första besök på 98 %. Skicklig på rörmontage, avloppsrensning och kodefterlevnad.",
    "experience": [
      {
        "role": "Mästerörmokare",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Slutför 600+ bostads- och kommersiella jobb per år\nInstallera pannor, varmvattenberedare och kompletta badrumsinstallationer\nHåller en åtgärdsgrad vid första besök på 98 % på serviceuppdrag\nHandleda 3 lärlingar och godkänn deras arbete"
      },
      {
        "role": "Gesällrörmokare",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dec 2018",
        "current": false,
        "points": "Körde nybyggnads-VVS för 40+ hus per år\nRensade avlopp och reparerade läckor för bostäder och restauranger\nLärde mig gasmontage och backventilsskydd"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certifikat",
        "field": "VVS-teknik",
        "start": "2013",
        "end": "2014",
        "notes": "Mästerörmokarlicens (Tennessee). Certifierad för backventilsskydd."
      }
    ],
    "skills": "VVS för bostäder och kommersiellt\nRörmontage och lödning\nAvloppsrensning och kamera-inspektion\nPann- och varmvattenberedareinstallationer\nGasmontage\nEfterlevnad av VVS-kod",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Gesällsnickare",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Gesällsnickare med 9 års erfarenhet av stommar, finisharbete och skräddarsydda skåp. Byggde stommar till 30+ hus och monterade kök i 60+ hem, med rykte om exakta mått och rena ytor. Skicklig på att läsa ritningar och arbeta enligt kod.",
    "experience": [
      {
        "role": "Gesällsnickare",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Bygg stommar till 30+ hus och montera kök i 60+ hem\nBygg skräddarsydda skåp och lister med 1/16-tums tolerans\nLäs och följ arkitektritningar, och flagga fel innan de kostar pengar\nUtbilda 2 lärlingar i stom- och finishtekniker"
      },
      {
        "role": "Snickarlärling",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Assisterade med stommar, gips och golv vid ombyggnader\nLärde mig använda sågar, fräsar och spikpistoler säkert\nSlutförde 8 000 lärlingstimmar och klarade gesällprovet"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certifikat",
        "field": "Snickeri",
        "start": "2015",
        "end": "2016",
        "notes": "Gesällsnickare. OSHA 10-certifierad."
      }
    ],
    "skills": "Stom- och konstruktionsarbete\nFinishsnickeri och lister\nSkräddarsydda skåp\nLäsa arkitektritningar\nElverktyg och säkerhet\nGips och golv",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Ämneslärare (matematik)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Ämneslärare med 8 års erfarenhet av att undervisa matematik i årskurs 9-12. Höjde godkännandegraden i algebra från 64 % till 83 % och coachar matematiklaget till 2 delstatsfinaler. Skicklig på differentierad undervisning, provförberedelse och föräldrakommunikation.",
    "experience": [
      {
        "role": "Matematiklärare (årskurs 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Aug 2019",
        "end": "",
        "current": true,
        "points": "Undervisa algebra, geometri och förkalkyl för 120 elever i 5 klasser\nHöjde godkännandegraden i algebra från 64 % till 83 % på 3 år\nCoacha matematiklaget till 2 delstatsfinaler\nDriv läxhjälp efter skolan för 30 elever i veckan"
      },
      {
        "role": "Matematiklärare (årskurs 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Aug 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Undervisade algebra och geometri för 100 elever per år\nInförde veckovisa prov som halverade läxglappet\nOrganiserade skolans första matematikmässa med 200 elever"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Matematikpedagogik",
        "start": "2013",
        "end": "2017",
        "notes": "Statlig lärarlicens (New Hampshire, årskurs 7-12, matematik)."
      }
    ],
    "skills": "Matematikundervisning (algebra till förkalkyl)\nProvförberedelse\nDifferentierad undervisning\nKlassrumshantering\nFöräldrakommunikation\nGoogle Classroom och Desmos",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Förskollärare",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Förskollärare med 6 års erfarenhet av att ta hand om barn i åldern 3-5. Skicklig på lekbaserat lärande, beteendevägledning och föräldrakommunikation. Byggde ett fonetikprogram som höjde skolberedskapspoängen i hela min klass.",
    "experience": [
      {
        "role": "Förskollärare",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "Undervisa och ta hand om en klass på 18 barn i åldern 3-5\nByggde ett fonetikprogram som höjde skolberedskapspoängen i hela klassen\nPlanera veckoteman, pyssel och utomhuslek\nDela dagliga uppdateringar och terminsvisa framstegsrapporter med föräldrar"
      },
      {
        "role": "Biträdande förskollärare",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "Stödde huvudläraren med en klass på 20 barn\nKörde sagostund, sånger och konstaktiviteter dagligen\nHöll säkerhets- och hygienjournalerna enligt statliga standarder"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate Degree",
        "field": "Förskolepedagogik",
        "start": "2016",
        "end": "2018",
        "notes": "Behörighet som Child Development Associate (CDA). Certifierad i första hjälpen och HLR."
      }
    ],
    "skills": "Lekbaserat lärande\nBeteendevägledning\nFonetik och tidig läskunnighet\nFöräldrakommunikation\nKlassrumssäkerhet\nPlanering av konst och pyssel",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Socialarbetare för barn och familjer",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Legitimerad socialarbetare med 7 års erfarenhet av att stödja barn och familjer. Hanterar en ärendemängd på 25 familjer, samordnar tjänster mellan skolor och vårdgivare och skriver domstolsrapporter som domare förlitar sig på. Skicklig på bedömning, krisstöd och skydd.",
    "experience": [
      {
        "role": "Socialarbetare för barn och familjer",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Hantera en ärendemängd på 25 familjer, med hem- och skolbesök varje vecka\nSkriv domstolsrapporter och vittna i familjedomstol\nSamordna stöd för bostad, hälsa och skola för utsatta familjer\nSänkte väntetiden för bedömning med 20 % med ett nytt triagesystem"
      },
      {
        "role": "Familjerådgivare",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "Stödde 40+ familjer i tillfälliga bostäder med förmåner och hänvisningar\nKörde veckovisa workshops om föräldraskap och budgetering\nHöll ärendeanteckningarna korrekta för revisioner och finansieringsrapporter"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Socialt arbete",
        "start": "2016",
        "end": "2018",
        "notes": "Legitimerad socialarbetare (Ohio). Kurser i barnskydd och familjesystem."
      }
    ],
    "skills": "Ärendehantering (25 familjer)\nBarnskydd\nRapporter till familjedomstol\nKrisstöd\nSamverkan mellan myndigheter\nHänvisningar till förmåner och bostäder",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Juristassistent",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Juristassistent med 6 års erfarenhet av stöd vid tvister och företagsinlämningar. Hanterar discovery för 30+ ärenden, upprättar stämningar och avtal, och håller inlämningsdeadlines med ett i tid-rekord på 100 %. Skicklig på Westlaw, e-discovery och ärendehanteringsprogramvara.",
    "experience": [
      {
        "role": "Juristassistent",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Hantera discovery för 30+ tvistärenden, med granskning av 10 000+ dokument\nUpprätta stämningar, yrkanden och avtal för juristgranskning\nHåller 100 % i tid-rekord för domstolsinlämningar och deadlines\nSamordna vittnen och förbered rättegångspärmar"
      },
      {
        "role": "Juridisk assistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Intagsintervjuer för 20+ klienter i veckan\nFörberedde formulär och inlämningar för bostads- och familjeärenden\nÖversatte juridiska dokument för spansktalande klienter"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate Degree",
        "field": "Juristassistentstudier",
        "start": "2017",
        "end": "2019",
        "notes": "NALA-certifierad juristassistent (CP). ABA-godkänt program."
      }
    ],
    "skills": "Stöd vid tvister och discovery\nJuridisk drafting\nE-discovery (Relativity)\nÄrendehantering (Clio)\nDomstolsinlämningar och deadlines\nJuridisk research (Westlaw)",
    "languages": "Engelska (flytande)\nSpanska (flytande)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Bokföringsassistent",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Bokföringsassistent med 5 års erfarenhet av leverantörsreskontra, fakturering och bankavstämningar. Behandlar 300+ fakturor i månaden med 99,8 % noggrannhet och håller böckerna rena inför månadsbokslutet. Skicklig på QuickBooks, Excel och lönestöd.",
    "experience": [
      {
        "role": "Bokföringsassistent",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Behandla 300+ leverantörsfakturor i månaden med 99,8 % noggrannhet\nStäm av 6 bankkonton varje vecka och flagga differenser samma dag\nFörbered lönedata för 45 anställda och jaga förfallna kundbetalningar\nHåll ordning i journalerna inför årsrevisionen, med noll iakttagelser"
      },
      {
        "role": "Redovisningsassistent",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Registrerade försäljningsfakturor och kvitton i QuickBooks dagligen\nBesvarade leverantörsfrågor om betalningar via telefon och mejl\nArkiverade papper och höll arkivet uppdaterat"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certifikat",
        "field": "Bokföring",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks-certifierad användare."
      }
    ],
    "skills": "Leverantörs- och kundreskontra\nBankavstämningar\nFakturering (300+ i månaden)\nQuickBooks och Excel\nLönestöd\nDataregistrering (65 ord/min)",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Administrativ assistent",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Administrativ assistent med 6 års erfarenhet av att hålla kontor igång smidigt. Hanterar kalendrar för 4 chefer, organiserar resor och möten och hanterar 100+ mejl om dagen. Känd för noggrannhet, diskretion och lugn under tidspress.",
    "experience": [
      {
        "role": "Administrativ assistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Hantera kalendrar, resor och möten för 4 seniora chefer\nHantera 100+ mejl om dagen, upprätta svar och flagga prioriteringar\nFörbered styrelseunderlag och för protokoll vid månatliga möten\nKör beställningar av kontorsmateriel och leverantörer, vilket sänkte kostnaderna med 12 %"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Aug 2019",
        "end": "Dec 2020",
        "current": false,
        "points": "Välkomnade 60+ patienter om dagen och hanterade tidsbokningen\nSvarade i telefon och hanterade försäkringsfrågor\nHöll patientjournalerna korrekta och konfidentiella"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate Degree",
        "field": "Kontorsadministration",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Kalender- och resehantering\nE-post och korrespondens\nMötesprotokoll\nMicrosoft Office (Word, Excel, Outlook)\nDataregistrering (70 ord/min)\nKontorsmateriel och leverantörer",
    "languages": "Engelska (flytande)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankkassör",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankkassör med 4 års erfarenhet av att betjäna 80+ kunder om dagen med noggrannhet och omsorg. Kassan avstämd på öret under 3 år, med noll differenser. Skicklig på insättningar, uttag, bedrägerikontroller och att hänvisa kunder till rätt produkter.",
    "experience": [
      {
        "role": "Bankkassör",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Betjäna 80+ kunder om dagen: insättningar, uttag, betalningar och överföringar\nKassan avstämd på öret i 3 år med noll differenser\nUpptäck och stoppa 12 bedrägeriförsök, vilket sparade kunder $90 000+\nHänvisa kunder till spar- och låneprodukter, och nå hänvisningsmålen varje kvartal"
      },
      {
        "role": "Kundtjänstmedarbetare",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Öppnade nya konton och utfärdade betalkort för medlemmar\nBesvarade telefonfrågor om saldon och kontoutdrag\nHjälpte medlemmar att komma igång med internet- och mobilbank"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate Degree",
        "field": "Företag",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Kontanthantering och avstämning\nInsättningar, uttag och betalningar\nBedrägeriupptäckt\nKundtjänst\nBankprogramvara (Fiserv)\nProdukthänvisningar",
    "languages": "Engelska (flytande)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Försäljningschef",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Försäljningschef med 10 års erfarenhet av att leda team på upp till 15 säljare. Växte regionala intäkter från $4M till $7,5M på 3 år, höjde vinstgraden från 22 % till 34 % och halverade säljaromsättningen med bättre coachning och introduktion.",
    "experience": [
      {
        "role": "Regional försäljningschef",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Led ett team på 15 säljare i Texas och Oklahoma\nVäxte regionala intäkter från $4M till $7,5M på 3 år\nHöjde vinstgraden från 22 % till 34 % med bättre coachning och pipelinegranskningar\nHalverade säljaromsättningen med ett nytt introduktionsprogram"
      },
      {
        "role": "Säljrepresentant",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dec 2020",
        "current": false,
        "points": "Sålde industriutrustning till 80+ konton, och nådde kvoten 5 år i rad\nBästa säljare i regionen 3 år i rad\nByggde ett hänvisningsnätverk som stod för 25 % av ny affärsverksamhet"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marknadsföring",
        "start": "2011",
        "end": "2015",
        "notes": "Kurser i försäljningsledning och förhandling."
      }
    ],
    "skills": "Ledning av säljteam (15 säljare)\nIntäktstillväxt och prognostisering\nHantering av pipeline (Salesforce)\nCoachning och introduktion\nFörhandling\nTerritorieplanering",
    "languages": "Engelska (flytande)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Byggprojektledare",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Byggprojektledare med 12 års erfarenhet av att leverera kommersiella projekt och bostadsprojekt värda upp till $12M. Slutförde 20+ projekt med en i tid-grad på 95 %, noll förlorade arbetsskador på mina platser och budgetar hållna inom 3 %. Skicklig på schemaläggning, underentreprenörshantering och säkerhet.",
    "experience": [
      {
        "role": "Byggprojektledare",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Leverera kommersiella projekt och bostadsprojekt värda upp till $12M\nSlutförde 20+ projekt med en i tid-grad på 95 % och budgetar inom 3 %\nHantera 30+ underentreprenörer och 50 arbetare på 3 aktiva platser\nNoll förlorade arbetsskador på alla platser på 4 år"
      },
      {
        "role": "Platsledare",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Drev dagliga platsoperationer för kontors- och detaljhandelsbyggen\nSamordnade leveranser, inspektioner och underentreprenörsscheman\nHöll säkerhetsjournalerna rena och klarade varje OSHA-inspektion"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Byggnadskonstruktion",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30-certifierad. CCM-kandidat (Certified Construction Manager)."
      }
    ],
    "skills": "Projektschemaläggning (MS Project, Procore)\nBudgetkontroll\nHantering av underentreprenörer\nPlatssäkerhet (OSHA 30)\nRitningsläsning\nKlientrapportering",
    "languages": "Engelska (flytande)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certifierad medicinsk assistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certifierad medicinsk assistent med 5 års erfarenhet inom familjepraktik och akutmottagning. Tar emot 25+ patienter om dagen, tar vitalparametrar, tar blodprover och hanterar receptionen med en patientnöjdhet på 97 %. Skicklig på EHR, blodprovstagning och försäkringskontroller.",
    "experience": [
      {
        "role": "Certifierad medicinsk assistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Ta emot 25+ patienter om dagen: vitalparametrar, anamneser och undersökningsförberedelser\nTa blodprover och kör grundläggande labbtester med en förstasticksgrad på 99 %\nHantera receptionen, schemaläggning och försäkringskontroller\nHåller en patientnöjdhet på 97 % över 800+ enkäter"
      },
      {
        "role": "Undersköterska",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Aug 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Triagerade drop-in-patienter och assisterade läkare vid mindre ingrepp\nGav vaccinationer och hanterade provtagning\nHöll undersökningsrummen välfyllda, rena och redo mellan patienter"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certifikat",
        "field": "Medicinsk assistans",
        "start": "2018",
        "end": "2019",
        "notes": "Certifierad medicinsk assistent (CMA, AAMA). BLS-certifierad. Utbildad i blodprovstagning."
      }
    ],
    "skills": "Patientmottagning och vitalparametrar\nBlodprovstagning\nEHR (eClinicalWorks)\nVaccinationer\nFörsäkringsverifiering\nReceptionshantering",
    "languages": "Engelska (flytande)\nSpanska (flytande)",
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
    "summary": "Motiverad gymnasieelev i sista året med starka betyg och extrajobbserfarenhet. Snabb att lära, pålitlig och bra med människor. Söker en första heltidstjänst eller ett extrajobb vid sidan av högskolan.",
    "experience": [
      {
        "role": "Butikssäljare på deltid",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "Betjäna 50+ kunder per pass på helger och efter skolan\nHantera kontanter, fyll på hyllor och håll displayerna prydliga\nBetrodd att öppna butiken på lördagsmorgnar"
      },
      {
        "role": "Frivillig privatlärare",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Undervisade yngre elever privat i matematik två gånger i veckan\nHjälpte till att organisera sommarläsprogrammet för 40 barn"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Gymnasieexamen",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3,6. Hederslista, 3 år. Kapten för debattlaget."
      }
    ],
    "skills": "Kundtjänst\nKontanthantering\nTeamarbete\nTidshantering\nMicrosoft Office\nAtt tala inför publik (debattlaget)",
    "languages": "Engelska (flytande)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Nyutexaminerad \u2014 företagsekonomi",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Nyutexaminerad i företagsekonomi med praktikerfarenhet inom marknadsföring och verksamhet. Organiserade en företagstävling på campus med 200 deltagare och genomförde en 6-månaders praktik där jag halverade rapporteringstiden. Ivrig att börja en heltidskarriär och lära mig snabbt.",
    "experience": [
      {
        "role": "Marknadspraktikant",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Drev företagets sociala konton, och växte följarna från 2 000 till 6 500\nByggde en rapporteringsinstrumentpanel som halverade den veckovisa rapporteringstiden\nSkrev 20 blogginlägg som gav 15 000+ läsningar"
      },
      {
        "role": "Ledare för eventvolontärer",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "Maj 2025",
        "current": false,
        "points": "Organiserade en företagstävling med 200 deltagare och 12 domare\nHanterade en budget på $5 000 och ett team på 8 volontärer"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Företagsekonomi",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3,5. Dean's List, 2 år. Slutårsprojekt om småföretagsmarknadsföring."
      }
    ],
    "skills": "Marknadsföring i sociala medier\nExcel och Google Sheets\nPresentationsförmåga\nEventorganisation\nTeamarbete\nGrundläggande dataanalys",
    "languages": "Engelska (flytande)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior marknadsassistent",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior marknadsassistent med 2 års erfarenhet av innehåll, e-post och sociala medier. Växte ett klientnyhetsbrev från 1 000 till 4 000 prenumeranter och driver kampanjer med en genomsnittlig öppningsgrad på 22 %. Redo för mer ansvar och en större portfölj av konton.",
    "experience": [
      {
        "role": "Junior marknadsassistent",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Växte ett klientnyhetsbrev från 1 000 till 4 000 prenumeranter på 14 månader\nSkriv och schemalägg 12 sociala inlägg i veckan för 4 klienter\nKör e-postkampanjer med en genomsnittlig öppningsgrad på 22 %\nRapportera kampanjresultat till klienter månadsvis"
      },
      {
        "role": "Marknadspraktikant",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Skrev produktbeskrivningar för 200+ artiklar på företagets webbplats\nHjälpte till att driva en vårkampanj som höjde onlinebeställningarna med 15 %"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Kommunikation",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3,4. Kurser i digital marknadsföring och medieskrivande."
      }
    ],
    "skills": "Innehållsskrivande\nE-postmarknadsföring (Mailchimp)\nHantering av sociala medier\nGoogle Analytics\nCanva\nKlientrapportering",
    "languages": "Engelska (flytande)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Verksamhetshandledare",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Verksamhetshandledare med 8 års erfarenhet av att driva lagerteam på 20-30 personer. Sänkte plockfelen med 30 %, höjde avgångar i tid från 90 % till 97 % och utbildade 15 nyanställda. Redo för en roll som verksamhetschef med en större plats och budget.",
    "experience": [
      {
        "role": "Verksamhetshandledare",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Handleda 25 lageranställda i 2 skift på en plats på 90 000 sq ft\nSänkte plockfelen med 30 % med nya kontrollrutiner och streckkodsskanning\nHöjde avgångar i tid från 90 % till 97 % på 2 år\nUtbildade 15 nyanställda och befordrade 3 till teamledarroller"
      },
      {
        "role": "Teamledare",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Ledde ett team på 10 plockare och packare på nattskiftet\nInförde ett schema som sänkte övertiden med 20 % utan att missa deadlines\nKörde säkerhetsgenomgångar och höll teamet olycksfritt i 2 år"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Försörjningskedjehantering",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Teamledning (25 anställda)\nLagerverksamhet\nProcessförbättring\nSäkerhetshantering\nLagerstyrning\nWMS och Excel",
    "languages": "Engelska (flytande)\nHindi (samtalsnivå)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Senior projektledare",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Senior projektledare med 14 års erfarenhet av att leverera mjukvaruprojekt värda upp till $8M. Ledde 30+ projekt med 92 % leveranser i tid, byggde en PMO från grunden och var mentor för 10 projektledare. Känd för lugn leverans under press och ärlig rapportering till ledningen.",
    "experience": [
      {
        "role": "Senior projektledare",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Leverera programvaruprojekt värda upp till $8M med en i tid-grad på 92 %\nByggde företagets PMO från grunden: mallar, rapportering och styrning\nMentora 10 projektledare och driv den månatliga PM-gemenskapen\nRapportera direkt till CTO för ett program med 40 personer"
      },
      {
        "role": "Projektledare",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dec 2018",
        "current": false,
        "points": "Hanterade 20+ projekt för detaljhandels- och vårdkunder\nInförde agila arbetssätt som sänkte leveranstiden med 25 %\nVäxte 2 nyckelkonton från $500k till $2M i årliga intäkter"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informationssystem",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-certifierad (2015). Certified ScrumMaster. MBA-kurser (2018-2019, ej slutförda)."
      }
    ],
    "skills": "Program- och projektleverans\nPMO-uppsättning och styrning\nAgile och Waterfall\nBudgetkontroll ($8M)\nChefsrapportering\nTeammentorskap",
    "languages": "Engelska (flytande)\nSpanska (samtalsnivå)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Verksamhetschef (COO)",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Verksamhetschef med 18 års erfarenhet av att skala verksamheter för detaljhandels- och logistikföretag. Växte en verksamhet med 200 personer till 900 personer på 6 platser, höjde EBITDA-marginalen från 8 % till 14 % och ledde 2 förvärv. Erfarenhet av styrelserapportering och investerarrelationer.",
    "experience": [
      {
        "role": "Verksamhetschef (COO)",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Driv verksamhet för 900 personer på 6 platser och en budget på $180M\nHöjde EBITDA-marginalen från 8 % till 14 % på 3 år\nLedde 2 förvärv och integrerade båda teamen inom 6 månader\nRapportera till styrelsen månadsvis om verksamhet, risk och tillväxt"
      },
      {
        "role": "Vice verksamhetschef",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dec 2020",
        "current": false,
        "points": "Skalade verksamheten från 200 till 600 personer på 4 platser\nÖppnade 3 distributionscenter i tid och under budget\nByggde ledningsgruppen som fortfarande driver verksamheten i dag"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Företagsekonomi",
        "start": "2010",
        "end": "2012",
        "notes": "BS i ekonomi, NYU (2006). Kurs i bolagsstyrning (2020)."
      }
    ],
    "skills": "Verksamhet i skala (900 personer)\nP&L-ägarskap ($180M)\nFusioner och förvärv\nStyrelserapportering\nTillväxtstrategi\nLedarskapsgruppsbyggande",
    "languages": "Engelska (flytande)",
    "template": "executive"
  }
};
});
