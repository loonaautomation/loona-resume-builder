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
      "title": "Infirmier diplômé",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Infirmier diplômé avec 6 ans d’expérience dans les unités médico-chirurgicales et de télémétrie. Compétent en évaluation des patients, thérapie IV, administration de médicaments et dossiers de santé électroniques. Reconnu pour une communication calme et claire avec les patients et les familles dans les situations de forte pression.",
    "experience": [
      {
        "role": "Infirmier diplômé",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "juin 2021",
        "end": "",
        "current": true,
        "points": "Soigner 5-6 patients par service dans une unité médico-chirurgicale de 32 lits, y compris l’évaluation, l’administration de médicaments et les soins des plaies\nFormer et mentorer 4 infirmiers jeunes diplômés, réduisant leur temps d’intégration de 2 semaines\nRéduit les erreurs de médication dans l’unité de 18 % en introduisant une routine de double vérification à la transmission\nDocumenter tous les soins avec précision dans les dossiers de santé électroniques Epic"
      },
      {
        "role": "Infirmier du personnel",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "août 2019",
        "end": "mai 2021",
        "current": false,
        "points": "Assuré le triage de 40+ patients sans rendez-vous par jour, en priorisant les cas urgents pour une prise en charge le jour même\nAdministré des vaccins et des dépistages de santé lors d’événements communautaires mensuels\nCoordonné les orientations vers des spécialistes et suivi les résultats d’examens"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Sciences infirmières",
        "start": "2015",
        "end": "2019",
        "notes": "Licence d’infirmier diplômé (Texas). Certifié BLS et ACLS."
      }
    ],
    "skills": "Évaluation des patients\nThérapie IV et administration de médicaments\nDossiers de santé électroniques (Epic)\nSuivi télémétrique\nÉducation des patients et des familles\nContrôle des infections",
    "languages": "Anglais (courant)\nEspagnol (conversation)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Développeur de logiciels",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Développeur de logiciels avec 5 ans d’expérience dans la création d’applications web en Python et JavaScript. Livré des fonctionnalités utilisées par 200 000+ utilisateurs, réduit les temps de réponse de l’API de 40 % et mené la migration d’un monolithe vers des microservices. Solide en tests, revue de code et documentation claire.",
    "experience": [
      {
        "role": "Développeur de logiciels",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mars 2022",
        "end": "",
        "current": true,
        "points": "Créer et maintenir des fonctionnalités web destinées aux clients en Python (Django) et React, au service de 200 000+ utilisateurs\nRéduit le temps de réponse moyen de l’API de 850 ms à 500 ms en ajoutant une mise en cache et en corrigeant les requêtes lentes\nMené la migration du service de facturation vers des microservices sans aucun temps d’arrêt\nExaminer 10+ demandes de tirage par semaine et mentorer 2 développeurs juniors"
      },
      {
        "role": "Développeur junior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "juillet 2020",
        "end": "février 2022",
        "current": false,
        "points": "Créé des tableaux de bord internes en JavaScript qui ont remplacé les feuilles de calcul manuelles pour 3 équipes\nÉcrit des tests automatisés qui ont relevé la couverture de 45 % à 78 %\nCorrigé 120+ bugs sur l’ensemble du produit dès la première année"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatique",
        "start": "2016",
        "end": "2020",
        "notes": "Cours en bases de données, algorithmes et systèmes d’exploitation."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript et React\nPostgreSQL et Redis\nAPI REST et microservices\nGit et CI/CD\nTests automatisés (pytest, Jest)",
    "languages": "Anglais (courant)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Enseignant du primaire",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Enseignant du primaire avec 7 ans d’expérience dans l’enseignement des classes 3-5. Compétent en enseignement différencié, gestion de classe et communication avec les parents. Fait passer la maîtrise de la lecture dans ma classe de 58 % à 81 % en deux années scolaires.",
    "experience": [
      {
        "role": "Enseignant du primaire (Grade 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "août 2020",
        "end": "",
        "current": true,
        "points": "Enseigner la lecture, les mathématiques et les sciences à une classe de 26 élèves, dont 5 avec des plans d’apprentissage individuels\nRelevé la maîtrise de la lecture de la classe de 58 % à 81 % en deux ans grâce à des groupes de lecture guidée\nAnimer une newsletter hebdomadaire pour les parents et des réunions de progression trimestrielles pour chaque famille\nDiriger le club de lecture de l’école pour 40 élèves des classes 3-5"
      },
      {
        "role": "Enseignant du primaire (Grade 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "août 2018",
        "end": "juin 2020",
        "current": false,
        "points": "Planifié et donné des cours quotidiens pour 24 élèves dans toutes les matières principales\nIntroduit des routines de comportement qui ont réduit de moitié les perturbations en classe\nOrganisé la foire scientifique du niveau avec 120 élèves et 80 parents"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Enseignement primaire",
        "start": "2014",
        "end": "2018",
        "notes": "Licence d’enseignement d’État (Ohio, classes K-5). Mention lecture."
      }
    ],
    "skills": "Enseignement différencié\nGestion de classe\nGroupes de lecture guidée\nCommunication avec les parents\nPlanification des cours\nGoogle Classroom",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Comptable senior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA avec 8 ans d’expérience en clôture mensuelle, reporting financier et audit interne. Clôture des livres 3 jours plus vite en reconstruisant le processus de rapprochement et découverte de $240 000 de trop-perçus récupérables en une année d’audit. Solide en Excel, QuickBooks et systèmes ERP.",
    "experience": [
      {
        "role": "Comptable senior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Assurer la clôture mensuelle d’une unité commerciale de $40M, en terminant 3 jours plus vite après avoir reconstruit les rapprochements\nPréparer les états financiers mensuels et les rapports d’écarts pour la direction senior\nDécouvert $240 000 de trop-perçus fournisseurs récupérables lors de l’audit interne de 2024\nSuperviser 2 comptables du personnel et examiner leurs écritures"
      },
      {
        "role": "Comptable du personnel",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "juin 2017",
        "end": "décembre 2020",
        "current": false,
        "points": "Préparé des déclarations fiscales et des états financiers pour 25 clients petites entreprises\nParticipé aux audits de 8 clients, en testant les contrôles et en documentant les constats\nAutomatisation du registre des immobilisations dans Excel, économisant 6 heures par mois"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Comptabilité",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Membre de l’AICPA."
      }
    ],
    "skills": "Clôture mensuelle et rapprochements\nReporting financier et analyse des écarts\nAudit interne\nExcel (tableaux croisés dynamiques, RECHERCHEV)\nQuickBooks et SAP\nPréparation fiscale",
    "languages": "Anglais (courant)\nMandarin (conversation)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Conducteur de camion CDL Class A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Conducteur CDL Class A avec 9 ans d’expérience en transport longue distance et régional. Plus de 900 000 miles sans accident, un taux de livraison à l’heure de 99 % et une expérience des chargements frigorifiques, plateaux et fourgons secs. Dossier de conduite vierge, mentions matières dangereuses et citerne.",
    "experience": [
      {
        "role": "Conducteur de camion longue distance",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "avril 2019",
        "end": "",
        "current": true,
        "points": "Parcourir 2 800+ miles par semaine sur des routes régionales à travers le Texas, l’Oklahoma et le Nouveau-Mexique\nMaintenir un taux de livraison à l’heure de 99 % sur 1 100+ chargements par an\nTransporter des chargements frigorifiques et fourgons secs ; effectuer chaque jour les inspections avant et après trajet\nPlus de 900 000 miles sans accident au total"
      },
      {
        "role": "Conducteur de camion de livraison",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mars 2016",
        "end": "mars 2019",
        "current": false,
        "points": "Livré des matériaux de construction sur 15-20 chantiers par jour dans la région de Dallas-Fort Worth\nConduit des chariots élévateurs et sécurisé des chargements plateaux selon les normes DOT\nTenu les documents et journaux de livraison exacts sans aucune violation DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificat",
        "field": "Conduite commerciale (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A avec mentions matières dangereuses et citerne. Dossier de conduite vierge."
      }
    ],
    "skills": "Conduite longue distance et régionale\nChargements frigorifiques et plateaux\nRéglementation DOT et journaux de bord\nInspections avant trajet\nPlanification d’itinéraires (GPS, ELD)\nConduite de chariots élévateurs",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Vendeur en magasin",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Vendeur en magasin avec 4 ans d’expérience dans des magasins d’électronique et d’habillement. Constamment parmi les 3 meilleurs vendeurs de l’équipe, avec un taux de vente complémentaire de 32 % sur les garanties et accessoires. Amical, rapide à la caisse et de confiance pour ouvrir et fermer le magasin.",
    "experience": [
      {
        "role": "Vendeur senior",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "février 2022",
        "end": "",
        "current": true,
        "points": "Vendre de l’électronique et des accessoires à 60+ clients par jour ; parmi les 3 meilleurs vendeurs du magasin pendant 8 trimestres consécutifs\nAtteindre un taux de vente complémentaire de 32 % sur les garanties et accessoires, le plus élevé de l’équipe\nFormer 6 nouveaux arrivants à la caisse, à la réserve et aux normes de service client\nDétenteur de clés de confiance : ouvrir et fermer le magasin et gérer les comptages de caisse"
      },
      {
        "role": "Vendeur",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "juin 2021",
        "end": "janvier 2022",
        "current": false,
        "points": "Aidé les clients à choisir des tenues et des tailles dans un magasin très fréquenté\nGardé les présentoirs soignés et réassorti les rayons à chaque service\nTraité les retours et les échanges poliment, en réduisant les plaintes au minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Diplôme d’associé",
        "field": "Commerce",
        "start": "2019",
        "end": "2021",
        "notes": "Études à temps partiel tout en travaillant dans le commerce de détail."
      }
    ],
    "skills": "Service client et vente complémentaire\nEncaissement et systèmes de point de vente\nConnaissance des produits (électronique)\nGestion des stocks\nOuverture et fermeture du magasin\nFormation d’équipe",
    "languages": "Anglais (courant)\nEspagnol (courant)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Conseiller du service client",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Conseiller du service client avec 5 ans d’expérience dans l’assistance par téléphone, e-mail et discussion en direct. Résolution de 45+ dossiers par jour avec un score de satisfaction de 96 % et un taux de résolution au premier contact de 88 %. Calme avec les clients en colère et rapide à trouver la solution.",
    "experience": [
      {
        "role": "Conseiller du service client",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "mai 2021",
        "end": "",
        "current": true,
        "points": "Traiter 45+ dossiers par téléphone, e-mail et discussion par jour pour la facturation, les commandes et les problèmes techniques\nMaintenir un score de satisfaction client de 96 % et un taux de résolution au premier contact de 88 %\nDésamorcer les appels difficiles et transformer les plaintes en clients fidèles\nFormer 5 nouveaux agents aux scripts, systèmes et ton"
      },
      {
        "role": "Agent d’assistance",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "septembre 2019",
        "end": "avril 2021",
        "current": false,
        "points": "Répondu aux e-mails et discussions des clients au sujet des commandes, retours et remboursements\nMaintenu un temps de première réponse moyen inférieur à 2 heures\nÉcrit 20 articles de centre d’aide qui ont réduit les questions répétées d’un quart"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Diplôme d’associé",
        "field": "Administration des affaires",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Assistance par téléphone, e-mail et discussion en direct\nTraitement des plaintes et désescalade\nSystèmes CRM (Zendesk, Salesforce)\nQuestions de facturation et de commandes\nFrappe 55 mpm\nFormation d’équipe",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Responsable des opérations",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Responsable des opérations avec 12 ans d’expérience dans la direction d’équipes allant jusqu’à 80 personnes dans l’entreposage et la distribution. Réduit les coûts de traitement des commandes de 22 %, relevé les expéditions à l’heure de 91 % à 98 % et ouvert deux nouveaux sites à temps et sous le budget.",
    "experience": [
      {
        "role": "Responsable des opérations",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "février 2020",
        "end": "",
        "current": true,
        "points": "Gérer un centre de distribution de 120 000 pieds carrés avec 80 employés sur 3 rotations\nRéduit les coûts de traitement des commandes de 22 % en reconcevant les trajets de prélèvement et les rotations\nRelevé les expéditions à l’heure de 91 % à 98 % en 18 mois\nOuvert 2 nouveaux sites à temps et 8 % sous le budget"
      },
      {
        "role": "Superviseur d’entrepôt",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "juin 2013",
        "end": "janvier 2020",
        "current": false,
        "points": "Supervisé 25 employés d’entrepôt et l’envoi quotidien de 4 000+ commandes\nIntroduit la lecture de codes-barres, réduisant les erreurs de prélèvement de 35 %\nAnimé une formation sécurité qui a gardé le site sans accident pendant 3 ans"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Gestion des opérations",
        "start": "2009",
        "end": "2013",
        "notes": "Ceinture verte Six Sigma."
      }
    ],
    "skills": "Leadership d’équipe (jusqu’à 80 employés)\nEntreposage et distribution\nAmélioration des processus\nBudgétisation et contrôle des coûts\nGestion de la sécurité\nSystèmes ERP et WMS",
    "languages": "Anglais (courant)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Électricien agréé",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Électricien compagnon agréé avec 8 ans d’expérience en travaux résidentiels et commerciaux. Compétent en câblage, modernisation de tableaux, éclairage et recherche de pannes, avec un dossier de sécurité vierge sur 400+ chantiers. Connaissance du code NEC et expérience de supervision d’apprentis.",
    "experience": [
      {
        "role": "Électricien compagnon",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mars 2019",
        "end": "",
        "current": true,
        "points": "Réaliser 400+ chantiers résidentiels et commerciaux : câblage, modernisation de tableaux, éclairage et bornes de recharge pour véhicules électriques\nDiagnostiquer et réparer les pannes rapidement, avec un taux de résolution dès la première visite de 92 %\nSuperviser 2 apprentis et valider leur travail selon les normes\nMaintenir un dossier de sécurité vierge sans aucun accident avec arrêt"
      },
      {
        "role": "Apprenti électricien",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "juin 2016",
        "end": "février 2019",
        "current": false,
        "points": "Assisté des électriciens agréés sur le câblage de constructions neuves et les rénovations\nAppris le cintrage de conduits, le tirage de câbles et l’installation de tableaux\nTerminé 8 000 heures d’apprentissage et réussi l’examen de compagnon du premier coup"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificat",
        "field": "Technologie électrique",
        "start": "2015",
        "end": "2016",
        "notes": "Licence d’électricien compagnon (Colorado). Certifié OSHA 30."
      }
    ],
    "skills": "Câblage résidentiel et commercial\nModernisation de tableaux et bornes de recharge\nRecherche de pannes et tests\nConformité au code NEC\nCintrage de conduits et tirage de câbles\nSupervision d’apprentis",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analyste financier",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analyste financier avec 6 ans d’expérience en budgétisation, prévisions et analyse d’investissement. Créé des modèles de prévision qui ont réduit l’écart budgétaire de 30 % et soutenu $50M de décisions d’investissement. Solide en Excel, SQL et modélisation financière.",
    "experience": [
      {
        "role": "Analyste financier",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "avril 2021",
        "end": "",
        "current": true,
        "points": "Élaborer des prévisions mensuelles et des budgets annuels pour un portefeuille de $120M\nRéduit l’écart budgétaire de 30 % grâce à un modèle de prévision basé sur les facteurs\nSoutenir des décisions d’investissement d’une valeur de $50M avec des analyses d’évaluation et de scénarios\nPrésenter les résultats chaque mois au CFO et aux chefs de département"
      },
      {
        "role": "Analyste financier junior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "juillet 2019",
        "end": "mars 2021",
        "current": false,
        "points": "Préparé des rapports de performance hebdomadaires pour 12 agences\nReporting automatisé dans Excel, économisant 10 heures par semaine\nAssisté l’équipe crédit dans l’analyse du portefeuille de prêts"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finance",
        "start": "2015",
        "end": "2019",
        "notes": "Candidat au CFA Level II. Cours en évaluation et finance d’entreprise."
      }
    ],
    "skills": "Modélisation et prévision financières\nBudgétisation et analyse des écarts\nÉvaluation (DCF, comparables)\nExcel (avancé) et SQL\nTerminal Bloomberg\nVisualisation de données (Power BI)",
    "languages": "Anglais (courant)\nHindi (courant)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Ingénieur civil",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Ingénieur civil (PE) avec 7 ans d’expérience en conception d’infrastructures routières et hydrauliques. Direction de la conception d’un élargissement d’autoroute de 12 miles et d’un système d’eaux pluviales desservant 8 000 foyers. Compétent en AutoCAD Civil 3D, estimation des coûts et coordination des permis.",
    "experience": [
      {
        "role": "Ingénieur civil",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Diriger la conception d’un élargissement d’autoroute de 12 miles, de l’étude aux documents de construction\nConçu un système d’eaux pluviales desservant 8 000 foyers, approuvé du premier coup par la ville\nCoordonner les permis avec 4 agences et gérer un budget de conception de $2,5M\nExaminer et tamponner les dessins en tant qu’ingénieur professionnel agréé"
      },
      {
        "role": "Ingénieur civil junior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "juillet 2018",
        "end": "décembre 2020",
        "current": false,
        "points": "Préparé des plans de nivellement et de drainage pour 20+ lotissements résidentiels\nEffectué des estimations de coûts et des métrés pour des projets routiers\nParticipé à des inspections de chantier et rédigé des rapports d’avancement"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Génie civil",
        "start": "2014",
        "end": "2018",
        "notes": "Licence d’ingénieur professionnel (Washington). EIT réussi en 2018."
      }
    ],
    "skills": "Conception de routes et de drainage\nAutoCAD Civil 3D\nModélisation des eaux pluviales\nEstimation des coûts\nCoordination des permis\nOrdonnancement de projets (MS Project)",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Ingénieur mécanicien",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Ingénieur mécanicien avec 6 ans d’expérience dans la conception de systèmes CVC et d’équipements de production. Réduit la consommation d’énergie de 18 % sur 3 usines grâce à des gaines et des contrôles reconçus, et mené une reconception de machine qui a relevé la production de 25 %. Compétent en SolidWorks, analyse FEA et thermique.",
    "experience": [
      {
        "role": "Ingénieur mécanicien",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "février 2021",
        "end": "",
        "current": true,
        "points": "Concevoir des systèmes CVC et des équipements de production pour 3 usines de 400+ employés\nRéduit la consommation d’énergie de 18 % en reconcevant les gaines et les séquences de contrôle\nMené une reconception de machine qui a relevé la production de 25 % sans surface au sol supplémentaire\nEffectuer des analyses FEA et thermiques sur de nouvelles pièces avant le prototypage"
      },
      {
        "role": "Ingénieur mécanicien junior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "août 2019",
        "end": "janvier 2021",
        "current": false,
        "points": "Modélisé des pièces et des assemblages dans SolidWorks pour des clients automobiles\nPréparé des dessins, des nomenclatures et des rapports de tests\nSoutenu les constructions de prototypes et résolu les problèmes d’ajustement en atelier"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Génie mécanique",
        "start": "2015",
        "end": "2019",
        "notes": "Cours en thermodynamique, mécanique des fluides et conception de machines."
      }
    ],
    "skills": "Conception CVC\nSolidWorks and AutoCAD\nAnalyse FEA et thermique\nConception de machines\nEfficacité énergétique\nGD&T et tolérancement",
    "languages": "Anglais (courant)\nCoréen (conversation)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Ingénieur électricien",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Ingénieur électricien avec 6 ans d’expérience en systèmes embarqués et électronique de puissance. Conçu des cartes de contrôle désormais utilisées dans 50 000+ appareils et réduit le coût des cartes de 22 % grâce à la reconception des composants. Compétent en Altium, C, tests de micrologiciel et conformité CEM.",
    "experience": [
      {
        "role": "Ingénieur électricien",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mars 2021",
        "end": "",
        "current": true,
        "points": "Concevoir des cartes de contrôle embarquées utilisées dans 50 000+ appareils par an\nRéduit le coût des cartes de 22 % en reconcevant l’étage d’alimentation et en trouvant des composants alternatifs\nDiriger les tests de conformité CEM, réussis du premier coup sur 4 gammes de produits\nÉcrire et réviser du micrologiciel en C pour microcontrôleurs"
      },
      {
        "role": "Ingénieur électricien junior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "juillet 2019",
        "end": "février 2021",
        "current": false,
        "points": "Disposé des PCB dans Altium pour des clients grand public et industriels\nConstruit et testé des prototypes, en déboguant les défauts matériels\nÉcrit des procédures de test qui ont réduit le temps de test en production de 30 %"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Génie électrique",
        "start": "2015",
        "end": "2019",
        "notes": "Cours en systèmes embarqués, électronique de puissance et traitement du signal."
      }
    ],
    "skills": "Systèmes embarqués et conception de PCB\nAltium Designer\nC et micrologiciel\nÉlectronique de puissance\nTests de conformité CEM\nOscilloscopes et instruments de laboratoire",
    "languages": "Anglais (courant)\nGujarati (conversation)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analyste de données",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analyste de données avec 4 ans d’expérience à transformer les données de ventes et d’opérations en décisions. Créé des tableaux de bord utilisés par 60+ managers, réduit le temps de reporting mensuel de 3 jours à 4 heures et découvert une erreur de prix valant $180 000 par an. Solide en SQL, Excel et Power BI.",
    "experience": [
      {
        "role": "Analyste de données",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "janvier 2022",
        "end": "",
        "current": true,
        "points": "Créer des tableaux de bord Power BI utilisés par 60+ responsables de magasin et régionaux\nRéduit le reporting mensuel de 3 jours à 4 heures grâce à des pipelines SQL automatisés\nDécouvert une erreur de prix valant $180 000 par an en auditant les données de promotion\nPrésenter les résultats chaque mois à l’équipe commerciale"
      },
      {
        "role": "Analyste de données junior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "août 2020",
        "end": "décembre 2021",
        "current": false,
        "points": "Nettoyé et joint les données de livraison de 4 systèmes dans une seule table de reporting\nCréé des suivis Excel qui ont remplacé les comptages manuels pour 2 équipes\nRépondu chaque jour aux questions de données ponctuelles des responsables des opérations"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistiques",
        "start": "2016",
        "end": "2020",
        "notes": "Cours en régression, bases de données et visualisation de données."
      }
    ],
    "skills": "SQL et nettoyage de données\nPower BI et Tableau\nExcel (avancé)\nPython (pandas)\nDesign de tableaux de bord\nBases des tests A/B",
    "languages": "Anglais (courant)\nVietnamien (conversation)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Scientifique des données",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Scientifique des données avec 5 ans d’expérience dans la création de modèles d’apprentissage automatique pour le e-commerce. Un modèle de recommandation que j’ai livré a relevé le revenu par visite de 12 %, et un modèle de désabonnement signale désormais 80 % des clients à risque. Solide en Python, SQL et déploiement de modèles.",
    "experience": [
      {
        "role": "Scientifique des données",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "février 2022",
        "end": "",
        "current": true,
        "points": "Livré un modèle de recommandation qui a relevé le revenu par visite de 12 %\nCréé un modèle de désabonnement qui signale 80 % des clients à risque un mois à l’avance\nDéployé des modèles en production avec des pipelines de suivi et de réentraînement\nPrésenter les résultats des modèles aux équipes produit et marketing chaque mois"
      },
      {
        "role": "Scientifique des données junior",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "juillet 2020",
        "end": "janvier 2022",
        "current": false,
        "points": "Créé des modèles de prévision pour 3 clients du commerce de détail avec une précision de 90 %+\nNettoyé et préparé des jeux de données de 10M+ lignes pour la modélisation\nÉcrit de la documentation pour que les clients puissent réexécuter les modèles eux-mêmes"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Science des données",
        "start": "2018",
        "end": "2020",
        "notes": "Thèse sur les systèmes de recommandation. Licence en mathématiques (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nApprentissage automatique et statistiques\nSQL et Spark\nDéploiement de modèles (Docker, AWS)\nTests A/B\nVisualisation de données",
    "languages": "Anglais (courant)\nArabe (courant)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Développeur web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Développeur web avec 4 ans d’expérience dans la création de sites web rapides et accessibles en HTML, CSS et JavaScript. Reconstruit le paiement d’une boutique qui a relevé les conversions de 18 % et maintient 12 sites clients avec une disponibilité de 99,9 %. Solide en design responsive, performance et bases du SEO.",
    "experience": [
      {
        "role": "Développeur web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mars 2022",
        "end": "",
        "current": true,
        "points": "Créer des sites web responsives en HTML, CSS, JavaScript et WordPress pour 12 clients\nReconstruit le paiement d’une boutique qui a relevé les conversions de 18 %\nRéduit le temps de chargement moyen des pages de 4,2 s à 1,8 s grâce à l’optimisation des images et du code\nMaintenir tous les sites clients à 99,9 % de disponibilité avec suivi et sauvegardes"
      },
      {
        "role": "Développeur web junior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "juin 2021",
        "end": "février 2022",
        "current": false,
        "points": "Créé des pages d’atterrissage et corrigé des bugs sur 20+ sites de petites entreprises\nAppris Git, le design responsive et le SEO de base sur des projets réels\nRépondu aux e-mails des clients et effectué les mises à jour de contenu le jour même"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatique",
        "start": "2017",
        "end": "2021",
        "notes": "Cours en développement web, bases de données et interaction homme-machine."
      }
    ],
    "skills": "HTML, CSS et JavaScript\nReact et WordPress\nDesign responsive\nOptimisation de la vitesse des pages\nGit et GitHub\nSEO de base",
    "languages": "Anglais (courant)\nEspagnol (courant)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Graphiste",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Graphiste avec 5 ans d’expérience en image de marque, emballage et design pour réseaux sociaux. Créé des identités de marque pour 25+ petites entreprises et une refonte d’emballage qui a relevé les ventes en rayon de 14 %. Compétent en Adobe Illustrator, Photoshop et Figma.",
    "experience": [
      {
        "role": "Graphiste",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "janvier 2022",
        "end": "",
        "current": true,
        "points": "Concevoir des identités de marque, des emballages et des campagnes sociales pour 25+ clients\nLa refonte de l’emballage d’une marque alimentaire a relevé les ventes en rayon de 14 %\nProduire 30+ contenus sociaux par semaine sur Instagram, TikTok et Facebook\nPrésenter des concepts aux clients et réviser rapidement à partir des retours"
      },
      {
        "role": "Graphiste junior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "juillet 2020",
        "end": "décembre 2021",
        "current": false,
        "points": "Conçu des flyers, des menus et des publications sociales pour des restaurants et des boutiques locaux\nPréparé des fichiers prêts à imprimer et vérifié les épreuves avec les imprimeurs\nCréé une bibliothèque de modèles qui a réduit le temps de design d’un tiers"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Design graphique",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio en design d’image de marque et d’emballage."
      }
    ],
    "skills": "Adobe Illustrator et Photoshop\nFigma\nDesign d’identité de marque\nDesign d’emballage\nDesign pour réseaux sociaux\nProduction d’impression",
    "languages": "Anglais (courant)\nCoréen (conversation)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Concepteur UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Concepteur UX avec 5 ans d’expérience dans la recherche utilisateur et la conception de produits mobiles et web. Reconçu un parcours d’intégration qui a réduit l’abandon de 35 % et effectué 40+ tests d’utilisabilité. Compétent en Figma, recherche utilisateur, wireframing et prototypage.",
    "experience": [
      {
        "role": "Concepteur UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "février 2022",
        "end": "",
        "current": true,
        "points": "Reconçu l’intégration mobile, réduisant l’abandon de 35 % en 3 mois\nEffectuer 40+ tests d’utilisabilité et entretiens utilisateurs par an\nCréer des maquettes et des prototypes dans Figma pour 2 équipes produit\nTravailler chaque jour avec des ingénieurs et des chefs de produit sur la livraison"
      },
      {
        "role": "Concepteur UX junior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "août 2020",
        "end": "janvier 2022",
        "current": false,
        "points": "Conçu des écrans et des parcours pour 5 applications clientes\nMené les premiers tests d’utilisabilité et rédigé les constats pour les clients\nCréé une bibliothèque de composants qui a accéléré la transmission du design"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychologie",
        "start": "2016",
        "end": "2020",
        "notes": "Certificat de design UX (General Assembly, 2020). Cours en interaction homme-machine."
      }
    ],
    "skills": "Recherche utilisateur et tests d’utilisabilité\nWireframing et prototypage (Figma)\nArchitecture de l’information\nSystèmes de design\nCartographie de parcours\nAteliers avec les parties prenantes",
    "languages": "Anglais (courant)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Responsable marketing",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Responsable marketing avec 8 ans d’expérience en campagnes B2B et grand public. Augmenté les prospects qualifiés de 60 % en un an, lancé une gamme de produits qui a atteint $3M de ventes dès la première année et géré un budget annuel de $500 000 au sein d’une équipe de 5.",
    "experience": [
      {
        "role": "Responsable marketing",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mars 2021",
        "end": "",
        "current": true,
        "points": "Diriger une équipe de 5 et un budget marketing annuel de $500 000\nAugmenté les prospects qualifiés de 60 % en un an grâce au contenu et aux campagnes payantes\nLancé une gamme de produits qui a atteint $3M de ventes dès la première année\nRéduit le coût par prospect de 28 % en reconstruisant le ciblage des campagnes"
      },
      {
        "role": "Spécialiste marketing",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "juin 2017",
        "end": "février 2021",
        "current": false,
        "points": "Mené des campagnes e-mail auprès de 80 000 abonnés avec un taux d’ouverture de 24 %\nGéré des comptes sociaux qui sont passés de 5 000 à 40 000 abonnés\nOrganisé 6 stands de salon par an, générant 300+ prospects chacun"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Cours en comportement du consommateur, analytique et gestion de marque."
      }
    ],
    "skills": "Stratégie et planification de campagnes\nMarketing de contenu et par e-mail\nPublicité payante (Google, Meta)\nAnalytique marketing (GA4)\nLeadership d’équipe\nGestion du budget",
    "languages": "Anglais (courant)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Chef de projet",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Chef de projet (PMP) avec 7 ans d’expérience dans la livraison de projets logiciels et de construction à temps et dans le budget. Géré 15 projets d’une valeur allant jusqu’à $4M, avec un taux de livraison à l’heure de 94 %. Compétent en Agile, gestion des risques et communication avec les parties prenantes.",
    "experience": [
      {
        "role": "Chef de projet",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Gérer 15 projets d’une valeur allant jusqu’à $4M, avec un taux de livraison à l’heure de 94 %\nAnimer des sprints Agile pour 3 équipes et rapporter l’avancement aux dirigeants chaque semaine\nRéduit les dépassements de projets de 30 % grâce à des revues de risques plus précoces\nCoordonner fournisseurs, clients et équipes internes sur 4 fuseaux horaires"
      },
      {
        "role": "Coordinateur de projet",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "juillet 2018",
        "end": "décembre 2020",
        "current": false,
        "points": "Suivi les plannings, budgets et permis de 8 projets de construction\nPréparé des rapports d’état et des notes de réunion pour les clients\nRésolu des conflits de planning qui ont économisé 2 semaines sur la construction d’une école"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Administration des affaires",
        "start": "2014",
        "end": "2018",
        "notes": "Certifié PMP (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Planification et ordonnancement de projets\nAgile et Scrum\nGestion des risques\nContrôle budgétaire\nCommunication avec les parties prenantes\nMS Project et Jira",
    "languages": "Anglais (courant)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Responsable des ressources humaines",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Responsable des ressources humaines avec 9 ans d’expérience en recrutement, relations avec les employés et avantages sociaux. Réduit le délai de recrutement de 45 à 28 jours, relevé la rétention de 15 % et géré les RH pour 250 employés sur 3 sites. Connaissance de niveau CIPD du droit du travail et des politiques.",
    "experience": [
      {
        "role": "Responsable des ressources humaines",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "février 2020",
        "end": "",
        "current": true,
        "points": "Gérer les RH pour 250 employés sur 3 sites, avec une équipe de 3\nRéduit le délai de recrutement de 45 à 28 jours en reconstruisant le processus d’entretien\nRelevé la rétention de 15 % grâce à un nouveau programme d’intégration et d’évaluation\nGérer les relations avec les employés, les griefs et les mises à jour des politiques"
      },
      {
        "role": "Généraliste RH",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "juin 2016",
        "end": "janvier 2020",
        "current": false,
        "points": "Recruté 120+ employés par an pour des hôtels et des restaurants\nEffectué les contrôles de paie et les inscriptions aux avantages pour 400 employés\nRésolu des conflits du personnel et gardé le turnover sous la moyenne du secteur"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Ressources humaines",
        "start": "2012",
        "end": "2016",
        "notes": "Certifié SHRM-CP. Cours en droit du travail et comportement organisationnel."
      }
    ],
    "skills": "Recrutement et intégration\nRelations avec les employés\nAvantages sociaux et paie\nDroit du travail\nGestion de la performance\nSIRH (Workday, BambooHR)",
    "languages": "Anglais (courant)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Avocat associé",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Avocat associé avec 6 ans d’expérience en contentieux commercial et droit des contrats. Gestion de 40+ dossiers, jugements sommaires obtenus dans 8, et rédaction de contrats d’une valeur de $25M. Admis au barreau de l’Illinois ; compétent en recherche juridique, rédaction et conseil aux clients.",
    "experience": [
      {
        "role": "Avocat associé",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "septembre 2020",
        "end": "",
        "current": true,
        "points": "Gérer 40+ dossiers de contentieux commercial du dépôt au règlement\nObtenu des jugements sommaires dans 8 dossiers et réglé 20 autres favorablement\nRédiger et négocier des contrats d’une valeur allant jusqu’à $25M\nConseiller les clients en personne et par écrit sur les risques et la stratégie"
      },
      {
        "role": "Assistant juridique stagiaire",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "août 2019",
        "end": "août 2020",
        "current": false,
        "points": "Recherché la jurisprudence et rédigé des notes pour 2 juges\nExaminé des requêtes et préparé des résumés pour 100+ audiences\nObservé des procès et des conférences de règlement dans les divisions civiles"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Droit",
        "start": "2016",
        "end": "2019",
        "notes": "Admis au barreau de l’Illinois (2019). Revue de droit, rédacteur des articles."
      }
    ],
    "skills": "Contentieux commercial\nRédaction et négociation de contrats\nRecherche juridique (Westlaw, LexisNexis)\nConseil aux clients\nDépositions et découverte\nActes judiciaires et procédure",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Pharmacien clinicien",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Pharmacien clinicien (PharmD) avec 7 ans d’expérience en pharmacie hospitalière et de ville. Examen de 100+ ordonnances par jour, réduction des événements indésirables liés aux médicaments de 25 % grâce à un nouveau protocole de double vérification et conseil aux patients sur l’usage sûr des médicaments. Autorisé en Pennsylvanie.",
    "experience": [
      {
        "role": "Pharmacien clinicien",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "janvier 2020",
        "end": "",
        "current": true,
        "points": "Examiner 100+ ordonnances par jour pour la sécurité, le dosage et les interactions\nRéduit les événements indésirables liés aux médicaments de 25 % grâce à un nouveau protocole de double vérification\nConseiller médecins et infirmiers sur les choix de médicaments pour les patients complexes\nAnimer les tournées de bon usage des antibiotiques de l’hôpital deux fois par semaine"
      },
      {
        "role": "Pharmacien du personnel",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "juillet 2018",
        "end": "décembre 2019",
        "current": false,
        "points": "Délivré 200+ ordonnances par jour sans aucune erreur de délivrance\nConseillé les patients sur les nouveaux médicaments, les effets secondaires et la conservation\nAdministré des vaccins contre la grippe et effectué des contrôles de tension artérielle"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Pharmacie",
        "start": "2014",
        "end": "2018",
        "notes": "Pharmacien agréé (Pennsylvanie). Spécialiste certifié en pharmacothérapie (BCPS)."
      }
    ],
    "skills": "Revue et sécurité des médicaments\nPharmacologie clinique\nConseil aux patients\nSystèmes de pharmacie (Epic, PioneerRx)\nBon usage des antibiotiques\nServices de vaccination",
    "languages": "Anglais (courant)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Dentiste généraliste",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Dentiste généraliste (DDS) avec 8 ans d’expérience en dentisterie restauratrice, esthétique et préventive. Traitement de 25+ patients par jour dans un cabinet de 2 000 patients, avec un score de satisfaction patient de 98 %. Compétent en couronnes, implants, traitements de racine et aligneurs transparents.",
    "experience": [
      {
        "role": "Dentiste généraliste",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "février 2019",
        "end": "",
        "current": true,
        "points": "Traiter 25+ patients par jour : obturations, couronnes, traitements de racine et extractions\nMaintenir un score de satisfaction patient de 98 % sur 1 200+ avis\nPlacer 15+ implants par mois et gérer les cas d’aligneurs transparents\nSuperviser 2 hygiénistes et 4 assistants dentaires"
      },
      {
        "role": "Dentiste associé",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "juillet 2017",
        "end": "janvier 2019",
        "current": false,
        "points": "Fourni des soins dentaires généraux pour un cabinet de 1 500 patients\nIntroduit les couronnes le jour même, réduisant les visites de retour de 40 %\nEffectué des visites de sensibilisation scolaire sur la santé bucco-dentaire des enfants"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Dentisterie",
        "start": "2013",
        "end": "2017",
        "notes": "Dentiste agréé (Arizona). Certifié Invisalign. Certifié RCR/BLS."
      }
    ],
    "skills": "Dentisterie restauratrice (couronnes, obturations)\nTraitement de racine\nImplants dentaires\nAligneurs transparents\nSoins et communication avec les patients\nRadiographies numériques et CEREC",
    "languages": "Anglais (courant)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Kinésithérapeute",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Kinésithérapeute (DPT) avec 6 ans d’expérience en rééducation orthopédique et sportive. Traitement de 12-15 patients par jour, avec 90 % atteignant leurs objectifs dans les séances prévues. Compétent en thérapie manuelle, prescription d’exercices et tests de retour au sport.",
    "experience": [
      {
        "role": "Kinésithérapeute",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mars 2021",
        "end": "",
        "current": true,
        "points": "Traiter 12-15 patients par jour pour des blessures sportives, une rééducation post-chirurgicale et des douleurs dorsales\n90 % des patients atteignent leurs objectifs dans le nombre de séances prévu\nConcevoir des tests de retour au sport utilisés par 3 équipes locales\nMentorer 2 jeunes diplômés et superviser les stages étudiants"
      },
      {
        "role": "Kinésithérapeute du personnel",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "août 2019",
        "end": "février 2021",
        "current": false,
        "points": "Fourni une rééducation en hospitalisation pour des patients post-chirurgicaux et victimes d’AVC\nAnimé des cours d’exercice en groupe pour 20+ patients âgés par semaine\nProgression documentée dans Epic et transmission aux équipes des services"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Kinésithérapie",
        "start": "2016",
        "end": "2019",
        "notes": "Kinésithérapeute agréé (Oregon). Spécialiste clinique en orthopédie (OCS)."
      }
    ],
    "skills": "Rééducation orthopédique et sportive\nThérapie manuelle\nPrescription d’exercices\nTests de retour au sport\nÉducation des patients\nDocumentation (Epic)",
    "languages": "Anglais (courant)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Chef cuisinier en chef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Chef cuisinier en chef avec 10 ans d’expérience dans les cuisines créoles et américaines modernes. Diriger une brigade de 12 dans un restaurant de 200 places, réduit les coûts alimentaires de 15 % grâce à des commandes plus rigoureuses et gagné 'Best New Menu' du guide gastronomique de la ville en 2025.",
    "experience": [
      {
        "role": "Chef cuisinier en chef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Diriger une brigade de 12 dans un restaurant de 200 places servant 300+ couverts par soir\nRéduit les coûts alimentaires de 15 % grâce à des commandes plus rigoureuses et un menu de saison\nGagné 'Best New Menu' du guide gastronomique de la ville en 2025\nConcevoir les menus, former les cuisiniers et assurer le passe les vendredis et samedis de service"
      },
      {
        "role": "Sous-chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "juin 2017",
        "end": "décembre 2020",
        "current": false,
        "points": "Dirigé la cuisine lorsque le chef était absent, couvrant 150 couverts par soir\nGéré les stocks, les commandes et les relations fournisseurs\nFormé 8 cuisiniers de ligne et réduit le turnover du personnel d’un tiers"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diplôme",
        "field": "Arts culinaires",
        "start": "2014",
        "end": "2016",
        "notes": "Certifié ServSafe Food Protection Manager."
      }
    ],
    "skills": "Design et calcul des coûts des menus\nCuisine créole et américaine moderne\nDirection de cuisine (brigade de 12)\nSécurité alimentaire (ServSafe)\nGestion des fournisseurs\nTraiteur banquets et événements",
    "languages": "Anglais (courant)\nEspagnol (courant)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Policier",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Policier avec 8 ans d’expérience en patrouille, police communautaire et enquêtes. Réponse à 30+ appels par semaine, avec des distinctions pour la désescalade et l’action communautaire. Formé à l’intervention de crise, aux premiers secours et à la rédaction de rapports.",
    "experience": [
      {
        "role": "Policier",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "juin 2019",
        "end": "",
        "current": true,
        "points": "Patrouiller un district de 40 000 habitants, en répondant à 30+ appels par semaine\nReçu 2 distinctions pour la désescalade et l’action communautaire\nEnquêter sur les vols et les agressions, en rédigeant des rapports utilisés dans 50+ poursuites\nMentorer 3 nouveaux agents pendant leur formation sur le terrain"
      },
      {
        "role": "Agent de patrouille",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "août 2017",
        "end": "mai 2019",
        "current": false,
        "points": "Patrouillé les routes du comté et répondu aux appels d’urgence\nSignifié des actes judiciaires et aidé au transport de prisonniers\nFormation en intervention de crise et en premiers secours terminée"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificat",
        "field": "Application de la loi",
        "start": "2017",
        "end": "2017",
        "notes": "Diplômé de l’Ohio Peace Officer Training Academy. Formé à l’équipe d’intervention de crise."
      }
    ],
    "skills": "Patrouille et intervention d’urgence\nPolice communautaire\nIntervention de crise et désescalade\nRédaction de rapports\nEnquêtes\nPremiers secours et RCR",
    "languages": "Anglais (courant)",
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
    "summary": "Pompier et EMT avec 7 ans d’expérience en extinction d’incendies, sauvetage et intervention médicale d’urgence. Intervenu sur 900+ appels, dont des incendies de bâtiments, des sauvetages de véhicules et des urgences médicales. Formé aux matières dangereuses avec un dossier de sécurité vierge.",
    "experience": [
      {
        "role": "Pompier / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mars 2020",
        "end": "",
        "current": true,
        "points": "Répondre à 900+ appels d’incendie, de sauvetage et médicaux dans un district de 3 casernes\nFournir des soins médicaux d’urgence en tant qu’EMT certifié sur 60 % des appels\nFormé aux matières dangereuses ; diriger la décontamination lors d’incidents chimiques\nFormer les nouvelles recrues au maniement des tuyaux, aux échelles et aux techniques de recherche"
      },
      {
        "role": "Pompier bénévole",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "juin 2018",
        "end": "février 2020",
        "current": false,
        "points": "Intervenu sur des feux de forêt et de bâtiments en tant que bénévole\nFormation Firefighter I & II et EMT-Basic terminée\nAidé à animer des causeries communautaires sur la sécurité incendie dans les écoles"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificat",
        "field": "Science des incendies",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. Certifié EMT-Basic. Formé aux opérations matières dangereuses."
      }
    ],
    "skills": "Extinction d’incendies et sauvetage\nSoins médicaux d’urgence (EMT)\nOpérations matières dangereuses\nÉchelles, tuyaux et ventilation\nSécurité incendie communautaire\nTravail d’équipe sous pression",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Plombier agréé",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Plombier maître agréé avec 11 ans d’expérience en plomberie résidentielle et commerciale. Terminé 600+ chantiers par an, des installations brutes aux chaudières, avec un taux de résolution dès la première visite de 98 %. Compétent en tuyauterie, nettoyage de canalisations et conformité aux normes.",
    "experience": [
      {
        "role": "Plombier maître",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "janvier 2019",
        "end": "",
        "current": true,
        "points": "Réaliser 600+ chantiers résidentiels et commerciaux par an\nInstaller des chaudières, des chauffe-eau et des installations complètes de salle de bain\nMaintenir un taux de résolution dès la première visite de 98 % sur les appels de service\nSuperviser 3 apprentis et valider leur travail"
      },
      {
        "role": "Plombier compagnon",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "juin 2014",
        "end": "décembre 2018",
        "current": false,
        "points": "Assuré la plomberie de constructions neuves pour 40+ maisons par an\nDébouché les canalisations et réparé les fuites pour des maisons et des restaurants\nAppris le raccordement au gaz et la prévention des retours d’eau"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificat",
        "field": "Technologie de la plomberie",
        "start": "2013",
        "end": "2014",
        "notes": "Licence de plombier maître (Tennessee). Certifié en prévention des retours d’eau."
      }
    ],
    "skills": "Plomberie résidentielle et commerciale\nTuyauterie et brasage\nNettoyage de canalisations et inspection par caméra\nInstallation de chaudières et chauffe-eau\nRaccordement au gaz\nConformité au code de plomberie",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Charpentier compagnon",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Charpentier compagnon avec 9 ans d’expérience en charpente, finition et ébénisterie sur mesure. Charpenté 30+ maisons et installé des cuisines dans 60+ foyers, avec une réputation de mesures exactes et de finitions propres. Compétent en lecture de plans et travail conforme aux normes.",
    "experience": [
      {
        "role": "Charpentier compagnon",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "février 2019",
        "end": "",
        "current": true,
        "points": "Charpenté 30+ maisons et installé des cuisines dans 60+ foyers\nFabriquer des menuiseries et des moulures sur mesure avec une tolérance de 1/16 de pouce\nLire et suivre les plans architecturaux, en signalant les erreurs avant qu’elles coûtent de l’argent\nFormer 2 apprentis aux techniques de charpente et de finition"
      },
      {
        "role": "Apprenti charpentier",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "juin 2016",
        "end": "janvier 2019",
        "current": false,
        "points": "Aidé aux travaux de charpente, de plaques de plâtre et de revêtements de sol sur des rénovations\nAppris à utiliser scies, défonceuses et cloueuses en toute sécurité\nTerminé 8 000 heures d’apprentissage et réussi l’examen de compagnon"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificat",
        "field": "Charpenterie",
        "start": "2015",
        "end": "2016",
        "notes": "Charpentier compagnon. Certifié OSHA 10."
      }
    ],
    "skills": "Charpente et travaux de structure\nMenuiserie de finition et moulures\nÉbénisterie sur mesure\nLecture de plans architecturaux\nOutils électriques et sécurité\nPlaques de plâtre et revêtements de sol",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Enseignant du secondaire (Mathématiques)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Enseignant du secondaire avec 8 ans d’expérience dans l’enseignement des mathématiques aux classes 9-12. Relevé les taux de réussite en algèbre de 64 % à 83 % et mené l’équipe de mathématiques à 2 finales d’État. Compétent en enseignement différencié, préparation aux examens et communication avec les parents.",
    "experience": [
      {
        "role": "Enseignant de mathématiques (classes 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "août 2019",
        "end": "",
        "current": true,
        "points": "Enseigner l’algèbre, la géométrie et le pré-calcul à 120 élèves répartis en 5 classes\nRelevé les taux de réussite en algèbre de 64 % à 83 % en 3 ans\nMener l’équipe de mathématiques à 2 finales d’État\nAnimer du tutorat après l’école pour 30 élèves par semaine"
      },
      {
        "role": "Enseignant de mathématiques (classes 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "août 2017",
        "end": "juin 2019",
        "current": false,
        "points": "Enseigné l’algèbre et la géométrie à 100 élèves par an\nIntroduit des quiz hebdomadaires qui ont réduit de moitié les écarts de devoirs\nOrganisé la première foire de mathématiques de l’école avec 200 élèves"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Enseignement des mathématiques",
        "start": "2013",
        "end": "2017",
        "notes": "Licence d’enseignement d’État (New Hampshire, classes 7-12, mathématiques)."
      }
    ],
    "skills": "Enseignement des mathématiques (de l’algèbre au pré-calcul)\nPréparation aux examens\nEnseignement différencié\nGestion de classe\nCommunication avec les parents\nGoogle Classroom et Desmos",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Enseignant de maternelle",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Enseignant de maternelle avec 6 ans d’expérience dans la garde d’enfants de 3-5 ans. Compétent en apprentissage par le jeu, guidance comportementale et communication avec les parents. Créé un programme de phonétique qui a relevé les scores de préparation à l’école de ma classe.",
    "experience": [
      {
        "role": "Enseignant de maternelle",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "août 2020",
        "end": "",
        "current": true,
        "points": "Enseigner et s’occuper d’une classe de 18 enfants de 3-5 ans\nCréé un programme de phonétique qui a relevé les scores de préparation à l’école dans toute la classe\nPlanifier des thèmes hebdomadaires, des bricolages et des jeux extérieurs\nPartager des mises à jour quotidiennes et des rapports de progression trimestriels avec les parents"
      },
      {
        "role": "Assistant d’enseignant de maternelle",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "juin 2018",
        "end": "juillet 2020",
        "current": false,
        "points": "Soutenu l’enseignant principal avec une classe de 20 enfants\nAnimé chaque jour l’heure du conte, des chansons et des activités artistiques\nGardé les dossiers de sécurité et d’hygiène conformes aux normes d’État"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Diplôme d’associé",
        "field": "Éducation de la petite enfance",
        "start": "2016",
        "end": "2018",
        "notes": "Diplôme Child Development Associate (CDA). Certifié en premiers secours et RCR."
      }
    ],
    "skills": "Apprentissage par le jeu\nGuidance comportementale\nPhonétique et littératie précoce\nCommunication avec les parents\nSécurité en classe\nPlanification d’arts et de bricolages",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Travailleur social enfants et familles",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Travailleur social agréé avec 7 ans d’expérience dans le soutien aux enfants et aux familles. Gestion d’une charge de 25 familles, coordination des services entre écoles et prestataires de santé, et rédaction de rapports pour le tribunal auxquels les juges se fient. Compétent en évaluation, soutien de crise et protection.",
    "experience": [
      {
        "role": "Travailleur social enfants et familles",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "janvier 2020",
        "end": "",
        "current": true,
        "points": "Gérer une charge de 25 familles, en visitant maisons et écoles chaque semaine\nRédiger des rapports complets pour le tribunal et témoigner devant le tribunal de la famille\nCoordonner le soutien au logement, à la santé et à l’école pour les familles vulnérables\nRéduit le temps d’attente d’évaluation de 20 % grâce à un nouveau système de triage"
      },
      {
        "role": "Assistant social de secteur",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "juillet 2018",
        "end": "décembre 2019",
        "current": false,
        "points": "Soutenu 40+ familles en logement temporaire avec prestations et orientations\nAnimé des ateliers hebdomadaires sur la parentalité et le budget\nTenu des notes de dossiers exactes pour les audits et les rapports de financement"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Travail social",
        "start": "2016",
        "end": "2018",
        "notes": "Travailleur social agréé (Ohio). Cours en protection de l’enfance et systèmes familiaux."
      }
    ],
    "skills": "Gestion de cas (25 familles)\nProtection de l’enfance\nRapports pour le tribunal de la famille\nSoutien de crise\nCoordination multi-agences\nOrientations prestations et logement",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Assistant juridique",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Assistant juridique avec 6 ans d’expérience en soutien au contentieux et dépôts d’entreprise. Gestion de la découverte pour 30+ dossiers, rédaction de conclusions et de contrats, et respect des délais de dépôt avec un taux à l’heure de 100 %. Compétent en Westlaw, e-discovery et logiciels de gestion de cas.",
    "experience": [
      {
        "role": "Assistant juridique",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "février 2021",
        "end": "",
        "current": true,
        "points": "Gérer la découverte pour 30+ dossiers de contentieux, en examinant 10 000+ documents\nRédiger des conclusions, des requêtes et des contrats pour relecture par un avocat\nMaintenir un taux de dossiers et délais judiciaires respectés à 100 %\nCoordonner les témoins et préparer les dossiers d’audience"
      },
      {
        "role": "Assistant juridique",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "août 2019",
        "end": "janvier 2021",
        "current": false,
        "points": "Entretiens d’accueil pour 20+ clients par semaine\nPréparé des formulaires et des dépôts pour des dossiers de logement et de famille\nTraduit des documents juridiques pour des clients hispanophones"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Diplôme d’associé",
        "field": "Études parajuridiques",
        "start": "2017",
        "end": "2019",
        "notes": "Assistant juridique certifié NALA (CP). Programme approuvé par l’ABA."
      }
    ],
    "skills": "Soutien au contentieux et découverte\nRédaction juridique\nE-discovery (Relativity)\nGestion de cas (Clio)\nActes judiciaires et délais\nRecherche juridique (Westlaw)",
    "languages": "Anglais (courant)\nEspagnol (courant)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Employé de comptabilité",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Employé de comptabilité avec 5 ans d’expérience en comptes fournisseurs, facturation et rapprochements bancaires. Traitement de 300+ factures par mois avec une précision de 99,8 % et tenue des livres propre pour la clôture mensuelle. Compétent en QuickBooks, Excel et aide à la paie.",
    "experience": [
      {
        "role": "Employé de comptabilité",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "avril 2021",
        "end": "",
        "current": true,
        "points": "Traiter 300+ factures fournisseurs par mois avec une précision de 99,8 %\nRapprocher 6 comptes bancaires chaque semaine et signaler les écarts le jour même\nPréparer les données de paie pour 45 employés et relancer les paiements clients en retard\nGarder les dossiers propres pour l’audit de fin d’année, sans aucun constat"
      },
      {
        "role": "Assistant comptable",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "juin 2019",
        "end": "mars 2021",
        "current": false,
        "points": "Saisi chaque jour les factures de vente et les reçus dans QuickBooks\nRépondu aux questions des fournisseurs sur les paiements par téléphone et par e-mail\nClassé les documents et tenu les archives à jour"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificat",
        "field": "Comptabilité",
        "start": "2018",
        "end": "2019",
        "notes": "Utilisateur certifié QuickBooks."
      }
    ],
    "skills": "Comptes fournisseurs et clients\nRapprochements bancaires\nFacturation (300+ par mois)\nQuickBooks et Excel\nAide à la paie\nSaisie de données (65 mpm)",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Assistant administratif",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Assistant administratif avec 6 ans d’expérience à faire tourner les bureaux sans accroc. Gestion des agendas de 4 managers, organisation des déplacements et des réunions, et traitement de 100+ e-mails par jour. Reconnu pour sa précision, sa discrétion et son calme face aux délais.",
    "experience": [
      {
        "role": "Assistant administratif",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Gérer les agendas, déplacements et réunions de 4 managers seniors\nTraiter 100+ e-mails par jour, en rédigeant les réponses et en signalant les priorités\nPréparer les documents du conseil et prendre des notes lors des réunions mensuelles\nGérer les fournitures de bureau et les commandes fournisseurs, réduisant les coûts de 12 %"
      },
      {
        "role": "Réceptionniste",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "août 2019",
        "end": "décembre 2020",
        "current": false,
        "points": "Accueilli 60+ patients par jour et géré le carnet de rendez-vous\nRépondu au téléphone et traité les questions d’assurance\nGardé les dossiers patients exacts et confidentiels"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Diplôme d’associé",
        "field": "Administration de bureau",
        "start": "2017",
        "end": "2019",
        "notes": "Spécialiste Microsoft Office (Word, Excel)."
      }
    ],
    "skills": "Gestion des agendas et des déplacements\nE-mail et correspondance\nComptes rendus de réunion\nMicrosoft Office (Word, Excel, Outlook)\nSaisie de données (70 mpm)\nFournitures de bureau et fournisseurs",
    "languages": "Anglais (courant)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Guichetier de banque",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Guichetier de banque avec 4 ans d’expérience au service de 80+ clients par jour avec précision et attention. Caisse équilibrée au centime près pendant 3 ans, sans aucun manquant. Compétent en dépôts, retraits, contrôles anti-fraude et orientation des clients vers les bons produits.",
    "experience": [
      {
        "role": "Guichetier de banque",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mars 2022",
        "end": "",
        "current": true,
        "points": "Servir 80+ clients par jour : dépôts, retraits, paiements et transferts\nCaisse équilibrée au centime près pendant 3 ans sans aucun manquant\nRepérer et stopper 12 tentatives de fraude, économisant aux clients $90 000+\nOrienter les clients vers des produits d’épargne et de prêt, en atteignant les objectifs de recommandation chaque trimestre"
      },
      {
        "role": "Employé du service client",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "juin 2021",
        "end": "février 2022",
        "current": false,
        "points": "Ouvert de nouveaux comptes et émis des cartes de débit pour les membres\nRépondu aux questions par téléphone sur les soldes et les relevés\nAidé les membres à configurer les services bancaires en ligne et mobiles"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Diplôme d’associé",
        "field": "Commerce",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Encaissement et équilibrage\nDépôts, retraits et paiements\nDétection de la fraude\nService client\nLogiciel bancaire (Fiserv)\nRecommandations de produits",
    "languages": "Anglais (courant)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Responsable des ventes",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Responsable des ventes avec 10 ans d’expérience dans la direction d’équipes allant jusqu’à 15 commerciaux. Fait passer le revenu régional de $4M à $7,5M en 3 ans, relevé le taux de réussite de 22 % à 34 % et réduit de moitié le turnover des commerciaux grâce à un meilleur coaching et une meilleure intégration.",
    "experience": [
      {
        "role": "Responsable régional des ventes",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Diriger une équipe de 15 commerciaux au Texas et en Oklahoma\nFait passer le revenu régional de $4M à $7,5M en 3 ans\nRelevé le taux de réussite de 22 % à 34 % grâce à un meilleur coaching et des revues de pipeline\nRéduit de moitié le turnover des commerciaux grâce à un nouveau programme d’intégration"
      },
      {
        "role": "Représentant commercial",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "juin 2015",
        "end": "décembre 2020",
        "current": false,
        "points": "Vendu des équipements industriels à 80+ comptes, atteignant le quota 5 années de suite\nMeilleur commercial de la région pendant 3 années consécutives\nCréé un réseau de recommandations qui a apporté 25 % des nouvelles affaires"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Cours en gestion des ventes et négociation."
      }
    ],
    "skills": "Direction d’équipe de vente (15 commerciaux)\nCroissance du revenu et prévisions\nGestion du pipeline (Salesforce)\nCoaching et intégration\nNégociation\nPlanification de territoire",
    "languages": "Anglais (courant)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Responsable de construction",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Responsable de construction avec 12 ans d’expérience dans la livraison de projets commerciaux et résidentiels d’une valeur allant jusqu’à $12M. Terminé 20+ projets avec un taux de respect des délais de 95 %, aucun accident avec arrêt sur mes chantiers et des budgets tenus à 3 % près. Compétent en planification, gestion des sous-traitants et sécurité.",
    "experience": [
      {
        "role": "Responsable de construction",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "février 2020",
        "end": "",
        "current": true,
        "points": "Livrer des projets commerciaux et résidentiels d’une valeur allant jusqu’à $12M\nTerminé 20+ projets avec un taux de respect des délais de 95 % et des budgets tenus à 3 % près\nGérer 30+ sous-traitants et 50 ouvriers sur 3 chantiers actifs\nAucun accident avec arrêt sur tous les sites en 4 ans"
      },
      {
        "role": "Superviseur de chantier",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "juin 2013",
        "end": "janvier 2020",
        "current": false,
        "points": "Assuré les opérations quotidiennes de chantier pour des constructions de bureaux et de commerce\nCoordonné les livraisons, les inspections et les plannings des sous-traitants\nGardé des dossiers de sécurité propres et réussi chaque inspection OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Construction de bâtiments",
        "start": "2009",
        "end": "2013",
        "notes": "Certifié OSHA 30. Candidat CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Ordonnancement de projets (MS Project, Procore)\nContrôle budgétaire\nGestion des sous-traitants\nSécurité du chantier (OSHA 30)\nLecture de plans\nReporting clients",
    "languages": "Anglais (courant)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Assistant médical certifié",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Assistant médical certifié avec 5 ans d’expérience en médecine de famille et soins urgents. Accueil de 25+ patients par jour, prise des constantes, prélèvements sanguins et gestion de l’accueil avec un score de satisfaction patient de 97 %. Compétent en DME, phlébotomie et vérifications d’assurance.",
    "experience": [
      {
        "role": "Assistant médical certifié",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "avril 2021",
        "end": "",
        "current": true,
        "points": "Accueillir 25+ patients par jour : constantes, antécédents et préparation des examens\nPrélever du sang et réaliser des analyses de laboratoire de base avec un taux de réussite à la première piqûre de 99 %\nGérer l’accueil, la planification et les vérifications d’assurance\nMaintenir un score de satisfaction patient de 97 % sur 800+ enquêtes"
      },
      {
        "role": "Assistant médical",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "août 2019",
        "end": "mars 2021",
        "current": false,
        "points": "Trié les patients sans rendez-vous et assisté les médecins lors de petites procédures\nAdministré des vaccins et géré la collecte d’échantillons\nGardé les salles d’examen approvisionnées, propres et prêtes entre les patients"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificat",
        "field": "Assistance médicale",
        "start": "2018",
        "end": "2019",
        "notes": "Assistant médical certifié (CMA, AAMA). Certifié BLS. Formé à la phlébotomie."
      }
    ],
    "skills": "Accueil des patients et constantes\nPhlébotomie\nDME (eClinicalWorks)\nVaccinations\nVérification d’assurance\nGestion de l’accueil",
    "languages": "Anglais (courant)\nEspagnol (courant)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Étudiant",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Élève de terminale motivé avec de bons résultats et une expérience de travail à temps partiel. Apprend vite, fiable et à l’aise avec les gens. À la recherche d’un premier poste à temps plein ou d’un emploi à temps partiel en parallèle des études.",
    "experience": [
      {
        "role": "Assistant de vente à temps partiel",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "septembre 2024",
        "end": "",
        "current": true,
        "points": "Servir 50+ clients par service les week-ends et après l’école\nEncaisser, réassortir les rayons et garder les présentoirs soignés\nDe confiance pour ouvrir le magasin le samedi matin"
      },
      {
        "role": "Tuteur bénévole",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "janvier 2024",
        "end": "juin 2025",
        "current": false,
        "points": "Aidé des élèves plus jeunes en mathématiques deux fois par semaine\nAidé à organiser le programme de lecture d’été pour 40 enfants"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diplôme d’études secondaires",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "Moyenne 3,6. Tableau d’honneur, 3 ans. Capitaine de l’équipe de débat."
      }
    ],
    "skills": "Service client\nEncaissement\nTravail d’équipe\nGestion du temps\nMicrosoft Office\nPrise de parole en public (équipe de débat)",
    "languages": "Anglais (courant)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Jeune diplômé \u2014 Administration des affaires",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Jeune diplômé en administration des affaires avec une expérience de stage en marketing et opérations. Organisé un concours d’entreprise sur le campus avec 200 participants et terminé un stage de 6 mois où j’ai réduit de moitié le temps de reporting. Désireux de commencer une carrière à temps plein et d’apprendre vite.",
    "experience": [
      {
        "role": "Stagiaire marketing",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "janvier 2025",
        "end": "juin 2025",
        "current": false,
        "points": "Géré les comptes sociaux de l’entreprise, faisant passer les abonnés de 2 000 à 6 500\nCréé un tableau de bord de reporting qui a réduit de moitié le temps de reporting hebdomadaire\nÉcrit 20 articles de blog qui ont apporté 15 000+ lectures"
      },
      {
        "role": "Responsable bénévole des événements",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "septembre 2024",
        "end": "mai 2025",
        "current": false,
        "points": "Organisé un concours d’entreprise avec 200 participants et 12 juges\nGéré un budget de $5 000 et une équipe de 8 bénévoles"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Administration des affaires",
        "start": "2021",
        "end": "2025",
        "notes": "Moyenne 3,5. Dean’s List, 2 ans. Projet de fin d’études sur le marketing des petites entreprises."
      }
    ],
    "skills": "Marketing sur les réseaux sociaux\nExcel et Google Sheets\nCompétences de présentation\nOrganisation d’événements\nTravail d’équipe\nAnalyse de données de base",
    "languages": "Anglais (courant)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Assistant marketing junior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Assistant marketing junior avec 2 ans d’expérience en contenu, e-mail et réseaux sociaux. Fait passer une newsletter client de 1 000 à 4 000 abonnés et mené des campagnes avec un taux d’ouverture moyen de 22 %. Prêt pour plus de responsabilités et un plus grand portefeuille de comptes.",
    "experience": [
      {
        "role": "Assistant marketing junior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "juillet 2024",
        "end": "",
        "current": true,
        "points": "Fait passer une newsletter client de 1 000 à 4 000 abonnés en 14 mois\nÉcrire et planifier 12 publications sociales par semaine pour 4 clients\nMener des campagnes e-mail avec un taux d’ouverture moyen de 22 %\nRapporter les résultats des campagnes aux clients chaque mois"
      },
      {
        "role": "Stagiaire marketing",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "janvier 2024",
        "end": "juin 2024",
        "current": false,
        "points": "Écrit des descriptions de produits pour 200+ articles sur le site web de l’entreprise\nAidé à mener une campagne de soldes de printemps qui a relevé les commandes en ligne de 15 %"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Communication",
        "start": "2020",
        "end": "2024",
        "notes": "Moyenne 3,4. Cours en marketing numérique et rédaction pour les médias."
      }
    ],
    "skills": "Rédaction de contenu\nMarketing par e-mail (Mailchimp)\nGestion des réseaux sociaux\nGoogle Analytics\nCanva\nReporting clients",
    "languages": "Anglais (courant)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Superviseur des opérations",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Superviseur des opérations avec 8 ans d’expérience dans la direction d’équipes d’entrepôt de 20-30 personnes. Réduit les erreurs de prélèvement de 30 %, relevé l’envoi à l’heure de 90 % à 97 % et formé 15 nouveaux arrivants. Prêt pour un poste de responsable des opérations avec un site et un budget plus grands.",
    "experience": [
      {
        "role": "Superviseur des opérations",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mars 2021",
        "end": "",
        "current": true,
        "points": "Superviser 25 employés d’entrepôt sur 2 rotations dans un site de 90 000 pieds carrés\nRéduit les erreurs de prélèvement de 30 % grâce à de nouvelles routines de contrôle et à la lecture de codes-barres\nRelevé l’envoi à l’heure de 90 % à 97 % en 2 ans\nFormé 15 nouveaux arrivants et promu 3 à des postes de chef d’équipe"
      },
      {
        "role": "Chef d’équipe",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "juin 2017",
        "end": "février 2021",
        "current": false,
        "points": "Dirigé une équipe de 10 préparateurs et emballeurs de nuit\nIntroduit une rotation qui a réduit les heures supplémentaires de 20 % sans manquer de délais\nAnimé des briefings de sécurité et gardé l’équipe sans accident pendant 2 ans"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Gestion de la chaîne d’approvisionnement",
        "start": "2013",
        "end": "2017",
        "notes": "Ceinture jaune Six Sigma."
      }
    ],
    "skills": "Leadership d’équipe (25 employés)\nOpérations d’entrepôt\nAmélioration des processus\nGestion de la sécurité\nContrôle des stocks\nWMS et Excel",
    "languages": "Anglais (courant)\nHindi (conversation)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Chef de projet senior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Chef de projet senior avec 14 ans d’expérience dans la livraison de projets logiciels d’une valeur allant jusqu’à $8M. Mené 30+ projets avec un taux de respect des délais de 92 %, créé un PMO à partir de zéro et mentoré 10 chefs de projet. Reconnu pour une livraison calme sous pression et un reporting honnête aux dirigeants.",
    "experience": [
      {
        "role": "Chef de projet senior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "janvier 2019",
        "end": "",
        "current": true,
        "points": "Livrer des projets logiciels d’une valeur allant jusqu’à $8M avec un taux de respect des délais de 92 %\nCréé le PMO de l’entreprise à partir de zéro : modèles, reporting et gouvernance\nMentorer 10 chefs de projet et animer la communauté PM mensuelle\nRapporter directement au CTO sur un programme de 40 personnes"
      },
      {
        "role": "Chef de projet",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "juin 2012",
        "end": "décembre 2018",
        "current": false,
        "points": "Géré 20+ projets pour des clients du commerce et de la santé\nIntroduit des pratiques Agile qui ont réduit le délai de livraison de 25 %\nFait passer 2 grands comptes de $500k à $2M de revenu annuel"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Systèmes d’information",
        "start": "2008",
        "end": "2012",
        "notes": "Certifié PMP (2015). Certified ScrumMaster. Cours de MBA (2018-2019, incomplet)."
      }
    ],
    "skills": "Livraison de programmes et de projets\nMise en place et gouvernance du PMO\nAgile et Waterfall\nContrôle budgétaire ($8M)\nReporting aux dirigeants\nMentorat d’équipe",
    "languages": "Anglais (courant)\nEspagnol (conversation)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Directeur des opérations",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Directeur des opérations avec 18 ans d’expérience dans le développement des opérations d’entreprises de commerce et de logistique. Fait passer une opération de 200 personnes à 900 personnes sur 6 sites, relevé la marge EBITDA de 8 % à 14 % et mené 2 acquisitions. Expérience du reporting au conseil et des relations investisseurs.",
    "experience": [
      {
        "role": "Directeur des opérations",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "janvier 2021",
        "end": "",
        "current": true,
        "points": "Gérer les opérations pour 900 personnes sur 6 sites et un budget de $180M\nRelevé la marge EBITDA de 8 % à 14 % en 3 ans\nMené 2 acquisitions et intégré les deux équipes en 6 mois\nRapporter au conseil chaque mois sur les opérations, les risques et la croissance"
      },
      {
        "role": "Vice-président des opérations",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "juin 2014",
        "end": "décembre 2020",
        "current": false,
        "points": "Développé les opérations de 200 à 600 personnes sur 4 sites\nOuvert 3 centres de distribution à temps et sous le budget\nConstitué l’équipe de direction qui dirige encore l’entreprise aujourd’hui"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Administration des affaires",
        "start": "2010",
        "end": "2012",
        "notes": "Licence en économie, NYU (2006). Formation en gouvernance d’entreprise (2020)."
      }
    ],
    "skills": "Opérations à grande échelle (900 personnes)\nResponsabilité du P&L ($180M)\nFusions et acquisitions\nReporting au conseil d’administration\nStratégie de croissance\nConstitution d’équipes de direction",
    "languages": "Anglais (courant)",
    "template": "executive"
  }
};
});
