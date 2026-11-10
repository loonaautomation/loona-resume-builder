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
      "title": "رجسٹرڈ نرس",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "رجسٹرڈ نرس جس کے پاس طبی-جراحی اور ٹیلی میٹری یونٹس کا 6 سال کا تجربہ ہے۔ مریض جائزے، IV تھراپی، ادویات دینے اور الیکٹرانک ہیلتھ ریکارڈز میں ماہر۔ شدید دباؤ والی صورتحال میں مریضوں اور خاندانوں کے ساتھ پرسکون، واضح ابلاغ کے لیے معروف۔",
    "experience": [
      {
        "role": "رجسٹرڈ نرس",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "جون 2021",
        "end": "",
        "current": true,
        "points": "فی شفٹ 5-6 مریضوں کی دیکھ بھال 32 بستروں والے طبی-جراحی یونٹ میں، بشمول جائزہ، ادویات دینا اور زخموں کی دیکھ بھال\n4 نئی گریجویٹ نرسوں کو تربیت اور رہنمائی دینا، ان کا ابتدائی وقت 2 ہفتے کم کرنا\nسپردگی کے وقت دوہری جانچ روٹین متعارف کرا کر یونٹ پر ادویات کی غلطیاں 18% کم کیں\nتمام دیکھ بھال Epic الیکٹرانک ہیلتھ ریکارڈز میں درست طور پر درج کرنا"
      },
      {
        "role": "اسٹاف نرس",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "اگست 2019",
        "end": "مئی 2021",
        "current": false,
        "points": "روزانہ 40+ بغیر اپائنٹمنٹ مریضوں کی ٹرائیج کی، فوری کیسز کو اسی دن نگہداشت کے لیے ترجیح دی\nماہانہ کمیونٹی آؤٹ ریچ تقریبات میں ویکسینیں اور صحت کی اسکریننگ کی\nماہرین کے ریفرلز کا رابطہ کیا اور ٹیسٹ نتائج کی پیروی کی"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "نرسنگ",
        "start": "2015",
        "end": "2019",
        "notes": "رجسٹرڈ نرس لائسنس (Texas)۔ BLS اور ACLS سرٹیفائیڈ۔"
      }
    ],
    "skills": "مریض کا جائزہ\nIV تھراپی اور ادویات دینا\nالیکٹرانک ہیلتھ ریکارڈز (Epic)\nٹیلی میٹری نگرانی\nمریض اور خاندان کی تعلیم\nانفیکشن کنٹرول",
    "languages": "انگریزی (روانی سے)\nہسپانوی (گفتگو کی حد تک)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "سافٹ ویئر ڈویلپر",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "سافٹ ویئر ڈویلپر جس کے پاس Python اور JavaScript میں ویب ایپلیکیشنز بنانے کا 5 سال کا تجربہ ہے۔ ایسی خصوصیات جاری کیں جو 200,000+ صارفین استعمال کرتے ہیں، API جوابی اوقات 40% کم کیے اور مونولتھ کی مائیکرو سروسز کی طرف منتقلی کی قیادت کی۔ جانچ، کوڈ جائزے اور واضح دستاویز بندی میں مضبوط۔",
    "experience": [
      {
        "role": "سافٹ ویئر ڈویلپر",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "مارچ 2022",
        "end": "",
        "current": true,
        "points": "Python (Django) اور React میں کسٹمرز کے لیے ویب فیچرز بنانا اور برقرار رکھنا، جو 200,000+ صارفین کی خدمت کرتے ہیں\nکیشنگ شامل کر کے اور سست سوالات ٹھیک کر کے اوسط API جوابی وقت 850 ms سے 500 ms کر دیا\nبلنگ سروس کی مائیکرو سروسز کی طرف منتقلی صفر ڈاؤن ٹائم کے ساتھ کی قیادت\nہفتے میں 10+ پل درخواستیں دیکھنا اور 2 جونیئر ڈویلپرز کی رہنمائی"
      },
      {
        "role": "جونیئر ڈویلپر",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "جولائی 2020",
        "end": "فروری 2022",
        "current": false,
        "points": "JavaScript میں اندرونی ڈیش بورڈز بنائے جنہوں نے 3 ٹیموں کی دستی اسپریڈ شیٹس کی جگہ لے لی\nخودکار ٹیسٹ لکھے جنہوں نے کوریج 45% سے 78% تک بڑھائی\nپہلے سال میں پروڈکٹ بھر میں 120+ بگز ٹھیک کیے"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "کمپیوٹر سائنس",
        "start": "2016",
        "end": "2020",
        "notes": "ڈیٹا بیسز، الگورتھمز اور آپریٹنگ سسٹمز میں کورس ورک۔"
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript اور React\nPostgreSQL اور Redis\nREST APIs اور مائیکرو سروسز\nGit اور CI/CD\nخودکار ٹیسٹنگ (pytest, Jest)",
    "languages": "انگریزی (روانی سے)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "ایلیمنٹری اسکول ٹیچر",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "ایلیمنٹری اسکول ٹیچر جس کے پاس 7 سال کا تجربہ ہے گریڈ 3-5 کو پڑھانے کا۔ مختلف درجے کی تدریس، کلاس روم مینجمنٹ اور والدین سے رابطے میں ماہر۔ میری کلاس میں مطالعے کی مہارت 58% سے 81% تک دو اسکول سالوں میں بڑھائی۔",
    "experience": [
      {
        "role": "ایلیمنٹری اسکول ٹیچر (گریڈ 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "اگست 2020",
        "end": "",
        "current": true,
        "points": "26 شاگردوں کی کلاس کو مطالعہ، ریاضی اور سائنس پڑھانا، بشمول 5 جن کے انفرادی سیکھنے کے منصوبے ہیں\nدو سال میں رہنمائی یافتہ مطالعہ گروپس سے کلاس کی مطالعہ مہارت 58% سے 81% تک بڑھائی\nہر خاندان کے لیے ہفتہ وار والدین نیوز لیٹر اور مدت وار پیشرفت میٹنگز چلانا\nاسکول کے مطالعہ کلب کی قیادت 40 شاگردوں کے لیے گریڈ 3-5 میں"
      },
      {
        "role": "ایلیمنٹری اسکول ٹیچر (گریڈ 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "اگست 2018",
        "end": "جون 2020",
        "current": false,
        "points": "تمام بنیادی مضامین میں 24 شاگردوں کے لیے روزانہ اسباق کی منصوبہ بندی اور تدریس\nرویے کی روٹینز متعارف کرائیں جنہوں نے کلاس روم کی خلل آدھی کر دی\n120 شاگردوں اور 80 والدین کے ساتھ سال گروپ کا سائنس میلہ منظم کیا"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "ایلیمنٹری تعلیم",
        "start": "2014",
        "end": "2018",
        "notes": "ریاستی تدریسی لائسنس (Ohio, grades K-5)۔ مطالعہ اینڈورسمنٹ۔"
      }
    ],
    "skills": "مختلف درجے کی تدریس\nکلاس روم مینجمنٹ\nرہنمائی یافتہ مطالعہ گروپس\nوالدین سے رابطہ\nسبق کی منصوبہ بندی\nGoogle Classroom",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "سینئر اکاؤنٹنٹ",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA جس کے پاس مہینے کے اختتام کی بندش، مالیاتی رپورٹنگ اور اندرونی آڈٹ کا 8 سال کا تجربہ ہے۔ مصالحتی عمل کو دوبارہ بنا کر کھاتے 3 دن جلدی بند کیے اور ایک آڈٹ سال میں $240,000 قابلِ وصولی زائد ادائیگیاں تلاش کیں۔ Excel، QuickBooks اور ERP سسٹمز میں مضبوط۔",
    "experience": [
      {
        "role": "سینئر اکاؤنٹنٹ",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "$40M کاروباری یونٹ کے مہینے کے اختتام کی بندش کی ذمہ داری، مصالحتیں دوبارہ بنانے کے بعد 3 دن جلدی مکمل کرنا\nسینئر مینجمنٹ کے لیے ماہانہ مالیاتی گوشوارے اور فرق رپورٹس تیار کرنا\n$240,000 قابلِ وصولی سپلائر زائد ادائیگیاں 2024 کے اندرونی آڈٹ کے دوران تلاش کیں\n2 اسٹاف اکاؤنٹنٹس کی نگرانی اور ان کے جرنل اندراج کا جائزہ"
      },
      {
        "role": "اسٹاف اکاؤنٹنٹ",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "جون 2017",
        "end": "دسمبر 2020",
        "current": false,
        "points": "25 چھوٹے کاروباری کلائنٹس کے لیے ٹیکس ریٹرنز اور مالیاتی گوشوارے تیار کیے\n8 کلائنٹس کے آڈٹ میں معاونت، کنٹرولز کی جانچ اور نتائج کی دستاویز بندی\nExcel میں فکسڈ اثاثہ رجسٹر خودکار بنایا، جس سے مہینے میں 6 گھنٹے بچے"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "اکاؤنٹنگ",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois)۔ AICPA کے رکن۔"
      }
    ],
    "skills": "مہینے کے اختتام کی بندش اور مصالحتیں\nمالیاتی رپورٹنگ اور فرق کا تجزیہ\nاندرونی آڈٹ\nExcel (پیوٹ ٹیبلز، VLOOKUP)\nQuickBooks اور SAP\nٹیکس تیاری",
    "languages": "انگریزی (روانی سے)\nمینڈارن (گفتگو کی حد تک)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A ٹرک ڈرائیور",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "CDL Class A ڈرائیور جس کے پاس لمبی مسافت اور علاقائی مال برداری کا 9 سال کا تجربہ ہے۔ 900,000 سے زائد حادثات سے پاک میل، 99% بروقت ڈیلیوری کی شرح اور ریفریجریٹڈ، فلیٹ بیڈ اور ڈرائی وین لوڈز کا تجربہ۔ صاف ڈرائیونگ ریکارڈ، HazMat اور ٹینکر اینڈورسمنٹس۔",
    "experience": [
      {
        "role": "لمبی مسافت کا ٹرک ڈرائیور",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "اپریل 2019",
        "end": "",
        "current": true,
        "points": "Texas، Oklahoma اور New Mexico میں علاقائی راستوں پر ہفتے میں 2,800+ میل گاڑی چلانا\n99% بروقت ڈیلیوری شرح سالانہ 1,100+ لوڈز میں برقرار رکھنا\nریفریجریٹڈ اور ڈرائی وین مال لے جانا؛ روزانہ سفر سے پہلے اور بعد کے معائنے مکمل کرنا\nمجموعی طور پر 900,000 سے زائد حادثات سے پاک میل"
      },
      {
        "role": "ڈیلیوری ٹرک ڈرائیور",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "مارچ 2016",
        "end": "مارچ 2019",
        "current": false,
        "points": "Dallas-Fort Worth علاقے میں روزانہ 15-20 تعمیراتی مقامات پر تعمیراتی مواد پہنچایا\nفورک لفٹ چلائیں اور فلیٹ بیڈ لوڈز DOT معیار کے مطابق محفوظ کیے\nصفر DOT خلاف ورزیوں کے ساتھ ڈیلیوری کاغذات اور لاگز درست رکھے"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "سرٹیفکیٹ",
        "field": "کمرشل ڈرائیونگ (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "HazMat اور ٹینکر اینڈورسمنٹس کے ساتھ CDL Class A۔ صاف ڈرائیونگ ریکارڈ۔"
      }
    ],
    "skills": "لمبی مسافت اور علاقائی ڈرائیونگ\nریفریجریٹڈ اور فلیٹ بیڈ لوڈز\nDOT ضوابط اور لاگ بکس\nسفر سے پہلے معائنے\nراستے کی منصوبہ بندی (GPS, ELD)\nفورک لفٹ چلانا",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "ریٹیل سیلز ایسوسی ایٹ",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "ریٹیل سیلز ایسوسی ایٹ جس کے پاس الیکٹرانکس اور ملبوسات اسٹورز کا 4 سال کا تجربہ ہے۔ مسلسل ٹیم کے ٹاپ 3 فروخت کنندگان میں، وارنٹیوں اور لوازمات پر 32% اٹیچ شرح کے ساتھ۔ دوستانہ، کاؤنٹر پر تیز اور اسٹور کھولنے اور بند کرنے کے لیے قابلِ بھروسا۔",
    "experience": [
      {
        "role": "سینئر سیلز ایسوسی ایٹ",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "فروری 2022",
        "end": "",
        "current": true,
        "points": "روزانہ 60+ کسٹمرز کو الیکٹرانکس اور لوازمات فروخت کرنا؛ اسٹور فروخت میں ٹاپ 3 مسلسل 8 سہ ماہیوں تک\nوارنٹیوں اور لوازمات پر 32% اٹیچ ریٹ حاصل کیا، جو ٹیم میں سب سے زیادہ ہے\n6 نئے آنے والوں کو کاؤنٹر، اسٹاک روم اور کسٹمر سروس معیارات کی تربیت دینا\nقابلِ بھروسا چابی دار: اسٹور کھولنا اور بند کرنا اور نقدی گنتی سنبھالنا"
      },
      {
        "role": "سیلز ایسوسی ایٹ",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "جون 2021",
        "end": "جنوری 2022",
        "current": false,
        "points": "مصروف دکان میں کسٹمرز کو لباس اور سائز چننے میں مدد دی\nہر شفٹ میں ڈسپلے صاف رکھے اور شیلف دوبارہ بھریں\nواپسیاں اور تبادلے شائستگی سے سنبھالے، شکایات کم سے کم رکھیں"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "ایسوسی ایٹ ڈگری",
        "field": "بزنس",
        "start": "2019",
        "end": "2021",
        "notes": "ریٹیل میں کام کرتے ہوئے جز وقتی تعلیم۔"
      }
    ],
    "skills": "کسٹمر سروس اور اپ سیلنگ\nنقدی سنبھالنا اور POS سسٹمز\nپروڈکٹ علم (الیکٹرانکس)\nاسٹاک مینجمنٹ\nاسٹور کھولنا اور بند کرنا\nٹیم تربیت",
    "languages": "انگریزی (روانی سے)\nہسپانوی (روانی سے)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "کسٹمر سروس نمائندہ",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "کسٹمر سروس نمائندہ جس کے پاس فون، ای میل اور لائیو چیٹ سپورٹ سنبھالنے کا 5 سال کا تجربہ ہے۔ روزانہ 45+ کیسز 96% اطمینان اسکور اور 88% پہلے رابطے پر حل کی شرح کے ساتھ حل کرنا۔ ناراض کسٹمرز کے ساتھ پرسکون اور حل تلاش کرنے میں تیز۔",
    "experience": [
      {
        "role": "کسٹمر سروس نمائندہ",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "مئی 2021",
        "end": "",
        "current": true,
        "points": "بلنگ، آرڈرز اور تکنیکی خرابیوں کے لیے روزانہ 45+ فون، ای میل اور چیٹ کیسز سنبھالنا\n96% کسٹمر اطمینان اسکور اور 88% پہلے رابطے پر حل کی شرح برقرار رکھنا\nمشکل کالز کو پرسکون کرنا اور شکایات کو دوبارہ کاروبار میں بدلنا\n5 نئے ایجنٹوں کو اسکرپٹس، سسٹمز اور لہجے کی تربیت دینا"
      },
      {
        "role": "سپورٹ ایجنٹ",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "ستمبر 2019",
        "end": "اپریل 2021",
        "current": false,
        "points": "آرڈرز، واپسیوں اور رقم کی واپسی کے بارے میں کسٹمر ای میلز اور چیٹس کے جواب دیے\nاوسط پہلے جواب کا وقت 2 گھنٹے سے کم رکھا\n20 مدد مرکز مضامین لکھے جنہوں نے دہرائے جانے والے سوالات ایک چوتھائی کم کیے"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "ایسوسی ایٹ ڈگری",
        "field": "بزنس ایڈمنسٹریشن",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "فون، ای میل اور لائیو چیٹ سپورٹ\nشکایت سنبھالنا اور کشیدگی کم کرنا\nCRM سسٹمز (Zendesk, Salesforce)\nبلنگ اور آرڈر پوچھ گچھ\nٹائپنگ 55 wpm\nٹیم تربیت",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "آپریشنز منیجر",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "آپریشنز منیجر جس کے پاس 12 سال کا تجربہ ہے گودام اور تقسیم میں 80 افراد تک کی ٹیمیں چلانے کا۔ آرڈر پراسیسنگ لاگت 22% کم کی، بروقت ترسیلات 91% سے 98% تک بڑھائیں اور دو نئی سائٹس وقت پر اور بجٹ کے اندر کھولیں۔",
    "experience": [
      {
        "role": "آپریشنز منیجر",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "فروری 2020",
        "end": "",
        "current": true,
        "points": "120,000 مربع فٹ تقسیم مرکز 80 عملے کے ساتھ 3 شفٹوں میں چلانا\nپک راستوں اور شفٹ نمونوں کو دوبارہ ڈیزائن کر کے آرڈر پراسیسنگ لاگت میں 22% کمی\nبروقت ترسیلات 91% سے 98% تک 18 مہینوں میں بڑھائیں\n2 نئی سائٹس وقت پر اور بجٹ سے 8% کم پر کھولیں"
      },
      {
        "role": "گودام سپروائزر",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "جون 2013",
        "end": "جنوری 2020",
        "current": false,
        "points": "25 گودام عملے اور 4,000+ آرڈرز کی روزانہ روانگی کی نگرانی کی\nبارکوڈ اسکیننگ متعارف کرائی، چننے کی غلطیاں 35% کم کیں\nحفاظتی تربیت چلائی جس نے سائٹ کو 3 سال حادثات سے پاک رکھا"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "آپریشنز مینجمنٹ",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt۔"
      }
    ],
    "skills": "ٹیم قیادت (80 عملے تک)\nگودام اور تقسیم\nعمل کی بہتری\nبجٹ سازی اور لاگت کنٹرول\nحفاظت کا انتظام\nERP اور WMS سسٹمز",
    "languages": "انگریزی (روانی سے)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "لائسنس یافتہ الیکٹریشن",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "لائسنس یافتہ ماہر الیکٹریشن جس کے پاس رہائشی اور تجارتی کام کا 8 سال کا تجربہ ہے۔ وائرنگ، پینل اپگریڈز، لائٹنگ اور خرابی تلاش کرنے میں ماہر، 400+ کاموں میں صاف حفاظتی ریکارڈ کے ساتھ۔ NEC کوڈ کا علم اور شاگردوں کی نگرانی کا تجربہ۔",
    "experience": [
      {
        "role": "ماہر الیکٹریشن",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "مارچ 2019",
        "end": "",
        "current": true,
        "points": "400+ رہائشی اور تجارتی کام مکمل کیے: وائرنگ، پینل اپگریڈز، لائٹنگ اور EV چارجرز\nخرابیاں تیزی سے تشخیص اور مرمت کرنا، پہلی وزٹ پر 92% ٹھیک کرنے کی شرح کے ساتھ\n2 شاگردوں کی نگرانی اور ان کے کام کو ضابطے کے مطابق منظور کرنا\nصفر وقت ضائع کرنے والی چوٹوں کے ساتھ صاف حفاظتی ریکارڈ برقرار رکھنا"
      },
      {
        "role": "الیکٹریشن کا شاگرد",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "جون 2016",
        "end": "فروری 2019",
        "current": false,
        "points": "نئی تعمیر کی وائرنگ اور ری وائرنگ میں لائسنس یافتہ الیکٹریشنز کی معاونت\nکنڈیوٹ موڑنا، کیبل کھینچنا اور پینل لگانا سیکھا\n8,000 اپرنٹس شپ گھنٹے مکمل کیے اور کاریگر کا امتحان پہلی بار میں پاس کیا"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "سرٹیفکیٹ",
        "field": "الیکٹریکل ٹیکنالوجی",
        "start": "2015",
        "end": "2016",
        "notes": "ماہر الیکٹریشن لائسنس (Colorado)۔ OSHA 30 سرٹیفائیڈ۔"
      }
    ],
    "skills": "رہائشی اور تجارتی وائرنگ\nپینل اپگریڈز اور EV چارجرز\nخرابی تلاش اور جانچ\nNEC ضابطے کی پابندی\nکنڈیوٹ موڑنا اور کیبل کھینچنا\nشاگردوں کی نگرانی",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "مالیاتی تجزیہ کار",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "مالیاتی تجزیہ کار جس کے پاس بجٹ سازی، پیش گوئی اور سرمایہ کاری کے تجزیے کا 6 سال کا تجربہ ہے۔ ایسی پیش گوئی ماڈلز بنائے جنہوں نے بجٹ فرق 30% کم کیا اور $50M سرمایہ کاری فیصلوں کی حمایت کی۔ Excel، SQL اور مالیاتی ماڈلنگ میں مضبوط۔",
    "experience": [
      {
        "role": "مالیاتی تجزیہ کار",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "اپریل 2021",
        "end": "",
        "current": true,
        "points": "$120M پورٹ فولیو کے لیے ماہانہ پیش گوئیاں اور سالانہ بجٹ بنانا\nڈرائیور پر مبنی پیش گوئی ماڈل سے بجٹ فرق میں 30% کمی\n$50M مالیت کے سرمایہ کاری فیصلوں کی حمایت ویلیوایشن اور منظر نامہ تجزیے سے کرنا\nماہانہ نتائج CFO اور محکمہ سربراہان کو پیش کرنا"
      },
      {
        "role": "جونیئر مالیاتی تجزیہ کار",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "جولائی 2019",
        "end": "مارچ 2021",
        "current": false,
        "points": "12 شاخوں کے لیے ہفتہ وار کارکردگی رپورٹس تیار کیں\nExcel میں رپورٹنگ خودکار بنائی، جس سے ہفتے میں 10 گھنٹے بچے\nقرض پورٹ فولیو کے تجزیے میں کریڈٹ ٹیم کی معاونت"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "فنانس",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II امیدوار۔ ویلیوایشن اور کارپوریٹ فنانس میں کورس ورک۔"
      }
    ],
    "skills": "مالیاتی ماڈلنگ اور پیش گوئی\nبجٹ سازی اور فرق کا تجزیہ\nویلیوایشن (DCF، موازنہ)\nExcel (ایڈوانسڈ) اور SQL\nBloomberg Terminal\nڈیٹا کی بصری پیشکش (Power BI)",
    "languages": "انگریزی (روانی سے)\nہندی (روانی سے)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "سول انجینئر",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "سول انجینئر (PE) جس کے پاس سڑک اور پانی کے انفراسٹرکچر کے ڈیزائن کا 7 سال کا تجربہ ہے۔ 12 میل شاہراہ کی توسیع اور 8,000 گھروں کی خدمت کرنے والے بارش کے پانی کے نظام کے ڈیزائن کی قیادت کی۔ AutoCAD Civil 3D، لاگت کے تخمینے اور اجازت ناموں کے رابطے میں ماہر۔",
    "experience": [
      {
        "role": "سول انجینئر",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "12 میل شاہراہ توسیع کے ڈیزائن کی قیادت، سروے سے تعمیراتی دستاویزات تک\n8,000 گھروں کی خدمت کرنے والا بارش کے پانی کا نظام ڈیزائن کیا، شہر سے پہلی بار میں منظور\n4 ایجنسیوں کے ساتھ اجازت ناموں کا رابطہ اور $2.5M ڈیزائن بجٹ کا انتظام\nلائسنس یافتہ پروفیشنل انجینئر کے طور پر نقشوں کا جائزہ اور مہر"
      },
      {
        "role": "جونیئر سول انجینئر",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "جولائی 2018",
        "end": "دسمبر 2020",
        "current": false,
        "points": "20+ رہائشی ترقیات کے لیے گریڈنگ اور نکاسی آب کے منصوبے تیار کیے\nسڑک پروجیکٹس کے لیے لاگت تخمینے اور مقدار کی فہرستیں چلائیں\nسائٹ معائنوں میں شرکت اور پیشرفت رپورٹس لکھیں"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "سول انجینئرنگ",
        "start": "2014",
        "end": "2018",
        "notes": "پروفیشنل انجینئر لائسنس (Washington)۔ EIT 2018 میں پاس۔"
      }
    ],
    "skills": "سڑک اور نکاسی آب ڈیزائن\nAutoCAD Civil 3D\nبارش کے پانی کی ماڈلنگ\nلاگت تخمینہ\nاجازت رابطہ\nپروجیکٹ شیڈولنگ (MS Project)",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "مکینیکل انجینئر",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "مکینیکل انجینئر جس کے پاس HVAC سسٹمز اور پیداواری آلات ڈیزائن کرنے کا 6 سال کا تجربہ ہے۔ توانائی کا استعمال 18% کم کیا 3 پلانٹس میں دوبارہ ڈیزائن شدہ ڈکٹ ورک اور کنٹرولز سے، اور ایک مشین کی نئی ڈیزائننگ کی قیادت جس نے پیداوار 25% بڑھائی۔ SolidWorks، FEA اور حرارتی تجزیے میں ماہر۔",
    "experience": [
      {
        "role": "مکینیکل انجینئر",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "فروری 2021",
        "end": "",
        "current": true,
        "points": "3 پلانٹس کے لیے HVAC اور پیداواری آلات ڈیزائن کرنا جن میں 400+ عملہ ہے\nڈکٹ ورک اور کنٹرول ترتیب کو دوبارہ ڈیزائن کر کے توانائی کے استعمال میں 18% کمی\nایک مشین کی نئی ڈیزائننگ کی قیادت جس نے بغیر اضافی فرش جگہ کے پیداوار 25% بڑھائی\nپروٹو ٹائپنگ سے پہلے نئے پرزوں پر FEA اور حرارتی تجزیہ چلانا"
      },
      {
        "role": "جونیئر مکینیکل انجینئر",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "اگست 2019",
        "end": "جنوری 2021",
        "current": false,
        "points": "آٹوموٹیو کلائنٹس کے لیے SolidWorks میں پرزے اور اسمبلیاں ماڈل کیں\nنقشے، مواد کے بل اور جانچ رپورٹس تیار کیں\nپروٹو ٹائپ تعمیرات کی حمایت کی اور دکان میں فٹ مسائل حل کیے"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "مکینیکل انجینئرنگ",
        "start": "2015",
        "end": "2019",
        "notes": "تھرموڈائنامکس، سیال میکینکس اور مشین ڈیزائن میں کورس ورک۔"
      }
    ],
    "skills": "HVAC ڈیزائن\nSolidWorks اور AutoCAD\nFEA اور حرارتی تجزیہ\nمشین ڈیزائن\nتوانائی کی کارکردگی\nGD&T اور برداشت",
    "languages": "انگریزی (روانی سے)\nکورین (گفتگو کی حد تک)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "الیکٹریکل انجینئر",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "الیکٹریکل انجینئر جس کے پاس ایمبیڈڈ سسٹمز اور پاور الیکٹرانکس کا 6 سال کا تجربہ ہے۔ ایسے کنٹرول بورڈز ڈیزائن کیے جو اب 50,000+ آلات میں استعمال ہوتے ہیں اور اجزا کی نئی ڈیزائننگ سے بورڈ کی لاگت میں 22% کمی کی۔ Altium، C، فرم ویئر ٹیسٹنگ اور EMC مطابقت میں ماہر۔",
    "experience": [
      {
        "role": "الیکٹریکل انجینئر",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "مارچ 2021",
        "end": "",
        "current": true,
        "points": "ایمبیڈڈ کنٹرول بورڈز ڈیزائن کرنا جو سالانہ 50,000+ آلات میں استعمال ہوتے ہیں\nپاور اسٹیج کو دوبارہ ڈیزائن کر کے اور متبادل حاصل کر کے بورڈ کی لاگت میں 22% کمی\nEMC مطابقت جانچ کی قیادت، 4 پروڈکٹ لائنز پر پہلی بار میں پاس\nمائیکرو کنٹرولرز کے لیے C میں فرم ویئر لکھنا اور جائزہ لینا"
      },
      {
        "role": "جونیئر الیکٹریکل انجینئر",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "جولائی 2019",
        "end": "فروری 2021",
        "current": false,
        "points": "صارف اور صنعتی کلائنٹس کے لیے Altium میں PCB لے آؤٹ کیے\nپروٹو ٹائپس بنائے اور جانچے، ہارڈ ویئر کی خرابیاں دور کیں\nجانچ طریقے لکھے جنہوں نے پیداواری جانچ وقت 30% کم کیا"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "الیکٹریکل انجینئرنگ",
        "start": "2015",
        "end": "2019",
        "notes": "ایمبیڈڈ سسٹمز، پاور الیکٹرانکس اور سگنل پروسیسنگ میں کورس ورک۔"
      }
    ],
    "skills": "ایمبیڈڈ سسٹمز اور PCB ڈیزائن\nAltium Designer\nC اور فرم ویئر\nپاور الیکٹرانکس\nEMC مطابقت کی جانچ\nآسیلوسکوپس اور لیب آلات",
    "languages": "انگریزی (روانی سے)\nگجراتی (گفتگو کی حد تک)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "ڈیٹا اینالسٹ",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "ڈیٹا اینالسٹ جس کے پاس سیلز اور آپریشنز ڈیٹا کو فیصلوں میں بدلنے کا 4 سال کا تجربہ ہے۔ ایسے ڈیش بورڈز بنائے جو 60+ منیجرز استعمال کرتے ہیں، ماہانہ رپورٹنگ کا وقت 3 دن سے 4 گھنٹے کر دیا اور سالانہ $180,000 مالیت کی قیمتوں کی غلطی تلاش کی۔ SQL، Excel اور Power BI میں مضبوط۔",
    "experience": [
      {
        "role": "ڈیٹا اینالسٹ",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "جنوری 2022",
        "end": "",
        "current": true,
        "points": "Power BI ڈیش بورڈز بنانا جو 60+ اسٹور اور علاقائی منیجرز استعمال کرتے ہیں\nخودکار SQL پائپ لائنز سے ماہانہ رپورٹنگ 3 دن سے 4 گھنٹے کر دی\nپروموشن ڈیٹا کا آڈٹ کر کے سالانہ $180,000 مالیت کی قیمتوں کی غلطی تلاش کی\nماہانہ نتائج تجارتی ٹیم کو پیش کرنا"
      },
      {
        "role": "جونیئر ڈیٹا اینالسٹ",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "اگست 2020",
        "end": "دسمبر 2021",
        "current": false,
        "points": "4 سسٹمز کے ڈیلیوری ڈیٹا کو صاف کر کے ایک رپورٹنگ ٹیبل میں جوڑا\nExcel ٹریکرز بنائے جنہوں نے 2 ٹیموں کی دستی گنتی کی جگہ لے لی\nآپریشنز منیجرز کے روزانہ کے فوری ڈیٹا سوالات کے جواب دیے"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "شماریات",
        "start": "2016",
        "end": "2020",
        "notes": "ریگریشن، ڈیٹا بیسز اور ڈیٹا کی بصری پیشکش میں کورس ورک۔"
      }
    ],
    "skills": "SQL اور ڈیٹا صفائی\nPower BI اور Tableau\nExcel (ایڈوانسڈ)\nPython (pandas)\nڈیش بورڈ ڈیزائن\nA/B ٹیسٹنگ بنیادیات",
    "languages": "انگریزی (روانی سے)\nویتنامی (گفتگو کی حد تک)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "ڈیٹا سائنٹسٹ",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "ڈیٹا سائنٹسٹ جس کے پاس ای کامرس کے لیے مشین لرننگ ماڈلز بنانے کا 5 سال کا تجربہ ہے۔ میں نے جو سفارشی ماڈل جاری کیا اس نے فی وزٹ آمدنی 12% بڑھائی، اور ایک چرن ماڈل اب خطرے میں موجود 80% کسٹمرز کو نشان زد کرتا ہے۔ Python، SQL اور ماڈل کی تنصیب میں مضبوط۔",
    "experience": [
      {
        "role": "ڈیٹا سائنٹسٹ",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "فروری 2022",
        "end": "",
        "current": true,
        "points": "ایک سفارشی ماڈل جاری کیا جس نے فی وزٹ آمدنی 12% بڑھائی\nایک چرن ماڈل بنایا جو خطرے میں موجود 80% کسٹمرز کو ایک ماہ پہلے نشان زد کرتا ہے\nنگرانی اور دوبارہ تربیت کی پائپ لائنز کے ساتھ ماڈلز پروڈکشن میں لگائے\nماہانہ ماڈل نتائج پروڈکٹ اور مارکیٹنگ ٹیموں کو پیش کرنا"
      },
      {
        "role": "جونیئر ڈیٹا سائنٹسٹ",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "جولائی 2020",
        "end": "جنوری 2022",
        "current": false,
        "points": "3 ریٹیل کلائنٹس کے لیے 90%+ درستگی کے ساتھ پیش گوئی ماڈلز بنائے\nماڈلنگ کے لیے 10M+ قطاروں کے ڈیٹا سیٹ صاف کیے اور تیار کیے\nدستاویز بندی لکھی تاکہ کلائنٹس خود ماڈلز دوبارہ چلا سکیں"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "ڈیٹا سائنس",
        "start": "2018",
        "end": "2020",
        "notes": "سفارشی نظاموں پر مقالہ۔ ریاضی میں BS (2018)۔"
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nمشین لرننگ اور شماریات\nSQL اور Spark\nماڈل کی تنصیب (Docker, AWS)\nA/B ٹیسٹنگ\nڈیٹا کی بصری پیشکش",
    "languages": "انگریزی (روانی سے)\nعربی (روانی سے)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "ویب ڈویلپر",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "ویب ڈویلپر جس کے پاس HTML، CSS اور JavaScript میں تیز، قابلِ رسائی ویب سائٹس بنانے کا 4 سال کا تجربہ ہے۔ ایک اسٹور کا چیک آؤٹ دوبارہ بنایا جس نے تبدیلیاں 18% بڑھائیں اور 12 کلائنٹ سائٹس 99.9% اپ ٹائم کے ساتھ برقرار رکھتا ہے۔ ریسپانسیو ڈیزائن، کارکردگی اور SEO بنیادیات میں مضبوط۔",
    "experience": [
      {
        "role": "ویب ڈویلپر",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "مارچ 2022",
        "end": "",
        "current": true,
        "points": "12 کلائنٹس کے لیے HTML، CSS، JavaScript اور WordPress میں ریسپانسیو ویب سائٹس بنانا\nایک اسٹور چیک آؤٹ دوبارہ بنایا جس نے تبدیلیاں 18% بڑھائیں\nتصویر اور کوڈ کی اصلاح سے اوسط صفحہ لوڈ وقت 4.2s سے 1.8s کر دیا\nنگرانی اور بیک اپ کے ساتھ تمام کلائنٹ سائٹس کو 99.9% اپ ٹائم پر رکھنا"
      },
      {
        "role": "جونیئر ویب ڈویلپر",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "جون 2021",
        "end": "فروری 2022",
        "current": false,
        "points": "20+ چھوٹے کاروباری سائٹس پر لینڈنگ پیجز بنائے اور بگز ٹھیک کیے\nلائیو پروجیکٹس پر Git، ریسپانسیو ڈیزائن اور بنیادی SEO سیکھا\nکلائنٹ ای میلز کے جواب دیے اور اسی دن مواد کی اپڈیٹس کیں"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "کمپیوٹر سائنس",
        "start": "2017",
        "end": "2021",
        "notes": "ویب ڈویلپمنٹ، ڈیٹا بیسز اور انسان-کمپیوٹر تعامل میں کورس ورک۔"
      }
    ],
    "skills": "HTML، CSS اور JavaScript\nReact اور WordPress\nریسپانسیو ڈیزائن\nصفحہ رفتار کی اصلاح\nGit اور GitHub\nبنیادی SEO",
    "languages": "انگریزی (روانی سے)\nہسپانوی (روانی سے)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "گرافک ڈیزائنر",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "گرافک ڈیزائنر جس کے پاس برانڈنگ، پیکیجنگ اور سوشل میڈیا ڈیزائن کا 5 سال کا تجربہ ہے۔ 25+ چھوٹے کاروباروں کے لیے برانڈ شناخت بنائی اور ایک پیکیجنگ نئی ڈیزائن جس نے شیلف فروخت 14% بڑھائی۔ Adobe Illustrator، Photoshop اور Figma میں ماہر۔",
    "experience": [
      {
        "role": "گرافک ڈیزائنر",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "جنوری 2022",
        "end": "",
        "current": true,
        "points": "25+ کلائنٹس کے لیے برانڈ شناخت، پیکیجنگ اور سماجی مہمات ڈیزائن کرنا\nکھانے کے برانڈ کی پیکیجنگ نئی ڈیزائن نے شیلف فروخت 14% بڑھائی\nInstagram، TikTok اور Facebook پر ہفتے میں 30+ سماجی مواد تیار کرنا\nکلائنٹس کو تصورات پیش کرنا اور فیڈ بیک سے تیزی سے نظر ثانی کرنا"
      },
      {
        "role": "جونیئر گرافک ڈیزائنر",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "جولائی 2020",
        "end": "دسمبر 2021",
        "current": false,
        "points": "مقامی ریستورانوں اور دکانوں کے لیے فلائرز، مینو اور سماجی پوسٹس ڈیزائن کیں\nپرنٹ کے لیے تیار فائلیں بنائیں اور پرنٹرز کے ساتھ پروف جانچے\nایک ٹیمپلیٹ لائبریری بنائی جس نے ڈیزائن کا وقت ایک تہائی کم کر دیا"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "گرافک ڈیزائن",
        "start": "2016",
        "end": "2020",
        "notes": "برانڈنگ اور پیکیجنگ ڈیزائن میں پورٹ فولیو۔"
      }
    ],
    "skills": "Adobe Illustrator اور Photoshop\nFigma\nبرانڈ شناخت کا ڈیزائن\nپیکیجنگ ڈیزائن\nسوشل میڈیا ڈیزائن\nپرنٹ پیداوار",
    "languages": "انگریزی (روانی سے)\nکورین (گفتگو کی حد تک)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX ڈیزائنر",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "UX ڈیزائنر جس کے پاس صارفین کی تحقیق اور موبائل اور ویب مصنوعات ڈیزائن کرنے کا 5 سال کا تجربہ ہے۔ ایک آن بورڈنگ فلو دوبارہ ڈیزائن کیا جس نے ڈراپ آف 35% کم کیا اور 40+ استعمالیت ٹیسٹ چلائے۔ Figma، صارف تحقیق، وائر فریمنگ اور پروٹو ٹائپنگ میں ماہر۔",
    "experience": [
      {
        "role": "UX ڈیزائنر",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "فروری 2022",
        "end": "",
        "current": true,
        "points": "موبائل آن بورڈنگ دوبارہ ڈیزائن کی، ڈراپ آف 35% کم کیا 3 مہینوں میں\nسالانہ 40+ استعمالیت ٹیسٹ اور صارف انٹرویوز چلانا\n2 پروڈکٹ ٹیموں کے لیے Figma میں وائر فریمز اور پروٹو ٹائپس بنانا\nڈیلیوری پر روزانہ انجینئرز اور پروڈکٹ منیجرز کے ساتھ کام کرنا"
      },
      {
        "role": "جونیئر UX ڈیزائنر",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "اگست 2020",
        "end": "جنوری 2022",
        "current": false,
        "points": "5 کلائنٹ ایپس کے لیے اسکرینز اور فلو ڈیزائن کیے\nپہلے استعمالیت ٹیسٹ چلائے اور کلائنٹس کے لیے نتائج لکھے\nایک کمپوننٹ لائبریری بنائی جس نے ڈیزائن کی سپردگی تیز کر دی"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "نفسیات",
        "start": "2016",
        "end": "2020",
        "notes": "UX ڈیزائن سرٹیفکیٹ (General Assembly, 2020)۔ انسان-کمپیوٹر تعامل میں کورس ورک۔"
      }
    ],
    "skills": "صارف تحقیق اور استعمالیت جانچ\nوائر فریمنگ اور پروٹو ٹائپنگ (Figma)\nمعلومات کا ڈھانچہ\nڈیزائن سسٹمز\nکسٹمر سفر کی نقشہ سازی\nفریقین ورکشاپس",
    "languages": "انگریزی (روانی سے)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "مارکیٹنگ منیجر",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "مارکیٹنگ منیجر جس کے پاس 8 سال کا تجربہ ہے B2B اور صارف مہمات میں۔ اہل لیڈز 60% بڑھائیں ایک سال میں، ایک پروڈکٹ لائن متعارف کرائی جو پہلے سال کی فروخت میں $3M تک پہنچی اور $500,000 سالانہ بجٹ کا انتظام 5 کی ٹیم میں۔",
    "experience": [
      {
        "role": "مارکیٹنگ منیجر",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "مارچ 2021",
        "end": "",
        "current": true,
        "points": "5 کی ٹیم اور $500,000 سالانہ مارکیٹنگ بجٹ کی قیادت\nمواد اور ادا شدہ مہمات سے ایک سال میں اہل لیڈز 60% بڑھائیں\nایک پروڈکٹ لائن متعارف کرائی جو پہلے سال کی فروخت میں $3M تک پہنچی\nمہم کی ہدف بندی دوبارہ بنا کر فی لیڈ لاگت میں 28% کمی"
      },
      {
        "role": "مارکیٹنگ اسپیشلسٹ",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "جون 2017",
        "end": "فروری 2021",
        "current": false,
        "points": "80,000 سبسکرائبرز تک ای میل مہمات 24% اوپن شرح کے ساتھ چلائیں\nسماجی اکاؤنٹس کا انتظام جو 5,000 سے 40,000 فالوورز تک بڑھے\nسالانہ 6 تجارتی نمائش اسٹینڈز منظم کیے، ہر ایک سے 300+ لیڈز حاصل کیں"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "مارکیٹنگ",
        "start": "2013",
        "end": "2017",
        "notes": "صارف کے رویے، تجزیات اور برانڈ مینجمنٹ میں کورس ورک۔"
      }
    ],
    "skills": "مہم کی حکمتِ عملی اور منصوبہ بندی\nمواد اور ای میل مارکیٹنگ\nادا شدہ اشتہارات (Google, Meta)\nمارکیٹنگ تجزیات (GA4)\nٹیم قیادت\nبجٹ مینجمنٹ",
    "languages": "انگریزی (روانی سے)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "پروجیکٹ منیجر",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "پروجیکٹ منیجر (PMP) جس کے پاس سافٹ ویئر اور تعمیراتی پروجیکٹس وقت پر اور بجٹ کے اندر مکمل کرنے کا 7 سال کا تجربہ ہے۔ 15 پروجیکٹس کا انتظام جن کی مالیت $4M تک، 94% بروقت ڈیلیوری شرح کے ساتھ۔ Agile، خطرے کے انتظام اور فریقین سے ابلاغ میں ماہر۔",
    "experience": [
      {
        "role": "پروجیکٹ منیجر",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "15 پروجیکٹس کا انتظام جن کی مالیت $4M تک، 94% بروقت ڈیلیوری شرح کے ساتھ\n3 ٹیموں کے لیے Agile سپرنٹس چلانا اور ہفتہ وار پیشرفت ایگزیکٹوز کو رپورٹ کرنا\nجلد خطرے کے جائزوں سے پروجیکٹ کی زائد لاگت میں 30% کمی\n4 ٹائم زونز میں وینڈرز، کلائنٹس اور اندرونی ٹیموں کا رابطہ کاری کرنا"
      },
      {
        "role": "پروجیکٹ کوآرڈینیٹر",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "جولائی 2018",
        "end": "دسمبر 2020",
        "current": false,
        "points": "8 تعمیراتی پروجیکٹس کے لیے شیڈولز، بجٹ اور اجازتوں کا سراغ رکھا\nکلائنٹس کے لیے صورتحال رپورٹس اور میٹنگ نوٹس تیار کیے\nشیڈولنگ تنازعات حل کیے جنہوں نے اسکول تعمیر پر 2 ہفتے بچائے"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "بزنس ایڈمنسٹریشن",
        "start": "2014",
        "end": "2018",
        "notes": "PMP سرٹیفائیڈ (2021)۔ سرٹیفائیڈ ScrumMaster۔"
      }
    ],
    "skills": "پروجیکٹ منصوبہ بندی اور شیڈولنگ\nAgile اور Scrum\nخطرے کا انتظام\nبجٹ کنٹرول\nفریقین سے ابلاغ\nMS Project اور Jira",
    "languages": "انگریزی (روانی سے)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "ہیومن ریسورس منیجر",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "ہیومن ریسورس منیجر جس کے پاس بھرتی، ملازمین کے تعلقات اور مراعات کا 9 سال کا تجربہ ہے۔ بھرتی کا وقت 45 سے 28 دن کیا، برقرار رکھنا 15% بڑھایا اور HR چلایا 250 ملازمین کے لیے 3 مقامات پر۔ ملازمت کے قانون اور پالیسی کا CIPD درجے کا علم۔",
    "experience": [
      {
        "role": "ہیومن ریسورس منیجر",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "فروری 2020",
        "end": "",
        "current": true,
        "points": "HR چلانا 250 ملازمین کے لیے 3 مقامات پر، 3 کی ٹیم کے ساتھ\nانٹرویو عمل کو دوبارہ بنا کر بھرتی کا وقت 45 سے 28 دن کر دیا\nنئے آن بورڈنگ اور جائزہ پروگرام سے برقرار رکھنا 15% بڑھایا\nملازمین کے تعلقات، شکایات اور پالیسی اپڈیٹس سنبھالنا"
      },
      {
        "role": "HR جنرلسٹ",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "جون 2016",
        "end": "جنوری 2020",
        "current": false,
        "points": "ہوٹلوں اور ریستورانوں کے لیے سالانہ 120+ عملہ بھرتی کیا\n400 ملازمین کے لیے پے رول جانچ اور مراعات اندراج چلایا\nعملے کے تنازعات حل کیے اور تبدیلی صنعت اوسط سے کم رکھی"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Human Resources",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP سرٹیفائیڈ۔ ملازمت قانون اور تنظیمی رویے میں کورس ورک۔"
      }
    ],
    "skills": "بھرتی اور آن بورڈنگ\nملازمین کے تعلقات\nمراعات اور پے رول\nملازمت کا قانون\nکارکردگی کا انتظام\nHRIS (Workday, BambooHR)",
    "languages": "انگریزی (روانی سے)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "ایسوسی ایٹ اٹارنی",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "ایسوسی ایٹ اٹارنی جس کے پاس تجارتی مقدمہ بازی اور معاہداتی قانون کا 6 سال کا تجربہ ہے۔ 40+ مقدمات کا انتظام، 8 میں سمری فیصلہ جیتا، اور $25M مالیت کے معاہدے تیار کیے۔ Illinois Bar میں داخلہ؛ قانونی تحقیق، مسودہ سازی اور کلائنٹ مشاورت میں ماہر۔",
    "experience": [
      {
        "role": "ایسوسی ایٹ اٹارنی",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "ستمبر 2020",
        "end": "",
        "current": true,
        "points": "40+ تجارتی مقدمہ بازی کیسز کا فائلنگ سے تصفیے تک انتظام\n8 کیسز میں سمری فیصلہ جیتا اور 20 مزید سازگار طور پر نمٹائے\n$25M تک مالیت کے معاہدوں کا مسودہ تیار کرنا اور مذاکرات کرنا\nکلائنٹس کو بالمشافہ اور تحریری طور پر خطرے اور حکمتِ عملی پر مشورہ دینا"
      },
      {
        "role": "لا کلرک",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "اگست 2019",
        "end": "اگست 2020",
        "current": false,
        "points": "کیس قانون کی تحقیق کی اور 2 ججز کے لیے میموز تیار کیے\nتحریکوں کا جائزہ لیا اور 100+ سماعتوں کے لیے بینچ خلاصے تیار کیے\nدیوانی ڈویژنوں میں مقدمات اور تصفیہ کانفرنسوں کا مشاہدہ کیا"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "قانون",
        "start": "2016",
        "end": "2019",
        "notes": "Illinois Bar میں داخلہ (2019)۔ لاء ریویو، آرٹیکلز ایڈیٹر۔"
      }
    ],
    "skills": "تجارتی مقدمہ بازی\nمعاہدے کی مسودہ سازی اور مذاکرات\nقانونی تحقیق (Westlaw, LexisNexis)\nکلائنٹ مشاورت\nبیانات اور دریافت\nعدالتی فائلنگز اور طریقہ کار",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "کلینیکل فارماسسٹ",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "کلینیکل فارماسسٹ (PharmD) جس کے پاس اسپتال اور کمیونٹی فارمیسی کا 7 سال کا تجربہ ہے۔ روزانہ 100+ ادویات کے آرڈرز کا جائزہ، ایک نئی جانچ پروٹوکول سے منفی ادویاتی واقعات میں 25% کمی اور مریضوں کو محفوظ ادویات کے استعمال پر مشاورت۔ Pennsylvania میں لائسنس یافتہ۔",
    "experience": [
      {
        "role": "کلینیکل فارماسسٹ",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "جنوری 2020",
        "end": "",
        "current": true,
        "points": "روزانہ 100+ ادویات آرڈرز کا حفاظت، خوراک اور باہمی اثرات کے لیے جائزہ\nنئی دوہری جانچ پروٹوکول سے منفی ادویاتی واقعات 25% کم کیے\nپیچیدہ مریضوں کے لیے ادویات کے انتخاب پر ڈاکٹروں اور نرسوں کو مشورہ دینا\nہفتے میں دو بار اسپتال کے اینٹی بائیوٹک نگرانی راؤنڈز چلانا"
      },
      {
        "role": "اسٹاف فارماسسٹ",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "جولائی 2018",
        "end": "دسمبر 2019",
        "current": false,
        "points": "روزانہ 200+ نسخے صفر ترسیل غلطیوں کے ساتھ دیے\nمریضوں کو نئی ادویات، مضر اثرات اور ذخیرہ کرنے پر مشاورت دی\nفلو کی ویکسینیں دیں اور بلڈ پریشر کی جانچ چلائی"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "فارمیسی",
        "start": "2014",
        "end": "2018",
        "notes": "لائسنس یافتہ فارماسسٹ (Pennsylvania)۔ بورڈ سرٹیفائیڈ فارماکوتھراپی اسپیشلسٹ (BCPS)۔"
      }
    ],
    "skills": "ادویات کا جائزہ اور حفاظت\nکلینیکل فارماکولوجی\nمریض مشاورت\nفارمیسی سسٹمز (Epic, PioneerRx)\nاینٹی بائیوٹک کی ذمہ دارانہ نگرانی\nویکسینیشن خدمات",
    "languages": "انگریزی (روانی سے)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "جنرل ڈینٹسٹ",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "جنرل ڈینٹسٹ (DDS) جس کے پاس بحالی، جمالیاتی اور احتیاطی دندان سازی کا 8 سال کا تجربہ ہے۔ روزانہ 25+ مریضوں کا علاج 2,000 مریضوں کی پریکٹس میں، 98% مریض اطمینان اسکور کے ساتھ۔ کراؤنز، امپلانٹس، روٹ کینالز اور شفاف الائنرز میں ماہر۔",
    "experience": [
      {
        "role": "جنرل ڈینٹسٹ",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "فروری 2019",
        "end": "",
        "current": true,
        "points": "روزانہ 25+ مریضوں کا علاج: فلنگز، کراؤنز، روٹ کینالز اور نکالنا\n98% مریض اطمینان اسکور 1,200+ جائزوں میں برقرار رکھنا\nمہینے میں 15+ امپلانٹس لگانا اور شفاف الائنر کیسز کا انتظام\n2 حفظان صحت ماہرین اور 4 ڈینٹل اسسٹنٹس کی نگرانی"
      },
      {
        "role": "ایسوسی ایٹ ڈینٹسٹ",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "جولائی 2017",
        "end": "جنوری 2019",
        "current": false,
        "points": "1,500 مریضوں کی پریکٹس کے لیے عمومی دندان سازی فراہم کی\nاسی دن کراؤنز متعارف کرائے، واپسی وزٹس 40% کم کیں\nبچوں کی زبانی صحت پر اسکول آؤٹ ریچ دورے کیے"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "دندان سازی",
        "start": "2013",
        "end": "2017",
        "notes": "لائسنس یافتہ ڈینٹسٹ (Arizona)۔ Invisalign سرٹیفائیڈ۔ CPR/BLS سرٹیفائیڈ۔"
      }
    ],
    "skills": "بحالی دندان سازی (کراؤنز، فلنگز)\nروٹ کینال علاج\nڈینٹل امپلانٹس\nشفاف الائنرز\nمریض کی دیکھ بھال اور ابلاغ\nڈیجیٹل ایکس رے اور CEREC",
    "languages": "انگریزی (روانی سے)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "فزیکل تھراپسٹ",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "فزیکل تھراپسٹ (DPT) جس کے پاس آرتھوپیڈک اور کھیلوں کی بحالی کا 6 سال کا تجربہ ہے۔ روزانہ 12-15 مریضوں کا علاج، جن میں سے 90% منصوبہ بند سیشنز کے اندر اپنے اہداف تک پہنچتے ہیں۔ دستی تھراپی، ورزش کی تجویز اور واپسی-بہ-کھیل جانچ میں ماہر۔",
    "experience": [
      {
        "role": "فزیکل تھراپسٹ",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "مارچ 2021",
        "end": "",
        "current": true,
        "points": "روزانہ 12-15 مریضوں کا کھیل چوٹوں، جراحی کے بعد بحالی اور کمر درد کا علاج\n90% مریض منصوبہ بند سیشنز کی تعداد کے اندر اپنے اہداف تک پہنچ جاتے ہیں\nواپسی-بہ-کھیل جانچ ڈیزائن کرنا جو 3 مقامی ٹیمیں استعمال کرتی ہیں\n2 نئے گریجویٹس کی رہنمائی اور طالب علم پلیسمنٹس کی نگرانی"
      },
      {
        "role": "اسٹاف فزیکل تھراپسٹ",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "اگست 2019",
        "end": "فروری 2021",
        "current": false,
        "points": "جراحی کے بعد اور فالج کے مریضوں کے لیے داخل مریض بحالی فراہم کی\nہفتے میں 20+ عمر رسیدہ مریضوں کے لیے گروپ ورزش کلاسز چلائیں\nEpic میں پیشرفت درج کی اور وارڈ ٹیموں کے حوالے کی"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "فزیکل تھراپی",
        "start": "2016",
        "end": "2019",
        "notes": "لائسنس یافتہ فزیکل تھراپسٹ (Oregon)۔ آرتھوپیڈک کلینیکل اسپیشلسٹ (OCS)۔"
      }
    ],
    "skills": "آرتھوپیڈک اور کھیلوں کی بحالی\nدستی تھراپی\nورزش کی تجویز\nواپسی-بہ-کھیل جانچ\nمریض کی تعلیم\nدستاویز بندی (Epic)",
    "languages": "انگریزی (روانی سے)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "ہیڈ شیف",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "ہیڈ شیف جس کے پاس کریول اور جدید امریکی باورچی خانوں کا 10 سال کا تجربہ ہے۔ 12 افراد کی ٹیم کی قیادت 200 نشستوں والے ریستوران میں، سخت آرڈرنگ سے کھانے کی لاگت 15% کم کی اور شہر کی فوڈ گائیڈ سے 'Best New Menu' 2025 میں جیتا۔",
    "experience": [
      {
        "role": "ہیڈ شیف",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "12 کی ٹیم کی قیادت 200 نشستوں والے ریستوران میں جو رات کو 300+ مہمانوں کی خدمت کرتا ہے\nسخت آرڈرنگ اور موسمی مینو سے کھانے کی لاگت 15% کم کی\n2025 میں شہر کی فوڈ گائیڈ سے 'Best New Menu' جیتا\nمینو ڈیزائن کرنا، باورچیوں کو تربیت دینا اور جمعہ و ہفتہ کی سروس میں پاس چلانا"
      },
      {
        "role": "سو شیف",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "جون 2017",
        "end": "دسمبر 2020",
        "current": false,
        "points": "جب ہیڈ شیف غیر حاضر تھا تو باورچی خانہ چلایا، رات کو 150 مہمانوں کا احاطہ\nاسٹاک، آرڈرنگ اور سپلائر تعلقات کا انتظام کیا\n8 لائن باورچیوں کو تربیت دی اور عملے کی تبدیلی ایک تہائی کم کی"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "ڈپلومہ",
        "field": "کلنری آرٹس",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe فوڈ پروٹیکشن منیجر سرٹیفائیڈ۔"
      }
    ],
    "skills": "مینو ڈیزائن اور لاگت\nکریول اور جدید امریکی کھانے\nباورچی خانے کی قیادت (12 کی ٹیم)\nخوراک کی حفاظت (ServSafe)\nسپلائر مینجمنٹ\nدعوت اور تقریب کی کیٹرنگ",
    "languages": "انگریزی (روانی سے)\nہسپانوی (روانی سے)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "پولیس افسر",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "پولیس افسر جس کے پاس گشت، کمیونٹی پولیسنگ اور تحقیقات کا 8 سال کا تجربہ ہے۔ ہفتے میں 30+ کالز کا جواب، کشیدگی کم کرنے اور کمیونٹی آؤٹ ریچ کے لیے تعریفی اسناد کے ساتھ۔ بحرانی مداخلت، ابتدائی طبی امداد اور رپورٹ نویسی کی تربیت یافتہ۔",
    "experience": [
      {
        "role": "پولیس افسر",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "جون 2019",
        "end": "",
        "current": true,
        "points": "40,000 رہائشیوں کے ضلع میں گشت، ہفتے میں 30+ کالز کا جواب\nکشیدگی کم کرنے اور کمیونٹی آؤٹ ریچ کے لیے 2 تعریفی اسناد حاصل کیں\nچوریوں اور حملوں کی تحقیقات، ایسی رپورٹس لکھنا جو 50+ مقدمات میں استعمال ہوئیں\nفیلڈ تربیت میں 3 نئے افسران کی رہنمائی"
      },
      {
        "role": "گشت افسر",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "اگست 2017",
        "end": "مئی 2019",
        "current": false,
        "points": "کاؤنٹی سڑکوں پر گشت کیا اور ہنگامی کالز کا جواب دیا\nعدالتی کاغذات پہنچائے اور قیدیوں کی منتقلی میں معاونت کی\nبحرانی مداخلت اور ابتدائی طبی امداد کی تربیت مکمل کی"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "سرٹیفکیٹ",
        "field": "قانون نافذ کرنا",
        "start": "2017",
        "end": "2017",
        "notes": "Ohio Peace Officer Training Academy گریجویٹ۔ بحران مداخلت ٹیم کی تربیت یافتہ۔"
      }
    ],
    "skills": "گشت اور ہنگامی ردعمل\nکمیونٹی پولیسنگ\nبحرانی مداخلت اور کشیدگی کم کرنا\nرپورٹ نویسی\nتحقیقات\nابتدائی طبی امداد اور CPR",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "فائر فائٹر / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "فائر فائٹر اور EMT جس کے پاس آگ بجھانے، بچاؤ اور ہنگامی طبی ردعمل کا 7 سال کا تجربہ ہے۔ 900+ کالز کا جواب دیا، بشمول عمارتوں کی آگ، گاڑیوں کے بچاؤ اور طبی ہنگامی صورتحال۔ HazMat تربیت یافتہ، صاف حفاظتی ریکارڈ کے ساتھ۔",
    "experience": [
      {
        "role": "فائر فائٹر / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "مارچ 2020",
        "end": "",
        "current": true,
        "points": "900+ آگ، بچاؤ اور طبی کالز کا جواب دینا 3 اسٹیشن ضلع میں\n60% کالز پر سرٹیفائیڈ EMT کے طور پر ہنگامی طبی نگہداشت فراہم کرنا\nHazMat تربیت یافتہ؛ کیمیائی واقعات میں صفائی کی قیادت\nنئے بھرتیوں کو ہوز سنبھالنے، سیڑھیوں اور تلاش تکنیکوں کی تربیت دینا"
      },
      {
        "role": "رضاکار فائر فائٹر",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "جون 2018",
        "end": "فروری 2020",
        "current": false,
        "points": "رضاکار کے طور پر جنگلی علاقے اور عمارتوں کی آگ کا جواب دیا\nFirefighter I & II اور EMT-Basic تربیت مکمل کی\nاسکولوں میں کمیونٹی آگ حفاظت گفتگو چلانے میں مدد دی"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "سرٹیفکیٹ",
        "field": "فائر سائنس",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II۔ EMT-Basic سرٹیفائیڈ۔ HazMat آپریشنز تربیت یافتہ۔"
      }
    ],
    "skills": "آگ بجھانا اور بچاؤ\nہنگامی طبی نگہداشت (EMT)\nHazMat آپریشنز\nسیڑھیاں، ہوز اور وینٹیلیشن\nکمیونٹی آگ حفاظت\nدباؤ میں ٹیم ورک",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "لائسنس یافتہ پلمبر",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "لائسنس یافتہ ماسٹر پلمبر جس کے پاس رہائشی اور تجارتی پلمبنگ کا 11 سال کا تجربہ ہے۔ سالانہ 600+ کام مکمل کیے، ابتدائی فٹنگ سے بوائلر لگانے تک، 98% پہلی وزٹ پر ٹھیک کرنے کی شرح کے ساتھ۔ پائپ فٹنگ، نالی صفائی اور ضابطے کی پابندی میں ماہر۔",
    "experience": [
      {
        "role": "ماسٹر پلمبر",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "جنوری 2019",
        "end": "",
        "current": true,
        "points": "سالانہ 600+ رہائشی اور تجارتی کام مکمل کرنا\nبوائلرز، واٹر ہیٹرز اور باتھ روم کی مکمل ابتدائی فٹنگ لگانا\nسروس کالز پر 98% پہلی وزٹ پر ٹھیک کرنے کی شرح برقرار رکھنا\n3 شاگردوں کی نگرانی اور ان کا کام منظور کرنا"
      },
      {
        "role": "ماہر پلمبر",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "جون 2014",
        "end": "دسمبر 2018",
        "current": false,
        "points": "سالانہ 40+ گھروں کے لیے نئی تعمیر پلمبنگ کی\nگھروں اور ریستورانوں کے لیے نالیاں صاف کیں اور رساؤ ٹھیک کیے\nگیس فٹنگ اور بیک فلو کی روک تھام سیکھی"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "سرٹیفکیٹ",
        "field": "پلمبنگ ٹیکنالوجی",
        "start": "2013",
        "end": "2014",
        "notes": "ماسٹر پلمبر لائسنس (Tennessee)۔ بیک فلو روک تھام سرٹیفائیڈ۔"
      }
    ],
    "skills": "رہائشی اور تجارتی پلمبنگ\nپائپ فٹنگ اور سولڈرنگ\nنالی صفائی اور کیمرہ معائنہ\nبوائلر اور واٹر ہیٹر تنصیب\nگیس فٹنگ\nپلمبنگ ضابطے کی پابندی",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "ماہر بڑھئی",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "ماہر بڑھئی جس کے پاس فریمنگ، فنش ورک اور حسبِ ضرورت الماریوں کا 9 سال کا تجربہ ہے۔ 30+ گھروں کا فریم بنایا اور 60+ گھروں میں باورچی خانے فٹ کیے، درست پیمائشوں اور صاف ستھری تکمیل کے لیے شہرت کے ساتھ۔ نقشے پڑھنے اور ضابطے کے مطابق کام کرنے میں ماہر۔",
    "experience": [
      {
        "role": "ماہر بڑھئی",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "فروری 2019",
        "end": "",
        "current": true,
        "points": "30+ گھروں کا فریم بنانا اور 60+ گھروں میں باورچی خانے فٹ کرنا\n1/16 انچ کی برداشت کے اندر حسبِ ضرورت الماریاں اور تراش خراش بنانا\nتعمیراتی نقشے پڑھنا اور ان پر عمل، غلطیوں کو رقم خرچ ہونے سے پہلے نشان زد کرنا\n2 شاگردوں کو فریمنگ اور فنش تکنیکوں کی تربیت دینا"
      },
      {
        "role": "بڑھئی کا شاگرد",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "جون 2016",
        "end": "جنوری 2019",
        "current": false,
        "points": "ری ماڈلز میں فریمنگ، ڈرائی وال اور فلورنگ میں معاونت\nآرے، راؤٹرز اور کیل گنیں محفوظ طریقے سے استعمال کرنا سیکھا\n8,000 اپرنٹس شپ گھنٹے مکمل کیے اور کاریگر کا امتحان پاس کیا"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "سرٹیفکیٹ",
        "field": "کارپینٹری",
        "start": "2015",
        "end": "2016",
        "notes": "ماہر بڑھئی۔ OSHA 10 سرٹیفائیڈ۔"
      }
    ],
    "skills": "فریمنگ اور ڈھانچہ جاتی کام\nفنش کارپینٹری اور تراش\nحسبِ ضرورت الماریاں\nتعمیراتی نقشے پڑھنا\nپاور ٹولز اور حفاظت\nڈرائی وال اور فلورنگ",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "سیکنڈری اسکول ٹیچر (ریاضی)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "سیکنڈری اسکول ٹیچر جس کے پاس 8 سال کا تجربہ ہے گریڈ 9-12 کو ریاضی پڑھانے کا۔ الجبرا پاس شرح 64% سے 83% تک بڑھائی اور ریاضی ٹیم کو 2 ریاستی فائنلز تک کوچ کیا۔ مختلف درجے کی تدریس، امتحان تیاری اور والدین سے رابطے میں ماہر۔",
    "experience": [
      {
        "role": "ریاضی کے استاد (گریڈ 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "اگست 2019",
        "end": "",
        "current": true,
        "points": "الجبرا، جیومیٹری اور پری کیلکولس 120 شاگردوں کو 5 کلاسوں میں پڑھانا\nالجبرا پاس شرح 64% سے 83% تک 3 سال میں بڑھائی\nریاضی کی ٹیم کو 2 ریاستی فائنلز تک کوچ کیا\nہفتے میں 30 شاگردوں کے لیے اسکول کے بعد ٹیوشن چلانا"
      },
      {
        "role": "ریاضی کے استاد (گریڈ 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "اگست 2017",
        "end": "جون 2019",
        "current": false,
        "points": "سالانہ 100 شاگردوں کو الجبرا اور جیومیٹری پڑھائی\nہفتہ وار کوئزز متعارف کرائے جنہوں نے ہوم ورک خلا آدھا کیا\n200 شاگردوں کے ساتھ اسکول کا پہلا ریاضی میلہ منظم کیا"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "ریاضی کی تعلیم",
        "start": "2013",
        "end": "2017",
        "notes": "ریاستی تدریسی لائسنس (New Hampshire, grades 7-12, ریاضی)۔"
      }
    ],
    "skills": "ریاضی کی تدریس (الجبرا سے پری کیلکولس تک)\nامتحان کی تیاری\nمختلف درجے کی تدریس\nکلاس روم مینجمنٹ\nوالدین سے رابطہ\nGoogle Classroom اور Desmos",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "پری اسکول ٹیچر",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "پری اسکول ٹیچر جس کے پاس 6 سال کا تجربہ ہے 3-5 سال کے بچوں کی دیکھ بھال کا۔ کھیل پر مبنی سیکھنے، رویے کی رہنمائی اور والدین سے رابطے میں ماہر۔ ایک فونکس پروگرام بنایا جس نے میری کلاس کے اسکول کی تیاری کے اسکورز بڑھائے۔",
    "experience": [
      {
        "role": "پری اسکول ٹیچر",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "اگست 2020",
        "end": "",
        "current": true,
        "points": "18 بچوں کی کلاس کو پڑھانا اور دیکھ بھال کرنا جن کی عمریں 3-5 ہیں\nایک فونکس پروگرام بنایا جس نے پوری کلاس کے اسکول کی تیاری کے اسکورز بلند کیے\nہفتہ وار موضوعات، دستکاری اور بیرونی کھیل کی منصوبہ بندی\nوالدین کے ساتھ روزانہ اپڈیٹس اور مدت وار پیشرفت رپورٹس شیئر کرنا"
      },
      {
        "role": "اسسٹنٹ پری اسکول ٹیچر",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "جون 2018",
        "end": "جولائی 2020",
        "current": false,
        "points": "20 بچوں کی کلاس میں مرکزی استاد کی حمایت کی\nروزانہ کہانی وقت، گانے اور فن سرگرمیاں چلائیں\nحفاظت اور صفائی کے ریکارڈ ریاستی معیار کے مطابق رکھے"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "ایسوسی ایٹ ڈگری",
        "field": "ابتدائی بچپن کی تعلیم",
        "start": "2016",
        "end": "2018",
        "notes": "چائلڈ ڈویلپمنٹ ایسوسی ایٹ (CDA) سند۔ ابتدائی طبی امداد اور CPR سرٹیفائیڈ۔"
      }
    ],
    "skills": "کھیل پر مبنی سیکھنا\nرویے کی رہنمائی\nفونکس اور ابتدائی خواندگی\nوالدین سے رابطہ\nکلاس روم حفاظت\nفنون اور دستکاری کی منصوبہ بندی",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "بچوں اور خاندان کی سماجی کارکن",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "لائسنس یافتہ سماجی کارکن جس کے پاس بچوں اور خاندانوں کی حمایت کا 7 سال کا تجربہ ہے۔ 25 خاندانوں کے کیس لوڈ کا انتظام، اسکولوں اور صحت فراہم کنندگان میں خدمات کا رابطہ، اور ایسی عدالتی رپورٹس مکمل کرنا جن پر جج بھروسا کرتے ہیں۔ جائزے، بحران معاونت اور تحفظ میں ماہر۔",
    "experience": [
      {
        "role": "بچوں اور خاندان کی سماجی کارکن",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "جنوری 2020",
        "end": "",
        "current": true,
        "points": "25 خاندانوں کے کیس لوڈ کا انتظام، ہفتہ وار گھروں اور اسکولوں کے دورے\nعدالتی رپورٹس مکمل کرنا اور خاندانی عدالت میں شہادت دینا\nکمزور خاندانوں کے لیے رہائش، صحت اور اسکول معاونت کا رابطہ کاری کرنا\nنئے ٹرائیج سسٹم سے جائزے کے انتظار کے وقت میں 20% کمی"
      },
      {
        "role": "کیس ورکر",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "جولائی 2018",
        "end": "دسمبر 2019",
        "current": false,
        "points": "عارضی رہائش میں 40+ خاندانوں کی مراعات اور ریفرلز سے حمایت کی\nہفتہ وار والدین تربیت اور بجٹ ورکشاپس چلائیں\nآڈٹ اور فنڈنگ رپورٹس کے لیے کیس نوٹس درست رکھے"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "سماجی کام",
        "start": "2016",
        "end": "2018",
        "notes": "لائسنس یافتہ سماجی کارکن (Ohio)۔ بچوں کی فلاح اور خاندانی نظاموں میں کورس ورک۔"
      }
    ],
    "skills": "کیس مینجمنٹ (25 خاندان)\nبچوں کا تحفظ\nخاندانی عدالت کی رپورٹس\nبحران معاونت\nکثیر ادارہ جاتی رابطہ\nمراعات اور رہائش ریفرلز",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "پیرا لیگل",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "پیرا لیگل جس کے پاس مقدمہ بازی معاونت اور کارپوریٹ فائلنگز کا 6 سال کا تجربہ ہے۔ 30+ کیسز کے لیے دریافت کا انتظام، درخواستوں اور معاہدوں کا مسودہ، اور فائلنگ ڈیڈ لائنز 100% بروقت ریکارڈ کے ساتھ برقرار رکھنا۔ Westlaw، ای-ڈسکوری اور کیس مینجمنٹ سافٹ ویئر میں ماہر۔",
    "experience": [
      {
        "role": "پیرا لیگل",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "فروری 2021",
        "end": "",
        "current": true,
        "points": "30+ مقدمہ بازی کیسز کے لیے دریافت کا انتظام، 10,000+ دستاویزات کا جائزہ\nاٹارنی کے جائزے کے لیے درخواستیں، تحریکیں اور معاہدے تیار کرنا\nعدالتی فائلنگز اور ڈیڈ لائنز پر 100% بروقت ریکارڈ برقرار رکھنا\nگواہوں کا رابطہ اور مقدمے کے بائنڈرز کی تیاری"
      },
      {
        "role": "قانونی اسسٹنٹ",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "اگست 2019",
        "end": "جنوری 2021",
        "current": false,
        "points": "ہفتے میں 20+ کلائنٹس کے ابتدائی انٹرویوز\nرہائش اور خاندانی کیسز کے لیے فارم اور فائلنگز تیار کیں\nہسپانوی بولنے والے کلائنٹس کے لیے قانونی دستاویزات کا ترجمہ کیا"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "ایسوسی ایٹ ڈگری",
        "field": "پیرا لیگل اسٹڈیز",
        "start": "2017",
        "end": "2019",
        "notes": "NALA سرٹیفائیڈ پیرا لیگل (CP)۔ ABA سے منظور شدہ پروگرام۔"
      }
    ],
    "skills": "مقدمہ بازی معاونت اور دریافت\nقانونی مسودہ سازی\nای-ڈسکوری (Relativity)\nکیس مینجمنٹ (Clio)\nعدالتی فائلنگز اور ڈیڈ لائنز\nقانونی تحقیق (Westlaw)",
    "languages": "انگریزی (روانی سے)\nہسپانوی (روانی سے)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "بک کیپنگ کلرک",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "بک کیپنگ کلرک جس کے پاس قابلِ ادائیگی اکاؤنٹس، انوائسنگ اور بینک مصالحتوں کا 5 سال کا تجربہ ہے۔ ماہانہ 300+ انوائسز 99.8% درستگی کے ساتھ پراسیس کرنا اور مہینے کے اختتام کی بندش کے لیے کھاتے صاف رکھنا۔ QuickBooks، Excel اور پے رول معاونت میں ماہر۔",
    "experience": [
      {
        "role": "بک کیپنگ کلرک",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "اپریل 2021",
        "end": "",
        "current": true,
        "points": "مہینے میں 300+ سپلائر انوائسز 99.8% درستگی کے ساتھ پراسیس کرنا\nہفتہ وار 6 بینک اکاؤنٹس کی مصالحت اور اسی دن فرق نشان زد کرنا\n45 عملے کے لیے پے رول ڈیٹا تیار کرنا اور واجب الادا کسٹمر ادائیگیوں کی پیروی کرنا\nسال کے اختتام کے آڈٹ کے لیے ریکارڈ صاف رکھنا، صفر نتائج کے ساتھ"
      },
      {
        "role": "اکاؤنٹس اسسٹنٹ",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "جون 2019",
        "end": "مارچ 2021",
        "current": false,
        "points": "روزانہ سیلز انوائسز اور رسیدیں QuickBooks میں درج کیں\nادائیگیوں کے بارے میں سپلائرز کی پوچھ گچھ کا فون اور ای میل سے جواب دیا\nکاغذات فائل کیے اور آرکائیو تازہ رکھا"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "سرٹیفکیٹ",
        "field": "بک کیپنگ",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks سرٹیفائیڈ صارف۔"
      }
    ],
    "skills": "قابلِ ادائیگی اور قابلِ وصول اکاؤنٹس\nبینک مصالحتیں\nانوائسنگ (ماہانہ 300+)\nQuickBooks اور Excel\nپے رول معاونت\nڈیٹا انٹری (65 wpm)",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "انتظامی اسسٹنٹ",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "انتظامی اسسٹنٹ جس کے پاس دفاتر کو روانی سے چلانے کا 6 سال کا تجربہ ہے۔ 4 منیجرز کے کیلنڈرز کا انتظام، سفر اور میٹنگز کی تنظیم، اور روزانہ 100+ ای میلز کی دیکھ بھال۔ درستگی، رازداری اور ڈیڈ لائن کے دباؤ میں سکون کے لیے معروف۔",
    "experience": [
      {
        "role": "انتظامی اسسٹنٹ",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "4 سینئر منیجرز کے لیے کیلنڈرز، سفر اور میٹنگز کا انتظام\nروزانہ 100+ ای میلز سنبھالنا، جوابات تیار کرنا اور ترجیحات نشان زد کرنا\nبورڈ کاغذات تیار کرنا اور ماہانہ میٹنگز کے منٹس لینا\nدفتری سامان اور وینڈر آرڈرز چلانا، لاگت 12% کم کرنا"
      },
      {
        "role": "ریسپشنسٹ",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "اگست 2019",
        "end": "دسمبر 2020",
        "current": false,
        "points": "روزانہ 60+ مریضوں کا استقبال کیا اور اپائنٹمنٹ بک کا انتظام کیا\nفون کالز کا جواب دیا اور انشورنس پوچھ گچھ نمٹائی\nمریضوں کے ریکارڈ درست اور خفیہ رکھے"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "ایسوسی ایٹ ڈگری",
        "field": "دفتری انتظام",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office اسپیشلسٹ (Word, Excel)۔"
      }
    ],
    "skills": "کیلنڈر اور سفر کا انتظام\nای میل اور خط و کتابت\nمیٹنگ منٹس\nMicrosoft Office (Word, Excel, Outlook)\nڈیٹا انٹری (70 wpm)\nدفتری سامان اور وینڈرز",
    "languages": "انگریزی (روانی سے)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "بینک ٹیلر",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "بینک ٹیلر جس کے پاس 4 سال کا تجربہ ہے، روزانہ 80+ کسٹمرز کو درستگی اور خیال کے ساتھ خدمت دینے کا۔ کیش دراز 3 سال تک سینٹ تک متوازن، صفر کمی کے ساتھ۔ ڈپازٹ، رقم نکلوانے، فراڈ جانچ اور کسٹمرز کو درست مصنوعات کی طرف بھیجنے میں ماہر۔",
    "experience": [
      {
        "role": "بینک ٹیلر",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "مارچ 2022",
        "end": "",
        "current": true,
        "points": "روزانہ 80+ کسٹمرز کی خدمت: ڈپازٹ، رقم نکلوانا، ادائیگیاں اور منتقلیاں\n3 سال تک کیش دراز سینٹ تک متوازن، صفر کمی کے ساتھ\n12 فراڈ کوششیں پکڑیں اور روکیں، کسٹمرز کے $90,000+ بچائے\nکسٹمرز کو بچت اور قرض مصنوعات کی طرف بھیجنا، سہ ماہی ریفرل اہداف حاصل کرنا"
      },
      {
        "role": "کسٹمر سروس ایسوسی ایٹ",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "جون 2021",
        "end": "فروری 2022",
        "current": false,
        "points": "ارکان کے لیے نئے اکاؤنٹ کھولے اور ڈیبٹ کارڈ جاری کیے\nبیلنس اور اسٹیٹمنٹس کے بارے میں فون پوچھ گچھ کے جواب دیے\nارکان کو آن لائن اور موبائل بینکنگ سیٹ کرنے میں مدد دی"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "ایسوسی ایٹ ڈگری",
        "field": "بزنس",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "نقدی سنبھالنا اور توازن\nڈپازٹ، رقم نکلوانا اور ادائیگیاں\nفراڈ کی نشاندہی\nکسٹمر سروس\nبینکنگ سافٹ ویئر (Fiserv)\nپروڈکٹ ریفرلز",
    "languages": "انگریزی (روانی سے)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "سیلز منیجر",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "سیلز منیجر جس کے پاس 10 سال کا تجربہ ہے 15 نمائندوں تک کی ٹیموں کی قیادت کا۔ علاقائی آمدنی $4M سے $7.5M تک 3 سال میں بڑھائی، جیت کی شرح 22% سے 34% تک بڑھائی اور بہتر کوچنگ اور آن بورڈنگ سے نمائندوں کی تبدیلی آدھی کی۔",
    "experience": [
      {
        "role": "علاقائی سیلز منیجر",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "Texas اور Oklahoma میں 15 سیلز نمائندوں کی ٹیم کی قیادت\nعلاقائی آمدنی $4M سے $7.5M تک 3 سال میں بڑھائی\nبہتر کوچنگ اور پائپ لائن جائزوں سے جیت کی شرح 22% سے 34% تک بڑھائی\nنئے آن بورڈنگ پروگرام سے نمائندوں کی تبدیلی آدھی کر دی"
      },
      {
        "role": "سیلز نمائندہ",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "جون 2015",
        "end": "دسمبر 2020",
        "current": false,
        "points": "80+ اکاؤنٹس کو صنعتی آلات فروخت کیے، مسلسل 5 سال کوٹا حاصل کیا\nمسلسل 3 سال علاقے میں ٹاپ نمائندہ\nایک ریفرل نیٹ ورک بنایا جو نیا کاروبار کا 25% لایا"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "مارکیٹنگ",
        "start": "2011",
        "end": "2015",
        "notes": "سیلز مینجمنٹ اور مذاکرات میں کورس ورک۔"
      }
    ],
    "skills": "سیلز ٹیم قیادت (15 نمائندے)\nآمدنی نمو اور پیش گوئی\nپائپ لائن مینجمنٹ (Salesforce)\nکوچنگ اور آن بورڈنگ\nمذاکرات\nعلاقے کی منصوبہ بندی",
    "languages": "انگریزی (روانی سے)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "تعمیراتی منیجر",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "تعمیراتی منیجر جس کے پاس $12M تک مالیت کے تجارتی اور رہائشی پروجیکٹس مکمل کرنے کا 12 سال کا تجربہ ہے۔ 20+ پروجیکٹس 95% بروقت شرح، میری سائٹس پر صفر وقت ضائع کرنے والی چوٹوں اور بجٹ 3% کے اندر رکھ کر مکمل کیے۔ شیڈولنگ، ذیلی ٹھیکیداروں کے انتظام اور حفاظت میں ماہر۔",
    "experience": [
      {
        "role": "تعمیراتی منیجر",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "فروری 2020",
        "end": "",
        "current": true,
        "points": "$12M تک مالیت کے تجارتی اور رہائشی پروجیکٹس مکمل کرنا\n20+ پروجیکٹس 95% بروقت شرح اور بجٹ 3% کے اندر رکھ کر مکمل کیے\n30+ ذیلی ٹھیکیداروں اور 50 کارکنوں کا انتظام 3 فعال سائٹس پر\n4 سال میں تمام سائٹس پر صفر وقت ضائع کرنے والی چوٹیں"
      },
      {
        "role": "سائٹ سپروائزر",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "جون 2013",
        "end": "جنوری 2020",
        "current": false,
        "points": "دفتر اور ریٹیل تعمیرات کے لیے روزانہ سائٹ آپریشنز چلائے\nڈیلیوریز، معائنوں اور ذیلی ٹھیکیداروں کے شیڈولز کا رابطہ کیا\nحفاظتی ریکارڈ صاف رکھے اور ہر OSHA معائنہ پاس کیا"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "عمارتی تعمیرات",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 سرٹیفائیڈ۔ CCM (Certified Construction Manager) امیدوار۔"
      }
    ],
    "skills": "پروجیکٹ شیڈولنگ (MS Project, Procore)\nبجٹ کنٹرول\nذیلی ٹھیکیدار مینجمنٹ\nسائٹ حفاظت (OSHA 30)\nبلیو پرنٹ پڑھنا\nکلائنٹ رپورٹنگ",
    "languages": "انگریزی (روانی سے)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "سرٹیفائیڈ میڈیکل اسسٹنٹ",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "سرٹیفائیڈ میڈیکل اسسٹنٹ جس کے پاس فیملی پریکٹس اور فوری نگہداشت کا 5 سال کا تجربہ ہے۔ روزانہ 25+ مریضوں کو کمرے میں بٹھانا، وائٹلز لینا، خون نکالنا اور 97% مریض اطمینان اسکور کے ساتھ فرنٹ ڈیسک کا انتظام۔ EHR، فلیبوٹومی اور انشورنس جانچ میں ماہر۔",
    "experience": [
      {
        "role": "سرٹیفائیڈ میڈیکل اسسٹنٹ",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "اپریل 2021",
        "end": "",
        "current": true,
        "points": "روزانہ 25+ مریضوں کو کمرے میں بٹھانا: وائٹلز، تاریخیں اور معائنہ تیاری\nخون نکالنا اور بنیادی لیب ٹیسٹ 99% پہلی سوئی پر کامیابی کی شرح کے ساتھ کرنا\nفرنٹ ڈیسک، شیڈولنگ اور انشورنس جانچ کا انتظام\n97% مریض اطمینان اسکور 800+ سرویز میں برقرار رکھنا"
      },
      {
        "role": "میڈیکل اسسٹنٹ",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "اگست 2019",
        "end": "مارچ 2021",
        "current": false,
        "points": "بغیر اپائنٹمنٹ مریضوں کی ٹرائیج کی اور معمولی طریقہ کاروں میں ڈاکٹروں کی معاونت کی\nویکسینیں دیں اور نمونہ جمع کرنا سنبھالا\nمعائنہ کمروں کو مریضوں کے درمیان بھرا، صاف اور تیار رکھا"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "سرٹیفکیٹ",
        "field": "میڈیکل اسسٹنگ",
        "start": "2018",
        "end": "2019",
        "notes": "سرٹیفائیڈ میڈیکل اسسٹنٹ (CMA, AAMA)۔ BLS سرٹیفائیڈ۔ فلیبوٹومی کی تربیت یافتہ۔"
      }
    ],
    "skills": "مریض کا داخلہ اور وائٹلز\nفلیبوٹومی\nEHR (eClinicalWorks)\nویکسینیشنز\nانشورنس کی تصدیق\nفرنٹ ڈیسک مینجمنٹ",
    "languages": "انگریزی (روانی سے)\nہسپانوی (روانی سے)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "طالب علم",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "پرجوش ہائی اسکول سینئر مضبوط گریڈز اور جز وقتی کام کے تجربے کے ساتھ۔ سیکھنے میں تیز، قابلِ اعتماد اور لوگوں کے ساتھ اچھا۔ پہلے کل وقتی کردار یا کالج کے ساتھ جز وقتی ملازمت کی تلاش میں۔",
    "experience": [
      {
        "role": "جز وقتی سیلز اسسٹنٹ",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "ستمبر 2024",
        "end": "",
        "current": true,
        "points": "ویک اینڈز اور اسکول کے بعد فی شفٹ 50+ کسٹمرز کی خدمت\nنقدی سنبھالنا، شیلف دوبارہ بھرنا اور ڈسپلے صاف ستھرا رکھنا\nہفتہ کی صبح اسٹور کھولنے کے لیے قابلِ بھروسا"
      },
      {
        "role": "رضاکار ٹیوٹر",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "جنوری 2024",
        "end": "جون 2025",
        "current": false,
        "points": "ہفتے میں دو بار چھوٹے شاگردوں کو ریاضی پڑھائی\n40 بچوں کے لیے گرمیوں کے مطالعہ پروگرام کی تنظیم میں مدد دی"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "ہائی اسکول ڈپلومہ",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6۔ آنر رول، 3 سال۔ مباحثہ ٹیم کے کپتان۔"
      }
    ],
    "skills": "کسٹمر سروس\nنقدی سنبھالنا\nٹیم ورک\nوقت کا انتظام\nMicrosoft Office\nعوامی تقریر (مباحثہ ٹیم)",
    "languages": "انگریزی (روانی سے)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "حالیہ گریجویٹ — بزنس ایڈمنسٹریشن",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "حالیہ بزنس ایڈمنسٹریشن گریجویٹ جس کے پاس مارکیٹنگ اور آپریشنز میں انٹرن شپ تجربہ ہے۔ 200 شرکا کے ساتھ کیمپس کاروباری مقابلہ منظم کیا اور 6 ماہ کی انٹرن شپ مکمل کی جہاں میں نے رپورٹنگ وقت آدھا کیا۔ کل وقتی کیریئر شروع کرنے اور تیزی سے سیکھنے کے لیے پرجوش۔",
    "experience": [
      {
        "role": "مارکیٹنگ انٹرن",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "جنوری 2025",
        "end": "جون 2025",
        "current": false,
        "points": "کمپنی کے سماجی اکاؤنٹس چلائے، فالوورز 2,000 سے 6,500 تک بڑھائے\nایک رپورٹنگ ڈیش بورڈ بنایا جس نے ہفتہ وار رپورٹنگ وقت آدھا کیا\n20 بلاگ پوسٹس لکھیں جنہوں نے 15,000+ مطالعے حاصل کیے"
      },
      {
        "role": "تقریبات رضاکار ٹیم لیڈر",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "ستمبر 2024",
        "end": "مئی 2025",
        "current": false,
        "points": "200 شرکا اور 12 ججز کے ساتھ کاروباری مقابلہ منظم کیا\n$5,000 بجٹ اور 8 رضاکاروں کی ٹیم کا انتظام کیا"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "بزنس ایڈمنسٹریشن",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5۔ Dean's List، 2 سال۔ آخری سال کا پروجیکٹ چھوٹے کاروبار کی مارکیٹنگ پر۔"
      }
    ],
    "skills": "سوشل میڈیا مارکیٹنگ\nExcel اور Google Sheets\nپیشکش کی مہارتیں\nتقریبات کی تنظیم\nٹیم ورک\nبنیادی ڈیٹا تجزیہ",
    "languages": "انگریزی (روانی سے)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "جونیئر مارکیٹنگ ایسوسی ایٹ",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "جونیئر مارکیٹنگ ایسوسی ایٹ جس کے پاس مواد، ای میل اور سوشل میڈیا کا 2 سال کا تجربہ ہے۔ کلائنٹ نیوز لیٹر 1,000 سے 4,000 سبسکرائبرز تک بڑھایا اور ایسی مہمات چلائیں جن کی اوسط اوپن شرح 22% ہے۔ مزید ذمہ داری اور اکاؤنٹس کے بڑے پورٹ فولیو کے لیے تیار۔",
    "experience": [
      {
        "role": "جونیئر مارکیٹنگ ایسوسی ایٹ",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "جولائی 2024",
        "end": "",
        "current": true,
        "points": "کلائنٹ نیوز لیٹر 1,000 سے 4,000 سبسکرائبرز تک 14 مہینوں میں بڑھایا\n12 سماجی پوسٹس لکھنا اور شیڈول کرنا ہفتے میں 4 کلائنٹس کے لیے\nای میل مہمات چلانا جن کی اوسط اوپن شرح 22% ہے\nماہانہ مہم نتائج کلائنٹس کو رپورٹ کرنا"
      },
      {
        "role": "مارکیٹنگ انٹرن",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "جنوری 2024",
        "end": "جون 2024",
        "current": false,
        "points": "کمپنی ویب سائٹ پر 200+ اشیا کے لیے پروڈکٹ تفصیلات لکھیں\nبہار کی فروخت مہم چلانے میں مدد دی جس نے آن لائن آرڈرز 15% بڑھائے"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "کمیونیکیشنز",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4۔ ڈیجیٹل مارکیٹنگ اور میڈیا نویسی میں کورس ورک۔"
      }
    ],
    "skills": "مواد نویسی\nای میل مارکیٹنگ (Mailchimp)\nسوشل میڈیا مینجمنٹ\nGoogle Analytics\nCanva\nکلائنٹ رپورٹنگ",
    "languages": "انگریزی (روانی سے)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "آپریشنز سپروائزر",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "آپریشنز سپروائزر جس کے پاس 8 سال کا تجربہ ہے 20-30 افراد کی گودام ٹیمیں چلانے کا۔ چننے کی غلطیاں 30% کم کیں، بروقت روانگی 90% سے 97% تک بڑھائی اور 15 نئے آنے والوں کو تربیت دی۔ بڑی سائٹ اور بجٹ کے ساتھ آپریشنز منیجر کردار کے لیے تیار۔",
    "experience": [
      {
        "role": "آپریشنز سپروائزر",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "مارچ 2021",
        "end": "",
        "current": true,
        "points": "25 گودام عملے کی نگرانی 2 شفٹوں میں 90,000 مربع فٹ سائٹ پر\nنئی جانچ روٹینز اور بارکوڈ اسکیننگ سے چننے کی غلطیوں میں 30% کمی\nبروقت روانگی 90% سے 97% تک 2 سال میں بڑھائی\n15 نئے آنے والوں کو تربیت دی اور 3 کو ٹیم لیڈ کرداروں میں ترقی دی"
      },
      {
        "role": "ٹیم لیڈر",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "جون 2017",
        "end": "فروری 2021",
        "current": false,
        "points": "رات کی شفٹ میں 10 چننے اور پیک کرنے والوں کی ٹیم کی قیادت کی\nایک روسٹر متعارف کرایا جس نے ڈیڈ لائنز چھوڑے بغیر اوور ٹائم 20% کم کیا\nحفاظتی بریفنگز چلائیں اور ٹیم کو 2 سال حادثات سے پاک رکھا"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "سپلائی چین مینجمنٹ",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt۔"
      }
    ],
    "skills": "ٹیم قیادت (25 عملہ)\nگودام آپریشنز\nعمل کی بہتری\nحفاظت کا انتظام\nانوینٹری کنٹرول\nWMS اور Excel",
    "languages": "انگریزی (روانی سے)\nہندی (گفتگو کی حد تک)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "سینئر پروجیکٹ منیجر",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "سینئر پروجیکٹ منیجر جس کے پاس 14 سال کا تجربہ ہے $8M تک مالیت کے سافٹ ویئر پروجیکٹس مکمل کرنے کا۔ 30+ پروجیکٹس کی قیادت 92% بروقت شرح کے ساتھ، شروع سے PMO بنایا اور 10 پروجیکٹ منیجرز کی رہنمائی کی۔ دباؤ میں پرسکون ڈیلیوری اور ایگزیکٹوز کو ایماندارانہ رپورٹنگ کے لیے معروف۔",
    "experience": [
      {
        "role": "سینئر پروجیکٹ منیجر",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "جنوری 2019",
        "end": "",
        "current": true,
        "points": "$8M تک مالیت کے سافٹ ویئر پروجیکٹس 92% بروقت شرح کے ساتھ مکمل کرنا\nکمپنی کا PMO شروع سے بنایا: ٹیمپلیٹس، رپورٹنگ اور گورننس\n10 پروجیکٹ منیجرز کی رہنمائی اور ماہانہ PM کمیونٹی چلانا\n40 افراد کے پروگرام پر براہ راست CTO کو رپورٹ کرنا"
      },
      {
        "role": "پروجیکٹ منیجر",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "جون 2012",
        "end": "دسمبر 2018",
        "current": false,
        "points": "ریٹیل اور صحت کلائنٹس کے لیے 20+ پروجیکٹس کا انتظام کیا\nAgile طریقے متعارف کرائے جنہوں نے ڈیلیوری کا وقت 25% کم کیا\n2 اہم اکاؤنٹس کو $500k سے $2M سالانہ آمدنی تک بڑھایا"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "انفارمیشن سسٹمز",
        "start": "2008",
        "end": "2012",
        "notes": "PMP سرٹیفائیڈ (2015)۔ سرٹیفائیڈ ScrumMaster۔ MBA کورس ورک (2018-2019، نامکمل)۔"
      }
    ],
    "skills": "پروگرام اور پروجیکٹ ڈیلیوری\nPMO سیٹ اپ اور گورننس\nAgile اور Waterfall\nبجٹ کنٹرول ($8M)\nایگزیکٹو رپورٹنگ\nٹیم رہنمائی",
    "languages": "انگریزی (روانی سے)\nہسپانوی (گفتگو کی حد تک)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "چیف آپریٹنگ آفیسر",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "چیف آپریٹنگ آفیسر جس کے پاس ریٹیل اور لاجسٹکس کمپنیوں کے آپریشنز کو وسعت دینے کا 18 سال کا تجربہ ہے۔ 200 افراد کے آپریشن کو 900 افراد تک 6 مقامات پر بڑھایا، EBITDA مارجن 8% سے 14% تک بلند کیا اور 2 حصول کی قیادت کی۔ بورڈ سطح کی رپورٹنگ اور سرمایہ کار تعلقات کا تجربہ۔",
    "experience": [
      {
        "role": "چیف آپریٹنگ آفیسر",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "جنوری 2021",
        "end": "",
        "current": true,
        "points": "آپریشنز چلانا 900 لوگوں کے لیے 6 مقامات پر اور $180M بجٹ کے ساتھ\nEBITDA مارجن 8% سے 14% تک 3 سال میں بڑھایا\n2 حصول کی قیادت کی اور 6 مہینوں میں دونوں ٹیموں کو ملا دیا\nآپریشنز، خطرے اور نمو پر ماہانہ بورڈ کو رپورٹ کرنا"
      },
      {
        "role": "آپریشنز کے نائب صدر",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "جون 2014",
        "end": "دسمبر 2020",
        "current": false,
        "points": "آپریشنز 200 سے 600 لوگوں تک 4 مقامات پر بڑھائے\n3 تقسیم مراکز وقت پر اور بجٹ کے اندر کھولے\nوہ قیادت ٹیم بنائی جو آج بھی کاروبار چلا رہی ہے"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "بزنس ایڈمنسٹریشن",
        "start": "2010",
        "end": "2012",
        "notes": "معاشیات میں BS، NYU (2006)۔ بورڈ گورننس کورس (2020)۔"
      }
    ],
    "skills": "پیمانے پر آپریشنز (900 لوگ)\nP&L ذمہ داری ($180M)\nانضمام اور حصول\nبورڈ رپورٹنگ\nنمو کی حکمتِ عملی\nقیادت ٹیم کی تعمیر",
    "languages": "انگریزی (روانی سے)",
    "template": "executive"
  }
};
});
