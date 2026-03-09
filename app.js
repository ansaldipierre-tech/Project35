const STORAGE = {
  config: "cadeaux35.config.v2",
  opened: "cadeaux35.openedMonths.v2",
  usedMoments: "cadeaux35.usedMoments.v2",
  demoEnabled: "cadeaux35.demoEnabled.v2",
  demoDate: "cadeaux35.demoDate.v2",
};

const defaultConfig = {
  passcodes: {
    start: "bibdu13",
    admin: "amour35",
  },
  meta: {
    siteTitle: "L'année du Love",
    siteEdition: "Édition spéciale 2026",
    siteIntro: "Mon tendre amour, \n\nCette année, l'anniversaire n'est qu'un seul jour, mais à travers lui, ce que l'on célèbre c'est une année entière joyeuse et riche qui nous attend. Pour t'accompagner toute l'année de tes 35 ans (techniquement ta 36em année mais bon restons jeunes), chaque 1er du mois t’offre un petit clin d’œil. Chaque cadeau ne sera en revanche débloqué que lorsque tu auras trouvé la réponse grâce à des indices, qui seront disponibles progressivement.\n\nEn espérant que la sélection te plaise
",
    monthScheme: "marchToFeb", // or janToDec
    wrongAnswerMessage: "Presque... mais ce n’est pas du tout ça 😘",
    dailyPhrases: [
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
"Alors, la journée se passe bien?"
"Je suis heureux avec toi chaque jour",
    ],
  },
  months: [
  {
    monthId: 1,
    monthNameFr: "Mars",
    clueText: "On va dé-guster",
    hintText: "Ce n’est pas un dé pour jouer",
    acceptedAnswers: ["restaurant", "un restaurant", "dîner", "diner", "un diner", "dîner au restaurant", "soirée resto", "soiree resto", "la mercerie", "La Mercerie", "La mercerie", "mercerie", "Mercerie"],
    revealTitle: "Box Mars -  La Mercerie❤️",
    revealMessage: "Bravo mon amour 💝 Tu viens de débloquer une soirée où tu n’as rien à décider… sauf le dessert.",
    giftDetails: "🎁 Cadeau : Une soirée à la Mercerie, 5 services et accord Mets & Vins.",
    imageUrl: "",
    extraHints: ["Non loin du Bao", "Soirée à deux", "Bon là il faut quand même trouver"]
  },
  {
    monthId: 2,
    monthNameFr: "Avril",
    clueText: "Énigme : Je suis petit, joli, parfois secret, et peu de gens me voient. ",
    hintText: "Indice : Je suis suffisamment léger pour être porté, mais ne peut pas être porté seul",
    acceptedAnswers: ["lingerie", "de la lingerie", "ensemble", "un ensemble", "un ensemble lingerie", "dessous", "des dessous", "sous-vêtements", "sous vetements"],
    revealTitle: "Box Avril – Des dessous pour me grimper dessus✨",
    revealMessage: "Bien joué 😏 J’espère que ca te plaira, même si je suis sur que tu seras irrésistible.",
    giftDetails: "🎁 Cadeau : de la lingerie, oui c’est un cadeau également pour moi.",
    imageUrl: "",
    extraHints: ["Peut jouer en ensemble", "Préfère un traitement main plutôt que machine", "Sans dessus dessous"]
  },
  {
    monthId: 3,
    monthNameFr: "Mai",
    clueText: "Énigme : Je ne parle pas, mais je raconte beaucoup. ",
    hintText: "Indice : Les filles m’aiment bien",
    acceptedAnswers: ["livre", "un livre", "roman", "un roman", "bouquin", "un bouquin"],
    revealTitle: "Box Mai – une maison au bord du lac📖",
    revealMessage: "Bravo 💝 Tu viens de débloquer un petit voyage… sans valise.",
    giftDetails: "🎁 Cadeau : Deux romans graphiques qui aident à prioriser",
    imageUrl: "",
    extraHints: ["Pas sur que tu en aies vraiment besoin", "Tu es sûre ?", "Allez cherche un peu non ?", "Bon ok, dans ce cas, je peux te dire qu’Alexandrie est mon traumatisme enfoui", "Euh, j’ai des pages et je m’achète en librairie ?"]
  },
  {
    monthId: 4,
    monthNameFr: "Juin",
    clueText: "Énigme : Je suis une pause où on ne répond à personne.",
    hintText: "[Durée courte] + [Nadège et Domi par rapport à toi]",
    acceptedAnswers: ["massage", "un massage", "massage relaxant", "spa", "un spa", "soin", "un soin"],
    revealTitle: "Box Juin - Détente absolue 🫶",
    revealMessage: "Yes 💝 Tu as gagné le droit officiel de ne rien faire (et de te laisser chouchouter).",
    giftDetails: "🎁 Cadeau : un massage dans le plus grand des calmes",
    imageUrl: "",
    extraHints: ["Mieux vaut s’allonger", "On en ressort gras mais tendre"]
  },
  {
    monthId: 5,
    monthNameFr: "Juillet",
    clueText: "Énigme : Je suis grande, et douce, et j’ai l’honneur de toucher ta peau",
    hintText: "Indice : 🏖️",
    acceptedAnswers: ["serviette", "serviette de plage", "une serviette", "une serviette de plage", "drap de plage", "towel", "serviette plage"],
    revealTitle: "Box Juillet - Soleil & style ☀️",
    revealMessage: "Bravo 💝 Tu as débloqué l’accessoire officiel des prophètes.",
    giftDetails: "🎁 Cadeau : une serviette de plage de qualité.",
    imageUrl: "",
    extraHints: ["L’été sera chaud", "Seul sur le sable, les pieds dans l’eau", "Pas aussi cool qu’un Poncho"]
  },
  {
    monthId: 6,
    monthNameFr: "Août",
    clueText: "Énigme : J’accède difficilement aux denrées",
    hintText: "Indice : Voulzy",
    acceptedAnswers: ["île", "une île", "ile", "une ile", "voyage", "un voyage", "escapade", "une escapade", "île surprise", "ile surprise"],
    revealTitle: "Box Août - Échappée insulaire 🏝️",
    revealMessage: "Bingo 💝 on part en echapée insulaire",
    giftDetails: "🎁 Cadeau : un voyage sur une île.",
    imageUrl: "",
    extraHints: ["J’ai trop hâte", "Heureusement qu’on a des babysitter"]
  },
  {
    monthId: 7,
    monthNameFr: "Septembre",
    clueText: "Énigme : Nous l’avons accueillie dans notre village Cozy Sticker, ",
    hintText: "Indice : Eternel ou éphémère",
    acceptedAnswers: ["peinture", "la peinture", "atelier peinture", "un atelier peinture", "peindre", "peindre ensemble", "peindre", "peinture acrylique", "peinture aquarelle"],
    revealTitle: "Box Septembre - Couleurs & Contours🎨",
    revealMessage: "Bravo 💝 Tu as débloqué une activité peinture sans les filles.",
    giftDetails: "🎁 Cadeau : LA PEINTURE",
    imageUrl: "",
    extraHints: ["C’est beau mais salissant", "à l’eau ? Non à l’huile"]
  },
  {
    monthId: 8,
    monthNameFr: "Octobre",
    clueText: "Énigme : Il n’est de plus beau voyage que ceux que l’on imagine dans sa tête",
    hintText: "Je ne crois pas à cette phrase mais c’est plus économique",
    acceptedAnswers: ["livre", "un livre", "roman", "un roman", "bouquin", "un bouquin", "lecture"],
    revealTitle: "Box Octobre – Un mois parfait pour lire",
    revealMessage: "Bien joué 💝 Tu débloques une nouvelle aventure qui j’espère te plaira (promis c’est pas KM0).",
    giftDetails: "🎁 Cadeau : un livre très dur, très fort, sur un tas de sujets très importants",
    imageUrl: "",
    extraHints: []
  },
  {
    monthId: 9,
    monthNameFr: "Novembre",
    clueText: "Énigme : Benjamin dans 99F",
    hintText: "Indice : Cozy sticker ville, sans la ville et sans les stickers",
    acceptedAnswers: ["pyjama", "un pyjama", "pijama", "un pijama", "tenue cocooning", "cocooning", "pyj"],
    revealTitle: "Box Novembre – Pyjama de star 🧸",
    revealMessage: "Bravo 💝 Tu as gagné le droit d’être dans un confort suprême et malgré tout bonnasse.",
    giftDetails: "🎁 Cadeau : un pyjama (très doux) qui peut s’enlever en cas de besoin",
    imageUrl: "",
    extraHints: ["Mon premier est une lettre grecques aux décimales infinies", "Mon deuxième est oui en allemand", "Mon troisième est le début de ton prénom" ]
  },
  {
    monthId: 10,
    monthNameFr: "Décembre",
    clueText: "Énigme : Je suis un cadeau qui fait plaisir",
    hintText: "Seul ou à deux 😇",
    acceptedAnswers: ["sextoy", "sex toy", "sex-toy", "jouet", "jouet intime", "accessoire", "accessoire intime", "jouet pour adulte"],
    revealTitle: "Box Décembre — Complicité +++ 😏",
    revealMessage: "Bien joué 💝 Tu débloques un cadeau qui dit donne le sourire.",
    giftDetails: "🎁 Cadeau : un sextoy",
    imageUrl: "",
    extraHints: ["S’utilise sous la couette", "A ne pas mettre entre toutes les mains"]
  },
  {
    monthId: 11,
    monthNameFr: "Janvier",
    clueText: "Énigme : Je protège tes idées.",
    hintText: "Indice : Sublime et saisonnier.",
    acceptedAnswers: ["bonnet", "un bonnet", "bonnet de neige", "bonnet d'hiver", "bonnet hiver", "chapka"],
    revealTitle: "Box Janvier - Team hiver ❄️",
    revealMessage: "Bravo 💝 Tu débloques l’accessoire « chaude et stylée ».",
    giftDetails: "🎁 Cadeau : un bonnet de neige, pour rester caliente et sexy rafinée même à 0 degrés",
    imageUrl: "",
    extraHints: ["Epithète", "Moche menton", "Existe aussi en soutien-gorge"]
  },
  {
    monthId: 12,
    monthNameFr: "Février",
    clueText: "Énigme : Je suis la dernière page d’un joli chapitre… et le début du prochain. Je ne m’achète pas en magasin, mais me trouve dans un écrin",
    hintText: "Indice : La princesse meurt si elle est défaussée",
    acceptedAnswers: ["surprise", "une surprise", "journée", "une journée", "week-end", "week end", "lettre", "une lettre", "amour", "notre amour"],
    revealTitle: "Box Février - Le final 💌",
    revealMessage: "Bravo mon amour 💝 Tu as terminé les 12 box… mais pas l’aventure.",
    giftDetails: "🎁 Cadeau : une lettre d’amour",
    imageUrl: "",
    extraHints: ["La servante te protège un tour", "Le baron compare sa carte"]
  }
],
,
  moments: [
    { id: "moment_01", title: "Bon pour un brunch en pyjama", description: "Valable un dimanche au choix." },
    { id: "moment_02", title: "Bon pour un massage 30 min", description: "Avec huile et playlist bossa nova." },
    { id: "moment_03", title: "Bon pour choisir le film", description: "Même si c’est sur Arte..." },
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
    dailyPhrase: document.getElementById("dailyPhrase"),
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
    const startPass = state.config.passcodes?.start || defaultConfig.passcodes.start;
    if (el.passcodeInput.value === startPass) {
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
    const adminPass = state.config.passcodes?.admin || defaultConfig.passcodes.admin;
    if (el.adminPassInput.value !== adminPass) {
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
  el.dailyPhrase.textContent = phraseOfTheDay();
  el.progressText.textContent = `${state.openedMonths.length}/12 ouverts`;
}

function phraseOfTheDay() {
  const list = Array.isArray(state.config.meta.dailyPhrases) && state.config.meta.dailyPhrases.length
    ? state.config.meta.dailyPhrases
    : ["Tu es ma plus belle habitude 💛"];
  const d = currentLocalDate();
  const key = Math.floor(d.getTime() / 86400000);
  return list[key % list.length];
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
  const allHints = [month.hintText, ...(month.extraHints || [])].map((x) => String(x || "").trim()).filter(Boolean);
  let revealedHints = 0;
  el.monthModalBody.innerHTML = `
    <h2>${month.monthNameFr}</h2>
    <p>${month.clueText}</p>
    <label for="answerInput">Ta réponse</label>
    <input id="answerInput" type="text" placeholder="Écris ton idée..." />
    <p id="answerError" class="error-text"></p>
    <div class="row">
      <button id="validateBtn" class="btn btn-primary" type="button">Valider</button>
      <button id="hintBtn" class="btn btn-soft ${tries >= 2 && allHints.length ? "" : "hidden"}" type="button">Afficher un indice</button>
    </div>
    <div id="hintText" class="ok-text"></div>
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
    if (!allHints.length) {
      hintText.textContent = "Pas d’indice cette fois 😊";
      return;
    }
    revealedHints = Math.min(revealedHints + 1, allHints.length);
    hintText.innerHTML = allHints.slice(0, revealedHints).map((h, i) => `<div>Indice ${i + 1} : ${h}</div>`).join("");
    hintBtn.textContent = revealedHints >= allHints.length ? "Tous les indices affichés" : "Afficher un indice supplémentaire";
    if (revealedHints >= allHints.length) hintBtn.disabled = true;
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
  if (!fromStorage) return upgradeConfig(structuredClone(defaultConfig));
  if (Array.isArray(fromStorage)) {
    return upgradeConfig({
      ...structuredClone(defaultConfig),
      months: fromStorage,
    });
  }
  const cfg = validateConfig(fromStorage) ? fromStorage : structuredClone(defaultConfig);
  return upgradeConfig(cfg);
}

function upgradeConfig(cfg) {
  const out = structuredClone(cfg || {});

  if (!out.meta || typeof out.meta !== "object") out.meta = {};
  if (!out.passcodes || typeof out.passcodes !== "object") out.passcodes = {};
  if (!Array.isArray(out.moments)) out.moments = structuredClone(defaultConfig.moments);
  if (!Array.isArray(out.months)) out.months = structuredClone(defaultConfig.months);

  if (typeof out.passcodes.start !== "string" || !out.passcodes.start.trim()) {
    out.passcodes.start = defaultConfig.passcodes.start;
  }
  if (typeof out.passcodes.admin !== "string" || !out.passcodes.admin.trim()) {
    out.passcodes.admin = defaultConfig.passcodes.admin;
  }

  if (!Array.isArray(out.meta.dailyPhrases) || !out.meta.dailyPhrases.length) {
    out.meta.dailyPhrases = [...defaultConfig.meta.dailyPhrases];
  }

  out.months = out.months.slice(0, 12).map((m, i) => ({
    ...defaultConfig.months[i],
    ...m,
    extraHints: Array.isArray(m?.extraHints) ? m.extraHints : [],
  }));

  if (out.months.length < 12) {
    out.months = [...out.months, ...structuredClone(defaultConfig.months.slice(out.months.length))];
  }

  return out;
}

function validateConfig(cfg) {
  return Boolean(
    cfg
    && cfg.meta
    && cfg.passcodes
    && typeof cfg.passcodes.start === "string"
    && typeof cfg.passcodes.admin === "string"
    && Array.isArray(cfg.months)
    && cfg.months.length === 12
    && Array.isArray(cfg.moments)
  );
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
  el.adminMetaForm.dailyPhrases.value = (state.config.meta.dailyPhrases || []).join("\n");
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
  el.adminMonthForm.extraHints.value = (m.extraHints || []).join("\n");
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
  state.config.meta.dailyPhrases = String(fd.get("dailyPhrases") || "").split("\n").map((x) => x.trim()).filter(Boolean);
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
  month.extraHints = String(fd.get("extraHints") || "").split("\n").map((x) => x.trim()).filter(Boolean);
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
