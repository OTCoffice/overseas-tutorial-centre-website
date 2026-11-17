import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {api,Auth} from './Auth';
import Client from './Client';
import Admin from './Admin';
function App(){const [account,setAccount]=useState<any>(null),[loading,setLoading]=useState(true),[notice,setNotice]=useState('');const admin=location.pathname.includes('/manage');async function load(){setLoading(true);try{setAccount(await api('/api/client-account'));setNotice('')}catch(e:any){setAccount(null);if(![401,403].includes(e.status))setNotice(e.message)}finally{setLoading(false)}}useEffect(()=>{load()},[]);if(loading)return <p role="status">正在載入會員資料…</p>;if(!account)return <>{notice&&<p role="alert">{notice}</p>}<Auth done={load}/></>;if(admin&&account.role!=='admin')return <section className="authbox"><h2>此頁只供 OTC 管理人員使用</h2><a href="/client-portal/">返回我的客戶中心</a></section>;return admin?<Admin/>:<Client account={account}/>;}
createRoot(document.getElementById('client-app')!).render(<App/>);
