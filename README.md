# 12 Cadeaux – 35 ans (version Box Cadeau)

Expérience statique premium/cozy chic : cartes mensuelles, box à ouvrir avec énigme, et section **Les Bons Moments** (coupons utilisables n’importe quand).

## Palette & polices proposées

- **Palette**
  - Fond crème rosé : `#FCF6F0`
  - Surface carte : `#FFFDF9`
  - Accent orange CTA : `#EA7D2D`
  - Orange foncé hover : `#CF6518`
  - Texte cacao : `#3D2E2A`
  - Texte secondaire : `#7A625A`
- **Typographies**
  - Titres : `DM Serif Display`
  - Texte : `Inter`

## Structure JSON (mois + bons moments)

```json
{
  "passcodes": { "start": "amour35", "admin": "amour35" },
  "meta": {
    "siteTitle": "L'année du Love",
    "siteEdition": "Édition spéciale 2026",
    "siteIntro": "...",
    "monthScheme": "marchToFeb",
    "wrongAnswerMessage": "Presque..."
  },
  "months": [
    {
      "monthId": 1,
      "monthNameFr": "Mars",
      "clueText": "INSIDE_JOKE_01",
      "hintText": "Indice 01",
      "acceptedAnswers": ["INSIDE_JOKE_01", "inside joke 1"],
      "revealTitle": "Box Mars",
      "revealMessage": "Bravo 💝",
      "giftDetails": "DÉTAIL_01",
      "imageUrl": ""
    }
  ],
  "moments": [
    { "id": "moment_01", "title": "Bon pour un brunch en pyjama", "description": "..." }
  ]
}
```

## Fonctionnalités

- Écran passcode obligatoire avant affichage.
- Option admin dès l’écran passcode.
- Header one-page : titre configurable, édition, intro, **phrase du jour** configurable, progression `X/12`.
- Section **Les Mois** avec statuts :
  - Disponible
  - Surprise débloquée
  - Verrouillé + date + compteur `J-XXX`
- CTA orange premium : **OUVRIR LA BOX**.
- Modal énigme : réponse + indice après 2 erreurs + **indices supplémentaires** (si configurés) + reveal + micro-confetti.
- Section **Les Bons Moments** avec état utilisé/non utilisé.
- Persistance `localStorage` :
  - config,
  - mois ouverts,
  - coupons utilisés,
  - mode test + date simulée.
- Mode test : simulation de date.
- Admin : édition globale, mois, coupons JSON, import/export JSON, resets.

## Comment changer les mots de passe

Depuis **Mode admin → Paramètres globaux** :

- `Passcode app`
- `Passcode admin`

Puis sauvegarder. Les nouveaux passcodes sont stockés dans la config locale (`localStorage`).

## Déblocage des mois

- Schéma par défaut : **Mars → Février**.
- Déblocage le **1er** de chaque mois.
- Basé sur le fuseau horaire local du navigateur.
- Schéma alternatif configurable : `janToDec`.

## Validation des réponses

Normalisation robuste :

- insensible à la casse,
- ignore accents,
- ignore ponctuation,
- `trim` + espaces multiples réduits.

## Fichiers

- `index.html`
- `styles.css`
- `app.js`

## Lancer en local

```bash
python -m http.server 4173
```

Puis ouvrir `http://localhost:4173`.

## Déploiement (Option A) — GitHub Pages

1. Pousser ce dossier dans un repo GitHub.
2. Ouvrir **Settings → Pages**.
3. Source : **Deploy from a branch**.
4. Branche : `main` (ou autre) + dossier `/ (root)`.
5. Sauvegarder.
6. Récupérer l’URL fournie par GitHub Pages.


## Nouveautés

- Chaque mois peut maintenant contenir `hintText` + `extraHints` (liste d’indices additionnels).
- Une phrase quotidienne est affichée dans le header, choisie automatiquement parmi `meta.dailyPhrases` (configurable en admin, une ligne par phrase).
