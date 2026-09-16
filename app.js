
function showExtraExplanation() {
  if (!current) return;
  const text = current.explanation || 'Voor deze vraag is nog geen uitgebreide uitleg beschikbaar.';
  const fb = $('feedback');
  if (!fb) return;
  fb.className = 'feedback info';
  fb.innerHTML = `<div class="feedback-title">💡 Extra uitleg</div><div class="explanation"><b>Uitleg:</b><br>${escapeHtml(text)}</div>`;
}
document.addEventListener('click', (e) => {
  const t=e.target;
  if (t && t.id==='checkBtn' && t.textContent.trim()==='Extra uitleg') {
    e.preventDefault();
    showExtraExplanation();
  }
});

const $ = id => document.getElementById(id);
const STORAGE = 'geschiedenisTrainerV23'; // behoud bestaande voortgang
const BANK = Array.isArray(QUESTIONS) ? QUESTIONS : [];

const RANKS = [
  { min: 0, name: "Willem III", title: "Willem III", icon: "👑" },
  { min: 100, name: "Schoof", title: "Schoof", icon: "👑" },
  { min: 250, name: "Balkenende", title: "Balkenende", icon: "👑" },
  { min: 500, name: "Juliana", title: "Juliana", icon: "👑" },
  { min: 750, name: "Willem II", title: "Willem II", icon: "👑" },
  { min: 1000, name: "Colijn", title: "Colijn", icon: "👑" },
  { min: 1500, name: "Balkenende", title: "Balkenende", icon: "👑" },
  { min: 2500, name: "Beatrix", title: "Beatrix", icon: "👑" },
  { min: 5000, name: "Rutte", title: "Rutte", icon: "👑" },
  { min: 7500, name: "Drees", title: "Drees", icon: "👑" },
  { min: 10000, name: "Wilhelmina", title: "Wilhelmina", icon: "👑" }
];

let state = JSON.parse(localStorage.getItem(STORAGE) || 'null') || {
  unlocked: false, studentName: '', score: 0, correct: 0, wrong: 0, streak: 0,
  mastery: {}, queue: [], asked: 0, daily: {}, lastDate: ''
};

let current = null;
let answered = false;
let lastQuestionIndex = null;

const norm = s => String(s ?? '').toLowerCase().trim().replace(/\s+/g, ' ');



function answerNorm(s) {
  return norm(s)
    .replace(/^[\s.,;:!?]+|[\s.,;:!?]+$/g, '')
    .replace(/^(de|het|een)\s+/, '')
    .replace(/[\s-]+/g, '');
}

function answersMatch(given, expected) {
  const a = answerNorm(given);
  const b = answerNorm(expected);
  if (a === b) return true;

  // Accept simple Dutch singular/plural variants.
  // This intentionally handles common endings without making spelling
  // errors broadly acceptable.
  const variants = s => {
    const out = new Set([s]);
    if (s.endsWith('s')) out.add(s.slice(0, -1));
    if (s.endsWith('en')) out.add(s.slice(0, -2));
    if (s.endsWith('eren')) out.add(s.slice(0, -2)); // e.g. ...
    if (s.endsWith('e')) out.add(s.slice(0, -1));
    else out.add(s + 'e');
    out.add(s + 's');
    out.add(s + 'en');
    return out;
  };

  for (const av of variants(a)) {
    for (const bv of variants(b)) {
      if (av === bv) return true;
    }
  }
  return false;
}

function displayQuestion(text) {
  // Alleen de eerste letter van de omschrijving wordt netjes als zin weergegeven.
  // De rest van de oorspronkelijke spelling blijft behouden.
  const s = String(text ?? '').trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function getRank(score) {
  let rank = RANKS[0];
  for (const r of RANKS) if (score >= r.min) rank = r;
  return rank;
}

function getNextRank(score) {
  for (const r of RANKS) if (score < r.min) return r;
  return null;
}

function save() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function updateDaily() {
  const key = todayKey();
  const count = state.daily?.[key] || 0;
  $('todayCount').textContent = count;
}

function recordQuestionToday() {
  const key = todayKey();
  if (!state.daily) state.daily = {};
  state.daily[key] = (state.daily[key] || 0) + 1;
  // Keep a sensible amount of history in localStorage.
  const keys = Object.keys(state.daily).sort();
  if (keys.length > 60) delete state.daily[keys[0]];
}

function updateRank() {
  // Eén centrale rangweergave: alle rangvelden worden altijd uit state.score berekend.
  const score = Math.max(0, Number(state.score) || 0);
  const rank = getRank(score);
  const next = getNextRank(score);

  let progress = 100;
  let nextText = 'Je hebt de hoogste rang bereikt!';
  let progressText = 'Hoogste rang bereikt';
  if (next) {
    const range = Math.max(1, next.min - rank.min);
    progress = Math.max(0, Math.min(100, ((score - rank.min) / range) * 100));
    nextText = `Nog ${next.min - score} punten tot ${next.icon} ${next.title}`;
    progressText = `${score - rank.min} / ${range} punten`;
  }

  // Afronden alleen voor de tekst; de CSS-balk krijgt de exacte waarde.
  const pct = Math.round(progress);

  const setText = (id, value) => {
    const el = $(id);
    if (el) el.textContent = value;
  };
  const setWidth = (id, value) => {
    const el = $(id);
    if (el) {
      el.style.width = `${value}%`;
      el.setAttribute('aria-valuenow', String(value));
    }
  };

  // Dashboard
  setText('rankIcon', rank.icon);
  setText('rankTitle', rank.title);
  setText('rankScore', `${score} punten`);
  setText('nextRankText', nextText);
  setWidth('rankBar', pct);

  // Oefenscherm
  setText('trainerRankIcon', rank.icon);
  setText('trainerRankTitle', rank.title);
  setText('trainerRankScore', `${score} punten`);
  setText('trainerNextRankText', nextText);
  setText('trainerRankProgressText', progressText);
  setWidth('trainerRankBar', pct);

  // Extra directe koppeling: als de rangkaart bestaat, schrijf de score ook als data-attribuut.
  const card = document.querySelector('.trainer-rank-card');
  if (card) {
    card.dataset.score = String(score);
    card.dataset.rank = rank.title;
  }
}

function updateMasteryNow() {
  const mastered = Object.values(state.mastery || {}).filter(v => Number(v) >= 3).length;
  const total = BANK.length;
  const el = $('masteredCount');
  if (el) el.textContent = `${mastered}/${total}`;
}

function updateStats() {
  const setText = (id, value) => {
    const el = $(id);
    if (el) el.textContent = value;
  };
  setText('score', state.score);
  setText('correct', state.correct);
  setText('wrong', state.wrong);
  setText('streak', state.streak);

  const mastered = Object.values(state.mastery || {}).filter(v => Number(v) >= 3).length;
  const total = BANK.length;
  const pct = total ? Math.round(mastered / total * 100) : 0;
  setText('masteryPct', pct + '%');
  setText('progressText', `${mastered} van ${total} beheerst`);
  if ($('barFill')) $('barFill').style.width = pct + '%';
  setText('progressTextHome', `${mastered} van ${total} beheerst`);
  if ($('barFillHome')) $('barFillHome').style.width = pct + '%';
  setText('progressTextTrainer', `${mastered} van ${total} beheerst`);
  if ($('barFillTrainer')) $('barFillTrainer').style.width = pct + '%';
  setText('masteryPctHome', pct + '%');
  setText('wrongHome', state.wrong);
  setText('streakHome', state.streak);
  updateDaily();

  // BELANGRIJK: rang altijd als laatste opnieuw tekenen vanuit dezelfde actuele score.
  updateRank();
}


// Houd de rangkaart ook synchroon als de score door een andere functie wordt aangepast.
// Dit is een extra veiligheidsnet tegen oude/cached codepaden.
function installRankSync() {
  const scoreEl = $('score');
  if (!scoreEl || scoreEl.__rankSyncInstalled) return;
  scoreEl.__rankSyncInstalled = true;
  const observer = new MutationObserver(() => updateRank());
  observer.observe(scoreEl, { childList: true, characterData: true, subtree: true });
}

function buildQueue() {
  const weighted = [];
  BANK.forEach((q, i) => {
    const mastery = state.mastery[i] || 0;
    const weight = Math.max(1, 4 - mastery);
    for (let n = 0; n < weight; n++) weighted.push(i);
  });
  for (let i = weighted.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [weighted[i], weighted[j]] = [weighted[j], weighted[i]];
  }
  state.queue = weighted.slice(0, Math.min(weighted.length, 40));
}

function nextQuestion() {
  if (!BANK.length) {
    $('question').textContent = 'Er zijn geen vragen geladen.';
    return;
  }
  if (!state.queue.length) buildQueue();

  // Voorkom dat dezelfde vraag direct opnieuw verschijnt.
  if (lastQuestionIndex !== null && state.queue.length > 1 && state.queue[0] === lastQuestionIndex) {
    const alternate = state.queue.findIndex(i => i !== lastQuestionIndex);
    if (alternate > 0) {
      [state.queue[0], state.queue[alternate]] = [state.queue[alternate], state.queue[0]];
    }
  }

  const idx = state.queue.shift();
  lastQuestionIndex = idx;
  current = { ...BANK[idx], idx };
  answered = false;
  state.asked++;
  recordQuestionToday();

  $('questionNo').textContent = `Vraag ${state.asked}`;
  $('question').textContent = displayQuestion(current.question);
  $('answer').value = '';
  $('answer').disabled = false;
  $('checkBtn').disabled = false;
  $('checkBtn').textContent = 'Controleer';
  $('checkBtn').classList.remove('hidden');
  $('nextBtn').classList.add('hidden');
  $('feedback').className = 'feedback';
  $('feedback').textContent = '';
  save();

  if (window.matchMedia('(min-width: 700px)').matches) $('answer').focus();
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[ch]));
}

function check() {
  if (!current || answered) return;
  const given = norm($('answer').value);
  if (!given) {
    $('feedback').className = 'feedback error';
    $('feedback').textContent = 'Vul eerst een antwoord in.';
    $('answer').focus();
    return;
  }

  answered = true;
  const ok = current.answers.some(a => answersMatch(given, a));
  const oldRank = getRank(state.score);

  if (ok) {
    state.correct++;
    state.score += 10;
    state.streak++;
    state.mastery[current.idx] = (state.mastery[current.idx] || 0) + 1;
    $('feedback').className = 'feedback good';
    $('feedback').textContent = '✓ Goed! +10 punten';
    $('checkBtn').textContent = 'Extra uitleg';
    $('checkBtn').disabled = false;
  } else {
    state.wrong++;
    state.score = Math.max(0, state.score - 2);
    state.streak = 0;
    state.mastery[current.idx] = Math.max(0, (state.mastery[current.idx] || 0) - 1);
    state.queue.push(current.idx);
    $('feedback').className = 'feedback error';
    $('feedback').innerHTML =
      `<div class="feedback-title">✗ Nog niet goed</div>
       <div><b>Goed antwoord:</b> ${escapeHtml(current.answers.join(' / '))}</div>
       <div class="explanation"><b>Uitleg:</b><br>${escapeHtml(current.explanation || 'Voor deze vraag is nog geen uitgebreide uitleg beschikbaar.')}</div>`;
  }

  const newRank = getRank(state.score);
  $('answer').disabled = true;
  // After a correct answer the button becomes the optional "Extra uitleg" button.
  // After a wrong answer the explanation is already shown and the button is disabled.
  $('checkBtn').disabled = !ok;
  $('nextBtn').classList.remove('hidden');
  updateStats();
  updateMasteryNow();
  save();

  if (newRank.min > oldRank.min) {
    setTimeout(() => {
      $('rankUpIcon').textContent = newRank.icon;
      $('rankUpTitle').textContent = newRank.title;
      $('rankUp').classList.remove('hidden');
    }, 350);
  }
}

function updateStudentName() {
  const name = String(state.studentName || '').trim();
  const display = $('studentNameDisplay');
  if (display) display.textContent = name || 'leerling';
}

const NAME_ALLOWED = /^[\p{L}]+(?: [\p{L}]+)*$/u;
// Veelvoorkomende grove, discriminerende of kwetsende woorden. Dit is geen volledige lijst.
const BLOCKED_NAME_TERMS = [
  'fuck','fucking','fucker','shit','shite','bitch','bastard','asshole','dick','piss','cunt',
  'kanker','tering','tyfus','kut','klote','godver','godverdomme','hoer','slet','lul','mongool',
  'homo','flikker','nigger','negro','jood','kike','chink','spic','wetback','retard','tranny',
  'naz i','nazi','hitler'
];

function validStudentName(name) {
  const value = String(name || '').trim().replace(/\s+/g, ' ');
  if (!value || value.length > 40) return { ok:false, message:'Vul een naam in van maximaal 40 tekens.' };
  if (!NAME_ALLOWED.test(value)) return { ok:false, message:'Je naam mag alleen uit letters en spaties bestaan.' };
  const lower = value.toLocaleLowerCase('nl-NL');
  const compact = lower.replace(/[ -]/g, '');
  if (BLOCKED_NAME_TERMS.some(term => compact.includes(term.replace(/[^\p{L}]/gu,'')))) {
    return { ok:false, message:'Deze naam kan niet worden gebruikt. Kies een normale, respectvolle naam.' };
  }
  return { ok:true, value };
}

function unlock() {
  const rawName = String($('studentName')?.value || state.studentName || '').trim();
  const nameCheck = validStudentName(rawName);
  if (!nameCheck.ok) {
    $('gateMsg').textContent = nameCheck.message;
    $('gateMsg').className = 'msg error';
    $('studentName').focus();
    return;
  }
  const name = nameCheck.value;

  // Als de leerling al eerder is ingelogd, is de docentcode niet opnieuw nodig.
  if (state.unlocked) {
    if (name) state.studentName = name;
    save();
    showApp();
    return;
  }

  if (!name) {
    $('gateMsg').textContent = 'Vul eerst je naam in.';
    $('gateMsg').className = 'msg error';
    $('studentName').focus();
    return;
  }

  if (norm($('accessCode').value) === norm(APP_CONFIG.teacherCode)) {
    state.unlocked = true;
    state.studentName = name;
    save();
    showApp();
  } else {
    $('gateMsg').textContent = 'De code klopt niet. Vraag je docent om de juiste code.';
    $('gateMsg').className = 'msg error';
  }
}

function showApp() {
  $('gate').classList.add('hidden');
  $('app').classList.remove('hidden');
  $('homeScreen').classList.remove('hidden');
  $('trainerScreen').classList.add('hidden');
  updateStats();
  updateMasteryNow();
}

$('unlockBtn').onclick = unlock;
$('studentName').onkeydown = e => { if (e.key === 'Enter') $('accessCode').focus(); };
$('studentName').value = state.studentName || '';
updateStudentName();
$('accessCode').onkeydown = e => { if (e.key === 'Enter') unlock(); };
$('checkBtn').onclick = check;
$('nextBtn').onclick = nextQuestion;
$('startTrainingBtn').onclick = () => {
  $('homeScreen').classList.add('hidden');
  $('trainerScreen').classList.remove('hidden');
  nextQuestion();
};
$('backHomeBtn').onclick = () => {
  $('trainerScreen').classList.add('hidden');
  $('homeScreen').classList.remove('hidden');
  updateStats();
  updateMasteryNow();
};
$('answer').onkeydown = e => { if (e.key === 'Enter') check(); };
$('skipBtn').onclick = () => {
  if (current && !answered) {
    state.queue.push(current.idx);
    save();
    nextQuestion();
  }
};
$('closeRankUp').onclick = () => $('rankUp').classList.add('hidden');
$('teacherBtn').onclick = () => $('teacherPanel').classList.remove('hidden');
$('closeTeacher').onclick = () => $('teacherPanel').classList.add('hidden');

let deferredInstallPrompt = null;

function isInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    document.referrer.startsWith('android-app://');
}

function updateInstallButton() {
  const btn = $('installBtn');
  if (!btn) return;
  // Always show on the welcome screen unless the app is already installed.
  if (isInstalled()) {
    btn.classList.add('hidden');
    return;
  }
  btn.classList.remove('hidden');
}

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  updateInstallButton();
});

$('installBtn').onclick = async () => {
  const help = $('installInstructions');
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const result = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (result.outcome === 'accepted') {
      $('installBtn').classList.add('hidden');
      if (help) help.classList.add('hidden');
    }
    return;
  }

  // Fallback: give platform-specific instructions.
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (help) {
    help.classList.remove('hidden');
    if (ios) {
      help.innerHTML = '<b>iPhone/iPad:</b> tik op <b>Deel</b> en kies <b>Zet op beginscherm</b>.';
    } else {
      help.innerHTML = '<b>Android:</b> tik rechtsboven op <b>⋮</b> en kies <b>App installeren</b> of <b>Toevoegen aan startscherm</b>.';
    }
  }
};

window.addEventListener('appinstalled', () => $('installBtn').classList.add('hidden'));

$('answer').addEventListener('focus', () => {
  setTimeout(() => $('answer').scrollIntoView({behavior:'smooth', block:'center'}), 250);
});

function resetProgress() {
  const first = confirm(`Let op: hiermee worden al je punten, goede en foute antwoorden, reeks, dagelijkse score en begrippenvoortgang gewist. Je naam en toegang blijven behouden.\n\nWil je echt opnieuw beginnen?`);
  if (!first) return;
  const second = prompt('Laatste controle: typ OPNIEUW om je voortgang definitief te wissen.');
  if (second !== 'OPNIEUW') {
    alert('De voortgang is niet gewist.');
    return;
  }

  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  state.mastery = {};
  state.queue = [];
  state.asked = 0;
  state.daily = {};
  state.lastDate = '';
  save();
  current = null;
  answered = false;
  lastQuestionIndex = null;
  updateStats();
  updateMasteryNow();
  alert('Je voortgang is gewist. Je kunt opnieuw beginnen!');
}
const resetTeacherBtn = $('resetBtn'); if (resetTeacherBtn) resetTeacherBtn.onclick = resetProgress;
const resetHomeBtn = $('resetProgressHomeBtn'); if (resetHomeBtn) resetHomeBtn.onclick = resetProgress;

installRankSync();
updateInstallButton();
updateStats();
  updateMasteryNow();
updateDaily();
if (state.unlocked) showApp();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=25').catch(() => {});
