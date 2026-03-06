const STORAGE = {
  config: "cadeaux35.config.v2",
  opened: "cadeaux35.openedMonths.v2",
  usedMoments: "cadeaux35.usedMoments.v2",
  demoEnabled: "cadeaux35.demoEnabled.v2",
  demoDate: "cadeaux35.demoDate.v2",
};

const defaultConfig = {
  passcodes: {
    start: "amour35",
    admin: "amour35",
  },
  meta: {
    siteTitle: "L'année du Love",
    siteEdition: "Édition spéciale 2026",
    siteIntro: "Douze box, douze moments pour sourire, se souvenir, et t’aimer encore plus fort.",
    monthScheme: "marchToFeb", // or janToDec
    wrongAnswerMessage: "Presque... mais ce n’est pas encore notre private joke 😘",
  },
  months: [
    { monthId: 1, monthNameFr: "Mars", clueText: "INSIDE_JOKE_01", hintText: "Indice 01", acceptedAnswers: ["INSIDE_JOKE_01", "inside joke 1"], revealTitle: "Box Mars", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_01", imageUrl: "" },
    { monthId: 2, monthNameFr: "Avril", clueText: "INSIDE_JOKE_02", hintText: "Indice 02", acceptedAnswers: ["INSIDE_JOKE_02", "inside joke 2"], revealTitle: "Box Avril", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_02", imageUrl: "" },
    { monthId: 3, monthNameFr: "Mai", clueText: "INSIDE_JOKE_03", hintText: "Indice 03", acceptedAnswers: ["INSIDE_JOKE_03", "inside joke 3"], revealTitle: "Box Mai", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_03", imageUrl: "" },
    { monthId: 4, monthNameFr: "Juin", clueText: "INSIDE_JOKE_04", hintText: "Indice 04", acceptedAnswers: ["INSIDE_JOKE_04", "inside joke 4"], revealTitle: "Box Juin", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_04", imageUrl: "" },
    { monthId: 5, monthNameFr: "Juillet", clueText: "INSIDE_JOKE_05", hintText: "Indice 05", acceptedAnswers: ["INSIDE_JOKE_05", "inside joke 5"], revealTitle: "Box Juillet", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_05", imageUrl: "" },
    { monthId: 6, monthNameFr: "Août", clueText: "INSIDE_JOKE_06", hintText: "Indice 06", acceptedAnswers: ["INSIDE_JOKE_06", "inside joke 6"], revealTitle: "Box Août", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_06", imageUrl: "" },
    { monthId: 7, monthNameFr: "Septembre", clueText: "INSIDE_JOKE_07", hintText: "Indice 07", acceptedAnswers: ["INSIDE_JOKE_07", "inside joke 7"], revealTitle: "Box Septembre", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_07", imageUrl: "" },
    { monthId: 8, monthNameFr: "Octobre", clueText: "INSIDE_JOKE_08", hintText: "Indice 08", acceptedAnswers: ["INSIDE_JOKE_08", "inside joke 8"], revealTitle: "Box Octobre", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_08", imageUrl: "" },
    { monthId: 9, monthNameFr: "Novembre", clueText: "INSIDE_JOKE_09", hintText: "Indice 09", acceptedAnswers: ["INSIDE_JOKE_09", "inside joke 9"], revealTitle: "Box Novembre", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_09", imageUrl: "" },
    { monthId: 10, monthNameFr: "Décembre", clueText: "INSIDE_JOKE_10", hintText: "Indice 10", acceptedAnswers: ["INSIDE_JOKE_10", "inside joke 10"], revealTitle: "Box Décembre", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_10", imageUrl: "" },
    { monthId: 11, monthNameFr: "Janvier", clueText: "INSIDE_JOKE_11", hintText: "Indice 11", acceptedAnswers: ["INSIDE_JOKE_11", "inside joke 11"], revealTitle: "Box Janvier", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_11", imageUrl: "" },
    { monthId: 12, monthNameFr: "Février", clueText: "INSIDE_JOKE_12", hintText: "Indice 12", acceptedAnswers: ["INSIDE_JOKE_12", "inside joke 12"], revealTitle: "Box Février", revealMessage: "Bravo 💝", giftDetails: "DÉTAIL_12", imageUrl: "" },
  ],
  moments: [
    { id: "moment_01", title: "Bon pour un brunch en pyjama", description: "Valable un dimanche au choix." },
    { id: "moment_02", title: "Bon pour un massage 20 min", description: "Avec playlist douce incluse." },
    { id: "moment_03", title: "Bon pour choisir le film", description: "Même si c’est une romcom de Noël." },
  ],
};

const state = {
  config: loadConfig(),
  openedMonths: loadJson(STORAGE.opened, []),
  usedMoments: loadJson(STORAGE.usedMoments, []),
  triesByMonth: {},
  unlocked: false,
  demoEnabled: localStorage.getItem(STORAGE.demoEnabled) === "true",
  demoDate: localStorage.getItem(STORAGE.demoDate) || "",
};

const el = mapEls();
init();

function mapEls() {
  return {
    passcodeGate: document.getElementById("passcodeGate"),
    passcodeForm: document.getElementById("passcodeForm"),
    passcodeInput: document.getElementById("passcodeInput"),
    passcodeError: document.getElementById("passcodeError"),
    adminFromGateBtn: document.getElementById("adminFromGateBtn"),
    app: document.getElementById("app"),
    siteTitle: document.getElementById("siteTitle"),
    siteEdition: document.getElementById("siteEdition"),
    siteIntro: document.getElementById("siteIntro"),
    progressText: document.getElementById("progressText"),
    monthsGrid: document.getElementById("monthsGrid"),
    momentsGrid: document.getElementById("momentsGrid"),
    adminBtn: document.getElementById("adminBtn"),
    demoToggleBtn: document.getElementById("demoToggleBtn"),
    demoPanel: document.getElementById("demoPanel"),
    demoDateInput: document.getElementById("demoDateInput"),
    resetDemoBtn: document.getElementById("resetDemoBtn"),
    monthModal: document.getElementById("monthModal"),
    monthModalBody: document.getElementById("monthModalBody"),
    closeMonthModal: document.getElementById("closeMonthModal"),
    adminModal: document.getElementById("adminModal"),
    closeAdminModal: document.getElementById("closeAdminModal"),
    adminAuthForm: document.getElementById("adminAuthForm"),
    adminPassInput: document.getElementById("adminPassInput"),
    adminPassError: document.getElementById("adminPassError"),
    adminPanel: document.getElementById("adminPanel"),
    exportBtn: document.getElementById("exportBtn"),
    importInput: document.getElementById("importInput"),
    resetOpenedBtn: document.getElementById("resetOpenedBtn"),
    resetMomentsBtn: document.getElementById("resetMomentsBtn"),
    adminMetaForm: document.getElementById("adminMetaForm"),
    adminMetaMsg: document.getElementById("adminMetaMsg"),
    adminMonthSelect: document.getElementById("adminMonthSelect"),
    adminMonthForm: document.getElementById("adminMonthForm"),
    adminMonthMsg: document.getElementById("adminMonthMsg"),
    adminMomentsForm: document.getElementById("adminMomentsForm"),
    adminMomentsMsg: document.getElementById("adminMomentsMsg"),
  };
}

function init() {
  bindEvents();
  renderHeader();
  renderAll();
}

function bindEvents() {
  el.passcodeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (el.passcodeInput.value === state.config.passcodes.start) {
      state.unlocked = true;
      el.passcodeGate.classList.add("hidden");
      el.app.classList.remove("hidden");
      return;
    }
    el.passcodeError.textContent = "Oups, pas ce code-là 💭";
  });

  el.adminFromGateBtn.addEventListener("click", () => {
    el.adminModal.showModal();
  });

  el.adminBtn.addEventListener("click", () => el.adminModal.showModal());
  el.closeAdminModal.addEventListener("click", closeAdmin);

  el.adminAuthForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (el.adminPassInput.value !== state.config.passcodes.admin) {
      el.adminPassError.textContent = "Mot de passe admin incorrect.";
      return;
    }
    el.adminPassError.textContent = "";
    el.adminAuthForm.classList.add("hidden");
    el.adminPanel.classList.remove("hidden");
    fillAdminForms();
  });

  el.exportBtn.addEventListener("click", exportConfig);
  el.importInput.addEventListener("change", importConfig);

  el.resetOpenedBtn.addEventListener("click", () => {
    state.openedMonths = [];
    localStorage.setItem(STORAGE.opened, JSON.stringify([]));
    renderAll();
  });
  el.resetMomentsBtn.addEventListener("click", () => {
    state.usedMoments = [];
    localStorage.setItem(STORAGE.usedMoments, JSON.stringify([]));
    renderMoments();
  });

  el.adminMetaForm.addEventListener("submit", saveMetaForm);
  el.adminMonthSelect.addEventListener("change", () => fillMonthForm(Number(el.adminMonthSelect.value)));
  el.adminMonthForm.addEventListener("submit", saveMonthForm);
  el.adminMomentsForm.addEventListener("submit", saveMomentsForm);

  el.demoToggleBtn.addEventListener("click", () => {
    state.demoEnabled = !state.demoEnabled;
    localStorage.setItem(STORAGE.demoEnabled, String(state.demoEnabled));
    if (!state.demoEnabled) {
      state.demoDate = "";
      localStorage.removeItem(STORAGE.demoDate);
    }
    updateDemoUi();
    renderMonths();
  });

  el.demoDateInput.addEventListener("change", () => {
    state.demoDate = el.demoDateInput.value;
    localStorage.setItem(STORAGE.demoDate, state.demoDate);
    renderMonths();
  });

  el.resetDemoBtn.addEventListener("click", () => {
    state.demoDate = "";
    localStorage.removeItem(STORAGE.demoDate);
    updateDemoUi();
    renderMonths();
  });

  el.closeMonthModal.addEventListener("click", () => el.monthModal.close());
}

function renderAll() {
  renderHeader();
  updateDemoUi();
  renderMonths();
  renderMoments();
}

function renderHeader() {
  el.siteTitle.textContent = state.config.meta.siteTitle;
  el.siteEdition.textContent = state.config.meta.siteEdition;
  el.siteIntro.textContent = state.config.meta.siteIntro;
  el.progressText.textContent = `${state.openedMonths.length}/12 ouverts`;
}

function renderMonths() {
  const today = currentLocalDate();
  const cycleYear = computeCycleStartYear(today, state.config.meta.monthScheme);
  el.monthsGrid.innerHTML = "";

  orderedMonths().forEach((month) => {
    const unlockDate = getUnlockDate(month.monthId, cycleYear, state.config.meta.monthScheme);
    const opened = state.openedMonths.includes(month.monthId);
    const available = today >= unlockDate;
    const status = opened ? "opened" : (available ? "available" : "locked");

    const daysLeft = Math.max(0, Math.ceil((unlockDate - today) / 86400000));

    const card = document.createElement("article");
    card.className = "month-card";
    card.innerHTML = `
      <div class="month-top">
        <span class="icon">🎁</span>
        <span class="badge ${status}">${statusLabel(status)}</span>
      </div>
      <h3>${month.monthNameFr}</h3>
      ${status === "locked" ? `<p class="meta-text">Disponible le ${formatDateFr(unlockDate)}</p><p class="countdown">J-${daysLeft} jours</p>` : ""}
    `;

    const btn = document.createElement("button");
    btn.className = `btn ${status === "locked" ? "btn-soft" : "btn-primary"}`;
    btn.textContent = status === "locked" ? "Patience 😇" : "OUVRIR LA BOX";
    btn.disabled = status === "locked";
    btn.addEventListener("click", () => openMonthModal(month, status));
    card.appendChild(btn);

    el.monthsGrid.appendChild(card);
  });

  el.progressText.textContent = `${state.openedMonths.length}/12 ouverts`;
}

function renderMoments() {
  el.momentsGrid.innerHTML = "";
  state.config.moments.forEach((moment) => {
    const used = state.usedMoments.includes(moment.id);
    const card = document.createElement("article");
    card.className = `moment-card ${used ? "used" : ""}`;
    card.innerHTML = `
      <div class="month-top">
        <span class="icon">🎟️</span>
        <span class="badge ${used ? "opened" : "available"}">${used ? "Utilisé" : "Disponible"}</span>
      </div>
      <h3>${moment.title}</h3>
      <p class="meta-text">${moment.description}</p>
    `;
    const btn = document.createElement("button");
    btn.className = `btn ${used ? "btn-soft" : "btn-primary"}`;
    btn.textContent = used ? "Marquer non utilisé" : "Utiliser ce bon";
    btn.addEventListener("click", () => toggleMoment(moment.id));
    card.appendChild(btn);
    el.momentsGrid.appendChild(card);
  });
}

function toggleMoment(id) {
  if (state.usedMoments.includes(id)) {
    state.usedMoments = state.usedMoments.filter((x) => x !== id);
  } else {
    state.usedMoments.push(id);
  }
  localStorage.setItem(STORAGE.usedMoments, JSON.stringify(state.usedMoments));
  renderMoments();
}

function openMonthModal(month, status) {
  if (status === "opened") {
    el.monthModalBody.innerHTML = revealHtml(month);
    el.monthModal.showModal();
    return;
  }

  const tries = state.triesByMonth[month.monthId] || 0;
  el.monthModalBody.innerHTML = `
    <h2>${month.monthNameFr}</h2>
    <p>${month.clueText}</p>
    <label for="answerInput">Ta réponse</label>
    <input id="answerInput" type="text" placeholder="Écris ton idée..." />
    <p id="answerError" class="error-text"></p>
    <div class="row">
      <button id="validateBtn" class="btn btn-primary" type="button">Valider</button>
      <button id="hintBtn" class="btn btn-soft ${tries >= 2 && month.hintText ? "" : "hidden"}" type="button">Afficher l’indice</button>
    </div>
    <p id="hintText" class="ok-text"></p>
  `;

  const answerInput = document.getElementById("answerInput");
  const answerError = document.getElementById("answerError");
  const hintBtn = document.getElementById("hintBtn");
  const hintText = document.getElementById("hintText");

  document.getElementById("validateBtn").addEventListener("click", () => {
    if (isAnswerAccepted(answerInput.value, month.acceptedAnswers)) {
      openMonth(month.monthId);
      el.monthModalBody.innerHTML = revealHtml(month);
      confetti();
      renderMonths();
      return;
    }

    state.triesByMonth[month.monthId] = (state.triesByMonth[month.monthId] || 0) + 1;
    const count = state.triesByMonth[month.monthId];
    answerError.textContent = state.config.meta.wrongAnswerMessage;
    if (count >= 2 && month.hintText) hintBtn.classList.remove("hidden");
  });

  hintBtn?.addEventListener("click", () => {
    hintText.textContent = month.hintText || "Pas d’indice cette fois 😊";
  });

  el.monthModal.showModal();
}

function revealHtml(month) {
  return `
    <h2>${month.revealTitle}</h2>
    <div class="reveal-card">
      <p>${month.revealMessage}</p>
      ${month.giftDetails ? `<p class="meta-text">${month.giftDetails}</p>` : ""}
      ${month.imageUrl ? `<img src="${month.imageUrl}" alt="Image ${month.monthNameFr}" />` : ""}
    </div>
  `;
}

function confetti() {
  for (let i = 0; i < 10; i += 1) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.textContent = "✦";
    c.style.left = `${40 + Math.random() * 20}%`;
    c.style.top = `${20 + Math.random() * 20}%`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1000);
  }
}

function openMonth(monthId) {
  if (!state.openedMonths.includes(monthId)) {
    state.openedMonths.push(monthId);
    state.openedMonths.sort((a, b) => a - b);
    localStorage.setItem(STORAGE.opened, JSON.stringify(state.openedMonths));
  }
}

function orderedMonths() {
  const months = [...state.config.months].sort((a, b) => a.monthId - b.monthId);
  if (state.config.meta.monthScheme === "janToDec") {
    return [...months].sort((a, b) => janIndex(a.monthNameFr) - janIndex(b.monthNameFr));
  }
  return months; // marchToFeb expected in config order
}

function janIndex(name) {
  const order = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const idx = order.indexOf(name);
  return idx === -1 ? 99 : idx;
}

function computeCycleStartYear(today, scheme) {
  const y = today.getFullYear();
  if (scheme === "janToDec") return y;
  return today >= new Date(y, 2, 1) ? y : y - 1;
}

function getUnlockDate(monthId, cycleStartYear, scheme) {
  if (scheme === "janToDec") {
    const map = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 11, 11: 0, 12: 1 };
    const monthNumber = map[monthId] ?? 0;
    const year = (monthNumber <= 1) ? cycleStartYear + 1 : cycleStartYear;
    return new Date(year, monthNumber, 1);
  }
  if (monthId <= 10) return new Date(cycleStartYear, monthId + 1, 1);
  if (monthId === 11) return new Date(cycleStartYear + 1, 0, 1);
  return new Date(cycleStartYear + 1, 1, 1);
}

function currentLocalDate() {
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

function statusLabel(status) {
  if (status === "available") return "Disponible";
  if (status === "opened") return "Surprise débloquée !";
  return "Verrouillé";
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

function isAnswerAccepted(input, answers) {
  const n = normalizeAnswer(input);
  if (!n) return false;
  return (answers || []).some((a) => normalizeAnswer(a) === n);
}

function loadConfig() {
  const fromStorage = loadJson(STORAGE.config, null);
  if (!fromStorage) return structuredClone(defaultConfig);
  if (Array.isArray(fromStorage)) {
    return {
      ...structuredClone(defaultConfig),
      months: fromStorage,
    };
  }
  return validateConfig(fromStorage) ? fromStorage : structuredClone(defaultConfig);
}

function validateConfig(cfg) {
  return cfg && cfg.meta && cfg.passcodes && Array.isArray(cfg.months) && cfg.months.length === 12 && Array.isArray(cfg.moments);
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function persistConfig() {
  localStorage.setItem(STORAGE.config, JSON.stringify(state.config));
}

function updateDemoUi() {
  el.demoPanel.classList.toggle("hidden", !state.demoEnabled);
  el.demoDateInput.value = state.demoDate;
  el.demoToggleBtn.textContent = `Mode test ${state.demoEnabled ? "(activé)" : ""}`.trim();
}

function fillAdminForms() {
  el.adminMetaForm.siteTitle.value = state.config.meta.siteTitle;
  el.adminMetaForm.siteEdition.value = state.config.meta.siteEdition;
  el.adminMetaForm.siteIntro.value = state.config.meta.siteIntro;
  el.adminMetaForm.monthScheme.value = state.config.meta.monthScheme;
  el.adminMetaForm.wrongAnswerMessage.value = state.config.meta.wrongAnswerMessage;
  el.adminMetaForm.startPasscode.value = state.config.passcodes.start;
  el.adminMetaForm.adminPasscode.value = state.config.passcodes.admin;

  el.adminMonthSelect.innerHTML = state.config.months
    .map((m) => `<option value="${m.monthId}">${m.monthId}. ${m.monthNameFr}</option>`)
    .join("");
  fillMonthForm(Number(el.adminMonthSelect.value || 1));

  el.adminMomentsForm.momentsJson.value = JSON.stringify(state.config.moments, null, 2);
}

function fillMonthForm(monthId) {
  const m = state.config.months.find((x) => x.monthId === monthId);
  if (!m) return;
  el.adminMonthForm.monthNameFr.value = m.monthNameFr;
  el.adminMonthForm.clueText.value = m.clueText;
  el.adminMonthForm.hintText.value = m.hintText || "";
  el.adminMonthForm.acceptedAnswers.value = (m.acceptedAnswers || []).join("\n");
  el.adminMonthForm.revealTitle.value = m.revealTitle;
  el.adminMonthForm.revealMessage.value = m.revealMessage;
  el.adminMonthForm.giftDetails.value = m.giftDetails || "";
  el.adminMonthForm.imageUrl.value = m.imageUrl || "";
}

function saveMetaForm(e) {
  e.preventDefault();
  const fd = new FormData(el.adminMetaForm);
  state.config.meta.siteTitle = String(fd.get("siteTitle") || "").trim();
  state.config.meta.siteEdition = String(fd.get("siteEdition") || "").trim();
  state.config.meta.siteIntro = String(fd.get("siteIntro") || "").trim();
  state.config.meta.monthScheme = String(fd.get("monthScheme") || "marchToFeb");
  state.config.meta.wrongAnswerMessage = String(fd.get("wrongAnswerMessage") || "").trim();
  state.config.passcodes.start = String(fd.get("startPasscode") || "amour35").trim();
  state.config.passcodes.admin = String(fd.get("adminPasscode") || "amour35").trim();
  persistConfig();
  renderHeader();
  renderMonths();
  el.adminMetaMsg.textContent = "Sauvegardé.";
}

function saveMonthForm(e) {
  e.preventDefault();
  const monthId = Number(el.adminMonthSelect.value);
  const month = state.config.months.find((m) => m.monthId === monthId);
  if (!month) return;
  const fd = new FormData(el.adminMonthForm);
  month.monthNameFr = String(fd.get("monthNameFr") || "").trim();
  month.clueText = String(fd.get("clueText") || "").trim();
  month.hintText = String(fd.get("hintText") || "").trim();
  month.acceptedAnswers = String(fd.get("acceptedAnswers") || "").split("\n").map((x) => x.trim()).filter(Boolean);
  month.revealTitle = String(fd.get("revealTitle") || "").trim();
  month.revealMessage = String(fd.get("revealMessage") || "").trim();
  month.giftDetails = String(fd.get("giftDetails") || "").trim();
  month.imageUrl = String(fd.get("imageUrl") || "").trim();
  persistConfig();
  renderMonths();
  el.adminMonthMsg.textContent = "Mois sauvegardé.";
}

function saveMomentsForm(e) {
  e.preventDefault();
  try {
    const text = el.adminMomentsForm.momentsJson.value;
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) throw new Error();
    state.config.moments = parsed;
    persistConfig();
    renderMoments();
    el.adminMomentsMsg.textContent = "Coupons sauvegardés.";
  } catch {
    el.adminMomentsMsg.textContent = "JSON invalide.";
  }
}

function exportConfig() {
  const blob = new Blob([JSON.stringify(state.config, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "12-cadeaux-config.json";
  a.click();
  URL.revokeObjectURL(url);
}

async function importConfig(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (!validateConfig(parsed)) throw new Error();
    state.config = parsed;
    persistConfig();
    renderAll();
    fillAdminForms();
  } catch {
    alert("Import JSON invalide.");
  } finally {
    e.target.value = "";
  }
}

function closeAdmin() {
  el.adminModal.close();
  el.adminAuthForm.classList.remove("hidden");
  el.adminPanel.classList.add("hidden");
  el.adminPassInput.value = "";
  el.adminPassError.textContent = "";
}
