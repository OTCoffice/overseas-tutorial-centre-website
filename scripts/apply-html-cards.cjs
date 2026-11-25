// 用法：node scripts/apply-html-cards.cjs zh/<頁>/index.html ...  （把已渲染頁的 section 區塊轉成卡片；只動正文）
const fs=require('fs');const {htmlSectionsToCards}=require("../content/html-to-cards.cjs");
for(const f of process.argv.slice(2)){const h=fs.readFileSync(f,'utf8');const o=htmlSectionsToCards(h);console.log(f,o===h?'UNCHANGED':'cards='+(o.match(/class="cd-card/g)||[]).length);if(o!==h)fs.writeFileSync(f,o)}
