import {build} from 'esbuild';
await build({entryPoints:['client-portal/src/main.tsx'],bundle:true,minify:true,outfile:'client-portal/app.js',format:'iife',target:['es2020'],define:{'process.env.NODE_ENV':'"production"'},legalComments:'eof'});
