const i18n = (() => {
  const messages = window.nooriLocales;
  const locales = { ko: 'ko-KR', en: 'en-GB', fr: 'fr-FR' };
  const savedKey = 'noori-demo-language';
  const textSources = new WeakMap();
  const attributeSources = new WeakMap();
  const translatedAttributes = ['aria-label', 'alt', 'placeholder', 'title', 'content'];
  const picker = document.querySelector('#language');
  let language = 'ko';
  try {
    const saved = localStorage.getItem(savedKey);
    if (Object.hasOwn(locales, saved)) language = saved;
  } catch {
    // The selector still works when storage is unavailable.
  }

  function t(key, args = {}) {
    const template = messages[language][key] ?? messages.ko[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (match, name) => args[name] ?? match);
  }

  function translate(source) {
    const [, leading, key, trailing] = source.match(/^(\s*)(.*?)(\s*)$/su);
    if (!key) return source;
    if (Object.hasOwn(messages.ko, key)) return leading + t(key) + trailing;
    if (key.startsWith('✓ ') || key.startsWith('· ')) return leading + key.slice(0, 2) + translate(key.slice(2)) + trailing;
    if (/ · |　| \| /.test(key)) return source.split(/( · |　| \| )/).map((part, i) => i % 2 ? part : translate(part)).join('');
    return source;
  }

  const formatDate = (value, options) => new Intl.DateTimeFormat(locales[language], {
    timeZone: 'UTC', ...options
  }).format(new Date(value));
  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const shortDate = { weekday: 'short', month: 'long', day: 'numeric' };
  const number = value => new Intl.NumberFormat(locales[language]).format(value);
  const plural = (key, value) => t(key + (value === 1 ? '.one' : '.other'), { n: number(value) });

  function localize(root = document) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let node; (node = walker.nextNode());) {
      if (node.parentElement?.closest('script, style, textarea, [data-i18n-keep], [data-format]')) continue;
      if (!textSources.has(node)) textSources.set(node, node.data);
      const translated = translate(textSources.get(node));
      if (translated !== node.data) node.data = translated;
    }
    for (const el of root.querySelectorAll(translatedAttributes.map(a => '[' + a + ']').join(','))) {
      if (el.closest('[data-i18n-keep]')) continue;
      if (!attributeSources.has(el)) attributeSources.set(el, new Map());
      const sources = attributeSources.get(el);
      for (const attr of translatedAttributes) {
        if (!el.hasAttribute(attr)) continue;
        if (attr === 'content' && el.name !== 'description') continue;
        if (!sources.has(attr)) sources.set(attr, el.getAttribute(attr));
        el.setAttribute(attr, translate(sources.get(attr)));
      }
    }
    for (const el of root.querySelectorAll('[data-format]')) {
      const { format, value, name } = el.dataset;
      const n = Number(value);
      switch (format) {
        case 'result': el.textContent = plural('result', n); break;
        case 'step': el.textContent = t('step.number', { n: number(n) }); break;
        case 'participants': el.textContent = plural('participant', n); break;
        case 'month': el.textContent = formatDate('2026-11-01', { year:'numeric', month:'long' }); break;
        case 'month-only': el.textContent = formatDate('2026-11-01', { month:'long' }); break;
        case 'weekday': el.textContent = formatDate('2026-11-0' + (n + 1), { weekday:'short' }); break;
        case 'date': el.textContent = language === 'ko'
          ? value + '(' + formatDate(value, { weekday:'short' }) + ')'
          : formatDate(value, dateOptions); break;
        case 'time-label': el.textContent = t('date.timeLabel', { date: formatDate(value, shortDate) }); break;
        case 'day-label': el.setAttribute('aria-label', formatDate(value, shortDate)); break;
        case 'photo-alt': el.alt = t('photo.alt', { name }); break;
        case 'photo-label': el.setAttribute('aria-label', t('photo.number', { n: number(n) })); break;
        case 'range': el.textContent = value.replace(' ~ ', language === 'ko' ? ' ~ ' : '–'); break;
      }
    }
  }

  function setLanguage(next) {
    if (!Object.hasOwn(locales, next)) return;
    language = next;
    document.documentElement.lang = next;
    picker.value = next;
    try { localStorage.setItem(savedKey, next); } catch { /* continue */ }
    localize();
    refreshErrors();
  }

  function message(field) {
    const v = field.validity;
    if (v.valueMissing) return field.type === 'checkbox' ? '필수 동의에 체크해 주세요.'
      : field.tagName === 'SELECT' ? '필수 항목을 선택해 주세요.' : '이 항목을 입력해 주세요.';
    if (v.patternMismatch && field.type === 'tel') return '휴대전화 번호를 확인해 주세요. 예: 010-1234-5678';
    if (v.typeMismatch && field.type === 'email') return '올바른 이메일 주소를 입력해 주세요.';
    return '이 항목을 입력해 주세요.';
  }

  function refreshErrors() {
    for (const field of document.querySelectorAll('#reservation [aria-invalid="true"]')) {
      const node = document.getElementById('error-' + field.name);
      if (node) node.textContent = t(message(field));
    }
  }

  document.addEventListener('invalid', event => {
    const field = event.target;
    if (field.form?.id !== 'reservation') return;
    event.preventDefault();
    const first = Array.from(field.form.elements).find(el => el.willValidate && !el.validity.valid);
    const id = 'error-' + field.name;
    let node = document.getElementById(id);
    if (!node) {
      node = document.createElement('p');
      node.id = id;
      node.className = 'form-error';
      node.dataset.i18nKeep = '';
      node.setAttribute('role','alert');
      field.closest('label').append(node);
    }
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', id);
    node.textContent = t(message(field));
    if (first === field) field.focus();
  }, true);

  const clearOrRefreshError = ({ target: field }) => {
    if (field.form?.id !== 'reservation' || field.getAttribute('aria-invalid') !== 'true') return;
    const node = document.getElementById('error-' + field.name);
    if (!field.validity.valid) {
      if (node) node.textContent = t(message(field));
      return;
    }
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    node?.remove();
  };
  document.addEventListener('input', clearOrRefreshError);
  document.addEventListener('change', clearOrRefreshError);
  picker.addEventListener('change', event => setLanguage(event.target.value));
  setLanguage(language);
  return { localize, t, translate };
})();
