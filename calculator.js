/* tool-glasgow-blatchford · ELUCENIA · https://github.com/Elucenia/tool-glasgow-blatchford
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"glasgow-blatchford","title":"Escore de Glasgow-Blatchford","fields":[["ureia","Ureia sérica","sel",{"opts":{"0":"&lt; 39 mg/dL (&lt; 6,5 mmol/L)","2":"39 a 47 mg/dL (6,5 a 7,9 mmol/L)","3":"48 a 59 mg/dL (8,0 a 9,9 mmol/L)","4":"60 a 149 mg/dL (10,0 a 24,9 mmol/L)","6":"≥ 150 mg/dL (≥ 25 mmol/L)"}}],["hb","Hemoglobina","sel",{"opts":{"0":"Homem ≥ 13 g/dL ou mulher ≥ 12 g/dL","1":"Homem 12 a 12,9 ou mulher 10 a 11,9 g/dL","3":"Homem 10 a 11,9 g/dL","6":"&lt; 10 g/dL (ambos os sexos)"}}],["pas","Pressão sistólica","sel",{"opts":{"0":"≥ 110 mmHg","1":"100 a 109 mmHg","2":"90 a 99 mmHg","3":"&lt; 90 mmHg"}}],["fc","Frequência cardíaca ≥ 100 bpm","chk",{"pts":1}],["melena","Melena","chk",{"pts":1}],["sincope","Síncope","chk",{"pts":2}],["hepat","Doença hepática (atual ou prévia)","chk",{"pts":2}],["icc","Insuficiência cardíaca","chk",{"pts":2}]],"config":{"unit":"","label":"Glasgow-Blatchford","fields":[["ureia","sel",0],["hb","sel",0],["pas","sel",0],["fc","chk",1],["melena","chk",1],["sincope","chk",2],["hepat","chk",2],["icc","chk",2]],"bands":[[0,"low","Muito baixo risco (0 a 1): candidato a manejo ambulatorial","Pode ter alta sem endoscopia urgente, com endoscopia ambulatorial (Stanley 2017; ESGE 2021)."],[2,"mid","Risco não baixo (2 a 6): internar e fazer endoscopia","Endoscopia em até 24 h após estabilização hemodinâmica."],[7,"high","Risco alto (≥ 7): maior chance de precisar de terapia endoscópica","Corte ótimo para prever tratamento endoscópico (Stanley 2017). Estabilizar, transfundir se Hb &lt; 7 g/dL (ou &lt; 8 g/dL com doença cardiovascular) e endoscopia em até 24 h."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
