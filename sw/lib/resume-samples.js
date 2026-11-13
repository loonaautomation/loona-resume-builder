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
      "title": "Muuguzi Aliyesajiliwa",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Muuguzi aliyesajiliwa mwenye uzoefu wa miaka 6 katika vitengo vya tiba-upasuaji na telemetria. Mwenye ujuzi wa upimaji wa mgonjwa, tiba ya IV, utoaji wa dawa na kumbukumbu za kielektroniki za afya. Anajulikana kwa mawasiliano tulivu na wazi na wagonjwa na familia wakati wa hali zenye shinikizo kubwa.",
    "experience": [
      {
        "role": "Muuguzi Aliyesajiliwa",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Kuwatunza wagonjwa 5-6 kwa kila shifti katika kitengo cha tiba-upasuaji chenye vitanda 32, ikiwemo upimaji, utoaji wa dawa na utunzaji wa vidonda\nKuwafundisha na kuwashauri wauguzi 4 wapya wahitimu, kupunguza muda wao wa uanzishaji kwa wiki 2\nKupunguza makosa ya dawa katika kitengo kwa 18% kwa kuanzisha utaratibu wa ukaguzi mara mbili wakati wa ukabidhi\nKuandika huduma zote kwa usahihi katika kumbukumbu za kielektroniki za afya za Epic"
      },
      {
        "role": "Muuguzi wa Wafanyakazi",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Ago 2019",
        "end": "Mei 2021",
        "current": false,
        "points": "Kuendesha uainishaji wa dharura kwa wagonjwa zaidi ya 40 wanaoingia bila miadi kwa siku, kuweka kipaumbele kwa kesi za haraka kwa huduma ya siku hiyo hiyo\nKutoa chanjo na uchunguzi wa afya katika hafla za kila mwezi za ufikiaji wa jamii\nKuratibu marejeo kwa wataalamu na kufuatilia matokeo ya vipimo"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Uuguzi",
        "start": "2015",
        "end": "2019",
        "notes": "Leseni ya Muuguzi Aliyesajiliwa (Texas). Aliyeidhinishwa BLS na ACLS."
      }
    ],
    "skills": "Upimaji wa mgonjwa\nTiba ya IV na utoaji wa dawa\nKumbukumbu za kielektroniki za afya (Epic)\nUfuatiliaji wa telemetria\nElimu ya mgonjwa na familia\nUdhibiti wa maambukizi",
    "languages": "Kiingereza (fasaha)\nKihispania (mazungumzo)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Msanidi wa Programu",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Msanidi wa programu mwenye uzoefu wa miaka 5 wa kujenga programu za wavuti katika Python na JavaScript. Alitoa vipengele vinavyotumiwa na watumiaji zaidi ya 200,000, alipunguza muda wa jibu la API kwa 40% na aliongoza uhamishaji wa mfumo mmoja mkubwa hadi huduma ndogo ndogo. Imara katika upimaji, ukaguzi wa msimbo na uandikaji wazi wa nyaraka.",
    "experience": [
      {
        "role": "Msanidi wa Programu",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mac 2022",
        "end": "",
        "current": true,
        "points": "Kujenga na kudumisha vipengele vya wavuti vinavyowakabili wateja katika Python (Django) na React, vikihudumia watumiaji zaidi ya 200,000\nKupunguza muda wa wastani wa jibu la API kutoka ms 850 hadi ms 500 kwa kuongeza akiba na kurekebisha hoja za polepole\nKuongoza uhamishaji wa huduma ya bili hadi huduma ndogo ndogo bila muda wowote wa kusimama\nKukagua maombi zaidi ya 10 ya kuvuta kwa wiki na kuwashauri wasanidi 2 wa ngazi ya chini"
      },
      {
        "role": "Msanidi wa Ngazi ya Chini",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Kujenga dashibodi za ndani katika JavaScript zilizochukua nafasi ya lahajedwali za mikono kwa timu 3\nKuandika vipimo vya kiotomatiki vilivyoinua ufunikaji kutoka 45% hadi 78%\nKurekebisha hitilafu zaidi ya 120 katika bidhaa katika mwaka wa kwanza"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Sayansi ya Kompyuta",
        "start": "2016",
        "end": "2020",
        "notes": "Kazi za kozi katika hifadhidata, algoriti na mifumo ya uendeshaji."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript na React\nPostgreSQL na Redis\nAPI za REST na huduma ndogo ndogo\nGit na CI/CD\nUpimaji wa kiotomatiki (pytest, Jest)",
    "languages": "Kiingereza (fasaha)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Mwalimu wa Shule ya Msingi",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Mwalimu wa shule ya msingi mwenye uzoefu wa miaka 7 wa kufundisha madarasa 3-5. Mwenye ujuzi wa ufundishaji uliotofautishwa, usimamizi wa darasa na mawasiliano na wazazi. Aliinua umahiri wa kusoma katika darasa lake kutoka 58% hadi 81% katika miaka miwili ya shule.",
    "experience": [
      {
        "role": "Mwalimu wa Shule ya Msingi (Darasa la 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Ago 2020",
        "end": "",
        "current": true,
        "points": "Kufundisha kusoma, hisabati na sayansi kwa darasa la wanafunzi 26, ikiwemo 5 wenye mipango binafsi ya kujifunza\nKuinua umahiri wa kusoma wa darasa kutoka 58% hadi 81% katika miaka miwili kupitia vikundi vya kusoma vinavyoongozwa\nKuendesha jarida la kila wiki la wazazi na mikutano ya maendeleo ya muhula kwa kila familia\nKuongoza klabu ya kusoma ya shule kwa wanafunzi 40 wa madarasa 3-5"
      },
      {
        "role": "Mwalimu wa Shule ya Msingi (Darasa la 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Ago 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Kupanga na kuwasilisha masomo ya kila siku kwa wanafunzi 24 katika masomo yote ya msingi\nKuanzisha taratibu za tabia zilizopunguza usumbufu darasani kwa nusu\nKupanga maonyesho ya sayansi ya kundi la mwaka yenye wanafunzi 120 na wazazi 80"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Elimu ya Msingi",
        "start": "2014",
        "end": "2018",
        "notes": "Leseni ya kufundisha ya jimbo (Ohio, madarasa K-5). Kibali cha kusoma."
      }
    ],
    "skills": "Ufundishaji uliotofautishwa\nUsimamizi wa darasa\nVikundi vya kusoma vinavyoongozwa\nMawasiliano na wazazi\nUpangaji wa masomo\nGoogle Classroom",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Mhasibu Mwandamizi",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA mwenye uzoefu wa miaka 8 katika kufunga hesabu za mwisho wa mwezi, utoaji wa ripoti za fedha na ukaguzi wa ndani. Alifunga vitabu siku 3 mapema zaidi kwa kujenga upya mchakato wa usawazishaji na alipata $240,000 za malipo ya ziada zinazoweza kurejeshwa katika mwaka mmoja wa ukaguzi. Imara katika Excel, QuickBooks na mifumo ya ERP.",
    "experience": [
      {
        "role": "Mhasibu Mwandamizi",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kusimamia kufunga hesabu za mwisho wa mwezi kwa kitengo cha biashara cha $40M, kumaliza siku 3 mapema zaidi baada ya kujenga upya usawazishaji\nKuandaa taarifa za fedha za kila mwezi na ripoti za tofauti kwa usimamizi wa ngazi za juu\nKupata $240,000 za malipo ya ziada ya wasambazaji zinazoweza kurejeshwa wakati wa ukaguzi wa ndani wa 2024\nKusimamia wahasibu 2 wa wafanyakazi na kukagua maingizo yao ya jarida"
      },
      {
        "role": "Mhasibu wa Wafanyakazi",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Des 2020",
        "current": false,
        "points": "Kuandaa marejesho ya kodi na taarifa za fedha kwa wateja 25 wa biashara ndogo\nKusaidia ukaguzi wa wateja 8, kupima vidhibiti na kuandika matokeo\nKuendesha rejista ya mali zisizohamishika kiotomatiki katika Excel, kuokoa saa 6 kwa mwezi"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Uhasibu",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Mwanachama wa AICPA."
      }
    ],
    "skills": "Kufunga hesabu za mwisho wa mwezi na usawazishaji\nUtoaji wa ripoti za fedha na uchambuzi wa tofauti\nUkaguzi wa ndani\nExcel (majedwali ya pivot, VLOOKUP)\nQuickBooks na SAP\nMaandalizi ya kodi",
    "languages": "Kiingereza (fasaha)\nKichina cha Mandarin (mazungumzo)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Dereva wa Lori CDL Daraja A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Dereva wa CDL Daraja A mwenye uzoefu wa miaka 9 katika usafirishaji wa mizigo wa masafa marefu na wa kanda. Zaidi ya maili 900,000 bila ajali, kiwango cha uwasilishaji kwa wakati cha 99% na uzoefu wa mizigo ya jokofu, ya jukwaa wazi na ya gari kavu. Rekodi safi ya uendeshaji, vibali vya HazMat na vya gari la mafuta.",
    "experience": [
      {
        "role": "Dereva wa Lori la Masafa Marefu",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Kuendesha maili zaidi ya 2,800 kwa wiki katika njia za kanda kote Texas, Oklahoma na New Mexico\nKudumisha kiwango cha uwasilishaji kwa wakati cha 99% katika mizigo zaidi ya 1,100 kwa mwaka\nKusafirisha mizigo ya jokofu na ya gari kavu; kukamilisha ukaguzi wa kabla ya safari na baada ya safari kila siku\nZaidi ya maili 900,000 bila ajali kwa jumla"
      },
      {
        "role": "Dereva wa Lori la Uwasilishaji",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mac 2016",
        "end": "Mac 2019",
        "current": false,
        "points": "Kuwasilisha vifaa vya ujenzi katika maeneo 15-20 ya kazi kwa siku katika eneo la Dallas-Fort Worth\nKuendesha foklifti na kufunga mizigo ya jukwaa wazi kulingana na viwango vya DOT\nKuweka nyaraka za uwasilishaji na kumbukumbu sahihi bila ukiukaji wowote wa DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Cheti",
        "field": "Uendeshaji wa Magari ya Biashara (CDL Daraja A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Daraja A yenye vibali vya HazMat na gari la mafuta. Rekodi safi ya uendeshaji."
      }
    ],
    "skills": "Uendeshaji wa masafa marefu na wa kanda\nMizigo ya jokofu na ya jukwaa wazi\nKanuni za DOT na vitabu vya kumbukumbu\nUkaguzi wa kabla ya safari\nUpangaji wa njia (GPS, ELD)\nUendeshaji wa foklifti",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Mshiriki wa Mauzo ya Rejareja",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Mshiriki wa mauzo ya rejareja mwenye uzoefu wa miaka 4 katika maduka ya elektroniki na mavazi. Daima katika wauzaji 3 bora kwenye timu, kwa kiwango cha 32% cha mauzo ya ziada ya waranti na vifaa vya ziada. Mwenye urafiki, mwepesi kwenye kaunta ya malipo na anayeaminiwa kufungua na kufunga duka.",
    "experience": [
      {
        "role": "Mshiriki wa Mauzo Mwandamizi",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Kuuza elektroniki na vifaa vya ziada kwa wateja zaidi ya 60 kwa siku; 3 bora katika mauzo ya duka kwa robo mwaka 8 mfululizo\nKufikia kiwango cha 32% cha mauzo ya ziada ya waranti na vifaa vya ziada, cha juu zaidi kwenye timu\nKuwafundisha wanaoanza 6 wapya kuhusu kaunta ya malipo, chumba cha hisa na viwango vya huduma kwa wateja\nMwenye funguo anayeaminiwa: kufungua na kufunga duka na kushughulikia uhesabuji wa pesa taslimu"
      },
      {
        "role": "Mshiriki wa Mauzo",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Kuwasaidia wateja kuchagua mavazi na saizi katika eneo la duka lenye shughuli nyingi\nKuweka maonyesho nadhifu na kujaza tena rafu katika kila shifti\nKushughulikia urejeshaji na ubadilishanaji kwa upole, kuweka malalamiko kwa kiwango cha chini"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Shahada ya Ushirika",
        "field": "Biashara",
        "start": "2019",
        "end": "2021",
        "notes": "Masomo ya muda huku akifanya kazi rejareja."
      }
    ],
    "skills": "Huduma kwa wateja na mauzo ya ziada\nUshughulikiaji wa pesa taslimu na mifumo ya POS\nUjuzi wa bidhaa (elektroniki)\nUsimamizi wa hisa\nUfunguzi na ufungaji wa duka\nMafunzo ya timu",
    "languages": "Kiingereza (fasaha)\nKihispania (fasaha)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Mwakilishi wa Huduma kwa Wateja",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Mwakilishi wa huduma kwa wateja mwenye uzoefu wa miaka 5 wa kushughulikia usaidizi wa simu, barua pepe na soga ya moja kwa moja. Hutatua kesi zaidi ya 45 kwa siku kwa alama ya kuridhika ya 96% na kiwango cha utatuzi wa mawasiliano ya kwanza cha 88%. Mtulivu kwa wateja wenye hasira na mwepesi kupata ufumbuzi.",
    "experience": [
      {
        "role": "Mwakilishi wa Huduma kwa Wateja",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "Mei 2021",
        "end": "",
        "current": true,
        "points": "Kushughulikia kesi zaidi ya 45 za simu, barua pepe na soga kwa siku kwa bili, oda na hitilafu za kiufundi\nKudumisha alama ya kuridhika kwa wateja ya 96% na kiwango cha utatuzi wa mawasiliano ya kwanza cha 88%\nKutuliza simu ngumu na kugeuza malalamiko kuwa biashara ya kurudiwa\nKuwafundisha mawakala 5 wapya kuhusu hati, mifumo na sauti"
      },
      {
        "role": "Wakala wa Usaidizi",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "Kujibu barua pepe na soga za wateja kuhusu oda, urejeshaji na marejesho ya fedha\nKudumisha muda wa wastani wa jibu la kwanza chini ya saa 2\nKuandika makala 20 za kituo cha usaidizi zilizopunguza maswali yanayorudiwa kwa robo"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Shahada ya Ushirika",
        "field": "Usimamizi wa Biashara",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Usaidizi wa simu, barua pepe na soga ya moja kwa moja\nUshughulikiaji wa malalamiko na upunguzaji wa mvutano\nMifumo ya CRM (Zendesk, Salesforce)\nMaswali ya bili na oda\nKuchapa maneno 55 kwa dakika\nMafunzo ya timu",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Msimamizi wa Uendeshaji",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Msimamizi wa uendeshaji mwenye uzoefu wa miaka 12 wa kuendesha timu za hadi watu 80 katika uhifadhi wa ghala na usambazaji. Alipunguza gharama za uchakataji wa oda kwa 22%, aliinua usafirishaji kwa wakati kutoka 91% hadi 98% na alifungua maeneo mawili mapya kwa wakati na chini ya bajeti.",
    "experience": [
      {
        "role": "Msimamizi wa Uendeshaji",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Kuendesha kituo cha usambazaji cha futi za mraba 120,000 chenye wafanyakazi 80 katika mashifti 3\nKupunguza gharama za uchakataji wa oda kwa 22% kwa kubuni upya njia za uchukuaji na mifumo ya mashifti\nKuinua usafirishaji kwa wakati kutoka 91% hadi 98% katika miezi 18\nKufungua maeneo 2 mapya kwa wakati na 8% chini ya bajeti"
      },
      {
        "role": "Msimamizi wa Ghala",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Kusimamia wafanyakazi 25 wa ghala na utumaji wa kila siku wa oda zaidi ya 4,000\nKuanzisha uchanganuzi wa misimbopau, kupunguza makosa ya uchukuaji kwa 35%\nKuendesha mafunzo ya usalama yaliyoweka eneo la kazi bila ajali kwa miaka 3"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Usimamizi wa Uendeshaji",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Uongozi wa timu (hadi wafanyakazi 80)\nUhifadhi wa ghala na usambazaji\nUboreshaji wa mchakato\nUpangaji wa bajeti na udhibiti wa gharama\nUsimamizi wa usalama\nMifumo ya ERP na WMS",
    "languages": "Kiingereza (fasaha)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Fundi Umeme Mwenye Leseni",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Fundi umeme stadi mwenye leseni mwenye uzoefu wa miaka 8 katika kazi za makazi na biashara. Mwenye ujuzi wa usukaji wa nyaya, uboreshaji wa paneli, taa na utafutaji wa hitilafu, mwenye rekodi safi ya usalama katika kazi zaidi ya 400. Mwenye ujuzi wa kanuni za NEC na uzoefu wa kusimamia wanafunzi wa ufundi.",
    "experience": [
      {
        "role": "Fundi Umeme Stadi",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mac 2019",
        "end": "",
        "current": true,
        "points": "Kukamilisha kazi zaidi ya 400 za makazi na biashara: usukaji wa nyaya, uboreshaji wa paneli, taa na chaja za EV\nKutambua na kurekebisha hitilafu haraka, kwa kiwango cha 92% cha kutengeneza katika ziara ya kwanza\nKusimamia wanafunzi 2 wa ufundi na kuidhinisha kazi yao kulingana na kanuni\nKudumisha rekodi safi ya usalama bila majeraha yaliyopoteza muda"
      },
      {
        "role": "Fundi Umeme Mwanafunzi",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Kuwasaidia mafundi umeme wenye leseni katika usukaji wa nyaya wa majengo mapya na usukaji upya\nKujifunza ukunjaji wa mifereji ya nyaya, uvutaji wa kebo na usakinishaji wa paneli\nKukamilisha saa 8,000 za ujifunzaji kazi na kufaulu mtihani wa fundi stadi mara ya kwanza"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Cheti",
        "field": "Teknolojia ya Umeme",
        "start": "2015",
        "end": "2016",
        "notes": "Leseni ya fundi umeme stadi (Colorado). Aliyeidhinishwa OSHA 30."
      }
    ],
    "skills": "Usukaji wa nyaya wa makazi na biashara\nUboreshaji wa paneli na chaja za EV\nUtambuzi wa hitilafu na upimaji\nUfuataji wa kanuni za NEC\nUkunjaji wa mifereji ya nyaya na uvutaji wa kebo\nUsimamizi wa wanafunzi wa ufundi",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Mchambuzi wa Fedha",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Mchambuzi wa fedha mwenye uzoefu wa miaka 6 katika upangaji wa bajeti, utabiri na uchambuzi wa uwekezaji. Alijenga modeli za utabiri zilizopunguza tofauti ya bajeti kwa 30% na kuunga mkono maamuzi ya uwekezaji ya $50M. Imara katika Excel, SQL na uundaji wa modeli za fedha.",
    "experience": [
      {
        "role": "Mchambuzi wa Fedha",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Kujenga utabiri wa kila mwezi na bajeti za mwaka kwa jalada lenye thamani ya $120M\nKupunguza tofauti ya bajeti kwa 30% kwa modeli ya utabiri inayotegemea viendeshaji\nKuunga mkono maamuzi ya uwekezaji yenye thamani ya $50M kwa uthamini na uchambuzi wa hali\nKuwasilisha matokeo kila mwezi kwa CFO na wakuu wa idara"
      },
      {
        "role": "Mchambuzi wa Fedha wa Ngazi ya Chini",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mac 2021",
        "current": false,
        "points": "Kuandaa ripoti za kila wiki za utendaji kwa matawi 12\nKuendesha uandaaji wa ripoti kiotomatiki katika Excel, kuokoa saa 10 kwa wiki\nKuisaidia timu ya mikopo katika uchambuzi wa jalada la mikopo"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Fedha",
        "start": "2015",
        "end": "2019",
        "notes": "Mtahiniwa wa CFA Ngazi ya II. Kazi za kozi katika uthamini na fedha za kampuni."
      }
    ],
    "skills": "Uundaji wa modeli za fedha na utabiri\nUpangaji wa bajeti na uchambuzi wa tofauti\nUthamini (DCF, kulinganisha)\nExcel (ya juu) na SQL\nBloomberg Terminal\nUwasilishaji wa data kwa michoro (Power BI)",
    "languages": "Kiingereza (fasaha)\nKihindi (fasaha)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Mhandisi wa Ujenzi",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Mhandisi wa ujenzi (PE) mwenye uzoefu wa miaka 7 katika ubunifu wa miundombinu ya barabara na maji. Aliongoza ubunifu wa upanuzi wa barabara kuu ya maili 12 na mfumo wa maji ya mvua unaohudumia nyumba 8,000. Mwenye ujuzi wa AutoCAD Civil 3D, ukadiriaji wa gharama na uratibu wa vibali.",
    "experience": [
      {
        "role": "Mhandisi wa Ujenzi",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kuongoza ubunifu wa upanuzi wa barabara kuu ya maili 12, kutoka upimaji hadi nyaraka za ujenzi\nKubuni mfumo wa maji ya mvua unaohudumia nyumba 8,000, ulioidhinishwa mara ya kwanza na jiji\nKuratibu vibali na mashirika 4 na kusimamia bajeti ya ubunifu ya $2.5M\nKukagua na kupiga muhuri michoro kama Mhandisi wa Kitaalamu mwenye leseni"
      },
      {
        "role": "Mhandisi wa Ujenzi wa Ngazi ya Chini",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Des 2020",
        "current": false,
        "points": "Kuandaa mipango ya usawazishaji wa ardhi na mifereji kwa maendeleo zaidi ya 20 ya makazi\nKuendesha makadirio ya gharama na uhesabuji wa wingi kwa miradi ya barabara\nKuhudhuria ukaguzi wa maeneo ya kazi na kuandika ripoti za maendeleo"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Uhandisi wa Ujenzi",
        "start": "2014",
        "end": "2018",
        "notes": "Leseni ya Mhandisi wa Kitaalamu (Washington). Alifaulu EIT mwaka 2018."
      }
    ],
    "skills": "Ubunifu wa barabara na mifereji\nAutoCAD Civil 3D\nUundaji wa modeli ya maji ya mvua\nMakadirio ya gharama\nUratibu wa vibali\nUpangaji ratiba wa mradi (MS Project)",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Mhandisi wa Mitambo",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Mhandisi wa mitambo mwenye uzoefu wa miaka 6 wa kubuni mifumo ya HVAC na vifaa vya uzalishaji. Alipunguza matumizi ya nishati kwa 18% katika viwanda 3 kwa mifereji ya hewa na vidhibiti vilivyobuniwa upya, na aliongoza ubunifu upya wa mashine ulioinua uzalishaji kwa 25%. Mwenye ujuzi wa SolidWorks, FEA na uchambuzi wa joto.",
    "experience": [
      {
        "role": "Mhandisi wa Mitambo",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Kubuni vifaa vya HVAC na vya uzalishaji kwa viwanda 3 vyenye wafanyakazi zaidi ya 400\nKupunguza matumizi ya nishati kwa 18% kwa kubuni upya mifereji ya hewa na mfuatano wa udhibiti\nKuongoza ubunifu upya wa mashine ulioinua uzalishaji kwa 25% bila nafasi ya ziada ya sakafu\nKuendesha FEA na uchambuzi wa joto kwa vipuri vipya kabla ya kuunda kielelezo"
      },
      {
        "role": "Mhandisi wa Mitambo wa Ngazi ya Chini",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Ago 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Kuunda modeli za vipuri na mikusanyiko katika SolidWorks kwa wateja wa magari\nKuandaa michoro, orodha za vifaa na ripoti za vipimo\nKuunga mkono ujenzi wa vielelezo na kutatua masuala ya kutoshea kwenye sakafu ya karakana"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Uhandisi wa Mitambo",
        "start": "2015",
        "end": "2019",
        "notes": "Kazi za kozi katika termodinamiki, mekaniki ya vimiminika na ubunifu wa mashine."
      }
    ],
    "skills": "Ubunifu wa HVAC\nSolidWorks na AutoCAD\nFEA na uchambuzi wa joto\nUbunifu wa mashine\nUfanisi wa nishati\nGD&T na uvumilivu",
    "languages": "Kiingereza (fasaha)\nKikorea (mazungumzo)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Mhandisi wa Umeme",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Mhandisi wa umeme mwenye uzoefu wa miaka 6 katika mifumo iliyopachikwa na elektroniki za nguvu. Alibuni bodi za udhibiti zinazotumiwa sasa katika vifaa zaidi ya 50,000 na alipunguza gharama ya bodi kwa 22% kupitia ubunifu upya wa vipengele. Mwenye ujuzi wa Altium, C, upimaji wa programu dhibiti na ufuataji wa EMC.",
    "experience": [
      {
        "role": "Mhandisi wa Umeme",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Kubuni bodi za udhibiti zilizopachikwa zinazotumiwa katika vifaa zaidi ya 50,000 kwa mwaka\nKupunguza gharama ya bodi kwa 22% kwa kubuni upya hatua ya nguvu na kupata mbadala wa vipuri\nKuongoza upimaji wa ufuataji wa EMC, kufaulu mara ya kwanza kwa mistari 4 ya bidhaa\nKuandika na kukagua programu dhibiti katika C kwa vidhibiti vidogo"
      },
      {
        "role": "Mhandisi wa Umeme wa Ngazi ya Chini",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Kupanga PCB katika Altium kwa wateja wa matumizi ya nyumbani na wa viwanda\nKujenga na kupima vielelezo, kutatua hitilafu za vifaa\nKuandika taratibu za vipimo zilizopunguza muda wa vipimo vya uzalishaji kwa 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Uhandisi wa Umeme",
        "start": "2015",
        "end": "2019",
        "notes": "Kazi za kozi katika mifumo iliyopachikwa, elektroniki za nguvu na uchakataji wa ishara."
      }
    ],
    "skills": "Mifumo iliyopachikwa na ubunifu wa PCB\nAltium Designer\nC na programu dhibiti\nElektroniki za nguvu\nUpimaji wa ufuataji wa EMC\nOsiloskopu na vyombo vya maabara",
    "languages": "Kiingereza (fasaha)\nKigujarati (mazungumzo)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Mchambuzi wa Data",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Mchambuzi wa data mwenye uzoefu wa miaka 4 wa kugeuza data ya mauzo na uendeshaji kuwa maamuzi. Alijenga dashibodi zinazotumiwa na wasimamizi zaidi ya 60, alipunguza muda wa utoaji ripoti wa kila mwezi kutoka siku 3 hadi saa 4 na alipata kosa la bei lenye thamani ya $180,000 kwa mwaka. Imara katika SQL, Excel na Power BI.",
    "experience": [
      {
        "role": "Mchambuzi wa Data",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Kujenga dashibodi za Power BI zinazotumiwa na wasimamizi wa maduka na wa mikoa zaidi ya 60\nKupunguza utoaji wa ripoti wa kila mwezi kutoka siku 3 hadi saa 4 kwa mabomba ya SQL ya kiotomatiki\nKupata kosa la bei lenye thamani ya $180,000 kwa mwaka kwa kukagua data ya matangazo ya mauzo\nKuwasilisha matokeo kila mwezi kwa timu ya biashara"
      },
      {
        "role": "Mchambuzi wa Data wa Ngazi ya Chini",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Ago 2020",
        "end": "Des 2021",
        "current": false,
        "points": "Kusafisha na kuunganisha data ya uwasilishaji kutoka mifumo 4 kuwa jedwali moja la ripoti\nKujenga vifuatiliaji vya Excel vilivyochukua nafasi ya uhesabuji wa mikono kwa timu 2\nKujibu maswali ya data ya dharura kwa wasimamizi wa uendeshaji kila siku"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Takwimu",
        "start": "2016",
        "end": "2020",
        "notes": "Kazi za kozi katika rijeshini, hifadhidata na uwasilishaji wa data kwa michoro."
      }
    ],
    "skills": "SQL na usafishaji wa data\nPower BI na Tableau\nExcel (ya juu)\nPython (pandas)\nUbunifu wa dashibodi\nMisingi ya upimaji wa A/B",
    "languages": "Kiingereza (fasaha)\nKivietinamu (mazungumzo)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Mwanasayansi wa Data",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Mwanasayansi wa data mwenye uzoefu wa miaka 5 wa kujenga modeli za kujifunza kwa mashine kwa biashara ya mtandaoni. Modeli ya mapendekezo niliyoitoa iliinua mapato kwa kila ziara kwa 12%, na modeli ya kuondoka sasa hutambulisha 80% ya wateja walio hatarini. Imara katika Python, SQL na usambazaji wa modeli.",
    "experience": [
      {
        "role": "Mwanasayansi wa Data",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Kutoa modeli ya mapendekezo iliyoinua mapato kwa kila ziara kwa 12%\nKujenga modeli ya kuondoka kwa wateja inayotambulisha 80% ya wateja walio hatarini mwezi mmoja mapema\nKupeleka modeli katika uzalishaji kwa mabomba ya ufuatiliaji na ufundishaji upya\nKuwasilisha matokeo ya modeli kwa timu za bidhaa na masoko kila mwezi"
      },
      {
        "role": "Mwanasayansi wa Data wa Ngazi ya Chini",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Kujenga modeli za utabiri kwa wateja 3 wa rejareja kwa usahihi wa zaidi ya 90%\nKusafisha na kuandaa seti za data za safu zaidi ya 10M kwa ajili ya uundaji wa modeli\nKuandika nyaraka ili wateja waweze kuendesha tena modeli wao wenyewe"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Sayansi ya Data",
        "start": "2018",
        "end": "2020",
        "notes": "Tasnifu kuhusu mifumo ya mapendekezo. Shahada ya Sayansi katika Hisabati (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nKujifunza kwa mashine na takwimu\nSQL na Spark\nUsambazaji wa modeli (Docker, AWS)\nUpimaji wa A/B\nUwasilishaji wa data kwa michoro",
    "languages": "Kiingereza (fasaha)\nKiarabu (fasaha)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Msanidi wa Wavuti",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Msanidi wa wavuti mwenye uzoefu wa miaka 4 wa kujenga tovuti za haraka na zinazofikika katika HTML, CSS na JavaScript. Alijenga upya malipo ya duka yaliyoinua ugeuzaji kwa 18% na hudumisha tovuti 12 za wateja kwa muda wa kufanya kazi wa 99.9%. Imara katika ubunifu unaoitikia, utendaji na misingi ya SEO.",
    "experience": [
      {
        "role": "Msanidi wa Wavuti",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mac 2022",
        "end": "",
        "current": true,
        "points": "Kujenga tovuti zinazoitikia katika HTML, CSS, JavaScript na WordPress kwa wateja 12\nKujenga upya malipo ya duka yaliyoinua ugeuzaji kwa 18%\nKupunguza muda wa wastani wa upakiaji wa ukurasa kutoka sekunde 4.2 hadi sekunde 1.8 kwa uboreshaji wa picha na msimbo\nKudumisha tovuti zote za wateja kwa muda wa kufanya kazi wa 99.9% kwa ufuatiliaji na nakala za akiba"
      },
      {
        "role": "Msanidi wa Wavuti wa Ngazi ya Chini",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Kujenga kurasa za kutua na kurekebisha hitilafu katika tovuti zaidi ya 20 za biashara ndogo\nKujifunza Git, ubunifu unaoitikia na SEO ya msingi katika miradi hai\nKujibu barua pepe za wateja na kufanya masasisho ya maudhui siku hiyo hiyo"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Sayansi ya Kompyuta",
        "start": "2017",
        "end": "2021",
        "notes": "Kazi za kozi katika usanidi wa wavuti, hifadhidata na mwingiliano wa binadamu na kompyuta."
      }
    ],
    "skills": "HTML, CSS na JavaScript\nReact na WordPress\nUbunifu unaoitikia\nUboreshaji wa kasi ya ukurasa\nGit na GitHub\nSEO ya msingi",
    "languages": "Kiingereza (fasaha)\nKihispania (fasaha)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Mbunifu wa Michoro",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Mbunifu wa michoro mwenye uzoefu wa miaka 5 katika uwekaji chapa, vifungashio na ubunifu wa mitandao ya kijamii. Aliunda utambulisho wa chapa kwa biashara ndogo zaidi ya 25 na ubunifu upya wa kifungashio ulioinua mauzo ya rafu kwa 14%. Mwenye ujuzi wa Adobe Illustrator, Photoshop na Figma.",
    "experience": [
      {
        "role": "Mbunifu wa Michoro",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Kubuni utambulisho wa chapa, vifungashio na kampeni za kijamii kwa wateja zaidi ya 25\nUbunifu upya wa kifungashio kwa chapa ya chakula uliinua mauzo ya rafu kwa 14%\nKuzalisha mali zaidi ya 30 za kijamii kwa wiki katika Instagram, TikTok na Facebook\nKuwasilisha mawazo kwa wateja na kuyarekebisha kutokana na maoni haraka"
      },
      {
        "role": "Mbunifu wa Michoro wa Ngazi ya Chini",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Des 2021",
        "current": false,
        "points": "Kubuni vipeperushi, menyu na machapisho ya kijamii kwa mikahawa na maduka ya mitaani\nKuandaa faili zilizo tayari kuchapishwa na kukagua uthibitisho na wachapishaji\nKujenga maktaba ya violezo iliyopunguza muda wa ubunifu kwa theluthi"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Ubunifu wa Michoro",
        "start": "2016",
        "end": "2020",
        "notes": "Jalada la kazi katika uwekaji chapa na ubunifu wa vifungashio."
      }
    ],
    "skills": "Adobe Illustrator na Photoshop\nFigma\nUbunifu wa utambulisho wa chapa\nUbunifu wa vifungashio\nUbunifu wa mitandao ya kijamii\nUzalishaji wa uchapishaji",
    "languages": "Kiingereza (fasaha)\nKikorea (mazungumzo)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Mbunifu wa UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Mbunifu wa UX mwenye uzoefu wa miaka 5 wa kutafiti watumiaji na kubuni bidhaa za simu na wavuti. Alibuni upya mtiririko wa uingizaji uliopunguza kuacha kwa 35% na aliendesha vipimo zaidi ya 40 vya utumiaji. Mwenye ujuzi wa Figma, utafiti wa watumiaji, uundaji wa fremu za waya na uundaji wa vielelezo.",
    "experience": [
      {
        "role": "Mbunifu wa UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Kubuni upya uingizaji wa simu, kupunguza kuacha kwa 35% katika miezi 3\nKuendesha vipimo zaidi ya 40 vya utumiaji na mahojiano ya watumiaji kwa mwaka\nKujenga fremu za waya na vielelezo katika Figma kwa timu 2 za bidhaa\nKufanya kazi kila siku na wahandisi na wasimamizi wa bidhaa kuhusu uwasilishaji"
      },
      {
        "role": "Mbunifu wa UX wa Ngazi ya Chini",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Ago 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Kubuni skrini na mitiririko kwa programu 5 za wateja\nKuendesha vipimo vya kwanza vya utumiaji na kuandika matokeo kwa wateja\nKujenga maktaba ya vipengele iliyoharakisha ukabidhi wa ubunifu"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Saikolojia",
        "start": "2016",
        "end": "2020",
        "notes": "Cheti cha ubunifu wa UX (General Assembly, 2020). Kazi za kozi katika mwingiliano wa binadamu na kompyuta."
      }
    ],
    "skills": "Utafiti wa watumiaji na upimaji wa utumiaji\nUundaji wa fremu za waya na vielelezo (Figma)\nUsanifu wa habari\nMifumo ya ubunifu\nUpangaji wa safari ya mtumiaji\nWarsha za wadau",
    "languages": "Kiingereza (fasaha)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Msimamizi wa Masoko",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Msimamizi wa masoko mwenye uzoefu wa miaka 8 katika kampeni za B2B na za watumiaji. Alikuza wateja watarajiwa wenye sifa kwa 60% katika mwaka mmoja, aliizindua mstari wa bidhaa uliofikia mauzo ya $3M katika mwaka wa kwanza na husimamia bajeti ya mwaka ya $500,000 katika timu ya watu 5.",
    "experience": [
      {
        "role": "Msimamizi wa Masoko",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Kuongoza timu ya watu 5 na bajeti ya masoko ya mwaka ya $500,000\nKukuza wateja watarajiwa wenye sifa kwa 60% katika mwaka mmoja kwa maudhui na kampeni za kulipia\nKuzindua mstari wa bidhaa uliofikia mauzo ya $3M katika mwaka wa kwanza\nKupunguza gharama kwa kila mteja mtarajiwa kwa 28% kwa kujenga upya ulengaji wa kampeni"
      },
      {
        "role": "Mtaalamu wa Masoko",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Kuendesha kampeni za barua pepe kwa wajisajili 80,000 kwa kiwango cha kufungua cha 24%\nKusimamia akaunti za kijamii zilizokua kutoka wafuasi 5,000 hadi 40,000\nKupanga mabanda 6 ya maonyesho ya biashara kwa mwaka, yakizalisha wateja watarajiwa zaidi ya 300 kila moja"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kazi za kozi katika tabia ya watumiaji, uchanganuzi na usimamizi wa chapa."
      }
    ],
    "skills": "Mkakati na upangaji wa kampeni\nMasoko ya maudhui na barua pepe\nMatangazo ya kulipia (Google, Meta)\nUchanganuzi wa masoko (GA4)\nUongozi wa timu\nUsimamizi wa bajeti",
    "languages": "Kiingereza (fasaha)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Msimamizi wa Mradi",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Msimamizi wa mradi (PMP) mwenye uzoefu wa miaka 7 wa kuwasilisha miradi ya programu na ujenzi kwa wakati na ndani ya bajeti. Alisimamia miradi 15 yenye thamani ya hadi $4M, kwa kiwango cha uwasilishaji kwa wakati cha 94%. Mwenye ujuzi wa Agile, usimamizi wa hatari na mawasiliano na wadau.",
    "experience": [
      {
        "role": "Msimamizi wa Mradi",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kusimamia miradi 15 yenye thamani ya hadi $4M, kwa kiwango cha uwasilishaji kwa wakati cha 94%\nKuendesha mbio za Agile kwa timu 3 na kuripoti maendeleo kwa watendaji kila wiki\nKupunguza uvukaji wa gharama za miradi kwa 30% kwa tathmini za hatari za mapema\nKuratibu wasambazaji, wateja na timu za ndani katika kanda 4 za saa"
      },
      {
        "role": "Mratibu wa Mradi",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Des 2020",
        "current": false,
        "points": "Kufuatilia ratiba, bajeti na vibali kwa miradi 8 ya ujenzi\nKuandaa ripoti za hali na maelezo ya mikutano kwa wateja\nKutatua migongano ya ratiba iliyookoa wiki 2 katika ujenzi wa shule"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Usimamizi wa Biashara",
        "start": "2014",
        "end": "2018",
        "notes": "Aliyeidhinishwa PMP (2021). ScrumMaster Aliyeidhinishwa."
      }
    ],
    "skills": "Upangaji na upangaji ratiba wa mradi\nAgile na Scrum\nUsimamizi wa hatari\nUdhibiti wa bajeti\nMawasiliano na wadau\nMS Project na Jira",
    "languages": "Kiingereza (fasaha)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Msimamizi wa Rasilimali Watu",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Msimamizi wa rasilimali watu mwenye uzoefu wa miaka 9 katika ajira, uhusiano wa wafanyakazi na manufaa. Alipunguza muda wa kuajiri kutoka siku 45 hadi siku 28, aliinua ubakiaji kwa 15% na husimamia rasilimali watu kwa wafanyakazi 250 katika maeneo 3. Mwenye ujuzi wa ngazi ya CIPD wa sheria za ajira na sera.",
    "experience": [
      {
        "role": "Msimamizi wa Rasilimali Watu",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Kuendesha rasilimali watu kwa wafanyakazi 250 katika maeneo 3, kwa timu ya watu 3\nKupunguza muda wa kuajiri kutoka siku 45 hadi siku 28 kwa kujenga upya mchakato wa usaili\nKuinua ubakiaji kwa 15% kwa programu mpya ya uingizaji na tathmini\nKushughulikia uhusiano wa wafanyakazi, malalamiko na masasisho ya sera"
      },
      {
        "role": "Afisa wa Jumla wa Rasilimali Watu",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "Kuajiri wafanyakazi zaidi ya 120 kwa mwaka kwa hoteli na mikahawa\nKuendesha ukaguzi wa malipo ya mishahara na uandikishaji wa manufaa kwa wafanyakazi 400\nKutatua migogoro ya wafanyakazi na kuweka mzunguko chini ya wastani wa sekta"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Rasilimali Watu",
        "start": "2012",
        "end": "2016",
        "notes": "Aliyeidhinishwa SHRM-CP. Kazi za kozi katika sheria za ajira na tabia ya shirika."
      }
    ],
    "skills": "Ajira na uingizaji\nUhusiano wa wafanyakazi\nManufaa na malipo ya mishahara\nSheria za ajira\nUsimamizi wa utendaji\nHRIS (Workday, BambooHR)",
    "languages": "Kiingereza (fasaha)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Wakili Mshiriki",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Wakili mshiriki mwenye uzoefu wa miaka 6 katika mashtaka ya kibiashara na sheria za mikataba. Alisimamia kesi zaidi ya 40, alishinda hukumu ya muhtasari katika kesi 8, na aliandaa mikataba yenye thamani ya $25M. Alikubaliwa katika Bar ya Illinois; mwenye ujuzi wa utafiti wa kisheria, uandaji wa nyaraka na ushauri kwa wateja.",
    "experience": [
      {
        "role": "Wakili Mshiriki",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "Kusimamia kesi zaidi ya 40 za mashtaka ya kibiashara kutoka uwasilishaji hadi suluhisho\nAlishinda hukumu ya muhtasari katika kesi 8 na kusuluhisha nyingine 20 kwa manufaa\nKuandaa na kujadili mikataba yenye thamani ya hadi $25M\nKuwashauri wateja ana kwa ana na kwa maandishi kuhusu hatari na mkakati"
      },
      {
        "role": "Karani wa Sheria",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Ago 2019",
        "end": "Ago 2020",
        "current": false,
        "points": "Kutafiti sheria za kesi na kuandaa memo kwa majaji 2\nKukagua hoja na kuandaa muhtasari wa majaji kwa usikilizwaji zaidi ya 100\nKuchunguza kesi na mikutano ya suluhisho katika vitengo vya kiraia"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Sheria",
        "start": "2016",
        "end": "2019",
        "notes": "Alikubaliwa katika Bar ya Illinois (2019). Jarida la sheria, mhariri wa makala."
      }
    ],
    "skills": "Mashtaka ya kibiashara\nUandaji na majadiliano ya mikataba\nUtafiti wa kisheria (Westlaw, LexisNexis)\nUshauri kwa wateja\nUshuhuda na ugunduzi\nUwasilishaji wa nyaraka mahakamani na utaratibu",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Mfamasia wa Kliniki",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Mfamasia wa kliniki (PharmD) mwenye uzoefu wa miaka 7 katika famasia ya hospitali na ya jamii. Hukagua oda za dawa zaidi ya 100 kwa siku, alipunguza matukio mabaya ya dawa kwa 25% kupitia itifaki mpya ya ukaguzi na huwashauri wagonjwa kuhusu matumizi salama ya dawa. Mwenye leseni Pennsylvania.",
    "experience": [
      {
        "role": "Mfamasia wa Kliniki",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Kukagua oda zaidi ya 100 za dawa kwa siku kwa usalama, kipimo na mwingiliano\nKupunguza matukio mabaya ya dawa kwa 25% kwa itifaki mpya ya ukaguzi mara mbili\nKuwashauri madaktari na wauguzi kuhusu uchaguzi wa dawa kwa wagonjwa wenye hali ngumu\nKuendesha mizunguko ya usimamizi wa viuavijasumu ya hospitali mara mbili kwa wiki"
      },
      {
        "role": "Mfamasia wa Wafanyakazi",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Des 2019",
        "current": false,
        "points": "Kutoa agizo za dawa zaidi ya 200 kwa siku bila makosa yoyote ya utoaji\nKuwashauri wagonjwa kuhusu dawa mpya, madhara na uhifadhi\nKutoa chanjo za homa ya mafua na kufanya vipimo vya shinikizo la damu"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Famasia",
        "start": "2014",
        "end": "2018",
        "notes": "Mfamasia mwenye leseni (Pennsylvania). Mtaalamu wa Tiba ya Dawa Aliyeidhinishwa na Bodi (BCPS)."
      }
    ],
    "skills": "Ukaguzi na usalama wa dawa\nFamakolojia ya kliniki\nUshauri kwa mgonjwa\nMifumo ya famasia (Epic, PioneerRx)\nUsimamizi wa matumizi ya viuavijasumu\nHuduma za chanjo",
    "languages": "Kiingereza (fasaha)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Daktari wa Meno wa Jumla",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Daktari wa meno wa jumla (DDS) mwenye uzoefu wa miaka 8 katika udaktari wa meno wa kurekebisha, wa urembo na wa kinga. Huwatibu wagonjwa zaidi ya 25 kwa siku katika kliniki yenye wagonjwa 2,000, kwa alama ya kuridhika kwa wagonjwa ya 98%. Mwenye ujuzi wa taji za meno, vipandikizi, matibabu ya mizizi ya meno na vifaa vya kunyoosha meno visivyoonekana.",
    "experience": [
      {
        "role": "Daktari wa Meno wa Jumla",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Kuwatibu wagonjwa zaidi ya 25 kwa siku: vujio, taji, matibabu ya mizizi ya meno na ung'oaji\nKudumisha alama ya kuridhika kwa wagonjwa ya 98% katika hakiki zaidi ya 1,200\nKuweka vipandikizi zaidi ya 15 kwa mwezi na kusimamia kesi za vifaa vya kunyoosha meno visivyoonekana\nKusimamia wasafi 2 wa meno na wasaidizi 4 wa meno"
      },
      {
        "role": "Daktari wa Meno Mshiriki",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Kutoa udaktari wa meno wa jumla kwa kliniki yenye wagonjwa 1,500\nKuanzisha taji za meno za siku hiyo hiyo, kupunguza ziara za kurudi kwa 40%\nKuendesha ziara za ufikiaji wa shule kuhusu afya ya kinywa ya watoto"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Udaktari wa Meno",
        "start": "2013",
        "end": "2017",
        "notes": "Daktari wa meno mwenye leseni (Arizona). Aliyeidhinishwa Invisalign. Aliyeidhinishwa CPR/BLS."
      }
    ],
    "skills": "Udaktari wa meno wa kurekebisha (taji, vujio)\nMatibabu ya mfereji wa mzizi wa jino\nVipandikizi vya meno\nVifaa vya kunyoosha meno visivyoonekana\nUtunzaji wa mgonjwa na mawasiliano\nX-ray za kidijitali na CEREC",
    "languages": "Kiingereza (fasaha)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Mtaalamu wa Tiba ya Viungo",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Mtaalamu wa tiba ya viungo (DPT) mwenye uzoefu wa miaka 6 katika ukarabati wa mifupa na michezo. Huwatibu wagonjwa 12-15 kwa siku, na 90% hufikia malengo yao ndani ya vipindi vilivyopangwa. Mwenye ujuzi wa tiba ya mikono, agizo la mazoezi na upimaji wa kurudi michezoni.",
    "experience": [
      {
        "role": "Mtaalamu wa Tiba ya Viungo",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Kuwatibu wagonjwa 12-15 kwa siku kwa majeraha ya michezo, ukarabati wa baada ya upasuaji na maumivu ya mgongo\n90% ya wagonjwa hufikia malengo yao ndani ya idadi ya vipindi vilivyopangwa\nKubuni upimaji wa kurudi michezoni unaotumiwa na timu 3 za mitaani\nKuwashauri wahitimu 2 wapya na kusimamia uwekaji wa wanafunzi"
      },
      {
        "role": "Mtaalamu wa Tiba ya Viungo wa Wafanyakazi",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Ago 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Kutoa ukarabati wa wagonjwa wa ndani kwa wagonjwa wa baada ya upasuaji na wa kiharusi\nKuendesha madarasa ya mazoezi ya vikundi kwa wagonjwa wakubwa zaidi ya 20 kwa wiki\nKuandika maendeleo katika Epic na kukabidhi kwa timu za wodi"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Tiba ya Viungo",
        "start": "2016",
        "end": "2019",
        "notes": "Mtaalamu wa tiba ya viungo mwenye leseni (Oregon). Mtaalamu wa Kliniki ya Mifupa (OCS)."
      }
    ],
    "skills": "Ukarabati wa mifupa na michezo\nTiba ya mikono\nAgizo la mazoezi\nUpimaji wa kurudi michezoni\nElimu ya mgonjwa\nUandikaji (Epic)",
    "languages": "Kiingereza (fasaha)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Mpishi Mkuu",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Mpishi mkuu mwenye uzoefu wa miaka 10 katika jikoni za Creole na za kisasa za Kimarekani. Huongoza kikosi cha watu 12 katika mkahawa wenye viti 200, alipunguza gharama za chakula kwa 15% kwa uagizaji makini zaidi na alishinda 'Menyu Mpya Bora' kutoka mwongozo wa chakula wa jiji mwaka 2025.",
    "experience": [
      {
        "role": "Mpishi Mkuu",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kuongoza kikosi cha watu 12 katika mkahawa wenye viti 200 unaohudumia wageni zaidi ya 300 kwa usiku\nKupunguza gharama za chakula kwa 15% kwa uagizaji makini zaidi na menyu ya msimu\nAlishinda 'Menyu Mpya Bora' kutoka mwongozo wa chakula wa jiji mwaka 2025\nKubuni menyu, kufundisha wapishi na kusimamia upaji katika huduma ya Ijumaa na Jumamosi"
      },
      {
        "role": "Mpishi Msaidizi Mkuu",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Des 2020",
        "current": false,
        "points": "Kuendesha jikoni wakati mpishi mkuu hayupo, kuhudumia wageni 150 kwa usiku\nKusimamia hisa, uagizaji na uhusiano na wasambazaji\nKuwafundisha wapishi 8 wa mstari na kupunguza mzunguko wa wafanyakazi kwa theluthi"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Sanaa za Upishi",
        "start": "2014",
        "end": "2016",
        "notes": "Aliyeidhinishwa Meneja wa Ulinzi wa Chakula wa ServSafe."
      }
    ],
    "skills": "Ubunifu wa menyu na ukokotoaji wa gharama\nMapishi ya Creole na ya kisasa ya Kimarekani\nUongozi wa jikoni (kikosi cha watu 12)\nUsalama wa chakula (ServSafe)\nUsimamizi wa wasambazaji\nUpaji wa karamu na hafla",
    "languages": "Kiingereza (fasaha)\nKihispania (fasaha)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Afisa wa Polisi",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Afisa wa polisi mwenye uzoefu wa miaka 8 katika doria, ulinzi wa jamii na uchunguzi. Huitikia simu zaidi ya 30 kwa wiki, mwenye sifa za pongezi kwa upunguzaji wa mvutano na ufikiaji wa jamii. Aliyefunzwa uingiliaji wa dharura, huduma ya kwanza na uandishi wa ripoti.",
    "experience": [
      {
        "role": "Afisa wa Polisi",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Kufanya doria katika wilaya ya wakazi 40,000, kuitikia simu zaidi ya 30 kwa wiki\nKupokea sifa 2 za pongezi kwa upunguzaji wa mvutano na ufikiaji wa jamii\nKuchunguza wizi na mashambulizi, kuandika ripoti zilizotumiwa katika mashtaka zaidi ya 50\nKuwashauri maafisa 3 wapya kupitia mafunzo ya shambani"
      },
      {
        "role": "Afisa wa Doria",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Ago 2017",
        "end": "Mei 2019",
        "current": false,
        "points": "Kufanya doria katika barabara za kaunti na kuitikia simu za dharura\nKuwasilisha karatasi za mahakama na kusaidia usafirishaji wa wafungwa\nKukamilisha mafunzo ya uingiliaji wa dharura na huduma ya kwanza"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Cheti",
        "field": "Utekelezaji wa Sheria",
        "start": "2017",
        "end": "2017",
        "notes": "Mhitimu wa Chuo cha Mafunzo ya Maafisa wa Amani cha Ohio. Aliyefunzwa Timu ya Uingiliaji wa Dharura."
      }
    ],
    "skills": "Doria na mwitikio wa dharura\nUlinzi wa jamii\nUingiliaji wa dharura na upunguzaji wa mvutano\nUandishi wa ripoti\nUchunguzi\nHuduma ya kwanza na CPR",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Mzimamoto / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Mzimamoto na EMT mwenye uzoefu wa miaka 7 katika ukandamizaji wa moto, uokoaji na mwitikio wa tiba ya dharura. Aliitikia simu zaidi ya 900, ikiwemo mioto ya majengo, uokoaji wa magari na dharura za tiba. Aliyefunzwa HazMat mwenye rekodi safi ya usalama.",
    "experience": [
      {
        "role": "Mzimamoto / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mac 2020",
        "end": "",
        "current": true,
        "points": "Kuitikia simu zaidi ya 900 za moto, uokoaji na tiba katika wilaya yenye vituo 3\nKutoa huduma ya tiba ya dharura kama EMT aliyeidhinishwa katika 60% ya simu\nAliyefunzwa HazMat; huongoza uondoaji wa uchafuzi katika matukio ya kemikali\nKuwafundisha waajiriwa wapya katika ushughulikiaji wa mipira ya maji, ngazi na mbinu za utafutaji"
      },
      {
        "role": "Mzimamoto wa Kujitolea",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Kuitikia mioto ya porini na ya majengo kama mjitoleaji\nKukamilisha mafunzo ya Mzimamoto I & II na EMT-Basic\nKusaidia kuendesha mazungumzo ya usalama wa moto ya jamii mashuleni"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Cheti",
        "field": "Sayansi ya Moto",
        "start": "2017",
        "end": "2018",
        "notes": "Mzimamoto I & II. Aliyeidhinishwa EMT-Basic. Aliyefunzwa Shughuli za HazMat."
      }
    ],
    "skills": "Ukandamizaji wa moto na uokoaji\nHuduma ya tiba ya dharura (EMT)\nShughuli za HazMat\nNgazi, mipira ya maji na upitishaji hewa\nUsalama wa moto wa jamii\nKazi ya timu chini ya shinikizo",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Fundi Bomba Mwenye Leseni",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Fundi bomba mkuu mwenye leseni mwenye uzoefu wa miaka 11 katika mabomba ya makazi na biashara. Alikamilisha kazi zaidi ya 600 kwa mwaka, kutoka miundombinu ya awali hadi usakinishaji wa boilaa, kwa kiwango cha 98% cha kutengeneza katika ziara ya kwanza. Mwenye ujuzi wa uwekaji wa mabomba, usafishaji wa mifereji na ufuataji wa kanuni.",
    "experience": [
      {
        "role": "Fundi Bomba Mkuu",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Kukamilisha kazi zaidi ya 600 za makazi na biashara kwa mwaka\nKusakinisha boilaa, hita za maji na miundombinu kamili ya awali ya bafu\nKudumisha kiwango cha 98% cha kutengeneza katika ziara ya kwanza kwa simu za huduma\nKusimamia wanafunzi 3 wa ufundi na kuidhinisha kazi yao"
      },
      {
        "role": "Fundi Bomba Stadi",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Des 2018",
        "current": false,
        "points": "Kuendesha mabomba ya ujenzi mpya kwa nyumba zaidi ya 40 kwa mwaka\nKuzibua mifereji iliyoziba na kurekebisha uvujaji kwa nyumba na mikahawa\nKujifunza uwekaji wa gesi na uzuiaji wa mtiririko wa kurudi"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Cheti",
        "field": "Teknolojia ya Mabomba",
        "start": "2013",
        "end": "2014",
        "notes": "Leseni ya fundi bomba mkuu (Tennessee). Aliyeidhinishwa kuzuia mtiririko wa kurudi."
      }
    ],
    "skills": "Mabomba ya makazi na biashara\nUwekaji wa mabomba na ulehemu\nUsafishaji wa mifereji na ukaguzi wa kamera\nUsakinishaji wa boilaa na hita za maji\nUwekaji wa gesi\nUfuataji wa kanuni za mabomba",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Seremala Stadi",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Seremala stadi mwenye uzoefu wa miaka 9 katika fremu, kazi za kumalizia na makabati maalum. Alijenga fremu za nyumba zaidi ya 30 na kuweka jikoni katika nyumba zaidi ya 60, mwenye sifa ya vipimo sahihi na umaliziaji safi. Mwenye ujuzi wa kusoma ramani na kufanya kazi kulingana na kanuni.",
    "experience": [
      {
        "role": "Seremala Stadi",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Kujenga fremu za nyumba zaidi ya 30 na kuweka jikoni katika nyumba zaidi ya 60\nKujenga makabati maalum na mapambo kwa uvumilivu wa inchi 1/16\nKusoma na kufuata ramani za ujenzi, kuweka alama za makosa kabla hayajagharimu fedha\nKuwafundisha wanafunzi 2 wa ufundi katika mbinu za fremu na umaliziaji"
      },
      {
        "role": "Fundi Seremala Mwanafunzi",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Kusaidia katika uundaji wa fremu, kuta za ndani na sakafu kwenye ukarabati\nKujifunza kutumia misumeno, ruta na bunduki za misumari kwa usalama\nKukamilisha saa 8,000 za ujifunzaji kazi na kufaulu mtihani wa fundi stadi"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Cheti",
        "field": "Useremala",
        "start": "2015",
        "end": "2016",
        "notes": "Seremala stadi. Aliyeidhinishwa OSHA 10."
      }
    ],
    "skills": "Kazi ya fremu na ya kimuundo\nUseremala wa kumalizia na mapambo\nMakabati maalum\nUsomaji wa ramani za ujenzi\nZana za nguvu na usalama\nKuta za ndani na sakafu",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Mwalimu wa Shule ya Sekondari (Hisabati)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Mwalimu wa shule ya sekondari mwenye uzoefu wa miaka 8 wa kufundisha hisabati kwa madarasa 9-12. Aliinua viwango vya kufaulu aljebra kutoka 64% hadi 83% na huifundisha timu ya hisabati hadi fainali 2 za jimbo. Mwenye ujuzi wa ufundishaji uliotofautishwa, maandalizi ya mitihani na mawasiliano na wazazi.",
    "experience": [
      {
        "role": "Mwalimu wa Hisabati (Madarasa 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Ago 2019",
        "end": "",
        "current": true,
        "points": "Kufundisha aljebra, jiometri na kabla ya kalkulasi kwa wanafunzi 120 katika madarasa 5\nKuinua viwango vya kufaulu aljebra kutoka 64% hadi 83% katika miaka 3\nKuifundisha timu ya hisabati hadi fainali 2 za jimbo\nKuendesha ufundishaji wa baada ya shule kwa wanafunzi 30 kwa wiki"
      },
      {
        "role": "Mwalimu wa Hisabati (Madarasa 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Ago 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Kufundisha aljebra na jiometri kwa wanafunzi 100 kwa mwaka\nKuanzisha maswali ya kila wiki yaliyopunguza mapengo ya kazi za nyumbani kwa nusu\nKupanga maonyesho ya kwanza ya hisabati ya shule yenye wanafunzi 200"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Elimu ya Hisabati",
        "start": "2013",
        "end": "2017",
        "notes": "Leseni ya kufundisha ya jimbo (New Hampshire, madarasa 7-12, hisabati)."
      }
    ],
    "skills": "Ufundishaji wa hisabati (aljebra hadi kabla ya kalkulasi)\nMaandalizi ya mitihani\nUfundishaji uliotofautishwa\nUsimamizi wa darasa\nMawasiliano na wazazi\nGoogle Classroom na Desmos",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Mwalimu wa Shule ya Awali",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Mwalimu wa shule ya awali mwenye uzoefu wa miaka 6 wa kuwatunza watoto wenye umri wa miaka 3-5. Mwenye ujuzi wa kujifunza kwa michezo, uongozi wa tabia na mawasiliano na wazazi. Alijenga programu ya foniki iliyoinua alama za utayari wa shule kwa darasa lake lote.",
    "experience": [
      {
        "role": "Mwalimu wa Shule ya Awali",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Ago 2020",
        "end": "",
        "current": true,
        "points": "Kufundisha na kutunza darasa la watoto 18 wenye umri wa miaka 3-5\nKujenga programu ya foniki iliyoinua alama za utayari wa shule kwa darasa lote\nKupanga mada za kila wiki, ufundi wa mikono na michezo ya nje\nKushiriki masasisho ya kila siku na ripoti za maendeleo ya muhula na wazazi"
      },
      {
        "role": "Mwalimu Msaidizi wa Shule ya Awali",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "Kumuunga mkono mwalimu kiongozi kwa darasa la watoto 20\nKuendesha muda wa hadithi, nyimbo na shughuli za sanaa kila siku\nKuweka kumbukumbu za usalama na usafi kulingana na viwango vya jimbo"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Shahada ya Ushirika",
        "field": "Elimu ya Awali ya Mtoto",
        "start": "2016",
        "end": "2018",
        "notes": "Sifa ya Mshiriki wa Maendeleo ya Mtoto (CDA). Aliyeidhinishwa katika huduma ya kwanza na CPR."
      }
    ],
    "skills": "Kujifunza kwa michezo\nUongozi wa tabia\nFoniki na usomaji wa awali\nMawasiliano na wazazi\nUsalama wa darasa\nUpangaji wa sanaa na ufundi wa mikono",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Mfanyakazi wa Huduma za Jamii wa Mtoto na Familia",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Mfanyakazi wa huduma za jamii mwenye leseni mwenye uzoefu wa miaka 7 wa kuunga mkono watoto na familia. Husimamia mzigo wa kesi wa familia 25, huratibu huduma katika shule na watoa huduma za afya, na hukamilisha ripoti za mahakama ambazo majaji huzitegemea. Mwenye ujuzi wa upimaji, usaidizi wa dharura na ulinzi.",
    "experience": [
      {
        "role": "Mfanyakazi wa Huduma za Jamii wa Mtoto na Familia",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Kusimamia mzigo wa kesi wa familia 25, kutembelea nyumba na shule kila wiki\nKukamilisha ripoti za mahakama na kutoa ushahidi katika mahakama ya familia\nKuratibu usaidizi wa makazi, afya na shule kwa familia zilizo hatarini\nKupunguza muda wa kusubiri upimaji kwa 20% kwa mfumo mpya wa uainishaji wa dharura"
      },
      {
        "role": "Mfanyakazi wa Kesi",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Des 2019",
        "current": false,
        "points": "Kuunga mkono familia zaidi ya 40 katika makazi ya muda kwa manufaa na marejeo\nKuendesha warsha za kila wiki za ulezi na upangaji wa bajeti\nKuweka maelezo ya kesi sahihi kwa ajili ya ukaguzi na ripoti za ufadhili"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Kazi za Jamii",
        "start": "2016",
        "end": "2018",
        "notes": "Mfanyakazi wa Huduma za Jamii Mwenye Leseni (Ohio). Kazi za kozi katika ustawi wa mtoto na mifumo ya familia."
      }
    ],
    "skills": "Usimamizi wa kesi (familia 25)\nUlinzi wa mtoto\nRipoti za mahakama ya familia\nUsaidizi wa dharura\nUratibu wa mashirika mengi\nMarejeo ya manufaa na makazi",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Msaidizi wa Kisheria",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Msaidizi wa kisheria mwenye uzoefu wa miaka 6 katika usaidizi wa mashtaka na uwasilishaji wa nyaraka za kampuni. Husimamia ugunduzi kwa kesi zaidi ya 30, huandaa maombi ya maandishi na mikataba, na hudumisha tarehe za mwisho za uwasilishaji kwa rekodi ya 100% ya kwa wakati. Mwenye ujuzi wa Westlaw, ugunduzi wa kielektroniki na programu za usimamizi wa kesi.",
    "experience": [
      {
        "role": "Msaidizi wa Kisheria",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Kusimamia ugunduzi kwa kesi zaidi ya 30 za mashtaka, kukagua nyaraka zaidi ya 10,000\nKuandaa maombi ya maandishi, hoja na mikataba kwa ukaguzi wa wakili\nKudumisha rekodi ya 100% ya kwa wakati kwa uwasilishaji wa nyaraka mahakamani na tarehe za mwisho\nKuratibu mashahidi na kuandaa mafaili ya kesi"
      },
      {
        "role": "Msaidizi wa Kisheria",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Ago 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Usaili wa upokeaji kwa wateja zaidi ya 20 kwa wiki\nKuandaa fomu na nyaraka za uwasilishaji kwa kesi za makazi na familia\nKutafsiri nyaraka za kisheria kwa wateja wanaozungumza Kihispania"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Shahada ya Ushirika",
        "field": "Masomo ya Usaidizi wa Kisheria",
        "start": "2017",
        "end": "2019",
        "notes": "Msaidizi wa Kisheria Aliyeidhinishwa na NALA (CP). Programu iliyoidhinishwa na ABA."
      }
    ],
    "skills": "Usaidizi wa mashtaka na ugunduzi\nUandaji wa nyaraka za kisheria\nUgunduzi wa kielektroniki (Relativity)\nUsimamizi wa kesi (Clio)\nUwasilishaji wa nyaraka mahakamani na tarehe za mwisho\nUtafiti wa kisheria (Westlaw)",
    "languages": "Kiingereza (fasaha)\nKihispania (fasaha)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Karani wa Utunzaji wa Hesabu",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Karani wa utunzaji wa hesabu mwenye uzoefu wa miaka 5 katika hesabu za kulipwa, utoaji ankara na usawazishaji wa benki. Huchakata ankara zaidi ya 300 kwa mwezi kwa usahihi wa 99.8% na huweka vitabu safi kwa ajili ya kufunga hesabu za mwisho wa mwezi. Mwenye ujuzi wa QuickBooks, Excel na usaidizi wa malipo ya mishahara.",
    "experience": [
      {
        "role": "Karani wa Utunzaji wa Hesabu",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Kuchakata ankara zaidi ya 300 za wasambazaji kwa mwezi kwa usahihi wa 99.8%\nKusawazisha akaunti 6 za benki kila wiki na kuweka alama za tofauti siku hiyo hiyo\nKuandaa data ya malipo ya mishahara kwa wafanyakazi 45 na kufuatilia malipo ya wateja yaliyochelewa\nKuweka kumbukumbu nadhifu kwa ajili ya ukaguzi wa mwisho wa mwaka, bila matokeo yoyote mabaya"
      },
      {
        "role": "Msaidizi wa Hesabu",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mac 2021",
        "current": false,
        "points": "Kuingiza ankara za mauzo na risiti katika QuickBooks kila siku\nKujibu maswali ya wasambazaji kuhusu malipo kwa simu na barua pepe\nKuwasilisha nyaraka na kuweka kumbukumbu zikiwa za kisasa"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Cheti",
        "field": "Utunzaji wa Hesabu",
        "start": "2018",
        "end": "2019",
        "notes": "Mtumiaji Aliyeidhinishwa wa QuickBooks."
      }
    ],
    "skills": "Hesabu za kulipwa na za kupokea\nUsawazishaji wa benki\nUtoaji ankara (zaidi ya 300 kwa mwezi)\nQuickBooks na Excel\nUsaidizi wa malipo ya mishahara\nUingizaji wa data (maneno 65 kwa dakika)",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Msaidizi wa Utawala",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Msaidizi wa utawala mwenye uzoefu wa miaka 6 wa kuwezesha ofisi kufanya kazi kwa ufasaha. Husimamia kalenda za wasimamizi 4, hupanga safari na mikutano, na hushughulikia barua pepe zaidi ya 100 kwa siku. Anajulikana kwa usahihi, busara na utulivu chini ya shinikizo la tarehe za mwisho.",
    "experience": [
      {
        "role": "Msaidizi wa Utawala",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kusimamia kalenda, safari na mikutano kwa wasimamizi 4 wa ngazi za juu\nKushughulikia barua pepe zaidi ya 100 kwa siku, kuandaa majibu na kuweka alama za vipaumbele\nKuandaa karatasi za bodi na kuandika muhtasari katika mikutano ya kila mwezi\nKuendesha vifaa vya ofisi na oda za wasambazaji, kupunguza gharama kwa 12%"
      },
      {
        "role": "Mpokeaji Wageni",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Ago 2019",
        "end": "Des 2020",
        "current": false,
        "points": "Kuwakaribisha wagonjwa zaidi ya 60 kwa siku na kusimamia kitabu cha miadi\nKupokea simu na kushughulikia maswali ya bima\nKuweka kumbukumbu za wagonjwa sahihi na za siri"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Shahada ya Ushirika",
        "field": "Usimamizi wa Ofisi",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Usimamizi wa kalenda na safari\nBarua pepe na mawasiliano ya maandishi\nMuhtasari wa mikutano\nMicrosoft Office (Word, Excel, Outlook)\nUingizaji wa data (maneno 70 kwa dakika)\nVifaa vya ofisi na wasambazaji",
    "languages": "Kiingereza (fasaha)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Karani wa Benki",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Karani wa benki mwenye uzoefu wa miaka 4 wa kuwahudumia wateja zaidi ya 80 kwa siku kwa usahihi na uangalifu. Droo ya pesa ililingana hadi senti katika miaka 3, bila upungufu wowote. Mwenye ujuzi wa amana, utoaji wa pesa, ukaguzi wa ulaghai na kuwaelekeza wateja kwenye bidhaa zinazofaa.",
    "experience": [
      {
        "role": "Karani wa Benki",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mac 2022",
        "end": "",
        "current": true,
        "points": "Kuwahudumia wateja zaidi ya 80 kwa siku: amana, utoaji wa pesa, malipo na uhamishaji\nDroo ya pesa ililingana hadi senti kwa miaka 3 bila upungufu wowote\nKugundua na kuzuia majaribio 12 ya ulaghai, kuokoa wateja zaidi ya $90,000\nKuwaelekeza wateja kwenye bidhaa za akiba na mikopo, kufikia malengo ya marejeo kila robo mwaka"
      },
      {
        "role": "Mshiriki wa Huduma kwa Wateja",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Kufungua akaunti mpya na kutoa kadi za debit kwa wanachama\nKujibu maswali ya simu kuhusu salio na taarifa za akaunti\nKuwasaidia wanachama kuanzisha benki ya mtandaoni na ya simu"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Shahada ya Ushirika",
        "field": "Biashara",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Ushughulikiaji na ulinganishaji wa pesa taslimu\nAmana, utoaji wa pesa na malipo\nUtambuzi wa ulaghai\nHuduma kwa wateja\nProgramu za benki (Fiserv)\nMarejeo ya bidhaa",
    "languages": "Kiingereza (fasaha)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Msimamizi wa Mauzo",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Msimamizi wa mauzo mwenye uzoefu wa miaka 10 wa kuongoza timu za hadi wawakilishi 15. Alikuza mapato ya kanda kutoka $4M hadi $7.5M katika miaka 3, aliinua kiwango cha ushindi kutoka 22% hadi 34% na alipunguza mzunguko wa wawakilishi kwa nusu kwa ufundishaji na uingizaji bora.",
    "experience": [
      {
        "role": "Msimamizi wa Mauzo wa Kanda",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kuongoza timu ya wawakilishi 15 wa mauzo kote Texas na Oklahoma\nKukuza mapato ya kanda kutoka $4M hadi $7.5M katika miaka 3\nKuinua kiwango cha ushindi kutoka 22% hadi 34% kwa ufundishaji bora na tathmini za mtiririko wa mauzo\nKupunguza mzunguko wa wawakilishi kwa nusu kwa programu mpya ya uingizaji"
      },
      {
        "role": "Mwakilishi wa Mauzo",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Des 2020",
        "current": false,
        "points": "Kuuza vifaa vya viwanda kwa akaunti zaidi ya 80, kufikia kiwango lengwa kwa miaka 5 mfululizo\nMwakilishi bora katika kanda kwa miaka 3 mfululizo\nKujenga mtandao wa marejeo ulioleta 25% ya biashara mpya"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kazi za kozi katika usimamizi wa mauzo na majadiliano."
      }
    ],
    "skills": "Uongozi wa timu ya mauzo (wawakilishi 15)\nUkuaji wa mapato na utabiri\nUsimamizi wa mtiririko wa mauzo (Salesforce)\nUfundishaji na uingizaji wa wafanyakazi wapya\nMajadiliano\nUpangaji wa eneo",
    "languages": "Kiingereza (fasaha)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Msimamizi wa Ujenzi",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Msimamizi wa ujenzi mwenye uzoefu wa miaka 12 wa kuwasilisha miradi ya biashara na makazi yenye thamani ya hadi $12M. Alikamilisha miradi zaidi ya 20 kwa kiwango cha 95% cha kukamilika kwa wakati, bila majeraha yaliyopoteza muda wa kazi katika maeneo yake na bajeti zilizodumishwa ndani ya 3%. Mwenye ujuzi wa upangaji ratiba, usimamizi wa wakandarasi wadogo na usalama.",
    "experience": [
      {
        "role": "Msimamizi wa Ujenzi",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Kuwasilisha miradi ya biashara na makazi yenye thamani ya hadi $12M\nKukamilisha miradi zaidi ya 20 kwa kiwango cha 95% cha kukamilika kwa wakati na bajeti ndani ya 3%\nKusimamia wakandarasi wadogo zaidi ya 30 na wafanyakazi 50 katika maeneo 3 hai ya kazi\nMajeraha sifuri yaliyopoteza muda katika maeneo yote katika miaka 4"
      },
      {
        "role": "Msimamizi wa Eneo la Kazi",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Kuendesha shughuli za kila siku za eneo la kazi kwa ujenzi wa ofisi na rejareja\nKuratibu uwasilishaji, ukaguzi na ratiba za wakandarasi wadogo\nKuweka kumbukumbu za usalama safi na kufaulu kila ukaguzi wa OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Ujenzi wa Majengo",
        "start": "2009",
        "end": "2013",
        "notes": "Aliyeidhinishwa OSHA 30. Mtahiniwa wa CCM (Msimamizi wa Ujenzi Aliyeidhinishwa)."
      }
    ],
    "skills": "Upangaji ratiba wa mradi (MS Project, Procore)\nUdhibiti wa bajeti\nUsimamizi wa wakandarasi wadogo\nUsalama wa eneo la kazi (OSHA 30)\nUsomaji wa ramani za ujenzi\nUtoaji wa ripoti kwa wateja",
    "languages": "Kiingereza (fasaha)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Msaidizi wa Matibabu Aliyeidhinishwa",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Msaidizi wa matibabu aliyeidhinishwa mwenye uzoefu wa miaka 5 katika tiba ya familia na huduma ya dharura. Huandaa vyumba vya wagonjwa zaidi ya 25 kwa siku, hupima ishara muhimu za mwili, hutoa damu na husimamia dawati la mbele kwa alama ya kuridhika kwa wagonjwa ya 97%. Mwenye ujuzi wa EHR, utoaji wa damu na ukaguzi wa bima.",
    "experience": [
      {
        "role": "Msaidizi wa Matibabu Aliyeidhinishwa",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Kuandaa vyumba vya wagonjwa zaidi ya 25 kwa siku: ishara muhimu za mwili, historia na maandalizi ya uchunguzi\nKutoa damu na kufanya vipimo vya msingi vya maabara kwa kiwango cha 99% cha kupata mshipa mara ya kwanza\nKusimamia dawati la mbele, upangaji wa ratiba na ukaguzi wa bima\nKudumisha alama ya kuridhika kwa wagonjwa ya 97% katika tafiti zaidi ya 800"
      },
      {
        "role": "Msaidizi wa Matibabu",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Ago 2019",
        "end": "Mac 2021",
        "current": false,
        "points": "Kuainisha wagonjwa wanaoingia bila miadi na kuwasaidia madaktari kwa taratibu ndogo\nKutoa chanjo na kushughulikia ukusanyaji wa sampuli\nKuweka vyumba vya uchunguzi vikiwa vimejazwa vifaa, safi na tayari kati ya wagonjwa"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Cheti",
        "field": "Usaidizi wa Matibabu",
        "start": "2018",
        "end": "2019",
        "notes": "Msaidizi wa Matibabu Aliyeidhinishwa (CMA, AAMA). Aliyeidhinishwa BLS. Aliyefunzwa utoaji wa damu."
      }
    ],
    "skills": "Upokeaji wa mgonjwa na ishara muhimu za mwili\nUtoaji wa Damu\nEHR (eClinicalWorks)\nChanjo\nUthibitishaji wa bima\nUsimamizi wa dawati la mbele",
    "languages": "Kiingereza (fasaha)\nKihispania (fasaha)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Mwanafunzi",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Mwanafunzi wa mwaka wa mwisho wa shule ya sekondari mwenye motisha mwenye alama nzuri na uzoefu wa kazi za muda. Mwepesi kujifunza, wa kuaminika na mzuri kwa watu. Anatafuta nafasi ya kwanza ya muda wote au kazi ya muda pamoja na chuo.",
    "experience": [
      {
        "role": "Msaidizi wa Mauzo wa Muda",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "Kuwahudumia wateja zaidi ya 50 kwa shifti wikendi na baada ya shule\nKushughulikia pesa taslimu, kujaza tena rafu na kuweka maonyesho nadhifu\nAnayeaminiwa kufungua duka asubuhi za Jumamosi"
      },
      {
        "role": "Mkufunzi wa Kujitolea",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Kuwafundisha wanafunzi wadogo hisabati mara mbili kwa wiki\nKusaidia kupanga programu ya kusoma ya kiangazi kwa watoto 40"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diploma ya Shule ya Sekondari",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Orodha ya heshima, miaka 3. Kapteni wa timu ya mdahalo."
      }
    ],
    "skills": "Huduma kwa wateja\nUshughulikiaji wa pesa taslimu\nKazi ya Timu\nUsimamizi wa muda\nMicrosoft Office\nKuzungumza hadharani (timu ya mdahalo)",
    "languages": "Kiingereza (fasaha)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Mhitimu wa Hivi Karibuni \u2014 Usimamizi wa Biashara",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Mhitimu wa hivi karibuni wa usimamizi wa biashara mwenye uzoefu wa mafunzo ya vitendo katika masoko na uendeshaji. Alipanga shindano la biashara la chuo lenye washiriki 200 na alikamilisha mafunzo ya vitendo ya miezi 6 ambapo alipunguza muda wa utoaji ripoti kwa nusu. Mwenye hamu ya kuanza kazi ya muda wote na kujifunza haraka.",
    "experience": [
      {
        "role": "Mwanafunzi wa Vitendo wa Masoko",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Kuendesha akaunti za kijamii za kampuni, kukuza wafuasi kutoka 2,000 hadi 6,500\nKujenga dashibodi ya ripoti iliyopunguza muda wa utoaji ripoti wa kila wiki kwa nusu\nKuandika machapisho 20 ya blogu yaliyoleta usomaji zaidi ya 15,000"
      },
      {
        "role": "Kiongozi wa Wajitoleaji wa Hafla",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "Mei 2025",
        "current": false,
        "points": "Kupanga shindano la biashara lenye washiriki 200 na majaji 12\nKusimamia bajeti ya $5,000 na timu ya wajitoleaji 8"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Usimamizi wa Biashara",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Orodha ya Mkuu wa Kitivo, miaka 2. Mradi wa mwaka wa mwisho kuhusu masoko ya biashara ndogo."
      }
    ],
    "skills": "Masoko ya mitandao ya kijamii\nExcel na Google Sheets\nUjuzi wa uwasilishaji\nUpangaji wa hafla\nKazi ya Timu\nUchambuzi wa data wa msingi",
    "languages": "Kiingereza (fasaha)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Mshiriki wa Masoko wa Ngazi ya Chini",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Mshiriki wa masoko wa ngazi ya chini mwenye uzoefu wa miaka 2 katika maudhui, barua pepe na mitandao ya kijamii. Alikuza jarida la mteja kutoka wajisajili 1,000 hadi 4,000 na huendesha kampeni zenye wastani wa kiwango cha kufungua cha 22%. Tayari kwa majukumu zaidi na jalada kubwa zaidi la akaunti.",
    "experience": [
      {
        "role": "Mshiriki wa Masoko wa Ngazi ya Chini",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Kukuza jarida la mteja kutoka wajisajili 1,000 hadi 4,000 katika miezi 14\nKuandika na kupanga ratiba ya machapisho 12 ya kijamii kwa wiki kwa wateja 4\nKuendesha kampeni za barua pepe zenye wastani wa kiwango cha kufungua cha 22%\nKuripoti matokeo ya kampeni kwa wateja kila mwezi"
      },
      {
        "role": "Mwanafunzi wa Vitendo wa Masoko",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Kuandika maelezo ya bidhaa kwa bidhaa zaidi ya 200 kwenye tovuti ya kampuni\nKusaidia kuendesha kampeni ya mauzo ya majira ya kuchipua iliyoinua oda za mtandaoni kwa 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Mawasiliano",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Kazi za kozi katika masoko ya kidijitali na uandishi wa vyombo vya habari."
      }
    ],
    "skills": "Uandishi wa maudhui\nMasoko ya barua pepe (Mailchimp)\nUsimamizi wa mitandao ya kijamii\nGoogle Analytics\nCanva\nUtoaji wa ripoti kwa wateja",
    "languages": "Kiingereza (fasaha)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Msimamizi Mkuu wa Uendeshaji",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Msimamizi mkuu wa uendeshaji mwenye uzoefu wa miaka 8 wa kuendesha timu za ghala za watu 20-30. Alipunguza makosa ya uchukuaji kwa 30%, aliinua utumaji kwa wakati kutoka 90% hadi 97% na aliwafundisha wanaoanza 15 wapya. Tayari kwa nafasi ya msimamizi wa uendeshaji yenye eneo na bajeti kubwa zaidi.",
    "experience": [
      {
        "role": "Msimamizi Mkuu wa Uendeshaji",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mac 2021",
        "end": "",
        "current": true,
        "points": "Kusimamia wafanyakazi 25 wa ghala katika mashifti 2 katika eneo la futi za mraba 90,000\nKupunguza makosa ya uchukuaji kwa 30% kwa taratibu mpya za ukaguzi na uchanganuzi wa misimbopau\nKuinua utumaji kwa wakati kutoka 90% hadi 97% katika miaka 2\nKuwafundisha wanaoanza 15 wapya na kuwapandisha 3 hadi nafasi za kuongoza timu"
      },
      {
        "role": "Kiongozi wa Timu",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Kuongoza timu ya wachukuaji na wapakiaji 10 katika shifti ya usiku\nKuanzisha ratiba ya zamu iliyopunguza muda wa ziada kwa 20% bila kukosa tarehe za mwisho\nKuendesha mihadhara ya usalama na kuweka timu bila ajali kwa miaka 2"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Usimamizi wa Mnyororo wa Ugavi",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Uongozi wa timu (wafanyakazi 25)\nShughuli za ghala\nUboreshaji wa mchakato\nUsimamizi wa usalama\nUdhibiti wa hesabu za ghala\nWMS na Excel",
    "languages": "Kiingereza (fasaha)\nKihindi (mazungumzo)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Msimamizi wa Mradi Mwandamizi",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Msimamizi wa mradi mwandamizi mwenye uzoefu wa miaka 14 wa kuwasilisha miradi ya programu yenye thamani ya hadi $8M. Aliongoza miradi zaidi ya 30 kwa kiwango cha 92% cha kwa wakati, alijenga PMO kutoka mwanzo na aliwashauri wasimamizi 10 wa miradi. Anajulikana kwa uwasilishaji tulivu chini ya shinikizo na utoaji wa ripoti wa uaminifu kwa watendaji.",
    "experience": [
      {
        "role": "Msimamizi wa Mradi Mwandamizi",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Kuwasilisha miradi ya programu yenye thamani ya hadi $8M kwa kiwango cha 92% cha kukamilika kwa wakati\nKujenga PMO ya kampuni kutoka mwanzo: violezo, utoaji ripoti na utawala\nKuwashauri wasimamizi 10 wa miradi na kuendesha jamii ya kila mwezi ya PM\nKuripoti moja kwa moja kwa CTO kuhusu programu ya watu 40"
      },
      {
        "role": "Msimamizi wa Mradi",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Des 2018",
        "current": false,
        "points": "Kusimamia miradi zaidi ya 20 kwa wateja wa rejareja na huduma za afya\nKuanzisha desturi za Agile zilizopunguza muda wa uwasilishaji kwa 25%\nKukuza akaunti 2 muhimu kutoka $500k hadi $2M katika mapato ya mwaka"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Mifumo ya Habari",
        "start": "2008",
        "end": "2012",
        "notes": "Aliyeidhinishwa PMP (2015). ScrumMaster Aliyeidhinishwa. Kazi za kozi za MBA (2018-2019, hazikukamilika)."
      }
    ],
    "skills": "Uwasilishaji wa programu na miradi\nUanzishaji na utawala wa PMO\nAgile na Waterfall\nUdhibiti wa bajeti ($8M)\nUtoaji wa ripoti wa watendaji\nUshauri wa timu",
    "languages": "Kiingereza (fasaha)\nKihispania (mazungumzo)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Afisa Mkuu wa Uendeshaji",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Afisa mkuu wa uendeshaji mwenye uzoefu wa miaka 18 wa kukuza uendeshaji wa kampuni za rejareja na usafirishaji. Alikuza shughuli ya watu 200 hadi watu 900 katika maeneo 6, aliinua kiwango cha EBITDA kutoka 8% hadi 14% na aliongoza ununuzi 2 wa kampuni. Mwenye uzoefu wa utoaji wa ripoti kwa bodi na uhusiano na wawekezaji.",
    "experience": [
      {
        "role": "Afisa Mkuu wa Uendeshaji",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Kuendesha uendeshaji kwa watu 900 katika maeneo 6 na bajeti ya $180M\nKuinua kiwango cha EBITDA kutoka 8% hadi 14% katika miaka 3\nKuongoza ununuzi 2 wa kampuni na kuunganisha timu zote mbili ndani ya miezi 6\nKuripoti kwa bodi kila mwezi kuhusu uendeshaji, hatari na ukuaji"
      },
      {
        "role": "Makamu wa Rais wa Uendeshaji",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Des 2020",
        "current": false,
        "points": "Kukuza uendeshaji kutoka watu 200 hadi 600 katika maeneo 4\nKufungua vituo 3 vya usambazaji kwa wakati na chini ya bajeti\nKujenga timu ya uongozi ambayo bado inaendesha biashara hadi leo"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Usimamizi wa Biashara",
        "start": "2010",
        "end": "2012",
        "notes": "Shahada ya Sayansi katika Uchumi, NYU (2006). Kozi ya utawala wa bodi (2020)."
      }
    ],
    "skills": "Uendeshaji kwa ukubwa (watu 900)\nUmiliki wa P&L ($180M)\nMuunganiko na ununuzi wa kampuni\nUwasilishaji wa ripoti kwa bodi\nMkakati wa ukuaji\nUjenzi wa timu ya uongozi",
    "languages": "Kiingereza (fasaha)",
    "template": "executive"
  }
};
});
