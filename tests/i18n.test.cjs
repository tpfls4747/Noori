const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function start() {
  const storage = new Map();
  const location = {href:'https://example.test/#home',pathname:'/',search:'',hash:'#home'};
  const document = {
    documentElement:{lang:'ko'}, body:null,
    addEventListener(){}, querySelector(){return null;}, querySelectorAll(){return []}
  };
  const context = {
    window:{},document,location,URL,URLSearchParams,Date,Intl,
    localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
    history:{replaceState(_state,_title,uri){const u=new URL(uri,location.href);Object.assign(location,{href:u.href,pathname:u.pathname,search:u.search,hash:u.hash});}}
  };
  vm.runInNewContext(fs.readFileSync('i18n.js','utf8'),context,{filename:'i18n.js'});
  return {context,storage,document,location};
}

test('defaults to Korean',()=>{
  const {context,document}=start();
  assert.equal(context.window.uiLocale.language,'ko');
  assert.equal(document.documentElement.lang,'ko');
});

test('switches to English and persists without losing hash navigation',()=>{
  const {context,storage,location,document}=start();
  context.window.uiLocale.setLanguage('en');
  assert.equal(context.window.uiLocale.language,'en');
  assert.equal(storage.get('sharenuri-language'),'en');
  assert.equal(location.hash,'#home');
  assert.equal(location.search,'?lang=en');
  assert.equal(document.documentElement.lang,'en');
  assert.match(context.window.uiLocale.searchLabels('실내체육관','심사 후 승인'),/Indoor gym/);
  assert.match(context.window.uiLocale.searchLabels('실내체육관','심사 후 승인'),/Approval required/);
});

test('switches to French and supports translated search terms',()=>{
  const {context,storage,document}=start();
  context.window.uiLocale.setLanguage('fr');
  assert.equal(context.window.uiLocale.language,'fr');
  assert.equal(storage.get('sharenuri-language'),'fr');
  assert.equal(document.documentElement.lang,'fr');
  assert.match(context.window.uiLocale.searchLabels('무료','심사 후 승인'),/Gratuit/);
  assert.match(context.window.uiLocale.searchLabels('무료','심사 후 승인'),/Approbation requise/);
});

test('ignores unsupported locale',()=>{
  const {context}=start();
  context.window.uiLocale.setLanguage('de');
  assert.equal(context.window.uiLocale.language,'ko');
});
