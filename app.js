const main = document.querySelector('#main');
const dialog = document.querySelector('#dialog');
const facilities = [
  ['○○시민체육관 배드민턴장', '실내체육관', '시설·공간(대관)', '○○시 ○○구 · 무료', '실시간 신청 · 심사 후 승인'],
  ['○○구민회관 대강당', '강당', '시설·공간(대관)', '최대 300명'],
  ['○○문화센터 공연장', '공연장', '공연·전시·행사', '200석'],
  ['○○공원 캠핑장', '캠핑장', '시설·공간(대관)', '숙박 가능'],
  ['○○연구원 광학분석장비', '연구장비', '연구·실험장비', '시간 단위 이용'],
  ['○○복지관 교육실', '교육실', '교육·강좌', '최대 30명']
].map(([name, category, type, info, status], i) => ({ id: i + 1, name, category, type, info, status }));
const categories = [
  ['시설·공간(대관)', '회의실, 강당, 운동장 등 공공시설을 대관합니다.'],
  ['물품(대여)', '캠핑·레저, 육아용품 등을 빌려요.'],
  ['연구·실험장비', '광학·기계가공 등 장비를 이용해요.'],
  ['교육·강좌', '교육 프로그램과 강좌를 찾아봐요.'],
  ['공연·전시·행사', '공연과 전시, 행사를 찾아봐요.'],
  ['공유지도', '지도에서 가까운 공유 자원을 찾아보세요.']
];
const filterCategories = ['공공예식장', '강당', '실내체육관', '회의실', '공연장'];
const tabs = ['전체', '공유신청·예약', '커뮤니티', '이용안내', '이용후기'];
const times = ['09:00 ~ 11:00', '10:00 ~ 12:00', '13:00 ~ 15:00'];
const state = { query: '', category: '', tab: 0, item: facilities[0], day: 26, acceptedDay: 26, time: times[1], photo: 0, receipt: null, filters: {}, draft: null };
const safe = (s = '') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const icon = (name) => `<img class="icon" src="assets/${name}.svg" alt="">`;
const button = (label, target, kind = '') => `<a class="btn ${kind}" href="#${target}">${label}</a>`;
const date = () => `2026-11-${String(state.acceptedDay).padStart(2,'0')}(${'일월화수목금토'[(state.acceptedDay-1)%7]})`;
const dateTime = () => `${date()} <span class="time-text">${state.time}</span>`;
const table = (pairs) => `<dl class="data-table">${pairs.map(([term,value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('')}</dl>`;
const alert = (heading, body, kind = 'info') => `<div class="notice ${kind}"><span class="notice-icon" aria-hidden="true">${kind==='success'?'✓':'i'}</span><div><strong>${heading}</strong><p>${body}</p></div></div>`;
const search = (id, value = '') => `<form class="search" role="search" data-search><label class="sr" for="${id}">시설명이나 지역</label><input id="${id}" name="query" value="${safe(value)}" placeholder="시설명이나 지역을 검색해 주세요"><button aria-label="검색" type="submit">${icon('search')}</button></form>`;
const crumb = (label) => `<nav class="crumb" aria-label="현재 위치"><a href="#home">홈</a> ${icon('chevron')} <a href="#search">공유신청·예약</a> ${icon('chevron')} <span aria-current="page">${label}</span></nav>`;
const card = (item) => `<button class="card facility ${item.id===1?'featured':''}" type="button" data-facility="${item.id}"><img src="assets/facility-${item.id}.png" alt=""><span class="card-copy"><strong>${item.name} ${icon('chevron')}</strong><span>${item.id===1?item.info:`${item.type} · ${item.info}`}</span>${item.status?`<span>${item.status}</span>`:''}</span></button>`;
const steps = (current) => `<ol class="steps" aria-label="예약 진행 단계">${['시설·일정 선택','신청 정보 입력','신청 접수'].map((s,i)=>`<li class="${i<current?'done':i===current?'current':''}" ${i===current?'aria-current="step"':''}><span class="step-dot">${i<current||current===2?'✓':''}</span><small>${i+1}단계</small><span>${s}</span></li>`).join('')}</ol>`;

function home() {
  const map = ['무장애나눔길','예식장소 대관','축제 안내','물품 대여','교육강좌 안내','도서공연·둘레길','캠핑장·휴양림','주차장 안내'];
  return `<section class="hero"><div class="wrap hero-inner"><div><p class="eyebrow">공공시설·공유자원 예약</p><h1>공유누리 통합검색</h1>${search('home-query')}<div class="hero-quick"><p>아래 분류 자원도 찾아보세요.</p>${['공공예식장','강당','실내체육관'].map(x=>`<button class="chip" data-category="${x}">✓ ${x}</button>`).join('')}</div></div><img class="hero-photo" src="assets/hero.svg" alt="햇빛이 들어오는 공용 공간"></div></section>
  <div class="wrap home-content">
    <section><h2>공유신청·예약</h2><div class="category-grid">${categories.map(([name,desc],i)=>`<button class="card category ${i===0?'featured':''}" data-category="${name}"><strong>${name} ${icon('chevron')}</strong><span>${desc}</span></button>`).join('')}</div></section>
    <section><h2>추천 시설</h2><div class="recommend">${[2,3,4,5].map(i=>card(facilities[i-1])).join('')}</div></section>
    <section><h2>공유지도</h2><div class="map-chips">${map.map(x=>`<span class="chip">${x}</span>`).join('')}</div></section>
    <div class="home-help"><section><h2>공유누리 이용 안내</h2><ul class="topics"><li>공공시설과 공유자원 찾는 방법</li><li>이용 날짜와 시간 선택 방법</li><li>예약 승인 여부 확인 방법</li><li>예약 변경·취소 방법</li></ul></section><section><h2>상담센터</h2>${alert('상담센터 1644-6566','공유누리 이용 중 궁금한 점은 상담센터로 문의해 주세요.')}</section></div>
  </div>`;
}

function filters() {
  const checked = (name, v) => (state.filters[name]||[]).includes(v)?'checked':'';
  const checks = (name, values, chip = false) => `<div class="${chip?'chips':'choices'}">${values.map(v=>`<label class="${chip?'check-chip':''}"><input name="${name}" type="checkbox" value="${v}" ${checked(name,v)}><span>${v}</span></label>`).join('')}</div>`;
  return `<form data-filters><h3>검색 조건</h3><fieldset><legend>지역</legend><label>시·도<select name="region"><option value="">시·도 선택</option><option ${checked('region','○○시')?'selected':''}>○○시</option></select></label><label>시·군·구<select name="district"><option value="">시·군·구 선택</option><option ${checked('district','○○구')?'selected':''}>○○구</option></select></label></fieldset>
  <fieldset><legend>자원분류</legend>${checks('categories',filterCategories,true)}</fieldset><fieldset><legend>예약구분</legend>${checks('booking',['실시간예약','간편예약'])}</fieldset><fieldset><legend>승인구분</legend>${checks('approval',['자동승인','심사 후 승인'])}</fieldset><fieldset><legend>결제구분</legend>${checks('fee',['유료','무료'])}</fieldset><fieldset><legend>날짜선택 유형</legend><div class="choices inline">${['전체','1일 이상','1일'].map(v=>`<label><input type="radio" name="period" value="${v}" ${(state.filters.period?.[0]||'전체')===v?'checked':''}>${v}</label>`).join('')}</div></fieldset><div class="filter-actions"><button type="button" class="btn" data-action="reset">초기화</button><button class="btn primary-btn">검색결과 보기</button></div></form>`;
}

function matches(item) {
  const term = state.query.trim().toLowerCase();
  if (term && ![item.name,item.info,item.type,item.category,item.status].join(' ').toLowerCase().includes(term)) return false;
  if (state.category && ![item.category,item.type].includes(state.category)) return false;
  if (state.tab > 1) return false;
  const f = state.filters;
  if (f.categories?.length && !f.categories.includes(item.category)) return false;
  if ((f.region?.[0] || f.district?.[0]) && item.id !== 1) return false;
  if (f.booking?.length && !(item.id===1 && f.booking.includes('실시간예약'))) return false;
  if (f.approval?.length && !(item.id===1 && f.approval.includes('심사 후 승인'))) return false;
  if (f.fee?.length && !(item.id===1 && f.fee.includes('무료'))) return false;
  return !f.period?.includes('1일 이상');
}

function results() {
  const items = facilities.filter(matches);
  return `<div class="wrap page">${crumb('검색결과')}<h1>검색결과</h1>${search('result-query',state.query)}
    <div class="results-layout"><aside class="filter desktop-filter">${filters()}</aside><section aria-label="시설 검색 결과">
      <div class="result-tools"><strong role="status">총 ${items.length}건</strong><button class="btn mobile-filter" data-action="filter">검색 조건</button><div class="tabs" aria-label="결과 분류">${tabs.map((t,i)=>`<button class="${state.tab===i?'selected':''}" aria-pressed="${state.tab===i}" data-tab="${i}">${t}</button>`).join('')}</div></div>
      ${items.length?`<div class="card-grid">${items.map(card).join('')}</div>`:`<div class="empty">${alert('조건에 맞는 결과가 없어요','지역이나 자원분류 조건을 바꿔 다시 검색해 주세요.')}<button class="btn" data-action="reset">검색 조건 초기화</button></div>`}
    </section></div></div>`;
}

function calendar() {
  const days = Array.from({length:42},(_,i)=>i+1);
  return `<div class="calendar"><div class="calendar-title">2026년　11월</div><div class="calendar-grid"><div class="week">${[...'일월화수목금토'].map(d=>`<span>${d}</span>`).join('')}</div><strong>2026년 11월</strong><div class="days">${days.map(d=>d>30?`<span class="inactive">${d-30}</span>`:`<button type="button" aria-label="11월 ${d}일" aria-pressed="${state.day===d}" class="${state.day===d?'selected':''}" data-day="${d}">${d}</button>`).join('')}</div></div><div class="calendar-actions"><span>11월</span><button class="btn small" data-action="cancel-date">취소</button><button class="btn small primary-btn" data-action="confirm-date">선택</button></div></div>`;
}

function detail() {
  const f = state.item;
  const photos = f.id===1?['facility-1.png','gallery-1.svg','gallery-2.svg','gallery-3.svg']:[`facility-${f.id}.png`];
  return `<div class="wrap page detail-page">${crumb('시설 상세')}<div class="detail-title"><div class="badges"><span class="badge success">예약가능</span><span class="badge outline">${f.type}</span></div><h1>${f.name}</h1></div>
    <div class="approval-note">${alert('운영기관 승인 후 예약 확정','마이페이지 > 예약내역에서 승인 여부를 확인해 주세요.')}</div>
    <div class="detail-layout">
      <div class="detail-left"><section class="gallery" aria-label="시설 사진"><img class="main-photo" src="assets/${photos[state.photo]}" alt="${f.name} 사진">
      ${photos.length>1?`<div class="thumbs">${photos.slice(1).map((src,i)=>`<button type="button" data-photo="${i+1}" aria-label="시설 사진 ${i+2}" aria-pressed="${state.photo===i+1}"><img src="assets/${src}" alt=""></button>`).join('')}</div>`:''}</section>
      <section class="about"><h2>시설 소개</h2><p>${f.id===1?'○○시민체육관의 실내 배드민턴장입니다. 이용 가능 시간과 승인 절차를 확인한 뒤 신청해 주세요.':`${f.name}의 이용 일정과 신청 정보를 확인해 주세요.`}</p>${f.id===1?'<span class="tag">주차 가능</span>':''}</section>
      <section class="policy"><h3>이용 및 취소 안내</h3><p>${f.id===1?'이용료는 무료입니다. ':''}일정 변경·취소 조건은 제공기관의 이용 안내를 확인해 주세요.</p></section></div>
      <div class="detail-right"><section class="facility-info"><h2>시설 정보</h2>${table(f.id===1?[['제공기관','○○시청'],['이용 지역','○○시 ○○구'],['예약구분','실시간예약'],['승인구분','심사 후 승인'],['결제구분','무료']]:[['자원분류',f.type],['이용 안내',f.info]])}</section>
      <section class="schedule"><h2>이용일·시간 선택</h2>${calendar()}<label>11월 ${state.acceptedDay}일(${'일월화수목금토'[(state.acceptedDay-1)%7]}) 이용 시간<select id="time" name="time">${times.map(t=>`<option ${state.time===t?'selected':''}>${t}</option>`).join('')}</select></label><div class="actions">${button('이 일정으로 신청','apply','primary-btn')}${button('목록으로','search')}</div></section></div>
    </div>
  </div>`;
}

const summary = () => table([['시설명',state.item.name],['이용일시',dateTime()]]);
function apply() {
  const d = state.draft || {};
  return `<div class="wrap page">${crumb('예약 신청')}<h1>예약 신청</h1>${steps(1)}<h2>신청 정보 입력</h2><div class="application">
    <aside class="summary"><h3>예약 내용 확인</h3>${summary()}<p>시설과 일정을 확인한 뒤 신청 정보를 입력해 주세요.</p></aside>
    <form id="reservation" class="form-panel"><h3>신청자 정보</h3><p>필수 항목을 입력해 주세요.</p>
    <label>신청자명 (필수)<input name="name" autocomplete="off" required placeholder="이름을 입력해 주세요." value="${safe(d.name)}"></label>
    <div class="contact"><label>휴대전화 (필수)<input name="phone" type="tel" autocomplete="off" inputmode="tel" pattern="01[0-9]-?[0-9]{3,4}-?[0-9]{4}" required placeholder="예: 010-1234-5678" value="${safe(d.phone)}"></label><label>이메일 (선택)<input name="email" type="email" autocomplete="off" placeholder="이메일 주소를 입력해 주세요." value="${safe(d.email)}"></label></div>
    <fieldset><legend>이용 구분</legend><div class="choices inline">${['개인','단체'].map(v=>`<label><input type="radio" name="type" value="${v}" ${(d.type||'개인')===v?'checked':''}>${v}</label>`).join('')}</div></fieldset>
    <label>이용 인원 (필수)<select name="people" required><option value="">인원을 선택해 주세요.</option>${[1,2,3,4,5,6,7,8,9,10].map(i=>`<option value="${i}" ${Number(d.people)===i?'selected':''}>${i}명</option>`).join('')}</select></label>
    <label>이용 목적 (필수)<textarea name="purpose" required placeholder="이용 목적을 입력해 주세요.">${safe(d.purpose)}</textarea></label>
    <fieldset class="agreements"><legend>약관 동의</legend><div class="choices"><label><input type="checkbox" name="terms" required ${d.terms?'checked':''}>이용 약관 동의 (필수)</label><label><input type="checkbox" name="privacy" required ${d.privacy?'checked':''}>개인정보 수집·이용 동의 (필수)</label></div></fieldset>
    <div class="actions">${button('이전으로','detail')}<button class="btn primary-btn" type="submit">신청 내용 확인</button></div></form></div></div>`;
}

function receiptTable() {
  const r = state.receipt;
  return table([['접수번호',r.number],['시설명',r.facility],['이용일시',r.date+' <span class="time-text">'+r.time+'</span>'],['신청자',safe(r.name)],['신청 상태','승인 대기']]);
}
const statusNote = () => alert('승인 여부 확인','마이페이지 > 예약내역에서 승인 여부를 확인해 주세요.');

function receipt() {
  return `<div class="wrap page">${crumb('예약 신청 접수')}<h1>예약 신청 접수</h1>${steps(2)}${alert('예약 신청을 접수했어요','운영기관 승인 전에는 예약이 확정되지 않습니다.','success')}
    <section class="summary receipt"><div class="receipt-title"><h2>신청 내용</h2><span class="badge waiting">승인 대기</span></div>${receiptTable()}</section>
    <div class="actions">${button('메인으로','home')}<button class="btn primary-btn" data-action="history">예약 내역 확인</button></div>${statusNote()}<section class="related"><h2>다른 시설 둘러보기</h2><div class="card-grid">${[2,3,6].filter(i=>i!==state.item.id).map(i=>card(facilities[i-1])).join('')}</div></section></div>`;
}

function render({ focus = false } = {}) {
  let route = location.hash.slice(1);
  if (!['home','search','detail','apply','receipt'].includes(route)) route='home';
  if (route==='receipt' && !state.receipt) route='home';
  main.innerHTML = ({home, search:results, detail, apply, receipt})[route]();
  window.uiLocale?.apply();
  if (focus) { window.scrollTo(0,0); main.focus({preventScroll:true}); }
}

function navigate(route) {
  if (location.hash.slice(1) === route) render({focus:true});
  else location.hash = route;
}

function showDialog(content) {
  dialog.innerHTML = content;
  if (!dialog.open) dialog.showModal();
  window.uiLocale?.apply();
}

function saveDraft(form) { state.draft = Object.fromEntries(new FormData(form)); }
function reset() { state.query=''; state.category=''; state.tab=0; state.filters={}; }
window.addEventListener('hashchange',()=>{ if(dialog.open) dialog.close(); render({focus:true}); });
document.addEventListener('submit', event => {
  const form=event.target;
  if (form.matches('[data-search]')) {
    event.preventDefault(); reset(); state.query=new FormData(form).get('query')||''; navigate('search');
  } else if(form.matches('[data-filters]')) {
    event.preventDefault(); state.filters={}; state.category=''; state.tab=0;
    for(const [key,value] of new FormData(form)) (state.filters[key] ||= []).push(value);
    if(dialog.open) dialog.close(); navigate('search');
  } else if(form.id==='reservation') {
    event.preventDefault(); saveDraft(form);
    showDialog(`<h2 id="dialog-title">신청 내용 최종 확인</h2>${alert('이 일정으로 신청할까요?','신청 접수 후 운영기관이 승인하면 예약이 확정됩니다.')}${summary()}<div class="actions"><button class="btn" data-action="close">다시 확인</button><button class="btn primary-btn" data-action="submit">예약 신청 제출</button></div>`);
  }
});
document.addEventListener('input', e => {
  if (e.target.form?.id === 'reservation') saveDraft(e.target.form);
});
document.addEventListener('change', e => {
  if(e.target.id==='time') state.time=e.target.value;
  if(e.target.form?.id==='reservation') saveDraft(e.target.form);
});
document.addEventListener('click', e => {
  const el=e.target.closest('button');
  if(!el) return;
  const d=el.dataset;
  if(d.category) { reset(); state.category=d.category==='공유지도'?'':d.category; navigate('search'); }
  if(d.facility) { state.item=facilities.find(x=>x.id===Number(d.facility)); state.photo=0; state.draft=null; navigate('detail'); }
  if(d.tab!==undefined) { state.tab=Number(d.tab); render(); main.querySelector(`[data-tab="${d.tab}"]`)?.focus(); }
  if(d.day) {
    state.day=Number(d.day);
    for(const b of main.querySelectorAll('[data-day]')) { const on=Number(b.dataset.day)===state.day; b.classList.toggle('selected',on); b.setAttribute('aria-pressed',on); }
  }
  if(d.photo) {
    state.photo=Number(d.photo);
    main.querySelector('.main-photo').src=`assets/gallery-${state.photo}.svg`;
    for(const b of main.querySelectorAll('[data-photo]')) b.setAttribute('aria-pressed',b===el);
  }
  switch(d.action){
    case 'confirm-date': state.acceptedDay=state.day; render(); document.querySelector('#time').focus(); break;
    case 'cancel-date': state.day=state.acceptedDay; render(); main.querySelector(`[data-day="${state.day}"]`)?.focus(); break;
    case 'filter': showDialog(`<div class="filter dialog-filter"><h2 class="sr" id="dialog-title">검색 조건</h2><button class="dialog-close" type="button" aria-label="닫기" data-action="close">×</button>${filters()}</div>`); break;
    case 'reset': reset(); if(dialog.open) dialog.close(); navigate('search'); break;
    case 'close': dialog.close(); break;
    case 'submit':
      if(!state.draft) return;
      state.receipt={number:`2026-11${String(state.acceptedDay).padStart(2,'0')}-0001`,facility:state.item.name,date:date(),time:state.time,name:state.draft.name};
      dialog.close(); navigate('receipt'); break;
    case 'history': showDialog(`<h2 id="dialog-title">예약 내역</h2><div class="receipt-title"><strong>신청 내용</strong><span class="badge waiting">승인 대기</span></div>${receiptTable()}${statusNote()}<button class="btn" data-action="close">접수 결과로 돌아가기</button>`); break;
  }
});
render();
