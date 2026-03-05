# 12 Cadeaux – 35 ans 💝

Une app statique romantique (HTML/CSS/JS) façon carnet d’amour : 12 mois, 12 énigmes, 12 révélations.

## Ce que fait l’app

- Débloque les mois de **Mars à Février** le **1er de chaque mois** (fuseau local du navigateur).
- Statuts : verrouillé / disponible / ouvert.
- Entrée protégée par passcode (rien n’est visible avant).
- Écran couverture personnalisé : "Pour <Prénom>, 35 ans ✨" + lettre d’intro.
- Enveloppes mensuelles avec énigme, validation, indice après 2 erreurs.
- Révélation en style polaroid + confettis cœurs subtils.
- Progression persistée (`localStorage`) pour relire les mois ouverts.
- Mode admin (atelier) protégé + édition complète + export/import JSON.
- Mode test de date pour simuler les mois.
- Option thème "soirée cocooning".

## Passcodes

Par défaut :

- Passcode app : `amour35`
- Passcode admin : `amour35`

Ils sont sauvegardés dans `localStorage` :

- `cadeaux35.passcode`
- `cadeaux35.adminPasscode`

Vous pouvez les modifier facilement depuis l’**atelier admin**.

---

## Personnalisation rapide en 5 minutes

1. Ouvrir l’app puis cliquer **Atelier admin**.
2. Dans **Personnalisation globale** :
   - `wifeName` (prénom affiché dans la dédicace),
   - `nickname` (injecté via `{SURNOM}`),
   - `privateJoke1`, `privateJoke2` (injectés via `{PRIVATE_JOKE_1}` / `{PRIVATE_JOKE_2}`),
   - `introLetter` (petite lettre d’accueil),
   - `dailyLines` (une phrase par ligne, rotation quotidienne).
3. Changer les passcodes app/admin.
4. Dans **Modifier un mois**, remplir les 12 entrées :
   - `clueText`, `hintText`, `acceptedAnswers` (une ligne = une variante),
   - `revealTitle`, `revealMessage`, `giftDetails`, `instructions`, `imageUrl`.
5. Cliquer **Exporter JSON** pour garder une sauvegarde.

### Exemple de variantes `acceptedAnswers`

Pour une réponse comme “notre banc secret”, vous pouvez mettre :

- `Notre banc secret`
- `notre banc secret`
- `le banc secret`
- `banc-secret`

Le moteur ignore casse, accents, ponctuation, espaces multiples.

---

## Schéma de déblocage (Mars → Février)

Anniversaire : **2 mars**.

Le cycle s’ouvre ainsi :

1. Mars → 1er mars
2. Avril → 1er avril
3. Mai → 1er mai
4. Juin → 1er juin
5. Juillet → 1er juillet
6. Août → 1er août
7. Septembre → 1er septembre
8. Octobre → 1er octobre
9. Novembre → 1er novembre
10. Décembre → 1er décembre
11. Janvier → 1er janvier (année suivante)
12. Février → 1er février (année suivante)

Calcul de l’année de cycle :

- si `today >= 1er mars` de l’année courante → cycle courant,
- sinon → cycle commencé l’année précédente.

Toutes les comparaisons utilisent la date locale du navigateur.

---

## Structure JSON (config)

```json
{
  "meta": {
    "wifeName": "Mon Amour",
    "nickname": "{SURNOM}",
    "privateJoke1": "{PRIVATE_JOKE_1}",
    "privateJoke2": "{PRIVATE_JOKE_2}",
    "introLetter": "...",
    "dailyLines": ["..."]
  },
  "months": [
    {
      "monthId": 1,
      "monthNameFr": "Mars",
      "clueText": "Énigme... INSIDE_JOKE_01",
      "hintText": "Petit indice...",
      "acceptedAnswers": ["INSIDE_JOKE_01", "inside joke 1", "private joke 1"],
      "revealTitle": "Cadeau 1 – Mars",
      "revealMessage": "Bravo {SURNOM} 💘",
      "giftDetails": "DÉTAIL_CADEAU_01",
      "instructions": "INSTRUCTION_01",
      "imageUrl": ""
    }
  ]
}
```

---

## Lancer localement

Aucun build.

- Ouvrir `index.html` directement, ou
- servir le dossier : `python -m http.server 4173`

---

## Déploiement gratuit

### A) GitHub Pages

1. Créez un repo GitHub et poussez les fichiers.
2. GitHub → **Settings** → **Pages**.
3. Source : **Deploy from a branch**.
4. Branche : `main` (ou votre branche), dossier `/ (root)`.
5. Sauvegardez et récupérez l’URL publique.

### B) Cloudflare Pages

1. Cloudflare Dashboard → **Pages** → **Create a project**.
2. Connectez le repo GitHub.
3. Build settings :
   - Framework preset : **None**
   - Build command : *(vide)*
   - Output directory : `/`
4. Déployez, puis utilisez l’URL `*.pages.dev`.
