import React from 'react';
import {normalizeDestination} from '../../lib/client-destinations.mjs';
import directory from '../../content/otc-global-destinations.json';
const optionId='otc-global-destination-options';
export function CountryOptions(){return <datalist id={optionId}>{directory.destinations.map(d=><option key={d.code} value={d.name}>{d.region} · {d.en} · {d.code}</option>)}</datalist>}
export function CountryInput({value,onChange,required=false,maxLength=1500}:{value:string,onChange:(v:string)=>void,required?:boolean,maxLength?:number}){return <><input list={optionId} value={value} maxLength={maxLength} required={required} onBlur={()=>{if(!/[,，、;；\n]/.test(value))onChange(normalizeDestination(value))}} placeholder="搜尋國家／地區，或自行輸入" onChange={e=>onChange(e.target.value)}/><small aria-hidden="true" className="hint">涵蓋 {directory.destinations.length} 個國家／地區選項；可自行輸入，多個目的地以逗號分隔。</small></>}
