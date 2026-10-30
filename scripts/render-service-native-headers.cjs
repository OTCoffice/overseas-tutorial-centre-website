#!/usr/bin/env node
// Reapply native-header presentation to service outputs without a full-site regeneration.
const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const catalog=require('../content/service-native-headers.json'),normalize=require('../content/service-native-header.cjs');
for(const [route,a] of Object.entries(catalog)){const f=path.join(root,a.file);if(!fs.existsSync(path.join(root,a.image)))throw Error('Missing captured native header: '+route);fs.writeFileSync(f,normalize(fs.readFileSync(f,'utf8'),route).replace(/[ \t]+$/gm,''));}
console.log('Updated '+Object.keys(catalog).length+' native service headers.');
