<!-- ELUCENIA technical documentation · glasgow-blatchford · fr · no clinical/professional/rights approval -->

# Score de Glasgow-Blatchford

[conditions, sources et autorisations](https://elucenia.org/fr/outils/glasgow-blatchford)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Urée sérique

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39 à 47 mg/dL (6,5 à 7,9 mmol/L)
- `3` — 48 à 59 mg/dL (8,0 à 9,9 mmol/L)
- `4` — 60 à 149 mg/dL (10,0 à 24,9 mmol/L)
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### Hémoglobine

`hb`

- `0` — Homme ≥ 13 g/dL ou femme ≥ 12 g/dL
- `1` — Homme 12 à 12,9 ou femme 10 à 11,9 g/dL
- `3` — Homme 10 à 11,9 g/dL
- `6` — \< 10 g/dL (les deux sexes)

### Pression systolique

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 à 109 mmHg
- `2` — 90 à 99 mmHg
- `3` — \< 90 mmHg

### Fréquence cardiaque ≥ 100 battements/min

`fc`

### Méléna

`melena`

### Syncope

`sincope`

### Maladie hépatique (actuelle ou antérieure)

`hepat`

### Insuffisance cardiaque

`icc`

## Édition de la méthode

GBS/Blatchford 2000 : 8 variables, total 0–23, urée pas BUN

## Formule documentée

Somme : urée (0 à 6), hémoglobine selon sexe (0 à 6), pression systolique (0 à 3), FC ≥100 (1), méléna (1), syncope (2), maladie hépatique (2), insuffisance cardiaque (2). Total 0 à 23.

Urée mg/dL = mmol/L × 6,0 (urée, pas BUN).

## Limites et population

Le Glasgow-Blatchford de 2000 a été développé lors de la présentation initiale d’une hémorragie digestive haute pour stratifier le besoin de traitement. Le score n’autorise pas, à lui seul, la sortie ou une prise en charge ambulatoire. Les unités d’urée et d’hémoglobine, les définitions des comorbidités et les seuils des protocoles ultérieurs doivent correspondre à la version utilisée. Le Tableau 2(d) de l’étude primaire de Dakik 2017 reproduit l’urée ≥ 10 à ≤ 25 mmol/L avec 4 points et \> 25 mmol/L avec 6 points ; le libellé local utilise ≥ 25 mmol/L pour 6 points. Le tableau original de Blatchford 2000 n’a pas été obtenu lors de cette revue. La somme des catégories sélectionnées a été vérifiée, mais la limite exacte de 25 mmol/L et les plages arrondies en mg/dL restent non tranchées.

## Références

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
