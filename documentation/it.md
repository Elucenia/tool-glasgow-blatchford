<!-- ELUCENIA technical documentation · glasgow-blatchford · it · no clinical/professional/rights approval -->

# Punteggio di Glasgow-Blatchford

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/glasgow-blatchford)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Urea sierica

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39 a 47 mg/dL (6,5 a 7,9 mmol/L)
- `3` — 48 a 59 mg/dL (8,0 a 9,9 mmol/L)
- `4` — 60 a 149 mg/dL (10,0 a 24,9 mmol/L)
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### Emoglobina

`hb`

- `0` — Uomo ≥ 13 g/dL o donna ≥ 12 g/dL
- `1` — Uomo da 12 a 12,9 o donna da 10 a 11,9 g/dL
- `3` — Uomo da 10 a 11,9 g/dL
- `6` — \< 10 g/dL (entrambi i sessi)

### Pressione sistolica

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 a 109 mmHg
- `2` — 90 a 99 mmHg
- `3` — \< 90 mmHg

### Frequenza cardiaca ≥ 100 bpm

`fc`

### Melena

`melena`

### Sincope

`sincope`

### Malattia epatica (attuale o pregressa)

`hepat`

### Insufficienza cardiaca

`icc`

## Edizione del metodo

GBS/Blatchford 2000: 8 variabili, totale 0–23, urea non BUN

## Formula documentata

Somma: urea (0 a 6), Hb per sesso (0 a 6), pressione sistolica (0 a 3), FC ≥100 (1), melena (1), sincope (2), epatopatia (2), scompenso cardiaco (2). Totale 0 a 23.

Urea mg/dL = mmol/L × 6,0 (urea, non BUN).

## Limiti e popolazione

Il Glasgow-Blatchford del 2000 è stato sviluppato alla presentazione iniziale dell’emorragia digestiva alta per stratificare la necessità di trattamento. Il punteggio da solo non autorizza la dimissione o la gestione ambulatoriale. Unità di urea ed emoglobina, definizioni delle comorbilità e soglie dei protocolli successivi devono corrispondere alla versione utilizzata. La Tabella 2(d) dello studio primario di Dakik 2017 riproduce l’urea ≥ 10 fino a ≤ 25 mmol/L con 4 punti e \> 25 mmol/L con 6 punti; l’etichetta locale usa ≥ 25 mmol/L per 6 punti. La tabella originale di Blatchford 2000 non è stata ottenuta in questa revisione. È stata verificata la somma delle categorie selezionate, ma il limite esatto di 25 mmol/L e gli intervalli arrotondati in mg/dL restano irrisolti.

## Riferimenti

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
