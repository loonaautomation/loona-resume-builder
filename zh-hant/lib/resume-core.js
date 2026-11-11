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
    else { throw new Error('未知板塊： ' + section); }
    return s;
  }

  /* Returns a NEW state; the input state is not modified. Out-of-range index is a no-op. */
  function removeEntry(state, section, index) {
    var s = normalizeState(clone(state || {}));
    var arr = null;
    if (section === 'experience') { arr = s.experience; }
    else if (section === 'education') { arr = s.education; }
    else { throw new Error('未知板塊： ' + section); }
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
    var e = current ? '至今' : str(end).trim();
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
      out += '<div class="r-line"><span class="r-role">' + escapeHtml(e.role || '職位名稱') + '</span>' +
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
      var degreeLine = joinParts([escapeHtml(e.degree), escapeHtml(e.field)], ' in ');
      out += '<div class="r-item">';
      out += '<div class="r-line"><span class="r-role">' + escapeHtml(e.school || '學校/大學') + '</span>' +
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
      out += '<div class="r-item"><p><strong>' + escapeHtml(e.role || '職位名稱') + '</strong>';
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
      out += '<div class="r-item"><p><strong>' + escapeHtml(e.school || '學校/大學') + '</strong>';
      var degreeLine = joinParts([escapeHtml(e.degree), escapeHtml(e.field)], ' in ');
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
    return '<div class="r-empty"><strong>您的簡歷將顯示在這裡。</strong><br>' +
      '在表單中開始輸入，實時觀看這份 A4 預覽更新。 ' +
      '如果您想先看一個完成的例子，請使用 <em>Load Sample Data</em>（載入示例資料）。</div>';
  }

  function classicHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-classic">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>職業簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>技能</h2><p>' + skills.map(escapeHtml).join(', ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>語言</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  function modernHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-modern">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    out += '</div><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Contact</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>技能</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>語言</h2><ul class="r-plain">' +
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
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>技能</h2><p>' + skills.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>語言</h2><p>' + langs.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* ATS: plain single column, standard headings, no tables, columns or graphics. */
  function atsHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-ats">';
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    if (s.summary) { out += '<div class="r-sec"><h2>簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = plainExperienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2>' + exp + '</div>'; }
    var edu = plainEducationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>技能</h2><p>' + skills.map(escapeHtml).join(', ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>語言</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* Creative: bold header band, accent colour, two columns, sidebar on the left. */
  function creativeHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-creative">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Contact</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>技能</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>語言</h2><ul class="r-plain">' +
        langs.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    out += '</div><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>個人簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    out += '</div></div></div>';
    return out;
  }

  /* Professional: navy header band, serif headings, clean two columns. */
  function professionalHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-professional">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>職業簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    out += '</div><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Contact</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>關鍵技能</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>語言</h2><ul class="r-plain">' +
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
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-profile"><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>職業經歷</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>核心優勢</h2><ul class="r-twocol">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>語言</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* Compact: dense single page, small type, two-column experience. */
  function compactHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-compact">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || '您的姓名') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>簡介</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>工作經歷</h2><div class="r-cols2">' + exp + '</div></div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>教育經歷</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>技能</h2><p>' + skills.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>語言</h2><p>' + langs.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
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
        title: '營銷協調員',
        email: 'sarah.ahmed@example.com',
        phone: '+92 300 1234567',
        location: 'Lahore, Pakistan',
        website: 'linkedin.com/in/sarahahmed'
      },
      summary: '擁有4年為零售品牌運營社交媒體活動經驗的營銷協調員。將一個品牌的 Instagram 粉絲從8,000增長到45,000，用時18個月，並透過更好的定向投放將每條潛在客戶的成本降低了30%。熟悉內容日曆、Canva、Meta Ads Manager 和基礎資料分析。',
      experience: [
        {
          role: '營銷協調員', company: 'Bright Retail Group', location: 'Lahore',
          start: '2022年三月', end: '', current: true,
          points: '在 Instagram、Facebook 和 TikTok 上策劃和釋出內容（每週5篇帖子）\n將 Instagram 粉絲從8,000增長到45,000，用時18個月\n透過重建廣告受眾，將每條潛在客戶的成本降低了30%\n協調一個由2名設計師和1名文案組成的團隊'
        },
        {
          role: '社交媒體助理', company: 'Pixel Studio', location: 'Lahore',
          start: 'Jun 2020', end: 'Feb 2022', current: false,
          points: '為6個客戶賬號撰寫文案和安排帖子\n在1小時內回覆客戶的訊息和評論\n在 Google Sheets 中準備月度績效報告'
        }
      ],
      education: [
        {
          school: 'University of the Punjab', degree: 'BS', field: '大眾傳播',
          start: '2016', end: '2020', notes: '以 3.4 的 CGPA 畢業。畢業年專案是關於小企業社交媒體營銷的。'
        }
      ],
      skills: '社交媒體營銷\nMeta Ads Manager\nCanva\n內容寫作\nGoogle Sheets\n基礎影片剪輯（CapCut）',
      languages: '英語（流利）\n烏爾都語（母語）\n旁遮普語（母語）',
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
