const {execFileSync}=require('child_process');
execFileSync('python3',['scripts/render-singapore-guide.py'],{cwd:require('path').resolve(__dirname,'..'),stdio:'inherit'});
