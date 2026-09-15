const $ = id => document.getElementById(id);
const STORAGE='geschiedenisTrainerV1';
let state = JSON.parse(localStorage.getItem(STORAGE) || 'null') || {unlocked:false,score:0,correct:0,wrong:0,streak:0,mastery:{},queue:[],asked:0};
let current=null;
const norm=s=>String(s).toLowerCase().trim().replace(/\s+/g,' ');
function save(){localStorage.setItem(STORAGE,JSON.stringify(state));}
function updateStats(){
  $('score').textContent=state.score; $('correct').textContent=state.correct; $('wrong').textContent=state.wrong; $('streak').textContent=state.streak;
  const mastered=Object.values(state.mastery).filter(v=>v>=3).length, total=QUESTIONS.length, pct=total?Math.round(mastered/total*100):0;
  $('masteryPct').textContent=pct+'%'; $('progressText').textContent=`${mastered} van ${total} beheerst`; $('barFill').style.width=pct+'%';
}
function nextQuestion(){
  if(!state.queue.length){
    const pool=QUESTIONS.filter((_,i)=>!state.queue.includes(i));
    const weighted=[]; QUESTIONS.forEach((q,i)=>{const m=state.mastery[i]||0; const weight=Math.max(1,4-m); for(let n=0;n<weight;n++) weighted.push(i);});
    state.queue=weighted.sort(()=>Math.random()-.5).slice(0,Math.min(weighted.length,30));
  }
  const idx=state.queue.shift(); current={...QUESTIONS[idx],idx}; state.asked++;
  $('questionNo').textContent=`Vraag ${state.asked}`; $('question').textContent=current.question; $('answer').value=''; $('feedback').className='feedback'; $('feedback').textContent=''; $('answer').focus(); save();
}
function check(){
  if(!current) return; const given=norm($('answer').value); if(!given){$('feedback').className='feedback error';$('feedback').textContent='Vul eerst een antwoord in.';return;}
  const ok=current.answers.some(a=>norm(a)===given);
  if(ok){state.correct++;state.score+=10;state.streak++;state.mastery[current.idx]=(state.mastery[current.idx]||0)+1;$('feedback').className='feedback good';$('feedback').textContent='✓ Goed! +10 punten';}
  else{state.wrong++;state.score=Math.max(0,state.score-2);state.streak=0;state.mastery[current.idx]=Math.max(0,(state.mastery[current.idx]||0)-1);state.queue.push(current.idx);$('feedback').className='feedback error';$('feedback').textContent=`✗ Nog niet goed. Goed antwoord: ${current.answers.join(' / ')}`;}
  updateStats();save();setTimeout(nextQuestion, ok?650:1800);
}
function unlock(){
  if(norm($('accessCode').value)===norm(APP_CONFIG.teacherCode)){state.unlocked=true;save();showApp();}
  else {$('gateMsg').textContent='De code klopt niet. Vraag je docent om de juiste code.';$('gateMsg').className='msg error';}
}
function showApp(){ $('gate').classList.add('hidden'); $('app').classList.remove('hidden'); updateStats(); nextQuestion(); }
$('unlockBtn').onclick=unlock; $('accessCode').onkeydown=e=>{if(e.key==='Enter')unlock()}; $('checkBtn').onclick=check; $('answer').onkeydown=e=>{if(e.key==='Enter')check()}; $('skipBtn').onclick=()=>{if(current){state.queue.push(current.idx);save();nextQuestion();}};
$('teacherBtn').onclick=()=>{$('teacherPanel').classList.remove('hidden')}; $('closeTeacher').onclick=()=>$('teacherPanel').classList.add('hidden');
$('resetBtn').onclick=()=>{if(confirm('Weet je zeker dat je de voortgang op dit apparaat wilt wissen?')){localStorage.removeItem(STORAGE);location.reload();}};
if(state.unlocked) showApp();
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
