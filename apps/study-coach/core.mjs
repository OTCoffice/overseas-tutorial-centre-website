export const VERSION=1;
export const SKILLS=['聽力','閱讀','寫作','口說','複習','自訂'];
export const dateKey=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const addDays=(key,n)=>{const d=new Date(key+'T12:00:00');d.setDate(d.getDate()+n);return dateKey(d)};
export const isDate=v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&dateKey(new Date(v+'T12:00:00'))===v;
export const uid=()=>globalThis.crypto.randomUUID();
export function emptyState(){return {version:VERSION,profile:null,tasks:[],sessions:[],reviews:{},timer:null}}
const text=(v,max)=>typeof v==='string'&&v.length<=max;
const num=(v,min,max)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
export function validProfile(p){return p&&text(p.name,50)&&['IELTS','自訂'].includes(p.course)&&text(p.topic,100)&&text(p.current,20)&&text(p.target,50)&&num(p.minutes,15,240)&&Number.isInteger(p.minutes)&&['聽力','閱讀','寫作','口說','均衡'].includes(p.weak)&&(!p.exam||isDate(p.exam))}
export function validateState(s){
 if(!s||s.version!==VERSION||!(s.profile===null||validProfile(s.profile))||!Array.isArray(s.tasks)||s.tasks.length>5000||!Array.isArray(s.sessions)||s.sessions.length>10000||!s.reviews||typeof s.reviews!=='object'||Array.isArray(s.reviews))throw new Error('備份格式不符，請選擇由督學日誌匯出的 JSON 檔。');
 const ids=new Set();for(const t of s.tasks){if(!t||!text(t.id,100)||ids.has(t.id)||!text(t.title,160)||!t.title.trim()||!SKILLS.includes(t.skill)||!isDate(t.date)||!num(t.minutes,1,240)||typeof t.done!=='boolean'||!text(t.note,2000)||!(t.completedAt===null||isDate(t.completedAt)))throw new Error('任務資料不完整，現有記錄未變更。');ids.add(t.id)}
 for(const x of s.sessions)if(!x||!text(x.id,100)||!text(x.title,160)||!isDate(x.date)||!num(x.seconds,1,86400))throw new Error('專注記錄格式不符。');
 for(const [d,r] of Object.entries(s.reviews))if(!isDate(d)||!r||!text(r.win,2000)||!text(r.block,2000)||!text(r.next,2000))throw new Error('回顧記錄格式不符。');
 const t=s.timer;if(t!==null&&(!t||!text(t.taskId,100)||!text(t.title,160)||!num(t.duration,60,14400)||!num(t.remaining,0,14400)||!(t.endAt===null||num(t.endAt,0,1e15))))throw new Error('計時記錄格式不符。');
 return s;
}
const exercises={
 '聽力':['精聽一段材料，核對漏聽的關鍵字','完成一組聽力練習，整理錯誤原因','重聽薄弱片段，記錄同義替換'],
 '閱讀':['限時閱讀一篇材料，標出定位依據','練習一組題型，說明每題的答案依據','重做錯題，整理理解或定位的卡點'],
 '寫作':['拆解一題寫作題目，完成論點與段落提綱','寫一個主體段，檢查論點與例證的關係','修訂一段舊作，標記邏輯與語言問題'],
 '口說':['錄音回答一組問題，回聽並記下卡點','圍繞一個題目組織觀點、理由與例子','重錄昨天的回答，比較流暢度與表達'],
};
export function generatePlan(profile,start,tasks=[]){
 if(!validProfile(profile)||!isDate(start))throw new Error('請先填妥學習目標。');
 const existing=new Set(tasks.map(t=>t.date));const result=[];const order=['聽力','閱讀','寫作','口說'];
 for(let day=0;day<7;day++){
   const date=addDays(start,day);if(existing.has(date)||(profile.exam&&date>profile.exam))continue;
   const primary=profile.course==='自訂'?'自訂':(profile.weak!=='均衡'&&day%2===0?profile.weak:order[day%4]);
   const secondary=profile.course==='自訂'?'自訂':order[(day%4+(order[day%4]===primary?1:0))%4];
   const a=Math.max(5,Math.floor(profile.minutes*.5));const b=Math.max(3,Math.floor(profile.minutes*.3));const c=profile.minutes-a-b;
   const titles=profile.course==='自訂'?[`${profile.topic||'學習主題'}：完成一個小單元並記下要點`,'用練習或口頭解釋檢查理解','回顧今日卡點，寫下下一步']:[exercises[primary][day%3],exercises[secondary][(day+1)%3],'整理今日錯題與卡點，寫下下一步'];
   [a,b,c].forEach((minutes,i)=>result.push({id:uid(),date,skill:i===2?'複習':i===0?primary:secondary,title:titles[i],minutes,done:false,note:'',completedAt:null}));
 }return result;
}
export function setCompletion(state,id,done,note='',today=dateKey()){
 const task=state.tasks.find(t=>t.id===id);if(!task||typeof done!=='boolean'||!text(note,2000))throw new Error('找不到任務或資料格式不符。');
 task.done=done;task.note=note;task.completedAt=done?today:null;return task;
}
export function remaining(timer,now=Date.now()){return timer?.endAt===null?timer.remaining:Math.max(0,Math.ceil((timer.endAt-now)/1000))}
export function stats(s,start,end){
 const tasks=s.tasks.filter(t=>t.date>=start&&t.date<=end);const done=tasks.filter(t=>t.done);const sessions=s.sessions.filter(t=>t.date>=start&&t.date<=end);
 return {total:tasks.length,done:done.length,rate:tasks.length?Math.round(done.length/tasks.length*100):0,planned:tasks.reduce((a,t)=>a+t.minutes,0),completedMinutes:done.reduce((a,t)=>a+t.minutes,0),focusMinutes:Math.floor(sessions.reduce((a,t)=>a+t.seconds,0)/60),days:new Set([...done.map(t=>t.completedAt),...sessions.map(t=>t.date)].filter(Boolean)).size};
}
