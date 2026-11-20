/* ShareNuri concept demo translations.
 * UI labels are translated without mutating facility IDs, filter values or state.
 * The Korean source text remains the canonical rendering produced by app.js.
 */
(function () {
  'use strict';
  const dictionaries = {
    en: {
      '본문 바로가기':'Skip to content','UX/UI 콘셉트 데모':'UX/UI concept demo',
      '가상 데이터로 시연하며 실제 예약은 접수되지 않습니다.':'Demo data only. No real reservations are submitted.',
      '공공개방자원 多가치 나눔터':'Sharing public resources','공유누리':'ShareNuri',
      '공유누리 메인':'ShareNuri home','통합검색':'Search all',
      '검색어를 입력해 주세요':'Enter a keyword','검색':'Search',
      '로그인':'Log in','회원가입':'Sign up','사이트맵':'Site map',
      '상담센터 1644-6566':'Help center 1644-6566','전체메뉴':'All menus',
      '공유신청·예약':'Search & reserve','메인':'Home','주 메뉴':'Main navigation',
      '공유지도':'Resource map','커뮤니티':'Community','마이페이지':'My page',
      '공지사항':'Notices','관련사이트':'Related sites','공유누리 콘셉트 데모입니다.':'This is a ShareNuri concept demo.',
      '공식 공유누리':'Official ShareNuri','대한민국정부':'Government of Korea',
      '공유누리 소개':'About ShareNuri','활용가이드':'User guide','고객센터':'Customer support',
      '이용안내':'How to use','개인정보처리방침':'Privacy policy','저작권정책':'Copyright policy',
      '공공시설·공유자원 예약':'Book public facilities and shared resources',
      '공유누리 통합검색':'Search ShareNuri','시설명이나 지역':'Facility or location',
      '시설명이나 지역을 검색해 주세요':'Search by facility or location',
      '아래 분류 자원도 찾아보세요.':'Browse resources by category.',
      '공공예식장':'Public wedding venue','강당':'Auditorium','실내체육관':'Indoor sports hall',
      '회의실':'Meeting room','공연장':'Performance venue',
      '시설·공간(대관)':'Facilities & spaces','물품(대여)':'Equipment rental',
      '연구·실험장비':'Research equipment','교육·강좌':'Classes & courses',
      '공연·전시·행사':'Performances & events',
      '회의실, 강당, 운동장 등 공공시설을 대관합니다.':'Book public meeting rooms, halls and sports grounds.',
      '캠핑·레저, 육아용품 등을 빌려요.':'Borrow camping, leisure and childcare equipment.',
      '광학·기계가공 등 장비를 이용해요.':'Access optical and manufacturing equipment.',
      '교육 프로그램과 강좌를 찾아봐요.':'Explore classes and education programs.',
      '공연과 전시, 행사를 찾아봐요.':'Find performances, exhibitions and events.',
      '지도에서 가까운 공유 자원을 찾아보세요.':'Find nearby public resources on a map.',
      '추천 시설':'Featured facilities','무장애나눔길':'Accessible trails',
      '예식장소 대관':'Wedding venues','축제 안내':'Festivals','물품 대여':'Equipment rental',
      '교육강좌 안내':'Classes','도서공연·둘레길':'Libraries & trails',
      '캠핑장·휴양림':'Campgrounds & forests','주차장 안내':'Parking',
      '공유누리 이용 안내':'ShareNuri user guide',
      '공공시설과 공유자원 찾는 방법':'How to find public facilities and resources',
      '이용 날짜와 시간 선택 방법':'How to choose dates and times',
      '예약 승인 여부 확인 방법':'How to check reservation approval',
      '예약 변경·취소 방법':'How to change or cancel a request',
      '상담센터':'Help center','공유누리 이용 중 궁금한 점은 상담센터로 문의해 주세요.':'Questions about ShareNuri? Contact the help center.',
      '실내체육관':'Indoor gym','강당':'Auditorium','공연장':'Theater',
      '캠핑장':'Campground','연구장비':'Research equipment','교육실':'Classroom',
      '최대 300명':'Up to 300 people','200석':'200 seats','숙박 가능':'Overnight stays available',
      '시간 단위 이용':'Hourly use','최대 30명':'Up to 30 people','무료':'Free',
      '실시간 신청':'Online request','심사 후 승인':'Approval required',
      '실시간예약':'Real-time reservation','간편예약':'Simple reservation',
      '자동승인':'Automatic approval','유료':'Paid',
      '검색 조건':'Search filters','지역':'Location','시·도':'Province / city',
      '시·군·구':'District','시·도 선택':'Select province / city',
      '시·군·구 선택':'Select district','자원분류':'Resource category',
      '예약구분':'Reservation method','승인구분':'Approval method',
      '결제구분':'Payment','날짜선택 유형':'Date selection',
      '전체':'All','1일 이상':'Multiple days','1일':'One day',
      '초기화':'Reset','검색결과 보기':'Show results',
      '홈':'Home','현재 위치':'Breadcrumb','검색결과':'Search results',
      '시설 검색 결과':'Facility search results','결과 분류':'Result categories',
      '이용후기':'Reviews',
      '조건에 맞는 결과가 없어요':'No matching results',
      '지역이나 자원분류 조건을 바꿔 다시 검색해 주세요.':'Try changing the location or resource category.',
      '검색 조건 초기화':'Reset filters',
      '시설 상세':'Facility details','예약가능':'Available for requests',
      '운영기관 승인 후 예약 확정':'Reservation confirmed after provider approval',
      '마이페이지 > 예약내역에서 승인 여부를 확인해 주세요.':'Check approval status in My Page > Reservations.',
      '시설 사진':'Facility photos','사진':'Photo',
      '시설 소개':'About this facility','주차 가능':'Parking available',
      '이용 및 취소 안내':'Use and cancellation','이용료는 무료입니다.':'Use is free of charge.',
      '일정 변경·취소 조건은 제공기관의 이용 안내를 확인해 주세요.':'Check the provider’s terms for changes or cancellations.',
      '시설 정보':'Facility information','제공기관':'Provider',
      '이용 지역':'Location','이용 안내':'Use information',
      '이용일·시간 선택':'Choose a date and time',
      '이용 시간':'Use time','취소':'Cancel','선택':'Select',
      '이 일정으로 신청':'Request this time slot','목록으로':'Back to results',
      '예약 진행 단계':'Reservation steps','시설·일정 선택':'Select facility & time',
      '신청 정보 입력':'Enter applicant details','신청 접수':'Request submitted',
      '예약 신청':'Reservation request','예약 내용 확인':'Review reservation',
      '시설과 일정을 확인한 뒤 신청 정보를 입력해 주세요.':'Check the facility and schedule before entering your details.',
      '신청자 정보':'Applicant information','필수 항목을 입력해 주세요.':'Complete all required fields.',
      '신청자명 (필수)':'Applicant name (required)','이름을 입력해 주세요.':'Enter your name',
      '휴대전화 (필수)':'Mobile number (required)','이메일 (선택)':'Email (optional)',
      '이메일 주소를 입력해 주세요.':'Enter your email address',
      '이용 구분':'Applicant type','개인':'Individual','단체':'Group',
      '이용 인원 (필수)':'Number of people (required)',
      '인원을 선택해 주세요.':'Select the number of people',
      '이용 목적 (필수)':'Purpose of use (required)',
      '이용 목적을 입력해 주세요.':'Enter the purpose of use',
      '약관 동의':'Agreements','이용 약관 동의 (필수)':'I agree to the terms of use (required)',
      '개인정보 수집·이용 동의 (필수)':'I consent to the collection and use of my personal data (required)',
      '이전으로':'Back','신청 내용 확인':'Review request',
      '접수번호':'Request number','시설명':'Facility','이용일시':'Date and time',
      '신청자':'Applicant','신청 상태':'Request status','승인 대기':'Awaiting approval',
      '승인 여부 확인':'Check approval status',
      '예약 신청 접수':'Reservation request submitted',
      '예약 신청을 접수했어요':'Your request has been submitted',
      '운영기관 승인 전에는 예약이 확정되지 않습니다.':'The reservation is not confirmed until the provider approves it.',
      '신청 내용':'Request details','메인으로':'Back to home',
      '예약 내역 확인':'View reservations','다른 시설 둘러보기':'Explore more facilities',
      '신청 내용 최종 확인':'Final review','이 일정으로 신청할까요?':'Submit a request for this time slot?',
      '신청 접수 후 운영기관이 승인하면 예약이 확정됩니다.':'Your reservation will be confirmed once the provider approves your request.',
      '다시 확인':'Review again','예약 신청 제출':'Submit request',
      '예약 내역':'Reservations','접수 결과로 돌아가기':'Back to submission',
      '닫기':'Close','표시 언어':'Display language'
    },
    fr: {
      '본문 바로가기':'Aller au contenu','UX/UI 콘셉트 데모':'Démo de concept UX/UI',
      '가상 데이터로 시연하며 실제 예약은 접수되지 않습니다.':'Données fictives : aucune réservation réelle n’est enregistrée.',
      '공공개방자원 多가치 나눔터':'Partage des ressources publiques','공유누리':'ShareNuri',
      '공유누리 메인':'Accueil ShareNuri','통합검색':'Recherche générale',
      '검색어를 입력해 주세요':'Saisissez un mot-clé','검색':'Rechercher',
      '로그인':'Connexion','회원가입':'Créer un compte','사이트맵':'Plan du site',
      '상담센터 1644-6566':'Assistance 1644-6566','전체메뉴':'Menu',
      '공유신청·예약':'Recherche et réservation','메인':'Accueil','주 메뉴':'Navigation principale',
      '공유지도':'Carte des ressources','커뮤니티':'Communauté','마이페이지':'Mon espace',
      '공지사항':'Annonces','관련사이트':'Sites associés','공유누리 콘셉트 데모입니다.':'Ceci est une démonstration du concept ShareNuri.',
      '공식 공유누리':'Site officiel ShareNuri','대한민국정부':'Gouvernement coréen',
      '공유누리 소개':'À propos','활용가이드':'Guide d’utilisation','고객센터':'Assistance',
      '이용안내':'Mode d’emploi','개인정보처리방침':'Politique de confidentialité','저작권정책':'Droits d’auteur',
      '공공시설·공유자원 예약':'Réserver des équipements publics',
      '공유누리 통합검색':'Rechercher sur ShareNuri','시설명이나 지역':'Équipement ou lieu',
      '시설명이나 지역을 검색해 주세요':'Rechercher par nom ou par lieu',
      '아래 분류 자원도 찾아보세요.':'Explorer les ressources par catégorie.',
      '공공예식장':'Lieu de mariage public','강당':'Salle de conférence',
      '실내체육관':'Gymnase couvert','회의실':'Salle de réunion',
      '공연장':'Salle de spectacle','시설·공간(대관)':'Équipements et espaces',
      '물품(대여)':'Prêt de matériel','연구·실험장비':'Matériel de recherche',
      '교육·강좌':'Cours et formations','공연·전시·행사':'Spectacles et événements',
      '회의실, 강당, 운동장 등 공공시설을 대관합니다.':'Réservez des salles, des auditoriums ou des terrains publics.',
      '캠핑·레저, 육아용품 등을 빌려요.':'Empruntez du matériel de camping, de loisirs ou de puériculture.',
      '광학·기계가공 등 장비를 이용해요.':'Accédez à du matériel optique ou de fabrication.',
      '교육 프로그램과 강좌를 찾아봐요.':'Découvrez des programmes et des cours.',
      '공연과 전시, 행사를 찾아봐요.':'Trouvez des spectacles, des expositions et des événements.',
      '지도에서 가까운 공유 자원을 찾아보세요.':'Trouvez des ressources publiques à proximité.',
      '추천 시설':'Équipements à découvrir',
      '무장애나눔길':'Sentiers accessibles','예식장소 대관':'Lieux de mariage',
      '축제 안내':'Festivals','물품 대여':'Prêt de matériel',
      '교육강좌 안내':'Cours et formations',
      '도서공연·둘레길':'Bibliothèques et sentiers',
      '캠핑장·휴양림':'Campings et forêts',
      '주차장 안내':'Stationnement','공유누리 이용 안내':'Guide ShareNuri',
      '공공시설과 공유자원 찾는 방법':'Rechercher des équipements et des ressources',
      '이용 날짜와 시간 선택 방법':'Choisir la date et l’horaire',
      '예약 승인 여부 확인 방법':'Vérifier l’approbation d’une demande',
      '예약 변경·취소 방법':'Modifier ou annuler une demande',
      '상담센터':'Assistance','공유누리 이용 중 궁금한 점은 상담센터로 문의해 주세요.':'Une question ? Contactez le service d’assistance.',
      '실내체육관':'Gymnase couvert','강당':'Auditorium','공연장':'Salle de spectacle',
      '캠핑장':'Camping','연구장비':'Matériel de recherche','교육실':'Salle de formation',
      '최대 300명':'300 personnes maximum','200석':'200 places',
      '숙박 가능':'Hébergement possible','시간 단위 이용':'Utilisation à l’heure',
      '최대 30명':'30 personnes maximum','무료':'Gratuit',
      '실시간 신청':'Demande en ligne','심사 후 승인':'Approbation requise',
      '실시간예약':'Réservation en temps réel','간편예약':'Réservation simplifiée',
      '자동승인':'Approbation automatique','유료':'Payant',
      '검색 조건':'Filtres de recherche','지역':'Lieu','시·도':'Province / ville',
      '시·군·구':'Arrondissement','시·도 선택':'Choisir la province / ville',
      '시·군·구 선택':'Choisir l’arrondissement',
      '자원분류':'Type de ressource','예약구분':'Type de réservation',
      '승인구분':'Mode d’approbation','결제구분':'Paiement',
      '날짜선택 유형':'Choix des dates','전체':'Tout',
      '1일 이상':'Plusieurs jours','1일':'Un jour',
      '초기화':'Réinitialiser','검색결과 보기':'Voir les résultats',
      '홈':'Accueil','현재 위치':'Fil d’Ariane','검색결과':'Résultats de recherche',
      '시설 검색 결과':'Résultats des équipements','결과 분류':'Types de résultats',
      '이용후기':'Avis',
      '조건에 맞는 결과가 없어요':'Aucun résultat correspondant',
      '지역이나 자원분류 조건을 바꿔 다시 검색해 주세요.':'Modifiez le lieu ou le type de ressource, puis réessayez.',
      '검색 조건 초기화':'Réinitialiser les filtres',
      '시설 상세':'Détails de l’équipement','예약가능':'Demande possible',
      '운영기관 승인 후 예약 확정':'Réservation confirmée après validation par l’organisme',
      '마이페이지 > 예약내역에서 승인 여부를 확인해 주세요.':'Consultez le statut dans Mon espace > Réservations.',
      '시설 사진':'Photos de l’équipement','사진':'Photo',
      '시설 소개':'Présentation','주차 가능':'Parking disponible',
      '이용 및 취소 안내':'Conditions d’utilisation et d’annulation',
      '이용료는 무료입니다.':'Utilisation gratuite.',
      '일정 변경·취소 조건은 제공기관의 이용 안내를 확인해 주세요.':'Consultez les conditions de modification ou d’annulation auprès de l’organisme.',
      '시설 정보':'Informations sur l’équipement',
      '제공기관':'Organisme gestionnaire','이용 지역':'Lieu','이용 안내':'Informations pratiques',
      '이용일·시간 선택':'Choisir une date et un horaire',
      '이용 시간':'Horaire','취소':'Annuler','선택':'Sélectionner',
      '이 일정으로 신청':'Demander ce créneau',
      '목록으로':'Retour aux résultats','예약 진행 단계':'Étapes de réservation',
      '시설·일정 선택':'Choix du lieu et du créneau',
      '신청 정보 입력':'Coordonnées du demandeur',
      '신청 접수':'Demande envoyée','예약 신청':'Demande de réservation',
      '예약 내용 확인':'Récapitulatif de la réservation',
      '시설과 일정을 확인한 뒤 신청 정보를 입력해 주세요.':'Vérifiez le lieu et le créneau avant de renseigner vos coordonnées.',
      '신청자 정보':'Informations du demandeur',
      '필수 항목을 입력해 주세요.':'Renseignez les champs obligatoires.',
      '신청자명 (필수)':'Nom du demandeur (obligatoire)',
      '이름을 입력해 주세요.':'Saisissez votre nom',
      '휴대전화 (필수)':'Téléphone portable (obligatoire)',
      '이메일 (선택)':'E-mail (facultatif)',
      '이메일 주소를 입력해 주세요.':'Saisissez votre adresse e-mail',
      '이용 구분':'Type de demandeur','개인':'Particulier','단체':'Groupe',
      '이용 인원 (필수)':'Nombre de personnes (obligatoire)',
      '인원을 선택해 주세요.':'Sélectionnez le nombre de personnes',
      '이용 목적 (필수)':'Objet de l’utilisation (obligatoire)',
      '이용 목적을 입력해 주세요.':'Précisez l’objet de votre demande',
      '약관 동의':'Consentements',
      '이용 약관 동의 (필수)':'J’accepte les conditions d’utilisation (obligatoire)',
      '개인정보 수집·이용 동의 (필수)':'J’accepte la collecte et l’utilisation de mes données personnelles (obligatoire)',
      '이전으로':'Retour','신청 내용 확인':'Vérifier la demande',
      '접수번호':'Numéro de demande','시설명':'Équipement',
      '이용일시':'Date et horaire','신청자':'Demandeur',
      '신청 상태':'Statut de la demande','승인 대기':'En attente d’approbation',
      '승인 여부 확인':'Vérifier le statut',
      '예약 신청 접수':'Demande de réservation envoyée',
      '예약 신청을 접수했어요':'Votre demande a été enregistrée',
      '운영기관 승인 전에는 예약이 확정되지 않습니다.':'La réservation ne sera confirmée qu’après validation par l’organisme.',
      '신청 내용':'Détails de la demande','메인으로':'Retour à l’accueil',
      '예약 내역 확인':'Voir mes réservations',
      '다른 시설 둘러보기':'Explorer d’autres équipements',
      '신청 내용 최종 확인':'Vérification finale',
      '이 일정으로 신청할까요?':'Envoyer une demande pour ce créneau ?',
      '신청 접수 후 운영기관이 승인하면 예약이 확정됩니다.':'La réservation sera confirmée après validation par l’organisme.',
      '다시 확인':'Vérifier à nouveau','예약 신청 제출':'Envoyer la demande',
      '예약 내역':'Mes réservations',
      '접수 결과로 돌아가기':'Retour au récapitulatif',
      '닫기':'Fermer','표시 언어':'Langue d’affichage'
    }
  };

  const langs = ['ko','en','fr'];
  const dateLocale = {en:'en-US',fr:'fr-FR'};
  const sourceTexts = new WeakMap();
  const sourceAttrs = new WeakMap();
  const initialQuery = new URLSearchParams(location.search).get('lang');
  let current = langs.includes(initialQuery) ? initialQuery : 'ko';
  if (!langs.includes(initialQuery)) {
    try { const saved = localStorage.getItem('sharenuri-language'); if (langs.includes(saved)) current = saved; }
    catch (_) {}
  }

  function calendarDate(day, options) {
    return new Intl.DateTimeFormat(dateLocale[current], options).format(new Date(2026, 10, Number(day)));
  }

  function translate(source) {
    if (current === 'ko' || !source.trim()) return source;
    const lead = (source.match(/^\s*/) || [''])[0];
    const trail = (source.match(/\s*$/) || [''])[0];
    const word = source.trim();
    const dict = dictionaries[current];
    if (Object.prototype.hasOwnProperty.call(dict, word)) return lead + dict[word] + trail;

    const fullDate = /^2026-11-(\d{2})\([일월화수목금토]\)$/.exec(word);
    if (fullDate) return lead + calendarDate(fullDate[1], {year:'numeric', month:'short', day:'numeric', weekday:'short'}) + trail;
    const dayLabel = /^11월 (\d+)일\([일월화수목금토]\) 이용 시간$/.exec(word);
    if (dayLabel) return lead + (current==='en'?'Available times for ':'Horaires du ') + calendarDate(dayLabel[1],{month:'short',day:'numeric',weekday:'short'}) + trail;
    const dayAria = /^11월 (\d+)일$/.exec(word);
    if (dayAria) return lead + calendarDate(dayAria[1],{month:'long',day:'numeric'}) + trail;
    if (word==='2026년 11월' || word==='2026년　11월') return lead + calendarDate(1,{year:'numeric',month:'long'}) + trail;
    if (word==='11월') return lead + calendarDate(1,{month:'long'}) + trail;
    if (/^\d+명$/.test(word)) return lead + word.replace('명',current==='en'?' people':' personnes') + trail;
    if (/^총 \d+건$/.test(word)) return lead + word.replace(/^총 (\d+)건$/,current==='en'?'$1 results':'$1 résultats') + trail;
    if (/^\d+단계$/.test(word)) return lead + word.replace(/^(\d+)단계$/,current==='en'?'Step $1':'Étape $1') + trail;

    // Keep the Korean data values in attributes, translating only visible labels.
    const parts = word.split(/(\s+·\s+)/);
    if (parts.length > 1) return lead + parts.map(p=>dict[p]||p).join('') + trail;

    const match = /^(.+)의 이용 일정과 신청 정보를 확인해 주세요\.$/.exec(word);
    if (match) return lead + (current==='en'
      ?'Check the schedule and reservation details for '+match[1]+'.'
      :'Consultez les horaires et les modalités de réservation de '+match[1]+'.') + trail;

    return source;
  }

  function localizeElement(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node=walker.nextNode())) {
      if (node.parentElement?.closest('script,style')) continue;
      if (!sourceTexts.has(node)) sourceTexts.set(node,node.nodeValue);
      const translated = translate(sourceTexts.get(node));
      if (node.nodeValue !== translated) node.nodeValue=translated;
    }
    const els = [root, ...root.querySelectorAll('*')].filter(e=>e.nodeType===1);
    for (const el of els) {
      if (el.tagName === 'OPTION' && !el.hasAttribute('value')) {
        // Translating an <option> label must never change the submitted value.
        el.value=el.textContent.trim();
      }
      for (const name of ['placeholder','aria-label','title','alt']) {
        if (!el.hasAttribute(name)) continue;
        let originals=sourceAttrs.get(el);
        if (!originals) { originals={}; sourceAttrs.set(el,originals); }
        if (!(name in originals)) originals[name]=el.getAttribute(name);
        const translated=translate(originals[name]);
        if (el.getAttribute(name)!==translated) el.setAttribute(name,translated);
      }
    }
  }

  function apply() {
    document.documentElement.lang=current;
    localizeElement(document.body);
    const pageTitle = {ko:'공유누리 | UX/UI 콘셉트 데모',
      en:'ShareNuri | UX/UI concept demo', fr:'ShareNuri | Démo de concept UX/UI'};
    const descriptions={ko:'공유누리 공공시설 예약 UX/UI 콘셉트 데모',
      en:'ShareNuri public facility reservation UX/UI concept demo',
      fr:'Démo UX/UI de réservation d’équipements publics ShareNuri'};
    document.title=pageTitle[current];
    const meta=document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', descriptions[current]);
    document.querySelectorAll('[data-language-select]').forEach(el=>{ if (el.value!==current) el.value=current; });
  }

  function setLanguage(lang) {
    if (!langs.includes(lang)) return;
    current=lang;
    try { localStorage.setItem('sharenuri-language',lang); } catch (_) {}
    const url=new URL(location.href);
    url.searchParams.set('lang',lang);
    history.replaceState(history.state,'',url.pathname+url.search+url.hash);
    // app.js regenerates dynamic screens from canonical Korean data.
    if (typeof render==='function') render();
    apply();
  }

  document.addEventListener('change', e=>{
    if (e.target.matches('[data-language-select]')) setLanguage(e.target.value);
  });
  document.addEventListener('DOMContentLoaded',apply);
  window.uiLocale={apply,setLanguage,get language(){return current;}};
})();
