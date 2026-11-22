const {test}=require('node:test'),assert=require('node:assert/strict'),{calculate:c}=require('../assets/japan-hsp-calculator.js');
const base={type:'ro',age:32,income:600,years:7,education:'master',japanese:'n1'};
test('70 and 80 point thresholds',()=>{assert.equal(c(base).total,80);assert.equal(c({...base,japanese:'none',years:10}).total,70)});
test('age-dependent salary thresholds',()=>{for(const [age,income,points] of [[29,400,10],[30,400,0],[34,500,15],[35,500,0],[39,700,25],[40,700,0],[40,800,30],[50,1000,40]])assert.equal(c({...base,age,income}).parts.年收入,points)});
test('N2 does not stack with Japan degree; N1 does',()=>{assert.equal(c({...base,japanese:'n2',japanDegree:true}).parts.日語,0);assert.equal(c({...base,japanese:'n1',japanDegree:true}).parts.日語,15)});
test('income minimum overrides high score, except academic category',()=>{assert.equal(c({...base,income:299,education:'phd',japanDegree:true,designated:true,multiple:true}).band,'income');assert.equal(c({...base,type:'i',income:299}).minimum,true)});
test('research and management use their own experience and income tables',()=>{assert.equal(c({...base,type:'i',years:10}).parts.相關經驗,15);const h=c({...base,type:'ha',income:3000,years:10,education:'phd'});assert.equal(h.parts.學歷,20);assert.equal(h.parts.相關經驗,25);assert.equal(h.parts.年齡,0);assert.equal(h.parts.年收入,50)});
test('reject invalid input',()=>{for(const age of [-1,101,NaN])assert.equal(c({...base,age}).valid,false);assert.equal(c({...base,income:-5}).valid,false)});
