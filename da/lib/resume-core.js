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
    else { throw new Error('Ukendt afsnit: ' + section); }
    return s;
  }

  /* Returns a NEW state; the input state is not modified. Out-of-range index is a no-op. */
  function removeEntry(state, section, index) {
    var s = normalizeState(clone(state || {}));
    var arr = null;
    if (section === 'experience') { arr = s.experience; }
    else if (section === 'education') { arr = s.education; }
    else { throw new Error('Ukendt afsnit: ' + section); }
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
    var e = current ? 'nuværende' : str(end).trim();
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
      out += '<div class="r-line"><span class="r-role">' + escapeHtml(e.role || 'Jobtitel') + '</span>' +
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
      var degreeLine = joinParts([escapeHtml(e.degree), escapeHtml(e.field)], ' i ');
      out += '<div class="r-item">';
      out += '<div class="r-line"><span class="r-role">' + escapeHtml(e.school || 'Skole / Universitet') + '</span>' +
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
      out += '<div class="r-item"><p><strong>' + escapeHtml(e.role || 'Jobtitel') + '</strong>';
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
      out += '<div class="r-item"><p><strong>' + escapeHtml(e.school || 'Skole / Universitet') + '</strong>';
      var degreeLine = joinParts([escapeHtml(e.degree), escapeHtml(e.field)], ' i ');
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
    return '<div class="r-empty"><strong>Dit CV vises her.</strong><br>' +
      'Begynd at skrive i formularen, og se denne A4-forhåndsvisning opdatere live. ' +
      'Brug <em>Indlæs eksempeldata</em>, hvis du først vil se et færdigt eksempel.</div>';
  }

  function classicHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-classic">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>Professionelt resumé</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erhvervserfaring</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Færdigheder</h2><p>' + skills.map(escapeHtml).join(', ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Sprog</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  function modernHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-modern">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>Resumé</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erfaring</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    out += '</div><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Kontakt</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Færdigheder</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>Sprog</h2><ul class="r-plain">' +
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
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>Resumé</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erfaring</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Færdigheder</h2><p>' + skills.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Sprog</h2><p>' + langs.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* ATS: plain single column, standard headings, no tables, columns or graphics. */
  function atsHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-ats">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    if (s.summary) { out += '<div class="r-sec"><h2>Resumé</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = plainExperienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erhvervserfaring</h2>' + exp + '</div>'; }
    var edu = plainEducationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Færdigheder</h2><p>' + skills.map(escapeHtml).join(', ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Sprog</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* Creative: bold header band, accent colour, two columns, sidebar on the left. */
  function creativeHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-creative">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Kontakt</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Færdigheder</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>Sprog</h2><ul class="r-plain">' +
        langs.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    out += '</div><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>Profil</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erfaring</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    out += '</div></div></div>';
    return out;
  }

  /* Professional: navy header band, serif headings, clean two columns. */
  function professionalHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-professional">';
    out += '<div class="r-band">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += '</div>';
    out += '<div class="r-cols"><div class="r-main">';
    if (s.summary) { out += '<div class="r-sec"><h2>Professionelt resumé</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erhvervserfaring</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    out += '</div><div class="r-side">';
    var contactItems = [c.email, c.phone, c.location, c.website].filter(function (v) { return !!v; });
    if (contactItems.length) {
      out += '<div class="r-sec"><h2>Kontakt</h2><ul class="r-plain">' +
        contactItems.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Nøglefærdigheder</h2><ul class="r-plain">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) {
      out += '<div class="r-sec"><h2>Sprog</h2><ul class="r-plain">' +
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
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-profile"><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Karrierehistorik</h2>' + exp + '</div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) {
      out += '<div class="r-sec"><h2>Kernestyrker</h2><ul class="r-twocol">' +
        skills.map(function (v) { return '<li>' + escapeHtml(v) + '</li>'; }).join('') + '</ul></div>';
    }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Sprog</h2><p>' + langs.map(escapeHtml).join(', ') + '</p></div>'; }
    out += '</div>';
    return out;
  }

  /* Compact: dense single page, small type, two-column experience. */
  function compactHtml(s) {
    var c = s.contact;
    var out = '<div class="resume tpl-compact">';
    out += '<div class="r-head">';
    out += '<div class="r-name">' + escapeHtml(c.name || 'Dit navn') + '</div>';
    if (c.title) { out += '<div class="r-title">' + escapeHtml(c.title) + '</div>'; }
    out += contactLineHtml(c);
    out += '</div>';
    if (s.summary) { out += '<div class="r-sec"><h2>Resumé</h2><p>' + multilineHtml(s.summary) + '</p></div>'; }
    var exp = experienceItemsHtml(s.experience);
    if (exp) { out += '<div class="r-sec"><h2>Erfaring</h2><div class="r-cols2">' + exp + '</div></div>'; }
    var edu = educationItemsHtml(s.education);
    if (edu) { out += '<div class="r-sec"><h2>Uddannelse</h2>' + edu + '</div>'; }
    var skills = splitLines(s.skills);
    if (skills.length) { out += '<div class="r-sec"><h2>Færdigheder</h2><p>' + skills.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
    var langs = splitLines(s.languages);
    if (langs.length) { out += '<div class="r-sec"><h2>Sprog</h2><p>' + langs.map(escapeHtml).join(' \u00b7 ') + '</p></div>'; }
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
        title: 'Marketingkoordinator',
        email: 'sarah.ahmed@example.com',
        phone: '+92 300 1234567',
        location: 'Lahore, Pakistan',
        website: 'linkedin.com/in/sarahahmed'
      },
      summary: 'Marketingkoordinator med 4 års erfaring i at drive kampagner på sociale medier for detailbrands. Voksede ét brands Instagram-følgertal fra 8,000 til 45,000 på 18 måneder og skar prisen pr. lead ned med 30% gennem bedre målretning. Tryg ved indholdskalendere, Canva, Meta Ads Manager og grundlæggende analyse.',
      experience: [
        {
          role: 'Marketingkoordinator', company: 'Bright Retail Group', location: 'Lahore',
          start: 'mar. 2022', end: '', current: true,
          points: 'Planlæg og udgiv indhold på Instagram, Facebook og TikTok (5 opslag om ugen)\nVoksede Instagram-følgerskaren fra 8,000 til 45,000 på 18 måneder\nReducerede prisen pr. lead med 30% ved at genopbygge annoncemålgrupper\nKoordiner et hold på 2 designere og 1 tekstforfatter'
        },
        {
          role: 'Assistent til sociale medier', company: 'Pixel Studio', location: 'Lahore',
          start: 'jun. 2020', end: 'feb. 2022', current: false,
          points: 'Skrev billedtekster og planlagde opslag for 6 kundekonti\nBesvarede kundebeskeder og kommentarer inden for 1 time\nUdarbejdede månedlige performancerapporter i Google Sheets'
        }
      ],
      education: [
        {
          school: 'University of the Punjab', degree: 'BS', field: 'Massekommunikation',
          start: '2016', end: '2020', notes: 'Dimitterede med en CGPA på 3.4. Afgangsprojekt om marketing på sociale medier for små virksomheder.'
        }
      ],
      skills: 'Marketing på sociale medier\nMeta Ads Manager\nCanva\nIndholdsskrivning\nGoogle Sheets\nGrundlæggende videoredigering (CapCut)',
      languages: 'Engelsk (flydende)\nUrdu (modersmål)\nPunjabi (modersmål)',
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
