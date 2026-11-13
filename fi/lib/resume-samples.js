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
      "title": "Sairaanhoitaja",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Sairaanhoitaja, jolla on 6 vuoden kokemus lääkintä-kirurgisista ja telemetriayksiköistä. Osaava potilaiden arvioinnissa, suonensisäisessä hoidossa, lääkkeiden antamisessa ja sähköisissä potilastiedoissa. Tunnettu rauhallisesta, selkeästä viestinnästä potilaiden ja perheiden kanssa paineisissa tilanteissa.",
    "experience": [
      {
        "role": "Sairaanhoitaja",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "Hoidan 5-6 potilasta vuorossa 32-paikkaisella lääkintä-kirurgisella osastolla, mukaan lukien arviointi, lääkkeiden antaminen ja haavanhoito\nKoulutan ja ohjaan 4 uutta valmistunutta sairaanhoitajaa, mikä lyhensi heidän perehdytystään 2 viikolla\nVähensin yksikön lääkitysvirheitä 18 % ottamalla käyttöön kaksoistarkistusrutiinin luovutuksessa\nDokumentoi kaikki hoito tarkasti Epic-sähköisiin potilastietoihin"
      },
      {
        "role": "Sairaanhoitaja (henkilöstö)",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "elokuu 2019",
        "end": "toukokuu 2021",
        "current": false,
        "points": "Johdin yli 40 sisäänkävelypotilaan kiireellisyysluokitusta päivässä ja priorisoin kiireelliset tapaukset saman päivän hoitoon\nAnnoin rokotuksia ja tein terveystarkastuksia kuukausittaisissa yhteisön tiedotustilaisuuksissa\nKoordinoin lähetteitä erikoislääkäreille ja seurasin tutkimustuloksia"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Hoitotyö",
        "start": "2015",
        "end": "2019",
        "notes": "Sairaanhoitajan lupa (Texas). BLS- ja ACLS-sertifioitu."
      }
    ],
    "skills": "Potilaan arviointi\nSuonensisäinen hoito ja lääkkeiden antaminen\nSähköiset potilastiedot (Epic)\nTelemetrian seuranta\nPotilaan ja perheen ohjaus\nInfektioiden torjunta",
    "languages": "Englanti (sujuva)\nEspanja (keskustelutaso)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Ohjelmistokehittäjä",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Ohjelmistokehittäjä, jolla on 5 vuoden kokemus verkkosovellusten rakentamisesta Pythonilla ja JavaScriptillä. Julkaisin toimintoja, joita käyttää yli 200 000 käyttäjää, lyhensin API-vasteaikoja 40 % ja johdin monoliitin siirron mikropalveluihin. Vahva testauksessa, koodikatselmuksessa ja selkeässä dokumentoinnissa.",
    "experience": [
      {
        "role": "Ohjelmistokehittäjä",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "maaliskuu 2022",
        "end": "",
        "current": true,
        "points": "Rakennan ja ylläpidän asiakkaille suunnattuja verkkotoimintoja Pythonilla (Django) ja Reactilla, palvellen yli 200 000 käyttäjää\nLyhensin API:n keskimääräisen vasteajan 850 ms:sta 500 ms:iin lisäämällä välimuistin ja korjaamalla hitaita kyselyjä\nJohdin laskutuspalvelun siirron mikropalveluihin ilman käyttökatkoa\nTarkistan yli 10 pull requestia viikossa ja mentoroin 2 nuorempaa kehittäjää"
      },
      {
        "role": "Nuorempi kehittäjä",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "Rakensin JavaScriptillä sisäisiä koontinäyttöjä, jotka korvasivat manuaaliset taulukot 3 tiimillä\nKirjoitin automatisoituja testejä, jotka nostivat kattavuuden 45 %:sta 78 %:iin\nKorjasin yli 120 virhettä koko tuotteessa ensimmäisen vuoden aikana"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Tietojenkäsittelytiede",
        "start": "2016",
        "end": "2020",
        "notes": "Opintoja tietokannoista, algoritmeista ja käyttöjärjestelmistä."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript ja React\nPostgreSQL ja Redis\nREST-rajapinnat ja mikropalvelut\nGit ja CI/CD\nAutomaattinen testaus (pytest, Jest)",
    "languages": "Englanti (sujuva)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Alakoulun opettaja",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Alakoulun opettaja, jolla on 7 vuoden kokemus luokkien 3-5 opettamisesta. Osaava eriytetyssä opetuksessa, luokanhallinnassa ja viestinnässä vanhempien kanssa. Nostin luokkani lukutaidon 58 %:sta 81 %:iin kahden lukuvuoden aikana.",
    "experience": [
      {
        "role": "Alakoulun opettaja (luokka 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "elokuu 2020",
        "end": "",
        "current": true,
        "points": "Opeta lukemista, matematiikkaa ja luonnontieteitä 26 oppilaan luokalle, jossa 5 oppilaalla on henkilökohtainen oppimissuunnitelma\nNosti luokan lukutaidon tasoa 58%:sta 81%:iin kahdessa vuodessa ohjattujen lukuryhmien avulla\nVetää viikoittaista vanhempien uutiskirjettä ja lukukausittaisia edistymiskeskusteluja jokaiselle perheelle\nJohtaa koulun lukukerhoa 40 oppilaalle luokilla 3-5"
      },
      {
        "role": "Alakoulun opettaja (luokka 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "elokuu 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "Suunnittelin ja toteutin päivittäiset tunnit 24 oppilaalle kaikissa perusaineissa\nOtatin käyttöön käyttäytymisrutiineja, jotka puolittivat luokan häiriöt\nJärjestin vuosiluokan tiedemessut 120 oppilaalle ja 80 vanhemmalle"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Alakoulutus",
        "start": "2014",
        "end": "2018",
        "notes": "Osavaltion opetuslupa (Ohio, luokat K-5). Lukemisen lisämerkintä."
      }
    ],
    "skills": "Eriyttävä opetus\nLuokanhallinta\nOhjatut lukuryhmät\nViestintä vanhempien kanssa\nOppituntien suunnittelu\nGoogle Classroom",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Kokenut kirjanpitäjä",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA, jolla on 8 vuoden kokemus kuukauden sulkemisesta, talousraportoinnista ja sisäisestä tarkastuksesta. Suljin kirjanpidon 3 päivää nopeammin rakentamalla täsmäytysprosessin uudelleen ja löysin 240 000 dollaria palautettavissa olevia liikasuorituksia yhden tarkastusvuoden aikana. Vahva Excelissä, QuickBooksissa ja ERP-järjestelmissä.",
    "experience": [
      {
        "role": "Kokenut kirjanpitäjä",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Omistan kuukauden sulkemisen 40 miljoonan dollarin liiketoimintayksikölle ja sain sen valmiiksi 3 päivää nopeammin täsmäytysten uudelleenrakentamisen jälkeen\nLaadin kuukausittaisia talouslausuntoja ja poikkeamaraportteja ylemmälle johdolle\nLöysin 240 000 dollaria palautettavissa olevia toimittajien liikasuorituksia vuoden 2024 sisäisen tarkastuksen aikana\nOhjaan 2 kirjanpitäjää ja tarkistan heidän päiväkirjamerkintänsä"
      },
      {
        "role": "Kirjanpitäjä (henkilöstö)",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Valmistelin veroilmoituksia ja talouslausuntoja 25 pienyritysasiakkaalle\nAvustin 8 asiakkaan tilintarkastuksissa, testasin kontrolleja ja dokumentoin havaintoja\nAutomatisoin käyttöomaisuusrekisterin Excelissä, säästö 6 tuntia kuukaudessa"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Kirjanpito",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). AICPA:n jäsen."
      }
    ],
    "skills": "Kuukauden sulkeminen ja täsmäytykset\nTalousraportointi ja poikkeama-analyysi\nSisäinen tarkastus\nExcel (pivot-taulukot, VLOOKUP)\nQuickBooks ja SAP\nVerotuksen valmistelu",
    "languages": "Englanti (sujuva)\nMandariinikiina (keskustelutaso)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Kuorma-autonkuljettaja, CDL Class A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A -kuljettaja, jolla on 9 vuoden kokemus pitkän matkan ja alueellisesta rahdista. Yli 900 000 onnettomuusvapaata mailia, 99 %:n täsmällisyys toimituksissa ja kokemusta kylmä-, lava- ja umpikorikuormista. Puhdas ajohistoria, HazMat- ja säiliölisämerkinnät.",
    "experience": [
      {
        "role": "Pitkän matkan kuorma-autonkuljettaja",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Ajan yli 2 800 mailia viikossa alueellisilla reiteillä Texasissa, Oklahomassa ja New Mexicossa\nPidä 99 %:n täsmällinen toimitusaste yli 1 100 kuormassa vuodessa\nKuljetan kylmä- ja umpikorirahtia; teen päivittäin ennen ajoa ja ajon jälkeen tehtävät tarkastukset\nYhteensä yli 900 000 onnettomuusvapaata mailia"
      },
      {
        "role": "Jakeluauton kuljettaja",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "maaliskuu 2016",
        "end": "maaliskuu 2019",
        "current": false,
        "points": "Toimitin rakennusmateriaaleja 15-20 työmaalle päivässä Dallas–Fort Worthin alueella\nKäytin trukkeja ja kiinnitin lavakuormat DOT-standardien mukaisesti\nPidin toimitusasiakirjat ja lokit tarkkoina ilman yhtään DOT-rikkomusta"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Todistus",
        "field": "Ammattiajo (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A HazMat- ja säiliölisämerkinnöillä. Puhdas ajohistoria."
      }
    ],
    "skills": "Pitkän matkan ja alueellinen ajo\nKylmä- ja lavakuormat\nDOT-määräykset ja ajopäiväkirjat\nLähtötarkastukset\nReittisuunnittelu (GPS, ELD)\nTrukin käyttö",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Vähittäismyyntiassistentti",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Vähittäismyyntiassistentti, jolla on 4 vuoden kokemus elektroniikka- ja vaatekaupoista. Johdonmukaisesti tiimin 3 parhaan myyjän joukossa, 32 %:n liitännäisasteella takuissa ja lisävarusteissa. Ystävällinen, nopea kassalla ja luotettu avaamaan ja sulkemaan myymälä.",
    "experience": [
      {
        "role": "Kokenut myyntiassistentti",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Myyn elektroniikkaa ja lisävarusteita yli 60 asiakkaalle päivässä; myymälän myynnin top 3:ssa 8 peräkkäistä vuosineljännestä\nSaavuta 32 %:n liitännäisaste takuissa ja lisävarusteissa, tiimin korkein\nKoulutan 6 uutta työntekijää kassaan, varastoon ja asiakaspalvelun standardeihin\nLuotettu avainhenkilö: avaan ja suljen myymälän ja hoidan kassalaskennat"
      },
      {
        "role": "Myyntiassistentti",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "Autoin asiakkaita valitsemaan asuja ja kokoja vilkkaalla myymälälattialla\nPidin esillepanot siisteinä ja täytin hyllyjä jokaisessa vuorossa\nHoidin palautuksia ja vaihtoja kohteliaasti ja pidin valitukset vähissä"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Associate-tutkinto",
        "field": "Liiketalous",
        "start": "2019",
        "end": "2021",
        "notes": "Osa-aikainen opiskelu vähittäiskaupan työn ohella."
      }
    ],
    "skills": "Asiakaspalvelu ja lisämyynti\nKäteisen käsittely ja kassajärjestelmät\nTuotetuntemus (elektroniikka)\nVarastonhallinta\nMyymälän avaaminen ja sulkeminen\nTiimikoulutus",
    "languages": "Englanti (sujuva)\nEspanja (sujuva)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Asiakaspalvelija",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Asiakaspalvelija, jolla on 5 vuoden kokemus puhelin-, sähköposti- ja live-chat-tuen hoitamisesta. Ratkaisen yli 45 tapausta päivässä 96 %:n tyytyväisyyspisteillä ja 88 %:n ensimmäisen yhteydenoton ratkaisuasteella. Rauhallinen vihaisia asiakkaita kohtaan ja nopea löytämään korjauksen.",
    "experience": [
      {
        "role": "Asiakaspalvelija",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "toukokuu 2021",
        "end": "",
        "current": true,
        "points": "Käsittelen yli 45 puhelin-, sähköposti- ja chat-tapausta päivässä laskutuksesta, tilauksista ja teknisistä vioista\nPidän 96 %:n asiakastyytyväisyyden ja 88 %:n ensimmäisen yhteydenoton ratkaisuasteen\nRauhoita vaikeat puhelut ja muuta valitukset toistuvaksi kaupaksi\nKoulutan 5 uutta asiakaspalvelijaa käsikirjoituksiin, järjestelmiin ja sävyyn"
      },
      {
        "role": "Tukiagentti",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "Vastasin asiakkaiden sähköposteihin ja chatteihin tilauksista, palautuksista ja hyvityksistä\nPidin keskimääräisen ensimmäisen vastausajan alle 2 tunnissa\nKirjoitin 20 tukikeskuksen artikkelia, jotka vähensivät toistuvia kysymyksiä neljänneksellä"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Associate-tutkinto",
        "field": "Liiketalouden hallinto",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Puhelin-, sähköposti- ja live-chat-tuki\nValitusten käsittely ja tilanteiden rauhoittaminen\nCRM-järjestelmät (Zendesk, Salesforce)\nLaskutus- ja tilauskyselyt\nKirjoitusnopeus 55 lyöntiä/min\nTiimin koulutus",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Toimintopäällikkö",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Toimintopäällikkö, jolla on 12 vuoden kokemus jopa 80 hengen tiimien johtamisesta varastoinnissa ja jakelussa. Alensin tilausten käsittelykustannuksia 22 %, nostin täsmälliset toimitukset 91 %:sta 98 %:iin ja avasin kaksi uutta toimipaikkaa ajallaan ja alle budjetin.",
    "experience": [
      {
        "role": "Toimintopäällikkö",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Johdan 120 000 neliöjalan jakelukeskusta, jossa on 80 työntekijää 3 vuorossa\nAlensin tilausten käsittelykustannuksia 22 % suunnittelemalla keräilyreitit ja vuoromallit uudelleen\nNostin täsmälliset toimitukset 91 %:sta 98 %:iin 18 kuukaudessa\nAvasin 2 uutta toimipaikkaa ajallaan ja 8 % alle budjetin"
      },
      {
        "role": "Varastotyönjohtaja",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Ohjasin 25 varastotyöntekijää ja yli 4 000 tilauksen päivittäistä lähettämistä\nOtatin käyttöön viivakoodinluvun, mikä vähensi keräilyvirheitä 35 %\nPidin turvallisuuskoulutusta, joka piti työmaan tapaturmattomana 3 vuotta"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Toiminnanohjaus",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Tiimin johtaminen (jopa 80 henkilöstöä)\nVarastointi ja jakelu\nProsessien parantaminen\nBudjetointi ja kustannusvalvonta\nTurvallisuusjohtaminen\nERP- ja WMS-järjestelmät",
    "languages": "Englanti (sujuva)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Luvanvarainen sähköasentaja",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Luvanvarainen kisällisähköasentaja, jolla on 8 vuoden kokemus asuin- ja liiketilatöistä. Osaava johdotuksessa, keskusten päivityksissä, valaistuksessa ja vianhaussa, puhtaalla turvallisuushistorialla yli 400 työssä. NEC-määräysten tuntemus ja kokemusta oppipoikien ohjaamisesta.",
    "experience": [
      {
        "role": "Kisällisähköasentaja",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "maaliskuu 2019",
        "end": "",
        "current": true,
        "points": "Tee yli 400 asuin- ja liiketilatyötä: johdotus, keskusten päivitykset, valaistus ja sähköautojen laturit\nDiagnosoin ja korjaan vikoja nopeasti, 92 %:n ensimmäisen käynnin korjausasteella\nOhjaan 2 oppipoikaa ja hyväksyn heidän työnsä määräysten mukaisesti\nPidä turvallisuushistoria puhtaana ilman yhtään tapaturmapoissaoloa"
      },
      {
        "role": "Sähköasentajan oppipoika",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "Avustin luvanvaraisia sähköasentajia uudisrakennusten johdotuksissa ja uudelleenjohdotuksissa\nOpin putkien taivutusta, kaapeleiden vetoa ja keskusten asennusta\nSuoritin 8 000 oppisopimustuntia ja läpäisin ammattitutkinnon ensimmäisellä kerralla"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Todistus",
        "field": "Sähkötekniikka",
        "start": "2015",
        "end": "2016",
        "notes": "Kisällisähköasentajan lupa (Colorado). OSHA 30 -sertifioitu."
      }
    ],
    "skills": "Asuin- ja liiketilojen sähköjohdotukset\nSähkökeskusten päivitykset ja sähköautojen laturit\nVianetsintä ja testaus\nNEC-määräysten noudattaminen\nPutkien taivutus ja kaapelien veto\nOppipoikien ohjaus",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Talousanalyytikko",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Talousanalyytikko, jolla on 6 vuoden kokemus budjetoinnista, ennustamisesta ja sijoitusanalyysista. Rakensin ennustemalleja, jotka vähensivät budjettipoikkeamaa 30 %, ja tuen 50 miljoonan dollarin sijoituspäätöksiä. Vahva Excelissä, SQL:ssä ja rahoitusmallinnuksessa.",
    "experience": [
      {
        "role": "Talousanalyytikko",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Laadin kuukausiennusteita ja vuosibudjetteja 120 miljoonan dollarin salkulle\nVähensin budjettipoikkeamaa 30 % ajuripohjaisella ennustemallilla\nTuen 50 miljoonan dollarin sijoituspäätöksiä arvonmäärityksellä ja skenaarioanalyysilla\nEsittelen havainnot kuukausittain talousjohtajalle ja osastopäälliköille"
      },
      {
        "role": "Nuorempi talousanalyytikko",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "maaliskuu 2021",
        "current": false,
        "points": "Valmistelin viikoittaisia suoritusraportteja 12 toimipisteelle\nAutomatisoitu raportointi Excelissä, säästö 10 tuntia viikossa\nAvustin luottotiimiä lainasalkun analysoinnissa"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Rahoitus",
        "start": "2015",
        "end": "2019",
        "notes": "CFA-tason II kokelas. Opintoja arvonmäärityksestä ja yritysrahoituksesta."
      }
    ],
    "skills": "Taloudellinen mallinnus ja ennustaminen\nBudjetointi ja poikkeama-analyysi\nArvonmääritys (DCF, vertailuyhtiöt)\nExcel (edistynyt) ja SQL\nBloomberg Terminal\nTietojen visualisointi (Power BI)",
    "languages": "Englanti (sujuva)\nHindi (sujuva)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Rakennusinsinööri",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Rakennusinsinööri (PE), jolla on 7 vuoden kokemus tie- ja vesi-infrastruktuurin suunnittelusta. Johdin 12 mailin moottoritien levennyksen ja 8 000 kotia palvelevan hulevesijärjestelmän suunnittelua. Osaava AutoCAD Civil 3D:ssä, kustannusarvioinnissa ja lupien koordinoinnissa.",
    "experience": [
      {
        "role": "Rakennusinsinööri",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Johdan 12 mailin moottoritien levennyksen suunnittelua mittauksesta rakentamisasiakirjoihin\nSuunnittelin hulevesijärjestelmän 8 000 kodille, jonka kaupunki hyväksyi ensimmäisellä kerralla\nKoordinoi lupia 4 viranomaisen kanssa ja hallinnoi 2,5 miljoonan dollarin suunnittelubudjettia\nTarkistan ja leimaan piirustuksia luvanvaraisena Professional Engineerina"
      },
      {
        "role": "Nuorempi rakennusinsinööri",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Valmistelin tasaus- ja kuivatussuunnitelmia yli 20 asuinalueelle\nTein kustannusarvioita ja määräluetteloja tieprojekteihin\nOsallistuin työmaakatselmuksiin ja kirjoitin edistymisraportteja"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Rakennustekniikka",
        "start": "2014",
        "end": "2018",
        "notes": "Professional Engineer -lupa (Washington). EIT läpäisty 2018."
      }
    ],
    "skills": "Tie- ja kuivatussuunnittelu\nAutoCAD Civil 3D\nHulevesimallinnus\nKustannusarviointi\nLupakoordinointi\nProjektien aikataulutus (MS Project)",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Koneinsinööri",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Koneinsinööri, jolla on 6 vuoden kokemus LVI-järjestelmien ja tuotantolaitteiden suunnittelusta. Vähensin energiankulutusta 18 % 3 tehtaalla uudelleen suunnitellulla kanavistolla ja ohjauksilla ja johdin koneen uudelleensuunnittelua, joka nosti tuottoa 25 %. Osaava SolidWorksissa, FEA:ssa ja lämpöanalyysissa.",
    "experience": [
      {
        "role": "Koneinsinööri",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Suunnittelen LVI- ja tuotantolaitteita 3 tehtaalle, joissa on yli 400 työntekijää\nVähensin energiankulutusta 18 % suunnittelemalla kanaviston ja ohjaussekvenssit uudelleen\nJohdin koneen uudelleensuunnittelua, joka nosti tuottoa 25 % ilman ylimääräistä lattiatilaa\nTeen FEA- ja lämpöanalyysejä uusille osille ennen prototyyppien valmistusta"
      },
      {
        "role": "Nuorempi koneinsinööri",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "elokuu 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Mallinsin osia ja kokoonpanoja SolidWorksissa autoalan asiakkaille\nValmistelin piirustuksia, materiaaliluetteloja ja testiraportteja\nTuin prototyyppien rakentamista ja ratkoin sovitusongelmia tuotantotilassa"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Konetekniikka",
        "start": "2015",
        "end": "2019",
        "notes": "Opintoja termodynamiikasta, virtausmekaniikasta ja konerakentamisesta."
      }
    ],
    "skills": "LVI-suunnittelu\nSolidWorks ja AutoCAD\nFEA ja lämpöanalyysi\nKonesuunnittelu\nEnergiatehokkuus\nGD&T ja toleranssit",
    "languages": "Englanti (sujuva)\nKorea (keskustelutaso)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Sähköinsinööri",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Sähköinsinööri, jolla on 6 vuoden kokemus sulautetuista järjestelmistä ja tehoelektroniikasta. Suunnittelin ohjauskortteja, joita käytetään nyt yli 50 000 laitteessa, ja alensin korttien kustannuksia 22 % komponenttien uudelleensuunnittelulla. Osaava Altiumissa, C:ssä, laiteohjelmistojen testauksessa ja EMC-vaatimustenmukaisuudessa.",
    "experience": [
      {
        "role": "Sähköinsinööri",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "maaliskuu 2021",
        "end": "",
        "current": true,
        "points": "Suunnittelen sulautettuja ohjauskortteja, joita käytetään yli 50 000 laitteessa vuodessa\nAlensin piirilevyn kustannuksia 22 % suunnittelemalla tehonsyötön uudelleen ja hankkimalla vaihtoehtoja\nJohdan EMC-vaatimustenmukaisuuden testausta, läpäisten ensimmäisellä kerralla 4 tuotelinjalla\nKirjoitan ja tarkistan laiteohjelmistoja C-kielellä mikrokontrollereille"
      },
      {
        "role": "Nuorempi sähköinsinööri",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Suunnittelin piirilevyasetteluja Altiumilla kuluttaja- ja teollisuusasiakkaille\nRakensin ja testasin prototyyppejä ja korjasin laitteistovikoja\nKirjoitin testausmenetelmiä, jotka lyhensivät tuotannon testausaikaa 30 %"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Sähkötekniikka",
        "start": "2015",
        "end": "2019",
        "notes": "Opintoja sulautetuista järjestelmistä, tehoelektroniikasta ja signaalinkäsittelystä."
      }
    ],
    "skills": "Sulautetut järjestelmät ja piirilevysuunnittelu\nAltium Designer\nC ja laiteohjelmistot\nTehoelektroniikka\nEMC-vaatimustenmukaisuustestaus\nOskilloskoopit ja laboratoriolaitteet",
    "languages": "Englanti (sujuva)\nGudžarati (keskustelutaso)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Data-analyytikko",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Data-analyytikko, jolla on 4 vuoden kokemus myynti- ja toimintodatan muuttamisesta päätöksiksi. Rakensin koontinäyttöjä, joita käyttää yli 60 päällikköä, lyhensin kuukausiraportoinnin 3 päivästä 4 tuntiin ja löysin hinnoitteluvirheen, jonka arvo oli 180 000 dollaria vuodessa. Vahva SQL:ssä, Excelissä ja Power BI:ssä.",
    "experience": [
      {
        "role": "Data-analyytikko",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Rakennan Power BI -koontinäyttöjä, joita käyttää yli 60 myymälä- ja aluepäällikköä\nLyhensin kuukausiraportoinnin 3 päivästä 4 tuntiin automatisoiduilla SQL-putkilla\nLöysin 180 000 dollaria vuodessa arvoisen hinnoitteluvirheen tarkastamalla kampanjatietoja\nEsittelen havainnot kuukausittain kaupalliselle tiimille"
      },
      {
        "role": "Nuorempi data-analyytikko",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "elokuu 2020",
        "end": "joulukuu 2021",
        "current": false,
        "points": "Puhdistin ja yhdistin toimitustiedot 4 järjestelmästä yhteen raportointitauluun\nRakensin Excel-seurantataulukoita, jotka korvasivat manuaalisen laskennan 2 tiimillä\nVastasin päivittäin toimintopäälliköiden tilapäisiin datakysymyksiin"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Tilastotiede",
        "start": "2016",
        "end": "2020",
        "notes": "Opintoja regressioanalyysista, tietokannoista ja datan visualisoinnista."
      }
    ],
    "skills": "SQL ja tietojen puhdistus\nPower BI ja Tableau\nExcel (edistynyt)\nPython (pandas)\nKoontinäyttöjen suunnittelu\nA/B-testauksen perusteet",
    "languages": "Englanti (sujuva)\nVietnam (keskustelutaso)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Datatieteilijä",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Datatieteilijä, jolla on 5 vuoden kokemus koneoppimismallien rakentamisesta verkkokaupalle. Julkaisemani suositusmalli nosti käynnin tuottoa 12 % ja poistumamalli tunnistaa nyt 80 % riskiasiakkaista. Vahva Pythonissa, SQL:ssä ja mallien käyttöönotossa.",
    "experience": [
      {
        "role": "Datatieteilijä",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Julkaistiin suositusmalli, joka nosti käynnin tuottoa 12 %\nRakensin asiakaspoistumamallin, joka tunnistaa 80 % riskiasiakkaista kuukautta etuajassa\nVein malleja tuotantoon valvonta- ja uudelleenkoulutusputkilla\nEsittelen mallien tulokset kuukausittain tuote- ja markkinointitiimeille"
      },
      {
        "role": "Nuorempi datatieteilijä",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Rakensin ennustemalleja 3 vähittäiskaupan asiakkaalle yli 90 %:n tarkkuudella\nPuhdistin ja valmistelin yli 10 miljoonan rivin tietoaineistoja mallinnusta varten\nKirjoitin dokumentaation, jotta asiakkaat pystyivät ajamaan mallit itse uudelleen"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Datatiede",
        "start": "2018",
        "end": "2020",
        "notes": "Opinnäytetyö suositusjärjestelmistä. Kandidaatin tutkinto matematiikassa (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nKoneoppiminen ja tilastotiede\nSQL ja Spark\nMallien käyttöönotto (Docker, AWS)\nA/B-testaus\nTietojen visualisointi",
    "languages": "Englanti (sujuva)\nArabia (sujuva)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Verkkokehittäjä",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Verkkokehittäjä, jolla on 4 vuoden kokemus nopeiden ja saavutettavien verkkosivustojen rakentamisesta HTML:llä, CSS:llä ja JavaScriptillä. Rakensi uudelleen kaupan kassan, joka nosti konversioita 18%, ja ylläpitää 12 asiakassivustoa 99.9% käytettävyydellä. Vahva responsiivisessa suunnittelussa, suorituskyvyssä ja SEO-perusteissa.",
    "experience": [
      {
        "role": "Verkkokehittäjä",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "maaliskuu 2022",
        "end": "",
        "current": true,
        "points": "Rakennan responsiivisia verkkosivustoja HTML:llä, CSS:llä, JavaScriptillä ja WordPressillä 12 asiakkaalle\nRakensin myymälän kassan uudelleen, mikä nosti konversioita 18 %\nLyhensin sivujen keskimääräisen latausajan 4,2 sekunnista 1,8 sekuntiin kuva- ja koodioptimoinnilla\nPidä kaikki asiakassivustot 99,9 %:n käytettävyydessä valvonnalla ja varmuuskopioilla"
      },
      {
        "role": "Nuorempi verkkokehittäjä",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Rakensin laskeutumissivuja ja korjasin virheitä yli 20 pienyrityssivustolla\nOpin Gitiä, responsiivista suunnittelua ja hakukoneoptimoinnin perusteita todellisissa projekteissa\nVastasin asiakkaiden sähköposteihin ja tein sisältöpäivityksiä samana päivänä"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Tietojenkäsittelytiede",
        "start": "2017",
        "end": "2021",
        "notes": "Opintoja verkkokehityksestä, tietokannoista ja ihmisen ja tietokoneen vuorovaikutuksesta."
      }
    ],
    "skills": "HTML, CSS ja JavaScript\nReact ja WordPress\nResponsiivinen suunnittelu\nSivunopeuden optimointi\nGit ja GitHub\nHakukoneoptimoinnin perusteet",
    "languages": "Englanti (sujuva)\nEspanja (sujuva)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Graafinen suunnittelija",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Graafinen suunnittelija, jolla on 5 vuoden kokemus brändäyksestä, pakkaussuunnittelusta ja sosiaalisen median suunnittelusta. Loin brändi-ilmeitä yli 25 pienyritykselle ja pakkausuudistuksen, joka nosti hyllymyyntiä 14 %. Osaava Adobe Illustratorissa, Photoshopissa ja Figmassa.",
    "experience": [
      {
        "role": "Graafinen suunnittelija",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "Suunnittelen brändi-ilmeitä, pakkauksia ja sosiaalisen median kampanjoita yli 25 asiakkaalle\nElintarvikebrändin pakkausuudistus nosti hyllymyyntiä 14 %\nTuotan yli 30 sosiaalisen median sisältöä viikossa Instagramiin, TikTokiin ja Facebookiin\nEsittelen konsepteja asiakkaille ja tarkistan palautteen perusteella nopeasti"
      },
      {
        "role": "Nuorempi graafinen suunnittelija",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "joulukuu 2021",
        "current": false,
        "points": "Suunnittelin esitteitä, menuita ja sosiaalisen median julkaisuja paikallisille ravintoloille ja kaupoille\nValmistelin painovalmiita tiedostoja ja tarkistin vedoksia painajien kanssa\nRakensin mallikirjaston, joka lyhensi suunnitteluaikaa kolmanneksella"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Graafinen suunnittelu",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio brändäyksestä ja pakkaussuunnittelusta."
      }
    ],
    "skills": "Adobe Illustrator ja Photoshop\nFigma\nBrändi-identiteetin suunnittelu\nPakkaussuunnittelu\nSosiaalisen median suunnittelu\nPainotuotanto",
    "languages": "Englanti (sujuva)\nKorea (keskustelutaso)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX-suunnittelija",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX-suunnittelija, jolla on 5 vuoden kokemus käyttäjien tutkimisesta ja mobiili- ja verkkotuotteiden suunnittelusta. Suunnittelin uudelleen käyttöönoton kulun, joka vähensi keskeytyksiä 35 %, ja tein 40+ käytettävyystestiä. Osaamisalueina Figma, käyttäjätutkimus, rautalankamallit ja prototyypit.",
    "experience": [
      {
        "role": "UX-suunnittelija",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "Suunnittelin mobiiliperehdytyksen uudelleen, mikä vähensi keskeytyksiä 35 % 3 kuukaudessa\nToteutan yli 40 käytettävyystestiä ja käyttäjähaastattelua vuodessa\nRakennan rautalankamalleja ja prototyyppejä Figmassa 2 tuotetiimille\nTyöskentelen päivittäin insinöörien ja tuotepäälliköiden kanssa toimituksista"
      },
      {
        "role": "Nuorempi UX-suunnittelija",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "elokuu 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "Suunnittelin näyttöjä ja kulkuja 5 asiakassovellukselle\nToteutin ensimmäiset käytettävyystestit ja kirjoitin havainnot asiakkaille\nRakensin komponenttikirjaston, joka nopeutti suunnittelun luovutusta"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psykologia",
        "start": "2016",
        "end": "2020",
        "notes": "UX-suunnittelun sertifikaatti (General Assembly, 2020). Opintoja ihmisen ja tietokoneen vuorovaikutuksesta."
      }
    ],
    "skills": "Käyttäjätutkimus ja käytettävyystestaus\nRautalankamallit ja prototyypit (Figma)\nInformaatioarkkitehtuuri\nSuunnittelujärjestelmät\nAsiakaspolkujen kartoitus\nSidosryhmätyöpajat",
    "languages": "Englanti (sujuva)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Markkinointipäällikkö",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Markkinointipäällikkö, jolla on 8 vuoden kokemus B2B- ja kuluttajakampanjoista. Kasvatin päteviä liidejä 60 % vuodessa, lanseerasin tuotelinjan, joka saavutti 3 miljoonan dollarin myynnin ensimmäisenä vuonna, ja hallinnoin 500 000 dollarin vuosibudjettia 5 hengen tiimissä.",
    "experience": [
      {
        "role": "Markkinointipäällikkö",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "maaliskuu 2021",
        "end": "",
        "current": true,
        "points": "Johdan 5 hengen tiimiä ja 500 000 dollarin vuosittaista markkinointibudjettia\nKasvatin päteviä liidejä 60 % vuodessa sisällöllä ja maksetuilla kampanjoilla\nLan­seerasin tuotelinjan, joka saavutti 3 miljoonan dollarin myynnin ensimmäisenä vuonna\nAlensin liidikohtaista kustannusta 28 % rakentamalla kampanjakohdennuksen uudelleen"
      },
      {
        "role": "Markkinointiasiantuntija",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Toteutin sähköpostikampanjoita 80 000 tilaajalle 24 %:n avausasteella\nHallinnoin sosiaalisen median tilejä, jotka kasvoivat 5 000:sta 40 000 seuraajaan\nJärjestin 6 messuosastoa vuodessa, joista jokainen tuotti yli 300 liidiä"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Opintoja kuluttajakäyttäytymisestä, analytiikasta ja brändinhallinnasta."
      }
    ],
    "skills": "Kampanjastrategia ja -suunnittelu\nSisältö- ja sähköpostimarkkinointi\nMaksettu mainonta (Google, Meta)\nMarkkinointianalytiikka (GA4)\nTiimin johtaminen\nBudjetin hallinta",
    "languages": "Englanti (sujuva)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Projektipäällikkö",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Projektipäällikkö (PMP), jolla on 7 vuoden kokemus ohjelmisto- ja rakennusprojektien toteuttamisesta ajallaan ja budjetissa. Hallinnoin 15 projektia jopa 4 miljoonan dollarin arvosta, 94 %:n täsmällisellä toimitusasteella. Osaava ketterissä menetelmissä, riskienhallinnassa ja sidosryhmäviestinnässä.",
    "experience": [
      {
        "role": "Projektipäällikkö",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Hallinnoi 15 projektia jopa 4 miljoonan dollarin arvosta, 94 %:n täsmällisellä toimitusasteella\nJohdan ketteriä sprinttejä 3 tiimille ja raportoin edistymisen johdolle viikoittain\nVähensin projektien ylityksiä 30 % varhaisemmilla riskiarvioinneilla\nKoordinoi toimittajia, asiakkaita ja sisäisiä tiimejä 4 aikavyöhykkeellä"
      },
      {
        "role": "Projektikoordinaattori",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Seurasin aikatauluja, budjetteja ja lupia 8 rakennushankkeessa\nValmistelin tilaraportteja ja kokousmuistiinpanoja asiakkaille\nRatkoin aikatauluristiriitoja, jotka säästivät 2 viikkoa koulurakennuksessa"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Liiketalouden hallinto",
        "start": "2014",
        "end": "2018",
        "notes": "PMP-sertifioitu (2021). Sertifioitu ScrumMaster."
      }
    ],
    "skills": "Projektisuunnittelu ja aikataulutus\nKetterät menetelmät ja Scrum\nRiskienhallinta\nBudjettivalvonta\nSidosryhmäviestintä\nMS Project ja Jira",
    "languages": "Englanti (sujuva)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Henkilöstöpäällikkö",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Henkilöstöpäällikkö, jolla on 9 vuoden kokemus rekrytoinnista, työntekijäsuhteista ja työsuhde-eduista. Lyhensin rekrytointiajan 45 päivästä 28 päivään, nostin pysyvyyttä 15 % ja hoidan henkilöstöhallintoa 250 työntekijälle 3 toimipaikassa. CIPD-tason osaaminen työoikeudesta ja käytännöistä.",
    "experience": [
      {
        "role": "Henkilöstöpäällikkö",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Johdan henkilöstöhallintoa 250 työntekijälle 3 toimipaikassa, 3 hengen tiimillä\nLyhensin rekrytointiajan 45 päivästä 28 päivään rakentamalla haastatteluprosessin uudelleen\nNostin pysyvyyttä 15 % uudella perehdytys- ja arviointiohjelmalla\nHoidan työntekijäsuhteita, valituksia ja käytäntöpäivityksiä"
      },
      {
        "role": "Henkilöstöasiantuntija",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "Rekrytoin yli 120 työntekijää vuodessa hotelleille ja ravintoloille\nToteutin palkanlaskennan tarkistuksia ja etuusilmoittautumisia 400 työntekijälle\nRatkoin henkilöstöriitoja ja pidin vaihtuvuuden alan keskiarvon alapuolella"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Henkilöstöhallinto",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP-sertifioitu. Opintoja työoikeudesta ja organisaatiokäyttäytymisestä."
      }
    ],
    "skills": "Rekrytointi ja perehdytys\nTyösuhdeasiat\nEdut ja palkanmaksu\nTyöoikeus\nSuoriutumisen johtaminen\nHRIS (Workday, BambooHR)",
    "languages": "Englanti (sujuva)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Avustava lakimies",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Avustava lakimies, jolla on 6 vuoden kokemus liikejuridisista riidoista ja sopimusoikeudesta. Hoidin yli 40 tapausta, voitin 8 summaarista tuomiota ja laadin sopimuksia 25 miljoonan dollarin arvosta. Hyväksytty Illinoisin asianajajaliittoon; osaava oikeudellisessa tutkimuksessa, asiakirjojen laadinnassa ja asiakasneuvonnassa.",
    "experience": [
      {
        "role": "Avustava lakimies",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "Hallinnoi yli 40 liikejuridista riitatapausta vireillepanosta sovintoon\nSai yhteenvetotuomion 8 tapauksessa ja sovitteli 20 muuta edullisesti\nLaadi ja neuvottele sopimuksia jopa 25 miljoonan dollarin arvosta\nNeuvo asiakkaita henkilökohtaisesti ja kirjallisesti riskeissä ja strategiassa"
      },
      {
        "role": "Lakitoimiston avustaja",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "elokuu 2019",
        "end": "elokuu 2020",
        "current": false,
        "points": "Tutkin oikeuskäytäntöä ja laadin muistioita 2 tuomarille\nTarkistin esityksiä ja valmistelin tuomariston yhteenvetoja yli 100 kuulemiseen\nSeurasin oikeudenkäyntejä ja sovintoneuvotteluja siviiliosastoilla"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Oikeustiede",
        "start": "2016",
        "end": "2019",
        "notes": "Hyväksytty Illinoisin asianajajaliittoon (2019). Oikeustieteellinen aikakausjulkaisu, artikkelitoimittaja."
      }
    ],
    "skills": "Kauppaoikeudelliset riidat\nSopimusten laadinta ja neuvottelu\nOikeudellinen tutkimus (Westlaw, LexisNexis)\nAsiakasneuvonta\nTodistajien kuuleminen ja todistusaineiston hankinta\nOikeudenkäyntiasiakirjat ja menettely",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Kliininen farmaseutti",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Kliininen farmaseutti (PharmD), jolla on 7 vuoden kokemus sairaala- ja avohuollon farmasiasta. Tarkistan yli 100 lääkemääräystä päivässä, vähensin lääkkeiden haittatapahtumia 25 % uudella tarkistuskäytännöllä ja neuvon potilaita lääkkeiden turvallisessa käytössä. Luvanvarainen Pennsylvaniassa.",
    "experience": [
      {
        "role": "Kliininen farmaseutti",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Tarkistaa 100+ lääkemääräystä päivässä turvallisuuden, annostuksen ja yhteisvaikutusten osalta\nLeikkasi haitallisia lääketapahtumia 25% uudella kaksoistarkistuskäytännöllä\nNeuvoo lääkäreitä ja hoitajia lääkitysvalinnoissa vaativilla potilailla\nVetää sairaalan antibioottiohjauksen kierrot kahdesti viikossa"
      },
      {
        "role": "Farmaseutti (henkilöstö)",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "joulukuu 2019",
        "current": false,
        "points": "Toimitin yli 200 reseptiä päivässä ilman yhtään toimitusvirhettä\nNeuvoin potilaita uusista lääkkeistä, sivuvaikutuksista ja säilytyksestä\nAnnoin influenssarokotuksia ja tein verenpainemittauksia"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmasia",
        "start": "2014",
        "end": "2018",
        "notes": "Luvanvarainen farmaseutti (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "Lääkityksen arviointi ja turvallisuus\nKliininen farmakologia\nPotilasneuvonta\nApteekkijärjestelmät (Epic, PioneerRx)\nAntibioottien hallittu käyttö\nRokotuspalvelut",
    "languages": "Englanti (sujuva)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Yleishammaslääkäri",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Yleishammaslääkäri (DDS), jolla on 8 vuoden kokemus korjaavasta, esteettisestä ja ennaltaehkäisevästä hammaslääketieteestä. Hoidan yli 25 potilasta päivässä 2 000 potilaan vastaanotolla, 98 %:n potilastyytyväisyydellä. Osaava kruunuissa, implanteissa, juurihoidoissa ja läpinäkyvissä oikomiskalvoissa.",
    "experience": [
      {
        "role": "Yleishammaslääkäri",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Hoidan 25+ potilasta päivässä: paikkauksia, kruunuja, juurihoitoja ja poistoja\nPidän 98 %:n potilastyytyväisyyden yli 1 200 arvostelussa\nAsennan yli 15 implanttia kuukaudessa ja hallinnoin läpinäkyvien oikomiskalvojen tapauksia\nOhjaan 2 suuhygienistiä ja 4 hammasavustajaa"
      },
      {
        "role": "Hammaslääkäri (assosioitunut)",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "Tarjosi yleishammaslääkäripalveluja 1,500 potilaan vastaanotolla\nOtti käyttöön saman päivän kruunut, mikä leikkasi uusintakäyntejä 40%\nVeti koulujen tiedotuskäyntejä lasten suunterveydestä"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Hammaslääketiede",
        "start": "2013",
        "end": "2017",
        "notes": "Luvanvarainen hammaslääkäri (Arizona). Invisalign-sertifioitu. CPR/BLS-sertifioitu."
      }
    ],
    "skills": "Korjaava hammaslääketiede (kruunut, paikat)\nJuurihoito\nHammasimplantit\nLäpinäkyvät oikomiskalvot\nPotilashoito ja viestintä\nDigitaalinen röntgen ja CEREC",
    "languages": "Englanti (sujuva)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fysioterapeutti",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fysioterapeutti (DPT), jolla on 6 vuoden kokemus ortopedisesta ja urheilukuntoutuksesta. Hoidan 12-15 potilasta päivässä, ja 90 % saavuttaa tavoitteensa suunnitelluissa käynneissä. Osaava manuaalisessa terapiassa, liikuntareseptissä ja urheiluun paluun testauksessa.",
    "experience": [
      {
        "role": "Fysioterapeutti",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "maaliskuu 2021",
        "end": "",
        "current": true,
        "points": "Hoidan 12-15 potilasta päivässä: urheiluvammoja, leikkauksen jälkeistä kuntoutusta ja selkäkipuja\n90 % potilaista saavuttaa tavoitteensa suunnitellun käyntimäärän puitteissa\nSuunnittelen urheiluun paluun testausta, jota käyttää 3 paikallista joukkuetta\nMentoroin 2 vastavalmistunutta ja ohjaan opiskelijaharjoitteluja"
      },
      {
        "role": "Fysioterapeutti (henkilöstö)",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "elokuu 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "Tarjosin osastokuntoutusta leikkauksen jälkeisille ja aivohalvauspotilaille\nOhjasin ryhmäliikuntatunteja yli 20 iäkkäälle potilaalle viikossa\nDokumentoin edistymisen Epiciin ja luovutin osastotiimeille"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fysioterapia",
        "start": "2016",
        "end": "2019",
        "notes": "Luvanvarainen fysioterapeutti (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "Ortopedinen ja urheilukuntoutus\nManuaalinen terapia\nLiikuntareseptit\nUrheiluun paluun testaus\nPotilasohjaus\nDokumentointi (Epic)",
    "languages": "Englanti (sujuva)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Pääkokki",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Pääkokki, jolla on 10 vuoden kokemus kreoli- ja modernista amerikkalaisesta keittiöstä. Johtaa 12 hengen prikaatia 200-paikkaisessa ravintolassa, leikkasi ruokakustannuksia 15% tiukemmalla tilaamisella ja voitti kaupungin ruokaoppaan 'Best New Menu' -palkinnon vuonna 2025.",
    "experience": [
      {
        "role": "Pääkokki",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Johtaa 12 hengen prikaatia 200-paikkaisessa ravintolassa, jossa tarjoillaan 300+ annosta illassa\nLeikkasi ruokakustannuksia 15% tiukemmalla tilaamisella ja kausimenulla\nVoitti kaupungin ruokaoppaan 'Best New Menu' -palkinnon vuonna 2025\nSuunnittelee menuja, kouluttaa kokkeja ja johtaa läpimenoa perjantai- ja lauantai-illan palvelussa"
      },
      {
        "role": "Apulaispääkokki",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Johdin keittiötä, kun pääkokki oli poissa, palvellen 150 asiakasta illassa\nHallinnoin varastoa, tilauksia ja toimittajasuhteita\nKoulutin 8 linjakokkia ja vähensin henkilöstön vaihtuvuutta kolmanneksella"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Ruokakulttuuri",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe-elintarviketurvallisuuspäällikön sertifioitu."
      }
    ],
    "skills": "Menujen suunnittelu ja kustannuslaskenta\nKreolilainen ja moderni amerikkalainen keittiö\nKeittiön johtaminen (12 hengen prikaati)\nElintarviketurvallisuus (ServSafe)\nToimittajien hallinta\nJuhla- ja tapahtumacatering",
    "languages": "Englanti (sujuva)\nEspanja (sujuva)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Poliisi",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Poliisi, jolla on 8 vuoden kokemus partioinnista, yhteisöpoliisitoiminnasta ja tutkinnoista. Vastaan yli 30 hälytykseen viikossa, kiitoksilla rauhoittamisesta ja yhteisötyöstä. Koulutettu kriisi-interventioon, ensiapuun ja raporttien kirjoittamiseen.",
    "experience": [
      {
        "role": "Poliisi",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "Partioin 40 000 asukkaan aluetta ja vastaan yli 30 hälytykseen viikossa\nSain 2 kiitosta rauhoittamisesta ja yhteisötyöstä\nTutkin varkauksia ja pahoinpitelyjä ja kirjoitan raportteja, joita on käytetty yli 50 syytteessä\nMentoroin 3 uutta poliisia kenttäkoulutuksen läpi"
      },
      {
        "role": "Partiopoliisi",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "elokuu 2017",
        "end": "toukokuu 2019",
        "current": false,
        "points": "Partioin piirikunnan teitä ja vastasin hätäkutsuihin\nToimitin oikeuden asiakirjoja ja avustin vankien kuljetuksessa\nSuoritin kriisi-interventio- ja ensiapukoulutuksen"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Todistus",
        "field": "Lainvalvonta",
        "start": "2017",
        "end": "2017",
        "notes": "Ohion rauhanvirkamieskoulutusakatemian valmistunut. Kriisi-interventiotiimin koulutettu."
      }
    ],
    "skills": "Partiointi ja hälytystehtäviin vastaaminen\nYhteisöpoliisitoiminta\nKriisityö ja tilanteiden rauhoittaminen\nRaporttien kirjoittaminen\nTutkinta\nEnsiapu ja elvytys",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Palomies / Ensihoitaja",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Palomies ja ensihoitaja, jolla on 7 vuoden kokemus palontorjunnasta, pelastamisesta ja ensihoitotyöstä. Vastasin yli 900 hälytykseen, mukaan lukien rakennuspalot, ajoneuvopelastukset ja lääketieteelliset hätätilanteet. HazMat-koulutettu, puhdas turvallisuushistoria.",
    "experience": [
      {
        "role": "Palomies / Ensihoitaja",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "maaliskuu 2020",
        "end": "",
        "current": true,
        "points": "Vastaan yli 900 palo-, pelastus- ja lääketieteelliseen hälytykseen 3 aseman alueella\nAnnan ensihoitoa sertifioituna EMT:nä 60 %:ssa hälytyksistä\nHazMat-koulutettu; johdan puhdistusta kemikaalitilanteissa\nKoulutan uusia työntekijöitä letkujen käsittelyyn, tikkaisiin ja etsintätekniikoihin"
      },
      {
        "role": "Vapaaehtoinen palomies",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "Vastasi metsä- ja rakennuspaloihin vapaaehtoisena\nSuoritti Firefighter I & II- ja EMT-Basic-koulutukset\nAuttoi vetämään yhteisön paloturvallisuusinfoja kouluissa"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Todistus",
        "field": "Paloturvallisuus",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. EMT-Basic-sertifioitu. HazMat Operations -koulutettu."
      }
    ],
    "skills": "Palontorjunta ja pelastus\nEnsihoito (EMT)\nVaarallisten aineiden torjunta\nTikkaat, letkut ja tuuletus\nYhteisön paloturvallisuus\nTiimityö paineen alla",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Luvanvarainen putkiasentaja",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Luvanvarainen mestariputkiasentaja, jolla on 11 vuoden kokemus asuin- ja liiketilojen putkitöistä. Tein yli 600 työtä vuodessa perusasennuksista kattiloiden asennuksiin, 98 %:n ensimmäisen käynnin korjausasteella. Osaava putkiasennuksessa, viemäreiden puhdistuksessa ja määräysten noudattamisessa.",
    "experience": [
      {
        "role": "Mestariputkiasentaja",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Tee yli 600 asuin- ja liiketilatyötä vuodessa\nAsennan kattiloita, vedenlämmittimiä ja täysiä kylpyhuoneiden perusasennuksia\nPidän 98 %:n ensimmäisen käynnin korjausasteen huoltokäynneillä\nOhjaan 3 oppipoikaa ja hyväksyn heidän työnsä"
      },
      {
        "role": "Kisälliputkiasentaja",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "joulukuu 2018",
        "current": false,
        "points": "Toteutin uudisrakennusten putkitöitä yli 40 taloon vuodessa\nAvasin viemäreitä ja korjasin vuotoja kodeissa ja ravintoloissa\nOpin kaasuasennusta ja takaisinvirtauksen estoa"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Todistus",
        "field": "Putkitekniikka",
        "start": "2013",
        "end": "2014",
        "notes": "Mestariputkiasentajan lupa (Tennessee). Takaisinvirtauksen eston sertifioitu."
      }
    ],
    "skills": "Asuin- ja liiketilojen putkityöt\nPutkiasennus ja juottaminen\nViemärien puhdistus ja kameratarkastus\nKattiloiden ja lämminvesivaraajien asennus\nKaasuasennukset\nPutkialan määräysten noudattaminen",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Kisällipuuseppä",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Kisällipuuseppä, jolla on 9 vuoden kokemus runkotöistä, viimeistelystä ja mittatilauskaapistoista. Rakensin runkoja yli 30 taloon ja asensin keittiöitä yli 60 kotiin, maineena tarkat mitat ja siistit viimeistelyt. Osaava suunnitelmien lukemisessa ja määräysten mukaisessa työskentelyssä.",
    "experience": [
      {
        "role": "Kisällipuuseppä",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "Rakenna runkoja yli 30 taloon ja asenna keittiöitä yli 60 kotiin\nRakennan mittatilauksena kaapistoja ja listoja 1/16 tuuman toleranssilla\nLuen ja noudatan arkkitehtisuunnitelmia ja merkitsen virheet ennen kuin ne maksavat rahaa\nKoulutan 2 oppisopimusopiskelijaa runko- ja viimeistelytekniikoissa"
      },
      {
        "role": "Puusepän oppipoika",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "Avustin runko-, kipsilevy- ja lattiatöissä remonteissa\nOpin käyttämään sahoja, jyrsimiä ja naulapistooleja turvallisesti\nSuoritin 8 000 oppisopimustuntia ja läpäisin ammattitutkinnon"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Todistus",
        "field": "Puusepäntyöt",
        "start": "2015",
        "end": "2016",
        "notes": "Kisällipuuseppä. OSHA 10 -sertifioitu."
      }
    ],
    "skills": "Runkotyöt ja rakennetyöt\nViimeistelypuusepäntyöt ja listoitus\nMittatilauskalusteet\nArkkitehtisuunnitelmien lukeminen\nSähkötyökalut ja turvallisuus\nKipsilevy ja lattiat",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Yläkoulun opettaja (matematiikka)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Yläkoulun opettaja, jolla on 8 vuoden kokemus matematiikan opettamisesta luokille 9-12. Nostin algebran läpäisyasteen 64 %:sta 83 %:iin ja valmennan matematiikkajoukkuetta 2 osavaltion finaaliin. Osaava eriytetyssä opetuksessa, kokeisiin valmistautumisessa ja viestinnässä vanhempien kanssa.",
    "experience": [
      {
        "role": "Matematiikan opettaja (luokat 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "elokuu 2019",
        "end": "",
        "current": true,
        "points": "Opetan algebraa, geometriaa ja esilaskentaa 120 oppilaalle 5 luokassa\nNostin algebran läpäisyasteen 64 %:sta 83 %:iin 3 vuodessa\nValmenna matematiikkajoukkue 2 osavaltion finaaliin\nOhjaan koulun jälkeistä tukiopetusta 30 oppilaalle viikossa"
      },
      {
        "role": "Matematiikan opettaja (luokat 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "elokuu 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "Opetti algebraa ja geometriaa 100 oppilaalle vuodessa\nOtti käyttöön viikoittaiset kokeet, jotka puolittivat kotitehtäväpuutteet\nJärjesti koulun ensimmäiset matematiikkamessut 200 oppilaalle"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Matematiikan opetus",
        "start": "2013",
        "end": "2017",
        "notes": "Osavaltion opetuslupa (New Hampshire, luokat 7-12, matematiikka)."
      }
    ],
    "skills": "Matematiikan opetus (algebra esikalkyyliin asti)\nKokeisiin valmistautuminen\nEriyttävä opetus\nLuokanhallinta\nViestintä vanhempien kanssa\nGoogle Classroom ja Desmos",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Esikoulun opettaja",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Esikoulun opettaja, jolla on 6 vuoden kokemus 3-5-vuotiaiden lasten hoidosta. Osaava leikkiin perustuvassa oppimisessa, käyttäytymisen ohjauksessa ja viestinnässä vanhempien kanssa. Rakensin äänneopetusohjelman, joka nosti luokkani kouluvalmiuspisteitä.",
    "experience": [
      {
        "role": "Esikoulun opettaja",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "elokuu 2020",
        "end": "",
        "current": true,
        "points": "Opetan ja hoidan 18 lapsen luokkaa, ikä 3-5\nRakensin äänneopetusohjelman, joka nosti koko luokan kouluvalmiuspisteitä\nSuunnittelen viikoittaiset teemat, askartelut ja ulkoleikit\nJaan päivittäisiä päivityksiä ja lukukausittaisia edistymisraportteja vanhemmille"
      },
      {
        "role": "Avustava esikoulun opettaja",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "Tuin pääopettajaa 20 lapsen luokassa\nPidin satuhetkiä, lauluja ja taidetoimintaa päivittäin\nPidin turvallisuus- ja hygienia-asiakirjat osavaltion standardien mukaisina"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Associate-tutkinto",
        "field": "Varhaiskasvatus",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate (CDA) -pätevyys. Ensiapu- ja elvytyssertifioitu."
      }
    ],
    "skills": "Leikkiin perustuva oppiminen\nKäyttäytymisen ohjaus\nÄänteet ja varhainen lukutaito\nViestintä vanhempien kanssa\nLuokan turvallisuus\nTaide- ja askartelusuunnittelu",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Lapsi- ja perhetyön sosiaalityöntekijä",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Luvanvarainen sosiaalityöntekijä, jolla on 7 vuoden kokemus lasten ja perheiden tukemisesta. Hallinnoin 25 perheen tapauskuormaa, koordinoin palveluja koulujen ja terveyspalvelujen välillä ja laadin oikeuslausuntoja, joihin tuomarit luottavat. Osaava arvioinnissa, kriisituessa ja suojelussa.",
    "experience": [
      {
        "role": "Lapsi- ja perhetyön sosiaalityöntekijä",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "Hallinnoi 25 perheen tapauskuormaa ja vierailen kodeissa ja kouluissa viikoittain\nLaadi oikeuslausuntoja ja todista perheoikeudessa\nKoordinoi haavoittuvien perheiden asunto-, terveys- ja koulutukea\nLyhensin arvioinnin odotusaikaa 20 % uudella kiireellisyysluokitusjärjestelmällä"
      },
      {
        "role": "Asiakastyöntekijä",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "joulukuu 2019",
        "current": false,
        "points": "Tuin yli 40 perhettä tilapäisasumisessa etuuksilla ja ohjauksilla\nPidin viikoittaisia vanhemmuus- ja budjetointityöpajoja\nPidin asiakirjamerkinnät tarkkoina tarkastuksia ja rahoitusraportteja varten"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Sosiaalityö",
        "start": "2016",
        "end": "2018",
        "notes": "Luvanvarainen sosiaalityöntekijä (Ohio). Opintoja lastensuojelusta ja perhejärjestelmistä."
      }
    ],
    "skills": "Asiakastyön hallinta (25 perhettä)\nLasten suojelu\nPerhetuomioistuimen raportit\nKriisituki\nMoniviranomaisyhteistyö\nEtuus- ja asumisneuvonta",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Oikeusavustaja",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Oikeusavustaja, jolla on 6 vuoden kokemus riita-asioiden tuesta ja yritysasiakirjoista. Hallinnoin näytön keräämistä yli 30 tapauksessa, laadin haastehakemuksia ja sopimuksia ja pidän jättömääräajat 100 %:n täsmällisyydellä. Osaava Westlawissa, sähköisessä näytön keräämisessä ja asiahallintaohjelmistoissa.",
    "experience": [
      {
        "role": "Oikeusavustaja",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "Hallinnoi näytön keräämistä yli 30 riitatapauksessa ja tarkistan yli 10 000 asiakirjaa\nLaadi haastehakemuksia, esityksiä ja sopimuksia lakimiehen tarkistettavaksi\nPidä 100 %:n täsmällisyys oikeudelle jätettävissä asiakirjoissa ja määräajoissa\nKoordinoi todistajia ja valmistele oikeudenkäyntikansioita"
      },
      {
        "role": "Lakiassistentti",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "elokuu 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "Sisäänottohaastattelut yli 20 asiakkaalle viikossa\nValmistelin lomakkeita ja asiakirjoja asunto- ja perhetapauksiin\nKäänsin oikeudellisia asiakirjoja espanjankielisille asiakkaille"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Associate-tutkinto",
        "field": "Oikeusavustajan opinnot",
        "start": "2017",
        "end": "2019",
        "notes": "NALA-sertifioitu oikeusavustaja (CP). ABA:n hyväksymä ohjelma."
      }
    ],
    "skills": "Riita-asioiden tuki ja todistusaineiston hankinta\nOikeudellisten asiakirjojen laadinta\nE-discovery (Relativity)\nAsioiden hallinta (Clio)\nOikeudenkäyntiasiakirjat ja määräajat\nOikeudellinen tutkimus (Westlaw)",
    "languages": "Englanti (sujuva)\nEspanja (sujuva)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Kirjanpitotyöntekijä",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Kirjanpitotyöntekijä, jolla on 5 vuoden kokemus ostovelkoista, laskutuksesta ja pankkitilien täsmäytyksistä. Käsittelen yli 300 laskua kuukaudessa 99,8 %:n tarkkuudella ja pidän kirjanpidon siistinä kuukauden sulkemista varten. Osaava QuickBooksissa, Excelissä ja palkanlaskennan tuessa.",
    "experience": [
      {
        "role": "Kirjanpitotyöntekijä",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Käsittelen yli 300 toimittajalaskua kuukaudessa 99,8 %:n tarkkuudella\nTäsmäytän 6 pankkitiliä viikoittain ja merkitsen erot samana päivänä\nValmistelen palkanlaskennan tiedot 45 työntekijälle ja perin erääntyneitä asiakasmaksuja\nPidä asiakirjat siisteinä vuoden lopun tarkastusta varten, ilman yhtään havaintoa"
      },
      {
        "role": "Kirjanpitoassistentti",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "maaliskuu 2021",
        "current": false,
        "points": "Syötin myyntilaskuja ja kuitteja QuickBooksiin päivittäin\nVastasin toimittajien maksukyselyihin puhelimitse ja sähköpostitse\nArkistoin asiakirjoja ja pidin arkiston ajan tasalla"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Todistus",
        "field": "Kirjanpito",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks-sertifioitu käyttäjä."
      }
    ],
    "skills": "Ostovelat ja myyntisaamiset\nPankkitäsmäytykset\nLaskutus (300+ kuukaudessa)\nQuickBooks ja Excel\nPalkanmaksun tuki\nTietojen syöttö (65 lyöntiä/min)",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Hallinnollinen assistentti",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Hallinnollinen assistentti, jolla on 6 vuoden kokemus toimistojen sujuvasta pyörittämisestä. Hallinnoin 4 päällikön kalentereita, järjestän matkoja ja kokouksia ja käsittelen yli 100 sähköpostia päivässä. Tunnettu tarkkuudesta, hienotunteisuudesta ja rauhallisuudesta määräaikapaineen alla.",
    "experience": [
      {
        "role": "Hallinnollinen assistentti",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Hallinnoi kalentereita, matkoja ja kokouksia 4 ylemmälle päällikölle\nKäsittelen yli 100 sähköpostia päivässä, laadin vastauksia ja merkitsen kiireelliset\nValmistelen hallituksen asiakirjoja ja teen pöytäkirjoja kuukausikokouksissa\nHallinnoin toimistotarvike- ja toimittajatilauksia ja alensin kustannuksia 12 %"
      },
      {
        "role": "Vastaanottovirkailija",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "elokuu 2019",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Vastaanotin 60+ potilasta päivässä ja hallinnoin ajanvarauskirjaa\nVastasin puhelimeen ja käsittelin vakuutuskyselyitä\nPidin potilastiedot tarkkoina ja luottamuksellisina"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Associate-tutkinto",
        "field": "Toimistohallinto",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Kalenteri- ja matkahallinta\nSähköposti ja kirjeenvaihto\nKokousmuistiot\nMicrosoft Office (Word, Excel, Outlook)\nTietojen syöttö (70 lyöntiä/min)\nToimistotarvikkeet ja toimittajat",
    "languages": "Englanti (sujuva)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Pankkivirkailija",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Pankkivirkailija, jolla on 4 vuoden kokemus yli 80 asiakkaan palvelemisesta päivittäin tarkasti ja huolella. Kassalipas täsmäytetty sentilleen 3 vuoden ajan ilman yhtään vajausta. Osaava talletuksissa, nostoissa, petostarkistuksissa ja asiakkaiden ohjaamisessa oikeisiin tuotteisiin.",
    "experience": [
      {
        "role": "Pankkivirkailija",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "maaliskuu 2022",
        "end": "",
        "current": true,
        "points": "Palvelen yli 80 asiakasta päivässä: talletukset, nostot, maksut ja siirrot\nKassalipas täsmäytetty sentilleen 3 vuoden ajan ilman vajauksia\nHavaitsin ja pysäytin 12 petosyritystä ja säästin asiakkaille yli 90 000 dollaria\nOhjaan asiakkaita säästö- ja lainatuotteisiin ja saavutan suosittelutavoitteet neljännesvuosittain"
      },
      {
        "role": "Asiakaspalvelutyöntekijä",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "Avasin uusia tilejä ja myönsin pankkikortteja jäsenille\nVastasin puhelimitse saldoja ja tiliotteita koskeviin kyselyihin\nAutoin jäseniä ottamaan käyttöön verkko- ja mobiilipankin"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Associate-tutkinto",
        "field": "Liiketalous",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Kassankäsittely ja täsmäytys\nTalletukset, nostot ja maksut\nPetosten havaitseminen\nAsiakaspalvelu\nPankkiohjelmistot (Fiserv)\nTuotesuositukset",
    "languages": "Englanti (sujuva)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Myyntipäällikkö",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Myyntipäällikkö, jolla on 10 vuoden kokemus jopa 15 edustajan tiimien johtamisesta. Kasvatin alueellisen liikevaihdon 4 miljoonasta dollarista 7,5 miljoonaan dollariin 3 vuodessa, nostin voittoasteen 22 %:sta 34 %:iin ja puolitin edustajien vaihtuvuuden paremmalla valmennuksella ja perehdytyksellä.",
    "experience": [
      {
        "role": "Alueellinen myyntipäällikkö",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Johdan 15 myyntiedustajan tiimiä Texasissa ja Oklahomassa\nKasvatin alueellisen liikevaihdon 4 miljoonasta dollarista 7,5 miljoonaan dollariin 3 vuodessa\nNostin voittoasteen 22 %:sta 34 %:iin paremmalla valmennuksella ja myyntiputken arvioinneilla\nPuolitin myyntiedustajien vaihtuvuuden uudella perehdytysohjelmalla"
      },
      {
        "role": "Myyntiedustaja",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Myin teollisuuslaitteita yli 80 asiakkuudelle ja saavutin kiintiön 5 vuotta peräkkäin\nAlueen paras myyjä 3 vuotta peräkkäin\nRakensin suositteluverkoston, joka toi 25 % uudesta liiketoiminnasta"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Opintoja myynnin johtamisesta ja neuvottelusta."
      }
    ],
    "skills": "Myyntitiimin johtaminen (15 edustajaa)\nLiikevaihdon kasvu ja ennustaminen\nMyyntiputken hallinta (Salesforce)\nValmennus ja perehdytys\nNeuvottelu\nAluesuunnittelu",
    "languages": "Englanti (sujuva)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Rakennuspäällikkö",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Rakennuspäällikkö, jolla on 12 vuoden kokemus jopa 12 miljoonan dollarin liike- ja asuinprojektien toteuttamisesta. Saatoin päätökseen yli 20 projektia 95 %:n täsmällisyydellä, nolla tapaturmapoissaoloa työmaillani ja budjetit pysyivät 3 %:n sisällä. Osaava aikataulutuksessa, alihankkijoiden hallinnassa ja turvallisuudessa.",
    "experience": [
      {
        "role": "Rakennuspäällikkö",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "Toteuta jopa 12 miljoonan dollarin liike- ja asuinprojekteja\nSaatoin päätökseen yli 20 projektia 95 %:n täsmällisyydellä ja budjetit 3 %:n sisällä\nHallinnoi yli 30 alihankkijaa ja 50 työntekijää 3 aktiivisella työmaalla\nNolla poissaoloon johtanutta tapaturmaa kaikilla työmailla 4 vuodessa"
      },
      {
        "role": "Työmaavalvoja",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "Johdin päivittäistä työmaatoimintaa toimisto- ja vähittäiskaupparakennuksissa\nKoordinoin toimituksia, tarkastuksia ja alihankkijoiden aikatauluja\nPidin turvallisuusasiakirjat puhtaina ja läpäisin jokaisen OSHA-tarkastuksen"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Talonrakentaminen",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 -sertifioitu. CCM (Certified Construction Manager) -kokelas."
      }
    ],
    "skills": "Projektien aikataulutus (MS Project, Procore)\nBudjettivalvonta\nAlihankkijoiden hallinta\nTyömaan turvallisuus (OSHA 30)\nPiirustusten lukeminen\nAsiakasraportointi",
    "languages": "Englanti (sujuva)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Sertifioitu lääkäriavustaja",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Sertifioitu lääkäriavustaja, jolla on 5 vuoden kokemus perhelääketieteestä ja päivystyksestä. Vas­taanotan yli 25 potilasta päivässä, mittaan elintoimintoja, otan verinäytteitä ja hoidan vastaanottoa 97 %:n potilastyytyväisyydellä. Osaava EHR-järjestelmissä, verinäytteenotossa ja vakuutustarkistuksissa.",
    "experience": [
      {
        "role": "Sertifioitu lääkäriavustaja",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "Vastaanotan yli 25 potilasta päivässä: elintoiminnot, esitiedot ja tutkimusten valmistelu\nOtan verinäytteitä ja teen peruslaboratoriokokeita 99 %:n ensimmäisen piston onnistumisasteella\nHallinnoi vastaanottoa, aikataulutusta ja vakuutustarkistuksia\nPidän 97 %:n potilastyytyväisyyden yli 800 kyselyssä"
      },
      {
        "role": "Lääkäriavustaja",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "elokuu 2019",
        "end": "maaliskuu 2021",
        "current": false,
        "points": "Arvioin ilman ajanvarausta tulleiden potilaiden kiireellisyyden ja avustin lääkäreitä pienissä toimenpiteissä\nAnnoin rokotuksia ja hoidin näytteenottoa\nPidin tutkimushuoneet varusteltuina, puhtaina ja valmiina potilaiden välillä"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Todistus",
        "field": "Lääkäriavustajan työ",
        "start": "2018",
        "end": "2019",
        "notes": "Sertifioitu lääkäriavustaja (CMA, AAMA). BLS-sertifioitu. Koulutettu verinäytteenottoon."
      }
    ],
    "skills": "Potilaiden vastaanotto ja peruselintoiminnot\nVerinäytteenotto\nEHR (eClinicalWorks)\nRokotukset\nVakuutusten tarkistus\nVastaanoton hallinta",
    "languages": "Englanti (sujuva)\nEspanja (sujuva)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Opiskelija",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Motiveitunut lukion abiturientti vahvoilla arvosanoilla ja osa-aikaisella työkokemuksella. Nopea oppimaan, luotettava ja hyvä ihmisten kanssa. Etsin ensimmäistä kokopäiväistä roolia tai osa-aikatyötä korkeakoulun ohelle.",
    "experience": [
      {
        "role": "Osa-aikainen myyntiassistentti",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "Palvelen yli 50 asiakasta vuorossa viikonloppuisin ja koulun jälkeen\nKäsittelen käteistä, täytän hyllyjä ja pidän esillepanot siisteinä\nLuotettu avaamaan myymälä lauantai-aamuisin"
      },
      {
        "role": "Vapaaehtoinen tukiopettaja",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "Ohjasin nuorempia oppilaita matematiikassa kahdesti viikossa\nAutoin järjestämään kesän lukuohjelman 40 lapselle"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Lukion päättötodistus",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "Keskiarvo 3,6. Kunniataulukossa 3 vuotta. Väittelyjoukkueen kapteeni."
      }
    ],
    "skills": "Asiakaspalvelu\nKassankäsittely\nTiimityö\nAjanhallinta\nMicrosoft Office\nJulkinen puhuminen (väittelyjoukkue)",
    "languages": "Englanti (sujuva)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Tuore valmistunut \u2014 Liiketalouden hallinto",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Vastavalmistunut liiketalouden hallinnon ammattilainen, jolla on harjoittelukokemusta markkinoinnista ja toiminnoista. Järjestin kampuksen liiketoimintakilpailun 200 osallistujalle ja suoritin 6 kuukauden harjoittelun, jossa puol itin raportointiajan. Halukas aloittamaan kokopäiväisen uran ja oppimaan nopeasti.",
    "experience": [
      {
        "role": "Markkinointiharjoittelija",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "Veti yrityksen sosiaalisen median tilejä ja kasvatti seuraajamäärän 2,000:sta 6,500:een\nRakensi raportointinäkymän, joka puolitti viikoittaisen raportointiajan\nKirjoitti 20 blogikirjoitusta, jotka keräsivät 15,000+ lukukertaa"
      },
      {
        "role": "Tapahtumien vapaaehtoisten vetäjä",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "toukokuu 2025",
        "current": false,
        "points": "Järjestin liiketoimintakilpailun, jossa oli 200 osallistujaa ja 12 tuomaria\nHallinnoin 5 000 dollarin budjettia ja 8 vapaaehtoisen tiimiä"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Liiketalouden hallinto",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List -listalla 2 vuotta. Viimeisen vuoden projekti pienyritysten markkinoinnista."
      }
    ],
    "skills": "Sosiaalisen median markkinointi\nExcel ja Google Sheets\nEsiintymistaidot\nTapahtumien järjestäminen\nTiimityö\nData-analyysin perusteet",
    "languages": "Englanti (sujuva)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Nuorempi markkinointityöntekijä",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Nuorempi markkinointityöntekijä, jolla on 2 vuoden kokemus sisällöstä, sähköpostista ja sosiaalisesta mediasta. Kasvatin asiakkaan uutiskirjeen 1 000:sta 4 000 tilaajaan ja toteutan kampanjoita, joiden avausprosentti on keskimäärin 22 %. Valmis ottamaan enemmän vastuuta ja suuremman asiakassalkun.",
    "experience": [
      {
        "role": "Nuorempi markkinointityöntekijä",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "Kasvatin asiakkaan uutiskirjeen 1 000:sta 4 000 tilaajaan 14 kuukaudessa\nKirjoitan ja ajastan 12 sosiaalisen median julkaisua viikossa 4 asiakkaalle\nToteutan sähköpostikampanjoita, joiden avausaste on keskimäärin 22 %\nRaportoin kampanjatulokset asiakkaille kuukausittain"
      },
      {
        "role": "Markkinointiharjoittelija",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "Kirjoitin tuotekuvaukset 200+ tuotteelle yrityksen verkkosivustolla\nAutoin toteuttamaan kevätale­kampanjan, joka nosti verkkotilauksia 15 %"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Viestintä",
        "start": "2020",
        "end": "2024",
        "notes": "Keskiarvo 3,4. Opintoja digitaalisesta markkinoinnista ja mediatekstien kirjoittamisesta."
      }
    ],
    "skills": "Sisällöntuotanto\nSähköpostimarkkinointi (Mailchimp)\nSosiaalisen median hallinta\nGoogle Analytics\nCanva\nAsiakasraportointi",
    "languages": "Englanti (sujuva)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Toimintojen esimies",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Toimintojen esimies, jolla on 8 vuoden kokemus 20-30 hengen varastotiimien johtamisesta. Vähensin keräilyvirheitä 30 %, nostin täsmällisen lähettämisen 90 %:sta 97 %:iin ja koulutin 15 uutta aloittajaa. Valmis toimintopäällikön rooliin suuremmalla toimipaikalla ja budjetilla.",
    "experience": [
      {
        "role": "Toimintojen esimies",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "maaliskuu 2021",
        "end": "",
        "current": true,
        "points": "Ohjaan 25 varastotyöntekijää 2 vuorossa 90 000 neliöjalan toimipaikassa\nVähensin keräilyvirheitä 30 % uusilla tarkistusrutiineilla ja viivakoodinluvulla\nNostin täsmällisen lähettämisen 90 %:sta 97 %:iin 2 vuodessa\nKoulutin 15 uutta työntekijää ja ylensin 3 tiiminvetäjän tehtäviin"
      },
      {
        "role": "Tiiminvetäjä",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "Johdin 10 kerääjän ja pakkaajan tiimiä yövuorossa\nOtatin käyttöön työvuorolistan, joka vähensi ylitöitä 20 % ilman määräaikojen lipsumista\nPidin turvallisuusinfot ja pidin tiimin tapaturmattomana 2 vuotta"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Toimitusketjun hallinta",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Tiimin johtaminen (25 henkilöstöä)\nVarastotoiminnot\nProsessien parantaminen\nTurvallisuusjohtaminen\nVarastonhallinta\nWMS ja Excel",
    "languages": "Englanti (sujuva)\nHindi (keskustelutaso)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Kokenut projektipäällikkö",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Kokenut projektipäällikkö, jolla on 14 vuoden kokemus jopa 8 miljoonan dollarin ohjelmistoprojektien toteuttamisesta. Johdin yli 30 projektia 92 %:n täsmällisyydellä, rakensin PMO:n tyhjästä ja mentoroin 10 projektipäällikköä. Tunnettu rauhallisesta toteutuksesta paineen alla ja rehellisestä raportoinnista johdolle.",
    "experience": [
      {
        "role": "Kokenut projektipäällikkö",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "Toimittaa ohjelmistoprojekteja arvoltaan jopa $8M, 92% aikataulussa pysyen\nRakensi yrityksen PMO:n tyhjästä: mallit, raportointi ja hallintotapa\nMentoroi 10 projektipäällikköä ja vetää kuukausittaista projektipäällikköyhteisöä\nRaportoi suoraan teknologiajohtajalle 40 hengen ohjelmasta"
      },
      {
        "role": "Projektipäällikkö",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "joulukuu 2018",
        "current": false,
        "points": "Hallinnoin yli 20 projektia vähittäiskaupan ja terveydenhuollon asiakkaille\nOtatin käyttöön ketteriä käytäntöjä, jotka lyhensivät toimitusaikaa 25 %\nKasvatin 2 avainasiakkuuden vuotuisen liikevaihdon $500k:sta $2M:aan"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Tietojärjestelmät",
        "start": "2008",
        "end": "2012",
        "notes": "PMP-sertifioitu (2015). Sertifioitu ScrumMaster. MBA-opintoja (2018-2019, kesken)."
      }
    ],
    "skills": "Ohjelma- ja projektitoimitus\nPMO:n perustaminen ja hallintotapa\nAgile ja Waterfall\nBudjetin hallinta ($8M)\nJohdon raportointi\nTiimin mentorointi",
    "languages": "Englanti (sujuva)\nEspanja (keskustelutaso)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Operatiivinen johtaja",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Operatiivinen johtaja, jolla on 18 vuoden kokemus toimintojen laajentamisesta vähittäiskaupan ja logistiikan yrityksissä. Kasvatin 200 hengen toiminnon 900 henkeen 6 toimipaikassa, nostin EBITDA-marginaalin 8 %:sta 14 %:iin ja johdin 2 yritysostoa. Kokemusta hallitustason raportoinnista ja sijoittajasuhteista.",
    "experience": [
      {
        "role": "Operatiivinen johtaja",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Johdan toimintoja 900 ihmiselle 6 toimipaikassa ja 180 miljoonan dollarin budjetilla\nNostin EBITDA-marginaalin 8 %:sta 14 %:iin 3 vuodessa\nJohdin 2 yritysostoa ja integroin molemmat tiimit 6 kuukauden kuluessa\nRaportoin hallitukselle kuukausittain toiminnoista, riskeistä ja kasvusta"
      },
      {
        "role": "Toimintojen varajohtaja",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "joulukuu 2020",
        "current": false,
        "points": "Laajensin toiminnot 200:sta 600 ihmiseen 4 toimipaikassa\nAvasin 3 jakelukeskusta ajallaan ja alle budjetin\nRakensin johtotiimin, joka pyörittää liiketoimintaa yhä tänään"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Liiketalouden hallinto",
        "start": "2010",
        "end": "2012",
        "notes": "Kandidaatin tutkinto taloustieteessä, NYU (2006). Hallitustyöskentelyn kurssi (2020)."
      }
    ],
    "skills": "Toiminta laajassa mittakaavassa (900 henkilöä)\nTulosvastuu ($180M)\nYritysfuusiot ja -ostot\nHallitusraportointi\nKasvustrategia\nJohtoryhmän rakentaminen",
    "languages": "Englanti (sujuva)",
    "template": "executive"
  }
};
});
