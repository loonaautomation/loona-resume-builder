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
      "title": "Infermiere",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Infermiere con 6 anni di esperienza in reparti medico-chirurgici e di telemetria. Competente in valutazione dei pazienti, terapia IV, somministrazione di farmaci e cartelle cliniche elettroniche. Noto per una comunicazione calma e chiara con pazienti e famiglie in situazioni di forte pressione.",
    "experience": [
      {
        "role": "Infermiere",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "giu 2021",
        "end": "",
        "current": true,
        "points": "Assistere 5-6 pazienti per turno in un reparto medico-chirurgico da 32 posti letto, inclusi valutazione, somministrazione di farmaci e cura delle ferite\nFormare e fare da mentore a 4 nuovi infermieri laureati, riducendo il loro tempo di orientamento di 2 settimane\nRidotti gli errori farmacologici nell'unità del 18% introducendo una routine di doppio controllo al passaggio di consegne\nDocumentare tutta l'assistenza con precisione nelle cartelle cliniche elettroniche Epic"
      },
      {
        "role": "Infermiere di staff",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "ago 2019",
        "end": "mag 2021",
        "current": false,
        "points": "Gestito il triage per 40+ pazienti walk-in al giorno, dando priorità ai casi urgenti per cure in giornata\nSomministrate vaccinazioni e screening sanitari in eventi mensili di sensibilizzazione nella comunità\nCoordinati gli indirizzamenti a specialisti e seguiti i risultati degli esami"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Infermieristica",
        "start": "2015",
        "end": "2019",
        "notes": "Patente da infermiere (Texas). Certificato BLS e ACLS."
      }
    ],
    "skills": "Valutazione dei pazienti\nTerapia IV e somministrazione di farmaci\nCartelle cliniche elettroniche (Epic)\nMonitoraggio telemetrico\nEducazione dei pazienti e delle famiglie\nControllo delle infezioni",
    "languages": "Inglese (fluente)\nSpagnolo (colloquiale)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Sviluppatore software",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Sviluppatore software con 5 anni di esperienza nella creazione di applicazioni web in Python e JavaScript. Rilasciate funzionalità usate da 200,000+ utenti, ridotti i tempi di risposta API del 40% e guidata la migrazione di un monolito a microservizi. Solido in test, revisione del codice e documentazione chiara.",
    "experience": [
      {
        "role": "Sviluppatore software",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Sviluppare e mantenere funzionalità web rivolte ai clienti in Python (Django) e React, al servizio di 200,000+ utenti\nRidotto il tempo medio di risposta API da 850 ms a 500 ms aggiungendo caching e correggendo le query lente\nGuidata la migrazione del servizio di fatturazione a microservizi con zero tempi di fermo\nEsaminare 10+ richieste pull a settimana e fare da mentore a 2 sviluppatori junior"
      },
      {
        "role": "Sviluppatore junior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "lug 2020",
        "end": "feb 2022",
        "current": false,
        "points": "Create dashboard interne in JavaScript che hanno sostituito i fogli di calcolo manuali per 3 team\nScritti test automatizzati che hanno alzato la copertura dal 45% al 78%\nCorretti 120+ bug nel prodotto nel primo anno"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatica",
        "start": "2016",
        "end": "2020",
        "notes": "Corsi in basi di dati, algoritmi e sistemi operativi."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript e React\nPostgreSQL e Redis\nAPI REST e microservizi\nGit e CI/CD\nTest automatizzati (pytest, Jest)",
    "languages": "Inglese (fluente)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Insegnante di scuola primaria",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Insegnante di scuola primaria con 7 anni di esperienza nell'insegnamento alle classi 3-5. Competente in didattica differenziata, gestione della classe e comunicazione con i genitori. Alzata la competenza di lettura della mia classe dal 58% all'81% in due anni scolastici.",
    "experience": [
      {
        "role": "Insegnante di scuola primaria (Classe 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "ago 2020",
        "end": "",
        "current": true,
        "points": "Insegnare lettura, matematica e scienze a una classe di 26 alunni, di cui 5 con piani di apprendimento individuali\nAlzata la competenza di lettura della classe dal 58% all'81% in due anni grazie a gruppi di lettura guidata\nGestire una newsletter settimanale per i genitori e riunioni trimestrali sui progressi per ogni famiglia\nGuidare il club di lettura dell'istituto scolastico per 40 alunni delle classi 3-5"
      },
      {
        "role": "Insegnante di scuola primaria (Classe 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "ago 2018",
        "end": "giu 2020",
        "current": false,
        "points": "Pianificate e tenute lezioni quotidiane per 24 alunni in tutte le materie principali\nIntrodotte routine comportamentali che hanno dimezzato le interruzioni in classe\nOrganizzata la fiera scientifica del gruppo annuale con 120 alunni e 80 genitori"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Educazione primaria",
        "start": "2014",
        "end": "2018",
        "notes": "Patente di insegnamento statale (Ohio, classi K-5). Abilitazione alla lettura."
      }
    ],
    "skills": "Didattica differenziata\nGestione della classe\nGruppi di lettura guidata\nComunicazione con i genitori\nPianificazione delle lezioni\nGoogle Classroom",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Contabile senior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA con 8 anni di esperienza in chiusura di fine mese, reportistica finanziaria e revisione interna. Chiusi i libri 3 giorni prima ricostruendo il processo di riconciliazione e trovati $240,000 di pagamenti eccessivi recuperabili in un anno di revisione. Solido in Excel, QuickBooks e sistemi ERP.",
    "experience": [
      {
        "role": "Contabile senior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Gestire la chiusura di fine mese per un'unità aziendale da $40M, finendo 3 giorni prima dopo aver ricostruito le riconciliazioni\nPreparare rendiconti finanziari mensili e rapporti sugli scostamenti per la direzione senior\nTrovati $240,000 di pagamenti eccessivi a fornitori recuperabili durante la revisione interna del 2024\nSupervisionare 2 contabili di staff ed esaminare le loro registrazioni contabili"
      },
      {
        "role": "Contabile di staff",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "giu 2017",
        "end": "dic 2020",
        "current": false,
        "points": "Preparate dichiarazioni fiscali e rendiconti finanziari per 25 clienti piccole imprese\nAssistito nelle revisioni di 8 clienti, testando i controlli e documentando i risultati\nAutomatizzato il registro dei beni ammortizzabili in Excel, con un risparmio di 6 ore al mese"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Contabilità",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Membro dell'AICPA."
      }
    ],
    "skills": "Chiusura di fine mese e riconciliazioni\nReportistica finanziaria e analisi degli scostamenti\nRevisione interna\nExcel (tabelle pivot, CERCA.VERT)\nQuickBooks e SAP\nPreparazione fiscale",
    "languages": "Inglese (fluente)\nMandarino (colloquiale)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Autista con patente CDL Classe A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Autista con patente CDL Classe A e 9 anni di esperienza nel trasporto a lunga distanza e regionale. Oltre 900,000 miglia senza incidenti, tasso di consegna puntuale del 99% ed esperienza con carichi refrigerati, pianali e furgonati. Patente pulita, abilitazioni HazMat e cisterna.",
    "experience": [
      {
        "role": "Autista a lunga distanza",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "apr 2019",
        "end": "",
        "current": true,
        "points": "Guidare 2,800+ miglia a settimana su rotte regionali in Texas, Oklahoma e New Mexico\nMantenere un tasso di consegna puntuale del 99% su 1,100+ carichi all'anno\nTrasportare merci refrigerate e furgonate; completare ispezioni pre-viaggio e post-viaggio ogni giorno\nOltre 900,000 miglia senza incidenti in totale"
      },
      {
        "role": "Autista di consegne",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar 2016",
        "end": "mar 2019",
        "current": false,
        "points": "Consegnati materiali edili in 15-20 cantieri al giorno nell'area Dallas-Fort Worth\nUsati carrelli elevatori e fissati carichi pianali secondo gli standard DOT\nMantenuti documenti e registri di consegna precisi con zero violazioni DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificato",
        "field": "Guida commerciale (CDL Classe A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Classe A con abilitazioni HazMat e cisterna. Patente pulita."
      }
    ],
    "skills": "Guida a lunga distanza e regionale\nCarichi refrigerati e pianali\nNorme DOT e registri di bordo\nIspezioni pre-viaggio\nPianificazione dei percorsi (GPS, ELD)\nUso del carrello elevatore",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Addetto alle vendite al dettaglio",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Addetto alle vendite al dettaglio con 4 anni di esperienza in negozi di elettronica e abbigliamento. Costantemente tra i primi 3 venditori del team, con un tasso di abbinamento del 32% su garanzie e accessori. Cordiale, rapido alla cassa e fidato per aprire e chiudere il negozio.",
    "experience": [
      {
        "role": "Addetto alle vendite senior",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "feb 2022",
        "end": "",
        "current": true,
        "points": "Vendere elettronica e accessori a 60+ clienti al giorno; tra i primi 3 nelle vendite del negozio per 8 trimestri consecutivi\nRaggiungere un tasso di abbinamento del 32% su garanzie e accessori, il più alto del team\nFormare 6 nuovi arrivati su cassa, magazzino e standard di servizio clienti\nDetentore fidato delle chiavi: aprire e chiudere il negozio e gestire i conteggi di cassa"
      },
      {
        "role": "Addetto alle vendite",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "giu 2021",
        "end": "gen 2022",
        "current": false,
        "points": "Aiutato i clienti a scegliere abiti e taglie in un negozio affollato\nMantenute le esposizioni in ordine e riforniti gli scaffali a ogni turno\nGestiti resi e cambi con cortesia, mantenendo i reclami al minimo"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Diploma universitario",
        "field": "Economia aziendale",
        "start": "2019",
        "end": "2021",
        "notes": "Studio part-time mentre si lavora nel retail."
      }
    ],
    "skills": "Servizio clienti e vendita aggiuntiva\nGestione della cassa e sistemi POS\nConoscenza dei prodotti (elettronica)\nGestione del magazzino\nApertura e chiusura del negozio\nFormazione del team",
    "languages": "Inglese (fluente)\nSpagnolo (fluente)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Addetto al servizio clienti",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Addetto al servizio clienti con 5 anni di esperienza nella gestione di supporto telefonico, email e chat dal vivo. Risolvere 45+ casi al giorno con un punteggio di soddisfazione del 96% e un tasso di risoluzione al primo contatto dell'88%. Calmo con i clienti arrabbiati e rapido nel trovare la soluzione.",
    "experience": [
      {
        "role": "Addetto al servizio clienti",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "mag 2021",
        "end": "",
        "current": true,
        "points": "Gestire 45+ casi al giorno per telefono, email e chat per fatturazione, ordini e guasti tecnici\nMantenere un punteggio di soddisfazione dei clienti del 96% e un tasso di risoluzione al primo contatto dell'88%\nCalmare le chiamate difficili e trasformare i reclami in affari ripetuti\nFormare 5 nuovi agenti su script, sistemi e tono"
      },
      {
        "role": "Agente di supporto",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "set 2019",
        "end": "apr 2021",
        "current": false,
        "points": "Risposto a email e chat dei clienti su ordini, resi e rimborsi\nMantenuto il tempo medio di prima risposta sotto le 2 ore\nScritti 20 articoli del centro assistenza che hanno ridotto di un quarto le domande ripetute"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Diploma universitario",
        "field": "Amministrazione aziendale",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Supporto telefonico, email e chat dal vivo\nGestione dei reclami e de-escalation\nSistemi CRM (Zendesk, Salesforce)\nDomande su fatturazione e ordini\nDigitazione 55 ppm\nFormazione del team",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Direttore operativo",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Direttore operativo con 12 anni di esperienza nella gestione di team fino a 80 persone in magazzino e distribuzione. Ridotti i costi di elaborazione degli ordini del 22%, alzate le spedizioni puntuali dal 91% al 98% e aperte due nuove sedi in tempo e sotto budget.",
    "experience": [
      {
        "role": "Direttore operativo",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "feb 2020",
        "end": "",
        "current": true,
        "points": "Gestire un centro di distribuzione di 120,000 piedi quadrati con 80 dipendenti in 3 turni\nRidotti i costi di elaborazione degli ordini del 22% riprogettando percorsi di prelievo e turni\nAlzate le spedizioni puntuali dal 91% al 98% in 18 mesi\nAperte 2 nuove sedi in tempo e con l'8% in meno sul budget"
      },
      {
        "role": "Supervisore di magazzino",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "giu 2013",
        "end": "gen 2020",
        "current": false,
        "points": "Supervisionati 25 addetti al magazzino e la spedizione quotidiana di 4,000+ ordini\nIntrodotta la scansione di codici a barre, riducendo gli errori di prelievo del 35%\nGestita formazione sulla sicurezza che ha mantenuto il cantiere senza incidenti per 3 anni"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Gestione operativa",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Leadership di team (fino a 80 dipendenti)\nMagazzino e distribuzione\nMiglioramento dei processi\nBudget e controllo dei costi\nGestione della sicurezza\nSistemi ERP e WMS",
    "languages": "Inglese (fluente)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Elettricista abilitato",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Elettricista qualificato abilitato con 8 anni di esperienza in lavori residenziali e commerciali. Competente in cablaggi, aggiornamenti di quadri, illuminazione e ricerca guasti, con un record di sicurezza pulito in 400+ lavori. Conoscenza del codice NEC ed esperienza nella supervisione di apprendisti.",
    "experience": [
      {
        "role": "Elettricista qualificato",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar 2019",
        "end": "",
        "current": true,
        "points": "Completare 400+ lavori residenziali e commerciali: cablaggi, aggiornamenti di quadri, illuminazione e caricabatterie EV\nDiagnosticare e riparare i guasti rapidamente, con un tasso di risoluzione alla prima visita del 92%\nSupervisionare 2 apprendisti e approvare il loro lavoro a norma\nMantenere un record di sicurezza pulito con zero infortuni con perdita di giornate"
      },
      {
        "role": "Apprendista elettricista",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "giu 2016",
        "end": "feb 2019",
        "current": false,
        "points": "Assistito elettricisti abilitati in cablaggi di nuove costruzioni e rifacimenti\nImparata la piegatura di condotti, la posa di cavi e l'installazione di quadri\nCompletate 8,000 ore di apprendistato e superato l'esame da operaio qualificato al primo tentativo"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificato",
        "field": "Tecnologia elettrica",
        "start": "2015",
        "end": "2016",
        "notes": "Patente da elettricista qualificato (Colorado). Certificato OSHA 30."
      }
    ],
    "skills": "Cablaggio residenziale e commerciale\nAggiornamenti di quadri e caricabatterie EV\nRicerca guasti e test\nConformità al codice NEC\nPiegatura di condotti e posa di cavi\nSupervisione degli apprendisti",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analista finanziario",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analista finanziario con 6 anni di esperienza in budget, previsioni e analisi degli investimenti. Creati modelli previsionali che hanno ridotto la varianza di budget del 30% e supportato $50M di decisioni di investimento. Solido in Excel, SQL e modellazione finanziaria.",
    "experience": [
      {
        "role": "Analista finanziario",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "apr 2021",
        "end": "",
        "current": true,
        "points": "Creare previsioni mensili e budget annuali per un portafoglio da $120M\nRidotta la varianza di budget del 30% con un modello previsionale basato sui driver\nSupportare decisioni di investimento per $50M con valutazione e analisi degli scenari\nPresentare i risultati ogni mese al CFO e ai responsabili di dipartimento"
      },
      {
        "role": "Analista finanziario junior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "lug 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Preparati rapporti settimanali sulle prestazioni per 12 filiali\nReportistica automatizzata in Excel, con un risparmio di 10 ore a settimana\nAssistito il team crediti nell'analisi del portafoglio prestiti"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finanza",
        "start": "2015",
        "end": "2019",
        "notes": "Candidato CFA Livello II. Corsi in valutazione e finanza aziendale."
      }
    ],
    "skills": "Modellazione e previsione finanziaria\nBudget e analisi degli scostamenti\nValutazione (DCF, comparabili)\nExcel (avanzato) e SQL\nBloomberg Terminal\nVisualizzazione dei dati (Power BI)",
    "languages": "Inglese (fluente)\nHindi (fluente)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Ingegnere civile",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Ingegnere civile (PE) con 7 anni di esperienza nella progettazione di infrastrutture stradali e idriche. Guidata la progettazione di un allargamento autostradale di 12 miglia e di un sistema di acque piovane al servizio di 8,000 abitazioni. Competente in AutoCAD Civil 3D, stima dei costi e coordinamento dei permessi.",
    "experience": [
      {
        "role": "Ingegnere civile",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Guidare la progettazione di un allargamento autostradale di 12 miglia, dall'indagine ai documenti di costruzione\nProgettato un sistema di acque piovane al servizio di 8,000 abitazioni, approvato al primo tentativo dal comune\nCoordinare i permessi con 4 agenzie e gestire un budget di progettazione da $2.5M\nEsaminare e timbrare i disegni come Ingegnere Professionale abilitato"
      },
      {
        "role": "Ingegnere civile junior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "lug 2018",
        "end": "dic 2020",
        "current": false,
        "points": "Preparati piani di livellamento e drenaggio per 20+ sviluppi residenziali\nEseguiti preventivi e computi per progetti stradali\nPartecipato a ispezioni in cantiere e redatto rapporti di avanzamento"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Ingegneria civile",
        "start": "2014",
        "end": "2018",
        "notes": "Patente di Ingegnere Professionale (Washington). EIT superato nel 2018."
      }
    ],
    "skills": "Progettazione stradale e di drenaggio\nAutoCAD Civil 3D\nModellazione delle acque piovane\nStima dei costi\nCoordinamento dei permessi\nProgrammazione dei progetti (MS Project)",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Ingegnere meccanico",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Ingegnere meccanico con 6 anni di esperienza nella progettazione di sistemi HVAC e attrezzature di produzione. Ridotto il consumo energetico del 18% in 3 stabilimenti con condotti e controlli riprogettati e guidata una riprogettazione di macchina che ha alzato la produzione del 25%. Competente in SolidWorks, FEA e analisi termica.",
    "experience": [
      {
        "role": "Ingegnere meccanico",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "feb 2021",
        "end": "",
        "current": true,
        "points": "Progettare sistemi HVAC e attrezzature di produzione per 3 stabilimenti con 400+ dipendenti\nRidotto il consumo energetico del 18% riprogettando condotti e sequenze di controllo\nGuidata una riprogettazione di macchina che ha alzato la produzione del 25% senza spazio aggiuntivo\nEseguire analisi FEA e termiche su nuove parti prima della prototipazione"
      },
      {
        "role": "Ingegnere meccanico junior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "ago 2019",
        "end": "gen 2021",
        "current": false,
        "points": "Modellate parti e assemblaggi in SolidWorks per clienti automobilistici\nPreparati disegni, distinte dei materiali e rapporti di prova\nSupportati la costruzione di prototipi e risolti problemi di montaggio in officina"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Ingegneria meccanica",
        "start": "2015",
        "end": "2019",
        "notes": "Corsi in termodinamica, meccanica dei fluidi e progettazione di macchine."
      }
    ],
    "skills": "Progettazione HVAC\nSolidWorks e AutoCAD\nFEA e analisi termica\nProgettazione di macchine\nEfficienza energetica\nGD&T e tolleranze",
    "languages": "Inglese (fluente)\nCoreano (colloquiale)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Ingegnere elettrico",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Ingegnere elettrico con 6 anni di esperienza in sistemi embedded ed elettronica di potenza. Progettate schede di controllo ora usate in 50,000+ dispositivi e ridotto il costo della scheda del 22% grazie alla riprogettazione dei componenti. Competente in Altium, C, test del firmware e conformità EMC.",
    "experience": [
      {
        "role": "Ingegnere elettrico",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Progettare schede di controllo embedded usate in 50,000+ dispositivi all'anno\nRidotto il costo della scheda del 22% riprogettando lo stadio di potenza e reperendo alternative\nGuidare i test di conformità EMC, superati al primo tentativo su 4 linee di prodotto\nScrivere e revisionare firmware in C per microcontrollori"
      },
      {
        "role": "Ingegnere elettrico junior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "lug 2019",
        "end": "feb 2021",
        "current": false,
        "points": "Disposti PCB in Altium per clienti consumer e industriali\nCostruiti e testati prototipi, con debug dei guasti hardware\nScritte procedure di prova che hanno ridotto del 30% i tempi di test in produzione"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Ingegneria elettrica",
        "start": "2015",
        "end": "2019",
        "notes": "Corsi in sistemi embedded, elettronica di potenza ed elaborazione dei segnali."
      }
    ],
    "skills": "Sistemi embedded e progettazione PCB\nAltium Designer\nC e firmware\nElettronica di potenza\nTest di conformità EMC\nOscilloscopi e strumenti di laboratorio",
    "languages": "Inglese (fluente)\nGujarati (colloquiale)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analista di dati",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analista di dati con 4 anni di esperienza nel trasformare dati di vendita e operativi in decisioni. Create dashboard usate da 60+ manager, ridotto il tempo di reportistica mensile da 3 giorni a 4 ore e trovato un errore di prezzo da $180,000 all'anno. Solido in SQL, Excel e Power BI.",
    "experience": [
      {
        "role": "Analista di dati",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "gen 2022",
        "end": "",
        "current": true,
        "points": "Creare dashboard Power BI usate da 60+ responsabili di negozio e regionali\nRidotta la reportistica mensile da 3 giorni a 4 ore con pipeline SQL automatizzate\nTrovato un errore di prezzo da $180,000 all'anno analizzando i dati delle promozioni\nPresentare i risultati ogni mese al team commerciale"
      },
      {
        "role": "Analista di dati junior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "ago 2020",
        "end": "dic 2021",
        "current": false,
        "points": "Puliti e uniti dati di consegna da 4 sistemi in un'unica tabella di reportistica\nCreati tracker Excel che hanno sostituito i conteggi manuali per 2 team\nRisposto quotidianamente a domande ad hoc sui dati per i responsabili operativi"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistica",
        "start": "2016",
        "end": "2020",
        "notes": "Corsi in regressione, basi di dati e visualizzazione dei dati."
      }
    ],
    "skills": "SQL e pulizia dei dati\nPower BI e Tableau\nExcel (avanzato)\nPython (pandas)\nDesign di dashboard\nBasi dei test A/B",
    "languages": "Inglese (fluente)\nVietnamita (colloquiale)",
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
    "summary": "Data scientist con 5 anni di esperienza nella creazione di modelli di machine learning per l'e-commerce. Un modello di raccomandazione che ho rilasciato ha alzato i ricavi per visita del 12% e un modello di abbandono ora segnala l'80% dei clienti a rischio. Solido in Python, SQL e distribuzione dei modelli.",
    "experience": [
      {
        "role": "Data scientist",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "feb 2022",
        "end": "",
        "current": true,
        "points": "Rilasciato un modello di raccomandazione che ha alzato i ricavi per visita del 12%\nCreato un modello di abbandono che segnala un mese prima l'80% dei clienti a rischio\nDistribuiti modelli in produzione con pipeline di monitoraggio e riaddestramento\nPresentare i risultati dei modelli ai team di prodotto e marketing ogni mese"
      },
      {
        "role": "Data scientist junior",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "lug 2020",
        "end": "gen 2022",
        "current": false,
        "points": "Creati modelli previsionali per 3 clienti retail con una precisione superiore al 90%\nPuliti e preparati set di dati da 10M+ righe per la modellazione\nScritta documentazione così i clienti potessero rieseguire i modelli da soli"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Data Science",
        "start": "2018",
        "end": "2020",
        "notes": "Tesi sui sistemi di raccomandazione. Laurea triennale in Matematica (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMachine learning e statistica\nSQL e Spark\nDistribuzione dei modelli (Docker, AWS)\nTest A/B\nVisualizzazione dei dati",
    "languages": "Inglese (fluente)\nArabo (fluente)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Sviluppatore web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Sviluppatore web con 4 anni di esperienza nella creazione di siti web veloci e accessibili in HTML, CSS e JavaScript. Ricostruito il checkout dell'esercizio commerciale che ha alzato le conversioni del 18% e mantenuti 12 siti di clienti con un uptime del 99.9%. Solido in design responsive, prestazioni e basi SEO.",
    "experience": [
      {
        "role": "Sviluppatore web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Creare siti web responsive in HTML, CSS, JavaScript e WordPress per 12 clienti\nRicostruito il checkout di un negozio che ha alzato le conversioni del 18%\nRidotto il tempo medio di caricamento pagina da 4.2s a 1.8s con ottimizzazione di immagini e codice\nMantenere tutti i siti dei clienti con un uptime del 99.9%, con monitoraggio e backup"
      },
      {
        "role": "Sviluppatore web junior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "giu 2021",
        "end": "feb 2022",
        "current": false,
        "points": "Create landing page e corretti bug in 20+ siti di piccole imprese\nImparati Git, design responsive e SEO di base su progetti dal vivo\nRisposto alle email dei clienti ed effettuato aggiornamenti dei contenuti in giornata"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatica",
        "start": "2017",
        "end": "2021",
        "notes": "Corsi in sviluppo web, basi di dati e interazione uomo-computer."
      }
    ],
    "skills": "HTML, CSS e JavaScript\nReact e WordPress\nDesign responsive\nOttimizzazione della velocità delle pagine\nGit e GitHub\nSEO di base",
    "languages": "Inglese (fluente)\nSpagnolo (fluente)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafico",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafico con 5 anni di esperienza in branding, packaging e design per i social media. Create identità di marca per 25+ piccole imprese e un restyling del packaging che ha alzato le vendite a scaffale del 14%. Competente in Adobe Illustrator, Photoshop e Figma.",
    "experience": [
      {
        "role": "Grafico",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "gen 2022",
        "end": "",
        "current": true,
        "points": "Progettare identità di marca, packaging e campagne social per 25+ clienti\nIl restyling del packaging per un marchio alimentare ha alzato le vendite a scaffale del 14%\nProdurre 30+ risorse social a settimana su Instagram, TikTok e Facebook\nPresentare i concept ai clienti e revisionare rapidamente in base ai feedback"
      },
      {
        "role": "Grafico junior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "lug 2020",
        "end": "dic 2021",
        "current": false,
        "points": "Progettati volantini, menu e post social per ristoranti e negozi locali\nPreparati file pronti per la stampa e controllate le prove con le tipografie\nCreata una libreria di modelli che ha ridotto di un terzo i tempi di design"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Graphic design",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio in design di branding e packaging."
      }
    ],
    "skills": "Adobe Illustrator e Photoshop\nFigma\nDesign dell'identità di marca\nDesign del packaging\nDesign per i social media\nProduzione di stampa",
    "languages": "Inglese (fluente)\nCoreano (colloquiale)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX designer",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX designer con 5 anni di esperienza nella ricerca sugli utenti e nella progettazione di prodotti mobili e web. Riprogettato un flusso di onboarding che ha ridotto gli abbandoni del 35% ed eseguiti 40+ test di usabilità. Competente in Figma, ricerca sugli utenti, wireframing e prototipazione.",
    "experience": [
      {
        "role": "UX designer",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "feb 2022",
        "end": "",
        "current": true,
        "points": "Riprogettato l'onboarding mobile, riducendo gli abbandoni del 35% in 3 mesi\nEseguire 40+ test di usabilità e interviste agli utenti all'anno\nCreare wireframe e prototipi in Figma per 2 team di prodotto\nLavorare ogni giorno con ingegneri e product manager sulla consegna"
      },
      {
        "role": "UX designer junior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "ago 2020",
        "end": "gen 2022",
        "current": false,
        "points": "Progettate schermate e flussi per 5 app di clienti\nGestiti i primi test di usabilità e redatti i risultati per i clienti\nCreata una libreria di componenti che ha velocizzato il passaggio dal design"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psicologia",
        "start": "2016",
        "end": "2020",
        "notes": "Certificato UX design (General Assembly, 2020). Corsi in interazione uomo-computer."
      }
    ],
    "skills": "Ricerca sugli utenti e test di usabilità\nWireframing e prototipazione (Figma)\nArchitettura dell'informazione\nSistemi di design\nMappatura del percorso\nWorkshop con le parti interessate",
    "languages": "Inglese (fluente)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Responsabile marketing",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Responsabile marketing con 8 anni di esperienza in campagne B2B e consumer. Fatti crescere i lead qualificati del 60% in un anno, lanciata una linea di prodotti che ha raggiunto $3M di vendite nel primo anno e gestito un budget annuo di $500,000 con un team di 5.",
    "experience": [
      {
        "role": "Responsabile marketing",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Guidare un team di 5 e un budget marketing annuo di $500,000\nFatti crescere i lead qualificati del 60% in un anno con contenuti e campagne a pagamento\nLanciata una linea di prodotti che ha raggiunto $3M di vendite nel primo anno\nRidotto il costo per lead del 28% ricostruendo il targeting delle campagne"
      },
      {
        "role": "Specialista marketing",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "giu 2017",
        "end": "feb 2021",
        "current": false,
        "points": "Gestite campagne email a 80,000 iscritti con un tasso di apertura del 24%\nGestiti account social cresciuti da 5,000 a 40,000 follower\nOrganizzati 6 stand fieristici all'anno, generando 300+ lead ciascuno"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Corsi in comportamento dei consumatori, analisi e gestione del marchio."
      }
    ],
    "skills": "Strategia e pianificazione delle campagne\nMarketing di contenuti ed email\nPubblicità a pagamento (Google, Meta)\nAnalisi di marketing (GA4)\nLeadership di team\nGestione del budget",
    "languages": "Inglese (fluente)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Project manager",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Project manager (PMP) con 7 anni di esperienza nella consegna puntuale e nel budget di progetti software ed edili. Gestiti 15 progetti fino a $4M, con un tasso di consegna puntuale del 94%. Competente in Agile, gestione dei rischi e comunicazione con le parti interessate.",
    "experience": [
      {
        "role": "Project manager",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Gestire 15 progetti fino a $4M, con un tasso di consegna puntuale del 94%\nGestire sprint Agile per 3 team e riportare i progressi ai dirigenti ogni settimana\nRidotti i superamenti di progetto del 30% con revisioni dei rischi più precoci\nCoordinare fornitori, clienti e team interni in 4 fusi orari"
      },
      {
        "role": "Coordinatore di progetto",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "lug 2018",
        "end": "dic 2020",
        "current": false,
        "points": "Tracciati programmi, budget e permessi per 8 progetti edilizi\nPreparati rapporti sullo stato e note di riunione per i clienti\nRisolti conflitti di programmazione che hanno risparmiato 2 settimane in una costruzione scolastica"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Amministrazione aziendale",
        "start": "2014",
        "end": "2018",
        "notes": "Certificato PMP (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Pianificazione e programmazione dei progetti\nAgile e Scrum\nGestione dei rischi\nControllo del budget\nComunicazione con le parti interessate\nMS Project e Jira",
    "languages": "Inglese (fluente)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Responsabile delle risorse umane",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Responsabile delle risorse umane con 9 anni di esperienza in assunzioni, relazioni con i dipendenti e benefit. Ridotto il tempo di assunzione da 45 a 28 giorni, alzata la fidelizzazione del 15% e gestite le HR per 250 dipendenti in 3 sedi. Conoscenza di livello CIPD del diritto del lavoro e delle politiche.",
    "experience": [
      {
        "role": "Responsabile delle risorse umane",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "feb 2020",
        "end": "",
        "current": true,
        "points": "Gestire le HR per 250 dipendenti in 3 sedi, con un team di 3\nRidotto il tempo di assunzione da 45 a 28 giorni ricostruendo il processo di colloquio\nAlzata la fidelizzazione del 15% con un nuovo programma di inserimento e revisione\nGestire relazioni con i dipendenti, reclami e aggiornamenti delle politiche"
      },
      {
        "role": "Generalista HR",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "giu 2016",
        "end": "gen 2020",
        "current": false,
        "points": "Reclutati 120+ dipendenti all'anno per hotel e ristoranti\nGestiti controlli paghe e iscrizioni ai benefit per 400 dipendenti\nRisolti conflitti del personale e mantenuto il turnover sotto la media del settore"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Risorse umane",
        "start": "2012",
        "end": "2016",
        "notes": "Certificato SHRM-CP. Corsi in diritto del lavoro e comportamento organizzativo."
      }
    ],
    "skills": "Reclutamento e inserimento\nRelazioni con i dipendenti\nBenefit e paghe\nDiritto del lavoro\nGestione delle prestazioni\nHRIS (Workday, BambooHR)",
    "languages": "Inglese (fluente)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Avvocato associato",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Avvocato associato con 6 anni di esperienza in contenzioso commerciale e diritto contrattuale. Gestiti 40+ casi, ottenute decisioni sommari favorevoli in 8 e redatti contratti per $25M. Ammesso all'Ordine degli Avvocati dell'Illinois; competente in ricerca giuridica, redazione e consulenza ai clienti.",
    "experience": [
      {
        "role": "Avvocato associato",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "set 2020",
        "end": "",
        "current": true,
        "points": "Gestire 40+ casi di contenzioso commerciale dalla presentazione alla risoluzione\nOttenute decisioni sommari favorevoli in 8 casi e risolti favorevolmente altri 20\nRedigere e negoziare contratti fino a $25M\nConsigliare i clienti di persona e per iscritto su rischi e strategia"
      },
      {
        "role": "Impiegato legale",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "ago 2019",
        "end": "ago 2020",
        "current": false,
        "points": "Ricercata la giurisprudenza e redatti promemoria per 2 giudici\nEsaminate istanze e preparati riepiloghi per 100+ udienze\nOsservati processi e conferenze di conciliazione nelle divisioni civili"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Giurisprudenza",
        "start": "2016",
        "end": "2019",
        "notes": "Ammesso all'Ordine degli Avvocati dell'Illinois (2019). Rivista giuridica, redattore di articoli."
      }
    ],
    "skills": "Contenzioso commerciale\nRedazione e negoziazione di contratti\nRicerca giuridica (Westlaw, LexisNexis)\nConsulenza ai clienti\nDeposizioni e discovery\nAtti giudiziari e procedure",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Farmacista clinico",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Farmacista clinico (PharmD) con 7 anni di esperienza in farmacia ospedaliera e territoriale. Esaminare 100+ ordini di farmaci al giorno, ridotti gli eventi avversi da farmaci del 25% grazie a un nuovo protocollo di controllo e consigliare i pazienti sull'uso sicuro dei medicinali. Abilitato in Pennsylvania.",
    "experience": [
      {
        "role": "Farmacista clinico",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "gen 2020",
        "end": "",
        "current": true,
        "points": "Esaminare 100+ ordini di farmaci al giorno per sicurezza, dosaggio e interazioni\nRidotti gli eventi avversi da farmaci del 25% con un nuovo protocollo di doppio controllo\nConsigliare medici e infermieri sulle scelte farmacologiche per pazienti complessi\nGestire i giri di gestione responsabile degli antibiotici dell'ospedale due volte a settimana"
      },
      {
        "role": "Farmacista di staff",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "lug 2018",
        "end": "dic 2019",
        "current": false,
        "points": "Dispensate 200+ ricette al giorno con zero errori di dispensazione\nConsigliati i pazienti su nuovi medicinali, effetti collaterali e conservazione\nSomministrate vaccinazioni antinfluenzali ed effettuati controlli della pressione"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacia",
        "start": "2014",
        "end": "2018",
        "notes": "Farmacista abilitato (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Revisione e sicurezza dei farmaci\nFarmacologia clinica\nConsulenza ai pazienti\nSistemi farmaceutici (Epic, PioneerRx)\nGestione responsabile degli antibiotici\nServizi di vaccinazione",
    "languages": "Inglese (fluente)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Dentista generico",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Dentista generico (DDS) con 8 anni di esperienza in odontoiatria restaurativa, estetica e preventiva. Trattare 25+ pazienti al giorno in uno studio da 2,000 pazienti, con un punteggio di soddisfazione dei pazienti del 98%. Competente in corone, impianti, devitalizzazioni e apparecchi trasparenti.",
    "experience": [
      {
        "role": "Dentista generico",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "feb 2019",
        "end": "",
        "current": true,
        "points": "Trattare 25+ pazienti al giorno: otturazioni, corone, devitalizzazioni ed estrazioni\nMantenere un punteggio di soddisfazione dei pazienti del 98% su 1,200+ recensioni\nPosizionare 15+ impianti al mese e gestire i casi con apparecchi trasparenti\nSupervisionare 2 igienisti e 4 assistenti dentali"
      },
      {
        "role": "Dentista associato",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "lug 2017",
        "end": "gen 2019",
        "current": false,
        "points": "Fornita odontoiatria generale per uno studio da 1,500 pazienti\nIntrodotte corone in giornata, riducendo le visite di ritorno del 40%\nGestite visite di sensibilizzazione all'interno delle scuole sulla salute orale dei bambini"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Odontoiatria",
        "start": "2013",
        "end": "2017",
        "notes": "Dentista abilitato (Arizona). Certificato Invisalign. Certificato CPR/BLS."
      }
    ],
    "skills": "Odontoiatria restaurativa (corone, otturazioni)\nTrattamento canalare\nImpianti dentali\nApparecchi trasparenti\nAssistenza e comunicazione con i pazienti\nRadiografie digitali e CEREC",
    "languages": "Inglese (fluente)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fisioterapista",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fisioterapista (DPT) con 6 anni di esperienza in riabilitazione ortopedica e sportiva. Trattare 12-15 pazienti al giorno, con il 90% che raggiunge i propri obiettivi entro le sedute previste. Competente in terapia manuale, prescrizione dell'esercizio e test di ritorno allo sport.",
    "experience": [
      {
        "role": "Fisioterapista",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Trattare 12-15 pazienti al giorno per infortuni sportivi, riabilitazione post-chirurgica e mal di schiena\nIl 90% dei pazienti raggiunge i propri obiettivi entro il numero di sedute previsto\nProgettare test di ritorno allo sport usati da 3 squadre locali\nFare da mentore a 2 neolaureati e supervisionare i tirocini degli studenti"
      },
      {
        "role": "Fisioterapista di staff",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "ago 2019",
        "end": "feb 2021",
        "current": false,
        "points": "Fornita riabilitazione ospedaliera per pazienti post-chirurgici e colpiti da ictus\nGestite lezioni di esercizio di gruppo per 20+ pazienti anziani a settimana\nDocumentati i progressi in Epic e passati ai team di reparto"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fisioterapia",
        "start": "2016",
        "end": "2019",
        "notes": "Fisioterapista abilitato (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Riabilitazione ortopedica e sportiva\nTerapia manuale\nPrescrizione dell'esercizio fisico\nTest di ritorno allo sport\nEducazione dei pazienti\nDocumentazione (Epic)",
    "languages": "Inglese (fluente)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Capo cuoco",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Capo cuoco con 10 anni di esperienza in cucine creole e americane moderne. Guidare una brigata di 12 in un ristorante da 200 posti, ridotti i costi alimentari del 15% con ordini più rigorosi e vinto il premio 'Best New Menu' dalla guida gastronomica della città nel 2025.",
    "experience": [
      {
        "role": "Capo cuoco",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Guidare una brigata di 12 in un ristorante da 200 posti che serve 300+ coperti a sera\nRidotti i costi alimentari del 15% con ordini più rigorosi e un menu stagionale\nVinto 'Best New Menu' dalla guida gastronomica della città nel 2025\nProgettare menu, formare i cuochi e gestire il pass il venerdì e il sabato di servizio"
      },
      {
        "role": "Sous Chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "giu 2017",
        "end": "dic 2020",
        "current": false,
        "points": "Gestita la cucina quando il capo cuoco era assente, coprendo 150 coperti a sera\nGestiti magazzino, ordini e relazioni con i fornitori\nFormati 8 cuochi di linea e ridotto il turnover del personale di un terzo"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Arti culinarie",
        "start": "2014",
        "end": "2016",
        "notes": "Certificato ServSafe Food Protection Manager."
      }
    ],
    "skills": "Progettazione e calcolo dei costi dei menu\nCucina creola e americana moderna\nLeadership in cucina (brigata di 12)\nSicurezza alimentare (ServSafe)\nGestione dei fornitori\nCatering per banchetti ed eventi",
    "languages": "Inglese (fluente)\nSpagnolo (fluente)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Agente di polizia",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Agente di polizia con 8 anni di esperienza in pattuglia, polizia di comunità e indagini. Rispondere a 30+ chiamate a settimana, con onorificenze per de-escalation e sensibilizzazione nella comunità. Formato in intervento in crisi, primo soccorso e redazione di rapporti.",
    "experience": [
      {
        "role": "Agente di polizia",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "giu 2019",
        "end": "",
        "current": true,
        "points": "Pattugliare un distretto di 40,000 residenti, rispondendo a 30+ chiamate a settimana\nRicevute 2 onorificenze per de-escalation e sensibilizzazione nella comunità\nIndagare furti e aggressioni, redigendo rapporti usati in 50+ procedimenti\nFare da mentore a 3 nuovi agenti durante la formazione sul campo"
      },
      {
        "role": "Agente di pattuglia",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "ago 2017",
        "end": "mag 2019",
        "current": false,
        "points": "Pattugliate strade provinciali e risposto a chiamate di emergenza\nNotificati atti giudiziari e assistito nel trasporto dei detenuti\nCompletata la formazione in intervento in crisi e primo soccorso"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificato",
        "field": "Forze dell'ordine",
        "start": "2017",
        "end": "2017",
        "notes": "Diplomato alla Ohio Peace Officer Training Academy. Formato nel Crisis Intervention Team."
      }
    ],
    "skills": "Pattuglia e risposta alle emergenze\nPolizia di comunità\nIntervento in crisi e de-escalation\nRedazione di rapporti\nIndagini\nPrimo soccorso e CPR",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Vigile del fuoco / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Vigile del fuoco ed EMT con 7 anni di esperienza in soppressione incendi, soccorso e risposta medica di emergenza. Risposto a 900+ chiamate, inclusi incendi strutturali, soccorsi stradali ed emergenze mediche. Formato HazMat con un record di sicurezza pulito.",
    "experience": [
      {
        "role": "Vigile del fuoco / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar 2020",
        "end": "",
        "current": true,
        "points": "Rispondere a 900+ chiamate antincendio, di soccorso e mediche in un distretto di 3 stazioni\nFornire assistenza medica di emergenza come EMT certificato nel 60% delle chiamate\nFormato HazMat; guidare la decontaminazione negli incidenti chimici\nFormare le nuove reclute in gestione delle manichette, scale e tecniche di ricerca"
      },
      {
        "role": "Vigile del fuoco volontario",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "giu 2018",
        "end": "feb 2020",
        "current": false,
        "points": "Risposto a incendi in aree selvagge e strutturali come volontario\nCompletata la formazione Firefighter I & II ed EMT-Basic\nAiutato a tenere incontri sulla sicurezza antincendio nelle scuole della comunità"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificato",
        "field": "Scienze antincendio",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. Certificato EMT-Basic. Formato in operazioni HazMat."
      }
    ],
    "skills": "Soppressione incendi e soccorso\nAssistenza medica di emergenza (EMT)\nOperazioni HazMat\nScale, manichette e ventilazione\nSicurezza antincendio nella comunità\nLavoro di squadra sotto pressione",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Idraulico abilitato",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Idraulico maestro abilitato con 11 anni di esperienza in idraulica residenziale e commerciale. Completati 600+ lavori all'anno, dagli impianti grezzi all'installazione di caldaie, con un tasso di risoluzione alla prima visita del 98%. Competente in tubazioni, pulizia scarichi e conformità alle norme.",
    "experience": [
      {
        "role": "Idraulico maestro",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "gen 2019",
        "end": "",
        "current": true,
        "points": "Completare 600+ lavori residenziali e commerciali all'anno\nInstallare caldaie, scaldabagni e impianti completi di bagni\nMantenere un tasso di risoluzione alla prima visita del 98% sulle chiamate di assistenza\nSupervisionare 3 apprendisti e approvare il loro lavoro"
      },
      {
        "role": "Idraulico qualificato",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "giu 2014",
        "end": "dic 2018",
        "current": false,
        "points": "Gestiti impianti idraulici di nuova costruzione per 40+ abitazioni all'anno\nLiberati scarichi e riparate perdite per abitazioni e ristoranti\nImparati raccordi gas e prevenzione del riflusso"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificato",
        "field": "Tecnologia idraulica",
        "start": "2013",
        "end": "2014",
        "notes": "Patente da idraulico maestro (Tennessee). Certificato in prevenzione del riflusso."
      }
    ],
    "skills": "Idraulica residenziale e commerciale\nTubazioni e saldatura\nPulizia scarichi e ispezione con telecamera\nInstallazione di caldaie e scaldabagni\nRaccordi gas\nConformità al codice idraulico",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Falegname qualificato",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Falegname qualificato con 9 anni di esperienza in intelaiatura, lavori di finitura e mobili su misura. Intelaiate 30+ abitazioni e montate cucine in 60+ case, con una reputazione per misure esatte e finiture pulite. Competente nella lettura dei progetti e nel lavoro a norma.",
    "experience": [
      {
        "role": "Falegname qualificato",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "feb 2019",
        "end": "",
        "current": true,
        "points": "Intelaiate 30+ abitazioni e montate cucine in 60+ case\nRealizzare mobili su misura e finiture con una tolleranza di 1/16 di pollice\nLeggere e seguire i progetti architettonici, segnalando gli errori prima che costino denaro\nFormare 2 apprendisti in tecniche di intelaiatura e finitura"
      },
      {
        "role": "Apprendista falegname",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "giu 2016",
        "end": "gen 2019",
        "current": false,
        "points": "Assistito in intelaiatura, cartongesso e pavimenti nelle ristrutturazioni\nImparato a usare seghe, fresatrici e sparachiodi in sicurezza\nCompletate 8,000 ore di apprendistato e superato l'esame da operaio qualificato"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificato",
        "field": "Falegnameria",
        "start": "2015",
        "end": "2016",
        "notes": "Falegname qualificato. Certificato OSHA 10."
      }
    ],
    "skills": "Lavori di intelaiatura e strutturali\nFalegnameria di finitura e rifiniture\nMobili su misura\nLettura di progetti architettonici\nUtensili elettrici e sicurezza\nCartongesso e pavimenti",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Insegnante di scuola secondaria (Matematica)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Insegnante di scuola secondaria con 8 anni di esperienza nell'insegnamento della matematica alle classi 9-12. Alzati i tassi di superamento in algebra dal 64% all'83% e alleno la squadra di matematica fino a 2 finali statali. Competente in didattica differenziata, preparazione agli esami e comunicazione con i genitori.",
    "experience": [
      {
        "role": "Insegnante di matematica (Classi 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "ago 2019",
        "end": "",
        "current": true,
        "points": "Insegnare algebra, geometria e pre-calcolo a 120 alunni in 5 classi\nAlzati i tassi di superamento in algebra dal 64% all'83% in 3 anni\nAllenare la squadra di matematica fino a 2 finali statali\nGestire tutoraggio doposcuola per 30 alunni a settimana"
      },
      {
        "role": "Insegnante di matematica (Classi 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "ago 2017",
        "end": "giu 2019",
        "current": false,
        "points": "Insegnata algebra e geometria a 100 alunni all'anno\nIntrodotti quiz settimanali che hanno dimezzato le lacune nei compiti\nOrganizzata la prima fiera di matematica dell'istituto con 200 alunni"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Didattica della matematica",
        "start": "2013",
        "end": "2017",
        "notes": "Patente di insegnamento statale (New Hampshire, classi 7-12, matematica)."
      }
    ],
    "skills": "Insegnamento della matematica (dall'algebra al pre-calcolo)\nPreparazione agli esami\nDidattica differenziata\nGestione della classe\nComunicazione con i genitori\nGoogle Classroom e Desmos",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Insegnante di scuola dell'infanzia",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Insegnante di scuola dell'infanzia con 6 anni di esperienza nella cura di bambini di 3-5 anni. Competente in apprendimento basato sul gioco, guida comportamentale e comunicazione con i genitori. Creato un programma di fonetica che ha alzato i punteggi di prontezza scolastica in tutta la classe.",
    "experience": [
      {
        "role": "Insegnante di scuola dell'infanzia",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "ago 2020",
        "end": "",
        "current": true,
        "points": "Insegnare e prendersi cura di una classe di 18 bambini di 3-5 anni\nCreato un programma di fonetica che ha alzato i punteggi di prontezza scolastica in tutta la classe\nPianificare temi settimanali, lavoretti e giochi all'aperto\nCondividere aggiornamenti quotidiani e rapporti trimestrali sui progressi con i genitori"
      },
      {
        "role": "Assistente insegnante di scuola dell'infanzia",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "giu 2018",
        "end": "lug 2020",
        "current": false,
        "points": "Supportato l'insegnante principale con una classe di 20 bambini\nGestiti momenti di storia, canzoni e attività artistiche ogni giorno\nMantenuti i registri di sicurezza e igiene secondo gli standard statali"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Diploma universitario",
        "field": "Educazione della prima infanzia",
        "start": "2016",
        "end": "2018",
        "notes": "Credenziale Child Development Associate (CDA). Certificato di primo soccorso e CPR."
      }
    ],
    "skills": "Apprendimento basato sul gioco\nGuida comportamentale\nFonetica e alfabetizzazione precoce\nComunicazione con i genitori\nSicurezza in classe\nPianificazione di arti e lavoretti",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Assistente sociale per bambini e famiglie",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Assistente sociale abilitato con 7 anni di esperienza nel supporto a bambini e famiglie. Gestire un carico di 25 famiglie, coordinare servizi tra scuole e fornitori sanitari e completare relazioni per il tribunale su cui i giudici fanno affidamento. Competente in valutazione, supporto in crisi e tutela.",
    "experience": [
      {
        "role": "Assistente sociale per bambini e famiglie",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "gen 2020",
        "end": "",
        "current": true,
        "points": "Gestire un carico di 25 famiglie, visitando case e scuole ogni settimana\nCompletare relazioni per il tribunale e testimoniare in tribunale della famiglia\nCoordinare supporto abitativo, sanitario e scolastico per famiglie vulnerabili\nRidotto il tempo di attesa per le valutazioni del 20% con un nuovo sistema di triage"
      },
      {
        "role": "Assistente sociale di caso",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "lug 2018",
        "end": "dic 2019",
        "current": false,
        "points": "Supportate 40+ famiglie in alloggi temporanei con benefit e segnalazioni\nGestiti workshop settimanali su genitorialità e budget\nMantenute note sui casi precise per revisioni e rapporti di finanziamento"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Servizio sociale",
        "start": "2016",
        "end": "2018",
        "notes": "Assistente sociale abilitato (Ohio). Corsi in welfare infantile e sistemi familiari."
      }
    ],
    "skills": "Gestione dei casi (25 famiglie)\nTutela dei minori\nRelazioni per il tribunale della famiglia\nSupporto in crisi\nCoordinamento multi-agenzia\nSegnalazioni per benefit e alloggi",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Assistente legale",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Assistente legale con 6 anni di esperienza in supporto al contenzioso e atti societari. Gestire la discovery per 30+ casi, redigere atti e contratti e mantenere le scadenze di deposito con un record puntuale del 100%. Competente in Westlaw, e-discovery e software di gestione dei casi.",
    "experience": [
      {
        "role": "Assistente legale",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "feb 2021",
        "end": "",
        "current": true,
        "points": "Gestire la discovery per 30+ casi di contenzioso, esaminando 10,000+ documenti\nRedigere atti, istanze e contratti per la revisione dell'avvocato\nMantenere un record puntuale del 100% su atti giudiziari e scadenze\nCoordinare i testimoni e preparare i fascicoli per il processo"
      },
      {
        "role": "Assistente legale",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "ago 2019",
        "end": "gen 2021",
        "current": false,
        "points": "Colloqui di accoglienza per 20+ clienti a settimana\nPreparati moduli e atti per casi abitativi e familiari\nTradotti documenti legali per clienti di lingua spagnola"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Diploma universitario",
        "field": "Studi paralegali",
        "start": "2017",
        "end": "2019",
        "notes": "Assistente legale certificato NALA (CP). Programma approvato dall'ABA."
      }
    ],
    "skills": "Supporto al contenzioso e discovery\nRedazione legale\nE-discovery (Relativity)\nGestione dei casi (Clio)\nAtti giudiziari e scadenze\nRicerca giuridica (Westlaw)",
    "languages": "Inglese (fluente)\nSpagnolo (fluente)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Addetto alla contabilità",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Addetto alla contabilità con 5 anni di esperienza in contabilità fornitori, fatturazione e riconciliazioni bancarie. Elaborare 300+ fatture al mese con una precisione del 99.8% e mantenere i libri in ordine per la chiusura di fine mese. Competente in QuickBooks, Excel e supporto paghe.",
    "experience": [
      {
        "role": "Addetto alla contabilità",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "apr 2021",
        "end": "",
        "current": true,
        "points": "Elaborare 300+ fatture di fornitori al mese con una precisione del 99.8%\nRiconciliare 6 conti bancari ogni settimana e segnalare le differenze in giornata\nPreparare i dati paghe per 45 dipendenti e sollecitare i pagamenti scaduti dei clienti\nMantenere i registri in ordine per la revisione di fine anno, con zero rilievi"
      },
      {
        "role": "Assistente contabile",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "giu 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Inserite fatture di vendita e ricevute in QuickBooks ogni giorno\nRisposto a domande dei fornitori sui pagamenti per telefono ed email\nArchiviati documenti e mantenuto l'archivio aggiornato"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificato",
        "field": "Contabilità",
        "start": "2018",
        "end": "2019",
        "notes": "Utente certificato QuickBooks."
      }
    ],
    "skills": "Contabilità fornitori e clienti\nRiconciliazioni bancarie\nFatturazione (300+ al mese)\nQuickBooks ed Excel\nSupporto paghe\nInserimento dati (65 ppm)",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Assistente amministrativo",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Assistente amministrativo con 6 anni di esperienza nel mantenere gli uffici efficienti. Gestire gli impegni di 4 manager, organizzare viaggi e riunioni e gestire 100+ email al giorno. Noto per precisione, discrezione e calma sotto la pressione delle scadenze.",
    "experience": [
      {
        "role": "Assistente amministrativo",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Gestire agende, viaggi e riunioni per 4 manager senior\nGestire 100+ email al giorno, redigendo risposte e segnalando le priorità\nPreparare documenti per il consiglio e redigere verbali nelle riunioni mensili\nGestire forniture d'ufficio e ordini ai fornitori, riducendo i costi del 12%"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "ago 2019",
        "end": "dic 2020",
        "current": false,
        "points": "Accolti 60+ pazienti al giorno e gestito il registro degli appuntamenti\nRisposto al telefono e gestito domande sulle assicurazioni\nMantenuti i registri dei pazienti precisi e riservati"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Diploma universitario",
        "field": "Amministrazione d'ufficio",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Gestione di agende e viaggi\nEmail e corrispondenza\nVerbali di riunione\nMicrosoft Office (Word, Excel, Outlook)\nInserimento dati (70 ppm)\nForniture d'ufficio e fornitori",
    "languages": "Inglese (fluente)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Cassiere di banca",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Cassiere di banca con 4 anni di esperienza nel servire 80+ clienti al giorno con precisione e cura. Cassa quadrata al centesimo in 3 anni, con zero ammanchi. Competente in depositi, prelievi, controlli antifrode e nell'indirizzare i clienti verso i prodotti giusti.",
    "experience": [
      {
        "role": "Cassiere di banca",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Servire 80+ clienti al giorno: depositi, prelievi, pagamenti e trasferimenti\nCassa quadrata al centesimo per 3 anni con zero ammanchi\nIndividuate e fermate 12 tentativi di frode, risparmiando ai clienti $90,000+\nIndirizzare i clienti verso prodotti di risparmio e prestito, raggiungendo gli obiettivi di segnalazione ogni trimestre"
      },
      {
        "role": "Addetto al servizio clienti",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "giu 2021",
        "end": "feb 2022",
        "current": false,
        "points": "Aperti nuovi conti ed emesse carte di debito per i membri\nRisposto a domande telefoniche su saldi ed estratti conto\nAiutato i membri a configurare l'online e il mobile banking"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Diploma universitario",
        "field": "Economia aziendale",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Gestione e quadratura della cassa\nDepositi, prelievi e pagamenti\nRilevamento frodi\nServizio clienti\nSoftware bancario (Fiserv)\nSegnalazione prodotti",
    "languages": "Inglese (fluente)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Responsabile delle vendite",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Responsabile delle vendite con 10 anni di esperienza nella guida di team fino a 15 rappresentanti. Fatti crescere i ricavi regionali da $4M a $7.5M in 3 anni, alzato il tasso di vincita dal 22% al 34% e dimezzato il turnover dei rappresentanti con coaching e inserimento migliori.",
    "experience": [
      {
        "role": "Responsabile regionale delle vendite",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Guidare un team di 15 rappresentanti di vendita in Texas e Oklahoma\nFatti crescere i ricavi regionali da $4M a $7.5M in 3 anni\nAlzato il tasso di vincita dal 22% al 34% con coaching e revisioni della pipeline migliori\nDimezzato il turnover dei rappresentanti con un nuovo programma di inserimento"
      },
      {
        "role": "Rappresentante di vendita",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "giu 2015",
        "end": "dic 2020",
        "current": false,
        "points": "Vendute attrezzature industriali a 80+ conti, raggiungendo la quota per 5 anni consecutivi\nMiglior rappresentante della regione per 3 anni consecutivi\nCreata una rete di referral che ha portato il 25% dei nuovi affari"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Corsi in gestione delle vendite e negoziazione."
      }
    ],
    "skills": "Leadership del team di vendita (15 rappresentanti)\nCrescita dei ricavi e previsioni\nGestione della pipeline (Salesforce)\nCoaching e inserimento\nNegoziazione\nPianificazione del territorio",
    "languages": "Inglese (fluente)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Responsabile di cantiere",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Responsabile di cantiere con 12 anni di esperienza nella realizzazione di progetti commerciali e residenziali fino a $12M. Completati 20+ progetti con un tasso di puntualità del 95%, zero infortuni con perdita di giornate nei miei cantieri e budget mantenuti entro il 3%. Competente in pianificazione, gestione dei subappaltatori e sicurezza.",
    "experience": [
      {
        "role": "Responsabile di cantiere",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "feb 2020",
        "end": "",
        "current": true,
        "points": "Realizzare progetti commerciali e residenziali fino a $12M\nCompletati 20+ progetti con un tasso di puntualità del 95% e budget entro il 3%\nGestire 30+ subappaltatori e 50 lavoratori in 3 cantieri attivi\nZero infortuni con perdita di giornate in tutte le sedi in 4 anni"
      },
      {
        "role": "Supervisore di cantiere",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "giu 2013",
        "end": "gen 2020",
        "current": false,
        "points": "Gestite le operazioni quotidiane in cantiere per costruzioni d'ufficio e retail\nCoordinate consegne, ispezioni e programmi dei subappaltatori\nMantenuti i registri di sicurezza puliti e superata ogni ispezione OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Costruzioni edilizie",
        "start": "2009",
        "end": "2013",
        "notes": "Certificato OSHA 30. Candidato CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Programmazione dei progetti (MS Project, Procore)\nControllo del budget\nGestione dei subappaltatori\nSicurezza in cantiere (OSHA 30)\nLettura di disegni tecnici\nReportistica ai clienti",
    "languages": "Inglese (fluente)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Assistente medico certificato",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Assistente medico certificato con 5 anni di esperienza in medicina di famiglia e cure urgenti. Accogliere 25+ pazienti al giorno, rilevare i parametri vitali, prelevare sangue e gestire la reception con un punteggio di soddisfazione dei pazienti del 97%. Competente in EHR, flebotomia e verifiche assicurative.",
    "experience": [
      {
        "role": "Assistente medico certificato",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "apr 2021",
        "end": "",
        "current": true,
        "points": "Accogliere 25+ pazienti al giorno: parametri vitali, anamnesi e preparazione agli esami\nPrelevare sangue ed eseguire esami di laboratorio di base con un tasso di successo al primo tentativo del 99%\nGestire la reception, la pianificazione e le verifiche assicurative\nMantenere un punteggio di soddisfazione dei pazienti del 97% su 800+ sondaggi"
      },
      {
        "role": "Assistente medico",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "ago 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Fatto il triage dei pazienti walk-in e assistito i medici in procedure minori\nSomministrate vaccinazioni e gestita la raccolta dei campioni\nMantenute le sale visita rifornite, pulite e pronte tra un paziente e l'altro"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificato",
        "field": "Assistenza medica",
        "start": "2018",
        "end": "2019",
        "notes": "Assistente medico certificato (CMA, AAMA). Certificato BLS. Formato in flebotomia."
      }
    ],
    "skills": "Accoglienza e parametri vitali dei pazienti\nFlebotomia\nEHR (eClinicalWorks)\nVaccinazioni\nVerifica assicurativa\nGestione della reception",
    "languages": "Inglese (fluente)\nSpagnolo (fluente)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Studente",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Studente dell'ultimo anno di scuola superiore motivato, con buoni voti ed esperienza di lavoro part-time. Rapido nell'apprendere, affidabile e bravo con le persone. In cerca di un primo ruolo a tempo pieno o di un lavoro part-time accanto al college.",
    "experience": [
      {
        "role": "Assistente alle vendite part-time",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "set 2024",
        "end": "",
        "current": true,
        "points": "Servire 50+ clienti per turno nei fine settimana e dopo la scuola\nGestire la cassa, rifornire gli scaffali e mantenere in ordine le esposizioni\nFidato per aprire il negozio il sabato mattina"
      },
      {
        "role": "Tutor volontario",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "gen 2024",
        "end": "giu 2025",
        "current": false,
        "points": "Fatto tutoraggio in matematica ad alunni più giovani due volte a settimana\nAiutato a organizzare il programma estivo di lettura per 40 bambini"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diploma di scuola superiore",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "Media 3.6. Albo d'onore, 3 anni. Capitano della squadra di dibattito."
      }
    ],
    "skills": "Servizio clienti\nGestione della cassa\nLavoro di squadra\nGestione del tempo\nMicrosoft Office\nParlare in pubblico (squadra di dibattito)",
    "languages": "Inglese (fluente)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Neolaureato recente \u2014 Amministrazione aziendale",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Neolaureato recente in amministrazione aziendale con esperienza di tirocinio in marketing e operazioni. Organizzata una gara imprenditoriale universitaria con 200 partecipanti e completato un tirocinio di 6 mesi in cui ho dimezzato i tempi di reportistica. Desideroso di iniziare una carriera a tempo pieno e di imparare rapidamente.",
    "experience": [
      {
        "role": "Stagista marketing",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "gen 2025",
        "end": "giu 2025",
        "current": false,
        "points": "Gestiti gli account social dell'azienda, facendo crescere i follower da 2,000 a 6,500\nCreata una dashboard di reportistica che ha dimezzato i tempi di reportistica settimanale\nScritti 20 post di blog che hanno portato 15,000+ letture"
      },
      {
        "role": "Responsabile volontari eventi",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "set 2024",
        "end": "mag 2025",
        "current": false,
        "points": "Organizzata una gara imprenditoriale con 200 partecipanti e 12 giudici\nGestito un budget di $5,000 e un team di 8 volontari"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Amministrazione aziendale",
        "start": "2021",
        "end": "2025",
        "notes": "Media 3.5. Dean's List, 2 anni. Progetto di fine anno sul marketing per le piccole imprese."
      }
    ],
    "skills": "Marketing sui social media\nExcel e Google Sheets\nCapacità di presentazione\nOrganizzazione di eventi\nLavoro di squadra\nAnalisi dei dati di base",
    "languages": "Inglese (fluente)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Assistente marketing junior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Assistente marketing junior con 2 anni di esperienza in contenuti, email e social media. Fatta crescere una newsletter di un cliente da 1,000 a 4,000 iscritti e gestite campagne con un tasso medio di apertura del 22%. Pronto per maggiori responsabilità e un portafoglio conti più ampio.",
    "experience": [
      {
        "role": "Assistente marketing junior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "lug 2024",
        "end": "",
        "current": true,
        "points": "Fatta crescere una newsletter di un cliente da 1,000 a 4,000 iscritti in 14 mesi\nScrivere e pianificare 12 post social a settimana per 4 clienti\nGestire campagne email con un tasso medio di apertura del 22%\nRiportare i risultati delle campagne ai clienti ogni mese"
      },
      {
        "role": "Stagista marketing",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "gen 2024",
        "end": "giu 2024",
        "current": false,
        "points": "Scritte descrizioni di prodotto per 200+ articoli sul sito web dell'azienda\nAiutato a gestire una campagna di vendite primaverile che ha alzato gli ordini online del 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Comunicazione",
        "start": "2020",
        "end": "2024",
        "notes": "Media 3.4. Corsi in marketing digitale e scrittura per i media."
      }
    ],
    "skills": "Scrittura di contenuti\nEmail marketing (Mailchimp)\nGestione dei social media\nGoogle Analytics\nCanva\nReportistica ai clienti",
    "languages": "Inglese (fluente)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Supervisore operativo",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Supervisore operativo con 8 anni di esperienza nella gestione di team di magazzino di 20-30 persone. Ridotti gli errori di prelievo del 30%, alzata la puntualità delle spedizioni dal 90% al 97% e formati 15 nuovi arrivati. Pronto per un ruolo di direttore operativo con una sede e un budget più grandi.",
    "experience": [
      {
        "role": "Supervisore operativo",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Supervisionare 25 addetti al magazzino in 2 turni in un sito di 90,000 piedi quadrati\nRidotti gli errori di prelievo del 30% con nuove routine di controllo e scansione di codici a barre\nAlzata la puntualità delle spedizioni dal 90% al 97% in 2 anni\nFormati 15 nuovi arrivati e promossi 3 a ruoli di capo team"
      },
      {
        "role": "Capo team",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "giu 2017",
        "end": "feb 2021",
        "current": false,
        "points": "Guidato un team di 10 addetti al prelievo e all'imballaggio nel turno di notte\nIntrodotto un turno che ha ridotto gli straordinari del 20% senza perdere scadenze\nGestiti briefing di sicurezza e mantenuto il team senza incidenti per 2 anni"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Gestione della catena di fornitura",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Leadership di team (25 dipendenti)\nOperazioni di magazzino\nMiglioramento dei processi\nGestione della sicurezza\nControllo dell'inventario\nWMS ed Excel",
    "languages": "Inglese (fluente)\nHindi (colloquiale)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Project manager senior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Project manager senior con 14 anni di esperienza nella consegna di progetti software fino a $8M. Guidati 30+ progetti con un tasso di puntualità del 92%, costruito un PMO da zero e fatto da mentore a 10 project manager. Noto per una consegna calma sotto pressione e una reportistica onesta ai dirigenti.",
    "experience": [
      {
        "role": "Project manager senior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "gen 2019",
        "end": "",
        "current": true,
        "points": "Realizzare progetti software fino a $8M con un tasso di puntualità del 92%\nCostruito da zero il PMO dell'azienda: modelli, reportistica e governance\nFare da mentore a 10 project manager e gestire la comunità PM mensile\nRiportare direttamente al CTO su un programma di 40 persone"
      },
      {
        "role": "Project manager",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "giu 2012",
        "end": "dic 2018",
        "current": false,
        "points": "Gestiti 20+ progetti per clienti retail e sanitari\nIntrodotte pratiche Agile che hanno ridotto i tempi di consegna del 25%\nFatti crescere 2 conti chiave da $500k a $2M di ricavi annui"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Sistemi informativi",
        "start": "2008",
        "end": "2012",
        "notes": "Certificato PMP (2015). Certified ScrumMaster. Corsi MBA (2018-2019, incompleti)."
      }
    ],
    "skills": "Consegna di programmi e progetti\nConfigurazione e governance del PMO\nAgile e Waterfall\nControllo del budget ($8M)\nReportistica executive\nMentoring del team",
    "languages": "Inglese (fluente)\nSpagnolo (colloquiale)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Direttore operativo",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Direttore operativo con 18 anni di esperienza nella crescita operativa di aziende retail e logistiche. Fatta crescere un'operazione da 200 persone a 900 persone in 6 sedi, alzato il margine EBITDA dall'8% al 14% e guidate 2 acquisizioni. Esperienza in reportistica al consiglio e relazioni con gli investitori.",
    "experience": [
      {
        "role": "Direttore operativo",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "gen 2021",
        "end": "",
        "current": true,
        "points": "Gestire operazioni per 900 persone in 6 sedi e un budget di $180M\nAlzato il margine EBITDA dall'8% al 14% in 3 anni\nGuidate 2 acquisizioni e integrati entrambi i team entro 6 mesi\nRiportare al consiglio ogni mese su operazioni, rischi e crescita"
      },
      {
        "role": "Vicepresidente delle operazioni",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "giu 2014",
        "end": "dic 2020",
        "current": false,
        "points": "Operazioni scalate da 200 a 600 persone in 4 sedi\nAperti 3 centri di distribuzione in tempo e sotto budget\nCostruito il team dirigenziale che ancora oggi guida l'azienda"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Amministrazione aziendale",
        "start": "2010",
        "end": "2012",
        "notes": "Laurea triennale in Economia, NYU (2006). Corso di governance societaria (2020)."
      }
    ],
    "skills": "Operazioni su scala (900 persone)\nProprietà di P&L ($180M)\nFusioni e acquisizioni\nReportistica al consiglio di amministrazione\nStrategia di crescita\nCostruzione del team dirigenziale",
    "languages": "Inglese (fluente)",
    "template": "executive"
  }
};
});
