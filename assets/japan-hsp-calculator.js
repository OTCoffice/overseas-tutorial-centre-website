(function(root){
'use strict';
function calculate(d){
 const type=d.type||'ro',age=Number(d.age),income=Number(d.income),years=Number(d.years);
 const valid=Number.isInteger(age)&&age>=18&&age<=100&&Number.isFinite(income)&&income>=0&&Number.isFinite(years)&&years>=0&&years<=80;
 if(!valid)return {valid:false};
 const academic=type!=='ha';
 const education=d.education==='phd'?(academic?30:20):d.education==='master'?20:d.education==='bachelor'?10:0;
 const experience=type==='ha'?(years>=10?25:years>=7?20:years>=5?15:years>=3?10:0):type==='i'?(years>=7?15:years>=5?10:years>=3?5:0):(years>=10?20:years>=7?15:years>=5?10:years>=3?5:0);
 const agePoints=academic?(age<30?15:age<35?10:age<40?5:0):0;
 let incomePoints=0;
 if(type==='ha')incomePoints=income>=3000?50:income>=2500?40:income>=2000?30:income>=1500?20:income>=1000?10:0;
 else for(const [minimum,points,minAge,maxAge] of [[1000,40,18,100],[900,35,18,100],[800,30,18,100],[700,25,18,39],[600,20,18,39],[500,15,18,34],[400,10,18,29]]){if(income>=minimum&&age>=minAge&&age<=maxAge){incomePoints=points;break;}}
 const japanese=d.japanese==='n1'?15:d.japanese==='n2'&&!d.japanDegree?10:0;
 const parts={學歷:education,相關經驗:experience,年齡:agePoints,年收入:incomePoints,日語:japanese,日本學位:d.japanDegree?10:0,指定大學:d.designated?10:0,跨領域多學位:d.multiple?5:0};
 const total=Object.values(parts).reduce((a,b)=>a+b,0),minimum=type==='i'||income>=300;
 return {valid:true,parts,total,minimum,n2Excluded:d.japanese==='n2'&&!!d.japanDegree,band:!minimum?'income':total>=80?'80':total>=70?'70':'below'};
}
if(typeof module!=='undefined'&&module.exports)module.exports={calculate};
if(!root.document)return;
const form=document.getElementById('hsp-form');if(!form)return;
const result=document.getElementById('hsp-result');
function update(){
 const raw=Object.fromEntries(new FormData(form));
 if(['age','income','years'].some(k=>raw[k]==='')){result.textContent='請填寫年齡、年收入及相關工作年數。';return;}
 for(const k of ['japanDegree','designated','multiple'])raw[k]=raw[k]==='on';
 const d=calculate(raw);if(!d.valid){result.textContent='請輸入有效數字；年齡18至100歲，工作年數0至80年，年收入不可為負數。';return;}
 const msg=d.band==='income'?'未符合1號ロ／ハ年收入至少300萬日圓的要求。':d.band==='80'?'已達80分試算門檻；符合連續在日居住、期間積分及其他條件時，永住申請年限可縮短至1年。':d.band==='70'?'已達70分試算門檻；符合連續在日居住、期間積分及其他條件時，永住申請年限可縮短至3年。':'目前試算未達70分；可核對是否另有適用的官方加分項目。';
 result.innerHTML='<p class="hsp-total">'+d.total+'<span> 分</span></p><p>'+msg+'</p><dl>'+Object.entries(d.parts).map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+v+'分</dd></div>').join('')+'</dl>'+(d.n2Excluded?'<p>N2與日本學位不重複加分，日語項已按0分處理。</p>':'')+'<p>這是所列項目的試算，並非簽證或永住批准。其他加分及資格仍須證明文件。</p>';
}
form.addEventListener('input',update);form.addEventListener('change',update);form.addEventListener('reset',()=>setTimeout(update,0));update();
})(typeof globalThis!=='undefined'?globalThis:this);
