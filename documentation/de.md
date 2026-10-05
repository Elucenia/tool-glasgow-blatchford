<!-- ELUCENIA technical documentation · glasgow-blatchford · de · no clinical/professional/rights approval -->

# Glasgow-Blatchford-Score

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/glasgow-blatchford)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Serumharnstoff

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39 bis 47 mg/dL (6,5 bis 7,9 mmol/L)
- `3` — 48 bis 59 mg/dL (8,0 bis 9,9 mmol/L)
- `4` — 60 bis 149 mg/dL (10,0 bis 24,9 mmol/L)
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### Hämoglobin

`hb`

- `0` — Mann ≥ 13 g/dL oder Frau ≥ 12 g/dL
- `1` — Mann 12 bis 12,9 oder Frau 10 bis 11,9 g/dL
- `3` — Mann 10 bis 11,9 g/dL
- `6` — \< 10 g/dL (beide Geschlechter)

### Systolischer Blutdruck

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 bis 109 mmHg
- `2` — 90 bis 99 mmHg
- `3` — \< 90 mmHg

### Herzfrequenz ≥ 100/min

`fc`

### Meläna

`melena`

### Synkope

`sincope`

### Lebererkrankung (aktuell oder früher)

`hepat`

### Herzinsuffizienz

`icc`

## Fassung der Methode

GBS/Blatchford 2000: 8 Variablen, Gesamt 0–23, Harnstoff statt BUN

## Dokumentierte Formel

Summe: Harnstoff (0 bis 6), Hb nach Geschlecht (0 bis 6), systolischer Blutdruck (0 bis 3), HF ≥100 (1), Meläna (1), Synkope (2), Lebererkrankung (2), Herzinsuffizienz (2). Gesamt 0 bis 23.

Harnstoff mg/dL = mmol/L × 6,0 (Harnstoff, nicht BUN).

## Grenzen und Population

Glasgow-Blatchford von 2000 wurde bei der Erstvorstellung einer oberen gastrointestinalen Blutung zur Einteilung des Behandlungsbedarfs entwickelt. Die Punktzahl allein erlaubt weder Entlassung noch ambulante Versorgung. Harnstoff- und Hämoglobineinheiten, Komorbiditätsdefinitionen und Schwellen späterer Protokolle müssen zur verwendeten Version passen. Tabelle 2(d) der Primärstudie von Dakik 2017 gibt Harnstoff ≥ 10 bis ≤ 25 mmol/L mit 4 Punkten und \> 25 mmol/L mit 6 Punkten wieder; die lokale Bezeichnung verwendet ≥ 25 mmol/L für 6 Punkte. Die Originaltabelle von Blatchford 2000 wurde in dieser Prüfung nicht beschafft. Die Summe der ausgewählten Kategorien wurde geprüft; die genaue Grenze bei 25 mmol/L und die gerundeten mg/dL-Bereiche bleiben ungeklärt.

## Referenzen

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
