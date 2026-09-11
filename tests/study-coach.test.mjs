import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyState,validateState,generatePlan,dateKey,addDays,isDate,setCompletion,remaining,stats} from '../apps/study-coach/core.mjs';
const p={name:'測試',course:'IELTS',topic:'',current:'5.5',target:'6.5',exam:'',minutes:60,weak:'寫作'};
test('local calendar stays correct across month and clock changes',()=>{
 assert.equal(addDays('2026-09-30',1),'2026-10-01');assert.equal(addDays('2026-10-25',1),'2026-10-26');
 assert.equal(isDate('2026-02-30'),false);assert.equal(isDate('2028-02-29'),true);
 assert.equal(dateKey(new Date(2026,8,11,23,59)),'2026-09-11');
});
test('daily plan fits time, prioritises a skill and includes all four skills',()=>{
 for(const minutes of [15,30,60,119,240]){const tasks=generatePlan({...p,minutes},'2026-09-11');assert.equal(tasks.length,21);for(let n=0;n<7;n++)assert.equal(tasks.filter(t=>t.date===addDays('2026-09-11',n)).reduce((a,t)=>a+t.minutes,0),minutes);assert.equal(new Set(tasks.map(t=>t.id)).size,21);assert.equal(tasks[0].skill,'寫作');for(const skill of ['聽力','閱讀','寫作','口說'])assert.ok(tasks.some(t=>t.skill===skill))}
 for(const weak of ['均衡','聽力','閱讀','寫作','口說']){const tasks=generatePlan({...p,weak},'2026-09-11');for(const skill of ['聽力','閱讀','寫作','口說'])assert.ok(tasks.some(t=>t.skill===skill))}
});
test('plan respects exam date, preserves existing days, and rejects invalid settings',()=>{
 const tasks=generatePlan({...p,exam:'2026-09-13'},'2026-09-11');assert.equal(tasks.length,9);
 assert.equal(generatePlan(p,'2026-09-11',generatePlan(p,'2026-09-11')).length,0);
 assert.equal(generatePlan({...p,exam:'2026-09-10'},'2026-09-11').length,0);
 assert.throws(()=>generatePlan({...p,minutes:1},'2026-09-11'));
 const custom=generatePlan({...p,course:'自訂',topic:'DSE 中文'},'2026-09-11');assert.ok(custom[0].title.includes('DSE 中文'));assert.equal(custom[0].skill,'自訂');
});
test('check-ins and focus records measure separate things',()=>{
 const s=emptyState();s.profile=p;s.tasks=generatePlan(p,'2026-09-11');setCompletion(s,s.tasks[0].id,true,'下次再練','2026-09-11');
 let x=stats(s,'2026-09-11','2026-09-11');assert.equal(x.done,1);assert.equal(x.focusMinutes,0);assert.equal(x.completedMinutes,30);
 s.sessions.push({id:'focus1',date:'2026-09-11',seconds:90,title:'閱讀'});x=stats(s,'2026-09-11','2026-09-11');assert.equal(x.focusMinutes,1);
 setCompletion(s,s.tasks[0].id,false,s.tasks[0].note);assert.equal(s.tasks[0].note,'下次再練');assert.equal(s.tasks[0].completedAt,null);
 assert.throws(()=>setCompletion(s,'missing',true));
});
test('backup round-trip and corrupt backup rejection',()=>{
 const s=emptyState();s.profile=p;s.tasks=generatePlan(p,'2026-09-11');s.reviews['2026-09-11']={win:'完成閱讀',block:'時間不足',next:'減少任務'};
 assert.deepEqual(validateState(JSON.parse(JSON.stringify(s))),s);
 for(const mutate of [x=>x.version=999,x=>x.tasks[0].date='2026-02-30',x=>x.tasks[0].minutes=-3,x=>x.tasks.push(x.tasks[0]),x=>x.reviews.bad={win:'',block:'',next:''},x=>x.tasks[0].note='a'.repeat(2001)]){const next=structuredClone(s);mutate(next);assert.throws(()=>validateState(next))}
 assert.equal(s.tasks.length,21);
});
test('wall-clock timer survives pauses and background time without exceeding duration',()=>{
 const t={taskId:'',title:'專注',duration:1500,remaining:1500,endAt:1000000+1500000};
 assert.equal(remaining(t,1000000),1500);assert.equal(remaining(t,1060000),1440);assert.equal(remaining(t,3000000),0);
 t.remaining=1200;t.endAt=null;assert.equal(remaining(t,99999999),1200);t.endAt=2000000+1200000;assert.equal(remaining(t,2060000),1140);
});
