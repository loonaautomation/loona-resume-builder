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
      "title": "Enfermero colegiado",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Enfermero colegiado con 6 años de experiencia en unidades médico-quirúrgicas y de telemetría. Dominio de evaluación de pacientes, terapia intravenosa, administración de medicamentos e historias clínicas electrónicas. Reconocido por una comunicación tranquila y clara con pacientes y familias en situaciones de alta presión.",
    "experience": [
      {
        "role": "Enfermero colegiado",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "jun. 2021",
        "end": "",
        "current": true,
        "points": "Atender a 5-6 pacientes por turno en una unidad médico-quirúrgica de 32 camas, incluida la evaluación, la administración de medicamentos y el cuidado de heridas\nTrain and mentor 4 new graduate nurses, cutting their orientation time by 2 weeks\nReducción de los errores de medicación en la unidad en un 18 % mediante una rutina de doble verificación en el traspaso\nDocumentar toda la atención con precisión en las historias clínicas electrónicas de Epic"
      },
      {
        "role": "Enfermero de plantilla",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "ago. 2019",
        "end": "may. 2021",
        "current": false,
        "points": "Ran triage for 40+ walk-in patients a day, prioritising urgent cases for same-day care\nAdministración de vacunas y cribados de salud en jornadas comunitarias mensuales\nCoordinated referrals to specialists and followed up on test results"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Enfermería",
        "start": "2015",
        "end": "2019",
        "notes": "Licencia de enfermero colegiado (Texas). Certificaciones BLS y ACLS."
      }
    ],
    "skills": "Evaluación de pacientes\nTerapia intravenosa y administración de medicamentos\nHistorias clínicas electrónicas (Epic)\nSupervisión por telemetría\nPatient and family education\nControl de infecciones",
    "languages": "Inglés (fluido)\nEspañol (conversacional)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Desarrollador de software",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Desarrollador de software con 5 años de experiencia en la creación de aplicaciones web en Python y JavaScript. Entregó funciones utilizadas por más de 200,000 usuarios, redujo los tiempos de respuesta de la API en un 40 % y dirigió la migración de un monolito a microservicios. Sólido en pruebas, revisión de código y documentación clara.",
    "experience": [
      {
        "role": "Desarrollador de software",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Crear and maintain customer-facing web features in Python (Django) and React, serving 200,000+ users\nCut average API response time from 850 ms to 500 ms by adding caching and fixing slow queries\nLed the migration of the billing service to microservices with zero downtime\nReview 10+ pull requests a week and mentor 2 junior developers"
      },
      {
        "role": "Desarrollador junior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "jul. 2020",
        "end": "feb. 2022",
        "current": false,
        "points": "Creación de internal dashboards in JavaScript that replaced manual spreadsheets for 3 teams\nWrote automated tests that raised coverage from 45% to 78%\nFixed 120+ bugs across the product in the first year"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informática",
        "start": "2016",
        "end": "2020",
        "notes": "Formación en bases de datos, algoritmos y sistemas operativos."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript y React\nPostgreSQL y Redis\nAPI REST y microservicios\nGit y CI/CD\nPruebas automatizadas (pytest, Jest)",
    "languages": "Inglés (fluido)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Maestro de primaria",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Maestro de primaria con 7 años de experiencia en la enseñanza de los grados 3-5. Dominio de instrucción diferenciada, gestión del aula y comunicación con las familias. Elevó la competencia lectora de su grupo del 58 % al 81 % en dos cursos escolares.",
    "experience": [
      {
        "role": "Maestro de primaria (4.º grado)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "ago. 2020",
        "end": "",
        "current": true,
        "points": "Enseñar lectura, matemáticas y ciencias a un grupo de 26 alumnos, incluidos 5 con planes individuales de aprendizaje\nRaised class reading proficiency from 58% to 81% in two years through guided reading groups\nRun a weekly parent newsletter and termly progress meetings for every family\nLead the school's reading club for 40 pupils in grades 3-5"
      },
      {
        "role": "Maestro de primaria (3.º grado)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "ago. 2018",
        "end": "jun. 2020",
        "current": false,
        "points": "Planificación e impartición de lecciones diarias para 24 alumnos en todas las asignaturas troncales\nIntroduced behaviour routines that cut classroom disruptions by half\nOrganización de la feria de ciencias del curso con 120 alumnos y 80 padres"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Educación primaria",
        "start": "2014",
        "end": "2018",
        "notes": "Licencia docente estatal (Ohio, grados K-5). Acreditación en lectura."
      }
    ],
    "skills": "Instrucción diferenciada\nGestión del aula\nGrupos de lectura guiada\nComunicación con las familias\nPlanificación de lecciones\nGoogle Classroom",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Contable senior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA con 8 años de experiencia en cierre de mes, informes financieros y auditoría interna. Cerró los libros 3 días antes al reconstruir el proceso de conciliación y detectó $240,000 en pagos excesivos recuperables en un año de auditoría. Dominio de Excel, QuickBooks y sistemas ERP.",
    "experience": [
      {
        "role": "Contable senior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Responsabilidad del cierre de mes de una unidad de negocio de $40M, con finalización 3 días antes tras reconstruir las conciliaciones\nPrepare monthly financial statements and variance reports for senior management\nDetección de $240,000 en pagos excesivos recuperables a proveedores durante la auditoría interna de 2024\nSupervise 2 staff accountants and review their journal entries"
      },
      {
        "role": "Contable de plantilla",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "jun. 2017",
        "end": "dic. 2020",
        "current": false,
        "points": "Preparación de declaraciones de impuestos y estados financieros para 25 clientes de pequeñas empresas\nAsistencia en auditorías de 8 clientes, probando controles y documentando hallazgos\nAutomatización del registro de activos fijos en Excel, con un ahorro de 6 horas al mes"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Contabilidad",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Miembro de la AICPA."
      }
    ],
    "skills": "Cierre de mes y conciliaciones\nInformes financieros y análisis de desviaciones\nAuditoría interna\nExcel (tablas dinámicas, BUSCARV)\nQuickBooks y SAP\nPreparación de impuestos",
    "languages": "Inglés (fluido)\nMandarín (conversacional)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Conductor de camiones CDL Clase A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Conductor CDL Clase A con 9 años de experiencia en transporte de larga distancia y regional. Más de 900,000 millas sin accidentes, una tasa de entregas puntuales del 99 % y experiencia con cargas refrigeradas, en plataforma y en furgón seco. Historial de conducción limpio y autorizaciones HazMat y de cisterna.",
    "experience": [
      {
        "role": "Conductor de camiones de larga distancia",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "abr. 2019",
        "end": "",
        "current": true,
        "points": "Drive 2,800+ miles a week on regional routes across Texas, Oklahoma and New Mexico\nMaintain a 99% on-time delivery rate across 1,100+ loads a year\nHaul refrigerated and dry-van freight; complete pre-trip and post-trip inspections daily\nMás de 900,000 millas sin accidentes en total"
      },
      {
        "role": "Conductor de camión de reparto",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar. 2016",
        "end": "mar. 2019",
        "current": false,
        "points": "Delivered building materials to 15-20 job sites a day across the Dallas-Fort Worth area\nManejo de carretillas elevadoras y sujeción de cargas en plataforma según las normas DOT\nKept delivery paperwork and logs accurate with zero DOT violations"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificate",
        "field": "Conducción comercial (CDL Clase A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Clase A con autorizaciones HazMat y de cisterna. Historial de conducción limpio."
      }
    ],
    "skills": "Conducción de larga distancia y regional\nCargas refrigeradas y en plataforma\nNormativa DOT y libros de registro\nInspecciones previas al viaje\nPlanificación de rutas (GPS, ELD)\nManejo de carretillas elevadoras",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Asociado de ventas minoristas",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Asociado de ventas minoristas con 4 años de experiencia en tiendas de electrónica y ropa. Siempre entre los 3 mejores vendedores del equipo, con una tasa de venta adicional del 32 % en garantías y accesorios. Amable, rápido en caja y de confianza para abrir y cerrar la tienda.",
    "experience": [
      {
        "role": "Asociado de ventas senior",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Sell electronics and accessories to 60+ customers a day; top 3 in store sales for 8 straight quarters\nAlcanzar una tasa de venta adicional del 32 % en garantías y accesorios, la más alta del equipo\nTrain 6 new starters on the till, stockroom and customer-service standards\nTrusted keyholder: open and close the store and handle cash counts"
      },
      {
        "role": "Asociado de ventas",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "jun. 2021",
        "end": "ene. 2022",
        "current": false,
        "points": "Ayuda a los clientes a elegir conjuntos y tallas en una tienda concurrida\nExpositores ordenados y estanterías repuestas en cada turno\nGestión amable de devoluciones y cambios, manteniendo las quejas al mínimo"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Grado asociado",
        "field": "Negocios",
        "start": "2019",
        "end": "2021",
        "notes": "Estudios a tiempo parcial mientras se trabaja en comercio minorista."
      }
    ],
    "skills": "Atención al cliente y venta adicional\nManejo de efectivo y sistemas de punto de venta\nConocimiento del producto (electrónica)\nGestión de existencias\nApertura y cierre de tienda\nFormación de equipos",
    "languages": "Inglés (fluido)\nEspañol (fluido)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Representante de atención al cliente",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Representante de atención al cliente con 5 años de experiencia en soporte por teléfono, correo electrónico y chat en vivo. Resuelve más de 45 casos al día con un índice de satisfacción del 96 % y una tasa de resolución en el primer contacto del 88 %. Tranquilo con clientes enfadados y rápido para encontrar la solución.",
    "experience": [
      {
        "role": "Representante de atención al cliente",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "may. 2021",
        "end": "",
        "current": true,
        "points": "Handle 45+ phone, email and chat cases a day for billing, orders and technical faults\nHold a 96% customer satisfaction score and 88% first-contact resolution rate\nDesescalar llamadas difíciles y convertir quejas en clientes recurrentes\nTrain 5 new agents on scripts, systems and tone"
      },
      {
        "role": "Agente de soporte",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "sept. 2019",
        "end": "abr. 2021",
        "current": false,
        "points": "Respuesta a customer emails and chats about orders, returns and refunds\nKept average first-response time under 2 hours\nWrote 20 help-centre articles that cut repeat questions by a quarter"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Grado asociado",
        "field": "Administración de empresas",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Phone, email and live-chat support\nComplaint handling and de-escalation\nCRM systems (Zendesk, Salesforce)\nBilling and order queries\nTyping 55 wpm\nFormación de equipos",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Gerente de operaciones",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Gerente de operaciones con 12 años de experiencia en la dirección de equipos de hasta 80 personas en almacenamiento y distribución. Redujo los costes de procesamiento de pedidos en un 22 %, elevó los envíos puntuales del 91 % al 98 % y abrió dos centros nuevos a tiempo y por debajo del presupuesto.",
    "experience": [
      {
        "role": "Gerente de operaciones",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Run a 120,000 sq ft distribution centre with 80 staff across 3 shifts\nCut order-processing costs by 22% by redesigning pick paths and shift patterns\nLifted on-time shipments from 91% to 98% in 18 months\nApertura de 2 centros nuevos a tiempo y un 8 % por debajo del presupuesto"
      },
      {
        "role": "Supervisor de almacén",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "jun. 2013",
        "end": "ene. 2020",
        "current": false,
        "points": "Supervisión de 25 empleados de almacén y del envío diario de más de 4,000 pedidos\nIntroduced barcode scanning, cutting picking errors by 35%\nFormación en seguridad que mantuvo la obra sin accidentes durante 3 años"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Gestión de operaciones",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Liderazgo de equipos (hasta 80 empleados)\nWarehousing and distribution\nMejora de procesos\nPresupuestación y control de costes\nGestión de la seguridad\nSistemas ERP y WMS",
    "languages": "Inglés (fluido)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Electricista colegiado",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Electricista oficial colegiado con 8 años de experiencia en trabajos residenciales y comerciales. Dominio de cableado, ampliación de cuadros, iluminación y localización de averías, con un historial de seguridad limpio en más de 400 trabajos. Conocimiento del código NEC y experiencia en la supervisión de aprendices.",
    "experience": [
      {
        "role": "Electricista oficial",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar. 2019",
        "end": "",
        "current": true,
        "points": "Completar 400+ residential and commercial jobs: wiring, panel upgrades, lighting and EV chargers\nDiagnose and repair faults fast, with a tasa de resolución en la primera visita of 92%\nSupervise 2 apprentices and sign off their work to code\nKeep a clean safety record with zero lost-time injuries"
      },
      {
        "role": "Aprendiz de electricista",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "jun. 2016",
        "end": "feb. 2019",
        "current": false,
        "points": "Assisted licensed electricians on new-build wiring and rewires\nAprendizaje de curvado de tubos, tendido de cables e instalación de cuadros\nCompleted 8,000 apprenticeship hours and passed the journeyman exam first time"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificate",
        "field": "Tecnología eléctrica",
        "start": "2015",
        "end": "2016",
        "notes": "Licencia de electricista oficial (Colorado). Certificación OSHA 30."
      }
    ],
    "skills": "Cableado residencial y comercial\nAmpliación de cuadros y cargadores de vehículos eléctricos\nLocalización de averías y pruebas\nCumplimiento del código NEC\nCurvado de tubos y tendido de cables\nSupervisión de aprendices",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analista financiero",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analista financiero con 6 años de experiencia en presupuestación, previsión y análisis de inversiones. Creó modelos de previsión que redujeron la desviación presupuestaria en un 30 % y respaldaron $50M en decisiones de inversión. Dominio de Excel, SQL y modelización financiera.",
    "experience": [
      {
        "role": "Analista financiero",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "abr. 2021",
        "end": "",
        "current": true,
        "points": "Elaborar previsiones mensuales y presupuestos anuales para una cartera de $120M\nCut budget variance by 30% with a driver-based forecasting model\nSupport investment decisions worth $50M with valuation and scenario analysis\nactualidad findings monthly to the CFO and department heads"
      },
      {
        "role": "Analista financiero junior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "jul. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Preparación de informes semanales de rendimiento para 12 sucursales\nInformes automatizados en Excel, con un ahorro de 10 horas a la semana\nAsistencia al equipo de crédito en el análisis de la cartera de préstamos"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finanzas",
        "start": "2015",
        "end": "2019",
        "notes": "Candidato al Nivel II del CFA. Formación en valoración y finanzas corporativas."
      }
    ],
    "skills": "Modelización y previsión financiera\nPresupuestación y análisis de desviaciones\nValoración (DCF, comparables)\nExcel (avanzado) y SQL\nBloomberg Terminal\nVisualización de datos (Power BI)",
    "languages": "Inglés (fluido)\nHindi (fluido)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Ingeniero civil",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Ingeniero civil (PE) con 7 años de experiencia en el diseño de infraestructuras viarias e hidráulicas. Dirigió el diseño de la ampliación de una autopista de 12 millas y de un sistema de aguas pluviales para 8,000 viviendas. Dominio de AutoCAD Civil 3D, estimación de costes y coordinación de permisos.",
    "experience": [
      {
        "role": "Ingeniero civil",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Dirigir el diseño de la ampliación de una autopista de 12 millas, desde el estudio topográfico hasta los documentos de construcción\nDesigned a stormwater system serving 8,000 homes, approved first time by the city\nCoordinate permits with 4 agencies and manage a $2.5M design budget\nReview and stamp drawings as a licensed Professional Engineer"
      },
      {
        "role": "Ingeniero civil junior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "jul. 2018",
        "end": "dic. 2020",
        "current": false,
        "points": "Prepared grading and drainage plans for 20+ residential developments\nElaboración de estimaciones de costes y mediciones para proyectos de carreteras\nAttended site inspections and wrote progress reports"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Ingeniería civil",
        "start": "2014",
        "end": "2018",
        "notes": "Licencia de Professional Engineer (Washington). EIT superado en 2018."
      }
    ],
    "skills": "Diseño de carreteras y drenaje\nAutoCAD Civil 3D\nModelización de aguas pluviales\nEstimación de costes\nCoordinación de permisos\nProgramación de proyectos (MS Project)",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Ingeniero mecánico",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Ingeniero mecánico con 6 años de experiencia en el diseño de sistemas HVAC y equipos de producción. Redujo el consumo energético en un 18 % en 3 plantas con conductos y controles rediseñados, y dirigió el rediseño de una máquina que aumentó la producción en un 25 %. Dominio de SolidWorks, FEA y análisis térmico.",
    "experience": [
      {
        "role": "Ingeniero mecánico",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Diseñar sistemas HVAC y equipos de producción para 3 plantas con más de 400 empleados\nCut energy use by 18% by redesigning ductwork and control sequences\nLed a machine redesign that raised output by 25% with no extra floor space\nRun FEA and thermal analysis on new parts before prototyping"
      },
      {
        "role": "Ingeniero mecánico junior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "ago. 2019",
        "end": "ene. 2021",
        "current": false,
        "points": "Modelled parts and assemblies in SolidWorks for automotive clients\nPrepared drawings, bills of materials and test reports\nApoyo en la construcción de prototipos y resolución de problemas de ajuste en el taller"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Ingeniería mecánica",
        "start": "2015",
        "end": "2019",
        "notes": "Formación en termodinámica, mecánica de fluidos y diseño de máquinas."
      }
    ],
    "skills": "Diseño HVAC\nSolidWorks y AutoCAD\nFEA y análisis térmico\nDiseño de máquinas\nEficiencia energética\nGD&T y tolerancias",
    "languages": "Inglés (fluido)\nCoreano (conversacional)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Ingeniero eléctrico",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Ingeniero eléctrico con 6 años de experiencia en sistemas integrados y electrónica de potencia. Diseñó placas de control que hoy se utilizan en más de 50,000 dispositivos y redujo el coste de la placa en un 22 % mediante el rediseño de componentes. Dominio de Altium, C, pruebas de firmware y conformidad EMC.",
    "experience": [
      {
        "role": "Ingeniero eléctrico",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Diseñar embedded control boards used in 50,000+ devices a year\nCut board cost by 22% by redesigning the power stage and sourcing alternates\nLead EMC compliance testing, passing first time on 4 product lines\nWrite and review firmware in C for microcontrollers"
      },
      {
        "role": "Ingeniero eléctrico junior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "jul. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Diseño de PCB en Altium para clientes de consumo e industriales\nBuilt and tested prototypes, debugging hardware faults\nWrote test procedures that cut production test time by 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Ingeniería eléctrica",
        "start": "2015",
        "end": "2019",
        "notes": "Formación en sistemas integrados, electrónica de potencia y procesamiento de señales."
      }
    ],
    "skills": "Sistemas integrados y diseño de PCB\nAltium Designer\nC y firmware\nElectrónica de potencia\nPruebas de conformidad EMC\nOsciloscopios e instrumentos de laboratorio",
    "languages": "Inglés (fluido)\nGuyerati (conversacional)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analista de datos",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analista de datos con 4 años de experiencia en convertir datos de ventas y operaciones en decisiones. Creó paneles utilizados por más de 60 gerentes, redujo el tiempo de informes mensuales de 3 días a 4 horas y detectó un error de precios por valor de $180,000 al año. Dominio de SQL, Excel y Power BI.",
    "experience": [
      {
        "role": "Analista de datos",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "ene. 2022",
        "end": "",
        "current": true,
        "points": "Crear paneles de Power BI utilizados por más de 60 gerentes de tienda y regionales\nCut monthly reporting from 3 days to 4 hours with automated SQL pipelines\nFound a pricing error worth $180,000 a year by auditing promotion data\nactualidad findings monthly to the commercial team"
      },
      {
        "role": "Analista de datos junior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "ago. 2020",
        "end": "dic. 2021",
        "current": false,
        "points": "Limpieza y unión de datos de entregas de 4 sistemas en una sola tabla de informes\nBuilt Excel trackers that replaced manual counts for 2 teams\nAnswered ad-hoc data questions for operations managers daily"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Estadística",
        "start": "2016",
        "end": "2020",
        "notes": "Formación en regresión, bases de datos y visualización de datos."
      }
    ],
    "skills": "SQL y limpieza de datos\nPower BI y Tableau\nExcel (avanzado)\nPython (pandas)\nDiseño de paneles\nFundamentos de pruebas A/B",
    "languages": "Inglés (fluido)\nVietnamita (conversacional)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Científico de datos",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Científico de datos con 5 años de experiencia en la creación de modelos de aprendizaje automático para comercio electrónico. Un modelo de recomendación entregado elevó los ingresos por visita en un 12 %, y un modelo de abandono señala ahora al 80 % de los clientes en riesgo. Dominio de Python, SQL y despliegue de modelos.",
    "experience": [
      {
        "role": "Científico de datos",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Shipped a recommendation model that lifted revenue per visit by 12%\nBuilt a churn model that flags 80% of at-risk customers a month early\nDespliegue de modelos en producción con pipelines de supervisión y reentrenamiento\nactualidad model results to product and marketing teams monthly"
      },
      {
        "role": "Científico de datos junior",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "jul. 2020",
        "end": "ene. 2022",
        "current": false,
        "points": "Built forecasting models for 3 retail clients with 90%+ accuracy\nLimpieza y preparación de conjuntos de datos de más de 10M de filas para modelización\nWrote documentation so clients could rerun models themselves"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Ciencia de datos",
        "start": "2018",
        "end": "2020",
        "notes": "Tesis sobre sistemas de recomendación. Grado en Matemáticas (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nAprendizaje automático y estadística\nSQL y Spark\nDespliegue de modelos (Docker, AWS)\nPruebas A/B\nVisualización de datos",
    "languages": "Inglés (fluido)\nÁrabe (fluido)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Web Developer",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Web developer with 4 años de experiencia building fast, accessible websites in HTML, CSS and JavaScript. Rebuilt a store's checkout that lifted conversions by 18% and maintain 12 client sites with 99.9% uptime. Strong on responsive design, performance and SEO basics.",
    "experience": [
      {
        "role": "Web Developer",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Crear sitios web adaptables en HTML, CSS, JavaScript y WordPress para 12 clientes\nRebuilt a store checkout that lifted conversions by 18%\nCut average page load time from 4.2s to 1.8s with image and code optimisation\nKeep all client sites at 99.9% uptime with monitoring and backups"
      },
      {
        "role": "Desarrollador web junior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "jun. 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Built landing pages and fixed bugs across 20+ small business sites\nAprendizaje de Git, diseño adaptable y SEO básico en proyectos reales\nAnswered client emails and made same-day content updates"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informática",
        "start": "2017",
        "end": "2021",
        "notes": "Formación en desarrollo web, bases de datos e interacción persona-ordenador."
      }
    ],
    "skills": "HTML, CSS y JavaScript\nReact y WordPress\nDiseño adaptable\nOptimización de la velocidad de página\nGit y GitHub\nSEO básico",
    "languages": "Inglés (fluido)\nEspañol (fluido)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Diseñador gráfico",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Diseñador gráfico con 5 años de experiencia en branding, packaging y diseño para redes sociales. Creó identidades de marca para más de 25 pequeñas empresas y un rediseño de packaging que elevó las ventas en lineal en un 14 %. Dominio de Adobe Illustrator, Photoshop y Figma.",
    "experience": [
      {
        "role": "Diseñador gráfico",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "ene. 2022",
        "end": "",
        "current": true,
        "points": "Diseñar identidades de marca, packaging y campañas sociales para más de 25 clientes\nPackaging redesign for a food brand lifted shelf sales by 14%\nProduce 30+ social assets a week across Instagram, TikTok and Facebook\nactualidad concepts to clients and revise from feedback fast"
      },
      {
        "role": "Diseñador gráfico junior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "jul. 2020",
        "end": "dic. 2021",
        "current": false,
        "points": "Diseñar flyers, menus and social posts for local restaurants and shops\nPrepared print-ready files and checked proofs with printers\nBuilt a template library that cut design time by a third"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Diseño gráfico",
        "start": "2016",
        "end": "2020",
        "notes": "Portafolio de branding y diseño de packaging."
      }
    ],
    "skills": "Adobe Illustrator y Photoshop\nFigma\nDiseño de identidad de marca\nDiseño de packaging\nDiseño para redes sociales\nPrint production",
    "languages": "Inglés (fluido)\nCoreano (conversacional)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Diseñador UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX designer with 5 años de experiencia researching users and designing mobile and web products. Redesigned an onboarding flow that cut drop-off by 35% and ran 40+ usability tests. Skilled in Figma, user research, wireframing and prototyping.",
    "experience": [
      {
        "role": "Diseñador UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "feb. 2022",
        "end": "",
        "current": true,
        "points": "Redesigned mobile onboarding, cutting drop-off by 35% in 3 months\nRun 40+ usability tests and user interviews a year\nCrear wireframes y prototipos en Figma para 2 equipos de producto\nTrabajar a diario con ingenieros y gerentes de producto en la entrega"
      },
      {
        "role": "Diseñador UX junior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "ago. 2020",
        "end": "ene. 2022",
        "current": false,
        "points": "Diseñar screens and flows for 5 client apps\nRan first usability tests and wrote up findings for clients\nBuilt a component library that sped up design handover"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psicología",
        "start": "2016",
        "end": "2020",
        "notes": "Certificado de diseño UX (General Assembly, 2020). Formación en interacción persona-ordenador."
      }
    ],
    "skills": "Investigación de usuarios y pruebas de usabilidad\nWireframing y prototipado (Figma)\nArquitectura de la información\nSistemas de diseño\nMapas de recorrido del usuario\nTalleres con partes interesadas",
    "languages": "Inglés (fluido)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Gerente de marketing",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Gerente de marketing con 8 años de experiencia en campañas B2B y de consumo. Aumentó los leads cualificados en un 60 % en un año, lanzó una línea de productos que alcanzó $3M en ventas el primer año y gestiona un presupuesto anual de $500,000 con un equipo de 5.",
    "experience": [
      {
        "role": "Gerente de marketing",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Dirigir a team of 5 and a $500,000 annual marketing budget\nGrew qualified leads by 60% in one year with content and paid campaigns\nLaunched a product line that reached $3M in first-year sales\nCut cost per lead by 28% by rebuilding campaign targeting"
      },
      {
        "role": "Especialista en marketing",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "jun. 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Campañas de correo a 80,000 suscriptores con una tasa de apertura del 24 %\nManaged social accounts that grew from 5,000 to 40,000 followers\nOrganised 6 trade-show stands a year, generating 300+ leads each"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Formación en comportamiento del consumidor, analítica y gestión de marcas."
      }
    ],
    "skills": "Estrategia y planificación de campañas\nMarketing de contenidos y por correo electrónico\nPublicidad de pago (Google, Meta)\nAnalítica de marketing (GA4)\nLiderazgo de equipos\nGestión presupuestaria",
    "languages": "Inglés (fluido)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Gerente de proyectos",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Gerente de proyectos (PMP) con 7 años de experiencia en la entrega de proyectos de software y construcción a tiempo y dentro del presupuesto. Gestionó 15 proyectos por valor de hasta $4M, con una tasa de entrega puntual del 94 %. Dominio de Agile, gestión de riesgos y comunicación con las partes interesadas.",
    "experience": [
      {
        "role": "Gerente de proyectos",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Gestionar 15 projects worth up to $4M, with a 94% tasa de entregas puntuales\nRun Agile sprints for 3 teams and report progress to executives weekly\nCut project overruns by 30% with earlier risk reviews\nCoordinate vendors, clients and internal teams across 4 time zones"
      },
      {
        "role": "Coordinador de proyectos",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "jul. 2018",
        "end": "dic. 2020",
        "current": false,
        "points": "Seguimiento de calendarios, presupuestos y permisos de 8 proyectos de construcción\nPrepared status reports and meeting notes for clients\nResolución de conflictos de programación que ahorró 2 semanas en la construcción de un centro escolar"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Administración de empresas",
        "start": "2014",
        "end": "2018",
        "notes": "Certificación PMP (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Planificación y programación de proyectos\nAgile y Scrum\nGestión de riesgos\nControl presupuestario\nComunicación con las partes interesadas\nMS Project y Jira",
    "languages": "Inglés (fluido)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Gerente de recursos humanos",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Gerente de recursos humanos con 9 años de experiencia en contratación, relaciones laborales y prestaciones. Redujo el tiempo de contratación de 45 a 28 días, elevó la retención en un 15 % y gestiona RR. HH. para 250 empleados en 3 centros. Conocimiento de derecho y políticas laborales a nivel CIPD.",
    "experience": [
      {
        "role": "Gerente de recursos humanos",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Gestionar HR for 250 employees across 3 sites, with a team of 3\nCut time-to-hire from 45 to 28 days by rebuilding the interview process\nLifted retention by 15% with a new onboarding and review programme\nHandle employee relations, grievances and policy updates"
      },
      {
        "role": "Generalista de recursos humanos",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "jun. 2016",
        "end": "ene. 2020",
        "current": false,
        "points": "Recruited 120+ staff a year for hotels and restaurants\nVerificación de nóminas e inscripción en prestaciones para 400 empleados\nResolución de conflictos del personal y rotación por debajo de la media del sector"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Recursos humanos",
        "start": "2012",
        "end": "2016",
        "notes": "Certificación SHRM-CP. Formación en derecho laboral y comportamiento organizativo."
      }
    ],
    "skills": "Selección e incorporación\nRelaciones laborales\nPrestaciones y nóminas\nDerecho laboral\nGestión del rendimiento\nHRIS (Workday, BambooHR)",
    "languages": "Inglés (fluido)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Abogado asociado",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Abogado asociado con 6 años de experiencia en litigios comerciales y derecho contractual. Gestionó más de 40 casos, ganó el juicio sumario en 8 y redactó contratos por valor de $25M. Admisión en el Colegio de Abogados de Illinois; dominio de investigación jurídica, redacción y asesoramiento a clientes.",
    "experience": [
      {
        "role": "Abogado asociado",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "sept. 2020",
        "end": "",
        "current": true,
        "points": "Manage 40+ commercial litigation cases from filing to settlement\nWon summary judgment in 8 cases and settled 20 more favourably\nRedactar y negociar contratos por valor de hasta $25M\nAsesorar a clientes en persona y por escrito sobre riesgos y estrategia"
      },
      {
        "role": "Pasante jurídico",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "ago. 2019",
        "end": "ago. 2020",
        "current": false,
        "points": "Investigación de jurisprudencia y redacción de memorandos para 2 jueces\nRevisión de mociones y preparación de resúmenes judiciales para más de 100 vistas\nObservación de juicios y conferencias de conciliación en distintas salas civiles"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Derecho",
        "start": "2016",
        "end": "2019",
        "notes": "Admisión en el Colegio de Abogados de Illinois (2019). Revista jurídica, editor de artículos."
      }
    ],
    "skills": "Litigios comerciales\nRedacción y negociación de contratos\nInvestigación jurídica (Westlaw, LexisNexis)\nAsesoramiento a clientes\nDeclaraciones y fase de descubrimiento\nEscritos judiciales y procedimiento",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Farmacéutico clínico",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Farmacéutico clínico (PharmD) con 7 años de experiencia en farmacia hospitalaria y comunitaria. Revisa más de 100 órdenes de medicación al día, redujo los eventos adversos por medicamentos en un 25 % mediante un nuevo protocolo de verificación y asesora a los pacientes sobre el uso seguro de los medicamentos. Colegiado en Pennsylvania.",
    "experience": [
      {
        "role": "Farmacéutico clínico",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "ene. 2020",
        "end": "",
        "current": true,
        "points": "Review 100+ medication orders a day for safety, dosing and interactions\nCut adverse drug events by 25% with a new double-check protocol\nAsesorar a médicos y enfermeros sobre la elección de medicamentos para pacientes complejos\nRun the hospital's antibiotic stewardship rounds twice a week"
      },
      {
        "role": "Farmacéutico de plantilla",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "jul. 2018",
        "end": "dic. 2019",
        "current": false,
        "points": "Dispensed 200+ prescriptions a day with zero dispensing errors\nCounselled patients on new medicines, side effects and storage\nAdministración de vacunas antigripales y controles de tensión arterial"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacia",
        "start": "2014",
        "end": "2018",
        "notes": "Licensed pharmacist (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Medication review and safety\nFarmacología clínica\nAsesoramiento a pacientes\nSistemas de farmacia (Epic, PioneerRx)\nGestión de antibióticos\nServicios de vacunación",
    "languages": "Inglés (fluido)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Dentista general",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Dentista general (DDS) con 8 años de experiencia en odontología restauradora, estética y preventiva. Atiende a más de 25 pacientes al día en una clínica de 2,000 pacientes, con un índice de satisfacción del 98 %. Dominio de coronas, implantes, endodoncias y alineadores transparentes.",
    "experience": [
      {
        "role": "Dentista general",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Treat 25+ pacientes al día: fillings, crowns, root canals and extractions\nHold a 98% índice de satisfacción del paciente across 1,200+ reviews\nPlace 15+ implants a month and manage clear-aligner cases\nSupervise 2 hygienists and 4 dental assistants"
      },
      {
        "role": "Dentista asociado",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "jul. 2017",
        "end": "ene. 2019",
        "current": false,
        "points": "Prestación de odontología general en una clínica de 1,500 pacientes\nIntroducción de coronas en el mismo día, con una reducción de las visitas de retorno del 40 %\nVisitas escolares de divulgación sobre salud bucodental infantil"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Odontología",
        "start": "2013",
        "end": "2017",
        "notes": "Dentista colegiado (Arizona). Certificación Invisalign. Certificación CPR/BLS."
      }
    ],
    "skills": "Odontología restauradora (coronas, empastes)\nTratamiento de conductos radiculares\nImplantes dentales\nAlineadores transparentes\nAtención y comunicación con el paciente\nRadiografías digitales y CEREC",
    "languages": "Inglés (fluido)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fisioterapeuta",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fisioterapeuta (DPT) con 6 años de experiencia en rehabilitación ortopédica y deportiva. Atiende a 12-15 pacientes al día, y el 90 % alcanza sus objetivos dentro de las sesiones previstas. Dominio de terapia manual, prescripción de ejercicio y pruebas de vuelta al deporte.",
    "experience": [
      {
        "role": "Fisioterapeuta",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Treat 12-15 patients a day for sports injuries, post-surgical rehab and back pain\nEl 90 % de los pacientes alcanza sus objetivos dentro del número de sesiones previsto\nDiseñar pruebas de vuelta al deporte utilizadas por 3 equipos locales\nMentor 2 new graduates and supervise student placements"
      },
      {
        "role": "Fisioterapeuta de plantilla",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "ago. 2019",
        "end": "feb. 2021",
        "current": false,
        "points": "Provided inpatient rehab for post-surgical and stroke patients\nRan group exercise classes for 20+ older patients a week\nDocumentar la evolución en Epic y realizar el traspaso a los equipos de planta"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fisioterapia",
        "start": "2016",
        "end": "2019",
        "notes": "Fisioterapeuta colegiado (Oregon). Especialista clínico en ortopedia (OCS)."
      }
    ],
    "skills": "Rehabilitación ortopédica y deportiva\nTerapia manual\nPrescripción de ejercicio\nPruebas de vuelta al deporte\nPatient education\nDocumentación (Epic)",
    "languages": "Inglés (fluido)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Jefe de cocina",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Head chef with 10 años de experiencia in Creole and modern American kitchens. Lead a brigade of 12 in a 200-seat restaurant, cut food costs by 15% with tighter ordering and won 'Best New Menu' from the city food guide in 2025.",
    "experience": [
      {
        "role": "Jefe de cocina",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Dirigir una brigada de 12 en un restaurante de 200 plazas que sirve más de 300 cubiertos por noche\nCut food costs by 15% with tighter ordering and a seasonal menu\nWon 'Best New Menu' from the city food guide in 2025\nDesign menus, train cooks and run pass on Friday and Saturday service"
      },
      {
        "role": "Sous chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "jun. 2017",
        "end": "dic. 2020",
        "current": false,
        "points": "Dirección de la cocina en ausencia del jefe de cocina, con 150 cubiertos por noche\nManaged stock, ordering and supplier relationships\nTrained 8 line cooks and cut staff turnover by a third"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Artes culinarias",
        "start": "2014",
        "end": "2016",
        "notes": "Certificación ServSafe de gerente de protección alimentaria."
      }
    ],
    "skills": "Diseño de menús y cálculo de costes\nCocina criolla y americana moderna\nDirección de cocina (brigada de 12)\nSeguridad alimentaria (ServSafe)\nGestión de proveedores\nCatering para banquetes y eventos",
    "languages": "Inglés (fluido)\nEspañol (fluido)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Agente de policía",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Police officer with 8 años de experiencia in patrol, community policing and investigations. Respond to 30+ calls a week, with commendations for de-escalation and community outreach. Trained in crisis intervention, first aid and report writing.",
    "experience": [
      {
        "role": "Agente de policía",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "jun. 2019",
        "end": "",
        "current": true,
        "points": "Patrol a district of 40,000 residents, responding to 30+ calls a week\nRecepción de 2 menciones por desescalada y trabajo comunitario\nInvestigar robos y agresiones, con informes utilizados en más de 50 procesos judiciales\nTutorizar a 3 agentes nuevos durante su formación práctica"
      },
      {
        "role": "Agente de patrulla",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "ago. 2017",
        "end": "may. 2019",
        "current": false,
        "points": "Patrulla de carreteras comarcales y respuesta a avisos de emergencia\nNotificación de documentos judiciales y asistencia en el traslado de detenidos\nFormación completada en intervención en crisis y primeros auxilios"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificate",
        "field": "Aplicación de la ley",
        "start": "2017",
        "end": "2017",
        "notes": "Graduado de la Ohio Peace Officer Training Academy. Formación en el equipo de intervención en crisis."
      }
    ],
    "skills": "Patrulla y respuesta a emergencias\nPolicía comunitaria\nIntervención en crisis y desescalada\nRedacción de informes\nInvestigaciones\nPrimeros auxilios y RCP",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Bombero / técnico de emergencias médicas",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Bombero y técnico de emergencias médicas con 7 años de experiencia en extinción de incendios, rescate y respuesta médica de emergencia. Respondió a más de 900 avisos, incluidos incendios estructurales, rescates en vehículos y emergencias médicas. Formación HazMat e historial de seguridad limpio.",
    "experience": [
      {
        "role": "Bombero / técnico de emergencias médicas",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar. 2020",
        "end": "",
        "current": true,
        "points": "Respuesta a más de 900 avisos de incendio, rescate y médicos en un distrito de 3 estaciones\nProvide emergency medical care as a certified EMT on 60% of calls\nFormación HazMat; dirección de la descontaminación en incidentes químicos\nTrain new recruits in hose handling, ladders and search techniques"
      },
      {
        "role": "Bombero voluntario",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "jun. 2018",
        "end": "feb. 2020",
        "current": false,
        "points": "Respuesta a incendios forestales y estructurales como voluntario\nFormación completa de Bombero I y II y de EMT-Basic\nAyuda en charlas comunitarias de seguridad contra incendios en escuelas"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificate",
        "field": "Ciencia del fuego",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. EMT-Basic certified. HazMat Operations trained."
      }
    ],
    "skills": "Extinción de incendios y rescate\nAtención médica de emergencia (EMT)\nOperaciones HazMat\nEscaleras, mangueras y ventilación\nSeguridad contra incendios en la comunidad\nTrabajo en equipo bajo presión",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Fontanero colegiado",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Maestro fontanero colegiado con 11 años de experiencia en fontanería residencial y comercial. Completó más de 600 trabajos al año, desde instalaciones en bruto hasta calderas, con una tasa de resolución en la primera visita del 98 %. Dominio de instalación de tuberías, limpieza de desagües y cumplimiento del código.",
    "experience": [
      {
        "role": "Maestro fontanero",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "ene. 2019",
        "end": "",
        "current": true,
        "points": "Complete 600+ residential and commercial jobs a year\nInstalar calderas, calentadores de agua e instalaciones completas de baño en bruto\nHold a 98% first-visit fix rate on service calls\nSupervise 3 apprentices and sign off their work"
      },
      {
        "role": "Fontanero oficial",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "jun. 2014",
        "end": "dic. 2018",
        "current": false,
        "points": "Ran new-build plumbing for 40+ houses a year\nDesatasco de desagües y reparación de fugas en viviendas y restaurantes\nAprendizaje de instalación de gas y prevención de reflujo"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificate",
        "field": "Tecnología de fontanería",
        "start": "2013",
        "end": "2014",
        "notes": "Licencia de maestro fontanero (Tennessee). Certificación en prevención de reflujo."
      }
    ],
    "skills": "Fontanería residencial y comercial\nInstalación de tuberías y soldadura\nLimpieza de desagües e inspección con cámara\nInstalación de calderas y calentadores de agua\nInstalación de gas\nCumplimiento del código de fontanería",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Carpintero oficial",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Carpintero oficial con 9 años de experiencia en estructuras, trabajos de acabado y ebanistería a medida. Estructuró más de 30 casas e instaló cocinas en más de 60 viviendas, con reputación de mediciones exactas y acabados limpios. Dominio de lectura de planos y trabajo según el código.",
    "experience": [
      {
        "role": "Carpintero oficial",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "feb. 2019",
        "end": "",
        "current": true,
        "points": "Construir la estructura de más de 30 casas e instalar cocinas en más de 60 viviendas\nConstruir ebanistería y molduras a medida con una tolerancia de 1/16 de pulgada\nLeer y seguir planos arquitectónicos, señalando errores antes de que cuesten dinero\nTrain 2 apprentices in framing and finish techniques"
      },
      {
        "role": "Aprendiz de carpintero",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "jun. 2016",
        "end": "ene. 2019",
        "current": false,
        "points": "Assisted with framing, drywall and flooring on remodels\nAprendizaje del uso seguro de sierras, fresadoras y pistolas de clavos\nCompleted 8,000 apprenticeship hours and passed the journeyman exam"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificate",
        "field": "Carpintería",
        "start": "2015",
        "end": "2016",
        "notes": "Carpintero oficial. Certificación OSHA 10."
      }
    ],
    "skills": "Estructuras y obra estructural\nCarpintería de acabado y molduras\nEbanistería a medida\nLectura de planos arquitectónicos\nHerramientas eléctricas y seguridad\nPladur y suelos",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Profesor de secundaria (matemáticas)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Profesor de secundaria con 8 años de experiencia en la enseñanza de matemáticas en los grados 9-12. Elevó la tasa de aprobados en álgebra del 64 % al 83 % y entrena al equipo de matemáticas hasta 2 finales estatales. Dominio de instrucción diferenciada, preparación de exámenes y comunicación con las familias.",
    "experience": [
      {
        "role": "Profesor de matemáticas (grados 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "ago. 2019",
        "end": "",
        "current": true,
        "points": "Enseñar álgebra, geometría y precálculo a 120 alumnos en 5 grupos\nRaised algebra pass rates from 64% to 83% in 3 years\nEntrenar al equipo de matemáticas hasta 2 finales estatales\nRun after-school tutoring for 30 pupils a week"
      },
      {
        "role": "Profesor de matemáticas (grados 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "ago. 2017",
        "end": "jun. 2019",
        "current": false,
        "points": "Enseñanza de álgebra y geometría a 100 alumnos al año\nIntroducción de cuestionarios semanales que redujeron a la mitad los retrasos en los deberes\nOrganización de la primera feria de matemáticas del centro con 200 alumnos"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Educación matemática",
        "start": "2013",
        "end": "2017",
        "notes": "Licencia docente estatal (New Hampshire, grados 7-12, matemáticas)."
      }
    ],
    "skills": "Enseñanza de matemáticas (de álgebra a precálculo)\nPreparación de exámenes\nInstrucción diferenciada\nGestión del aula\nComunicación con las familias\nGoogle Classroom y Desmos",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Maestro de preescolar",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Maestro de preescolar con 6 años de experiencia en el cuidado de niños de 3-5 años. Dominio de aprendizaje basado en el juego, orientación de la conducta y comunicación con las familias. Creó un programa de fonética que elevó los resultados de preparación escolar de todo su grupo.",
    "experience": [
      {
        "role": "Maestro de preescolar",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "ago. 2020",
        "end": "",
        "current": true,
        "points": "Enseñar y cuidar a un grupo de 18 niños de 3-5 años\nBuilt a phonics programme that lifted school-readiness scores across the class\nPlanificar temas semanales, manualidades y juegos al aire libre\nCompartir novedades diarias e informes trimestrales de progreso con las familias"
      },
      {
        "role": "Auxiliar de maestro de preescolar",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "jun. 2018",
        "end": "jul. 2020",
        "current": false,
        "points": "Apoyo al maestro principal con un grupo de 20 niños\nDirección diaria de la hora del cuento, canciones y actividades artísticas\nKept safety and hygiene records to state standards"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Grado asociado",
        "field": "Educación infantil temprana",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA) credential. First aid and CPR certified."
      }
    ],
    "skills": "Aprendizaje basado en el juego\nOrientación de la conducta\nFonética y alfabetización temprana\nComunicación con las familias\nSeguridad en el aula\nPlanificación de arte y manualidades",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Trabajador social infantil y familiar",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Trabajador social colegiado con 7 años de experiencia en el apoyo a niños y familias. Gestiona una carga de 25 familias, coordina servicios entre centros escolares y proveedores de salud y elabora informes judiciales en los que confían los jueces. Dominio de evaluación, apoyo en crisis y salvaguardia.",
    "experience": [
      {
        "role": "Trabajador social infantil y familiar",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "ene. 2020",
        "end": "",
        "current": true,
        "points": "Gestionar a caseload of 25 families, visiting homes and schools weekly\nComplete court reports and give evidence in family court\nCoordinate housing, health and school support for vulnerable families\nCut assessment waiting time by 20% with a new triage system"
      },
      {
        "role": "Trabajador de casos",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "jul. 2018",
        "end": "dic. 2019",
        "current": false,
        "points": "Supported 40+ families in temporary housing with benefits and referrals\nTalleres semanales de crianza y presupuesto familiar\nKept case notes accurate for audits and funding reports"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Trabajo social",
        "start": "2016",
        "end": "2018",
        "notes": "Trabajador social colegiado (Ohio). Formación en bienestar infantil y sistemas familiares."
      }
    ],
    "skills": "Gestión de casos (25 familias)\nSalvaguardia infantil\nInformes para el juzgado de familia\nApoyo en crisis\nCoordinación entre agencias\nDerivaciones a prestaciones y vivienda",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Asistente jurídico",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Asistente jurídico con 6 años de experiencia en apoyo en litigios y trámites corporativos. Gestiona la fase de descubrimiento de más de 30 casos, redacta demandas y contratos y mantiene los plazos de presentación con un historial de puntualidad del 100 %. Dominio de Westlaw, e-discovery y software de gestión de casos.",
    "experience": [
      {
        "role": "Asistente jurídico",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "feb. 2021",
        "end": "",
        "current": true,
        "points": "Manage discovery for 30+ litigation cases, reviewing 10,000+ documents\nRedactar demandas, mociones y contratos para su revisión por el abogado\nKeep a 100% on-time record on court filings and deadlines\nCoordinate witnesses and prepare trial binders"
      },
      {
        "role": "Asistente legal",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "ago. 2019",
        "end": "ene. 2021",
        "current": false,
        "points": "Intake interviews for 20+ clients a week\nPrepared forms and filings for housing and family cases\nTraducción de documentos jurídicos para clientes hispanohablantes"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Grado asociado",
        "field": "Estudios paralegales",
        "start": "2017",
        "end": "2019",
        "notes": "Asistente jurídico certificado por NALA (CP). Programa aprobado por la ABA."
      }
    ],
    "skills": "Litigation support and discovery\nRedacción jurídica\nE-discovery (Relativity)\nGestión de casos (Clio)\nEscritos judiciales y plazos\nInvestigación jurídica (Westlaw)",
    "languages": "Inglés (fluido)\nEspañol (fluido)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Auxiliar contable",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Auxiliar contable con 5 años de experiencia en cuentas por pagar, facturación y conciliaciones bancarias. Procesa más de 300 facturas al mes con una precisión del 99.8 % y mantiene los libros limpios para el cierre de mes. Dominio de QuickBooks, Excel y apoyo en nóminas.",
    "experience": [
      {
        "role": "Auxiliar contable",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "abr. 2021",
        "end": "",
        "current": true,
        "points": "Process 300+ supplier invoices a month with 99.8% accuracy\nConciliar 6 cuentas bancarias cada semana y señalar las diferencias el mismo día\nPrepare payroll data for 45 staff and chase overdue customer payments\nKeep records tidy for the year-end audit, with zero findings"
      },
      {
        "role": "Auxiliar contable",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "jun. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Registrar a diario facturas de venta y recibos en QuickBooks\nAnswered supplier queries about payments by phone and email\nFiled paperwork and kept the archive up to date"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificate",
        "field": "Contabilidad básica",
        "start": "2018",
        "end": "2019",
        "notes": "Usuario certificado de QuickBooks."
      }
    ],
    "skills": "Cuentas por pagar y por cobrar\nConciliaciones bancarias\nFacturación (más de 300 al mes)\nQuickBooks y Excel\nApoyo en nóminas\nEntrada de datos (65 ppm)",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Asistente administrativo",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Asistente administrativo con 6 años de experiencia en mantener las oficinas en funcionamiento sin contratiempos. Gestiona las agendas de 4 gerentes, organiza viajes y reuniones y atiende más de 100 correos al día. Reconocido por su precisión, discreción y calma bajo la presión de los plazos.",
    "experience": [
      {
        "role": "Asistente administrativo",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Gestionar calendars, travel and meetings for 4 senior managers\nHandle 100+ emails a day, drafting replies and flagging priorities\nPrepare board papers and take minutes at monthly meetings\nRun office supplies and vendor orders, cutting costs by 12%"
      },
      {
        "role": "Recepcionista",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "ago. 2019",
        "end": "dic. 2020",
        "current": false,
        "points": "Welcomed 60+ pacientes al día and managed the appointment book\nAnswered phones and handled insurance queries\nKept patient records accurate and confidential"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Grado asociado",
        "field": "Administración de oficinas",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Gestión de agendas y viajes\nCorreo electrónico y correspondencia\nActas de reuniones\nMicrosoft Office (Word, Excel, Outlook)\nEntrada de datos (70 ppm)\nMaterial de oficina y proveedores",
    "languages": "Inglés (fluido)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Cajero bancario",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Cajero bancario con 4 años de experiencia en la atención de más de 80 clientes al día con precisión y esmero. Caja equilibrada al céntimo durante 3 años, sin ningún faltante. Dominio de depósitos, retiradas, controles de fraude y derivación de clientes a los productos adecuados.",
    "experience": [
      {
        "role": "Cajero bancario",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar. 2022",
        "end": "",
        "current": true,
        "points": "Serve 80+ customers a day: deposits, withdrawals, payments and transfers\nCaja equilibrada al céntimo durante 3 años, sin ningún faltante\nDetectar y detener 12 intentos de fraude, ahorrando a los clientes más de $90,000\nDerivar clientes a productos de ahorro y préstamos, cumpliendo los objetivos trimestrales de derivación"
      },
      {
        "role": "Asociado de atención al cliente",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "jun. 2021",
        "end": "feb. 2022",
        "current": false,
        "points": "Apertura de cuentas nuevas y emisión de tarjetas de débito para socios\nAnswered phone queries about balances and statements\nHelped members set up online and mobile banking"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Grado asociado",
        "field": "Negocios",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Manejo y cuadre de efectivo\nDepósitos, retiradas y pagos\nDetección de fraude\nAtención al cliente\nSoftware bancario (Fiserv)\nRecomendación de productos",
    "languages": "Inglés (fluido)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Gerente de ventas",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Gerente de ventas con 10 años de experiencia en la dirección de equipos de hasta 15 representantes. Hizo crecer los ingresos regionales de $4M a $7.5M en 3 años, elevó la tasa de cierre del 22 % al 34 % y redujo la rotación de representantes a la mitad con un mejor coaching e incorporación.",
    "experience": [
      {
        "role": "Gerente regional de ventas",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Dirigir a team of 15 sales reps across Texas and Oklahoma\nGrew regional revenue from $4M to $7.5M in 3 years\nLifted win rate from 22% to 34% with better coaching and pipeline reviews\nCut rep turnover by half with a new onboarding programme"
      },
      {
        "role": "Representante de ventas",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "jun. 2015",
        "end": "dic. 2020",
        "current": false,
        "points": "Venta de equipos industriales a más de 80 cuentas, cumpliendo la cuota 5 años consecutivos\nMejor representante de la región durante 3 años consecutivos\nBuilt a referral network that brought in 25% of new business"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Formación en gestión de ventas y negociación."
      }
    ],
    "skills": "Dirección de equipos de ventas (15 representantes)\nCrecimiento de ingresos y previsión\nGestión del pipeline (Salesforce)\nCoaching e incorporación\nNegociación\nPlanificación de territorios",
    "languages": "Inglés (fluido)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Gerente de construcción",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Gerente de construcción con 12 años de experiencia en la entrega de proyectos comerciales y residenciales por valor de hasta $12M. Más de 20 proyectos completados con una tasa de puntualidad del 95 %, cero lesiones con baja en las obras y presupuestos mantenidos dentro del 3 %. Dominio de programación, gestión de subcontratistas y seguridad.",
    "experience": [
      {
        "role": "Gerente de construcción",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "feb. 2020",
        "end": "",
        "current": true,
        "points": "Deliver commercial and residential projects worth up to $12M\nCompleted 20+ projects with a 95% on-time rate and budgets within 3%\nManage 30+ subcontractors and 50 workers across 3 live sites\nCero lesiones con baja en todos los centros en 4 años"
      },
      {
        "role": "Supervisor de obra",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "jun. 2013",
        "end": "ene. 2020",
        "current": false,
        "points": "Gestión de las operaciones diarias de obra en construcciones de oficinas y comercios\nCoordinated deliveries, inspections and subcontractor schedules\nKept safety records clean and passed every OSHA inspection"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Construcción de edificios",
        "start": "2009",
        "end": "2013",
        "notes": "Certificación OSHA 30. Candidato a CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Programación de proyectos (MS Project, Procore)\nControl presupuestario\nGestión de subcontratistas\nSeguridad en obra (OSHA 30)\nBlueprint reading\nInformes para clientes",
    "languages": "Inglés (fluido)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Asistente médico certificado",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Asistente médico certificado con 5 años de experiencia en medicina familiar y urgencias. Prepara a más de 25 pacientes al día, toma constantes, extrae sangre y gestiona la recepción con un índice de satisfacción del paciente del 97 %. Dominio de HCE, flebotomía y verificación de seguros.",
    "experience": [
      {
        "role": "Asistente médico certificado",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "abr. 2021",
        "end": "",
        "current": true,
        "points": "Room 25+ pacientes al día: vitals, histories and exam preparation\nDraw blood and run basic lab tests with a 99% first-stick rate\nManage the front desk, scheduling and insurance checks\nHold a 97% índice de satisfacción del paciente across 800+ surveys"
      },
      {
        "role": "Asistente médico",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "ago. 2019",
        "end": "mar. 2021",
        "current": false,
        "points": "Triaje de pacientes sin cita y asistencia a los médicos en procedimientos menores\nAdministración de vacunas y gestión de la recogida de muestras\nSalas de exploración abastecidas, limpias y listas entre pacientes"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificate",
        "field": "Asistencia médica",
        "start": "2018",
        "end": "2019",
        "notes": "Asistente médico certificado (CMA, AAMA). Certificación BLS. Formación en flebotomía."
      }
    ],
    "skills": "Admisión de pacientes y constantes vitales\nFlebotomía\nHCE (eClinicalWorks)\nVacunaciones\nVerificación de seguros\nGestión de recepción",
    "languages": "Inglés (fluido)\nEspañol (fluido)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Estudiante",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Motivated high-school senior with strong grades and part-time experiencia laboral. Quick to learn, reliable and good with people. Looking for a first full-time role or a part-time job alongside college.",
    "experience": [
      {
        "role": "Asistente de ventas a tiempo parcial",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "sept. 2024",
        "end": "",
        "current": true,
        "points": "Atender a más de 50 clientes por turno los fines de semana y después de clase\nHandle cash, restock shelves and keep displays tidy\nResponsable de confianza para abrir la tienda los sábados por la mañana"
      },
      {
        "role": "Tutor voluntario",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "ene. 2024",
        "end": "jun. 2025",
        "current": false,
        "points": "Tutorías de matemáticas a alumnos más jóvenes dos veces a la semana\nAyuda en la organización del programa de lectura de verano para 40 niños"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diploma de secundaria",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "Nota media 3.6. Cuadro de honor, 3 años. Capitán del equipo de debate."
      }
    ],
    "skills": "Atención al cliente\nCash handling\nTrabajo en equipo\nTime management\nMicrosoft Office\nPublic speaking (debate team)",
    "languages": "Inglés (fluido)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Recent Graduate \u2014 Business Administration",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Recién graduado en administración de empresas con experiencia de prácticas en marketing y operaciones. Organizó un concurso empresarial universitario con 200 participantes y completó unas prácticas de 6 meses en las que redujo el tiempo de elaboración de informes a la mitad. Con ganas de iniciar una carrera a tiempo completo y aprender rápido.",
    "experience": [
      {
        "role": "Becario de marketing",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "ene. 2025",
        "end": "jun. 2025",
        "current": false,
        "points": "Gestión de las cuentas sociales de la empresa, con un crecimiento de seguidores de 2,000 a 6,500\nCreación de un panel de informes que redujo el tiempo semanal de elaboración a la mitad\nRedacción de 20 entradas de blog que generaron más de 15,000 lecturas"
      },
      {
        "role": "Responsable de voluntarios de eventos",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "sept. 2024",
        "end": "may. 2025",
        "current": false,
        "points": "Organización de un concurso empresarial con 200 participantes y 12 jueces\nManaged a $5,000 budget and a team of 8 volunteers"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Administración de empresas",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 years. Final-year project on small-business marketing."
      }
    ],
    "skills": "Marketing en redes sociales\nExcel y Google Sheets\nactualidadation skills\nOrganización de eventos\nTrabajo en equipo\nAnálisis básico de datos",
    "languages": "Inglés (fluido)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Asociado de marketing junior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Asociado de marketing junior con 2 años de experiencia en contenidos, correo electrónico y redes sociales. Hizo crecer el boletín de un cliente de 1,000 a 4,000 suscriptores y gestiona campañas con una tasa media de apertura del 22 %. Listo para asumir más responsabilidad y una cartera mayor de cuentas.",
    "experience": [
      {
        "role": "Asociado de marketing junior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "jul. 2024",
        "end": "",
        "current": true,
        "points": "Grew a client newsletter from 1,000 to 4,000 subscribers in 14 months\nWrite and schedule 12 social posts a week for 4 clients\nRun email campaigns averaging a 22% open rate\nInformar mensualmente a los clientes de los resultados de las campañas"
      },
      {
        "role": "Becario de marketing",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "ene. 2024",
        "end": "jun. 2024",
        "current": false,
        "points": "Redactar product descriptions for 200+ items on the company website\nHelped run a spring sale campaign that lifted online orders by 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Comunicación",
        "start": "2020",
        "end": "2024",
        "notes": "Nota media 3.4. Formación en marketing digital y redacción para medios."
      }
    ],
    "skills": "Redacción de contenidos\nEmail marketing (Mailchimp)\nSocial media management\nGoogle Analytics\nCanva\nInformes para clientes",
    "languages": "Inglés (fluido)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Supervisor de operaciones",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Supervisor de operaciones con 8 años de experiencia en la dirección de equipos de almacén de 20-30 personas. Redujo los errores de preparación en un 30 %, elevó el envío puntual del 90 % al 97 % y formó a 15 nuevos empleados. Listo para un puesto de gerente de operaciones con un centro y un presupuesto mayores.",
    "experience": [
      {
        "role": "Supervisor de operaciones",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar. 2021",
        "end": "",
        "current": true,
        "points": "Supervisar 25 warehouse staff across 2 shifts in a 90,000 sq ft site\nCut picking errors by 30% with new check routines and barcode scanning\nLifted on-time dispatch from 90% to 97% in 2 years\nTrained 15 new starters and promoted 3 to team-lead roles"
      },
      {
        "role": "Jefe de equipo",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "jun. 2017",
        "end": "feb. 2021",
        "current": false,
        "points": "Led a team of 10 pickers and packers on the night shift\nIntroduced a rota that cut overtime by 20% without missing deadlines\nSesiones informativas de seguridad y equipo sin accidentes durante 2 años"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Gestión de la cadena de suministro",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Liderazgo de equipos (25 empleados)\nOperaciones de almacén\nMejora de procesos\nGestión de la seguridad\nControl de inventario\nWMS y Excel",
    "languages": "Inglés (fluido)\nHindi (conversacional)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Gerente de proyectos senior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Gerente de proyectos senior con 14 años de experiencia en la entrega de proyectos de software por valor de hasta $8M. Dirigió más de 30 proyectos con una tasa de puntualidad del 92 %, creó una PMO desde cero y tutorizó a 10 gerentes de proyectos. Reconocido por una entrega tranquila bajo presión e informes honestos a los ejecutivos.",
    "experience": [
      {
        "role": "Gerente de proyectos senior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "ene. 2019",
        "end": "",
        "current": true,
        "points": "Deliver software projects worth up to $8M with a 92% on-time rate\nBuilt the company's PMO from scratch: templates, reporting and governance\nMentor 10 project managers and run the monthly PM community\nInformar directamente al CTO sobre un programa de 40 personas"
      },
      {
        "role": "Gerente de proyectos",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "jun. 2012",
        "end": "dic. 2018",
        "current": false,
        "points": "Gestión de 20+ projects for retail and healthcare clients\nIntroduced Agile practices that cut delivery time by 25%\nGrew 2 key accounts from $500k to $2M in annual revenue"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Sistemas de información",
        "start": "2008",
        "end": "2012",
        "notes": "Certificación PMP (2015). Certified ScrumMaster. Formación de MBA (2018-2019, incompleta)."
      }
    ],
    "skills": "Entrega de programas y proyectos\nCreación y gobernanza de la PMO\nAgile y Waterfall\nControl presupuestario ($8M)\nInformes ejecutivos\nMentoría de equipos",
    "languages": "Inglés (fluido)\nEspañol (conversacional)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Director de operaciones",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Director de operaciones con 18 años de experiencia en el crecimiento de operaciones para empresas minoristas y de logística. Hizo crecer una operación de 200 personas hasta 900 en 6 centros, elevó el margen EBITDA del 8 % al 14 % y dirigió 2 adquisiciones. Experiencia en informes a nivel de junta y relaciones con inversores.",
    "experience": [
      {
        "role": "Director de operaciones",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "ene. 2021",
        "end": "",
        "current": true,
        "points": "Run operations for 900 people across 6 sites and a $180M budget\nLifted EBITDA margin from 8% to 14% in 3 years\nLed 2 acquisitions and integrated both teams within 6 months\nInformar mensualmente a la junta sobre operaciones, riesgos y crecimiento"
      },
      {
        "role": "Vicepresidente de operaciones",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "jun. 2014",
        "end": "dic. 2020",
        "current": false,
        "points": "Scaled operations from 200 to 600 people across 4 sites\nApertura de 3 centros de distribución a tiempo y por debajo del presupuesto\nBuilt the leadership team that still runs the business today"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Administración de empresas",
        "start": "2010",
        "end": "2012",
        "notes": "Grado en Economía, NYU (2006). Curso de gobierno corporativo (2020)."
      }
    ],
    "skills": "Operaciones a gran escala (900 personas)\nResponsabilidad sobre P&L ($180M)\nFusiones y adquisiciones\nInformes para la junta directiva\nEstrategia de crecimiento\nCreación de equipos directivos",
    "languages": "Inglés (fluido)",
    "template": "executive"
  }
};
});
