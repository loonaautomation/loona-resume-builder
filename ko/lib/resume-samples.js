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
      "title": "간호사",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "내외과 및 원격 측정 병동 분야에서 6년 경력의 간호사예요. 환자 평가, IV 치료, 투약 관리, 전자 건강 기록에 능숙해요. 압박이 큰 상황에서 환자와 가족과의 차분하고 명확한 소통으로 알려져 있어요.",
    "experience": [
      {
        "role": "간호사",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "Jun 2021",
        "end": "",
        "current": true,
        "points": "교대당 환자 5-6명을 돌봐요 — 32개 병상의 내외과 병동에서, 평가·투약·상처 치료를 포함해요\n새 졸업 간호사 4명을 교육하고 멘토링해 오리엔테이션 시간을 2주 줄였어요\n인계 시 이중 확인 루틴을 도입해 병동의 투약 오류를 18% 줄였어요\nEpic 전자 건강 기록에 모든 진료를 정확히 기록해요"
      },
      {
        "role": "스태프 간호사",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "May 2021",
        "current": false,
        "points": "하루 워크인 환자 40명 이상의 분류를 운영해 긴급 사례를 당일 진료로 우선 처리했어요\n매월 지역사회 봉사 행사에서 예방 접종과 건강 검진을 했어요\n전문의 추천을 조율하고 검사 결과를 후속 확인했어요"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "간호학",
        "start": "2015",
        "end": "2019",
        "notes": "간호사 자격 (Texas). BLS 및 ACLS 자격."
      }
    ],
    "skills": "환자 평가\nIV 치료 및 투약 관리\n전자 건강 기록 (Epic)\n원격 측정 모니터링\n환자 및 가족 교육\n감염 관리",
    "languages": "영어 (유창함)\n스페인어 (회화 가능)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "소프트웨어 개발자",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Python과 JavaScript로 웹 애플리케이션을 구축해 온 5년 경력의 소프트웨어 개발자예요. 사용자 200,000명 이상이 사용하는 기능을 출시했고, API 응답 시간을 40% 줄였으며, 모놀리스에서 마이크로서비스로의 마이그레이션을 이끌었어요. 테스트, 코드 검토, 명확한 문서화에 강해요.",
    "experience": [
      {
        "role": "소프트웨어 개발자",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "200,000명 이상의 사용자에게 서비스를 제공하는 Python (Django)과 React로 고객 대상 웹 기능을 구축하고 유지했어요\n캐싱을 추가하고 느린 쿼리를 수정해 평균 API 응답 시간을 850 ms에서 500 ms로 줄였어요\n다운타임 없이 청구 서비스를 마이크로서비스로 마이그레이션하는 것을 이끌었어요\n주당 풀 리퀘스트 10개 이상을 검토하고 주니어 개발자 2명을 멘토링해요"
      },
      {
        "role": "주니어 개발자",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "Jul 2020",
        "end": "Feb 2022",
        "current": false,
        "points": "3개 팀의 수작업 스프레드시트를 대체한 JavaScript 내부 대시보드를 구축했어요\n적용 범위를 45%에서 78%로 높인 자동화 테스트를 작성했어요\n첫 해에 제품 전반의 버그 120개 이상을 수정했어요"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "컴퓨터 과학",
        "start": "2016",
        "end": "2020",
        "notes": "데이터베이스, 알고리즘, 운영체제 과목 이수."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript 및 React\nPostgreSQL 및 Redis\nREST API 및 마이크로서비스\nGit 및 CI/CD\n자동화 테스트 (pytest, Jest)",
    "languages": "영어 (유창함)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "초등학교 교사",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "7년 경력의 초등학교 교사로, 3-5학년을 가르쳐요. 수준별 수업, 학급 관리, 학부모 소통에 능숙해요. 두 학년도 동안 우리 학급의 읽기 능숙도를 58%에서 81%로 높였어요.",
    "experience": [
      {
        "role": "초등학교 교사 (4학년)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "학생 26명의 학급에 읽기, 수학, 과학을 가르쳐요. 개별 학습 계획이 있는 학생 5명을 포함해요\n학급 읽기 능숙도를 58%에서 81%로, 지도 읽기 그룹을 통해 두 해 동안 높였어요\n모든 가족을 위해 주간 학부모 뉴스레터와 학기별 진행 회의를 운영해요\n학생 40명(3-5학년)의 학교\u2019의 독서 동아리를 이끌어요"
      },
      {
        "role": "초등학교 교사 (3학년)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "Aug 2018",
        "end": "Jun 2020",
        "current": false,
        "points": "핵심 과목 전반에 걸쳐 학생 24명의 매일 수업을 계획하고 가르쳤어요\n학급 방해를 절반으로 줄인 행동 루틴을 도입했어요\n학생 120명과 학부모 80명의 학년 과학 박람회를 조직했어요"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "초등 교육",
        "start": "2014",
        "end": "2018",
        "notes": "주 교사 자격 (Ohio, K-5학년). 읽기 자격."
      }
    ],
    "skills": "수준별 수업\n학급 관리\n읽기 지도 그룹\n학부모 소통\n수업 계획\nGoogle Classroom",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "시니어 회계사",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "월말 결산, 재무 보고, 내부 감사 분야에서 8년 경력의 CPA예요. 조정 절차를 다시 구축해 장부를 3일 더 빨리 마감했고, 한 감사 연도에 회수 가능한 과다 지급액 $240,000를 찾아냈어요. Excel, QuickBooks, ERP 시스템에 강해요.",
    "experience": [
      {
        "role": "시니어 회계사",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "$40M 사업부의 월말 결산을 담당해 조정을 재구축한 뒤 3일 더 빨리 마쳐요\n시니어 관리를 위해 월간 재무제표와 차이 보고서를 준비해요\n회수 가능한 공급업체 과다 지급액 $240,000를 2024년 내부 감사에서 찾아냈어요\n직원 회계사 2명을 감독하고 그들의 분개를 검토해요"
      },
      {
        "role": "스태프 회계사",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "소규모 사업 고객 25곳을 위해 세금 신고서와 재무제표를 준비했어요\n고객 8곳의 감사를 보조하며 통제 테스트와 결과 문서화를 했어요\nExcel에서 고정자산 대장을 자동화해 월 6시간을 절약했어요"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "회계",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). AICPA 회원."
      }
    ],
    "skills": "월말 결산 및 조정\n재무 보고 및 차이 분석\n내부 감사\nExcel (피벗 테이블, VLOOKUP)\nQuickBooks 및 SAP\n세금 준비",
    "languages": "영어 (유창함)\n만다린어 (회화 가능)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class A 트럭 운전사",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "장거리 및 지역 화물 분야에서 9년 경력의 CDL Class A 운전사예요. 무사고 주행 900,000마일 이상, 정시 배송률 99%, 냉장, 평판, 드라이밴 화물 경험이 있어요. 깨끗한 운전 기록과 HazMat 및 탱커 자격을 보유하고 있어요.",
    "experience": [
      {
        "role": "장거리 트럭 운전사",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "Apr 2019",
        "end": "",
        "current": true,
        "points": "Texas, Oklahoma, New Mexico 전역의 지역 노선에서 주당 2,800마일 이상을 운전해요\n정시 배송률 99%를 연간 화물 1,100건 이상에서 유지해요\n냉장 및 드라이밴 화물을 운송해요. 매일 운행 전후 점검을 완료해요\n총 900,000마일 이상의 무사고 주행"
      },
      {
        "role": "배송 트럭 운전사",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "Mar 2016",
        "end": "Mar 2019",
        "current": false,
        "points": "Dallas-Fort Worth 전역의 하루 15-20개 현장에 건축 자재를 배송했어요\n지게차를 운전하고 DOT 기준에 맞게 평판 화물을 고정했어요\nDOT 위반 없이 배송 서류와 기록을 정확히 유지했어요"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "자격증",
        "field": "상용 운전 (CDL Class A)",
        "start": "2015",
        "end": "2016",
        "notes": "HazMat 및 탱커 자격을 갖춘 CDL Class A. 깨끗한 운전 기록."
      }
    ],
    "skills": "장거리 및 지역 운전\n냉장 및 평판 화물\nDOT 규정 및 기록부\n운행 전 점검\n노선 계획 (GPS, ELD)\n지게차 운전",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "소매 판매 어소시에이트",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "4년 경력의 소매 판매 어소시에이트로, 전자제품 및 의류 매장에서 일해요. 꾸준히 팀 판매 상위 3위 안에 들고, 보증 및 액세서리 부착률은 32%예요. 친근하고, 계산이 빠르며, 매장을 열고 닫는 일을 맡을 만큼 신뢰받아요.",
    "experience": [
      {
        "role": "시니어 판매 어소시에이트",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "하루 고객 60명 이상에게 전자제품과 액세서리를 판매해요. 매장 판매 상위 3위, 8분기 연속\n팀에서 가장 높은, 보증 및 액세서리 부착률 32%를 달성해요\n계산대, 창고, 고객 서비스 기준에 관해 새 직원 6명을 교육해요\n신뢰받는 열쇠 담당자: 매장을 열고 닫으며 현금 계산을 처리해요"
      },
      {
        "role": "판매 어소시에이트",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "Jun 2021",
        "end": "Jan 2022",
        "current": false,
        "points": "바쁜 매장 바닥에서 고객이 옷과 사이즈를 고르는 것을 도왔어요\n매 근무마다 진열을 단정하게 유지하고 선반을 채웠어요\n반품과 교환을 정중하게 처리해 불만을 최소로 유지했어요"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "준학사 학위",
        "field": "경영",
        "start": "2019",
        "end": "2021",
        "notes": "소매업에서 일하면서 아르바이트로 공부해요."
      }
    ],
    "skills": "고객 서비스 및 추가 판매\n현금 취급 및 POS 시스템\n제품 지식 (전자제품)\n재고 관리\n매장 개점 및 폐점\n팀 교육",
    "languages": "영어 (유창함)\n스페인어 (유창함)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "고객 서비스 담당자",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "전화, 이메일, 실시간 채팅 지원을 담당해 온 5년 경력의 고객 서비스 담당자예요. 하루 45건 이상의 문의를 해결하며 만족도 96%, 첫 접촉 해결률 88%를 기록해요. 화난 고객 앞에서도 침착하고 해결책을 빨리 찾아요.",
    "experience": [
      {
        "role": "고객 서비스 담당자",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "May 2021",
        "end": "",
        "current": true,
        "points": "청구, 주문, 기술 결함에 관해 하루 45건 이상의 전화, 이메일, 채팅 문의를 처리해요\n고객 만족도 96%와 첫 접촉 해결률 88%를 유지해요\n어려운 통화를 진정시키고 불만을 재구매로 바꿔요\n대본, 시스템, 어조에 관해 새 담당자 5명을 교육해요"
      },
      {
        "role": "지원 담당자",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "Sep 2019",
        "end": "Apr 2021",
        "current": false,
        "points": "주문, 반품, 환불에 관한 고객 이메일과 채팅에 답했어요\n평균 첫 응답 시간을 2시간 미만으로 유지했어요\n반복 질문을 사분의 일로 줄인 도움 센터 글 20개를 썼어요"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "준학사 학위",
        "field": "경영학",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "전화, 이메일 및 실시간 채팅 지원\n불만 처리 및 완화\nCRM 시스템 (Zendesk, Salesforce)\n청구 및 주문 문의\n타이핑 55 wpm\n팀 교육",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "운영 관리자",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "12년 경력의 운영 관리자로, 창고 및 유통 전반에서 최대 80명의 팀을 운영해요. 주문 처리 비용을 22% 줄였고, 정시 배송을 91%에서 98%로 높였으며, 새 현장 두 곳을 정해진 시간과 예산 안에 열었어요.",
    "experience": [
      {
        "role": "운영 관리자",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "120,000 sq ft 유통 센터를 직원 80명과 함께, 교대 3개로 운영해요\n피킹 경로와 교대 패턴을 재설계해 주문 처리 비용을 22% 줄였어요\n정시 배송을 91%에서 98%로, 18개월 만에 높였어요\n새 현장 2곳을 정해진 시간에, 예산보다 8% 적게 열었어요"
      },
      {
        "role": "창고 감독자",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "창고 직원 25명과 하루 주문 4,000건 이상의 출고를 감독했어요\n바코드 스캔을 도입해 피킹 오류를 35% 줄였어요\n현장을 3년 동안 무사고로 유지한 안전 교육을 운영했어요"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "운영 관리",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "팀 리더십 (최대 직원 80명)\n창고 및 유통\n프로세스 개선\n예산 책정 및 비용 통제\n안전 관리\nERP 및 WMS 시스템",
    "languages": "영어 (유창함)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "자격을 갖춘 전기 기사",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "주거 및 상업 작업 분야에서 8년 경력의 자격을 갖춘 기능장 전기 기사예요. 배선, 패널 업그레이드, 조명, 결함 찾기에 능숙하고, 작업 400건 이상에서 깨끗한 안전 기록을 가지고 있어요. NEC 규정 지식과 견습생 감독 경험이 있어요.",
    "experience": [
      {
        "role": "기능장 전기 기사",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "Mar 2019",
        "end": "",
        "current": true,
        "points": "주거 및 상업 작업 400건 이상 완료: 배선, 패널 업그레이드, 조명, EV 충전기\n첫 방문 수리율 92%로 결함을 빠르게 진단하고 수리해요\n견습생 2명을 감독하고 규정에 맞게 작업을 승인해요\n시간 손실 부상 없이 깨끗한 안전 기록을 유지해요"
      },
      {
        "role": "전기 기사 견습생",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "Jun 2016",
        "end": "Feb 2019",
        "current": false,
        "points": "자격 있는 전기 기사를 보조했어요: 신축 배선과 재배선\n도관 굽힘, 케이블 당기기, 패널 설치를 배웠어요\n8,000시간의 견습 과정을 마치고 기능장 시험에 한 번에 합격했어요"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "자격증",
        "field": "전기 기술",
        "start": "2015",
        "end": "2016",
        "notes": "기능장 전기 기사 자격 (Colorado). OSHA 30 자격."
      }
    ],
    "skills": "주거 및 상업 배선\n패널 업그레이드 및 EV 충전기\n결함 찾기 및 테스트\nNEC 규정 준수\n도관 굽힘 및 케이블 당기기\n견습생 감독",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "재무 분석가",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "예산 책정, 예측, 투자 분석 분야에서 6년 경력의 재무 분석가예요. 예산 차이를 30% 줄인 예측 모델을 구축했고 $50M 규모의 투자 결정을 지원했어요. Excel, SQL, 재무 모델링에 강해요.",
    "experience": [
      {
        "role": "재무 분석가",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "$120M 포트폴리오를 위한 월별 예측과 연간 예산을 수립했어요\n동인 기반 예측 모델로 예산 차이를 30% 줄였어요\n가치 평가와 시나리오 분석으로 $50M 규모의 투자 결정을 지원해요\n매월 CFO와 부서장에게 결과를 제시해요"
      },
      {
        "role": "주니어 재무 분석가",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "Jul 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "12개 지점을 위해 주간 성과 보고서를 준비했어요\nExcel에서 보고를 자동화해 주당 10시간을 절약했어요\n대출 포트폴리오 분석으로 신용 팀을 보조했어요"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "재무",
        "start": "2015",
        "end": "2019",
        "notes": "CFA Level II 후보자. 가치 평가와 기업 재무 과정 이수."
      }
    ],
    "skills": "재무 모델링 및 예측\n예산 책정 및 차이 분석\n가치 평가 (DCF, 비교 평가)\nExcel (고급) 및 SQL\nBloomberg Terminal\n데이터 시각화 (Power BI)",
    "languages": "영어 (유창함)\n힌디어 (유창함)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "토목 엔지니어",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "도로 및 수자원 인프라 설계 분야에서 7년 경력의 토목 엔지니어 (PE)예요. 12마일 고속도로 확장과 8,000가구에 서비스를 제공하는 빗물 시스템의 설계를 이끌었어요. AutoCAD Civil 3D, 비용 산정, 허가 조율에 능숙해요.",
    "experience": [
      {
        "role": "토목 엔지니어",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "조사부터 시공 문서까지 12마일 고속도로 확장의 설계를 이끌어요\n8,000가구가 사용하는 빗물 시스템을 설계해 시에서 한 번에 승인받았어요\n4개 기관과 허가를 조율하고 $2.5M 설계 예산을 관리해요\n자격을 갖춘 프로페셔널 엔지니어로서 도면을 검토하고 도장을 찍어요"
      },
      {
        "role": "주니어 토목 엔지니어",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "주거 개발 20곳 이상을 위한 정지 및 배수 계획을 준비했어요\n도로 프로젝트의 비용 견적과 수량 산출을 실행했어요\n현장 점검에 참석하고 진행 보고서를 작성했어요"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "토목공학",
        "start": "2014",
        "end": "2018",
        "notes": "공인 프로페셔널 엔지니어 자격 (Washington). EIT 2018년 합격."
      }
    ],
    "skills": "도로 및 배수 설계\nAutoCAD Civil 3D\n빗물 모델링\n비용 산정\n허가 조율\n프로젝트 일정 관리 (MS Project)",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "기계 엔지니어",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "6년 경력의 기계 엔지니어로, HVAC 시스템과 생산 장비를 설계해요. 덕트와 제어를 재설계해 에너지 사용량을 18% 줄였고 (공장 3곳에 걸쳐), 산출을 25% 높인 기계 재설계를 이끌었어요. SolidWorks, FEA, 열 분석에 능숙해요.",
    "experience": [
      {
        "role": "기계 엔지니어",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "공장 3곳(직원 400명 이상)을 위한 HVAC 및 생산 장비를 설계해요\n덕트와 제어 시퀀스를 재설계해 에너지 사용량을 18% 줄였어요\n추가 바닥 공간 없이 산출을 25% 높인 기계 재설계를 이끌었어요\n프로토타입 전에 새 부품에 FEA와 열 분석을 실행해요"
      },
      {
        "role": "주니어 기계 엔지니어",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "자동차 고객을 위해 SolidWorks로 부품과 조립품을 모델링했어요\n도면, 자재 명세서, 테스트 보고서를 준비했어요\n프로토타입 제작을 지원하고 현장에서 맞춤 문제를 해결했어요"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "기계공학",
        "start": "2015",
        "end": "2019",
        "notes": "열역학, 유체역학, 기계 설계 과목 이수."
      }
    ],
    "skills": "HVAC 설계\nSolidWorks 및 AutoCAD\nFEA 및 열 분석\n기계 설계\n에너지 효율\nGD&T 및 공차",
    "languages": "영어 (유창함)\n한국어 (회화 가능)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "전기 엔지니어",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "임베디드 시스템과 전력 전자 분야에서 6년 경력의 전기 엔지니어예요. 현재 50,000개 이상의 기기에 사용되는 제어 보드를 설계했고, 부품 재설계로 보드 비용을 22% 줄였어요. Altium, C, 펌웨어 테스트, EMC 준수에 능숙해요.",
    "experience": [
      {
        "role": "전기 엔지니어",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "연간 50,000개 이상의 기기에 사용되는 임베디드 제어 보드를 설계해요\n전원부를 재설계하고 대체 부품을 조달해 보드 비용을 22% 줄였어요\nEMC 준수 테스트를 이끌어 4개 제품 라인에서 한 번에 합격했어요\n마이크로컨트롤러용 펌웨어를 C로 작성하고 검토해요"
      },
      {
        "role": "주니어 전기 엔지니어",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "Jul 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "소비자 및 산업 고객을 위해 Altium으로 PCB를 레이아웃했어요\n프로토타입을 만들고 테스트하며 하드웨어 결함을 디버깅했어요\n생산 테스트 시간을 30% 줄인 테스트 절차를 작성했어요"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "전기공학",
        "start": "2015",
        "end": "2019",
        "notes": "임베디드 시스템, 전력 전자, 신호 처리 과목 이수."
      }
    ],
    "skills": "임베디드 시스템 및 PCB 설계\nAltium Designer\nC 및 펌웨어\n전력 전자\nEMC 준수 테스트\n오실로스코프 및 검사실 장비",
    "languages": "영어 (유창함)\n구자라트어 (회화 가능)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "데이터 분석가",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "판매 및 운영 데이터를 의사결정으로 바꿔 온 4년 경력의 데이터 분석가예요. 60명 이상의 관리자가 사용하는 대시보드를 구축했고, 월간 보고 시간을 3일에서 4시간으로 줄였으며, 연간 $180,000 상당의 가격 오류를 찾아냈어요. SQL, Excel, Power BI에 강해요.",
    "experience": [
      {
        "role": "데이터 분석가",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "60명 이상의 매장 및 지역 관리자가 사용하는 Power BI 대시보드를 구축했어요\n자동화된 SQL 파이프라인으로 월간 보고를 3일에서 4시간으로 줄였어요\n홍보 데이터를 감사해 연간 $180,000 상당의 가격 오류를 찾아냈어요\n매월 상업 팀에 결과를 제시해요"
      },
      {
        "role": "주니어 데이터 분석가",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "Aug 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "4개 시스템의 배송 데이터를 하나의 보고 표로 정리하고 결합했어요\n2개 팀의 수작업 집계를 대체한 Excel 트래커를 만들었어요\n운영 관리자의 임시 데이터 질문에 매일 답했어요"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "통계학",
        "start": "2016",
        "end": "2020",
        "notes": "회귀 분석, 데이터베이스, 데이터 시각화 과목 이수."
      }
    ],
    "skills": "SQL 및 데이터 정리\nPower BI 및 Tableau\nExcel (고급)\nPython (pandas)\n대시보드 설계\nA/B 테스트 기초",
    "languages": "영어 (유창함)\n베트남어 (회화 가능)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "데이터 과학자",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "전자상거래용 머신러닝 모델을 구축해 온 5년 경력의 데이터 과학자예요. 출시한 추천 모델은 방문당 매출을 12% 높였고, 이탈 모델은 이제 위험 고객의 80%를 표시해요. Python, SQL, 모델 배포에 강해요.",
    "experience": [
      {
        "role": "데이터 과학자",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "방문당 매출을 12% 높인 추천 모델을 출시했어요\n이탈 위험 고객의 80%를 한 달 먼저 표시하는 이탈 모델을 구축했어요\n모니터링 및 재학습 파이프라인과 함께 모델을 운영 환경에 배포해요\n매월 제품 및 마케팅 팀에 모델 결과를 제시해요"
      },
      {
        "role": "주니어 데이터 과학자",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "Jul 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "소매 고객 3곳의 예측 모델을 정확도 90% 이상으로 구축했어요\n모델링을 위해 10M행 이상의 데이터셋을 정리하고 준비했어요\n고객이 모델을 직접 다시 실행할 수 있도록 문서를 작성했어요"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "데이터 과학",
        "start": "2018",
        "end": "2020",
        "notes": "추천 시스템에 관한 논문. BS 수학 (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\n머신러닝 및 통계\nSQL 및 Spark\n모델 배포 (Docker, AWS)\nA/B 테스트\n데이터 시각화",
    "languages": "영어 (유창함)\n아랍어 (유창함)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "웹 개발자",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "4년 경력의 웹 개발자로, HTML, CSS, JavaScript로 빠르고 접근성 좋은 웹사이트를 구축해요. 전환을 18% 높인 매장의 결제를 재구축했고, 고객 사이트 12개를 가동 시간 99.9%로 유지해요. 반응형 디자인, 성능, SEO 기초에 강해요.",
    "experience": [
      {
        "role": "웹 개발자",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "12명의 고객을 위해 HTML, CSS, JavaScript, WordPress로 반응형 웹사이트를 구축했어요\n전환을 18% 높인 매장 결제를 재구축했어요\n이미지와 코드 최적화로 평균 페이지 로딩 시간을 4.2s에서 1.8s로 줄였어요\n모니터링과 백업으로 모든 고객 사이트의 가동 시간 99.9%를 유지해요"
      },
      {
        "role": "주니어 웹 개발자",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "20개 이상의 소규모 사업체 사이트에서 랜딩 페이지를 만들고 버그를 고쳤어요\n실제 프로젝트에서 Git, 반응형 디자인, 기본 SEO를 배웠어요\n고객 이메일에 답하고 당일 콘텐츠 업데이트를 했어요"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "컴퓨터 과학",
        "start": "2017",
        "end": "2021",
        "notes": "웹 개발, 데이터베이스, 인간-컴퓨터 상호작용 과목 이수."
      }
    ],
    "skills": "HTML, CSS 및 JavaScript\nReact 및 WordPress\n반응형 디자인\n페이지 속도 최적화\nGit 및 GitHub\n기본 SEO",
    "languages": "영어 (유창함)\n스페인어 (유창함)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "그래픽 디자이너",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "브랜딩, 패키징, 소셜 미디어 디자인 분야에서 5년 경력의 그래픽 디자이너예요. 소규모 사업체 25곳 이상의 브랜드 아이덴티티를 만들었고, 매장 판매를 14% 높인 패키징 리디자인을 했어요. Adobe Illustrator, Photoshop, Figma에 능숙해요.",
    "experience": [
      {
        "role": "그래픽 디자이너",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "Jan 2022",
        "end": "",
        "current": true,
        "points": "25명 이상의 고객을 위해 브랜드 아이덴티티, 패키징, 소셜 캠페인을 디자인해요\n식품 브랜드의 패키징 리디자인으로 매장 판매가 14% 올랐어요\nInstagram, TikTok, Facebook 전반에 걸쳐 주당 소셜 에셋 30개 이상을 제작해요\n고객에게 개념을 제시하고 피드백을 빠르게 반영해 수정해요"
      },
      {
        "role": "주니어 그래픽 디자이너",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "Jul 2020",
        "end": "Dec 2021",
        "current": false,
        "points": "지역 식당과 상점을 위해 전단지, 메뉴, 소셜 게시물을 디자인했어요\n인쇄 준비 파일을 만들고 인쇄소와 교정쇄를 확인했어요\n디자인 시간을 삼분의 일로 줄인 템플릿 라이브러리를 구축했어요"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "그래픽 디자인",
        "start": "2016",
        "end": "2020",
        "notes": "브랜딩 및 패키징 디자인 포트폴리오."
      }
    ],
    "skills": "Adobe Illustrator 및 Photoshop\nFigma\n브랜드 아이덴티티 디자인\n패키징 디자인\n소셜 미디어 디자인\n인쇄물 제작",
    "languages": "영어 (유창함)\n한국어 (회화 가능)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UX 디자이너",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "사용자를 조사하고 모바일 및 웹 제품을 디자인해 온 5년 경력의 UX 디자이너예요. 이탈을 35% 줄인 온보딩 흐름을 재설계했고 사용성 테스트 40회 이상을 실행했어요. Figma, 사용자 조사, 와이어프레임, 프로토타입에 능숙해요.",
    "experience": [
      {
        "role": "UX 디자이너",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "Feb 2022",
        "end": "",
        "current": true,
        "points": "모바일 온보딩을 재설계해 이탈을 35%, 3개월 만에 줄였어요\n연간 사용성 테스트와 사용자 인터뷰 40회 이상을 운영해요\n2개 제품 팀을 위해 Figma로 와이어프레임과 프로토타입을 만들었어요\n엔지니어 및 제품 관리자와 매일 협력해 납품해요"
      },
      {
        "role": "주니어 UX 디자이너",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "Aug 2020",
        "end": "Jan 2022",
        "current": false,
        "points": "고객 앱 5개의 화면과 흐름을 디자인했어요\n첫 사용성 테스트를 실행하고 고객을 위해 결과를 정리했어요\n디자인 인계를 빠르게 한 컴포넌트 라이브러리를 구축했어요"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "심리학",
        "start": "2016",
        "end": "2020",
        "notes": "UX 디자인 자격증 (General Assembly, 2020). 인간-컴퓨터 상호작용 과목 이수."
      }
    ],
    "skills": "사용자 조사 및 사용성 테스트\n와이어프레임 및 프로토타입 (Figma)\n정보 구조 (Information architecture)\n디자인 시스템\n여정 매핑 (Journey mapping)\n이해관계자 워크숍",
    "languages": "영어 (유창함)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "마케팅 관리자",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "8년 경력의 마케팅 관리자로, B2B 및 소비자 캠페인을 해요. 적격 리드를 60% 늘렸고 (한 해 만에), 첫 해 매출 $3M에 도달한 제품 라인을 출시했으며, 연간 예산 $500,000를 5명의 팀에 걸쳐 관리해요.",
    "experience": [
      {
        "role": "마케팅 관리자",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "5명의 팀과 연간 마케팅 예산 $500,000를 이끌어요\n적격 리드를 60% 늘렸어요, 한 해 만에, 콘텐츠와 유료 캠페인으로\n첫 해 매출 $3M에 도달한 제품 라인을 출시했어요\n캠페인 타겟팅을 재구축해 리드당 비용을 28% 줄였어요"
      },
      {
        "role": "마케팅 전문가",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "구독자 80,000명에게 오픈율 24%의 이메일 캠페인을 운영했어요\n5,000명에서 40,000명으로 성장한 소셜 계정을 관리했어요\n연간 전시회 부스 6개를 조직해 각각 300개 이상의 리드를 만들었어요"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "마케팅",
        "start": "2013",
        "end": "2017",
        "notes": "소비자 행동, 분석, 브랜드 관리 과목 이수."
      }
    ],
    "skills": "캠페인 전략 및 기획\n콘텐츠 및 이메일 마케팅\n유료 광고 (Google, Meta)\n마케팅 분석 (GA4)\n팀 리더십\n예산 관리",
    "languages": "영어 (유창함)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "프로젝트 관리자",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "7년 경력의 프로젝트 관리자 (PMP)로, 소프트웨어 및 건설 프로젝트를 정해진 시간과 예산 안에 납품해요. 프로젝트 15개를 최대 $4M 규모로 관리했고, 정시 납품률은 94%예요. Agile, 위험 관리, 이해관계자 소통에 능숙해요.",
    "experience": [
      {
        "role": "프로젝트 관리자",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "프로젝트 15개를 최대 $4M 규모로, 정시 납품률 94%로 관리해요\n3개 팀의 Agile 스프린트를 운영하고 매주 임원에게 진행 상황을 보고해요\n위험 검토를 앞당겨 프로젝트 초과를 30% 줄였어요\n4개 시간대에 걸쳐 공급업체, 고객, 내부 팀을 조율해요"
      },
      {
        "role": "프로젝트 코디네이터",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "Jul 2018",
        "end": "Dec 2020",
        "current": false,
        "points": "건물 프로젝트 8개의 일정, 예산, 허가를 추적했어요\n고객을 위해 상태 보고서와 회의 노트를 준비했어요\n학교 건물 공사 일정 갈등을 해결해 2주를 절약했어요"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "경영학",
        "start": "2014",
        "end": "2018",
        "notes": "PMP 자격 (2021). Certified ScrumMaster."
      }
    ],
    "skills": "프로젝트 기획 및 일정 관리\nAgile 및 Scrum\n위험 관리\n예산 통제\n이해관계자 소통\nMS Project 및 Jira",
    "languages": "영어 (유창함)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "인사 관리자",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "채용, 직원 관계, 복리후생 분야에서 9년 경력의 인사 관리자예요. 채용 소요 시간을 45일에서 28일로 줄였고, 유지율을 15% 높였으며, 직원 250명의 HR을 3개 현장에서 운영해요. 고용법과 정책에 대한 CIPD 수준의 지식이 있어요.",
    "experience": [
      {
        "role": "인사 관리자",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "직원 250명의 HR을 현장 3곳에서, 3명의 팀과 함께 운영해요\n면접 과정을 재구축해 채용 소요 시간을 45일에서 28일로 줄였어요\n새로운 온보딩 및 평가 프로그램으로 유지율을 15% 높였어요\n직원 관계, 고충, 정책 업데이트를 처리해요"
      },
      {
        "role": "HR 일반 담당자",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "Jun 2016",
        "end": "Jan 2020",
        "current": false,
        "points": "호텔과 식당을 위해 연간 직원 120명 이상을 채용했어요\n직원 400명의 급여 확인과 복리후생 등록을 운영했어요\n직원 분쟁을 해결하고 이직률을 업계 평균 아래로 유지했어요"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "인적자원",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP 자격. 고용법 및 조직 행동 과목 이수."
      }
    ],
    "skills": "채용 및 온보딩\n직원 관계\n복리후생 및 급여\n고용법\n성과 관리\nHRIS (Workday, BambooHR)",
    "languages": "영어 (유창함)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "준변호사 (Associate Attorney)",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "상사 소송과 계약법 분야에서 6년 경력의 준변호사예요. 사건 40건 이상을 관리했고, 약식 판결 8건을 이겼으며, $25M 규모의 계약서를 작성했어요. Illinois 변호사 자격을 취득했고 법률 조사, 문서 작성, 고객 상담에 능숙해요.",
    "experience": [
      {
        "role": "준변호사 (Associate Attorney)",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "Sep 2020",
        "end": "",
        "current": true,
        "points": "제출부터 합의까지 상사 소송 사건 40건 이상을 관리해요\n사건 8건에서 약식 판결을 이겼고 20건을 더 유리하게 합의했어요\n최대 $25M 규모의 계약을 작성하고 협상해요\n고객에게 대면과 서면으로 위험과 전략을 조언해요"
      },
      {
        "role": "법률 사무원 (Law Clerk)",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "Aug 2019",
        "end": "Aug 2020",
        "current": false,
        "points": "판례를 조사하고 판사 2명을 위해 메모를 작성했어요\n청문회 100회 이상을 위해 신청을 검토하고 판사 요약을 준비했어요\n민사 부문 전반의 재판과 합의 회의를 참관했어요"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "법학",
        "start": "2016",
        "end": "2019",
        "notes": "Illinois 변호사 자격 취득 (2019). Law review, 기사 편집자."
      }
    ],
    "skills": "상사 소송\n계약서 작성 및 협상\n법률 조사 (Westlaw, LexisNexis)\n고객 상담\n증언 및 증거 개시\n법원 제출 및 절차",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "임상 약사",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "병원 및 지역 약국 분야에서 7년 경력의 임상 약사 (PharmD)예요. 하루 100건 이상의 투약 지시를 검토하고, 새로운 확인 절차로 이상 약물 반응을 25% 줄였으며, 안전한 약 사용에 대해 환자에게 상담해요. Pennsylvania에서 자격을 취득했어요.",
    "experience": [
      {
        "role": "임상 약사",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "안전, 용량, 상호작용을 위해 하루 투약 지시 100건 이상을 검토해요\n새로운 이중 확인 절차로 이상 약물 반응을 25% 줄였어요\n복잡한 환자를 위한 약물 선택에 대해 의사와 간호사에게 조언해요\n병원\u2019의 항생제 관리 라운드를 주 두 회 운영해요"
      },
      {
        "role": "스태프 약사",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "조제 오류 없이 하루 200건 이상의 처방을 조제했어요\n새 약, 부작용, 보관법에 대해 환자에게 상담했어요\n독감 예방 접종을 하고 혈압 검사를 운영했어요"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "약학",
        "start": "2014",
        "end": "2018",
        "notes": "자격을 갖춘 약사 (Pennsylvania). Board Certified Pharmacotherapy Specialist (BCPS)."
      }
    ],
    "skills": "투약 검토 및 안전\n임상 약리학\n환자 상담\n약국 시스템 (Epic, PioneerRx)\n항생제 관리\n예방 접종 서비스",
    "languages": "영어 (유창함)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "일반 치과의사",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "8년 경력의 일반 치과의사 (DDS)로, 수복·심미·예방 치과를 해요. 하루 환자 25명 이상을 진료하고, 환자 2,000명의 진료소에서 환자 만족도 98%를 기록해요. 크라운, 임플란트, 신경 치료, 투명 교정에 능숙해요.",
    "experience": [
      {
        "role": "일반 치과의사",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "하루 환자 25명 이상을 치료해요: 충전, 크라운, 신경 치료, 발치\n환자 만족도 98%를 리뷰 1,200건 이상에서 유지해요\n한 달에 임플란트 15개 이상을 식립하고 투명 교정 사례를 관리해요\n위생사 2명과 치과 보조원 4명을 감독해요"
      },
      {
        "role": "준치과의사 (Associate Dentist)",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "Jul 2017",
        "end": "Jan 2019",
        "current": false,
        "points": "환자 1,500명의 진료소에서 일반 치과를 제공했어요\n당일 크라운을 도입해 재방문을 40% 줄였어요\n어린이의 구강 건강에 관한 학교 봉사 방문을 운영했어요"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "치의학",
        "start": "2013",
        "end": "2017",
        "notes": "자격을 갖춘 치과의사 (Arizona). Invisalign 자격. CPR/BLS 자격."
      }
    ],
    "skills": "수복 치과 (크라운, 충전)\n신경 치료\n치과 임플란트\n투명 교정\n환자 진료 및 소통\n디지털 X선 및 CEREC",
    "languages": "영어 (유창함)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "물리치료사",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "정형 및 스포츠 재활 분야에서 6년 경력의 물리치료사 (DPT)예요. 하루 환자 12-15명을 치료하며, 90%가 계획된 세션 안에 목표에 도달해요. 도수 치료, 운동 처방, 스포츠 복귀 검사에 능숙해요.",
    "experience": [
      {
        "role": "물리치료사",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "스포츠 부상, 수술 후 재활, 허리 통증으로 하루 환자 12-15명을 치료해요\n환자의 90%가 계획된 세션 횟수 안에 목표에 도달해요\n지역 팀 3곳이 사용하는 스포츠 복귀 검사를 설계해요\n새 졸업생 2명을 멘토링하고 학생 실습을 감독해요"
      },
      {
        "role": "스태프 물리치료사",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "Aug 2019",
        "end": "Feb 2021",
        "current": false,
        "points": "수술 후 및 뇌졸중 환자를 위해 입원 재활을 제공했어요\n노인 환자 20명 이상의 그룹 운동 수업을 주마다 운영했어요\nEpic에 진행 상황을 기록하고 병동 팀에 인계했어요"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "물리치료",
        "start": "2016",
        "end": "2019",
        "notes": "자격을 갖춘 물리치료사 (Oregon). Orthopaedic Clinical Specialist (OCS)."
      }
    ],
    "skills": "정형 및 스포츠 재활\n도수 치료\n운동 처방\n스포츠 복귀 검사\n환자 교육\n문서화 (Epic)",
    "languages": "영어 (유창함)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "주방장",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "10년 경력의 주방장으로, 크리올 및 모던 아메리칸 주방에서 일해요. 12명의 팀을 200석 식당에서 이끌고, 주문을 엄격히 관리해 음식 재료비를 15% 줄였으며, 2025년에 시 음식 가이드에서 'Best New Menu'를 수상했어요.",
    "experience": [
      {
        "role": "주방장",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "12명의 팀을 200석 식당에서 이끌며 밤마다 300명 이상에게 서비스를 제공해요\n주문을 더 엄격하게 관리하고 제철 메뉴를 도입해 음식 재료비를 15% 줄였어요\n2025년에 시 음식 가이드에서 'Best New Menu'를 수상했어요\n메뉴를 기획하고 요리사를 교육하며 금요일과 토요일 서비스의 패스를 운영해요"
      },
      {
        "role": "수셰프 (Sous Chef)",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "Jun 2017",
        "end": "Dec 2020",
        "current": false,
        "points": "주방장이 없을 때 주방을 운영해 밤마다 150개의 커버를 담당했어요\n재고, 주문, 공급업체 관계를 관리했어요\n라인 요리사 8명을 교육하고 직원 이직률을 삼분의 일로 줄였어요"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "디플로마",
        "field": "조리 예술",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe 식품 보호 관리자 자격."
      }
    ],
    "skills": "메뉴 설계 및 원가 계산\n크리올 및 모던 아메리칸 요리\n주방 리더십 (12명의 팀)\n식품 안전 (ServSafe)\n공급업체 관리\n연회 및 행사 케이터링",
    "languages": "영어 (유창함)\n스페인어 (유창함)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "경찰관",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "순찰, 지역사회 경찰 활동, 수사 분야에서 8년 경력의 경찰관이에요. 주당 30건 이상의 출동에 대응하고, 완화와 지역사회 봉사로 표창을 받았어요. 위기 개입, 응급처치, 보고서 작성 훈련을 받았어요.",
    "experience": [
      {
        "role": "경찰관",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "Jun 2019",
        "end": "",
        "current": true,
        "points": "주민 40,000명의 구역을 순찰하며 주당 30건 이상의 출동에 대응해요\n완화와 지역사회 봉사로 표창 2개를 받았어요\n절도와 폭행을 조사하고 기소 50건 이상에 사용된 보고서를 작성해요\n현장 훈련을 통해 새 경찰관 3명을 멘토링해요"
      },
      {
        "role": "순찰 경찰관",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "Aug 2017",
        "end": "May 2019",
        "current": false,
        "points": "카운티 도로를 순찰하고 응급 출동에 대응했어요\n법원 서류를 송달하고 수감자 이송을 보조했어요\n위기 개입 및 응급처치 교육을 마쳤어요"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "자격증",
        "field": "법 집행",
        "start": "2017",
        "end": "2017",
        "notes": "Ohio Peace Officer Training Academy 졸업. Crisis Intervention Team 훈련 이수."
      }
    ],
    "skills": "순찰 및 응급 대응\n지역사회 경찰 활동\n위기 개입 및 완화\n보고서 작성\n수사\n응급처치 및 CPR",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "소방관 / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "화재 진압, 구조, 응급 의료 대응 분야에서 7년 경력의 소방관이자 EMT예요. 구조 화재, 차량 구조, 의료 응급을 포함해 900건 이상의 출동에 대응했어요. HazMat 훈련을 받았고 안전 기록이 깨끗해요.",
    "experience": [
      {
        "role": "소방관 / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "Mar 2020",
        "end": "",
        "current": true,
        "points": "화재, 구조, 의료 출동 900건 이상에 대응해요 — 3개 소방서 구역 전반에 걸쳐\n출동의 60%에서 공인 EMT로서 응급 의료를 제공해요\nHazMat 훈련을 받았어요. 화학 사고에서 오염 제거를 이끌어요\n호스 취급, 사다리, 수색 기술에 관해 새 신입을 교육해요"
      },
      {
        "role": "자원봉사 소방관",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "Jun 2018",
        "end": "Feb 2020",
        "current": false,
        "points": "자원봉사자로 산불과 구조 화재에 대응했어요\nFirefighter I & II 및 EMT-Basic 교육을 마쳤어요\n학교에서 지역사회 화재 안전 강연 운영을 도왔어요"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "자격증",
        "field": "소방학",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II. EMT-Basic 자격. HazMat 작업 훈련 이수."
      }
    ],
    "skills": "화재 진압 및 구조\n응급 의료 (EMT)\nHazMat 작업\n사다리, 호스 및 환기\n지역사회 화재 안전\n압박 속 팀워크",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "자격을 갖춘 배관공",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "주거 및 상업 배관 분야에서 11년 경력의 자격을 갖춘 마스터 배관공이에요. 기초 배관부터 보일러 설치까지 연간 600건 이상의 작업을 완료했고, 첫 방문 수리율 98%를 기록해요. 배관 설치, 배수구 청소, 규정 준수에 능숙해요.",
    "experience": [
      {
        "role": "마스터 배관공",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "연간 주거 및 상업 작업 600건 이상 완료\n보일러, 온수기, 욕실 전체 배관 설치를 해요\n서비스 호출에서 첫 방문 수리율 98%를 유지해요\n견습생 3명을 감독하고 작업을 승인해요"
      },
      {
        "role": "기능장 배관공",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "Jun 2014",
        "end": "Dec 2018",
        "current": false,
        "points": "연간 신축 주택 40채 이상의 배관을 운영했어요\n가정과 식당의 배수구를 뚫고 누수를 수리했어요\n가스 배관과 역류 방지를 배웠어요"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "자격증",
        "field": "배관 기술",
        "start": "2013",
        "end": "2014",
        "notes": "마스터 배관공 자격 (Tennessee). 역류 방지 자격."
      }
    ],
    "skills": "주거 및 상업 배관\n배관 설치 및 납땜\n배수구 청소 및 카메라 검사\n보일러 및 온수기 설치\n가스 배관\n배관 규정 준수",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "기능장 목수",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "골조, 마감 작업, 맞춤 캐비닛 분야에서 9년 경력의 기능장 목수예요. 주택 30채 이상의 골조를 세우고 60가구 이상의 주방을 시공했으며, 정확한 측정과 깔끔한 마감으로 유명해요. 도면을 읽고 규정에 맞춰 작업하는 데 능숙해요.",
    "experience": [
      {
        "role": "기능장 목수",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "Feb 2019",
        "end": "",
        "current": true,
        "points": "주택 30채 이상의 골조를 세우고 60가구 이상의 주방을 시공했어요\n1/16인치 공차로 맞춤 캐비닛과 마감을 제작해요\n건축 도면을 읽고 따르며 돈이 들기 전에 오류를 표시해요\n골조 및 마감 기술을 견습생 2명에게 교육해요"
      },
      {
        "role": "목수 견습생",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "Jun 2016",
        "end": "Jan 2019",
        "current": false,
        "points": "리모델링에서 골조, 건식벽, 바닥 작업을 보조했어요\n톱, 라우터, 네일건을 안전하게 사용하는 법을 배웠어요\n8,000시간의 견습 과정을 마치고 기능장 시험에 합격했어요"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "자격증",
        "field": "목공",
        "start": "2015",
        "end": "2016",
        "notes": "기능장 목수. OSHA 10 자격."
      }
    ],
    "skills": "골조 및 구조 작업\n마감 목공 및 몰딩\n맞춤 캐비닛\n건축 도면 읽기\n전동 공구 및 안전\n건식벽 및 바닥",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "중고등학교 교사 (수학)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "8년 경력의 중고등학교 교사로, 9-12학년에게 수학을 가르쳐요. 대수 합격률을 64%에서 83%로 높였고, 수학 팀을 지도해 주 결승 2회에 진출했어요. 수준별 수업, 시험 준비, 학부모 소통에 능숙해요.",
    "experience": [
      {
        "role": "수학 교사 (9-12학년)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "Aug 2019",
        "end": "",
        "current": true,
        "points": "학생 120명에게 대수, 기하, 미적분 기초를, 학급 5개에 걸쳐 가르쳐요\n대수 합격률을 64%에서 83%로, 3년 만에 높였어요\n수학 팀을 지도해 주 결승 2회에 진출했어요\n주당 학생 30명의 방과후 지도를 운영해요"
      },
      {
        "role": "수학 교사 (9-10학년)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "Aug 2017",
        "end": "Jun 2019",
        "current": false,
        "points": "연간 학생 100명에게 대수와 기하를 가르쳤어요\n매주 퀴즈를 도입해 숙제 공백을 절반으로 줄였어요\n학생 200명의 학교 첫 수학 박람회를 조직했어요"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "수학 교육",
        "start": "2013",
        "end": "2017",
        "notes": "주 교사 자격 (New Hampshire, 7-12학년, 수학)."
      }
    ],
    "skills": "수학 교육 (대수부터 미적분 기초까지)\n시험 준비\n수준별 수업\n학급 관리\n학부모 소통\nGoogle Classroom 및 Desmos",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "유치원 교사",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "6년 경력의 유치원 교사로, 3-5세 아동을 돌봐 왔어요. 놀이 기반 학습, 행동 지도, 학부모 소통에 능숙해요. 학급 전체의 학교 준비도 점수를 높인 파닉스 프로그램을 구축했어요.",
    "experience": [
      {
        "role": "유치원 교사",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "Aug 2020",
        "end": "",
        "current": true,
        "points": "어린이 18명의 학급을 가르치고 돌봐요 — 3-5세\n학급 전체의 학교 준비도 점수를 높인 파닉스 프로그램을 구축했어요\n주간 주제, 만들기, 야외 놀이를 계획해요\n학부모와 매일 업데이트와 학기별 진행 보고서를 공유해요"
      },
      {
        "role": "유치원 보조 교사",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "Jun 2018",
        "end": "Jul 2020",
        "current": false,
        "points": "어린이 20명의 학급에서 담임 교사를 지원했어요\n매일 이야기 시간, 노래, 미술 활동을 운영했어요\n안전 및 위생 기록을 주 기준에 맞게 유지했어요"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "준학사 학위",
        "field": "유아 교육",
        "start": "2016",
        "end": "2018",
        "notes": "아동 발달 준전문가 (CDA) 자격. 응급처치 및 CPR 자격."
      }
    ],
    "skills": "놀이 기반 학습\n행동 지도\n파닉스 및 초기 문해력\n학부모 소통\n교실 안전\n미술 및 만들기 계획",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "아동 및 가족 사회복지사",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "아동과 가족을 지원해 온 7년 경력의 자격을 갖춘 사회복지사예요. 25가족의 사례를 관리하고, 학교와 의료 제공자에 걸쳐 서비스를 조율하며, 판사가 의존하는 법원 보고서를 완성해요. 평가, 위기 지원, 보호에 능숙해요.",
    "experience": [
      {
        "role": "아동 및 가족 사회복지사",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "Jan 2020",
        "end": "",
        "current": true,
        "points": "25가족의 사례를 관리하며 매주 가정과 학교를 방문해요\n법원 보고서를 완성하고 가정법원에서 증언해요\n취약한 가족을 위한 주거, 건강, 학교 지원을 조율해요\n새로운 분류 체계로 평가 대기 시간을 20% 줄였어요"
      },
      {
        "role": "사례 담당자 (Case Worker)",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "Jul 2018",
        "end": "Dec 2019",
        "current": false,
        "points": "임시 주거에 있는 가족 40가구 이상을 복리후생과 추천으로 지원했어요\n매주 양육 및 예산 워크숍을 운영했어요\n감사와 자금 보고를 위해 사례 기록을 정확히 유지했어요"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "사회복지",
        "start": "2016",
        "end": "2018",
        "notes": "자격을 갖춘 사회복지사 (Ohio). 아동 복지와 가족 체계 과목 이수."
      }
    ],
    "skills": "사례 관리 (25가족)\n아동 보호\n가정법원 보고서\n위기 지원\n다기관 협력\n복리후생 및 주거 추천",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "법률 보조원",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "소송 지원과 기업 제출 분야에서 6년 경력의 법률 보조원이에요. 사건 30건 이상의 증거 개시를 관리하고, 소장과 계약서를 작성하며, 제출 마감 기한을 100% 정시 기록으로 지켜요. Westlaw, 전자 증거 개시, 사건 관리 소프트웨어에 능숙해요.",
    "experience": [
      {
        "role": "법률 보조원",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "Feb 2021",
        "end": "",
        "current": true,
        "points": "소송 사건 30건 이상의 증거 개시를 관리하며 문서 10,000건 이상을 검토해요\n변호사 검토를 위해 소장, 신청서, 계약서를 작성해요\n법원 제출과 마감 기한에서 100% 정시 기록을 유지해요\n증인을 조율하고 재판 바인더를 준비해요"
      },
      {
        "role": "법률 보조원",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "Aug 2019",
        "end": "Jan 2021",
        "current": false,
        "points": "주당 고객 20명 이상의 접수 면담을 해요\n주거 및 가족 사건을 위한 양식과 제출 서류를 준비했어요\n스페인어 사용 고객을 위해 법률 문서를 번역했어요"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "준학사 학위",
        "field": "법률 보조 연구",
        "start": "2017",
        "end": "2019",
        "notes": "NALA 공인 법률 보조원 (CP). ABA 승인 프로그램."
      }
    ],
    "skills": "소송 지원 및 증거 개시\n법률 문서 작성\n전자 증거 개시 (Relativity)\n사례 관리 (Clio)\n법원 제출 및 마감 기한\n법률 조사 (Westlaw)",
    "languages": "영어 (유창함)\n스페인어 (유창함)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "회계 사무원",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "매입 채무, 송장 발행, 은행 조정 분야에서 5년 경력의 회계 사원이에요. 월 300건 이상의 송장을 99.8% 정확도로 처리하고 월말 결산에 맞춰 장부를 깔끔하게 유지해요. QuickBooks, Excel, 급여 지원에 능숙해요.",
    "experience": [
      {
        "role": "회계 사무원",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "공급업체 송장 300건 이상을 한 달에, 정확도 99.8%로 처리해요\n은행 계정 6개를 매주 조정하고 차이를 당일에 표시해요\n직원 45명의 급여 데이터를 준비하고 연체된 고객 결제를 독촉해요\n연말 감사를 위해 기록을 단정하게 유지해 발견 사항이 전혀 없어요"
      },
      {
        "role": "회계 보조원",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "Jun 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "판매 송장과 영수증을 매일 QuickBooks에 입력했어요\n전화와 이메일로 지급에 관한 공급업체 문의에 답했어요\n서류를 제출하고 기록 보관소를 최신 상태로 유지했어요"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "자격증",
        "field": "회계 기록",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks 공인 사용자."
      }
    ],
    "skills": "매입 및 매출 채무\n은행 조정\n송장 발행 (월 300건 이상)\nQuickBooks 및 Excel\n급여 지원\n데이터 입력 (65 wpm)",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "행정 보조원",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "사무실이 원활하게 돌아가도록 돕는 6년 경력의 행정 보조원이에요. 관리자 4명의 일정을 관리하고 출장과 회의를 조직하며 하루 100건 이상의 이메일을 처리해요. 정확성, 신중함, 마감 압박 속에서도 침착함으로 알려져 있어요.",
    "experience": [
      {
        "role": "행정 보조원",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "시니어 관리자 4명의 일정, 출장, 회의를 관리해요\n하루 100건 이상의 이메일을 처리하며 답장을 작성하고 우선순위를 표시해요\n이사회 서류를 준비하고 월례 회의에서 회의록을 작성해요\n사무용품과 공급업체 주문을 운영해 비용을 12% 줄였어요"
      },
      {
        "role": "접수 담당자 (Receptionist)",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "Aug 2019",
        "end": "Dec 2020",
        "current": false,
        "points": "하루 환자 60명 이상을 맞이하고 예약 장부를 관리했어요\n전화를 받고 보험 문의를 처리했어요\n환자 기록을 정확하고 기밀로 유지했어요"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "준학사 학위",
        "field": "사무 행정",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "일정 및 출장 관리\n이메일 및 서신\n회의록\nMicrosoft Office (Word, Excel, Outlook)\n데이터 입력 (70 wpm)\n사무용품 및 공급업체",
    "languages": "영어 (유창함)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "은행 텔러",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "4년 경력의 은행 텔러로, 하루 80명 이상의 고객을 정확하고 세심하게 응대해요. 3년 동안 현금 서랍을 센트 단위까지 맞췄고 부족액이 전혀 없었어요. 예금, 출금, 사기 확인, 고객에게 맞는 상품 안내에 능숙해요.",
    "experience": [
      {
        "role": "은행 텔러",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "Mar 2022",
        "end": "",
        "current": true,
        "points": "하루 고객 80명 이상을 응대해요: 예금, 출금, 결제, 이체\n3년 동안 부족액 없이 현금 서랍을 센트 단위까지 맞췄어요\n사기 시도 12건을 발견하고 막아 고객의 $90,000 이상을 지켰어요\n고객에게 저축 및 대출 상품을 추천해 분기별 추천 목표를 달성해요"
      },
      {
        "role": "고객 서비스 어소시에이트",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "Jun 2021",
        "end": "Feb 2022",
        "current": false,
        "points": "회원에게 새 계정을 열고 직불 카드를 발급했어요\n잔액과 명세서에 관한 전화 문의에 답했어요\n회원이 온라인 및 모바일 뱅킹을 설정하는 것을 도왔어요"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "준학사 학위",
        "field": "경영",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "현금 취급 및 잔액 맞추기\n예금, 출금 및 결제\n사기 탐지\n고객 서비스\n은행 소프트웨어 (Fiserv)\n상품 추천",
    "languages": "영어 (유창함)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "영업 관리자",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "10년 경력의 영업 관리자로, 최대 15명의 담당자 팀을 이끌어요. 지역 매출을 $4M에서 $7.5M로, 3년 만에 성장시켰고, 수주율을 22%에서 34%로 높였으며, 더 나은 코칭과 온보딩으로 담당자 이직률을 절반으로 줄였어요.",
    "experience": [
      {
        "role": "지역 영업 관리자",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "Texas와 Oklahoma 전역의 영업 담당자 15명의 팀을 이끌어요\n지역 매출을 $4M에서 $7.5M로, 3년 만에 성장시켰어요\n더 나은 코칭과 파이프라인 검토로 수주율을 22%에서 34%로 높였어요\n새로운 온보딩 프로그램으로 담당자 이직률을 절반으로 줄였어요"
      },
      {
        "role": "영업 담당자",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "Jun 2015",
        "end": "Dec 2020",
        "current": false,
        "points": "산업 장비를 계정 80곳 이상에 판매해 5년 연속 할당량을 달성했어요\n3년 연속 지역 최고 담당자\n신규 사업의 25%를 가져온 추천 네트워크를 구축했어요"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "마케팅",
        "start": "2011",
        "end": "2015",
        "notes": "영업 관리와 협상 과목 이수."
      }
    ],
    "skills": "영업 팀 리더십 (담당자 15명)\n매출 성장 및 예측\n파이프라인 관리 (Salesforce)\n코칭 및 온보딩\n협상\n지역 계획",
    "languages": "영어 (유창함)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "건설 관리자",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "12년 경력의 건설 관리자로, 최대 $12M 규모의 상업 및 주거 프로젝트를 납품해요. 프로젝트 20개 이상을 정시율 95%로 완료했고, 현장에서 근로 손실 부상이 없었으며, 예산은 3% 이내로 유지했어요. 일정 관리, 하청 관리, 안전에 능숙해요.",
    "experience": [
      {
        "role": "건설 관리자",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "Feb 2020",
        "end": "",
        "current": true,
        "points": "최대 $12M 규모의 상업 및 주거 프로젝트를 납품해요\n프로젝트 20개 이상을 정시율 95%, 예산 3% 이내로 완료했어요\n하청업체 30곳 이상과 작업자 50명을, 진행 중인 현장 3곳에서 관리해요\n4년 동안 모든 현장에서 근로 손실 부상 제로"
      },
      {
        "role": "현장 감독자",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "Jun 2013",
        "end": "Jan 2020",
        "current": false,
        "points": "사무실 및 소매 건물을 위해 매일 현장 운영을 실행했어요\n배송, 검사, 하청 일정을 조율했어요\n안전 기록을 깨끗하게 유지하고 모든 OSHA 검사를 통과했어요"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "건축 시공",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30 자격. CCM (공인 건설 관리자) 후보자."
      }
    ],
    "skills": "프로젝트 일정 관리 (MS Project, Procore)\n예산 통제\n하청 관리\n현장 안전 (OSHA 30)\n도면 읽기\n고객 보고",
    "languages": "영어 (유창함)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "공인 의료 보조원",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "가정의학과와 응급 진료 분야에서 5년 경력의 공인 의료 보조원이에요. 하루 25명 이상의 환자를 안내하고 활력 징후를 측정하고 채혈하며, 환자 만족도 97%로 프런트 데스크를 관리해요. EHR, 채혈, 보험 확인에 능숙해요.",
    "experience": [
      {
        "role": "공인 의료 보조원",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "Apr 2021",
        "end": "",
        "current": true,
        "points": "하루 환자 25명 이상의 진료 준비: 활력 징후, 병력, 진료 준비\n첫 주사 성공률 99%로 채혈하고 기본 검사실 검사를 실행해요\n프런트 데스크, 일정, 보험 확인을 관리해요\n환자 만족도 97%를 설문 800건 이상에서 유지해요"
      },
      {
        "role": "의료 보조원",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "Aug 2019",
        "end": "Mar 2021",
        "current": false,
        "points": "워크인 환자를 분류하고 의사의 간단한 시술을 보조했어요\n예방 접종을 하고 검체 채취를 처리했어요\n환자 사이에 진료실을 채우고 깨끗하며 준비된 상태로 유지했어요"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "자격증",
        "field": "의료 보조",
        "start": "2018",
        "end": "2019",
        "notes": "공인 의료 보조원 (CMA, AAMA). BLS 자격. 채혈 훈련 이수."
      }
    ],
    "skills": "환자 접수 및 활력 징후\n채혈\nEHR (eClinicalWorks)\n예방 접종\n보험 확인\n프런트 데스크 관리",
    "languages": "영어 (유창함)\n스페인어 (유창함)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "학생",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "성적이 좋고 아르바이트 경험이 있는 의욕적인 고등학교 상급생이에요. 배우는 것이 빠르고, 믿을 수 있으며, 사람들과 잘 어울려요. 첫 정규직이나 대학과 병행할 아르바이트를 찾고 있어요.",
    "experience": [
      {
        "role": "아르바이트 판매 보조원",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "Sep 2024",
        "end": "",
        "current": true,
        "points": "주말과 방과 후에 교대당 고객 50명 이상을 응대해요\n현금을 취급하고 선반을 채우며 진열을 단정하게 유지해요\n토요일 아침에 매장을 여는 일을 맡아요"
      },
      {
        "role": "자원봉사 교사",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "Jan 2024",
        "end": "Jun 2025",
        "current": false,
        "points": "어린 학생들에게 수학을 주 두 회 가르쳤어요\n어린이 40명을 위한 여름 독서 프로그램 조직을 도왔어요"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "고등학교 졸업장",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. 우등 명단, 3년. 토론 팀 주장."
      }
    ],
    "skills": "고객 서비스\n현금 취급\n팀워크\n시간 관리\nMicrosoft Office\n대중 연설 (토론 팀)",
    "languages": "영어 (유창함)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "최근 졸업생 \u2014 경영학",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "마케팅과 운영 분야에서 인턴십 경험이 있는 최근 경영학 졸업생이에요. 참가자 200명의 캠퍼스 경영 대회를 조직했고, 보고 시간을 절반으로 줄인 6개월 인턴십을 마쳤어요. 정규직 커리어를 시작하고 빨리 배우고 싶어요.",
    "experience": [
      {
        "role": "마케팅 인턴",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "current": false,
        "points": "회사\u2019의 소셜 계정을 운영해 팔로워를 2,000명에서 6,500명으로 늘렸어요\n주간 보고 시간을 절반으로 줄인 보고 대시보드를 구축했어요\n블로그 게시물 20개를 써서 읽기 15,000회 이상을 가져왔어요"
      },
      {
        "role": "행사 자원봉사 리드",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "Sep 2024",
        "end": "May 2025",
        "current": false,
        "points": "참가자 200명과 심사위원 12명의 경영 대회를 조직했어요\n예산 $5,000와 자원봉사자 8명의 팀을 관리했어요"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "경영학",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2년. 소규모 사업 마케팅에 관한 졸업 프로젝트."
      }
    ],
    "skills": "소셜 미디어 마케팅\nExcel 및 Google Sheets\n프레젠테이션 스킬\n행사 조직\n팀워크\n기본 데이터 분석",
    "languages": "영어 (유창함)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "주니어 마케팅 어소시에이트",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "콘텐츠, 이메일, 소셜 미디어 분야에서 2년 경력의 주니어 마케팅 어소시에이트예요. 고객 뉴스레터를 구독자 1,000명에서 4,000명으로 성장시켰고 평균 오픈율 22%의 캠페인을 운영해요. 더 큰 책임과 더 큰 고객 포트폴리오를 맡을 준비가 됐어요.",
    "experience": [
      {
        "role": "주니어 마케팅 어소시에이트",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "Jul 2024",
        "end": "",
        "current": true,
        "points": "고객 뉴스레터를 구독자 1,000명에서 4,000명으로, 14개월 만에 성장시켰어요\n소셜 게시물 12개를 주마다, 고객 4곳을 위해 작성하고 예약해요\n평균 오픈율 22%의 이메일 캠페인을 운영해요\n고객에게 매월 캠페인 결과를 보고해요"
      },
      {
        "role": "마케팅 인턴",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "Jan 2024",
        "end": "Jun 2024",
        "current": false,
        "points": "회사 웹사이트의 상품 200개 이상의 설명을 작성했어요\n온라인 주문을 15% 높인 봄 세일 캠페인 운영을 도왔어요"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "커뮤니케이션",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. 디지털 마케팅 및 미디어 글쓰기 과목 이수."
      }
    ],
    "skills": "콘텐츠 작성\n이메일 마케팅 (Mailchimp)\n소셜 미디어 관리\nGoogle Analytics\nCanva\n고객 보고",
    "languages": "영어 (유창함)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "운영 감독자",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "8년 경력의 운영 감독자로, 20-30명의 창고 팀을 운영해요. 피킹 오류를 30% 줄였고, 정시 출차를 90%에서 97%로 높였으며, 신입 15명을 교육했어요. 더 큰 현장과 예산을 가진 운영 관리자 역할을 맡을 준비가 됐어요.",
    "experience": [
      {
        "role": "운영 감독자",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "Mar 2021",
        "end": "",
        "current": true,
        "points": "창고 직원 25명을 교대 2개로, 90,000 sq ft 현장에서 감독해요\n새로운 확인 절차와 바코드 스캔으로 피킹 오류를 30% 줄였어요\n정시 출차를 90%에서 97%로, 2년 만에 높였어요\n신입 15명을 교육하고 3명을 팀 리더 역할로 승진시켰어요"
      },
      {
        "role": "팀 리더",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "Jun 2017",
        "end": "Feb 2021",
        "current": false,
        "points": "야간 근무에서 피킹 및 포장 담당자 10명의 팀을 이끌었어요\n마감을 놓치지 않으면서 초과근무를 20% 줄인 근무표를 도입했어요\n안전 브리핑을 운영하고 팀을 2년 동안 무사고로 유지했어요"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "공급망 관리",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "팀 리더십 (직원 25명)\n창고 운영\n프로세스 개선\n안전 관리\n재고 관리\nWMS 및 Excel",
    "languages": "영어 (유창함)\n힌디어 (회화 가능)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "시니어 프로젝트 관리자",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "14년 경력의 시니어 프로젝트 관리자로, 최대 $8M 규모의 소프트웨어 프로젝트를 납품해요. 프로젝트 30개 이상을 정시율 92%로 이끌었고, PMO를 처음부터 구축했으며, 프로젝트 관리자 10명을 멘토링했어요. 압박 속에서도 차분한 납품과 임원에 대한 솔직한 보고로 알려져 있어요.",
    "experience": [
      {
        "role": "시니어 프로젝트 관리자",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "Jan 2019",
        "end": "",
        "current": true,
        "points": "최대 $8M 규모의 소프트웨어 프로젝트를 정시율 92%로 납품해요\n회사의 PMO를 처음부터 구축했어요: 템플릿, 보고, 거버넌스\n프로젝트 관리자 10명을 멘토링하고 월간 PM 커뮤니티를 운영해요\n40명 규모 프로그램에서 CTO에게 직접 보고해요"
      },
      {
        "role": "프로젝트 관리자",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "Jun 2012",
        "end": "Dec 2018",
        "current": false,
        "points": "소매 및 의료 고객을 위해 프로젝트 20개 이상을 관리했어요\n배송 시간을 25% 줄인 Agile 관행을 도입했어요\n주요 계정 2곳을 연간 매출 $500k에서 $2M로 성장시켰어요"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "정보 시스템",
        "start": "2008",
        "end": "2012",
        "notes": "PMP 자격 (2015). Certified ScrumMaster. MBA 과정 (2018-2019, 미완료)."
      }
    ],
    "skills": "프로그램 및 프로젝트 납품\nPMO 구축 및 거버넌스\nAgile 및 Waterfall\n예산 통제 ($8M)\n임원 보고\n팀 멘토링",
    "languages": "영어 (유창함)\n스페인어 (회화 가능)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "최고운영책임자 (COO)",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "소매 및 물류 기업의 운영을 확장해 온 18년 경력의 최고운영책임자예요. 200명 규모의 운영을 900명으로 성장시켰고 6개 현장으로 넓혔으며, EBITDA 마진을 8%에서 14%로 높였고, 인수 2건을 이끌었어요. 이사회급 보고와 투자자 관계 경험이 있어요.",
    "experience": [
      {
        "role": "최고운영책임자 (COO)",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "Jan 2021",
        "end": "",
        "current": true,
        "points": "900명의 운영을 현장 6곳과 예산 $180M에 걸쳐 실행해요\nEBITDA 마진을 8%에서 14%로, 3년 만에 높였어요\n인수 2건을 이끌고 6개월 안에 두 팀을 통합했어요\n운영, 위험, 성장에 관해 매월 이사회에 보고해요"
      },
      {
        "role": "운영 부사장",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "Jun 2014",
        "end": "Dec 2020",
        "current": false,
        "points": "운영을 200명에서 600명으로, 현장 4곳에 걸쳐 확장했어요\n유통 센터 3곳을 정해진 시간에, 예산보다 적게 열었어요\n오늘날까지 사업을 운영하고 있는 리더십 팀을 구축했어요"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "경영학",
        "start": "2010",
        "end": "2012",
        "notes": "BS 경제학, NYU (2006). 이사회 거버넌스 과정 (2020)."
      }
    ],
    "skills": "대규모 운영 (900명)\n손익 책임 ($180M)\n인수합병\n이사회 보고\n성장 전략\n리더십 팀 빌딩",
    "languages": "영어 (유창함)",
    "template": "executive"
  }
};
});
