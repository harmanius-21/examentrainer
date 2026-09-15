const $ = id => document.getElementById(id);
const STORAGE = 'geschiedenisTrainerV6';

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
  unlocked: false, score: 0, correct: 0, wrong: 0, streak: 0,
  mastery: {}, queue: [], asked: 0
};

let current = null;
let answered = false;

const norm = s => String(s ?? '').toLowerCase().trim().replace(/\s+/g, ' ');
const answerNorm = s => norm(s).replace(/\s+/g, '');

function answersMatch(given, expected) {
  const a = answerNorm(given);
  const b = answerNorm(expected);
  if (a === b) return true;
  // Eén ontbrekende of extra e aan het einde is toegestaan.
  if (a + 'e' === b) return true;
  if (b + 'e' === a) return true;
  return false;
}

const BANK = Array.isArray(QUESTIONS[0]) ? QUESTIONS.flat() : QUESTIONS;

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
  const idx = state.queue.shift();
  current = { ...BANK[idx], idx };
  answered = false;
  state.asked++;
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
  // Op mobiel het veld zichtbaar houden, maar het toetsenbord niet onnodig openen.
  if (window.matchMedia('(min-width: 700px)').matches) $('answer').focus();
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
    $('feedback').textContent = `✗ Nog niet goed. Goed antwoord: ${current.answers.join(' / ')}`;
  }

  const newRank = getRank(state.score);
  $('answer').disabled = true;
  $('checkBtn').disabled = true;
  $('nextBtn').classList.remove('hidden');
  updateStats();
  save();

  if (newRank.min > oldRank.min) {
    setTimeout(() => {
      $('rankUpIcon').textContent = newRank.icon;
      $('rankUpTitle').textContent = newRank.title;
      $('rankUp').classList.remove('hidden');
    }, 350);
  }
}

function unlock() {
  if (norm($('accessCode').value) === norm(APP_CONFIG.teacherCode)) {
    state.unlocked = true;
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
  updateStats();
  nextQuestion();
}

$('unlockBtn').onclick = unlock;
$('accessCode').onkeydown = e => { if (e.key === 'Enter') unlock(); };
$('checkBtn').onclick = check;
$('nextBtn').onclick = nextQuestion;
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
if (state.unlocked) showApp();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=6').catch(() => {});
