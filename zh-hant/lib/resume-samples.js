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
      "title": "註冊護士",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "擁有6年內外科和遙測病區經驗的註冊護士。擅長患者評估、靜脈治療、用藥管理和電子健康記錄。以在高壓情況下與患者和家屬冷靜、清晰地溝通而著稱。",
    "experience": [
      {
        "role": "註冊護士",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "每班照顧5-6名患者，所在內外科病區有32張床位，工作包括評估、用藥和傷口護理\n培訓和指導4名新畢業護士，將他們的入職培訓時間縮短了2周\n透過在交接時引入雙重核查流程，將病區的用藥錯誤減少了18%\n在 Epic 電子健康記錄中準確記錄所有護理工作"
      },
      {
        "role": "護士職員",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "2021年五月",
        "current": false,
        "points": "每天為40+名 walk-in 患者進行分診，優先處理需要當日護理的緊急病例\n在每月社群外展活動中接種疫苗並進行健康篩查\n協調專科轉診並跟進檢查結果"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "護理",
        "start": "2015",
        "end": "2019",
        "notes": "註冊護士執照（得克薩斯州）。持有 BLS 和 ACLS 證書。"
      }
    ],
    "skills": "患者評估\n靜脈治療和用藥管理\n電子健康記錄（Epic）\n遙測監測\n患者與家屬教育\n感染控制",
    "languages": "英語（流利）\n西班牙語（會話水平）",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "軟體開發人員",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "擁有5年使用 Python 和 JavaScript 構建 Web 應用經驗的軟體開發人員。上線的功能有200,000+使用者使用，將 API 響應時間縮短了40%，並主導了單體架構向微服務的遷移。在測試、程式碼審查和清晰的文件方面實力雄厚。",
    "experience": [
      {
        "role": "軟體開發人員",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "使用 Python（Django）和 React 構建並維護面向客戶的 Web 功能，服務200,000+使用者\n透過新增快取和修復慢查詢，將平均 API 響應時間從850毫秒縮短到500毫秒\n主導了計費服務向微服務的遷移，實現了零停機\n每週審查10+個拉取請求，並指導2名初級開發人員"
      },
      {
        "role": "初級開發人員",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "用 JavaScript 構建內部儀表板，取代了3個團隊的手工電子表格\n編寫了自動化測試，將覆蓋率從45%提高到78%\n在第一年修復了整個產品的120+個錯誤"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "電腦科學",
        "start": "2016",
        "end": "2020",
        "notes": "修讀過資料庫、演算法和作業系統課程。"
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript 和 React\nPostgreSQL 和 Redis\nREST API 和微服務\nGit 和 CI/CD\n自動化測試（pytest、Jest）",
    "languages": "英語（流利）",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "小學教師",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "擁有7年經驗的小學教師，教授3-5年級。擅長分層教學、課堂管理和家長溝通。在兩個學年內將班級的閱讀熟練度從58%提高到81%。",
    "experience": [
      {
        "role": "小學教師（4年級）",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "為一個26名學生的班級教授閱讀、數學和科學，其中5名學生有個人學習計劃\n透過小組導讀，在兩年內將班級閱讀熟練度從58%提高到81%\n每週釋出一份家長簡報，併為每個家庭召開學期進度會議\n帶領學校的閱讀俱樂部，成員是40名3-5年級的學生"
      },
      {
        "role": "小學教師（3年級）",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Aug 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "為24名學生規劃並講授所有核心科目的日常課程\n引入行為規範，將課堂擾亂減少了一半\n組織了年級科學博覽會，有120名學生和80名家長參加"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "小學教育",
        "start": "2014",
        "end": "2018",
        "notes": "州教師資格證（俄亥俄州，K-5年級）。閱讀增注資格。"
      }
    ],
    "skills": "分層教學\n課堂管理\n小組導讀\n家長溝通\n課程規劃\nGoogle Classroom",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "高階會計師",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "擁有8年月末結賬、財務報告和內部審計經驗的註冊會計師。透過重建對賬流程將結賬時間提前了3天，並在一個審計年度內發現了240,000美元可追回的多付款項。精通 Excel、QuickBooks 和 ERP 系統。",
    "experience": [
      {
        "role": "高階會計師",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "負責一個 $40M 業務單元的月末結賬，在重建對賬流程後提前3天完成\n為高階管理層準備月度財務報表和差異報告\n發現了 $240,000 可追回的供應商多付款項，審計年份是2024年\n管理2名會計職員，並稽核他們的日記賬分錄"
      },
      {
        "role": "會計職員",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "為25個小企業客戶準備報稅表和財務報表\n協助完成8個客戶的審計，測試內部控制並記錄審計發現\n在 Excel 中實現固定資產登記自動化，每月節省6小時"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "會計",
        "start": "2013",
        "end": "2017",
        "notes": "註冊會計師（伊利諾伊州）。美國註冊會計師協會會員。"
      }
    ],
    "skills": "月末結賬與對賬\n財務報告與差異分析\n內部審計\nExcel（資料透視表、VLOOKUP）\nQuickBooks 和 SAP\n稅務準備",
    "languages": "英語（流利）\n普通話（會話水平）",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL A 類卡車司機",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "擁有9年長途和區域貨運經驗的 CDL A 類司機。無事故里程超過900,000英里，準時交付率達99%，有冷藏、平板和廂式貨運經驗。駕駛記錄良好，持有危險品和罐車增駕資格。",
    "experience": [
      {
        "role": "長途卡車司機",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "每週在得克薩斯州、俄克拉荷馬州和新墨西哥州的區域路線上行駛2,800+英里\n保持99%的準時交付率，每年裝載量達1,100+次\n運輸冷藏和廂式貨物；每天完成出車前和收車後的檢查\n累計無事故里程超過900,000英里"
      },
      {
        "role": "配送卡車司機",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "2016年三月",
        "end": "2019年三月",
        "current": false,
        "points": "每天為達拉斯-沃思堡地區的15-20個工地配送建築材料\n操作叉車，並按 DOT 標準固定平板貨物\n保持交付檔案和日誌準確，零 DOT 違規"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "證書",
        "field": "商業駕駛（CDL Class A）",
        "start": "2015",
        "end": "2016",
        "notes": "持有 CDL A 類駕照及危險品和罐車增駕資格。駕駛記錄良好。"
      }
    ],
    "skills": "長途和區域駕駛\n冷藏和平板貨物\nDOT 法規和行車日誌\n出車前檢查\n路線規劃（GPS、ELD）\n叉車操作",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "零售銷售員",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "擁有4年電子產品和服裝店經驗的零售銷售員。始終位列團隊前3名銷售，保修和配件的連帶銷售率達32%。友善、收銀迅速，值得信賴地負責開店和閉店。",
    "experience": [
      {
        "role": "高階銷售助理",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "每天向60+位顧客銷售電子產品和配件；門店銷售排名前3，連續8個季度\n保修和配件的連帶銷售率達到32%，為團隊最高\n培訓6名新員工學習收銀、庫房和客戶服務標準\n值得信賴的鑰匙保管員：負責開店閉店和現金清點"
      },
      {
        "role": "銷售助理",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "在繁忙的賣場幫助顧客挑選服裝和尺碼\n每班保持陳列整潔並補貨\n禮貌地處理退貨和換貨，將投訴降到最低"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "副學士學位",
        "field": "商業",
        "start": "2019",
        "end": "2021",
        "notes": "在零售業工作的同時兼職學習。"
      }
    ],
    "skills": "客戶服務與追加銷售\n現金處理與 POS 系統\n產品知識（電子產品）\n庫存管理\n門店開店與閉店\n團隊培訓",
    "languages": "英語（流利）\n西班牙語（流利）",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "客服代表",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "擁有5年電話、電子郵件和線上聊天支援經驗的客服代表。每天解決45+個案件，滿意度達96%，首次聯絡解決率達88%。面對憤怒的客戶保持冷靜，並能迅速找到解決辦法。",
    "experience": [
      {
        "role": "客服代表",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "2021年五月",
        "end": "",
        "current": true,
        "points": "每天處理45+個關於賬單、訂單和技術故障的電話、電子郵件和聊天案件\n客戶滿意度保持在96%，首次聯絡解決率達88%\n化解棘手來電，把投訴轉化為回頭客\n培訓5名新支援專員學習話術、系統和語氣"
      },
      {
        "role": "支援專員",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "回覆客戶關於訂單、退貨和退款的電子郵件和線上諮詢\n將平均首次響應時間保持在2小時以內\n寫了20篇幫助中心文章，將重複問題減少了四分之一"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "副學士學位",
        "field": "工商管理",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "電話、電子郵件和線上聊天支援\n投訴處理與降級溝通\nCRM 系統（Zendesk、Salesforce）\n賬單和訂單諮詢\n打字速度每分鐘55字\n團隊培訓",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "運營經理",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "擁有12年經驗的運營經理，管理過倉儲和配送領域最多80人的團隊。將訂單處理成本降低了22%，把準時發貨率從91%提升到98%，並準時在預算內開設了兩個新地點。",
    "experience": [
      {
        "role": "運營經理",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "運營一個120,000平方英尺的配送中心，有80名員工，分3班工作\n透過重新設計揀貨路徑和排班模式，將訂單處理成本降低了22%\n將準時發貨率從91%提升到98%，用時18個月\n準時開設了2個新地點，預算結餘8%"
      },
      {
        "role": "倉庫主管",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "管理25名倉庫員工和每天4,000+個訂單的傳送\n引入條形碼掃描，將揀貨錯誤減少了35%\n進行安全培訓，使工地保持3年無事故"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "運營管理",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "團隊領導力（最多80名員工）\n倉儲與配送\n流程改進\n預算編制與成本控制\n安全管理\nERP 和 WMS 系統",
    "languages": "英語（流利）",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "持證電工",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "擁有8年住宅和商業工作經驗的持證熟練電工。擅長佈線、配電盤升級、照明和故障排查，在400+個專案中保持良好的安全記錄。熟悉 NEC 規範，有指導學徒的經驗。",
    "experience": [
      {
        "role": "熟練電工",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "2019年三月",
        "end": "",
        "current": true,
        "points": "完成400+個住宅和商業專案：佈線、配電盤升級、照明和電動車充電樁\n快速診斷和修復故障，首次上門修復率達92%\n指導2名學徒，並按規範對他們的工作進行驗收簽字\n保持良好的安全記錄，零工傷損失時間"
      },
      {
        "role": "電工學徒",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "協助持證電工進行新建築佈線和重新佈線\n學會了導管彎曲、電纜牽引和配電盤安裝\n完成8,000小時的學徒培訓並一次性透過熟練工考試"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "證書",
        "field": "電氣技術",
        "start": "2015",
        "end": "2016",
        "notes": "熟練電工執照（科羅拉多州）。持有 OSHA 30 證書。"
      }
    ],
    "skills": "住宅和商業佈線\n配電盤升級和電動車充電樁\n故障排查和測試\nNEC 規範合規\n導管彎曲和電纜牽引\n學徒指導",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "金融分析師",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "擁有6年預算編制、預測和投資分析經驗的金融分析師。構建的預測模型將預算差異減少了30%，併為 $50M 的投資決策提供了支援。精通 Excel、SQL 和財務建模。",
    "experience": [
      {
        "role": "金融分析師",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "為 $120M 的投資組合編制月度預測和年度預算\n透過基於驅動因素的預測模型將預算差異減少了30%\n透過估值和情景分析，為價值 $50M 的投資決策提供支援\n每月向首席財務官和部門負責人彙報調查結果"
      },
      {
        "role": "初級金融分析師",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "2021年三月",
        "current": false,
        "points": "為12個分支機構準備每週績效報告\n在 Excel 中實現報表自動化，每週節省10小時\n協助信貸團隊進行貸款組合分析"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "金融",
        "start": "2015",
        "end": "2019",
        "notes": "CFA 二級候選人。修讀過估值和公司金融課程。"
      }
    ],
    "skills": "財務建模與預測\n預算編制與差異分析\n估值（DCF、可比公司）\nExcel（高階）和 SQL\nBloomberg Terminal\n資料視覺化（Power BI）",
    "languages": "英語（流利）\n印地語（流利）",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "土木工程師",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "擁有7年公路和水利基礎設施設計經驗的土木工程師（PE）。主導設計了一條12英里高速公路拓寬工程和一套服務8,000戶家庭的雨水系統。熟練使用 AutoCAD Civil 3D，擅長成本估算和許可證協調。",
    "experience": [
      {
        "role": "土木工程師",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "負責一條12英里高速公路拓寬工程的設計，從勘測到施工檔案\n設計了一套服務8,000戶家庭的雨水系統，一次性獲得市政府批准\n與4個機構協調許可證，並管理 $2.5M 的設計預算\n作為持證專業工程師審查圖紙並蓋章"
      },
      {
        "role": "初級土木工程師",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "為20+個住宅開發專案準備平整和排水方案\n為道路專案進行成本估算和工程量計算\n參加現場檢查並撰寫進度報告"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "土木工程",
        "start": "2014",
        "end": "2018",
        "notes": "專業工程師執照（華盛頓州）。2018年透過 EIT。"
      }
    ],
    "skills": "道路和排水設計\nAutoCAD Civil 3D\n雨水建模\n成本估算\n許可證協調\n專案進度安排（MS Project）",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "機械工程師",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "擁有6年暖通空調系統和生產裝置設計經驗的機械工程師。透過重新設計的風管和控制系統將能源消耗降低了18%，涉及3家工廠，並主導了一次將產出提高25%的機器重新設計。熟練使用 SolidWorks、FEA 和熱分析。",
    "experience": [
      {
        "role": "機械工程師",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "為3家共有400+名員工的工廠設計暖通空調和生產裝置\n透過重新設計風管和控制流程，將能源消耗降低了18%\n主導了一次機器重新設計，在不增加佔地面積的情況下將產出提高了25%\n在製作原型之前對新零件進行 FEA 和熱分析"
      },
      {
        "role": "初級機械工程師",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "在 SolidWorks 中為汽車客戶建模零件和元件\n準備圖紙、材料清單和測試報告\n支援原型構建，並解決車間裡的裝配問題"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "機械工程",
        "start": "2015",
        "end": "2019",
        "notes": "修讀過熱力學、流體力學和機械設計課程。"
      }
    ],
    "skills": "暖通空調設計\nSolidWorks 和 AutoCAD\nFEA 和熱分析\n機械設計\n能源效率\nGD&T 和公差",
    "languages": "英語（流利）\n韓語（會話水平）",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "電氣工程師",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "擁有6年嵌入式系統和電力電子經驗的電氣工程師。設計的控制板現已用於50,000+臺裝置，並透過元件重新設計將電路板成本降低了22%。熟練使用 Altium、C 語言、韌體測試和 EMC 合規。",
    "experience": [
      {
        "role": "電氣工程師",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "設計每年用於50,000+臺裝置的嵌入式控制板\n透過重新設計電源級和尋找替代元件，將電路板成本降低了22%\n負責 EMC 合規測試，4條產品線一次性透過\n用 C 語言為微控制器編寫和審查韌體"
      },
      {
        "role": "初級電氣工程師",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "在 Altium 中為消費類和工業類客戶進行 PCB 佈局\n構建並測試原型，除錯硬體故障\n編寫了測試規程，將生產測試時間縮短了30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "電氣工程",
        "start": "2015",
        "end": "2019",
        "notes": "修讀過嵌入式系統、電力電子和訊號處理課程。"
      }
    ],
    "skills": "嵌入式系統與 PCB 設計\nAltium Designer\nC 語言與韌體\n電力電子\nEMC 合規測試\n示波器和實驗室儀器",
    "languages": "英語（流利）\n古吉拉特語（會話水平）",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "資料分析師",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "擁有4年經驗的資料分析師，善於把銷售和運營資料轉化為決策。構建的儀表板供60+位經理使用，將月度報告時間從3天縮短到4小時，並發現了一處每年價值 $180,000 的定價錯誤。精通 SQL、Excel 和 Power BI。",
    "experience": [
      {
        "role": "資料分析師",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "構建供60+位門店和區域經理使用的 Power BI 儀表板\n透過自動化的 SQL 管道，將月度報告時間從3天縮短到4小時\n透過審計促銷資料發現了一處每年價值 $180,000 的定價錯誤\n每月向商業團隊彙報調查結果"
      },
      {
        "role": "初級資料分析師",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Aug 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "清洗並整合了來自4個系統的交付資料，形成一張報告表\n構建了 Excel 跟蹤表，取代了2個團隊的人工統計\n每天為運營經理解答臨時的資料問題"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "統計學",
        "start": "2016",
        "end": "2020",
        "notes": "修讀過迴歸分析、資料庫和資料視覺化課程。"
      }
    ],
    "skills": "SQL 和資料清洗\nPower BI 和 Tableau\nExcel（高階）\nPython（pandas）\n儀表板設計\nA/B 測試基礎",
    "languages": "英語（流利）\n越南語（會話水平）",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "資料科學家",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "擁有5年為電子商務構建機器學習模型經驗的資料科學家。我上線的一個推薦模型使每次訪問收入提高了12%，一個流失模型現在能標記出80%的風險客戶。精通 Python、SQL 和模型部署。",
    "experience": [
      {
        "role": "資料科學家",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "上線了一個推薦模型，使每次訪問的收入提高了12%\n構建了一個客戶流失模型，能提前一個月標記出80%的風險客戶\n將模型部署到生產環境，並配有監控和再訓練管道\n每月向產品和營銷團隊展示模型結果"
      },
      {
        "role": "初級資料科學家",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "為3個零售客戶構建預測模型，準確率達90%+\n清洗並準備了超過10M行的資料集用於建模\n編寫文件，以便客戶能自己重新執行模型"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "資料科學",
        "start": "2018",
        "end": "2020",
        "notes": "推薦系統方向的論文。數學理學學士（2018）。"
      }
    ],
    "skills": "Python (scikit-learn, pandas)\n機器學習與統計\nSQL 和 Spark\n模型部署（Docker、AWS）\nA/B 測試\n資料視覺化",
    "languages": "英語（流利）\n阿拉伯語（流利）",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Web 開發人員",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "擁有4年使用 HTML、CSS 和 JavaScript 構建快速、無障礙網站經驗的 Web 開發人員。重建了一個商店的結賬流程，使轉化率提高了18%，並維護12個客戶網站，正常執行時間達99.9%。擅長響應式設計、效能和 SEO 基礎。",
    "experience": [
      {
        "role": "Web 開發人員",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "使用 HTML、CSS、JavaScript 和 WordPress 為12個客戶構建響應式網站\n重建了一個商店的結賬流程，使轉化率提高了18%\n透過圖片和程式碼最佳化，將平均頁面載入時間從4.2秒縮短到1.8秒\n透過監控和備份，使所有客戶網站的正常執行時間保持在99.9%"
      },
      {
        "role": "初級 Web 開發人員",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "為20+個小型企業網站構建登入頁面並修復錯誤\n在實際專案中學會了 Git、響應式設計和基礎 SEO\n回覆客戶電子郵件並在當天完成內容更新"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "電腦科學",
        "start": "2017",
        "end": "2021",
        "notes": "修讀過 Web 開發、資料庫和人機互動課程。"
      }
    ],
    "skills": "HTML、CSS 和 JavaScript\nReact 和 WordPress\n響應式設計\n頁面速度最佳化\nGit 和 GitHub\n基礎 SEO",
    "languages": "英語（流利）\n西班牙語（流利）",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "平面設計師",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "擁有5年品牌、包裝和社交媒體設計經驗的平面設計師。為25+家小企業建立了品牌形象，並完成了一次包裝重新設計，使貨架銷量提高了14%。熟練使用 Adobe Illustrator、Photoshop 和 Figma。",
    "experience": [
      {
        "role": "平面設計師",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "為25+個客戶設計品牌形象、包裝和社交營銷活動\n為某食品品牌重新設計包裝，使貨架銷量提高了14%\n每週在 Instagram、TikTok 和 Facebook 上製作30+份社交素材\n向客戶展示概念，並根據反饋快速修改"
      },
      {
        "role": "初級平面設計師",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "為本地餐館和商店設計傳單、選單和社交媒體帖子\n準備可直接印刷的檔案，並與印刷廠核對樣張\n構建了模板庫，將設計時間縮短了三分之一"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "平面設計",
        "start": "2016",
        "end": "2020",
        "notes": "品牌和包裝設計作品集。"
      }
    ],
    "skills": "Adobe Illustrator 和 Photoshop\nFigma\n品牌形象設計\n包裝設計\n社交媒體設計\n印刷製作",
    "languages": "英語（流利）\n韓語（會話水平）",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX 設計師",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "擁有5年研究使用者和設計移動及 Web 產品經驗的 UX 設計師。重新設計了一個入職流程，將流失率降低了35%，並進行了40+次可用性測試。熟練使用 Figma，擅長使用者研究、線框圖和原型設計。",
    "experience": [
      {
        "role": "UX 設計師",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "重新設計了移動端入職流程，將流失率降低了35%，用時3個月\n每年進行40+次可用性測試和使用者訪談\n在 Figma 中為2個產品團隊構建線框圖和原型\n每天與工程師和產品經理協作交付工作"
      },
      {
        "role": "初級 UX 設計師",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Aug 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "為5個客戶應用設計介面和流程\n進行了首次可用性測試，併為客戶撰寫了調查結果\n構建了元件庫，加快了設計交付速度"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "心理學",
        "start": "2016",
        "end": "2020",
        "notes": "UX 設計證書（General Assembly，2020）。修讀過人機互動課程。"
      }
    ],
    "skills": "使用者研究與可用性測試\n線框圖和原型設計（Figma）\n資訊架構\n設計系統\nJourney mapping\n利益相關者研討會",
    "languages": "英語（流利）",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "市場營銷經理",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "擁有8年 B2B 和消費者營銷活動經驗的市場營銷經理。在一年內將合格潛在客戶增加了60%，推出了一條第一年銷售額達到 $3M 的產品線，並管理 $500,000 的年度預算，團隊共5人。",
    "experience": [
      {
        "role": "市場營銷經理",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "帶領一個5人團隊，管理 $500,000 的年度營銷預算\n透過內容和付費營銷活動，在一年內將合格潛在客戶增加了60%\n推出了一條第一年銷售額達到 $3M 的產品線\n透過重建營銷活動的定向投放，將每條潛在客戶的成本降低了28%"
      },
      {
        "role": "營銷專員",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "向80,000名訂閱者傳送電子郵件營銷活動，開啟率達24%\n管理的社交賬號粉絲從5,000增長到40,000\n每年組織6個展會展位，每個展位產生300+條潛在客戶線索"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "修讀過消費者行為、資料分析和品牌管理課程。"
      }
    ],
    "skills": "營銷活動策略與規劃\n內容與電子郵件營銷\n付費廣告（Google、Meta）\nMarketing analytics (GA4)\n團隊領導力\n預算管理",
    "languages": "英語（流利）",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "專案經理",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "擁有7年按時按預算交付軟體和建築專案經驗的專案經理（PMP）。管理了15個價值高達 $4M 的專案，準時交付率達94%。擅長敏捷方法、風險管理和利益相關者溝通。",
    "experience": [
      {
        "role": "專案經理",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "管理15個價值高達 $4M 的專案，準時交付率達94%\n為3個團隊執行敏捷衝刺，並每週向高管彙報進展\n透過更早進行風險審查，將專案超支減少了30%\n協調跨4個時區的供應商、客戶和內部團隊"
      },
      {
        "role": "專案協調員",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "跟蹤了8個建築專案的進度、預算和許可證\n為客戶準備狀態報告和會議記錄\n解決了進度衝突，為一個學校建築專案節省了2周時間"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "工商管理",
        "start": "2014",
        "end": "2018",
        "notes": "PMP 認證（2021）。認證 ScrumMaster。"
      }
    ],
    "skills": "專案規劃與進度安排\n敏捷開發與 Scrum\n風險管理\n預算控制\n利益相關者溝通\nMS Project 和 Jira",
    "languages": "英語（流利）",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "人力資源經理",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "擁有9年招聘、員工關係和福利經驗的人力資源經理。將招聘週期從45天縮短到28天，把留任率提高了15%，併為250名員工管理3個地點的人力資源工作。具備 CIPD 級別的勞動法和政策知識。",
    "experience": [
      {
        "role": "人力資源經理",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "為250名員工管理人力資源工作，覆蓋3個地點，團隊共3人\n透過重建面試流程，將招聘週期從45天縮短到28天\n透過新的入職和評估計劃將留任率提高了15%\n處理員工關係、申訴和政策更新"
      },
      {
        "role": "人力資源專員",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "每年為酒店和餐館招聘120+名員工\n為400名員工進行薪資核查和福利登記\n解決員工糾紛，並將流失率保持在行業平均水平以下"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "人力資源",
        "start": "2012",
        "end": "2016",
        "notes": "持有 SHRM-CP 認證。修讀過勞動法和組織行為學課程。"
      }
    ],
    "skills": "招聘與入職\n員工關係\n福利與薪資\n勞動法\n績效管理\nHRIS (Workday, BambooHR)",
    "languages": "英語（流利）",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "律師助理（Associate Attorney）",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "擁有6年商業訴訟和合同法經驗的律師助理。經辦40+個案件，在8個案件中贏得簡易判決，起草了價值 $25M 的合同。擁有伊利諾伊州律師執業資格；擅長法律研究、檔案起草和客戶諮詢。",
    "experience": [
      {
        "role": "律師助理（Associate Attorney）",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "管理40+個商業訴訟案件，從立案到和解\n在8個案件中贏得簡易判決，並以有利條件和解了另外20個案件\n起草並談判價值高達 $25M 的合同\n當面和以書面形式為客戶提供風險與策略方面的建議"
      },
      {
        "role": "法律書記員",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Aug 2019",
        "end": "Aug 2020",
        "current": false,
        "points": "研究判例法，併為2名法官起草備忘錄\n審查動議，併為100+場聽證會準備法官席摘要\n旁聽了各民事部門的庭審和和解會議"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "法律",
        "start": "2016",
        "end": "2019",
        "notes": "2019年獲得伊利諾伊州律師執業資格。曾任法律評論編輯，負責文章欄目。"
      }
    ],
    "skills": "商業訴訟\n合同起草與談判\n法律研究（Westlaw、LexisNexis）\n客戶諮詢\n證詞與證據開示\n法庭檔案與程式",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "臨床藥劑師",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "擁有7年醫院和社群藥房經驗的臨床藥劑師（PharmD）。每天稽核100+份用藥醫囑，透過新的核查規程將藥物不良事件減少了25%，並指導患者安全用藥。持有賓夕法尼亞州執業資格。",
    "experience": [
      {
        "role": "臨床藥劑師",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "每天稽核100+份用藥醫囑的安全性、劑量和相互作用\n透過新的雙重核查規程將藥物不良事件減少了25%\n就複雜患者的藥物選擇向醫生和護士提供建議\n每週進行兩次醫院的抗生素管理查房"
      },
      {
        "role": "藥劑師職員",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "每天配發200+份處方，配藥錯誤為零\n指導患者瞭解新藥、副作用和儲存方法\n接種流感疫苗並進行血壓檢查"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "藥學",
        "start": "2014",
        "end": "2018",
        "notes": "持證藥劑師（賓夕法尼亞州）。委員會認證的藥物治療專家（BCPS）。"
      }
    ],
    "skills": "用藥審查與安全\n臨床藥理學\n患者諮詢\n藥房系統（Epic、PioneerRx）\n抗生素管理\n疫苗接種服務",
    "languages": "英語（流利）",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "全科牙醫",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "擁有8年修復、美容和預防牙科經驗的全科牙醫（DDS）。每天治療25+名患者，診所共有2,000名患者，患者滿意度達98%。擅長牙冠、種植、根管治療和隱形矯正。",
    "experience": [
      {
        "role": "全科牙醫",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "每天治療25+名患者：補牙、牙冠、根管治療和拔牙\n患者滿意度保持在98%，評價數量達1,200+條\n每月植入15+顆種植體，並管理隱形矯正病例\n管理2名潔牙師和4名牙科助理"
      },
      {
        "role": "牙科助理醫師",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "為一個有1,500名患者的診所提供全科牙科服務\n引入當日牙冠服務，將複診次數減少了40%\n開展了關於兒童口腔健康的學校外展走訪"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "牙科學",
        "start": "2013",
        "end": "2017",
        "notes": "持證牙醫（亞利桑那州）。持有 Invisalign 認證。持有 CPR/BLS 證書。"
      }
    ],
    "skills": "修復牙科（牙冠、補牙）\n根管治療\n種植牙\n隱形矯正器\n患者護理與溝通\n數字 X 光和 CEREC",
    "languages": "英語（流利）",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "物理治療師",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "擁有6年骨科和運動康復經驗的物理治療師（DPT）。每天治療12-15名患者，其中90%在計劃的療程內達到目標。擅長手法治療、運動處方和重返賽場測試。",
    "experience": [
      {
        "role": "物理治療師",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "每天為12-15名患者治療運動損傷，進行術後康復和背痛治療\n90% 的患者在計劃的療程次數內達到了目標\n設計被3支本地球隊採用的重返賽場測試\n指導2名新畢業生，並監督學生的實習安排"
      },
      {
        "role": "物理治療師職員",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Aug 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "為術後和中風住院患者提供康復治療\n每週為20+名老年患者開設團體運動課程\n在 Epic 中記錄進展並交接給病房團隊"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "物理治療",
        "start": "2016",
        "end": "2019",
        "notes": "持證物理治療師（俄勒岡州）。骨科臨床專家（OCS）。"
      }
    ],
    "skills": "骨科與運動康復\n手法治療\n運動處方\n重返賽場測試\n患者教育\n文件記錄（Epic）",
    "languages": "英語（流利）",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "主廚",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "擁有10年克里奧爾菜和現代美式廚房經驗的主廚。帶領一個12人的廚師團隊，在一家200個座位的餐廳工作，透過更嚴格的訂貨將食材成本降低了15%，並在2025年贏得了城市美食指南的 'Best New Menu' 獎。",
    "experience": [
      {
        "role": "主廚",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "帶領一個12人的廚師團隊，在一家200個座位、每晚服務300+位客人的餐廳工作\n透過更嚴格的訂貨和時令選單，將食材成本降低了15%\n在2025年贏得了城市美食指南的 'Best New Menu' 獎\n設計選單、培訓廚師，並在週五和週六的營業中負責出菜臺"
      },
      {
        "role": "副主廚",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "在主廚不在時管理廚房，每晚服務150位客人\n管理庫存、訂貨和供應商關係\n培訓了8名流水線廚師，並將員工流失率降低了三分之一"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "烹飪藝術",
        "start": "2014",
        "end": "2016",
        "notes": "持有 ServSafe 食品保護經理認證。"
      }
    ],
    "skills": "選單設計與成本核算\n克里奧爾菜與現代美式菜\n廚房領導力（12人團隊）\n食品安全（ServSafe）\n供應商管理\n宴會與活動餐飲",
    "languages": "英語（流利）\n西班牙語（流利）",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "警察",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "擁有8年巡邏、社群警務和調查經驗的警察。每週響應30+次呼叫，因降級處理和社群外展工作獲得嘉獎。受過危機干預、急救和報告撰寫培訓。",
    "experience": [
      {
        "role": "警察",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "巡邏一個有40,000名居民的轄區，每週響應30+次呼叫\n因降級處理和社群外展工作獲得2次嘉獎\n調查盜竊和襲擊案件，撰寫的報告被用於50+起起訴\n透過實地培訓指導3名新警員"
      },
      {
        "role": "巡邏警員",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Aug 2017",
        "end": "2019年五月",
        "current": false,
        "points": "在縣道巡邏並響應緊急呼叫\n送達法庭檔案並協助押送囚犯\n完成了危機干預和急救培訓"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "證書",
        "field": "執法",
        "start": "2017",
        "end": "2017",
        "notes": "俄亥俄州治安官培訓學院畢業生。受過危機干預小組培訓。"
      }
    ],
    "skills": "巡邏與緊急響應\n社群警務\n危機干預與降級處理\n報告撰寫\n調查\n急救和心肺復甦",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "消防員/急救員",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "擁有7年滅火、救援和緊急醫療響應經驗的消防員和急救員。響應過900+次呼叫，包括建築火災、車輛救援和醫療緊急情況。受過危險品處置培訓，安全記錄良好。",
    "experience": [
      {
        "role": "消防員/急救員",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "2020年三月",
        "end": "",
        "current": true,
        "points": "響應900+次火災、救援和醫療呼叫，轄區有3個消防站\n作為認證 EMT，在60%的呼叫中提供緊急醫療護理\n受過危險品培訓；在化學品事件中負責去汙工作\n培訓新消防員學習水帶操作、梯子和搜救技術"
      },
      {
        "role": "志願消防員",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "作為志願者響應野外和建築火災\n完成了消防員 I & II 和 EMT-Basic 培訓\n幫助在學校開展社群消防安全講座"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "證書",
        "field": "消防科學",
        "start": "2017",
        "end": "2018",
        "notes": "消防員 I & II。持有 EMT-Basic 證書。受過危險品處置培訓。"
      }
    ],
    "skills": "滅火與救援\n緊急醫療護理（EMT）\n危險品處置\n梯子、水帶和通風\n社群消防安全\n壓力下的團隊協作",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "持證水管工",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "擁有11年住宅和商業管道經驗的持證高階水管工。每年完成600+個專案，從預埋管道到鍋爐安裝，首次上門修復率達98%。擅長管道安裝、下水道疏通和規範合規。",
    "experience": [
      {
        "role": "高階水管工",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "每年完成600+個住宅和商業專案\n安裝鍋爐、熱水器和完整的浴室預埋管道\n維修服務電話的首次上門修復率保持在98%\n指導3名學徒，並對他們的工作進行驗收簽字"
      },
      {
        "role": "熟練水管工",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dec 2018",
        "current": false,
        "points": "每年為40+棟房屋進行新建築管道安裝\n為住宅和餐館疏通下水道並修復漏水\n學會了燃氣管道安裝和防迴流"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "證書",
        "field": "管道技術",
        "start": "2013",
        "end": "2014",
        "notes": "高階水管工執照（田納西州）。持有防迴流認證。"
      }
    ],
    "skills": "住宅和商業管道\n管道安裝和焊接\n下水道疏通和攝像頭檢查\n鍋爐和熱水器安裝\n燃氣管道安裝\n管道規範合規",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "熟練木匠",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "擁有9年框架、精細加工和定製櫥櫃經驗的熟練木匠。為30+棟房屋搭建框架，為60+戶家庭安裝廚房，以測量精確和收尾乾淨而聞名。擅長看圖紙並按規範施工。",
    "experience": [
      {
        "role": "熟練木匠",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "為30+棟房屋搭建框架，併為60+戶家庭安裝廚房\n定製櫥櫃和裝飾線條，公差控制在1/16英寸以內\n閱讀並遵循建築圖紙，在錯誤造成金錢損失之前將其標出\n培訓2名學徒學習框架和精加工技術"
      },
      {
        "role": "木匠學徒",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "在改造工程中協助完成框架、幹牆和地板施工\n學會了安全使用鋸子、銑刀和釘槍\n完成8,000小時的學徒培訓並透過熟練工考試"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "證書",
        "field": "木工",
        "start": "2015",
        "end": "2016",
        "notes": "熟練木匠。持有 OSHA 10 證書。"
      }
    ],
    "skills": "框架和結構工程\n精細木工與裝飾線條\n定製櫥櫃\n建築圖紙識讀\n電動工具與安全\n幹牆和地板",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "中學教師（數學）",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "擁有8年經驗的中學教師，為9-12年級教授數學。將代數透過率從64%提高到83%，並帶領數學隊打進2次州決賽。擅長分層教學、考試準備和家長溝通。",
    "experience": [
      {
        "role": "數學教師（9-12年級）",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Aug 2019",
        "end": "",
        "current": true,
        "points": "為120名學生教授代數、幾何和預備微積分，共5個班級\n將代數透過率從64%提高到83%，用時3年\n帶領數學隊打進2次州決賽\n每週為30名學生開設課後輔導"
      },
      {
        "role": "數學教師（9-10年級）",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Aug 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "每年為100名學生教授代數和幾何\n引入每週小測驗，將作業缺口減少了一半\n組織了學校第一屆數學博覽會，有200名學生參加"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "數學教育",
        "start": "2013",
        "end": "2017",
        "notes": "州教師資格證（新罕布什爾州，7-12年級，數學）。"
      }
    ],
    "skills": "數學教學（從代數到預備微積分）\n考試準備\n分層教學\n課堂管理\n家長溝通\nGoogle Classroom 和 Desmos",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "幼兒教師",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "擁有6年照顧3-5歲兒童經驗的幼兒教師。擅長遊戲化學習、行為引導和家長溝通。設計了一套自然拼讀課程，提高了全班的入學準備度分數。",
    "experience": [
      {
        "role": "幼兒教師",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "教授並照顧一個18名3-5歲兒童的班級\n設計了一套自然拼讀課程，提高了全班的入學準備度分數\n規劃每週主題、手工和戶外活動\n每天與家長分享最新情況，並定期傳送學期進度報告"
      },
      {
        "role": "幼兒教師助理",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "協助主班教師管理一個20名兒童的班級\n每天進行故事時間、歌曲和藝術活動\n按照州標準保持安全和衛生記錄"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "副學士學位",
        "field": "幼兒教育",
        "start": "2016",
        "end": "2018",
        "notes": "持有兒童發展助理（CDA）資格證書。持有急救和心肺復甦證書。"
      }
    ],
    "skills": "遊戲化學習\n行為引導\n自然拼讀和早期讀寫\n家長溝通\n課堂安全\n藝術和手工規劃",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "兒童與家庭社會工作者",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "擁有7年支援兒童和家庭經驗的持證社會工作者。管理25個家庭的個案量，協調學校和醫療服務提供者之間的服務，並完成法官所依賴的法庭報告。擅長評估、危機支援和保護工作。",
    "experience": [
      {
        "role": "兒童與家庭社會工作者",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "管理25個家庭的個案量，每週走訪家庭和學校\n完成法庭報告並在家事法庭作證\n為弱勢家庭協調住房、健康和學校支援\n透過新的分診系統將評估等待時間縮短了20%"
      },
      {
        "role": "個案工作者",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "為40+個住在臨時住房的家庭提供福利和轉介支援\n每週舉辦育兒和預算規劃研討會\n保持個案記錄準確，以備審計和資金報告"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "社會工作",
        "start": "2016",
        "end": "2018",
        "notes": "持證社會工作者（俄亥俄州）。修讀過兒童福利和家庭系統課程。"
      }
    ],
    "skills": "個案管理（25個家庭）\n兒童保護\n家事法庭報告\n危機支援\n多機構協調\n福利與住房轉介",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "律師助理",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "擁有6年訴訟支援和公司備案經驗的律師助理。管理30+個案件的證據開示，起草訴狀和合同，並以100%準時的記錄守住備案截止期限。熟練使用 Westlaw、電子證據開示和案件管理軟體。",
    "experience": [
      {
        "role": "律師助理",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "管理30+個訴訟案件的證據開示，審查10,000+份檔案\n起草訴狀、動議和合同，供律師稽核\n法庭檔案和截止期限保持100%準時記錄\n協調證人並準備庭審卷宗"
      },
      {
        "role": "法律助理",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "每週為20+個客戶進行接案訪談\n為住房和家庭案件準備表格和備案檔案\n為講西班牙語的客戶翻譯法律檔案"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "副學士學位",
        "field": "律師助理研究",
        "start": "2017",
        "end": "2019",
        "notes": "NALA 認證律師助理（CP）。ABA 批准的課程。"
      }
    ],
    "skills": "訴訟支援與證據開示\n法律檔案起草\nE-discovery (Relativity)\n個案管理（Clio）\n法庭檔案與截止期限\n法律研究（Westlaw）",
    "languages": "英語（流利）\n西班牙語（流利）",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "簿記員",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "擁有5年應付賬款、開票和銀行對賬經驗的簿記員。每月處理300+張發票，準確率達99.8%，保持賬目清晰以便月末結賬。熟練使用 QuickBooks、Excel，並能提供薪資支援。",
    "experience": [
      {
        "role": "簿記員",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "每月處理300+張供應商發票，準確率達99.8%\n每週對6個銀行賬戶進行對賬，並在當天標出差異\n為45名員工準備薪資資料，並催收逾期的客戶付款\n保持記錄整潔以便年終審計，零發現問題"
      },
      {
        "role": "會計助理",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "2021年三月",
        "current": false,
        "points": "每天將銷售發票和收據錄入 QuickBooks\n透過電話和電子郵件解答供應商關於付款的諮詢\n歸檔檔案並保持檔案為最新狀態"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "證書",
        "field": "簿記",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "應付與應收賬款\n銀行對賬\n開具發票（每月300+張）\nQuickBooks 和 Excel\n薪資支援\n資料錄入（每分鐘65字）",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "行政助理",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "擁有6年經驗的行政助理，善於讓辦公室順暢運轉。為4位經理管理日程，安排差旅和會議，每天處理100+封電子郵件。以準確、謹慎和在截止期限壓力下保持冷靜而著稱。",
    "experience": [
      {
        "role": "行政助理",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "為4位高階經理管理日程、差旅和會議\n每天處理100+封電子郵件，起草回覆並標註優先順序\n準備董事會檔案並在月度會議上做記錄\n管理辦公用品和供應商訂單，將成本削減了12%"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Aug 2019",
        "end": "Dec 2020",
        "current": false,
        "points": "每天接待60+名患者，並管理預約登記\n接聽電話並處理保險方面的諮詢\n保持患者記錄準確並保密"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "副學士學位",
        "field": "辦公室管理",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "日程與差旅管理\n電子郵件與信函\n會議記錄\nMicrosoft Office（Word、Excel、Outlook）\n資料錄入（每分鐘70字）\n辦公用品與供應商",
    "languages": "英語（流利）",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "銀行櫃員",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "擁有4年經驗的銀行櫃員，每天準確細緻地為80+位客戶服務。3年來現金抽屜分毫不差，零短款。擅長存款、取款、防欺詐檢查，併為客戶推薦合適的產品。",
    "experience": [
      {
        "role": "銀行櫃員",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "每天為80+位顧客服務：存款、取款、付款和轉賬\n3年來現金抽屜分毫不差，零短款\n發現並阻止了12起欺詐企圖，為客戶挽回了 $90,000+\n向客戶推薦儲蓄和貸款產品，每季度達成推薦目標"
      },
      {
        "role": "客服專員",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "為會員開設新賬戶併發行簽帳金融卡\n透過電話解答關於餘額和對賬單的諮詢\n幫助會員開通網上銀行和手機銀行"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "副學士學位",
        "field": "商業",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "現金處理與軋賬\n存款、取款與付款\n防欺詐\n客戶服務\n銀行軟體（Fiserv）\n產品推薦",
    "languages": "英語（流利）",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "銷售經理",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "擁有10年帶領最多15名銷售代表團隊經驗的銷售經理。將區域收入從 $4M 增長到 $7.5M，用時3年，把贏單率從22%提升到34%，並透過更好的輔導和入職培訓將銷售代表流失率減半。",
    "experience": [
      {
        "role": "區域銷售經理",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "帶領一個由15名銷售代表組成的團隊，覆蓋得克薩斯州和俄克拉荷馬州\n將區域收入從 $4M 增長到 $7.5M，用時3年\n透過更好的輔導和管道審查將贏單率從22%提升到34%\n透過新的入職培訓計劃將銷售代表流失率減半"
      },
      {
        "role": "銷售代表",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dec 2020",
        "current": false,
        "points": "向80+個客戶銷售工業裝置，連續5年達成指標\n連續3年成為本地區的頂級銷售代表\n建立了一個轉介網路，帶來了25%的新業務"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "修讀過銷售管理和談判課程。"
      }
    ],
    "skills": "銷售團隊領導力（15名銷售代表）\n收入增長與預測\n銷售管道管理（Salesforce）\n輔導與入職培訓\n談判\n區域規劃",
    "languages": "英語（流利）",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "施工經理",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "擁有12年經驗的施工經理，交付過價值高達 $12M 的商業和住宅專案。完成20+個專案，準時率達95%，工地零工傷損失時間，預算控制在3%以內。擅長進度安排、分包商管理和安全管理。",
    "experience": [
      {
        "role": "施工經理",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "交付價值高達 $12M 的商業和住宅專案\n完成20+個專案，準時率達95%，預算控制在3%以內\n管理30+個分包商和50名工人，分佈在3個在建工地\n4年來所有工地零工傷損失時間"
      },
      {
        "role": "工地主管",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "管理辦公和零售建築工地的日常運營\n協調交付、檢查和分包商進度安排\n保持安全記錄良好，並透過了每一次 OSHA 檢查"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "建築施工",
        "start": "2009",
        "end": "2013",
        "notes": "持有 OSHA 30 證書。CCM（認證施工經理）候選人。"
      }
    ],
    "skills": "專案進度安排（MS Project、Procore）\n預算控制\n分包商管理\n工地安全（OSHA 30）\n圖紙識讀\n客戶報告",
    "languages": "英語（流利）",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "認證醫療助理",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "擁有5年全科和急診護理經驗的認證醫療助理。每天為25+名患者安排診室、測量生命體徵、抽血並管理前臺，患者滿意度達97%。熟練使用電子健康記錄、靜脈採血和保險核查。",
    "experience": [
      {
        "role": "認證醫療助理",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "每天為25+名患者安排診室：生命體徵、病史和檢查準備\n抽血並進行基礎實驗室檢查，一次穿刺成功率達99%\n管理前臺、排班和保險核查\n患者滿意度保持在97%，調查數量達800+份"
      },
      {
        "role": "醫療助理",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Aug 2019",
        "end": "2021年三月",
        "current": false,
        "points": "對 walk-in 患者進行分診，並協助醫生進行小手術\n接種疫苗並負責標本採集\n在患者之間保持診室物品齊備、乾淨並做好準備"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "證書",
        "field": "醫療助理",
        "start": "2018",
        "end": "2019",
        "notes": "認證醫療助理（CMA，AAMA）。持有 BLS 證書。受過靜脈採血培訓。"
      }
    ],
    "skills": "患者接診和生命體徵測量\n靜脈採血\nEHR (eClinicalWorks)\n疫苗接種\n保險核查\n前臺管理",
    "languages": "英語（流利）\n西班牙語（流利）",
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
    "summary": "積極進取的高中高年級學生，成績優異，有兼職工作經驗。學東西快、可靠、善於與人相處。正在尋找第一份全職工作，或一份可以與大學學習兼顧的兼職工作。",
    "experience": [
      {
        "role": "兼職銷售助理",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "在週末和放學後的每班服務50+位顧客\n處理現金、補貨並保持陳列整潔\n受信任在週六上午負責開店"
      },
      {
        "role": "志願輔導教師",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "每週兩次為低年級學生輔導數學\n幫助組織了有40名兒童參加的暑期閱讀計劃"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "高中文憑",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6。連續3年榮譽榜。辯論隊隊長。"
      }
    ],
    "skills": "客戶服務\n現金處理\n團隊協作\n時間管理\nMicrosoft Office\n公開演講（辯論隊）",
    "languages": "英語（流利）",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "應屆畢業生 — 工商管理",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "應屆工商管理畢業生，有營銷和運營方面的實習經驗。組織了一場有200名參與者的校園商業競賽，並完成了一次6個月的實習，在實習中將報告時間縮短了一半。渴望開始全職職業生涯並快速學習。",
    "experience": [
      {
        "role": "營銷實習生",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "運營公司的社交賬號，粉絲從2,000增長到6,500\n構建了一個報告儀表板，將每週報告時間縮短了一半\n寫了20篇部落格文章，帶來了15,000+的閱讀量"
      },
      {
        "role": "活動志願者負責人",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "2025年五月",
        "current": false,
        "points": "組織了一場有200名參與者和12名評委的商業競賽\n管理了 $5,000 的預算和一個8名志願者的團隊"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "工商管理",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5。連續2年入選院長名單。畢業年專案是關於小企業營銷的。"
      }
    ],
    "skills": "社交媒體營銷\nExcel 和 Google Sheets\n演示技能\n活動組織\n團隊協作\n基礎資料分析",
    "languages": "英語（流利）",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "初級營銷助理",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "擁有2年內容、電子郵件和社交媒體經驗的初級營銷助理。將一個客戶簡報的訂閱者從1,000增長到4,000，並運營平均開啟率達22%的營銷活動。已準備好承擔更多責任和管理更大的客戶組合。",
    "experience": [
      {
        "role": "初級營銷助理",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "將一個客戶簡報的訂閱者從1,000增長到4,000，用時14個月\n每週撰寫和安排12篇社交帖子，服務4個客戶\n運營平均開啟率達22%的電子郵件營銷活動\n每月向客戶報告營銷活動結果"
      },
      {
        "role": "營銷實習生",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "為公司網站上的200+件商品撰寫產品描述\n幫助開展了一次春季促銷活動，使線上訂單提高了15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "傳播學",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4。修讀過數字營銷和媒體寫作課程。"
      }
    ],
    "skills": "內容寫作\n電子郵件營銷（Mailchimp）\n社交媒體管理\nGoogle Analytics\nCanva\n客戶報告",
    "languages": "英語（流利）",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "運營主管",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "擁有8年管理20-30人倉庫團隊經驗的運營主管。將揀貨錯誤減少了30%，把準時排程率從90%提升到97%，並培訓了15名新員工。已準備好擔任運營經理，管理更大的場地和預算。",
    "experience": [
      {
        "role": "運營主管",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "管理25名倉庫員工，分2班工作，場地面積為90,000平方英尺\n透過新的核查流程和條形碼掃描，將揀貨錯誤減少了30%\n將準時排程率從90%提升到97%，用時2年\n培訓了15名新員工，並將其中3名提升為團隊組長"
      },
      {
        "role": "團隊組長",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "帶領一個10人的夜班揀貨和包裝團隊\n引入了一套排班表，在不耽誤截止期限的情況下將加班時間減少了20%\n進行安全簡報，並保持團隊2年無事故"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "供應鏈管理",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "團隊領導力（25名員工）\n倉庫運營\n流程改進\n安全管理\n庫存控制\nWMS 和 Excel",
    "languages": "英語（流利）\n印地語（會話水平）",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "高階專案經理",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "擁有14年交付價值高達 $8M 軟體專案經驗的高階專案經理。主導了30+個專案，準時率達92%，從零開始建立了一個 PMO，並指導了10名專案經理。以在壓力下冷靜交付和向高管誠實彙報而著稱。",
    "experience": [
      {
        "role": "高階專案經理",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "交付價值高達 $8M 的軟體專案，準時率達92%\n從零開始建立了公司的 PMO：模板、報告和治理體系\n指導10名專案經理，並運營每月的專案經理社群\n就一個40人的計劃直接向技術長彙報"
      },
      {
        "role": "專案經理",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dec 2018",
        "current": false,
        "points": "為零售和醫療保健客戶管理了20+個專案\n引入了敏捷實踐，將交付時間縮短了25%\n將2個關鍵客戶的年收入從 $500k 增長到 $2M"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "資訊系統",
        "start": "2008",
        "end": "2012",
        "notes": "PMP 認證（2015）。認證 ScrumMaster。MBA 課程（2018-2019，未完成）。"
      }
    ],
    "skills": "計劃和專案交付\nPMO 設立與治理\n敏捷與瀑布模式\n預算控制（$8M）\n高管報告\n團隊指導",
    "languages": "英語（流利）\n西班牙語（會話水平）",
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
    "summary": "擁有18年為零售和物流公司擴充套件運營經驗的營運長。將200人的運營規模擴大到900人，遍佈6個地點，把 EBITDA 利潤率從8%提升到14%，並主導了2次收購。具備董事會層面的報告和投資者關係經驗。",
    "experience": [
      {
        "role": "Chief Operating Officer",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "運營900人的業務，覆蓋6個地點，預算為 $180M\n將 EBITDA 利潤率從8%提升到14%，用時3年\n主導了2次收購，並在6個月內整合了兩個團隊\n每月向董事會彙報運營、風險和增長情況"
      },
      {
        "role": "運營副總裁",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dec 2020",
        "current": false,
        "points": "將運營規模從200人擴大到600人，覆蓋4個地點\n準時開設了3個配送中心，且未超預算\n組建了至今仍在運營這家企業的領導團隊"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "工商管理",
        "start": "2010",
        "end": "2012",
        "notes": "紐約大學經濟學理學學士（2006）。董事會治理課程（2020）。"
      }
    ],
    "skills": "大規模運營（900人）\n損益（P&L）責任（$180M）\n併購\n董事會報告\n增長戰略\n領導團隊建設",
    "languages": "英語（流利）",
    "template": "executive"
  }
};
});
