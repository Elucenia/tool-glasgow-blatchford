<!-- ELUCENIA technical documentation · glasgow-blatchford · en · no clinical/professional/rights approval -->

# Glasgow–Blatchford score

[conditions, sources and permissions](https://elucenia.org/en/tools/glasgow-blatchford)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Serum urea

`ureia`

- `0` — \< 39 mg/dL (\< 6.5 mmol/L)
- `2` — 39 to 47 mg/dL (6.5 to 7.9 mmol/L)
- `3` — 48 to 59 mg/dL (8.0 to 9.9 mmol/L)
- `4` — 60 to 149 mg/dL (10.0 to 24.9 mmol/L)
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### Hemoglobin

`hb`

- `0` — Man ≥ 13 g/dL or woman ≥ 12 g/dL
- `1` — Man 12 to 12.9 or woman 10 to 11.9 g/dL
- `3` — Man 10 to 11.9 g/dL
- `6` — \< 10 g/dL (both sexes)

### Systolic blood pressure

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 to 109 mmHg
- `2` — 90 to 99 mmHg
- `3` — \< 90 mmHg

### Heart rate ≥ 100 bpm

`fc`

### Melena

`melena`

### Syncope

`sincope`

### Liver disease (current or previous)

`hepat`

### Heart failure

`icc`

## Method edition

GBS/Blatchford 2000: 8 variables, total 0–23, urea not BUN

## Documented formula

Sum: urea (0 to 6), sex-specific hemoglobin (0 to 6), systolic BP (0 to 3), HR ≥100 (1), melena (1), syncope (2), liver disease (2), heart failure (2). Total 0 to 23.

Urea mg/dL = mmol/L × 6.0 (urea, not BUN).

## Limits and population

The 2000 Glasgow-Blatchford was developed at the initial presentation of upper gastrointestinal bleeding to stratify treatment need. The score alone does not authorize discharge or outpatient management. Urea and hemoglobin units, comorbidity definitions and cutoffs in later protocols must match the version used. Table 2(d) of the primary Dakik 2017 study reproduces urea ≥ 10 to ≤ 25 mmol/L as 4 points and \> 25 mmol/L as 6 points; the local label uses ≥ 25 mmol/L for 6 points. The original Blatchford 2000 table was not obtained in this review. The sum of selected categories was checked, but the exact 25 mmol/L boundary and rounded mg/dL ranges remain unadjudicated.

## References

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Very low risk (0 to 1): candidate for outpatient management

May be discharged without urgent endoscopy, with outpatient endoscopy (Stanley 2017; ESGE 2021).


### 2

Not low risk (2 to 6): admit and perform endoscopy

Endoscopy within 24 h after hemodynamic stabilization.


### 3

High risk (≥ 7): greater chance of needing endoscopic therapy

Optimal cutoff to predict endoscopic treatment (Stanley 2017). Stabilize, transfuse if Hb < 7 g/dL (or < 8 g/dL with cardiovascular disease) and endoscopy within 24 h.

