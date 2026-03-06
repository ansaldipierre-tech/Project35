const STORAGE_KEYS = {
  openedMonths: "cadeaux35.openedMonths",
  config: "cadeaux35.config",
  passcode: "cadeaux35.passcode",
  adminPasscode: "cadeaux35.adminPasscode",
  demoDate: "cadeaux35.demoDate",
  demoEnabled: "cadeaux35.demoEnabled",
  darkMode: "cadeaux35.darkMode",
};

const DEFAULT_PASSCODE = "bibdu13";
const MONTH_NAMES = ["Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", "Janvier", "Février"];

const defaultConfig = {
  meta: {
    wifeName: "Ma Bib",
    nickname: "Ma louve",
    privateJoke1: "{PRIVATE_JOKE_1}",
    privateJoke2: "{PRIVATE_JOKE_2}",
    introLetter:
      "Mon tendre amour, \n\nCette année, l'anniversaire n'est qu'un seul jour, mais à travers lui, ce que l'on célèbre c'est une année entière joyeuse et riche qui nous attend. Pour t'accompagner toute l'année de tes 35 ans (techniquement ta 36em année mais bon restons jeunes), chaque 1er du mois t’offre un petit clin d’œil. Chaque cadeau ne sera en revanche débloqué que lorsque tu auras trouvé la réponse grâce à des indices, qui seront disponibles progressivement.\n\nEn espérant que la sélection te plaise",
    dailyLines: [
      "Rappel du jour : t’es ma préférée !!"
      "Un sourire en pensant à Jentivilarus"
      "Juste pour info, j'ai besoin d'un câlin"
      "Je t’aime plus que les jeux de société (et c’est énorme)"
      "Une journée sans rire est une journée perdue"
      "Le plaisir que j'éprouve à tes côtés est sans limite"
      "J'aime te regarder te doucher (c'est creep ou pas?)"
      "Quid de chanter ensemble ?"
      "La vie est belle"
      "Ton sourire illumine ma vie"
      "J'aime ton corps"
      "Trop hâte d'un gros câlin"
      "Qu'est ce qu'on se cuisine ce soir?"
      "On s'embrasse les yeux fermés ou les yeux ouverts?"
      "Tu me fais vibrer en permanence"
      "J'aime dormir collé à toi"
      "Alors la journée se passe bien?"
      "Je suis heureux avec toi chaque jour"
    ],
  },
  months: MONTH_NAMES.map((monthNameFr, idx) => {
    const id = idx + 1;
    const key = String(id).padStart(2, "0");
    return {
      monthId: id,
      monthNameFr,
      clueText: `Énigme ${id} : quel souvenir cache INSIDE_JOKE_${key} ?`,
      hintText: `Petit indice : pense à SOUVENIR_${key}.`,
      acceptedAnswers: [`INSIDE_JOKE_${key}`, `inside joke ${id}`, `private joke ${id}`],
      revealTitle: `Cadeau ${id} – ${monthNameFr}`,
      revealMessage: `Bravo {SURNOM} 💘 Tu as trouvé !`,
      giftDetails: `DÉTAIL_CADEAU_${key}`,
      instructions: `INSTRUCTION_${key}`,
      imageUrl: "",
    };
  }),
};

const state = {
  config: loadConfig(),
  openedMonths: loadOpenedMonths(),
  unlocked: false,
  started: false,
  currentMonthTries: {},
  demoEnabled: localStorage.getItem(STORAGE_KEYS.demoEnabled) === "true",
  demoDate: localStorage.getItem(STORAGE_KEYS.demoDate) || "",
  darkMode: localStorage.getItem(STORAGE_KEYS.darkMode) === "true",
};

const els = {
  app: document.getElementById("app"),
  passcodeDialog: document.getElementById("passcodeDialog"),
  passcodeForm: document.getElementById("passcodeForm"),
  passcodeInput: document.getElementById("passcodeInput"),
  passcodeError: document.getElementById("passcodeError"),
  heroTitle: document.getElementById("heroTitle"),
  dailyLine: document.getElementById("dailyLine"),
  introLetter: document.getElementById("introLetter"),
  coverTitle: document.getElementById("coverTitle"),
  coverScreen: document.getElementById("coverScreen"),
  experience: document.getElementById("experience"),
  startExperienceBtn: document.getElementById("startExperienceBtn"),
  progressText: document.getElementById("progressText"),
  stamps: document.getElementById("stamps"),
  monthsGrid: document.getElementById("monthsGrid"),
  monthModal: document.getElementById("monthModal"),
  monthModalBody: document.getElementById("monthModalBody"),
  closeMonthModal: document.getElementById("closeMonthModal"),
  adminBtn: document.getElementById("adminBtn"),
  adminDialog: document.getElementById("adminDialog"),
  closeAdminModal: document.getElementById("closeAdminModal"),
  adminPassForm: document.getElementById("adminPassForm"),
  adminPassInput: document.getElementById("adminPassInput"),
  adminPassError: document.getElementById("adminPassError"),
  adminPanel: document.getElementById("adminPanel"),
  previewBtn: document.getElementById("previewBtn"),
  adminMetaForm: document.getElementById("adminMetaForm"),
  adminMetaMsg: document.getElementById("adminMetaMsg"),
  adminMonthSelect: document.getElementById("adminMonthSelect"),
  adminEditForm: document.getElementById("adminEditForm"),
  adminSaveMsg: document.getElementById("adminSaveMsg"),
  exportConfigBtn: document.getElementById("exportConfigBtn"),
  importConfigInput: document.getElementById("importConfigInput"),
  resetConfigBtn: document.getElementById("resetConfigBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  demoToggleBtn: document.getElementById("demoToggleBtn"),
  demoPanel: document.getElementById("demoPanel"),
  demoDateInput: document.getElementById("demoDateInput"),
  clearDemoDateBtn: document.getElementById("clearDemoDateBtn"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
};

init();

function init() {
  initPasscodes();
  bindEvents();
  initAdminMonthSelect();
  applyTheme();
  updateDemoControls();
  renderStaticTexts();
  render();
}

function initPasscodes() {
  if (!localStorage.getItem(STORAGE_KEYS.passcode)) localStorage.setItem(STORAGE_KEYS.passcode, DEFAULT_PASSCODE);
  if (!localStorage.getItem(STORAGE_KEYS.adminPasscode)) localStorage.setItem(STORAGE_KEYS.adminPasscode, DEFAULT_PASSCODE);
}

function bindEvents() {
  els.passcodeForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const pass = localStorage.getItem(STORAGE_KEYS.passcode) || DEFAULT_PASSCODE;
    if (els.passcodeInput.value === pass) {
      state.unlocked = true;
      els.passcodeDialog.close();
      els.passcodeError.textContent = "";
      render();
      return;
    }
    els.passcodeError.textContent = "Code raté 😘 C’est notre mot secret, pas celui du Wi‑Fi.";
  });

  els.startExperienceBtn.addEventListener("click", () => {
    state.started = true;
    render();
  });

  els.closeMonthModal.addEventListener("click", () => els.monthModal.close());
  els.adminBtn.addEventListener("click", () => els.adminDialog.showModal());
  els.closeAdminModal.addEventListener("click", closeAdmin);

  els.adminPassForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const adminPass = localStorage.getItem(STORAGE_KEYS.adminPasscode) || DEFAULT_PASSCODE;
    if (els.adminPassInput.value !== adminPass) {
      els.adminPassError.textContent = "Nope, l’atelier reste fermé 🫣";
      return;
    }
    els.adminPassError.textContent = "";
    els.adminPassForm.classList.add("hidden");
    els.adminPanel.classList.remove("hidden");
    loadMetaForm();
    loadMonthIntoAdminForm(Number(els.adminMonthSelect.value));
  });

  els.previewBtn.addEventListener("click", () => {
    closeAdmin();
    state.started = true;
    render();
  });

  els.adminMetaForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const fd = new FormData(els.adminMetaForm);
    state.config.meta.wifeName = String(fd.get("wifeName") || "").trim();
    state.config.meta.nickname = String(fd.get("nickname") || "").trim();
    state.config.meta.privateJoke1 = String(fd.get("privateJoke1") || "").trim();
    state.config.meta.privateJoke2 = String(fd.get("privateJoke2") || "").trim();
    state.config.meta.introLetter = String(fd.get("introLetter") || "").trim();
    state.config.meta.dailyLines = String(fd.get("dailyLines") || "")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    localStorage.setItem(STORAGE_KEYS.passcode, String(fd.get("passcode") || DEFAULT_PASSCODE).trim());
    localStorage.setItem(STORAGE_KEYS.adminPasscode, String(fd.get("adminPasscode") || DEFAULT_PASSCODE).trim());

    persistConfig();
    renderStaticTexts();
    render();
    els.adminMetaMsg.textContent = "Global enregistré 💞";
  });

  els.adminMonthSelect.addEventListener("change", () => loadMonthIntoAdminForm(Number(els.adminMonthSelect.value)));
  els.adminEditForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const monthId = Number(els.adminMonthSelect.value);
    const month = state.config.months.find((m) => m.monthId === monthId);
    if (!month) return;

    const fd = new FormData(els.adminEditForm);
    month.monthNameFr = String(fd.get("monthNameFr") || "").trim();
    month.clueText = String(fd.get("clueText") || "").trim();
    month.hintText = String(fd.get("hintText") || "").trim();
    month.acceptedAnswers = String(fd.get("acceptedAnswers") || "").split("\n").map((s) => s.trim()).filter(Boolean);
    month.revealTitle = String(fd.get("revealTitle") || "").trim();
    month.revealMessage = String(fd.get("revealMessage") || "").trim();
    month.giftDetails = String(fd.get("giftDetails") || "").trim();
    month.instructions = String(fd.get("instructions") || "").trim();
    month.imageUrl = String(fd.get("imageUrl") || "").trim();

    persistConfig();
    render();
    els.adminSaveMsg.textContent = "Mois sauvegardé ✨";
  });

  els.exportConfigBtn.addEventListener("click", exportConfig);
  els.importConfigInput.addEventListener("change", importConfig);

  els.resetConfigBtn.addEventListener("click", () => {
    if (!confirm("Réinitialiser le contenu personnalisé ?")) return;
    state.config = structuredClone(defaultConfig);
    persistConfig();
    initAdminMonthSelect();
    loadMetaForm();
    loadMonthIntoAdminForm(Number(els.adminMonthSelect.value));
    renderStaticTexts();
    render();
  });

  els.resetProgressBtn.addEventListener("click", () => {
    if (!confirm("Réinitialiser les mois ouverts ?")) return;
    state.openedMonths = [];
    localStorage.setItem(STORAGE_KEYS.openedMonths, JSON.stringify([]));
    render();
  });

  els.demoToggleBtn.addEventListener("click", () => {
    state.demoEnabled = !state.demoEnabled;
    localStorage.setItem(STORAGE_KEYS.demoEnabled, String(state.demoEnabled));
    if (!state.demoEnabled) {
      state.demoDate = "";
      localStorage.removeItem(STORAGE_KEYS.demoDate);
    }
    updateDemoControls();
    render();
  });

  els.demoDateInput.addEventListener("change", () => {
    state.demoDate = els.demoDateInput.value;
    localStorage.setItem(STORAGE_KEYS.demoDate, state.demoDate);
    render();
  });

  els.clearDemoDateBtn.addEventListener("click", () => {
    state.demoDate = "";
    localStorage.removeItem(STORAGE_KEYS.demoDate);
    updateDemoControls();
    render();
  });

  els.themeToggleBtn.addEventListener("click", () => {
    state.darkMode = !state.darkMode;
    localStorage.setItem(STORAGE_KEYS.darkMode, String(state.darkMode));
    applyTheme();
  });
}

function loadConfig() {
  const raw = localStorage.getItem(STORAGE_KEYS.config);
  if (!raw) return structuredClone(defaultConfig);
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return { meta: structuredClone(defaultConfig.meta), months: parsed };
    }
    return validateConfig(parsed) ? parsed : structuredClone(defaultConfig);
  } catch {
    return structuredClone(defaultConfig);
  }
}

function validateConfig(config) {
  if (!config || typeof config !== "object" || !config.meta || !Array.isArray(config.months)) return false;
  if (config.months.length !== 12) return false;
  return config.months.every((m) => typeof m.monthId === "number" && typeof m.monthNameFr === "string" && typeof m.clueText === "string" && Array.isArray(m.acceptedAnswers) && typeof m.revealTitle === "string" && typeof m.revealMessage === "string");
}

function persistConfig() {
  localStorage.setItem(STORAGE_KEYS.config, JSON.stringify(state.config));
}

function loadOpenedMonths() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.openedMonths) || "[]");
    return Array.isArray(parsed) ? parsed.filter((x) => Number.isInteger(x) && x >= 1 && x <= 12) : [];
  } catch {
    return [];
  }
}

function renderStaticTexts() {
  const wife = state.config.meta.wifeName || "Mon amour";
  els.heroTitle.textContent = `Pour ${wife}, 35 ans ✨`;
  els.coverTitle.textContent = injectTokens(`Pour ${wife}, 35 ans ✨`);
  els.introLetter.textContent = injectTokens(state.config.meta.introLetter || "");
  const line = pickDailyLine();
  els.dailyLine.textContent = injectTokens(line);
}

function pickDailyLine() {
  const lines = state.config.meta.dailyLines?.length ? state.config.meta.dailyLines : defaultConfig.meta.dailyLines;
  const today = getCurrentLocalDate();
  const dayKey = Math.floor(today.getTime() / 86400000);
  return lines[dayKey % lines.length];
}

function render() {
  if (!state.unlocked) {
    els.app.classList.add("hidden");
    return;
  }

  els.app.classList.remove("hidden");
  els.coverScreen.classList.toggle("hidden", state.started);
  els.experience.classList.toggle("hidden", !state.started);
  if (!state.started) return;

  const today = getCurrentLocalDate();
  const cycleStartYear = computeCycleStartYear(today);

  els.progressText.textContent = `${state.openedMonths.length}/12 ouverts`;
  renderStamps();

  els.monthsGrid.innerHTML = "";
  state.config.months.slice().sort((a, b) => a.monthId - b.monthId).forEach((month) => {
    const unlockDate = getUnlockDate(month.monthId, cycleStartYear);
    const isOpened = state.openedMonths.includes(month.monthId);
    const isAvailable = today >= unlockDate;
    const status = isOpened ? "opened" : (isAvailable ? "available" : "locked");

    const card = document.createElement("article");
    card.className = `month-card ${status === "available" ? "available-glow" : ""}`;

    const ribbon = status === "locked" ? `<span class="ribbon-lock">Ruban fermé · ${formatDateFr(unlockDate)}</span>` : "";
    const statusText = status === "opened" ? "Souvenir déjà ouvert" : (status === "available" ? "Une enveloppe t’attend" : "Bientôt le prochain chapitre");

    card.innerHTML = `
      <div class="envelope-top"></div>
      <div class="seal">${month.monthId}</div>
      <div class="card-body">
        <h3>${injectTokens(month.monthNameFr)}</h3>
        <p>${statusText}</p>
        ${ribbon}
      </div>
    `;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ribbon-btn";
    btn.textContent = status === "locked" ? "Chut..." : (status === "opened" ? "Relire la lettre" : "Ouvrir l’enveloppe");
    btn.disabled = status === "locked";
    btn.addEventListener("click", () => openMonthModal(month.monthId, status));
    card.querySelector(".card-body").appendChild(btn);

    els.monthsGrid.appendChild(card);
  });
}

function renderStamps() {
  els.stamps.innerHTML = "";
  for (let i = 1; i <= 12; i += 1) {
    const stamp = document.createElement("span");
    stamp.className = `stamp ${state.openedMonths.includes(i) ? "open" : ""}`;
    stamp.textContent = i;
    els.stamps.appendChild(stamp);
  }
}

function openMonthModal(monthId, status) {
  const month = state.config.months.find((m) => m.monthId === monthId);
  if (!month) return;

  if (status === "opened") {
    els.monthModalBody.innerHTML = revealHtml(month);
    els.monthModal.showModal();
    return;
  }

  const tries = state.currentMonthTries[monthId] || 0;
  els.monthModalBody.innerHTML = `
    <h2>${injectTokens(month.monthNameFr)}</h2>
    <p class="note-clue">${injectTokens(month.clueText)}</p>
    <label for="answerInput">Ta réponse secrète</label>
    <input id="answerInput" class="notebook-input" type="text" placeholder="Écris ici, ma détective préférée..." />
    <p id="answerError" class="error-text"></p>
    <div class="admin-toolbar">
      <button id="submitAnswerBtn" class="ribbon-btn" type="button">Valider</button>
      <button id="hintBtn" class="wax-btn ${tries < 2 || !month.hintText ? "hidden" : ""}" type="button">Petit indice</button>
    </div>
    <div id="hintBox"></div>
  `;

  const answerInput = document.getElementById("answerInput");
  const answerError = document.getElementById("answerError");
  const hintBtn = document.getElementById("hintBtn");
  const hintBox = document.getElementById("hintBox");

  document.getElementById("submitAnswerBtn").addEventListener("click", () => {
    const attempt = answerInput.value;
    if (isAnswerAccepted(attempt, month.acceptedAnswers)) {
      markOpened(month.monthId);
      els.monthModalBody.innerHTML = revealHtml(month);
      popConfetti();
      render();
      return;
    }

    state.currentMonthTries[month.monthId] = (state.currentMonthTries[month.monthId] || 0) + 1;
    const triesNow = state.currentMonthTries[month.monthId];
    answerError.textContent = triesNow < 2
      ? "Hmm... presque ! On dirait un souvenir flou 😏"
      : "Toujours pas 💭 Essaie avec un détail ultra-nôtre.";
    if (triesNow >= 2 && month.hintText) hintBtn.classList.remove("hidden");
  });

  hintBtn?.addEventListener("click", () => {
    hintBox.innerHTML = `<div class="sticky-hint">${injectTokens(month.hintText || "")}</div>`;
  });

  els.monthModal.showModal();
}

function revealHtml(month) {
  const message = injectTokens(month.revealMessage);
  return `
    <h2>${injectTokens(month.revealTitle)}</h2>
    <p>${message}</p>
    <div class="polaroid">
      ${month.imageUrl ? `<img src="${month.imageUrl}" alt="Souvenir ${injectTokens(month.monthNameFr)}" />` : `<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#f8e6dd"/><path d="M20 130 C 70 70, 120 160, 170 100" stroke="#c96f5b" stroke-width="4" fill="none"/><circle cx="250" cy="60" r="28" fill="#efb8b2"/></svg>`}
      <p>${injectTokens(month.giftDetails || "Petit mot doux en cours...")}</p>
    </div>
    ${month.instructions ? `<p><strong>Mode d’emploi :</strong> ${injectTokens(month.instructions)}</p>` : ""}
  `;
}

function popConfetti() {
  const burstCount = 14;
  for (let i = 0; i < burstCount; i += 1) {
    const el = document.createElement("span");
    el.className = "confetti";
    el.style.setProperty("--dx", `${(Math.random() - 0.5) * 220}px`);
    el.style.setProperty("--dy", `${80 + Math.random() * 150}px`);
    els.monthModalBody.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
}

function markOpened(monthId) {
  if (!state.openedMonths.includes(monthId)) {
    state.openedMonths.push(monthId);
    state.openedMonths.sort((a, b) => a - b);
    localStorage.setItem(STORAGE_KEYS.openedMonths, JSON.stringify(state.openedMonths));
  }
}

function normalizeAnswer(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\p{P}\p{S}]/gu, " ")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function isAnswerAccepted(input, acceptedAnswers) {
  const target = normalizeAnswer(input);
  if (!target) return false;
  return (acceptedAnswers || []).some((a) => normalizeAnswer(a) === target);
}

function computeCycleStartYear(today) {
  const year = today.getFullYear();
  return today >= new Date(year, 2, 1) ? year : year - 1;
}

function getUnlockDate(monthId, cycleStartYear) {
  if (monthId <= 10) return new Date(cycleStartYear, monthId + 1, 1);
  if (monthId === 11) return new Date(cycleStartYear + 1, 0, 1);
  return new Date(cycleStartYear + 1, 1, 1);
}

function getCurrentLocalDate() {
  if (state.demoEnabled && state.demoDate) {
    const [y, m, d] = state.demoDate.split("-").map(Number);
    if (y && m && d) return new Date(y, m - 1, d);
  }
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function formatDateFr(date) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

function injectTokens(value) {
  return String(value || "")
    .replaceAll("{SURNOM}", state.config.meta.nickname || "{SURNOM}")
    .replaceAll("{PRIVATE_JOKE_1}", state.config.meta.privateJoke1 || "{PRIVATE_JOKE_1}")
    .replaceAll("{PRIVATE_JOKE_2}", state.config.meta.privateJoke2 || "{PRIVATE_JOKE_2}");
}

function initAdminMonthSelect() {
  els.adminMonthSelect.innerHTML = state.config.months
    .slice()
    .sort((a, b) => a.monthId - b.monthId)
    .map((m) => `<option value="${m.monthId}">${m.monthId}. ${m.monthNameFr}</option>`)
    .join("");
}

function loadMetaForm() {
  els.adminMetaForm.wifeName.value = state.config.meta.wifeName || "";
  els.adminMetaForm.nickname.value = state.config.meta.nickname || "";
  els.adminMetaForm.privateJoke1.value = state.config.meta.privateJoke1 || "";
  els.adminMetaForm.privateJoke2.value = state.config.meta.privateJoke2 || "";
  els.adminMetaForm.introLetter.value = state.config.meta.introLetter || "";
  els.adminMetaForm.dailyLines.value = (state.config.meta.dailyLines || []).join("\n");
  els.adminMetaForm.passcode.value = localStorage.getItem(STORAGE_KEYS.passcode) || DEFAULT_PASSCODE;
  els.adminMetaForm.adminPasscode.value = localStorage.getItem(STORAGE_KEYS.adminPasscode) || DEFAULT_PASSCODE;
}

function loadMonthIntoAdminForm(monthId) {
  const month = state.config.months.find((m) => m.monthId === monthId);
  if (!month) return;
  els.adminEditForm.monthNameFr.value = month.monthNameFr;
  els.adminEditForm.clueText.value = month.clueText;
  els.adminEditForm.hintText.value = month.hintText || "";
  els.adminEditForm.acceptedAnswers.value = (month.acceptedAnswers || []).join("\n");
  els.adminEditForm.revealTitle.value = month.revealTitle;
  els.adminEditForm.revealMessage.value = month.revealMessage;
  els.adminEditForm.giftDetails.value = month.giftDetails || "";
  els.adminEditForm.instructions.value = month.instructions || "";
  els.adminEditForm.imageUrl.value = month.imageUrl || "";
}

function exportConfig() {
  const blob = new Blob([JSON.stringify(state.config, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "cadeaux35-config.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

async function importConfig(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!validateConfig(parsed)) throw new Error("invalid");
    state.config = parsed;
    persistConfig();
    initAdminMonthSelect();
    loadMetaForm();
    loadMonthIntoAdminForm(Number(els.adminMonthSelect.value));
    renderStaticTexts();
    render();
  } catch {
    alert("Import impossible : format JSON invalide.");
  } finally {
    event.target.value = "";
  }
}

function closeAdmin() {
  els.adminDialog.close();
  els.adminPassForm.classList.remove("hidden");
  els.adminPanel.classList.add("hidden");
  els.adminPassInput.value = "";
  els.adminPassError.textContent = "";
}

function updateDemoControls() {
  els.demoToggleBtn.textContent = `Mode test : ${state.demoEnabled ? "activé" : "désactivé"}`;
  els.demoPanel.classList.toggle("hidden", !state.demoEnabled);
  els.demoDateInput.value = state.demoDate;
}

function applyTheme() {
  document.body.classList.toggle("night", state.darkMode);
  els.themeToggleBtn.textContent = state.darkMode ? "Mode doux" : "Soirée cocooning";
}
