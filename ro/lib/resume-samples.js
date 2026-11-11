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
      "title": "Asistent medical generalist",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Asistent medical generalist cu 6 ani de experiență în secții medico-chirurgicale și de telemetrie. Priceput în evaluarea pacientului, terapie intravenoasă, administrarea medicamentelor și dosare electronice de sănătate. Cunoscut pentru comunicarea calmă și clară cu pacienții și familiile în situații de mare presiune.",
    "experience": [
      {
        "role": "Asistent medical generalist",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "iun. 2021",
        "end": "",
        "current": true,
        "points": "Îngrijirea a 5-6 pacienți pe tură într-o secție medico-chirurgicală cu 32 de paturi, inclusiv evaluare, administrarea medicamentelor și îngrijirea rănilor\nInstruirea și mentoratul a 4 asistente abia absolvite, reducând timpul lor de orientare cu 2 săptămâni\nAm redus erorile de medicație pe secție cu 18% prin introducerea unei rutine de dublă verificare la predare\nDocumentarea precisă a tuturor îngrijirilor în dosarele electronice de sănătate Epic"
      },
      {
        "role": "Asistentă medicală de personal",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "aug. 2019",
        "end": "mai 2021",
        "current": false,
        "points": "Am efectuat triajul pentru 40+ pacienți prezentați fără programare pe zi, prioritizând cazurile urgente pentru îngrijire în aceeași zi\nAm administrat vaccinuri și am efectuat controale de sănătate la evenimente lunare comunitare\nAm coordonat trimiteri la specialiști și am urmărit rezultatele analizelor"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Asistență medicală",
        "start": "2015",
        "end": "2019",
        "notes": "Licență de asistent medical generalist (Texas). Certificat BLS și ACLS."
      }
    ],
    "skills": "Evaluarea pacientului\nTerapie intravenoasă și administrarea medicamentelor\nDosare electronice de sănătate (Epic)\nMonitorizarea telemetriei\nEducația pacientului și a familiei\nControlul infecțiilor",
    "languages": "Engleză (fluent)\nSpaniolă (conversațional)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Dezvoltator software",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Dezvoltator software cu 5 ani de experiență în construirea de aplicații web în Python și JavaScript. Am livrat funcții folosite de 200,000+ utilizatori, am redus timpii de răspuns API cu 40% și am condus migrarea unui monolit la microservicii. Bun în testare, revizuirea codului și documentație clară.",
    "experience": [
      {
        "role": "Dezvoltator software",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Construirea și întreținerea de funcții web pentru clienți în Python (Django) și React, servind 200,000+ utilizatori\nReducerea timpului mediu de răspuns API de la 850 ms la 500 ms prin adăugarea memoriei cache și corectarea interogărilor lente\nAm condus migrarea serviciului de facturare la microservicii, cu zero timp de nefuncționare\nRevizuirea a 10+ cereri de extragere pe săptămână și mentoratul a 2 dezvoltatori juniori"
      },
      {
        "role": "Dezvoltator junior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "iul. 2020",
        "end": "feb. 2022",
        "current": false,
        "points": "Am construit dashboarduri interne în JavaScript care au înlocuit foile de calcul manuale pentru 3 echipe\nAm scris teste automatizate care au crescut acoperirea de la 45% la 78%\nAm corectat 120+ de erori în întregul produs în primul an"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatică",
        "start": "2016",
        "end": "2020",
        "notes": "Cursuri de baze de date, algoritmi și sisteme de operare."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript și React\nPostgreSQL și Redis\nAPI-uri REST și microservicii\nGit și CI/CD\nTestare automatizată (pytest, Jest)",
    "languages": "Engleză (fluent)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Profesor pentru învățământul primar",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Profesor pentru învățământul primar cu 7 ani de experiență în predarea claselor 3-5. Priceput în instruire diferențiată, gestionarea clasei și comunicarea cu părinții. Am crescut competența la lectură în clasa mea de la 58% la 81% în decurs de doi ani școlari.",
    "experience": [
      {
        "role": "Profesor pentru învățământul primar (clasa a 4-a)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "aug. 2020",
        "end": "",
        "current": true,
        "points": "Predarea citirii, matematicii și științelor unei clase de 26 de elevi, inclusiv 5 cu planuri individuale de învățare\nAm crescut competența la lectură a clasei de la 58% la 81% în doi ani, prin grupuri de lectură ghidată\nRealizarea unui newsletter săptămânal pentru părinți și a ședințelor de progres pe trimestru pentru fiecare familie\nConducerea clubului de lectură al școlii pentru 40 de elevi din clasele 3-5"
      },
      {
        "role": "Profesor pentru învățământul primar (clasa a 3-a)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "aug. 2018",
        "end": "iun. 2020",
        "current": false,
        "points": "Am planificat și am susținut lecții zilnice pentru 24 de elevi la toate materiile de bază\nAm introdus rutine de comportament care au redus perturbările din clasă la jumătate\nAm organizat târgul de științe al anului de studiu, cu 120 de elevi și 80 de părinți"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Învățământ primar",
        "start": "2014",
        "end": "2018",
        "notes": "Licență statală de predare (Ohio, clasele K-5). Aviz pentru lectură."
      }
    ],
    "skills": "Instruire diferențiată\nGestionarea clasei\nGrupuri de lectură ghidată\nComunicarea cu părinții\nPlanificarea lecțiilor\nGoogle Classroom",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Contabil senior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA cu 8 ani de experiență în închideri de lună, raportare financiară și audit intern. Am închis registrele cu 3 zile mai repede, reconstruind procesul de reconciliere, și am găsit $240,000 în plăți excesive recuperabile într-un an de audit. Bun în Excel, QuickBooks și sisteme ERP.",
    "experience": [
      {
        "role": "Contabil senior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Responsabil de închiderea de lună pentru o unitate de afaceri de $40M, terminând cu 3 zile mai repede după reconstruirea reconciliărilor\nPregătirea situațiilor financiare lunare și a rapoartelor de abateri pentru conducere\nAm găsit $240,000 în plăți excesive recuperabile către furnizori în timpul auditului intern din 2024\nSupravegherea a 2 contabili de personal și revizuirea înregistrărilor lor contabile"
      },
      {
        "role": "Contabil de personal",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "iun. 2017",
        "end": "dec. 2020",
        "current": false,
        "points": "Am pregătit declarații fiscale și situații financiare pentru 25 de clienți afaceri mici\nAm asistat la auditurile a 8 clienți, testând controalele și documentând constatările\nAm automatizat registrul mijloacelor fixe în Excel, economisind 6 ore pe lună"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Contabilitate",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Membru al AICPA."
      }
    ],
    "skills": "Închidere de lună și reconciliieri\nRaportare financiară și analiza abaterilor\nAudit intern\nExcel (tabele pivot, VLOOKUP)\nQuickBooks și SAP\nPregătirea declarațiilor fiscale",
    "languages": "Engleză (fluent)\nMandarină (conversațional)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Șofer de camion CDL clasa A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Șofer CDL clasa A cu 9 ani de experiență în transport de marfă pe distanțe lungi și regional. Peste 900,000 de mile fără accidente, o rată de livrare la timp de 99% și experiență cu încărcături frigorifice, pe platformă și în furgoane uscate. Cazier rutier curat, autorizații HazMat și pentru cisterne.",
    "experience": [
      {
        "role": "Șofer de cursă lungă",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "apr. 2019",
        "end": "",
        "current": true,
        "points": "Conducerea a 2,800+ mile pe săptămână pe rute regionale în Texas, Oklahoma și New Mexico\nMenținerea unei rate de livrare la timp de 99% pentru 1,100+ încărcături pe an\nTransportul mărfurilor frigorifice și în furgoane uscate; efectuarea zilnică a inspecțiilor înainte și după cursă\nPeste 900,000 de mile fără accidente în total"
      },
      {
        "role": "Șofer de camion de livrări",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar. 2016",
        "end": "mar. 2019",
        "current": false,
        "points": "Am livrat materiale de construcții la 15-20 de șantiere pe zi în zona Dallas-Fort Worth\nAm operat stivuitoare și am asigurat încărcăturile pe platformă conform standardelor DOT\nAm menținut documentele și jurnalele de livrare precise, cu zero încălcări DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificate",
        "field": "Conducere comercială (CDL clasa A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL clasa A cu autorizații HazMat și pentru cisterne. Cazier rutier curat."
      }
    ],
    "skills": "Conducere pe distanțe lungi și regională\nÎncărcături frigorifice și pe platformă\nReglementări DOT și jurnale\nInspecții înainte de cursă\nPlanificarea rutelor (GPS, ELD)\nOperarea stivuitoarelor",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Lucrător comercial în retail",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Lucrător comercial în retail cu 4 ani de experiență în magazine de electronice și îmbrăcăminte. În mod constant printre primii 3 vânzători ai echipei, cu o rată de atașare de 32% la garanții și accesorii. Prietenos, rapid la casă și de încredere pentru deschiderea și închiderea magazinului.",
    "experience": [
      {
        "role": "Asociat senior de vânzări",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Vânzarea de electronice și accesorii către 60+ clienți pe zi; printre primii 3 în vânzările magazinului timp de 8 trimestre consecutive\nAtingerea unei rate de atașare de 32% la garanții și accesorii, cea mai mare din echipă\nInstruirea a 6 angajați noi în casa de marcat, depozit și standardele de relații cu clienții\nDeținător de chei de încredere: deschid și închid magazinul și mă ocup de numărătorile de numerar"
      },
      {
        "role": "Asociat de vânzări",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "iun. 2021",
        "end": "ian. 2022",
        "current": false,
        "points": "Am ajutat clienții să-și aleagă ținute și mărimi într-un magazin aglomerat\nAm menținut standurile ordonate și am reaprovizionat rafturile în fiecare tură\nAm tratat retururile și schimburile cu politețe, menținând reclamațiile la minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate Degree",
        "field": "Afaceri",
        "start": "2019",
        "end": "2021",
        "notes": "Studii part-time în timp ce lucram în retail."
      }
    ],
    "skills": "Relații cu clienții și vânzări suplimentare\nManipularea numerarului și sisteme POS\nCunoașterea produselor (electronice)\nGestionarea stocurilor\nDeschiderea și închiderea magazinului\nInstruirea echipei",
    "languages": "Engleză (fluent)\nSpaniolă (fluent)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Reprezentant relații clienți",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Reprezentant relații clienți cu 5 ani de experiență în suport prin telefon, e-mail și chat live. Rezolv 45+ de cazuri pe zi, cu un scor de satisfacție de 96% și o rată de rezolvare la primul contact de 88%. Calm cu clienții nemulțumiți și rapid în găsirea soluției.",
    "experience": [
      {
        "role": "Reprezentant relații clienți",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "mai 2021",
        "end": "",
        "current": true,
        "points": "Tratarea a 45+ cazuri pe zi prin telefon, e-mail și chat, pentru facturare, comenzi și defecțiuni tehnice\nMenținerea unui scor de satisfacție a clienților de 96% și a unei rate de rezolvare la primul contact de 88%\nDezescaladarea apelurilor dificile și transformarea reclamațiilor în clienți recurenți\nInstruirea a 5 agenți noi în scripturi, sisteme și ton"
      },
      {
        "role": "Agent de suport",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "sept. 2019",
        "end": "apr. 2021",
        "current": false,
        "points": "Am răspuns la e-mailurile și discuțiile clienților despre comenzi, retururi și rambursări\nAm menținut timpul mediu de prim răspuns sub 2 ore\nAm scris 20 de articole pentru centrul de ajutor care au redus întrebările repetate cu un sfert"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate Degree",
        "field": "Administrarea afacerilor",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Suport prin telefon, e-mail și chat live\nTratarea reclamațiilor și dezescaladare\nSisteme CRM (Zendesk, Salesforce)\nÎntrebări despre facturare și comenzi\nTastare 55 wpm\nInstruirea echipei",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Manager de operațiuni",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Manager de operațiuni cu 12 ani de experiență în conducerea unor echipe de până la 80 de persoane în depozitare și distribuție. Am redus costurile de procesare a comenzilor cu 22%, am ridicat livrările la timp de la 91% la 98% și am deschis două locații noi la timp și sub buget.",
    "experience": [
      {
        "role": "Manager de operațiuni",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Conducerea unui centru de distribuție de 120,000 sq ft, cu 80 de angajați în 3 schimburi\nReducerea costurilor de procesare a comenzilor cu 22% prin reproiectarea traseelor de culegere și a modelelor de ture\nAm ridicat livrările la timp de la 91% la 98% în 18 luni\nAm deschis 2 locații noi la timp și cu 8% sub buget"
      },
      {
        "role": "Supervizor de depozit",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "iun. 2013",
        "end": "ian. 2020",
        "current": false,
        "points": "Am supravegheat 25 de angajați de depozit și expedierea zilnică a 4,000+ comenzi\nAm introdus scanarea codurilor de bare, reducând erorile de culegere cu 35%\nAm condus instruiri de siguranță care au menținut șantierul fără accidente timp de 3 ani"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Managementul operațiunilor",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Conducerea echipei (până la 80 de angajați)\nDepozitare și distribuție\nÎmbunătățirea proceselor\nBugetare și controlul costurilor\nManagementul siguranței\nSisteme ERP și WMS",
    "languages": "Engleză (fluent)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Electrician autorizat",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Electrician calfă autorizat, cu 8 ani de experiență în lucrări rezidențiale și comerciale. Priceput în cablaje, modernizări de tablouri, iluminat și depistarea defecțiunilor, cu un registru de siguranță curat pentru 400+ lucrări. Cunoștințe ale codului NEC și experiență în supravegherea ucenicilor.",
    "experience": [
      {
        "role": "Electrician calfă",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar. 2019",
        "end": "",
        "current": true,
        "points": "Realizarea a 400+ de lucrări rezidențiale și comerciale: cablaje, modernizări de tablouri, iluminat și încărcătoare EV\nDiagnosticarea și repararea rapidă a defecțiunilor, cu o rată de rezolvare din prima vizită de 92%\nSupravegherea a 2 ucenici și aprobarea muncii lor conform normelor\nMenținerea unui registru de siguranță curat, cu zero accidente cu incapacitate"
      },
      {
        "role": "Ucenic electrician",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "iun. 2016",
        "end": "feb. 2019",
        "current": false,
        "points": "Am asistat electricieni autorizați la cablaje de construcții noi și la recablări\nAm învățat îndoirea tuburilor, tragerea cablurilor și instalarea tablourilor\nAm finalizat 8,000 de ore de ucenicie și am promovat examenul de calfă din prima"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificate",
        "field": "Tehnologie electrică",
        "start": "2015",
        "end": "2016",
        "notes": "Licență de electrician calfă (Colorado). Certificat OSHA 30."
      }
    ],
    "skills": "Cablaje rezidențiale și comerciale\nModernizări de tablouri și încărcătoare EV\nDepistarea defecțiunilor și testare\nConformitatea cu codul NEC\nÎndoirea tuburilor și tragerea cablurilor\nSupravegherea ucenicilor",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analist financiar",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analist financiar cu 6 ani de experiență în bugetare, prognoză și analiza investițiilor. Am construit modele de prognoză care au redus abaterea bugetară cu 30% și am sprijinit decizii de investiții de $50M. Bun în Excel, SQL și modelare financiară.",
    "experience": [
      {
        "role": "Analist financiar",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Elaborarea de prognoze lunare și bugete anuale pentru un portofoliu de $120M\nReducerea abaterii bugetare cu 30% printr-un model de prognoză bazat pe factori determinanți\nSprijinirea deciziilor de investiții în valoare de $50M prin evaluare și analiza scenariilor\nPrezentarea lunară a constatărilor către CFO și șefii de departamente"
      },
      {
        "role": "Analist financiar junior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "iul. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Am pregătit rapoarte săptămânale de performanță pentru 12 sucursale\nRaportare automatizată în Excel, economisind 10 ore pe săptămână\nAm asistat echipa de creditare la analiza portofoliului de împrumuturi"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finanțe",
        "start": "2015",
        "end": "2019",
        "notes": "Candidat CFA Level II. Cursuri de evaluare și finanțe corporative."
      }
    ],
    "skills": "Modelare și prognoză financiară\nBugetare și analiza abaterilor\nEvaluare (DCF, comparabile)\nExcel (avansat) și SQL\nBloomberg Terminal\nVizualizarea datelor (Power BI)",
    "languages": "Engleză (fluent)\nHindi (fluent)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Inginer constructor",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Inginer constructor (PE) cu 7 ani de experiență în proiectarea infrastructurii rutiere și de apă. Am condus proiectarea lărgirii unei autostrăzi de 12 mile și a unui sistem de ape pluviale care deservește 8,000 de locuințe. Priceput în AutoCAD Civil 3D, estimarea costurilor și coordonarea autorizațiilor.",
    "experience": [
      {
        "role": "Inginer constructor",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Conducerea proiectării lărgirii unei autostrăzi de 12 mile, de la măsurători la documentele de construcție\nAm proiectat un sistem de ape pluviale care deservește 8,000 de locuințe, aprobat din prima de primărie\nCoordonarea autorizațiilor cu 4 agenții și gestionarea unui buget de proiectare de $2.5M\nRevizuirea și ștampilarea desenelor ca inginer profesionist autorizat"
      },
      {
        "role": "Inginer constructor junior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "iul. 2018",
        "end": "dec. 2020",
        "current": false,
        "points": "Am pregătit planuri de nivelare și drenaj pentru 20+ ansambluri rezidențiale\nAm realizat estimări de cost și măsurători cantitative pentru proiecte rutiere\nAm participat la inspecții pe șantier și am scris rapoarte de progres"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Inginerie civilă",
        "start": "2014",
        "end": "2018",
        "notes": "Licență de inginer profesionist (Washington). EIT promovat în 2018."
      }
    ],
    "skills": "Proiectarea drumurilor și a drenajului\nAutoCAD Civil 3D\nModelarea apelor pluviale\nEstimarea costurilor\nCoordonarea autorizațiilor\nProgramarea proiectelor (MS Project)",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Inginer mecanic",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Inginer mecanic cu 6 ani de experiență în proiectarea sistemelor HVAC și a echipamentelor de producție. Am redus consumul de energie cu 18% în 3 fabrici prin conducte și controale reproiectate și am condus reproiectarea unei mașini care a crescut producția cu 25%. Priceput în SolidWorks, FEA și analiză termică.",
    "experience": [
      {
        "role": "Inginer mecanic",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Proiectarea de echipamente HVAC și de producție pentru 3 fabrici cu 400+ angajați\nReducerea consumului de energie cu 18% prin reproiectarea conductelor și a secvențelor de control\nAm condus reproiectarea unei mașini care a crescut producția cu 25% fără spațiu suplimentar la sol\nEfectuarea de FEA și analiză termică pe piese noi înainte de prototipare"
      },
      {
        "role": "Inginer mecanic junior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "aug. 2019",
        "end": "ian. 2021",
        "current": false,
        "points": "Am modelat piese și ansambluri în SolidWorks pentru clienți din domeniul auto\nAm pregătit desene, liste de materiale și rapoarte de testare\nAm sprijinit construirea prototipurilor și am rezolvat probleme de potrivire în atelier"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Inginerie mecanică",
        "start": "2015",
        "end": "2019",
        "notes": "Cursuri de termodinamică, mecanica fluidelor și proiectarea mașinilor."
      }
    ],
    "skills": "Proiectare HVAC\nSolidWorks și AutoCAD\nFEA și analiză termică\nProiectarea mașinilor\nEficiență energetică\nGD&T și toleranțe",
    "languages": "Engleză (fluent)\nCoreeană (conversațional)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Inginer electrician",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Inginer electrician cu 6 ani de experiență în sisteme embedded și electronică de putere. Am proiectat plăci de control folosite acum în 50,000+ de dispozitive și am redus costul plăcii cu 22% prin reproiectarea componentelor. Priceput în Altium, C, testarea firmware-ului și conformitatea EMC.",
    "experience": [
      {
        "role": "Inginer electrician",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Proiectarea de plăci de control embedded folosite în 50,000+ de dispozitive pe an\nReducerea costului plăcii cu 22% prin reproiectarea etajului de putere și identificarea de componente alternative\nConducerea testării conformității EMC, cu promovare din prima pe 4 linii de produse\nScrierea și revizuirea firmware-ului în C pentru microcontrolere"
      },
      {
        "role": "Inginer electrician junior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "iul. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Am proiectat PCB-uri în Altium pentru clienți consumatori și industriali\nAm construit și testat prototipuri, depanând defecțiuni hardware\nAm scris proceduri de testare care au redus timpul de testare a producției cu 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Inginerie electrică",
        "start": "2015",
        "end": "2019",
        "notes": "Cursuri de sisteme embedded, electronică de putere și procesarea semnalelor."
      }
    ],
    "skills": "Sisteme embedded și proiectare PCB\nAltium Designer\nC și firmware\nElectronică de putere\nTestarea conformității EMC\nOsciloscoape și instrumente de laborator",
    "languages": "Engleză (fluent)\nGujarati (conversațional)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analist de date",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analist de date cu 4 ani de experiență în transformarea datelor de vânzări și operațiuni în decizii. Am construit dashboarduri folosite de 60+ manageri, am redus timpul de raportare lunară de la 3 zile la 4 ore și am identificat o eroare de stabilire a prețurilor în valoare de $180,000 pe an. Bun în SQL, Excel și Power BI.",
    "experience": [
      {
        "role": "Analist de date",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "ian. 2022",
        "end": "",
        "current": true,
        "points": "Construirea de dashboarduri Power BI folosite de 60+ manageri de magazine și regionali\nReducerea raportării lunare de la 3 zile la 4 ore prin fluxuri SQL automatizate\nAm identificat o eroare de stabilire a prețurilor în valoare de $180,000 pe an, auditând datele despre promoții\nPrezentarea lunară a constatărilor către echipa comercială"
      },
      {
        "role": "Analist de date junior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "aug. 2020",
        "end": "dec. 2021",
        "current": false,
        "points": "Am curățat și am unit datele de livrare din 4 sisteme într-un singur tabel de raportare\nAm creat instrumente de urmărire în Excel care au înlocuit numărătorile manuale pentru 2 echipe\nAm răspuns zilnic la întrebări punctuale despre date pentru managerii de operațiuni"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistică",
        "start": "2016",
        "end": "2020",
        "notes": "Cursuri de regresie, baze de date și vizualizarea datelor."
      }
    ],
    "skills": "SQL și curățarea datelor\nPower BI și Tableau\nExcel (avansat)\nPython (pandas)\nDesign de dashboarduri\nBazele testării A/B",
    "languages": "Engleză (fluent)\nVietnameză (conversațional)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Specialist în știința datelor",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Specialist în știința datelor cu 5 ani de experiență în construirea de modele de învățare automată pentru e-commerce. Un model de recomandare pe care l-am lansat a crescut venitul per vizită cu 12%, iar un model de abandon semnalează acum 80% dintre clienții cu risc. Bun în Python, SQL și implementarea modelelor.",
    "experience": [
      {
        "role": "Specialist în știința datelor",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Am livrat un model de recomandare care a crescut venitul per vizită cu 12%\nAm construit un model de abandon care semnalează 80% dintre clienții cu risc cu o lună mai devreme\nAm implementat modele în producție, cu fluxuri de monitorizare și de reantrenare\nPrezentarea lunară a rezultatelor modelelor către echipele de produs și marketing"
      },
      {
        "role": "Specialist junior în știința datelor",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "iul. 2020",
        "end": "ian. 2022",
        "current": false,
        "points": "Am construit modele de prognoză pentru 3 clienți din retail, cu o precizie de 90%+\nAm curățat și am pregătit seturi de date de 10M+ rânduri pentru modelare\nAm scris documentație astfel încât clienții să poată rula singuri modelele din nou"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Știința datelor",
        "start": "2018",
        "end": "2020",
        "notes": "Teză despre sistemele de recomandare. BS în matematică (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nÎnvățare automată și statistică\nSQL și Spark\nImplementarea modelelor (Docker, AWS)\nTestare A/B\nVizualizarea datelor",
    "languages": "Engleză (fluent)\nArabă (fluent)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Dezvoltator web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Dezvoltator web cu 4 ani de experiență în construirea de site-uri rapide și accesibile în HTML, CSS și JavaScript. Am reconstruit casa de marcat a unui magazin, crescând conversiile cu 18%, și întrețin 12 site-uri ale clienților cu o disponibilitate de 99.9%. Bun în design responsiv, performanță și bazele SEO.",
    "experience": [
      {
        "role": "Dezvoltator web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Construirea de site-uri responsive în HTML, CSS, JavaScript și WordPress pentru 12 clienți\nAm reconstruit casa de marcat a unui magazin, crescând conversiile cu 18%\nReducerea timpului mediu de încărcare a paginii de la 4.2s la 1.8s prin optimizarea imaginilor și a codului\nMenținerea tuturor site-urilor clienților la o disponibilitate de 99.9%, cu monitorizare și copii de rezervă"
      },
      {
        "role": "Dezvoltator web junior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "iun. 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Am construit pagini de destinație și am corectat erori pe 20+ de site-uri ale unor afaceri mici\nAm învățat Git, design responsiv și SEO de bază pe proiecte reale\nAm răspuns la e-mailurile clienților și am făcut actualizări de conținut în aceeași zi"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatică",
        "start": "2017",
        "end": "2021",
        "notes": "Cursuri de dezvoltare web, baze de date și interacțiune om-calculator."
      }
    ],
    "skills": "HTML, CSS și JavaScript\nReact și WordPress\nDesign responsiv\nOptimizarea vitezei paginii\nGit și GitHub\nSEO de bază",
    "languages": "Engleză (fluent)\nSpaniolă (fluent)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Designer grafic",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Designer grafic cu 5 ani de experiență în branding, ambalaje și design pentru rețele sociale. Am creat identități de brand pentru 25+ afaceri mici și o reproiectare de ambalaj care a crescut vânzările la raft cu 14%. Priceput în Adobe Illustrator, Photoshop și Figma.",
    "experience": [
      {
        "role": "Designer grafic",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "ian. 2022",
        "end": "",
        "current": true,
        "points": "Crearea de identități de brand, ambalaje și campanii sociale pentru 25+ clienți\nReproiectarea ambalajului pentru un brand alimentar a crescut vânzările la raft cu 14%\nProducerea a 30+ materiale sociale pe săptămână pe Instagram, TikTok și Facebook\nPrezentarea conceptelor clienților și revizuirea rapidă pe baza feedbackului"
      },
      {
        "role": "Designer grafic junior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "iul. 2020",
        "end": "dec. 2021",
        "current": false,
        "points": "Am conceput pliante, meniuri și postări sociale pentru restaurante și magazine locale\nAm pregătit fișiere gata de tipar și am verificat probele cu tipografiile\nAm construit o bibliotecă de șabloane care a redus timpul de design cu o treime"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Design grafic",
        "start": "2016",
        "end": "2020",
        "notes": "Portofoliu în branding și design de ambalaje."
      }
    ],
    "skills": "Adobe Illustrator și Photoshop\nFigma\nDesign de identitate de brand\nDesign de ambalaje\nDesign pentru rețele sociale\nProducție de tipar",
    "languages": "Engleză (fluent)\nCoreeană (conversațional)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Designer UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Designer UX cu 5 ani de experiență în cercetarea utilizatorilor și proiectarea de produse mobile și web. Am reproiectat un flux de integrare care a redus abandonul cu 35% și am desfășurat 40+ teste de utilizabilitate. Priceput în Figma, cercetarea utilizatorilor, schițe și prototipuri.",
    "experience": [
      {
        "role": "Designer UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Am reproiectat procesul mobil de integrare, reducând abandonul cu 35% în 3 luni\nDesfășurarea a 40+ teste de utilizabilitate și interviuri cu utilizatori pe an\nCrearea de schițe și prototipuri în Figma pentru 2 echipe de produs\nLucrul zilnic cu ingineri și manageri de produs la livrare"
      },
      {
        "role": "Designer UX junior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "aug. 2020",
        "end": "ian. 2022",
        "current": false,
        "points": "Am conceput ecrane și fluxuri pentru 5 aplicații ale clienților\nAm desfășurat primele teste de utilizabilitate și am redactat constatările pentru clienți\nAm construit o bibliotecă de componente care a accelerat predarea designului"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psihologie",
        "start": "2016",
        "end": "2020",
        "notes": "Certificat de design UX (General Assembly, 2020). Cursuri de interacțiune om-calculator."
      }
    ],
    "skills": "Cercetarea utilizatorilor și testarea utilizabilității\nSchițe și prototipuri (Figma)\nArhitectura informației\nSisteme de design\nCartografierea parcursului\nAteliere cu părțile interesate",
    "languages": "Engleză (fluent)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Manager de marketing",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Manager de marketing cu 8 ani de experiență în campanii B2B și de consum. Am crescut leadurile calificate cu 60% într-un an, am lansat o linie de produse care a atins $3M în vânzări în primul an și gestionez un buget anual de $500,000 pentru o echipă de 5.",
    "experience": [
      {
        "role": "Manager de marketing",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Conducerea unei echipe de 5 și a unui buget anual de marketing de $500,000\nAm crescut leadurile calificate cu 60% într-un an, prin conținut și campanii plătite\nAm lansat o linie de produse care a atins $3M în vânzări în primul an\nReducerea costului per lead cu 28% prin reconstruirea direcționării campaniilor"
      },
      {
        "role": "Specialist de marketing",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "iun. 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Am desfășurat campanii prin e-mail către 80,000 de abonați, cu o rată de deschidere de 24%\nAm gestionat conturi sociale care au crescut de la 5,000 la 40,000 de urmăritori\nAm organizat 6 standuri la târguri pe an, generând 300+ leaduri fiecare"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Cursuri de comportament al consumatorului, analiză și management de brand."
      }
    ],
    "skills": "Strategie și planificare de campanii\nMarketing de conținut și prin e-mail\nPublicitate plătită (Google, Meta)\nAnaliza marketingului (GA4)\nConducerea echipei\nGestionarea bugetului",
    "languages": "Engleză (fluent)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Manager de proiect",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Manager de proiect (PMP) cu 7 ani de experiență în livrarea de proiecte software și de construcții la timp și în buget. Am gestionat 15 proiecte în valoare de până la $4M, cu o rată de livrare la timp de 94%. Priceput în Agile, gestionarea riscurilor și comunicarea cu părțile interesate.",
    "experience": [
      {
        "role": "Manager de proiect",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Gestionarea a 15 proiecte în valoare de până la $4M, cu o rată de livrare la timp de 94%\nConducerea sprinturilor Agile pentru 3 echipe și raportarea săptămânală a progresului către conducere\nReducerea depășirilor de proiect cu 30% prin evaluări ale riscurilor făcute mai devreme\nCoordonarea furnizorilor, clienților și echipelor interne de-a lungul a 4 fusuri orare"
      },
      {
        "role": "Coordonator de proiect",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "iul. 2018",
        "end": "dec. 2020",
        "current": false,
        "points": "Am urmărit programele, bugetele și autorizațiile pentru 8 proiecte de construcții\nAm pregătit rapoarte de stare și note de ședință pentru clienți\nAm rezolvat conflicte de programare care au economisit 2 săptămâni la construcția unei școli"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Administrarea afacerilor",
        "start": "2014",
        "end": "2018",
        "notes": "Certificat PMP (2021). ScrumMaster certificat."
      }
    ],
    "skills": "Planificarea și programarea proiectelor\nAgile și Scrum\nGestionarea riscurilor\nControl bugetar\nComunicarea cu părțile interesate\nMS Project și Jira",
    "languages": "Engleză (fluent)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Manager de resurse umane",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Manager de resurse umane cu 9 ani de experiență în angajări, relații cu angajații și beneficii. Am redus timpul de angajare de la 45 la 28 de zile, am crescut retenția cu 15% și conduc HR-ul pentru 250 de angajați în 3 locații. Cunoștințe de nivelul CIPD în dreptul muncii și politici.",
    "experience": [
      {
        "role": "Manager de resurse umane",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Conducerea HR-ului pentru 250 de angajați în 3 locații, cu o echipă de 3\nReducerea timpului de angajare de la 45 la 28 de zile prin reconstruirea procesului de interviu\nAm crescut retenția cu 15% printr-un nou program de integrare și evaluare\nGestionarea relațiilor cu angajații, a reclamațiilor și a actualizărilor de politici"
      },
      {
        "role": "Generalist HR",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "iun. 2016",
        "end": "ian. 2020",
        "current": false,
        "points": "Am recrutat 120+ angajați pe an pentru hoteluri și restaurante\nAm efectuat verificări de salarizare și înscrierea la beneficii pentru 400 de angajați\nAm rezolvat dispute între angajați și am menținut fluctuația sub media industriei"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Resurse umane",
        "start": "2012",
        "end": "2016",
        "notes": "Certificat SHRM-CP. Cursuri de dreptul muncii și comportament organizațional."
      }
    ],
    "skills": "Recrutare și integrare\nRelații cu angajații\nBeneficii și salarizare\nDreptul muncii\nManagementul performanței\nHRIS (Workday, BambooHR)",
    "languages": "Engleză (fluent)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Avocat asociat",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Avocat asociat cu 6 ani de experiență în litigii comerciale și drept contractual. Am gestionat 40+ de cazuri, am câștigat hotărâri sumare în 8 și am redactat contracte în valoare de $25M. Admis în Baroul din Illinois; priceput în cercetare juridică, redactare și consilierea clienților.",
    "experience": [
      {
        "role": "Avocat asociat",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "sept. 2020",
        "end": "",
        "current": true,
        "points": "Gestionarea a 40+ cazuri de litigii comerciale, de la depunere la soluționare\nAm câștigat hotărâri sumare în 8 cazuri și am soluționat favorabil alte 20\nRedactarea și negocierea de contracte în valoare de până la $25M\nConsilierea clienților în persoană și în scris cu privire la riscuri și strategie"
      },
      {
        "role": "Grefier juridic",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "aug. 2019",
        "end": "aug. 2020",
        "current": false,
        "points": "Am cercetat jurisprudența și am redactat memorandumuri pentru 2 judecători\nAm revizuit cereri și am pregătit rezumate pentru judecători pentru 100+ audieri\nAm asistat la procese și conferințe de soluționare în toate secțiile civile"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Drept",
        "start": "2016",
        "end": "2019",
        "notes": "Admis în Baroul din Illinois (2019). Revistă de drept, redactor de articole."
      }
    ],
    "skills": "Litigii comerciale\nRedactarea și negocierea contractelor\nCercetare juridică (Westlaw, LexisNexis)\nConsilierea clienților\nDepoziții și administrarea probelor\nActe de procedură și procedură judiciară",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Farmacist clinician",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Farmacist clinician (PharmD) cu 7 ani de experiență în farmacie de spital și comunitară. Revizuiesc 100+ de prescripții pe zi, am redus evenimentele adverse medicamentoase cu 25% printr-un nou protocol de verificare și consiliez pacienții privind utilizarea sigură a medicamentelor. Autorizat în Pennsylvania.",
    "experience": [
      {
        "role": "Farmacist clinician",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "ian. 2020",
        "end": "",
        "current": true,
        "points": "Revizuirea a 100+ prescripții pe zi pentru siguranță, dozare și interacțiuni\nReducerea evenimentelor adverse medicamentoase cu 25% printr-un nou protocol de dublă verificare\nConsilierea medicilor și asistenților cu privire la alegerea medicamentelor pentru pacienții complecși\nConducerea vizitelor de gestionare a antibioticelor ale spitalului de două ori pe săptămână"
      },
      {
        "role": "Farmacist de personal",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "iul. 2018",
        "end": "dec. 2019",
        "current": false,
        "points": "Am eliberat 200+ rețete pe zi, fără nicio eroare de eliberare\nAm consiliat pacienți privind medicamentele noi, efectele secundare și păstrarea\nAm administrat vaccinuri antigripale și am efectuat măsurători ale tensiunii arteriale"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacie",
        "start": "2014",
        "end": "2018",
        "notes": "Farmacist autorizat (Pennsylvania). Specialist certificat în farmacoterapie (BCPS)."
      }
    ],
    "skills": "Revizuirea și siguranța medicamentelor\nFarmacologie clinică\nConsilierea pacientului\nSisteme de farmacie (Epic, PioneerRx)\nGestionarea responsabilă a antibioticelor\nServicii de vaccinare",
    "languages": "Engleză (fluent)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Medic stomatolog generalist",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Medic stomatolog generalist (DDS) cu 8 ani de experiență în stomatologie restauratoare, cosmetică și preventivă. Tratez 25+ pacienți pe zi într-o practică de 2,000 de pacienți, cu un scor de satisfacție a pacienților de 98%. Priceput în coroane, implanturi, tratamente de canal și aparate dentare transparente.",
    "experience": [
      {
        "role": "Medic stomatolog generalist",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Tratarea a 25+ pacienți pe zi: obturații, coroane, tratamente de canal și extracții\nMenținerea unui scor de satisfacție a pacienților de 98% în 1,200+ recenzii\nPlasarea a 15+ implanturi pe lună și gestionarea cazurilor cu aparate transparente\nSupravegherea a 2 igieniști și 4 asistenți stomatologi"
      },
      {
        "role": "Medic stomatolog asociat",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "iul. 2017",
        "end": "ian. 2019",
        "current": false,
        "points": "Am oferit stomatologie generală pentru o practică de 1,500 de pacienți\nAm introdus coroane în aceeași zi, reducând vizitele de revenire cu 40%\nAm desfășurat vizite de informare în școli despre sănătatea orală a copiilor"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Stomatologie",
        "start": "2013",
        "end": "2017",
        "notes": "Stomatolog autorizat (Arizona). Certificat Invisalign. Certificat CPR/BLS."
      }
    ],
    "skills": "Stomatologie restauratoare (coroane, obturații)\nTratament de canal radicular\nImplanturi dentare\nAparate dentare transparente\nÎngrijirea și comunicarea cu pacientul\nRadiografii digitale și CEREC",
    "languages": "Engleză (fluent)",
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
    "summary": "Fizioterapeut (DPT) cu 6 ani de experiență în reabilitare ortopedică și sportivă. Tratez 12-15 pacienți pe zi, iar 90% își ating obiectivele în ședințele planificate. Priceput în terapie manuală, prescrierea exercițiilor și testarea revenirii la sport.",
    "experience": [
      {
        "role": "Fizioterapeut",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Tratarea a 12-15 pacienți pe zi pentru traumatisme sportive, reabilitare postoperatorie și dureri de spate\n90% dintre pacienți își ating obiectivele în numărul planificat de ședințe\nConceperea testelor de revenire la sport folosite de 3 echipe locale\nMentoratul a 2 absolvenți noi și supravegherea stagiilor studenților"
      },
      {
        "role": "Fizioterapeut de personal",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "aug. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Am oferit reabilitare în regim de internare pentru pacienți postoperatori și post-AVC\nAm condus cursuri de exerciții de grup pentru 20+ pacienți în vârstă pe săptămână\nAm documentat progresul în Epic și am predat echipele de secție"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fizioterapie",
        "start": "2016",
        "end": "2019",
        "notes": "Fizioterapeut autorizat (Oregon). Specialist clinic ortopedic (OCS)."
      }
    ],
    "skills": "Reabilitare ortopedică și sportivă\nTerapie manuală\nPrescrierea exercițiilor\nTestarea revenirii la sport\nEducația pacientului\nDocumentare (Epic)",
    "languages": "Engleză (fluent)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Bucătar-șef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Bucătar-șef cu 10 ani de experiență în bucătării creole și americane moderne. Conduc o brigadă de 12 într-un restaurant cu 200 de locuri, am redus costurile cu alimentele cu 15% prin comenzi mai stricte și am câștigat „Best New Menu” din ghidul culinar al orașului în 2025.",
    "experience": [
      {
        "role": "Bucătar-șef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Conducerea unei brigăzi de 12 într-un restaurant cu 200 de locuri, servind 300+ de clienți pe seară\nReducerea costurilor cu alimentele cu 15% prin comenzi mai stricte și un meniu de sezon\nAm câștigat „Best New Menu” din ghidul culinar al orașului în 2025\nCrearea meniurilor, instruirea bucătarilor și conducerea fluxului de servire vineri și sâmbătă"
      },
      {
        "role": "Sous-chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "iun. 2017",
        "end": "dec. 2020",
        "current": false,
        "points": "Am condus bucătăria când bucătarul-șef era plecat, acoperind 150 de clienți pe seară\nAm gestionat stocurile, comenzile și relațiile cu furnizorii\nAm instruit 8 bucătari de linie și am redus fluctuația personalului cu o treime"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Arte culinare",
        "start": "2014",
        "end": "2016",
        "notes": "Certificat ServSafe Food Protection Manager."
      }
    ],
    "skills": "Crearea meniurilor și calculul costurilor\nBucătărie creolă și americană modernă\nConducerea bucătăriei (brigadă de 12)\nSiguranța alimentelor (ServSafe)\nGestionarea furnizorilor\nCatering pentru banchete și evenimente",
    "languages": "Engleză (fluent)\nSpaniolă (fluent)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Polițist",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Polițist cu 8 ani de experiență în patrulare, poliție comunitară și investigații. Răspund la 30+ apeluri pe săptămână, cu mențiuni de onoare pentru dezescaladare și implicare comunitară. Instruit în intervenție în criză, prim ajutor și redactarea rapoartelor.",
    "experience": [
      {
        "role": "Polițist",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "iun. 2019",
        "end": "",
        "current": true,
        "points": "Patrularea unui sector de 40,000 de locuitori, răspunzând la 30+ apeluri pe săptămână\nAm primit 2 mențiuni de onoare pentru dezescaladare și implicare comunitară\nInvestigarea furturilor și agresiunilor, redactând rapoarte folosite în 50+ de urmăriri penale\nMentoratul a 3 ofițeri noi pe parcursul instruirii pe teren"
      },
      {
        "role": "Ofițer de patrulă",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "aug. 2017",
        "end": "mai 2019",
        "current": false,
        "points": "Am patrulat drumurile județene și am răspuns la apelurile de urgență\nAm înmânat acte judiciare și am asistat la transportul deținuților\nAm finalizat instruirea în intervenție în criză și prim ajutor"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificate",
        "field": "Aplicarea legii",
        "start": "2017",
        "end": "2017",
        "notes": "Absolvent al Ohio Peace Officer Training Academy. Instruit în echipa de intervenție în criză."
      }
    ],
    "skills": "Patrulare și intervenție de urgență\nPoliție comunitară\nIntervenție în criză și dezescaladare\nRedactarea rapoartelor\nInvestigații\nPrim ajutor și CPR",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Pompier / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Pompier și EMT cu 7 ani de experiență în stingerea incendiilor, salvare și intervenție medicală de urgență. Am răspuns la 900+ de apeluri, inclusiv incendii de clădiri, salvări auto și urgențe medicale. Instruit HazMat, cu un registru de siguranță curat.",
    "experience": [
      {
        "role": "Pompier / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar. 2020",
        "end": "",
        "current": true,
        "points": "Răspuns la 900+ apeluri de incendiu, salvare și medicale într-un sector cu 3 stații\nAcordarea de îngrijiri medicale de urgență ca EMT certificat la 60% dintre apeluri\nInstruit HazMat; conducerea decontaminării la incidente chimice\nInstruirea noilor recruți în manipularea furtunurilor, scărilor și tehnicilor de căutare"
      },
      {
        "role": "Pompier voluntar",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "iun. 2018",
        "end": "feb. 2020",
        "current": false,
        "points": "Am intervenit ca voluntar la incendii de vegetație și de clădiri\nAm finalizat instruirea Firefighter I & II și EMT-Basic\nAm ajutat la desfășurarea discuțiilor comunitare despre siguranța la incendiu în școli"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificate",
        "field": "Știința incendiilor",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. Certificat EMT-Basic. Instruit în operațiuni HazMat."
      }
    ],
    "skills": "Stingerea incendiilor și salvare\nÎngrijiri medicale de urgență (EMT)\nOperațiuni HazMat\nScări, furtunuri și ventilație\nSiguranța comunitară la incendiu\nLucru în echipă sub presiune",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Instalator autorizat",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Instalator maestru autorizat, cu 11 ani de experiență în instalații sanitare rezidențiale și comerciale. Am finalizat 600+ lucrări pe an, de la instalații brute la montarea centralelor, cu o rată de rezolvare din prima vizită de 98%. Priceput în montarea țevilor, desfundarea canalizărilor și conformitatea cu normele.",
    "experience": [
      {
        "role": "Instalator maestru",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "ian. 2019",
        "end": "",
        "current": true,
        "points": "Realizarea a 600+ de lucrări rezidențiale și comerciale pe an\nInstalarea de centrale, boilere și instalații brute complete pentru băi\nMenținerea unei rate de rezolvare din prima vizită de 98% la apelurile de service\nSupravegherea a 3 ucenici și aprobarea muncii lor"
      },
      {
        "role": "Instalator calfă",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "iun. 2014",
        "end": "dec. 2018",
        "current": false,
        "points": "Am realizat instalațiile sanitare pentru construcții noi, la 40+ case pe an\nAm desfundat canalizări și am reparat scurgeri pentru locuințe și restaurante\nAm învățat instalațiile de gaz și prevenirea refluxului"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificate",
        "field": "Tehnologie de instalații sanitare",
        "start": "2013",
        "end": "2014",
        "notes": "Licență de instalator maestru (Tennessee). Certificat în prevenirea refluxului."
      }
    ],
    "skills": "Instalații sanitare rezidențiale și comerciale\nMontarea țevilor și lipire\nDesfundarea canalizărilor și inspecție cu camera\nInstalarea centralelor și boilerelor\nInstalații de gaz\nConformitatea cu normele sanitare",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Dulgher calfă",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Dulgher calfă cu 9 ani de experiență în structuri, lucrări de finisare și dulapuri la comandă. Am montat structurile a 30+ case și am montat bucătării în 60+ locuințe, cu o reputație pentru măsurători exacte și finisaje curate. Priceput în citirea planurilor și lucrul conform normelor.",
    "experience": [
      {
        "role": "Dulgher calfă",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Montarea structurilor pentru 30+ case și montarea bucătăriilor în 60+ locuințe\nConstruirea de dulapuri și elemente decorative la comandă, cu o toleranță de 1/16 inch\nCitirea și respectarea planurilor arhitecturale, semnalând erorile înainte să coste bani\nInstruirea a 2 ucenici în tehnici de structură și finisare"
      },
      {
        "role": "Ucenic dulgher",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "iun. 2016",
        "end": "ian. 2019",
        "current": false,
        "points": "Am ajutat la structuri de rezistență, gips-carton și pardoseli la renovări\nAm învățat să folosesc în siguranță ferăstraie, freze și pistoale de cuie\nAm finalizat 8,000 de ore de ucenicie și am promovat examenul de calfă"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificate",
        "field": "Dulgherie",
        "start": "2015",
        "end": "2016",
        "notes": "Dulgher calfă. Certificat OSHA 10."
      }
    ],
    "skills": "Lucrări de structură și rezistență\nTâmplărie de finisare și elemente decorative\nDulapuri la comandă\nCitirea planurilor arhitecturale\nUnelte electrice și siguranță\nGips-carton și pardoseli",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Profesor pentru învățământul secundar (matematică)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Profesor pentru învățământul secundar cu 8 ani de experiență în predarea matematicii claselor 9-12. Am crescut ratele de promovare la algebră de la 64% la 83% și antrenez echipa de matematică până la 2 finale statale. Priceput în instruire diferențiată, pregătirea pentru examene și comunicarea cu părinții.",
    "experience": [
      {
        "role": "Profesor de matematică (clasele 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "aug. 2019",
        "end": "",
        "current": true,
        "points": "Predarea algebrei, geometriei și pre-calculului la 120 de elevi din 5 clase\nAm crescut ratele de promovare la algebră de la 64% la 83% în 3 ani\nAntrenarea echipei de matematică până la 2 finale statale\nConducerea meditațiilor după școală pentru 30 de elevi pe săptămână"
      },
      {
        "role": "Profesor de matematică (clasele 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "aug. 2017",
        "end": "iun. 2019",
        "current": false,
        "points": "Am predat algebră și geometrie la 100 de elevi pe an\nAm introdus teste săptămânale care au redus la jumătate golurile la teme\nAm organizat primul târg de matematică al școlii, cu 200 de elevi"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Educație matematică",
        "start": "2013",
        "end": "2017",
        "notes": "Licență statală de predare (New Hampshire, clasele 7-12, matematică)."
      }
    ],
    "skills": "Predarea matematicii (algebră până la pre-calcul)\nPregătirea pentru examene\nInstruire diferențiată\nGestionarea clasei\nComunicarea cu părinții\nGoogle Classroom și Desmos",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Profesor pentru învățământul preșcolar",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Profesor pentru învățământul preșcolar cu 6 ani de experiență în îngrijirea copiilor cu vârsta de 3-5 ani. Priceput în învățare prin joc, îndrumarea comportamentului și comunicarea cu părinții. Am creat un program de fonetică care a îmbunătățit scorurile de pregătire pentru școală în întreaga mea clasă.",
    "experience": [
      {
        "role": "Profesor pentru învățământul preșcolar",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "aug. 2020",
        "end": "",
        "current": true,
        "points": "Predarea și îngrijirea unei clase de 18 copii cu vârsta de 3-5 ani\nAm creat un program de fonetică care a îmbunătățit scorurile de pregătire pentru școală în întreaga clasă\nPlanificarea temelor săptămânale, a activităților practice și a jocurilor în aer liber\nÎmpărtășirea de actualizări zilnice și rapoarte de progres pe trimestru cu părinții"
      },
      {
        "role": "Profesor asistent pentru învățământul preșcolar",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "iun. 2018",
        "end": "iul. 2020",
        "current": false,
        "points": "Am sprijinit profesorul principal la o clasă de 20 de copii\nAm condus zilnic ora de povești, cântece și activități artistice\nAm menținut registrele de siguranță și igienă la standardele statului"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate Degree",
        "field": "Educația timpurie a copilului",
        "start": "2016",
        "end": "2018",
        "notes": "Acreditare Child Development Associate (CDA). Certificat de prim ajutor și CPR."
      }
    ],
    "skills": "Învățare prin joc\nÎndrumarea comportamentului\nFonetică și alfabetizare timpurie\nComunicarea cu părinții\nSiguranța în clasă\nPlanificarea artelor și activităților practice",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Asistent social pentru copii și familie",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Asistent social autorizat, cu 7 ani de experiență în sprijinirea copiilor și familiilor. Gestionez un volum de 25 de familii, coordonez servicii între școli și furnizori de sănătate și întocmesc rapoarte pentru instanță pe care judecătorii se bazează. Priceput în evaluare, suport în criză și protecție.",
    "experience": [
      {
        "role": "Asistent social pentru copii și familie",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "ian. 2020",
        "end": "",
        "current": true,
        "points": "Gestionarea unui volum de 25 de familii, vizitând săptămânal locuințe și școli\nÎntocmirea rapoartelor pentru instanță și depunerea mărturiei în instanța de familie\nCoordonarea sprijinului pentru locuințe, sănătate și școală pentru familii vulnerabile\nReducerea timpului de așteptare pentru evaluare cu 20% printr-un nou sistem de triaj"
      },
      {
        "role": "Lucrător social",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "iul. 2018",
        "end": "dec. 2019",
        "current": false,
        "points": "Am sprijinit 40+ familii în locuințe temporare cu beneficii și îndrumări\nAm condus ateliere săptămânale de parenting și bugetare\nAm menținut notele de caz precise pentru audituri și rapoarte de finanțare"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Asistență socială",
        "start": "2016",
        "end": "2018",
        "notes": "Asistent social autorizat (Ohio). Cursuri de bunăstarea copilului și sisteme familiale."
      }
    ],
    "skills": "Gestionarea cazurilor (25 de familii)\nProtecția copilului\nRapoarte pentru instanța de familie\nSuport în situații de criză\nCoordonare între agenții\nÎndrumări pentru beneficii și locuințe",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Asistent juridic",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Asistent juridic cu 6 ani de experiență în suport pentru litigii și depuneri corporative. Gestionez administrarea probelor pentru 30+ cazuri, redactez acte de procedură și contracte și respect termenele de depunere cu un registru de 100% la timp. Priceput în Westlaw, e-discovery și software de gestionare a cazurilor.",
    "experience": [
      {
        "role": "Asistent juridic",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Gestionarea administrării probelor pentru 30+ cazuri de litigii, revizuind 10,000+ documente\nRedactarea de acte de procedură, cereri și contracte pentru revizuirea avocatului\nMenținerea unui registru de 100% la timp pentru acte de procedură și termene în instanță\nCoordonarea martorilor și pregătirea dosarelor de proces"
      },
      {
        "role": "Asistent juridic",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "aug. 2019",
        "end": "ian. 2021",
        "current": false,
        "points": "Interviuri de primire pentru 20+ clienți pe săptămână\nAm pregătit formulare și depuneri pentru cazuri de locuință și familie\nAm tradus documente juridice pentru clienți vorbitori de spaniolă"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate Degree",
        "field": "Studii paralegale",
        "start": "2017",
        "end": "2019",
        "notes": "Paralegal certificat NALA (CP). Program aprobat de ABA."
      }
    ],
    "skills": "Suport în litigii și administrarea probelor\nRedactare juridică\nE-discovery (Relativity)\nGestionarea cazurilor (Clio)\nActe de procedură și termene în instanță\nCercetare juridică (Westlaw)",
    "languages": "Engleză (fluent)\nSpaniolă (fluent)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Funcționar contabil",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Funcționar contabil cu 5 ani de experiență în conturi de plătit, facturare și reconciliări bancare. Procesez 300+ facturi pe lună cu o precizie de 99.8% și mențin registrele curate pentru închiderea de lună. Priceput în QuickBooks, Excel și suport pentru salarizare.",
    "experience": [
      {
        "role": "Funcționar contabil",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Procesarea a 300+ facturi de furnizori pe lună, cu o precizie de 99.8%\nReconcilierea a 6 conturi bancare săptămânal și semnalarea diferențelor în aceeași zi\nPregătirea datelor de salarizare pentru 45 de angajați și urmărirea plăților întârziate ale clienților\nMenținerea registrelor ordonate pentru auditul de sfârșit de an, fără nicio constatare"
      },
      {
        "role": "Asistent contabil",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "iun. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Am introdus zilnic în QuickBooks facturile de vânzare și chitanțele\nAm răspuns la întrebările furnizorilor despre plăți, prin telefon și e-mail\nAm îndosariat documente și am menținut arhiva la zi"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificate",
        "field": "Contabilitate primară",
        "start": "2018",
        "end": "2019",
        "notes": "Utilizator certificat QuickBooks."
      }
    ],
    "skills": "Conturi de plătit și de încasat\nReconciliări bancare\nFacturare (300+ pe lună)\nQuickBooks și Excel\nSuport pentru salarizare\nIntroducere de date (65 wpm)",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Asistent administrativ",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Asistent administrativ cu 6 ani de experiență în menținerea bunei funcționări a birourilor. Gestionez calendarele pentru 4 manageri, organizez călătorii și ședințe și mă ocup de 100+ e-mailuri pe zi. Cunoscut pentru precizie, discreție și calm sub presiunea termenelor limită.",
    "experience": [
      {
        "role": "Asistent administrativ",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Gestionarea calendarelor, călătoriilor și ședințelor pentru 4 manageri seniori\nGestionarea a 100+ e-mailuri pe zi, redactând răspunsuri și marcând prioritățile\nPregătirea documentelor pentru consiliu și întocmirea proceselor-verbale la ședințele lunare\nGestionarea consumabilelor de birou și a comenzilor către furnizori, reducând costurile cu 12%"
      },
      {
        "role": "Recepționer",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "aug. 2019",
        "end": "dec. 2020",
        "current": false,
        "points": "Am primit 60+ pacienți pe zi și am gestionat registrul de programări\nAm răspuns la telefon și m-am ocupat de întrebări privind asigurările\nAm menținut dosarele pacienților precise și confidențiale"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate Degree",
        "field": "Administrarea biroului",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Gestionarea calendarului și a călătoriilor\nE-mail și corespondență\nProcese-verbale ale ședințelor\nMicrosoft Office (Word, Excel, Outlook)\nIntroducere de date (70 wpm)\nConsumabile de birou și furnizori",
    "languages": "Engleză (fluent)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Casier bancar",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Casier bancar cu 4 ani de experiență, servind 80+ de clienți pe zi cu precizie și grijă. Sertar de numerar echilibrat la cent pe parcursul a 3 ani, fără niciun deficit. Priceput în depozite, retrageri, verificări antifraudă și îndrumarea clienților către produsele potrivite.",
    "experience": [
      {
        "role": "Casier bancar",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Servirea a 80+ clienți pe zi: depozite, retrageri, plăți și transferuri\nSertar de numerar echilibrat la cent timp de 3 ani, fără niciun deficit\nDepistarea și oprirea a 12 tentative de fraudă, salvând clienților $90,000+\nÎndrumarea clienților către produse de economisire și împrumut, atingând țintele de recomandări trimestrial"
      },
      {
        "role": "Asociat relații clienți",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "iun. 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Am deschis conturi noi și am emis carduri de debit pentru membri\nAm răspuns la întrebări telefonice despre solduri și extrase\nAm ajutat membrii să-și configureze serviciile bancare online și mobile"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate Degree",
        "field": "Afaceri",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Manipularea și echilibrarea numerarului\nDepozite, retrageri și plăți\nDetectarea fraudelor\nRelații cu clienții\nSoftware bancar (Fiserv)\nRecomandări de produse",
    "languages": "Engleză (fluent)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Manager de vânzări",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Manager de vânzări cu 10 ani de experiență în conducerea unor echipe de până la 15 reprezentanți. Am crescut venitul regional de la $4M la $7.5M în 3 ani, am ridicat rata de câștig de la 22% la 34% și am redus fluctuația reprezentanților la jumătate printr-un coaching și o integrare mai bune.",
    "experience": [
      {
        "role": "Manager regional de vânzări",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Conducerea unei echipe de 15 reprezentanți de vânzări în Texas și Oklahoma\nAm crescut venitul regional de la $4M la $7.5M în 3 ani\nAm ridicat rata de câștig de la 22% la 34% printr-un coaching mai bun și revizuiri ale fluxului de vânzări\nAm redus fluctuația reprezentanților la jumătate printr-un nou program de integrare"
      },
      {
        "role": "Reprezentant de vânzări",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "iun. 2015",
        "end": "dec. 2020",
        "current": false,
        "points": "Am vândut echipamente industriale către 80+ conturi, atingând cota 5 ani la rând\nCel mai bun reprezentant din regiune timp de 3 ani la rând\nAm construit o rețea de recomandări care a adus 25% din afacerile noi"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Cursuri de management al vânzărilor și negociere."
      }
    ],
    "skills": "Conducerea echipei de vânzări (15 reprezentanți)\nCreșterea veniturilor și prognoză\nGestionarea fluxului de vânzări (Salesforce)\nCoaching și integrare\nNegociere\nPlanificarea teritoriului",
    "languages": "Engleză (fluent)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Manager de construcții",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Manager de construcții cu 12 ani de experiență în livrarea de proiecte comerciale și rezidențiale în valoare de până la $12M. Am finalizat 20+ proiecte cu o rată de livrare la timp de 95%, zero accidente cu incapacitate pe șantierele mele și bugete menținute în limita a 3%. Priceput în planificare, gestionarea subcontractanților și siguranță.",
    "experience": [
      {
        "role": "Manager de construcții",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Livrarea de proiecte comerciale și rezidențiale în valoare de până la $12M\nAm finalizat 20+ proiecte cu o rată de livrare la timp de 95% și bugete încadrate în 3%\nGestionarea a 30+ subcontractanți și 50 de muncitori în 3 șantiere active\nZero accidente cu incapacitate pe toate șantierele în 4 ani"
      },
      {
        "role": "Supervizor de șantier",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "iun. 2013",
        "end": "ian. 2020",
        "current": false,
        "points": "Am condus operațiunile zilnice de șantier pentru construcții de birouri și retail\nAm coordonat livrări, inspecții și programe ale subcontractanților\nAm menținut registrele de siguranță curate și am trecut fiecare inspecție OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Construcții civile",
        "start": "2009",
        "end": "2013",
        "notes": "Certificat OSHA 30. Candidat CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Programarea proiectelor (MS Project, Procore)\nControl bugetar\nGestionarea subcontractanților\nSiguranța pe șantier (OSHA 30)\nCitirea planurilor\nRaportare către clienți",
    "languages": "Engleză (fluent)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Asistent medical certificat",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Asistent medical certificat cu 5 ani de experiență în medicină de familie și îngrijiri de urgență. Pregătesc 25+ pacienți pe zi, măsor funcțiile vitale, recoltez sânge și gestionez recepția, cu un scor de satisfacție a pacienților de 97%. Priceput în EHR, flebotomie și verificări de asigurare.",
    "experience": [
      {
        "role": "Asistent medical certificat",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "apr. 2021",
        "end": "",
        "current": true,
        "points": "Pregătirea a 25+ pacienți pe zi: funcții vitale, istoric și pregătirea examinărilor\nRecoltarea sângelui și efectuarea analizelor de laborator de bază, cu o rată de succes din prima înțepătură de 99%\nGestionarea recepției, a programărilor și a verificărilor de asigurare\nMenținerea unui scor de satisfacție a pacienților de 97% în 800+ sondaje"
      },
      {
        "role": "Asistent medical",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "aug. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Am triat pacienți prezentați fără programare și am asistat medicii la proceduri minore\nAm administrat vaccinuri și m-am ocupat de recoltarea probelor\nAm menținut sălile de examinare aprovizionate, curate și pregătite între pacienți"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificate",
        "field": "Asistență medicală",
        "start": "2018",
        "end": "2019",
        "notes": "Asistent medical certificat (CMA, AAMA). Certificat BLS. Instruit în flebotomie."
      }
    ],
    "skills": "Primirea pacientului și funcțiile vitale\nFlebotomie\nEHR (eClinicalWorks)\nVaccinări\nVerificarea asigurărilor\nGestionarea recepției",
    "languages": "Engleză (fluent)\nSpaniolă (fluent)",
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
    "summary": "Elev în ultimul an de liceu, motivat, cu note mari și experiență de muncă part-time. Învăț repede, sunt de încredere și mă descurc bine cu oamenii. Caut un prim rol full-time sau un loc de muncă part-time în paralel cu facultatea.",
    "experience": [
      {
        "role": "Asistent de vânzări part-time",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "sept. 2024",
        "end": "",
        "current": true,
        "points": "Servirea a 50+ clienți pe tură în weekenduri și după școală\nManipularea numerarului, reaprovizionarea rafturilor și menținerea ordinii pe standuri\nDe încredere pentru deschiderea magazinului sâmbătă dimineața"
      },
      {
        "role": "Meditator voluntar",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "ian. 2024",
        "end": "iun. 2025",
        "current": false,
        "points": "Am meditat elevi mai mici la matematică de două ori pe săptămână\nAm ajutat la organizarea programului de lectură de vară pentru 40 de copii"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diplomă de liceu",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Tabel de onoare, 3 ani. Căpitan al echipei de dezbateri."
      }
    ],
    "skills": "Relații cu clienții\nManipularea numerarului\nLucru în echipă\nGestionarea timpului\nMicrosoft Office\nVorbit în public (echipa de dezbateri)",
    "languages": "Engleză (fluent)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Absolvent recent \u2014 Administrarea afacerilor",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Absolvent recent de administrarea afacerilor, cu experiență de stagiu în marketing și operațiuni. Am organizat un concurs de afaceri în campus cu 200 de participanți și am finalizat un stagiu de 6 luni în care am redus timpul de raportare la jumătate. Doresc să încep o carieră full-time și învăț repede.",
    "experience": [
      {
        "role": "Stagiar de marketing",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "ian. 2025",
        "end": "iun. 2025",
        "current": false,
        "points": "Am gestionat conturile sociale ale companiei, crescând urmăritorii de la 2,000 la 6,500\nAm construit un dashboard de raportare care a redus la jumătate timpul săptămânal de raportare\nAm scris 20 de articole de blog care au adus 15,000+ citiri"
      },
      {
        "role": "Coordonator de voluntari pentru evenimente",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "sept. 2024",
        "end": "mai 2025",
        "current": false,
        "points": "Am organizat un concurs de afaceri cu 200 de participanți și 12 jurați\nAm gestionat un buget de $5,000 și o echipă de 8 voluntari"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Administrarea afacerilor",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Lista decanului, 2 ani. Proiect de final de studii despre marketingul afacerilor mici."
      }
    ],
    "skills": "Marketing pe rețele sociale\nExcel și Google Sheets\nCompetențe de prezentare\nOrganizarea de evenimente\nLucru în echipă\nAnaliză de date de bază",
    "languages": "Engleză (fluent)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Asociat de marketing junior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Asociat de marketing junior cu 2 ani de experiență în conținut, e-mail și rețele sociale. Am crescut newsletterul unui client de la 1,000 la 4,000 de abonați și desfășor campanii cu o rată medie de deschidere de 22%. Pregătit pentru mai multă responsabilitate și un portofoliu mai mare de conturi.",
    "experience": [
      {
        "role": "Asociat de marketing junior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "iul. 2024",
        "end": "",
        "current": true,
        "points": "Am crescut newsletterul unui client de la 1,000 la 4,000 de abonați în 14 luni\nScrierea și programarea a 12 postări sociale pe săptămână pentru 4 clienți\nDesfășurarea de campanii prin e-mail cu o rată medie de deschidere de 22%\nRaportarea lunară a rezultatelor campaniilor către clienți"
      },
      {
        "role": "Stagiar de marketing",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "ian. 2024",
        "end": "iun. 2024",
        "current": false,
        "points": "Am scris descrieri de produse pentru 200+ articole pe site-ul companiei\nAm ajutat la desfășurarea unei campanii de reduceri de primăvară care a crescut comenzile online cu 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Comunicare",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Cursuri de marketing digital și scriere media."
      }
    ],
    "skills": "Redactare de conținut\nMarketing prin e-mail (Mailchimp)\nGestionarea rețelelor sociale\nGoogle Analytics\nCanva\nRaportare către clienți",
    "languages": "Engleză (fluent)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Supervizor de operațiuni",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Supervizor de operațiuni cu 8 ani de experiență în conducerea echipelor de depozit de 20-30 de persoane. Am redus erorile de culegere cu 30%, am ridicat expedierile la timp de la 90% la 97% și am instruit 15 angajați noi. Pregătit pentru un rol de manager de operațiuni, cu o locație și un buget mai mari.",
    "experience": [
      {
        "role": "Supervizor de operațiuni",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Supravegherea a 25 de angajați de depozit în 2 schimburi, într-o locație de 90,000 sq ft\nReducerea erorilor de culegere cu 30% prin noi rutine de verificare și scanarea codurilor de bare\nAm ridicat expedierile la timp de la 90% la 97% în 2 ani\nAm instruit 15 angajați noi și am promovat 3 în roluri de lideri de echipă"
      },
      {
        "role": "Lider de echipă",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "iun. 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Am condus o echipă de 10 culegători și ambalatori în tura de noapte\nAm introdus un grafic de ture care a redus orele suplimentare cu 20%, fără termene ratate\nAm condus instruiri de siguranță și am menținut echipa fără accidente timp de 2 ani"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Managementul lanțului de aprovizionare",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Conducerea echipei (25 de angajați)\nOperațiuni de depozit\nÎmbunătățirea proceselor\nManagementul siguranței\nControlul stocurilor\nWMS și Excel",
    "languages": "Engleză (fluent)\nHindi (conversațional)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Manager de proiect senior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Manager de proiect senior cu 14 ani de experiență în livrarea de proiecte software în valoare de până la $8M. Am condus 30+ proiecte cu o rată de livrare la timp de 92%, am construit un PMO de la zero și am mentorat 10 manageri de proiect. Cunoscut pentru livrare calmă sub presiune și raportare onestă către conducere.",
    "experience": [
      {
        "role": "Manager de proiect senior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "ian. 2019",
        "end": "",
        "current": true,
        "points": "Livrarea de proiecte software în valoare de până la $8M, cu o rată de livrare la timp de 92%\nAm construit PMO-ul companiei de la zero: șabloane, raportare și guvernanță\nMentoratul a 10 manageri de proiect și conducerea comunității lunare de PM\nRaportarea directă către CTO pentru un program de 40 de persoane"
      },
      {
        "role": "Manager de proiect",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "iun. 2012",
        "end": "dec. 2018",
        "current": false,
        "points": "Am gestionat 20+ proiecte pentru clienți din retail și sănătate\nAm introdus practici Agile care au redus timpul de livrare cu 25%\nAm crescut 2 conturi cheie de la $500k la $2M în venit anual"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Sisteme informaționale",
        "start": "2008",
        "end": "2012",
        "notes": "Certificat PMP (2015). ScrumMaster certificat. Cursuri MBA (2018-2019, nefinalizate)."
      }
    ],
    "skills": "Livrare de programe și proiecte\nConfigurare și guvernanță PMO\nAgile și Waterfall\nControl bugetar ($8M)\nRaportare executivă\nMentorat de echipă",
    "languages": "Engleză (fluent)\nSpaniolă (conversațional)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Director operațional",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Director operațional cu 18 ani de experiență în extinderea operațiunilor pentru companii de retail și logistică. Am crescut o operațiune de 200 de persoane la 900 de persoane în 6 locații, am ridicat marja EBITDA de la 8% la 14% și am condus 2 achiziții. Experiență în raportarea la nivel de consiliu și relații cu investitorii.",
    "experience": [
      {
        "role": "Director operațional",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "ian. 2021",
        "end": "",
        "current": true,
        "points": "Conducerea operațiunilor pentru 900 de persoane în 6 locații și un buget de $180M\nAm ridicat marja EBITDA de la 8% la 14% în 3 ani\nAm condus 2 achiziții și am integrat ambele echipe în decurs de 6 luni\nRaportarea lunară către consiliu privind operațiunile, riscul și creșterea"
      },
      {
        "role": "Vicepreședinte de operațiuni",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "iun. 2014",
        "end": "dec. 2020",
        "current": false,
        "points": "Am extins operațiunile de la 200 la 600 de persoane în 4 locații\nAm deschis 3 centre de distribuție la timp și sub buget\nAm construit echipa de conducere care conduce și astăzi afacerea"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Administrarea afacerilor",
        "start": "2010",
        "end": "2012",
        "notes": "BS în economie, NYU (2006). Curs de guvernanță corporativă (2020)."
      }
    ],
    "skills": "Operațiuni la scară (900 de persoane)\nResponsabilitate pentru P&L ($180M)\nFuziuni și achiziții\nRaportare către consiliu\nStrategie de creștere\nConstruirea echipei de conducere",
    "languages": "Engleză (fluent)",
    "template": "executive"
  }
};
});
