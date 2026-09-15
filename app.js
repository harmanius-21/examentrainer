const $ = id => document.getElementById(id);
const STORAGE = 'geschiedenisTrainerV2';

let state = JSON.parse(localStorage.getItem(STORAGE) || 'null') || {
  unlocked: false,
  score: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  mastery: {},
  queue: [],
  asked: 0
};

let current = null;
let answered = false;
const norm = s => String(s ?? '').toLowerCase().trim().replace(/\s+/g, ' ');
const BANK = Array.isArray(QUESTIONS[0]) ? QUESTIONS.flat() : QUESTIONS;

function save() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
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
}

function buildQueue() {
  // Begrippen die nog weinig beheerst zijn, komen vaker terug.
  const weighted = [];
  BANK.forEach((q, i) => {
    const mastery = state.mastery[i] || 0;
    const weight = Math.max(1, 4 - mastery);
    for (let n = 0; n < weight; n++) weighted.push(i);
  });

  // Schudden zonder sorteerfunctie met een willekeurige comparator.
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
  $('question').textContent = current.question;
  $('answer').value = '';
  $('answer').disabled = false;
  $('checkBtn').disabled = false;
  $('checkBtn').classList.remove('hidden');
  $('nextBtn').classList.add('hidden');
  $('feedback').className = 'feedback';
  $('feedback').textContent = '';
  $('answer').focus();
  save();
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
  const ok = current.answers.some(a => norm(a) === given);

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
    // Foute vraag komt gegarandeerd terug.
    state.queue.push(current.idx);
    $('feedback').className = 'feedback error';
    $('feedback').textContent = `✗ Nog niet goed. Goed antwoord: ${current.answers.join(' / ')}`;
  }

  $('answer').disabled = true;
  $('checkBtn').disabled = true;
  $('nextBtn').classList.remove('hidden');
  updateStats();
  save();
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
$('teacherBtn').onclick = () => $('teacherPanel').classList.remove('hidden');
$('closeTeacher').onclick = () => $('teacherPanel').classList.add('hidden');
$('resetBtn').onclick = () => {
  if (confirm('Weet je zeker dat je de voortgang op dit apparaat wilt wissen?')) {
    localStorage.removeItem(STORAGE);
    location.reload();
  }
};

updateStats();
if (state.unlocked) showApp();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js?v=3').catch(() => {});
