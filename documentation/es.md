<!-- ELUCENIA technical documentation · glasgow-blatchford · es · no clinical/professional/rights approval -->

# Puntuación de Glasgow-Blatchford

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/glasgow-blatchford)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Urea sérica

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39 a 47 mg/dL (6,5 a 7,9 mmol/L)
- `3` — 48 a 59 mg/dL (8,0 a 9,9 mmol/L)
- `4` — 60 a 149 mg/dL (10,0 a 24,9 mmol/L)
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### Hemoglobina

`hb`

- `0` — Hombre ≥ 13 g/dL o mujer ≥ 12 g/dL
- `1` — Hombre de 12 a 12,9 o mujer de 10 a 11,9 g/dL
- `3` — Hombre de 10 a 11,9 g/dL
- `6` — \< 10 g/dL (ambos sexos)

### Presión sistólica

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 a 109 mmHg
- `2` — 90 a 99 mmHg
- `3` — \< 90 mmHg

### Frecuencia cardíaca ≥ 100 lpm

`fc`

### Melena

`melena`

### Síncope

`sincope`

### Enfermedad hepática (actual o previa)

`hepat`

### Insuficiencia cardíaca

`icc`

## Edición del método

GBS/Blatchford 2000: 8 variables, total 0–23, urea no BUN

## Fórmula documentada

Suma: urea (0 a 6), hemoglobina por sexo (0 a 6), presión sistólica (0 a 3), FC ≥100 (1), melena (1), síncope (2), enfermedad hepática (2), insuficiencia cardíaca (2). Total 0 a 23.

Urea mg/dL = mmol/L × 6,0 (urea, no BUN).

## Límites y población

El Glasgow-Blatchford de 2000 se desarrolló en la presentación inicial de hemorragia digestiva alta para estratificar la necesidad de tratamiento. La puntuación no autoriza por sí sola el alta ni el manejo ambulatorio. Las unidades de urea y hemoglobina, las definiciones de comorbilidades y los puntos de corte de protocolos posteriores deben corresponder a la versión utilizada. La Tabla 2(d) del estudio primario de Dakik 2017 reproduce la urea ≥ 10 hasta ≤ 25 mmol/L con 4 puntos y \> 25 mmol/L con 6 puntos; la etiqueta local utiliza ≥ 25 mmol/L para 6 puntos. No se obtuvo la tabla original de Blatchford 2000 en esta revisión. Se comprobó la suma de las categorías seleccionadas, pero el límite exacto de 25 mmol/L y los intervalos redondeados en mg/dL siguen sin adjudicarse.

## Referencias

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Riesgo muy bajo (0 a 1): candidato a manejo ambulatorio

Puede recibir el alta sin endoscopia urgente, con endoscopia ambulatoria (Stanley 2017; ESGE 2021).


### 2

Riesgo no bajo (2 a 6): internar y hacer endoscopia

Endoscopia en hasta 24 h después de la estabilización hemodinámica.


### 3

Riesgo alto (≥ 7): mayor probabilidad de necesitar terapia endoscópica

Punto de corte óptimo para predecir tratamiento endoscópico (Stanley 2017). Estabilizar, transfundir si Hb < 7 g/dL (o < 8 g/dL con enfermedad cardiovascular) y endoscopia en hasta 24 h.

