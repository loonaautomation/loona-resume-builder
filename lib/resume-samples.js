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
      "title": "Registered Nurse",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Registered nurse with 6 years of experience in medical-surgical and telemetry units. Skilled in patient assessment, IV therapy, medication administration and electronic health records. Known for calm, clear communication with patients and families during high-pressure situations.",
    "experience": [
      {
        "role": "Registered Nurse",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Care for 5-6 patients per shift on a 32-bed medical-surgical unit, including assessment, medication administration and wound care\nTrain and mentor 4 new graduate nurses, cutting their orientation time by 2 weeks\nReduced medication errors on the unit by 18% by introducing a double-check routine at handover\nDocument all care accurately in Epic electronic health records"
      },
      {
        "role": "Staff Nurse",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "May 2021",
        "current": false,
        "points": "Ran triage for 40+ walk-in patients a day, prioritising urgent cases for same-day care\nGave vaccinations and health screenings at monthly community outreach events\nCoordinated referrals to specialists and followed up on test results"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Nursing",
        "start": "2015",
        "end": "2019",
        "notes": "Registered Nurse licence (Texas). BLS and ACLS certified."
      }
    ],
    "skills": "Patient assessment\nIV therapy and medication administration\nElectronic health records (Epic)\nTelemetry monitoring\nPatient and family education\nInfection control",
    "languages": "English (fluent)\nSpanish (conversational)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Software Developer",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Software developer with 5 years of experience building web applications in Python and JavaScript. Shipped features used by 200,000+ users, cut API response times by 40% and led the migration of a monolith to microservices. Strong on testing, code review and clear documentation.",
    "experience": [
      {
        "role": "Software Developer",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Build and maintain customer-facing web features in Python (Django) and React, serving 200,000+ users\nCut average API response time from 850 ms to 500 ms by adding caching and fixing slow queries\nLed the migration of the billing service to microservices with zero downtime\nReview 10+ pull requests a week and mentor 2 junior developers"
      },
      {
        "role": "Junior Developer",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Built internal dashboards in JavaScript that replaced manual spreadsheets for 3 teams\nWrote automated tests that raised coverage from 45% to 78%\nFixed 120+ bugs across the product in the first year"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Computer Science",
        "start": "2016",
        "end": "2020",
        "notes": "Coursework in databases, algorithms and operating systems."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript and React\nPostgreSQL and Redis\nREST APIs and microservices\nGit and CI/CD\nAutomated testing (pytest, Jest)",
    "languages": "English (fluent)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Elementary School Teacher",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Elementary school teacher with 7 years of experience teaching grades 3-5. Skilled in differentiated instruction, classroom management and parent communication. Raised reading proficiency in my class from 58% to 81% over two school years.",
    "experience": [
      {
        "role": "Elementary School Teacher (Grade 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "Teach reading, maths and science to a class of 26 pupils, including 5 with individual learning plans\nRaised class reading proficiency from 58% to 81% in two years through guided reading groups\nRun a weekly parent newsletter and termly progress meetings for every family\nLead the school's reading club for 40 pupils in grades 3-5"
      },
      {
        "role": "Elementary School Teacher (Grade 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Aug 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Planned and delivered daily lessons for 24 pupils across all core subjects\nIntroduced behaviour routines that cut classroom disruptions by half\nOrganised the year-group science fair with 120 pupils and 80 parents"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Elementary Education",
        "start": "2014",
        "end": "2018",
        "notes": "State teaching licence (Ohio, grades K-5). Reading endorsement."
      }
    ],
    "skills": "Differentiated instruction\nClassroom management\nGuided reading groups\nParent communication\nLesson planning\nGoogle Classroom",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Senior Accountant",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA with 8 years of experience in month-end close, financial reporting and internal audit. Closed the books 3 days faster by rebuilding the reconciliation process and found $240,000 in recoverable overpayments in one audit year. Strong in Excel, QuickBooks and ERP systems.",
    "experience": [
      {
        "role": "Senior Accountant",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Own the month-end close for a $40M business unit, finishing 3 days faster after rebuilding reconciliations\nPrepare monthly financial statements and variance reports for senior management\nFound $240,000 in recoverable supplier overpayments during the 2024 internal audit\nSupervise 2 staff accountants and review their journal entries"
      },
      {
        "role": "Staff Accountant",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "Prepared tax returns and financial statements for 25 small-business clients\nAssisted audits of 8 clients, testing controls and documenting findings\nAutomated the fixed-asset register in Excel, saving 6 hours a month"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Accounting",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Member of the AICPA."
      }
    ],
    "skills": "Month-end close and reconciliations\nFinancial reporting and variance analysis\nInternal audit\nExcel (pivot tables, VLOOKUP)\nQuickBooks and SAP\nTax preparation",
    "languages": "English (fluent)\nMandarin (conversational)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A Truck Driver",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A driver with 9 years of experience in long-haul and regional freight. Over 900,000 accident-free miles, on-time delivery rate of 99% and experience with refrigerated, flatbed and dry-van loads. Clean driving record, HazMat and tanker endorsements.",
    "experience": [
      {
        "role": "Long-Haul Truck Driver",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Drive 2,800+ miles a week on regional routes across Texas, Oklahoma and New Mexico\nMaintain a 99% on-time delivery rate across 1,100+ loads a year\nHaul refrigerated and dry-van freight; complete pre-trip and post-trip inspections daily\nOver 900,000 accident-free miles in total"
      },
      {
        "role": "Delivery Truck Driver",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mar 2016",
        "end": "Mar 2019",
        "current": false,
        "points": "Delivered building materials to 15-20 job sites a day across the Dallas-Fort Worth area\nOperated forklifts and secured flatbed loads to DOT standards\nKept delivery paperwork and logs accurate with zero DOT violations"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificate",
        "field": "Commercial Driving (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A with HazMat and tanker endorsements. Clean driving record."
      }
    ],
    "skills": "Long-haul and regional driving\nRefrigerated and flatbed loads\nDOT regulations and logbooks\nPre-trip inspections\nRoute planning (GPS, ELD)\nForklift operation",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Retail Sales Associate",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Retail sales associate with 4 years of experience in electronics and apparel stores. Consistently in the top 3 sellers on the team, with a 32% attach rate on warranties and accessories. Friendly, fast at the till and trusted to open and close the store.",
    "experience": [
      {
        "role": "Senior Sales Associate",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Sell electronics and accessories to 60+ customers a day; top 3 in store sales for 8 straight quarters\nAchieve a 32% attach rate on warranties and accessories, the highest on the team\nTrain 6 new starters on the till, stockroom and customer-service standards\nTrusted keyholder: open and close the store and handle cash counts"
      },
      {
        "role": "Sales Associate",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Helped customers choose outfits and sizes on a busy shop floor\nKept displays tidy and restocked shelves during every shift\nHandled returns and exchanges politely, keeping complaints to a minimum"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate Degree",
        "field": "Business",
        "start": "2019",
        "end": "2021",
        "notes": "Part-time study while working in retail."
      }
    ],
    "skills": "Customer service and upselling\nCash handling and POS systems\nProduct knowledge (electronics)\nStock management\nStore opening and closing\nTeam training",
    "languages": "English (fluent)\nSpanish (fluent)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Customer Service Representative",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Customer service representative with 5 years of experience handling phone, email and live-chat support. Resolve 45+ cases a day with a 96% satisfaction score and a first-contact resolution rate of 88%. Calm with angry customers and quick to find the fix.",
    "experience": [
      {
        "role": "Customer Service Representative",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "May 2021",
        "end": "",
        "current": true,
        "points": "Handle 45+ phone, email and chat cases a day for billing, orders and technical faults\nHold a 96% customer satisfaction score and 88% first-contact resolution rate\nDe-escalate difficult calls and turn complaints into repeat business\nTrain 5 new agents on scripts, systems and tone"
      },
      {
        "role": "Support Agent",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "Answered customer emails and chats about orders, returns and refunds\nKept average first-response time under 2 hours\nWrote 20 help-centre articles that cut repeat questions by a quarter"
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
    "skills": "Phone, email and live-chat support\nComplaint handling and de-escalation\nCRM systems (Zendesk, Salesforce)\nBilling and order queries\nTyping 55 wpm\nTeam training",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Operations Manager",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Operations manager with 12 years of experience running teams of up to 80 people across warehousing and distribution. Cut order-processing costs by 22%, lifted on-time shipments from 91% to 98% and opened two new sites on time and under budget.",
    "experience": [
      {
        "role": "Operations Manager",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Run a 120,000 sq ft distribution centre with 80 staff across 3 shifts\nCut order-processing costs by 22% by redesigning pick paths and shift patterns\nLifted on-time shipments from 91% to 98% in 18 months\nOpened 2 new sites on time and 8% under budget"
      },
      {
        "role": "Warehouse Supervisor",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Supervised 25 warehouse staff and the daily dispatch of 4,000+ orders\nIntroduced barcode scanning, cutting picking errors by 35%\nRan safety training that kept the site accident-free for 3 years"
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
    "skills": "Team leadership (up to 80 staff)\nWarehousing and distribution\nProcess improvement\nBudgeting and cost control\nSafety management\nERP and WMS systems",
    "languages": "English (fluent)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Licensed Electrician",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Licensed journeyman electrician with 8 years of experience in residential and commercial work. Skilled in wiring, panel upgrades, lighting and fault-finding, with a clean safety record across 400+ jobs. NEC code knowledge and experience supervising apprentices.",
    "experience": [
      {
        "role": "Journeyman Electrician",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mar 2019",
        "end": "",
        "current": true,
        "points": "Complete 400+ residential and commercial jobs: wiring, panel upgrades, lighting and EV chargers\nDiagnose and repair faults fast, with a first-visit fix rate of 92%\nSupervise 2 apprentices and sign off their work to code\nKeep a clean safety record with zero lost-time injuries"
      },
      {
        "role": "Electrician Apprentice",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Assisted licensed electricians on new-build wiring and rewires\nLearned conduit bending, cable pulling and panel installation\nCompleted 8,000 apprenticeship hours and passed the journeyman exam first time"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificate",
        "field": "Electrical Technology",
        "start": "2015",
        "end": "2016",
        "notes": "Journeyman electrician licence (Colorado). OSHA 30 certified."
      }
    ],
    "skills": "Residential and commercial wiring\nPanel upgrades and EV chargers\nFault-finding and testing\nNEC code compliance\nConduit bending and cable pulling\nApprentice supervision",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Financial Analyst",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Financial analyst with 6 years of experience in budgeting, forecasting and investment analysis. Built forecasting models that cut budget variance by 30% and supported $50M in investment decisions. Strong in Excel, SQL and financial modelling.",
    "experience": [
      {
        "role": "Financial Analyst",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Build monthly forecasts and annual budgets for a $120M portfolio\nCut budget variance by 30% with a driver-based forecasting model\nSupport investment decisions worth $50M with valuation and scenario analysis\nPresent findings monthly to the CFO and department heads"
      },
      {
        "role": "Junior Financial Analyst",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Prepared weekly performance reports for 12 branches\nAutomated reporting in Excel, saving 10 hours a week\nAssisted the credit team with loan portfolio analysis"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finance",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II candidate. Coursework in valuation and corporate finance."
      }
    ],
    "skills": "Financial modelling and forecasting\nBudgeting and variance analysis\nValuation (DCF, comparables)\nExcel (advanced) and SQL\nBloomberg Terminal\nData visualisation (Power BI)",
    "languages": "English (fluent)\nHindi (fluent)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Civil Engineer",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Civil engineer (PE) with 7 years of experience in road and water infrastructure design. Led the design of a 12-mile highway widening and a stormwater system serving 8,000 homes. Skilled in AutoCAD Civil 3D, cost estimation and permit coordination.",
    "experience": [
      {
        "role": "Civil Engineer",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Lead design of a 12-mile highway widening, from survey to construction documents\nDesigned a stormwater system serving 8,000 homes, approved first time by the city\nCoordinate permits with 4 agencies and manage a $2.5M design budget\nReview and stamp drawings as a licensed Professional Engineer"
      },
      {
        "role": "Junior Civil Engineer",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "Prepared grading and drainage plans for 20+ residential developments\nRan cost estimates and quantity take-offs for road projects\nAttended site inspections and wrote progress reports"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Civil Engineering",
        "start": "2014",
        "end": "2018",
        "notes": "Professional Engineer licence (Washington). EIT passed 2018."
      }
    ],
    "skills": "Road and drainage design\nAutoCAD Civil 3D\nStormwater modelling\nCost estimation\nPermit coordination\nProject scheduling (MS Project)",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Mechanical Engineer",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Mechanical engineer with 6 years of experience designing HVAC systems and production equipment. Cut energy use by 18% across 3 plants with redesigned ductwork and controls, and led a machine redesign that raised output by 25%. Skilled in SolidWorks, FEA and thermal analysis.",
    "experience": [
      {
        "role": "Mechanical Engineer",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Design HVAC and production equipment for 3 plants with 400+ staff\nCut energy use by 18% by redesigning ductwork and control sequences\nLed a machine redesign that raised output by 25% with no extra floor space\nRun FEA and thermal analysis on new parts before prototyping"
      },
      {
        "role": "Junior Mechanical Engineer",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Modelled parts and assemblies in SolidWorks for automotive clients\nPrepared drawings, bills of materials and test reports\nSupported prototype builds and resolved fit issues on the shop floor"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Mechanical Engineering",
        "start": "2015",
        "end": "2019",
        "notes": "Coursework in thermodynamics, fluid mechanics and machine design."
      }
    ],
    "skills": "HVAC design\nSolidWorks and AutoCAD\nFEA and thermal analysis\nMachine design\nEnergy efficiency\nGD&T and tolerancing",
    "languages": "English (fluent)\nKorean (conversational)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Electrical Engineer",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Electrical engineer with 6 years of experience in embedded systems and power electronics. Designed control boards now used in 50,000+ devices and cut board cost by 22% through component redesign. Skilled in Altium, C, firmware testing and EMC compliance.",
    "experience": [
      {
        "role": "Electrical Engineer",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Design embedded control boards used in 50,000+ devices a year\nCut board cost by 22% by redesigning the power stage and sourcing alternates\nLead EMC compliance testing, passing first time on 4 product lines\nWrite and review firmware in C for microcontrollers"
      },
      {
        "role": "Junior Electrical Engineer",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Laid out PCBs in Altium for consumer and industrial clients\nBuilt and tested prototypes, debugging hardware faults\nWrote test procedures that cut production test time by 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Electrical Engineering",
        "start": "2015",
        "end": "2019",
        "notes": "Coursework in embedded systems, power electronics and signal processing."
      }
    ],
    "skills": "Embedded systems and PCB design\nAltium Designer\nC and firmware\nPower electronics\nEMC compliance testing\nOscilloscopes and lab instruments",
    "languages": "English (fluent)\nGujarati (conversational)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Data Analyst",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Data analyst with 4 years of experience turning sales and operations data into decisions. Built dashboards used by 60+ managers, cut monthly reporting time from 3 days to 4 hours and found a pricing error worth $180,000 a year. Strong in SQL, Excel and Power BI.",
    "experience": [
      {
        "role": "Data Analyst",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Build Power BI dashboards used by 60+ store and regional managers\nCut monthly reporting from 3 days to 4 hours with automated SQL pipelines\nFound a pricing error worth $180,000 a year by auditing promotion data\nPresent findings monthly to the commercial team"
      },
      {
        "role": "Junior Data Analyst",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Aug 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "Cleaned and joined delivery data from 4 systems into one reporting table\nBuilt Excel trackers that replaced manual counts for 2 teams\nAnswered ad-hoc data questions for operations managers daily"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statistics",
        "start": "2016",
        "end": "2020",
        "notes": "Coursework in regression, databases and data visualisation."
      }
    ],
    "skills": "SQL and data cleaning\nPower BI and Tableau\nExcel (advanced)\nPython (pandas)\nDashboard design\nA/B testing basics",
    "languages": "English (fluent)\nVietnamese (conversational)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Data Scientist",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Data scientist with 5 years of experience building machine-learning models for e-commerce. A recommendation model I shipped lifted revenue per visit by 12%, and a churn model now flags 80% of at-risk customers. Strong in Python, SQL and model deployment.",
    "experience": [
      {
        "role": "Data Scientist",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Shipped a recommendation model that lifted revenue per visit by 12%\nBuilt a churn model that flags 80% of at-risk customers a month early\nDeployed models to production with monitoring and retraining pipelines\nPresent model results to product and marketing teams monthly"
      },
      {
        "role": "Junior Data Scientist",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Built forecasting models for 3 retail clients with 90%+ accuracy\nCleaned and prepared datasets of 10M+ rows for modelling\nWrote documentation so clients could rerun models themselves"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Data Science",
        "start": "2018",
        "end": "2020",
        "notes": "Thesis on recommendation systems. BS in Mathematics (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nMachine learning and statistics\nSQL and Spark\nModel deployment (Docker, AWS)\nA/B testing\nData visualisation",
    "languages": "English (fluent)\nArabic (fluent)",
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
    "summary": "Web developer with 4 years of experience building fast, accessible websites in HTML, CSS and JavaScript. Rebuilt a store's checkout that lifted conversions by 18% and maintain 12 client sites with 99.9% uptime. Strong on responsive design, performance and SEO basics.",
    "experience": [
      {
        "role": "Web Developer",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Build responsive websites in HTML, CSS, JavaScript and WordPress for 12 clients\nRebuilt a store checkout that lifted conversions by 18%\nCut average page load time from 4.2s to 1.8s with image and code optimisation\nKeep all client sites at 99.9% uptime with monitoring and backups"
      },
      {
        "role": "Junior Web Developer",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Built landing pages and fixed bugs across 20+ small business sites\nLearned Git, responsive design and basic SEO on live projects\nAnswered client emails and made same-day content updates"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Computer Science",
        "start": "2017",
        "end": "2021",
        "notes": "Coursework in web development, databases and human-computer interaction."
      }
    ],
    "skills": "HTML, CSS and JavaScript\nReact and WordPress\nResponsive design\nPage-speed optimisation\nGit and GitHub\nBasic SEO",
    "languages": "English (fluent)\nSpanish (fluent)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Graphic Designer",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Graphic designer with 5 years of experience in branding, packaging and social media design. Created brand identities for 25+ small businesses and a packaging redesign that lifted shelf sales by 14%. Skilled in Adobe Illustrator, Photoshop and Figma.",
    "experience": [
      {
        "role": "Graphic Designer",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Design brand identities, packaging and social campaigns for 25+ clients\nPackaging redesign for a food brand lifted shelf sales by 14%\nProduce 30+ social assets a week across Instagram, TikTok and Facebook\nPresent concepts to clients and revise from feedback fast"
      },
      {
        "role": "Junior Graphic Designer",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "Designed flyers, menus and social posts for local restaurants and shops\nPrepared print-ready files and checked proofs with printers\nBuilt a template library that cut design time by a third"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Graphic Design",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio in branding and packaging design."
      }
    ],
    "skills": "Adobe Illustrator and Photoshop\nFigma\nBrand identity design\nPackaging design\nSocial media design\nPrint production",
    "languages": "English (fluent)\nKorean (conversational)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX Designer",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX designer with 5 years of experience researching users and designing mobile and web products. Redesigned an onboarding flow that cut drop-off by 35% and ran 40+ usability tests. Skilled in Figma, user research, wireframing and prototyping.",
    "experience": [
      {
        "role": "UX Designer",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Redesigned mobile onboarding, cutting drop-off by 35% in 3 months\nRun 40+ usability tests and user interviews a year\nBuild wireframes and prototypes in Figma for 2 product teams\nWork daily with engineers and product managers on delivery"
      },
      {
        "role": "Junior UX Designer",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Aug 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Designed screens and flows for 5 client apps\nRan first usability tests and wrote up findings for clients\nBuilt a component library that sped up design handover"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychology",
        "start": "2016",
        "end": "2020",
        "notes": "UX design certificate (General Assembly, 2020). Coursework in human-computer interaction."
      }
    ],
    "skills": "User research and usability testing\nWireframing and prototyping (Figma)\nInformation architecture\nDesign systems\nJourney mapping\nStakeholder workshops",
    "languages": "English (fluent)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Marketing Manager",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Marketing manager with 8 years of experience in B2B and consumer campaigns. Grew qualified leads by 60% in one year, launched a product line that hit $3M in first-year sales and manage a $500,000 annual budget across a team of 5.",
    "experience": [
      {
        "role": "Marketing Manager",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Lead a team of 5 and a $500,000 annual marketing budget\nGrew qualified leads by 60% in one year with content and paid campaigns\nLaunched a product line that reached $3M in first-year sales\nCut cost per lead by 28% by rebuilding campaign targeting"
      },
      {
        "role": "Marketing Specialist",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
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
        "notes": "Coursework in consumer behaviour, analytics and brand management."
      }
    ],
    "skills": "Campaign strategy and planning\nContent and email marketing\nPaid advertising (Google, Meta)\nMarketing analytics (GA4)\nTeam leadership\nBudget management",
    "languages": "English (fluent)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Project Manager",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Project manager (PMP) with 7 years of experience delivering software and construction projects on time and on budget. Managed 15 projects worth up to $4M, with a 94% on-time delivery rate. Skilled in Agile, risk management and stakeholder communication.",
    "experience": [
      {
        "role": "Project Manager",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Manage 15 projects worth up to $4M, with a 94% on-time delivery rate\nRun Agile sprints for 3 teams and report progress to executives weekly\nCut project overruns by 30% with earlier risk reviews\nCoordinate vendors, clients and internal teams across 4 time zones"
      },
      {
        "role": "Project Coordinator",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "Tracked schedules, budgets and permits for 8 building projects\nPrepared status reports and meeting notes for clients\nResolved scheduling conflicts that saved 2 weeks on a school build"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Business Administration",
        "start": "2014",
        "end": "2018",
        "notes": "PMP certified (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Project planning and scheduling\nAgile and Scrum\nRisk management\nBudget control\nStakeholder communication\nMS Project and Jira",
    "languages": "English (fluent)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Human Resources Manager",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Human resources manager with 9 years of experience in hiring, employee relations and benefits. Cut time-to-hire from 45 to 28 days, lifted retention by 15% and run HR for 250 employees across 3 sites. CIPD-level knowledge of employment law and policy.",
    "experience": [
      {
        "role": "Human Resources Manager",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Run HR for 250 employees across 3 sites, with a team of 3\nCut time-to-hire from 45 to 28 days by rebuilding the interview process\nLifted retention by 15% with a new onboarding and review programme\nHandle employee relations, grievances and policy updates"
      },
      {
        "role": "HR Generalist",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
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
        "notes": "SHRM-CP certified. Coursework in employment law and organisational behaviour."
      }
    ],
    "skills": "Recruitment and onboarding\nEmployee relations\nBenefits and payroll\nEmployment law\nPerformance management\nHRIS (Workday, BambooHR)",
    "languages": "English (fluent)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Associate Attorney",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Associate attorney with 6 years of experience in commercial litigation and contract law. Managed 40+ cases, won summary judgment in 8, and drafted contracts worth $25M. Admitted to the Illinois Bar; skilled in legal research, drafting and client counsel.",
    "experience": [
      {
        "role": "Associate Attorney",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "Manage 40+ commercial litigation cases from filing to settlement\nWon summary judgment in 8 cases and settled 20 more favourably\nDraft and negotiate contracts worth up to $25M\nAdvise clients in person and in writing on risk and strategy"
      },
      {
        "role": "Law Clerk",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Aug 2019",
        "end": "Aug 2020",
        "current": false,
        "points": "Researched case law and drafted memos for 2 judges\nReviewed motions and prepared bench summaries for 100+ hearings\nObserved trials and settlement conferences across civil divisions"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Law",
        "start": "2016",
        "end": "2019",
        "notes": "Admitted to the Illinois Bar (2019). Law review, articles editor."
      }
    ],
    "skills": "Commercial litigation\nContract drafting and negotiation\nLegal research (Westlaw, LexisNexis)\nClient counsel\nDepositions and discovery\nCourt filings and procedure",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Clinical Pharmacist",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Clinical pharmacist (PharmD) with 7 years of experience in hospital and community pharmacy. Review 100+ medication orders a day, cut adverse drug events by 25% through a new checking protocol and counsel patients on safe medicine use. Licensed in Pennsylvania.",
    "experience": [
      {
        "role": "Clinical Pharmacist",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Review 100+ medication orders a day for safety, dosing and interactions\nCut adverse drug events by 25% with a new double-check protocol\nAdvise doctors and nurses on drug choices for complex patients\nRun the hospital's antibiotic stewardship rounds twice a week"
      },
      {
        "role": "Staff Pharmacist",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "Dispensed 200+ prescriptions a day with zero dispensing errors\nCounselled patients on new medicines, side effects and storage\nGave flu vaccinations and ran blood-pressure checks"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Pharmacy",
        "start": "2014",
        "end": "2018",
        "notes": "Licensed pharmacist (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Medication review and safety\nClinical pharmacology\nPatient counselling\nPharmacy systems (Epic, PioneerRx)\nAntibiotic stewardship\nVaccination services",
    "languages": "English (fluent)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "General Dentist",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "General dentist (DDS) with 8 years of experience in restorative, cosmetic and preventive dentistry. Treat 25+ patients a day across a 2,000-patient practice, with a 98% patient satisfaction score. Skilled in crowns, implants, root canals and clear aligners.",
    "experience": [
      {
        "role": "General Dentist",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Treat 25+ patients a day: fillings, crowns, root canals and extractions\nHold a 98% patient satisfaction score across 1,200+ reviews\nPlace 15+ implants a month and manage clear-aligner cases\nSupervise 2 hygienists and 4 dental assistants"
      },
      {
        "role": "Associate Dentist",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Provided general dentistry for a 1,500-patient practice\nIntroduced same-day crowns, cutting return visits by 40%\nRan school outreach visits on children's oral health"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Dentistry",
        "start": "2013",
        "end": "2017",
        "notes": "Licensed dentist (Arizona). Invisalign certified. CPR/BLS certified."
      }
    ],
    "skills": "Restorative dentistry (crowns, fillings)\nRoot canal treatment\nDental implants\nClear aligners\nPatient care and communication\nDigital X-rays and CEREC",
    "languages": "English (fluent)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Physical Therapist",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Physical therapist (DPT) with 6 years of experience in orthopaedic and sports rehabilitation. Treat 12-15 patients a day, with 90% reaching their goals within the planned sessions. Skilled in manual therapy, exercise prescription and return-to-sport testing.",
    "experience": [
      {
        "role": "Physical Therapist",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Treat 12-15 patients a day for sports injuries, post-surgical rehab and back pain\n90% of patients reach their goals within the planned number of sessions\nDesign return-to-sport testing used by 3 local teams\nMentor 2 new graduates and supervise student placements"
      },
      {
        "role": "Staff Physical Therapist",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Aug 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Provided inpatient rehab for post-surgical and stroke patients\nRan group exercise classes for 20+ older patients a week\nDocumented progress in Epic and handed over to ward teams"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Physical Therapy",
        "start": "2016",
        "end": "2019",
        "notes": "Licensed physical therapist (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Orthopaedic and sports rehabilitation\nManual therapy\nExercise prescription\nReturn-to-sport testing\nPatient education\nDocumentation (Epic)",
    "languages": "English (fluent)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Head Chef",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Head chef with 10 years of experience in Creole and modern American kitchens. Lead a brigade of 12 in a 200-seat restaurant, cut food costs by 15% with tighter ordering and won 'Best New Menu' from the city food guide in 2025.",
    "experience": [
      {
        "role": "Head Chef",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Lead a brigade of 12 in a 200-seat restaurant serving 300+ covers a night\nCut food costs by 15% with tighter ordering and a seasonal menu\nWon 'Best New Menu' from the city food guide in 2025\nDesign menus, train cooks and run pass on Friday and Saturday service"
      },
      {
        "role": "Sous Chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "Ran the kitchen when the head chef was away, covering 150 covers a night\nManaged stock, ordering and supplier relationships\nTrained 8 line cooks and cut staff turnover by a third"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Culinary Arts",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe Food Protection Manager certified."
      }
    ],
    "skills": "Menu design and costing\nCreole and modern American cuisine\nKitchen leadership (brigade of 12)\nFood safety (ServSafe)\nSupplier management\nBanquet and event catering",
    "languages": "English (fluent)\nSpanish (fluent)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Police Officer",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Police officer with 8 years of experience in patrol, community policing and investigations. Respond to 30+ calls a week, with commendations for de-escalation and community outreach. Trained in crisis intervention, first aid and report writing.",
    "experience": [
      {
        "role": "Police Officer",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Patrol a district of 40,000 residents, responding to 30+ calls a week\nReceived 2 commendations for de-escalation and community outreach\nInvestigate thefts and assaults, writing reports used in 50+ prosecutions\nMentor 3 new officers through field training"
      },
      {
        "role": "Patrol Officer",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Aug 2017",
        "end": "May 2019",
        "current": false,
        "points": "Patrolled county roads and responded to emergency calls\nServed court papers and assisted with prisoner transport\nCompleted crisis intervention and first-aid training"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificate",
        "field": "Law Enforcement",
        "start": "2017",
        "end": "2017",
        "notes": "Ohio Peace Officer Training Academy graduate. Crisis Intervention Team trained."
      }
    ],
    "skills": "Patrol and emergency response\nCommunity policing\nCrisis intervention and de-escalation\nReport writing\nInvestigations\nFirst aid and CPR",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Firefighter / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Firefighter and EMT with 7 years of experience in fire suppression, rescue and emergency medical response. Responded to 900+ calls, including structure fires, vehicle rescues and medical emergencies. HazMat trained with a clean safety record.",
    "experience": [
      {
        "role": "Firefighter / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mar 2020",
        "end": "",
        "current": true,
        "points": "Respond to 900+ fire, rescue and medical calls across a 3-station district\nProvide emergency medical care as a certified EMT on 60% of calls\nHazMat trained; lead decontamination at chemical incidents\nTrain new recruits in hose handling, ladders and search techniques"
      },
      {
        "role": "Volunteer Firefighter",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Responded to wildland and structure fires as a volunteer\nCompleted Firefighter I & II and EMT-Basic training\nHelped run community fire-safety talks at schools"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificate",
        "field": "Fire Science",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. EMT-Basic certified. HazMat Operations trained."
      }
    ],
    "skills": "Fire suppression and rescue\nEmergency medical care (EMT)\nHazMat operations\nLadders, hoses and ventilation\nCommunity fire safety\nTeamwork under pressure",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Licensed Plumber",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Licensed master plumber with 11 years of experience in residential and commercial plumbing. Completed 600+ jobs a year, from rough-ins to boiler installs, with a 98% first-visit fix rate. Skilled in pipefitting, drain cleaning and code compliance.",
    "experience": [
      {
        "role": "Master Plumber",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Complete 600+ residential and commercial jobs a year\nInstall boilers, water heaters and full bathroom rough-ins\nHold a 98% first-visit fix rate on service calls\nSupervise 3 apprentices and sign off their work"
      },
      {
        "role": "Journeyman Plumber",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dec 2018",
        "current": false,
        "points": "Ran new-build plumbing for 40+ houses a year\nCleared drains and repaired leaks for homes and restaurants\nLearned gas fitting and backflow prevention"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificate",
        "field": "Plumbing Technology",
        "start": "2013",
        "end": "2014",
        "notes": "Master plumber licence (Tennessee). Backflow prevention certified."
      }
    ],
    "skills": "Residential and commercial plumbing\nPipefitting and soldering\nDrain cleaning and camera inspection\nBoiler and water heater installs\nGas fitting\nPlumbing code compliance",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Journeyman Carpenter",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Journeyman carpenter with 9 years of experience in framing, finish work and custom cabinetry. Framed 30+ houses and fitted kitchens in 60+ homes, with a reputation for exact measurements and clean finishes. Skilled in reading plans and working to code.",
    "experience": [
      {
        "role": "Journeyman Carpenter",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Frame 30+ houses and fit kitchens in 60+ homes\nBuild custom cabinetry and trim to 1/16-inch tolerance\nRead and follow architectural plans, flagging errors before they cost money\nTrain 2 apprentices in framing and finish techniques"
      },
      {
        "role": "Carpenter Apprentice",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Assisted with framing, drywall and flooring on remodels\nLearned to use saws, routers and nail guns safely\nCompleted 8,000 apprenticeship hours and passed the journeyman exam"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificate",
        "field": "Carpentry",
        "start": "2015",
        "end": "2016",
        "notes": "Journeyman carpenter. OSHA 10 certified."
      }
    ],
    "skills": "Framing and structural work\nFinish carpentry and trim\nCustom cabinetry\nReading architectural plans\nPower tools and safety\nDrywall and flooring",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Secondary School Teacher (Mathematics)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Secondary school teacher with 8 years of experience teaching mathematics to grades 9-12. Raised algebra pass rates from 64% to 83% and coach the maths team to 2 state finals. Skilled in differentiated instruction, exam preparation and parent communication.",
    "experience": [
      {
        "role": "Mathematics Teacher (Grades 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Aug 2019",
        "end": "",
        "current": true,
        "points": "Teach algebra, geometry and pre-calculus to 120 pupils across 5 classes\nRaised algebra pass rates from 64% to 83% in 3 years\nCoach the maths team to 2 state finals\nRun after-school tutoring for 30 pupils a week"
      },
      {
        "role": "Mathematics Teacher (Grades 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Aug 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Taught algebra and geometry to 100 pupils a year\nIntroduced weekly quizzes that cut homework gaps by half\nOrganised the school's first maths fair with 200 pupils"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Mathematics Education",
        "start": "2013",
        "end": "2017",
        "notes": "State teaching licence (New Hampshire, grades 7-12, mathematics)."
      }
    ],
    "skills": "Mathematics teaching (algebra to pre-calculus)\nExam preparation\nDifferentiated instruction\nClassroom management\nParent communication\nGoogle Classroom and Desmos",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Preschool Teacher",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Preschool teacher with 6 years of experience caring for children aged 3-5. Skilled in play-based learning, behaviour guidance and parent communication. Built a phonics programme that lifted school-readiness scores across my class.",
    "experience": [
      {
        "role": "Preschool Teacher",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "Teach and care for a class of 18 children aged 3-5\nBuilt a phonics programme that lifted school-readiness scores across the class\nPlan weekly themes, crafts and outdoor play\nShare daily updates and termly progress reports with parents"
      },
      {
        "role": "Assistant Preschool Teacher",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "Supported the lead teacher with a class of 20 children\nRan story time, songs and art activities daily\nKept safety and hygiene records to state standards"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate Degree",
        "field": "Early Childhood Education",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA) credential. First aid and CPR certified."
      }
    ],
    "skills": "Play-based learning\nBehaviour guidance\nPhonics and early literacy\nParent communication\nClassroom safety\nArts and crafts planning",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Child and Family Social Worker",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Licensed social worker with 7 years of experience supporting children and families. Manage a caseload of 25 families, coordinate services across schools and health providers, and complete court reports that judges rely on. Skilled in assessment, crisis support and safeguarding.",
    "experience": [
      {
        "role": "Child and Family Social Worker",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Manage a caseload of 25 families, visiting homes and schools weekly\nComplete court reports and give evidence in family court\nCoordinate housing, health and school support for vulnerable families\nCut assessment waiting time by 20% with a new triage system"
      },
      {
        "role": "Case Worker",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "Supported 40+ families in temporary housing with benefits and referrals\nRan weekly parenting and budgeting workshops\nKept case notes accurate for audits and funding reports"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Social Work",
        "start": "2016",
        "end": "2018",
        "notes": "Licensed Social Worker (Ohio). Coursework in child welfare and family systems."
      }
    ],
    "skills": "Case management (25 families)\nChild safeguarding\nFamily court reports\nCrisis support\nMulti-agency coordination\nBenefits and housing referrals",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Paralegal",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Paralegal with 6 years of experience in litigation support and corporate filings. Manage discovery for 30+ cases, draft pleadings and contracts, and keep filing deadlines with a 100% on-time record. Skilled in Westlaw, e-discovery and case management software.",
    "experience": [
      {
        "role": "Paralegal",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Manage discovery for 30+ litigation cases, reviewing 10,000+ documents\nDraft pleadings, motions and contracts for attorney review\nKeep a 100% on-time record on court filings and deadlines\nCoordinate witnesses and prepare trial binders"
      },
      {
        "role": "Legal Assistant",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Intake interviews for 20+ clients a week\nPrepared forms and filings for housing and family cases\nTranslated legal documents for Spanish-speaking clients"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate Degree",
        "field": "Paralegal Studies",
        "start": "2017",
        "end": "2019",
        "notes": "NALA Certified Paralegal (CP). ABA-approved programme."
      }
    ],
    "skills": "Litigation support and discovery\nLegal drafting\nE-discovery (Relativity)\nCase management (Clio)\nCourt filings and deadlines\nLegal research (Westlaw)",
    "languages": "English (fluent)\nSpanish (fluent)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Bookkeeping Clerk",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Bookkeeping clerk with 5 years of experience in accounts payable, invoicing and bank reconciliations. Process 300+ invoices a month with 99.8% accuracy and keep the books clean for month-end close. Skilled in QuickBooks, Excel and payroll support.",
    "experience": [
      {
        "role": "Bookkeeping Clerk",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Process 300+ supplier invoices a month with 99.8% accuracy\nReconcile 6 bank accounts weekly and flag differences same day\nPrepare payroll data for 45 staff and chase overdue customer payments\nKeep records tidy for the year-end audit, with zero findings"
      },
      {
        "role": "Accounts Assistant",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Entered sales invoices and receipts into QuickBooks daily\nAnswered supplier queries about payments by phone and email\nFiled paperwork and kept the archive up to date"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificate",
        "field": "Bookkeeping",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "Accounts payable and receivable\nBank reconciliations\nInvoicing (300+ a month)\nQuickBooks and Excel\nPayroll support\nData entry (65 wpm)",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Administrative Assistant",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Administrative assistant with 6 years of experience keeping offices running smoothly. Manage calendars for 4 managers, organise travel and meetings, and handle 100+ emails a day. Known for accuracy, discretion and calm under deadline pressure.",
    "experience": [
      {
        "role": "Administrative Assistant",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Manage calendars, travel and meetings for 4 senior managers\nHandle 100+ emails a day, drafting replies and flagging priorities\nPrepare board papers and take minutes at monthly meetings\nRun office supplies and vendor orders, cutting costs by 12%"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Aug 2019",
        "end": "Dec 2020",
        "current": false,
        "points": "Welcomed 60+ patients a day and managed the appointment book\nAnswered phones and handled insurance queries\nKept patient records accurate and confidential"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate Degree",
        "field": "Office Administration",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Calendar and travel management\nEmail and correspondence\nMeeting minutes\nMicrosoft Office (Word, Excel, Outlook)\nData entry (70 wpm)\nOffice supplies and vendors",
    "languages": "English (fluent)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Bank Teller",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Bank teller with 4 years of experience serving 80+ customers a day with accuracy and care. Cash drawer balanced to the cent across 3 years, with zero shortages. Skilled in deposits, withdrawals, fraud checks and referring customers to the right products.",
    "experience": [
      {
        "role": "Bank Teller",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "Serve 80+ customers a day: deposits, withdrawals, payments and transfers\nCash drawer balanced to the cent for 3 years with zero shortages\nSpot and stop 12 fraud attempts, saving customers $90,000+\nRefer customers to savings and loan products, hitting referral targets quarterly"
      },
      {
        "role": "Customer Service Associate",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Opened new accounts and issued debit cards for members\nAnswered phone queries about balances and statements\nHelped members set up online and mobile banking"
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
    "skills": "Cash handling and balancing\nDeposits, withdrawals and payments\nFraud detection\nCustomer service\nBanking software (Fiserv)\nProduct referrals",
    "languages": "English (fluent)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Sales Manager",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Sales manager with 10 years of experience leading teams of up to 15 reps. Grew regional revenue from $4M to $7.5M in 3 years, lifted win rate from 22% to 34% and cut rep turnover by half with better coaching and onboarding.",
    "experience": [
      {
        "role": "Regional Sales Manager",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Lead a team of 15 sales reps across Texas and Oklahoma\nGrew regional revenue from $4M to $7.5M in 3 years\nLifted win rate from 22% to 34% with better coaching and pipeline reviews\nCut rep turnover by half with a new onboarding programme"
      },
      {
        "role": "Sales Representative",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dec 2020",
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
        "notes": "Coursework in sales management and negotiation."
      }
    ],
    "skills": "Sales team leadership (15 reps)\nRevenue growth and forecasting\nPipeline management (Salesforce)\nCoaching and onboarding\nNegotiation\nTerritory planning",
    "languages": "English (fluent)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Construction Manager",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Construction manager with 12 years of experience delivering commercial and residential projects worth up to $12M. Completed 20+ projects with a 95% on-time rate, zero lost-time injuries on my sites and budgets held within 3%. Skilled in scheduling, subcontractor management and safety.",
    "experience": [
      {
        "role": "Construction Manager",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Deliver commercial and residential projects worth up to $12M\nCompleted 20+ projects with a 95% on-time rate and budgets within 3%\nManage 30+ subcontractors and 50 workers across 3 live sites\nZero lost-time injuries across all sites in 4 years"
      },
      {
        "role": "Site Supervisor",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Ran daily site operations for office and retail builds\nCoordinated deliveries, inspections and subcontractor schedules\nKept safety records clean and passed every OSHA inspection"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Building Construction",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 certified. CCM (Certified Construction Manager) candidate."
      }
    ],
    "skills": "Project scheduling (MS Project, Procore)\nBudget control\nSubcontractor management\nSite safety (OSHA 30)\nBlueprint reading\nClient reporting",
    "languages": "English (fluent)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certified Medical Assistant",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certified medical assistant with 5 years of experience in family practice and urgent care. Room 25+ patients a day, take vitals, draw blood and manage the front desk with a 97% patient satisfaction score. Skilled in EHR, phlebotomy and insurance checks.",
    "experience": [
      {
        "role": "Certified Medical Assistant",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Room 25+ patients a day: vitals, histories and exam preparation\nDraw blood and run basic lab tests with a 99% first-stick rate\nManage the front desk, scheduling and insurance checks\nHold a 97% patient satisfaction score across 800+ surveys"
      },
      {
        "role": "Medical Assistant",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Aug 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "Triaged walk-in patients and assisted doctors with minor procedures\nGave vaccinations and handled specimen collection\nKept exam rooms stocked, clean and ready between patients"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificate",
        "field": "Medical Assisting",
        "start": "2018",
        "end": "2019",
        "notes": "Certified Medical Assistant (CMA, AAMA). BLS certified. Phlebotomy trained."
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
    "summary": "Motivated high-school senior with strong grades and part-time work experience. Quick to learn, reliable and good with people. Looking for a first full-time role or a part-time job alongside college.",
    "experience": [
      {
        "role": "Part-Time Sales Assistant",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "Serve 50+ customers a shift on weekends and after school\nHandle cash, restock shelves and keep displays tidy\nTrusted to open the store on Saturday mornings"
      },
      {
        "role": "Volunteer Tutor",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Tutored younger pupils in maths twice a week\nHelped organise the summer reading programme for 40 children"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "High School Diploma",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Honour roll, 3 years. Captain of the debate team."
      }
    ],
    "skills": "Customer service\nCash handling\nTeamwork\nTime management\nMicrosoft Office\nPublic speaking (debate team)",
    "languages": "English (fluent)",
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
    "summary": "Recent business administration graduate with internship experience in marketing and operations. Organised a campus business competition with 200 participants and completed a 6-month internship where I cut reporting time by half. Eager to start a full-time career and learn fast.",
    "experience": [
      {
        "role": "Marketing Intern",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Ran the company's social accounts, growing followers from 2,000 to 6,500\nBuilt a reporting dashboard that cut weekly reporting time by half\nWrote 20 blog posts that brought in 15,000+ reads"
      },
      {
        "role": "Events Volunteer Lead",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "May 2025",
        "current": false,
        "points": "Organised a business competition with 200 participants and 12 judges\nManaged a $5,000 budget and a team of 8 volunteers"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Business Administration",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 years. Final-year project on small-business marketing."
      }
    ],
    "skills": "Social media marketing\nExcel and Google Sheets\nPresentation skills\nEvent organisation\nTeamwork\nBasic data analysis",
    "languages": "English (fluent)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Junior Marketing Associate",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Junior marketing associate with 2 years of experience in content, email and social media. Grew a client newsletter from 1,000 to 4,000 subscribers and run campaigns that average a 22% open rate. Ready for more responsibility and a bigger portfolio of accounts.",
    "experience": [
      {
        "role": "Junior Marketing Associate",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Grew a client newsletter from 1,000 to 4,000 subscribers in 14 months\nWrite and schedule 12 social posts a week for 4 clients\nRun email campaigns averaging a 22% open rate\nReport campaign results to clients monthly"
      },
      {
        "role": "Marketing Intern",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Wrote product descriptions for 200+ items on the company website\nHelped run a spring sale campaign that lifted online orders by 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Communications",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Coursework in digital marketing and media writing."
      }
    ],
    "skills": "Content writing\nEmail marketing (Mailchimp)\nSocial media management\nGoogle Analytics\nCanva\nClient reporting",
    "languages": "English (fluent)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Operations Supervisor",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Operations supervisor with 8 years of experience running warehouse teams of 20-30 people. Cut picking errors by 30%, lifted on-time dispatch from 90% to 97% and trained 15 new starters. Ready for an operations manager role with a bigger site and budget.",
    "experience": [
      {
        "role": "Operations Supervisor",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "Supervise 25 warehouse staff across 2 shifts in a 90,000 sq ft site\nCut picking errors by 30% with new check routines and barcode scanning\nLifted on-time dispatch from 90% to 97% in 2 years\nTrained 15 new starters and promoted 3 to team-lead roles"
      },
      {
        "role": "Team Leader",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Led a team of 10 pickers and packers on the night shift\nIntroduced a rota that cut overtime by 20% without missing deadlines\nRan safety briefings and kept the team accident-free for 2 years"
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
    "skills": "Team leadership (25 staff)\nWarehouse operations\nProcess improvement\nSafety management\nInventory control\nWMS and Excel",
    "languages": "English (fluent)\nHindi (conversational)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Senior Project Manager",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Senior project manager with 14 years of experience delivering software projects worth up to $8M. Led 30+ projects with a 92% on-time rate, built a PMO from scratch and mentored 10 project managers. Known for calm delivery under pressure and honest reporting to executives.",
    "experience": [
      {
        "role": "Senior Project Manager",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Deliver software projects worth up to $8M with a 92% on-time rate\nBuilt the company's PMO from scratch: templates, reporting and governance\nMentor 10 project managers and run the monthly PM community\nReport directly to the CTO on a 40-person programme"
      },
      {
        "role": "Project Manager",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dec 2018",
        "current": false,
        "points": "Managed 20+ projects for retail and healthcare clients\nIntroduced Agile practices that cut delivery time by 25%\nGrew 2 key accounts from $500k to $2M in annual revenue"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Information Systems",
        "start": "2008",
        "end": "2012",
        "notes": "PMP certified (2015). Certified ScrumMaster. MBA coursework (2018-2019, incomplete)."
      }
    ],
    "skills": "Programme and project delivery\nPMO setup and governance\nAgile and Waterfall\nBudget control ($8M)\nExecutive reporting\nTeam mentoring",
    "languages": "English (fluent)\nSpanish (conversational)",
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
    "summary": "Chief operating officer with 18 years of experience scaling operations for retail and logistics companies. Grew a 200-person operation to 900 people across 6 sites, lifted EBITDA margin from 8% to 14% and led 2 acquisitions. Board-level reporting and investor relations experience.",
    "experience": [
      {
        "role": "Chief Operating Officer",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Run operations for 900 people across 6 sites and a $180M budget\nLifted EBITDA margin from 8% to 14% in 3 years\nLed 2 acquisitions and integrated both teams within 6 months\nReport to the board monthly on operations, risk and growth"
      },
      {
        "role": "Vice President of Operations",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dec 2020",
        "current": false,
        "points": "Scaled operations from 200 to 600 people across 4 sites\nOpened 3 distribution centres on time and under budget\nBuilt the leadership team that still runs the business today"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Business Administration",
        "start": "2010",
        "end": "2012",
        "notes": "BS in Economics, NYU (2006). Board governance course (2020)."
      }
    ],
    "skills": "Operations at scale (900 people)\nP&L ownership ($180M)\nMergers and acquisitions\nBoard reporting\nGrowth strategy\nLeadership team building",
    "languages": "English (fluent)",
    "template": "executive"
  }
};
});
