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
      "title": "אחות מוסמכת",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "אחות מוסמכת עם 6 שנות ניסיון ביחידות רפואיות-כירורגיות וטלמטריה. מיומנת בהערכת מטופלים, טיפול תוך-ורידי, מתן תרופות ורשומות בריאות אלקטרוניות. ידועה בתקשורת רגועה וברורה עם מטופלים ומשפחות במצבי לחץ.",
    "experience": [
      {
        "role": "אחות מוסמכת",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "יוני 2021",
        "end": "",
        "current": true,
        "points": "טיפול ב-5-6 מטופלים במשמרת במחלקה רפואית-כירורגית בת 32 מיטות, כולל הערכה, מתן תרופות וטיפול בפצעים\nהכשרה וחניכה של 4 אחיות בוגרות חדשות, קיצור זמן ההתמצאות שלהן ב-2 שבועות\nהפחתת טעויות תרופות במחלקה ב-18% על ידי הנהגת שגרת בדיקה כפולה בהעברה\nתיעוד מדויק של כל הטיפול ברשומות הבריאות האלקטרוניות של Epic"
      },
      {
        "role": "אחות צוות",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "אוגוסט 2019",
        "end": "מאי 2021",
        "current": false,
        "points": "ניהול מיון עבור 40+ מטופלים ביום, תיעדוף מקרים דחופים לטיפול באותו יום\nמתן חיסונים ובדיקות בריאות באירועי הסברה קהילתיים חודשיים\nתיאום הפניות למומחים ומעקב אחר תוצאות בדיקות"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "סיעוד",
        "start": "2015",
        "end": "2019",
        "notes": "רישיון אחות מוסמכת (טקסס). מוסמכת BLS ו-ACLS."
      }
    ],
    "skills": "הערכת מטופלים\nטיפול תוך-ורידי ומתן תרופות\nרשומות בריאות אלקטרוניות (Epic)\nניטור טלמטריה\nחינוך מטופלים ומשפחות\nבקרת זיהומים",
    "languages": "אנגלית (שוטפת)\nספרדית (רמת שיחה)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "מפתח תוכנה",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "מפתח תוכנה עם 5 שנות ניסיון בבניית יישומי אינטרנט ב-Python וב-JavaScript. שלח תכונות המשמשות 200,000+ משתמשים, קיצץ את זמני התגובה של API ב-40% והוביל את המעבר של מונולית למיקרו-שירותים. חזק בבדיקות, סקירת קוד ותיעוד ברור.",
    "experience": [
      {
        "role": "מפתח תוכנה",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "מרץ 2022",
        "end": "",
        "current": true,
        "points": "בנייה ותחזוקה של תכונות אתר הפונות ללקוחות ב-Python (Django) ו-React, המשרתות 200,000+ משתמשים\nקיצור זמן התגובה הממוצע של ה-API מ-850 ms ל-500 ms על ידי הוספת מטמון ותיקון שאילתות איטיות\nהובלת המעבר של שירות החיוב למיקרו-שירותים עם אפס זמן השבתה\nסקירת 10+ בקשות משיכה בשבוע וחניכת 2 מפתחים זוטרים"
      },
      {
        "role": "מפתח זוטר",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "יולי 2020",
        "end": "פברואר 2022",
        "current": false,
        "points": "בניית לוחות מחוונים פנימיים ב-JavaScript שהחליפו גיליונות אלקטרוניים ידניים עבור 3 צוותים\nכתיבת בדיקות אוטומטיות שהעלו את הכיסוי מ-45% ל-78%\nתיקון 120+ באגים ברחבי המוצר בשנה הראשונה"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "מדעי המחשב",
        "start": "2016",
        "end": "2020",
        "notes": "קורסים במסדי נתונים, אלגוריתמים ומערכות הפעלה."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript ו-React\nPostgreSQL ו-Redis\nREST APIs ומיקרו-שירותים\nGit ו-CI/CD\nבדיקות אוטומטיות (pytest, Jest)",
    "languages": "אנגלית (שוטפת)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "מורה בבית ספר יסודי",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "מורה בבית ספר יסודי עם 7 שנות ניסיון בהוראת כיתות 3-5. מיומן בהוראה מותאמת, בניהול כיתה ובתקשורת עם הורים. העלה את מיומנות הקריאה בכיתתו מ-58% ל-81% בתוך שתי שנות לימודים.",
    "experience": [
      {
        "role": "מורה בבית ספר יסודי (כיתה 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "אוגוסט 2020",
        "end": "",
        "current": true,
        "points": "לימוד קריאה, מתמטיקה ומדעים לכיתה של 26 תלמידים, כולל 5 עם תוכניות למידה אישיות\nהעלאת מיומנות הקריאה בכיתה מ-58% ל-81% בשנתיים דרך קבוצות קריאה מודרכות\nהרצת ניוזלטר שבועי להורים וישיבות התקדמות תקופתיות לכל משפחה\nמוביל את מועדון הקריאה של בית הספר ל-40 תלמידים בכיתות 3-5"
      },
      {
        "role": "מורה בבית ספר יסודי (כיתה 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "אוגוסט 2018",
        "end": "יוני 2020",
        "current": false,
        "points": "תכנון והעברת שיעורים יומיים עבור 24 תלמידים בכל מקצועות הליבה\nהנהגת שגרות התנהגות שקיצצו את ההפרעות בכיתה בחצי\nארגון יריד המדעים של שכבת השנה עם 120 תלמידים ו-80 הורים"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "חינוך יסודי",
        "start": "2014",
        "end": "2018",
        "notes": "רישיון הוראה ממלכתי (אוהיו, כיתות K-5). הסמכת קריאה."
      }
    ],
    "skills": "הוראה מובחנת\nניהול כיתה\nקבוצות קריאה מודרכות\nתקשורת עם הורים\nתכנון שיעורים\nGoogle Classroom",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "רואה חשבון בכיר",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "רואה חשבון (CPA) עם 8 שנות ניסיון בסגירת חודש, דיווח כספי וביקורת פנימית. קיצר את סגירת הספרים ב-3 ימים בזכות בנייה מחדש של תהליך ההתאמה, ומצא $240,000 בתשלומי יתר הניתנים להשבה בשנת ביקורת אחת. חזק ב-Excel, ב-QuickBooks ובמערכות ERP.",
    "experience": [
      {
        "role": "רואה חשבון בכיר",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "בעלות על סגירת החודש של יחידה עסקית של $40M, בסיום מהיר ב-3 ימים לאחר בנייה מחדש של ההתאמות\nהכנת דוחות כספיים חודשיים ודוחות שונות להנהלה הבכירה\nמציאת $240,000 בתשלומי יתר לספקים הניתנים להשבה במהלך הביקורת הפנימית של 2024\nפיקוח על 2 חשבונאים וסקירת רישומי היומן שלהם"
      },
      {
        "role": "חשב צוות",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "יוני 2017",
        "end": "דצמבר 2020",
        "current": false,
        "points": "הכנת החזרי מס ודוחות כספיים עבור 25 לקוחות עסקים קטנים\nסיוע בביקורות של 8 לקוחות, בדיקת בקרות ותיעוד ממצאים\nאוטומציה של מרשם הרכוש הקבוע ב-Excel, בחיסכון של 6 שעות בחודש"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "חשבונאות",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (אילינוי). חבר ב-AICPA."
      }
    ],
    "skills": "סגירת חודש והתאמות\nדיווח כספי וניתוח שונות\nביקורת פנימית\nExcel (טבלאות ציר, VLOOKUP)\nQuickBooks ו-SAP\nהכנת דוחות מס",
    "languages": "אנגלית (שוטפת)\nמנדרינית (רמת שיחה)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "נהג משאית CDL Class A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "נהג CDL Class A עם 9 שנות ניסיון בהובלה ארוכת טווח ואזורית. למעלה מ-900,000 מייל ללא תאונות, שיעור מסירה בזמן של 99% וניסיון במטעני קירור, משטחים פתוחים ומטען יבש. גיליון נהיגה נקי, הסמכות HazMat ומכלית.",
    "experience": [
      {
        "role": "נהג משאית לטווח ארוך",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "אפריל 2019",
        "end": "",
        "current": true,
        "points": "נהיגה של 2,800+ מיילים בשבוע בקווים אזוריים ברחבי Texas, Oklahoma ו-New Mexico\nשמירה על שיעור אספקה בזמן של 99% ב-1,100+ מטענים בשנה\nהובלת מטענים מקוררים ויבשים; השלמת בדיקות לפני ואחרי נסיעה מדי יום\nמעל 900,000 מיילים ללא תאונות בסך הכול"
      },
      {
        "role": "נהג משאית חלוקה",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "מרץ 2016",
        "end": "מרץ 2019",
        "current": false,
        "points": "אספקת חומרי בניין ל-15-20 אתרי עבודה ביום ברחבי אזור דאלאס-פורט וורת'\nהפעלת מלגזות ואבטחת מטענים שטוחים לפי תקני DOT\nשמירה על ניירת משלוחים ויומנים מדויקים עם אפס הפרות DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "תעודה",
        "field": "נהיגה מסחרית (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A עם הסמכות HazMat ומכלית. גיליון נהיגה נקי."
      }
    ],
    "skills": "נהיגה למרחקים ארוכים ואזורית\nמטענים מקוררים ושטוחים\nתקנות DOT ויומני נסיעה\nבדיקות לפני נסיעה\nתכנון מסלולים (GPS, ELD)\nהפעלת מלגזות",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "עמית מכירות בקמעונאות",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "עמית מכירות בקמעונאות עם 4 שנות ניסיון בחנויות אלקטרוניקה וביגוד. בעקביות בין 3 המוכרים המובילים בצוות, עם שיעור צירוף של 32% לאחריות ואביזרים. ידידותי, מהיר בקופה ומהימן לפתיחה וסגירה של החנות.",
    "experience": [
      {
        "role": "עמית מכירות בכיר",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "פברואר 2022",
        "end": "",
        "current": true,
        "points": "מכירת אלקטרוניקה ואביזרים ל-60+ לקוחות ביום; בין 3 המובילים במכירות החנות במשך 8 רבעונים רצופים\nלהגיע לשיעור צירוף של 32% לאחריות ואביזרים, הגבוה בצוות\nהכשרת 6 עובדים חדשים על הקופה, המחסן ותקני שירות הלקוחות\nמחזיק מפתחות מהימן: פותח וסוגר את החנות ומטפל בספירות מזומנים"
      },
      {
        "role": "עמית מכירות",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "יוני 2021",
        "end": "ינואר 2022",
        "current": false,
        "points": "סיוע ללקוחות בבחירת בגדים ומידות ברצפת חנות עמוסה\nשמירה על תצוגות מסודרות וחידוש מלאי במדפים בכל משמרת\nטיפול בהחזרות ובהחלפות באדיבות, תוך צמצום התלונות למינימום"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "תואר עמית",
        "field": "עסקים",
        "start": "2019",
        "end": "2021",
        "notes": "לימודים חלקיים תוך כדי עבודה בקמעונאות."
      }
    ],
    "skills": "שירות לקוחות ומכירות נוספות\nטיפול במזומן ומערכות POS\nידע במוצרים (אלקטרוניקה)\nניהול מלאי\nפתיחת וסגירת חנות\nהכשרת צוות",
    "languages": "אנגלית (שוטפת)\nספרדית (שוטפת)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "נציג שירות לקוחות",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "נציג שירות לקוחות עם 5 שנות ניסיון בטיפול בתמיכה בטלפון, בדוא\"ל ובצ'אט חי. פותר 45+ פניות ביום עם ציון שביעות רצון של 96% ושיעור פתרון בפנייה ראשונה של 88%. רגוע מול לקוחות כועסים ומהיר במציאת הפתרון.",
    "experience": [
      {
        "role": "נציג שירות לקוחות",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "מאי 2021",
        "end": "",
        "current": true,
        "points": "טיפול ב-45+ פניות ביום בטלפון, בדוא\"ל ובצ'אט בנושאי חיוב, הזמנות ותקלות טכניות\nציון שביעות רצון לקוחות של 96% ושיעור פתרון במגע ראשון של 88%\nהרגעת שיחות קשות והפיכת תלונות לעסקים חוזרים\nהכשרת 5 סוכנים חדשים על תסריטים, מערכות וטון"
      },
      {
        "role": "נציג תמיכה",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "ספטמבר 2019",
        "end": "אפריל 2021",
        "current": false,
        "points": "מענה לדוא\"ל ולצ'אטים של לקוחות בנושאי הזמנות, החזרות והחזרים כספיים\nשמירה על זמן תגובה ראשון ממוצע של מתחת ל-2 שעות\nכתיבת 20 מאמרים למרכז עזרה שקיצצו שאלות חוזרות ברבע"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "תואר עמית",
        "field": "מנהל עסקים",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "תמיכה בטלפון, דוא\"ל וצ'אט חי\nטיפול בתלונות והרגעה\nמערכות CRM (Zendesk, Salesforce)\nשאילתות חיוב והזמנות\nהקלדה 55 מילים לדקה\nהכשרת צוות",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "מנהל תפעול",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "מנהל תפעול עם 12 שנות ניסיון בניהול צוותים של עד 80 אנשים במחסנאות והפצה. הפחית עלויות עיבוד הזמנות ב-22%, העלה משלוחים בזמן מ-91% ל-98% ופתח שני אתרים חדשים בזמן ומתחת לתקציב.",
    "experience": [
      {
        "role": "מנהל תפעול",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "פברואר 2020",
        "end": "",
        "current": true,
        "points": "ניהול מרכז הפצה של 120,000 רגל רבוע עם 80 עובדים ב-3 משמרות\nהפחתת עלויות עיבוד ההזמנות ב-22% על ידי תכנון מחדש של נתיבי הליקוט ודפוסי המשמרות\nהעלאת המשלוחים בזמן מ-91% ל-98% ב-18 חודשים\nפתיחת 2 אתרים חדשים בזמן ו-8% מתחת לתקציב"
      },
      {
        "role": "מפקח מחסן",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "יוני 2013",
        "end": "ינואר 2020",
        "current": false,
        "points": "פיקוח על 25 עובדי מחסן ועל השיגור היומי של 4,000+ הזמנות\nהנהגת סריקת ברקודים, שהפחיתה שגיאות ליקוט ב-35%\nהרצת הדרכות בטיחות ושמירה על האתר ללא תאונות במשך 3 שנים"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "ניהול תפעול",
        "start": "2009",
        "end": "2013",
        "notes": "חגורה ירוקה של Six Sigma."
      }
    ],
    "skills": "הנהגת צוות (עד 80 עובדים)\nאחסון והפצה\nשיפור תהליכים\nתקצוב ובקרת עלויות\nניהול בטיחות\nמערכות ERP ו-WMS",
    "languages": "אנגלית (שוטפת)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "חשמלאי מוסמך",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "חשמלאי אומן מוסמך עם 8 שנות ניסיון בעבודות מגורים ומסחר. מיומן בחיווט, שדרוג לוחות, תאורה ואיתור תקלות, עם רישום בטיחות נקי בלמעלה מ-400 עבודות. ידע בקוד NEC וניסיון בפיקוח על שוליות.",
    "experience": [
      {
        "role": "חשמלאי אומן",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "מרץ 2019",
        "end": "",
        "current": true,
        "points": "השלמת 400+ עבודות למגורים ולמסחר: חיווט, שדרוגי לוחות, תאורה ומטעני EV\nאבחון ותיקון תקלות במהירות, עם שיעור תיקון בביקור ראשון של 92%\nפיקוח על 2 שוליות ואישור עבודתם לפי התקן\nשמירה על רקורד בטיחות נקי עם אפס פציעות שגרמו לאובדן זמן"
      },
      {
        "role": "שוליית חשמלאי",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "יוני 2016",
        "end": "פברואר 2019",
        "current": false,
        "points": "סיוע לחשמלאים מוסמכים בחיווט מבנים חדשים ובחיווט מחדש\nלימוד כיפוף צינורות, משיכת כבלים והתקנת לוחות\nהשלמת 8,000 שעות התלמדות ומעבר בחינת ההסמכה של בעל מלאכה בניסיון הראשון"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "תעודה",
        "field": "טכנולוגיית חשמל",
        "start": "2015",
        "end": "2016",
        "notes": "רישיון חשמלאי אומן (קולורדו). מוסמך OSHA 30."
      }
    ],
    "skills": "חיווט מגורים ומסחרי\nשדרוגי לוחות ומטעני EV\nאיתור תקלות ובדיקות\nתאימות לתקן NEC\nכיפוף צינורות ומשיכת כבלים\nפיקוח על שוליות",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "אנליסט פיננסי",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "אנליסט פיננסי עם 6 שנות ניסיון בתקצוב, תחזיות וניתוח השקעות. בנה מודלי תחזית שהפחיתו את סטיית התקציב ב-30% ותמכו בהחלטות השקעה בהיקף $50M. חזק ב-Excel, ב-SQL ובמידול פיננסי.",
    "experience": [
      {
        "role": "אנליסט פיננסי",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "אפריל 2021",
        "end": "",
        "current": true,
        "points": "בניית תחזיות חודשיות ותקציבים שנתיים לתיק של $120M\nהפחתת שונות התקציב ב-30% עם מודל תחזית מבוסס מניעים\nתמיכה בהחלטות השקעה בשווי $50M עם הערכת שווי וניתוח תרחישים\nהצגת ממצאים מדי חודש ל-CFO ולראשי המחלקות"
      },
      {
        "role": "אנליסט פיננסי זוטר",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "יולי 2019",
        "end": "מרץ 2021",
        "current": false,
        "points": "הכנת דוחות ביצועים שבועיים עבור 12 סניפים\nאוטומציה של הדיווח ב-Excel, בחיסכון של 10 שעות בשבוע\nסיוע לצוות האשראי בניתוח תיק הלוואות"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "מימון",
        "start": "2015",
        "end": "2019",
        "notes": "מועמד CFA רמה II. קורסים בהערכת שווי ומימון תאגידי."
      }
    ],
    "skills": "מידול פיננסי ותחזיות\nתקצוב וניתוח שונות\nהערכת שווי (DCF, השוואות)\nExcel (מתקדם) ו-SQL\nBloomberg Terminal\nהמחשת נתונים (Power BI)",
    "languages": "אנגלית (שוטפת)\nהינדי (שוטפת)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "מהנדס אזרחי",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "מהנדס אזרחי (PE) עם 7 שנות ניסיון בתכנון תשתיות כבישים ומים. הוביל את תכנון הרחבת כביש מהיר באורך 12 מייל ומערכת מי סערה המשרתת 8,000 בתים. מיומן ב-AutoCAD Civil 3D, באומדן עלויות ובתיאום היתרים.",
    "experience": [
      {
        "role": "מהנדס אזרחי",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "הובלת התכנון של הרחבת כביש מהיר באורך 12 מייל, מסקר ועד מסמכי בנייה\nתכנון מערכת מי סער המשרתת 8,000 בתים, שאושרה בניסיון הראשון על ידי העירייה\nתיאום היתרים עם 4 סוכנויות וניהול תקציב תכנון של $2.5M\nסקירה וחתימה על שרטוטים כמהנדס מקצועי מורשה"
      },
      {
        "role": "מהנדס אזרחי זוטר",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "יולי 2018",
        "end": "דצמבר 2020",
        "current": false,
        "points": "הכנת תוכניות דירוג וניקוז עבור 20+ פרויקטים למגורים\nהרצת הערכות עלויות וחישובי כמויות לפרויקטי כבישים\nהשתתפות בביקורות באתרים וכתיבת דוחות התקדמות"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "הנדסה אזרחית",
        "start": "2014",
        "end": "2018",
        "notes": "רישיון מהנדס מקצועי (וושינגטון). עבר EIT ב-2018."
      }
    ],
    "skills": "תכנון כבישים וניקוז\nAutoCAD Civil 3D\nמידול מי סער\nהערכת עלויות\nתיאום היתרים\nתזמון פרויקטים (MS Project)",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "מהנדס מכונות",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "מהנדס מכונות עם 6 שנות ניסיון בתכנון מערכות HVAC וציוד ייצור. הפחית את צריכת האנרגיה ב-18% ב-3 מפעלים בעזרת תעלות ובקרות שתוכננו מחדש, והוביל תכנון מחדש של מכונה שהעלה את התפוקה ב-25%. מיומן ב-SolidWorks, ב-FEA ובניתוח תרמי.",
    "experience": [
      {
        "role": "מהנדס מכונות",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "פברואר 2021",
        "end": "",
        "current": true,
        "points": "תכנון מערכות HVAC וציוד ייצור עבור 3 מפעלים עם 400+ עובדים\nהפחתת צריכת האנרגיה ב-18% על ידי תכנון מחדש של תעלות האוורור ורצפי הבקרה\nהובלת תכנון מחדש של מכונה שהעלה את התפוקה ב-25% בלי שטח רצפה נוסף\nהרצת ניתוחי FEA ותרמי על חלקים חדשים לפני אב-טיפוס"
      },
      {
        "role": "מהנדס מכונות זוטר",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "אוגוסט 2019",
        "end": "ינואר 2021",
        "current": false,
        "points": "מידול חלקים ומכלולים ב-SolidWorks עבור לקוחות רכב\nהכנת שרטוטים, כתבי כמויות ודוחות בדיקה\nתמיכה בבניית אבות טיפוס ופתרון בעיות התאמה ברצפת הייצור"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "הנדסת מכונות",
        "start": "2015",
        "end": "2019",
        "notes": "קורסים בתרמודינמיקה, מכניקת זורמים ותכנון מכונות."
      }
    ],
    "skills": "עיצוב HVAC\nSolidWorks ו-AutoCAD\nניתוח FEA ותרמי\nעיצוב מכונות\nיעילות אנרגטית\nGD&T וסובלנויות",
    "languages": "אנגלית (שוטפת)\nקוריאנית (רמת שיחה)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "מהנדס חשמל",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "מהנדס חשמל עם 6 שנות ניסיון במערכות משובצות ובאלקטרוניקת כוח. תכנן לוחות בקרה המשמשים כיום ביותר מ-50,000 מכשירים והפחית את עלות הלוח ב-22% באמצעות תכנון מחדש של רכיבים. מיומן ב-Altium, ב-C, בבדיקות קושחה ובתאימות EMC.",
    "experience": [
      {
        "role": "מהנדס חשמל",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "מרץ 2021",
        "end": "",
        "current": true,
        "points": "תכנון לוחות בקרה משובצים המשמשים ב-50,000+ מכשירים בשנה\nהפחתת עלות הלוח ב-22% על ידי תכנון מחדש של שלב ההספק ומציאת חלופות\nהובלת בדיקות תאימות EMC, עם מעבר בניסיון ראשון ב-4 קווי מוצרים\nכתיבה וסקירה של קושחה ב-C עבור מיקרו-בקרים"
      },
      {
        "role": "מהנדס חשמל זוטר",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "יולי 2019",
        "end": "פברואר 2021",
        "current": false,
        "points": "פריסת מעגלים מודפסים ב-Altium עבור לקוחות צרכניים ותעשייתיים\nבנייה ובדיקה של אבות טיפוס, תוך איתור תקלות חומרה\nכתיבת נוהלי בדיקה שקיצצו את זמן בדיקות הייצור ב-30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "הנדסת חשמל",
        "start": "2015",
        "end": "2019",
        "notes": "קורסים במערכות משובצות, אלקטרוניקת כוח ועיבוד אותות."
      }
    ],
    "skills": "מערכות משובצות ותכנון PCB\nAltium Designer\nC וקושחה\nאלקטרוניקת הספק\nבדיקות תאימות EMC\nאוסצילוסקופים ומכשירי מעבדה",
    "languages": "אנגלית (שוטפת)\nגוג'ראטית (רמת שיחה)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "אנליסט נתונים",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "אנליסט נתונים עם 4 שנות ניסיון בהפיכת נתוני מכירות ותפעול להחלטות. בנה לוחות מחוונים המשמשים 60+ מנהלים, קיצר את זמן הדיווח החודשי מ-3 ימים ל-4 שעות, ומצא טעות תמחור בשווי $180,000 בשנה. חזק ב-SQL, ב-Excel וב-Power BI.",
    "experience": [
      {
        "role": "אנליסט נתונים",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "ינואר 2022",
        "end": "",
        "current": true,
        "points": "בניית לוחות מחוונים ב-Power BI המשמשים 60+ מנהלי חנויות ואזורים\nקיצור הדיווח החודשי מ-3 ימים ל-4 שעות עם צינורות SQL אוטומטיים\nמציאת טעות תמחור בשווי $180,000 בשנה על ידי ביקורת נתוני מבצעים\nהצגת ממצאים מדי חודש לצוות המסחרי"
      },
      {
        "role": "אנליסט נתונים זוטר",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "אוגוסט 2020",
        "end": "דצמבר 2021",
        "current": false,
        "points": "ניקוי ואיחוד נתוני משלוחים מ-4 מערכות לטבלת דיווח אחת\nבניית מעקבי Excel שהחליפו ספירות ידניות עבור 2 צוותים\nמענה יומיומי לשאלות נתונים אד-הוק עבור מנהלי תפעול"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "סטטיסטיקה",
        "start": "2016",
        "end": "2020",
        "notes": "קורסים ברגרסיה, מסדי נתונים והצגה חזותית של נתונים."
      }
    ],
    "skills": "SQL וניקוי נתונים\nPower BI ו-Tableau\nExcel (מתקדם)\nPython (pandas)\nעיצוב לוחות מחוונים\nיסודות בדיקות A/B",
    "languages": "אנגלית (שוטפת)\nוייטנאמית (רמת שיחה)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "מדען נתונים",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "מדען נתונים עם 5 שנות ניסיון בבניית מודלי למידת מכונה למסחר אלקטרוני. מודל המלצות שהושק העלה את ההכנסה לביקור ב-12%, ומודל נטישה מסמן כעת 80% מהלקוחות בסיכון. חזק ב-Python, ב-SQL ובפריסת מודלים.",
    "experience": [
      {
        "role": "מדען נתונים",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "פברואר 2022",
        "end": "",
        "current": true,
        "points": "שליחת מודל המלצות שהעלה את ההכנסה לביקור ב-12%\nבניית מודל נטישה המסמן 80% מהלקוחות בסיכון חודש מראש\nפריסת מודלים לסביבת ייצור עם צינורות ניטור ואימון מחדש\nהצגת תוצאות מודלים לצוותי מוצר ושיווק מדי חודש"
      },
      {
        "role": "מדען נתונים זוטר",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "יולי 2020",
        "end": "ינואר 2022",
        "current": false,
        "points": "בניית מודלי תחזית עבור 3 לקוחות קמעונאות בדיוק של 90%+\nניקוי והכנה של מערכי נתונים בני 10M+ שורות למידול\nכתיבת תיעוד כדי שלקוחות יוכלו להריץ מודלים בעצמם"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "מדעי הנתונים",
        "start": "2018",
        "end": "2020",
        "notes": "תזה על מערכות המלצה. תואר ראשון במתמטיקה (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nלמידת מכונה וסטטיסטיקה\nSQL ו-Spark\nפריסת מודלים (Docker, AWS)\nבדיקות A/B\nהמחשת נתונים",
    "languages": "אנגלית (שוטפת)\nערבית (שוטפת)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "מפתח אתרים",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "מפתח אתרים עם 4 שנות ניסיון בבניית אתרים מהירים ונגישים ב-HTML, CSS ו-JavaScript. בנה מחדש קופה של חנות שהעלתה המרות ב-18% ומתחזק 12 אתרי לקוחות עם 99.9% זמן פעילות. חזק בעיצוב רספונסיבי, ביצועים ויסודות SEO.",
    "experience": [
      {
        "role": "מפתח אתרים",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "מרץ 2022",
        "end": "",
        "current": true,
        "points": "בניית אתרים רספונסיביים ב-HTML, CSS, JavaScript ו-WordPress עבור 12 לקוחות\nבניית קופה של חנות מחדש, שהעלתה המרות ב-18%\nקיצור זמן טעינת העמוד הממוצע מ-4.2s ל-1.8s עם אופטימיזציה של תמונות וקוד\nשמירה על כל אתרי הלקוחות בזמינות של 99.9% עם ניטור וגיבויים"
      },
      {
        "role": "מפתח אתרים זוטר",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "יוני 2021",
        "end": "פברואר 2022",
        "current": false,
        "points": "בניית דפי נחיתה ותיקון באגים ב-20+ אתרי עסקים קטנים\nלימוד Git, עיצוב רספונסיבי ו-SEO בסיסי בפרויקטים חיים\nמענה לדוא\"ל של לקוחות ועדכוני תוכן באותו יום"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "מדעי המחשב",
        "start": "2017",
        "end": "2021",
        "notes": "קורסים בפיתוח ווב, מסדי נתונים ואינטראקציית אדם-מחשב."
      }
    ],
    "skills": "HTML, CSS ו-JavaScript\nReact ו-WordPress\nעיצוב רספונסיבי\nאופטימיזציה של מהירות עמוד\nGit ו-GitHub\nSEO בסיסי",
    "languages": "אנגלית (שוטפת)\nספרדית (שוטפת)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "מעצב גרפי",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "מעצב גרפי עם 5 שנות ניסיון במיתוג, אריזות ועיצוב למדיה חברתית. יצר זהויות מותג עבור 25+ עסקים קטנים ועיצוב אריזה מחדש שהעלה את מכירות המדף ב-14%. מיומן ב-Adobe Illustrator, ב-Photoshop וב-Figma.",
    "experience": [
      {
        "role": "מעצב גרפי",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "ינואר 2022",
        "end": "",
        "current": true,
        "points": "עיצוב זהויות מותג, אריזות וקמפיינים חברתיים עבור 25+ לקוחות\nעיצוב אריזה מחדש למותג מזון העלה את מכירות המדף ב-14%\nהפקת 30+ נכסי מדיה חברתית בשבוע באינסטגרם, ב-TikTok ובפייסבוק\nהצגת קונספטים ללקוחות ושינויים מהירים על פי משוב"
      },
      {
        "role": "מעצב גרפי זוטר",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "יולי 2020",
        "end": "דצמבר 2021",
        "current": false,
        "points": "עיצוב פליירים, תפריטים ופוסטים חברתיים למסעדות ולחנויות מקומיות\nהכנת קבצים מוכנים לדפוס ובדיקת הוכחות עם מדפיסים\nבניית ספריית תבניות שקיצצה את זמן העיצוב בשליש"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "עיצוב גרפי",
        "start": "2016",
        "end": "2020",
        "notes": "תיק עבודות בעיצוב מיתוג ואריזות."
      }
    ],
    "skills": "Adobe Illustrator ו-Photoshop\nFigma\nעיצוב זהות מותג\nעיצוב אריזות\nעיצוב מדיה חברתית\nהפקת דפוס",
    "languages": "אנגלית (שוטפת)\nקוריאנית (רמת שיחה)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "מעצב UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "מעצב UX עם 5 שנות ניסיון במחקר משתמשים ובעיצוב מוצרי מובייל ואינטרנט. עיצב מחדש תהליך הכנסה שקיצץ את הנטישה ב-35% והריץ 40+ מבחני שימושיות. מיומן ב-Figma, מחקר משתמשים, ויירפריימינג ואבות טיפוס.",
    "experience": [
      {
        "role": "מעצב UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "פברואר 2022",
        "end": "",
        "current": true,
        "points": "עיצוב מחדש של קליטה בנייד, שהפחית נטישה ב-35% ב-3 חודשים\nהרצת 40+ בדיקות שמישות וראיונות משתמשים בשנה\nבניית מסגרות חוטים ואבות טיפוס ב-Figma עבור 2 צוותי מוצר\nעבודה יומיומית עם מהנדסים ומנהלי מוצר על אספקה"
      },
      {
        "role": "מעצב UX זוטר",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "אוגוסט 2020",
        "end": "ינואר 2022",
        "current": false,
        "points": "עיצוב מסכים וזרימות עבור 5 אפליקציות לקוחות\nהרצת בדיקות שמישות ראשונות וכתיבת ממצאים ללקוחות\nבניית ספריית רכיבים שהאיצה את מסירת העיצוב"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "פסיכולוגיה",
        "start": "2016",
        "end": "2020",
        "notes": "תעודת עיצוב UX (General Assembly, 2020). קורסים באינטראקציית אדם-מחשב."
      }
    ],
    "skills": "מחקר משתמשים ובדיקות שמישות\nמסגרות חוטים ואבות טיפוס (Figma)\nארכיטקטורת מידע\nמערכות עיצוב\nמיפוי מסע לקוח\nסדנאות בעלי עניין",
    "languages": "אנגלית (שוטפת)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "מנהל שיווק",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "מנהל שיווק עם 8 שנות ניסיון בקמפיינים B2B וצרכניים. הגדיל לידים מוסמכים ב-60% בתוך שנה, השיק קו מוצרים שהגיע למכירות של $3M בשנה הראשונה, ומנהל תקציב שנתי של $500,000 בצוות של 5.",
    "experience": [
      {
        "role": "מנהל שיווק",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "מרץ 2021",
        "end": "",
        "current": true,
        "points": "הובלת צוות של 5 ותקציב שיווק שנתי של $500,000\nהגדלת לידים איכותיים ב-60% בשנה אחת עם תוכן וקמפיינים ממומנים\nהשקת קו מוצרים שהגיע למכירות של $3M בשנה הראשונה\nהפחתת העלות לליד ב-28% על ידי בנייה מחדש של מיקוד הקמפיין"
      },
      {
        "role": "מומחה שיווק",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "יוני 2017",
        "end": "פברואר 2021",
        "current": false,
        "points": "הרצת קמפייני דוא\"ל ל-80,000 מנויים עם שיעור פתיחה של 24%\nניהול חשבונות חברתיים שצמחו מ-5,000 ל-40,000 עוקבים\nארגון 6 ביתני תערוכות בשנה, המייצרים 300+ לידים כל אחד"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "שיווק",
        "start": "2013",
        "end": "2017",
        "notes": "קורסים בהתנהגות צרכנים, אנליטיקה וניהול מותג."
      }
    ],
    "skills": "אסטרטגיית קמפיינים ותכנונם\nשיווק תוכן ודוא\"ל\nפרסום ממומן (Google, Meta)\nאנליטיקת שיווק (GA4)\nהנהגת צוות\nניהול תקציב",
    "languages": "אנגלית (שוטפת)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "מנהל פרויקטים",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "מנהל פרויקטים (PMP) עם 7 שנות ניסיון במסירת פרויקטי תוכנה ובנייה בזמן ובתקציב. ניהל 15 פרויקטים בשווי של עד $4M, עם שיעור מסירה בזמן של 94%. מיומן ב-Agile, בניהול סיכונים ובתקשורת עם בעלי עניין.",
    "experience": [
      {
        "role": "מנהל פרויקטים",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "ניהול 15 פרויקטים בשווי של עד $4M, עם שיעור אספקה בזמן של 94%\nהרצת ספרינטים של Agile עבור 3 צוותים ודיווח התקדמות לבכירים מדי שבוע\nהפחתת חריגות הפרויקטים ב-30% עם סקירות סיכונים מוקדמות יותר\nתיאום ספקים, לקוחות וצוותים פנימיים על פני 4 אזורי זמן"
      },
      {
        "role": "רכז פרויקטים",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "יולי 2018",
        "end": "דצמבר 2020",
        "current": false,
        "points": "מעקב אחר לוחות זמנים, תקציבים והיתרים עבור 8 פרויקטי בנייה\nהכנת דוחות סטטוס וסיכומי ישיבות ללקוחות\nפתרון התנגשויות תזמון שחסכו 2 שבועות בבניית בית ספר"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "מנהל עסקים",
        "start": "2014",
        "end": "2018",
        "notes": "מוסמך PMP (2021). ScrumMaster מוסמך."
      }
    ],
    "skills": "תכנון ותזמון פרויקטים\nAgile ו-Scrum\nניהול סיכונים\nבקרת תקציב\nתקשורת עם בעלי עניין\nMS Project ו-Jira",
    "languages": "אנגלית (שוטפת)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "מנהל משאבי אנוש",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "מנהל משאבי אנוש עם 9 שנות ניסיון בגיוס, יחסי עובדים והטבות. קיצר את זמן הגיוס מ-45 ל-28 ימים, העלה את השימור ב-15%, ומנהל משאבי אנוש עבור 250 עובדים ב-3 אתרים. ידע ברמת CIPD בדיני עבודה ומדיניות.",
    "experience": [
      {
        "role": "מנהל משאבי אנוש",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "פברואר 2020",
        "end": "",
        "current": true,
        "points": "ניהול משאבי אנוש עבור 250 עובדים ב-3 אתרים, עם צוות של 3\nקיצור זמן הגיוס מ-45 ל-28 ימים על ידי בנייה מחדש של תהליך הראיונות\nהעלאת שימור העובדים ב-15% עם תוכנית קליטה וסקירה חדשה\nטיפול ביחסי עובדים, בתלונות ובעדכוני מדיניות"
      },
      {
        "role": "איש משאבי אנוש כללי",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "יוני 2016",
        "end": "ינואר 2020",
        "current": false,
        "points": "גיוס 120+ עובדים בשנה למלונות ולמסעדות\nהרצת בדיקות שכר והרשמת הטבות עבור 400 עובדים\nפתרון סכסוכי עובדים ושמירה על תחלופה מתחת לממוצע הענף"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "משאבי אנוש",
        "start": "2012",
        "end": "2016",
        "notes": "מוסמך SHRM-CP. קורסים בדיני עבודה והתנהגות ארגונית."
      }
    ],
    "skills": "גיוס וקליטה\nיחסי עובדים\nהטבות ושכר\nדיני עבודה\nניהול ביצועים\nHRIS (Workday, BambooHR)",
    "languages": "אנגלית (שוטפת)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "עורך דין שותף זוטר",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "עורך דין שותף זוטר עם 6 שנות ניסיון בליטיגציה מסחרית ודיני חוזים. ניהל 40+ תיקים, זכה בפסק דין מקוצר ב-8, וניסח חוזים בשווי $25M. התקבל ללשכת עורכי הדין של אילינוי; מיומן במחקר משפטי, ניסוח וייעוץ ללקוחות.",
    "experience": [
      {
        "role": "עורך דין שותף זוטר",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "ספטמבר 2020",
        "end": "",
        "current": true,
        "points": "ניהול 40+ תיקי ליטיגציה מסחרית מהגשה ועד פשרה\nזכייה בפסק דין מקוצר ב-8 תיקים ויישוב 20 נוספים בתנאים טובים\nניסוח חוזים ומשא ומתן עליהם בשווי של עד $25M\nייעוץ ללקוחות פנים אל פנים ובכתב בנושאי סיכון ואסטרטגיה"
      },
      {
        "role": "פקיד משפטי",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "אוגוסט 2019",
        "end": "אוגוסט 2020",
        "current": false,
        "points": "מחקר תקדימים וכתיבת תזכירים עבור 2 שופטים\nסקירת בקשות והכנת סיכומי ספסל עבור 100+ דיונים\nצפייה במשפטים ובוועידות פשרה במחלקות אזרחיות"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "משפטים",
        "start": "2016",
        "end": "2019",
        "notes": "התקבל ללשכת עורכי הדין של אילינוי (2019). כתב עת משפטי, עורך מאמרים."
      }
    ],
    "skills": "ליטיגציה מסחרית\nניסוח חוזים ומשא ומתן\nמחקר משפטי (Westlaw, LexisNexis)\nייעוץ ללקוחות\nחקירות וגילוי\nהגשות לבית משפט ונוהל",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "רוקח קליני",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "רוקח קליני (PharmD) עם 7 שנות ניסיון ברוקחות בבתי חולים ובקהילה. בודק 100+ מרשמי תרופות ביום, הפחית אירועי תרופות שליליים ב-25% בזכות פרוטוקול בדיקה חדש, ומייעץ למטופלים על שימוש בטוח בתרופות. בעל רישיון בפנסילבניה.",
    "experience": [
      {
        "role": "רוקח קליני",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "ינואר 2020",
        "end": "",
        "current": true,
        "points": "סקירת 100+ הזמנות תרופות ביום לבטיחות, מינון ואינטראקציות\nהפחתת אירועי תרופות שליליים ב-25% עם פרוטוקול בדיקה כפולה חדש\nייעוץ לרופאים ולאחיות בבחירת תרופות למטופלים מורכבים\nמנהל את סבבי הסטיוארדשיפ האנטיביוטי של בית החולים פעמיים בשבוע"
      },
      {
        "role": "רוקח צוות",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "יולי 2018",
        "end": "דצמבר 2019",
        "current": false,
        "points": "ניפוק 200+ מרשמים ביום עם אפס טעויות ניפוק\nייעוץ למטופלים על תרופות חדשות, תופעות לוואי ואחסון\nמתן חיסוני שפעת וביצוע בדיקות לחץ דם"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "רוקחות",
        "start": "2014",
        "end": "2018",
        "notes": "רוקח מוסמך (פנסילבניה). מומחה מוסמך בפרמקותרפיה (BCPS)."
      }
    ],
    "skills": "סקירת תרופות ובטיחות\nפרמקולוגיה קלינית\nייעוץ למטופלים\nמערכות בית מרקחת (Epic, PioneerRx)\nסטיוארדשיפ אנטיביוטי\nשירותי חיסון",
    "languages": "אנגלית (שוטפת)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "רופא שיניים כללי",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "רופא שיניים כללי (DDS) עם 8 שנות ניסיון ברפואת שיניים משחזרת, אסתטית ומונעת. מטפל ב-25+ מטופלים ביום במרפאה בת 2,000 מטופלים, עם ציון שביעות רצון מטופלים של 98%. מיומן בכתרים, שתלים, טיפולי שורש ומיישרים שקופים.",
    "experience": [
      {
        "role": "רופא שיניים כללי",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "פברואר 2019",
        "end": "",
        "current": true,
        "points": "טיפול ב-25+ מטופלים ביום: סתימות, כתרים, טיפולי שורש ועקירות\nציון שביעות רצון מטופלים של 98% ב-1,200+ ביקורות\nהשתלת 15+ שתלים בחודש וניהול מקרי מיישרים שקופים\nפיקוח על 2 היגייניסטים ו-4 סייעות שיניים"
      },
      {
        "role": "רופא שיניים שותף",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "יולי 2017",
        "end": "ינואר 2019",
        "current": false,
        "points": "מתן רפואת שיניים כללית למרפאה של 1,500 מטופלים\nהנהגת כתרים באותו יום, שקיצצו ביקורים חוזרים ב-40%\nהריץ ביקורי הסברה בבתי ספר על בריאות הפה של ילדים"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "רפואת שיניים",
        "start": "2013",
        "end": "2017",
        "notes": "רופא שיניים מוסמך (אריזונה). מוסמך Invisalign. מוסמך CPR/BLS."
      }
    ],
    "skills": "רפואת שיניים משקמת (כתרים, סתימות)\nטיפול שורש\nשתלים דנטליים\nמיישרים שקופים\nטיפול ותקשורת עם מטופלים\nצילומי רנטגן דיגיטליים ו-CEREC",
    "languages": "אנגלית (שוטפת)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "פיזיותרפיסט",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "פיזיותרפיסט (DPT) עם 6 שנות ניסיון בשיקום אורתופדי וספורט. מטפל ב-12-15 מטופלים ביום, כשה-90% מהם מגיעים ליעדים שלהם במסגרת המפגשים המתוכננים. מיומן בטיפול ידני, מרשם פעילות גופנית ובמבחני חזרה לספורט.",
    "experience": [
      {
        "role": "פיזיותרפיסט",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "מרץ 2021",
        "end": "",
        "current": true,
        "points": "טיפול ב-12-15 מטופלים ביום לפציעות ספורט, שיקום לאחר ניתוח וכאבי גב\n90% מהמטופלים מגיעים ליעדים שלהם בתוך מספר המפגשים המתוכנן\nתכנון בדיקות חזרה לספורט המשמשות 3 קבוצות מקומיות\nחניכת 2 בוגרים חדשים ופיקוח על השמות סטודנטים"
      },
      {
        "role": "פיזיותרפיסט צוות",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "אוגוסט 2019",
        "end": "פברואר 2021",
        "current": false,
        "points": "מתן שיקום באשפוז למטופלים לאחר ניתוח ושבץ\nהרצת שיעורי התעמלות קבוצתיים עבור 20+ מטופלים מבוגרים בשבוע\nתיעוד ההתקדמות ב-Epic והעברה לצוותי המחלקות"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "פיזיותרפיה",
        "start": "2016",
        "end": "2019",
        "notes": "פיזיותרפיסט מוסמך (אורגון). מומחה קליני אורתופדי (OCS)."
      }
    ],
    "skills": "שיקום אורתופדי וספורט\nטיפול ידני\nמרשם פעילות גופנית\nבדיקות חזרה לספורט\nחינוך מטופלים\nתיעוד (Epic)",
    "languages": "אנגלית (שוטפת)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "שף ראשי",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "שף ראשי עם 10 שנות ניסיון במטבחים קריאוליים ואמריקאיים מודרניים. מוביל צוות של 12 במסעדה בת 200 מקומות, הפחית עלויות מזון ב-15% בעזרת הזמנות מהודקות, וזכה ב-'Best New Menu' ממדריך האוכל העירוני בשנת 2025.",
    "experience": [
      {
        "role": "שף ראשי",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "הובלת בריגדה של 12 במסעדה בת 200 מקומות, המגישה 300+ סועדים בלילה\nהפחתת עלויות המזון ב-15% עם הזמנות מהודקות ותפריט עונתי\nזכה ב-'Best New Menu' ממדריך האוכל העירוני בשנת 2025\nעיצוב תפריטים, הכשרת טבחים וניהול הפס בשירותי שישי ושבת"
      },
      {
        "role": "Sous Chef",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "יוני 2017",
        "end": "דצמבר 2020",
        "current": false,
        "points": "ניהול המטבח כשהשף הראשי נעדר, כיסוי 150 סועדים בלילה\nניהול מלאי, הזמנות ויחסי ספקים\nהכשרת 8 טבחי קו וקיצוץ תחלופת העובדים בשליש"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "דיפלומה",
        "field": "אמנויות קולינריות",
        "start": "2014",
        "end": "2016",
        "notes": "מוסמך מנהל הגנת מזון ServSafe."
      }
    ],
    "skills": "עיצוב תפריטים ותמחור\nמטבח קריאולי ואמריקאי מודרני\nהנהגת מטבח (בריגדה של 12)\nבטיחות מזון (ServSafe)\nניהול ספקים\nקייטרינג לבנקטים ולאירועים",
    "languages": "אנגלית (שוטפת)\nספרדית (שוטפת)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "שוטר",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "שוטר עם 8 שנות ניסיון בסיור, שיטור קהילתי וחקירות. מגיב ל-30+ קריאות בשבוע, עם ציונים לשבח על הרגעה וקשרי קהילה. בעל הכשרה בהתערבות במשבר, עזרה ראשונה וכתיבת דוחות.",
    "experience": [
      {
        "role": "שוטר",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "יוני 2019",
        "end": "",
        "current": true,
        "points": "סיור במחוז של 40,000 תושבים, מענה ל-30+ קריאות בשבוע\nקבלת 2 ציונים לשבח על הרגעה והסברה קהילתית\nחקירת גניבות ותקיפות, וכתיבת דוחות המשמשים ב-50+ תביעות\nחניכת 3 קצינים חדשים במהלך הכשרת שטח"
      },
      {
        "role": "שוטר סיור",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "אוגוסט 2017",
        "end": "מאי 2019",
        "current": false,
        "points": "סיור בכבישי המחוז ומענה לקריאות חירום\nמסירת מסמכי בית משפט וסיוע בהובלת אסירים\nהשלמת הכשרה בהתערבות במשבר ובעזרה ראשונה"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "תעודה",
        "field": "אכיפת חוק",
        "start": "2017",
        "end": "2017",
        "notes": "בוגר האקדמיה להכשרת שוטרי שלום של אוהיו. הכשרה בצוות התערבות במשבר."
      }
    ],
    "skills": "סיור ותגובת חירום\nשיטור קהילתי\nהתערבות במשבר והרגעה\nכתיבת דוחות\nחקירות\nעזרה ראשונה והחייאה",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "כבאי / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "כבאי ו-EMT עם 7 שנות ניסיון בכיבוי אש, חילוץ ותגובה רפואית דחופה. הגיב ל-900+ קריאות, כולל שריפות מבנים, חילוצי רכב ומצבי חירום רפואיים. בעל הכשרת HazMat ורישום בטיחות נקי.",
    "experience": [
      {
        "role": "כבאי / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "מרץ 2020",
        "end": "",
        "current": true,
        "points": "מענה ל-900+ קריאות אש, חילוץ ורפואה ברחבי מחוז של 3 תחנות\nמתן טיפול רפואי חירום כ-EMT מוסמך ב-60% מהקריאות\nמוכשר לחומרים מסוכנים; מוביל טיהור באירועי חומרים כימיים\nהכשרת מגויסים חדשים בטיפול בצינורות, בסולמות ובטכניקות חיפוש"
      },
      {
        "role": "כבאי מתנדב",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "יוני 2018",
        "end": "פברואר 2020",
        "current": false,
        "points": "מענה לשריפות שטח ומבנים כמתנדב\nהשלים הכשרת כבאי I ו-II ו-EMT-Basic\nסיוע בהרצת הרצאות בטיחות אש קהילתיות בבתי ספר"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "תעודה",
        "field": "מדעי האש",
        "start": "2017",
        "end": "2018",
        "notes": "כבאי I ו-II. מוסמך EMT-Basic. הוכשר לפעולות חומרים מסוכנים."
      }
    ],
    "skills": "דיכוי אש וחילוץ\nטיפול רפואי חירום (EMT)\nפעולות חומרים מסוכנים\nסולמות, צינורות ואוורור\nבטיחות אש בקהילה\nעבודת צוות תחת לחץ",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "שרברב מוסמך",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "שרברב ראשי מוסמך עם 11 שנות ניסיון בשרברבות מגורים ומסחר. השלים 600+ עבודות בשנה, מצנרת גסה ועד התקנות דוודים, עם שיעור תיקון בביקור ראשון של 98%. מיומן בהתקנת צינורות, ניקוי ניקוז ועמידה בתקנים.",
    "experience": [
      {
        "role": "שרברב ראשי",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "ינואר 2019",
        "end": "",
        "current": true,
        "points": "השלמת 600+ עבודות למגורים ולמסחר בשנה\nהתקנת דוודים, מחממי מים והתקנות גסות מלאות לאמבטיות\nשיעור תיקון בביקור ראשון של 98% בקריאות שירות\nפיקוח על 3 שוליות ואישור עבודתם"
      },
      {
        "role": "שרברב אומן",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "יוני 2014",
        "end": "דצמבר 2018",
        "current": false,
        "points": "ניהול עבודות שרברבות לבנייה חדשה עבור 40+ בתים בשנה\nפתיחת סתימות בניקוז ותיקון נזילות לבתים ולמסעדות\nלימוד התקנת גז ומניעת זרימה חוזרת"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "תעודה",
        "field": "טכנולוגיית שרברבות",
        "start": "2013",
        "end": "2014",
        "notes": "רישיון שרברב ראשי (טנסי). מוסמך מניעת זרימה חוזרת."
      }
    ],
    "skills": "שרברבות מגורים ומסחרית\nהתאמת צינורות והלחמה\nניקוי ניקוז ובדיקת מצלמה\nהתקנות דוודים ומחממי מים\nהתקנת גז\nתאימות לקוד שרברבות",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "נגר אומן",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "נגר אומן עם 9 שנות ניסיון בשלד, עבודות גמר וארונות בהתאמה אישית. בנה שלדים ל-30+ בתים והתאים מטבחים ביותר מ-60 בתים, עם מוניטין של מדידות מדויקות וגימורים נקיים. מיומן בקריאת תוכניות ועבודה לפי תקן.",
    "experience": [
      {
        "role": "נגר אומן",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "פברואר 2019",
        "end": "",
        "current": true,
        "points": "מסגור 30+ בתים והתקנת מטבחים ב-60+ בתים\nבניית ארונות וגימורים בהתאמה אישית בסובלנות של 1/16 אינץ'\nקריאה ומעקב אחר תוכניות אדריכליות, סימון שגיאות לפני שהן עולות כסף\nהכשרת 2 שוליות בטכניקות מסגור וגימור"
      },
      {
        "role": "שוליית נגר",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "יוני 2016",
        "end": "ינואר 2019",
        "current": false,
        "points": "סיוע בעבודות מסגור, קירות גבס וריצוף בשיפוצים\nלימוד שימוש בטוח במסורים, רוטרים ואקדחי מסמרים\nהשלמת 8,000 שעות התלמדות ומעבר בחינת ההסמכה של בעל מלאכה"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "תעודה",
        "field": "נגרות",
        "start": "2015",
        "end": "2016",
        "notes": "נגר אומן. מוסמך OSHA 10."
      }
    ],
    "skills": "עבודות מסגור ומבנה\nנגרות גימור וקישוט\nארונות בהתאמה אישית\nקריאת תוכניות אדריכליות\nכלי עבודה חשמליים ובטיחות\nקירות גבס וריצוף",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "מורה בבית ספר תיכון (מתמטיקה)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "מורה בבית ספר תיכון עם 8 שנות ניסיון בהוראת מתמטיקה לכיתות 9-12. העלה את שיעורי המעבר באלגברה מ-64% ל-83% ומאמן את נבחרת המתמטיקה ל-2 גמרים מדינתיים. מיומן בהוראה מותאמת, הכנה למבחנים ותקשורת עם הורים.",
    "experience": [
      {
        "role": "מורה למתמטיקה (כיתות 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "אוגוסט 2019",
        "end": "",
        "current": true,
        "points": "לימוד אלגברה, גאומטריה וטרום-חשבון ל-120 תלמידים ב-5 כיתות\nהעלאת שיעורי המעבר באלגברה מ-64% ל-83% ב-3 שנים\nאימון נבחרת המתמטיקה ל-2 גמרים מדינתיים\nהרצת שיעורי עזר אחרי בית הספר עבור 30 תלמידים בשבוע"
      },
      {
        "role": "מורה למתמטיקה (כיתות 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "אוגוסט 2017",
        "end": "יוני 2019",
        "current": false,
        "points": "לימוד אלגברה וגאומטריה ל-100 תלמידים בשנה\nהנהגת מבחנים שבועיים שקיצצו פערי שיעורי בית בחצי\nארגן את יריד המתמטיקה הראשון של בית הספר עם 200 תלמידים"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "חינוך למתמטיקה",
        "start": "2013",
        "end": "2017",
        "notes": "רישיון הוראה ממלכתי (ניו המפשייר, כיתות 7-12, מתמטיקה)."
      }
    ],
    "skills": "הוראת מתמטיקה (מאלגברה ועד טרום-חשבון)\nהכנה לבחינות\nהוראה מובחנת\nניהול כיתה\nתקשורת עם הורים\nGoogle Classroom ו-Desmos",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "מורה לגיל הרך",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "מורה לגיל הרך עם 6 שנות ניסיון בטיפול בילדים בגילאי 3-5. מיומן בלמידה מבוססת משחק, הנחיית התנהגות ותקשורת עם הורים. בנה תוכנית פונטיקה שהעלתה את ציוני המוכנות לבית הספר בכל הכיתה.",
    "experience": [
      {
        "role": "מורה לגיל הרך",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "אוגוסט 2020",
        "end": "",
        "current": true,
        "points": "לימוד וטיפול בכיתה של 18 ילדים בגילאי 3-5\nבניית תוכנית פונטיקה שהעלתה את ציוני המוכנות לבית הספר בכל הכיתה\nתכנון נושאים שבועיים, מלאכות ומשחקי חוץ\nשיתוף עדכונים יומיים ודוחות התקדמות תקופתיים עם הורים"
      },
      {
        "role": "עוזר מורה לגיל הרך",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "יוני 2018",
        "end": "יולי 2020",
        "current": false,
        "points": "תמיכה במורה המובילה בכיתה של 20 ילדים\nהרצת שעת סיפור, שירים ופעילויות אמנות מדי יום\nשמירה על רשומות בטיחות והיגיינה לפי תקני המדינה"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "תואר עמית",
        "field": "חינוך לגיל הרך",
        "start": "2016",
        "end": "2018",
        "notes": "תעודת עמית בהתפתחות הילד (CDA). מוסמך עזרה ראשונה והחייאה."
      }
    ],
    "skills": "למידה מבוססת משחק\nהנחיית התנהגות\nפונטיקה ואוריינות מוקדמת\nתקשורת עם הורים\nבטיחות בכיתה\nתכנון אמנות ויצירה",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "עובד סוציאלי לילדים ומשפחות",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "עובד סוציאלי מוסמך עם 7 שנות ניסיון בתמיכה בילדים ובמשפחות. מנהל עומס של 25 משפחות, מתאם שירותים בין בתי ספר וספקי בריאות, ומשלים דוחות לבית משפט ששופטים מסתמכים עליהם. מיומן בהערכה, תמיכה במשבר והגנה.",
    "experience": [
      {
        "role": "עובד סוציאלי לילדים ומשפחות",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "ינואר 2020",
        "end": "",
        "current": true,
        "points": "ניהול תיק של 25 משפחות, עם ביקורים בבתים ובבתי ספר מדי שבוע\nהשלמת דוחות לבית המשפט ומתן עדות בבית המשפט לענייני משפחה\nתיאום תמיכת דיור, בריאות וחינוך למשפחות פגיעות\nקיצור זמן ההמתנה להערכה ב-20% עם מערכת מיון חדשה"
      },
      {
        "role": "עובד תיק",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "יולי 2018",
        "end": "דצמבר 2019",
        "current": false,
        "points": "תמיכה ב-40+ משפחות בדיור זמני עם הטבות והפניות\nהרצת סדנאות שבועיות להורות ולתקצוב\nשמירה על רישומי תיקים מדויקים לביקורות ולדוחות מימון"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "עבודה סוציאלית",
        "start": "2016",
        "end": "2018",
        "notes": "עובד סוציאלי מוסמך (אוהיו). קורסים ברווחת הילד ומערכות משפחה."
      }
    ],
    "skills": "ניהול תיקים (25 משפחות)\nשמירה על ילדים\nדוחות לבית משפט לענייני משפחה\nתמיכה במשבר\nתיאום רב-סוכנותי\nהפניות להטבות ולדיור",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "עוזר משפטי",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "עוזר משפטי עם 6 שנות ניסיון בתמיכה בליטיגציה ובהגשות תאגידיות. מנהל גילוי עבור 30+ תיקים, מנסח כתבי טענות וחוזים, ושומר על מועדי הגשה עם רישום של 100% עמידה בזמנים. מיומן ב-Westlaw, בגילוי אלקטרוני ובתוכנות ניהול תיקים.",
    "experience": [
      {
        "role": "עוזר משפטי",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "פברואר 2021",
        "end": "",
        "current": true,
        "points": "ניהול גילוי עבור 30+ תיקי ליטיגציה, סקירת 10,000+ מסמכים\nניסוח כתבי טענות, בקשות וחוזים לסקירת עורך הדין\nשמירה על רקורד של 100% עמידה בזמנים בהגשות לבית המשפט ובמועדים\nתיאום עדים והכנת תיקי משפט"
      },
      {
        "role": "עוזר משפטי",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "אוגוסט 2019",
        "end": "ינואר 2021",
        "current": false,
        "points": "ראיונות קליטה עבור 20+ לקוחות בשבוע\nהכנת טפסים והגשות עבור תיקי דיור ומשפחה\nתרגום מסמכים משפטיים עבור לקוחות דוברי ספרדית"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "תואר עמית",
        "field": "לימודי עוזר משפטי",
        "start": "2017",
        "end": "2019",
        "notes": "עוזר משפטי מוסמך NALA (CP). תוכנית מאושרת ABA."
      }
    ],
    "skills": "תמיכה בליטיגציה וגילוי\nניסוח משפטי\nגילוי אלקטרוני (Relativity)\nניהול תיקים (Clio)\nהגשות לבית משפט ומועדים אחרונים\nמחקר משפטי (Westlaw)",
    "languages": "אנגלית (שוטפת)\nספרדית (שוטפת)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "פקיד הנהלת חשבונות",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "פקיד הנהלת חשבונות עם 5 שנות ניסיון בזכאים, הפקת חשבוניות והתאמות בנק. מעבד 300+ חשבוניות בחודש בדיוק של 99.8% ושומר על ספרים נקיים לסגירת חודש. מיומן ב-QuickBooks, ב-Excel ובתמיכה בשכר.",
    "experience": [
      {
        "role": "פקיד הנהלת חשבונות",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "אפריל 2021",
        "end": "",
        "current": true,
        "points": "עיבוד 300+ חשבוניות ספקים בחודש בדיוק של 99.8%\nהתאמת 6 חשבונות בנק מדי שבוע וסימון הפרשים באותו יום\nהכנת נתוני שכר עבור 45 עובדים ומרדף אחר תשלומי לקוחות באיחור\nשמירה על רשומות מסודרות לביקורת סוף השנה, עם אפס ממצאים"
      },
      {
        "role": "עוזר חשבונות",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "יוני 2019",
        "end": "מרץ 2021",
        "current": false,
        "points": "הזנת חשבוניות מכירה וקבלות ל-QuickBooks מדי יום\nמענה לשאלות ספקים על תשלומים בטלפון ובדוא\"ל\nתיוק מסמכים ושמירה על ארכיון מעודכן"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "תעודה",
        "field": "הנהלת חשבונות",
        "start": "2018",
        "end": "2019",
        "notes": "משתמש מוסמך QuickBooks."
      }
    ],
    "skills": "חשבונות לתשלום ולגבייה\nהתאמות בנק\nחשבוניות (300+ בחודש)\nQuickBooks ו-Excel\nתמיכת שכר\nהזנת נתונים (65 מילים לדקה)",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "עוזר מנהלי",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "עוזרת מנהלית עם 6 שנות ניסיון בשמירה על תפקוד חלק של משרדים. מנהלת יומנים של 4 מנהלים, מארגנת נסיעות ופגישות, ומטפלת ב-100+ הודעות דוא\"ל ביום. ידועה בדיוק, בדיסקרטיות ובקור רוח תחת לחץ של מועדים.",
    "experience": [
      {
        "role": "עוזר מנהלי",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "ניהול לוחות שנה, נסיעות ופגישות עבור 4 מנהלים בכירים\nטיפול ב-100+ הודעות דוא\"ל ביום, ניסוח תשובות וסימון סדרי עדיפויות\nהכנת מסמכי דירקטוריון ורישום פרוטוקולים בישיבות חודשיות\nניהול ציוד משרדי והזמנות ספקים, הפחתת עלויות ב-12%"
      },
      {
        "role": "פקיד קבלה",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "אוגוסט 2019",
        "end": "דצמבר 2020",
        "current": false,
        "points": "קבלת 60+ מטופלים ביום וניהול ספר התורים\nמענה לטלפונים וטיפול בשאלות ביטוח\nשמירה על רשומות מטופלים מדויקות וסודיות"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "תואר עמית",
        "field": "מנהל משרדי",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "ניהול לוח שנה ונסיעות\nדוא\"ל והתכתבות\nפרוטוקולי ישיבות\nMicrosoft Office (Word, Excel, Outlook)\nהזנת נתונים (70 מילים לדקה)\nציוד משרדי וספקים",
    "languages": "אנגלית (שוטפת)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "פקיד בנק",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "פקיד בנק עם 4 שנות ניסיון במתן שירות ל-80+ לקוחות ביום בדיוק ובאכפתיות. קופת מזומנים מאוזנת עד הסנט במשך 3 שנים, ללא חוסרים. מיומן בהפקדות, משיכות, בדיקות הונאה והפניית לקוחות למוצרים המתאימים.",
    "experience": [
      {
        "role": "פקיד בנק",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "מרץ 2022",
        "end": "",
        "current": true,
        "points": "שירות 80+ לקוחות ביום: הפקדות, משיכות, תשלומים והעברות\nמגירת מזומנים מאוזנת עד הסנט במשך 3 שנים עם אפס חוסרים\nאיתור ועצירת 12 ניסיונות הונאה, חיסכון ללקוחות של $90,000+\nהפניית לקוחות למוצרי חיסכון והלוואות, עמידה ביעדי הפניות מדי רבעון"
      },
      {
        "role": "עמית שירות לקוחות",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "יוני 2021",
        "end": "פברואר 2022",
        "current": false,
        "points": "פתיחת חשבונות חדשים והנפקת כרטיסי חיוב לחברים\nמענה לשאלות טלפוניות על יתרות ודפי חשבון\nסיוע לחברים בהגדרת בנקאות מקוונת וניידת"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "תואר עמית",
        "field": "עסקים",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "טיפול במזומן ואיזון\nהפקדות, משיכות ותשלומים\nזיהוי הונאות\nשירות לקוחות\nתוכנת בנקאות (Fiserv)\nהפניות למוצרים",
    "languages": "אנגלית (שוטפת)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "מנהל מכירות",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "מנהל מכירות עם 10 שנות ניסיון בהובלת צוותים של עד 15 נציגים. הגדיל את ההכנסה האזורית מ-$4M ל-$7.5M בתוך 3 שנים, העלה את שיעור הזכייה מ-22% ל-34% והפחית את תחלופת הנציגים בחצי בעזרת אימון וקליטה טובים יותר.",
    "experience": [
      {
        "role": "מנהל מכירות אזורי",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "הובלת צוות של 15 נציגי מכירות ברחבי Texas ו-Oklahoma\nהגדלת ההכנסות האזוריות מ-$4M ל-$7.5M ב-3 שנים\nהעלאת שיעור הזכיות מ-22% ל-34% עם אימון טוב יותר וסקירות צינור\nהפחתת תחלופת הנציגים בחצי עם תוכנית קליטה חדשה"
      },
      {
        "role": "נציג מכירות",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "יוני 2015",
        "end": "דצמבר 2020",
        "current": false,
        "points": "מכירת ציוד תעשייתי ל-80+ חשבונות, עמידה ביעד 5 שנים ברציפות\nהנציג המוביל באזור במשך 3 שנים רצופות\nבניית רשת הפניות שהביאה 25% מהעסקים החדשים"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "שיווק",
        "start": "2011",
        "end": "2015",
        "notes": "קורסים בניהול מכירות ומשא ומתן."
      }
    ],
    "skills": "הנהגת צוות מכירות (15 נציגים)\nצמיחת הכנסות ותחזיות\nניהול צינור מכירות (Salesforce)\nאימון וקליטה\nמשא ומתן\nתכנון טריטוריה",
    "languages": "אנגלית (שוטפת)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "מנהל בנייה",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "מנהל בנייה עם 12 שנות ניסיון במסירת פרויקטים מסחריים ולמגורים בשווי של עד $12M. השלים 20+ פרויקטים עם שיעור עמידה בזמנים של 95%, אפס פציעות עם אובדן זמן עבודה באתרים שלו, ותקציבים שנשמרו בטווח של 3%. מיומן בתזמון, בניהול קבלני משנה ובבטיחות.",
    "experience": [
      {
        "role": "מנהל בנייה",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "פברואר 2020",
        "end": "",
        "current": true,
        "points": "אספקת פרויקטים מסחריים ולמגורים בשווי של עד $12M\nהשלמת 20+ פרויקטים עם שיעור עמידה בזמנים של 95% ותקציבים בתוך 3%\nניהול 30+ קבלני משנה ו-50 עובדים ב-3 אתרים פעילים\nאפס פציעות שגרמו לאובדן זמן בכל האתרים במשך 4 שנים"
      },
      {
        "role": "מפקח אתר",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "יוני 2013",
        "end": "ינואר 2020",
        "current": false,
        "points": "ניהול תפעול יומיומי של אתרים לבנייני משרדים וקמעונאות\nתיאום משלוחים, בדיקות ולוחות זמנים של קבלני משנה\nשמירה על רשומות בטיחות נקיות ומעבר כל בדיקת OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "בניית בניינים",
        "start": "2009",
        "end": "2013",
        "notes": "מוסמך OSHA 30. מועמד CCM (מנהל בנייה מוסמך)."
      }
    ],
    "skills": "תזמון פרויקטים (MS Project, Procore)\nבקרת תקציב\nניהול קבלני משנה\nבטיחות באתר (OSHA 30)\nקריאת תוכניות\nדיווח ללקוחות",
    "languages": "אנגלית (שוטפת)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "עוזר רפואי מוסמך",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "עוזר רפואי מוסמך עם 5 שנות ניסיון ברפואת משפחה וברפואה דחופה. קולט 25+ מטופלים ביום, מודד מדדים חיוניים, לוקח דם ומנהל את הקבלה עם ציון שביעות רצון מטופלים של 97%. מיומן ב-EHR, לקיחת דם ובדיקות ביטוח.",
    "experience": [
      {
        "role": "עוזר רפואי מוסמך",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "אפריל 2021",
        "end": "",
        "current": true,
        "points": "קליטת 25+ מטופלים ביום: סימנים חיוניים, היסטוריות והכנה לבדיקה\nלקיחת דם והרצת בדיקות מעבדה בסיסיות עם שיעור הצלחה של 99% בדקירה ראשונה\nניהול דלפק הקבלה, תזמון ובדיקות ביטוח\nציון שביעות רצון מטופלים של 97% ב-800+ סקרים"
      },
      {
        "role": "עוזר רפואי",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "אוגוסט 2019",
        "end": "מרץ 2021",
        "current": false,
        "points": "מיון מטופלים נכנסים וסיוע לרופאים בפרוצדורות קטנות\nמתן חיסונים וטיפול באיסוף דגימות\nשמירה על חדרי בדיקה מצוידים, נקיים ומוכנים בין מטופלים"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "תעודה",
        "field": "סיוע רפואי",
        "start": "2018",
        "end": "2019",
        "notes": "עוזר רפואי מוסמך (CMA, AAMA). מוסמך BLS. הכשרה בלקיחת דם."
      }
    ],
    "skills": "קליטת מטופלים וסימנים חיוניים\nלקיחת דם\nEHR (eClinicalWorks)\nחיסונים\nאימות ביטוח\nניהול דלפק הקבלה",
    "languages": "אנגלית (שוטפת)\nספרדית (שוטפת)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "סטודנט",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "תלמיד תיכון בשנה האחרונה עם מוטיבציה, ציונים חזקים וניסיון בעבודה חלקית. לומד מהר, אמין וטוב עם אנשים. מחפש תפקיד ראשון במשרה מלאה או עבודה חלקית לצד לימודים במכללה.",
    "experience": [
      {
        "role": "עוזר מכירות במשרה חלקית",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "ספטמבר 2024",
        "end": "",
        "current": true,
        "points": "שירות 50+ לקוחות במשמרת בסופי שבוע ואחרי בית הספר\nטיפול במזומן, חידוש מלאי במדפים ושמירה על תצוגות מסודרות\nמהימן לפתיחת החנות בבוקרי שבת"
      },
      {
        "role": "מורה עזר מתנדב",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "ינואר 2024",
        "end": "יוני 2025",
        "current": false,
        "points": "חניכה לתלמידים צעירים במתמטיקה פעמיים בשבוע\nסיוע בארגון תוכנית הקריאה לקיץ עבור 40 ילדים"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "תעודת בגרות",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "ממוצע 3.6. רשימת כבוד, 3 שנים. קפטן נבחרת הדיבייט."
      }
    ],
    "skills": "שירות לקוחות\nטיפול במזומן\nעבודת צוות\nניהול זמן\nMicrosoft Office\nדיבור בפני קהל (צוות דיבייט)",
    "languages": "אנגלית (שוטפת)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "בוגר טרי \u2014 מנהל עסקים",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "בוגר מנהל עסקים טרי עם ניסיון התמחות בשיווק ובתפעול. ארגן תחרות עסקית בקמפוס עם 200 משתתפים והשלים התמחות בת 6 חודשים שבה קיצץ את זמן הדיווח בחצי. להוט להתחיל קריירה במשרה מלאה וללמוד מהר.",
    "experience": [
      {
        "role": "מתמחה בשיווק",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "ינואר 2025",
        "end": "יוני 2025",
        "current": false,
        "points": "ניהל את החשבונות החברתיים של החברה, והגדיל עוקבים מ-2,000 ל-6,500\nבניית לוח מחוונים לדיווח שקיצץ את זמן הדיווח השבועי בחצי\nכתיבת 20 פוסטים בבלוג שהביאו 15,000+ קריאות"
      },
      {
        "role": "מוביל מתנדבי אירועים",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "ספטמבר 2024",
        "end": "מאי 2025",
        "current": false,
        "points": "ארגון תחרות עסקית עם 200 משתתפים ו-12 שופטים\nניהול תקציב של $5,000 וצוות של 8 מתנדבים"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "מנהל עסקים",
        "start": "2021",
        "end": "2025",
        "notes": "ממוצע 3.5. רשימת הדיקן, 2 שנים. פרויקט שנה אחרונה על שיווק לעסקים קטנים."
      }
    ],
    "skills": "שיווק במדיה חברתית\nExcel ו-Google Sheets\nמיומנויות הצגה\nארגון אירועים\nעבודת צוות\nניתוח נתונים בסיסי",
    "languages": "אנגלית (שוטפת)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "עמית שיווק זוטר",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "עמית שיווק זוטר עם 2 שנים של ניסיון בתוכן, דוא\"ל ומדיה חברתית. הגדיל ניוזלטר של לקוח מ-1,000 ל-4,000 מנויים ומנהל קמפיינים עם שיעור פתיחה ממוצע של 22%. מוכן ליותר אחריות ולתיק לקוחות גדול יותר.",
    "experience": [
      {
        "role": "עמית שיווק זוטר",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "יולי 2024",
        "end": "",
        "current": true,
        "points": "הגדלת ניוזלטר של לקוח מ-1,000 ל-4,000 מנויים ב-14 חודשים\nכתיבה ותזמון של 12 פוסטים חברתיים בשבוע עבור 4 לקוחות\nהרצת קמפייני דוא\"ל עם שיעור פתיחה ממוצע של 22%\nדיווח חודשי על תוצאות קמפיינים ללקוחות"
      },
      {
        "role": "מתמחה בשיווק",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "ינואר 2024",
        "end": "יוני 2024",
        "current": false,
        "points": "כתיבת תיאורי מוצרים עבור 200+ פריטים באתר החברה\nסיוע בהרצת קמפיין מבצעי אביב שהעלה את ההזמנות המקוונות ב-15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "תקשורת",
        "start": "2020",
        "end": "2024",
        "notes": "ממוצע 3.4. קורסים בשיווק דיגיטלי וכתיבת מדיה."
      }
    ],
    "skills": "כתיבת תוכן\nשיווק בדוא\"ל (Mailchimp)\nניהול מדיה חברתית\nGoogle Analytics\nCanva\nדיווח ללקוחות",
    "languages": "אנגלית (שוטפת)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "מפקח תפעול",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "מפקח תפעול עם 8 שנות ניסיון בניהול צוותי מחסן של 20-30 אנשים. הפחית שגיאות ליקוט ב-30%, העלה שילוח בזמן מ-90% ל-97% והכשיר 15 עובדים חדשים. מוכן לתפקיד מנהל תפעול עם אתר ותקציב גדולים יותר.",
    "experience": [
      {
        "role": "מפקח תפעול",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "מרץ 2021",
        "end": "",
        "current": true,
        "points": "פיקוח על 25 עובדי מחסן ב-2 משמרות באתר של 90,000 רגל רבוע\nהפחתת שגיאות הליקוט ב-30% עם נוהלי בדיקה חדשים וסריקת ברקודים\nהעלאת שיעור השיגור בזמן מ-90% ל-97% ב-2 שנים\nהכשרת 15 עובדים חדשים וקידום 3 לראשי צוות"
      },
      {
        "role": "ראש צוות",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "יוני 2017",
        "end": "פברואר 2021",
        "current": false,
        "points": "הובלת צוות של 10 לוקטים ואורזים במשמרת הלילה\nהנהגת רוטציה שקיצצה שעות נוספות ב-20% בלי החמצת מועדים\nהרצת תדריכי בטיחות ושמירה על הצוות ללא תאונות במשך 2 שנים"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "ניהול שרשרת אספקה",
        "start": "2013",
        "end": "2017",
        "notes": "חגורה צהובה של Six Sigma."
      }
    ],
    "skills": "הנהגת צוות (25 עובדים)\nתפעול מחסן\nשיפור תהליכים\nניהול בטיחות\nבקרת מלאי\nWMS ו-Excel",
    "languages": "אנגלית (שוטפת)\nהינדי (רמת שיחה)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "מנהל פרויקטים בכיר",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "מנהל פרויקטים בכיר עם 14 שנות ניסיון במסירת פרויקטי תוכנה בשווי של עד $8M. הוביל 30+ פרויקטים עם שיעור עמידה בזמנים של 92%, בנה PMO מאפס וחנך 10 מנהלי פרויקטים. ידוע במסירה רגועה תחת לחץ ובדיווח כן לבכירים.",
    "experience": [
      {
        "role": "מנהל פרויקטים בכיר",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "ינואר 2019",
        "end": "",
        "current": true,
        "points": "אספקת פרויקטי תוכנה בשווי של עד $8M עם שיעור עמידה בזמנים של 92%\nבנה את ה-PMO של החברה מאפס: תבניות, דיווח וממשל\nחניכת 10 מנהלי פרויקטים וניהול קהילת מנהלי הפרויקטים החודשית\nדיווח ישיר ל-CTO על תוכנית של 40 אנשים"
      },
      {
        "role": "מנהל פרויקטים",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "יוני 2012",
        "end": "דצמבר 2018",
        "current": false,
        "points": "ניהול 20+ פרויקטים עבור לקוחות קמעונאות ובריאות\nהנהגת נוהלי Agile שקיצצו את זמן האספקה ב-25%\nהגדלת 2 לקוחות מפתח מ-$500k ל-$2M בהכנסות שנתיות"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "מערכות מידע",
        "start": "2008",
        "end": "2012",
        "notes": "מוסמך PMP (2015). ScrumMaster מוסמך. קורסי MBA (2018-2019, לא הושלמו)."
      }
    ],
    "skills": "אספקת תוכניות ופרויקטים\nהקמת PMO וממשל\nAgile ו-Waterfall\nבקרת תקציב ($8M)\nדיווח לבכירים\nליווי צוות",
    "languages": "אנגלית (שוטפת)\nספרדית (רמת שיחה)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "מנהל תפעול ראשי",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "מנהל תפעול ראשי עם 18 שנות ניסיון בהרחבת פעילות של חברות קמעונאות ולוגיסטיקה. הגדיל פעילות של 200 איש ל-900 איש ב-6 אתרים, העלה את מרווח ה-EBITDA מ-8% ל-14% והוביל 2 רכישות. ניסיון בדיווח לדירקטוריון ובקשרי משקיעים.",
    "experience": [
      {
        "role": "מנהל תפעול ראשי",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "ינואר 2021",
        "end": "",
        "current": true,
        "points": "ניהול תפעול עבור 900 אנשים ב-6 אתרים ותקציב של $180M\nהעלאת שולי ה-EBITDA מ-8% ל-14% ב-3 שנים\nהובלת 2 רכישות ושילוב שני הצוותים בתוך 6 חודשים\nדיווח חודשי לדירקטוריון על תפעול, סיכונים וצמיחה"
      },
      {
        "role": "סגן נשיא לתפעול",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "יוני 2014",
        "end": "דצמבר 2020",
        "current": false,
        "points": "הרחבת התפעול מ-200 ל-600 אנשים ב-4 אתרים\nפתיחת 3 מרכזי הפצה בזמן ומתחת לתקציב\nבניית צוות ההנהגה שעדיין מנהל את העסק היום"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "מנהל עסקים",
        "start": "2010",
        "end": "2012",
        "notes": "תואר ראשון בכלכלה, NYU (2006). קורס ממשל תאגידי (2020)."
      }
    ],
    "skills": "תפעול בקנה מידה (900 אנשים)\nבעלות על רווח והפסד ($180M)\nמיזוגים ורכישות\nדיווח לדירקטוריון\nאסטרטגיית צמיחה\nבניית צוות הנהגה",
    "languages": "אנגלית (שוטפת)",
    "template": "executive"
  }
};
});
