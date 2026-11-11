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
      "title": "正看護師",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "内科・外科とテレメトリのユニットで6年の経験を持つ正看護師。患者評価、IV療法、投薬管理、電子健康記録に精通。プレッシャーの高い状況でも患者と家族と落ち着いて明確にコミュニケーションできることで知られています。",
    "experience": [
      {
        "role": "正看護師",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "2021年六月",
        "end": "",
        "current": true,
        "points": "一シフトあたり患者5〜6名を担当。32床の内科・外科病棟で、評価、投薬、創傷ケアを実施\n新卒看護師4名を指導・育成し、そのオリエンテーション期間を2週間短縮\n引き継ぎ時のダブルチェック手順を導入し、ユニットの投薬ミスを18%削減\nすべてのケアをEpic電子健康記録に正確に記録"
      },
      {
        "role": "スタッフ看護師",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "2019年八月",
        "end": "2021年五月",
        "current": false,
        "points": "一日40名以上の飛び込み患者のトリアージを実施し、緊急症例を当日ケアに優先\n月次地域アウトリーチイベントで予防接種と健康スクリーニングを実施\n専門医への紹介を調整し、検査結果をフォローアップ"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "看護",
        "start": "2015",
        "end": "2019",
        "notes": "正看護師免許（テキサス州）。BLSとACLS認定。"
      }
    ],
    "skills": "患者評価\nIV療法と投薬管理\n電子健康記録（Epic）\nテレメトリ監視\n患者と家族への教育\n感染管理",
    "languages": "英語（流暢）\nスペイン語（会話レベル）",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "ソフトウェア開発者",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "PythonとJavaScriptでWebアプリケーションを構築してきた5年の経験を持つソフトウェア開発者。200,000人以上のユーザーが使う機能をリリースし、API応答時間を40%短縮、モノリスのマイクロサービス移行を主導。テスト、コードレビュー、明確なドキュメントに強いです。",
    "experience": [
      {
        "role": "ソフトウェア開発者",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "Python（Django）とReactで顧客向けWeb機能を構築・運用し、200,000人以上のユーザーに提供\nキャッシュ追加と低速クエリ修正でAPIの平均応答時間を850 msから500 msに短縮\n請求サービスのマイクロサービス移行をダウンタイムゼロで主導\n週10件以上のプルリクエストをレビューし、ジュニア開発者2名を指導"
      },
      {
        "role": "ジュニア開発者",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "2020年七月",
        "end": "2022年二月",
        "current": false,
        "points": "3つのチームの手作業スプレッドシートを置き換えた社内ダッシュボードをJavaScriptで構築\nカバレッジを45%から78%に上げた自動テストを作成\n初年度にプロダクト全体で120件以上のバグを修正"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "コンピュータサイエンス",
        "start": "2016",
        "end": "2020",
        "notes": "データベース、アルゴリズム、オペレーティングシステムの履修科目。"
      }
    ],
    "skills": "Python（Django、Flask）\nJavaScriptとReact\nPostgreSQLとRedis\nREST APIとマイクロサービス\nGitとCI/CD\n自動テスト（pytest、Jest）",
    "languages": "英語（流暢）",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "小学校教師",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "7年の経験を持つ小学校教師で、3〜5年生を担当。個別最適化した指導、クラス運営、保護者との連絡に精通。二学年かけてクラスの読解熟達度を58%から81%に向上。",
    "experience": [
      {
        "role": "小学校教師（4年生）",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "2020年八月",
        "end": "",
        "current": true,
        "points": "生徒26名のクラスに読解、数学、理科を教える（個別学習計画のある5名を含む）\nガイド付き読書グループを通じて、クラスの読解熟達度を58%から81%に、二年で向上\n週次の保護者ニュースレターと、全家族向けの学期ごとの進捗会議を運営\n学校の読書クラブを主導し、40名の児童（3〜5年生）が参加"
      },
      {
        "role": "小学校教師（3年生）",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "2018年八月",
        "end": "2020年六月",
        "current": false,
        "points": "全主要教科で生徒24名への毎日の授業を計画し実施\n教室の混乱を半減させた行動ルーティンを導入\n生徒120名と保護者80名が参加する学年サイエンスフェアを運営"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "初等教育",
        "start": "2014",
        "end": "2018",
        "notes": "州教員免許（オハイオ州、K〜5年生）。読解の付記あり。"
      }
    ],
    "skills": "個別最適化した指導\nクラス運営\nガイド付き読書グループ\n保護者との連絡\n授業計画\nGoogle Classroom",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "シニア会計士",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "月末締め、財務報告、内部監査で8年の経験を持つ公認会計士。照合プロセスを再構築して締めを3日短縮し、一監査年度で$240,000の回収可能な過払いを発見。Excel、QuickBooks、ERPシステムに精通。",
    "experience": [
      {
        "role": "シニア会計士",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "$40Mの事業部門の月末締めを担当し、照合を再構築して3日早く完了\n経営幹部向けに月次財務諸表と差異レポートを準備\n$240,000の回収可能なサプライヤー過払いを、2024年の内部監査で発見\nスタッフ会計士2名を監督し、その仕訳をレビュー"
      },
      {
        "role": "スタッフ会計士",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "2017年六月",
        "end": "2020年十二月",
        "current": false,
        "points": "中小企業クライアント25社向けに税務申告書と財務諸表を準備\nクライアント8社の監査を支援し、統制をテストして所見を文書化\n固定資産台帳をExcelで自動化し、月6時間を削減"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "会計",
        "start": "2013",
        "end": "2017",
        "notes": "公認会計士（イリノイ州）。AICPA会員。"
      }
    ],
    "skills": "月末締めと照合\n財務報告と差異分析\n内部監査\nExcel（ピボットテーブル、VLOOKUP）\nQuickBooksとSAP\n税務準備",
    "languages": "英語（流暢）\n北京語（会話レベル）",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "CDL Class Aトラック運転手",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "長距離・地域輸送で9年の経験を持つCDL Class A運転手。無事故900,000マイル以上、定時配達率99%、冷蔵・フラットベッド・ドライバン貨物の経験あり。無違反の記録、HazMatとタンク車の資格あり。",
    "experience": [
      {
        "role": "長距離トラック運転手",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "2019年四月",
        "end": "",
        "current": true,
        "points": "テキサス、オクラホマ、ニューメキシコの地域ルートで週2,800マイル以上を運転\n定時配達率99%を維持（年間1,100件以上の貨物）\n冷蔵・ドライバン貨物を輸送し、出発前と到着後の点検を毎日実施\n合計900,000マイル以上の無事故走行"
      },
      {
        "role": "配送トラック運転手",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "2016年三月",
        "end": "2019年三月",
        "current": false,
        "points": "ダラス・フォートワース地域で一日15〜20か所の現場に建材を配送\nフォークリフトを操作し、フラットベッド貨物をDOT基準で固定\n配送書類とログを正確に維持し、DOT違反ゼロ"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "修了証",
        "field": "商用運転（CDL Class A）",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Class A、HazMatとタンク車の資格あり。無違反の記録。"
      }
    ],
    "skills": "Long-haul and regional driving\nRefrigerated and flatbed loads\nDOT regulations and logbooks\nPre-trip inspections\nRoute planning (GPS, ELD)\nForklift operation",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "小売販売アソシエイト",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "家電と衣料の店舗で4年の経験を持つ小売販売アソシエイト。常にチームのトップ3の販売員で、保証とアクセサリーの同時購入率32%。親しみやすく、レジが速く、店舗の開閉を任されています。",
    "experience": [
      {
        "role": "シニア販売アソシエイト",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "2022年二月",
        "end": "",
        "current": true,
        "points": "一日60名以上の顧客に家電とアクセサリーを販売。店舗販売トップ3を8四半期連続で記録\n保証とアクセサリーで32%の同時購入率を達成し、チーム最高を記録\n新人6名にレジ、倉庫、カスタマーサービスの基準を指導\n信頼される鍵担当者：店舗を開閉し、現金の集計を担当"
      },
      {
        "role": "販売アソシエイト",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "2021年六月",
        "end": "2022年一月",
        "current": false,
        "points": "忙しい売り場で顧客の服装とサイズ選びを支援\n毎シフト、陳列を整え棚を補充\n返品と交換を丁寧に処理し、苦情を最小限に抑えた"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "準学士号",
        "field": "ビジネス",
        "start": "2019",
        "end": "2021",
        "notes": "小売で働きながらのパートタイム学習。"
      }
    ],
    "skills": "カスタマーサービスとアップセル\n現金の取り扱いとPOSシステム\n製品知識（家電）\n在庫管理\n店舗の開閉\nチーム育成",
    "languages": "英語（流暢）\nスペイン語（流暢）",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "カスタマーサービス担当者",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "電話、メール、ライブチャットのサポートを担当してきた5年の経験を持つカスタマーサービス担当者。一日45件以上の案件を解決し、満足度96%、初回解決率88%を達成。怒っている顧客にも落ち着いて対応し、解決策を素早く見つけます。",
    "experience": [
      {
        "role": "カスタマーサービス担当者",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "2021年五月",
        "end": "",
        "current": true,
        "points": "請求、注文、技術的な不具合に関する電話・メール・チャットの案件を一日45件以上処理\n顧客満足度96%と初回解決率88%を維持\n難しい電話を鎮静化し、苦情をリピートビジネスに変える\n新しいエージェント5名にスクリプト、システム、話し方を指導"
      },
      {
        "role": "サポートエージェント",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "2019年九月",
        "end": "2021年四月",
        "current": false,
        "points": "注文、返品、返金に関する顧客のメールとチャットに対応\n平均初回応答時間を2時間以内に維持\nヘルプセンター記事20本を作成し、繰り返しの質問を四分の一削減"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "準学士号",
        "field": "経営学",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Phone, email and live-chat support\nComplaint handling and de-escalation\nCRM systems (Zendesk, Salesforce)\nBilling and order queries\nTyping 55 wpm\nチーム育成",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "オペレーションマネージャー",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "倉庫と配送でチームを運営してきた12年の経験を持つオペレーションマネージャー。最大80名のチームを率い、注文処理コストを22%削減し、定時出荷率を91%から98%に向上。新しい拠点を二か所、期限どおりに予算下で開設。",
    "experience": [
      {
        "role": "オペレーションマネージャー",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "2020年二月",
        "end": "",
        "current": true,
        "points": "120,000平方フィートの配送センターを、80名のスタッフで、3シフトで運営\nピッキング動線とシフトパターンの再設計で注文処理コストを22%削減\n定時出荷率を91%から98%に、18か月で向上\n新しい拠点2か所を期限どおりに、予算の8%下で開設"
      },
      {
        "role": "倉庫スーパーバイザー",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "2013年六月",
        "end": "2020年一月",
        "current": false,
        "points": "倉庫スタッフ25名と、一日4,000件以上の注文の出荷を監督\nバーコードスキャンを導入し、ピッキングミスを35%削減\n現場を3年間無事故に保った安全訓練を実施"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "オペレーション管理",
        "start": "2009",
        "end": "2013",
        "notes": "シックスシグマ・グリーンベルト。"
      }
    ],
    "skills": "チームリーダーシップ（最大スタッフ80名）\n倉庫と配送\nプロセス改善\n予算編成とコスト管理\n安全管理\nERPとWMSシステム",
    "languages": "英語（流暢）",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "免許を持つ電気工事士",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "住宅・商業工事で8年の経験を持つ免許を持つ職人電気工事士。配線、パネルアップグレード、照明、故障探しに精通し、400件以上の仕事でクリーンな安全記録。NEC規格の知識と見習いの監督経験あり。",
    "experience": [
      {
        "role": "職人電気工事士",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "2019年三月",
        "end": "",
        "current": true,
        "points": "住宅・商業物件400件以上を完了：配線、パネルアップグレード、照明、EV充電器\n故障を素早く診断・修理し、初回訪問での修理率92%\n見習い2名を監督し、その仕事が規格に合っていることを承認\n休業災害ゼロのクリーンな安全記録を維持"
      },
      {
        "role": "電気工事士見習い",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "2016年六月",
        "end": "2019年二月",
        "current": false,
        "points": "新築配線と再配線で免許を持つ電気工事士を支援\n電線管の曲げ、ケーブル引き、パネル設置を習得\n見習い時間8,000時間を完了し、職人試験に一回で合格"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "修了証",
        "field": "電気技術",
        "start": "2015",
        "end": "2016",
        "notes": "職人電気工事士免許（コロラド州）。OSHA 30認定。"
      }
    ],
    "skills": "Residential and commercial wiring\nPanel upgrades and EV chargers\nFault-finding and testing\nNEC code compliance\nConduit bending and cable pulling\nApprentice supervision",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "財務アナリスト",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "予算編成、予測、投資分析で6年の経験を持つ財務アナリスト。予算差異を30%削減した予測モデルを構築し、$50Mの投資判断を支援。Excel、SQL、財務モデリングに精通。",
    "experience": [
      {
        "role": "財務アナリスト",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "2021年四月",
        "end": "",
        "current": true,
        "points": "$120Mのポートフォリオについて月次予測と年次予算を作成\nドライバーベースの予測モデルで予算差異を30%削減\nバリュエーションとシナリオ分析で$50Mの投資判断を支援\nCFOと部門長に毎月、所見を提示"
      },
      {
        "role": "ジュニア財務アナリスト",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "2019年七月",
        "end": "2021年三月",
        "current": false,
        "points": "支店12か所向けに週次業績レポートを準備\nExcelでのレポート作成を自動化し、週10時間を削減\n融資ポートフォリオ分析でクレジットチームを支援"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "金融",
        "start": "2015",
        "end": "2019",
        "notes": "CFAレベルII候補者。バリュエーションとコーポレートファイナンスの履修科目。"
      }
    ],
    "skills": "財務モデリングと予測\n予算編成と差異分析\nバリュエーション（DCF、比較法）\nExcel（上級）とSQL\nBloomberg Terminal\nデータ可視化（Power BI）",
    "languages": "英語（流暢）\nヒンディー語（流暢）",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "土木エンジニア",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "道路・水インフラ設計で7年の経験を持つ土木エンジニア（PE）。12マイルの高速道路拡幅と8,000世帯向け雨水システムの設計を主導。AutoCAD Civil 3D、コスト見積もり、許認可調整に精通。",
    "experience": [
      {
        "role": "土木エンジニア",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "12マイルの高速道路拡幅の設計を、測量から施工図面まで主導\n8,000世帯向けの雨水システムを設計し、市から一回で承認を取得\n4つの機関と許認可を調整し、$2.5Mの設計予算を管理\n免許を持つプロフェッショナルエンジニアとして図面をレビューし押印"
      },
      {
        "role": "ジュニア土木エンジニア",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "2018年七月",
        "end": "2020年十二月",
        "current": false,
        "points": "住宅開発20件以上の造成と排水計画を準備\n道路プロジェクトのコスト見積もりと数量拾いを実施\n現場検査に立ち会い、進捗報告書を作成"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "土木工学",
        "start": "2014",
        "end": "2018",
        "notes": "プロフェッショナルエンジニア免許（ワシントン州）。EITは2018年に合格。"
      }
    ],
    "skills": "Road and drainage design\nAutoCAD Civil 3D\nStormwater modelling\nCost estimation\nPermit coordination\nProject scheduling (MS Project)",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "機械エンジニア",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "HVACシステムと生産設備の設計で6年の経験を持つ機械エンジニア。再設計したダクトと制御でエネルギー使用量を18%削減（工場3か所）、生産量を25%上げた機械の再設計を主導。SolidWorks、FEA、熱解析に精通。",
    "experience": [
      {
        "role": "機械エンジニア",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "2021年二月",
        "end": "",
        "current": true,
        "points": "3か所の工場向けにHVACと生産設備を設計（スタッフ400名以上）\nダクトと制御シーケンスの再設計でエネルギー使用量を18%削減\n床面積を増やさずに生産量を25%上げた機械の再設計を主導\nプロトタイプ前に新部品のFEAと熱解析を実施"
      },
      {
        "role": "ジュニア機械エンジニア",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "2019年八月",
        "end": "2021年一月",
        "current": false,
        "points": "自動車クライアント向けにSolidWorksで部品とアセンブリをモデリング\n図面、部品表、テストレポートを準備\nプロトタイプ製作を支援し、現場でのはめ合いの問題を解決"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "機械工学",
        "start": "2015",
        "end": "2019",
        "notes": "熱力学、流体力学、機械設計の履修科目。"
      }
    ],
    "skills": "HVAC design\nSolidWorks and AutoCAD\nFEA and thermal analysis\nMachine design\nEnergy efficiency\nGD&T and tolerancing",
    "languages": "英語（流暢）\n韓国語（会話レベル）",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "電気エンジニア",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "組み込みシステムとパワーエレクトロニクスで6年の経験を持つ電気エンジニア。現在50,000台以上のデバイスに使われる制御基板を設計し、部品の再設計で基板コストを22%削減。Altium、C言語、ファームウェアテスト、EMC適合に精通。",
    "experience": [
      {
        "role": "電気エンジニア",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "年間50,000台以上のデバイスに使われる組み込み制御基板を設計\n電源ステージの再設計と代替部品の調達で基板コストを22%削減\nEMC適合性テストを主導し、製品ライン4つで一回合格\nマイクロコントローラ向けにC言語でファームウェアを作成しレビュー"
      },
      {
        "role": "ジュニア電気エンジニア",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "2019年七月",
        "end": "2021年二月",
        "current": false,
        "points": "消費者向け・産業向けクライアントのためにAltiumでPCBをレイアウト\nプロトタイプを製作・テストし、ハードウェアの不具合をデバッグ\n生産テスト時間を30%削減したテスト手順を作成"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "電気工学",
        "start": "2015",
        "end": "2019",
        "notes": "組み込みシステム、パワーエレクトロニクス、信号処理の履修科目。"
      }
    ],
    "skills": "組み込みシステムとPCB設計\nAltium Designer\nC言語とファームウェア\nパワーエレクトロニクス\nEMC適合性テスト\nオシロスコープと実験機器",
    "languages": "英語（流暢）\nグジャラート語（会話レベル）",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "データアナリスト",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "販売・業務データを意思決定に変えてきた4年の経験を持つデータアナリスト。マネージャー60名以上が使うダッシュボードを構築し、月次レポート時間を3日から4時間に短縮、年間$180,000相当の価格設定ミスを発見。SQL、Excel、Power BIに精通。",
    "experience": [
      {
        "role": "データアナリスト",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "2022年一月",
        "end": "",
        "current": true,
        "points": "店舗・地域マネージャー60名以上が使うPower BIダッシュボードを構築\n自動化したSQLパイプラインで月次レポート作成を3日から4時間に短縮\nプロモーションデータの監査で年間$180,000相当の価格設定ミスを発見\n商業チームに毎月、所見を提示"
      },
      {
        "role": "ジュニアデータアナリスト",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "2020年八月",
        "end": "2021年十二月",
        "current": false,
        "points": "4つのシステムの配送データをクレンジングして一つのレポート表に統合\n2つのチームの手作業カウントを置き換えたExcelトラッカーを構築\nオペレーションマネージャーからの臨時のデータ質問に毎日回答"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "統計学",
        "start": "2016",
        "end": "2020",
        "notes": "回帰分析、データベース、データ可視化の履修科目。"
      }
    ],
    "skills": "SQL and data cleaning\nPower BI and Tableau\nExcel (advanced)\nPython (pandas)\nDashboard design\nA/B testing basics",
    "languages": "英語（流暢）\nベトナム語（会話レベル）",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "データサイエンティスト",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "EC向け機械学習モデルの構築で5年の経験を持つデータサイエンティスト。リリースしたレコメンドモデルで訪問あたり収益を12%向上させ、解約モデルは現在リスクのある顧客の80%を検出。Python、SQL、モデルデプロイに精通。",
    "experience": [
      {
        "role": "データサイエンティスト",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "2022年二月",
        "end": "",
        "current": true,
        "points": "訪問あたり収益を12%向上させたレコメンドモデルをリリース\n解約リスクのある顧客の80%を一か月早く検出する解約予測モデルを構築\n監視と再学習パイプライン付きでモデルを本番環境にデプロイ\nプロダクトとマーケティングのチームに毎月、モデルの結果を提示"
      },
      {
        "role": "ジュニアデータサイエンティスト",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "2020年七月",
        "end": "2022年一月",
        "current": false,
        "points": "小売クライアント3社向けに90%以上の精度の予測モデルを構築\nモデリング用に10M行以上のデータセットをクレンジングし準備\nクライアントが自分でモデルを再実行できるようドキュメントを作成"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "データサイエンス",
        "start": "2018",
        "end": "2020",
        "notes": "レコメンドシステムに関する論文。数学学士号（BS、2018年）。"
      }
    ],
    "skills": "Python（scikit-learn、pandas）\n機械学習と統計\nSQLとSpark\nモデルデプロイ（Docker、AWS）\nA/Bテスト\nデータ可視化",
    "languages": "英語（流暢）\nアラビア語（流暢）",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Web開発者",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "HTML、CSS、JavaScriptで高速でアクセシブルなウェブサイトを構築してきた4年の経験を持つWeb開発者。コンバージョンを18%向上させた店舗のチェックアウトを再構築し、クライアントサイト12件を稼働率99.9%で維持。レスポンシブデザイン、性能、SEOの基礎に強いです。",
    "experience": [
      {
        "role": "Web開発者",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "クライアント12社向けにHTML、CSS、JavaScript、WordPressでレスポンシブウェブサイトを構築\nコンバージョンを18%向上させた店舗のチェックアウトを再構築\n画像とコードの最適化でページの平均読み込み時間を4.2sから1.8sに短縮\n監視とバックアップで全クライアントサイトの稼働率99.9%を維持"
      },
      {
        "role": "ジュニアWeb開発者",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "2021年六月",
        "end": "2022年二月",
        "current": false,
        "points": "中小企業のサイト20件以上でランディングページを構築しバグを修正\n実プロジェクトでGit、レスポンシブデザイン、基本的なSEOを習得\nクライアントのメールに対応し、当日中にコンテンツを更新"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "コンピュータサイエンス",
        "start": "2017",
        "end": "2021",
        "notes": "Web開発、データベース、ヒューマンコンピュータインタラクションの履修科目。"
      }
    ],
    "skills": "HTML、CSS、JavaScript\nReactとWordPress\nレスポンシブデザイン\nページ速度の最適化\nGitとGitHub\n基本的なSEO",
    "languages": "英語（流暢）\nスペイン語（流暢）",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "グラフィックデザイナー",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "ブランディング、パッケージ、ソーシャルメディアデザインで5年の経験を持つグラフィックデザイナー。中小企業25社以上のブランドアイデンティティを作成し、棚での売上を14%向上させたパッケージ再設計を実施。Adobe Illustrator、Photoshop、Figmaに精通。",
    "experience": [
      {
        "role": "グラフィックデザイナー",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "2022年一月",
        "end": "",
        "current": true,
        "points": "クライアント25社以上向けにブランドアイデンティティ、パッケージ、ソーシャルキャンペーンをデザイン\n食品ブランドのパッケージ再設計で棚での売上を14%向上\nInstagram、TikTok、Facebookで週30点以上のソーシャルアセットを制作\nクライアントにコンセプトを提示し、フィードバックから素早く修正"
      },
      {
        "role": "ジュニアグラフィックデザイナー",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "2020年七月",
        "end": "2021年十二月",
        "current": false,
        "points": "地元のレストランや店舗向けにチラシ、メニュー、SNS投稿をデザイン\n印刷用ファイルを準備し、印刷業者と校正を確認\nデザイン時間を三分の一削減したテンプレートライブラリを構築"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "グラフィックデザイン",
        "start": "2016",
        "end": "2020",
        "notes": "ブランディングとパッケージデザインのポートフォリオ。"
      }
    ],
    "skills": "Adobe IllustratorとPhotoshop\nFigma\nブランドアイデンティティデザイン\nパッケージデザイン\nソーシャルメディアデザイン\n印刷制作",
    "languages": "英語（流暢）\n韓国語（会話レベル）",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "UXデザイナー",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "ユーザーを調査し、モバイルとWebの製品をデザインしてきた5年の経験を持つUXデザイナー。離脱を35%削減したオンボーディングフローを再設計し、ユーザビリティテストを40回以上実施。Figma、ユーザーリサーチ、ワイヤーフレーム、プロトタイピングに精通。",
    "experience": [
      {
        "role": "UXデザイナー",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "2022年二月",
        "end": "",
        "current": true,
        "points": "モバイルオンボーディングを再設計し、離脱を35%削減（3か月で）\n年40回以上のユーザビリティテストとユーザーインタビューを実施\n2つのプロダクトチーム向けにFigmaでワイヤーフレームとプロトタイプを作成\n納品についてエンジニアとプロダクトマネージャーと毎日連携"
      },
      {
        "role": "ジュニアUXデザイナー",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "2020年八月",
        "end": "2022年一月",
        "current": false,
        "points": "クライアントアプリ5件の画面とフローをデザイン\n初めてのユーザビリティテストを実施し、クライアント向けに所見をまとめた\nデザインの引き継ぎを高速化したコンポーネントライブラリを構築"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "心理学",
        "start": "2016",
        "end": "2020",
        "notes": "UXデザイン修了証（General Assembly、2020年）。ヒューマンコンピュータインタラクションの履修科目。"
      }
    ],
    "skills": "ユーザーリサーチとユーザビリティテスト\nワイヤーフレームとプロトタイピング（Figma）\n情報アーキテクチャ\nデザインシステム\nジャーニーマッピング\nステークホルダーワークショップ",
    "languages": "英語（流暢）",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "マーケティングマネージャー",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "8年の経験を持つマーケティングマネージャー（B2Bと消費者向けキャンペーン）。一年で見込みリードを60%増やし、初年度売上$3Mの製品ラインを発売、年間$500,000の予算を5名のチームで管理。",
    "experience": [
      {
        "role": "マーケティングマネージャー",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "5名のチームと年間$500,000のマーケティング予算を率いる\nコンテンツと有料キャンペーンで、一年で見込みリードを60%拡大\n初年度売上$3Mに達した製品ラインを発売\nキャンペーンのターゲティングを再構築してリード単価を28%削減"
      },
      {
        "role": "マーケティングスペシャリスト",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "2017年六月",
        "end": "2021年二月",
        "current": false,
        "points": "登録者80,000名へのメールキャンペーンを実施し、開封率24%\nフォロワーが5,000から40,000に増えたソーシャルアカウントを運営\n年6回の展示会ブースを運営し、各回300件以上のリードを獲得"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "マーケティング",
        "start": "2013",
        "end": "2017",
        "notes": "消費者行動、アナリティクス、ブランド管理の履修科目。"
      }
    ],
    "skills": "キャンペーン戦略と企画\nコンテンツとメールマーケティング\n有料広告（Google、Meta）\nマーケティングアナリティクス（GA4）\nチームリーダーシップ\n予算管理",
    "languages": "英語（流暢）",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "プロジェクトマネージャー",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "ソフトウェアと建設のプロジェクトを期限どおり・予算内で納品してきた7年の経験を持つプロジェクトマネージャー（PMP）。15件のプロジェクトを管理（最大$4M規模）、定時納品率94%。アジャイル、リスク管理、ステークホルダーとのコミュニケーションに精通。",
    "experience": [
      {
        "role": "プロジェクトマネージャー",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "15件のプロジェクトを管理（最大$4M規模）、定時納品率94%\n3つのチームのアジャイルスプリントを運営し、経営陣に毎週進捗を報告\n早期のリスクレビューでプロジェクトの超過を30%削減\n4つのタイムゾーンにまたがる業者、クライアント、社内チームを調整"
      },
      {
        "role": "プロジェクトコーディネーター",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "2018年七月",
        "end": "2020年十二月",
        "current": false,
        "points": "建築プロジェクト8件のスケジュール、予算、許可を追跡\nクライアント向けに状況報告書と会議メモを準備\n学校建築で2週間を節約したスケジュールの競合を解決"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "経営学",
        "start": "2014",
        "end": "2018",
        "notes": "PMP認定（2021年）。認定スクラムマスター。"
      }
    ],
    "skills": "プロジェクト計画とスケジューリング\nアジャイルとスクラム\nリスク管理\n予算管理\nステークホルダーとのコミュニケーション\nMS ProjectとJira",
    "languages": "英語（流暢）",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "人事マネージャー",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "採用、従業員関係、福利厚生で9年の経験を持つ人事マネージャー。採用までの期間を45日から28日に短縮し、定着率を15%向上。250名の従業員の人事を3拠点で担当。雇用法とポリシーについてCIPDレベルの知識あり。",
    "experience": [
      {
        "role": "人事マネージャー",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "2020年二月",
        "end": "",
        "current": true,
        "points": "250名の従業員の人事を、3拠点で、3名のチームと運営\n面接プロセスを再構築して採用までの期間を45日から28日に短縮\n新しいオンボーディングと評価プログラムで定着率を15%向上\n従業員関係、苦情、ポリシー更新を担当"
      },
      {
        "role": "人事ゼネラリスト",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "2016年六月",
        "end": "2020年一月",
        "current": false,
        "points": "ホテルとレストラン向けに年間120名以上のスタッフを採用\n従業員400名の給与チェックと福利厚生登録を実施\nスタッフ間の紛争を解決し、離職率を業界平均以下に維持"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "人事",
        "start": "2012",
        "end": "2016",
        "notes": "SHRM-CP認定。雇用法と組織行動の履修科目。"
      }
    ],
    "skills": "採用とオンボーディング\n従業員関係\n福利厚生と給与計算\n雇用法\n業績管理\nHRIS（Workday、BambooHR）",
    "languages": "英語（流暢）",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "アソシエイト弁護士",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "商事訴訟と契約法で6年の経験を持つアソシエイト弁護士。40件以上の案件を担当し、8件で略式判決を獲得、総額$25Mの契約書を作成。イリノイ州弁護士登録済み。法律調査、起草、クライアント相談に精通。",
    "experience": [
      {
        "role": "アソシエイト弁護士",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "2020年九月",
        "end": "",
        "current": true,
        "points": "商事訴訟40件以上を提訴から和解まで管理\n8件で略式判決を獲得し、さらに20件を有利に和解\n最大$25M規模の契約を起草し交渉\nリスクと戦略について、対面と書面でクライアントに助言"
      },
      {
        "role": "法律事務員",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "2019年八月",
        "end": "2020年八月",
        "current": false,
        "points": "判例を調査し、裁判官2名向けにメモを作成\n申立てをレビューし、公判100件以上のベンチ要約を準備\n民事部門全体の裁判と和解会議を傍聴"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "法律",
        "start": "2016",
        "end": "2019",
        "notes": "イリノイ州弁護士登録（2019年）。ローレビュー論文編集者。"
      }
    ],
    "skills": "商事訴訟\n契約の起草と交渉\n法律調査（Westlaw、LexisNexis）\nクライアント相談\n証言録取と証拠開示\n裁判所への提出と手続き",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "臨床薬剤師",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "病院薬局と地域薬局で7年の経験を持つ臨床薬剤師（PharmD）。一日100件以上の投薬指示を審査し、新しい確認プロトコルで薬剤有害事象を25%削減し、安全な服薬について患者を指導。ペンシルベニア州免許。",
    "experience": [
      {
        "role": "臨床薬剤師",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "2020年一月",
        "end": "",
        "current": true,
        "points": "安全、用量、相互作用について一日100件以上の投薬指示を審査\n新しいダブルチェックプロトコルで薬剤有害事象を25%削減\n複雑な症例の患者の薬剤選択について医師と看護師に助言\nRun the hospital's antibiotic stewardship rounds twice a week"
      },
      {
        "role": "スタッフ薬剤師",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "2018年七月",
        "end": "2019年十二月",
        "current": false,
        "points": "一日200件以上の調剤を、調剤ミスゼロで実施\n新しい薬、副作用、保管方法について患者を指導\nインフルエンザ予防接種を実施し、血圧測定を行った"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "薬局",
        "start": "2014",
        "end": "2018",
        "notes": "免許を持つ薬剤師（ペンシルベニア州）。認定薬物療法専門薬剤師（BCPS）。"
      }
    ],
    "skills": "投薬レビューと安全\n臨床薬理学\n患者カウンセリング\n薬局システム（Epic、PioneerRx）\n抗菌薬適正使用支援\n予防接種サービス",
    "languages": "英語（流暢）",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "一般歯科医師",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "修復、審美、予防歯科で8年の経験を持つ一般歯科医師（DDS）。一日25名以上の患者を治療し、患者総数2,000名の診療所で、患者満足度98%を達成。クラウン、インプラント、根管治療、クリアアライナーに精通。",
    "experience": [
      {
        "role": "一般歯科医師",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "2019年二月",
        "end": "",
        "current": true,
        "points": "一日25名以上の患者を治療：充填、クラウン、根管治療、抜歯\n患者満足度98%を維持（レビュー1,200件以上）\n月15件以上のインプラントを埋入し、クリアアライナーの症例を管理\n衛生士2名と歯科アシスタント4名を監督"
      },
      {
        "role": "勤務歯科医師",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "2017年七月",
        "end": "2019年一月",
        "current": false,
        "points": "患者1,500名の診療所で一般歯科を提供\n当日クラウンを導入し、再来院を40%削減\nRan school outreach visits on children's oral health"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "歯科",
        "start": "2013",
        "end": "2017",
        "notes": "免許を持つ歯科医師（アリゾナ州）。Invisalign認定。CPR／BLS認定。"
      }
    ],
    "skills": "修復歯科（クラウン、充填）\n根管治療\n歯科インプラント\nクリアアライナー\n患者ケアとコミュニケーション\nデジタルX線とCEREC",
    "languages": "英語（流暢）",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "理学療法士",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "整形外科とスポーツリハビリテーションで6年の経験を持つ理学療法士（DPT）。一日12〜15名の患者を治療し、90%が予定セッション内で目標を達成。徒手療法、運動処方、競技復帰テストに精通。",
    "experience": [
      {
        "role": "理学療法士",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "スポーツ傷害、術後リハビリ、腰痛で一日12〜15名の患者を治療\n患者の90%が予定回数のセッション内で目標を達成しています\n地元の3つのチームが使う競技復帰テストを設計\n新卒者2名を指導し、学生の実習を監督"
      },
      {
        "role": "スタッフ理学療法士",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "2019年八月",
        "end": "2021年二月",
        "current": false,
        "points": "術後と脳卒中の患者に入院リハビリを提供\n週20名以上の高齢患者向けグループ運動クラスを実施\nEpicに進捗を記録し、病棟チームに引き継ぎ"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "理学療法",
        "start": "2016",
        "end": "2019",
        "notes": "免許を持つ理学療法士（オレゴン州）。整形外科臨床専門士（OCS）。"
      }
    ],
    "skills": "整形外科とスポーツリハビリテーション\n徒手療法\n運動処方\n競技復帰テスト\n患者教育\n文書化（Epic）",
    "languages": "英語（流暢）",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "料理長",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "クレオール料理とモダンアメリカン料理で10年の経験を持つ料理長。ブリガード12名を率い、200席のレストランで、発注の厳格化により食材費を15%削減し、2025年に市のフードガイドから「Best New Menu」を受賞。",
    "experience": [
      {
        "role": "料理長",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "ブリガード12名を率い、200席のレストランで一晩に300名以上へ提供\n発注の厳格化と季節メニューで食材費を15%削減\n2025年に市のフードガイドから「Best New Menu」を受賞\nメニューを考案し、調理師を育成し、金曜と土曜のサービスでパスを担当"
      },
      {
        "role": "スーシェフ",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "2017年六月",
        "end": "2020年十二月",
        "current": false,
        "points": "料理長不在時に厨房を運営し、一晩150名分を担当\n在庫、発注、サプライヤーとの関係を管理\nライン調理師8名を育成し、スタッフの離職率を三分の一削減"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "ディプロマ",
        "field": "調理芸術",
        "start": "2014",
        "end": "2016",
        "notes": "ServSafe食品保護マネージャー認定。"
      }
    ],
    "skills": "メニュー設計と原価計算\nクレオール料理とモダンアメリカン料理\n厨房リーダーシップ（12名の ブリガード）\n食品安全（ServSafe）\nサプライヤー管理\n宴会・イベントケータリング",
    "languages": "英語（流暢）\nスペイン語（流暢）",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "警察官",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "巡回、地域警察活動、捜査で8年の経験を持つ警察官。週30件以上の通報に対応し、鎮静化と地域アウトリーチで表彰。危機介入、応急手当、報告書作成の訓練済み。",
    "experience": [
      {
        "role": "警察官",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "2019年六月",
        "end": "",
        "current": true,
        "points": "住民40,000名の地区を巡回し、週30件以上の通報に対応\n鎮静化と地域アウトリーチで表彰を2回受賞\n窃盗と暴行を捜査し、50件以上の起訴に使われた報告書を作成\n現場訓練を通じて新任警察官3名を指導"
      },
      {
        "role": "巡回警察官",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "2017年八月",
        "end": "2019年五月",
        "current": false,
        "points": "郡道を巡回し、緊急通報に対応\n裁判所書類を送達し、被収容者の移送を支援\n危機介入と応急手当の訓練を修了"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "修了証",
        "field": "法執行",
        "start": "2017",
        "end": "2017",
        "notes": "Ohio Peace Officer Training Academy卒業。危機介入チーム訓練済み。"
      }
    ],
    "skills": "Patrol and emergency response\nCommunity policing\nCrisis intervention and de-escalation\nReport writing\nInvestigations\nFirst aid and CPR",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "消防士／EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "消火、救助、救急対応で7年の経験を持つ消防士兼EMT。建物火災、車両救助、医療緊急事態を含む900件以上の出動に対応。HazMat訓練済みで、安全記録はクリーンです。",
    "experience": [
      {
        "role": "消防士／EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "2020年三月",
        "end": "",
        "current": true,
        "points": "火災、救助、医療の通報900件以上に対応（3署の管轄区域）\n出動の60%で認定EMTとして救急医療を提供\nHazMat訓練済み。化学事故では除染を主導\n新人にホースの取り扱い、はしご、捜索技術を指導"
      },
      {
        "role": "ボランティア消防士",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "2018年六月",
        "end": "2020年二月",
        "current": false,
        "points": "ボランティアとして原野火災と建物火災に対応\nCompleted Firefighter I & II and EMT-Basic training\n学校での地域火災安全講話の運営を支援"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "修了証",
        "field": "消防科学",
        "start": "2017",
        "end": "2018",
        "notes": "Firefighter I & II。EMT-Basic認定。HazMatオペレーション訓練済み。"
      }
    ],
    "skills": "Fire suppression and rescue\nEmergency medical care (EMT)\nHazMat operations\nLadders, hoses and ventilation\nCommunity fire safety\nTeamwork under pressure",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "免許を持つ配管工",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "住宅・商業配管で11年の経験を持つ免許を持つマスター配管工。粗配管からボイラー設置まで年間600件以上を完了し、初回訪問修理率98%。配管施工、排水管清掃、規格適合に精通。",
    "experience": [
      {
        "role": "マスター配管工",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "2019年一月",
        "end": "",
        "current": true,
        "points": "年間600件以上の住宅・商業物件の工事を完了\nボイラー、給湯器、浴室全体の粗配管を設置\nサービスコールで初回訪問修理率98%を維持\n見習い3名を監督し、その仕事を承認"
      },
      {
        "role": "職人配管工",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "2014年六月",
        "end": "2018年十二月",
        "current": false,
        "points": "年間40軒以上の住宅の新築配管を実施\n住宅とレストランの排水管を清掃し、漏水を修理\nガス配管と逆流防止を習得"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "修了証",
        "field": "配管技術",
        "start": "2013",
        "end": "2014",
        "notes": "マスター配管工免許（テネシー州）。逆流防止認定。"
      }
    ],
    "skills": "Residential and commercial plumbing\nPipefitting and soldering\nDrain cleaning and camera inspection\nBoiler and water heater installs\nGas fitting\nPlumbing code compliance",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "職人大工",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "骨組み、仕上げ、特注キャビネットで9年の経験を持つ職人大工。住宅30棟以上の骨組みと60軒以上の住宅のキッチン取り付けを担当し、正確な測定ときれいな仕上げで評判。図面の読み取りと規格に沿った施工に精通。",
    "experience": [
      {
        "role": "職人大工",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "2019年二月",
        "end": "",
        "current": true,
        "points": "住宅30棟以上の骨組みと60軒以上の住宅のキッチン取り付け\n特注キャビネットと装飾材を1/16インチの公差で製作\n建築図面を読み従い、コストになる前にエラーを指摘\n見習い2名に骨組みと仕上げの技術を指導"
      },
      {
        "role": "大工見習い",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "2016年六月",
        "end": "2019年一月",
        "current": false,
        "points": "リモデルでの骨組み、乾式壁、床張りを支援\nのこぎり、ルーター、釘打ち機を安全に使う方法を習得\n見習い時間8,000時間を完了し、職人試験に合格"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "修了証",
        "field": "大工",
        "start": "2015",
        "end": "2016",
        "notes": "職人大工。OSHA 10認定。"
      }
    ],
    "skills": "Framing and structural work\nFinish carpentry and trim\nCustom cabinetry\nReading architectural plans\nPower tools and safety\nDrywall and flooring",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "中等教育教師（数学）",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "8年の経験を持つ中等教育教師で、9〜12年生に数学を教えてきました。代数の合格率を64%から83%に上げ、数学チームを州大会決勝2回に導くコーチ。個別最適化した指導、試験対策、保護者との連絡に精通。",
    "experience": [
      {
        "role": "数学教師（9〜12年生）",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "2019年八月",
        "end": "",
        "current": true,
        "points": "120名の生徒に、5クラスで、代数、幾何、微積分入門を教える\n代数の合格率を64%から83%に、3年で向上\n数学チームを州大会決勝2回に導くコーチ\n週30名の生徒への放課後補習を運営"
      },
      {
        "role": "数学教師（9〜10年生）",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "2017年八月",
        "end": "2019年六月",
        "current": false,
        "points": "年100名の生徒に代数と幾何を教えた\n宿題の未提出を半減させた週次小テストを導入\nOrganised the school's first maths fair with 200 pupils"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "数学教育",
        "start": "2013",
        "end": "2017",
        "notes": "州教員免許（ニューハンプシャー州、7〜12年生、数学）。"
      }
    ],
    "skills": "Mathematics teaching (algebra to pre-calculus)\nExam preparation\n個別最適化した指導\nクラス運営\n保護者との連絡\nGoogle Classroom and Desmos",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "幼稚園教諭",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "6年の経験を持つ幼稚園教諭で、3〜5歳の子どものケアに精通。遊びを通じた学習、行動指導、保護者との連絡に精通。クラス全体の就学準備スコアを向上させたフォニックスプログラムを構築。",
    "experience": [
      {
        "role": "幼稚園教諭",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "2020年八月",
        "end": "",
        "current": true,
        "points": "18名の子どものクラスを教え、ケアする（3〜5歳）\nクラス全体の就学準備スコアを向上させたフォニックスプログラムを構築\n週ごとのテーマ、工作、屋外遊びを計画\n保護者と毎日の最新情報と学期ごとの進捗報告を共有"
      },
      {
        "role": "幼稚園教諭アシスタント",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "2018年六月",
        "end": "2020年七月",
        "current": false,
        "points": "子ども20名のクラスで担任教師を支援\n読み聞かせ、歌、工作の活動を毎日実施\n安全と衛生の記録を州の基準に維持"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "準学士号",
        "field": "幼児教育",
        "start": "2016",
        "end": "2018",
        "notes": "Child Development Associate（CDA）資格。応急手当とCPR認定。"
      }
    ],
    "skills": "Play-based learning\nBehaviour guidance\nPhonics and early literacy\n保護者との連絡\nClassroom safety\nArts and crafts planning",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "子ども・家庭ソーシャルワーカー",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "子どもと家族の支援で7年の経験を持つ認定ソーシャルワーカー。25家族のケースを担当し、学校と医療機関にまたがるサービスを調整し、裁判官が依拠する裁判所報告書を作成。評価、危機支援、安全確保に精通。",
    "experience": [
      {
        "role": "子ども・家庭ソーシャルワーカー",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "2020年一月",
        "end": "",
        "current": true,
        "points": "25家族のケースを担当し、家庭と学校を毎週訪問\n裁判所報告書を作成し、家庭裁判所で証言\n支援が必要な家族向けに住宅、健康、学校の支援を調整\n新しいトリアージシステムで評価待ち時間を20%短縮"
      },
      {
        "role": "ケースワーカー",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "2018年七月",
        "end": "2019年十二月",
        "current": false,
        "points": "仮住まいの家族40世帯以上を給付と紹介で支援\n週次で子育てと家計のワークショップを実施\n監査と資金報告のためにケースノートを正確に維持"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "社会福祉",
        "start": "2016",
        "end": "2018",
        "notes": "認定ソーシャルワーカー（オハイオ州）。児童福祉と家族システムの履修科目。"
      }
    ],
    "skills": "ケース管理（25家族）\n子どもの安全確保\n家庭裁判所報告書\n危機支援\n複数機関の調整\n給付と住宅の紹介",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "パラリーガル",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "訴訟支援と法人提出書類で6年の経験を持つパラリーガル。30件以上の案件の証拠開示を管理し、訴答と契約書を起草、提出期限を100%定時で維持。Westlaw、Eディスカバリ、ケース管理ソフトウェアに精通。",
    "experience": [
      {
        "role": "パラリーガル",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "2021年二月",
        "end": "",
        "current": true,
        "points": "訴訟30件以上の証拠開示を管理し、文書10,000件以上をレビュー\n弁護士のレビュー用に訴答、申立て、契約書を起草\n裁判所への提出と期限で100%の定時記録を維持\n証人を調整し、裁判用バインダーを準備"
      },
      {
        "role": "法務アシスタント",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "2019年八月",
        "end": "2021年一月",
        "current": false,
        "points": "週20名以上のクライアントのインテーク面接\n住宅と家族の案件のフォームと提出書類を準備\nスペイン語を話すクライアント向けに法律文書を翻訳"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "準学士号",
        "field": "パラリーガル学",
        "start": "2017",
        "end": "2019",
        "notes": "NALA認定パラリーガル（CP）。ABA承認プログラム。"
      }
    ],
    "skills": "訴訟支援と証拠開示\n法務文書の起草\nEディスカバリ（Relativity）\nケース管理（Clio）\n裁判所への提出と期限管理\n法律調査（Westlaw）",
    "languages": "英語（流暢）\nスペイン語（流暢）",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "簿記担当者",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "買掛金、請求書発行、銀行勘定照合で5年の経験を持つ簿記担当者。月300件以上の請求書を99.8%の正確さで処理し、月末締めに向けて帳簿をきれいに保ちます。QuickBooks、Excel、給与計算サポートに精通。",
    "experience": [
      {
        "role": "簿記担当者",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "2021年四月",
        "end": "",
        "current": true,
        "points": "月300件以上のサプライヤー請求書を99.8%の正確さで処理\n銀行口座6件を毎週照合し、差異を当日に報告\nスタッフ45名分の給与データを準備し、滞納している顧客の支払いを催促\n年末監査に向けて記録を整え、指摘ゼロ"
      },
      {
        "role": "経理アシスタント",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "2019年六月",
        "end": "2021年三月",
        "current": false,
        "points": "売上請求書と領収書を毎日QuickBooksに入力\n支払いに関するサプライヤーからの問い合わせに電話とメールで対応\n書類をファイリングし、アーカイブを最新に維持"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "修了証",
        "field": "簿記",
        "start": "2018",
        "end": "2019",
        "notes": "QuickBooks認定ユーザー。"
      }
    ],
    "skills": "買掛金・売掛金管理\n銀行勘定照合\n請求書発行（月300件以上）\nQuickBooksとExcel\n給与計算サポート\nデータ入力（65 wpm）",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "事務アシスタント",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "オフィスを円滑に回し続けてきた6年の経験を持つ事務アシスタント。マネージャー4名のカレンダー管理、出張と会議の手配、一日100件以上のメール対応を担当。正確さと慎重さ、締切プレッシャー下でも落ち着いた対応で知られています。",
    "experience": [
      {
        "role": "事務アシスタント",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "シニアマネージャー4名のカレンダー、出張、会議を管理\n一日100件以上のメールを処理し、返信を作成して優先度を付ける\n取締役会資料を準備し、月次会議で議事録を作成\nオフィス用品と業者への発注を運営し、コストを12%削減"
      },
      {
        "role": "受付担当者",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "2019年八月",
        "end": "2020年十二月",
        "current": false,
        "points": "一日60名以上の患者を迎え、予約帳を管理\n電話対応と保険に関する問い合わせ対応\n患者記録を正確かつ機密に維持"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "準学士号",
        "field": "オフィス事務",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist（Word、Excel）。"
      }
    ],
    "skills": "カレンダーと出張の管理\nメールと文書対応\n会議議事録\nMicrosoft Office（Word、Excel、Outlook）\nデータ入力（70 wpm）\nオフィス用品と業者管理",
    "languages": "英語（流暢）",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "銀行窓口担当者",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "4年の経験を持つ銀行窓口担当者。毎日80人以上の顧客に正確で丁寧な対応をしています。3年間、現金ドロワーを一セント単位で一致させ、不足ゼロ。預金、引き出し、不正チェック、顧客に合った商品の紹介に精通。",
    "experience": [
      {
        "role": "銀行窓口担当者",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "2022年三月",
        "end": "",
        "current": true,
        "points": "一日80名以上の顧客に対応：預金、引き出し、支払い、送金\n3年間、現金ドロワーを一セント単位で一致させ、不足ゼロ\n不正の試み12件を発見して阻止し、顧客の$90,000以上を守った\n顧客を貯蓄と融資の商品に紹介し、四半期の紹介目標を達成"
      },
      {
        "role": "カスタマーサービスアソシエイト",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "2021年六月",
        "end": "2022年二月",
        "current": false,
        "points": "会員向けに新規口座を開設し、デビットカードを発行\n残高と明細に関する電話での問い合わせに対応\n会員のオンラインバンキングとモバイルバンキングの設定を支援"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "準学士号",
        "field": "ビジネス",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "現金の取り扱いと照合\n預金、引き出し、支払い\n不正検出\nカスタマーサービス\n銀行ソフトウェア（Fiserv）\n商品紹介",
    "languages": "英語（流暢）",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "営業マネージャー",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "10年の経験を持つ営業マネージャーで、最大15名の担当者のチームを率いてきました。地域収益を$4Mから$7.5Mに、3年で増やし、勝率を22%から34%に上げ、より良いコーチングとオンボーディングで担当者の離職率を半減。",
    "experience": [
      {
        "role": "地域営業マネージャー",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "テキサスとオクラホマで営業担当者15名のチームを率いる\n地域収益を$4Mから$7.5Mに、3年で拡大\nより良いコーチングとパイプラインレビューで勝率を22%から34%に向上\n新しいオンボーディングプログラムで営業担当者の離職率を半減"
      },
      {
        "role": "営業担当者",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "2015年六月",
        "end": "2020年十二月",
        "current": false,
        "points": "80件以上のアカウントに産業機器を販売し、5年連続でノルマを達成\n3年連続で地域のトップ担当者\n新規事業の25%をもたらした紹介ネットワークを構築"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "マーケティング",
        "start": "2011",
        "end": "2015",
        "notes": "営業管理と交渉の履修科目。"
      }
    ],
    "skills": "営業チームリーダーシップ（担当者15名）\n収益成長と予測\nパイプライン管理（Salesforce）\nコーチングとオンボーディング\n交渉\n地域計画",
    "languages": "英語（流暢）",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "建設マネージャー",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "最大$12M規模の商業・住宅プロジェクトを手がけてきた12年の経験を持つ建設マネージャー。プロジェクト20件以上を定時率95%で完了し、担当現場では休業災害ゼロ、予算は3%以内に維持。スケジュール管理、下請け管理、安全管理に精通。",
    "experience": [
      {
        "role": "建設マネージャー",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "2020年二月",
        "end": "",
        "current": true,
        "points": "最大$12M規模の商業・住宅プロジェクトを納品\nプロジェクト20件以上を完了し、定時率95%、予算は3%以内\n下請け30社以上と作業員50名を、稼働中の現場3か所で管理\n4年間、全現場で休業災害ゼロ"
      },
      {
        "role": "現場監督",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "2013年六月",
        "end": "2020年一月",
        "current": false,
        "points": "オフィスと小売の建築の日次現場運営を実施\n配送、検査、下請けのスケジュールを調整\n安全記録をクリーンに保ち、すべてのOSHA検査に合格"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "建築施工",
        "start": "2009",
        "end": "2013",
        "notes": "OSHA 30認定。CCM（認定建設マネージャー）候補者。"
      }
    ],
    "skills": "プロジェクトスケジューリング（MS Project、Procore）\n予算管理\n下請け管理\n現場の安全（OSHA 30）\n図面の読み取り\nクライアント報告",
    "languages": "英語（流暢）",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "認定医療アシスタント",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "家庭医療と救急ケアで5年の経験を持つ認定医療アシスタント。一日25名以上の患者を案内し、バイタル測定、採血、受付管理を担当し、患者満足度97%を達成。EHR、採血、保険確認に精通。",
    "experience": [
      {
        "role": "認定医療アシスタント",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "2021年四月",
        "end": "",
        "current": true,
        "points": "一日25名以上の患者を案内：バイタル、病歴、診察準備\n採血と基本的な検査を実施し、初回穿刺成功率99%\n受付、スケジュール、保険確認を管理\n患者満足度97%を維持（調査800件以上）"
      },
      {
        "role": "医療アシスタント",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "2019年八月",
        "end": "2021年三月",
        "current": false,
        "points": "飛び込み患者をトリアージし、軽い処置で医師を支援\n予防接種を実施し、検体採取を担当\n診察室を患者の合間に備品完備で清潔に準備"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "修了証",
        "field": "医療アシスタント業務",
        "start": "2018",
        "end": "2019",
        "notes": "認定医療アシスタント（CMA、AAMA）。BLS認定。採血訓練済み。"
      }
    ],
    "skills": "患者受付とバイタル測定\n採血\nEHR（eClinicalWorks）\n予防接種\n保険確認\n受付管理",
    "languages": "英語（流暢）\nスペイン語（流暢）",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "学生",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "成績優秀でアルバイト経験のある、意欲的な高校三年生。学習が早く、信頼でき、人と接するのが得意です。初めてのフルタイムの仕事、または大学と両立できるパートタイムの仕事を探しています。",
    "experience": [
      {
        "role": "パートタイム販売アシスタント",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "2024年九月",
        "end": "",
        "current": true,
        "points": "週末と放課後に一シフトで顧客50名以上に対応\n現金を扱い、棚を補充し、陳列を整える\n土曜の朝に店舗を開けることを任されている"
      },
      {
        "role": "ボランティアチューター",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "2024年一月",
        "end": "2025年六月",
        "current": false,
        "points": "週二回、年下の生徒に数学を指導\n子ども40名向けの夏の読書プログラムの運営を支援"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "高校卒業証書",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6。優等生名簿、3年間。ディベートチームのキャプテン。"
      }
    ],
    "skills": "カスタマーサービス\n現金の取り扱い\nチームワーク\n時間管理\nMicrosoft Office\n人前で話すこと（ディベートチーム）",
    "languages": "英語（流暢）",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "新卒者 \u2014 経営学",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "マーケティングとオペレーションのインターン経験を持つ、経営学の新卒者。参加者200名のキャンパスビジネスコンテストを運営し、レポート時間を半分に削減した6か月のインターンを修了。フルタイムのキャリアを始めて素早く学ぶことに意欲的です。",
    "experience": [
      {
        "role": "マーケティングインターン",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "2025年一月",
        "end": "2025年六月",
        "current": false,
        "points": "会社のソーシャルアカウントを運営し、フォロワーを2,000から6,500に拡大\n週次レポート時間を半分に削減したレポートダッシュボードを構築\nブログ記事20本を作成し、15,000回以上の閲覧を獲得"
      },
      {
        "role": "イベントボランティアリーダー",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "2024年九月",
        "end": "2025年五月",
        "current": false,
        "points": "参加者200名、審査員12名のビジネスコンテストを運営\n$5,000の予算とボランティア8名のチームを管理"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "経営学",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5。学部長表彰リスト、2年間。最終学年プロジェクトは中小企業マーケティング。"
      }
    ],
    "skills": "ソーシャルメディアマーケティング\nExcelとGoogle Sheets\nプレゼンテーションスキル\nイベント運営\nチームワーク\n基本的なデータ分析",
    "languages": "英語（流暢）",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "ジュニアマーケティングアソシエイト",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "コンテンツ、メール、ソーシャルメディアで2年の経験を持つジュニアマーケティングアソシエイト。クライアントのニュースレター登録者を1,000から4,000に増やし、平均開封率22%のキャンペーンを運営。より大きな責任とより多くのアカウントを担当する準備ができています。",
    "experience": [
      {
        "role": "ジュニアマーケティングアソシエイト",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "2024年七月",
        "end": "",
        "current": true,
        "points": "クライアントのニュースレター登録者を1,000から4,000に、14か月で拡大\n週12件のソーシャル投稿を、クライアント4社向けに作成しスケジュール\n平均開封率22%のメールキャンペーンを運営\nクライアントにキャンペーン結果を毎月報告"
      },
      {
        "role": "マーケティングインターン",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "2024年一月",
        "end": "2024年六月",
        "current": false,
        "points": "会社のウェブサイトで200点以上の商品の説明を作成\nオンライン注文を15%増やした春のセールキャンペーンの運営を支援"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "コミュニケーション",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4。デジタルマーケティングとメディアライティングの履修科目。"
      }
    ],
    "skills": "コンテンツライティング\nメールマーケティング（Mailchimp）\nソーシャルメディア管理\nGoogle Analytics\nCanva\nクライアント報告",
    "languages": "英語（流暢）",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "オペレーションスーパーバイザー",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "8年の経験を持つオペレーションスーパーバイザー。20〜30名の倉庫チームを運営。ピッキングミスを30%削減し、定時出荷率を90%から97%に向上、新人15名を育成。より大きな拠点と予算を持つオペレーションマネージャーの役割への準備ができています。",
    "experience": [
      {
        "role": "オペレーションスーパーバイザー",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "2021年三月",
        "end": "",
        "current": true,
        "points": "倉庫スタッフ25名を、2シフトにわたり、90,000平方フィートの現場で監督\n新しい確認手順とバーコードスキャンでピッキングミスを30%削減\n定時出荷率を90%から97%に、2年で向上\n新人15名を育成し、3名をチームリーダーの役割に昇進させた"
      },
      {
        "role": "チームリーダー",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "2017年六月",
        "end": "2021年二月",
        "current": false,
        "points": "夜勤でピッカーとパッカー10名のチームを率いた\n締切を守りながら残業を20%削減したシフト表を導入\n安全ブリーフィングを実施し、チームを2年間無事故に維持"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "サプライチェーン管理",
        "start": "2013",
        "end": "2017",
        "notes": "シックスシグマ・イエローベルト。"
      }
    ],
    "skills": "チームリーダーシップ（スタッフ25名）\n倉庫運営\nプロセス改善\n安全管理\n在庫管理\nWMSとExcel",
    "languages": "英語（流暢）\nヒンディー語（会話レベル）",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "シニアプロジェクトマネージャー",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "14年の経験を持つシニアプロジェクトマネージャー。最大$8M規模のソフトウェアプロジェクトを納品。プロジェクト30件以上を定時率92%で主導し、PMOをゼロから構築、プロジェクトマネージャー10名を指導。プレッシャー下でも落ち着いた納品と、経営陣への正直な報告で知られています。",
    "experience": [
      {
        "role": "シニアプロジェクトマネージャー",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "2019年一月",
        "end": "",
        "current": true,
        "points": "最大$8M規模のソフトウェアプロジェクトを定時率92%で納品\n会社のPMOをゼロから構築：テンプレート、報告、ガバナンス\nプロジェクトマネージャー10名を指導し、月次PMコミュニティを運営\n40名のプログラムについてCTOに直接報告"
      },
      {
        "role": "プロジェクトマネージャー",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "2012年六月",
        "end": "2018年十二月",
        "current": false,
        "points": "小売・医療クライアント向けプロジェクト20件以上を管理\n納品時間を25%短縮したアジャイル手法を導入\n主要アカウント2件を年間収益$500kから$2Mに拡大"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "情報システム",
        "start": "2008",
        "end": "2012",
        "notes": "PMP認定（2015年）。認定スクラムマスター。MBA履修科目（2018-2019、未修了）。"
      }
    ],
    "skills": "Programme and project delivery\nPMO setup and governance\nAgile and Waterfall\nBudget control ($8M)\nExecutive reporting\nTeam mentoring",
    "languages": "英語（流暢）\nスペイン語（会話レベル）",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "最高執行責任者（COO）",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "小売・物流企業の運営拡大で18年の経験を持つ最高執行責任者。200名体制の運営を900名に拡大（6拠点）、EBITDAマージンを8%から14%に引き上げ、買収2件を主導。取締役会レベルの報告と投資家対応の経験あり。",
    "experience": [
      {
        "role": "最高執行責任者（COO）",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "2021年一月",
        "end": "",
        "current": true,
        "points": "900名の運営を、6拠点と$180Mの予算で実施\nEBITDAマージンを8%から14%に、3年で向上\n買収2件を主導し、両チームを6か月以内に統合\n運営、リスク、成長について取締役会に毎月報告"
      },
      {
        "role": "オペレーション担当副社長",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "2014年六月",
        "end": "2020年十二月",
        "current": false,
        "points": "運営を200名から600名に拡大（4拠点）\n配送センター3か所を期限どおりに、予算内で開設\n今も事業を運営しているリーダーシップチームを構築"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "経営学",
        "start": "2010",
        "end": "2012",
        "notes": "経済学士号（BS）、NYU（2006年）。取締役会ガバナンスコース（2020年）。"
      }
    ],
    "skills": "大規模な運営（900名）\nP&L ownership ($180M)\n合併と買収\n取締役会報告\n成長戦略\nリーダーシップチーム構築",
    "languages": "英語（流暢）",
    "template": "executive"
  }
};
});
