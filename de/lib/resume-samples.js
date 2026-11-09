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
      "title": "Examinierte Pflegefachkraft",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Examinierte Krankenschwester mit 6 Jahren Erfahrung in medizinisch-chirurgischen Stationen und Telemetrie-Einheiten. Kompetent in Patientenbeurteilung, IV-Therapie, Medikamentenverabreichung und elektronischen Patientenakten. Bekannt für ruhige, klare Kommunikation mit Patienten und Familien in Situationen unter hohem Druck.",
    "experience": [
      {
        "role": "Examinierte Pflegefachkraft",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Juni 2021",
        "end": "",
        "current": true,
        "points": "Betreuung von 5-6-Patienten pro Schicht auf einer 32-Bett medizinisch-chirurgischen Einheit, einschließlich Beurteilung, Medikamentenverabreichung und Wundversorgung\nAusbildung und Mentor 4 neue diplomierte Krankenschwestern, Verkürzung ihrer Orientierungszeit um 2 Wochen\nReduzierung der Medikationsfehler am Gerät um 18% durch Einführung einer Doppelprüfungsroutine bei der Übergabe\nDokumentieren Sie die gesamte Pflege genau in den elektronischen Gesundheitsakten Epic"
      },
      {
        "role": "Pflegefachkraft",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "August 2019",
        "end": "Mai 2021",
        "current": false,
        "points": "Die Triage für 40+ Patienten ohne Termin pro Tag durchgeführt und dringende Fälle für die Versorgung am selben Tag priorisiert\nImpfungen und Gesundheitschecks bei monatlichen Veranstaltungen in der Gemeinde durchgeführt\nÜberweisungen an Spezialisten koordiniert und Testergebnisse nachverfolgt"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Nursing",
        "start": "2015",
        "end": "2019",
        "notes": "Registrierte Krankenschwesterlizenz (Texas). BLS- und ACLS-zertifiziert."
      }
    ],
    "skills": "Patientenbewertung\nIV-Therapie und Medikamentenverabreichung\nElektronische Patientenakten (Epic)\nTelemetrieüberwachung\nBildung von Patienten und Familien\nInfektionskontrolle",
    "languages": "Englisch (fließend)\nSpanisch (Konversationsniveau)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Softwareentwickler",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Softwareentwickler mit 5 Jahren Erfahrung im Aufbau von Webanwendungen in Python und JavaScript. Funktionen ausgeliefert, die von 200,000+ Benutzern genutzt werden, die API-Reaktionszeiten um 40% verkürzt und die Migration eines Monolithen zu Microservices geleitet. Stark in Tests, Code-Review und klarer Dokumentation.",
    "experience": [
      {
        "role": "Softwareentwickler",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "März 2022",
        "end": "",
        "current": true,
        "points": "Kundenorientierte Webfunktionen in Python (Django) und React erstellen und pflegen, für 200,000+ Benutzer\nDie durchschnittliche API-Reaktionszeit durch Caching und die Behebung langsamer Abfragen von 850 ms auf 500 ms reduziert\nDie Migration des Abrechnungsdienstes zu Microservices ohne Ausfallzeiten geleitet\n10+ Pull Requests pro Woche prüfen und 2 Nachwuchsentwickler betreuen"
      },
      {
        "role": "Junior-Entwickler",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Juli 2020",
        "end": "Februar 2022",
        "current": false,
        "points": "Interne Dashboards in JavaScript erstellt, die manuelle Tabellenkalkulationen für 3 Teams ersetzten\nAutomatisierte Tests geschrieben, die die Abdeckung von 45% auf 78% erhöhten\nIm ersten Jahr 120+ Fehler im gesamten Produkt behoben"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Computer Science",
        "start": "2016",
        "end": "2020",
        "notes": "Kursarbeit in Datenbanken, Algorithmen und Betriebssystemen."
      }
    ],
    "skills": "Python (Django, Flasche)\nJavaScript and React\nPostgreSQL and Redis\nREST-APIs und Microservices\nGit and CI/CD\nAutomatisierte Tests (Pytest, Jest)",
    "languages": "Englisch (fließend)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Grundschullehrer",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Grundschullehrerin mit 7 Jahren Unterrichtserfahrung in den Klassenstufen 3–5. Kompetent in differenziertem Unterricht, Klassenmanagement und Elternkommunikation. Die Lesekompetenz meiner Klasse in zwei Schuljahren von 58% auf 81% erhöht.",
    "experience": [
      {
        "role": "Grundschullehrer (Klasse 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "August 2020",
        "end": "",
        "current": true,
        "points": "Eine Klasse von 26 Schülern in Lesen, Mathematik und Naturwissenschaften unterrichten, darunter 5 mit individuellen Lernplänen\nDie Lesekompetenz der Klasse durch geführte Lesegruppen in zwei Jahren von 58% auf 81% gesteigert\nEinen wöchentlichen Eltern-Newsletter und Fortschrittsgespräche für jede Familie pro Trimester durchführen\nDen Leseclub der Schule für 40 Schüler der Klassenstufen 3-5 leiten"
      },
      {
        "role": "Grundschullehrer (Klasse 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "August 2018",
        "end": "Juni 2020",
        "current": false,
        "points": "Geplanter und durchgeführter täglicher Unterricht für 24-Schüler in allen Kernfächern\nEinführung von Verhaltensroutinen, die Störungen im Klassenzimmer um die Hälfte reduzieren\nOrganisation der Jahrgangsgruppen-Wissenschaftsmesse mit 120-Schülern und 80-Eltern"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Elementary Education",
        "start": "2014",
        "end": "2018",
        "notes": "Staatliche Lehrbewilligung (Ohio, Noten K-5) Lesevermerk."
      }
    ],
    "skills": "Differenzierte Unterweisung\nKlassenführung\nGeführte Lesegruppen\nElternkommunikation\nInhaltliche Planung\nGoogle Classroom",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Senior-Buchhalter",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA mit 8 Jahren Erfahrung in den Bereichen Monatsabschluss, Finanzberichterstattung und interne Revision. Schloss die Bücher 3 Tage schneller durch Neuaufbau des Abstimmungsprozesses und fand $240,000 in wiederherstellbaren Überzahlungen in einem Prüfungsjahr. Stark in Excel, QuickBooks und ERP-Systemen.",
    "experience": [
      {
        "role": "Senior-Buchhalter",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "Den Monatsabschluss für eine Geschäftseinheit von $40M verantworten, nach dem Neuaufbau der Abstimmungen 3 Tage schneller abgeschlossen\nMonatsabschlüsse und Abweichungsberichte für die Geschäftsleitung erstellen\n$240,000 an erstattungsfähigen Überzahlungen an Lieferanten während des internen Audits 2024 gefunden\n2 Buchhalter beaufsichtigen und ihre Journaleinträge prüfen"
      },
      {
        "role": "Buchhalter",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Juni 2017",
        "end": "Dezember 2020",
        "current": false,
        "points": "Erstellung von Steuererklärungen und Jahresabschlüssen für 25-Kleinunternehmenskunden\nUnterstützte Audits von 8 Kunden, Testkontrollen und Dokumentation der Ergebnisse\nAutomatisierte das Fixed-Asset-Register in Excel und sparte 6 Stunden pro Monat"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Accounting",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Mitglied der AICPA."
      }
    ],
    "skills": "Monatsabschluss und Abstimmungen\nFinanzberichterstattung und Varianzanalyse\nInterne Auditierung\nExcel (Pivot-Tabellen, SVERWEIS)\nQuickBooks and SAP\nSteuervorbereitung",
    "languages": "Englisch (fließend)\nMandarin (Konversationsniveau)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Lkw-Fahrer (CDL Class A)",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL-Class-A-Fahrer mit 9 Jahren Erfahrung im Langstrecken- und Regionalfrachtverkehr. Über 900,000 unfallfreie Meilen, eine pünktliche Lieferquote von 99% und Erfahrung mit Kühl-, Pritschen- und Trockenfracht. Makellose Fahrhistorie, HazMat- und Tanker-Endorsements.",
    "experience": [
      {
        "role": "Fernfahrer",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "April 2019",
        "end": "",
        "current": true,
        "points": "2,800+ Meilen pro Woche auf regionalen Routen durch Texas, Oklahoma und New Mexico fahren\nEine pünktliche Lieferquote von 99% bei 1,100+ Ladungen pro Jahr halten\nKühl- und Trockenfracht transportieren; täglich Inspektionen vor und nach der Fahrt durchführen\nInsgesamt über 900,000 unfallfreie Meilen"
      },
      {
        "role": "Auslieferungsfahrer",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "März 2016",
        "end": "März 2019",
        "current": false,
        "points": "Lieferung von Baumaterialien an die Baustellen 15-20 pro Tag im gesamten Gebiet Dallas-Fort Worth\nBediente Gabelstapler und gesicherte Flachbettlasten nach DOT-Standards\nAufbewahrung von Lieferpapieren und genauen Protokollen mit Nullpunktverletzungen"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificate",
        "field": "Gewerblicher Güterverkehr (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL-Klasse A mit HazMat- und Tankervermerken. Saubere Fahraufzeichnung."
      }
    ],
    "skills": "Langstrecken- und Regionalfahrt\nKühl- und Pritschenladungen\nDOT-VORSCHRIFTEN und Logbücher\nInspektionen vor der Fahrt\nRoutenplanung (GPS, ELD)\nStaplerbetrieb",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Verkäufer im Einzelhandel",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Verkaufskraft im Einzelhandel mit 4 Jahren Erfahrung in Elektronik- und Bekleidungsgeschäften. Konsequent unter den Top-3-Verkäufern im Team, mit einer Anbindungsrate von 32% bei Garantien und Zubehör. Freundlich, schnell an der Kasse und vertrauenswürdig, um den Laden zu öffnen und zu schließen.",
    "experience": [
      {
        "role": "Senior-Verkaufsmitarbeiter",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Februar 2022",
        "end": "",
        "current": true,
        "points": "Elektronik und Zubehör an 60+ Kunden pro Tag verkaufen; unter den Top 3 im Ladenverkauf für 8 Quartale in Folge\nEine Anbindungsrate von 32% bei Garantien und Zubehör erreichen, die höchste im Team\n6 neue Mitarbeiter an Kasse, Lager und in den Kundenservice-Standards schulen\nVertrauenswürdiger Schlüsselinhaber: den Laden öffnen und schließen und Kassenzählungen übernehmen"
      },
      {
        "role": "Verkaufsmitarbeiter",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Juni 2021",
        "end": "Januar 2022",
        "current": false,
        "points": "Unterstützung der Kunden bei der Auswahl von Outfits und Größen in einer geschäftigen Verkaufsfläche\nGepflegte Displays mit aufgeräumten und aufgefüllten Regalen während jeder Schicht\nRücksendungen und Umtausch höflich gehandhabt, Reklamationen auf ein Minimum reduziert"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate Degree",
        "field": "Business",
        "start": "2019",
        "end": "2021",
        "notes": "Teilzeitstudium im Einzelhandel."
      }
    ],
    "skills": "Kundenservice und Upselling\nBargeldabwicklung und Kassensysteme\nProduktkenntnisse (Elektronik)\nLagerverwaltung\nShop Öffnungs-/Schließzeiten\nTeamschulung",
    "languages": "Englisch (fließend)\nSpanisch (fließend)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Kundendienstmitarbeiter",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Kundendienstmitarbeiter mit 5 Jahren Erfahrung im Telefon-, E-Mail- und Live-Chat-Support. Täglich 45+ Fälle lösen, mit einem Zufriedenheitswert von 96% und einer Lösungsquote beim Erstkontakt von 88%. Ruhig gegenüber verärgerten Kunden und schnell darin, die Lösung zu finden.",
    "experience": [
      {
        "role": "Kundendienstmitarbeiter",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "Mai 2021",
        "end": "",
        "current": true,
        "points": "45+ Fälle pro Tag per Telefon, E-Mail und Chat zu Abrechnung, Bestellungen und technischen Fehlern bearbeiten\nEinen Kundenzufriedenheitswert von 96% und eine Lösungsquote von 88% beim Erstkontakt halten\nSchwierige Anrufe deeskalieren und Beschwerden in Folgegeschäfte verwandeln\n5 neue Agenten in Skripten, Systemen und Tonfall schulen"
      },
      {
        "role": "Support-Mitarbeiter",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "September 2019",
        "end": "April 2021",
        "current": false,
        "points": "Beantwortete Kunden-E-Mails und Chats über Bestellungen, Rücksendungen und Rückerstattungen\nDurchschnittliche Erstantwortzeit unter 2 Stunden\nSchreiben von 20-Helpcenter-Artikeln, die wiederholte Fragen um ein Viertel reduzieren"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate Degree",
        "field": "Business Administration",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Telefon-, E-Mail- und Live-Chat-Support\nReklamationsbearbeitung und Deeskalation\nCRM-Systeme (Zendesk, Salesforce)\nAbrechnungs- und Bestellanfragen\nEingabe 55 wpm\nTeamschulung",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Betriebsleiter",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Betriebsleiter mit 12 Jahren Erfahrung in der Führung von Teams mit bis zu 80 Mitarbeitern in Lagerung und Vertrieb. Die Auftragsabwicklungskosten um 22% gesenkt, pünktliche Sendungen von 91% auf 98% erhöht und zwei neue Standorte termingerecht und unter dem Budget eröffnet.",
    "experience": [
      {
        "role": "Betriebsleiter",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Februar 2020",
        "end": "",
        "current": true,
        "points": "Betreiben Sie ein 120,000 Quadratfuß-Verteilzentrum mit 80 Mitarbeitern in 3-Schichten\nSenkung der Auftragsabwicklungskosten um 22% durch Neugestaltung von Kommissionierpfaden und Schichtmustern\nGehobene pünktliche Sendungen von 91% nach 98% in 18 Monaten\nEröffnet 2 neue Standorte pünktlich und 8% unter Budget"
      },
      {
        "role": "Lagerleiter",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Juni 2013",
        "end": "Januar 2020",
        "current": false,
        "points": "Betreutes 25 Lagerpersonal und der tägliche Versand von 4,000+ Bestellungen\nEinführung von Barcode-Scannen, Schneiden von Kommissionierfehlern durch 35%\nHat eine Sicherheitsschulung durchgeführt, die den Standort für 3 Jahre unfallfrei gehalten hat"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Operations Management",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Teamleitung (bis 80 Mitarbeiter)\nWarehousing und Distribution\nProzessverbesserung\nBudgetierung und Kostenkontrolle\nSicherheitsmanagement\nERP- und WMS-Systeme",
    "languages": "Englisch (fließend)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Lizenzierter Elektriker",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Lizenzierter Gesellenelektriker mit 8 Jahren Erfahrung in Wohn- und Gewerbearbeiten. Kompetent in Verkabelung, Schalttafel-Upgrades, Beleuchtung und Fehlersuche, mit einwandfreier Sicherheitsbilanz bei 400+ Aufträgen. NEC-Code-Kenntnisse und Erfahrung in der Betreuung von Auszubildenden.",
    "experience": [
      {
        "role": "Elektrikergeselle",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "März 2019",
        "end": "",
        "current": true,
        "points": "400+ Wohn- und Gewerbeaufträge ausführen: Verkabelung, Schalttafel-Upgrades, Beleuchtung und EV-Ladegeräte\nFehler schnell diagnostizieren und beheben, mit einer Fixquote von 92% beim Erstbesuch\n2 Auszubildende beaufsichtigen und ihre Arbeit vorschriftsgemäß abnehmen\nEine einwandfreie Sicherheitsbilanz ohne Verletzungen mit Ausfallzeiten führen"
      },
      {
        "role": "Elektriker-Azubi",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Juni 2016",
        "end": "Februar 2019",
        "current": false,
        "points": "Lizenzierte Elektriker bei Neuverkabelung und Erneuerungen unterstützt\nRohrbiegen, Kabelziehen und Schalttafelinstallation erlernt\n8,000 Ausbildungsstunden absolviert und die Gesellenprüfung beim ersten Versuch bestanden"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificate",
        "field": "Electrical Technology",
        "start": "2015",
        "end": "2016",
        "notes": "Elektriker-Gesellenschein (Colorado). OSHA 30 zertifiziert."
      }
    ],
    "skills": "Wohn- und Gewerbeverkabelung\nPanel-Upgrades und EV-Ladegeräte\nFehlersuche und -prüfung\nNEC-Code-Konformität\nRohrbiegung und Kabelzug\nBetreuung der Trainees ",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Finanzanalyst",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Finanzanalyst mit 6 Jahren Erfahrung in Budgetierung, Prognose und Investitionsanalyse. Prognosemodelle erstellt, die die Budgetabweichung um 30% reduzierten, und Investitionsentscheidungen im Umfang von $50M unterstützt. Stark in Excel, SQL und Finanzmodellierung.",
    "experience": [
      {
        "role": "Finanzanalyst",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "April 2021",
        "end": "",
        "current": true,
        "points": "Monatliche Prognosen und Jahresbudgets für ein $120M-Portfolio erstellen\nDie Budgetabweichung mit einem treiberbasierten Prognosemodell um 30% reduziert\nInvestitionsentscheidungen im Wert von $50M mit Bewertung und Szenarioanalyse unterstützen\nDie Ergebnisse monatlich dem CFO und den Abteilungsleitern präsentieren"
      },
      {
        "role": "Junior-Finanzanalyst",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Juli 2019",
        "end": "März 2021",
        "current": false,
        "points": "Erstellung von wöchentlichen Leistungsberichten für 12-Niederlassungen\nAutomatisiertes Reporting in Excel, Einsparung von 10 Stunden pro Woche\nUnterstützung des Kreditteams bei der Kreditportfolioanalyse"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finance",
        "start": "2015",
        "end": "2019",
        "notes": "CFA-Level-II-Kandidat. Kursarbeit in den Bereichen Bewertung und Unternehmensfinanzierung."
      }
    ],
    "skills": "Finanzmodellierung und -prognose\nBudgetierung und Varianzanalyse\nBewertung (DCF, Vergleichswerte)\nExcel (fortgeschritten) und SQL\nBloomberg Terminal\nDatenvisualisierung (Power BI)",
    "languages": "Englisch (fließend)\nHindi (fließend)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Bauingenieur",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Bauingenieur (PE) mit 7 Jahren Erfahrung in der Planung von Straßen- und Wasserinfrastruktur. Die Planung einer Autobahnverbreiterung um 12 Meilen und eines Regenwassersystems für 8,000 Wohnhäuser geleitet. Kenntnisse in AutoCAD Civil 3D, Kostenschätzung und Genehmigungskoordination.",
    "experience": [
      {
        "role": "Bauingenieur",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "Die Planung einer Autobahnverbreiterung um 12 Meilen leiten, von der Vermessung bis zu den Bauunterlagen\nEin Regenwassersystem für 8,000 Wohnhäuser entworfen, von der Stadt beim ersten Versuch genehmigt\nGenehmigungen mit 4 Behörden koordinieren und ein Designbudget von $2.5M verwalten\nZeichnungen als lizenzierter Professional Engineer prüfen und stempeln"
      },
      {
        "role": "Junior-Bauingenieur",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Juli 2018",
        "end": "Dezember 2020",
        "current": false,
        "points": "Planierungs- und Entwässerungspläne für 20+ Wohnbauprojekte erstellt\nKostenschätzungen und Mengenermittlungen für Straßenprojekte durchgeführt\nAn Baustellenbegehungen teilgenommen und Fortschrittsberichte geschrieben"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Civil Engineering",
        "start": "2014",
        "end": "2018",
        "notes": "Professionelle Ingenieurlizenz (Washington). EIT bestanden 2018."
      }
    ],
    "skills": "Straßen- und Entwässerungsgestaltung\nAutoCAD Civil 3D\nRegenwassermodellierung\nKostenabschätzung\nGenehmigungskoordination\nProjektterminierung (MS Project)",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Maschinenbauingenieur",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Maschinenbauingenieur mit 6 Jahren Erfahrung in der Konstruktion von HLK-Systemen und Produktionsanlagen. Den Energieverbrauch durch neu gestaltete Rohrleitungen und Steuerungen um 18% in 3 Anlagen gesenkt und eine Maschinenneugestaltung geleitet, die die Leistung um 25% erhöhte. Kenntnisse in SolidWorks, FEA und thermischer Analyse.",
    "experience": [
      {
        "role": "Maschinenbauingenieur",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Februar 2021",
        "end": "",
        "current": true,
        "points": "HLK- und Produktionsanlagen für 3 Werke mit 400+ Mitarbeitern konstruieren\nDen Energieverbrauch durch Neugestaltung von Rohrleitungen und Steuerungsabläufen um 18% gesenkt\nEine Maschinenneugestaltung geleitet, die die Leistung ohne zusätzliche Stellfläche um 25% erhöhte\nVor dem Prototyping FEA- und Thermoanalysen an neuen Teilen durchführen"
      },
      {
        "role": "Junior-Maschinenbauingenieur",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "August 2019",
        "end": "Januar 2021",
        "current": false,
        "points": "Modellierte Teile und Baugruppen in SolidWorks für Automobilkunden\nErstellung von Zeichnungen, Stücklisten und Prüfprotokollen\nUnterstützte Prototyp-Builds und Behebung von Passungsproblemen in der Werkstatt"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Mechanical Engineering",
        "start": "2015",
        "end": "2019",
        "notes": "Lehrveranstaltungen in Thermodynamik, Strömungsmechanik und Maschinendesign."
      }
    ],
    "skills": "HVAC-Design\nSolidWorks und AutoCAD\nFEA und Thermoanalyse\nBezeichnung der Maschine\nEnergieeffizienz\nGD&T und Toleranzen",
    "languages": "Englisch (fließend)\nKoreanisch (Konversationsniveau)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Elektroingenieur",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Elektroingenieur mit 6 Jahren Erfahrung in Embedded Systems und Leistungselektronik. Steuerplatinen entworfen, die heute in 50,000+ Geräten eingesetzt werden, und die Platinenkosten durch Neugestaltung der Komponenten um 22% gesenkt. Kenntnisse in Altium, C, Firmware-Tests und EMV-Compliance.",
    "experience": [
      {
        "role": "Elektroingenieur",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "März 2021",
        "end": "",
        "current": true,
        "points": "Eingebettete Steuerplatinen entwerfen, die in 50,000+ Geräten pro Jahr eingesetzt werden\nDie Platinenkosten durch Neugestaltung der Leistungsstufe und alternative Beschaffung um 22% gesenkt\nDie EMV-Konformitätstests leiten, bei 4 Produktlinien beim ersten Versuch bestanden\nFirmware in C für Mikrocontroller schreiben und prüfen"
      },
      {
        "role": "Junior-Elektroingenieur",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Juli 2019",
        "end": "Februar 2021",
        "current": false,
        "points": "PCBs in Altium für Verbraucher- und Industriekunden entwerfen\nPrototypen gebaut und getestet, Hardwarefehler behoben\nTestverfahren geschrieben, die die Produktionstestzeit um 30% verkürzten"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Electrical Engineering",
        "start": "2015",
        "end": "2019",
        "notes": "Kursarbeit in eingebetteten Systemen, Leistungselektronik und Signalverarbeitung."
      }
    ],
    "skills": "Embedded Systems und PCB-Design\nAltium Designer\nC und Firmware\nLeistungselektronik\nÜbereinstimmungskontrolle\nOszilloskope und Laborinstrumente",
    "languages": "Englisch (fließend)\nGujarati (Konversationsniveau)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Datenanalyst",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Datenanalyst mit 4 Jahren Erfahrung darin, Vertriebs- und Betriebsdaten in Entscheidungen zu verwandeln. Dashboards erstellt, die von 60+ Managern genutzt werden, die monatliche Berichtszeit von 3 Tagen auf 4 Stunden verkürzt und einen Preisfehler im Wert von $180,000 pro Jahr gefunden. Stark in SQL, Excel und Power BI.",
    "experience": [
      {
        "role": "Datenanalyst",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Januar 2022",
        "end": "",
        "current": true,
        "points": "Power BI-Dashboards erstellen, die von 60+ Filial- und Regionalmanagern verwendet werden\nDas monatliche Reporting mit automatisierten SQL-Pipelines von 3 Tagen auf 4 Stunden verkürzt\nDurch Prüfung der Aktionsdaten einen Preisfehler im Wert von $180,000 pro Jahr gefunden\nDie Ergebnisse monatlich dem kaufmännischen Team präsentieren"
      },
      {
        "role": "Junior-Datenanalyst",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "August 2020",
        "end": "Dezember 2021",
        "current": false,
        "points": "Bereinigte und verbundene Lieferdaten aus 4-Systemen in einer Berichtstabelle\nEntwickelte Excel-Tracker, die manuelle Zählungen für 2-Teams ersetzten\nTägliche Beantwortung von Ad-hoc-Datenfragen für Betriebsleiter"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistics",
        "start": "2016",
        "end": "2020",
        "notes": "Kursarbeit in Regression, Datenbanken und Datenvisualisierung."
      }
    ],
    "skills": "SQL- und Datenbereinigung\nPower BI und Tableau\nExcel (fortgeschritten)\nPython (Pandas)\n- Dashboard-Design\nGrundlagen der A/B-Tests",
    "languages": "Englisch (fließend)\nVietnamese (Konversationsniveau)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Datenwissenschaftler",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Data Scientist mit 5 Jahren Erfahrung im Aufbau von Machine-Learning-Modellen für den E-Commerce. Ein von mir ausgeliefertes Empfehlungsmodell erhöhte den Umsatz pro Besuch um 12%, und ein Abwanderungsmodell kennzeichnet jetzt 80% der gefährdeten Kunden. Stark in Python, SQL und Modellbereitstellung.",
    "experience": [
      {
        "role": "Datenwissenschaftler",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Februar 2022",
        "end": "",
        "current": true,
        "points": "Ein Empfehlungsmodell ausgeliefert, das den Umsatz pro Besuch um 12% steigerte\nEin Abwanderungsmodell erstellt, das 80% der gefährdeten Kunden einen Monat früher kennzeichnet\nModelle mit Monitoring- und Retraining-Pipelines in die Produktion überführt\nModellergebnisse monatlich den Produkt- und Marketingteams präsentieren"
      },
      {
        "role": "Junior-Datenwissenschaftler",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Juli 2020",
        "end": "Januar 2022",
        "current": false,
        "points": "Prognosemodelle für 3 Einzelhandelskunden mit 90%+ Genauigkeit erstellt\nDatensätze mit 10M+ Zeilen für die Modellierung bereinigt und vorbereitet\nDokumentation geschrieben, damit die Kunden die Modelle selbst erneut ausführen können"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Data Science",
        "start": "2018",
        "end": "2020",
        "notes": "Diplomarbeit zu Empfehlungssystemen. BS in Mathematik (2018)."
      }
    ],
    "skills": "Python (Scikit-Learn, Pandas)\nMaschinelles Lernen und Statistiken\nSQL and Spark\nModellbereitstellung (Docker, AWS)\nA/B-Prüfung\nVisualisierung von Daten",
    "languages": "Englisch (fließend)\nArabisch (fließend)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Webentwickler",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Webentwickler mit 4 Jahren Erfahrung im Aufbau schneller, barrierefreier Websites in HTML, CSS und JavaScript. Die Kasse eines Geschäfts neu aufgebaut, was die Conversions um 18% erhöhte, und 12 Kunden-Websites mit 99.9% Verfügbarkeit gepflegt. Stark in Responsive Design, Performance und SEO-Grundlagen.",
    "experience": [
      {
        "role": "Webentwickler",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "März 2022",
        "end": "",
        "current": true,
        "points": "Responsive Websites in HTML, CSS, JavaScript und WordPress für 12 Kunden erstellen\nEine Shop-Kasse neu aufgebaut, die die Conversions um 18% erhöhte\nDie durchschnittliche Seitenladezeit durch Bild- und Codeoptimierung von 4.2s auf 1.8s reduziert\nAlle Kunden-Websites mit Überwachung und Backups bei 99.9% Verfügbarkeit halten"
      },
      {
        "role": "Junior-Webentwickler",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Juni 2021",
        "end": "Februar 2022",
        "current": false,
        "points": "Erstellung von Zielseiten und Behebung von Fehlern auf 20+ Websites für kleine Unternehmen\nGit, Responsive Design und grundlegende SEO in Live-Projekten gelernt\nBeantwortung von Kunden-E-Mails und Aktualisierung von Inhalten am selben Tag"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Computer Science",
        "start": "2017",
        "end": "2021",
        "notes": "Kursarbeit in Webentwicklung, Datenbanken und Mensch-Computer-Interaktion."
      }
    ],
    "skills": "HTML, CSS and JavaScript\nReact and WordPress\nResponsives Design\nGeschwindigkeits-Optimierung\nGit and GitHub\nSEO-Grundkenntnisse",
    "languages": "Englisch (fließend)\nSpanisch (fließend)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafikdesigner",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafikdesigner mit 5 Jahren Erfahrung in Branding, Verpackung und Social-Media-Design. Markenidentitäten für 25+ kleine Unternehmen erstellt und ein Verpackungs-Redesign umgesetzt, das den Regalumsatz um 14% steigerte. Kenntnisse in Adobe Illustrator, Photoshop und Figma.",
    "experience": [
      {
        "role": "Grafikdesigner",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Januar 2022",
        "end": "",
        "current": true,
        "points": "Markenidentitäten, Verpackungen und Social-Media-Kampagnen für 25+ Kunden gestalten\nEin Verpackungs-Redesign für eine Lebensmittelmarke erhöhte den Regalumsatz um 14%\n30+ Social-Media-Assets pro Woche für Instagram, TikTok und Facebook produzieren\nKonzepte bei Kunden präsentieren und anhand des Feedbacks schnell überarbeiten"
      },
      {
        "role": "Junior-Grafikdesigner",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Juli 2020",
        "end": "Dezember 2021",
        "current": false,
        "points": "Gestaltete Flyer, Menüs und Social-Media-Posts für lokale Restaurants und Geschäfte\nDruckfertige Dateien und geprüfte Proofs mit Druckern vorbereitet\nErstellung einer Vorlagenbibliothek, die die Entwurfszeit um ein Drittel verkürzt"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Graphic Design",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio in Branding und Verpackungsdesign."
      }
    ],
    "skills": "Adobe Illustrator and Photoshop\nFigma\nGestaltung der Markenidentität\nVerpackungsdesign\nSocial-Media-Design\nDruck",
    "languages": "Englisch (fließend)\nKoreanisch (Konversationsniveau)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX-Designer",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX-Designer mit 5 Jahren Erfahrung in der Erforschung von Benutzern und der Gestaltung von Mobil- und Webprodukten. Einen Onboarding-Flow neu gestaltet, der die Abbruchrate um 35% senkte, und 40+ Usability-Tests durchgeführt. Kenntnisse in Figma, Benutzerforschung, Wireframing und Prototyping.",
    "experience": [
      {
        "role": "UX-Designer",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Februar 2022",
        "end": "",
        "current": true,
        "points": "Das mobile Onboarding neu gestaltet und die Abbruchrate um 35% in 3 Monaten gesenkt\n40+ Usability-Tests und Benutzerinterviews pro Jahr durchführen\nWireframes und Prototypen in Figma für 2 Produktteams erstellen\nTäglich mit Ingenieuren und Produktmanagern an der Umsetzung zusammenarbeiten"
      },
      {
        "role": "Junior-UX-Designer",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "August 2020",
        "end": "Januar 2022",
        "current": false,
        "points": "Entworfene Bildschirme und Abläufe für 5-Client-Apps\nHat erste Usability-Tests durchgeführt und Erkenntnisse für Kunden verfasst\nAufbau einer Komponentenbibliothek, die die Designübergabe beschleunigte"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychology",
        "start": "2016",
        "end": "2020",
        "notes": "UX-Design-Zertifikat (Generalversammlung, 2020). Kursarbeit in Mensch-Computer-Interaktion."
      }
    ],
    "skills": "Benutzerforschung und Usability-Tests\nWireframing und Prototyping (Figma)\nInformationsarchitektur\nDesign Systems GmbH\nJourney Mapping\nStakeholder-Workshops",
    "languages": "Englisch (fließend)",
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
    "summary": "Marketingleiter mit 8 Jahren Erfahrung in B2B- und Consumer-Kampagnen. Qualifizierte Leads in einem Jahr um 60% gesteigert, eine Produktlinie eingeführt, die $3M Umsatz im ersten Jahr erreichte, und ein Jahresbudget von $500,000 für ein Team von 5 verwaltet.",
    "experience": [
      {
        "role": "Marketingmanager",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "März 2021",
        "end": "",
        "current": true,
        "points": "Ein Team von 5 und ein jährliches Marketingbudget von $500,000 leiten\nQualifizierte Leads mit Content und bezahlten Kampagnen in einem Jahr um 60% gesteigert\nEine Produktlinie eingeführt, die im ersten Jahr $3M Umsatz erreichte\nDie Kosten pro Lead durch den Neuaufbau des Kampagnen-Targetings um 28% reduziert"
      },
      {
        "role": "Marketingspezialist",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Juni 2017",
        "end": "Februar 2021",
        "current": false,
        "points": "E-Mail-Kampagnen an 80,000 Abonnenten mit einer Öffnungsrate von 24% durchgeführt\nSocial-Media-Konten verwaltet, die von 5,000 auf 40,000 Follower gewachsen sind\n6 Messestände pro Jahr organisiert, die jeweils 300+ Leads generierten"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kursarbeit in Verbraucherverhalten, Analytik und Markenmanagement."
      }
    ],
    "skills": "Kampagnenstrategie und -planung\nContent- und E-Mail-Marketing\nBezahlte Werbung (Google, Meta)\nMarketinganalysen (GA4)\nTeamleitung\nBudgetmanagement",
    "languages": "Englisch (fließend)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektmanager",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektmanager (PMP) mit 7 Jahren Erfahrung in der termingerechten und budgetgerechten Bereitstellung von Software- und Bauprojekten. 15 Projekte im Wert von bis zu $4M verwaltet, mit einer pünktlichen Lieferquote von 94%. Kompetent in Agile, Risikomanagement und Stakeholder-Kommunikation.",
    "experience": [
      {
        "role": "Projektmanager",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "15 Projekte im Wert von bis zu $4M verwalten, mit einer pünktlichen Lieferquote von 94%\nAgile Sprints für 3 Teams durchführen und den Führungskräften wöchentlich über den Fortschritt berichten\nProjektüberschreitungen durch frühere Risikoprüfungen um 30% reduziert\nLieferanten, Kunden und interne Teams über 4 Zeitzonen hinweg koordinieren"
      },
      {
        "role": "Projektkoordinator",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Juli 2018",
        "end": "Dezember 2020",
        "current": false,
        "points": "Verfolgte Zeitpläne, Budgets und Genehmigungen für 8-Bauprojekte\nErstellung von Statusberichten und Besprechungsnotizen für Kunden\nTerminkonflikte gelöst, die 2 Wochen bei einem Schulgebäude gespart haben"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Business Administration",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-zertifiziert (2021). Zertifizierter ScrumMaster."
      }
    ],
    "skills": "Projekt- und Terminplanung\nAgile and Scrum\nRisikomanagement\nBudgetkontrolle\nStakeholderkommunikation\nMS Project and Jira",
    "languages": "Englisch (fließend)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Personalmanager",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Personalleiter mit 9 Jahren Erfahrung in Einstellung, Mitarbeiterbeziehungen und Sozialleistungen. Die Zeit bis zur Einstellung von 45 auf 28 Tage verkürzt, die Mitarbeiterbindung um 15% erhöht und HR für 250 Mitarbeiter an 3 Standorten verantwortet. Kenntnisse auf CIPD-Niveau in Arbeitsrecht und Richtlinien.",
    "experience": [
      {
        "role": "Personalmanager",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Februar 2020",
        "end": "",
        "current": true,
        "points": "Führen Sie HR für 250-Mitarbeiter an 3 Standorten mit einem Team von 3 durch\nVerkürzen Sie die Zeit bis zur Einstellung von 45 auf 28 Tage, indem Sie den Interviewprozess neu aufbauen\nErhöhte Bindung von 15% mit einem neuen Onboarding- und Review-Programm\nUmgang mit Mitarbeiterbeziehungen, Beschwerden und Richtlinienaktualisierungen"
      },
      {
        "role": "HR-Generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Juni 2016",
        "end": "Januar 2020",
        "current": false,
        "points": "Rekrutierte 120+ Mitarbeiter pro Jahr für Hotels und Restaurants\nGehaltsabrechnungsprüfungen und Leistungsanmeldungen für 400-Mitarbeiter durchgeführt\nBeilegung von Personalstreitigkeiten und Halten der Fluktuation unter dem Branchendurchschnitt"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Human Resources",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP zertifiziert. Studienleistungen im Arbeitsrecht und Organisationsverhalten."
      }
    ],
    "skills": "Rekrutierung und Onboarding\nMitarbeiterbeziehungen\nLeistungen und Gehaltsabrechnung\ndas Arbeitsrecht\nLeistungsmanagement\nHRIS (Workday, BambooHR)",
    "languages": "Englisch (fließend)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Angestellter Rechtsanwalt",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Associate Attorney mit 6 Jahren Erfahrung in Handelsrechtsstreitigkeiten und Vertragsrecht. 40+ Fälle betreut, in 8 Fällen ein summarisches Urteil erwirkt und Verträge im Wert von $25M entworfen. Zugelassen bei der Illinois Bar; erfahren in Rechtsrecherche, Vertragsgestaltung und Mandantenberatung.",
    "experience": [
      {
        "role": "Angestellter Rechtsanwalt",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "September 2020",
        "end": "",
        "current": true,
        "points": "40+ Handelsrechtsstreitigkeiten von der Einreichung bis zur Beilegung betreuen\nIn 8 Fällen ein summarisches Urteil gewonnen und 20 weitere vorteilhaft beigelegt\nVerträge im Wert von bis zu $25M entwerfen und verhandeln\nMandanten persönlich und schriftlich zu Risiko und Strategie beraten"
      },
      {
        "role": "Rechtsreferendar",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "August 2019",
        "end": "August 2020",
        "current": false,
        "points": "Recherchierte Rechtsprechung und entwarf Memos für 2-Richter\nÜberprüfte Anträge und vorbereitete Bankzusammenfassungen für 100+ Anhörungen\nBeobachtete Prozesse und Abwicklungskonferenzen in allen zivilen Abteilungen"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Law",
        "start": "2016",
        "end": "2019",
        "notes": "Zulassung zur Anwaltskammer von Illinois (2019). Rechtsrezension, Artikelredakteur."
      }
    ],
    "skills": "Handelsstreitigkeiten\nVertragsgestaltung und -Verhandlung\nRechtsforschung (Westlaw, LexisNexis)\nMandantenberatung\nZeugenaussagen und Beweiserhebung\nGerichtsakten und Verfahren",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Klinischer Apotheker",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Klinischer Apotheker (PharmD) mit 7 Jahren Erfahrung in der Krankenhaus- und Gemeindeapotheke. Täglich 100+ Medikamentenverordnungen prüfen, unerwünschte Arzneimittelereignisse durch ein neues Prüfprotokoll um 25% reduziert und Patienten zur sicheren Anwendung von Medikamenten beraten. Lizenziert in Pennsylvania.",
    "experience": [
      {
        "role": "Klinischer Apotheker",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Januar 2020",
        "end": "",
        "current": true,
        "points": "100+ Medikamentenverordnungen pro Tag auf Sicherheit, Dosierung und Wechselwirkungen prüfen\nUnerwünschte Arzneimittelereignisse mit einem neuen Double-Check-Protokoll um 25% reduziert\nÄrzte und Pflegekräfte bei der Medikamentenauswahl für komplexe Patienten beraten\nDie Runden zur Antibiotika-Stewardship des Krankenhauses zweimal pro Woche leiten"
      },
      {
        "role": "Apotheker",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Juli 2018",
        "end": "Dezember 2019",
        "current": false,
        "points": "Ausgegebene 200+ Rezepte pro Tag mit Null-Ausgabefehlern\nBeratung von Patienten zu neuen Medikamenten, Nebenwirkungen und Lagerung\nGrippeimpfungen durchgeführt und Blutdruckkontrollen durchgeführt"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Pharmacy",
        "start": "2014",
        "end": "2018",
        "notes": "Lizenzierter Apotheker (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Überprüfung der Medikation und Sicherheit\nKlinische Pharmakologie\nPatientenberatung\nApothekensysteme (Epic, PioneerRx)\nAntibiotic Stewardship\nImpfdienste",
    "languages": "Englisch (fließend)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Allgemeinzahnarzt",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Allgemeinzahnarzt (DDS) mit 8 Jahren Erfahrung in restaurativer, kosmetischer und präventiver Zahnmedizin. Täglich 25+ Patienten in einer Praxis mit 2,000 Patienten behandeln, bei einer Patientenzufriedenheit von 98%. Erfahren in Kronen, Implantaten, Wurzelkanälen und klaren Alignern.",
    "experience": [
      {
        "role": "Allgemeinzahnarzt",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Februar 2019",
        "end": "",
        "current": true,
        "points": "25+ Patienten pro Tag behandeln: Füllungen, Kronen, Wurzelkanäle und Extraktionen\nEine Patientenzufriedenheit von 98% über 1,200+ Bewertungen halten\n15+ Implantate pro Monat einsetzen und Clear-Aligner-Fälle betreuen\n2 Dentalhygieniker und 4 Zahnarzthelfer beaufsichtigen"
      },
      {
        "role": "Angestellter Zahnarzt",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Juli 2017",
        "end": "Januar 2019",
        "current": false,
        "points": "Bereitgestellte allgemeine Zahnmedizin für eine 1,500-Patientenpraxis\nEinführung von Kronen für den gleichen Tag, Reduzierung von Gegenbesuchen durch 40%\nHat Schulbesuche zur Mundgesundheit von Kindern durchgeführt"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Dentistry",
        "start": "2013",
        "end": "2017",
        "notes": "Lizenzierter Zahnarzt (Arizona). Invisalign-zertifiziert. CPR/BLS-zertifiziert."
      }
    ],
    "skills": "Restaurative Zahnheilkunde (Kronen, Füllungen)\nWurzelkanalbehandlung\nImplantate, Zahn-\nDurchsichtige Aligner\nPatientenversorgung und -kommunikation\nDigital X-rays and CEREC",
    "languages": "Englisch (fließend)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Physiotherapeut",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Physiotherapeut (DPT) mit 6 Jahren Erfahrung in Orthopädie und Sportrehabilitation. Täglich 12-15 Patienten behandeln, von denen 90% ihre Ziele innerhalb der geplanten Sitzungen erreichen. Kompetent in manueller Therapie, der Verordnung von Übungsprogrammen und Return-to-Sport-Tests.",
    "experience": [
      {
        "role": "Physiotherapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "März 2021",
        "end": "",
        "current": true,
        "points": "12-15 Patienten pro Tag wegen Sportverletzungen, postoperativer Reha und Rückenschmerzen behandeln\n90% der Patienten erreichen ihre Ziele innerhalb der geplanten Anzahl von Sitzungen\nReturn-to-Sport-Tests entwerfen, die von 3 lokalen Teams verwendet werden\n2 neue Absolventen betreuen und Studentenpraktika beaufsichtigen"
      },
      {
        "role": "Physiotherapeut",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "August 2019",
        "end": "Februar 2021",
        "current": false,
        "points": "Stationäre Reha für postoperative und Schlaganfallpatienten bereitgestellt\nGruppenübungskurse für 20+ ältere Patienten pro Woche geleitet\nFortschritte in Epic dokumentiert und an die Stationsteams übergeben"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Physical Therapy",
        "start": "2016",
        "end": "2019",
        "notes": "Lizenzierter Physiotherapeut (Oregon). Orthopädischer klinischer Spezialist (OCS)."
      }
    ],
    "skills": "Orthopädie und Sportrehabilitation\nManuelle Therapie\nTrainingsverschreibung\nRückkehr-zum-Sport-Tests\nPatientenschulung\nDokumentation (Epic)",
    "languages": "Englisch (fließend)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Küchenchef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Küchenchef mit 10 Jahren Erfahrung in kreolischen und modernen amerikanischen Küchen. Eine Brigade von 12 in einem Restaurant mit 200 Plätzen leiten, die Lebensmittelkosten durch straffere Bestellungen um 15% gesenkt und 2025 das 'Best New Menu' des City Food Guide gewonnen.",
    "experience": [
      {
        "role": "Küchenchef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "Führen Sie eine Brigade von 12 in einem 200-Sitzrestaurant, das 300+ für eine Nacht serviert\nReduzieren Sie die Lebensmittelkosten um 15% mit einer engeren Bestellung und einem saisonalen Menü\nGewann 'Best New Menu' vom City Food Guide in 2025\nGestaltung von Menüs, Zugköche und Run Pass am Freitag und Samstag Service"
      },
      {
        "role": "Sous-Chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Juni 2017",
        "end": "Dezember 2020",
        "current": false,
        "points": "Rannte durch die Küche, als der Küchenchef weg war, und deckte 150 deckt eine Nacht ab\nVerwaltete Bestands-, Bestell- und Lieferantenbeziehungen\nAusgebildete 8 Linie kocht und reduziert die Personalfluktuation um ein Drittel"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Culinary Arts",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager zertifiziert."
      }
    ],
    "skills": "Menüdesign und -kalkulation\nKreolische und moderne amerikanische Küche\nKüchenleitung (Brigade von 12)\nLebensmittelsicherheit (ServSafe)\nLieferantenverwaltung\nBankett- und Event-Catering",
    "languages": "Englisch (fließend)\nSpanisch (fließend)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Polizeibeamter",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Polizeibeamter mit 8 Jahren Erfahrung in Streifendienst, Gemeindepolizei und Ermittlungen. Wöchentlich auf 30+ Anrufe reagieren, mit Belobigungen für Deeskalation und Öffentlichkeitsarbeit. Ausgebildet in Krisenintervention, Erster Hilfe und Berichtserstellung.",
    "experience": [
      {
        "role": "Polizeibeamter",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Juni 2019",
        "end": "",
        "current": true,
        "points": "Einen Bezirk mit 40,000 Einwohnern bestreifen und auf 30+ Anrufe pro Woche reagieren\n2 Belobigungen für Deeskalation und Öffentlichkeitsarbeit erhalten\nDiebstähle und Übergriffe untersuchen und Berichte schreiben, die in 50+ Strafverfahren verwendet wurden\n3 neue Beamte in der Feldausbildung betreuen"
      },
      {
        "role": "Streifenpolizist",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "August 2017",
        "end": "Mai 2019",
        "current": false,
        "points": "Patrouillierte Kreisstraßen und reagierte auf Notrufe\nZustellung von Gerichtspapieren und Unterstützung beim Gefangenentransport\nAbgeschlossene Krisenintervention und Erste-Hilfe-Schulung"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificate",
        "field": "Law Enforcement",
        "start": "2017",
        "end": "2017",
        "notes": "Absolvent der Ohio Peace Officer Training Academy. Kriseninterventionsteam geschult."
      }
    ],
    "skills": "Patrouille und Notfallmaßnahmen\nBürgernahe Polizeiarbeit?\nKrisenintervention und Deeskalation\ndie Abfassung von Berichten.\nErmittlungen\nErste Hilfe und HLW",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Feuerwehrmann / Rettungssanitäter",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Feuerwehrmann und Rettungssanitäter mit 7 Jahren Erfahrung in Brandbekämpfung, Rettung und medizinischer Notfallversorgung. Auf 900+ Einsätze reagiert, darunter Gebäudebrände, Fahrzeugrettungen und medizinische Notfälle. HazMat-ausgebildet, mit einwandfreier Sicherheitsbilanz.",
    "experience": [
      {
        "role": "Feuerwehrmann / Rettungssanitäter",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "März 2020",
        "end": "",
        "current": true,
        "points": "Auf 900+ Brand-, Rettungs- und medizinische Einsätze in einem Bezirk mit 3 Wachen reagieren\nAls zertifizierter Rettungssanitäter bei 60% der Einsätze medizinische Notfallversorgung leisten\nHazMat-ausgebildet; die Dekontamination bei Chemieunfällen leiten\nNeue Rekruten in Schlauchführung, Leitern und Suchtechniken schulen"
      },
      {
        "role": "Freiwilliger Feuerwehrmann",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Juni 2018",
        "end": "Februar 2020",
        "current": false,
        "points": "Auf Waldbrände reagiert und als Freiwilliger Brände strukturiert\nAbgeschlossene Feuerwehrmann I & II und EMT-Grundausbildung\nUnterstützung bei der Durchführung von Brandschutzgesprächen in Schulen"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificate",
        "field": "Fire Science",
        "start": "2017",
        "end": "2018",
        "notes": "Feuerwehr I & II. EMT-Basic zertifiziert. HazMat-Operationen geschult."
      }
    ],
    "skills": "Brandbekämpfung und Rettung\nMedizinische Notfallversorgung\nHazMat-Operationen\nLeitern, Schläuche und Belüftung\nBrandschutz in der Gemeinde\nTeamwork unter Druck",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Lizenzierter Installateur",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Lizenzierter Klempnermeister mit 11 Jahren Erfahrung in Wohn- und Gewerbeinstallation. 600+ Aufträge pro Jahr abgeschlossen, von Rohinstallationen bis zu Kesseleinbauten, mit einer Fixquote beim Erstbesuch von 98%. Kompetent in Rohrmontage, Abflussreinigung und Einhaltung der Vorschriften.",
    "experience": [
      {
        "role": "Installateurmeister",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Januar 2019",
        "end": "",
        "current": true,
        "points": "600+ Wohn- und Gewerbeaufträge pro Jahr ausführen\nHeizkessel, Warmwasserbereiter und komplette Badezimmer-Rohinstallationen einbauen\nBei Serviceeinsätzen eine Fixquote von 98% beim Erstbesuch halten\n3 Auszubildende betreuen und ihre Arbeit abnehmen"
      },
      {
        "role": "Installateurgeselle",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Juni 2014",
        "end": "Dezember 2018",
        "current": false,
        "points": "Ich habe neue Sanitärinstallationen für 40+ Häuser pro Jahr gebaut\nGeräumte Abflüsse und reparierte Lecks für Häuser und Restaurants\nGelernte Gasarmatur und Rückflussverhinderung"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificate",
        "field": "Plumbing Technology",
        "start": "2013",
        "end": "2014",
        "notes": "Klempnermeisterlizenz (Tennessee). Rückflussverhinderung zertifiziert."
      }
    ],
    "skills": "Sanitärinstallation für Wohn- und Gewerbegebäude\nRohrmontage und Löten\nAbflussreinigung und Kamerainspektion\nInstallation von Kesseln und Warmwasserbereitern\nGasinstallation\nEinhaltung der Sanitärvorschriften",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Zimmerergeselle",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Zimmerergeselle mit 9 Jahren Erfahrung in Rohbau, Ausbau und maßgefertigtem Möbelbau. Den Rohbau für 30+ Häuser erstellt und Küchen in 60+ Wohnungen eingebaut, mit einem Ruf für exakte Maße und saubere Oberflächen. Kompetent im Lesen von Plänen und im Arbeiten nach Bauvorschriften.",
    "experience": [
      {
        "role": "Zimmerergeselle",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Februar 2019",
        "end": "",
        "current": true,
        "points": "Rahmen 30+ Häuser und Einbauküchen in 60+ Häusern\nKundenspezifische Schränke bauen und auf 1/16-Zoll-Toleranz zuschneiden\nLesen und befolgen Sie Architekturpläne und melden Sie Fehler, bevor sie Geld kosten\nSchulung der 2-Auszubildenden in Rahmen- und Veredelungstechniken"
      },
      {
        "role": "Zimmerer-Azubi",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Juni 2016",
        "end": "Januar 2019",
        "current": false,
        "points": "Unterstützung bei Rahmen, Trockenbau und Bodenbelägen bei Umbauten\nSicherer Umgang mit Sägen, Oberfräsen und Nagelpistolen gelernt\nAbgeschlossene 8,000-Lehrstunden und bestandene Gesellenprüfung"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificate",
        "field": "Carpentry",
        "start": "2015",
        "end": "2016",
        "notes": "Geselle Schreiner OSHA 10 zertifiziert."
      }
    ],
    "skills": "Rahmen- und Bauarbeiten\nSchreinerarbeiten und Verkleidungen fertigstellen\nBenutzerdefinierte Schränke\nLesen von Architekturplänen\nElektrowerkzeuge und Sicherheit\nTrockenbau und Bodenbeläge",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Lehrer an einer weiterführenden Schule (Mathematik)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Sekundarschullehrer mit 8 Jahren Erfahrung im Unterrichten von Mathematik in den Klassenstufen 9–12. Die Bestehensquote in Algebra von 64% auf 83% erhöht und das Mathematik-Team in 2 Landesfinals gecoacht. Kompetent in differenziertem Unterricht, Prüfungsvorbereitung und Elternkommunikation.",
    "experience": [
      {
        "role": "Mathematiklehrer (Klassen 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "August 2019",
        "end": "",
        "current": true,
        "points": "Algebra, Geometrie und Vorkalkül an 120 Schüler in 5 Klassen unterrichten\nDie Bestehensquote in Algebra von 64% auf 83% in 3 Jahren erhöht\nDas Mathematik-Team in 2 Landesfinals coachen\nNachhilfe für 30 Schüler pro Woche nach dem Unterricht anbieten"
      },
      {
        "role": "Mathematiklehrer (Klassen 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "August 2017",
        "end": "Juni 2019",
        "current": false,
        "points": "Algebra- und Geometrieunterricht für 100-Schüler pro Jahr\nEinführung wöchentlicher Quizfragen, die die Lücken bei den Hausaufgaben halbieren\nOrganisation der ersten Mathematikmesse der Schule mit 200-Schülern"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Mathematics Education",
        "start": "2013",
        "end": "2017",
        "notes": "Staatliche Lehrbefugnis (New Hampshire, Noten 7-12, Mathematik)."
      }
    ],
    "skills": "Mathematikunterricht (Algebra bis Vorkalkül)\nExamensvorbereitung\nDifferenzierte Unterweisung\nKlassenführung\nElternkommunikation\nGoogle Classroom und Desmos",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Vorschullehrer",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Vorschullehrerin mit 6 Jahren Erfahrung in der Betreuung von Kindern im Alter von 3-5. Kompetent in spielbasiertem Lernen, Verhaltensberatung und Elternkommunikation. Erstellte ein Phonik-Programm, das die Werte zur Schulreife in meiner Klasse steigerte.",
    "experience": [
      {
        "role": "Vorschullehrer",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "August 2020",
        "end": "",
        "current": true,
        "points": "Unterrichten und betreuen Sie eine Klasse von 18-Kindern im Alter von 3-5\nErstellte ein Phonik-Programm, das die Schulreife in der gesamten Klasse steigerte\nPlane wöchentliche Themen, Basteln und Spiele im Freien\nTeilen Sie tägliche Updates und kurzfristige Fortschrittsberichte mit den Eltern"
      },
      {
        "role": "Assistenz-Erzieher im Vorschulbereich",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Juni 2018",
        "end": "Juli 2020",
        "current": false,
        "points": "Unterstützte die leitende Lehrerin mit einer Klasse von 20-Kindern\nTäglich Geschichten, Lieder und Kunstaktivitäten\nFührte Sicherheits- und Hygieneverzeichnisse nach staatlichen Standards"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate Degree",
        "field": "Early Childhood Education",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA) Anmeldeinformationen. Erste-Hilfe- und HLW-zertifiziert."
      }
    ],
    "skills": "Spielbasiertes Lernen\nVerhaltensleitfaden\nPhonetik und frühe Alphabetisierung\nElternkommunikation\nSicherheit im Klassenzimmer\nKunst- und Bastelplanung",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Sozialarbeiter für Kinder und Familien",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Lizenzierte Sozialarbeiterin mit 7 Jahren Erfahrung in der Unterstützung von Kindern und Familien. Eine Falllast von 25 Familien betreuen, Dienstleistungen über Schulen und Gesundheitsdienstleister hinweg koordinieren und Gerichtsberichte erstellen, auf die sich Richter verlassen. Kompetent in Begutachtung, Krisenbegleitung und Schutzmaßnahmen.",
    "experience": [
      {
        "role": "Sozialarbeiter für Kinder und Familien",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Januar 2020",
        "end": "",
        "current": true,
        "points": "Eine Falllast von 25 Familien betreuen und wöchentlich Häuser und Schulen besuchen\nGerichtsberichte verfassen und vor dem Familiengericht aussagen\nWohnungs-, Gesundheits- und Schulunterstützung für schutzbedürftige Familien koordinieren\nDie Wartezeit für Begutachtungen mit einem neuen Triage-System um 20% verkürzt"
      },
      {
        "role": "Fallmanager",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Juli 2018",
        "end": "Dezember 2019",
        "current": false,
        "points": "Unterstützte 40+ Familien in vorübergehenden Unterkünften mit Leistungen und Empfehlungen\nFührte wöchentliche Erziehungs- und Budgetierungsworkshops durch\nRichtige Fallnotizen für Audits und Finanzierungsberichte"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Social Work",
        "start": "2016",
        "end": "2018",
        "notes": "Lizenzierter Sozialarbeiter (Ohio). Kursarbeit in Kinder- und Familiensystemen."
      }
    ],
    "skills": "Fallmanagement (25-Familien)\nKindersicherung\nFamiliengerichtliche Gutachten\nKrisenbegleitung\nBehördenübergreifende Koordinierung\nSozialleistungen und Wohnungsempfehlungen",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Rechtsanwaltsfachangestellte",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Rechtsanwaltsgehilfin mit 6 Jahren Erfahrung in der Unterstützung von Rechtsstreitigkeiten und Unternehmensanmeldungen. Die Beweiserhebung für 30+ Fälle verwalten, Schriftsätze und Verträge entwerfen und Einreichungsfristen mit einer Pünktlichkeitsquote von 100% einhalten. Kenntnisse in Westlaw, E-Discovery und Fallmanagement-Software.",
    "experience": [
      {
        "role": "Rechtsanwaltsfachangestellte",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Februar 2021",
        "end": "",
        "current": true,
        "points": "Die Beweiserhebung für 30+ Rechtsstreitigkeiten verwalten und 10,000+ Dokumente prüfen\nSchriftsätze, Anträge und Verträge zur Prüfung durch die Anwälte entwerfen\nBei Gerichtseinreichungen und Fristen einen Pünktlichkeitsrekord von 100% halten\nZeugen koordinieren und Prozessordner vorbereiten"
      },
      {
        "role": "Rechtsanwaltsassistent",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "August 2019",
        "end": "Januar 2021",
        "current": false,
        "points": "Aufnahmeinterviews für 20+ Kunden pro Woche\nVorbereitete Formulare und Einreichungen für Wohn- und Familiensachen\nÜbersetzte Rechtsdokumente für spanischsprachige Kunden"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate Degree",
        "field": "Paralegal Studies",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Certified Paralegal (CP). ABA-zugelassenes Programm."
      }
    ],
    "skills": "Unterstützung und Aufdeckung von Rechtsstreitigkeiten\nRedaktionelle Qualität\nE-Discovery (Relativity)\nFallmanagement (Clio)\nGerichtliche Einreichungen und Fristen\nJuristische Forschung (Westlaw)",
    "languages": "Englisch (fließend)\nSpanisch (fließend)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Buchhaltungsfachkraft",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Sachbearbeiter in der Buchhaltung mit 5 Jahren Erfahrung in Kreditorenbuchhaltung, Rechnungsstellung und Bankabstimmung. 300+ Rechnungen pro Monat mit 99.8% Genauigkeit bearbeiten und die Bücher für den Monatsabschluss sauber halten. Kenntnisse in QuickBooks, Excel und Unterstützung bei der Gehaltsabrechnung.",
    "experience": [
      {
        "role": "Buchhaltungsfachkraft",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "April 2021",
        "end": "",
        "current": true,
        "points": "300+ Lieferantenrechnungen pro Monat mit 99.8% Genauigkeit bearbeiten\n6 Bankkonten wöchentlich abstimmen und Differenzen noch am selben Tag kennzeichnen\nGehaltsdaten für 45 Mitarbeiter vorbereiten und überfällige Kundenzahlungen nachverfolgen\nDie Unterlagen für die Jahresabschlussprüfung ordentlich halten, mit null Beanstandungen"
      },
      {
        "role": "Buchhaltungsassistent",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Juni 2019",
        "end": "März 2021",
        "current": false,
        "points": "Tägliche Erfassung von Verkaufsrechnungen und -belegen in QuickBooks\nBeantwortung von Lieferantenanfragen zu Zahlungen per Telefon und E-Mail\nPapierkram eingereicht und das Archiv auf dem neuesten Stand gehalten"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificate",
        "field": "Bookkeeping",
        "start": "2018",
        "end": "2019",
        "notes": "Zertifizierter QuickBooks-Anwender."
      }
    ],
    "skills": "Debitoren und Kreditoren\nvornehmen.\nRechnungsstellung (300+ pro Monat)\nQuickBooks und Excel\n- Unterstützung der Payroll\nDateneingabe (65 wpm)",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Verwaltungsassistent",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Verwaltungsassistent mit 6 Jahren Erfahrung darin, Büros reibungslos am Laufen zu halten. Kalender für 4 Führungskräfte verwalten, Reisen und Meetings organisieren und täglich 100+ E-Mails bearbeiten. Bekannt für Genauigkeit, Diskretion und Ruhe unter Termindruck.",
    "experience": [
      {
        "role": "Verwaltungsassistent",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "Kalender, Reisen und Meetings für 4 leitende Führungskräfte verwalten\n100+ E-Mails pro Tag bearbeiten, Antworten entwerfen und Prioritäten kennzeichnen\nVorstandspapiere vorbereiten und bei monatlichen Sitzungen Protokoll führen\nBürobedarf und Lieferantenbestellungen verwalten und die Kosten um 12% gesenkt"
      },
      {
        "role": "Empfangsmitarbeiter",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "August 2019",
        "end": "Dezember 2020",
        "current": false,
        "points": "60+ Patienten pro Tag empfangen und das Terminbuch verwaltet\nTelefone beantwortet und Versicherungsanfragen bearbeitet\nPatientenakten genau und vertraulich geführt"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate Degree",
        "field": "Office Administration",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office-Spezialist (Word, Excel)."
      }
    ],
    "skills": "Kalender- und Reisemanagement\nE-Mail und Korrespondenz\nBesprechungsprotokoll\nMicrosoft Office (Word, Excel, Outlook)\nDateneingabe (70 wpm)\nBüromaterial und Lieferanten",
    "languages": "Englisch (fließend)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bankkassierer",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bankkassierer mit 4 Jahren Erfahrung, der täglich 80+ Kunden mit Genauigkeit und Sorgfalt bedient. Die Kasse über 3 Jahre auf den Cent genau ausgeglichen, ohne einen einzigen Fehlbetrag. Erfahren in Einzahlungen, Auszahlungen, Betrugsprüfungen und der Empfehlung passender Produkte an Kunden.",
    "experience": [
      {
        "role": "Bankkassierer",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "März 2022",
        "end": "",
        "current": true,
        "points": "80+ Kunden pro Tag bedienen: Einzahlungen, Auszahlungen, Zahlungen und Überweisungen\nDie Kasse 3 Jahre lang auf den Cent genau ausgeglichen, ohne einen einzigen Fehlbetrag\n12 Betrugsversuche erkannt und gestoppt und Kunden so $90,000+ erspart\nKunden auf Spar- und Kreditprodukte verweisen und die Empfehlungsziele vierteljährlich erreichen"
      },
      {
        "role": "Mitarbeiter im Kundendienst",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Juni 2021",
        "end": "Februar 2022",
        "current": false,
        "points": "Eröffnung neuer Konten und Ausstellung von Debitkarten für Mitglieder\nBeantwortete telefonische Fragen zu Salden und Kontoauszügen\nUnterstützte Mitglieder bei der Einrichtung von Online- und Mobile-Banking"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate Degree",
        "field": "Business",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Bargeldabwicklung und -ausgleich\nEin-, Auszahlungen und Zahlungen\nErkennung von Betrug\nKundenService\nBankensoftware (Fiserv)\nVon Produkt-Empfehlungen",
    "languages": "Englisch (fließend)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Vertriebsleiter",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Vertriebsleiter mit 10 Jahren Erfahrung in der Leitung von Teams mit bis zu 15 Vertriebsmitarbeitern. Den regionalen Umsatz von $4M auf $7.5M in 3 Jahren gesteigert, die Gewinnrate von 22% auf 34% erhöht und die Fluktuation der Vertriebsmitarbeiter durch besseres Coaching und Onboarding halbiert.",
    "experience": [
      {
        "role": "Regionaler Vertriebsleiter",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "Führen Sie ein Team von 15-Vertriebsmitarbeitern in Texas und Oklahoma\nSteigerung des regionalen Umsatzes von $4M auf $7.5M in 3 Jahren\nErhöhte Gewinnrate von 22% auf 34% mit besserem Coaching und Pipeline-Bewertungen\nHalbieren Sie den Umsatz von Vertriebsmitarbeitern mit einem neuen Onboarding-Programm"
      },
      {
        "role": "Vertriebsmitarbeiter",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Juni 2015",
        "end": "Dezember 2020",
        "current": false,
        "points": "Industrieanlagen an 80+ Firmenkunden verkauft und die Quote 5 Jahre in Folge erreicht\n3 Jahre in Folge bester Vertreter der Region\nEin Empfehlungsnetzwerk aufgebaut, das 25% des Neugeschäfts einbrachte"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kursarbeit in Vertriebsmanagement und Verhandlung."
      }
    ],
    "skills": "Führung des Vertriebsteams (15-Vertreter)\nUmsatzwachstum und Prognose\nRohrleitungsmanagement (Salesforce)\nCoaching und Onboarding\nVerhandlungsgeschick\nGebietsplanung",
    "languages": "Englisch (fließend)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Bauleiter",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Bauleiter mit 12 Jahren Erfahrung in der Realisierung von Gewerbe- und Wohnprojekten im Wert von bis zu $12M. 20+ Projekte mit einer Pünktlichkeitsquote von 95% abgeschlossen, ohne Verletzungen mit Ausfallzeiten auf meinen Baustellen und mit Budgets innerhalb von 3%. Kenntnisse in Terminplanung, Subunternehmermanagement und Arbeitssicherheit.",
    "experience": [
      {
        "role": "Bauleiter",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Februar 2020",
        "end": "",
        "current": true,
        "points": "Gewerbe- und Wohnprojekte im Wert von bis zu $12M realisieren\n20+ Projekte mit einer Pünktlichkeitsquote von 95% und Budgets innerhalb von 3% abgeschlossen\n30+ Subunternehmer und 50 Mitarbeiter an 3 aktiven Baustellen führen\nNull Verletzungen mit Ausfallzeiten an allen Standorten in 4 Jahren"
      },
      {
        "role": "Bauleiter vor Ort",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Juni 2013",
        "end": "Januar 2020",
        "current": false,
        "points": "Täglicher Standortbetrieb für Büro- und Einzelhandelsgebäude\nKoordinierte Lieferungen, Inspektionen und Subunternehmertermine\nSicherheitsaufzeichnungen sauber gehalten und jede OSHA-Inspektion bestanden"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Building Construction",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 zertifiziert. ccm (Certified Construction Manager) Kandidat."
      }
    ],
    "skills": "Projektterminierung (MS Project, Procore)\nBudgetkontrolle\nFührung der Nachunternehmer\nStandortsicherheit (OSHA 30)\nBauplan-Lesung\nBerichte an den Kunden",
    "languages": "Englisch (fließend)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Zertifizierte medizinische Fachangestellte",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Zertifizierte medizinische Assistentin mit 5 Jahren Erfahrung in Familienpraxis und Notfallversorgung. Täglich 25+ Patienten in die Untersuchungszimmer bringen, Vitalwerte messen, Blut abnehmen und die Rezeption verwalten, bei einer Patientenzufriedenheit von 97%. Qualifiziert in EHR, Phlebotomie und Versicherungsprüfungen.",
    "experience": [
      {
        "role": "Zertifizierte medizinische Fachangestellte",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "April 2021",
        "end": "",
        "current": true,
        "points": "25+ Patienten pro Tag in die Untersuchungszimmer bringen: Vitalwerte, Anamnese und Untersuchungsvorbereitung\nBlut abnehmen und grundlegende Labortests mit einer First-Stick-Rate von 99% durchführen\nRezeption, Terminplanung und Versicherungsprüfungen verwalten\nEine Patientenzufriedenheit von 97% über 800+ Befragungen halten"
      },
      {
        "role": "Medizinische Fachangestellte",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "August 2019",
        "end": "März 2021",
        "current": false,
        "points": "Triagierte Walk-in-Patienten und Assistenzärzte mit kleineren Eingriffen\nGab Impfungen und handhabte Probenentnahme\nGehaltene Untersuchungsräume zwischen den Patienten bestückt, sauber und bereit"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificate",
        "field": "Medical Assisting",
        "start": "2018",
        "end": "2019",
        "notes": "Zertifizierter medizinischer Assistent (CMA, AAMA). BLS-zertifiziert. Phlebotomie geschult."
      }
    ],
    "skills": "Patientenaufnahme und Vitalfunktionen\nBlutentnahme\nEHR (eClinicalWorks)\nImpfungen\nVersicherungsüberprüfung\nFrontdesk-Management",
    "languages": "Englisch (fließend)\nSpanisch (fließend)",
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
    "summary": "Motivierter Abiturient mit starken Noten und Teilzeitarbeitserfahrung. Schnell erlernbar, zuverlässig und gut im Umgang mit Menschen. Auf der Suche nach einer ersten Vollzeitstelle oder einem Teilzeitjob neben dem College.",
    "experience": [
      {
        "role": "Verkaufsassistent in Teilzeit",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "September 2024",
        "end": "",
        "current": true,
        "points": "Am Wochenende und nach der Schule 50+ Kunden pro Schicht bedienen\nBargeld entgegennehmen, Regale auffüllen und Displays ordentlich halten\nVertrauenswürdig genug, um den Laden am Samstagmorgen zu öffnen"
      },
      {
        "role": "Ehrenamtlicher Nachhilfelehrer",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Januar 2024",
        "end": "Juni 2025",
        "current": false,
        "points": "Nachhilfe für jüngere Schüler in Mathematik zweimal pro Woche\nUnterstützung bei der Organisation des Sommerleseprogramms für 40-Kinder"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "High-School-Abschluss",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "Notendurchschnitt 3.6. Ehrenrolle, 3 Jahre. Kapitän des Debattierteams."
      }
    ],
    "skills": "KundenService\nBargeldabwicklung\nTeamarbeit\nZeitmanagement\nMicrosoft Office\nÖffentliches Reden (Debattierteam)",
    "languages": "Englisch (fließend)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Frisch Absolvent \u2014 Betriebswirtschaft",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Jüngster BWL-Absolvent mit Praktikumserfahrung in Marketing und Operations. Organisierte einen Campus-Geschäftswettbewerb mit 200-Teilnehmern und absolvierte ein 6-monatiges Praktikum, bei dem ich die Berichtszeit um die Hälfte verkürzte. Begierig darauf, eine Vollzeitkarriere zu beginnen und schnell zu lernen.",
    "experience": [
      {
        "role": "Marketingpraktikant",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Januar 2025",
        "end": "Juni 2025",
        "current": false,
        "points": "Die Social-Media-Konten des Unternehmens geführt, die Followerzahl von 2,000 auf 6,500 ausgebaut\nEin Reporting-Dashboard erstellt, das die wöchentliche Berichtszeit halbierte\n20 Blogbeiträge geschrieben, die 15,000+ Aufrufe einbrachten"
      },
      {
        "role": "Ehrenamtlicher Veranstaltungsleiter",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "September 2024",
        "end": "Mai 2025",
        "current": false,
        "points": "Einen Unternehmenswettbewerb mit 200 Teilnehmern und 12 Juroren organisiert\nEin Budget von $5,000 und ein Team von 8 Freiwilligen verwaltet"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Business Administration",
        "start": "2021",
        "end": "2025",
        "notes": "GPa 3.5. Dean's List, 2 Jahre. Abschlussprojekt zum Marketing für kleine Unternehmen."
      }
    ],
    "skills": "Social Media Marketing\nExcel and Google Sheets\nPräsentationsfähigkeit\nEventorganisation\nTeamfähigkeit\nGrundlegende Datenanalyse",
    "languages": "Englisch (fließend)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior-Marketingmitarbeiter",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior Marketing Associate mit 2 Jahren Erfahrung in Content, E-Mail und Social Media. Einen Kunden-Newsletter von 1,000 auf 4,000 Abonnenten ausgebaut und Kampagnen durchgeführt, die eine durchschnittliche Öffnungsrate von 22% erzielen. Bereit für mehr Verantwortung und ein größeres Kundenportfolio.",
    "experience": [
      {
        "role": "Junior-Marketingmitarbeiter",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Juli 2024",
        "end": "",
        "current": true,
        "points": "Einen Kunden-Newsletter von 1,000 auf 4,000 Abonnenten in 14 Monaten ausgebaut\n12 Social-Media-Beiträge pro Woche für 4 Kunden schreiben und planen\nE-Mail-Kampagnen mit einer durchschnittlichen Öffnungsrate von 22% durchführen\nDen Kunden monatlich über die Kampagnenergebnisse berichten"
      },
      {
        "role": "Marketingpraktikant",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Januar 2024",
        "end": "Juni 2024",
        "current": false,
        "points": "Produktbeschreibungen für 200+ Artikel auf der Unternehmenswebsite geschrieben\nAn einer Frühjahrskampagne mitgewirkt, die die Online-Bestellungen um 15% erhöhte"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Communications",
        "start": "2020",
        "end": "2024",
        "notes": "GPa 3.4. Kursarbeit in digitalem Marketing und Medienschreiben."
      }
    ],
    "skills": "Content writing\nE-Mail-Marketing (Mailchimp)\nSocial Media Management\nGoogle Analytics\nCanva\nBerichte an den Kunden",
    "languages": "Englisch (fließend)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Betriebsaufsicht",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Betriebsleiter mit 8 Jahren Erfahrung in der Führung von Lagerteams von 20-30 Mitarbeitern. Kommissionierfehler um 30% reduziert, den pünktlichen Versand von 90% auf 97% angehoben und 15 neue Mitarbeiter eingearbeitet. Bereit für eine Position als Betriebsleiter mit größerem Standort und Budget.",
    "experience": [
      {
        "role": "Betriebsaufsicht",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "März 2021",
        "end": "",
        "current": true,
        "points": "25 Lagermitarbeiter in 2 Schichten an einem Standort von 90,000 sq ft beaufsichtigen\nKommissionierfehler mit neuen Kontrollroutinen und Barcode-Scanning um 30% reduziert\nDen pünktlichen Versand von 90% auf 97% in 2 Jahren angehoben\n15 neue Mitarbeiter eingearbeitet und 3 zu Teamleitern befördert"
      },
      {
        "role": "Teamleiter",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Juni 2017",
        "end": "Februar 2021",
        "current": false,
        "points": "Ein Team von 10 Kommissionierern und Packern in der Nachtschicht geleitet\nEinen Dienstplan eingeführt, der die Überstunden um 20% reduzierte, ohne Fristen zu verpassen\nSicherheitseinweisungen durchgeführt und das Team 2 Jahre lang unfallfrei gehalten"
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
    "skills": "Teamleitung (25-Mitarbeiter)\n- Data Warehouse-Betrieb\nProzessverbesserung\nSicherheitsmanagement\nLagerkontrolle\nWMS and Excel",
    "languages": "Englisch (fließend)\nHindi (Konversationsniveau)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Senior-Projektmanager",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Senior Project Manager mit 14 Jahren Erfahrung in der Bereitstellung von Softwareprojekten im Wert von bis zu $8M. 30+ Projekte mit einer Pünktlichkeitsquote von 92% geleitet, ein PMO von Grund auf aufgebaut und 10 Projektmanager betreut. Bekannt für ruhige Umsetzung unter Druck und ehrliche Berichterstattung an Führungskräfte.",
    "experience": [
      {
        "role": "Senior-Projektmanager",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Januar 2019",
        "end": "",
        "current": true,
        "points": "Softwareprojekte im Wert von bis zu $8M mit einer Pünktlichkeitsquote von 92% liefern\nDas PMO des Unternehmens von Grund auf aufgebaut: Vorlagen, Berichterstattung und Governance\n10 Projektmanager betreuen und die monatliche PM-Community leiten\nDirekt an den CTO über ein Programm mit 40 Personen berichten"
      },
      {
        "role": "Projektmanager",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Juni 2012",
        "end": "Dezember 2018",
        "current": false,
        "points": "20+ Projekte für Einzelhandels- und Gesundheitskunden verwaltet\nAgile Praktiken eingeführt, die die Lieferzeit um 25% verkürzten\n2 wichtige Kundenkonten von $500k auf $2M Jahresumsatz ausgebaut"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Information Systems",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-zertifiziert (2015). Zertifizierter ScrumMaster. MBA-Kursarbeit (2018-2019, unvollständig)."
      }
    ],
    "skills": "Programm- und Projektabwicklung\nPMO-Einrichtung und -Governance\nAgil und Wasserfall\nBudgetkontrolle ($8M)\nUnternehmensberichte:\nTeam-Mentoring",
    "languages": "Englisch (fließend)\nSpanisch (Konversationsniveau)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Chief Operating Officer (COO)",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Chief Operating Officer mit 18 Jahren Erfahrung in der Skalierung von Abläufen für Einzelhandels- und Logistikunternehmen. Einen Betrieb von 200 auf 900 Mitarbeiter an 6 Standorten ausgebaut, die EBITDA-Marge von 8% auf 14% erhöht und 2 Akquisitionen geleitet. Erfahrung in Berichterstattung auf Vorstandsebene und Investor Relations.",
    "experience": [
      {
        "role": "Chief Operating Officer (COO)",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Januar 2021",
        "end": "",
        "current": true,
        "points": "Den Betrieb für 900 Mitarbeiter an 6 Standorten mit einem Budget von $180M leiten\nDie EBITDA-Marge von 8% auf 14% in 3 Jahren erhöht\n2 Akquisitionen geleitet und beide Teams innerhalb von 6 Monaten integriert\nMonatlich an den Vorstand über Betrieb, Risiken und Wachstum berichten"
      },
      {
        "role": "Vice President of Operations",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Juni 2014",
        "end": "Dezember 2020",
        "current": false,
        "points": "Skalierte Operationen von 200 zu 600 Mitarbeitern an 4 Standorten\nEröffnet 3 Distributionszentren pünktlich und unter Budget\nAufbau des Führungsteams, das heute noch das Geschäft führt"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Business Administration",
        "start": "2010",
        "end": "2012",
        "notes": "BS in Economics, NYU (2006). Board-Governance-Kurs (2020)."
      }
    ],
    "skills": "Betrieb in großem Maßstab (900-Mitarbeiter)\nGuV-Eigentum ($180M)\nFusionen und Übernahmen\nVorstandsberichterstattung\nWachstumsstrategie\nFührungsetage und Entwicklung der menschlichen Arbeitskräfte.",
    "languages": "Englisch (fließend)",
    "template": "executive"
  }
};
});
