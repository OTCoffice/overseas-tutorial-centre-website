import React,{useState} from 'react';
import {api} from './Auth';
import {services} from './config';
import {clientEntry} from '../../lib/client-entry.mjs';
import {intakeQuestions} from '../../lib/client-intake.mjs';
export function Intake({existing,onDone}:{existing?:any,onDone:(id:string)=>void}){
 const entry=existing?null:clientEntry(location.search);
 const [service,setService]=useState(existing?.service||entry?.service||services[0]),[country,setCountry]=useState(existing?.country||entry?.country||''),[goal,setGoal]=useState(existing?.publicSummary||entry?.goal||''),[answers,setAnswers]=useState<any>(existing?.intake?.answers||{}),[step,setStep]=useState(0),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const [requestId]=useState(()=>crypto.randomUUID());
 const questions=intakeQuestions(service,country,answers);
 return <form className="requestform" onSubmit={async e=>{e.preventDefault();if(step<2){setStep(step+1);return}setBusy(true);setError('');try{const b=await api('/api/client-cases',{id:existing?.id,requestId,service,country,goal,answers},existing?'PATCH':'POST');onDone(b.id)}catch(e:any){setError(e.message)}finally{setBusy(false)}}}>
 <h3>{existing?'補充需求資料':'新增服務需求'}</h3><p className="hint">{['1 服務與目標','2 背景資料','3 核對與提交'].map((s,i)=><span key={s} aria-current={step===i?'step':undefined} style={{fontWeight:step===i?700:400,marginRight:16}}>{s}</span>)}</p>
 {step===0&&<><label>服務類型<select disabled={!!existing} value={service} onChange={e=>{setService(e.target.value);setAnswers({})}}>{services.map(s=><option key={s}>{s}</option>)}</select></label><label>目標國家／地區<input required maxLength={100} value={country} onChange={e=>setCountry(e.target.value)}/></label><label>目前情況與需要的協助<textarea required maxLength={3000} value={goal} onChange={e=>setGoal(e.target.value)}/></label></>}
 {step===1&&<><p>請按目前情況填寫；尚未確定的項目可填「待確認」。只需背景概要，證件副本可待顧問確認後再提供。</p><div className="intake-grid">{questions.map((f:any)=><label key={f.id}>{f.label}{f.options?<select required value={answers[f.id]||''} onChange={e=>setAnswers({...answers,[f.id]:e.target.value})}><option value="">請選擇</option>{f.options.map((o:string)=><option key={o}>{o}</option>)}</select>:<textarea required maxLength={1500} value={answers[f.id]||''} onChange={e=>setAnswers({...answers,[f.id]:e.target.value})}/>}</label>)}</div></>}
 {step===2&&<><h4>{service} · {country}</h4><p>{goal}</p><dl>{questions.map((f:any)=><React.Fragment key={f.id}><dt>{f.label}</dt><dd>{answers[f.id]}</dd></React.Fragment>)}</dl><p className="hint">提交後送交 OTC Office，由負責人核對並安排跟進。系統立即提供收件回覆；服務內容與費用另行確認，提交不代表已正式委託或向院校／政府遞交申請。</p><label><input type="checkbox" required/> 我確認以上資料可交予 OTC 用於此項服務的評估及聯絡。</label></>}
 <p role="alert">{error}</p><div className="actions">{step>0&&<button type="button" disabled={busy} onClick={()=>setStep(step-1)}>上一步</button>}<button className="btn btn-primary" disabled={busy}>{busy?'正在提交…':step===2?'提交至 OTC':'下一步'}</button></div></form>
}
