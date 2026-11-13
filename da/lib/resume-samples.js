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
      "title": "Autoriseret sygeplejerske",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Autoriseret sygeplejerske med 6 års erfaring fra medicinsk-kirurgiske afdelinger og telemetriafdelinger. Dygtig til patientvurdering, IV-terapi, medicinadministration og elektroniske patientjournaler. Kendt for rolig og klar kommunikation med patienter og familier i pressede situationer.",
    "experience": [
      {
        "role": "Autoriseret sygeplejerske",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "jun. 2021",
        "end": "",
        "current": true,
        "points": "Plej 5-6 patienter pr. vagt på en medicinsk-kirurgisk afdeling med 32 senge, herunder vurdering, medicinadministration og sårpleje\nUddan og vejled 4 nyuddannede sygeplejersker og skar deres oplæringstid ned med 2 uger\nReducerede medicinfejl på afdelingen med 18% ved at indføre en dobbeltkontrolrutine ved vagtskifte\nDokumenter al pleje nøjagtigt i Epic elektroniske patientjournaler"
      },
      {
        "role": "Sygeplejerske",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "aug. 2019",
        "end": "maj 2021",
        "current": false,
        "points": "Stod for triage af 40+ patienter uden tidsbestilling om dagen og prioriterede akutte tilfælde til behandling samme dag\nGav vaccinationer og sundhedsscreeninger ved månedlige opsøgende events i lokalsamfundet\nKoordinerede henvisninger til specialister og fulgte op på testresultater"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Sygepleje",
        "start": "2015",
        "end": "2019",
        "notes": "Autorisation som sygeplejerske (Texas). BLS- og ACLS-certificeret."
      }
    ],
    "skills": "Patientvurdering\nIV-terapi og medicinadministration\nElektroniske patientjournaler (Epic)\nTelemetrioovervågning\nUddannelse af patienter og familier\nInfektionskontrol",
    "languages": "Engelsk (flydende)\nSpansk (sammenhængende)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Softwareudvikler",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Softwareudvikler med 5 års erfaring i at bygge webapplikationer i Python og JavaScript. Leverede funktioner brugt af 200,000+ brugere, skar API-responstider ned med 40% og ledede migreringen af en monolit til mikrotjenester. Stærk til test, code review og klar dokumentation.",
    "experience": [
      {
        "role": "Softwareudvikler",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Byg og vedligehold kundevendte webfunktioner i Python (Django) og React, der betjener 200,000+ brugere\nReducerede gennemsnitlig API-svartid fra 850 ms til 500 ms ved at tilføje caching og rette langsomme forespørgsler\nLedede migrationen af faktureringstjenesten til mikrotjenester med nul nedetid\nGennemgå 10+ pull requests om ugen, og vejled 2 juniorudviklere"
      },
      {
        "role": "Junior udvikler",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "jul. 2020",
        "end": "feb. 2022",
        "current": false,
        "points": "Byggede interne dashboards i JavaScript, der erstattede manuelle regneark for 3 hold\nSkrev automatiserede tests, der hævede dækningen fra 45% til 78%\nRettede 120+ fejl på tværs af produktet i det første år"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Datalogi",
        "start": "2016",
        "end": "2020",
        "notes": "Kursusarbejde i databaser, algoritmer og operativsystemer."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript og React\nPostgreSQL og Redis\nREST API'er og mikrotjenester\nGit og CI/CD\nAutomatiseret test (pytest, Jest)",
    "languages": "Engelsk (flydende)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Folkeskolelærer",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Folkeskolelærer med 7 års erfaring i undervisning af 3.-5. klasse. Dygtig til differentieret undervisning, klassestyring og forældrekommunikation. Hævede læsefærdigheden i min klasse fra 58% til 81% over to skoleår.",
    "experience": [
      {
        "role": "Folkeskolelærer (4. klasse)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "aug. 2020",
        "end": "",
        "current": true,
        "points": "Undervis i læsning, matematik og naturfag til en klasse med 26 elever, herunder 5 med individuelle læringsplaner\nHævede klassens læsefærdigheder fra 58% til 81% på to år gennem guidede læsegrupper\nUdsend et ugentligt forældre-nyhedsbrev, og afhold terminsvise fremskridtsmøder for hver familie\nLed skolens læseklub for 40 elever i 3.-5. klasse"
      },
      {
        "role": "Folkeskolelærer (3. klasse)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "aug. 2018",
        "end": "jun. 2020",
        "current": false,
        "points": "Planlagde og gennemførte daglige lektioner for 24 elever på tværs af alle kernefag\nIntroducerede adfærdsrutiner, der halverede forstyrrelser i klasseværelset\nOrganiserede årgangens naturvidenskabsmesse med 120 elever og 80 forældre"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Folkeskoleuddannelse",
        "start": "2014",
        "end": "2018",
        "notes": "Statslig undervisningslicens (Ohio, K-5. klasse). Læsepåtegning."
      }
    ],
    "skills": "Differentieret undervisning\nKlassestyring\nGuidede læsegrupper\nForældrekommunikation\nLektionsplanlægning\nGoogle Classroom",
    "languages": "Engelsk (flydende)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Seniorrevisor",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA med 8 års erfaring inden for månedsafslutning, finansiel rapportering og intern revision. Lukkede bøgerne 3 dage hurtigere ved at genopbygge afstemningsprocessen og fandt $240,000 i geninddrivelige overbetalinger på ét revisionsår. Stærk i Excel, QuickBooks og ERP-systemer.",
    "experience": [
      {
        "role": "Seniorrevisor",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Ej månedsafslutningen for en forretningsenhed på $40M, afslut 3 dage hurtigere efter at have genopbygget afstemninger\nUdarbejd månedlige regnskaber og afvigelsesrapporter til den øverste ledelse\nFandt $240,000 i geninddrivelige leverandøroverbetalinger under den interne revision i 2024\nVejled 2 regnskabsmedarbejdere, og gennemgå deres journalposteringer"
      },
      {
        "role": "Regnskabsmedarbejder",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "jun. 2017",
        "end": "dec. 2020",
        "current": false,
        "points": "Udarbejdede selvangivelser og regnskaber for 25 små virksomhedskunder\nAssisterede ved revisioner af 8 klienter, testede kontroller og dokumenterede resultater\nAutomatiserede anlægsaktivregistret i Excel og sparede 6 timer om måneden"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Regnskab",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Medlem af AICPA."
      }
    ],
    "skills": "Månedsafslutning og afstemninger\nFinansiel rapportering og afvigelsesanalyse\nIntern revision\nExcel (pivottabeller, VLOOKUP)\nQuickBooks og SAP\nSkatteforberedelse",
    "languages": "Engelsk (flydende)\nMandarin (samtaleniveau)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A lastbilchauffør",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A-chauffør med 9 års erfaring inden for langdistance- og regionalfragt. Over 900,000 ulykkesfri mil, leveringsrate til tiden på 99% og erfaring med køle-, fladvogns- og tørvognslæs. Ren kørehistorik, HazMat- og tankpåtegninger.",
    "experience": [
      {
        "role": "Langdistance-lastbilchauffør",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "apr. 2019",
        "end": "",
        "current": true,
        "points": "Kør 2,800+ mil om ugen på regionale ruter på tværs af Texas, Oklahoma og New Mexico\nOprethold en leveringsrate til tiden på 99% på tværs af 1,100+ læs om året\nTransporter køle- og tørvognsfragt; fuldfør inspektioner før og efter turen dagligt\nOver 900,000 ulykkesfri mil i alt"
      },
      {
        "role": "Leveringschauffør",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar. 2016",
        "end": "mar. 2019",
        "current": false,
        "points": "Leverede byggematerialer til 15-20 byggepladser om dagen på tværs af Dallas-Fort Worth-området\nBetjente gaffeltrucks og sikrede fladvognslæs til DOT-standarder\nHoldt leveringspapirer og logs nøjagtige med nul DOT-overtrædelser"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certifikat",
        "field": "Erhvervskørsel (CDL Klasse A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A med HazMat- og tankpåtegninger. Ren kørehistorik."
      }
    ],
    "skills": "Langtids- og regional kørsel\nKøle- og flatbed-lad\nDOT-regler og kørebøger\nInspektioner før turen\nRuteplanlægning (GPS, ELD)\nGaffeltruckbetjening",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Salgsassistent i detailhandel",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Salgsassistent i detailhandel med 4 års erfaring fra elektronik- og tøjbutikker. Konsekvent blandt de 3 bedste sælgere på teamet med en mersalgsrate på 32% på garantier og tilbehør. Venlig, hurtig ved kassen og betroet til at åbne og lukke butikken.",
    "experience": [
      {
        "role": "Seniorsalgsassistent",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Sælg elektronik og tilbehør til 60+ kunder om dagen; blandt de 3 bedste i butikssalg i 8 kvartaler i træk\nOpnå en tilknytningsrate på 32 % på garantier og tilbehør, den højeste på holdet\nUddan 6 nyansatte ved kassen, på lageret og i kundeservicestandarder\nBetroet nøgleholder: åbn og luk butikken, og håndtér kontanttællinger"
      },
      {
        "role": "Salgsassistent",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "jun. 2021",
        "end": "jan. 2022",
        "current": false,
        "points": "Hjalp kunder med at vælge tøj og størrelser på et travlt butiksgulv\nHoldt displays pæne og fyldte hylder op under hver vagt\nHåndterede returneringer og ombytninger høfligt og holdt klager på et minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associeret grad",
        "field": "Forretning",
        "start": "2019",
        "end": "2021",
        "notes": "Deltidsstudie, mens jeg arbejdede i detailhandel."
      }
    ],
    "skills": "Kundeservice og mersalg\nKontanthåndtering og POS-systemer\nProduktkendskab (elektronik)\nLagerstyring\nÅbning og lukning af butik\nTeamtræning",
    "languages": "Engelsk (flydende)\nSpansk (flydende)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Kundeservicerepræsentant",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Kundeservicemedarbejder med 5 års erfaring i håndtering af telefon-, e-mail- og livechat-support. Løser 45+ sager om dagen med en tilfredshedsscore på 96% og en løsningsrate ved første kontakt på 88%. Rolig med vrede kunder og hurtig til at finde løsningen.",
    "experience": [
      {
        "role": "Kundeservicerepræsentant",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "maj 2021",
        "end": "",
        "current": true,
        "points": "Håndter 45+ telefon-, e-mail- og chatsager om dagen for fakturering, ordrer og tekniske fejl\nOprethold en kundetilfredshedsscore på 96% og en løsningsrate ved første kontakt på 88%\nNedtrap vanskelige opkald og omsæt klager til gentagen forretning\nUddan 5 nye medarbejdere i scripts, systemer og tone"
      },
      {
        "role": "Supportmedarbejder",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "sep. 2019",
        "end": "apr. 2021",
        "current": false,
        "points": "Besvarede kunde-e-mails og chats om ordrer, returneringer og refusioner\nHoldt gennemsnitlig førstesvarstid under 2 timer\nSkrev 20 artikler til hjælpecentret, der skar gentagne spørgsmål ned med en fjerdedel"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associeret grad",
        "field": "Erhvervsøkonomi",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Support via telefon, e-mail og livechat\nKlagehåndtering og konfliktnedtrapning\nCRM-systemer (Zendesk, Salesforce)\nFakturerings- og ordrespørgsmål\nSkrivehastighed 55 wpm\nTeamtræning",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Driftsleder",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Driftsleder med 12 års erfaring i at lede hold på op til 80 personer på tværs af lager og distribution. Reducerede ordrebehandlingsomkostninger med 22%, løftede rettidige forsendelser fra 91% til 98% og åbnede to nye steder til tiden og under budget.",
    "experience": [
      {
        "role": "Driftsleder",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Driv et distributionscenter på 120,000 sq ft med 80 medarbejdere på 3 skift\nReducerede ordrebehandlingsomkostninger med 22% ved at redesigne plukruter og vagtplaner\nLøftede rettidige forsendelser fra 91% til 98% på 18 måneder\nÅbnede 2 nye steder til tiden og 8% under budget"
      },
      {
        "role": "Lagertilsynsførende",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "jun. 2013",
        "end": "jan. 2020",
        "current": false,
        "points": "Vejledte 25 lagermedarbejdere og den daglige afsendelse af 4,000+ ordrer\nIntroducerede stregkodescanning og reducerede plukfejl med 35%\nAfholdt sikkerhedstræning, der holdt byggepladsen uheldsfri i 3 år"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Driftsledelse",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Teamledelse (op til 80 medarbejdere)\nLager og distribution\nProcesforbedring\nBudgettering og omkostningskontrol\nSikkerhedsledelse\nERP- og WMS-systemer",
    "languages": "Engelsk (flydende)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Autoriseret elektriker",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Autoriseret svendelektriker med 8 års erfaring inden for bolig- og erhvervsarbejde. Dygtig til ledningsføring, tavleopgraderinger, belysning og fejlfinding, med en ren sikkerhedshistorik på tværs af 400+ jobs. NEC-kodekendskab og erfaring med at vejlede lærlinge.",
    "experience": [
      {
        "role": "Svendelektriker",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar. 2019",
        "end": "",
        "current": true,
        "points": "Fuldfør 400+ bolig- og erhvervsjobs: ledningsføring, opgraderinger af tavler, belysning og EV-opladere\nDiagnosticer og reparer fejl hurtigt, med en reparationsrate ved første besøg på 92%\nVejled 2 lærlinge, og godkend deres arbejde, så det lever op til reglerne\nOprethold en ren sikkerhedshistorik med nul skader med tabt arbejdstid"
      },
      {
        "role": "Elektrikerlærling",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "jun. 2016",
        "end": "feb. 2019",
        "current": false,
        "points": "Assisterede autoriserede elektrikere med ledningsføring i nybyggeri og omledninger\nLærte bøjning af rør, kabeltrækning og tavleinstallation\nFuldførte 8,000 lærlingetimer og bestod svendeprøven første gang"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certifikat",
        "field": "Elektroteknologi",
        "start": "2015",
        "end": "2016",
        "notes": "Svendelektrikerlicens (Colorado). OSHA 30 certificeret."
      }
    ],
    "skills": "El-installationer til bolig og erhverv\nTavleopgraderinger og EV-ladere\nFejlfinding og test\nOverholdelse af NEC-regler\nBukning af rør og kabeltrækning\nVejledning af lærlinge",
    "languages": "Engelsk (flydende)",
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
    "summary": "Finansanalytiker med 6 års erfaring inden for budgettering, prognoser og investeringsanalyse. Byggede prognosemodeller, der reducerede budgetafvigelsen med 30% og understøttede investeringsbeslutninger for $50M. Stærk i Excel, SQL og finansiel modellering.",
    "experience": [
      {
        "role": "Finansanalytiker",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Byg månedlige prognoser og årlige budgetter for en portefølje på $120M\nReducerede budgetafvigelse med 30% med en driverbaseret prognosemodel\nUnderstøt investeringsbeslutninger til en værdi af $50M med værdiansættelse og scenarieanalyser\nPræsentér resultater månedligt for økonomidirektøren og afdelingslederne"
      },
      {
        "role": "Junior finansanalytiker",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "jul. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Udarbejdede ugentlige performancerapporter for 12 filialer\nAutomatiserede rapportering i Excel og sparede 10 timer om ugen\nAssisterede kreditholdet med analyse af låneporteføljen"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finans",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II-kandidat. Kursusarbejde i værdiansættelse og virksomhedsfinansiering."
      }
    ],
    "skills": "Finansiel modellering og prognoser\nBudgettering og afvigelsesanalyse\nVærdiansættelse (DCF, sammenlignelige virksomheder)\nExcel (avanceret) og SQL\nBloomberg Terminal\nDatavisualisering (Power BI)",
    "languages": "Engelsk (flydende)\nHindi (flydende)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Bygningsingeniør",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Bygningsingeniør (PE) med 7 års erfaring inden for design af vej- og vandinfrastruktur. Ledede designet af en motorvejsudvidelse på 12 mil og et regnvandssystem, der betjener 8,000 hjem. Dygtig til AutoCAD Civil 3D, omkostningsestimering og tilladelseskoordinering.",
    "experience": [
      {
        "role": "Bygningsingeniør",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Led design af en motorvejsudvidelse på 12 mil, fra opmåling til konstruktionsdokumenter\nDesignede et regnvandssystem, der betjener 8,000 hjem, godkendt første gang af byen\nKoordiner tilladelser med 4 myndigheder og styr et designbudget på $2.5M\nGennemgå og stempl tegninger som autoriseret ingeniør"
      },
      {
        "role": "Junior bygningsingeniør",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "jul. 2018",
        "end": "dec. 2020",
        "current": false,
        "points": "Udarbejdede terræn- og afvandingsplaner for 20+ boligudviklingsprojekter\nUdførte omkostningsestimater og mængdeopgørelser for vejprojekter\nDeltog i inspektioner på stedet og skrev fremskridtsrapporter"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Byggeteknik",
        "start": "2014",
        "end": "2018",
        "notes": "Autoriseret ingeniør-licens (Washington). EIT bestået 2018."
      }
    ],
    "skills": "Vej- og afvandingsdesign\nAutoCAD Civil 3D\nModellering af regnvand\nOmkostningsestimering\nKoordinering af tilladelser\nProjekttidsplanlægning (MS Project)",
    "languages": "Engelsk (flydende)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Maskiningeniør",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Maskiningeniør med 6 års erfaring i design af HVAC-systemer og produktionsudstyr. Reducerede energiforbruget med 18% på tværs af 3 anlæg med redesignede kanaler og kontroller og ledede et maskinredesign, der hævede output med 25%. Dygtig til SolidWorks, FEA og termisk analyse.",
    "experience": [
      {
        "role": "Maskiningeniør",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Design HVAC og produktionsudstyr til 3 anlæg med 400+ ansatte\nReducerede energiforbrug med 18% ved at redesigne kanaler og kontrolsekvenser\nLedede et maskinredesign, der hævede output med 25% uden ekstra gulvplads\nKør FEA- og termiske analyser på nye dele før prototypefremstilling"
      },
      {
        "role": "Junior maskiningeniør",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "aug. 2019",
        "end": "jan. 2021",
        "current": false,
        "points": "Modellerede dele og samlinger i SolidWorks for bilklienter\nUdarbejdede tegninger, styklister og testrapporter\nUnderstøttede prototypebyggeri og løste pasformproblemer i værkstedet"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Maskinteknik",
        "start": "2015",
        "end": "2019",
        "notes": "Kursusarbejde i termodynamik, fluidmekanik og maskindesign."
      }
    ],
    "skills": "HVAC-design\nSolidWorks og AutoCAD\nFEA- og termisk analyse\nMaskinkonstruktion\nEnergieffektivitet\nGD&T og tolerancer",
    "languages": "Engelsk (flydende)\nKoreansk (samtaleniveau)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektroingeniør",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Elektroingeniør med 6 års erfaring inden for indlejrede systemer og effektelektronik. Designede kontrolkort, der nu bruges i 50,000+ enheder, og reducerede printkortomkostninger med 22% gennem komponentredesign. Dygtig til Altium, C, firmwaretest og EMC-overensstemmelse.",
    "experience": [
      {
        "role": "Elektroingeniør",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Design indlejrede kontrolkort brugt i 50,000+ enheder om året\nReducerede printkortomkostninger med 22% ved at redesigne effekttrinnet og finde alternativer\nLed EMC-overensstemmelsestest, bestået første gang på 4 produktlinjer\nSkriv og gennemgå firmware i C til mikrocontrollere"
      },
      {
        "role": "Junior elektroingeniør",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "jul. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Layoutede PCB'er i Altium for forbruger- og industriklienter\nByggede og testede prototyper, fejlrettede hardwarefejl\nSkrev testprocedurer, der skar produktionstiden til test ned med 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektroteknik",
        "start": "2015",
        "end": "2019",
        "notes": "Kursusarbejde i indlejrede systemer, effektelektronik og signalbehandling."
      }
    ],
    "skills": "Indlejrede systemer og PCB-design\nAltium Designer\nC og firmware\nEffektelektronik\nEMC-overensstemmelsestest\nOscilloskoper og laboratorieinstrumenter",
    "languages": "Engelsk (flydende)\nGujarati (samtaleniveau)",
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
    "summary": "Dataanalytiker med 4 års erfaring i at omsætte salgs- og driftsdata til beslutninger. Byggede dashboards brugt af 60+ chefer, reducerede månedlig rapporteringstid fra 3 dage til 4 timer og fandt en prisfastsættelsesfejl til en værdi af $180,000 om året. Stærk i SQL, Excel og Power BI.",
    "experience": [
      {
        "role": "Dataanalytiker",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "jan. 2022",
        "end": "",
        "current": true,
        "points": "Byg Power BI-dashboards brugt af 60+ butiks- og regionschefer\nReducerede månedlig rapportering fra 3 dage til 4 timer med automatiserede SQL-pipelines\nFandt en prisfastsættelsesfejl til en værdi af $180,000 om året ved at revidere kampagnedata\nPræsentér resultater månedligt for det kommercielle team"
      },
      {
        "role": "Junior dataanalytiker",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "aug. 2020",
        "end": "dec. 2021",
        "current": false,
        "points": "Rensede og sammenføjede leveringsdata fra 4 systemer til én rapporteringstabel\nByggede Excel-trackere, der erstattede manuelle optællinger for 2 hold\nBesvarede ad hoc-dataspørgsmål for driftsledere dagligt"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistik",
        "start": "2016",
        "end": "2020",
        "notes": "Kursusarbejde i regression, databaser og datavisualisering."
      }
    ],
    "skills": "SQL og datarensning\nPower BI og Tableau\nExcel (avanceret)\nPython (pandas)\nDashboarddesign\nGrundlæggende A/B-test",
    "languages": "Engelsk (flydende)\nVietnamesisk (sammenhængende)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Data scientist",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Data scientist med 5 års erfaring i at bygge maskinlæringsmodeller til e-handel. En anbefalingsmodel, jeg lancerede, løftede omsætningen pr. besøg med 12%, og en churn-model markerer nu 80% af kunder i risikozonen. Stærk i Python, SQL og modelimplementering.",
    "experience": [
      {
        "role": "Data scientist",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Leverede en anbefalingsmodel, der løftede omsætningen pr. besøg med 12%\nByggede en churn-model, der markerer 80% af kunder i risikozonen en måned før tid\nImplementerede modeller til produktion med overvågnings- og genoptræningspipelines\nPræsentér modelresultater månedligt for produkt- og marketingteamet"
      },
      {
        "role": "Junior data scientist",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "jul. 2020",
        "end": "jan. 2022",
        "current": false,
        "points": "Byggede prognosemodeller for 3 detailklienter med 90%+ nøjagtighed\nRensede og forberedte datasæt på 10M+ rækker til modellering\nSkrev dokumentation, så kunder selv kunne køre modellerne igen"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Datavidenskab",
        "start": "2018",
        "end": "2020",
        "notes": "Speciale om anbefalingssystemer. BS i Matematik (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMaskinlæring og statistik\nSQL og Spark\nModelimplementering (Docker, AWS)\nA/B-test\nDatavisualisering",
    "languages": "Engelsk (flydende)\nArabisk (flydende)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webudvikler",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webudvikler med 4 års erfaring i at bygge hurtige, tilgængelige websites i HTML, CSS og JavaScript. Genopbyggede en butiks betalingsside, der løftede konverteringerne med 18%, og vedligeholder 12 kundesites med 99.9% oppetid. Stærk til responsivt design, performance og grundlæggende SEO.",
    "experience": [
      {
        "role": "Webudvikler",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Byg responsive websteder i HTML, CSS, JavaScript og WordPress for 12 klienter\nGenopbyggede en webshops betalingsside, der løftede konverteringerne med 18%\nReducerede gennemsnitlig sideindlæsningstid fra 4.2s til 1.8s med billede- og kodeoptimering\nHold alle klientwebsteder på 99.9% oppetid med overvågning og backups"
      },
      {
        "role": "Junior webudvikler",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "jun. 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Byggede landingssider og rettede fejl på tværs af 20+ websteder for små virksomheder\nLærte Git, responsivt design og grundlæggende SEO på live projekter\nBesvarede klient-e-mails og lavede indholdsopdateringer samme dag"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Datalogi",
        "start": "2017",
        "end": "2021",
        "notes": "Kursusarbejde i webudvikling, databaser og menneske-computer-interaktion."
      }
    ],
    "skills": "HTML, CSS og JavaScript\nReact og WordPress\nResponsivt design\nOptimering af sidehastighed\nGit og GitHub\nGrundlæggende SEO",
    "languages": "Engelsk (flydende)\nSpansk (flydende)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafisk designer",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafisk designer med 5 års erfaring inden for branding, emballage og design til sociale medier. Skabte brandidentiteter for 25+ små virksomheder og et emballageredesign, der løftede hyldeomsætningen med 14%. Dygtig til Adobe Illustrator, Photoshop og Figma.",
    "experience": [
      {
        "role": "Grafisk designer",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "jan. 2022",
        "end": "",
        "current": true,
        "points": "Design brandidentiteter, emballage og sociale kampagner for 25+ klienter\nEmballageredesign for et madbrand løftede hyldeomsætningen med 14%\nProducér 30+ opslag til sociale medier om ugen på tværs af Instagram, TikTok og Facebook\nPræsentér koncepter for kunder og revidér hurtigt ud fra feedback"
      },
      {
        "role": "Junior grafisk designer",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "jul. 2020",
        "end": "dec. 2021",
        "current": false,
        "points": "Designede flyers, menuer og sociale opslag for lokale restauranter og butikker\nUdarbejdede trykklare filer og kontrollerede prøvetryk med trykkerier\nByggede et skabelonbibliotek, der reducerede designtiden med en tredjedel"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafisk design",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio inden for branding og emballagedesign."
      }
    ],
    "skills": "Adobe Illustrator og Photoshop\nFigma\nDesign af brandidentitet\nEmballagedesign\nDesign til sociale medier\nTrykproduktion",
    "languages": "Engelsk (flydende)\nKoreansk (samtaleniveau)",
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
    "summary": "UX-designer med 5 års erfaring i at researche brugere og designe mobil- og webprodukter. Redesignede et onboarding-flow, der skar frafaldet ned med 35%, og kørte 40+ brugervenlighedstests. Dygtig til Figma, brugerresearch, wireframing og prototypefremstilling.",
    "experience": [
      {
        "role": "UX-designer",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Redesignede mobil onboarding og skar frafaldet ned med 35% på 3 måneder\nKør 40+ brugervenlighedstests og brugerinterviews om året\nByg wireframes og prototyper i Figma for 2 produkthold\nArbejd dagligt med ingeniører og produktledere om levering"
      },
      {
        "role": "Junior UX-designer",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "aug. 2020",
        "end": "jan. 2022",
        "current": false,
        "points": "Designede skærme og flows til 5 klientapps\nKørte de første brugervenlighedstests og skrev resultaterne ned til kunder\nByggede et komponentbibliotek, der fremskyndede designoverlevering"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psykologi",
        "start": "2016",
        "end": "2020",
        "notes": "UX-designcertifikat (General Assembly, 2020). Kursusarbejde inden for menneske-computer-interaktion."
      }
    ],
    "skills": "Brugerresearch og brugervenlighedstest\nWireframing og prototypefremstilling (Figma)\nInformationsarkitektur\nDesignsystemer\nRejsekortlægning\nInteressentworkshops",
    "languages": "Engelsk (flydende)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marketingchef",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marketingchef med 8 års erfaring inden for B2B- og forbrugerkampagner. Voksede kvalificerede leads med 60% på ét år, lancerede en produktlinje, der nåede $3M i salg det første år, og styrer et årligt budget på $500,000 på tværs af et hold på 5.",
    "experience": [
      {
        "role": "Marketingchef",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Led et hold på 5 og et årligt marketingbudget på $500,000\nVoksede kvalificerede leads med 60% på ét år med indhold og betalte kampagner\nLancerede en produktlinje, der nåede $3M i salg det første år\nReducerede omkostninger pr. lead med 28% ved at genopbygge kampagnemålretning"
      },
      {
        "role": "Marketingspecialist",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "jun. 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Kørte e-mailkampagner til 80,000 abonnenter med en åbningsrate på 24%\nStyrede sociale konti, der voksede fra 5,000 til 40,000 følgere\nOrganiserede 6 messestande om året og genererede 300+ leads hver"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kursusarbejde i forbrugeradfærd, analyse og brandstyring."
      }
    ],
    "skills": "Kampagnestrategi og planlægning\nIndholds- og e-mailmarketing\nBetalt annoncering (Google, Meta)\nMarketinganalyse (GA4)\nTeamledelse\nBudgetstyring",
    "languages": "Engelsk (flydende)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektleder",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektleder (PMP) med 7 års erfaring i at levere software- og byggeprojekter til tiden og inden for budgettet. Ledede 15 projekter til en værdi af op til $4M med en leveringsrate på 94% til tiden. Dygtig til Agile, risikostyring og interessentkommunikation.",
    "experience": [
      {
        "role": "Projektleder",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Styr 15 projekter til en værdi af op til $4M, med en leveringsrate til tiden på 94%\nKør Agile-sprints for 3 teams, og rapportér fremskridt til ledelsen ugentligt\nReducerede projektoverskridelser med 30% med tidligere risikovurderinger\nKoordiner leverandører, klienter og interne hold på tværs af 4 tidszoner"
      },
      {
        "role": "Projektkoordinator",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "jul. 2018",
        "end": "dec. 2020",
        "current": false,
        "points": "Holdt styr på tidsplaner, budgetter og tilladelser for 8 byggeprojekter\nUdarbejdede statusrapporter og mødenotater til kunder\nLøste planlægningskonflikter, der sparede 2 uger på et skolebyggeri"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Erhvervsøkonomi",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-certificeret (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Projektplanlægning og tidsplanlægning\nAgile og Scrum\nRisikostyring\nBudgetkontrol\nInteressentkommunikation\nMS Project og Jira",
    "languages": "Engelsk (flydende)",
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
    "summary": "HR-chef med 9 års erfaring inden for ansættelse, medarbejderrelationer og fordele. Reducerede tid til ansættelse fra 45 til 28 dage, løftede fastholdelsen med 15% og driver HR for 250 medarbejdere på 3 steder. CIPD-niveau viden om ansættelsesret og politik.",
    "experience": [
      {
        "role": "HR-chef",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Driv HR for 250 medarbejdere på 3 lokationer med et team på 3\nReducerede tid til ansættelse fra 45 til 28 dage ved at genopbygge interviewprocessen\nLøftede fastholdelse med 15% med et nyt onboarding- og gennemgangsprogram\nHåndter medarbejderrelationer, klager og politikopdateringer"
      },
      {
        "role": "HR-generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "jun. 2016",
        "end": "jan. 2020",
        "current": false,
        "points": "Rekrutterede 120+ medarbejdere om året til hoteller og restauranter\nUdførte lønkontroller og tilmelding til personaleydelser for 400 medarbejdere\nLøste personaleuenigheder og holdt personaleomsætningen under branchens gennemsnit"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Human Resources",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP-certificeret. Kursusarbejde inden for ansættelsesret og organisationsadfærd."
      }
    ],
    "skills": "Rekruttering og onboarding\nMedarbejderrelationer\nFordele og løn\nAnsættelsesret\nPerformanceledelse\nHRIS (Workday, BambooHR)",
    "languages": "Engelsk (flydende)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Assisterende advokat",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Associeret advokat med 6 års erfaring i kommerciel retssag og kontraktret. Styrede 40+ sager, vandt summarisk dom i 8, og udarbejdede kontrakter til en værdi af $25M. Optaget i Illinois Bar; dygtig til juridisk forskning, udarbejdelse og klientrådgivning.",
    "experience": [
      {
        "role": "Assisterende advokat",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "sep. 2020",
        "end": "",
        "current": true,
        "points": "Styr 40+ kommercielle retssager fra indgivelse til forlig\nVandt summarisk dom i 8 sager og forligte 20 mere fordelagtigt\nUdarbejd og forhandl kontrakter til en værdi af op til $25M\nRådgiv klienter personligt og skriftligt om risiko og strategi"
      },
      {
        "role": "Juridisk fuldmægtig",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "aug. 2019",
        "end": "aug. 2020",
        "current": false,
        "points": "Researchede retspraksis og udarbejdede notater til 2 dommere\nGennemgik processkrifter og udarbejdede resuméer til dommeren til 100+ høringer\nObserverede retssager og forligskonferencer på tværs af civile afdelinger"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Jura",
        "start": "2016",
        "end": "2019",
        "notes": "Optaget i Illinois Bar (2019). Law review, artikelredaktør."
      }
    ],
    "skills": "Erhvervssager\nKontraktudarbejdelse og -forhandling\nJuridisk research (Westlaw, LexisNexis)\nKlientrådgivning\nVidneafhøringer og bevisoptagelse\nRetsindberetninger og procedure",
    "languages": "Engelsk (flydende)",
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
    "summary": "Klinisk farmaceut (PharmD) med 7 års erfaring inden for hospitals- og samfundsfarmaci. Gennemgår 100+ medicinordrer om dagen, reducerede uønskede lægemiddelhændelser med 25% gennem en ny kontrolprotokol og rådgiver patienter om sikker medicinbrug. Autoriseret i Pennsylvania.",
    "experience": [
      {
        "role": "Klinisk farmaceut",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "jan. 2020",
        "end": "",
        "current": true,
        "points": "Gennemgå 100+ medicinordrer om dagen for sikkerhed, dosering og interaktioner\nSkar uønskede lægemiddelhændelser ned med 25% med en ny dobbeltkontrolprotokol\nRådgiv læger og sygeplejersker om lægemiddelvalg til komplekse patienter\nKør hospitalets runder for antibiotikastyring to gange om ugen"
      },
      {
        "role": "Farmaceut",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "jul. 2018",
        "end": "dec. 2019",
        "current": false,
        "points": "Udleverede 200+ recepter om dagen med nul udleveringsfejl\nRådgav patienter om ny medicin, bivirkninger og opbevaring\nGav influenzavaccinationer og kørte blodtrykstjek"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmaci",
        "start": "2014",
        "end": "2018",
        "notes": "Autoriseret farmaceut (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Medicingenomgang og sikkerhed\nKlinisk farmakologi\nPatientrådgivning\nApotekssystemer (Epic, PioneerRx)\nAntibiotikastyring\nVaccinationsydelser",
    "languages": "Engelsk (flydende)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Almen tandlæge",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Almen tandlæge (DDS) med 8 års erfaring inden for restaurerende, kosmetisk og forebyggende tandpleje. Behandler 25+ patienter om dagen på tværs af en praksis med 2,000 patienter, med en patienttilfredshedsscore på 98%. Dygtig til kroner, implantater, rodbehandlinger og klare aligners.",
    "experience": [
      {
        "role": "Almen tandlæge",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Behandl 25+ patienter om dagen: fyldninger, kroner, rodbehandlinger og ekstraktioner\nOprethold en patienttilfredshedsscore på 98% på tværs af 1,200+ anmeldelser\nIndsæt 15+ implantater om måneden og håndtér clear-aligner-forløb\nVejled 2 tandplejere og 4 tandklinikassistenter"
      },
      {
        "role": "Associeret tandlæge",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "jul. 2017",
        "end": "jan. 2019",
        "current": false,
        "points": "Ydede almen tandpleje for en praksis med 1,500 patienter\nIntroducerede kroner samme dag og skar genbesøg ned med 40%\nAfholdt skolebesøg om børns tandsundhed"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Tandpleje",
        "start": "2013",
        "end": "2017",
        "notes": "Autoriseret tandlæge (Arizona). Invisalign-certificeret. CPR/BLS-certificeret."
      }
    ],
    "skills": "Restaurativ tandpleje (kroner, fyldninger)\nRodbehandling\nTandimplantater\nKlare aligners\nPatientpleje og kommunikation\nDigitale røntgenbilleder og CEREC",
    "languages": "Engelsk (flydende)",
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
    "summary": "Fysioterapeut (DPT) med 6 års erfaring inden for ortopædisk og sportsrelateret genoptræning. Behandler 12-15 patienter om dagen, hvor 90% når deres mål inden for de planlagte forløb.",
    "experience": [
      {
        "role": "Fysioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Behandl 12-15 patienter om dagen med sportsskader, genoptræning efter operation og rygsmerter\n90 % af patienterne når deres mål inden for det planlagte antal sessioner\nDesign test til tilbagevenden til sport brugt af 3 lokale hold\nMentorér 2 nyuddannede og vejled studenterplaceringer"
      },
      {
        "role": "Fysioterapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "aug. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Ydede stationær genoptræning til patienter efter operation og slagtilfælde\nKørte gruppetræningshold for 20+ ældre patienter om ugen\nDokumenterede fremskridt i Epic og overleverede til afdelingshold"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fysioterapi",
        "start": "2016",
        "end": "2019",
        "notes": "Autoriseret fysioterapeut (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Ortopædisk og sportsrehabilitering\nManuel terapi\nTræningsordination\nTest af tilbagevenden til sport\nPatientuddannelse\nDokumentation (Epic)",
    "languages": "Engelsk (flydende)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Køkkenchef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Køkkenchef med 10 års erfaring i kreolske og moderne amerikanske køkkener. Leder en brigade på 12 i en restaurant med 200 pladser, skar madomkostningerne ned med 15% med strammere bestilling og vandt 'Best New Menu' fra byens madguide i 2025.",
    "experience": [
      {
        "role": "Køkkenchef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Led en brigade på 12 i en restaurant med 200 pladser, der serverer 300+ kuverter på en aften\nSkar madomkostningerne ned med 15% med strammere bestilling og en sæsonmenu\nVandt 'Best New Menu' fra byens madguide i 2025\nDesign menuer, uddan kokke, og kør passet ved fredags- og lørdagsservice"
      },
      {
        "role": "Souschef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "jun. 2017",
        "end": "dec. 2020",
        "current": false,
        "points": "Drev køkkenet, når køkkenchefen var væk, med 150 kuverter på en aften\nStyrede lager, bestilling og leverandørrelationer\nUddannede 8 kokkeelever og skar personaleomsætningen ned med en tredjedel"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Madlavningsteknik",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager-certificeret."
      }
    ],
    "skills": "Menudesign og kalkulation\nKreolsk og moderne amerikansk køkken\nKøkkenledelse (hold på 12)\nFødevaresikkerhed (ServSafe)\nLeverandørstyring\nBanketter og eventcatering",
    "languages": "Engelsk (flydende)\nSpansk (flydende)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Politibetjent",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Politibetjent med 8 års erfaring inden for patruljering, nærpoliti og efterforskning. Responderer på 30+ opkald om ugen og har modtaget anerkendelser for konfliktnedtrapning og lokalt opsøgende arbejde",
    "experience": [
      {
        "role": "Politibetjent",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "jun. 2019",
        "end": "",
        "current": true,
        "points": "Patruljer et distrikt med 40,000 indbyggere, svar på 30+ opkald om ugen\nModtog 2 anerkendelser for konfliktnedtrapning og lokalt opsøgende arbejde\nEfterforsk tyverier og overfald og skriv rapporter brugt i 50+ retsforfølgelser\nMentorér 3 nye betjente gennem feltræning"
      },
      {
        "role": "Patruljebetjent",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "aug. 2017",
        "end": "maj 2019",
        "current": false,
        "points": "Patruljerede amtsveje og svarede på nødopkald\nForkyndte retsdokumenter og assisterede ved fangetransport\nFuldførte uddannelse i kriseintervention og førstehjælp"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certifikat",
        "field": "Retshåndhævelse",
        "start": "2017",
        "end": "2017",
        "notes": "Uddannet fra Ohio Peace Officer Training Academy. Uddannet i Crisis Intervention Team."
      }
    ],
    "skills": "Patrulje og nødindsats\nSamfundspoliti\nKriseintervention og nedtrapning\nRapportskrivning\nEfterforskning\nFørstehjælp og CPR",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Brandmand / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Brandmand og EMT med 7 års erfaring inden for brandbekæmpelse, redning og akut medicinsk indsats. Reagerede på 900+ opkald, herunder bygningsbrande, bilredninger og medicinske nødsituationer. HazMat-uddannet med en ren sikkerhedshistorik.",
    "experience": [
      {
        "role": "Brandmand / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar. 2020",
        "end": "",
        "current": true,
        "points": "Respondér på 900+ brand-, rednings- og lægeopkald på tværs af et distrikt med 3 stationer\nYd akut lægehjælp som certificeret EMT ved 60% af opkaldene\nHazMat-uddannet; led dekontaminering ved kemiske hændelser\nUddan nye rekrutter i slangehåndtering, stiger og søgeteknikker"
      },
      {
        "role": "Frivillig brandmand",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "jun. 2018",
        "end": "feb. 2020",
        "current": false,
        "points": "Responderede på natur- og bygningsbrande som frivillig\nGennemførte Brandmand I & II og EMT-Basic-træning\nHjalp med at afholde oplæg om brandforebyggelse på skoler"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certifikat",
        "field": "Brandvidenskab",
        "start": "2017",
        "end": "2018",
        "notes": "Brandmand I & II. EMT-Basic-certificeret. Uddannet i HazMat-operationer."
      }
    ],
    "skills": "Brandbekæmpelse og redning\nAkut lægehjælp (EMT)\nHazMat-operationer\nStiger, slanger og ventilation\nBrandforebyggelse i lokalsamfundet\nTeamwork under pres",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Autoriseret blikkenslager",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Autoriseret mesterblikkenslager med 11 års erfaring inden for bolig- og erhvervs-VVS. Fuldførte 600+ jobs om året, fra grove installationer til kedelinstallationer, med en reparationsrate ved første besøg på 98%. Dygtig til rørmontering, afløbsrensning og overholdelse af regler.",
    "experience": [
      {
        "role": "Mesterblikkenslager",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "jan. 2019",
        "end": "",
        "current": true,
        "points": "Fuldfør 600+ bolig- og erhvervsjobs om året\nInstaller kedler, vandvarmere og komplette badeværelsesinstallationer\nOprethold en reparationsrate ved første besøg på 98% på serviceopkald\nVejled 3 lærlinge, og godkend deres arbejde"
      },
      {
        "role": "Svende-blikkenslager",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "jun. 2014",
        "end": "dec. 2018",
        "current": false,
        "points": "Udførte VVS-nybyggeri til 40+ huse om året\nRensede afløb og reparerede lækager for hjem og restauranter\nLærte gasmontering og tilbagestrømningsforebyggelse"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certifikat",
        "field": "VVS-teknologi",
        "start": "2013",
        "end": "2014",
        "notes": "Mesterblikkenslagerlicens (Tennessee). Certificeret i tilbagestrømningsforebyggelse."
      }
    ],
    "skills": "VVS til bolig og erhverv\nRørfitting og lodning\nAfløbsrensning og kamerainspektion\nInstallation af kedler og vandvarmere\nGasfitting\nOverholdelse af VVS-regler",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Svendetømrer",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Svendetømrer med 9 års erfaring inden for rammer, færdigt arbejde og specialfremstillede skabe. Byggede rammer til 30+ huse og monterede køkkener i 60+ hjem, med et ry for præcise målinger og rene finish. Dygtig til at læse tegninger og arbejde efter reglerne.",
    "experience": [
      {
        "role": "Svendetømrer",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Byg rammer til 30+ huse og monter køkkener i 60+ hjem\nByg specialfremstillede skabe og lister med 1/16-tomme tolerance\nLæs og følg arkitekttegninger, og markér fejl, før de koster penge\nUddan 2 lærlinge i rejsning af konstruktioner og færdigbearbejdningsteknikker"
      },
      {
        "role": "Tømrerlærling",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "jun. 2016",
        "end": "jan. 2019",
        "current": false,
        "points": "Assisterede med rammer, gipsvægge og gulve på ombygninger\nLærte at bruge save, fræsere og sømpistoler sikkert\nFuldførte 8,000 lærlingetimer og bestod svendeprøven"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certifikat",
        "field": "Tømrerarbejde",
        "start": "2015",
        "end": "2016",
        "notes": "Svendetømrer. OSHA 10 certificeret."
      }
    ],
    "skills": "Ramme- og konstruktionsarbejde\nFærdigtømrerarbejde og lister\nSpecialfremstillede skabe\nLæsning af arkitekttegninger\nElværktøj og sikkerhed\nGipsvægge og gulve",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Gymnasielærer (Matematik)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Gymnasielærer med 8 års erfaring i at undervise i matematik i 9.-12. klasse. Hævede algebra-beståelsesraten fra 64% til 83% og træner matematikholdet til 2 delstatsfinaler. Dygtig til differentieret undervisning, eksamensforberedelse og forældrekommunikation.",
    "experience": [
      {
        "role": "Matematiklærer (9.-12. klasse)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "aug. 2019",
        "end": "",
        "current": true,
        "points": "Undervis i algebra, geometri og grundlæggende analyse til 120 elever på tværs af 5 klasser\nHævede algebra-beståelsesraten fra 64% til 83% på 3 år\nTræn matematikholdet til 2 statsfinaler\nTilbyd lektiehjælp efter skoletid til 30 elever om ugen"
      },
      {
        "role": "Matematiklærer (9.-10. klasse)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "aug. 2017",
        "end": "jun. 2019",
        "current": false,
        "points": "Underviste i algebra og geometri til 100 elever om året\nIntroducerede ugentlige quizzer, der halverede lektiegabene\nOrganiserede skolens første matematikmesse med 200 elever"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Matematikuddannelse",
        "start": "2013",
        "end": "2017",
        "notes": "Statslig undervisningslicens (New Hampshire, 7.-12. klasse, matematik)."
      }
    ],
    "skills": "Matematikundervisning (algebra til før-kalkulus)\nEksamensforberedelse\nDifferentieret undervisning\nKlassestyring\nForældrekommunikation\nGoogle Classroom og Desmos",
    "languages": "Engelsk (flydende)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Børnehavepædagog",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Børnehavepædagog med 6 års erfaring med pasning af børn i alderen 3-5 år. Dygtig til legebaseret læring, adfærdsvejledning og forældrekommunikation. Opbyggede et lydmetodeprogram, der løftede skolestartsmålingerne i hele min børnegruppe.",
    "experience": [
      {
        "role": "Børnehavepædagog",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "aug. 2020",
        "end": "",
        "current": true,
        "points": "Undervis og pas en klasse med 18 børn i alderen 3-5 år\nByggede et fonikprogram, der løftede skolestartsscorer på tværs af klassen\nPlanlæg ugentlige temaer, kreative aktiviteter og udeleg\nDel daglige opdateringer og terminsvise fremskridtsrapporter med forældre"
      },
      {
        "role": "Assisterende børnehavepædagog",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "jun. 2018",
        "end": "jul. 2020",
        "current": false,
        "points": "Støttede klasselæreren i en klasse med 20 børn\nAfholdt højtlæsning, sange og kreative aktiviteter dagligt\nHoldt sikkerheds- og hygiejneregistre til statsstandarder"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associeret grad",
        "field": "Tidlig børneuddannelse",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA)-legitimation. Certificeret i førstehjælp og CPR."
      }
    ],
    "skills": "Legebaseret læring\nAdfærdsvejledning\nLydmetoden og tidlig læseindlæring\nForældrekommunikation\nSikkerhed i klasseværelset\nPlanlægning af kreative aktiviteter",
    "languages": "Engelsk (flydende)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Socialrådgiver for børn og familier",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Autoriseret socialrådgiver med 7 års erfaring i støtte til børn og familier. Styrer en sagsmængde på 25 familier, koordinerer tjenester på tværs af skoler og sundhedsudbydere, og fuldfører retsrapporter, som dommere stoler på. Dygtig til vurdering, krisestøtte og beskyttelse.",
    "experience": [
      {
        "role": "Socialrådgiver for børn og familier",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "jan. 2020",
        "end": "",
        "current": true,
        "points": "Styr en sagsmængde på 25 familier, besøg hjem og skoler ugentligt\nFuldfør retsrapporter og afgiv vidneforklaring i familieretten\nKoordiner bolig-, sundheds- og skolestøtte til sårbare familier\nReducerede ventetid på vurdering med 20% med et nyt triagesystem"
      },
      {
        "role": "Sagsbehandler",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "jul. 2018",
        "end": "dec. 2019",
        "current": false,
        "points": "Støttede 40+ familier i midlertidig bolig med ydelser og henvisninger\nAfholdt ugentlige workshops om forældreskab og budgetlægning\nHoldt sagsnoter nøjagtige til revisioner og finansieringsrapporter"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Socialt arbejde",
        "start": "2016",
        "end": "2018",
        "notes": "Autoriseret socialrådgiver (Ohio). Kursusarbejde i børnevelfærd og familiesystemer."
      }
    ],
    "skills": "Sagsstyring (25 familier)\nBeskyttelse af børn\nRapporter til familieretten\nKrisestøtte\nKoordinering på tværs af myndigheder\nHenvisninger til ydelser og bolig",
    "languages": "Engelsk (flydende)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Juridisk assistent",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Juridisk assistent med 6 års erfaring inden for støtte til retssager og virksomhedsindgivelser. Styrer bevisførelse for 30+ sager, udarbejder processkrifter og kontrakter, og holder indgivelsesdeadlines med en rettidighed på 100%. Dygtig til Westlaw, e-discovery og sagsstyringssoftware.",
    "experience": [
      {
        "role": "Juridisk assistent",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Styr bevisførelse for 30+ retssager, gennemgå 10,000+ dokumenter\nUdarbejd processkrifter, begæringer og kontrakter til advokatgennemgang\nOprethold en rettidighed på 100% på sagsanlæg ved retten og deadlines\nKoordiner vidner og forbered sagsmapper"
      },
      {
        "role": "Juridisk assistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "aug. 2019",
        "end": "jan. 2021",
        "current": false,
        "points": "Indtagelsessamtaler for 20+ klienter om ugen\nUdarbejdede formularer og indberetninger til bolig- og familiesager\nOversatte juridiske dokumenter til spansktalende kunder"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associeret grad",
        "field": "Paralegal-studier",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Certified Paralegal (CP). ABA-godkendt program."
      }
    ],
    "skills": "Støtte til retssager og bevisførelse\nJuridisk udarbejdelse\nE-discovery (Relativity)\nSagsstyring (Clio)\nSagsanlæg ved retten og deadlines\nJuridisk forskning (Westlaw)",
    "languages": "Engelsk (flydende)\nSpansk (flydende)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Bogholder",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Bogholder med 5 års erfaring inden for kreditorer, fakturering og bankafstemninger. Behandler 300+ fakturaer om måneden med 99.8% nøjagtighed og holder bøgerne rene til månedsafslutning. Dygtig til QuickBooks, Excel og lønsupport.",
    "experience": [
      {
        "role": "Bogholder",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Behandl 300+ leverandørfakturaer om måneden med 99.8% nøjagtighed\nAfstem 6 bankkonti ugentligt, og markér afvigelser samme dag\nForbered løndata for 45 medarbejdere og ryk for forfaldne kundebetalinger\nHold registre ryddelige til årsafslutningsrevisionen, med nul fund"
      },
      {
        "role": "Regnskabsassistent",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "jun. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Indtastede salgsfakturaer og kvitteringer i QuickBooks dagligt\nBesvarede leverandørforespørgsler om betalinger via telefon og e-mail\nArkiverede papirer og holdt arkivet opdateret"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certifikat",
        "field": "Bogføring",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "Kreditorer og debitorer\nBankafstemninger\nFakturering (300+ om måneden)\nQuickBooks og Excel\nLønsupport\nDataindtastning (65 wpm)",
    "languages": "Engelsk (flydende)",
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
    "summary": "Administrativ assistent med 6 års erfaring i at holde kontorer kørende problemfrit. Styrer kalendere for 4 chefer, organiserer rejser og møder og håndterer 100+ e-mails om dagen. Kendt for nøjagtighed, diskretion og ro under tidspres.",
    "experience": [
      {
        "role": "Administrativ assistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Styr kalendere, rejser og møder for 4 seniorchefer\nHåndter 100+ e-mails om dagen, udarbejd svar og marker prioriteter\nUdarbejd bestyrelsesmateriale og tag referater ved månedlige møder\nStå for kontorartikler og leverandørordrer og skar omkostningerne ned med 12%"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "aug. 2019",
        "end": "dec. 2020",
        "current": false,
        "points": "Bød 60+ patienter velkommen om dagen og styrede aftalebogen\nBesvarede telefoner og håndterede forsikringsforespørgsler\nHoldt patientjournaler nøjagtige og fortrolige"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associeret grad",
        "field": "Kontoradministration",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Kalender- og rejsestyring\nE-mail og korrespondance\nMødereferater\nMicrosoft Office (Word, Excel, Outlook)\nDataindtastning (70 wpm)\nKontorartikler og leverandører",
    "languages": "Engelsk (flydende)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankmedarbejder",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankmedarbejder med 4 års erfaring i at betjene 80+ kunder om dagen med nøjagtighed og omhu. Kasseskuffe afstemt til centen over 3 år, med nul mangler. Dygtig til indbetalinger, udbetalinger, svindeltjek og at henvise kunder til de rigtige produkter.",
    "experience": [
      {
        "role": "Bankmedarbejder",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Betjen 80+ kunder om dagen: indbetalinger, udbetalinger, betalinger og overførsler\nKasseskuffe afstemt til centen i 3 år med nul mangler\nOpdag og stop 12 svindelforsøg og reddede kunder for $90,000+\nHenvis kunder til opsparings- og låneprodukter, og nå henvisningsmålene hvert kvartal"
      },
      {
        "role": "Kundeservicemedarbejder",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "jun. 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Åbnede nye konti og udstedte debetkort til medlemmer\nBesvarede telefonforespørgsler om saldi og kontoudtog\nHjalp medlemmer med at opsætte online- og mobilbank"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associeret grad",
        "field": "Forretning",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Kontanthåndtering og afstemning\nInd- og udbetalinger\nSvindelopdagelse\nKundeservice\nBanksoftware (Fiserv)\nProdukthenvisninger",
    "languages": "Engelsk (flydende)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Salgschef",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Salgschef med 10 års erfaring i at lede teams på op til 15 repræsentanter. Voksede den regionale omsætning fra $4M til $7.5M på 3 år, løftede vinderaten fra 22% til 34% og halverede repræsentanternes personaleomsætning med bedre coaching og onboarding.",
    "experience": [
      {
        "role": "Regional salgschef",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Led et hold på 15 salgsrepræsentanter på tværs af Texas og Oklahoma\nVoksede regional omsætning fra $4M til $7.5M på 3 år\nLøftede vinderraten fra 22% til 34% med bedre coaching og pipelinegennemgange\nHalverede medarbejderomsætning blandt sælgere med et nyt onboardingprogram"
      },
      {
        "role": "Salgsrepræsentant",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "jun. 2015",
        "end": "dec. 2020",
        "current": false,
        "points": "Solgte industriudstyr til 80+ kunder og nåede kvoten 5 år i træk\nBedste repræsentant i regionen 3 år i træk\nByggede et henvisningsnetværk, der bragte 25% af ny forretning ind"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kursusarbejde i salgsstyring og forhandling."
      }
    ],
    "skills": "Ledelse af salgsteam (15 repræsentanter)\nOmsætningsvækst og prognoser\nPipeline-styring (Salesforce)\nCoaching og onboarding\nForhandling\nOmrådeplanlægning",
    "languages": "Engelsk (flydende)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Byggeleder",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Byggeleder med 12 års erfaring i levering af erhvervs- og boligprojekter til en værdi af op til $12M. Fuldførte 20+ projekter med en rettidighedsrate på 95%, nul skader med tabt arbejdstid på mine byggepladser og budgetter holdt inden for 3%. Dygtig til planlægning, styring af underentreprenører og sikkerhed.",
    "experience": [
      {
        "role": "Byggeleder",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Lever erhvervs- og boligprojekter til en værdi af op til $12M\nFuldførte 20+ projekter med en rettidighedsrate på 95% og budgetter inden for 3%\nStyr 30+ underentreprenører og 50 arbejdere på tværs af 3 live byggepladser\nNul skader med tabt arbejdstid på alle lokationer i 4 år"
      },
      {
        "role": "Byggepladsleder",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "jun. 2013",
        "end": "jan. 2020",
        "current": false,
        "points": "Stod for den daglige drift på byggepladser for kontor- og butiksbyggeri\nKoordinerede leveringer, inspektioner og tidsplaner for underentreprenører\nHoldt sikkerhedsregistre rene og bestod hver OSHA-inspektion"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Byggeri",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 certificeret. CCM (Certified Construction Manager)-kandidat."
      }
    ],
    "skills": "Projekttidsplanlægning (MS Project, Procore)\nBudgetkontrol\nStyring af underleverandører\nSikkerhed på byggepladsen (OSHA 30)\nTegningslæsning\nKlientrapportering",
    "languages": "Engelsk (flydende)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certificeret medicinsk assistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certificeret medicinsk assistent med 5 års erfaring inden for familiemedicin og akutbehandling. Modtager 25+ patienter om dagen, tager vitale værdier, tager blodprøver og styrer receptionen med en patienttilfredshedsscore på 97%. Dygtig til EHR, blodprøvetagning og forsikringstjek.",
    "experience": [
      {
        "role": "Certificeret medicinsk assistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Klargør 25+ patienter om dagen: vitale værdier, anamneser og forberedelse til undersøgelser\nTag blodprøver og kør grundlæggende laboratorietests med en succesrate på 99% ved første stik\nStyr receptionen, planlægning og forsikringstjek\nOprethold en patienttilfredshedsscore på 97% på tværs af 800+ undersøgelser"
      },
      {
        "role": "Medicinsk assistent",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "aug. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Triagerede patienter uden tidsbestilling og assisterede læger ved mindre procedurer\nGav vaccinationer og håndterede prøveindsamling\nHoldt undersøgelsesrum fyldte, rene og klar mellem patienter"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certifikat",
        "field": "Medicinsk assistance",
        "start": "2018",
        "end": "2019",
        "notes": "Certificeret medicinsk assistent (CMA, AAMA). BLS-certificeret. Uddannet i blodprøvetagning."
      }
    ],
    "skills": "Patientindtagelse og vitale værdier\nFlebotomi\nEHR (eClinicalWorks)\nVaccinationer\nForsikringsverificering\nReceptionsstyring",
    "languages": "Engelsk (flydende)\nSpansk (flydende)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Studerende",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Motiveret gymnasieelev med stærke karakterer og erfaring med deltidsarbejde. Hurtig at lære, pålidelig og god med mennesker. Søger en første fuldtidsrolle eller et deltidsjob ved siden af college.",
    "experience": [
      {
        "role": "Deltids salgsassistent",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "sep. 2024",
        "end": "",
        "current": true,
        "points": "Betjen 50+ kunder pr. vagt i weekender og efter skoletid\nHåndter kontanter, fyld hylder op og hold displays pæne\nBetroet til at åbne butikken lørdag formiddag"
      },
      {
        "role": "Frivillig lektiehjælper",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "jan. 2024",
        "end": "jun. 2025",
        "current": false,
        "points": "Gav lektiehjælp til yngre elever i matematik to gange om ugen\nHjalp med at organisere sommerlæseprogrammet for 40 børn"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "High School Diploma",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Æresliste, 3 år. Kaptajn for debatholdet."
      }
    ],
    "skills": "Kundeservice\nKontanthåndtering\nTeamwork\nTidsstyring\nMicrosoft Office\nOffentlig tale (debatteam)",
    "languages": "Engelsk (flydende)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Nyuddannet — Erhvervsøkonomi",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Nyuddannet inden for erhvervsøkonomi med praktik erfaring inden for marketing og drift. Organiserede en erhvervskonkurrence på campus med 200 deltagere og gennemførte et 6-måneders praktikophold, hvor jeg halverede rapporteringstiden. Ivrig efter at starte en fuldtidskarriere og lære hurtigt.",
    "experience": [
      {
        "role": "Marketingpraktikant",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "jan. 2025",
        "end": "jun. 2025",
        "current": false,
        "points": "Drev virksomhedens profiler på sociale medier og voksede følgertallet fra 2,000 til 6,500\nByggede et rapporteringsdashboard, der halverede den ugentlige rapporteringstid\nSkrev 20 blogindlæg, der gav 15,000+ læsninger"
      },
      {
        "role": "Frivillig leder for events",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "sep. 2024",
        "end": "maj 2025",
        "current": false,
        "points": "Organiserede en erhvervskonkurrence med 200 deltagere og 12 dommere\nStyrede et budget på $5,000 og et hold på 8 frivillige"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Erhvervsøkonomi",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 år. Afgangsprojekt om marketing for små virksomheder."
      }
    ],
    "skills": "Marketing på sociale medier\nExcel og Google Sheets\nPræsentationsfærdigheder\nEventorganisering\nTeamwork\nGrundlæggende dataanalyse",
    "languages": "Engelsk (flydende)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior marketingmedarbejder",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior marketingmedarbejder med 2 års erfaring inden for indhold, e-mail og sociale medier. Voksede et klientnyhedsbrev fra 1,000 til 4,000 abonnenter og kører kampagner med en gennemsnitlig åbningsrate på 22%. Klar til mere ansvar og en større portefølje af konti.",
    "experience": [
      {
        "role": "Junior marketingmedarbejder",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "jul. 2024",
        "end": "",
        "current": true,
        "points": "Voksede et klientnyhedsbrev fra 1,000 til 4,000 abonnenter på 14 måneder\nSkriv og planlæg 12 opslag på sociale medier om ugen for 4 kunder\nKør e-mailkampagner med en gennemsnitlig åbningsrate på 22%\nRapportér kampagneresultater til kunder månedligt"
      },
      {
        "role": "Marketingpraktikant",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "jan. 2024",
        "end": "jun. 2024",
        "current": false,
        "points": "Skrev produktbeskrivelser til 200+ varer på virksomhedens website\nHjalp med at køre en forårsudsalgskampagne, der løftede onlineordrer med 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Kommunikation",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Kursusarbejde i digital marketing og medieskrivning."
      }
    ],
    "skills": "Indholdsskrivning\nE-mailmarketing (Mailchimp)\nStyring af sociale medier\nGoogle Analytics\nCanva\nKlientrapportering",
    "languages": "Engelsk (flydende)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Driftsvejleder",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Driftsvejleder med 8 års erfaring i at lede lagerhold på 20-30 personer. Reducerede plukfejl med 30%, løftede rettidig afsendelse fra 90% til 97% og oplærte 15 nyansatte. Klar til en driftslederrolle med et større sted og budget.",
    "experience": [
      {
        "role": "Driftsvejleder",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Vejled 25 lagermedarbejdere på 2 skift på en lokation på 90,000 sq ft\nReducerede plukfejl med 30% med nye kontrolrutiner og stregkodescanning\nLøftede rettidig afsendelse fra 90% til 97% på 2 år\nUddannede 15 nyansatte og forfremmede 3 til teamlederroller"
      },
      {
        "role": "Teamleder",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "jun. 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Ledede et hold på 10 plukkere og pakkere på nattevagten\nIntroducerede en vagtplan, der reducerede overarbejde med 20% uden at misse deadlines\nAfholdt sikkerhedsbriefinger og holdt teamet uheldsfrit i 2 år"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Supply Chain Management",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Teamledelse (25 medarbejdere)\nLagerdrift\nProcesforbedring\nSikkerhedsledelse\nLagerkontrol\nWMS og Excel",
    "languages": "Engelsk (flydende)\nHindi (samtaleniveau)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Seniorprojektleder",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Seniorprojektleder med 14 års erfaring i at levere softwareprojekter til en værdi af op til $8M. Ledede 30+ projekter med en leveringsrate på 92% til tiden, opbyggede en PMO fra bunden og vejledte 10 projektledere. Kendt for rolig levering under pres og ærlig rapportering til ledelsen.",
    "experience": [
      {
        "role": "Seniorprojektleder",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "jan. 2019",
        "end": "",
        "current": true,
        "points": "Lever softwareprojekter til en værdi af op til $8M med en leveringsrate på 92% til tiden\nOpbyggede virksomhedens PMO fra bunden: skabeloner, rapportering og styring\nVejled 10 projektledere, og kør det månedlige PM-fællesskab\nReferér direkte til CTO'en for et program på 40 personer"
      },
      {
        "role": "Projektleder",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "jun. 2012",
        "end": "dec. 2018",
        "current": false,
        "points": "Styrede 20+ projekter for detail- og sundhedsklienter\nIntroducerede Agile-praksisser, der reducerede leveringstiden med 25%\nVoksede 2 nøglekonti fra $500k til $2M i årlig omsætning"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informationssystemer",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-certificeret (2015). Certified ScrumMaster. MBA-kursusarbejde (2018-2019, ufuldstændig)."
      }
    ],
    "skills": "Program- og projektlevering\nPMO-opbygning og -styring\nAgile og Waterfall\nBudgetkontrol ($8M)\nLedelsesrapportering\nTeammentoring",
    "languages": "Engelsk (flydende)\nSpansk (sammenhængende)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Driftsdirektør",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Driftsdirektør med 18 års erfaring i skalering af drift for detail- og logistikvirksomheder. Voksede en drift på 200 personer til 900 personer på 6 steder, løftede EBITDA-marginen fra 8% til 14% og ledede 2 opkøb. Erfaring med rapportering på bestyrelsesniveau og investorrelationer.",
    "experience": [
      {
        "role": "Driftsdirektør",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "jan. 2021",
        "end": "",
        "current": true,
        "points": "Driv driften for 900 personer på 6 lokationer med et budget på $180M\nLøftede EBITDA-marginen fra 8% til 14% på 3 år\nLedede 2 opkøb og integrerede begge hold inden for 6 måneder\nRapportér månedligt til bestyrelsen om drift, risiko og vækst"
      },
      {
        "role": "Vicepræsident for drift",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "jun. 2014",
        "end": "dec. 2020",
        "current": false,
        "points": "Skalerede driften fra 200 til 600 personer på 4 lokationer\nÅbnede 3 distributionscentre til tiden og under budget\nByggede lederholdet, der stadig driver virksomheden i dag"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Erhvervsøkonomi",
        "start": "2010",
        "end": "2012",
        "notes": "BS in Economics, NYU (2006). Kursus i bestyrelsesledelse (2020)."
      }
    ],
    "skills": "Drift i stor skala (900 personer)\nP&L-ejerskab ($180M)\nFusioner og opkøb\nBestyrelsesrapportering\nVækststrategi\nOpbygning af lederteam",
    "languages": "Engelsk (flydende)",
    "template": "executive"
  }
};
});
