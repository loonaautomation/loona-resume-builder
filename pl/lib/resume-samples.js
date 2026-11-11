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
      "title": "Pielęgniarka dyplomowana",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Pielęgniarka dyplomowana z 6-letnim doświadczeniem na oddziałach medyczno-chirurgicznych i telemetrii. Biegła w ocenie pacjentów, terapii dożylnej, podawaniu leków i elektronicznej dokumentacji medycznej. Znana ze spokojnej, jasnej komunikacji z pacjentami i rodzinami w sytuacjach wysokiego napięcia.",
    "experience": [
      {
        "role": "Pielęgniarka dyplomowana",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "cze 2021",
        "end": "",
        "current": true,
        "points": "Opieka nad 5-6 pacjentami na dyżur na 32-łóżkowym oddziale medyczno-chirurgicznym, w tym ocena stanu, podawanie leków i pielęgnacja ran\nSzkolenie i mentoring 4 nowych pielęgniarek-absolwentek, ze skróceniem czasu ich orientacji o 2 tygodnie\nOgraniczenie błędów lekowych na oddziale o 18% dzięki wprowadzeniu rutyny podwójnej kontroli przy przekazywaniu\nDokładne dokumentowanie całej opieki w elektronicznej dokumentacji medycznej Epic"
      },
      {
        "role": "Pielęgniarka oddziałowa",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "sie 2019",
        "end": "maj 2021",
        "current": false,
        "points": "Prowadzenie triażu dla 40+ pacjentów zgłaszających się dziennie, z priorytetem dla pilnych przypadków opieki tego samego dnia\nWykonywanie szczepień i badań przesiewowych podczas comiesięcznych akcji społecznych\nKoordynowanie skierowań do specjalistów i monitorowanie wyników badań"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Pielęgniarstwo",
        "start": "2015",
        "end": "2019",
        "notes": "Licencja pielęgniarki dyplomowanej (Teksas). Certyfikaty BLS i ACLS."
      }
    ],
    "skills": "Ocena pacjenta\nTerapia dożylna i podawanie leków\nElektroniczna dokumentacja medyczna (Epic)\nMonitoring telemetryczny\nEdukacja pacjentów i rodzin\nKontrola zakażeń",
    "languages": "Angielski (biegły)\nHiszpański (komunikatywny)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Programista",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Programista z 5-letnim doświadczeniem w budowaniu aplikacji internetowych w Python i JavaScript. Wdrożyłem funkcje używane przez 200,000+ użytkowników, skróciłem czasy odpowiedzi API o 40% i poprowadziłem migrację monolitu do mikrousług. Mocne strony: testowanie, przegląd kodu i jasna dokumentacja.",
    "experience": [
      {
        "role": "Programista",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Tworzenie i utrzymywanie funkcji internetowych dla klientów w Python (Django) i React, obsługujących 200,000+ użytkowników\nSkrócenie średniego czasu odpowiedzi API z 850 ms do 500 ms dzięki buforowaniu i naprawie wolnych zapytań\nPoprowadzenie migracji usługi rozliczeniowej do mikrousług bez przestojów\nPrzeglądanie 10+ pull requestów tygodniowo i mentoring 2 młodszych programistów"
      },
      {
        "role": "Młodszy programista",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "lip 2020",
        "end": "lut 2022",
        "current": false,
        "points": "Zbudowanie wewnętrznych pulpitów w JavaScript, które zastąpiły ręczne arkusze dla 3 zespołów\nNapisanie testów automatycznych, które podniosły pokrycie z 45% do 78%\nNaprawienie 120+ błędów w produkcie w pierwszym roku"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Informatyka",
        "start": "2016",
        "end": "2020",
        "notes": "Kursy z baz danych, algorytmów i systemów operacyjnych."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript i React\nPostgreSQL i Redis\nREST API i mikrousługi\nGit i CI/CD\nTesty automatyczne (pytest, Jest)",
    "languages": "Angielski (biegły)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Nauczyciel szkoły podstawowej",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Nauczyciel szkoły podstawowej z 7-letnim doświadczeniem w nauczaniu klas 3-5. Biegły w nauczaniu zróżnicowanym, zarządzaniu klasą i komunikacji z rodzicami. Podniosłem biegłość czytania w mojej klasie z 58% do 81% w ciągu dwóch lat szkolnych.",
    "experience": [
      {
        "role": "Nauczyciel szkoły podstawowej (klasa 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "sie 2020",
        "end": "",
        "current": true,
        "points": "Nauczanie czytania, matematyki i przedmiotów przyrodniczych w klasie liczącej 26 uczniów, w tym 5 z indywidualnymi planami nauczania\nPodniesienie biegłości czytania w klasie z 58% do 81% w dwa lata dzięki grupom czytania z przewodnikiem\nProwadzenie cotygodniowego newslettera dla rodziców i semestralnych spotkań o postępach dla każdej rodziny\nProwadzenie szkolnego klubu czytelniczego dla 40 uczniów klas 3-5"
      },
      {
        "role": "Nauczyciel szkoły podstawowej (klasa 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "sie 2018",
        "end": "cze 2020",
        "current": false,
        "points": "Planowanie i prowadzenie codziennych lekcji dla 24 uczniów ze wszystkich przedmiotów podstawowych\nWprowadzenie rutyn zachowania, które ograniczyły zakłócenia w klasie o połowę\nZorganizowanie targów naukowych rocznika z udziałem 120 uczniów i 80 rodziców"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Edukacja elementarna",
        "start": "2014",
        "end": "2018",
        "notes": "Stanowa licencja nauczycielska (Ohio, klasy K-5). Uprawnienie do nauczania czytania."
      }
    ],
    "skills": "Nauczanie zróżnicowane\nzarządzanie klasą\ngrupy czytania z przewodnikiem\nkomunikacja z rodzicami\nplanowanie lekcji\nGoogle Classroom",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Starszy księgowy",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA z 8-letnim doświadczeniem w zamknięciach miesiąca, raportowaniu finansowym i audycie wewnętrznym. Zamknięcie ksiąg o 3 dni szybciej dzięki przebudowie procesu uzgodnień oraz wykrycie $240,000 możliwych do odzyskania nadpłat w jednym roku audytu. Mocne strony: Excel, QuickBooks i systemy ERP.",
    "experience": [
      {
        "role": "Starszy księgowy",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Odpowiedzialność za zamknięcie miesiąca jednostki biznesowej o wartości $40M, kończone o 3 dni szybciej po przebudowie uzgodnień\nPrzygotowywanie miesięcznych sprawozdań finansowych i raportów odchyleń dla wyższej kadry kierowniczej\nWykrycie $240,000 możliwych do odzyskania nadpłat dla dostawców podczas audytu wewnętrznego w 2024\nNadzorowanie 2 księgowych i przeglądanie ich zapisów księgowych"
      },
      {
        "role": "Księgowy",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "cze 2017",
        "end": "gru 2020",
        "current": false,
        "points": "Przygotowywanie zeznań podatkowych i sprawozdań finansowych dla 25 klientów z małych firm\nWsparcie przy audytach 8 klientów, testowanie kontroli i dokumentowanie ustaleń\nAutomatyzacja ewidencji środków trwałych w Excelu, oszczędność 6 godzin miesięcznie"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Rachunkowość",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Członek AICPA."
      }
    ],
    "skills": "Zamknięcie miesiąca i uzgodnienia\nRaportowanie finansowe i analiza odchyleń\nAudyt wewnętrzny\nExcel (tabele przestawne, VLOOKUP)\nQuickBooks i SAP\nPrzygotowywanie zeznań podatkowych",
    "languages": "Angielski (biegły)\nMandaryński (komunikatywny)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Kierowca ciężarówki CDL klasa A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Kierowca CDL klasa A z 9-letnim doświadczeniem w transporcie dalekobieżnym i regionalnym. Ponad 900,000 mil bez wypadku, wskaźnik dostaw na czas 99% oraz doświadczenie z ładunkami chłodniczymi, platformowymi i suchymi. Czysta historia jazdy, uprawnienia HazMat i na cysterny.",
    "experience": [
      {
        "role": "Kierowca dalekobieżny",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "kwi 2019",
        "end": "",
        "current": true,
        "points": "Przejeżdżanie 2,800+ mil tygodniowo na trasach regionalnych przez Teksas, Oklahomę i Nowy Meksyk\nUtrzymywanie wskaźnika dostaw na czas 99% przy 1,100+ ładunkach rocznie\nPrzewożenie ładunków chłodniczych i suchych; codzienne kontrole przed trasą i po trasie\nŁącznie ponad 900,000 mil bez wypadku"
      },
      {
        "role": "Kierowca samochodu dostawczego",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar 2016",
        "end": "mar 2019",
        "current": false,
        "points": "Dostarczanie materiałów budowlanych na 15-20 budów dziennie w rejonie Dallas-Fort Worth\nObsługa wózków widłowych i zabezpieczanie ładunków platformowych zgodnie ze standardami DOT\nUtrzymywanie dokładnej dokumentacji dostaw i dzienników bez żadnych naruszeń DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificate",
        "field": "Kierowca zawodowy (CDL klasa A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL klasa A z uprawnieniami HazMat i na cysterny. Czysta historia jazdy."
      }
    ],
    "skills": "Transport dalekobieżny i regionalny\nŁadunki chłodnicze i platformowe\nPrzepisy DOT i dzienniki\nKontrole przed trasą\nPlanowanie tras (GPS, ELD)\nObsługa wózka widłowego",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Sprzedawca detaliczny",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Sprzedawca detaliczny z 4-letnim doświadczeniem w sklepach z elektroniką i odzieżą. Stale w 3 najlepszych sprzedawców zespołu, ze wskaźnikiem dosprzedaży gwarancji i akcesoriów 32%. Życzliwy, szybki przy kasie i zaufany przy otwieraniu i zamykaniu sklepu.",
    "experience": [
      {
        "role": "Starszy sprzedawca",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "lut 2022",
        "end": "",
        "current": true,
        "points": "Sprzedaż elektroniki i akcesoriów 60+ klientom dziennie; zaliczanie się do 3 najlepszych sprzedawców sklepu przez 8 kwartałów z rzędu\nOsiągnięcie 32% wskaźnika dosprzedaży gwarancji i akcesoriów, najwyższego w zespole\nSzkolenie 6 nowych pracowników w zakresie kasy, magazynu i standardów obsługi klienta\nZaufany posiadacz kluczy: otwieranie i zamykanie sklepu oraz rozliczanie gotówki"
      },
      {
        "role": "Sprzedawca",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "cze 2021",
        "end": "sty 2022",
        "current": false,
        "points": "Pomaganie klientom w wyborze strojów i rozmiarów na ruchliwej sali sprzedaży\nUtrzymywanie ekspozycji w porządku i uzupełnianie półek podczas każdej zmiany\nUprzejma obsługa zwrotów i wymian, utrzymywanie skarg na minimalnym poziomie"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Dyplom Associate Degree",
        "field": "Biznes",
        "start": "2019",
        "end": "2021",
        "notes": "Studia w niepełnym wymiarze przy pracy w handlu detalicznym."
      }
    ],
    "skills": "Obsługa klienta i dosprzedaż\nObsługa gotówki i systemów POS\nZnajomość produktów (elektronika)\nZarządzanie zapasami\nOtwieranie i zamykanie sklepu\nSzkolenie zespołu",
    "languages": "Angielski (biegły)\nHiszpański (biegły)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Przedstawiciel obsługi klienta",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Przedstawiciel obsługi klienta z 5-letnim doświadczeniem w obsłudze telefonicznej, e-mailowej i na czacie na żywo. Rozwiązuję 45+ spraw dziennie z wynikiem satysfakcji 96% i wskaźnikiem rozwiązania przy pierwszym kontakcie 88%. Spokojny wobec rozzłoszczonych klientów i szybki w znajdowaniu rozwiązania.",
    "experience": [
      {
        "role": "Przedstawiciel obsługi klienta",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "maj 2021",
        "end": "",
        "current": true,
        "points": "Obsługa 45+ spraw telefonicznych, e-mailowych i na czacie dziennie dotyczących rozliczeń, zamówień i usterek technicznych\nUtrzymywanie wyniku satysfakcji klienta 96% i wskaźnika rozwiązania przy pierwszym kontakcie 88%\nŁagodzenie trudnych rozmów i przekuwanie skarg w powracających klientów\nSzkolenie 5 nowych agentów w zakresie skryptów, systemów i tonu"
      },
      {
        "role": "Agent wsparcia",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "wrz 2019",
        "end": "kwi 2021",
        "current": false,
        "points": "Odpowiadanie na e-maile i czaty klientów dotyczące zamówień, zwrotów i refundacji\nUtrzymywanie średniego czasu pierwszej odpowiedzi poniżej 2 godzin\nNapisanie 20 artykułów centrum pomocy, które ograniczyły powtarzające się pytania o jedną czwartą"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Dyplom Associate Degree",
        "field": "Administracja biznesowa",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Wsparcie telefoniczne, e-mailowe i na czacie na żywo\nObsługa skarg i deeskalacja\nSystemy CRM (Zendesk, Salesforce)\nZapytania o rozliczenia i zamówienia\nPisanie 55 słów/min\nSzkolenie zespołu",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Kierownik operacyjny",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Kierownik operacyjny z 12-letnim doświadczeniem w prowadzeniu zespołów do 80 osób w magazynowaniu i dystrybucji. Obniżyłem koszty przetwarzania zamówień o 22%, podniosłem terminowość dostaw z 91% do 98% i otworzyłem dwie nowe lokalizacje na czas i poniżej budżetu.",
    "experience": [
      {
        "role": "Kierownik operacyjny",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "lut 2020",
        "end": "",
        "current": true,
        "points": "Prowadzenie centrum dystrybucyjnego o powierzchni 120,000 stóp kwadratowych z 80 pracownikami na 3 zmianach\nObniżenie kosztów przetwarzania zamówień o 22% dzięki przeprojektowaniu ścieżek kompletacji i grafików zmian\nPodniesienie terminowości dostaw z 91% do 98% w 18 miesięcy\nOtwarcie 2 nowych lokalizacji na czas i 8% poniżej budżetu"
      },
      {
        "role": "Kierownik magazynu",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "cze 2013",
        "end": "sty 2020",
        "current": false,
        "points": "Nadzorowanie 25 pracowników magazynu i codziennej wysyłki 4,000+ zamówień\nWprowadzenie skanowania kodów kreskowych, ograniczające błędy kompletacji o 35%\nProwadzenie szkoleń BHP, które utrzymały budowę bez wypadków przez 3 lata"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Zarządzanie operacjami",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Przywództwo zespołowe (do 80 pracowników)\nMagazynowanie i dystrybucja\nDoskonalenie procesów\nBudżetowanie i kontrola kosztów\nZarządzanie bezpieczeństwem\nSystemy ERP i WMS",
    "languages": "Angielski (biegły)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Licencjonowany elektryk",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Licencjonowany czeladnik elektryk z 8-letnim doświadczeniem w pracach mieszkaniowych i komercyjnych. Biegły w okablowaniu, modernizacjach rozdzielnic, oświetleniu i wykrywaniu usterek, z czystą historią bezpieczeństwa przy 400+ zleceniach. Znajomość przepisów NEC i doświadczenie w nadzorowaniu uczniów.",
    "experience": [
      {
        "role": "Czeladnik elektryk",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar 2019",
        "end": "",
        "current": true,
        "points": "Realizacja 400+ zleceń mieszkaniowych i komercyjnych: okablowanie, modernizacje rozdzielnic, oświetlenie i ładowarki EV\nSzybkie diagnozowanie i naprawianie usterek, ze wskaźnikiem napraw przy pierwszej wizycie 92%\nNadzorowanie 2 uczniów i zatwierdzanie ich pracy zgodnie z przepisami\nUtrzymywanie czystej historii bezpieczeństwa bez wypadków powodujących absencję"
      },
      {
        "role": "Uczeń elektryka",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "cze 2016",
        "end": "lut 2019",
        "current": false,
        "points": "Pomoc licencjonowanym elektrykom przy instalacjach w nowych budynkach i wymianach okablowania\nNauka gięcia rur instalacyjnych, przeciągania kabli i montażu rozdzielnic\nUkończenie 8,000 godzin praktyk i zdanie egzaminu czeladniczego za pierwszym razem"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificate",
        "field": "Technologia elektryczna",
        "start": "2015",
        "end": "2016",
        "notes": "Licencja czeladnika elektryka (Kolorado). Certyfikat OSHA 30."
      }
    ],
    "skills": "Okablowanie mieszkaniowe i komercyjne\nmodernizacje rozdzielnic i ładowarki EV\nwykrywanie usterek i testowanie\nzgodność z przepisami NEC\ngięcie rur instalacyjnych i przeciąganie kabli\nnadzór nad uczniami",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analityk finansowy",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analityk finansowy z 6-letnim doświadczeniem w budżetowaniu, prognozowaniu i analizie inwestycji. Zbudowałem modele prognostyczne, które ograniczyły odchylenia budżetowe o 30% i wsparły decyzje inwestycyjne o wartości $50M. Mocne strony: Excel, SQL i modelowanie finansowe.",
    "experience": [
      {
        "role": "Analityk finansowy",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "kwi 2021",
        "end": "",
        "current": true,
        "points": "Tworzenie miesięcznych prognoz i rocznych budżetów dla portfela o wartości $120M\nOgraniczenie odchyleń budżetowych o 30% dzięki modelowi prognozowania opartemu na czynnikach\nWspieranie decyzji inwestycyjnych o wartości $50M poprzez wycenę i analizę scenariuszową\nComiesięczne prezentowanie ustaleń dyrektorowi finansowemu i kierownikom działów"
      },
      {
        "role": "Młodszy analityk finansowy",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "lip 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Przygotowywanie cotygodniowych raportów wydajności dla 12 oddziałów\nAutomatyzacja raportowania w Excelu, oszczędność 10 godzin tygodniowo\nWsparcie zespołu kredytowego w analizie portfela kredytów"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finanse",
        "start": "2015",
        "end": "2019",
        "notes": "Kandydat na CFA poziom II. Kursy z wyceny i finansów przedsiębiorstw."
      }
    ],
    "skills": "Modelowanie finansowe i prognozowanie\nBudżetowanie i analiza odchyleń\nWycena (DCF, porównania)\nExcel (zaawansowany) i SQL\nBloomberg Terminal\nWizualizacja danych (Power BI)",
    "languages": "Angielski (biegły)\nHindi (biegły)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Inżynier budownictwa",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Inżynier budownictwa (PE) z 7-letnim doświadczeniem w projektowaniu infrastruktury drogowej i wodnej. Kierował projektem poszerzenia autostrady na odcinku 12 mil oraz systemem wód opadowych obsługującym 8,000 domów. Biegły w AutoCAD Civil 3D, kosztorysowaniu i koordynacji pozwoleń.",
    "experience": [
      {
        "role": "Inżynier budownictwa",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Kierowanie projektem poszerzenia autostrady na odcinku 12 mil, od pomiarów po dokumentację budowlaną\nZaprojektowanie systemu wód opadowych obsługującego 8,000 domów, zatwierdzonego przez miasto za pierwszym razem\nKoordynowanie pozwoleń z 4 instytucjami i zarządzanie budżetem projektowym $2.5M\nPrzeglądanie i pieczętowanie rysunków jako licencjonowany Professional Engineer"
      },
      {
        "role": "Młodszy inżynier budownictwa",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "lip 2018",
        "end": "gru 2020",
        "current": false,
        "points": "Przygotowywanie planów niwelacji i odwodnienia dla 20+ inwestycji mieszkaniowych\nWykonywanie kosztorysów i przedmiarów dla projektów drogowych\nUczestniczenie w wizjach lokalnych i sporządzanie raportów z postępu prac"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Inżynieria lądowa",
        "start": "2014",
        "end": "2018",
        "notes": "Licencja Professional Engineer (Waszyngton). EIT zdany w 2018."
      }
    ],
    "skills": "Projektowanie dróg i odwodnień\nAutoCAD Civil 3D\nmodelowanie wód opadowych\nkosztorysowanie\nkoordynacja pozwoleń\nharmonogramowanie projektów (MS Project)",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Inżynier mechanik",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Inżynier mechanik z 6-letnim doświadczeniem w projektowaniu systemów HVAC i urządzeń produkcyjnych. Ograniczyłem zużycie energii o 18% w 3 zakładach dzięki przeprojektowanym kanałom i sterowaniu oraz poprowadziłem przeprojektowanie maszyny, które podniosło wydajność o 25%. Biegły w SolidWorks, FEA i analizie termicznej.",
    "experience": [
      {
        "role": "Inżynier mechanik",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "lut 2021",
        "end": "",
        "current": true,
        "points": "Projektowanie HVAC i urządzeń produkcyjnych dla 3 zakładów zatrudniających 400+ pracowników\nOgraniczenie zużycia energii o 18% dzięki przeprojektowaniu kanałów wentylacyjnych i sekwencji sterowania\nPoprowadzenie przeprojektowania maszyny, które podniosło wydajność o 25% bez dodatkowej powierzchni\nWykonywanie analiz FEA i termicznych nowych części przed prototypowaniem"
      },
      {
        "role": "Młodszy inżynier mechanik",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "sie 2019",
        "end": "sty 2021",
        "current": false,
        "points": "Modelowanie części i złożeń w SolidWorks dla klientów motoryzacyjnych\nPrzygotowywanie rysunków, zestawień materiałów i raportów z testów\nWspieranie budowy prototypów i rozwiązywanie problemów dopasowania na hali produkcyjnej"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Inżynieria mechaniczna",
        "start": "2015",
        "end": "2019",
        "notes": "Kursy z termodynamiki, mechaniki płynów i projektowania maszyn."
      }
    ],
    "skills": "Projektowanie HVAC\nSolidWorks i AutoCAD\nFEA i analiza termiczna\nProjektowanie maszyn\nEfektywność energetyczna\nGD&T i tolerancje",
    "languages": "Angielski (biegły)\nKoreański (komunikatywny)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Inżynier elektryk",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Inżynier elektryk z 6-letnim doświadczeniem w systemach wbudowanych i energoelektronice. Zaprojektowałem płyty sterujące używane dziś w 50,000+ urządzeniach i obniżyłem koszt płytki o 22% dzięki przeprojektowaniu komponentów. Biegły w Altium, C, testowaniu oprogramowania układowego i zgodności EMC.",
    "experience": [
      {
        "role": "Inżynier elektryk",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Projektowanie wbudowanych płyt sterujących używanych w 50,000+ urządzeniach rocznie\nObniżenie kosztu płytki o 22% dzięki przeprojektowaniu stopnia zasilania i znalezieniu zamienników\nKierowanie testami zgodności EMC, zdanymi za pierwszym razem dla 4 linii produktów\nPisanie i przeglądanie oprogramowania układowego w C dla mikrokontrolerów"
      },
      {
        "role": "Młodszy inżynier elektryk",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "lip 2019",
        "end": "lut 2021",
        "current": false,
        "points": "Projektowanie układów PCB w Altium dla klientów konsumenckich i przemysłowych\nBudowanie i testowanie prototypów, debugowanie usterek sprzętowych\nPisanie procedur testowych, które skróciły czas testów produkcyjnych o 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Elektrotechnika",
        "start": "2015",
        "end": "2019",
        "notes": "Kursy z systemów wbudowanych, energoelektroniki i przetwarzania sygnałów."
      }
    ],
    "skills": "Systemy wbudowane i projektowanie PCB\nAltium Designer\nC i oprogramowanie układowe\nEnergoelektronika\nTestowanie zgodności EMC\nOscyloskopy i instrumenty laboratoryjne",
    "languages": "Angielski (biegły)\nGudżarati (komunikatywny)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analityk danych",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analityk danych z 4-letnim doświadczeniem w przekształcaniu danych sprzedażowych i operacyjnych w decyzje. Zbudowałem pulpity używane przez 60+ menedżerów, skróciłem miesięczne raportowanie z 3 dni do 4 godzin i wykryłem błąd cenowy o wartości $180,000 rocznie. Mocne strony: SQL, Excel i Power BI.",
    "experience": [
      {
        "role": "Analityk danych",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "sty 2022",
        "end": "",
        "current": true,
        "points": "Tworzenie pulpitów Power BI używanych przez 60+ menedżerów sklepów i regionów\nSkrócenie miesięcznego raportowania z 3 dni do 4 godzin dzięki zautomatyzowanym potokom SQL\nWykrycie błędu cenowego o wartości $180,000 rocznie dzięki audytowi danych promocyjnych\nComiesięczne prezentowanie ustaleń zespołowi handlowemu"
      },
      {
        "role": "Młodszy analityk danych",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "sie 2020",
        "end": "gru 2021",
        "current": false,
        "points": "Czyszczenie i łączenie danych dostaw z 4 systemów w jedną tabelę raportową\nZbudowanie trackerów w Excelu, które zastąpiły ręczne zliczenia dla 2 zespołów\nCodzienne odpowiadanie na doraźne pytania menedżerów operacyjnych dotyczące danych"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Statystyka",
        "start": "2016",
        "end": "2020",
        "notes": "Kursy z regresji, baz danych i wizualizacji danych."
      }
    ],
    "skills": "SQL i czyszczenie danych\nPower BI i Tableau\nExcel (zaawansowany)\nPython (pandas)\nProjektowanie pulpitów\nPodstawy testów A/B",
    "languages": "Angielski (biegły)\nWietnamski (komunikatywny)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Specjalista data science",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Specjalista data science z 5-letnim doświadczeniem w budowaniu modeli uczenia maszynowego dla e-commerce. Wdrożony przeze mnie model rekomendacji podniósł przychód na wizytę o 12%, a model rezygnacji oznacza dziś 80% zagrożonych klientów. Mocne strony: Python, SQL i wdrażanie modeli.",
    "experience": [
      {
        "role": "Specjalista data science",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "lut 2022",
        "end": "",
        "current": true,
        "points": "Wdrożenie modelu rekomendacji, który podniósł przychód na wizytę o 12%\nZbudowanie modelu rezygnacji, który wykrywa 80% zagrożonych klientów z miesięcznym wyprzedzeniem\nWdrażanie modeli na produkcję z potokami monitorowania i ponownego uczenia\nComiesięczne prezentowanie wyników modeli zespołom produktowym i marketingowym"
      },
      {
        "role": "Młodszy specjalista data science",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "lip 2020",
        "end": "sty 2022",
        "current": false,
        "points": "Zbudowanie modeli prognostycznych dla 3 klientów detalicznych z dokładnością 90%+\nCzyszczenie i przygotowywanie zbiorów danych liczących 10M+ wierszy do modelowania\nPisanie dokumentacji, aby klienci mogli sami ponownie uruchamiać modele"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Data science",
        "start": "2018",
        "end": "2020",
        "notes": "Praca dyplomowa o systemach rekomendacyjnych. Licencjat (BS) z matematyki (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nUczenie maszynowe i statystyka\nSQL i Spark\nWdrażanie modeli (Docker, AWS)\nTesty A/B\nWizualizacja danych",
    "languages": "Angielski (biegły)\nArabski (biegły)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Twórca stron internetowych",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Twórca stron internetowych z 4-letnim doświadczeniem w budowaniu szybkich, dostępnych witryn w HTML, CSS i JavaScript. Przebudowałem kasę sklepu, która podniosła konwersje o 18%, i utrzymuję 12 stron klientów z dostępnością 99.9%. Mocne strony: projektowanie responsywne, wydajność i podstawy SEO.",
    "experience": [
      {
        "role": "Twórca stron internetowych",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Tworzenie responsywnych stron w HTML, CSS, JavaScript i WordPress dla 12 klientów\nPrzebudowanie kasy sklepu, które podniosło konwersje o 18%\nSkrócenie średniego czasu ładowania strony z 4.2s do 1.8s dzięki optymalizacji obrazów i kodu\nUtrzymywanie dostępności wszystkich stron klientów na poziomie 99.9% dzięki monitoringowi i kopiom zapasowym"
      },
      {
        "role": "Młodszy twórca stron internetowych",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "cze 2021",
        "end": "lut 2022",
        "current": false,
        "points": "Budowanie stron docelowych i poprawianie błędów na 20+ stronach małych firm\nNauka Gita, projektowania responsywnego i podstaw SEO na projektach na żywo\nOdpowiadanie na e-maile klientów i aktualizowanie treści tego samego dnia"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Informatyka",
        "start": "2017",
        "end": "2021",
        "notes": "Kursy z tworzenia stron internetowych, baz danych i interakcji człowiek–komputer."
      }
    ],
    "skills": "HTML, CSS i JavaScript\nReact i WordPress\nProjektowanie responsywne\nOptymalizacja szybkości strony\nGit i GitHub\nPodstawowe SEO",
    "languages": "Angielski (biegły)\nHiszpański (biegły)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Grafik",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Grafik z 5-letnim doświadczeniem w brandingu, opakowaniach i projektowaniu dla mediów społecznościowych. Stworzył identyfikacje marek dla 25+ małych firm oraz przeprojektowanie opakowania, które podniosło sprzedaż z półki o 14%. Biegły w Adobe Illustrator, Photoshop i Figmie.",
    "experience": [
      {
        "role": "Grafik",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "sty 2022",
        "end": "",
        "current": true,
        "points": "Projektowanie identyfikacji marek, opakowań i kampanii społecznościowych dla 25+ klientów\nPrzeprojektowanie opakowania marki spożywczej podniosło sprzedaż z półki o 14%\nTworzenie 30+ materiałów społecznościowych tygodniowo na Instagram, TikTok i Facebook\nPrezentowanie koncepcji klientom i szybkie poprawianie na podstawie opinii"
      },
      {
        "role": "Młodszy grafik",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "lip 2020",
        "end": "gru 2021",
        "current": false,
        "points": "Projektowanie ulotek, menu i postów społecznościowych dla lokalnych restauracji i sklepów\nPrzygotowywanie plików gotowych do druku i sprawdzanie proofów z drukarniami\nZbudowanie biblioteki szablonów, która skróciła czas projektowania o jedną trzecią"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Projektowanie graficzne",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio w zakresie brandingu i projektowania opakowań."
      }
    ],
    "skills": "Adobe Illustrator i Photoshop\nFigma\nProjektowanie identyfikacji wizualnej marki\nProjektowanie opakowań\nProjektowanie dla mediów społecznościowych\nProdukcja poligraficzna",
    "languages": "Angielski (biegły)\nKoreański (komunikatywny)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Projektant UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Projektant UX z 5-letnim doświadczeniem w badaniu użytkowników i projektowaniu produktów mobilnych i internetowych. Przeprojektowałem przepływ wdrożeniowy, który ograniczył porzucenia o 35%, i przeprowadziłem 40+ testów użyteczności. Biegły w Figmie, badaniach użytkowników, makietach szkieletowych i prototypowaniu.",
    "experience": [
      {
        "role": "Projektant UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "lut 2022",
        "end": "",
        "current": true,
        "points": "Przeprojektowanie mobilnego wdrożenia, ograniczające porzucenia o 35% w 3 miesiące\nPrzeprowadzanie 40+ testów użyteczności i wywiadów z użytkownikami rocznie\nTworzenie makiet i prototypów w Figmie dla 2 zespołów produktowych\nCodzienna współpraca z inżynierami i menedżerami produktów przy dostarczaniu"
      },
      {
        "role": "Młodszy projektant UX",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "sie 2020",
        "end": "sty 2022",
        "current": false,
        "points": "Projektowanie ekranów i przepływów dla 5 aplikacji klientów\nPrzeprowadzanie pierwszych testów użyteczności i opisywanie ustaleń dla klientów\nZbudowanie biblioteki komponentów, która przyspieszyła przekazywanie projektów"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psychologia",
        "start": "2016",
        "end": "2020",
        "notes": "Certyfikat projektowania UX (General Assembly, 2020). Kursy z interakcji człowiek–komputer."
      }
    ],
    "skills": "Badania użytkowników i testy użyteczności\nMakiety szkieletowe i prototypowanie (Figma)\nArchitektura informacji\nSystemy projektowania\nMapowanie podróży klienta\nWarsztaty z interesariuszami",
    "languages": "Angielski (biegły)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Kierownik marketingu",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Kierownik marketingu z 8-letnim doświadczeniem w kampaniach B2B i konsumenckich. Zwiększyłem liczbę kwalifikowanych leadów o 60% w jeden rok, wprowadziłem linię produktów, która osiągnęła $3M sprzedaży w pierwszym roku, i zarządzam rocznym budżetem $500,000 w zespole 5 osób.",
    "experience": [
      {
        "role": "Kierownik marketingu",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Kierowanie zespołem 5 osób i rocznym budżetem marketingowym $500,000\nZwiększenie liczby kwalifikowanych leadów o 60% w jeden rok dzięki treściom i kampaniom płatnym\nWprowadzenie linii produktów, która osiągnęła $3M sprzedaży w pierwszym roku\nObniżenie kosztu pozyskania leada o 28% dzięki przebudowie targetowania kampanii"
      },
      {
        "role": "Specjalista ds. marketingu",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "cze 2017",
        "end": "lut 2021",
        "current": false,
        "points": "Prowadzenie kampanii e-mailowych do 80,000 subskrybentów ze wskaźnikiem otwarć 24%\nZarządzanie kontami społecznościowymi, które urosły z 5,000 do 40,000 obserwujących\nOrganizowanie 6 stoisk targowych rocznie, z których każde generowało 300+ leadów"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Kursy z zachowań konsumenckich, analityki i zarządzania marką."
      }
    ],
    "skills": "Strategia i planowanie kampanii\nMarketing treści i e-mail marketing\nReklama płatna (Google, Meta)\nAnalityka marketingowa (GA4)\nPrzywództwo zespołowe\nZarządzanie budżetem",
    "languages": "Angielski (biegły)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Kierownik projektów",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Kierownik projektów (PMP) z 7-letnim doświadczeniem w dostarczaniu projektów oprogramowania i budowlanych na czas i w budżecie. Zarządzałem 15 projektami o wartości do $4M, ze wskaźnikiem terminowej realizacji 94%. Biegły w Agile, zarządzaniu ryzykiem i komunikacji z interesariuszami.",
    "experience": [
      {
        "role": "Kierownik projektów",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Zarządzanie 15 projektami o wartości do $4M, ze wskaźnikiem terminowej realizacji 94%\nProwadzenie sprintów Agile dla 3 zespołów i cotygodniowe raportowanie postępów kadrze kierowniczej\nOgraniczenie przekroczeń w projektach o 30% dzięki wcześniejszym przeglądom ryzyka\nKoordynowanie dostawców, klientów i zespołów wewnętrznych w 4 strefach czasowych"
      },
      {
        "role": "Koordynator projektów",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "lip 2018",
        "end": "gru 2020",
        "current": false,
        "points": "Śledzenie harmonogramów, budżetów i pozwoleń dla 8 projektów budowlanych\nPrzygotowywanie raportów o statusie i notatek ze spotkań dla klientów\nRozwiązanie konfliktów harmonogramu, które zaoszczędziły 2 tygodnie przy budowie szkoły"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Administracja biznesowa",
        "start": "2014",
        "end": "2018",
        "notes": "Certyfikat PMP (2021). Certyfikowany ScrumMaster."
      }
    ],
    "skills": "Planowanie projektów i harmonogramowanie\nAgile i Scrum\nZarządzanie ryzykiem\nKontrola budżetu\nKomunikacja z interesariuszami\nMS Project i Jira",
    "languages": "Angielski (biegły)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Kierownik HR",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Kierownik HR z 9-letnim doświadczeniem w rekrutacji, relacjach pracowniczych i świadczeniach. Skróciłem czas rekrutacji z 45 do 28 dni, podniosłem retencję o 15% i prowadzę HR dla 250 pracowników w 3 lokalizacjach. Znajomość prawa pracy i polityk na poziomie CIPD.",
    "experience": [
      {
        "role": "Kierownik HR",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "lut 2020",
        "end": "",
        "current": true,
        "points": "Prowadzenie HR dla 250 pracowników w 3 lokalizacjach, z zespołem 3 osób\nSkrócenie czasu rekrutacji z 45 do 28 dni dzięki przebudowie procesu rozmów kwalifikacyjnych\nPodniesienie retencji o 15% dzięki nowemu programowi wdrożeniowemu i przeglądowemu\nObsługa relacji pracowniczych, skarg i aktualizacji polityk"
      },
      {
        "role": "Specjalista HR",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "cze 2016",
        "end": "sty 2020",
        "current": false,
        "points": "Rekrutowanie 120+ pracowników rocznie dla hoteli i restauracji\nPrzeprowadzanie kontroli płac i zapisów na świadczenia dla 400 pracowników\nRozwiązywanie sporów pracowniczych i utrzymywanie rotacji poniżej średniej branżowej"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Zasoby ludzkie",
        "start": "2012",
        "end": "2016",
        "notes": "Certyfikat SHRM-CP. Kursy z prawa pracy i zachowań organizacyjnych."
      }
    ],
    "skills": "Rekrutacja i wdrażanie\nRelacje pracownicze\nŚwiadczenia i płace\nPrawo pracy\nZarządzanie wydajnością\nHRIS (Workday, BambooHR)",
    "languages": "Angielski (biegły)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Prawnik współpracujący",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Prawnik współpracujący z 6-letnim doświadczeniem w sporach handlowych i prawie umów. Prowadził 40+ spraw, uzyskał wyrok w trybie uproszczonym w 8, sporządzał umowy o wartości $25M. Przyjęty do palestry stanu Illinois; biegły w badaniach prawnych, redagowaniu dokumentów i doradztwie dla klientów.",
    "experience": [
      {
        "role": "Prawnik współpracujący",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "wrz 2020",
        "end": "",
        "current": true,
        "points": "Prowadzenie 40+ spraw sporów handlowych od wniesienia do ugody\nWygranie wyroku w trybie uproszczonym w 8 sprawach i korzystne zawarcie ugód w kolejnych 20\nSporządzanie i negocjowanie umów o wartości do $25M\nDoradzanie klientom osobiście i pisemnie w zakresie ryzyka i strategii"
      },
      {
        "role": "Aplikant / referendarz prawny",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "sie 2019",
        "end": "sie 2020",
        "current": false,
        "points": "Badanie orzecznictwa i sporządzanie notatek dla 2 sędziów\nPrzeglądanie wniosków i przygotowywanie podsumowań dla sędziów przy 100+ rozprawach\nObserwowanie procesów i konferencji ugodowych w wydziałach cywilnych"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Prawo",
        "start": "2016",
        "end": "2019",
        "notes": "Przyjęty do palestry stanu Illinois (2019). Przegląd prawniczy, redaktor artykułów."
      }
    ],
    "skills": "Spory handlowe\nSporządzanie i negocjowanie umów\nBadania prawne (Westlaw, LexisNexis)\nDoradztwo dla klientów\nZeznania i postępowanie dowodowe\nPisma sądowe i procedura",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Farmaceuta kliniczny",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Farmaceuta kliniczny (PharmD) z 7-letnim doświadczeniem w farmacji szpitalnej i otwartej. Sprawdzam 100+ zleceń lekowych dziennie, ograniczyłem niepożądane zdarzenia lekowe o 25% dzięki nowemu protokołowi kontroli i doradzam pacjentom w bezpiecznym stosowaniu leków. Licencja stanu Pensylwania.",
    "experience": [
      {
        "role": "Farmaceuta kliniczny",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "sty 2020",
        "end": "",
        "current": true,
        "points": "Sprawdzanie 100+ zleceń lekowych dziennie pod kątem bezpieczeństwa, dawkowania i interakcji\nOgraniczenie niepożądanych zdarzeń lekowych o 25% dzięki nowemu protokołowi podwójnej kontroli\nDoradzanie lekarzom i pielęgniarkom w doborze leków dla pacjentów w złożonych przypadkach\nProwadzenie szpitalnych obchodów racjonalnej antybiotykoterapii dwa razy w tygodniu"
      },
      {
        "role": "Farmaceuta",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "lip 2018",
        "end": "gru 2019",
        "current": false,
        "points": "Wydawanie 200+ recept dziennie bez żadnych błędów w wydawaniu\nDoradzanie pacjentom w zakresie nowych leków, skutków ubocznych i przechowywania\nWykonywanie szczepień przeciw grypie i pomiarów ciśnienia krwi"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmacja",
        "start": "2014",
        "end": "2018",
        "notes": "Licencjonowany farmaceuta (Pensylwania). Certyfikowany specjalista farmakoterapii (BCPS)."
      }
    ],
    "skills": "Przegląd leków i bezpieczeństwo\nFarmakologia kliniczna\nDoradztwo dla pacjentów\nSystemy apteczne (Epic, PioneerRx)\nRacjonalna antybiotykoterapia\nUsługi szczepień",
    "languages": "Angielski (biegły)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Dentysta ogólny",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Dentysta ogólny (DDS) z 8-letnim doświadczeniem w stomatologii zachowawczej, estetycznej i profilaktycznej. Leczy 25+ pacjentów dziennie w praktyce liczącej 2,000 pacjentów, z wynikiem satysfakcji pacjentów 98%. Biegły w koronach, implantach, leczeniu kanałowym i przezroczystych nakładkach.",
    "experience": [
      {
        "role": "Dentysta ogólny",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "lut 2019",
        "end": "",
        "current": true,
        "points": "Leczenie 25+ pacjentów dziennie: wypełnienia, korony, leczenie kanałowe i ekstrakcje\nUtrzymywanie wyniku satysfakcji pacjentów 98% w 1,200+ opiniach\nZakładanie 15+ implantów miesięcznie i prowadzenie przypadków przezroczystych nakładek\nNadzorowanie 2 higienistek i 4 asystentów dentystycznych"
      },
      {
        "role": "Dentysta współpracujący",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "lip 2017",
        "end": "sty 2019",
        "current": false,
        "points": "Zapewnianie ogólnej stomatologii w praktyce liczącej 1,500 pacjentów\nWprowadzenie koron w jeden dzień, ograniczające wizyty powrotne o 40%\nProwadzenie szkolnych wizyt informacyjnych o zdrowiu jamy ustnej dzieci"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Stomatologia",
        "start": "2013",
        "end": "2017",
        "notes": "Licencjonowany dentysta (Arizona). Certyfikat Invisalign. Certyfikaty CPR/BLS."
      }
    ],
    "skills": "Stomatologia zachowawcza (korony, wypełnienia)\nLeczenie kanałowe\nImplanty dentystyczne\nPrzezroczyste nakładki ortodontyczne\nOpieka nad pacjentami i komunikacja\nCyfrowe zdjęcia RTG i CEREC",
    "languages": "Angielski (biegły)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fizjoterapeuta",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fizjoterapeuta (DPT) z 6-letnim doświadczeniem w rehabilitacji ortopedycznej i sportowej. Leczy 12-15 pacjentów dziennie, spośród których 90% osiąga swoje cele w ramach zaplanowanych sesji. Biegły w terapii manualnej, zaleceniach ćwiczeń i testach powrotu do sportu.",
    "experience": [
      {
        "role": "Fizjoterapeuta",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Leczenie 12-15 pacjentów dziennie z urazami sportowymi, rehabilitacją pooperacyjną i bólem pleców\n90% pacjentów osiąga swoje cele w ramach zaplanowanej liczby sesji\nProjektowanie testów powrotu do sportu używanych przez 3 lokalne drużyny\nMentoring 2 nowych absolwentów i nadzorowanie praktyk studenckich"
      },
      {
        "role": "Fizjoterapeuta",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "sie 2019",
        "end": "lut 2021",
        "current": false,
        "points": "Zapewnianie rehabilitacji szpitalnej dla pacjentów po operacjach i udarach\nProwadzenie grupowych zajęć ruchowych dla 20+ starszych pacjentów tygodniowo\nDokumentowanie postępów w Epic i przekazywanie zespołom oddziałowym"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fizjoterapia",
        "start": "2016",
        "end": "2019",
        "notes": "Licencjonowany fizjoterapeuta (Oregon). Specjalista kliniczny ortopedii (OCS)."
      }
    ],
    "skills": "Rehabilitacja ortopedyczna i sportowa\nTerapia manualna\nZalecenia ćwiczeń\nTesty powrotu do sportu\nEdukacja pacjentów\nDokumentacja (Epic)",
    "languages": "Angielski (biegły)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Szef kuchni",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Szef kuchni z 10-letnim doświadczeniem w kuchniach kreolskich i nowoczesnych amerykańskich. Kieruję brygadą 12 osób w restauracji na 200 miejsc, obniżyłem koszty żywności o 15% dzięki ściślejszemu zamawianiu i zdobyłem tytuł „Best New Menu” od miejskiego przewodnika kulinarnego w 2025.",
    "experience": [
      {
        "role": "Szef kuchni",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Kierowanie brygadą 12 osób w restauracji na 200 miejsc obsługującej 300+ nakryć wieczorem\nObniżenie kosztów żywności o 15% dzięki ściślejszemu zamawianiu i sezonowemu menu\nZdobycie tytułu „Best New Menu” od miejskiego przewodnika kulinarnego w 2025\nUkładanie menu, szkolenie kucharzy i prowadzenie wydawki podczas piątkowych i sobotnich serwisów"
      },
      {
        "role": "Zastępca szefa kuchni",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "cze 2017",
        "end": "gru 2020",
        "current": false,
        "points": "Prowadzenie kuchni pod nieobecność szefa kuchni, obsługując 150 nakryć wieczorem\nZarządzanie zapasami, zamawianiem i relacjami z dostawcami\nPrzeszkolenie 8 kucharzy liniowych i obniżenie rotacji personelu o jedną trzecią"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Sztuka kulinarna",
        "start": "2014",
        "end": "2016",
        "notes": "Certyfikat ServSafe Food Protection Manager."
      }
    ],
    "skills": "Projektowanie menu i kalkulacja kosztów\nKuchnia kreolska i nowoczesna amerykańska\nKierowanie kuchnią (brygada 12 osób)\nBezpieczeństwo żywności (ServSafe)\nZarządzanie dostawcami\nCatering bankietowy i eventowy",
    "languages": "Angielski (biegły)\nHiszpański (biegły)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Policjant",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Policjant z 8-letnim doświadczeniem w patrolach, policji środowiskowej i dochodzeniach. Odpowiadam na 30+ zgłoszeń tygodniowo, z pochwałami za deeskalację i pracę ze społecznością. Przeszkolony w interwencji kryzysowej, pierwszej pomocy i sporządzaniu raportów.",
    "experience": [
      {
        "role": "Policjant",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "cze 2019",
        "end": "",
        "current": true,
        "points": "Patrolowanie dzielnicy liczącej 40,000 mieszkańców, odpowiadanie na 30+ zgłoszeń tygodniowo\nOtrzymanie 2 pochwał za deeskalację i pracę ze społecznością\nProwadzenie dochodzeń w sprawach kradzieży i napaści, sporządzanie raportów użytych w 50+ postępowaniach\nMentoring 3 nowych funkcjonariuszy podczas szkolenia terenowego"
      },
      {
        "role": "Funkcjonariusz patrolowy",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "sie 2017",
        "end": "maj 2019",
        "current": false,
        "points": "Patrolowanie dróg powiatowych i odpowiadanie na zgłoszenia alarmowe\nDoręczanie pism sądowych i pomoc przy transporcie więźniów\nUkończenie szkolenia z interwencji kryzysowej i pierwszej pomocy"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificate",
        "field": "Ochrona porządku publicznego",
        "start": "2017",
        "end": "2017",
        "notes": "Absolwent Ohio Peace Officer Training Academy. Przeszkolony w zespole interwencji kryzysowej."
      }
    ],
    "skills": "Patrole i reagowanie na nagłe zdarzenia\npolicja środowiskowa\ninterwencja kryzysowa i deeskalacja\nsporządzanie raportów\ndochodzenia\npierwsza pomoc i RKO",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Strażak / ratownik medyczny",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Strażak i ratownik medyczny z 7-letnim doświadczeniem w gaszeniu pożarów, ratownictwie i reagowaniu na nagłe zdarzenia medyczne. Odpowiadałem na 900+ zgłoszeń, w tym pożary budynków, ratownictwo drogowe i nagłe przypadki medyczne. Przeszkolony w HazMat, z czystą historią bezpieczeństwa.",
    "experience": [
      {
        "role": "Strażak / ratownik medyczny",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar 2020",
        "end": "",
        "current": true,
        "points": "Odpowiadanie na 900+ zgłoszeń pożarowych, ratowniczych i medycznych w okręgu z 3 remizami\nZapewnianie ratownictwa medycznego jako certyfikowany EMT przy 60% zgłoszeń\nPrzeszkolony w HazMat; kierowanie dekontaminacją przy zdarzeniach chemicznych\nSzkolenie nowych rekrutów w obsłudze węży, drabin i technikach przeszukiwania"
      },
      {
        "role": "Ochotniczy strażak",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "cze 2018",
        "end": "lut 2020",
        "current": false,
        "points": "Odpowiadanie na pożary terenów dzikich i budynków jako ochotnik\nUkończenie szkoleń Strażak I i II oraz EMT-Basic\nPomoc w prowadzeniu pogadanek o bezpieczeństwie pożarowym w szkołach"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificate",
        "field": "Pożarnictwo",
        "start": "2017",
        "end": "2018",
        "notes": "Strażak I i II. Certyfikat EMT-Basic. Przeszkolony w działaniach HazMat."
      }
    ],
    "skills": "Gaszenie pożarów i ratownictwo\nRatownictwo medyczne (EMT)\nDziałania HazMat\nDrabiny, węże i wentylacja\nBezpieczeństwo pożarowe społeczności\nPraca zespołowa pod presją",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Licencjonowany hydraulik",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Licencjonowany mistrz hydraulik z 11-letnim doświadczeniem w hydraulice mieszkaniowej i komercyjnej. Realizuję 600+ zleceń rocznie, od instalacji wstępnych po montaż kotłów, ze wskaźnikiem napraw przy pierwszej wizycie 98%. Biegły w montażu rur, czyszczeniu odpływów i zgodności z przepisami.",
    "experience": [
      {
        "role": "Mistrz hydraulik",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "sty 2019",
        "end": "",
        "current": true,
        "points": "Realizacja 600+ zleceń mieszkaniowych i komercyjnych rocznie\nMontaż kotłów, podgrzewaczy wody i kompletnych instalacji łazienkowych\nUtrzymywanie wskaźnika napraw przy pierwszej wizycie 98% przy zgłoszeniach serwisowych\nNadzorowanie 3 uczniów i zatwierdzanie ich pracy"
      },
      {
        "role": "Czeladnik hydraulik",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "cze 2014",
        "end": "gru 2018",
        "current": false,
        "points": "Wykonywanie instalacji hydraulicznych w nowych budynkach dla 40+ domów rocznie\nUdrożnianie odpływów i naprawa przecieków w domach i restauracjach\nNauka instalacji gazowych i zabezpieczeń przed przepływem zwrotnym"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificate",
        "field": "Technologia hydrauliczna",
        "start": "2013",
        "end": "2014",
        "notes": "Licencja mistrza hydraulika (Tennessee). Certyfikat zabezpieczeń przed przepływem zwrotnym."
      }
    ],
    "skills": "Hydraulika mieszkaniowa i komercyjna\nmontaż rur i lutowanie\nczyszczenie odpływów i inspekcja kamerą\nmontaż kotłów i podgrzewaczy wody\ninstalacje gazowe\nzgodność z przepisami hydraulicznymi",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Czeladnik stolarski",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Czeladnik stolarski z 9-letnim doświadczeniem w pracach szkieletowych, wykończeniowych i szafkach na wymiar. Postawiłem szkielety 30+ domów i zamontowałem kuchnie w 60+ domach, z reputacją dokładnych pomiarów i czystych wykończeń. Biegły w czytaniu planów i pracy zgodnie z przepisami.",
    "experience": [
      {
        "role": "Czeladnik stolarski",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "lut 2019",
        "end": "",
        "current": true,
        "points": "Stawianie szkieletów 30+ domów i montaż kuchni w 60+ domach\nWykonywanie szafek i listew na wymiar z tolerancją 1/16 cala\nCzytanie i realizowanie planów architektonicznych, z oznaczaniem błędów, zanim zaczną kosztować\nSzkolenie 2 uczniów w technikach szkieletowych i wykończeniowych"
      },
      {
        "role": "Uczeń stolarza",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "cze 2016",
        "end": "sty 2019",
        "current": false,
        "points": "Pomoc przy szkieletach, płytach gipsowo-kartonowych i podłogach podczas remontów\nNauka bezpiecznego używania pił, frezarek i gwoździarek\nUkończenie 8,000 godzin praktyk i zdanie egzaminu czeladniczego"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificate",
        "field": "Stolarstwo",
        "start": "2015",
        "end": "2016",
        "notes": "Czeladnik stolarski. Certyfikat OSHA 10."
      }
    ],
    "skills": "Prace szkieletowe i konstrukcyjne\nstolarstwo wykończeniowe i listwy\nszafki na wymiar\nczytanie planów architektonicznych\nelektronarzędzia i bezpieczeństwo\npłyty gipsowo-kartonowe i podłogi",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Nauczyciel szkoły średniej (matematyka)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Nauczyciel szkoły średniej z 8-letnim doświadczeniem w nauczaniu matematyki w klasach 9-12. Podniosłem wskaźniki zdawalności algebry z 64% do 83% i prowadzę drużynę matematyczną, która doszła do 2 finałów stanowych. Biegły w nauczaniu zróżnicowanym, przygotowaniu do egzaminów i komunikacji z rodzicami.",
    "experience": [
      {
        "role": "Nauczyciel matematyki (klasy 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "sie 2019",
        "end": "",
        "current": true,
        "points": "Nauczanie algebry, geometrii i wstępu do analizy 120 uczniów w 5 klasach\nPodniesienie wskaźników zdawalności algebry z 64% do 83% w 3 lata\nProwadzenie drużyny matematycznej do 2 finałów stanowych\nProwadzenie korepetycji pozalekcyjnych dla 30 uczniów tygodniowo"
      },
      {
        "role": "Nauczyciel matematyki (klasy 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "sie 2017",
        "end": "cze 2019",
        "current": false,
        "points": "Nauczanie algebry i geometrii 100 uczniów rocznie\nWprowadzenie cotygodniowych kartkówek, które ograniczyły braki w zadaniach domowych o połowę\nZorganizowanie pierwszych szkolnych targów matematycznych z udziałem 200 uczniów"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Nauczanie matematyki",
        "start": "2013",
        "end": "2017",
        "notes": "Stanowa licencja nauczycielska (New Hampshire, klasy 7-12, matematyka)."
      }
    ],
    "skills": "Nauczanie matematyki (od algebry do wstępu do analizy)\nprzygotowanie do egzaminów\nNauczanie zróżnicowane\nzarządzanie klasą\nkomunikacja z rodzicami\nGoogle Classroom i Desmos",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Nauczyciel przedszkola",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Nauczyciel przedszkola z 6-letnim doświadczeniem w opiece nad dziećmi w wieku 3-5 lat. Biegły w nauce przez zabawę, kierowaniu zachowaniem i komunikacji z rodzicami. Zbudowałem program fonetyczny, który podniósł wyniki gotowości szkolnej w całej mojej grupie.",
    "experience": [
      {
        "role": "Nauczyciel przedszkola",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "sie 2020",
        "end": "",
        "current": true,
        "points": "Nauczanie i opieka nad grupą 18 dzieci w wieku 3-5 lat\nZbudowanie programu fonetycznego, który podniósł wyniki gotowości szkolnej w całej klasie\nPlanowanie cotygodniowych tematów, prac plastycznych i zabaw na świeżym powietrzu\nUdostępnianie rodzicom codziennych aktualizacji i semestralnych raportów o postępach"
      },
      {
        "role": "Pomoc nauczyciela przedszkola",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "cze 2018",
        "end": "lip 2020",
        "current": false,
        "points": "Wspieranie głównego nauczyciela przy grupie 20 dzieci\nCodzienne prowadzenie czasu na bajki, piosenki i zajęcia plastyczne\nProwadzenie dokumentacji bezpieczeństwa i higieny zgodnie ze standardami stanowymi"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Dyplom Associate Degree",
        "field": "Edukacja wczesnoszkolna",
        "start": "2016",
        "end": "2018",
        "notes": "Uprawnienia Child Development Associate (CDA). Certyfikaty pierwszej pomocy i RKO."
      }
    ],
    "skills": "Nauka przez zabawę\nkierowanie zachowaniem\nfonetyka i wczesna umiejętność czytania\nkomunikacja z rodzicami\nbezpieczeństwo w klasie\nplanowanie zajęć plastycznych",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Pracownik socjalny ds. dzieci i rodzin",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Licencjonowany pracownik socjalny z 7-letnim doświadczeniem we wspieraniu dzieci i rodzin. Prowadzę grupę 25 rodzin, koordynuję usługi między szkołami a świadczeniodawcami zdrowotnymi i sporządzam raporty sądowe, na których polegają sędziowie. Biegły w ocenie, wsparciu kryzysowym i ochronie.",
    "experience": [
      {
        "role": "Pracownik socjalny ds. dzieci i rodzin",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "sty 2020",
        "end": "",
        "current": true,
        "points": "Prowadzenie grupy 25 rodzin, cotygodniowe wizyty w domach i szkołach\nSporządzanie raportów sądowych i składanie zeznań w sądzie rodzinnym\nKoordynowanie wsparcia mieszkaniowego, zdrowotnego i szkolnego dla rodzin w trudnej sytuacji\nSkrócenie czasu oczekiwania na ocenę o 20% dzięki nowemu systemowi triażu"
      },
      {
        "role": "Pracownik ds. przypadków",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "lip 2018",
        "end": "gru 2019",
        "current": false,
        "points": "Wspieranie 40+ rodzin w mieszkaniach tymczasowych w zakresie świadczeń i skierowań\nProwadzenie cotygodniowych warsztatów rodzicielskich i budżetowych\nUtrzymywanie dokładnych notatek spraw na potrzeby audytów i raportów finansowania"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Praca socjalna",
        "start": "2016",
        "end": "2018",
        "notes": "Licencjonowany pracownik socjalny (Ohio). Kursy z opieki nad dziećmi i systemów rodzinnych."
      }
    ],
    "skills": "Prowadzenie przypadków (25 rodzin)\nochrona dzieci\nraporty dla sądów rodzinnych\nwsparcie kryzysowe\nkoordynacja międzyinstytucjonalna\nskierowania do świadczeń i mieszkań",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Asystent prawny",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Asystent prawny z 6-letnim doświadczeniem we wsparciu procesowym i dokumentach korporacyjnych. Zarządzam postępowaniem dowodowym w 30+ sprawach, sporządzam pisma procesowe i umowy oraz utrzymuję terminy składania ze 100% terminowością. Biegły w Westlaw, e-discovery i oprogramowaniu do zarządzania sprawami.",
    "experience": [
      {
        "role": "Asystent prawny",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "lut 2021",
        "end": "",
        "current": true,
        "points": "Zarządzanie postępowaniem dowodowym w 30+ sprawach, przeglądanie 10,000+ dokumentów\nSporządzanie pism procesowych, wniosków i umów do przeglądu przez adwokata\nUtrzymywanie 100% terminowości pism sądowych i terminów\nKoordynowanie świadków i przygotowywanie segregatorów procesowych"
      },
      {
        "role": "Asystent prawny",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "sie 2019",
        "end": "sty 2021",
        "current": false,
        "points": "Wywiady wstępne z 20+ klientami tygodniowo\nPrzygotowywanie formularzy i pism w sprawach mieszkaniowych i rodzinnych\nTłumaczenie dokumentów prawnych dla klientów hiszpańskojęzycznych"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Dyplom Associate Degree",
        "field": "Studia dla asystentów prawnych",
        "start": "2017",
        "end": "2019",
        "notes": "Certyfikowany asystent prawny NALA (CP). Program zatwierdzony przez ABA."
      }
    ],
    "skills": "Wsparcie procesowe i postępowanie dowodowe\nRedagowanie dokumentów prawnych\nE-discovery (Relativity)\nZarządzanie sprawami (Clio)\nPisma sądowe i terminy\nBadania prawne (Westlaw)",
    "languages": "Angielski (biegły)\nHiszpański (biegły)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Pracownik księgowości",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Pracownik księgowości z 5-letnim doświadczeniem w zobowiązaniach, fakturowaniu i uzgodnieniach bankowych. Przetwarzam 300+ faktur miesięcznie z dokładnością 99.8% i utrzymuję księgi w porządku na zamknięcie miesiąca. Biegły w QuickBooks, Excelu i wsparciu płac.",
    "experience": [
      {
        "role": "Pracownik księgowości",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "kwi 2021",
        "end": "",
        "current": true,
        "points": "Przetwarzanie 300+ faktur dostawców miesięcznie z dokładnością 99.8%\nCotygodniowe uzgadnianie 6 kont bankowych i oznaczanie różnic tego samego dnia\nPrzygotowywanie danych płacowych dla 45 pracowników i ponaglanie zaległych płatności klientów\nUtrzymywanie dokumentacji w porządku na audyt na koniec roku, bez żadnych ustaleń"
      },
      {
        "role": "Asystent ds. księgowości",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "cze 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Codzienne wprowadzanie faktur sprzedaży i paragonów do QuickBooks\nOdpowiadanie na zapytania dostawców o płatności przez telefon i e-mail\nArchiwizowanie dokumentów i utrzymywanie archiwum na bieżąco"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificate",
        "field": "Księgowość",
        "start": "2018",
        "end": "2019",
        "notes": "Certyfikowany użytkownik QuickBooks."
      }
    ],
    "skills": "Zobowiązania i należności\nuzgodnienia bankowe\nfakturowanie (300+ miesięcznie)\nQuickBooks i Excel\nwsparcie płac\nwprowadzanie danych (65 słów/min)",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Asystent administracyjny",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Asystent administracyjny z 6-letnim doświadczeniem w sprawnym prowadzeniu biura. Zarządzam kalendarzami 4 menedżerów, organizuję podróże i spotkania oraz obsługuję 100+ e-maili dziennie. Znany z dokładności, dyskrecji i spokoju pod presją terminów.",
    "experience": [
      {
        "role": "Asystent administracyjny",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Zarządzanie kalendarzami, podróżami i spotkaniami dla 4 wyższych menedżerów\nObsługa 100+ e-maili dziennie, przygotowywanie odpowiedzi i oznaczanie priorytetów\nPrzygotowywanie dokumentów zarządu i protokołowanie comiesięcznych spotkań\nProwadzenie zamówień materiałów biurowych i dostawców, z obniżeniem kosztów o 12%"
      },
      {
        "role": "Recepcjonista",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "sie 2019",
        "end": "gru 2020",
        "current": false,
        "points": "Przyjmowanie 60+ pacjentów dziennie i zarządzanie książką wizyt\nOdbieranie telefonów i obsługa zapytań ubezpieczeniowych\nUtrzymywanie dokładnej i poufnej dokumentacji pacjentów"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Dyplom Associate Degree",
        "field": "Administracja biurowa",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Zarządzanie kalendarzem i podróżami\nE-mail i korespondencja\nProtokoły spotkań\nMicrosoft Office (Word, Excel, Outlook)\nWprowadzanie danych (70 słów/min)\nMateriały biurowe i dostawcy",
    "languages": "Angielski (biegły)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Kasjer bankowy",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Kasjer bankowy z 4-letnim doświadczeniem w obsłudze 80+ klientów dziennie z dokładnością i troską. Kasa zbilansowana co do centa przez 3 lata, bez żadnych niedoborów. Biegły w depozytach, wypłatach, kontrolach antyfraudowych i kierowaniu klientów do odpowiednich produktów.",
    "experience": [
      {
        "role": "Kasjer bankowy",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar 2022",
        "end": "",
        "current": true,
        "points": "Obsługa 80+ klientów dziennie: depozyty, wypłaty, płatności i przelewy\nKasa bilansowana co do centa przez 3 lata bez żadnych niedoborów\nWykrycie i powstrzymanie 12 prób oszustwa, oszczędzając klientom $90,000+\nKierowanie klientów do produktów oszczędnościowych i kredytowych, z realizacją kwartalnych celów poleceń"
      },
      {
        "role": "Pracownik obsługi klienta",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "cze 2021",
        "end": "lut 2022",
        "current": false,
        "points": "Otwieranie nowych kont i wydawanie kart debetowych dla członków\nOdpowiadanie na telefoniczne zapytania o salda i wyciągi\nPomaganie członkom w zakładaniu bankowości internetowej i mobilnej"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Dyplom Associate Degree",
        "field": "Biznes",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Obsługa i bilansowanie gotówki\nDepozyty, wypłaty i płatności\nWykrywanie oszustw\nObsługa klienta\nOprogramowanie bankowe (Fiserv)\nPolecanie produktów",
    "languages": "Angielski (biegły)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Kierownik sprzedaży",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Kierownik sprzedaży z 10-letnim doświadczeniem w kierowaniu zespołami do 15 przedstawicieli. Zwiększyłem przychód regionalny z $4M do $7.5M w 3 lata, podniosłem wskaźnik wygranych z 22% do 34% i obniżyłem rotację przedstawicieli o połowę dzięki lepszemu coachingowi i wdrożeniom.",
    "experience": [
      {
        "role": "Regionalny kierownik sprzedaży",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Kierowanie zespołem 15 przedstawicieli handlowych w Teksasie i Oklahomie\nZwiększenie przychodu regionalnego z $4M do $7.5M w 3 lata\nPodniesienie wskaźnika wygranych z 22% do 34% dzięki lepszemu coachingowi i przeglądom lejka\nObniżenie rotacji przedstawicieli o połowę dzięki nowemu programowi wdrożeniowemu"
      },
      {
        "role": "Przedstawiciel handlowy",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "cze 2015",
        "end": "gru 2020",
        "current": false,
        "points": "Sprzedaż sprzętu przemysłowego do 80+ klientów, z realizacją planu przez 5 lat z rzędu\nNajlepszy przedstawiciel w regionie przez 3 lata z rzędu\nZbudowanie sieci poleceń, która przyniosła 25% nowego biznesu"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Kursy z zarządzania sprzedażą i negocjacji."
      }
    ],
    "skills": "Kierowanie zespołem sprzedaży (15 przedstawicieli)\nWzrost przychodów i prognozowanie\nZarządzanie lejkiem (Salesforce)\nCoaching i wdrażanie pracowników\nNegocjacje\nPlanowanie terytorium",
    "languages": "Angielski (biegły)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Kierownik budowy",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Kierownik budowy z 12-letnim doświadczeniem w realizacji projektów komercyjnych i mieszkaniowych o wartości do $12M. Ukończyłem 20+ projektów z 95% terminowością, zerową liczbą wypadków powodujących absencję na moich budowach i budżetami utrzymanymi w granicach 3%. Biegły w harmonogramowaniu, zarządzaniu podwykonawcami i bezpieczeństwie.",
    "experience": [
      {
        "role": "Kierownik budowy",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "lut 2020",
        "end": "",
        "current": true,
        "points": "Realizacja projektów komercyjnych i mieszkaniowych o wartości do $12M\nUkończenie 20+ projektów z 95% terminowością i budżetami w granicach 3%\nZarządzanie 30+ podwykonawcami i 50 pracownikami na 3 czynnych budowach\nZero wypadków powodujących absencję we wszystkich lokalizacjach w 4 lata"
      },
      {
        "role": "Kierownik budowy (nadzór)",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "cze 2013",
        "end": "sty 2020",
        "current": false,
        "points": "Prowadzenie codziennych operacji budów biurowych i handlowych\nKoordynowanie dostaw, inspekcji i harmonogramów podwykonawców\nUtrzymywanie czystej dokumentacji bezpieczeństwa i przechodzenie każdej inspekcji OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Budownictwo",
        "start": "2009",
        "end": "2013",
        "notes": "Certyfikat OSHA 30. Kandydat na CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Harmonogramowanie projektów (MS Project, Procore)\nKontrola budżetu\nZarządzanie podwykonawcami\nBezpieczeństwo na budowie (OSHA 30)\nCzytanie rysunków technicznych\nRaportowanie dla klientów",
    "languages": "Angielski (biegły)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Certyfikowany asystent medyczny",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Certyfikowany asystent medyczny z 5-letnim doświadczeniem w medycynie rodzinnej i pomocy doraźnej. Przyjmuję 25+ pacjentów dziennie, mierzę parametry życiowe, pobieram krew i prowadzę recepcję z wynikiem satysfakcji pacjentów 97%. Biegły w EHR, pobieraniu krwi i weryfikacji ubezpieczeń.",
    "experience": [
      {
        "role": "Certyfikowany asystent medyczny",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "kwi 2021",
        "end": "",
        "current": true,
        "points": "Przyjmowanie 25+ pacjentów dziennie: parametry życiowe, wywiady i przygotowanie do badań\nPobieranie krwi i wykonywanie podstawowych badań laboratoryjnych ze wskaźnikiem skuteczności 99% za pierwszym wkłuciem\nZarządzanie recepcją, harmonogramem i weryfikacją ubezpieczeń\nUtrzymywanie wyniku satysfakcji pacjentów 97% w 800+ ankietach"
      },
      {
        "role": "Asystent medyczny",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "sie 2019",
        "end": "mar 2021",
        "current": false,
        "points": "Triaż pacjentów zgłaszających się osobiście i pomoc lekarzom przy drobnych zabiegach\nWykonywanie szczepień i pobieranie próbek\nUtrzymywanie gabinetów zaopatrzonych, czystych i gotowych między pacjentami"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificate",
        "field": "Asystentura medyczna",
        "start": "2018",
        "end": "2019",
        "notes": "Certyfikowany asystent medyczny (CMA, AAMA). Certyfikat BLS. Przeszkolony w pobieraniu krwi."
      }
    ],
    "skills": "Przyjmowanie pacjentów i pomiary parametrów życiowych\nPobieranie krwi\nEHR (eClinicalWorks)\nSzczepienia\nWeryfikacja ubezpieczeń\nZarządzanie recepcją",
    "languages": "Angielski (biegły)\nHiszpański (biegły)",
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
    "summary": "Zmotywowany uczeń ostatniej klasy szkoły średniej z dobrymi ocenami i doświadczeniem w pracy dorywczej. Szybko się uczy, jest niezawodny i dobrze dogaduje się z ludźmi. Szuka pierwszego stanowiska na pełny etat lub pracy dorywczej równolegle ze studiami.",
    "experience": [
      {
        "role": "Sprzedawca w niepełnym wymiarze godzin",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "wrz 2024",
        "end": "",
        "current": true,
        "points": "Obsługa 50+ klientów na zmianę w weekendy i po szkole\nObsługa gotówki, uzupełnianie półek i utrzymywanie ekspozycji w porządku\nZaufany do otwierania sklepu w sobotnie poranki"
      },
      {
        "role": "Korepetytor-wolontariusz",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "sty 2024",
        "end": "cze 2025",
        "current": false,
        "points": "Udzielanie korepetycji młodszym uczniom z matematyki dwa razy w tygodniu\nPomoc w organizacji letniego programu czytelniczego dla 40 dzieci"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Dyplom szkoły średniej",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Lista wyróżnionych przez 3 lata. Kapitan drużyny debatanckiej."
      }
    ],
    "skills": "obsługa klienta\nObsługa gotówki\nPraca zespołowa\nZarządzanie czasem\nMicrosoft Office\nWystąpienia publiczne (drużyna debatancka)",
    "languages": "Angielski (biegły)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Świeży absolwent \u2014 administracja biznesowa",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Świeży absolwent administracji biznesowej z doświadczeniem stażowym w marketingu i operacjach. Zorganizowałem konkurs biznesowy na kampusie z 200 uczestnikami i ukończyłem 6-miesięczny staż, podczas którego skróciłem czas raportowania o połowę. Chętny do rozpoczęcia kariery na pełny etat i szybkiej nauki.",
    "experience": [
      {
        "role": "Stażysta ds. marketingu",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "sty 2025",
        "end": "cze 2025",
        "current": false,
        "points": "Prowadzenie kont społecznościowych firmy, ze wzrostem obserwujących z 2,000 do 6,500\nZbudowanie pulpitu raportowego, który skrócił cotygodniowe raportowanie o połowę\nNapisanie 20 postów blogowych, które przyniosły 15,000+ odczytów"
      },
      {
        "role": "Lider wolontariuszy eventowych",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "wrz 2024",
        "end": "maj 2025",
        "current": false,
        "points": "Zorganizowanie konkursu biznesowego z 200 uczestnikami i 12 sędziami\nZarządzanie budżetem $5,000 i zespołem 8 wolontariuszy"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Administracja biznesowa",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Lista dziekana przez 2 lata. Projekt na ostatnim roku o marketingu małych firm."
      }
    ],
    "skills": "Marketing w mediach społecznościowych\nExcel i Arkusze Google\nUmiejętności prezentacyjne\nOrganizacja wydarzeń\nPraca zespołowa\nPodstawowa analiza danych",
    "languages": "Angielski (biegły)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Młodszy specjalista ds. marketingu",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Młodszy specjalista ds. marketingu z 2-letnim doświadczeniem w treściach, e-mailu i mediach społecznościowych. Rozwinąłem newsletter klienta z 1,000 do 4,000 subskrybentów i prowadzę kampanie ze średnim wskaźnikiem otwarć 22%. Gotowy na większą odpowiedzialność i większe portfolio klientów.",
    "experience": [
      {
        "role": "Młodszy specjalista ds. marketingu",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "lip 2024",
        "end": "",
        "current": true,
        "points": "Rozwinięcie newslettera klienta z 1,000 do 4,000 subskrybentów w 14 miesięcy\nPisanie i planowanie 12 postów społecznościowych tygodniowo dla 4 klientów\nProwadzenie kampanii e-mailowych ze średnim wskaźnikiem otwarć 22%\nComiesięczne raportowanie wyników kampanii klientom"
      },
      {
        "role": "Stażysta ds. marketingu",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "sty 2024",
        "end": "cze 2024",
        "current": false,
        "points": "Pisanie opisów produktów dla 200+ pozycji na stronie firmy\nPomoc w prowadzeniu wiosennej kampanii wyprzedażowej, która podniosła zamówienia online o 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Komunikacja",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Kursy z marketingu cyfrowego i pisania dla mediów."
      }
    ],
    "skills": "Tworzenie treści\ne-mail marketing (Mailchimp)\nzarządzanie mediami społecznościowymi\nGoogle Analytics\nCanva\nRaportowanie dla klientów",
    "languages": "Angielski (biegły)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Przełożony operacyjny",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Przełożony operacyjny z 8-letnim doświadczeniem w prowadzeniu zespołów magazynowych liczących 20-30 osób. Ograniczyłem błędy kompletacji o 30%, podniosłem terminowość wysyłek z 90% do 97% i przeszkoliłem 15 nowych pracowników. Gotowy na stanowisko kierownika operacyjnego z większą lokalizacją i budżetem.",
    "experience": [
      {
        "role": "Przełożony operacyjny",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar 2021",
        "end": "",
        "current": true,
        "points": "Nadzorowanie 25 pracowników magazynu na 2 zmianach w obiekcie o powierzchni 90,000 stóp kwadratowych\nOgraniczenie błędów kompletacji o 30% dzięki nowym procedurom kontroli i skanowaniu kodów kreskowych\nPodniesienie terminowości wysyłek z 90% do 97% w 2 lata\nPrzeszkolenie 15 nowych pracowników i awansowanie 3 na stanowiska liderów zespołów"
      },
      {
        "role": "Lider zespołu",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "cze 2017",
        "end": "lut 2021",
        "current": false,
        "points": "Kierowanie zespołem 10 osób kompletujących i pakujących na zmianie nocnej\nWprowadzenie grafiku, który ograniczył nadgodziny o 20% bez naruszania terminów\nProwadzenie odpraw BHP i utrzymywanie zespołu bez wypadków przez 2 lata"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Zarządzanie łańcuchem dostaw",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Przywództwo zespołowe (25 pracowników)\nOperacje magazynowe\nDoskonalenie procesów\nZarządzanie bezpieczeństwem\nKontrola zapasów\nWMS i Excel",
    "languages": "Angielski (biegły)\nHindi (komunikatywny)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Starszy kierownik projektów",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Starszy kierownik projektów z 14-letnim doświadczeniem w dostarczaniu projektów oprogramowania o wartości do $8M. Poprowadziłem 30+ projektów ze wskaźnikiem terminowości 92%, zbudowałem PMO od podstaw i mentorowałem 10 kierowników projektów. Znany ze spokojnego dostarczania pod presją i uczciwego raportowania kadrze kierowniczej.",
    "experience": [
      {
        "role": "Starszy kierownik projektów",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "sty 2019",
        "end": "",
        "current": true,
        "points": "Realizacja projektów oprogramowania o wartości do $8M z 92% terminowością\nZbudowanie PMO firmy od podstaw: szablony, raportowanie i nadzór\nMentoring 10 kierowników projektów i prowadzenie comiesięcznej społeczności PM\nRaportowanie bezpośrednio do CTO w programie liczącym 40 osób"
      },
      {
        "role": "Kierownik projektów",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "cze 2012",
        "end": "gru 2018",
        "current": false,
        "points": "Zarządzanie 20+ projektami dla klientów z handlu i ochrony zdrowia\nWprowadzenie praktyk Agile, które skróciły czas dostarczania o 25%\nRozwinięcie 2 kluczowych klientów z $500k do $2M rocznego przychodu"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Systemy informacyjne",
        "start": "2008",
        "end": "2012",
        "notes": "Certyfikat PMP (2015). Certyfikowany ScrumMaster. Kursy MBA (2018-2019, nieukończone)."
      }
    ],
    "skills": "Realizacja programów i projektów\nTworzenie i nadzór PMO\nAgile i Waterfall\nKontrola budżetu ($8M)\nRaportowanie dla kadry kierowniczej\nMentoring zespołu",
    "languages": "Angielski (biegły)\nHiszpański (komunikatywny)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Dyrektor operacyjny",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Dyrektor operacyjny z 18-letnim doświadczeniem w skalowaniu operacji firm handlowych i logistycznych. Rozwinął działalność z 200 do 900 osób w 6 lokalizacjach, podniósł marżę EBITDA z 8% do 14% i poprowadził 2 przejęcia. Doświadczenie w raportowaniu do zarządu i relacjach inwestorskich.",
    "experience": [
      {
        "role": "Dyrektor operacyjny",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "sty 2021",
        "end": "",
        "current": true,
        "points": "Prowadzenie operacji dla 900 osób w 6 lokalizacjach z budżetem $180M\nPodniesienie marży EBITDA z 8% do 14% w 3 lata\nPoprowadzenie 2 przejęć i zintegrowanie obu zespołów w ciągu 6 miesięcy\nComiesięczne raportowanie zarządowi o operacjach, ryzyku i wzroście"
      },
      {
        "role": "Wiceprezes ds. operacji",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "cze 2014",
        "end": "gru 2020",
        "current": false,
        "points": "Wyskalowanie operacji z 200 do 600 osób w 4 lokalizacjach\nOtwarcie 3 centrów dystrybucyjnych na czas i poniżej budżetu\nZbudowanie zespołu kierowniczego, który do dziś prowadzi firmę"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Administracja biznesowa",
        "start": "2010",
        "end": "2012",
        "notes": "Licencjat (BS) w zakresie ekonomii, NYU (2006). Kurs ładu korporacyjnego (2020)."
      }
    ],
    "skills": "Operacje na skalę (900 osób)\nOdpowiedzialność za P&L ($180M)\nFuzje i przejęcia\nRaportowanie do zarządu\nStrategia wzrostu\nBudowanie zespołu kierowniczego",
    "languages": "Angielski (biegły)",
    "template": "executive"
  }
};
});
