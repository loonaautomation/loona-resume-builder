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
      "title": "Điều dưỡng viên",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Điều dưỡng viên với 6 năm kinh nghiệm tại các đơn vị nội khoa-phẫu thuật và theo dõi từ xa. Thành thạo đánh giá bệnh nhân, liệu pháp truyền tĩnh mạch, cho dùng thuốc và hồ sơ sức khỏe điện tử. Được biết đến với khả năng giao tiếp bình tĩnh, rõ ràng với bệnh nhân và gia đình trong các tình huống áp lực cao.",
    "experience": [
      {
        "role": "Điều dưỡng viên",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "tháng 6 năm 2021",
        "end": "",
        "current": true,
        "points": "Chăm sóc 5-6 bệnh nhân mỗi ca tại một đơn vị nội khoa-phẫu thuật 32 giường, bao gồm đánh giá, cho dùng thuốc và chăm sóc vết thương\nĐào tạo và hướng dẫn 4 điều dưỡng mới tốt nghiệp, giảm thời gian định hướng của họ xuống 2 tuần\nGiảm 18% lỗi dùng thuốc tại đơn vị bằng cách áp dụng thói quen kiểm tra kép khi bàn giao\nGhi chép mọi hoạt động chăm sóc một cách chính xác trong hồ sơ sức khỏe điện tử Epic"
      },
      {
        "role": "Điều dưỡng viên Nhân viên",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "tháng 8 năm 2019",
        "end": "tháng 5 năm 2021",
        "current": false,
        "points": "Thực hiện phân loại cho hơn 40 bệnh nhân đến trực tiếp mỗi ngày, ưu tiên các ca khẩn cấp để chăm sóc trong ngày\nTiêm chủng và khám sàng lọc sức khỏe tại các sự kiện cộng đồng hàng tháng\nĐiều phối việc giới thiệu tới chuyên gia và theo dõi kết quả xét nghiệm"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Điều dưỡng",
        "start": "2015",
        "end": "2019",
        "notes": "Giấy phép Điều dưỡng viên (Texas). Có chứng chỉ BLS và ACLS."
      }
    ],
    "skills": "Đánh giá bệnh nhân\nLiệu pháp truyền tĩnh mạch và cho dùng thuốc\nHồ sơ sức khỏe điện tử (Epic)\nTheo dõi từ xa\nGiáo dục cho bệnh nhân và gia đình\nKiểm soát nhiễm khuẩn",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (giao tiếp)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Lập trình viên Phần mềm",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Lập trình viên phần mềm với 5 năm kinh nghiệm xây dựng ứng dụng web bằng Python và JavaScript. Đã triển khai các tính năng được hơn 200,000 người dùng sử dụng, giảm 40% thời gian phản hồi API và dẫn dắt việc chuyển đổi từ kiến trúc đơn khối sang vi dịch vụ. Mạnh về kiểm thử, đánh giá mã nguồn và tài liệu rõ ràng.",
    "experience": [
      {
        "role": "Lập trình viên Phần mềm",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "tháng 3 năm 2022",
        "end": "",
        "current": true,
        "points": "Xây dựng và duy trì các tính năng web hướng tới khách hàng bằng Python (Django) và React, phục vụ hơn 200,000 người dùng\nGiảm thời gian phản hồi API trung bình từ 850 ms xuống 500 ms bằng cách thêm bộ nhớ đệm và sửa các truy vấn chậm\nDẫn dắt việc chuyển đổi dịch vụ thanh toán sang kiến trúc vi dịch vụ với không thời gian ngừng hoạt động\nXem xét hơn 10 yêu cầu hợp nhất mã mỗi tuần và hướng dẫn 2 lập trình viên mới vào nghề"
      },
      {
        "role": "Lập trình viên Mới vào nghề",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "tháng 7 năm 2020",
        "end": "tháng 2 năm 2022",
        "current": false,
        "points": "Xây dựng các bảng điều khiển nội bộ bằng JavaScript thay thế bảng tính thủ công cho 3 nhóm\nViết các bài kiểm thử tự động giúp nâng độ bao phủ từ 45% lên 78%\nĐã sửa hơn 120 lỗi trong toàn bộ sản phẩm trong năm đầu tiên"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Khoa học Máy tính",
        "start": "2016",
        "end": "2020",
        "notes": "Các môn học về cơ sở dữ liệu, thuật toán và hệ điều hành."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript và React\nPostgreSQL và Redis\nREST API và vi dịch vụ\nGit và CI/CD\nKiểm thử tự động (pytest, Jest)",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Giáo viên Tiểu học",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Giáo viên tiểu học với 7 năm kinh nghiệm dạy các lớp 3-5. Thành thạo dạy học phân hóa, quản lý lớp học và liên lạc với phụ huynh. Đã nâng trình độ đọc của lớp mình từ 58% lên 81% trong hai năm học.",
    "experience": [
      {
        "role": "Giáo viên Tiểu học (Lớp 4)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "tháng 8 năm 2020",
        "end": "",
        "current": true,
        "points": "Dạy đọc, toán và khoa học cho một lớp 26 học sinh, bao gồm 5 em có kế hoạch học tập cá nhân\nNâng trình độ đọc của lớp từ 58% lên 81% trong hai năm nhờ các nhóm đọc có hướng dẫn\nĐiều hành bản tin phụ huynh hàng tuần và các cuộc họp tiến độ theo kỳ cho mọi gia đình\nDẫn dắt trường's câu lạc bộ đọc sách cho 40 học sinh lớp 3-5"
      },
      {
        "role": "Giáo viên Tiểu học (Lớp 3)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "tháng 8 năm 2018",
        "end": "tháng 6 năm 2020",
        "current": false,
        "points": "Lên kế hoạch và giảng dạy các bài học hằng ngày cho 24 học sinh ở tất cả các môn cốt lõi\nÁp dụng các thói quen hành vi giúp giảm một nửa tình trạng gây rối trong lớp học\nTổ chức hội chợ khoa học của khối với 120 học sinh và 80 phụ huynh"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Giáo dục Tiểu học",
        "start": "2014",
        "end": "2018",
        "notes": "Giấy phép giảng dạy của bang (Ohio, lớp K-5). Chứng nhận bổ sung về đọc."
      }
    ],
    "skills": "Dạy học phân hóa\nQuản lý lớp học\nNhóm đọc có hướng dẫn\nLiên lạc với phụ huynh\nLập kế hoạch bài giảng\nGoogle Classroom",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Kế toán viên Cao cấp",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA với 8 năm kinh nghiệm trong khóa sổ cuối tháng, báo cáo tài chính và kiểm toán nội bộ. Đã khóa sổ nhanh hơn 3 ngày bằng cách xây dựng lại quy trình đối chiếu và phát hiện $240,000 tiền thanh toán thừa có thể thu hồi trong một năm kiểm toán. Mạnh về Excel, QuickBooks và các hệ thống ERP.",
    "experience": [
      {
        "role": "Kế toán viên Cao cấp",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Phụ trách khóa sổ cuối tháng cho một đơn vị kinh doanh $40M, hoàn thành nhanh hơn 3 ngày sau khi xây dựng lại quy trình đối chiếu\nChuẩn bị báo cáo tài chính hàng tháng và báo cáo chênh lệch cho ban quản lý cấp cao\nPhát hiện $240,000 tiền thanh toán thừa cho nhà cung cấp có thể thu hồi trong đợt kiểm toán nội bộ năm 2024\nGiám sát 2 kế toán viên nhân viên và xem xét các bút toán của họ"
      },
      {
        "role": "Kế toán viên Nhân viên",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "tháng 6 năm 2017",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Chuẩn bị tờ khai thuế và báo cáo tài chính cho 25 khách hàng doanh nghiệp nhỏ\nHỗ trợ kiểm toán cho 8 khách hàng, kiểm thử các biện pháp kiểm soát và ghi chép các phát hiện\nTự động hóa sổ đăng ký tài sản cố định trong Excel, tiết kiệm 6 giờ mỗi tháng"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Kế toán",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Thành viên của AICPA."
      }
    ],
    "skills": "Khóa sổ cuối tháng và đối chiếu\nBáo cáo tài chính và phân tích chênh lệch\nKiểm toán nội bộ\nExcel (bảng tổng hợp, VLOOKUP)\nQuickBooks và SAP\nChuẩn bị thuế",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Quan Thoại (giao tiếp)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Tài xế Xe tải CDL Hạng A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Tài xế CDL Hạng A với 9 năm kinh nghiệm trong vận tải đường dài và khu vực. Hơn 900,000 dặm không tai nạn, tỷ lệ giao hàng đúng hạn 99% và kinh nghiệm với hàng đông lạnh, hàng trên xe sàn phẳng và hàng khô. Hồ sơ lái xe trong sạch, có chứng nhận bổ sung HazMat và xe bồn.",
    "experience": [
      {
        "role": "Tài xế Xe tải Đường dài",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "tháng 4 năm 2019",
        "end": "",
        "current": true,
        "points": "Lái hơn 2,800 dặm mỗi tuần trên các tuyến khu vực khắp Texas, Oklahoma và New Mexico\nDuy trì tỷ lệ giao hàng đúng hạn 99% trên hơn 1,100 chuyến hàng mỗi năm\nVận chuyển hàng đông lạnh và hàng khô bằng xe thùng; hoàn thành kiểm tra trước và sau chuyến đi hằng ngày\nTổng cộng hơn 900,000 dặm không tai nạn"
      },
      {
        "role": "Tài xế Xe tải Giao hàng",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "tháng 3 năm 2016",
        "end": "tháng 3 năm 2019",
        "current": false,
        "points": "Giao vật liệu xây dựng tới 15-20 công trường mỗi ngày trong khu vực Dallas-Fort Worth\nVận hành xe nâng và cố định hàng trên xe sàn phẳng theo tiêu chuẩn DOT\nGiữ giấy tờ giao hàng và nhật ký chính xác với không vi phạm DOT nào"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Chứng chỉ",
        "field": "Lái xe Thương mại (CDL Hạng A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Hạng A với chứng nhận bổ sung HazMat và xe bồn. Hồ sơ lái xe trong sạch."
      }
    ],
    "skills": "Lái xe đường dài và khu vực\nHàng đông lạnh và hàng trên xe sàn phẳng\nQuy định DOT và nhật ký\nKiểm tra trước chuyến đi\nLập kế hoạch tuyến đường (GPS, ELD)\nVận hành xe nâng",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Nhân viên Bán lẻ",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Nhân viên bán lẻ với 4 năm kinh nghiệm tại các cửa hàng điện tử và may mặc. Luôn nằm trong top 3 người bán hàng của nhóm, với tỷ lệ bán kèm 32% đối với bảo hành và phụ kiện. Thân thiện, nhanh nhẹn ở quầy thu ngân và được tin tưởng mở và đóng cửa hàng.",
    "experience": [
      {
        "role": "Nhân viên Bán hàng Cao cấp",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "tháng 2 năm 2022",
        "end": "",
        "current": true,
        "points": "Bán đồ điện tử và phụ kiện cho hơn 60 khách hàng mỗi ngày; top 3 doanh số của cửa hàng trong 8 quý liên tiếp\nĐạt tỷ lệ bán kèm 32% đối với bảo hành và phụ kiện, cao nhất trong nhóm\nĐào tạo 6 người mới về quầy thu ngân, kho và tiêu chuẩn chăm sóc khách hàng\nNgười giữ chìa khóa đáng tin cậy: mở và đóng cửa hàng và xử lý kiểm đếm tiền mặt"
      },
      {
        "role": "Nhân viên Bán hàng",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "tháng 6 năm 2021",
        "end": "tháng 1 năm 2022",
        "current": false,
        "points": "Giúp khách hàng chọn trang phục và kích cỡ tại khu vực bán hàng đông đúc\nGiữ khu trưng bày gọn gàng và bổ sung hàng lên kệ trong mỗi ca\nXử lý đổi trả một cách lịch sự, giữ số lượng phàn nàn ở mức tối thiểu"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Bằng Cao đẳng",
        "field": "Kinh doanh",
        "start": "2019",
        "end": "2021",
        "notes": "Học bán thời gian trong khi làm việc trong ngành bán lẻ."
      }
    ],
    "skills": "Chăm sóc khách hàng và bán thêm\nXử lý tiền mặt và hệ thống POS\nKiến thức sản phẩm (điện tử)\nQuản lý hàng tồn kho\nMở và đóng cửa hàng\nĐào tạo nhóm",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (thành thạo)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Nhân viên Chăm sóc Khách hàng",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Nhân viên chăm sóc khách hàng với 5 năm kinh nghiệm xử lý hỗ trợ qua điện thoại, email và trò chuyện trực tiếp. Giải quyết hơn 45 trường hợp mỗi ngày với điểm hài lòng 96% và tỷ lệ giải quyết ngay lần liên hệ đầu tiên đạt 88%. Bình tĩnh với khách hàng đang tức giận và nhanh chóng tìm ra cách khắc phục.",
    "experience": [
      {
        "role": "Nhân viên Chăm sóc Khách hàng",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "tháng 5 năm 2021",
        "end": "",
        "current": true,
        "points": "Xử lý hơn 45 trường hợp qua điện thoại, email và trò chuyện mỗi ngày về thanh toán, đơn hàng và lỗi kỹ thuật\nDuy trì điểm hài lòng của khách hàng 96% và tỷ lệ giải quyết ngay lần liên hệ đầu tiên 88%\nLàm dịu các cuộc gọi khó và biến phàn nàn thành khách hàng quay lại\nĐào tạo 5 nhân viên hỗ trợ mới về kịch bản, hệ thống và giọng điệu"
      },
      {
        "role": "Nhân viên Hỗ trợ",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "tháng 9 năm 2019",
        "end": "tháng 4 năm 2021",
        "current": false,
        "points": "Trả lời email và cuộc trò chuyện của khách hàng về đơn hàng, đổi trả và hoàn tiền\nDuy trì thời gian phản hồi đầu tiên trung bình dưới 2 giờ\nViết 20 bài cho trung tâm trợ giúp giúp giảm một phần tư số câu hỏi lặp lại"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Bằng Cao đẳng",
        "field": "Quản trị Kinh doanh",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Phone, email and live-chat support\nComplaint handling and de-escalation\nCRM systems (Zendesk, Salesforce)\nBilling and order queries\nTyping 55 wpm\nĐào tạo nhóm",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Quản lý Vận hành",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Quản lý vận hành với 12 năm kinh nghiệm điều hành các nhóm lên tới 80 người trong kho bãi và phân phối. Đã giảm 22% chi phí xử lý đơn hàng, nâng tỷ lệ giao hàng đúng hạn từ 91% lên 98% và khai trương hai địa điểm mới đúng hạn, dưới ngân sách.",
    "experience": [
      {
        "role": "Quản lý Vận hành",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "tháng 2 năm 2020",
        "end": "",
        "current": true,
        "points": "Điều hành một trung tâm phân phối 120,000 bộ vuông với 80 nhân viên ở 3 ca\nGiảm 22% chi phí xử lý đơn hàng bằng cách thiết kế lại đường lấy hàng và mẫu ca làm việc\nNâng tỷ lệ giao hàng đúng hạn từ 91% lên 98% trong 18 tháng\nKhai trương 2 địa điểm mới đúng hạn và thấp hơn 8% ngân sách"
      },
      {
        "role": "Giám sát Kho",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "tháng 6 năm 2013",
        "end": "tháng 1 năm 2020",
        "current": false,
        "points": "Giám sát 25 nhân viên kho và việc điều phối hằng ngày hơn 4,000 đơn hàng\nÁp dụng quét mã vạch, giảm 35% lỗi lấy hàng\nTổ chức đào tạo an toàn giúp công trường không có tai nạn trong 3 năm"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Quản lý Vận hành",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Lãnh đạo nhóm (lên tới 80 nhân viên)\nKho bãi và phân phối\nCải tiến quy trình\nLập ngân sách và kiểm soát chi phí\nQuản lý an toàn\nHệ thống ERP và WMS",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Thợ điện có Giấy phép",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Thợ điện lành nghề có giấy phép với 8 năm kinh nghiệm trong công trình dân dụng và thương mại. Thành thạo đi dây, nâng cấp tủ điện, chiếu sáng và tìm lỗi, với hồ sơ an toàn trong sạch qua hơn 400 công trình. Kiến thức về quy chuẩn NEC và kinh nghiệm giám sát thợ học nghề.",
    "experience": [
      {
        "role": "Thợ điện Lành nghề",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "tháng 3 năm 2019",
        "end": "",
        "current": true,
        "points": "Hoàn thành hơn 400 công trình dân dụng và thương mại: đi dây, nâng cấp tủ điện, chiếu sáng và bộ sạc xe điện\nChẩn đoán và sửa lỗi nhanh, với tỷ lệ khắc phục ngay lần đến đầu tiên đạt 92%\nGiám sát 2 thợ học nghề và nghiệm thu công việc của họ theo quy chuẩn\nDuy trì hồ sơ an toàn trong sạch với không thương tích mất thời gian lao động nào"
      },
      {
        "role": "Thợ điện Tập sự",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "tháng 6 năm 2016",
        "end": "tháng 2 năm 2019",
        "current": false,
        "points": "Hỗ trợ các thợ điện có giấy phép trong việc đi dây cho công trình mới và thay mới hệ thống dây\nHọc uốn ống luồn dây, kéo cáp và lắp đặt tủ điện\nHoàn thành 8,000 giờ học nghề và vượt qua kỳ thi thợ lành nghề ngay lần đầu"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Chứng chỉ",
        "field": "Công nghệ Điện",
        "start": "2015",
        "end": "2016",
        "notes": "Giấy phép thợ điện lành nghề (Colorado). Có chứng chỉ OSHA 30."
      }
    ],
    "skills": "Đi dây dân dụng và thương mại\nNâng cấp tủ điện và bộ sạc xe điện\nTìm lỗi và kiểm thử\nTuân thủ quy chuẩn NEC\nUốn ống luồn dây và kéo cáp\nGiám sát thợ học nghề",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Chuyên viên Phân tích Tài chính",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Chuyên viên phân tích tài chính với 6 năm kinh nghiệm trong lập ngân sách, dự báo và phân tích đầu tư. Đã xây dựng các mô hình dự báo giúp giảm 30% chênh lệch ngân sách và hỗ trợ các quyết định đầu tư $50M. Mạnh về Excel, SQL và xây dựng mô hình tài chính.",
    "experience": [
      {
        "role": "Chuyên viên Phân tích Tài chính",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "tháng 4 năm 2021",
        "end": "",
        "current": true,
        "points": "Xây dựng dự báo hàng tháng và ngân sách hàng năm cho danh mục $120M\nGiảm 30% chênh lệch ngân sách nhờ mô hình dự báo dựa trên các yếu tố tác động\nHỗ trợ các quyết định đầu tư trị giá $50M bằng định giá và phân tích kịch bản\nTrình bày các phát hiện hằng tháng cho CFO và các trưởng bộ phận"
      },
      {
        "role": "Chuyên viên Phân tích Tài chính Mới vào nghề",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "tháng 7 năm 2019",
        "end": "tháng 3 năm 2021",
        "current": false,
        "points": "Chuẩn bị báo cáo hiệu suất hàng tuần cho 12 chi nhánh\nTự động hóa việc báo cáo trong Excel, tiết kiệm 10 giờ mỗi tuần\nHỗ trợ nhóm tín dụng phân tích danh mục cho vay"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Tài chính",
        "start": "2015",
        "end": "2019",
        "notes": "Ứng viên CFA Cấp độ II. Các môn học về định giá và tài chính doanh nghiệp."
      }
    ],
    "skills": "Xây dựng mô hình tài chính và dự báo\nLập ngân sách và phân tích chênh lệch\nĐịnh giá (DCF, so sánh)\nExcel (nâng cao) và SQL\nBloomberg Terminal\nTrực quan hóa dữ liệu (Power BI)",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Hindi (thành thạo)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Kỹ sư Xây dựng",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Kỹ sư xây dựng (PE) với 7 năm kinh nghiệm thiết kế hạ tầng đường bộ và cấp thoát nước. Đã dẫn dắt thiết kế mở rộng đường cao tốc 12 dặm và hệ thống thoát nước mưa phục vụ 8,000 ngôi nhà. Thành thạo AutoCAD Civil 3D, dự toán chi phí và phối hợp xin giấy phép.",
    "experience": [
      {
        "role": "Kỹ sư Xây dựng",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Dẫn dắt thiết kế mở rộng đường cao tốc 12 dặm, từ khảo sát đến hồ sơ thi công\nThiết kế hệ thống thoát nước mưa phục vụ 8,000 ngôi nhà, được thành phố phê duyệt ngay lần đầu\nPhối hợp xin giấy phép với 4 cơ quan và quản lý ngân sách thiết kế $2.5M\nXem xét và đóng dấu bản vẽ với tư cách Kỹ sư Chuyên nghiệp có giấy phép"
      },
      {
        "role": "Kỹ sư Xây dựng Mới vào nghề",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "tháng 7 năm 2018",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Chuẩn bị phương án san nền và thoát nước cho hơn 20 dự án dân cư\nThực hiện dự toán chi phí và bóc tách khối lượng cho các dự án đường bộ\nTham gia kiểm tra công trường và viết báo cáo tiến độ"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Kỹ thuật Xây dựng",
        "start": "2014",
        "end": "2018",
        "notes": "Giấy phép Kỹ sư Chuyên nghiệp (Washington). Đậu EIT năm 2018."
      }
    ],
    "skills": "Thiết kế đường và thoát nước\nAutoCAD Civil 3D\nMô hình hóa nước mưa\nDự toán chi phí\nPhối hợp giấy phép\nLập tiến độ dự án (MS Project)",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Kỹ sư Cơ khí",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Kỹ sư cơ khí với 6 năm kinh nghiệm thiết kế hệ thống HVAC và thiết bị sản xuất. Đã giảm 18% mức sử dụng năng lượng tại 3 nhà máy nhờ thiết kế lại hệ thống ống gió và điều khiển, và dẫn dắt việc thiết kế lại máy giúp tăng 25% sản lượng. Thành thạo SolidWorks, FEA và phân tích nhiệt.",
    "experience": [
      {
        "role": "Kỹ sư Cơ khí",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "tháng 2 năm 2021",
        "end": "",
        "current": true,
        "points": "Thiết kế HVAC và thiết bị sản xuất cho 3 nhà máy với hơn 400 nhân viên\nGiảm 18% mức sử dụng năng lượng bằng cách thiết kế lại hệ thống ống gió và trình tự điều khiển\nDẫn dắt việc thiết kế lại máy giúp tăng 25% sản lượng mà không cần thêm diện tích sàn\nThực hiện FEA và phân tích nhiệt trên các bộ phận mới trước khi tạo nguyên mẫu"
      },
      {
        "role": "Kỹ sư Cơ khí Mới vào nghề",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "tháng 8 năm 2019",
        "end": "tháng 1 năm 2021",
        "current": false,
        "points": "Xây dựng mô hình các bộ phận và cụm lắp ráp trong SolidWorks cho khách hàng ô tô\nChuẩn bị bản vẽ, bảng kê vật liệu và báo cáo kiểm thử\nHỗ trợ chế tạo nguyên mẫu và giải quyết các vấn đề lắp ghép tại xưởng"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Kỹ thuật Cơ khí",
        "start": "2015",
        "end": "2019",
        "notes": "Các môn học về nhiệt động lực học, cơ học chất lỏng và thiết kế máy."
      }
    ],
    "skills": "Thiết kế HVAC\nSolidWorks và AutoCAD\nFEA và phân tích nhiệt\nThiết kế máy\nHiệu quả năng lượng\nGD&T và dung sai",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Hàn (giao tiếp)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Kỹ sư Điện",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Kỹ sư điện với 6 năm kinh nghiệm trong hệ thống nhúng và điện tử công suất. Đã thiết kế các bo mạch điều khiển hiện được dùng trong hơn 50,000 thiết bị và giảm 22% chi phí bo mạch nhờ thiết kế lại linh kiện. Thành thạo Altium, C, kiểm thử phần mềm nhúng và tuân thủ EMC.",
    "experience": [
      {
        "role": "Kỹ sư Điện",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "tháng 3 năm 2021",
        "end": "",
        "current": true,
        "points": "Thiết kế các bo mạch điều khiển nhúng được dùng trong hơn 50,000 thiết bị mỗi năm\nGiảm 22% chi phí bo mạch bằng cách thiết kế lại tầng công suất và tìm nguồn linh kiện thay thế\nDẫn dắt kiểm thử tuân thủ EMC, đậu ngay lần đầu ở 4 dòng sản phẩm\nViết và đánh giá phần mềm nhúng bằng C cho vi điều khiển"
      },
      {
        "role": "Kỹ sư Điện Mới vào nghề",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "tháng 7 năm 2019",
        "end": "tháng 2 năm 2021",
        "current": false,
        "points": "Bố trí PCB trong Altium cho khách hàng tiêu dùng và công nghiệp\nXây dựng và kiểm thử nguyên mẫu, gỡ lỗi phần cứng\nViết các quy trình kiểm thử giúp giảm 30% thời gian kiểm thử sản xuất"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Kỹ thuật Điện",
        "start": "2015",
        "end": "2019",
        "notes": "Các môn học về hệ thống nhúng, điện tử công suất và xử lý tín hiệu."
      }
    ],
    "skills": "Hệ thống nhúng và thiết kế PCB\nAltium Designer\nC và phần mềm nhúng\nĐiện tử công suất\nKiểm thử tuân thủ EMC\nMáy hiện sóng và thiết bị phòng thí nghiệm",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Gujarati (giao tiếp)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Chuyên viên Phân tích Dữ liệu",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Chuyên viên phân tích dữ liệu với 4 năm kinh nghiệm biến dữ liệu bán hàng và vận hành thành các quyết định. Đã xây dựng các bảng điều khiển được hơn 60 quản lý sử dụng, rút ngắn thời gian báo cáo hàng tháng từ 3 ngày xuống 4 giờ và phát hiện một lỗi định giá trị giá $180,000 mỗi năm. Mạnh về SQL, Excel và Power BI.",
    "experience": [
      {
        "role": "Chuyên viên Phân tích Dữ liệu",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "tháng 1 năm 2022",
        "end": "",
        "current": true,
        "points": "Xây dựng các bảng điều khiển Power BI được hơn 60 quản lý cửa hàng và khu vực sử dụng\nRút ngắn việc báo cáo hàng tháng từ 3 ngày xuống 4 giờ nhờ các quy trình SQL tự động\nPhát hiện một lỗi định giá trị giá $180,000 mỗi năm bằng cách kiểm toán dữ liệu khuyến mãi\nTrình bày các phát hiện hằng tháng cho nhóm thương mại"
      },
      {
        "role": "Chuyên viên Phân tích Dữ liệu Mới vào nghề",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "tháng 8 năm 2020",
        "end": "tháng 12 năm 2021",
        "current": false,
        "points": "Đã làm sạch và hợp nhất dữ liệu giao hàng từ 4 hệ thống vào một bảng báo cáo\nXây dựng các công cụ theo dõi bằng Excel thay thế việc đếm thủ công cho 2 nhóm\nTrả lời các câu hỏi dữ liệu phát sinh cho quản lý vận hành hằng ngày"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Thống kê",
        "start": "2016",
        "end": "2020",
        "notes": "Các môn học về hồi quy, cơ sở dữ liệu và trực quan hóa dữ liệu."
      }
    ],
    "skills": "SQL và làm sạch dữ liệu\nPower BI và Tableau\nExcel (nâng cao)\nPython (pandas)\nThiết kế bảng điều khiển\nKiến thức cơ bản về kiểm thử A/B",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Việt (giao tiếp)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Nhà Khoa học Dữ liệu",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Nhà khoa học dữ liệu với 5 năm kinh nghiệm xây dựng các mô hình học máy cho thương mại điện tử. Một mô hình gợi ý mà tôi triển khai đã nâng doanh thu mỗi lượt truy cập thêm 12%, và một mô hình khách hàng rời bỏ hiện phát hiện 80% khách hàng có nguy cơ. Mạnh về Python, SQL và triển khai mô hình.",
    "experience": [
      {
        "role": "Nhà Khoa học Dữ liệu",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "tháng 2 năm 2022",
        "end": "",
        "current": true,
        "points": "Đã triển khai một mô hình gợi ý giúp nâng doanh thu mỗi lượt truy cập thêm 12%\nXây dựng mô hình khách hàng rời bỏ giúp phát hiện 80% khách hàng có nguy cơ sớm hơn một tháng\nTriển khai các mô hình vào môi trường thực tế với các quy trình giám sát và huấn luyện lại\nTrình bày kết quả mô hình cho các nhóm sản phẩm và marketing hằng tháng"
      },
      {
        "role": "Nhà Khoa học Dữ liệu Mới vào nghề",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "tháng 7 năm 2020",
        "end": "tháng 1 năm 2022",
        "current": false,
        "points": "Xây dựng mô hình dự báo cho 3 khách hàng bán lẻ với độ chính xác hơn 90%\nĐã làm sạch và chuẩn bị các tập dữ liệu hơn 10M dòng để xây dựng mô hình\nViết tài liệu để khách hàng có thể tự chạy lại các mô hình"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Khoa học Dữ liệu",
        "start": "2018",
        "end": "2020",
        "notes": "Luận văn về hệ thống gợi ý. Cử nhân Toán học (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nHọc máy và thống kê\nSQL và Spark\nTriển khai mô hình (Docker, AWS)\nKiểm thử A/B\nTrực quan hóa dữ liệu",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Ả Rập (thành thạo)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Lập trình viên Web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Lập trình viên web với 4 năm kinh nghiệm xây dựng các trang web nhanh, dễ tiếp cận bằng HTML, CSS và JavaScript. Đã xây dựng lại quy trình thanh toán cửa hàng's giúp tăng 18% chuyển đổi và duy trì 12 trang web của khách hàng với 99.9% thời gian hoạt động. Mạnh về thiết kế đáp ứng, hiệu suất và kiến thức cơ bản về SEO.",
    "experience": [
      {
        "role": "Lập trình viên Web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "tháng 3 năm 2022",
        "end": "",
        "current": true,
        "points": "Xây dựng các trang web đáp ứng bằng HTML, CSS, JavaScript và WordPress cho 12 khách hàng\nXây dựng lại quy trình thanh toán của cửa hàng giúp tăng 18% chuyển đổi\nGiảm thời gian tải trang trung bình từ 4.2s xuống 1.8s bằng cách tối ưu hình ảnh và mã nguồn\nDuy trì tất cả các trang web của khách hàng ở mức 99.9% thời gian hoạt động với giám sát và sao lưu"
      },
      {
        "role": "Lập trình viên Web Mới vào nghề",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "tháng 6 năm 2021",
        "end": "tháng 2 năm 2022",
        "current": false,
        "points": "Xây dựng trang đích và sửa lỗi cho hơn 20 trang web doanh nghiệp nhỏ\nHọc Git, thiết kế đáp ứng và SEO cơ bản qua các dự án thực tế\nTrả lời email của khách hàng và cập nhật nội dung trong ngày"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Khoa học Máy tính",
        "start": "2017",
        "end": "2021",
        "notes": "Các môn học về phát triển web, cơ sở dữ liệu và tương tác người-máy."
      }
    ],
    "skills": "HTML, CSS và JavaScript\nReact và WordPress\nThiết kế đáp ứng\nTối ưu tốc độ trang\nGit và GitHub\nSEO cơ bản",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (thành thạo)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Nhà Thiết kế Đồ họa",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Nhà thiết kế đồ họa với 5 năm kinh nghiệm trong thương hiệu, bao bì và thiết kế mạng xã hội. Đã tạo nhận diện thương hiệu cho hơn 25 doanh nghiệp nhỏ và một thiết kế bao bì mới giúp tăng 14% doanh số trên kệ. Thành thạo Adobe Illustrator, Photoshop và Figma.",
    "experience": [
      {
        "role": "Nhà Thiết kế Đồ họa",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "tháng 1 năm 2022",
        "end": "",
        "current": true,
        "points": "Thiết kế nhận diện thương hiệu, bao bì và các chiến dịch mạng xã hội cho hơn 25 khách hàng\nThiết kế lại bao bì cho một thương hiệu thực phẩm giúp tăng 14% doanh số trên kệ\nSản xuất hơn 30 nội dung mạng xã hội mỗi tuần trên Instagram, TikTok và Facebook\nTrình bày ý tưởng cho khách hàng và sửa đổi nhanh chóng từ phản hồi"
      },
      {
        "role": "Nhà Thiết kế Đồ họa Mới vào nghề",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "tháng 7 năm 2020",
        "end": "tháng 12 năm 2021",
        "current": false,
        "points": "Thiết kế tờ rơi, thực đơn và bài đăng mạng xã hội cho các nhà hàng và cửa hàng địa phương\nChuẩn bị các tệp sẵn sàng in và kiểm tra bản in thử với nhà in\nXây dựng thư viện mẫu giúp giảm một phần ba thời gian thiết kế"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Thiết kế Đồ họa",
        "start": "2016",
        "end": "2020",
        "notes": "Portfolio về thiết kế thương hiệu và bao bì."
      }
    ],
    "skills": "Adobe Illustrator và Photoshop\nFigma\nThiết kế nhận diện thương hiệu\nThiết kế bao bì\nThiết kế mạng xã hội\nSản xuất in ấn",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Hàn (giao tiếp)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Nhà Thiết kế UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Nhà thiết kế UX với 5 năm kinh nghiệm nghiên cứu người dùng và thiết kế các sản phẩm di động và web. Đã thiết kế lại một luồng hội nhập giúp giảm 35% tỷ lệ rời bỏ và thực hiện hơn 40 bài kiểm tra khả năng sử dụng. Thành thạo Figma, nghiên cứu người dùng, khung dây và tạo nguyên mẫu.",
    "experience": [
      {
        "role": "Nhà Thiết kế UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "tháng 2 năm 2022",
        "end": "",
        "current": true,
        "points": "Thiết kế lại quy trình hội nhập trên di động, giảm 35% tỷ lệ rời bỏ trong 3 tháng\nThực hiện hơn 40 bài kiểm tra khả năng sử dụng và phỏng vấn người dùng mỗi năm\nXây dựng khung dây và nguyên mẫu trong Figma cho 2 nhóm sản phẩm\nLàm việc hằng ngày với các kỹ sư và quản lý sản phẩm về việc bàn giao"
      },
      {
        "role": "Nhà Thiết kế UX Mới vào nghề",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "tháng 8 năm 2020",
        "end": "tháng 1 năm 2022",
        "current": false,
        "points": "Thiết kế màn hình và luồng cho 5 ứng dụng của khách hàng\nThực hiện các bài kiểm tra khả năng sử dụng đầu tiên và viết báo cáo phát hiện cho khách hàng\nXây dựng thư viện thành phần giúp tăng tốc việc bàn giao thiết kế"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Tâm lý học",
        "start": "2016",
        "end": "2020",
        "notes": "Chứng chỉ thiết kế UX (General Assembly, 2020). Các môn học về tương tác người-máy."
      }
    ],
    "skills": "Nghiên cứu người dùng và kiểm tra khả năng sử dụng\nKhung dây và tạo nguyên mẫu (Figma)\nKiến trúc thông tin\nHệ thống thiết kế\nLập bản đồ hành trình\nHội thảo với các bên liên quan",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Quản lý Marketing",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Quản lý marketing với 8 năm kinh nghiệm trong các chiến dịch B2B và người tiêu dùng. Đã tăng 60% khách hàng tiềm năng đủ điều kiện trong một năm, ra mắt một dòng sản phẩm đạt $3M doanh số năm đầu tiên và quản lý ngân sách hàng năm $500,000 cho một nhóm 5 người.",
    "experience": [
      {
        "role": "Quản lý Marketing",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "tháng 3 năm 2021",
        "end": "",
        "current": true,
        "points": "Dẫn dắt một nhóm 5 người và ngân sách marketing hàng năm $500,000\nTăng 60% khách hàng tiềm năng đủ điều kiện trong một năm nhờ nội dung và các chiến dịch trả phí\nRa mắt một dòng sản phẩm đạt $3M doanh số trong năm đầu tiên\nGiảm 28% chi phí cho mỗi khách hàng tiềm năng bằng cách xây dựng lại việc nhắm mục tiêu chiến dịch"
      },
      {
        "role": "Chuyên viên Marketing",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "tháng 6 năm 2017",
        "end": "tháng 2 năm 2021",
        "current": false,
        "points": "Thực hiện các chiến dịch email tới 80,000 người đăng ký với tỷ lệ mở 24%\nQuản lý các tài khoản mạng xã hội tăng từ 5,000 lên 40,000 người theo dõi\nTổ chức 6 gian hàng hội chợ thương mại mỗi năm, mỗi gian tạo ra hơn 300 khách hàng tiềm năng"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Các môn học về hành vi người tiêu dùng, phân tích và quản lý thương hiệu."
      }
    ],
    "skills": "Chiến lược chiến dịch và lập kế hoạch\nMarketing nội dung và email\nQuảng cáo trả phí (Google, Meta)\nPhân tích marketing (GA4)\nLãnh đạo nhóm\nQuản lý ngân sách",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Quản lý Dự án",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Quản lý dự án (PMP) với 7 năm kinh nghiệm bàn giao các dự án phần mềm và xây dựng đúng hạn và trong ngân sách. Đã quản lý 15 dự án trị giá lên tới $4M, với tỷ lệ bàn giao đúng hạn 94%. Thành thạo Agile, quản lý rủi ro và giao tiếp với các bên liên quan.",
    "experience": [
      {
        "role": "Quản lý Dự án",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Quản lý 15 dự án trị giá lên tới $4M, với tỷ lệ bàn giao đúng hạn 94%\nĐiều hành các sprint Agile cho 3 nhóm và báo cáo tiến độ cho lãnh đạo hằng tuần\nGiảm 30% tình trạng vượt tiến độ dự án nhờ đánh giá rủi ro sớm hơn\nPhối hợp với nhà cung cấp, khách hàng và các nhóm nội bộ ở 4 múi giờ"
      },
      {
        "role": "Điều phối viên Dự án",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "tháng 7 năm 2018",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Theo dõi tiến độ, ngân sách và giấy phép cho 8 dự án xây dựng\nChuẩn bị báo cáo tình trạng và ghi chú cuộc họp cho khách hàng\nGiải quyết các xung đột lịch trình giúp tiết kiệm 2 tuần trong một công trình trường học"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Quản trị Kinh doanh",
        "start": "2014",
        "end": "2018",
        "notes": "Có chứng chỉ PMP (2021). ScrumMaster được chứng nhận."
      }
    ],
    "skills": "Lập kế hoạch và tiến độ dự án\nAgile và Scrum\nQuản lý rủi ro\nKiểm soát ngân sách\nGiao tiếp với các bên liên quan\nMS Project và Jira",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Quản lý Nhân sự",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Quản lý nhân sự với 9 năm kinh nghiệm trong tuyển dụng, quan hệ nhân viên và phúc lợi. Đã rút ngắn thời gian tuyển dụng từ 45 xuống 28 ngày, nâng tỷ lệ giữ chân thêm 15% và phụ trách nhân sự cho 250 nhân viên tại 3 địa điểm. Kiến thức về luật lao động và chính sách ở cấp độ CIPD.",
    "experience": [
      {
        "role": "Quản lý Nhân sự",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "tháng 2 năm 2020",
        "end": "",
        "current": true,
        "points": "Phụ trách nhân sự cho 250 nhân viên tại 3 địa điểm, với một nhóm 3 người\nRút ngắn thời gian tuyển dụng từ 45 xuống 28 ngày bằng cách xây dựng lại quy trình phỏng vấn\nNâng tỷ lệ giữ chân thêm 15% nhờ chương trình hội nhập và đánh giá mới\nXử lý quan hệ nhân viên, khiếu nại và cập nhật chính sách"
      },
      {
        "role": "Chuyên viên Nhân sự Tổng hợp",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "tháng 6 năm 2016",
        "end": "tháng 1 năm 2020",
        "current": false,
        "points": "Tuyển hơn 120 nhân viên mỗi năm cho các khách sạn và nhà hàng\nThực hiện kiểm tra lương và đăng ký phúc lợi cho 400 nhân viên\nGiải quyết tranh chấp nhân viên và giữ tỷ lệ nghỉ việc dưới mức trung bình của ngành"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Nhân sự",
        "start": "2012",
        "end": "2016",
        "notes": "Có chứng chỉ SHRM-CP. Các môn học về luật lao động và hành vi tổ chức."
      }
    ],
    "skills": "Tuyển dụng và hội nhập\nQuan hệ nhân viên\nPhúc lợi và lương\nLuật lao động\nQuản lý hiệu suất\nHRIS (Workday, BambooHR)",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Luật sư Cộng sự",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Luật sư cộng sự với 6 năm kinh nghiệm trong tố tụng thương mại và luật hợp đồng. Đã quản lý hơn 40 vụ việc, thắng phán quyết rút gọn trong 8 vụ, và soạn thảo các hợp đồng trị giá $25M. Được nhận vào Đoàn Luật sư Illinois; thành thạo nghiên cứu pháp lý, soạn thảo văn bản và tư vấn khách hàng.",
    "experience": [
      {
        "role": "Luật sư Cộng sự",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "tháng 9 năm 2020",
        "end": "",
        "current": true,
        "points": "Quản lý hơn 40 vụ tố tụng thương mại từ khi nộp đơn đến khi hòa giải\nThắng phán quyết rút gọn trong 8 vụ và hòa giải thuận lợi thêm 20 vụ nữa\nSoạn thảo và đàm phán các hợp đồng trị giá lên tới $25M\nTư vấn cho khách hàng trực tiếp và bằng văn bản về rủi ro và chiến lược"
      },
      {
        "role": "Thư ký Luật",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "tháng 8 năm 2019",
        "end": "tháng 8 năm 2020",
        "current": false,
        "points": "Nghiên cứu án lệ và soạn thảo bản ghi nhớ cho 2 thẩm phán\nXem xét các đơn kiến nghị và chuẩn bị tóm tắt cho thẩm phán cho hơn 100 phiên điều trần\nQuan sát các phiên tòa và hội nghị hòa giải tại các bộ phận dân sự"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Luật",
        "start": "2016",
        "end": "2019",
        "notes": "Được nhận vào Đoàn Luật sư Illinois (2019). Tạp chí luật, biên tập viên bài viết."
      }
    ],
    "skills": "Tố tụng thương mại\nSoạn thảo và đàm phán hợp đồng\nNghiên cứu pháp lý (Westlaw, LexisNexis)\nTư vấn khách hàng\nLấy lời khai và thu thập chứng cứ\nHồ sơ tòa án và thủ tục tố tụng",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Dược sĩ Lâm sàng",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Dược sĩ lâm sàng (PharmD) với 7 năm kinh nghiệm trong dược bệnh viện và dược cộng đồng. Xem xét hơn 100 y lệnh thuốc mỗi ngày, giảm 25% các biến cố bất lợi của thuốc nhờ quy trình kiểm tra mới và tư vấn cho bệnh nhân về cách dùng thuốc an toàn. Có giấy phép hành nghề tại Pennsylvania.",
    "experience": [
      {
        "role": "Dược sĩ Lâm sàng",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "tháng 1 năm 2020",
        "end": "",
        "current": true,
        "points": "Xem xét hơn 100 y lệnh thuốc mỗi ngày về an toàn, liều lượng và tương tác\nGiảm 25% các biến cố bất lợi của thuốc nhờ quy trình kiểm tra kép mới\nTư vấn cho bác sĩ và điều dưỡng về lựa chọn thuốc cho bệnh nhân phức tạp\nĐiều hành bệnh viện's các vòng quản lý sử dụng kháng sinh hai lần mỗi tuần"
      },
      {
        "role": "Dược sĩ Nhân viên",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "tháng 7 năm 2018",
        "end": "tháng 12 năm 2019",
        "current": false,
        "points": "Cấp phát hơn 200 đơn thuốc mỗi ngày mà không có lỗi cấp phát nào\nTư vấn cho bệnh nhân về thuốc mới, tác dụng phụ và cách bảo quản\nTiêm vắc-xin cúm và thực hiện đo huyết áp"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Dược học",
        "start": "2014",
        "end": "2018",
        "notes": "Dược sĩ có giấy phép (Pennsylvania). Chuyên gia Dược trị liệu được Hội đồng Chứng nhận (BCPS)."
      }
    ],
    "skills": "Xem xét thuốc và an toàn thuốc\nDược lý lâm sàng\nTư vấn bệnh nhân\nHệ thống nhà thuốc (Epic, PioneerRx)\nQuản lý sử dụng kháng sinh\nDịch vụ tiêm chủng",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Nha sĩ Tổng quát",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Nha sĩ tổng quát (DDS) với 8 năm kinh nghiệm trong nha khoa phục hồi, thẩm mỹ và dự phòng. Điều trị hơn 25 bệnh nhân mỗi ngày tại một phòng khám có 2,000 bệnh nhân, với điểm hài lòng của bệnh nhân đạt 98%. Thành thạo bọc răng sứ, cấy ghép, điều trị tủy và khay niềng trong suốt.",
    "experience": [
      {
        "role": "Nha sĩ Tổng quát",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "tháng 2 năm 2019",
        "end": "",
        "current": true,
        "points": "Điều trị hơn 25 bệnh nhân mỗi ngày: trám răng, bọc răng, điều trị tủy và nhổ răng\nDuy trì điểm hài lòng của bệnh nhân 98% qua hơn 1,200 đánh giá\nĐặt hơn 15 trụ cấy ghép mỗi tháng và quản lý các ca khay niềng trong suốt\nGiám sát 2 chuyên viên vệ sinh răng và 4 trợ lý nha khoa"
      },
      {
        "role": "Nha sĩ Cộng sự",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "tháng 7 năm 2017",
        "end": "tháng 1 năm 2019",
        "current": false,
        "points": "Cung cấp dịch vụ nha khoa tổng quát cho một phòng khám có 1,500 bệnh nhân\nÁp dụng bọc răng sứ trong ngày, giảm 40% số lần quay lại\nTổ chức các chuyến thăm cộng đồng tại trường học về trẻ em's sức khỏe răng miệng"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Nha khoa",
        "start": "2013",
        "end": "2017",
        "notes": "Nha sĩ có giấy phép (Arizona). Có chứng chỉ Invisalign. Có chứng chỉ CPR/BLS."
      }
    ],
    "skills": "Nha khoa phục hồi (bọc răng, trám răng)\nĐiều trị tủy răng\nCấy ghép nha khoa\nKhay niềng trong suốt\nChăm sóc bệnh nhân và giao tiếp\nX-quang kỹ thuật số và CEREC",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Chuyên viên Vật lý Trị liệu",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Chuyên viên vật lý trị liệu (DPT) với 6 năm kinh nghiệm trong phục hồi chức năng chỉnh hình và thể thao. Điều trị 12-15 bệnh nhân mỗi ngày, với 90% đạt mục tiêu trong số buổi đã lên kế hoạch. Thành thạo trị liệu bằng tay, kê đơn bài tập vận động và kiểm tra trở lại thể thao.",
    "experience": [
      {
        "role": "Chuyên viên Vật lý Trị liệu",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "tháng 3 năm 2021",
        "end": "",
        "current": true,
        "points": "Điều trị 12-15 bệnh nhân mỗi ngày về chấn thương thể thao, phục hồi sau phẫu thuật và đau lưng\n90% bệnh nhân đạt mục tiêu trong số buổi trị liệu đã lên kế hoạch\nThiết kế kiểm tra trở lại thể thao được 3 đội địa phương sử dụng\nHướng dẫn 2 sinh viên mới tốt nghiệp và giám sát các đợt thực tập của sinh viên"
      },
      {
        "role": "Chuyên viên Vật lý Trị liệu Nhân viên",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "tháng 8 năm 2019",
        "end": "tháng 2 năm 2021",
        "current": false,
        "points": "Cung cấp phục hồi chức năng nội trú cho bệnh nhân sau phẫu thuật và đột quỵ\nĐiều hành các lớp tập thể dục nhóm cho hơn 20 bệnh nhân cao tuổi mỗi tuần\nGhi chép tiến triển trong Epic và bàn giao cho các nhóm ở khoa"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Vật lý Trị liệu",
        "start": "2016",
        "end": "2019",
        "notes": "Chuyên viên vật lý trị liệu có giấy phép (Oregon). Chuyên gia Lâm sàng Chỉnh hình (OCS)."
      }
    ],
    "skills": "Phục hồi chức năng chỉnh hình và thể thao\nTrị liệu bằng tay\nKê đơn bài tập vận động\nKiểm tra trở lại thể thao\nGiáo dục bệnh nhân\nTài liệu hóa (Epic)",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Bếp trưởng",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Bếp trưởng với 10 năm kinh nghiệm trong các nhà bếp Creole và Mỹ hiện đại. Dẫn dắt một đội bếp 12 người trong nhà hàng 200 chỗ ngồi, giảm 15% chi phí thực phẩm nhờ đặt hàng chặt chẽ hơn và giành giải 'Thực đơn Mới Tốt nhất' từ cẩm nang ẩm thực của thành phố vào năm 2025.",
    "experience": [
      {
        "role": "Bếp trưởng",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Dẫn dắt một đội bếp 12 người trong nhà hàng 200 chỗ ngồi phục vụ hơn 300 suất mỗi đêm\nGiảm 15% chi phí thực phẩm nhờ đặt hàng chặt chẽ hơn và thực đơn theo mùa\nGiành giải 'Thực đơn Mới Tốt nhất' từ cẩm nang ẩm thực của thành phố vào năm 2025\nThiết kế thực đơn, đào tạo đầu bếp và điều phối khu vực ra món trong ca phục vụ thứ Sáu và thứ Bảy"
      },
      {
        "role": "Bếp phó",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "tháng 6 năm 2017",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Điều hành nhà bếp khi bếp trưởng vắng mặt, phụ trách 150 suất mỗi đêm\nQuản lý hàng tồn kho, đặt hàng và quan hệ nhà cung cấp\nĐào tạo 8 đầu bếp dây chuyền và giảm một phần ba tỷ lệ nghỉ việc của nhân viên"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Bằng Trung cấp",
        "field": "Nghệ thuật Ẩm thực",
        "start": "2014",
        "end": "2016",
        "notes": "Có chứng chỉ Quản lý An toàn Thực phẩm ServSafe."
      }
    ],
    "skills": "Thiết kế thực đơn và tính giá thành\nẨm thực Creole và Mỹ hiện đại\nLãnh đạo nhà bếp (đội bếp 12 người)\nAn toàn thực phẩm (ServSafe)\nQuản lý nhà cung cấp\nPhục vụ tiệc và sự kiện",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (thành thạo)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Cảnh sát",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Cảnh sát với 8 năm kinh nghiệm trong tuần tra, cảnh sát cộng đồng và điều tra. Ứng phó hơn 30 cuộc gọi mỗi tuần, với các bằng khen về giảm leo thang và tiếp cận cộng đồng. Được đào tạo về can thiệp khủng hoảng, sơ cứu và viết báo cáo.",
    "experience": [
      {
        "role": "Cảnh sát",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "tháng 6 năm 2019",
        "end": "",
        "current": true,
        "points": "Tuần tra một khu vực có 40,000 cư dân, ứng phó hơn 30 cuộc gọi mỗi tuần\nNhận 2 bằng khen về giảm leo thang và tiếp cận cộng đồng\nĐiều tra các vụ trộm cắp và hành hung, viết báo cáo được dùng trong hơn 50 vụ truy tố\nHướng dẫn 3 sĩ quan mới qua đào tạo thực địa"
      },
      {
        "role": "Sĩ quan Tuần tra",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "tháng 8 năm 2017",
        "end": "tháng 5 năm 2019",
        "current": false,
        "points": "Tuần tra các tuyến đường của quận và ứng phó các cuộc gọi khẩn cấp\nTống đạt giấy tờ tòa án và hỗ trợ vận chuyển tù nhân\nHoàn thành đào tạo can thiệp khủng hoảng và sơ cứu"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Chứng chỉ",
        "field": "Thực thi Pháp luật",
        "start": "2017",
        "end": "2017",
        "notes": "Tốt nghiệp Học viện Đào tạo Sĩ quan Hòa bình Ohio. Được đào tạo Đội Can thiệp Khủng hoảng."
      }
    ],
    "skills": "Tuần tra và ứng phó khẩn cấp\nCảnh sát cộng đồng\nCan thiệp khủng hoảng và giảm leo thang\nViết báo cáo\nĐiều tra\nSơ cứu và CPR",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Lính cứu hỏa / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Lính cứu hỏa và EMT với 7 năm kinh nghiệm trong chữa cháy, cứu hộ và ứng phó y tế khẩn cấp. Đã ứng phó hơn 900 cuộc gọi, bao gồm cháy công trình, cứu hộ phương tiện và cấp cứu y tế. Được đào tạo về vật liệu nguy hiểm với hồ sơ an toàn trong sạch.",
    "experience": [
      {
        "role": "Lính cứu hỏa / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "tháng 3 năm 2020",
        "end": "",
        "current": true,
        "points": "Ứng phó hơn 900 cuộc gọi cháy, cứu hộ và y tế trong một khu vực có 3 trạm\nCung cấp chăm sóc y tế khẩn cấp với tư cách EMT được chứng nhận trong 60% số cuộc gọi\nĐược đào tạo về vật liệu nguy hiểm; dẫn dắt việc khử nhiễm tại các sự cố hóa chất\nĐào tạo tân binh về xử lý vòi chữa cháy, thang và kỹ thuật tìm kiếm"
      },
      {
        "role": "Lính cứu hỏa Tình nguyện",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "tháng 6 năm 2018",
        "end": "tháng 2 năm 2020",
        "current": false,
        "points": "Ứng phó các vụ cháy rừng và cháy công trình với tư cách tình nguyện viên\nHoàn thành đào tạo Lính cứu hỏa I & II và EMT-Basic\nGiúp tổ chức các buổi nói chuyện về an toàn cháy nổ cộng đồng tại trường học"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Chứng chỉ",
        "field": "Khoa học Phòng cháy Chữa cháy",
        "start": "2017",
        "end": "2018",
        "notes": "Lính cứu hỏa I & II. Có chứng chỉ EMT-Basic. Được đào tạo Ứng phó Vật liệu Nguy hiểm."
      }
    ],
    "skills": "Chữa cháy và cứu hộ\nChăm sóc y tế khẩn cấp (EMT)\nỨng phó vật liệu nguy hiểm\nThang, vòi chữa cháy và thông gió\nAn toàn cháy nổ cộng đồng\nLàm việc nhóm dưới áp lực",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Thợ Ống nước có Giấy phép",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Thợ ống nước bậc thầy có giấy phép với 11 năm kinh nghiệm trong hệ thống ống nước dân dụng và thương mại. Hoàn thành hơn 600 công trình mỗi năm, từ lắp đặt thô đến lắp nồi hơi, với tỷ lệ khắc phục ngay lần đến đầu tiên 98%. Thành thạo lắp đặt đường ống, thông tắc cống và tuân thủ quy chuẩn.",
    "experience": [
      {
        "role": "Thợ Ống nước Bậc thầy",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "tháng 1 năm 2019",
        "end": "",
        "current": true,
        "points": "Hoàn thành hơn 600 công trình dân dụng và thương mại mỗi năm\nLắp đặt nồi hơi, máy nước nóng và hệ thống đường ống thô hoàn chỉnh cho phòng tắm\nDuy trì tỷ lệ khắc phục ngay lần đến đầu tiên 98% đối với các cuộc gọi dịch vụ\nGiám sát 3 thợ học nghề và nghiệm thu công việc của họ"
      },
      {
        "role": "Thợ Ống nước Lành nghề",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "tháng 6 năm 2014",
        "end": "tháng 12 năm 2018",
        "current": false,
        "points": "Thực hiện hệ thống ống nước cho hơn 40 ngôi nhà mới xây mỗi năm\nThông tắc cống và sửa rò rỉ cho nhà ở và nhà hàng\nHọc lắp đặt đường gas và ngăn dòng chảy ngược"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Chứng chỉ",
        "field": "Công nghệ Ống nước",
        "start": "2013",
        "end": "2014",
        "notes": "Giấy phép thợ ống nước bậc thầy (Tennessee). Có chứng chỉ ngăn dòng chảy ngược."
      }
    ],
    "skills": "Hệ thống ống nước dân dụng và thương mại\nLắp đặt đường ống và hàn\nThông tắc cống và kiểm tra bằng camera\nLắp đặt nồi hơi và máy nước nóng\nLắp đặt đường gas\nTuân thủ quy chuẩn ống nước",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Thợ mộc Lành nghề",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Thợ mộc lành nghề với 9 năm kinh nghiệm trong dựng khung, hoàn thiện và làm tủ theo yêu cầu. Đã dựng khung hơn 30 ngôi nhà và lắp đặt nhà bếp trong hơn 60 ngôi nhà, với danh tiếng về đo đạc chính xác và hoàn thiện gọn gàng. Thành thạo đọc bản vẽ và làm việc theo quy chuẩn.",
    "experience": [
      {
        "role": "Thợ mộc Lành nghề",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "tháng 2 năm 2019",
        "end": "",
        "current": true,
        "points": "Dựng khung cho hơn 30 ngôi nhà và lắp đặt nhà bếp trong hơn 60 ngôi nhà\nLàm tủ và nẹp trang trí theo yêu cầu với dung sai 1/16 inch\nĐọc và tuân theo bản vẽ kiến trúc, đánh dấu lỗi trước khi chúng gây tốn kém\nĐào tạo 2 thợ học nghề về kỹ thuật dựng khung và hoàn thiện"
      },
      {
        "role": "Thợ mộc Tập sự",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "tháng 6 năm 2016",
        "end": "tháng 1 năm 2019",
        "current": false,
        "points": "Hỗ trợ dựng khung, làm tường thạch cao và lát sàn trong các dự án cải tạo\nHọc cách sử dụng cưa, máy phay và súng bắn đinh một cách an toàn\nHoàn thành 8,000 giờ học nghề và vượt qua kỳ thi thợ lành nghề"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Chứng chỉ",
        "field": "Nghề Mộc",
        "start": "2015",
        "end": "2016",
        "notes": "Thợ mộc lành nghề. Có chứng chỉ OSHA 10."
      }
    ],
    "skills": "Dựng khung và công việc kết cấu\nMộc hoàn thiện và nẹp trang trí\nLàm tủ theo yêu cầu\nĐọc bản vẽ kiến trúc\nDụng cụ điện và an toàn\nTường thạch cao và sàn",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Giáo viên Trung học (Toán)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Giáo viên trung học với 8 năm kinh nghiệm dạy toán cho các lớp 9-12. Đã nâng tỷ lệ đậu môn đại số từ 64% lên 83% và huấn luyện đội toán vào 2 trận chung kết cấp bang. Thành thạo dạy học phân hóa, luyện thi và liên lạc với phụ huynh.",
    "experience": [
      {
        "role": "Giáo viên Toán (Lớp 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "tháng 8 năm 2019",
        "end": "",
        "current": true,
        "points": "Dạy đại số, hình học và tiền giải tích cho 120 học sinh ở 5 lớp\nNâng tỷ lệ đậu môn đại số từ 64% lên 83% trong 3 năm\nHuấn luyện đội toán vào 2 trận chung kết cấp bang\nĐiều hành dạy kèm sau giờ học cho 30 học sinh mỗi tuần"
      },
      {
        "role": "Giáo viên Toán (Lớp 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "tháng 8 năm 2017",
        "end": "tháng 6 năm 2019",
        "current": false,
        "points": "Dạy đại số và hình học cho 100 học sinh mỗi năm\nÁp dụng bài kiểm tra hàng tuần giúp giảm một nửa tình trạng thiếu bài tập về nhà\nTổ chức trường's hội chợ toán học đầu tiên với 200 học sinh"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Giáo dục Toán học",
        "start": "2013",
        "end": "2017",
        "notes": "Giấy phép giảng dạy của bang (New Hampshire, lớp 7-12, toán học)."
      }
    ],
    "skills": "Giảng dạy toán (đại số đến tiền giải tích)\nLuyện thi\nDạy học phân hóa\nQuản lý lớp học\nLiên lạc với phụ huynh\nGoogle Classroom và Desmos",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Giáo viên Mầm non",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Giáo viên mầm non với 6 năm kinh nghiệm chăm sóc trẻ em từ 3-5 tuổi. Thành thạo học qua vui chơi, hướng dẫn hành vi và liên lạc với phụ huynh. Đã xây dựng một chương trình ngữ âm giúp nâng điểm sẵn sàng vào học cho cả lớp của tôi.",
    "experience": [
      {
        "role": "Giáo viên Mầm non",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "tháng 8 năm 2020",
        "end": "",
        "current": true,
        "points": "Giảng dạy và chăm sóc một lớp 18 trẻ em từ 3-5 tuổi\nXây dựng chương trình ngữ âm giúp nâng điểm sẵn sàng vào học cho cả lớp\nLên kế hoạch chủ đề hàng tuần, thủ công và vui chơi ngoài trời\nChia sẻ cập nhật hằng ngày và báo cáo tiến độ theo kỳ với phụ huynh"
      },
      {
        "role": "Trợ lý Giáo viên Mầm non",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "tháng 6 năm 2018",
        "end": "tháng 7 năm 2020",
        "current": false,
        "points": "Hỗ trợ giáo viên chính với một lớp 20 trẻ em\nTổ chức giờ kể chuyện, hát và các hoạt động mỹ thuật hằng ngày\nGiữ hồ sơ an toàn và vệ sinh theo tiêu chuẩn của bang"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Bằng Cao đẳng",
        "field": "Giáo dục Mầm non",
        "start": "2016",
        "end": "2018",
        "notes": "Chứng chỉ Cộng tác viên Phát triển Trẻ em (CDA). Có chứng chỉ sơ cứu và CPR."
      }
    ],
    "skills": "Học qua vui chơi\nHướng dẫn hành vi\nNgữ âm và đọc viết sớm\nLiên lạc với phụ huynh\nAn toàn lớp học\nLên kế hoạch thủ công mỹ thuật",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Nhân viên Công tác Xã hội về Trẻ em và Gia đình",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Nhân viên công tác xã hội có giấy phép với 7 năm kinh nghiệm hỗ trợ trẻ em và gia đình. Quản lý khối lượng hồ sơ gồm 25 gia đình, phối hợp các dịch vụ giữa trường học và nhà cung cấp y tế, và hoàn thiện các báo cáo tòa án mà thẩm phán dựa vào. Thành thạo đánh giá, hỗ trợ khủng hoảng và bảo vệ an toàn.",
    "experience": [
      {
        "role": "Nhân viên Công tác Xã hội về Trẻ em và Gia đình",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "tháng 1 năm 2020",
        "end": "",
        "current": true,
        "points": "Quản lý khối lượng hồ sơ gồm 25 gia đình, thăm nhà và trường học hằng tuần\nHoàn thiện báo cáo tòa án và cung cấp lời khai tại tòa án gia đình\nPhối hợp hỗ trợ nhà ở, y tế và trường học cho các gia đình dễ bị tổn thương\nGiảm 20% thời gian chờ đánh giá nhờ hệ thống phân loại mới"
      },
      {
        "role": "Nhân viên Công tác Xã hội phụ trách Hồ sơ",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "tháng 7 năm 2018",
        "end": "tháng 12 năm 2019",
        "current": false,
        "points": "Hỗ trợ hơn 40 gia đình ở nhà tạm với phúc lợi và giới thiệu dịch vụ\nTổ chức các buổi hội thảo hàng tuần về nuôi dạy con và lập ngân sách\nGiữ ghi chép hồ sơ chính xác cho kiểm toán và báo cáo tài trợ"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Công tác Xã hội",
        "start": "2016",
        "end": "2018",
        "notes": "Nhân viên Công tác Xã hội có Giấy phép (Ohio). Các môn học về phúc lợi trẻ em và hệ thống gia đình."
      }
    ],
    "skills": "Quản lý hồ sơ (25 gia đình)\nBảo vệ trẻ em\nBáo cáo cho tòa án gia đình\nHỗ trợ khủng hoảng\nPhối hợp đa cơ quan\nGiới thiệu phúc lợi và nhà ở",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Trợ lý Pháp lý",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Trợ lý pháp lý với 6 năm kinh nghiệm trong hỗ trợ tố tụng và hồ sơ doanh nghiệp. Quản lý việc thu thập chứng cứ cho hơn 30 vụ, soạn thảo văn bản tố tụng và hợp đồng, và duy trì thời hạn nộp hồ sơ với thành tích đúng hạn 100%. Thành thạo Westlaw, thu thập chứng cứ điện tử và phần mềm quản lý vụ việc.",
    "experience": [
      {
        "role": "Trợ lý Pháp lý",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "tháng 2 năm 2021",
        "end": "",
        "current": true,
        "points": "Quản lý việc thu thập chứng cứ cho hơn 30 vụ tố tụng, xem xét hơn 10,000 tài liệu\nSoạn thảo văn bản tố tụng, đơn kiến nghị và hợp đồng để luật sư xem xét\nDuy trì thành tích đúng hạn 100% đối với hồ sơ tòa án và thời hạn\nPhối hợp với nhân chứng và chuẩn bị hồ sơ xét xử"
      },
      {
        "role": "Trợ lý Pháp lý",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "tháng 8 năm 2019",
        "end": "tháng 1 năm 2021",
        "current": false,
        "points": "Phỏng vấn tiếp nhận cho hơn 20 khách hàng mỗi tuần\nChuẩn bị biểu mẫu và hồ sơ cho các vụ việc nhà ở và gia đình\nDịch tài liệu pháp lý cho khách hàng nói tiếng Tây Ban Nha"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Bằng Cao đẳng",
        "field": "Nghiên cứu Trợ lý Pháp lý",
        "start": "2017",
        "end": "2019",
        "notes": "Trợ lý Pháp lý được NALA Chứng nhận (CP). Chương trình được ABA phê duyệt."
      }
    ],
    "skills": "Hỗ trợ tố tụng và thu thập chứng cứ\nSoạn thảo pháp lý\nThu thập chứng cứ điện tử (Relativity)\nQuản lý hồ sơ (Clio)\nHồ sơ tòa án và thời hạn\nNghiên cứu pháp lý (Westlaw)",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (thành thạo)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Nhân viên Kế toán Sổ sách",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Nhân viên kế toán sổ sách với 5 năm kinh nghiệm trong công nợ phải trả, xuất hóa đơn và đối chiếu ngân hàng. Xử lý hơn 300 hóa đơn mỗi tháng với độ chính xác 99.8% và giữ sổ sách gọn gàng cho việc khóa sổ cuối tháng. Thành thạo QuickBooks, Excel và hỗ trợ lương.",
    "experience": [
      {
        "role": "Nhân viên Kế toán Sổ sách",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "tháng 4 năm 2021",
        "end": "",
        "current": true,
        "points": "Xử lý hơn 300 hóa đơn nhà cung cấp mỗi tháng với độ chính xác 99.8%\nĐối chiếu 6 tài khoản ngân hàng hằng tuần và đánh dấu chênh lệch trong ngày\nChuẩn bị dữ liệu lương cho 45 nhân viên và đôn đốc các khoản thanh toán quá hạn của khách hàng\nGiữ hồ sơ gọn gàng cho đợt kiểm toán cuối năm, với không phát hiện nào"
      },
      {
        "role": "Trợ lý Kế toán",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "tháng 6 năm 2019",
        "end": "tháng 3 năm 2021",
        "current": false,
        "points": "Nhập hóa đơn bán hàng và biên lai vào QuickBooks hằng ngày\nGiải đáp thắc mắc của nhà cung cấp về thanh toán qua điện thoại và email\nNộp hồ sơ giấy tờ và giữ cho kho lưu trữ luôn cập nhật"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Chứng chỉ",
        "field": "Kế toán Sổ sách",
        "start": "2018",
        "end": "2019",
        "notes": "Người dùng QuickBooks được Chứng nhận."
      }
    ],
    "skills": "Công nợ phải trả và phải thu\nĐối chiếu ngân hàng\nXuất hóa đơn (hơn 300 hóa đơn một tháng)\nQuickBooks và Excel\nHỗ trợ lương\nNhập liệu (65 từ/phút)",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Trợ lý Hành chính",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Trợ lý hành chính với 6 năm kinh nghiệm giữ cho văn phòng vận hành trơn tru. Quản lý lịch cho 4 quản lý, tổ chức các chuyến công tác và cuộc họp, xử lý hơn 100 email mỗi ngày. Được biết đến với sự chính xác, kín đáo và bình tĩnh dưới áp lực thời hạn.",
    "experience": [
      {
        "role": "Trợ lý Hành chính",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Quản lý lịch, công tác và cuộc họp cho 4 quản lý cấp cao\nXử lý hơn 100 email mỗi ngày, soạn thư trả lời và đánh dấu các việc ưu tiên\nChuẩn bị tài liệu cho hội đồng và ghi biên bản tại các cuộc họp hàng tháng\nPhụ trách vật tư văn phòng và đơn hàng nhà cung cấp, cắt giảm chi phí 12%"
      },
      {
        "role": "Lễ tân",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "tháng 8 năm 2019",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Đón tiếp hơn 60 bệnh nhân mỗi ngày và quản lý sổ hẹn\nTrả lời điện thoại và xử lý các thắc mắc về bảo hiểm\nGiữ hồ sơ bệnh nhân chính xác và bảo mật"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Bằng Cao đẳng",
        "field": "Quản trị Văn phòng",
        "start": "2017",
        "end": "2019",
        "notes": "Microsoft Office Specialist (Word, Excel)."
      }
    ],
    "skills": "Quản lý lịch và công tác\nEmail và thư tín\nBiên bản cuộc họp\nMicrosoft Office (Word, Excel, Outlook)\nNhập liệu (70 từ/phút)\nVật tư văn phòng và nhà cung cấp",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Giao dịch viên Ngân hàng",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Giao dịch viên ngân hàng với 4 năm kinh nghiệm phục vụ hơn 80 khách hàng mỗi ngày một cách chính xác và tận tâm. Ngăn kéo tiền cân bằng đến từng xu trong suốt 3 năm, không hề thiếu hụt. Thành thạo gửi tiền, rút tiền, kiểm tra gian lận và giới thiệu khách hàng tới các sản phẩm phù hợp.",
    "experience": [
      {
        "role": "Giao dịch viên Ngân hàng",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "tháng 3 năm 2022",
        "end": "",
        "current": true,
        "points": "Phục vụ hơn 80 khách hàng mỗi ngày: gửi tiền, rút tiền, thanh toán và chuyển khoản\nNgăn kéo tiền cân bằng đến từng xu trong 3 năm mà không hề thiếu hụt\nPhát hiện và ngăn chặn 12 vụ gian lận, tiết kiệm cho khách hàng hơn $90,000\nGiới thiệu khách hàng tới các sản phẩm tiết kiệm và cho vay, đạt mục tiêu giới thiệu hàng quý"
      },
      {
        "role": "Nhân viên Chăm sóc Khách hàng",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "tháng 6 năm 2021",
        "end": "tháng 2 năm 2022",
        "current": false,
        "points": "Mở tài khoản mới và phát hành thẻ ghi nợ cho các thành viên\nGiải đáp thắc mắc qua điện thoại về số dư và sao kê\nGiúp các thành viên thiết lập ngân hàng trực tuyến và di động"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Bằng Cao đẳng",
        "field": "Kinh doanh",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Xử lý và cân đối tiền mặt\nGửi tiền, rút tiền và thanh toán\nPhát hiện gian lận\nChăm sóc khách hàng\nPhần mềm ngân hàng (Fiserv)\nGiới thiệu sản phẩm",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Quản lý Bán hàng",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Quản lý bán hàng với 10 năm kinh nghiệm dẫn dắt các nhóm lên tới 15 nhân viên bán hàng. Đã tăng doanh thu khu vực từ $4M lên $7.5M trong 3 năm, nâng tỷ lệ thắng từ 22% lên 34% và giảm một nửa tỷ lệ nghỉ việc của nhân viên bán hàng nhờ huấn luyện và hội nhập tốt hơn.",
    "experience": [
      {
        "role": "Quản lý Bán hàng Khu vực",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Dẫn dắt một nhóm 15 nhân viên bán hàng khắp Texas và Oklahoma\nTăng doanh thu khu vực từ $4M lên $7.5M trong 3 năm\nNâng tỷ lệ thắng từ 22% lên 34% nhờ huấn luyện tốt hơn và đánh giá kênh bán hàng\nGiảm một nửa tỷ lệ nghỉ việc của nhân viên bán hàng nhờ chương trình hội nhập mới"
      },
      {
        "role": "Nhân viên Bán hàng",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "tháng 6 năm 2015",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Bán thiết bị công nghiệp cho hơn 80 khách hàng, đạt chỉ tiêu 5 năm liên tiếp\nNhân viên bán hàng hàng đầu trong khu vực 3 năm liên tiếp\nXây dựng mạng lưới giới thiệu mang về 25% doanh nghiệp mới"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Các môn học về quản lý bán hàng và đàm phán."
      }
    ],
    "skills": "Lãnh đạo nhóm bán hàng (15 nhân viên)\nTăng trưởng doanh thu và dự báo\nQuản lý kênh bán hàng (Salesforce)\nHuấn luyện và hội nhập\nĐàm phán\nLập kế hoạch khu vực",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Quản lý Xây dựng",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Quản lý xây dựng với 12 năm kinh nghiệm thực hiện các dự án thương mại và dân dụng trị giá lên tới $12M. Đã hoàn thành hơn 20 dự án với tỷ lệ đúng hạn 95%, không có thương tích mất thời gian lao động tại các công trường của tôi và ngân sách được giữ trong vòng 3%. Thành thạo lập tiến độ, quản lý nhà thầu phụ và an toàn lao động.",
    "experience": [
      {
        "role": "Quản lý Xây dựng",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "tháng 2 năm 2020",
        "end": "",
        "current": true,
        "points": "Thực hiện các dự án thương mại và dân dụng trị giá lên tới $12M\nHoàn thành hơn 20 dự án với tỷ lệ đúng hạn 95% và ngân sách trong vòng 3%\nQuản lý hơn 30 nhà thầu phụ và 50 công nhân tại 3 công trường đang hoạt động\nKhông có thương tích mất thời gian lao động nào tại tất cả các địa điểm trong 4 năm"
      },
      {
        "role": "Giám sát Công trường",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "tháng 6 năm 2013",
        "end": "tháng 1 năm 2020",
        "current": false,
        "points": "Điều hành hoạt động công trường hằng ngày cho các công trình văn phòng và bán lẻ\nĐiều phối giao hàng, kiểm tra và lịch trình của nhà thầu phụ\nGiữ hồ sơ an toàn trong sạch và vượt qua mọi đợt kiểm tra OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Xây dựng Công trình",
        "start": "2009",
        "end": "2013",
        "notes": "Có chứng chỉ OSHA 30. Ứng viên CCM (Quản lý Xây dựng được Chứng nhận)."
      }
    ],
    "skills": "Lập tiến độ dự án (MS Project, Procore)\nKiểm soát ngân sách\nQuản lý nhà thầu phụ\nAn toàn công trường (OSHA 30)\nĐọc bản vẽ kỹ thuật\nBáo cáo cho khách hàng",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Trợ lý Y tế được Chứng nhận",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Trợ lý y tế được chứng nhận với 5 năm kinh nghiệm trong y học gia đình và chăm sóc khẩn cấp. Đón tiếp hơn 25 bệnh nhân mỗi ngày, đo dấu hiệu sinh tồn, lấy máu và quản lý quầy lễ tân với điểm hài lòng của bệnh nhân đạt 97%. Thành thạo EHR, lấy máu tĩnh mạch và kiểm tra bảo hiểm.",
    "experience": [
      {
        "role": "Trợ lý Y tế được Chứng nhận",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "tháng 4 năm 2021",
        "end": "",
        "current": true,
        "points": "Đón tiếp hơn 25 bệnh nhân mỗi ngày: đo dấu hiệu sinh tồn, khai thác bệnh sử và chuẩn bị khám\nLấy máu và thực hiện các xét nghiệm cơ bản với tỷ lệ thành công ngay lần chích đầu tiên đạt 99%\nQuản lý quầy lễ tân, lịch hẹn và kiểm tra bảo hiểm\nDuy trì điểm hài lòng của bệnh nhân 97% qua hơn 800 khảo sát"
      },
      {
        "role": "Trợ lý Y tế",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "tháng 8 năm 2019",
        "end": "tháng 3 năm 2021",
        "current": false,
        "points": "Phân loại bệnh nhân đến trực tiếp và hỗ trợ bác sĩ trong các thủ thuật nhỏ\nTiêm chủng và xử lý việc lấy mẫu xét nghiệm\nGiữ các phòng khám đầy đủ vật tư, sạch sẽ và sẵn sàng giữa các bệnh nhân"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Chứng chỉ",
        "field": "Trợ lý Y tế",
        "start": "2018",
        "end": "2019",
        "notes": "Trợ lý Y tế được Chứng nhận (CMA, AAMA). Có chứng chỉ BLS. Được đào tạo lấy máu tĩnh mạch."
      }
    ],
    "skills": "Tiếp nhận bệnh nhân và đo dấu hiệu sinh tồn\nLấy máu tĩnh mạch\nEHR (eClinicalWorks)\nTiêm chủng\nXác minh bảo hiểm\nQuản lý quầy lễ tân",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (thành thạo)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Sinh viên",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Học sinh cuối cấp trung học đầy động lực với điểm số cao và kinh nghiệm làm việc bán thời gian. Học nhanh, đáng tin cậy và giỏi giao tiếp với mọi người. Đang tìm vai trò toàn thời gian đầu tiên hoặc một công việc bán thời gian song song với đại học.",
    "experience": [
      {
        "role": "Nhân viên Bán hàng Bán thời gian",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "tháng 9 năm 2024",
        "end": "",
        "current": true,
        "points": "Phục vụ hơn 50 khách hàng mỗi ca vào cuối tuần và sau giờ học\nXử lý tiền mặt, bổ sung hàng lên kệ và giữ cho khu trưng bày gọn gàng\nĐược tin tưởng mở cửa hàng vào các buổi sáng thứ Bảy"
      },
      {
        "role": "Gia sư Tình nguyện",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "tháng 1 năm 2024",
        "end": "tháng 6 năm 2025",
        "current": false,
        "points": "Dạy kèm toán cho học sinh nhỏ tuổi hơn hai lần mỗi tuần\nGiúp tổ chức chương trình đọc sách mùa hè cho 40 trẻ em"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Bằng Tốt nghiệp Trung học",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Bảng danh dự, 3 năm. Đội trưởng đội tranh biện."
      }
    ],
    "skills": "Chăm sóc khách hàng\nXử lý tiền mặt\nLàm việc nhóm\nQuản lý thời gian\nMicrosoft Office\nThuyết trình trước đám đông (đội tranh biện)",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Sinh viên mới Tốt nghiệp \u2014 Quản trị Kinh doanh",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Sinh viên mới tốt nghiệp ngành quản trị kinh doanh với kinh nghiệm thực tập trong marketing và vận hành. Đã tổ chức một cuộc thi kinh doanh trong trường với 200 người tham gia và hoàn thành một kỳ thực tập 6 tháng, nơi tôi đã giảm một nửa thời gian báo cáo. Háo hức bắt đầu sự nghiệp toàn thời gian và học hỏi nhanh chóng.",
    "experience": [
      {
        "role": "Thực tập sinh Marketing",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "tháng 1 năm 2025",
        "end": "tháng 6 năm 2025",
        "current": false,
        "points": "Quản lý công ty's các tài khoản mạng xã hội, tăng người theo dõi từ 2,000 lên 6,500\nXây dựng bảng điều khiển báo cáo giúp giảm một nửa thời gian báo cáo hàng tuần\nViết 20 bài blog thu hút hơn 15,000 lượt đọc"
      },
      {
        "role": "Trưởng nhóm Tình nguyện viên Sự kiện",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "tháng 9 năm 2024",
        "end": "tháng 5 năm 2025",
        "current": false,
        "points": "Tổ chức một cuộc thi kinh doanh với 200 người tham gia và 12 giám khảo\nQuản lý ngân sách $5,000 và một nhóm 8 tình nguyện viên"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Quản trị Kinh doanh",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 năm. Đồ án năm cuối về marketing cho doanh nghiệp nhỏ."
      }
    ],
    "skills": "Marketing trên mạng xã hội\nExcel và Google Sheets\nKỹ năng thuyết trình\nTổ chức sự kiện\nLàm việc nhóm\nPhân tích dữ liệu cơ bản",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Cộng tác viên Marketing Mới vào nghề",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Cộng tác viên marketing mới vào nghề với 2 năm kinh nghiệm trong nội dung, email và mạng xã hội. Đã phát triển bản tin của khách hàng từ 1,000 lên 4,000 người đăng ký và chạy các chiến dịch đạt tỷ lệ mở trung bình 22%. Sẵn sàng nhận thêm trách nhiệm và một danh mục khách hàng lớn hơn.",
    "experience": [
      {
        "role": "Cộng tác viên Marketing Mới vào nghề",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "tháng 7 năm 2024",
        "end": "",
        "current": true,
        "points": "Phát triển bản tin của khách hàng từ 1,000 lên 4,000 người đăng ký trong 14 tháng\nViết và lên lịch 12 bài đăng mạng xã hội mỗi tuần cho 4 khách hàng\nThực hiện các chiến dịch email đạt tỷ lệ mở trung bình 22%\nBáo cáo kết quả chiến dịch cho khách hàng hằng tháng"
      },
      {
        "role": "Thực tập sinh Marketing",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "tháng 1 năm 2024",
        "end": "tháng 6 năm 2024",
        "current": false,
        "points": "Viết mô tả sản phẩm cho hơn 200 mặt hàng trên trang web của công ty\nGiúp thực hiện chiến dịch bán hàng mùa xuân giúp tăng 15% đơn hàng trực tuyến"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Truyền thông",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Các môn học về marketing kỹ thuật số và viết truyền thông."
      }
    ],
    "skills": "Viết nội dung\nMarketing qua email (Mailchimp)\nQuản lý mạng xã hội\nGoogle Analytics\nCanva\nBáo cáo cho khách hàng",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Giám sát Vận hành",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Giám sát vận hành với 8 năm kinh nghiệm điều hành các nhóm kho gồm 20-30 người. Đã giảm 30% lỗi lấy hàng, nâng tỷ lệ điều phối đúng hạn từ 90% lên 97% và đào tạo 15 người mới. Sẵn sàng cho vai trò quản lý vận hành với địa điểm và ngân sách lớn hơn.",
    "experience": [
      {
        "role": "Giám sát Vận hành",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "tháng 3 năm 2021",
        "end": "",
        "current": true,
        "points": "Giám sát 25 nhân viên kho ở 2 ca tại một địa điểm 90,000 bộ vuông\nGiảm 30% lỗi lấy hàng nhờ quy trình kiểm tra mới và quét mã vạch\nNâng tỷ lệ điều phối đúng hạn từ 90% lên 97% trong 2 năm\nĐào tạo 15 người mới và thăng chức 3 người lên vai trò trưởng nhóm"
      },
      {
        "role": "Trưởng nhóm",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "tháng 6 năm 2017",
        "end": "tháng 2 năm 2021",
        "current": false,
        "points": "Dẫn dắt một nhóm 10 nhân viên lấy hàng và đóng gói trong ca đêm\nÁp dụng lịch phân ca giúp giảm 20% giờ làm thêm mà không trễ thời hạn\nTổ chức các buổi phổ biến an toàn và giữ cho nhóm không có tai nạn trong 2 năm"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Quản lý Chuỗi Cung ứng",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Lãnh đạo nhóm (25 nhân viên)\nVận hành kho\nCải tiến quy trình\nQuản lý an toàn\nKiểm soát hàng tồn kho\nWMS và Excel",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Hindi (giao tiếp)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Quản lý Dự án Cao cấp",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Quản lý dự án cao cấp với 14 năm kinh nghiệm bàn giao các dự án phần mềm trị giá lên tới $8M. Đã dẫn dắt hơn 30 dự án với tỷ lệ đúng hạn 92%, xây dựng một PMO từ đầu và hướng dẫn 10 quản lý dự án. Được biết đến với khả năng bàn giao bình tĩnh dưới áp lực và báo cáo trung thực cho lãnh đạo.",
    "experience": [
      {
        "role": "Quản lý Dự án Cao cấp",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "tháng 1 năm 2019",
        "end": "",
        "current": true,
        "points": "Thực hiện các dự án phần mềm trị giá lên tới $8M với tỷ lệ đúng hạn 92%\nXây dựng công ty's PMO từ đầu: mẫu, báo cáo và quản trị\nHướng dẫn 10 quản lý dự án và điều hành cộng đồng PM hàng tháng\nBáo cáo trực tiếp cho CTO về một chương trình 40 người"
      },
      {
        "role": "Quản lý Dự án",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "tháng 6 năm 2012",
        "end": "tháng 12 năm 2018",
        "current": false,
        "points": "Quản lý hơn 20 dự án cho khách hàng bán lẻ và y tế\nÁp dụng các thực hành Agile giúp giảm 25% thời gian bàn giao\nPhát triển 2 khách hàng chủ chốt từ $500k lên $2M doanh thu hàng năm"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Hệ thống Thông tin",
        "start": "2008",
        "end": "2012",
        "notes": "Có chứng chỉ PMP (2015). ScrumMaster được chứng nhận. Các môn học MBA (2018-2019, chưa hoàn thành)."
      }
    ],
    "skills": "Bàn giao chương trình và dự án\nThiết lập PMO và quản trị\nAgile và Waterfall\nKiểm soát ngân sách ($8M)\nBáo cáo cho lãnh đạo\nHướng dẫn nhóm",
    "languages": "Tiếng Anh (thành thạo)\nTiếng Tây Ban Nha (giao tiếp)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Giám đốc Vận hành",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Giám đốc vận hành với 18 năm kinh nghiệm mở rộng quy mô vận hành cho các công ty bán lẻ và logistics. Đã phát triển một bộ máy vận hành từ 200 người lên 900 người tại 6 địa điểm, nâng biên EBITDA từ 8% lên 14% và dẫn dắt 2 thương vụ mua lại. Có kinh nghiệm báo cáo cấp hội đồng và quan hệ nhà đầu tư.",
    "experience": [
      {
        "role": "Giám đốc Vận hành",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "tháng 1 năm 2021",
        "end": "",
        "current": true,
        "points": "Điều hành hoạt động cho 900 người tại 6 địa điểm và ngân sách $180M\nNâng biên EBITDA từ 8% lên 14% trong 3 năm\nDẫn dắt 2 thương vụ mua lại và hợp nhất cả hai nhóm trong vòng 6 tháng\nBáo cáo cho hội đồng hằng tháng về vận hành, rủi ro và tăng trưởng"
      },
      {
        "role": "Phó Chủ tịch Vận hành",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "tháng 6 năm 2014",
        "end": "tháng 12 năm 2020",
        "current": false,
        "points": "Mở rộng quy mô vận hành từ 200 lên 600 người tại 4 địa điểm\nKhai trương 3 trung tâm phân phối đúng hạn và dưới ngân sách\nXây dựng đội ngũ lãnh đạo vẫn đang điều hành doanh nghiệp đến ngày nay"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Quản trị Kinh doanh",
        "start": "2010",
        "end": "2012",
        "notes": "Cử nhân Kinh tế, NYU (2006). Khóa học quản trị hội đồng (2020)."
      }
    ],
    "skills": "Vận hành ở quy mô (900 người)\nPhụ trách lãi lỗ P&L ($180M)\nSáp nhập và mua lại\nBáo cáo cho hội đồng\nChiến lược tăng trưởng\nXây dựng đội ngũ lãnh đạo",
    "languages": "Tiếng Anh (thành thạo)",
    "template": "executive"
  }
};
});
