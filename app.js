const $ = id => document.getElementById(id);
const STORAGE = 'geschiedenisTrainerV12';

const RANKS = [
  { min: 0,    icon: '🕯️', title: 'Historische Rekruut' },
  { min: 100,  icon: '📜', title: 'Tijdreiziger' },
  { min: 250,  icon: '🏛️', title: 'Geschiedenisleerling' },
  { min: 500,  icon: '🗺️', title: 'Historisch Ontdekker' },
  { min: 750,  icon: '🎓', title: 'Examenkenner' },
  { min: 1000, icon: '🏆', title: 'Historische Meester' },
  { min: 1500, icon: '👑', title: 'Meester van het Verleden' },
  { min: 2500, icon: '⚜️', title: 'Grootmeester Geschiedenis' },
  { min: 5000, icon: '👑', title: 'Legende van de Geschiedenis' }
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
  const rank = getRank(state.score);
  const next = getNextRank(state.score);
  $('rankIcon').textContent = rank.icon;
  $('rankTitle').textContent = rank.title;
  $('rankScore').textContent = `${state.score} punten`;
  if (next) {
    const range = next.min - rank.min;
    const progress = Math.max(0, Math.min(100, Math.round((state.score - rank.min) / range * 100)));
    $('rankBar').style.width = progress + '%';
    $('nextRankText').textContent = `Nog ${next.min - state.score} punten tot ${next.icon} ${next.title}`;
  } else {
    $('rankBar').style.width = '100%';
    $('nextRankText').textContent = 'Je hebt de hoogste rang bereikt!';
  }
}

function updateMasteryNow() {
  const mastered = Object.values(state.mastery || {}).filter(v => Number(v) >= 3).length;
  const total = Array.isArray(questions) ? questions.length : 0;
  const el = $('masteredCount');
  if (el) el.textContent = `${mastered}/${total}`;
}

function updateStats() {
  $('score').textContent = state.score;
  $('correct').textContent = state.correct;
  $('wrong').textContent = state.wrong;
  $('streak').textContent = state.streak;
  const mastered = Object.values(state.mastery).filter(v => v >= 3).length;
  const total = BANK.length;
  const pct = total ? Math.round(mastered / total * 100) : 0;
  $('masteryPct').textContent = pct + '%';
  $('progressText').textContent = `${mastered} van ${total} beheerst`;
  $('barFill').style.width = pct + '%';
  if ($('progressTextHome')) $('progressTextHome').textContent = `${mastered} van ${total} beheerst`;
  if ($('barFillHome')) $('barFillHome').style.width = pct + '%';
  if ($('progressTextTrainer')) $('progressTextTrainer').textContent = `${mastered} van ${total} beheerst`;
  if ($('barFillTrainer')) $('barFillTrainer').style.width = pct + '%';
  if ($('masteryPctHome')) $('masteryPctHome').textContent = pct + '%';
  if ($('wrongHome')) $('wrongHome').textContent = state.wrong;
  if ($('streakHome')) $('streakHome').textContent = state.streak;
  updateDaily();
  updateRank();
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
  $('checkBtn').disabled = true;
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

function unlock() {
  const name = String($('studentName')?.value || state.studentName || '').trim();

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

$('resetBtn').onclick = () => {
  if (confirm('Weet je zeker dat je de voortgang op dit apparaat wilt wissen?')) {
    localStorage.removeItem(STORAGE);
    location.reload();
  }
};

updateInstallButton();
updateStats();
  updateMasteryNow();
updateDaily();
if (state.unlocked) showApp();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=13').catch(() => {});
