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
      "title": "注册护士",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "拥有6年内外科和遥测病区经验的注册护士。擅长患者评估、静脉治疗、用药管理和电子健康记录。以在高压情况下与患者和家属冷静、清晰地沟通而著称。",
    "experience": [
      {
        "role": "注册护士",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "每班照顾5-6名患者，所在内外科病区有32张床位，工作包括评估、用药和伤口护理\n培训和指导4名新毕业护士，将他们的入职培训时间缩短了2周\n通过在交接时引入双重核查流程，将病区的用药错误减少了18%\n在 Epic 电子健康记录中准确记录所有护理工作"
      },
      {
        "role": "护士职员",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "2021年五月",
        "current": false,
        "points": "每天为40+名 walk-in 患者进行分诊，优先处理需要当日护理的紧急病例\n在每月社区外展活动中接种疫苗并进行健康筛查\n协调专科转诊并跟进检查结果"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "护理",
        "start": "2015",
        "end": "2019",
        "notes": "注册护士执照（得克萨斯州）。持有 BLS 和 ACLS 证书。"
      }
    ],
    "skills": "患者评估\n静脉治疗和用药管理\n电子健康记录（Epic）\n遥测监测\n患者与家属教育\n感染控制",
    "languages": "英语（流利）\n西班牙语（会话水平）",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "软件开发人员",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "拥有5年使用 Python 和 JavaScript 构建 Web 应用经验的软件开发人员。上线的功能有200,000+用户使用，将 API 响应时间缩短了40%，并主导了单体架构向微服务的迁移。在测试、代码审查和清晰的文档方面实力雄厚。",
    "experience": [
      {
        "role": "软件开发人员",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "使用 Python（Django）和 React 构建并维护面向客户的 Web 功能，服务200,000+用户\n通过添加缓存和修复慢查询，将平均 API 响应时间从850毫秒缩短到500毫秒\n主导了计费服务向微服务的迁移，实现了零停机\n每周审查10+个拉取请求，并指导2名初级开发人员"
      },
      {
        "role": "初级开发人员",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "用 JavaScript 构建内部仪表板，取代了3个团队的手工电子表格\n编写了自动化测试，将覆盖率从45%提高到78%\n在第一年修复了整个产品的120+个错误"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "计算机科学",
        "start": "2016",
        "end": "2020",
        "notes": "修读过数据库、算法和操作系统课程。"
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript 和 React\nPostgreSQL 和 Redis\nREST API 和微服务\nGit 和 CI/CD\n自动化测试（pytest、Jest）",
    "languages": "英语（流利）",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "小学教师",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "拥有7年经验的小学教师，教授3-5年级。擅长分层教学、课堂管理和家长沟通。在两个学年内将班级的阅读熟练度从58%提高到81%。",
    "experience": [
      {
        "role": "小学教师（4年级）",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "为一个26名学生的班级教授阅读、数学和科学，其中5名学生有个人学习计划\n通过小组导读，在两年内将班级阅读熟练度从58%提高到81%\n每周发布一份家长简报，并为每个家庭召开学期进度会议\n带领学校的阅读俱乐部，成员是40名3-5年级的学生"
      },
      {
        "role": "小学教师（3年级）",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Aug 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "为24名学生规划并讲授所有核心科目的日常课程\n引入行为规范，将课堂扰乱减少了一半\n组织了年级科学博览会，有120名学生和80名家长参加"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "小学教育",
        "start": "2014",
        "end": "2018",
        "notes": "州教师资格证（俄亥俄州，K-5年级）。阅读增注资格。"
      }
    ],
    "skills": "分层教学\n课堂管理\n小组导读\n家长沟通\n课程规划\nGoogle Classroom",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "高级会计师",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "拥有8年月末结账、财务报告和内部审计经验的注册会计师。通过重建对账流程将结账时间提前了3天，并在一个审计年度内发现了240,000美元可追回的多付款项。精通 Excel、QuickBooks 和 ERP 系统。",
    "experience": [
      {
        "role": "高级会计师",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "负责一个 $40M 业务单元的月末结账，在重建对账流程后提前3天完成\n为高级管理层准备月度财务报表和差异报告\n发现了 $240,000 可追回的供应商多付款项，审计年份是2024年\n管理2名会计职员，并审核他们的日记账分录"
      },
      {
        "role": "会计职员",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "为25个小企业客户准备报税表和财务报表\n协助完成8个客户的审计，测试内部控制并记录审计发现\n在 Excel 中实现固定资产登记自动化，每月节省6小时"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "会计",
        "start": "2013",
        "end": "2017",
        "notes": "注册会计师（伊利诺伊州）。美国注册会计师协会会员。"
      }
    ],
    "skills": "月末结账与对账\n财务报告与差异分析\n内部审计\nExcel（数据透视表、VLOOKUP）\nQuickBooks 和 SAP\n税务准备",
    "languages": "英语（流利）\n普通话（会话水平）",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL A 类卡车司机",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "拥有9年长途和区域货运经验的 CDL A 类司机。无事故里程超过900,000英里，准时交付率达99%，有冷藏、平板和厢式货运经验。驾驶记录良好，持有危险品和罐车增驾资格。",
    "experience": [
      {
        "role": "长途卡车司机",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "每周在得克萨斯州、俄克拉荷马州和新墨西哥州的区域路线上行驶2,800+英里\n保持99%的准时交付率，每年装载量达1,100+次\n运输冷藏和厢式货物；每天完成出车前和收车后的检查\n累计无事故里程超过900,000英里"
      },
      {
        "role": "配送卡车司机",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "2016年三月",
        "end": "2019年三月",
        "current": false,
        "points": "每天为达拉斯-沃思堡地区的15-20个工地配送建筑材料\n操作叉车，并按 DOT 标准固定平板货物\n保持交付文件和日志准确，零 DOT 违规"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "证书",
        "field": "商业驾驶（CDL Class A）",
        "start": "2015",
        "end": "2016",
        "notes": "持有 CDL A 类驾照及危险品和罐车增驾资格。驾驶记录良好。"
      }
    ],
    "skills": "长途和区域驾驶\n冷藏和平板货物\nDOT 法规和行车日志\n出车前检查\n路线规划（GPS、ELD）\n叉车操作",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "零售销售员",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "拥有4年电子产品和服装店经验的零售销售员。始终位列团队前3名销售，保修和配件的连带销售率达32%。友善、收银迅速，值得信赖地负责开店和闭店。",
    "experience": [
      {
        "role": "高级销售助理",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "每天向60+位顾客销售电子产品和配件；门店销售排名前3，连续8个季度\n保修和配件的连带销售率达到32%，为团队最高\n培训6名新员工学习收银、库房和客户服务标准\n值得信赖的钥匙保管员：负责开店闭店和现金清点"
      },
      {
        "role": "销售助理",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "在繁忙的卖场帮助顾客挑选服装和尺码\n每班保持陈列整洁并补货\n礼貌地处理退货和换货，将投诉降到最低"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "副学士学位",
        "field": "商业",
        "start": "2019",
        "end": "2021",
        "notes": "在零售业工作的同时兼职学习。"
      }
    ],
    "skills": "客户服务与追加销售\n现金处理与 POS 系统\n产品知识（电子产品）\n库存管理\n门店开店与闭店\n团队培训",
    "languages": "英语（流利）\n西班牙语（流利）",
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
    "summary": "拥有5年电话、电子邮件和在线聊天支持经验的客服代表。每天解决45+个案件，满意度达96%，首次联系解决率达88%。面对愤怒的客户保持冷静，并能迅速找到解决办法。",
    "experience": [
      {
        "role": "客服代表",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "2021年五月",
        "end": "",
        "current": true,
        "points": "每天处理45+个关于账单、订单和技术故障的电话、电子邮件和聊天案件\n客户满意度保持在96%，首次联系解决率达88%\n化解棘手来电，把投诉转化为回头客\n培训5名新支持专员学习话术、系统和语气"
      },
      {
        "role": "支持专员",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "回复客户关于订单、退货和退款的电子邮件和在线咨询\n将平均首次响应时间保持在2小时以内\n写了20篇帮助中心文章，将重复问题减少了四分之一"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "副学士学位",
        "field": "工商管理",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "电话、电子邮件和在线聊天支持\n投诉处理与降级沟通\nCRM 系统（Zendesk、Salesforce）\n账单和订单咨询\n打字速度每分钟55字\n团队培训",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "运营经理",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "拥有12年经验的运营经理，管理过仓储和配送领域最多80人的团队。将订单处理成本降低了22%，把准时发货率从91%提升到98%，并准时在预算内开设了两个新地点。",
    "experience": [
      {
        "role": "运营经理",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "运营一个120,000平方英尺的配送中心，有80名员工，分3班工作\n通过重新设计拣货路径和排班模式，将订单处理成本降低了22%\n将准时发货率从91%提升到98%，用时18个月\n准时开设了2个新地点，预算结余8%"
      },
      {
        "role": "仓库主管",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "管理25名仓库员工和每天4,000+个订单的发送\n引入条形码扫描，将拣货错误减少了35%\n进行安全培训，使工地保持3年无事故"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "运营管理",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "团队领导力（最多80名员工）\n仓储与配送\n流程改进\n预算编制与成本控制\n安全管理\nERP 和 WMS 系统",
    "languages": "英语（流利）",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "持证电工",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "拥有8年住宅和商业工作经验的持证熟练电工。擅长布线、配电盘升级、照明和故障排查，在400+个项目中保持良好的安全记录。熟悉 NEC 规范，有指导学徒的经验。",
    "experience": [
      {
        "role": "熟练电工",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "2019年三月",
        "end": "",
        "current": true,
        "points": "完成400+个住宅和商业项目：布线、配电盘升级、照明和电动车充电桩\n快速诊断和修复故障，首次上门修复率达92%\n指导2名学徒，并按规范对他们的工作进行验收签字\n保持良好的安全记录，零工伤损失时间"
      },
      {
        "role": "电工学徒",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "协助持证电工进行新建筑布线和重新布线\n学会了导管弯曲、电缆牵引和配电盘安装\n完成8,000小时的学徒培训并一次性通过熟练工考试"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "证书",
        "field": "电气技术",
        "start": "2015",
        "end": "2016",
        "notes": "熟练电工执照（科罗拉多州）。持有 OSHA 30 证书。"
      }
    ],
    "skills": "住宅和商业布线\n配电盘升级和电动车充电桩\n故障排查和测试\nNEC 规范合规\n导管弯曲和电缆牵引\n学徒指导",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "金融分析师",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "拥有6年预算编制、预测和投资分析经验的金融分析师。构建的预测模型将预算差异减少了30%，并为 $50M 的投资决策提供了支持。精通 Excel、SQL 和财务建模。",
    "experience": [
      {
        "role": "金融分析师",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "为 $120M 的投资组合编制月度预测和年度预算\n通过基于驱动因素的预测模型将预算差异减少了30%\n通过估值和情景分析，为价值 $50M 的投资决策提供支持\n每月向首席财务官和部门负责人汇报调查结果"
      },
      {
        "role": "初级金融分析师",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "2021年三月",
        "current": false,
        "points": "为12个分支机构准备每周绩效报告\n在 Excel 中实现报表自动化，每周节省10小时\n协助信贷团队进行贷款组合分析"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "金融",
        "start": "2015",
        "end": "2019",
        "notes": "CFA 二级候选人。修读过估值和公司金融课程。"
      }
    ],
    "skills": "财务建模与预测\n预算编制与差异分析\n估值（DCF、可比公司）\nExcel（高级）和 SQL\nBloomberg Terminal\n数据可视化（Power BI）",
    "languages": "英语（流利）\n印地语（流利）",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "土木工程师",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "拥有7年公路和水利基础设施设计经验的土木工程师（PE）。主导设计了一条12英里高速公路拓宽工程和一套服务8,000户家庭的雨水系统。熟练使用 AutoCAD Civil 3D，擅长成本估算和许可证协调。",
    "experience": [
      {
        "role": "土木工程师",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "负责一条12英里高速公路拓宽工程的设计，从勘测到施工文件\n设计了一套服务8,000户家庭的雨水系统，一次性获得市政府批准\n与4个机构协调许可证，并管理 $2.5M 的设计预算\n作为持证专业工程师审查图纸并盖章"
      },
      {
        "role": "初级土木工程师",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "为20+个住宅开发项目准备平整和排水方案\n为道路项目进行成本估算和工程量计算\n参加现场检查并撰写进度报告"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "土木工程",
        "start": "2014",
        "end": "2018",
        "notes": "专业工程师执照（华盛顿州）。2018年通过 EIT。"
      }
    ],
    "skills": "道路和排水设计\nAutoCAD Civil 3D\n雨水建模\n成本估算\n许可证协调\n项目进度安排（MS Project）",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "机械工程师",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "拥有6年暖通空调系统和生产设备设计经验的机械工程师。通过重新设计的风管和控制系统将能源消耗降低了18%，涉及3家工厂，并主导了一次将产出提高25%的机器重新设计。熟练使用 SolidWorks、FEA 和热分析。",
    "experience": [
      {
        "role": "机械工程师",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "为3家共有400+名员工的工厂设计暖通空调和生产设备\n通过重新设计风管和控制流程，将能源消耗降低了18%\n主导了一次机器重新设计，在不增加占地面积的情况下将产出提高了25%\n在制作原型之前对新零件进行 FEA 和热分析"
      },
      {
        "role": "初级机械工程师",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "在 SolidWorks 中为汽车客户建模零件和组件\n准备图纸、材料清单和测试报告\n支持原型构建，并解决车间里的装配问题"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "机械工程",
        "start": "2015",
        "end": "2019",
        "notes": "修读过热力学、流体力学和机械设计课程。"
      }
    ],
    "skills": "暖通空调设计\nSolidWorks 和 AutoCAD\nFEA 和热分析\n机械设计\n能源效率\nGD&T 和公差",
    "languages": "英语（流利）\n韩语（会话水平）",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "电气工程师",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "拥有6年嵌入式系统和电力电子经验的电气工程师。设计的控制板现已用于50,000+台设备，并通过元件重新设计将电路板成本降低了22%。熟练使用 Altium、C 语言、固件测试和 EMC 合规。",
    "experience": [
      {
        "role": "电气工程师",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "设计每年用于50,000+台设备的嵌入式控制板\n通过重新设计电源级和寻找替代元件，将电路板成本降低了22%\n负责 EMC 合规测试，4条产品线一次性通过\n用 C 语言为微控制器编写和审查固件"
      },
      {
        "role": "初级电气工程师",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "在 Altium 中为消费类和工业类客户进行 PCB 布局\n构建并测试原型，调试硬件故障\n编写了测试规程，将生产测试时间缩短了30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "电气工程",
        "start": "2015",
        "end": "2019",
        "notes": "修读过嵌入式系统、电力电子和信号处理课程。"
      }
    ],
    "skills": "嵌入式系统与 PCB 设计\nAltium Designer\nC 语言与固件\n电力电子\nEMC 合规测试\n示波器和实验室仪器",
    "languages": "英语（流利）\n古吉拉特语（会话水平）",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "数据分析师",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "拥有4年经验的数据分析师，善于把销售和运营数据转化为决策。构建的仪表板供60+位经理使用，将月度报告时间从3天缩短到4小时，并发现了一处每年价值 $180,000 的定价错误。精通 SQL、Excel 和 Power BI。",
    "experience": [
      {
        "role": "数据分析师",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "构建供60+位门店和区域经理使用的 Power BI 仪表板\n通过自动化的 SQL 管道，将月度报告时间从3天缩短到4小时\n通过审计促销数据发现了一处每年价值 $180,000 的定价错误\n每月向商业团队汇报调查结果"
      },
      {
        "role": "初级数据分析师",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Aug 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "清洗并整合了来自4个系统的交付数据，形成一张报告表\n构建了 Excel 跟踪表，取代了2个团队的人工统计\n每天为运营经理解答临时的数据问题"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "统计学",
        "start": "2016",
        "end": "2020",
        "notes": "修读过回归分析、数据库和数据可视化课程。"
      }
    ],
    "skills": "SQL 和数据清洗\nPower BI 和 Tableau\nExcel（高级）\nPython（pandas）\n仪表板设计\nA/B 测试基础",
    "languages": "英语（流利）\n越南语（会话水平）",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "数据科学家",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "拥有5年为电子商务构建机器学习模型经验的数据科学家。我上线的一个推荐模型使每次访问收入提高了12%，一个流失模型现在能标记出80%的风险客户。精通 Python、SQL 和模型部署。",
    "experience": [
      {
        "role": "数据科学家",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "上线了一个推荐模型，使每次访问的收入提高了12%\n构建了一个客户流失模型，能提前一个月标记出80%的风险客户\n将模型部署到生产环境，并配有监控和再训练管道\n每月向产品和营销团队展示模型结果"
      },
      {
        "role": "初级数据科学家",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "为3个零售客户构建预测模型，准确率达90%+\n清洗并准备了超过10M行的数据集用于建模\n编写文档，以便客户能自己重新运行模型"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "数据科学",
        "start": "2018",
        "end": "2020",
        "notes": "推荐系统方向的论文。数学理学学士（2018）。"
      }
    ],
    "skills": "Python (scikit-learn, pandas)\n机器学习与统计\nSQL 和 Spark\n模型部署（Docker、AWS）\nA/B 测试\n数据可视化",
    "languages": "英语（流利）\n阿拉伯语（流利）",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Web 开发人员",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "拥有4年使用 HTML、CSS 和 JavaScript 构建快速、无障碍网站经验的 Web 开发人员。重建了一个商店的结账流程，使转化率提高了18%，并维护12个客户网站，正常运行时间达99.9%。擅长响应式设计、性能和 SEO 基础。",
    "experience": [
      {
        "role": "Web 开发人员",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "使用 HTML、CSS、JavaScript 和 WordPress 为12个客户构建响应式网站\n重建了一个商店的结账流程，使转化率提高了18%\n通过图片和代码优化，将平均页面加载时间从4.2秒缩短到1.8秒\n通过监控和备份，使所有客户网站的正常运行时间保持在99.9%"
      },
      {
        "role": "初级 Web 开发人员",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "为20+个小型企业网站构建登录页面并修复错误\n在实际项目中学会了 Git、响应式设计和基础 SEO\n回复客户电子邮件并在当天完成内容更新"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "计算机科学",
        "start": "2017",
        "end": "2021",
        "notes": "修读过 Web 开发、数据库和人机交互课程。"
      }
    ],
    "skills": "HTML、CSS 和 JavaScript\nReact 和 WordPress\n响应式设计\n页面速度优化\nGit 和 GitHub\n基础 SEO",
    "languages": "英语（流利）\n西班牙语（流利）",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "平面设计师",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "拥有5年品牌、包装和社交媒体设计经验的平面设计师。为25+家小企业创建了品牌形象，并完成了一次包装重新设计，使货架销量提高了14%。熟练使用 Adobe Illustrator、Photoshop 和 Figma。",
    "experience": [
      {
        "role": "平面设计师",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "为25+个客户设计品牌形象、包装和社交营销活动\n为某食品品牌重新设计包装，使货架销量提高了14%\n每周在 Instagram、TikTok 和 Facebook 上制作30+份社交素材\n向客户展示概念，并根据反馈快速修改"
      },
      {
        "role": "初级平面设计师",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "为本地餐馆和商店设计传单、菜单和社交媒体帖子\n准备可直接印刷的文件，并与印刷厂核对样张\n构建了模板库，将设计时间缩短了三分之一"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "平面设计",
        "start": "2016",
        "end": "2020",
        "notes": "品牌和包装设计作品集。"
      }
    ],
    "skills": "Adobe Illustrator 和 Photoshop\nFigma\n品牌形象设计\n包装设计\n社交媒体设计\n印刷制作",
    "languages": "英语（流利）\n韩语（会话水平）",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX 设计师",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "拥有5年研究用户和设计移动及 Web 产品经验的 UX 设计师。重新设计了一个入职流程，将流失率降低了35%，并进行了40+次可用性测试。熟练使用 Figma，擅长用户研究、线框图和原型设计。",
    "experience": [
      {
        "role": "UX 设计师",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "重新设计了移动端入职流程，将流失率降低了35%，用时3个月\n每年进行40+次可用性测试和用户访谈\n在 Figma 中为2个产品团队构建线框图和原型\n每天与工程师和产品经理协作交付工作"
      },
      {
        "role": "初级 UX 设计师",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Aug 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "为5个客户应用设计界面和流程\n进行了首次可用性测试，并为客户撰写了调查结果\n构建了组件库，加快了设计交付速度"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "心理学",
        "start": "2016",
        "end": "2020",
        "notes": "UX 设计证书（General Assembly，2020）。修读过人机交互课程。"
      }
    ],
    "skills": "用户研究与可用性测试\n线框图和原型设计（Figma）\n信息架构\n设计系统\nJourney mapping\n利益相关者研讨会",
    "languages": "英语（流利）",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "市场营销经理",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "拥有8年 B2B 和消费者营销活动经验的市场营销经理。在一年内将合格潜在客户增加了60%，推出了一条第一年销售额达到 $3M 的产品线，并管理 $500,000 的年度预算，团队共5人。",
    "experience": [
      {
        "role": "市场营销经理",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "带领一个5人团队，管理 $500,000 的年度营销预算\n通过内容和付费营销活动，在一年内将合格潜在客户增加了60%\n推出了一条第一年销售额达到 $3M 的产品线\n通过重建营销活动的定向投放，将每条潜在客户的成本降低了28%"
      },
      {
        "role": "营销专员",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "向80,000名订阅者发送电子邮件营销活动，打开率达24%\n管理的社交账号粉丝从5,000增长到40,000\n每年组织6个展会展位，每个展位产生300+条潜在客户线索"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "修读过消费者行为、数据分析和品牌管理课程。"
      }
    ],
    "skills": "营销活动策略与规划\n内容与电子邮件营销\n付费广告（Google、Meta）\nMarketing analytics (GA4)\n团队领导力\n预算管理",
    "languages": "英语（流利）",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "项目经理",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "拥有7年按时按预算交付软件和建筑项目经验的项目经理（PMP）。管理了15个价值高达 $4M 的项目，准时交付率达94%。擅长敏捷方法、风险管理和利益相关者沟通。",
    "experience": [
      {
        "role": "项目经理",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "管理15个价值高达 $4M 的项目，准时交付率达94%\n为3个团队运行敏捷冲刺，并每周向高管汇报进展\n通过更早进行风险审查，将项目超支减少了30%\n协调跨4个时区的供应商、客户和内部团队"
      },
      {
        "role": "项目协调员",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "跟踪了8个建筑项目的进度、预算和许可证\n为客户准备状态报告和会议记录\n解决了进度冲突，为一个学校建筑项目节省了2周时间"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "工商管理",
        "start": "2014",
        "end": "2018",
        "notes": "PMP 认证（2021）。认证 ScrumMaster。"
      }
    ],
    "skills": "项目规划与进度安排\n敏捷开发与 Scrum\n风险管理\n预算控制\n利益相关者沟通\nMS Project 和 Jira",
    "languages": "英语（流利）",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "人力资源经理",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "拥有9年招聘、员工关系和福利经验的人力资源经理。将招聘周期从45天缩短到28天，把留任率提高了15%，并为250名员工管理3个地点的人力资源工作。具备 CIPD 级别的劳动法和政策知识。",
    "experience": [
      {
        "role": "人力资源经理",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "为250名员工管理人力资源工作，覆盖3个地点，团队共3人\n通过重建面试流程，将招聘周期从45天缩短到28天\n通过新的入职和评估计划将留任率提高了15%\n处理员工关系、申诉和政策更新"
      },
      {
        "role": "人力资源专员",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "每年为酒店和餐馆招聘120+名员工\n为400名员工进行薪资核查和福利登记\n解决员工纠纷，并将流失率保持在行业平均水平以下"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "人力资源",
        "start": "2012",
        "end": "2016",
        "notes": "持有 SHRM-CP 认证。修读过劳动法和组织行为学课程。"
      }
    ],
    "skills": "招聘与入职\n员工关系\n福利与薪资\n劳动法\n绩效管理\nHRIS (Workday, BambooHR)",
    "languages": "英语（流利）",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "律师助理（Associate Attorney）",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "拥有6年商业诉讼和合同法经验的律师助理。经办40+个案件，在8个案件中赢得简易判决，起草了价值 $25M 的合同。拥有伊利诺伊州律师执业资格；擅长法律研究、文件起草和客户咨询。",
    "experience": [
      {
        "role": "律师助理（Associate Attorney）",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "管理40+个商业诉讼案件，从立案到和解\n在8个案件中赢得简易判决，并以有利条件和解了另外20个案件\n起草并谈判价值高达 $25M 的合同\n当面和以书面形式为客户提供风险与策略方面的建议"
      },
      {
        "role": "法律书记员",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Aug 2019",
        "end": "Aug 2020",
        "current": false,
        "points": "研究判例法，并为2名法官起草备忘录\n审查动议，并为100+场听证会准备法官席摘要\n旁听了各民事部门的庭审和和解会议"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "法律",
        "start": "2016",
        "end": "2019",
        "notes": "2019年获得伊利诺伊州律师执业资格。曾任法律评论编辑，负责文章栏目。"
      }
    ],
    "skills": "商业诉讼\n合同起草与谈判\n法律研究（Westlaw、LexisNexis）\n客户咨询\n证词与证据开示\n法庭文件与程序",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "临床药剂师",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "拥有7年医院和社区药房经验的临床药剂师（PharmD）。每天审核100+份用药医嘱，通过新的核查规程将药物不良事件减少了25%，并指导患者安全用药。持有宾夕法尼亚州执业资格。",
    "experience": [
      {
        "role": "临床药剂师",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "每天审核100+份用药医嘱的安全性、剂量和相互作用\n通过新的双重核查规程将药物不良事件减少了25%\n就复杂患者的药物选择向医生和护士提供建议\n每周进行两次医院的抗生素管理查房"
      },
      {
        "role": "药剂师职员",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "每天配发200+份处方，配药错误为零\n指导患者了解新药、副作用和储存方法\n接种流感疫苗并进行血压检查"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "药学",
        "start": "2014",
        "end": "2018",
        "notes": "持证药剂师（宾夕法尼亚州）。委员会认证的药物治疗专家（BCPS）。"
      }
    ],
    "skills": "用药审查与安全\n临床药理学\n患者咨询\n药房系统（Epic、PioneerRx）\n抗生素管理\n疫苗接种服务",
    "languages": "英语（流利）",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "全科牙医",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "拥有8年修复、美容和预防牙科经验的全科牙医（DDS）。每天治疗25+名患者，诊所共有2,000名患者，患者满意度达98%。擅长牙冠、种植、根管治疗和隐形矫正。",
    "experience": [
      {
        "role": "全科牙医",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "每天治疗25+名患者：补牙、牙冠、根管治疗和拔牙\n患者满意度保持在98%，评价数量达1,200+条\n每月植入15+颗种植体，并管理隐形矫正病例\n管理2名洁牙师和4名牙科助理"
      },
      {
        "role": "牙科助理医师",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "为一个有1,500名患者的诊所提供全科牙科服务\n引入当日牙冠服务，将复诊次数减少了40%\n开展了关于儿童口腔健康的学校外展走访"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "牙科学",
        "start": "2013",
        "end": "2017",
        "notes": "持证牙医（亚利桑那州）。持有 Invisalign 认证。持有 CPR/BLS 证书。"
      }
    ],
    "skills": "修复牙科（牙冠、补牙）\n根管治疗\n种植牙\n隐形矫正器\n患者护理与沟通\n数字 X 光和 CEREC",
    "languages": "英语（流利）",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "物理治疗师",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "拥有6年骨科和运动康复经验的物理治疗师（DPT）。每天治疗12-15名患者，其中90%在计划的疗程内达到目标。擅长手法治疗、运动处方和重返赛场测试。",
    "experience": [
      {
        "role": "物理治疗师",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "每天为12-15名患者治疗运动损伤，进行术后康复和背痛治疗\n90% 的患者在计划的疗程次数内达到了目标\n设计被3支本地球队采用的重返赛场测试\n指导2名新毕业生，并监督学生的实习安排"
      },
      {
        "role": "物理治疗师职员",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Aug 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "为术后和中风住院患者提供康复治疗\n每周为20+名老年患者开设团体运动课程\n在 Epic 中记录进展并交接给病房团队"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "物理治疗",
        "start": "2016",
        "end": "2019",
        "notes": "持证物理治疗师（俄勒冈州）。骨科临床专家（OCS）。"
      }
    ],
    "skills": "骨科与运动康复\n手法治疗\n运动处方\n重返赛场测试\n患者教育\n文档记录（Epic）",
    "languages": "英语（流利）",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "主厨",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "拥有10年克里奥尔菜和现代美式厨房经验的主厨。带领一个12人的厨师团队，在一家200个座位的餐厅工作，通过更严格的订货将食材成本降低了15%，并在2025年赢得了城市美食指南的 'Best New Menu' 奖。",
    "experience": [
      {
        "role": "主厨",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "带领一个12人的厨师团队，在一家200个座位、每晚服务300+位客人的餐厅工作\n通过更严格的订货和时令菜单，将食材成本降低了15%\n在2025年赢得了城市美食指南的 'Best New Menu' 奖\n设计菜单、培训厨师，并在周五和周六的营业中负责出菜台"
      },
      {
        "role": "副主厨",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "在主厨不在时管理厨房，每晚服务150位客人\n管理库存、订货和供应商关系\n培训了8名流水线厨师，并将员工流失率降低了三分之一"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "烹饪艺术",
        "start": "2014",
        "end": "2016",
        "notes": "持有 ServSafe 食品保护经理认证。"
      }
    ],
    "skills": "菜单设计与成本核算\n克里奥尔菜与现代美式菜\n厨房领导力（12人团队）\n食品安全（ServSafe）\n供应商管理\n宴会与活动餐饮",
    "languages": "英语（流利）\n西班牙语（流利）",
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
    "summary": "拥有8年巡逻、社区警务和调查经验的警察。每周响应30+次呼叫，因降级处理和社区外展工作获得嘉奖。受过危机干预、急救和报告撰写培训。",
    "experience": [
      {
        "role": "警察",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "巡逻一个有40,000名居民的辖区，每周响应30+次呼叫\n因降级处理和社区外展工作获得2次嘉奖\n调查盗窃和袭击案件，撰写的报告被用于50+起起诉\n通过实地培训指导3名新警员"
      },
      {
        "role": "巡逻警员",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Aug 2017",
        "end": "2019年五月",
        "current": false,
        "points": "在县道巡逻并响应紧急呼叫\n送达法庭文件并协助押送囚犯\n完成了危机干预和急救培训"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "证书",
        "field": "执法",
        "start": "2017",
        "end": "2017",
        "notes": "俄亥俄州治安官培训学院毕业生。受过危机干预小组培训。"
      }
    ],
    "skills": "巡逻与紧急响应\n社区警务\n危机干预与降级处理\n报告撰写\n调查\n急救和心肺复苏",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "消防员/急救员",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "拥有7年灭火、救援和紧急医疗响应经验的消防员和急救员。响应过900+次呼叫，包括建筑火灾、车辆救援和医疗紧急情况。受过危险品处置培训，安全记录良好。",
    "experience": [
      {
        "role": "消防员/急救员",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "2020年三月",
        "end": "",
        "current": true,
        "points": "响应900+次火灾、救援和医疗呼叫，辖区有3个消防站\n作为认证 EMT，在60%的呼叫中提供紧急医疗护理\n受过危险品培训；在化学品事件中负责去污工作\n培训新消防员学习水带操作、梯子和搜救技术"
      },
      {
        "role": "志愿消防员",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "作为志愿者响应野外和建筑火灾\n完成了消防员 I & II 和 EMT-Basic 培训\n帮助在学校开展社区消防安全讲座"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "证书",
        "field": "消防科学",
        "start": "2017",
        "end": "2018",
        "notes": "消防员 I & II。持有 EMT-Basic 证书。受过危险品处置培训。"
      }
    ],
    "skills": "灭火与救援\n紧急医疗护理（EMT）\n危险品处置\n梯子、水带和通风\n社区消防安全\n压力下的团队协作",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "持证水管工",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "拥有11年住宅和商业管道经验的持证高级水管工。每年完成600+个项目，从预埋管道到锅炉安装，首次上门修复率达98%。擅长管道安装、下水道疏通和规范合规。",
    "experience": [
      {
        "role": "高级水管工",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "每年完成600+个住宅和商业项目\n安装锅炉、热水器和完整的浴室预埋管道\n维修服务电话的首次上门修复率保持在98%\n指导3名学徒，并对他们的工作进行验收签字"
      },
      {
        "role": "熟练水管工",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dec 2018",
        "current": false,
        "points": "每年为40+栋房屋进行新建筑管道安装\n为住宅和餐馆疏通下水道并修复漏水\n学会了燃气管道安装和防回流"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "证书",
        "field": "管道技术",
        "start": "2013",
        "end": "2014",
        "notes": "高级水管工执照（田纳西州）。持有防回流认证。"
      }
    ],
    "skills": "住宅和商业管道\n管道安装和焊接\n下水道疏通和摄像头检查\n锅炉和热水器安装\n燃气管道安装\n管道规范合规",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "熟练木匠",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "拥有9年框架、精细加工和定制橱柜经验的熟练木匠。为30+栋房屋搭建框架，为60+户家庭安装厨房，以测量精确和收尾干净而闻名。擅长看图纸并按规范施工。",
    "experience": [
      {
        "role": "熟练木匠",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "为30+栋房屋搭建框架，并为60+户家庭安装厨房\n定制橱柜和装饰线条，公差控制在1/16英寸以内\n阅读并遵循建筑图纸，在错误造成金钱损失之前将其标出\n培训2名学徒学习框架和精加工技术"
      },
      {
        "role": "木匠学徒",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "在改造工程中协助完成框架、干墙和地板施工\n学会了安全使用锯子、铣刀和钉枪\n完成8,000小时的学徒培训并通过熟练工考试"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "证书",
        "field": "木工",
        "start": "2015",
        "end": "2016",
        "notes": "熟练木匠。持有 OSHA 10 证书。"
      }
    ],
    "skills": "框架和结构工程\n精细木工与装饰线条\n定制橱柜\n建筑图纸识读\n电动工具与安全\n干墙和地板",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "中学教师（数学）",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "拥有8年经验的中学教师，为9-12年级教授数学。将代数通过率从64%提高到83%，并带领数学队打进2次州决赛。擅长分层教学、考试准备和家长沟通。",
    "experience": [
      {
        "role": "数学教师（9-12年级）",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Aug 2019",
        "end": "",
        "current": true,
        "points": "为120名学生教授代数、几何和预备微积分，共5个班级\n将代数通过率从64%提高到83%，用时3年\n带领数学队打进2次州决赛\n每周为30名学生开设课后辅导"
      },
      {
        "role": "数学教师（9-10年级）",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Aug 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "每年为100名学生教授代数和几何\n引入每周小测验，将作业缺口减少了一半\n组织了学校第一届数学博览会，有200名学生参加"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "数学教育",
        "start": "2013",
        "end": "2017",
        "notes": "州教师资格证（新罕布什尔州，7-12年级，数学）。"
      }
    ],
    "skills": "数学教学（从代数到预备微积分）\n考试准备\n分层教学\n课堂管理\n家长沟通\nGoogle Classroom 和 Desmos",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "幼儿教师",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "拥有6年照顾3-5岁儿童经验的幼儿教师。擅长游戏化学习、行为引导和家长沟通。设计了一套自然拼读课程，提高了全班的入学准备度分数。",
    "experience": [
      {
        "role": "幼儿教师",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "教授并照顾一个18名3-5岁儿童的班级\n设计了一套自然拼读课程，提高了全班的入学准备度分数\n规划每周主题、手工和户外活动\n每天与家长分享最新情况，并定期发送学期进度报告"
      },
      {
        "role": "幼儿教师助理",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "协助主班教师管理一个20名儿童的班级\n每天进行故事时间、歌曲和艺术活动\n按照州标准保持安全和卫生记录"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "副学士学位",
        "field": "幼儿教育",
        "start": "2016",
        "end": "2018",
        "notes": "持有儿童发展助理（CDA）资格证书。持有急救和心肺复苏证书。"
      }
    ],
    "skills": "游戏化学习\n行为引导\n自然拼读和早期读写\n家长沟通\n课堂安全\n艺术和手工规划",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "儿童与家庭社会工作者",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "拥有7年支持儿童和家庭经验的持证社会工作者。管理25个家庭的个案量，协调学校和医疗服务提供者之间的服务，并完成法官所依赖的法庭报告。擅长评估、危机支持和保护工作。",
    "experience": [
      {
        "role": "儿童与家庭社会工作者",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "管理25个家庭的个案量，每周走访家庭和学校\n完成法庭报告并在家事法庭作证\n为弱势家庭协调住房、健康和学校支持\n通过新的分诊系统将评估等待时间缩短了20%"
      },
      {
        "role": "个案工作者",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "为40+个住在临时住房的家庭提供福利和转介支持\n每周举办育儿和预算规划研讨会\n保持个案记录准确，以备审计和资金报告"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "社会工作",
        "start": "2016",
        "end": "2018",
        "notes": "持证社会工作者（俄亥俄州）。修读过儿童福利和家庭系统课程。"
      }
    ],
    "skills": "个案管理（25个家庭）\n儿童保护\n家事法庭报告\n危机支持\n多机构协调\n福利与住房转介",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "律师助理",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "拥有6年诉讼支持和公司备案经验的律师助理。管理30+个案件的证据开示，起草诉状和合同，并以100%准时的记录守住备案截止期限。熟练使用 Westlaw、电子证据开示和案件管理软件。",
    "experience": [
      {
        "role": "律师助理",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "管理30+个诉讼案件的证据开示，审查10,000+份文件\n起草诉状、动议和合同，供律师审核\n法庭文件和截止期限保持100%准时记录\n协调证人并准备庭审卷宗"
      },
      {
        "role": "法律助理",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "每周为20+个客户进行接案访谈\n为住房和家庭案件准备表格和备案文件\n为讲西班牙语的客户翻译法律文件"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "副学士学位",
        "field": "律师助理研究",
        "start": "2017",
        "end": "2019",
        "notes": "NALA 认证律师助理（CP）。ABA 批准的课程。"
      }
    ],
    "skills": "诉讼支持与证据开示\n法律文件起草\nE-discovery (Relativity)\n个案管理（Clio）\n法庭文件与截止期限\n法律研究（Westlaw）",
    "languages": "英语（流利）\n西班牙语（流利）",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "簿记员",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "拥有5年应付账款、开票和银行对账经验的簿记员。每月处理300+张发票，准确率达99.8%，保持账目清晰以便月末结账。熟练使用 QuickBooks、Excel，并能提供薪资支持。",
    "experience": [
      {
        "role": "簿记员",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "每月处理300+张供应商发票，准确率达99.8%\n每周对6个银行账户进行对账，并在当天标出差异\n为45名员工准备薪资数据，并催收逾期的客户付款\n保持记录整洁以便年终审计，零发现问题"
      },
      {
        "role": "会计助理",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "2021年三月",
        "current": false,
        "points": "每天将销售发票和收据录入 QuickBooks\n通过电话和电子邮件解答供应商关于付款的咨询\n归档文件并保持档案为最新状态"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "证书",
        "field": "簿记",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks Certified User."
      }
    ],
    "skills": "应付与应收账款\n银行对账\n开具发票（每月300+张）\nQuickBooks 和 Excel\n薪资支持\n数据录入（每分钟65字）",
    "languages": "英语（流利）",
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
    "summary": "拥有6年经验的行政助理，善于让办公室顺畅运转。为4位经理管理日程，安排差旅和会议，每天处理100+封电子邮件。以准确、谨慎和在截止期限压力下保持冷静而著称。",
    "experience": [
      {
        "role": "行政助理",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "为4位高级经理管理日程、差旅和会议\n每天处理100+封电子邮件，起草回复并标注优先级\n准备董事会文件并在月度会议上做记录\n管理办公用品和供应商订单，将成本削减了12%"
      },
      {
        "role": "Receptionist",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Aug 2019",
        "end": "Dec 2020",
        "current": false,
        "points": "每天接待60+名患者，并管理预约登记\n接听电话并处理保险方面的咨询\n保持患者记录准确并保密"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "副学士学位",
        "field": "办公室管理",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "日程与差旅管理\n电子邮件与信函\n会议记录\nMicrosoft Office（Word、Excel、Outlook）\n数据录入（每分钟70字）\n办公用品与供应商",
    "languages": "英语（流利）",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "银行柜员",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "拥有4年经验的银行柜员，每天准确细致地为80+位客户服务。3年来现金抽屉分毫不差，零短款。擅长存款、取款、防欺诈检查，并为客户推荐合适的产品。",
    "experience": [
      {
        "role": "银行柜员",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "每天为80+位顾客服务：存款、取款、付款和转账\n3年来现金抽屉分毫不差，零短款\n发现并阻止了12起欺诈企图，为客户挽回了 $90,000+\n向客户推荐储蓄和贷款产品，每季度达成推荐目标"
      },
      {
        "role": "客服专员",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "为会员开设新账户并发行借记卡\n通过电话解答关于余额和对账单的咨询\n帮助会员开通网上银行和手机银行"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "副学士学位",
        "field": "商业",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "现金处理与轧账\n存款、取款与付款\n防欺诈\n客户服务\n银行软件（Fiserv）\n产品推荐",
    "languages": "英语（流利）",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "销售经理",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "拥有10年带领最多15名销售代表团队经验的销售经理。将区域收入从 $4M 增长到 $7.5M，用时3年，把赢单率从22%提升到34%，并通过更好的辅导和入职培训将销售代表流失率减半。",
    "experience": [
      {
        "role": "区域销售经理",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "带领一个由15名销售代表组成的团队，覆盖得克萨斯州和俄克拉荷马州\n将区域收入从 $4M 增长到 $7.5M，用时3年\n通过更好的辅导和管道审查将赢单率从22%提升到34%\n通过新的入职培训计划将销售代表流失率减半"
      },
      {
        "role": "销售代表",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dec 2020",
        "current": false,
        "points": "向80+个客户销售工业设备，连续5年达成指标\n连续3年成为本地区的顶级销售代表\n建立了一个转介网络，带来了25%的新业务"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "修读过销售管理和谈判课程。"
      }
    ],
    "skills": "销售团队领导力（15名销售代表）\n收入增长与预测\n销售管道管理（Salesforce）\n辅导与入职培训\n谈判\n区域规划",
    "languages": "英语（流利）",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "施工经理",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "拥有12年经验的施工经理，交付过价值高达 $12M 的商业和住宅项目。完成20+个项目，准时率达95%，工地零工伤损失时间，预算控制在3%以内。擅长进度安排、分包商管理和安全管理。",
    "experience": [
      {
        "role": "施工经理",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "交付价值高达 $12M 的商业和住宅项目\n完成20+个项目，准时率达95%，预算控制在3%以内\n管理30+个分包商和50名工人，分布在3个在建工地\n4年来所有工地零工伤损失时间"
      },
      {
        "role": "工地主管",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "管理办公和零售建筑工地的日常运营\n协调交付、检查和分包商进度安排\n保持安全记录良好，并通过了每一次 OSHA 检查"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "建筑施工",
        "start": "2009",
        "end": "2013",
        "notes": "持有 OSHA 30 证书。CCM（认证施工经理）候选人。"
      }
    ],
    "skills": "项目进度安排（MS Project、Procore）\n预算控制\n分包商管理\n工地安全（OSHA 30）\n图纸识读\n客户报告",
    "languages": "英语（流利）",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "认证医疗助理",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "拥有5年全科和急诊护理经验的认证医疗助理。每天为25+名患者安排诊室、测量生命体征、抽血并管理前台，患者满意度达97%。熟练使用电子健康记录、静脉采血和保险核查。",
    "experience": [
      {
        "role": "认证医疗助理",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "每天为25+名患者安排诊室：生命体征、病史和检查准备\n抽血并进行基础实验室检查，一次穿刺成功率达99%\n管理前台、排班和保险核查\n患者满意度保持在97%，调查数量达800+份"
      },
      {
        "role": "医疗助理",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Aug 2019",
        "end": "2021年三月",
        "current": false,
        "points": "对 walk-in 患者进行分诊，并协助医生进行小手术\n接种疫苗并负责标本采集\n在患者之间保持诊室物品齐备、干净并做好准备"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "证书",
        "field": "医疗助理",
        "start": "2018",
        "end": "2019",
        "notes": "认证医疗助理（CMA，AAMA）。持有 BLS 证书。受过静脉采血培训。"
      }
    ],
    "skills": "患者接诊和生命体征测量\n静脉采血\nEHR (eClinicalWorks)\n疫苗接种\n保险核查\n前台管理",
    "languages": "英语（流利）\n西班牙语（流利）",
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
    "summary": "积极进取的高中高年级学生，成绩优异，有兼职工作经验。学东西快、可靠、善于与人相处。正在寻找第一份全职工作，或一份可以与大学学习兼顾的兼职工作。",
    "experience": [
      {
        "role": "兼职销售助理",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "在周末和放学后的每班服务50+位顾客\n处理现金、补货并保持陈列整洁\n受信任在周六上午负责开店"
      },
      {
        "role": "志愿辅导教师",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "每周两次为低年级学生辅导数学\n帮助组织了有40名儿童参加的暑期阅读计划"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "高中文凭",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6。连续3年荣誉榜。辩论队队长。"
      }
    ],
    "skills": "客户服务\n现金处理\n团队协作\n时间管理\nMicrosoft Office\n公开演讲（辩论队）",
    "languages": "英语（流利）",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "应届毕业生 — 工商管理",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "应届工商管理毕业生，有营销和运营方面的实习经验。组织了一场有200名参与者的校园商业竞赛，并完成了一次6个月的实习，在实习中将报告时间缩短了一半。渴望开始全职职业生涯并快速学习。",
    "experience": [
      {
        "role": "营销实习生",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "运营公司的社交账号，粉丝从2,000增长到6,500\n构建了一个报告仪表板，将每周报告时间缩短了一半\n写了20篇博客文章，带来了15,000+的阅读量"
      },
      {
        "role": "活动志愿者负责人",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "2025年五月",
        "current": false,
        "points": "组织了一场有200名参与者和12名评委的商业竞赛\n管理了 $5,000 的预算和一个8名志愿者的团队"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "工商管理",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5。连续2年入选院长名单。毕业年项目是关于小企业营销的。"
      }
    ],
    "skills": "社交媒体营销\nExcel 和 Google Sheets\n演示技能\n活动组织\n团队协作\n基础数据分析",
    "languages": "英语（流利）",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "初级营销助理",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "拥有2年内容、电子邮件和社交媒体经验的初级营销助理。将一个客户简报的订阅者从1,000增长到4,000，并运营平均打开率达22%的营销活动。已准备好承担更多责任和管理更大的客户组合。",
    "experience": [
      {
        "role": "初级营销助理",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "将一个客户简报的订阅者从1,000增长到4,000，用时14个月\n每周撰写和安排12篇社交帖子，服务4个客户\n运营平均打开率达22%的电子邮件营销活动\n每月向客户报告营销活动结果"
      },
      {
        "role": "营销实习生",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "为公司网站上的200+件商品撰写产品描述\n帮助开展了一次春季促销活动，使在线订单提高了15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "传播学",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4。修读过数字营销和媒体写作课程。"
      }
    ],
    "skills": "内容写作\n电子邮件营销（Mailchimp）\n社交媒体管理\nGoogle Analytics\nCanva\n客户报告",
    "languages": "英语（流利）",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "运营主管",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "拥有8年管理20-30人仓库团队经验的运营主管。将拣货错误减少了30%，把准时调度率从90%提升到97%，并培训了15名新员工。已准备好担任运营经理，管理更大的场地和预算。",
    "experience": [
      {
        "role": "运营主管",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "管理25名仓库员工，分2班工作，场地面积为90,000平方英尺\n通过新的核查流程和条形码扫描，将拣货错误减少了30%\n将准时调度率从90%提升到97%，用时2年\n培训了15名新员工，并将其中3名提升为团队组长"
      },
      {
        "role": "团队组长",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "带领一个10人的夜班拣货和包装团队\n引入了一套排班表，在不耽误截止期限的情况下将加班时间减少了20%\n进行安全简报，并保持团队2年无事故"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "供应链管理",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "团队领导力（25名员工）\n仓库运营\n流程改进\n安全管理\n库存控制\nWMS 和 Excel",
    "languages": "英语（流利）\n印地语（会话水平）",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "高级项目经理",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "拥有14年交付价值高达 $8M 软件项目经验的高级项目经理。主导了30+个项目，准时率达92%，从零开始建立了一个 PMO，并指导了10名项目经理。以在压力下冷静交付和向高管诚实汇报而著称。",
    "experience": [
      {
        "role": "高级项目经理",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "交付价值高达 $8M 的软件项目，准时率达92%\n从零开始建立了公司的 PMO：模板、报告和治理体系\n指导10名项目经理，并运营每月的项目经理社区\n就一个40人的计划直接向首席技术官汇报"
      },
      {
        "role": "项目经理",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dec 2018",
        "current": false,
        "points": "为零售和医疗保健客户管理了20+个项目\n引入了敏捷实践，将交付时间缩短了25%\n将2个关键客户的年收入从 $500k 增长到 $2M"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "信息系统",
        "start": "2008",
        "end": "2012",
        "notes": "PMP 认证（2015）。认证 ScrumMaster。MBA 课程（2018-2019，未完成）。"
      }
    ],
    "skills": "计划和项目交付\nPMO 设立与治理\n敏捷与瀑布模式\n预算控制（$8M）\n高管报告\n团队指导",
    "languages": "英语（流利）\n西班牙语（会话水平）",
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
    "summary": "拥有18年为零售和物流公司扩展运营经验的首席运营官。将200人的运营规模扩大到900人，遍布6个地点，把 EBITDA 利润率从8%提升到14%，并主导了2次收购。具备董事会层面的报告和投资者关系经验。",
    "experience": [
      {
        "role": "Chief Operating Officer",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "运营900人的业务，覆盖6个地点，预算为 $180M\n将 EBITDA 利润率从8%提升到14%，用时3年\n主导了2次收购，并在6个月内整合了两个团队\n每月向董事会汇报运营、风险和增长情况"
      },
      {
        "role": "运营副总裁",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dec 2020",
        "current": false,
        "points": "将运营规模从200人扩大到600人，覆盖4个地点\n准时开设了3个配送中心，且未超预算\n组建了至今仍在运营这家企业的领导团队"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "工商管理",
        "start": "2010",
        "end": "2012",
        "notes": "纽约大学经济学理学学士（2006）。董事会治理课程（2020）。"
      }
    ],
    "skills": "大规模运营（900人）\n损益（P&L）责任（$180M）\n并购\n董事会报告\n增长战略\n领导团队建设",
    "languages": "英语（流利）",
    "template": "executive"
  }
};
});
