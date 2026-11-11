/*
 * Loona Resume Builder - core logic (pure, no DOM).
 * Runs in the browser (window.ResumeCore) and in Node for tests (module.exports).
 * All user text that enters preview HTML passes through escapeHtml().
 */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  if (root) { root.ResumeCore = api; }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var TEMPLATES = ['classic', 'modern', 'minimal', 'ats', 'creative', 'professional', 'executive', 'compact'];

  function str(v) { return typeof v === 'string' ? v : (v === null || v === undefined ? '' : String(v)); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function emptyExperience() {
    return { role: '', company: '', location: '', start: '', end: '', current: false, points: '' };
  }
  function emptyEducation() {
    return { school: '', degree: '', field: '', start: '', end: '', notes: '' };
  }
  function defaultState() {
    return {
      contact: { name: '', title: '', email: '', phone: '', location: '', website: '' },
      summary: '',
      experience: [emptyExperience()],
      education: [emptyEducation()],
      skills: '',
      languages: '',
      template: 'classic'
    };
  }

  function cleanExperience(e) {
    e = e || {};
    return {
      role: str(e.role), company: str(e.company), location: str(e.location),
      start: str(e.start), end: str(e.end), current: !!e.current, points: str(e.points)
    };
  }
  function cleanEducation(e) {
    e = e || {};
    return {
      school: str(e.school), degree: str(e.degree), field: str(e.field),
      start: str(e.start), end: str(e.end), notes: str(e.notes)
    };
  }

  /* Coerce any object into a valid state. Never throws. */
  function normalizeState(raw) {
    var d = defaultState();
    if (!raw || typeof raw !== 'object') { return d; }
    var c = (raw.contact && typeof raw.contact === 'object') ? raw.contact : {};
    d.contact = {
      name: str(c.name), title: str(c.title), email: str(c.email),
      phone: str(c.phone), location: str(c.location), website: str(c.website)
    };
    d.summary = str(raw.summary);
    d.skills = str(raw.skills);
    d.languages = str(raw.languages);
    if (Array.isArray(raw.experience)) { d.experience = raw.experience.slice(0, 50).map(cleanExperience); }
    if (Array.isArray(raw.education)) { d.education = raw.education.slice(0, 50).map(cleanEducation); }
    if (TEMPLATES.indexOf(raw.template) >= 0) { d.template = raw.template; }
    return d;
  }

  function serializeState(state) { return JSON.stringify(normalizeState(state)); }

  function deserializeState(json) {
    if (typeof json !== 'string' || !json) { return defaultState(); }
    try { return normalizeState(JSON.parse(json)); } catch (e) { return defaultState(); }
  }

  /* Returns a NEW state; the input state is not modified. */
  function addEntry(state, section) {
    var s = normalizeState(clone(state || {}));
    if (section === 'experience') { s.experience.push(emptyExperience()); }
    else if (section === 'education') { s.education.push(emptyEducation()); }
    else { throw new Error('Mục không xác định: ' + section); }
    return s;
  }

  /* Returns a NEW state; the input state is not modified. Out-of-range index is a no-op. */
  function removeEntry(state, section, index) {
    var s = normalizeState(clone(state || {}));
    var arr = null;
    if (section === 'experience') { arr = s.experience; }
    else if (section === 'education') { arr = s.education; }
    else { throw new Error('Mục không xác định: ' + section); }
    if (typeof index === 'number' && index >= 0 && index < arr.length) { arr.splice(index, 1); }
    return s;
  }

  function escapeHtml(s) {
    return str(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function splitLines(text) {
    return str(text).split(/\r?\n/).map(function (l) { return l.trim(); }).filter(function (l) { return l.length > 0; });
  }

  function multilineHtml(text) { return escapeHtml(text).replace(/\n/g, '<br>'); }

  function formatDates(start, end, current) {
    var s = str(start).trim();
    var e = current ? 'Hiện tại' : str(end).trim();
    if (s && e) { return s + ' \u2013 ' + e; }
    return s || e || '';
  }

  function experienceHasContent(e) {
    return !!(e.role || e.company || e.location || e.start || e.end || e.points);
  }
  function educationHasContent(e) {
    return !!(e.school || e.degree || e.field || e.start || e.end || e.notes);
  }
  function stateHasContent(s) {
    var c = s.contact;
    if (c.name || c.title || c.email || c.phone || c.location || c.website) { return true; }
    if (s.summary || s.skills || s.languages) { return true; }
    return s.experience.some(experienceHasContent) || s.education.some(educationHasContent);
  }

  function joinParts(parts, sep) {
    return parts.filter(function (p) { return !!p; }).join(sep);
  }

  function experienceItemsHtml(list) {
    var out = '';
    list.forEach(function (e) {
      if (!experienceHasContent(e)) { return; }
      var dates = formatDates(e.start, e.end, e.current);
      out += '<div class="r-item">';
      out += '<div class="r-line"><span class="r-role">' + escapeHtml(e.role || 'Chức danh Công việc') + '</span>' +
        (dates ? '<span class="r-dates">' + escapeHtml(dates) + '</span>' : '') + '</div>';
      var sub = joinParts([escapeHtml(e.company), escapeHtml(e.location)], ' \u2022 ');
      if (sub) { out += '<div class="r-sub">' + sub + '</div>'; }
      var pts = splitLines(e.points);
      if (pts.length) {
        out += '<ul>' + pts.map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') + '</ul>';
      }
      out += '</div>';
    });
    return out;
  }

  function educationItemsHtml(list) {
    var out = '';
    list.forEach(function (e) {
      if (!educationHasContent(e)) { return; }
      var dates = formatDates(e.start, e.end, false);
      var degreeLine = joinParts([escapeHtml(e.degree), escapeHtml(e.field)], ' trong ');
      out += '<div class="r-item">';
      out += '<div class="r-line"><span class="r-role">' + escapeHtml(e.school || 'Trường / Đại học') + '</span>' +
        (dates ? '<span class="r-dates">' + escapeHtml(dates) + '</span>' : '') + '</div>';
      if (degreeLine) { out += '<div class="r-sub">' + degreeLine + '</div>'; }
      if (e.notes) { out += '<p>' + multilineHtml(e.notes) + '</p>'; }
      out += '</div>';
    });
    return out;
  }

  /* Plain sequential items for the ATS template: no flex rows, no columns,
     just heading text in reading order so parsers see a clean sequence. */
  function plainExperienceItemsHtml(list) {
    var out = '';
    list.forEach(function (e) {
      if (!experienceHasContent(e)) { return; }
      var dates = formatDates(e.start, e.end, e.current);
      out += '<div class="r-item"><p><strong>' + escapeHtml(e.role || 'Chức danh Công việc') + '</strong>';
      var org = joinParts([escapeHtml(e.company), escapeHtml(e.location)], ', ');
      if (org) { out += ' - ' + org; }
      if (dates) { out += '<br>' + escapeHtml(dates); }
      out += '</p>';
      var pts = splitLines(e.points);
      if (pts.length) {
        out += '<ul>' + pts.map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') + '</ul>';
      }
      out += '</div>';
    });
    return out;
  }

  function plainEducationItemsHtml(list) {
    var out = '';
    list.forEach(function (e) {
      if (!educationHasContent(e)) { return; }
      var dates = formatDates(e.start, e.end, false);
      out += '<div class="r-item"><p><strong>' + escapeHtml(e.school || 'Trường / Đại học') + '</strong>';
      var degreeLine = joinParts([escapeHtml(e.degree), escapeHtml(e.field)], ' trong ');
      if (degreeLine) { out += ' - ' + degreeLine; }
      if (dates) { out += '<br>' + escapeHtml(dates); }
      out += '</p>';
      if (e.notes) { out += '<p>' + multilineHtml(e.notes) + '</p>'; }
      out += '</div>';
    });
    return out;
  }

  function contactLineHtml(c) {
    var parts = [escapeHtml(c.email), escapeHtml(c.phone), escapeHtml(c.location), escapeHtml(c.website)];
    var joined = joinParts(parts, ' \u2022 ');
    return joined ? '<div class="r-contact">' + joined + '</div>' : '';
  }

  function emptyPreviewHtml() {
    return '<div class="r-empty"><strong>CV của bạn sẽ xuất hiện tại đây.</strong><br>' +
      'Bắt đầu nhập vào biểu mẫu và xem bản xem trước A4 này cập nhật trực tiếp. ' +
      'Dùng <em>Tải Dữ liệu Mẫu</em> nếu bạn muốn xem trước một ví dụ hoàn chỉnh.</div>';
  }

  function classicHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-classic">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>Tóm tắt Chuyên môn</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm Làm việc</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Kỹ năng</h2><p>' + skills.map(escapeHtml).join(', ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Ngôn ngữ</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  function modernHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-modern">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>Tóm tắt</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    out += '</div><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Liên hệ</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Kỹ năng</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>Ngôn ngữ</h2><ul class="r-plain">' +
        langs.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    out += '</div></div></div>';
    return out;
  }

  /* Minimal: single column, lots of white space, thin rules, no colour. */
  function minimalHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-minimal">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>Tóm tắt</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Kỹ năng</h2><p>' + skills.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Ngôn ngữ</h2><p>' + langs.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* ATS: plain single column, standard headings, no tables, columns or graphics. */
  function atsHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-ats">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    if (s.summary) { out += '<div class="r-sec"><h2>Tóm tắt</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = plainExperienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm Làm việc</h2>' + exp + '</div>'; }
    var edu = plainEducationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Kỹ năng</h2><p>' + skills.map(escapeHtml).join(', ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Ngôn ngữ</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* Creative: bold header band, accent colour, two columns, sidebar on the left. */
  function creativeHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-creative">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Liên hệ</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Kỹ năng</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>Ngôn ngữ</h2><ul class="r-plain">' +
        langs.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    out += '</div><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>Hồ sơ</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    out += '</div></div></div>';
    return out;
  }

  /* Professional: navy header band, serif headings, clean two columns. */
  function professionalHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-professional">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>Tóm tắt Chuyên môn</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm Làm việc</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    out += '</div><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Liên hệ</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Kỹ năng Chính</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>Ngôn ngữ</h2><ul class="r-plain">' +
        langs.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    out += '</div></div></div>';
    return out;
  }

  /* Executive: centred name header, summary-led, board style, restrained gold/navy accent. */
  function executiveHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-executive">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-profile"><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Lịch sử Nghề nghiệp</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Điểm mạnh Cốt lõi</h2><ul class="r-twocol">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Ngôn ngữ</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* Compact: dense single page, small type, two-column experience. */
  function compactHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-compact">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Tên của Bạn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>Tóm tắt</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Kinh nghiệm</h2><div class="r-cols2">' + exp + '</div></div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Học vấn</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Kỹ năng</h2><p>' + skills.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Ngôn ngữ</h2><p>' + langs.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  var RENDERERS = {
    classic: classicHtml, modern: modernHtml, minimal: minimalHtml, ats: atsHtml,
    creative: creativeHtml, professional: professionalHtml, executive: executiveHtml, compact: compactHtml
  };

  function buildPreviewHTML(state) {
    var s = normalizeState(state);
    if (!stateHasContent(s)) { return '<div class="resume tpl-' + s.template + '">' + emptyPreviewHtml() + '</div>'; }
    return (RENDERERS[s.template] || classicHtml)(s);
  }

  function sampleState() {
    return normalizeState({
      contact: {
        name: 'Sarah Ahmed',
        title: 'Điều phối viên Marketing',
        email: 'sarah.ahmed@example.com',
        phone: '+92 300 1234567',
        location: 'Lahore, Pakistan',
        website: 'linkedin.com/in/sarahahmed'
      },
      summary: 'Điều phối viên marketing với 4 năm kinh nghiệm thực hiện các chiến dịch mạng xã hội cho các thương hiệu bán lẻ. Đã tăng lượng người theo dõi Instagram của một thương hiệu từ 8,000 lên 45,000 trong 18 tháng và giảm 30% chi phí cho mỗi khách hàng tiềm năng nhờ nhắm mục tiêu tốt hơn. Thoải mái với lịch nội dung, Canva, Meta Ads Manager và phân tích cơ bản.',
      experience: [
        {
          role: 'Điều phối viên Marketing', company: 'Bright Retail Group', location: 'Lahore',
          start: 'tháng 3 năm 2022', end: '', current: true,
          points: 'Lên kế hoạch và đăng nội dung trên Instagram, Facebook và TikTok (5 bài đăng mỗi tuần)\nTăng lượng người theo dõi Instagram từ 8,000 lên 45,000 trong 18 tháng\nGiảm 30% chi phí cho mỗi khách hàng tiềm năng bằng cách xây dựng lại đối tượng quảng cáo\nĐiều phối một nhóm gồm 2 nhà thiết kế và 1 người viết nội dung'
        },
        {
          role: 'Trợ lý Mạng xã hội', company: 'Pixel Studio', location: 'Lahore',
          start: 'tháng 6 năm 2020', end: 'tháng 2 năm 2022', current: false,
          points: 'Viết chú thích và lên lịch bài đăng cho 6 tài khoản khách hàng\nTrả lời tin nhắn và bình luận của khách hàng trong vòng 1 giờ\nChuẩn bị báo cáo hiệu suất hàng tháng trong Google Sheets'
        }
      ],
      education: [
        {
          school: 'University of the Punjab', degree: 'BS', field: 'Truyền thông Đại chúng',
          start: '2016', end: '2020', notes: 'Tốt nghiệp với CGPA 3.4. Đồ án năm cuối về marketing trên mạng xã hội cho doanh nghiệp nhỏ.'
        }
      ],
      skills: 'Marketing trên mạng xã hội\nMeta Ads Manager\nCanva\nViết nội dung\nGoogle Sheets\nChỉnh sửa video cơ bản (CapCut)',
      languages: 'Tiếng Anh (thành thạo)\nTiếng Urdu (bản ngữ)\nTiếng Punjabi (bản ngữ)',
      template: 'classic'
    });
  }

  return {
    TEMPLATES: TEMPLATES,
    emptyExperience: emptyExperience,
    emptyEducation: emptyEducation,
    defaultState: defaultState,
    normalizeState: normalizeState,
    serializeState: serializeState,
    deserializeState: deserializeState,
    addEntry: addEntry,
    removeEntry: removeEntry,
    escapeHtml: escapeHtml,
    splitLines: splitLines,
    formatDates: formatDates,
    buildPreviewHTML: buildPreviewHTML,
    sampleState: sampleState
  };
});
