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
      "title": "Sykepleier",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Sykepleier med 6 års erfaring fra medisinsk-kirurgiske og telemetrienheter. Dyktig i pasientvurdering, IV-terapi, medisinadministrering og elektroniske pasientjournaler. Kjent for rolig, tydelig kommunikasjon med pasienter og familier i pressede situasjoner.",
    "experience": [
      {
        "role": "Sykepleier",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "jun 2021",
        "end": "",
        "current": true,
        "points": "Care for 5-6 patients per shift on a 32-bed medical-surgical unit, including assessment, medication administration and wound care\nTrain and mentor 4 new graduate nurses, cutting their orientation time by 2 weeks\nReduced medication errors on the unit by 18% by introducing a double-check routine at handover\nDocument all care accurately in Epic electronic health records"
      },
      {
        "role": "Stabssykepleier",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "aug 2019",
        "end": "mai 2021",
        "current": false,
        "points": "Ran triage for 40+ walk-in patients a day, prioritising urgent cases for same-day care\nGave vaccinations and health screenings at monthly community outreach events\nCoordinated referrals to specialists and followed up on test results"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Sykepleie",
        "start": "2015",
        "end": "2019",
        "notes": "Sykepleierlisens (Texas). BLS- og ACLS-sertifisert."
      }
    ],
    "skills": "Patient assessment\nIV therapy and medication administration\nElectronic health records (Epic)\nTelemetry monitoring\nPatient and family education\nInfection control",
    "languages": "English (fluent)\nSpanish (conversational)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Programvareutvikler",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Programvareutvikler med 5 års erfaring med å bygge webapplikasjoner i Python og JavaScript. Leverte funksjoner brukt av 200,000+ brukere, kuttet API-responstider med 40 % og ledet migreringen av en monolitt til mikrotjenester. Sterk på testing, kodegjennomgang og tydelig dokumentasjon.",
    "experience": [
      {
        "role": "Programvareutvikler",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Build and maintain customer-facing web features in Python (Django) and React, serving 200,000+ users\nCut average API response time from 850 ms to 500 ms by adding caching and fixing slow queries\nLed the migration of the billing service to microservices with zero downtime\nReview 10+ pull requests a week and mentor 2 junior developers"
      },
      {
        "role": "Junior utvikler",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "jul 2020",
        "end": "feb 2022",
        "current": false,
        "points": "Built internal dashboards in JavaScript that replaced manual spreadsheets for 3 teams\nWrote automated tests that raised coverage from 45% to 78%\nFixed 120+ bugs across the product in the first year"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatikk",
        "start": "2016",
        "end": "2020",
        "notes": "Kurs i databaser, algoritmer og operativsystemer."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript and React\nPostgreSQL and Redis\nREST APIs and microservices\nGit and CI/CD\nAutomated testing (pytest, Jest)",
    "languages": "Engelsk (flytende)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Barneskolelærer",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Barneskolelærer med 7 års erfaring med undervisning på 3.–5. trinn. Dyktig i differensiert undervisning, klasseledelse og foreldrekommunikasjon. Hevet leseferdigheten i klassen min fra 58 % til 81 % over to skoleår.",
    "experience": [
      {
        "role": "Barneskolelærer (4. trinn)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "aug 2020",
        "end": "",
        "current": true,
        "points": "Undervis i lesing, matematikk og naturfag for en klasse på 26 elever, inkludert 5 med individuelle læringsplaner\nHevet klassens leseferdighet fra 58 % til 81 % på to år gjennom veiledede lesegrupper\nDriv et ukentlig foreldrenyhetsbrev og terminsvise fremdriftsmøter for hver familie\nLed skolens leseklubb for 40 elever på 3.–5. trinn"
      },
      {
        "role": "Barneskolelærer (3. trinn)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "aug 2018",
        "end": "jun 2020",
        "current": false,
        "points": "Planned and delivered daily lessons for 24 pupils across all core subjects\nIntroduced behaviour routines that cut classroom disruptions by half\nOrganised the year-group science fair with 120 pupils and 80 parents"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Barneskoleutdanning",
        "start": "2014",
        "end": "2018",
        "notes": "Statlig lærerlisens (Ohio, K–5. trinn). Lesepåtegning."
      }
    ],
    "skills": "Differensiert undervisning\nKlasseledelse\nVeiledede lesegrupper\nForeldrekommunikasjon\nTimeplanlegging\nGoogle Classroom",
    "languages": "Engelsk (flytende)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Senior regnskapsfører",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA med 8 års erfaring innen månedsavslutning, finansiell rapportering og internrevisjon. Avsluttet regnskapet 3 dager raskere ved å bygge om avstemmingsprosessen og fant $240,000 i tilbakeførbare overbetalinger på ett revisjonsår. Sterk i Excel, QuickBooks og ERP-systemer.",
    "experience": [
      {
        "role": "Senior regnskapsfører",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Own the month-end close for a $40M business unit, finishing 3 days faster after rebuilding reconciliations\nPrepare monthly financial statements and variance reports for senior management\nFound $240,000 in recoverable supplier overpayments during the 2024 internal audit\nSupervise 2 staff accountants and review their journal entries"
      },
      {
        "role": "Stabsregnskapsfører",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "jun 2017",
        "end": "des 2020",
        "current": false,
        "points": "Prepared tax returns and financial statements for 25 small-business clients\nAssisted audits of 8 clients, testing controls and documenting findings\nAutomated the fixed-asset register in Excel, saving 6 hours a month"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Regnskap",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Medlem av AICPA."
      }
    ],
    "skills": "Month-end close and reconciliations\nFinancial reporting and variance analysis\nInternal audit\nExcel (pivot tables, VLOOKUP)\nQuickBooks and SAP\nTax preparation",
    "languages": "English (fluent)\nMandarin (conversational)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A lastebilsjåfør",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A-sjåfør med 9 års erfaring innen langtransport og regional frakt. Over 900 000 ulykkesfrie miles, levering til tiden på 99 % og erfaring med kjøle-, flatbed- og tørrlast. Ren kjørehistorikk, påtegninger for farlig gods og tank.",
    "experience": [
      {
        "role": "Langtransportsjåfør",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "apr 2019",
        "end": "",
        "current": true,
        "points": "Drive 2,800+ miles a week on regional routes across Texas, Oklahoma and New Mexico\nMaintain a 99% on-time delivery rate across 1,100+ loads a year\nHaul refrigerated and dry-van freight; complete pre-trip and post-trip inspections daily\nOver 900,000 accident-free miles in total"
      },
      {
        "role": "Leveringsbilsjåfør",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar 2016",
        "end": "mar 2019",
        "current": false,
        "points": "Delivered building materials to 15-20 job sites a day across the Dallas-Fort Worth area\nOperated forklifts and secured flatbed loads to DOT standards\nKept delivery paperwork and logs accurate with zero DOT violations"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Sertifikat",
        "field": "Kommersiell kjøring (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A med påtegninger for farlig gods og tank. Ren kjørehistorikk."
      }
    ],
    "skills": "Lang- og regionalkjøring\nKjøle- og flatbedlast\nDOT-forskrifter og loggbøker\nInspeksjoner før tur\nRuteplanlegging (GPS, ELD)\nGaffeltruckkjøring",
    "languages": "Engelsk (flytende)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Butikkselger",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Butikkselger med 4 års erfaring i elektronikk- og klesbutikker. Konsekvent blant de 3 beste selgerne på teamet, med en tilknytningsrate på 32 % på garantier og tilbehør. Vennlig, rask i kassen og klarert til å åpne og stenge butikken.",
    "experience": [
      {
        "role": "Senior salgsmedarbeider",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "feb 2022",
        "end": "",
        "current": true,
        "points": "Sell electronics and accessories to 60+ customers a day; top 3 in store sales for 8 straight quarters\nAchieve a 32% attach rate on warranties and accessories, the highest on the team\nTrain 6 new starters on the till, stockroom and customer-service standards\nTrusted keyholder: open and close the store and handle cash counts"
      },
      {
        "role": "Salgsmedarbeider",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "jun 2021",
        "end": "jan 2022",
        "current": false,
        "points": "Helped customers choose outfits and sizes on a busy shop floor\nKept displays tidy and restocked shelves during every shift\nHandled returns and exchanges politely, keeping complaints to a minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate Degree",
        "field": "Forretning",
        "start": "2019",
        "end": "2021",
        "notes": "Deltidsstudier mens jeg jobbet i detaljhandel."
      }
    ],
    "skills": "Customer service and upselling\nCash handling and POS systems\nProduct knowledge (electronics)\nStock management\nStore opening and closing\nTeam training",
    "languages": "English (fluent)\nSpanish (fluent)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Kundeservicemedarbeider",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Kundeservicemedarbeider med 5 års erfaring med support på telefon, e-post og live chat. Løser 45+ saker om dagen med en tilfredshetsscore på 96 % og en andel løst ved første kontakt på 88 %. Rolig med sinte kunder og rask til å finne løsningen.",
    "experience": [
      {
        "role": "Kundeservicemedarbeider",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "mai 2021",
        "end": "",
        "current": true,
        "points": "Handle 45+ phone, email and chat cases a day for billing, orders and technical faults\nHold a 96% customer satisfaction score and 88% first-contact resolution rate\nDe-escalate difficult calls and turn complaints into repeat business\nTrain 5 new agents on scripts, systems and tone"
      },
      {
        "role": "Supportmedarbeider",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "sep 2019",
        "end": "apr 2021",
        "current": false,
        "points": "Answered customer emails and chats about orders, returns and refunds\nKept average first-response time under 2 hours\nWrote 20 help-centre articles that cut repeat questions by a quarter"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate Degree",
        "field": "Bedriftsadministrasjon",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Support på telefon, e-post og live chat\nKlagehåndtering og de-eskalering\nCRM-systemer (Zendesk, Salesforce)\nFakturerings- og bestillingsspørsmål\nSkriving 55 ord i minuttet\nTeamopplæring",
    "languages": "Engelsk (flytende)",
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
    "summary": "Driftsleder med 12 års erfaring med å drive team på opptil 80 mennesker på tvers av lager og distribusjon. Kuttet bestillingsbehandlingskostnader med 22 %, løftet forsendelser til tiden fra 91 % til 98 % og åpnet to nye steder til tiden og under budsjett.",
    "experience": [
      {
        "role": "Driftsleder",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "feb 2020",
        "end": "",
        "current": true,
        "points": "Run a 120,000 sq ft distribution centre with 80 staff across 3 shifts\nCut order-processing costs by 22% by redesigning pick paths and shift patterns\nLifted on-time shipments from 91% to 98% in 18 months\nOpened 2 new sites on time and 8% under budget"
      },
      {
        "role": "Lagerveileder",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "jun 2013",
        "end": "jan 2020",
        "current": false,
        "points": "Supervised 25 warehouse staff and the daily dispatch of 4,000+ orders\nIntroduced barcode scanning, cutting picking errors by 35%\nRan safety training that kept the site accident-free for 3 years"
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
    "skills": "Team leadership (up to 80 staff)\nWarehousing and distribution\nProcess improvement\nBudgeting and cost control\nSafety management\nERP and WMS systems",
    "languages": "Engelsk (flytende)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Lisensiert elektriker",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Lisensiert svenneelektriker med 8 års erfaring i bolig- og næringsarbeid. Dyktig i kabling, paneloppgraderinger, belysning og feilsøking, med ren sikkerhetshistorikk på 400+ jobber. Kunnskap om NEC-forskrifter og erfaring med å veilede lærlinger.",
    "experience": [
      {
        "role": "Svenneelektriker",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar 2019",
        "end": "",
        "current": true,
        "points": "Complete 400+ residential and commercial jobs: wiring, panel upgrades, lighting and EV chargers\nDiagnose and repair faults fast, with a first-visit fix rate of 92%\nSupervise 2 apprentices and sign off their work to code\nKeep a clean safety record with zero lost-time injuries"
      },
      {
        "role": "Elektrikerlærling",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "jun 2016",
        "end": "feb 2019",
        "current": false,
        "points": "Assisted licensed electricians on new-build wiring and rewires\nLearned conduit bending, cable pulling and panel installation\nCompleted 8,000 apprenticeship hours and passed the journeyman exam first time"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Sertifikat",
        "field": "Elektroteknologi",
        "start": "2015",
        "end": "2016",
        "notes": "Svenneelektrikerlisens (Colorado). OSHA 30-sertifisert."
      }
    ],
    "skills": "Bolig- og næringskabling\nPaneloppgraderinger og elbilladere\nFeilsøking og testing\nSamsvar med NEC-forskrifter\nRørbøying og kabeltrekking\nVeiledning av lærlinger",
    "languages": "Engelsk (flytende)",
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
    "summary": "Finansanalytiker med 6 års erfaring innen budsjettering, prognoser og investeringsanalyse. Bygde prognosemodeller som kuttet budsjettavvik med 30 % og støttet investeringsbeslutninger for $50M. Sterk i Excel, SQL og finansiell modellering.",
    "experience": [
      {
        "role": "Finansanalytiker",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "apr 2021",
        "end": "",
        "current": true,
        "points": "Build monthly forecasts and annual budgets for a $120M portfolio\nCut budget variance by 30% with a driver-based forecasting model\nSupport investment decisions worth $50M with valuation and scenario analysis\nPresent findings monthly to the CFO and department heads"
      },
      {
        "role": "Junior finansanalytiker",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "jul 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Prepared weekly performance reports for 12 branches\nAutomated reporting in Excel, saving 10 hours a week\nAssisted the credit team with loan portfolio analysis"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finans",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II-kandidat. Kurs i verdsettelse og bedriftsfinans."
      }
    ],
    "skills": "Financial modelling and forecasting\nBudgeting and variance analysis\nValuation (DCF, comparables)\nExcel (advanced) and SQL\nBloomberg Terminal\nData visualisation (Power BI)",
    "languages": "English (fluent)\nHindi (fluent)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Byggingeniør",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Byggingeniør (PE) med 7 års erfaring innen design av vei- og vanninfrastruktur. Ledet designen av en 12-mile veibreddeutvidelse og et overvannssystem som betjener 8,000 hjem. Dyktig i AutoCAD Civil 3D, kostnadsestimering og tillatelseskoordinering.",
    "experience": [
      {
        "role": "Byggingeniør",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Lead design of a 12-mile highway widening, from survey to construction documents\nDesigned a stormwater system serving 8,000 homes, approved first time by the city\nCoordinate permits with 4 agencies and manage a $2.5M design budget\nReview and stamp drawings as a licensed Professional Engineer"
      },
      {
        "role": "Junior byggingeniør",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "jul 2018",
        "end": "des 2020",
        "current": false,
        "points": "Prepared grading and drainage plans for 20+ residential developments\nRan cost estimates and quantity take-offs for road projects\nAttended site inspections and wrote progress reports"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Byggteknikk",
        "start": "2014",
        "end": "2018",
        "notes": "Professional Engineer-lisens (Washington). EIT bestått 2018."
      }
    ],
    "skills": "Vei- og dreneringsdesign\nAutoCAD Civil 3D\nOvervannsmodellering\nKostnadsestimering\nTillatelseskoordinering\nProsjektplanlegging (MS Project)",
    "languages": "Engelsk (flytende)",
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
    "summary": "Maskiningeniør med 6 års erfaring med å designe HVAC-systemer og produksjonsutstyr. Kuttet energibruken med 18 % på 3 anlegg med redesignede kanaler og kontroller, og ledet en maskinredesign som hevet produksjonen med 25 %. Dyktig i SolidWorks, FEA og termisk analyse.",
    "experience": [
      {
        "role": "Maskiningeniør",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "feb 2021",
        "end": "",
        "current": true,
        "points": "Design HVAC and production equipment for 3 plants with 400+ staff\nCut energy use by 18% by redesigning ductwork and control sequences\nLed a machine redesign that raised output by 25% with no extra floor space\nRun FEA and thermal analysis on new parts before prototyping"
      },
      {
        "role": "Junior maskiningeniør",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "aug 2019",
        "end": "jan 2021",
        "current": false,
        "points": "Modelled parts and assemblies in SolidWorks for automotive clients\nPrepared drawings, bills of materials and test reports\nSupported prototype builds and resolved fit issues on the shop floor"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Maskinteknikk",
        "start": "2015",
        "end": "2019",
        "notes": "Kurs i termodynamikk, fluidmekanikk og maskindesign."
      }
    ],
    "skills": "HVAC-design\nSolidWorks og AutoCAD\nFEA og termisk analyse\nMaskindesign\nEnergieffektivitet\nGD&T og toleranser",
    "languages": "English (fluent)\nKorean (conversational)",
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
    "summary": "Elektroingeniør med 6 års erfaring innen innebygde systemer og kraftelektronikk. Designet kontrollkort som nå brukes i 50,000+ enheter og kuttet kortkostnaden med 22 % gjennom redesign av komponenter. Dyktig i Altium, C, fastvaretesting og EMC-samsvar.",
    "experience": [
      {
        "role": "Elektroingeniør",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Design embedded control boards used in 50,000+ devices a year\nCut board cost by 22% by redesigning the power stage and sourcing alternates\nLead EMC compliance testing, passing first time on 4 product lines\nWrite and review firmware in C for microcontrollers"
      },
      {
        "role": "Junior elektroingeniør",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "jul 2019",
        "end": "feb 2021",
        "current": false,
        "points": "Laid out PCBs in Altium for consumer and industrial clients\nBuilt and tested prototypes, debugging hardware faults\nWrote test procedures that cut production test time by 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektroteknikk",
        "start": "2015",
        "end": "2019",
        "notes": "Kurs i innebygde systemer, kraftelektronikk og signalbehandling."
      }
    ],
    "skills": "Embedded systems and PCB design\nAltium Designer\nC and firmware\nPower electronics\nEMC compliance testing\nOscilloscopes and lab instruments",
    "languages": "English (fluent)\nGujarati (conversational)",
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
    "summary": "Dataanalytiker med 4 års erfaring med å gjøre salgs- og driftsdata om til beslutninger. Bygde dashbord brukt av 60+ ledere, kuttet månedlig rapporteringstid fra 3 dager til 4 timer og fant en prisfeil verdt $180,000 i året. Sterk i SQL, Excel og Power BI.",
    "experience": [
      {
        "role": "Dataanalytiker",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "jan 2022",
        "end": "",
        "current": true,
        "points": "Build Power BI dashboards used by 60+ store and regional managers\nCut monthly reporting from 3 days to 4 hours with automated SQL pipelines\nFound a pricing error worth $180,000 a year by auditing promotion data\nPresent findings monthly to the commercial team"
      },
      {
        "role": "Junior dataanalytiker",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "aug 2020",
        "end": "des 2021",
        "current": false,
        "points": "Cleaned and joined delivery data from 4 systems into one reporting table\nBuilt Excel trackers that replaced manual counts for 2 teams\nAnswered ad-hoc data questions for operations managers daily"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistikk",
        "start": "2016",
        "end": "2020",
        "notes": "Kurs i regresjon, databaser og datavisualisering."
      }
    ],
    "skills": "SQL og datarensing\nPower BI og Tableau\nExcel (avansert)\nPython (pandas)\nDashborddesign\nGrunnleggende A/B-testing",
    "languages": "Engelsk (flytende)\nVietnamesisk (samtale)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Dataforsker",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Dataforsker med 5 års erfaring med å bygge maskinlæringsmodeller for netthandel. En anbefalingsmodell jeg leverte løftet inntekt per besøk med 12 %, og en churn-modell flagger nå 80 % av risikokunder. Sterk i Python, SQL og modellutrulling.",
    "experience": [
      {
        "role": "Dataforsker",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "feb 2022",
        "end": "",
        "current": true,
        "points": "Shipped a recommendation model that lifted revenue per visit by 12%\nBuilt a churn model that flags 80% of at-risk customers a month early\nDeployed models to production with monitoring and retraining pipelines\nPresent model results to product and marketing teams monthly"
      },
      {
        "role": "Junior dataforsker",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "jul 2020",
        "end": "jan 2022",
        "current": false,
        "points": "Built forecasting models for 3 retail clients with 90%+ accuracy\nCleaned and prepared datasets of 10M+ rows for modelling\nWrote documentation so clients could rerun models themselves"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Datavitenskap",
        "start": "2018",
        "end": "2020",
        "notes": "Avhandling om anbefalingssystemer. BS i matematikk (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMachine learning and statistics\nSQL and Spark\nModel deployment (Docker, AWS)\nA/B testing\nData visualisation",
    "languages": "English (fluent)\nArabic (fluent)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webutvikler",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webutvikler med 4 års erfaring med å bygge raske, tilgjengelige nettsteder i HTML, CSS og JavaScript. Bygde om en butikks kasse som løftet konverteringer med 18 % og vedlikeholder 12 klientnettsteder med 99,9 % oppetid. Sterk på responsiv design, ytelse og grunnleggende SEO.",
    "experience": [
      {
        "role": "Webutvikler",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Build responsive websites in HTML, CSS, JavaScript and WordPress for 12 clients\nRebuilt a store checkout that lifted conversions by 18%\nCut average page load time from 4.2s to 1.8s with image and code optimisation\nKeep all client sites at 99.9% uptime with monitoring and backups"
      },
      {
        "role": "Junior webutvikler",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "jun 2021",
        "end": "feb 2022",
        "current": false,
        "points": "Built landing pages and fixed bugs across 20+ small business sites\nLearned Git, responsive design and basic SEO on live projects\nAnswered client emails and made same-day content updates"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatikk",
        "start": "2017",
        "end": "2021",
        "notes": "Kurs i webutvikling, databaser og menneske-maskin-interaksjon."
      }
    ],
    "skills": "HTML, CSS and JavaScript\nReact and WordPress\nResponsive design\nPage-speed optimisation\nGit and GitHub\nBasic SEO",
    "languages": "English (fluent)\nSpanish (fluent)",
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
    "summary": "Grafisk designer med 5 års erfaring innen merkevarebygging, emballasje og design for sosiale medier. Skapte merkevareidentiteter for 25+ små bedrifter og en emballasjeredesign som løftet hyllesalget med 14 %. Dyktig i Adobe Illustrator, Photoshop og Figma.",
    "experience": [
      {
        "role": "Grafisk designer",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "jan 2022",
        "end": "",
        "current": true,
        "points": "Design brand identities, packaging and social campaigns for 25+ clients\nPackaging redesign for a food brand lifted shelf sales by 14%\nProduce 30+ social assets a week across Instagram, TikTok and Facebook\nPresent concepts to clients and revise from feedback fast"
      },
      {
        "role": "Junior grafisk designer",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "jul 2020",
        "end": "des 2021",
        "current": false,
        "points": "Designed flyers, menus and social posts for local restaurants and shops\nPrepared print-ready files and checked proofs with printers\nBuilt a template library that cut design time by a third"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafisk design",
        "start": "2016",
        "end": "2020",
        "notes": "Portefølje i merkevare- og emballasjedesign."
      }
    ],
    "skills": "Adobe Illustrator and Photoshop\nFigma\nBrand identity design\nPackaging design\nSocial media design\nPrint production",
    "languages": "English (fluent)\nKorean (conversational)",
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
    "summary": "UX-designer med 5 års erfaring med å forske på brukere og designe mobil- og webprodukter. Redesignet en onboardingflyt som kuttet frafall med 35 % og kjørte 40+ brukervennlighetstester. Dyktig i Figma, brukerundersøkelser, wireframing og prototyping.",
    "experience": [
      {
        "role": "UX-designer",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "feb 2022",
        "end": "",
        "current": true,
        "points": "Redesigned mobile onboarding, cutting drop-off by 35% in 3 months\nRun 40+ usability tests and user interviews a year\nBuild wireframes and prototypes in Figma for 2 product teams\nWork daily with engineers and product managers on delivery"
      },
      {
        "role": "Junior UX-designer",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "aug 2020",
        "end": "jan 2022",
        "current": false,
        "points": "Designed screens and flows for 5 client apps\nRan first usability tests and wrote up findings for clients\nBuilt a component library that sped up design handover"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psykologi",
        "start": "2016",
        "end": "2020",
        "notes": "UX-designsertifikat (General Assembly, 2020). Kurs i menneske-maskin-interaksjon."
      }
    ],
    "skills": "User research and usability testing\nWireframing and prototyping (Figma)\nInformation architecture\nDesign systems\nJourney mapping\nStakeholder workshops",
    "languages": "Engelsk (flytende)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Markedsføringssjef",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Markedsføringssjef med 8 års erfaring innen B2B- og forbrukerkampanjer. Vokste kvalifiserte leads med 60 % på ett år, lanserte en produktlinje som nådde $3M i salg det første året og styrer et årlig budsjett på $500,000 på tvers av et team på 5.",
    "experience": [
      {
        "role": "Markedsføringssjef",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Lead a team of 5 and a $500,000 annual marketing budget\nGrew qualified leads by 60% in one year with content and paid campaigns\nLaunched a product line that reached $3M in first-year sales\nCut cost per lead by 28% by rebuilding campaign targeting"
      },
      {
        "role": "Markedsføringsspesialist",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "jun 2017",
        "end": "feb 2021",
        "current": false,
        "points": "Ran email campaigns to 80,000 subscribers with a 24% open rate\nManaged social accounts that grew from 5,000 to 40,000 followers\nOrganised 6 trade-show stands a year, generating 300+ leads each"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kurs i forbrukeratferd, analyse og merkevareledelse."
      }
    ],
    "skills": "Campaign strategy and planning\nContent and email marketing\nPaid advertising (Google, Meta)\nMarketing analytics (GA4)\nTeam leadership\nBudget management",
    "languages": "Engelsk (flytende)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Prosjektleder",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Prosjektleder (PMP) med 7 års erfaring med å levere programvare- og byggeprosjekter til tiden og innen budsjett. Styrte 15 prosjekter verdt opptil $4M, med en leveringsrate til tiden på 94 %. Dyktig i Agile, risikostyring og interessentkommunikasjon.",
    "experience": [
      {
        "role": "Prosjektleder",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Manage 15 projects worth up to $4M, with a 94% on-time delivery rate\nRun Agile sprints for 3 teams and report progress to executives weekly\nCut project overruns by 30% with earlier risk reviews\nCoordinate vendors, clients and internal teams across 4 time zones"
      },
      {
        "role": "Prosjektkoordinator",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "jul 2018",
        "end": "des 2020",
        "current": false,
        "points": "Tracked schedules, budgets and permits for 8 building projects\nPrepared status reports and meeting notes for clients\nResolved scheduling conflicts that saved 2 weeks on a school build"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Bedriftsadministrasjon",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-sertifisert (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Project planning and scheduling\nAgile and Scrum\nRisk management\nBudget control\nStakeholder communication\nMS Project and Jira",
    "languages": "Engelsk (flytende)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "HR-leder",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "HR-leder med 9 års erfaring innen ansettelser, medarbeiderrelasjoner og goder. Kuttet tid til ansettelse fra 45 til 28 dager, løftet beholdning av ansatte med 15 % og driver HR for 250 ansatte på 3 steder. Kunnskap på CIPD-nivå om arbeidsrett og policy.",
    "experience": [
      {
        "role": "HR-leder",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "feb 2020",
        "end": "",
        "current": true,
        "points": "Run HR for 250 employees across 3 sites, with a team of 3\nCut time-to-hire from 45 to 28 days by rebuilding the interview process\nLifted retention by 15% with a new onboarding and review programme\nHandle employee relations, grievances and policy updates"
      },
      {
        "role": "HR-generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "jun 2016",
        "end": "jan 2020",
        "current": false,
        "points": "Recruited 120+ staff a year for hotels and restaurants\nRan payroll checks and benefits enrolment for 400 employees\nResolved staff disputes and kept turnover below the industry average"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Human Resources",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP-sertifisert. Kurs i arbeidsrett og organisasjonsatferd."
      }
    ],
    "skills": "Recruitment and onboarding\nEmployee relations\nBenefits and payroll\nEmployment law\nPerformance management\nHRIS (Workday, BambooHR)",
    "languages": "Engelsk (flytende)",
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
    "summary": "Assisterende advokat med 6 års erfaring innen forretningsjus og kontraktsrett. Håndterte 40+ saker, vant forenklet dom i 8, og utformet kontrakter verdt $25M. Godkjent som advokat i Illinois; dyktig i juridisk research, utforming og klientrådgivning.",
    "experience": [
      {
        "role": "Assisterende advokat",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "sep 2020",
        "end": "",
        "current": true,
        "points": "Manage 40+ commercial litigation cases from filing to settlement\nWon summary judgment in 8 cases and settled 20 more favourably\nDraft and negotiate contracts worth up to $25M\nAdvise clients in person and in writing on risk and strategy"
      },
      {
        "role": "Juridisk kontorassistent (law clerk)",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "aug 2019",
        "end": "aug 2020",
        "current": false,
        "points": "Researched case law and drafted memos for 2 judges\nReviewed motions and prepared bench summaries for 100+ hearings\nObserved trials and settlement conferences across civil divisions"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Jus",
        "start": "2016",
        "end": "2019",
        "notes": "Godkjent som advokat i Illinois (2019). Law review, artikkelredaktør."
      }
    ],
    "skills": "Forretningsrettstvister\nUtforming og forhandling av kontrakter\nJuridisk research (Westlaw, LexisNexis)\nKlientrådgivning\nVitneavhør og bevisopptak\nRettsinnleveringer og prosedyre",
    "languages": "Engelsk (flytende)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinisk farmasøyt",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinisk farmasøyt (PharmD) med 7 års erfaring fra sykehus- og apotekfarmasi. Gjennomgår 100+ medisinbestillinger om dagen, kuttet uønskede legemiddelhendelser med 25 % gjennom en ny kontrollprotokoll og veileder pasienter om trygg medisinbruk. Lisensiert i Pennsylvania.",
    "experience": [
      {
        "role": "Klinisk farmasøyt",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "jan 2020",
        "end": "",
        "current": true,
        "points": "Gjennomgå 100+ medisinbestillinger om dagen for sikkerhet, dosering og interaksjoner\nKuttet uønskede legemiddelhendelser med 25 % med en ny dobbeltkontrollprotokoll\nGi råd til leger og sykepleiere om legemiddelvalg for komplekse pasienter\nDriv sykehusets antibiotikastyringsrunder to ganger i uken"
      },
      {
        "role": "Stabsfarmasøyt",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "jul 2018",
        "end": "des 2019",
        "current": false,
        "points": "Dispensed 200+ prescriptions a day with zero dispensing errors\nCounselled patients on new medicines, side effects and storage\nGave flu vaccinations and ran blood-pressure checks"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmasi",
        "start": "2014",
        "end": "2018",
        "notes": "Lisensiert farmasøyt (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Medication review and safety\nClinical pharmacology\nPatient counselling\nPharmacy systems (Epic, PioneerRx)\nAntibiotic stewardship\nVaccination services",
    "languages": "Engelsk (flytende)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Allmenntannlege",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Allmenntannlege (DDS) med 8 års erfaring innen restaurerende, kosmetisk og forebyggende tannpleie. Behandler 25+ pasienter om dagen i en praksis med 2,000 pasienter, med en pasienttilfredshet på 98 %. Dyktig i kroner, implantater, rotfyllinger og usynlige tannreguleringer.",
    "experience": [
      {
        "role": "Allmenntannlege",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "feb 2019",
        "end": "",
        "current": true,
        "points": "Treat 25+ patients a day: fillings, crowns, root canals and extractions\nHold a 98% patient satisfaction score across 1,200+ reviews\nPlace 15+ implants a month and manage clear-aligner cases\nSupervise 2 hygienists and 4 dental assistants"
      },
      {
        "role": "Assosiert tannlege",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "jul 2017",
        "end": "jan 2019",
        "current": false,
        "points": "Ga generell tannpleie for en praksis med 1,500 pasienter\nIntroduserte kroner samme dag, og kuttet returbesøk med 40 %\nHoldt skolebesøk om barns munnhelse"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Tannpleie",
        "start": "2013",
        "end": "2017",
        "notes": "Lisensiert tannlege (Arizona). Invisalign-sertifisert. HLR/BLS-sertifisert."
      }
    ],
    "skills": "Restorative dentistry (crowns, fillings)\nRoot canal treatment\nDental implants\nClear aligners\nPatient care and communication\nDigital X-rays and CEREC",
    "languages": "Engelsk (flytende)",
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
    "summary": "Fysioterapeut (DPT) med 6 års erfaring innen ortopedisk og idrettsrehabilitering. Behandler 12–15 pasienter om dagen, der 90 % når målene sine innen de planlagte øktene. Dyktig i manuell terapi, treningsforskrivning og retur-til-sport-testing.",
    "experience": [
      {
        "role": "Fysioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Treat 12-15 patients a day for sports injuries, post-surgical rehab and back pain\n90% of patients reach their goals within the planned number of sessions\nDesign return-to-sport testing used by 3 local teams\nMentor 2 new graduates and supervise student placements"
      },
      {
        "role": "Stabsfysioterapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "aug 2019",
        "end": "feb 2021",
        "current": false,
        "points": "Provided inpatient rehab for post-surgical and stroke patients\nRan group exercise classes for 20+ older patients a week\nDocumented progress in Epic and handed over to ward teams"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fysioterapi",
        "start": "2016",
        "end": "2019",
        "notes": "Lisensiert fysioterapeut (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Orthopaedic and sports rehabilitation\nManual therapy\nExercise prescription\nReturn-to-sport testing\nPatient education\nDocumentation (Epic)",
    "languages": "Engelsk (flytende)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Kjøkkensjef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Kjøkkensjef med 10 års erfaring fra kreolske og moderne amerikanske kjøkken. Leder en brigade på 12 i en restaurant med 200 seter, kuttet matkostnader med 15 % med strammere bestilling og vant 'Best New Menu' fra byens matguide i 2025.",
    "experience": [
      {
        "role": "Kjøkkensjef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Led en brigade på 12 i en restaurant med 200 seter som serverer 300+ gjester per kveld\nKuttet matkostnader med 15 % med strammere bestilling og en sesongmeny\nVant 'Best New Menu' fra byens matguide i 2025\nDesign menyer, tren kokker og kjør passet i fredags- og lørdagsservice"
      },
      {
        "role": "Souschef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "jun 2017",
        "end": "des 2020",
        "current": false,
        "points": "Ran the kitchen when the head chef was away, covering 150 covers a night\nManaged stock, ordering and supplier relationships\nTrained 8 line cooks and cut staff turnover by a third"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Kulinariske kunstfag",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager-sertifisert."
      }
    ],
    "skills": "Menu design and costing\nCreole and modern American cuisine\nKitchen leadership (brigade of 12)\nFood safety (ServSafe)\nSupplier management\nBanquet and event catering",
    "languages": "English (fluent)\nSpanish (fluent)",
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
    "summary": "Politibetjent med 8 års erfaring innen patrulje, lokalt politiarbeid og etterforskning. Svarer på 30+ anrop i uken, med utmerkelser for de-eskalering og lokalsamfunnsarbeid. Opplært i kriseintervensjon, førstehjelp og rapportskriving.",
    "experience": [
      {
        "role": "Politibetjent",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "jun 2019",
        "end": "",
        "current": true,
        "points": "Patrol a district of 40,000 residents, responding to 30+ calls a week\nReceived 2 commendations for de-escalation and community outreach\nInvestigate thefts and assaults, writing reports used in 50+ prosecutions\nMentor 3 new officers through field training"
      },
      {
        "role": "Patruljebetjent",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "aug 2017",
        "end": "mai 2019",
        "current": false,
        "points": "Patrolled county roads and responded to emergency calls\nServed court papers and assisted with prisoner transport\nCompleted crisis intervention and first-aid training"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Sertifikat",
        "field": "Rettshåndhevelse",
        "start": "2017",
        "end": "2017",
        "notes": "Uteksaminert fra Ohio Peace Officer Training Academy. Opplært i Crisis Intervention Team."
      }
    ],
    "skills": "Patrulje og nødrespons\nLokalt politiarbeid\nKriseintervensjon og de-eskalering\nRapportskriving\nEtterforskning\nFørstehjelp og HLR",
    "languages": "Engelsk (flytende)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Brannkonstabel / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Brannkonstabel og EMT med 7 års erfaring innen brannslukking, redning og akuttmedisinsk respons. Rykket ut på 900+ oppdrag, inkludert bygningsbranner, bilredninger og medisinske nødsituasjoner. Opplært i farlig gods med ren sikkerhetshistorikk.",
    "experience": [
      {
        "role": "Brannkonstabel / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar 2020",
        "end": "",
        "current": true,
        "points": "Respond to 900+ fire, rescue and medical calls across a 3-station district\nProvide emergency medical care as a certified EMT on 60% of calls\nHazMat trained; lead decontamination at chemical incidents\nTrain new recruits in hose handling, ladders and search techniques"
      },
      {
        "role": "Frivillig brannkonstabel",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "jun 2018",
        "end": "feb 2020",
        "current": false,
        "points": "Svarte på skog- og bygningsbranner som frivillig\nFullførte opplæring i Brannkonstabel I &amp; II og EMT-Basic\nHjalp til med å holde foredrag om brannsikkerhet i lokalsamfunnet på skoler"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Sertifikat",
        "field": "Brannvitenskap",
        "start": "2017",
        "end": "2018",
        "notes": "Brannkonstabel I &amp; II. EMT-Basic-sertifisert. Opplært i farlig gods-operasjoner."
      }
    ],
    "skills": "Brannslukking og redning\nAkuttmedisinsk behandling (EMT)\nFarlig gods-operasjoner\nStiger, slanger og ventilasjon\nBrannsikkerhet i lokalsamfunnet\nTeamarbeid under press",
    "languages": "Engelsk (flytende)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Lisensiert rørlegger",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Lisensiert mesterrørlegger med 11 års erfaring i bolig- og næringsrørlegging. Fullførte 600+ jobber i året, fra grovinstallasjoner til kjeleinstallasjoner, med en fikserate på første besøk på 98 %. Dyktig i rørmontering, avløpsrensing og forskriftssamsvar.",
    "experience": [
      {
        "role": "Mesterrørlegger",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "jan 2019",
        "end": "",
        "current": true,
        "points": "Complete 600+ residential and commercial jobs a year\nInstall boilers, water heaters and full bathroom rough-ins\nHold a 98% first-visit fix rate on service calls\nSupervise 3 apprentices and sign off their work"
      },
      {
        "role": "Svennerørlegger",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "jun 2014",
        "end": "des 2018",
        "current": false,
        "points": "Ran new-build plumbing for 40+ houses a year\nCleared drains and repaired leaks for homes and restaurants\nLearned gas fitting and backflow prevention"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Sertifikat",
        "field": "Rørleggerteknologi",
        "start": "2013",
        "end": "2014",
        "notes": "Mesterrørleggerlisens (Tennessee). Sertifisert i tilbakeslagsforebygging."
      }
    ],
    "skills": "Bolig- og næringsrørlegging\nRørmontering og lodding\nAvløpsrensing og kamerainspeksjon\nKjele- og varmtvannsberederinstallasjoner\nGassmontering\nSamsvar med rørleggerforskrifter",
    "languages": "Engelsk (flytende)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Svennesnekker",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Svennesnekker med 9 års erfaring innen reisverk, finisharbeid og spesialtilpassede skap. Reiste 30+ hus og monterte kjøkken i 60+ hjem, med rykte for nøyaktige mål og rene finisher. Dyktig i å lese tegninger og arbeide etter forskrifter.",
    "experience": [
      {
        "role": "Svennesnekker",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "feb 2019",
        "end": "",
        "current": true,
        "points": "Frame 30+ houses and fit kitchens in 60+ homes\nBuild custom cabinetry and trim to 1/16-inch tolerance\nRead and follow architectural plans, flagging errors before they cost money\nTrain 2 apprentices in framing and finish techniques"
      },
      {
        "role": "Snekkerlærling",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "jun 2016",
        "end": "jan 2019",
        "current": false,
        "points": "Assisted with framing, drywall and flooring on remodels\nLearned to use saws, routers and nail guns safely\nCompleted 8,000 apprenticeship hours and passed the journeyman exam"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Sertifikat",
        "field": "Snekkerarbeid",
        "start": "2015",
        "end": "2016",
        "notes": "Svennesnekker. OSHA 10-sertifisert."
      }
    ],
    "skills": "Reisverk og konstruksjonsarbeid\nFinishsnekkerarbeid og listverk\nSpesialtilpassede skap\nLesing av arkitekttegninger\nElektroverktøy og sikkerhet\nGipsplater og gulv",
    "languages": "Engelsk (flytende)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Ungdomsskolelærer (matematikk)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Ungdomsskolelærer med 8 års erfaring med å undervise i matematikk på 9.–12. trinn. Hevet algebra-beståttraten fra 64 % til 83 % og trener mattelaget til 2 delstatsfinaler. Dyktig i differensiert undervisning, eksamensforberedelse og foreldrekommunikasjon.",
    "experience": [
      {
        "role": "Matematikklærer (9.–12. trinn)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "aug 2019",
        "end": "",
        "current": true,
        "points": "Teach algebra, geometry and pre-calculus to 120 pupils across 5 classes\nRaised algebra pass rates from 64% to 83% in 3 years\nCoach the maths team to 2 state finals\nRun after-school tutoring for 30 pupils a week"
      },
      {
        "role": "Matematikklærer (9.–10. trinn)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "aug 2017",
        "end": "jun 2019",
        "current": false,
        "points": "Underviste i algebra og geometri for 100 elever i året\nIntroduserte ukentlige quizer som halverte leksegap\nOrganiserte skolens første matematikk messe med 200 elever"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Matematikkutdanning",
        "start": "2013",
        "end": "2017",
        "notes": "Statlig lærerlisens (New Hampshire, 7.–12. trinn, matematikk)."
      }
    ],
    "skills": "Matematikkundervisning (algebra til pre-calculus)\nEksamensforberedelse\nDifferensiert undervisning\nKlasseledelse\nForeldrekommunikasjon\nGoogle Classroom og Desmos",
    "languages": "Engelsk (flytende)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Barnehagelærer",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Barnehagelærer med 6 års erfaring med omsorg for barn i alderen 3–5 år. Dyktig i lekbasert læring, atferdsveiledning og foreldrekommunikasjon. Bygde et fonetikkprogram som løftet skolestart-resultatene i hele klassen min.",
    "experience": [
      {
        "role": "Barnehagelærer",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "aug 2020",
        "end": "",
        "current": true,
        "points": "Teach and care for a class of 18 children aged 3-5\nBuilt a phonics programme that lifted school-readiness scores across the class\nPlan weekly themes, crafts and outdoor play\nShare daily updates and termly progress reports with parents"
      },
      {
        "role": "Assisterende barnehagelærer",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "jun 2018",
        "end": "jul 2020",
        "current": false,
        "points": "Supported the lead teacher with a class of 20 children\nRan story time, songs and art activities daily\nKept safety and hygiene records to state standards"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate Degree",
        "field": "Barnehageutdanning",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA)-bevis. Sertifisert i førstehjelp og HLR."
      }
    ],
    "skills": "Lekbasert læring\nAtferdsveiledning\nFonetikk og tidlig lese- og skriveferdighet\nForeldrekommunikasjon\nKlasseromssikkerhet\nPlanlegging av kunst og håndverk",
    "languages": "Engelsk (flytende)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Barne- og familiesosionom",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Lisensiert sosialarbeider med 7 års erfaring med å støtte barn og familier. Styrer en saksmengde på 25 familier, koordinerer tjenester på tvers av skoler og helseleverandører, og fullfører rettsrapporter som dommere stoler på. Dyktig i vurdering, krisestøtte og beskyttelse.",
    "experience": [
      {
        "role": "Barne- og familiesosionom",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "jan 2020",
        "end": "",
        "current": true,
        "points": "Manage a caseload of 25 families, visiting homes and schools weekly\nComplete court reports and give evidence in family court\nCoordinate housing, health and school support for vulnerable families\nCut assessment waiting time by 20% with a new triage system"
      },
      {
        "role": "Saksbehandler",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "jul 2018",
        "end": "des 2019",
        "current": false,
        "points": "Supported 40+ families in temporary housing with benefits and referrals\nRan weekly parenting and budgeting workshops\nKept case notes accurate for audits and funding reports"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Sosialt arbeid",
        "start": "2016",
        "end": "2018",
        "notes": "Lisensiert sosialarbeider (Ohio). Kurs i barnevern og familiesystemer."
      }
    ],
    "skills": "Saksbehandling (25 familier)\nBeskyttelse av barn\nRapporter til familieretten\nKrisestøtte\nSamordning på tvers av etater\nHenvisninger til ytelser og bolig",
    "languages": "Engelsk (flytende)",
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
    "summary": "Juridisk assistent med 6 års erfaring innen rettstviststøtte og selskapsinnleveringer. Styrer discovery for 30+ saker, utformer prosesskriv og kontrakter, og holder innleveringsfrister med en rekord på 100 % til tiden. Dyktig i Westlaw, e-discovery og saksbehandlingsprogramvare.",
    "experience": [
      {
        "role": "Juridisk assistent",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "feb 2021",
        "end": "",
        "current": true,
        "points": "Manage discovery for 30+ litigation cases, reviewing 10,000+ documents\nDraft pleadings, motions and contracts for attorney review\nKeep a 100% on-time record on court filings and deadlines\nCoordinate witnesses and prepare trial binders"
      },
      {
        "role": "Juridisk assistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "aug 2019",
        "end": "jan 2021",
        "current": false,
        "points": "Intake interviews for 20+ clients a week\nPrepared forms and filings for housing and family cases\nTranslated legal documents for Spanish-speaking clients"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate Degree",
        "field": "Paralegal-studier",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Certified Paralegal (CP). ABA-godkjent program."
      }
    ],
    "skills": "Litigation support and discovery\nLegal drafting\nE-discovery (Relativity)\nCase management (Clio)\nCourt filings and deadlines\nLegal research (Westlaw)",
    "languages": "English (fluent)\nSpanish (fluent)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Bokholder",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Bokholder med 5 års erfaring innen leverandørgjeld, fakturering og bankavstemminger. Behandler 300+ fakturaer i måneden med 99,8 % nøyaktighet og holder regnskapet ryddig til månedsavslutning. Dyktig i QuickBooks, Excel og lønnsstøtte.",
    "experience": [
      {
        "role": "Bokholder",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "apr 2021",
        "end": "",
        "current": true,
        "points": "Process 300+ supplier invoices a month with 99.8% accuracy\nReconcile 6 bank accounts weekly and flag differences same day\nPrepare payroll data for 45 staff and chase overdue customer payments\nKeep records tidy for the year-end audit, with zero findings"
      },
      {
        "role": "Regnskapsassistent",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "jun 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Entered sales invoices and receipts into QuickBooks daily\nAnswered supplier queries about payments by phone and email\nFiled paperwork and kept the archive up to date"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Sertifikat",
        "field": "Bokføring",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "Leverandør- og kundefordringer\nBankavstemminger\nFakturering (300+ i måneden)\nQuickBooks og Excel\nLønnsstøtte\nDataregistrering (65 ord i minuttet)",
    "languages": "Engelsk (flytende)",
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
    "summary": "Administrativ assistent med 6 års erfaring med å holde kontorer i gang uten problemer. Styrer kalendere for 4 ledere, organiserer reiser og møter, og håndterer 100+ e-poster om dagen. Kjent for nøyaktighet, diskresjon og ro under tidspress.",
    "experience": [
      {
        "role": "Administrativ assistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Manage calendars, travel and meetings for 4 senior managers\nHandle 100+ emails a day, drafting replies and flagging priorities\nPrepare board papers and take minutes at monthly meetings\nRun office supplies and vendor orders, cutting costs by 12%"
      },
      {
        "role": "Resepsjonist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "aug 2019",
        "end": "des 2020",
        "current": false,
        "points": "Welcomed 60+ patients a day and managed the appointment book\nAnswered phones and handled insurance queries\nKept patient records accurate and confidential"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate Degree",
        "field": "Kontoradministrasjon",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Kalender- og reisestyring\nE-post og korrespondanse\nMøtereferater\nMicrosoft Office (Word, Excel, Outlook)\nDataregistrering (70 ord i minuttet)\nKontorrekvisita og leverandører",
    "languages": "Engelsk (flytende)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankfunksjonær",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankfunksjonær med 4 års erfaring med å betjene 80+ kunder om dagen med nøyaktighet og omtanke. Kasseskuffen balansert til siste cent gjennom 3 år, med null mangler. Dyktig i innskudd, uttak, svindelkontroller og å henvise kunder til riktige produkter.",
    "experience": [
      {
        "role": "Bankfunksjonær",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Serve 80+ customers a day: deposits, withdrawals, payments and transfers\nCash drawer balanced to the cent for 3 years with zero shortages\nSpot and stop 12 fraud attempts, saving customers $90,000+\nRefer customers to savings and loan products, hitting referral targets quarterly"
      },
      {
        "role": "Kundeservicemedarbeider",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "jun 2021",
        "end": "feb 2022",
        "current": false,
        "points": "Opened new accounts and issued debit cards for members\nAnswered phone queries about balances and statements\nHelped members set up online and mobile banking"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate Degree",
        "field": "Forretning",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Kontanthåndtering og avstemming\nInnskudd, uttak og betalinger\nSvindeloppdagelse\nKundeservice\nBankprogramvare (Fiserv)\nProdukthenvisninger",
    "languages": "Engelsk (flytende)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Salgssjef",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Salgssjef med 10 års erfaring med å lede team på opptil 15 representanter. Vokste regional inntekt fra $4M til $7.5M på 3 år, løftet vinnraten fra 22 % til 34 % og halverte ansattgjennomtrekk med bedre coaching og onboarding.",
    "experience": [
      {
        "role": "Regional salgssjef",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Lead a team of 15 sales reps across Texas and Oklahoma\nGrew regional revenue from $4M to $7.5M in 3 years\nLifted win rate from 22% to 34% with better coaching and pipeline reviews\nCut rep turnover by half with a new onboarding programme"
      },
      {
        "role": "Salgsrepresentant",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "jun 2015",
        "end": "des 2020",
        "current": false,
        "points": "Sold industrial equipment to 80+ accounts, hitting quota 5 years running\nTop rep in the region for 3 straight years\nBuilt a referral network that brought in 25% of new business"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kurs i salgsledelse og forhandling."
      }
    ],
    "skills": "Sales team leadership (15 reps)\nRevenue growth and forecasting\nPipeline management (Salesforce)\nCoaching and onboarding\nNegotiation\nTerritory planning",
    "languages": "Engelsk (flytende)",
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
    "summary": "Byggeleder med 12 års erfaring med å levere nærings- og boligprosjekter verdt opptil $12M. Fullførte 20+ prosjekter med 95 % levering til tiden, null skader med fravær på mine byggeplasser og budsjetter holdt innenfor 3 %. Dyktig i fremdriftsplanlegging, ledelse av underentreprenører og sikkerhet.",
    "experience": [
      {
        "role": "Byggeleder",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "feb 2020",
        "end": "",
        "current": true,
        "points": "Deliver commercial and residential projects worth up to $12M\nCompleted 20+ projects with a 95% on-time rate and budgets within 3%\nManage 30+ subcontractors and 50 workers across 3 live sites\nZero lost-time injuries across all sites in 4 years"
      },
      {
        "role": "Byggeplassleder",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "jun 2013",
        "end": "jan 2020",
        "current": false,
        "points": "Ran daily site operations for office and retail builds\nCoordinated deliveries, inspections and subcontractor schedules\nKept safety records clean and passed every OSHA inspection"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Byggkonstruksjon",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30-sertifisert. CCM-kandidat (Certified Construction Manager)."
      }
    ],
    "skills": "Project scheduling (MS Project, Procore)\nBudget control\nSubcontractor management\nSite safety (OSHA 30)\nBlueprint reading\nClient reporting",
    "languages": "Engelsk (flytende)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Sertifisert medisinsk assistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Sertifisert medisinsk assistent med 5 års erfaring i allmennpraksis og legevakt. Tar imot 25+ pasienter om dagen, måler vitale tegn, tar blodprøver og driver resepsjonen med en pasienttilfredshet på 97 %. Dyktig i EHR, blodprøvetaking og forsikringssjekker.",
    "experience": [
      {
        "role": "Sertifisert medisinsk assistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "apr 2021",
        "end": "",
        "current": true,
        "points": "Room 25+ patients a day: vitals, histories and exam preparation\nDraw blood and run basic lab tests with a 99% first-stick rate\nManage the front desk, scheduling and insurance checks\nHold a 97% patient satisfaction score across 800+ surveys"
      },
      {
        "role": "Medisinsk assistent",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "aug 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Triaged walk-in patients and assisted doctors with minor procedures\nGave vaccinations and handled specimen collection\nKept exam rooms stocked, clean and ready between patients"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Sertifikat",
        "field": "Medisinsk assistanse",
        "start": "2018",
        "end": "2019",
        "notes": "Sertifisert medisinsk assistent (CMA, AAMA). BLS-sertifisert. Opplært i blodprøvetaking."
      }
    ],
    "skills": "Patient intake and vitals\nPhlebotomy\nEHR (eClinicalWorks)\nVaccinations\nInsurance verification\nFront-desk management",
    "languages": "English (fluent)\nSpanish (fluent)",
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
    "summary": "Motivert videregåendeelev med sterke karakterer og deltidsjobberfaring. Lærer raskt, pålitelig og god med mennesker. Søker en første fulltidsrolle eller en deltidsjobb ved siden av college.",
    "experience": [
      {
        "role": "Deltids salgsassistent",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "sep 2024",
        "end": "",
        "current": true,
        "points": "Serve 50+ customers a shift on weekends and after school\nHandle cash, restock shelves and keep displays tidy\nTrusted to open the store on Saturday mornings"
      },
      {
        "role": "Frivillig leksehjelper",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "jan 2024",
        "end": "jun 2025",
        "current": false,
        "points": "Tutored younger pupils in maths twice a week\nHelped organise the summer reading programme for 40 children"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Vitnemål fra videregående skole",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Æresliste, 3 år. Kaptein for debatteamet."
      }
    ],
    "skills": "Kundeservice\nKontanthåndtering\nTeamarbeid\nTidsstyring\nMicrosoft Office\nOffentlig tale (debatteam)",
    "languages": "Engelsk (flytende)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Nyutdannet \u2014 Bedriftsadministrasjon",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Nyutdannet i bedriftsadministrasjon med praksiserfaring innen markedsføring og drift. Organiserte en bedriftskonkurranse på campus med 200 deltakere og fullførte en 6-måneders praksisplass der jeg halverte rapporteringstiden. Ivrig etter å starte en fulltidskarriere og lære raskt.",
    "experience": [
      {
        "role": "Markedsføringspraktikant",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "jan 2025",
        "end": "jun 2025",
        "current": false,
        "points": "Drev selskapets sosiale kontoer, og vokste følgere fra 2,000 til 6,500\nBygde et rapporteringsdashbord som halverte ukentlig rapporteringstid\nSkrev 20 blogginnlegg som brakte inn 15,000+ lesninger"
      },
      {
        "role": "Frivillig arrangementsleder",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "sep 2024",
        "end": "mai 2025",
        "current": false,
        "points": "Organised a business competition with 200 participants and 12 judges\nManaged a $5,000 budget and a team of 8 volunteers"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Bedriftsadministrasjon",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 år. Avsluttende årsprosjekt om markedsføring for små bedrifter."
      }
    ],
    "skills": "Social media marketing\nExcel and Google Sheets\nPresentation skills\nEvent organisation\nTeamwork\nBasic data analysis",
    "languages": "Engelsk (flytende)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior markedsføringsmedarbeider",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior markedsføringsmedarbeider med 2 års erfaring innen innhold, e-post og sosiale medier. Vokste et klientnyhetsbrev fra 1,000 til 4,000 abonnenter og kjører kampanjer med en gjennomsnittlig åpningsrate på 22 %. Klar for mer ansvar og en større kundeportefølje.",
    "experience": [
      {
        "role": "Junior markedsføringsmedarbeider",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "jul 2024",
        "end": "",
        "current": true,
        "points": "Grew a client newsletter from 1,000 to 4,000 subscribers in 14 months\nWrite and schedule 12 social posts a week for 4 clients\nRun email campaigns averaging a 22% open rate\nReport campaign results to clients monthly"
      },
      {
        "role": "Markedsføringspraktikant",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "jan 2024",
        "end": "jun 2024",
        "current": false,
        "points": "Wrote product descriptions for 200+ items on the company website\nHelped run a spring sale campaign that lifted online orders by 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Kommunikasjon",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Kurs i digital markedsføring og medieskriving."
      }
    ],
    "skills": "Innholdsskriving\nE-postmarkedsføring (Mailchimp)\nAdministrasjon av sosiale medier\nGoogle Analytics\nCanva\nKlientrapportering",
    "languages": "Engelsk (flytende)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Driftsveileder",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Driftsveileder med 8 års erfaring med å drive lagerteam på 20–30 mennesker. Kuttet plukkfeil med 30 %, løftet utsending til tiden fra 90 % til 97 % og trente 15 nyansatte. Klar for en driftslederrolle med et større sted og budsjett.",
    "experience": [
      {
        "role": "Driftsveileder",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Supervise 25 warehouse staff across 2 shifts in a 90,000 sq ft site\nCut picking errors by 30% with new check routines and barcode scanning\nLifted on-time dispatch from 90% to 97% in 2 years\nTrained 15 new starters and promoted 3 to team-lead roles"
      },
      {
        "role": "Teamleder",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "jun 2017",
        "end": "feb 2021",
        "current": false,
        "points": "Led a team of 10 pickers and packers on the night shift\nIntroduced a rota that cut overtime by 20% without missing deadlines\nRan safety briefings and kept the team accident-free for 2 years"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Forsyningskjedeledelse",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Team leadership (25 staff)\nWarehouse operations\nProcess improvement\nSafety management\nInventory control\nWMS and Excel",
    "languages": "English (fluent)\nHindi (conversational)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Senior prosjektleder",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Senior prosjektleder med 14 års erfaring med å levere programvareprosjekter verdt opptil $8M. Ledet 30+ prosjekter med en leveringsrate til tiden på 92 %, bygde et PMO fra bunnen av og veiledet 10 prosjektledere. Kjent for rolig leveranse under press og ærlig rapportering til ledere.",
    "experience": [
      {
        "role": "Senior prosjektleder",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "jan 2019",
        "end": "",
        "current": true,
        "points": "Lever programvareprosjekter verdt opptil $8M med en leveringsgrad til tiden på 92 %\nBygde selskapets PMO fra bunnen av: maler, rapportering og styring\nVeiled 10 prosjektledere og driv det månedlige PM-fellesskapet\nRapporter direkte til CTO-en på et program med 40 personer"
      },
      {
        "role": "Prosjektleder",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "jun 2012",
        "end": "des 2018",
        "current": false,
        "points": "Managed 20+ projects for retail and healthcare clients\nIntroduced Agile practices that cut delivery time by 25%\nGrew 2 key accounts from $500k to $2M in annual revenue"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informasjonssystemer",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-sertifisert (2015). Certified ScrumMaster. MBA-kurs (2018–2019, ufullstendig)."
      }
    ],
    "skills": "Program- og prosjektleveranse\nPMO-oppsett og styring\nAgile og Waterfall\nBudsjettkontroll ($8M)\nLederrapportering\nTeamveiledning",
    "languages": "English (fluent)\nSpanish (conversational)",
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
    "summary": "Driftsdirektør med 18 års erfaring med å skalere drift for detaljhandels- og logistikkselskaper. Vokste en virksomhet på 200 personer til 900 personer på 6 steder, løftet EBITDA-marginen fra 8 % til 14 % og ledet 2 oppkjøp. Erfaring med styrerapportering og investorrelasjoner.",
    "experience": [
      {
        "role": "Driftsdirektør",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "jan 2021",
        "end": "",
        "current": true,
        "points": "Run operations for 900 people across 6 sites and a $180M budget\nLifted EBITDA margin from 8% to 14% in 3 years\nLed 2 acquisitions and integrated both teams within 6 months\nReport to the board monthly on operations, risk and growth"
      },
      {
        "role": "Visepresident for drift",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "jun 2014",
        "end": "des 2020",
        "current": false,
        "points": "Scaled operations from 200 to 600 people across 4 sites\nOpened 3 distribution centres on time and under budget\nBuilt the leadership team that still runs the business today"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Bedriftsadministrasjon",
        "start": "2010",
        "end": "2012",
        "notes": "BS i økonomi, NYU (2006). Kurs i selskapsstyring (2020)."
      }
    ],
    "skills": "Drift i stor skala (900 mennesker)\nP&L-eierskap ($180M)\nFusjoner og oppkjøp\nStyrerapportering\nVekststrategi\nBygging av lederteam",
    "languages": "Engelsk (flytende)",
    "template": "executive"
  }
};
});
