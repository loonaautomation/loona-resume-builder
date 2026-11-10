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
      "title": "Geregistreerd verpleegkundige",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Geregistreerd verpleegkundige met 6 jaar ervaring op medisch-chirurgische en telemetrie-afdelingen. Bedreven in patiëntbeoordeling, IV-therapie, medicatietoediening en elektronische patiëntendossiers. Bekend om rustige, duidelijke communicatie met patiënten en families in situaties onder hoge druk.",
    "experience": [
      {
        "role": "Geregistreerd verpleegkundige",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Zorg voor 5-6 patiënten per dienst op een medisch-chirurgische afdeling met 32 bedden, inclusief beoordeling, medicatietoediening en wondzorg\n4 pas afgestudeerde verpleegkundigen getraind en gementord, hun inwerktijd met 2 weken verkort\nMedicatiefouten op de afdeling met 18% verminderd door een dubbelcheck-routine bij de overdracht in te voeren\nAlle zorg nauwkeurig gedocumenteerd in Epic elektronische patiëntendossiers"
      },
      {
        "role": "Stafverpleegkundige",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Mei 2021",
        "current": false,
        "points": "Triage uitgevoerd voor 40+ inlooppatiënten per dag, urgente gevallen geprioriteerd voor zorg op dezelfde dag\nVaccinaties en gezondheidscontroles gegeven bij maandelijkse gemeenschapsevenementen\nDoorverwijzingen naar specialisten gecoördineerd en testresultaten opgevolgd"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Verpleegkunde",
        "start": "2015",
        "end": "2019",
        "notes": "Licentie als geregistreerd verpleegkundige (Texas). BLS- en ACLS-gecertificeerd."
      }
    ],
    "skills": "Patiëntbeoordeling\nIV-therapie en medicatietoediening\nElektronische patiëntendossiers (Epic)\nTelemetriemonitoring\nPatiënt- en familievoorlichting\nInfectiepreventie",
    "languages": "Engels (vloeiend)\nSpaans (conversatie)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Softwareontwikkelaar",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Softwareontwikkelaar met 5 jaar ervaring in het bouwen van webapplicaties in Python en JavaScript. Features opgeleverd die door 200.000+ gebruikers worden gebruikt, API-responstijden met 40% verlaagd en de migratie van een monoliet naar microservices geleid. Sterk in testen, code review en duidelijke documentatie.",
    "experience": [
      {
        "role": "Softwareontwikkelaar",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mrt 2022",
        "end": "",
        "current": true,
        "points": "Klantgerichte webfuncties gebouwd en onderhouden in Python (Django) en React, voor 200.000+ gebruikers\nGemiddelde API-responstijd verlaagd van 850 ms naar 500 ms door caching toe te voegen en trage query's te herstellen\nDe migratie van de facturatieservice naar microservices geleid met nul downtime\n10+ pull requests per week beoordeeld en 2 junior ontwikkelaars gementord"
      },
      {
        "role": "Junior ontwikkelaar",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Interne dashboards in JavaScript gebouwd die handmatige spreadsheets voor 3 teams vervingen\nGeautomatiseerde tests geschreven die de dekking verhoogden van 45% naar 78%\n120+ bugs in het hele product hersteld in het eerste jaar"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatica",
        "start": "2016",
        "end": "2020",
        "notes": "Vakken in databases, algoritmen en besturingssystemen."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript en React\nPostgreSQL en Redis\nREST API's en microservices\nGit en CI/CD\nAutomatisch testen (pytest, Jest)",
    "languages": "Engels (vloeiend)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Basisschoolleraar",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Basisschoolleraar met 7 jaar ervaring in het lesgeven aan groep 3-5. Bedreven in gedifferentieerde instructie, klassenmanagement en oudercommunicatie. Het leesvaardigheidsniveau in mijn klas verhoogd van 58% naar 81% in twee schooljaren.",
    "experience": [
      {
        "role": "Basisschoolleraar (groep 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "Lezen, rekenen en natuurwetenschappen geven aan een klas van 26 leerlingen, waaronder 5 met individuele leerplannen\nLeesvaardigheid van de klas verhoogd van 58% naar 81% in twee jaar via begeleide leesgroepen\nEen wekelijkse oudernieuwsbrief en voortgangsgesprekken per termijn voor elk gezin verzorgen\nDe school's leesclub leiden voor 40 leerlingen in groep 3-5"
      },
      {
        "role": "Basisschoolleraar (groep 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Aug 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Dagelijkse lessen gepland en gegeven voor 24 leerlingen in alle kernvakken\nGedragsroutines geïntroduceerd die verstoringen in de klas halveerden\nDe wetenschapsbeurs van de jaarlaag georganiseerd met 120 leerlingen en 80 ouders"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Basisonderwijs",
        "start": "2014",
        "end": "2018",
        "notes": "Staatslicentie onderwijs (Ohio, klas K-5). Leesaantekening."
      }
    ],
    "skills": "Gedifferentieerde instructie\nKlassenmanagement\nBegeleide leesgroepen\nOudercommunicatie\nLesplanning\nGoogle Classroom",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Senior accountant",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA met 8 jaar ervaring in maandsluiting, financiële rapportage en interne audit. De boeken 3 dagen sneller gesloten door het afstemmingsproces opnieuw op te bouwen en $240.000 aan terugvorderbare overbetalingen gevonden in één auditjaar. Sterk in Excel, QuickBooks en ERP-systemen.",
    "experience": [
      {
        "role": "Senior accountant",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Eigenaar van de maandsluiting voor een businessunit van $40M, 3 dagen sneller afgerond na het opnieuw opbouwen van de afstemmingen\nMaandelijkse financiële overzichten en variantierapporten voorbereiden voor het senior management\n$240.000 aan terugvorderbare overbetalingen aan leveranciers gevonden tijdens de interne audit van 2024\n2 medewerkers accountants begeleiden en hun journaalposten beoordelen"
      },
      {
        "role": "Medewerker accountant",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "Belastingaangiftes en financiële overzichten voorbereid voor 25 mkb-klanten\nGeassisteerd bij audits van 8 klanten, controles getest en bevindingen gedocumenteerd\nHet register van vaste activa in Excel geautomatiseerd, wat 6 uur per maand bespaarde"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Accountancy",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Lid van de AICPA."
      }
    ],
    "skills": "Maandsluiting en afstemmingen\nFinanciële rapportage en variantieanalyse\nInterne audit\nExcel (draaitabellen, VERT.ZOEKEN)\nQuickBooks en SAP\nBelastingaangifte voorbereiden",
    "languages": "Engels (vloeiend)\nMandarijn (gespreksniveau)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Vrachtwagenchauffeur CDL Class A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A-chauffeur met 9 jaar ervaring in langeafstands- en regionaal vrachtvervoer. Meer dan 900.000 ongevalvrije mijlen, 99% op tijd geleverd en ervaring met gekoelde, platte en droge ladingen. Schoon rijrecord, HazMat- en tankeraantekeningen.",
    "experience": [
      {
        "role": "Langeafstandsvrachtwagenchauffeur",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "2.800+ mijl per week gereden op regionale routes door Texas, Oklahoma en New Mexico\nEen op-tijd-leveringspercentage van 99% gehandhaafd over 1.100+ ladingen per jaar\nGekoelde en droge vracht vervoerd; dagelijks inspecties vóór en na de rit uitgevoerd\nIn totaal meer dan 900.000 ongevalvrije mijlen"
      },
      {
        "role": "Bezorgchauffeur",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mrt 2016",
        "end": "Mrt 2019",
        "current": false,
        "points": "Bouwmaterialen bezorgd op 15-20 bouwplaatsen per dag in de regio Dallas-Fort Worth\nHeftrucks bediend en platte ladingen vastgezet volgens DOT-normen\nBezorgpapieren en logboeken nauwkeurig bijgehouden met nul DOT-overtredingen"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificaat",
        "field": "Commercieel rijden (CDL Klasse A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A met HazMat- en tankeraantekeningen. Schoon rijrecord."
      }
    ],
    "skills": "Langeafstands- en regionaal rijden\nGekoelde en platte ladingen\nDOT-regelgeving en logboeken\nInspecties vóór de rit\nRouteplanning (GPS, ELD)\nHeftruck bedienen",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Verkoopmedewerker retail",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Verkoopmedewerker retail met 4 jaar ervaring in elektronica- en kledingwinkels. Stelselmatig in de top 3 verkopers van het team, met een bijverkooppercentage van 32% op garanties en accessoires. Vriendelijk, snel aan de kassa en vertrouwd om de winkel te openen en te sluiten.",
    "experience": [
      {
        "role": "Senior verkoopmedewerker",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Elektronica en accessoires verkopen aan 60+ klanten per dag; top 3 in winkelverkopen gedurende 8 kwartalen op rij\nEen verkooppercentage van 32% op garanties en accessoires behaald, het hoogste van het team\n6 nieuwe starters getraind in de kassa, het magazijn en de klantenservicenormen\nVertrouwde sleutelhouder: de winkel openen en sluiten en kascontroles afhandelen"
      },
      {
        "role": "Verkoopmedewerker",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Klanten geholpen bij het kiezen van outfits en maten op een drukke winkelvloer\nPresentaties netjes gehouden en schappen bijgevuld tijdens elke dienst\nRetouren en ruilingen beleefd afgehandeld, klachten tot een minimum beperkt"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate degree",
        "field": "Bedrijf",
        "start": "2019",
        "end": "2021",
        "notes": "Deeltijdstudie naast werk in de retail."
      }
    ],
    "skills": "Klantenservice en bijverkoop\nContant geld verwerken en kassasystemen\nProductkennis (elektronica)\nVoorraadbeheer\nWinkel openen en sluiten\nTeamtraining",
    "languages": "Engels (vloeiend)\nSpaans (vloeiend)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Klantenservicemedewerker",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Klantenservicemedewerker met 5 jaar ervaring in ondersteuning via telefoon, e-mail en livechat. Los 45+ zaken per dag op met een tevredenheidsscore van 96% en 88% opgelost bij het eerste contact. Rustig met boze klanten en snel in het vinden van de oplossing.",
    "experience": [
      {
        "role": "Klantenservicemedewerker",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "Mei 2021",
        "end": "",
        "current": true,
        "points": "45+ zaken per dag via telefoon, e-mail en chat afgehandeld over facturatie, bestellingen en technische storingen\nEen klanttevredenheid van 96% en 88% opgelost bij het eerste contact\nMoeilijke gesprekken de-escaleren en klachten omzetten in terugkerende opdrachten\n5 nieuwe medewerkers trainen in scripts, systemen en toon"
      },
      {
        "role": "Supportmedewerker",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "E-mails en chats van klanten over bestellingen, retouren en terugbetalingen beantwoord\nGemiddelde eerste reactietijd onder de 2 uur gehouden\n20 helpcentrumartikelen geschreven die herhaalde vragen met een kwart verminderden"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate degree",
        "field": "Bedrijfskunde",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Ondersteuning via telefoon, e-mail en livechat\nKlachtenafhandeling en de-escalatie\nCRM-systemen (Zendesk, Salesforce)\nFacturatie- en bestelvragen\nTypen 55 wpm\nTeamtraining",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Operationeel manager",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Operationeel manager met 12 jaar ervaring in het aansturen van teams tot 80 mensen in magazijn en distributie. Orderverwerkingskosten met 22% verlaagd, op-tijd-leveringen verhoogd van 91% naar 98% en twee nieuwe locaties op tijd en onder budget geopend.",
    "experience": [
      {
        "role": "Operationeel manager",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Een distributiecentrum van 120.000 sq ft geleid met 80 medewerkers in 3 ploegen\nOrderverwerkingskosten met 22% verlaagd door pickroutes en ploegenpatronen opnieuw te ontwerpen\nOp-tijd-leveringen verhoogd van 91% naar 98% in 18 maanden\n2 nieuwe locaties op tijd en 8% onder budget geopend"
      },
      {
        "role": "Magazijnsupervisor",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "25 magazijnmedewerkers en de dagelijkse verzending van 4.000+ orders begeleid\nBarcodescanning geïntroduceerd, pickfouten met 35% verminderd\nVeiligheidstraining gegeven die de bouwplaats 3 jaar ongevalvrij hield"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Operationeel management",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Teamleiding (tot 80 medewerkers)\nOpslag en distributie\nProcesverbetering\nBudgettering en kostenbeheersing\nVeiligheidsmanagement\nERP- en WMS-systemen",
    "languages": "Engels (vloeiend)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Bevoegd elektricien",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Bevoegd gezel-elektricien met 8 jaar ervaring in woning- en utiliteitsbouw. Bedreven in bedrading, groepenkastupgrades, verlichting en storingzoeken, met een schoon veiligheidsrecord over 400+ klussen. Kennis van de NEC-code en ervaring met het begeleiden van leerlingen.",
    "experience": [
      {
        "role": "Gezel-elektricien",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mrt 2019",
        "end": "",
        "current": true,
        "points": "400+ klussen in woningen en bedrijven afgerond: bedrading, groepenkastupgrades, verlichting en EV-laders\nStoringen snel gediagnosticeerd en gerepareerd, met 92% hersteld bij het eerste bezoek\n2 leerlingen begeleiden en hun werk aftekenen volgens de voorschriften\nEen schoon veiligheidsrecord bijgehouden met nul ongevallen met verzuim"
      },
      {
        "role": "Leerling-elektricien",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Bevoegde elektriciens geassisteerd bij nieuwbouwbedrading en herbedrading\nBuizen buigen, kabels trekken en panelen installeren geleerd\n8.000 leerlinguren afgerond en in één keer geslaagd voor het gezellenexamen"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificaat",
        "field": "Elektrische techniek",
        "start": "2015",
        "end": "2016",
        "notes": "Gezel-elektricienlicentie (Colorado). OSHA 30-gecertificeerd."
      }
    ],
    "skills": "Residentiële en commerciële bedrading\nPaneelupgrades en EV-laders\nFoutopsporing en testen\nNaleving NEC-voorschriften\nBuisbuigen en kabeltrekken\nBegeleiding van leerlingen",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Financieel analist",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Financieel analist met 6 jaar ervaring in budgettering, prognoses en beleggingsanalyse. Prognosemodellen gebouwd die de budgetafwijking met 30% verminderden en $50M aan beleggingsbeslissingen ondersteunden. Sterk in Excel, SQL en financiële modellering.",
    "experience": [
      {
        "role": "Financieel analist",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Maandelijkse prognoses en jaarbudgetten opgesteld voor een portefeuille van $120M\nBudgetafwijking met 30% verkleind met een drivergebaseerd prognosemodel\nInvesteringsbeslissingen ter waarde van $50M ondersteunen met waardering en scenarioanalyse\nBevindingen maandelijks presenteren aan de CFO en afdelingshoofden"
      },
      {
        "role": "Junior financieel analist",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mrt 2021",
        "current": false,
        "points": "Wekelijkse prestatierapporten voorbereid voor 12 vestigingen\nRapportages in Excel geautomatiseerd, wat 10 uur per week bespaarde\nHet kredietteam geassisteerd bij de analyse van de leningenportefeuille"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Financiën",
        "start": "2015",
        "end": "2019",
        "notes": "Kandidaat CFA Level II. Vakken in waardering en bedrijfsfinanciering."
      }
    ],
    "skills": "Financiële modellering en prognoses\nBudgettering en variantieanalyse\nWaardering (DCF, vergelijkbaren)\nExcel (gevorderd) en SQL\nBloomberg Terminal\nDatavisualisatie (Power BI)",
    "languages": "Engels (vloeiend)\nHindi (vloeiend)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Civiel ingenieur",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Civiel ingenieur (PE) met 7 jaar ervaring in het ontwerpen van weg- en waterinfrastructuur. Het ontwerp geleid van een snelwegverbreding van 12 mijl en een regenwatersysteem voor 8.000 woningen. Bedreven in AutoCAD Civil 3D, kostenramingen en vergunningencoördinatie.",
    "experience": [
      {
        "role": "Civiel ingenieur",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Het ontwerp geleid van een snelwegverbreding van 12 mijl, van meting tot constructiedocumenten\nEen regenwatersysteem ontworpen voor 8.000 woningen, in één keer goedgekeurd door de gemeente\nVergunningen met 4 instanties gecoördineerd en een ontwerpbudget van $2,5M beheerd\nTekeningen beoordelen en stempelen als gelicentieerd Professional Engineer"
      },
      {
        "role": "Junior civiel ingenieur",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "Grondwerk- en drainageplannen voorbereid voor 20+ woningbouwprojecten\nKostenramingen en hoeveelheidsberekeningen uitgevoerd voor wegenprojecten\nBouwplaatsinspecties bijgewoond en voortgangsrapporten geschreven"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Civiele techniek",
        "start": "2014",
        "end": "2018",
        "notes": "Professional Engineer-licentie (Washington). EIT behaald in 2018."
      }
    ],
    "skills": "Weg- en drainageontwerp\nAutoCAD Civil 3D\nRegenwatermodellering\nKostenraming\nVergunningscoördinatie\nProjectroostering (MS Project)",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Werktuigbouwkundig ingenieur",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Werktuigbouwkundig ingenieur met 6 jaar ervaring in het ontwerpen van HVAC-systemen en productieapparatuur. Energieverbruik met 18% verlaagd in 3 fabrieken met opnieuw ontworpen luchtkanalen en regelingen, en een machineherontwerp geleid dat de output met 25% verhoogde. Bedreven in SolidWorks, FEA en thermische analyse.",
    "experience": [
      {
        "role": "Werktuigbouwkundig ingenieur",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "HVAC- en productieapparatuur ontworpen voor 3 fabrieken met 400+ medewerkers\nEnergieverbruik met 18% verlaagd door luchtkanalen en regelvolgordes opnieuw te ontwerpen\nEen machineherontwerp geleid dat de output met 25% verhoogde zonder extra vloeroppervlak\nFEA en thermische analyse uitgevoerd op nieuwe onderdelen voorafgaand aan prototyping"
      },
      {
        "role": "Junior werktuigbouwkundig ingenieur",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Onderdelen en samenstellingen gemodelleerd in SolidWorks voor klanten in de auto-industrie\nTekeningen, stuklijsten en testrapporten voorbereid\nPrototypebouw ondersteund en pasproblemen op de werkvloer opgelost"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Werktuigbouwkunde",
        "start": "2015",
        "end": "2019",
        "notes": "Vakken in thermodynamica, vloeistofmechanica en machineontwerp."
      }
    ],
    "skills": "HVAC-ontwerp\nSolidWorks en AutoCAD\nFEA en thermische analyse\nMachineontwerp\nEnergie-efficiëntie\nGD&T en toleranties",
    "languages": "Engels (vloeiend)\nKoreaans (gespreksniveau)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektrotechnisch ingenieur",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Elektrotechnisch ingenieur met 6 jaar ervaring in embedded systemen en vermogenselektronica. Besturingsprinten ontworpen die nu in 50.000+ apparaten worden gebruikt en printkosten met 22% verlaagd door componenten opnieuw te ontwerpen. Bedreven in Altium, C, firmwaretesten en EMC-naleving.",
    "experience": [
      {
        "role": "Elektrotechnisch ingenieur",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mrt 2021",
        "end": "",
        "current": true,
        "points": "Embedded besturingsprinten ontworpen die in 50.000+ apparaten per jaar worden gebruikt\nPrintplaatkosten met 22% verlaagd door de voedingstrap opnieuw te ontwerpen en alternatieven in te kopen\nEMC-nalevingstesten geleid, in één keer geslaagd voor 4 productlijnen\nFirmware schrijven en beoordelen in C voor microcontrollers"
      },
      {
        "role": "Junior elektrotechnisch ingenieur",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "PCB's gelayout in Altium voor consumenten- en industriële klanten\nPrototypes gebouwd en getest, hardwarefouten opgespoord\nTestprocedures geschreven die de productietesttijd met 30% verminderden"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektrotechniek",
        "start": "2015",
        "end": "2019",
        "notes": "Vakken in embedded systemen, vermogenselektronica en signaalverwerking."
      }
    ],
    "skills": "Embedded systemen en PCB-ontwerp\nAltium Designer\nC en firmware\nVermogenselektronica\nEMC-nalevingstesten\nOscilloscopen en labinstrumenten",
    "languages": "Engels (vloeiend)\nGujarati (gespreksniveau)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Data-analist",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Data-analist met 4 jaar ervaring in het omzetten van sales- en operatiedata in beslissingen. Dashboards gebouwd die door 60+ managers worden gebruikt, de maandelijkse rapportagetijd verkort van 3 dagen naar 4 uur en een prijsfout gevonden ter waarde van $180.000 per jaar. Sterk in SQL, Excel en Power BI.",
    "experience": [
      {
        "role": "Data-analist",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Power BI-dashboards gebouwd die door 60+ winkel- en regiomanagers worden gebruikt\nMaandelijkse rapportage verkort van 3 dagen naar 4 uur met geautomatiseerde SQL-pipelines\nEen prijsfout gevonden ter waarde van $180.000 per jaar door promotiegegevens te controleren\nBevindingen maandelijks presenteren aan het commerciële team"
      },
      {
        "role": "Junior data-analist",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Aug 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "Bezorggegevens uit 4 systemen opgeschoond en samengevoegd tot één rapportagetabel\nExcel-trackers gebouwd die handmatige tellingen voor 2 teams vervingen\nDagelijks ad-hoc datavragen van operationeel managers beantwoord"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistiek",
        "start": "2016",
        "end": "2020",
        "notes": "Vakken in regressie, databases en datavisualisatie."
      }
    ],
    "skills": "SQL en data cleaning\nPower BI en Tableau\nExcel (gevorderd)\nPython (pandas)\nDashboardontwerp\nBasis A/B-testen",
    "languages": "Engels (vloeiend)\nVietnamees (conversatie)",
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
    "summary": "Data scientist met 5 jaar ervaring in het bouwen van machine-learningmodellen voor e-commerce. Een aanbevelingsmodel dat ik uitbracht, verhoogde de omzet per bezoek met 12%, en een churn-model signaleert nu 80% van de risicoklanten. Sterk in Python, SQL en modelimplementatie.",
    "experience": [
      {
        "role": "Data scientist",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Een aanbevelingsmodel opgeleverd dat de omzet per bezoek met 12% verhoogde\nEen churn-model gebouwd dat 80% van de risicoklanten een maand eerder signaleert\nModellen naar productie uitgerold met monitoring- en hertrainingspipelines\nModelresultaten maandelijks presenteren aan product- en marketingteams"
      },
      {
        "role": "Junior data scientist",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Prognosemodellen gebouwd voor 3 retailklanten met 90%+ nauwkeurigheid\nDatasets van 10M+ rijen opgeschoond en voorbereid voor modellering\nDocumentatie geschreven zodat klanten modellen zelf opnieuw konden draaien"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Data science",
        "start": "2018",
        "end": "2020",
        "notes": "Scriptie over aanbevelingssystemen. BS in Wiskunde (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMachine learning en statistiek\nSQL en Spark\nModelimplementatie (Docker, AWS)\nA/B-testen\nDatavisualisatie",
    "languages": "Engels (vloeiend)\nArabisch (vloeiend)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webontwikkelaar",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webontwikkelaar met 4 jaar ervaring in het bouwen van snelle, toegankelijke websites in HTML, CSS en JavaScript. De winkel's checkout opnieuw gebouwd die de conversies met 18% verhoogde en 12 klantensites onderhouden met 99,9% uptime. Sterk in responsief ontwerp, prestaties en SEO-basis.",
    "experience": [
      {
        "role": "Webontwikkelaar",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mrt 2022",
        "end": "",
        "current": true,
        "points": "Responsieve websites gebouwd in HTML, CSS, JavaScript en WordPress voor 12 klanten\nEen winkelcheckout opnieuw gebouwd die de conversies met 18% verhoogde\nGemiddelde laadtijd van pagina's verlaagd van 4,2s naar 1,8s met afbeeldings- en codeoptimalisatie\nAlle klantensites op 99,9% uptime gehouden met monitoring en back-ups"
      },
      {
        "role": "Junior webontwikkelaar",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Landingspagina's gebouwd en bugs hersteld op 20+ websites van kleine bedrijven\nGit, responsief ontwerp en basis-SEO geleerd op live projecten\nE-mails van klanten beantwoord en dezelfde dag contentupdates gedaan"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatica",
        "start": "2017",
        "end": "2021",
        "notes": "Vakken in webontwikkeling, databases en mens-computerinteractie."
      }
    ],
    "skills": "HTML, CSS en JavaScript\nReact en WordPress\nResponsief ontwerp\nPaginasnelheid-optimalisatie\nGit en GitHub\nBasis-SEO",
    "languages": "Engels (vloeiend)\nSpaans (vloeiend)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafisch ontwerper",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafisch ontwerper met 5 jaar ervaring in branding, verpakkingen en socialmedia-ontwerp. Huisstijlen gemaakt voor 25+ kleine bedrijven en een verpakkingsherontwerp dat de schapverkopen met 14% verhoogde. Bedreven in Adobe Illustrator, Photoshop en Figma.",
    "experience": [
      {
        "role": "Grafisch ontwerper",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Huisstijlen, verpakkingen en social campagnes ontworpen voor 25+ klanten\nVerpakkingsherontwerp voor een voedingsmerk verhoogde de schapverkopen met 14%\n30+ social assets per week geproduceerd voor Instagram, TikTok en Facebook\nConcepten presenteren aan klanten en snel bijwerken op basis van feedback"
      },
      {
        "role": "Junior grafisch ontwerper",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "Flyers, menu's en social posts ontworpen voor lokale restaurants en winkels\nDrukklaar bestanden voorbereid en proefdrukken gecontroleerd bij drukkers\nEen sjablonenbibliotheek gebouwd die de ontwerptijd met een derde verkortte"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Grafisch ontwerp",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio in branding en verpakkingsontwerp."
      }
    ],
    "skills": "Adobe Illustrator en Photoshop\nFigma\nOntwerp van huisstijlen\nVerpakkingsontwerp\nSocialmedia-ontwerp\nPrintproductie",
    "languages": "Engels (vloeiend)\nKoreaans (gespreksniveau)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX-ontwerper",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX-ontwerper met 5 jaar ervaring in het onderzoeken van gebruikers en het ontwerpen van mobiele en webproducten. Een onboardingflow opnieuw ontworpen die de uitval met 35% verlaagde en 40+ gebruikerstesten uitgevoerd. Bedreven in Figma, gebruikersonderzoek, wireframing en prototyping.",
    "experience": [
      {
        "role": "UX-ontwerper",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Mobiele onboarding opnieuw ontworpen, uitval met 35% verlaagd in 3 maanden\n40+ gebruikerstesten en gebruikersinterviews per jaar uitgevoerd\nWireframes en prototypes gebouwd in Figma voor 2 productteams\nDagelijks samenwerken met ingenieurs en productmanagers aan oplevering"
      },
      {
        "role": "Junior UX-ontwerper",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Aug 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Schermen en flows ontworpen voor 5 klantenapps\nEerste gebruikerstesten uitgevoerd en bevindingen uitgewerkt voor klanten\nEen componentenbibliotheek gebouwd die de ontwerpoverdracht versnelde"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychologie",
        "start": "2016",
        "end": "2020",
        "notes": "UX-ontwerpcertificaat (General Assembly, 2020). Vakken in mens-computerinteractie."
      }
    ],
    "skills": "Gebruikersonderzoek en gebruikerstesten\nWireframing en prototyping (Figma)\nInformatiearchitectuur\nDesignsystemen\nJourney mapping\nStakeholderworkshops",
    "languages": "Engels (vloeiend)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marketingmanager",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marketingmanager met 8 jaar ervaring in B2B- en consumentencampagnes. Gekwalificeerde leads met 60% laten groeien in één jaar, een productlijn gelanceerd die $3M aan eerstejaars verkopen behaalde en een jaarlijks budget van $500.000 beheerd voor een team van 5.",
    "experience": [
      {
        "role": "Marketingmanager",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mrt 2021",
        "end": "",
        "current": true,
        "points": "Leiding aan een team van 5 en een jaarlijks marketingbudget van $500.000\nGekwalificeerde leads met 60% laten groeien in één jaar met content en betaalde campagnes\nEen productlijn gelanceerd die $3M aan verkopen behaalde in het eerste jaar\nKosten per lead met 28% verlaagd door de campagnetargeting opnieuw op te bouwen"
      },
      {
        "role": "Marketingspecialist",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "E-mailcampagnes uitgevoerd naar 80.000 abonnees met een openingspercentage van 24%\nSocial accounts beheerd die groeiden van 5.000 naar 40.000 volgers\n6 beursstands per jaar georganiseerd, elk goed voor 300+ leads"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Vakken in consumentengedrag, analytics en merkmanagement."
      }
    ],
    "skills": "Campagnestrategie en -planning\nContent- en e-mailmarketing\nBetaalde advertenties (Google, Meta)\nMarketing analytics (GA4)\nTeamleiding\nBudgetmanagement",
    "languages": "Engels (vloeiend)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projectmanager",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projectmanager (PMP) met 7 jaar ervaring in het opleveren van software- en bouwprojecten op tijd en binnen budget. Beheerde 15 projecten met een waarde tot $4M, met een op-tijd-leveringspercentage van 94%. Bedreven in Agile, risicomanagement en stakeholdercommunicatie.",
    "experience": [
      {
        "role": "Projectmanager",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "15 projecten beheerd tot $4M, met 94% op tijd opgeleverd\nAgile sprints geleid voor 3 teams en wekelijks voortgang gerapporteerd aan de directie\nProjectoverschrijdingen met 30% verminderd door eerdere risicobeoordelingen\nLeveranciers, klanten en interne teams in 4 tijdzones gecoördineerd"
      },
      {
        "role": "Projectcoördinator",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "Roosters, budgetten en vergunningen bijgehouden voor 8 bouwprojecten\nStatusrapporten en vergadernotities voorbereid voor klanten\nPlanningsconflicten opgelost die 2 weken bespaarden op een schoolbouw"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Bedrijfskunde",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-gecertificeerd (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Projectplanning en -roostering\nAgile en Scrum\nRisicomanagement\nBudgetbeheer\nStakeholdercommunicatie\nMS Project en Jira",
    "languages": "Engels (vloeiend)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "HR-manager",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "HR-manager met 9 jaar ervaring in werving, medewerkersrelaties en arbeidsvoorwaarden. Time-to-hire verkort van 45 naar 28 dagen, retentie verhoogd met 15% en HR gerund voor 250 medewerkers op 3 locaties. Kennis van arbeidsrecht en beleid op CIPD-niveau.",
    "experience": [
      {
        "role": "HR-manager",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "HR geleid voor 250 medewerkers op 3 locaties, met een team van 3\nTime-to-hire verkort van 45 naar 28 dagen door het sollicitatieproces opnieuw op te bouwen\nRetentie verhoogd met 15% met een nieuw inwerk- en beoordelingsprogramma\nMedewerkersrelaties, klachten en beleidsupdates afgehandeld"
      },
      {
        "role": "HR-generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "120+ medewerkers per jaar geworven voor hotels en restaurants\nLooncontroles en arbeidsvoorwaardeninschrijving uitgevoerd voor 400 medewerkers\nPersoneelsconflicten opgelost en het verloop onder het branchegemiddelde gehouden"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Human resources",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP-gecertificeerd. Vakken in arbeidsrecht en organisatiegedrag."
      }
    ],
    "skills": "Werving en onboarding\nMedewerkersrelaties\nSecundaire voorwaarden en loonadministratie\nArbeidsrecht\nPrestatiemanagement\nHRIS (Workday, BambooHR)",
    "languages": "Engels (vloeiend)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Junior advocaat",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Junior advocaat met 6 jaar ervaring in handelsrechtelijke procedures en contractenrecht. 40+ zaken beheerd, in 8 zaken kort geding gewonnen en contracten opgesteld ter waarde van $25M. Toegelaten tot de Illinois Bar; bedreven in juridisch onderzoek, opstellen van stukken en cliëntenadvisering.",
    "experience": [
      {
        "role": "Junior advocaat",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "40+ handelsrechtzaken beheerd van indiening tot schikking\nSummary judgment gewonnen in 8 zaken en 20 meer gunstig geschikt\nContracten opgesteld en onderhandeld tot $25M\nAdviseer cliënten persoonlijk en schriftelijk over risico en strategie"
      },
      {
        "role": "Juridisch medewerker (law clerk)",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Aug 2019",
        "end": "Aug 2020",
        "current": false,
        "points": "Jurisprudentie onderzocht en memo's opgesteld voor 2 rechters\nMoties beoordeeld en banksamenvattingen voorbereid voor 100+ zittingen\nProcessen en schikkingsconferenties in civiele afdelingen bijgewoond"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Rechten",
        "start": "2016",
        "end": "2019",
        "notes": "Toegelaten tot de Illinois Bar (2019). Law review, artikelenredacteur."
      }
    ],
    "skills": "Commerciële procesvoering\nContracten opstellen en onderhandelen\nJuridisch onderzoek (Westlaw, LexisNexis)\nCliëntadvies\nVerklaringen en discovery\nRechtbankdeponeringen en procedure",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinisch apotheker",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinisch apotheker (PharmD) met 7 jaar ervaring in ziekenhuis- en openbare apotheek. Beoordeel 100+ medicatieopdrachten per dag, verminderde bijwerkingen met 25% via een nieuw controleprotocol en adviseer patiënten over veilig medicijngebruik. Bevoegd in Pennsylvania.",
    "experience": [
      {
        "role": "Klinisch apotheker",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "100+ medicatieorders per dag beoordelen op veiligheid, dosering en interacties\nBijwerkingen van geneesmiddelen met 25% verminderd met een nieuw dubbelcheckprotocol\nArtsen en verpleegkundigen adviseren over medicijnkeuzes voor complexe patiënten\nHet ziekenhuis's antibioticabeheerrondes twee keer per week leiden"
      },
      {
        "role": "Stafapotheker",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "200+ recepten per dag uitgeleverd met nul uitgiftefouten\nPatiënten geadviseerd over nieuwe medicijnen, bijwerkingen en bewaring\nGriepvaccinaties gegeven en bloeddrukcontroles uitgevoerd"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacie",
        "start": "2014",
        "end": "2018",
        "notes": "Bevoegd apotheker (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Medicatiebeoordeling en -veiligheid\nKlinische farmacologie\nPatiëntbegeleiding\nApotheeksystemen (Epic, PioneerRx)\nAntibioticabeleid\nVaccinatiediensten",
    "languages": "Engels (vloeiend)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Algemeen tandarts",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Algemeen tandarts (DDS) met 8 jaar ervaring in restauratieve, cosmetische en preventieve tandheelkunde. Behandel 25+ patiënten per dag in een praktijk met 2.000 patiënten, met een patiënttevredenheid van 98%. Bedreven in kronen, implantaten, wortelkanaalbehandelingen en doorzichtige aligners.",
    "experience": [
      {
        "role": "Algemeen tandarts",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "25+ patiënten per dag behandelen: vullingen, kronen, wortelkanalen en extracties\nEen patiënttevredenheid van 98% over 1.200+ beoordelingen\nPlaats 15+ implantaten per maand en beheer clear-aligner-casussen\n2 mondhygiënisten en 4 tandartsassistenten begeleiden"
      },
      {
        "role": "Tandarts-associé",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Algemene tandheelkunde verleend voor een praktijk met 1.500 patiënten\nKronen op dezelfde dag geïntroduceerd, terugkeerbezoeken met 40% verminderd\nSchoolvoorlichtingsbezoeken over kinderen's mondgezondheid uitgevoerd"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Tandheelkunde",
        "start": "2013",
        "end": "2017",
        "notes": "Bevoegd tandarts (Arizona). Invisalign-gecertificeerd. Reanimatie/BLS-gecertificeerd."
      }
    ],
    "skills": "Restauratieve tandheelkunde (kronen, vullingen)\nWortelkanaalbehandeling\nTandimplantaten\nDoorzichtige aligners\nPatiëntenzorg en communicatie\nDigitale röntgenfoto's en CEREC",
    "languages": "Engels (vloeiend)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fysiotherapeut",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fysiotherapeut (DPT) met 6 jaar ervaring in orthopedische en sportrevalidatie. Behandel 12-15 patiënten per dag, waarvan 90% hun doelen bereikt binnen de geplande sessies. Bedreven in manuele therapie, oefenvoorschriften en return-to-sport-testen.",
    "experience": [
      {
        "role": "Fysiotherapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mrt 2021",
        "end": "",
        "current": true,
        "points": "12-15 patiënten per dag behandelen voor sportblessures, postoperatieve revalidatie en rugpijn\n90% van de patiënten bereikt hun doelen binnen het geplande aantal sessies\nTerugkeer-naar-sporttesten ontworpen die door 3 lokale teams worden gebruikt\n2 pas afgestudeerden gementord en studentenstages begeleid"
      },
      {
        "role": "Staffysiotherapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Aug 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Klinische revalidatie verleend aan postoperatieve en beroertepatiënten\nGroepsbewegingslessen gegeven voor 20+ oudere patiënten per week\nVoortgang gedocumenteerd in Epic en overgedragen aan afdelingsteams"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fysiotherapie",
        "start": "2016",
        "end": "2019",
        "notes": "Bevoegd fysiotherapeut (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Orthopedische en sportrevalidatie\nManuele therapie\nBeweegvoorschriften\nReturn-to-sport-testen\nPatiëntenvoorlichting\nDocumentatie (Epic)",
    "languages": "Engels (vloeiend)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Chef-kok",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Chef-kok met 10 jaar ervaring in Creoolse en modern Amerikaanse keukens. Leid een brigade van 12 in een restaurant met 200 zitplaatsen, voedselkosten met 15% verlaagd door strakkere bestellingen en won 'Best New Menu' van de stadseetgids in 2025.",
    "experience": [
      {
        "role": "Chef-kok",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Een brigade van 12 leiden in een restaurant met 200 zitplaatsen dat 300+ couverts per avond serveert\nVoedselkosten met 15% verlaagd door strakkere bestellingen en een seizoensmenu\nWon 'Best New Menu' van de stadseetgids in 2025\nMenu's ontwerpen, koks trainen en de pass runnen tijdens vrijdag- en zaterdagdienst"
      },
      {
        "role": "Souschef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "De keuken gerund als de chef-kok afwezig was, met 150 couverts per avond\nVoorraad, bestellingen en leveranciersrelaties beheerd\n8 lijnkoks getraind en het personeelsverloop met een derde verminderd"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Culinaire kunsten",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager-gecertificeerd."
      }
    ],
    "skills": "Menuontwerp en kostprijsberekening\nCreoolse en moderne Amerikaanse keuken\nKeukenleiding (brigade van 12)\nVoedselveiligheid (ServSafe)\nLeveranciersbeheer\nBanket- en evenementencatering",
    "languages": "Engels (vloeiend)\nSpaans (vloeiend)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Politieagent",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Politieagent met 8 jaar ervaring in surveillance, wijkpolitie en onderzoeken. Reageer op 30+ meldingen per week, met onderscheidingen voor de-escalatie en gemeenschapsbereik. Getraind in crisisinterventie, eerste hulp en rapportage.",
    "experience": [
      {
        "role": "Politieagent",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Surveilleer in een district van 40.000 inwoners, reagerend op 30+ meldingen per week\n2 onderscheidingen ontvangen voor de-escalatie en gemeenschapsbereik\nDiefstallen en mishandelingen onderzocht, rapporten geschreven die in 50+ vervolgingen zijn gebruikt\n3 nieuwe agenten gementord tijdens de praktijktraining"
      },
      {
        "role": "Surveillanceagent",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Aug 2017",
        "end": "Mei 2019",
        "current": false,
        "points": "Gepatrouilleerd op provinciale wegen en gereageerd op noodoproepen\nDagvaardingen uitgereikt en geassisteerd bij gevangenentransport\nTraining crisisinterventie en EHBO afgerond"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificaat",
        "field": "Wetshandhaving",
        "start": "2017",
        "end": "2017",
        "notes": "Afgestudeerd aan de Ohio Peace Officer Training Academy. Getraind in het Crisis Intervention Team."
      }
    ],
    "skills": "Surveillance en noodrespons\nWijkpolitie\nCrisisinterventie en de-escalatie\nRapportage\nOnderzoeken\nEerste hulp en reanimatie",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Brandweerman / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Brandweerman en EMT met 7 jaar ervaring in brandbestrijding, redding en spoedeisende medische hulp. Uitgerukt voor 900+ meldingen, waaronder gebouwbranden, voertuigreddingen en medische noodgevallen. HazMat-getraind met een schoon veiligheidsrecord.",
    "experience": [
      {
        "role": "Brandweerman / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mrt 2020",
        "end": "",
        "current": true,
        "points": "Reageren op 900+ brand-, reddings- en medische meldingen in een district met 3 kazernes\nMedische noodhulp verleend als gecertificeerd EMT bij 60% van de meldingen\nHazMat-getraind; leiding gegeven aan decontaminatie bij chemische incidenten\nNieuwe rekruten getraind in slanghantering, ladders en zoektechnieken"
      },
      {
        "role": "Vrijwillige brandweerman",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Als vrijwilliger gereageerd op natuur- en gebouwbranden\nFirefighter I & II en EMT-Basic-training afgerond\nGeassisteerd bij brandveiligheidsvoorlichting op scholen"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificaat",
        "field": "Brandwetenschap",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. EMT-Basic-gecertificeerd. Getraind in HazMat Operations."
      }
    ],
    "skills": "Brandbestrijding en redding\nMedische noodhulp (EMT)\nHazMat-operaties\nLadders, slangen en ventilatie\nBrandveiligheid in de gemeenschap\nTeamwerk onder druk",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Bevoegd loodgieter",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Bevoegd meester-loodgieter met 11 jaar ervaring in sanitair voor woningen en bedrijven. 600+ klussen per jaar afgerond, van ruwbouw tot ketelinstallaties, met 98% hersteld bij het eerste bezoek. Bedreven in pijpfitten, afvoerreiniging en naleving van de voorschriften.",
    "experience": [
      {
        "role": "Meester-loodgieter",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "600+ klussen in woningen en bedrijven per jaar afgerond\nKetels, boilers en complete badkamerruwbouw geïnstalleerd\nEen herstelpercentage van 98% bij het eerste bezoek bij servicebezoeken\n3 leerlingen begeleiden en hun werk aftekenen"
      },
      {
        "role": "Gezel-loodgieter",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dec 2018",
        "current": false,
        "points": "Nieuwbouwloodgieterswerk uitgevoerd voor 40+ huizen per jaar\nAfvoeren ontstopte en lekkages gerepareerd voor woningen en restaurants\nGasfitting en terugstroombeveiliging geleerd"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificaat",
        "field": "Loodgieterstechnologie",
        "start": "2013",
        "end": "2014",
        "notes": "Meester-loodgieterslicentie (Tennessee). Gecertificeerd in terugstroombeveiliging."
      }
    ],
    "skills": "Residentieel en commercieel loodgieterswerk\nPijpfitten en solderen\nRioolreiniging en camera-inspectie\nKetel- en boilerinstallaties\nGasinstallaties\nNaleving loodgietersvoorschriften",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Gezel-timmerman",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Gezel-timmerman met 9 jaar ervaring in houtskeletbouw, afwerking en maatwerkkasten. Houtskeletbouw voor 30+ huizen en keukens ingebouwd in 60+ woningen, met een reputatie voor exacte maten en nette afwerkingen. Bedreven in het lezen van tekeningen en werken volgens de voorschriften.",
    "experience": [
      {
        "role": "Gezel-timmerman",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Houtskeletbouw voor 30+ huizen en keukens ingebouwd in 60+ woningen\nMaatwerkkasten en afwerking gebouwd met een tolerantie van 1/16 inch\nBouwtekeningen lezen en volgen, fouten signaleren voordat ze geld kosten\n2 leerlingen trainen in houtskelet- en afwerkingstechnieken"
      },
      {
        "role": "Leerling-timmerman",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Geassisteerd bij houtskeletbouw, gipsplaten en vloeren bij verbouwingen\nVeilig leren werken met zagen, frezen en spijkerpistolen\n8.000 leerlinguren afgerond en geslaagd voor het gezellenexamen"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificaat",
        "field": "Timmerwerk",
        "start": "2015",
        "end": "2016",
        "notes": "Gezel-timmerman. OSHA 10-gecertificeerd."
      }
    ],
    "skills": "Houtskelet- en constructiewerk\nAfwerktimmerwerk en sierlijsten\nMaatkasten\nBouwtekeningen lezen\nElektrisch gereedschap en veiligheid\nGipsplaten en vloeren",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Docent voortgezet onderwijs (Wiskunde)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Docent voortgezet onderwijs met 8 jaar ervaring in het geven van wiskunde aan klas 9-12. Slagingspercentages voor algebra verhoogd van 64% naar 83% en het wiskundeteam gecoacht naar 2 staatsfinales. Bedreven in gedifferentieerde instructie, examenvoorbereiding en oudercommunicatie.",
    "experience": [
      {
        "role": "Wiskundeleraar (klas 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Aug 2019",
        "end": "",
        "current": true,
        "points": "Algebra, meetkunde en pre-calculus geven aan 120 leerlingen in 5 klassen\nSlagingspercentages voor algebra verhoogd van 64% naar 83% in 3 jaar\nHet wiskundeteam gecoacht naar 2 staatsfinales\nNaschoolse bijles gegeven aan 30 leerlingen per week"
      },
      {
        "role": "Wiskundeleraar (klas 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Aug 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Algebra en meetkunde gegeven aan 100 leerlingen per jaar\nWekelijkse toetsen geïntroduceerd die huiswerkachterstanden halveerden\nDe school's eerste wiskundebeurs georganiseerd met 200 leerlingen"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Wiskundeonderwijs",
        "start": "2013",
        "end": "2017",
        "notes": "Staatslicentie onderwijs (New Hampshire, klas 7-12, wiskunde)."
      }
    ],
    "skills": "Wiskundeonderwijs (algebra tot pre-calculus)\nExamenvoorbereiding\nGedifferentieerde instructie\nKlassenmanagement\nOudercommunicatie\nGoogle Classroom en Desmos",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Kleuterleerkracht",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Kleuterleerkracht met 6 jaar ervaring in de zorg voor kinderen van 3-5 jaar. Bedreven in spelgebaseerd leren, gedragsbegeleiding en oudercommunicatie. Een fonetiekprogramma gebouwd dat de schoolrijpheidsscores van mijn hele klas verhoogde.",
    "experience": [
      {
        "role": "Kleuterleerkracht",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "Lesgeven aan en zorgen voor een klas van 18 kinderen van 3-5 jaar\nEen klankprogramma opgezet dat de schoolrijpheidscores van de hele klas verbeterde\nPlan wekelijkse thema's, knutselwerk en buitenspel\nDagelijkse updates en voortgangsrapporten per termijn delen met ouders"
      },
      {
        "role": "Assistent-kleuterleerkracht",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "De hoofdleerkracht ondersteund met een klas van 20 kinderen\nDagelijks voorleestijd, liedjes en knutselactiviteiten geleid\nVeiligheids- en hygiëneadministratie bijgehouden volgens de staatsnormen"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate degree",
        "field": "Vroegschoolse educatie",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA)-certificaat. EHBO- en reanimatiecertificaat."
      }
    ],
    "skills": "Spelgebaseerd leren\nGedragsbegeleiding\nFonetiek en vroege geletterdheid\nOudercommunicatie\nKlasveiligheid\nKnutselplanning",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Maatschappelijk werker kind en gezin",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Bevoegd maatschappelijk werker met 7 jaar ervaring in het ondersteunen van kinderen en gezinnen. Beheer een casuslast van 25 gezinnen, coördineer diensten tussen scholen en zorgverleners en stel rechtbankrapporten op waar rechters op vertrouwen. Bedreven in beoordeling, crisisondersteuning en bescherming.",
    "experience": [
      {
        "role": "Maatschappelijk werker kind en gezin",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Een casuslast van 25 gezinnen beheerd, met wekelijkse huis- en schoolbezoeken\nRechtbankrapporten opgesteld en getuigd in de familierechtbank\nHuisvesting, zorg en schoolondersteuning voor kwetsbare gezinnen gecoördineerd\nWachttijd voor beoordelingen met 20% verkort met een nieuw triagesysteem"
      },
      {
        "role": "Casemanager",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "40+ gezinnen in tijdelijke huisvesting ondersteund met uitkeringen en verwijzingen\nWekelijkse workshops over opvoeding en budgetteren gegeven\nZaaknotities nauwkeurig bijgehouden voor audits en financieringsrapporten"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Maatschappelijk werk",
        "start": "2016",
        "end": "2018",
        "notes": "Bevoegd maatschappelijk werker (Ohio). Vakken in kinderwelzijn en gezinssystemen."
      }
    ],
    "skills": "Casemanagement (25 gezinnen)\nKinderbescherming\nRapporten familierechtbank\nCrisisondersteuning\nCoördinatie tussen instanties\nVerwijzingen uitkeringen en huisvesting",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Juridisch medewerker",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Juridisch medewerker met 6 jaar ervaring in procesondersteuning en bedrijfsdeponeringen. Beheer discovery voor 30+ zaken, stel processtukken en contracten op en houd indieningsdeadlines met een 100%-op-tijdrecord. Bedreven in Westlaw, e-discovery en casemanagementsoftware.",
    "experience": [
      {
        "role": "Juridisch medewerker",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Discovery beheerd voor 30+ proceszaken, 10.000+ documenten beoordeeld\nProcesstukken, verzoekschriften en contracten opgesteld ter beoordeling door advocaten\nEen 100%-op-tijdrecord bijgehouden voor processtukken en deadlines\nGetuigen gecoördineerd en procesmappen voorbereid"
      },
      {
        "role": "Juridisch assistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Intakegesprekken voor 20+ cliënten per week\nFormulieren en deponeringen voorbereid voor woon- en familiezaken\nJuridische documenten vertaald voor Spaanstalige cliënten"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate degree",
        "field": "Paralegal studies",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Certified Paralegal (CP). ABA-goedgekeurd programma."
      }
    ],
    "skills": "Procesondersteuning en discovery\nJuridische stukken opstellen\nE-discovery (Relativity)\nCasemanagement (Clio)\nProcesstukken en deadlines\nJuridisch onderzoek (Westlaw)",
    "languages": "Engels (vloeiend)\nSpaans (vloeiend)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Boekhoudkundig medewerker",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Boekhoudkundig medewerker met 5 jaar ervaring in crediteurenadministratie, facturatie en bankafstemmingen. Verwerk 300+ facturen per maand met 99,8% nauwkeurigheid en houd de boeken netjes voor de maandsluiting. Bedreven in QuickBooks, Excel en ondersteuning van de loonadministratie.",
    "experience": [
      {
        "role": "Boekhoudkundig medewerker",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "300+ leveranciersfacturen per maand verwerkt met 99,8% nauwkeurigheid\n6 bankrekeningen wekelijks afgestemd en verschillen dezelfde dag gesignaleerd\nLoonadministratiegegevens voorbereiden voor 45 medewerkers en achterstallige klantbetalingen opvolgen\nAdministratie netjes bijgehouden voor de eindejaarsaudit, met nul bevindingen"
      },
      {
        "role": "Assistent boekhouding",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mrt 2021",
        "current": false,
        "points": "Verkoopfacturen en bonnetjes dagelijks in QuickBooks ingevoerd\nVragen van leveranciers over betalingen per telefoon en e-mail beantwoord\nPapierwerk gearchiveerd en het archief actueel gehouden"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificaat",
        "field": "Boekhouding",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "Crediteuren en debiteuren\nBankafstemmingen\nFacturatie (300+ per maand)\nQuickBooks en Excel\nLoonondersteuning\nGegevensinvoer (65 wpm)",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Administratief medewerker",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Administratief medewerker met 6 jaar ervaring in het soepel laten draaien van kantoren. Beheer agenda's voor 4 managers, organiseer reizen en vergaderingen en verwerk 100+ e-mails per dag. Bekend om nauwkeurigheid, discretie en rust onder deadline-druk.",
    "experience": [
      {
        "role": "Administratief medewerker",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Agenda's, reizen en vergaderingen beheerd voor 4 senior managers\n100+ e-mails per dag afgehandeld, antwoorden opgesteld en prioriteiten gemarkeerd\nBestuursstukken voorbereiden en notuleren bij maandelijkse vergaderingen\nKantoorartikelen en leveranciersorders beheerd, kosten met 12% verlaagd"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Aug 2019",
        "end": "Dec 2020",
        "current": false,
        "points": "60+ patiënten per dag verwelkomd en de afsprakenagenda beheerd\nTelefoons aangenomen en verzekeringsvragen afgehandeld\nPatiëntendossiers nauwkeurig en vertrouwelijk bijgehouden"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate degree",
        "field": "Kantooradministratie",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Agenda- en reisbeheer\nE-mail en correspondentie\nVergadernotulen\nMicrosoft Office (Word, Excel, Outlook)\nGegevensinvoer (70 wpm)\nKantoorartikelen en leveranciers",
    "languages": "Engels (vloeiend)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankmedewerker",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankmedewerker met 4 jaar ervaring in het bedienen van 80+ klanten per dag, nauwkeurig en zorgvuldig. Kassalade 3 jaar lang tot op de cent kloppend, met nul tekorten. Bedreven in stortingen, opnames, fraudecontroles en het doorverwijzen van klanten naar de juiste producten.",
    "experience": [
      {
        "role": "Bankmedewerker",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mrt 2022",
        "end": "",
        "current": true,
        "points": "80+ klanten per dag bedienen: stortingen, opnames, betalingen en overboekingen\nKassalade 3 jaar lang tot op de cent kloppend, met nul tekorten\n12 fraudepogingen opgespoord en gestopt, klanten $90.000+ bespaard\nKlanten doorverwezen naar spaar- en leenproducten, verwijzingsdoelen elk kwartaal gehaald"
      },
      {
        "role": "Medewerker klantenservice",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Nieuwe rekeningen geopend en betaalpassen uitgegeven voor leden\nTelefonische vragen over saldi en afschriften beantwoord\nLeden geholpen met het instellen van online en mobiel bankieren"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate degree",
        "field": "Bedrijf",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Contant geld verwerken en balanceren\nStortingen, opnames en betalingen\nFraudedetectie\nKlantenservice\nBanksoftware (Fiserv)\nProductverwijzingen",
    "languages": "Engels (vloeiend)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Verkoopmanager",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Verkoopmanager met 10 jaar ervaring in het leiden van teams tot 15 vertegenwoordigers. Regionale omzet laten groeien van $4M naar $7,5M in 3 jaar, winpercentage verhoogd van 22% naar 34% en het verloop onder vertegenwoordigers gehalveerd met betere coaching en onboarding.",
    "experience": [
      {
        "role": "Regionale verkoopmanager",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Leiding aan een team van 15 verkopers in Texas en Oklahoma\nRegionale omzet laten groeien van $4M naar $7,5M in 3 jaar\nWinpercentage verhoogd van 22% naar 34% met betere coaching en pipelinebeoordelingen\nVerloop onder verkopers gehalveerd met een nieuw inwerkprogramma"
      },
      {
        "role": "Vertegenwoordiger",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dec 2020",
        "current": false,
        "points": "Industriële apparatuur verkocht aan 80+ accounts, quotum 5 jaar op rij gehaald\nTopvertegenwoordiger in de regio, 3 jaar op rij\nEen verwijzingsnetwerk opgebouwd dat 25% van de nieuwe opdrachten binnenbracht"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Vakken in salesmanagement en onderhandelen."
      }
    ],
    "skills": "Leiding verkoopteam (15 vertegenwoordigers)\nOmzetgroei en prognoses\nPijplijnbeheer (Salesforce)\nCoaching en inwerken\nOnderhandelen\nRegioplanning",
    "languages": "Engels (vloeiend)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Bouwprojectmanager",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Bouwprojectmanager met 12 jaar ervaring in het opleveren van commerciële en woningbouwprojecten tot $12M. 20+ projecten afgerond met 95% op tijd, nul ongevallen met verzuim op mijn bouwplaatsen en budgetten binnen 3% gehouden. Bedreven in planning, onderaannemersbeheer en veiligheid.",
    "experience": [
      {
        "role": "Bouwprojectmanager",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Commerciële en woningbouwprojecten opgeleverd tot $12M\n20+ projecten afgerond met 95% op tijd en budgetten binnen 3%\n30+ onderaannemers en 50 arbeiders beheerd op 3 actieve bouwplaatsen\nNul verwondingen met verzuim op alle locaties in 4 jaar"
      },
      {
        "role": "Uitvoerder",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Dagelijkse bouwplaatsoperations geleid voor kantoor- en retailbouw\nLeveringen, inspecties en planningen van onderaannemers gecoördineerd\nVeiligheidsadministratie schoon gehouden en elke OSHA-inspectie doorstaan"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Bouwkunde",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30-gecertificeerd. Kandidaat CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Projectroostering (MS Project, Procore)\nBudgetbeheer\nBeheer van onderaannemers\nBouwplaatsveiligheid (OSHA 30)\nBouwtekeningen lezen\nKlantrapportages",
    "languages": "Engels (vloeiend)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Gecertificeerd medisch assistent",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Gecertificeerd medisch assistent met 5 jaar ervaring in huisartsenpraktijk en spoedzorg. Ontvang 25+ patiënten per dag, meet vitale functies, neem bloed af en beheer de receptie met een patiënttevredenheid van 97%. Bedreven in EHR, flebotomie en verzekeringscontroles.",
    "experience": [
      {
        "role": "Gecertificeerd medisch assistent",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "25+ patiënten per dag ontvangen: vitale functies, anamneses en onderzoekvoorbereiding\nBloed afgenomen en basislaboratoriumtests uitgevoerd met 99% succes bij de eerste prik\nDe receptie, planning en verzekeringscontroles beheerd\nEen patiënttevredenheid van 97% over 800+ enquêtes"
      },
      {
        "role": "Medisch assistent",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Aug 2019",
        "end": "Mrt 2021",
        "current": false,
        "points": "Inlooppatiënten getrieerd en artsen geassisteerd bij kleine ingrepen\nVaccinaties gegeven en monstername afgehandeld\nOnderzoekskamers bevoorraad, schoon en klaar gehouden tussen patiënten"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificaat",
        "field": "Medische assistentie",
        "start": "2018",
        "end": "2019",
        "notes": "Certified Medical Assistant (CMA, AAMA). BLS-gecertificeerd. Getraind in flebotomie."
      }
    ],
    "skills": "Patiëntopname en vitale functies\nFlebotomie\nEHR (eClinicalWorks)\nVaccinaties\nVerzekeringscontrole\nReceptiebeheer",
    "languages": "Engels (vloeiend)\nSpaans (vloeiend)",
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
    "summary": "Gemotiveerde eindexamenleerling met sterke cijfers en bijbaanervaring. Leert snel, betrouwbaar en goed met mensen. Op zoek naar een eerste fulltime functie of een bijbaan naast de studie.",
    "experience": [
      {
        "role": "Parttime verkoopmedewerker",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "50+ klanten per dienst bedienen in weekenden en na school\nContant geld verwerkt, schappen bijgevuld en presentaties netjes gehouden\nVertrouwd om de winkel op zaterdagochtenden te openen"
      },
      {
        "role": "Vrijwillige bijlesgever",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Jongere leerlingen twee keer per week bijles gegeven in rekenen\nGeassisteerd bij het organiseren van het zomerleesprogramma voor 40 kinderen"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Middelbareschooldiploma",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3,6. Eerlijst, 3 jaar. Aanvoerder van het debatteam."
      }
    ],
    "skills": "Klantenservice\nContant geld verwerken\nTeamwerk\nTimemanagement\nMicrosoft Office\nSpreken in het openbaar (debatteam)",
    "languages": "Engels (vloeiend)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Pas afgestudeerd \u2014 Bedrijfskunde",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Pas afgestudeerde in bedrijfskunde met stage-ervaring in marketing en operations. Een bedrijfswedstrijd op de campus georganiseerd met 200 deelnemers en een stage van 6 maanden afgerond waar ik de rapportagetijd halveerde. Graag wil ik een fulltime carrière starten en snel leren.",
    "experience": [
      {
        "role": "Marketingstagiair",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Het bedrijf's social accounts beheerd, volgers laten groeien van 2.000 naar 6.500\nEen rapportagedashboard gebouwd dat de wekelijkse rapportagetijd halveerde\n20 blogposts geschreven die 15.000+ lezingen opleverden"
      },
      {
        "role": "Leidinggevende vrijwilligers evenementen",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "Mei 2025",
        "current": false,
        "points": "Een bedrijfswedstrijd georganiseerd met 200 deelnemers en 12 juryleden\nEen budget van $5.000 en een team van 8 vrijwilligers beheerd"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Bedrijfskunde",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3,5. Dean's List, 2 jaar. Afstudeerproject over marketing voor kleine bedrijven."
      }
    ],
    "skills": "Socialmediamarketing\nExcel en Google Sheets\nPresentatievaardigheden\nEvenementenorganisatie\nTeamwerk\nBasis data-analyse",
    "languages": "Engels (vloeiend)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior marketingmedewerker",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior marketingmedewerker met 2 jaar ervaring in content, e-mail en social media. Een klantennieuwsbrief laten groeien van 1.000 naar 4.000 abonnees en campagnes gerund met een gemiddeld openingspercentage van 22%. Klaar voor meer verantwoordelijkheid en een grotere klantenportefeuille.",
    "experience": [
      {
        "role": "Junior marketingmedewerker",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Een klantennieuwsbrief laten groeien van 1.000 naar 4.000 abonnees in 14 maanden\n12 social posts per week schrijven en plannen voor 4 klanten\nE-mailcampagnes uitgevoerd met een gemiddeld openingspercentage van 22%\nCampagneresultaten maandelijks rapporteren aan klanten"
      },
      {
        "role": "Marketingstagiair",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Productbeschrijvingen geschreven voor 200+ items op de bedrijfswebsite\nGeassisteerd bij een lente-uitverkoopcampagne die online bestellingen met 15% verhoogde"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Communicatie",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3,4. Vakken in digitale marketing en mediaschrijven."
      }
    ],
    "skills": "Content schrijven\nE-mailmarketing (Mailchimp)\nSocialmediabeheer\nGoogle Analytics\nCanva\nKlantenrapportage",
    "languages": "Engels (vloeiend)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Operations supervisor",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Operations supervisor met 8 jaar ervaring in het aansturen van magazijnteams van 20-30 mensen. Pickfouten met 30% verminderd, op-tijd-verzending verhoogd van 90% naar 97% en 15 nieuwe starters getraind. Klaar voor een functie als operationeel manager met een grotere locatie en budget.",
    "experience": [
      {
        "role": "Operations supervisor",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mrt 2021",
        "end": "",
        "current": true,
        "points": "25 magazijnmedewerkers begeleiden in 2 ploegen op een locatie van 90.000 sq ft\nPickfouten met 30% verminderd met nieuwe controleroutines en barcodescanning\nOp-tijd-verzending verhoogd van 90% naar 97% in 2 jaar\n15 nieuwe starters getraind en 3 gepromoveerd tot teamleiderfuncties"
      },
      {
        "role": "Teamleider",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Leiding aan een team van 10 orderpickers en inpakkers in de nachtdienst\nEen rooster geïntroduceerd dat overwerk met 20% verminderde zonder deadlines te missen\nVeiligheidsbriefings gegeven en het team 2 jaar ongevalvrij gehouden"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Supply chain management",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Teamleiding (25 medewerkers)\nMagazijnoperations\nProcesverbetering\nVeiligheidsmanagement\nVoorraadbeheer\nWMS en Excel",
    "languages": "Engels (vloeiend)\nHindi (gespreksniveau)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Senior projectmanager",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Senior projectmanager met 14 jaar ervaring in het opleveren van softwareprojecten met een waarde tot $8M. Leidde 30+ projecten met een op-tijdpercentage van 92%, bouwde een PMO vanaf nul en mentorde 10 projectmanagers. Bekend om rustige oplevering onder druk en eerlijke rapportage aan de directie.",
    "experience": [
      {
        "role": "Senior projectmanager",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Softwareprojecten opleveren ter waarde van maximaal $8M met een op-tijdpercentage van 92%\nHet bedrijf's PMO vanaf nul gebouwd: sjablonen, rapportage en governance\n10 projectmanagers mentoren en de maandelijkse PM-community runnen\nDirect rapporteren aan de CTO over een programma van 40 mensen"
      },
      {
        "role": "Projectmanager",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dec 2018",
        "current": false,
        "points": "20+ projecten beheerd voor klanten in retail en gezondheidszorg\nAgile werkwijzen geïntroduceerd die de levertijd met 25% verkortten\n2 sleutelklanten laten groeien van $500k naar $2M aan jaaromzet"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Informatiesystemen",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-gecertificeerd (2015). Certified ScrumMaster. MBA-vakken (2018-2019, niet afgerond)."
      }
    ],
    "skills": "Programma- en projectoplevering\nPMO-inrichting en governance\nAgile en Waterfall\nBudgetcontrole ($8M)\nRapportage aan directie\nTeammentoring",
    "languages": "Engels (vloeiend)\nSpaans (conversatie)",
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
    "summary": "Chief operating officer met 18 jaar ervaring in het opschalen van operaties voor retail- en logistieke bedrijven. Een operatie van 200 personen laten groeien naar 900 mensen op 6 locaties, de EBITDA-marge verhoogd van 8% naar 14% en 2 overnames geleid. Ervaring met rapportage op bestuursniveau en investor relations.",
    "experience": [
      {
        "role": "Chief Operating Officer",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Operations geleid voor 900 mensen op 6 locaties met een budget van $180M\nEBITDA-marge verhoogd van 8% naar 14% in 3 jaar\n2 overnames geleid en beide teams binnen 6 maanden geïntegreerd\nMaandelijks rapporteren aan het bestuur over operations, risico en groei"
      },
      {
        "role": "Vicepresident Operations",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dec 2020",
        "current": false,
        "points": "Operations opgeschaald van 200 naar 600 mensen op 4 locaties\n3 distributiecentra op tijd en onder budget geopend\nHet leiderschapsteam opgebouwd dat het bedrijf vandaag nog steeds runt"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Bedrijfskunde",
        "start": "2010",
        "end": "2012",
        "notes": "BS in Economie, NYU (2006). Cursus corporate governance (2020)."
      }
    ],
    "skills": "Operations op schaal (900 mensen)\nP&L-eigenaarschap ($180M)\nFusies en overnames\nBestuursrapportage\nGroeistrategie\nLeiderschapsteam bouwen",
    "languages": "Engels (vloeiend)",
    "template": "executive"
  }
};
});
