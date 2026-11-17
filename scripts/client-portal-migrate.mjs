import fs from 'node:fs';
import {neon} from '@neondatabase/serverless';
if(!process.env.DATABASE_URL)process.loadEnvFile('.env.local');
const sql=neon(process.env.DATABASE_URL);
const statements=fs.readFileSync(new URL('../db/client-portal.sql',import.meta.url),'utf8').split(';').map(s=>s.trim()).filter(Boolean);
await sql.transaction(statements.map(s=>sql.query(s)));
console.log('客戶中心資料表已建立；原有資料保留。');
