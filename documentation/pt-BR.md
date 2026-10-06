<!-- ELUCENIA technical documentation · glasgow-blatchford · pt-BR · no clinical/professional/rights approval -->

# Escore de Glasgow-Blatchford

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/glasgow-blatchford)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Ureia sérica

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39 a 47 mg/dL (6,5 a 7,9 mmol/L)
- `3` — 48 a 59 mg/dL (8,0 a 9,9 mmol/L)
- `4` — 60 a 149 mg/dL (10,0 a 24,9 mmol/L)
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### Hemoglobina

`hb`

- `0` — Homem ≥ 13 g/dL ou mulher ≥ 12 g/dL
- `1` — Homem 12 a 12,9 ou mulher 10 a 11,9 g/dL
- `3` — Homem 10 a 11,9 g/dL
- `6` — \< 10 g/dL (ambos os sexos)

### Pressão sistólica

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 a 109 mmHg
- `2` — 90 a 99 mmHg
- `3` — \< 90 mmHg

### Frequência cardíaca ≥ 100 bpm

`fc`

### Melena

`melena`

### Síncope

`sincope`

### Doença hepática (atual ou prévia)

`hepat`

### Insuficiência cardíaca

`icc`

## Edição do método

GBS/Blatchford 2000:8 variáveis, total 0–23, ureianão BUN

## Fórmula documentada

Soma de pontos: ureia (0 a 6), hemoglobina conforme o sexo (0 a 6), pressão sistólica (0 a 3), FC ≥ 100 (1), melena (1), síncope (2), doença hepática (2) e insuficiência cardíaca (2). Total de 0 a 23.

Ureia em mg/dL = mmol/L × 6,0 (a ureia, não o BUN).

## Limites e população

O Glasgow-Blatchford de 2000 foi desenvolvido na apresentação inicial de hemorragia digestiva alta para estratificar necessidade de tratamento. A pontuação não autoriza, sozinha, alta ou manejo ambulatorial. Unidades de ureia e hemoglobina, definição de comorbidades e cortes de protocolos posteriores precisam corresponder à versão utilizada. A Tabela 2(d) do estudo primário de Dakik 2017 reproduz a faixa de ureia ≥ 10 até ≤ 25 mmol/L com 4 pontos e \> 25 mmol/L com 6 pontos; o rótulo local usa ≥ 25 mmol/L para 6 pontos. A tabela original de Blatchford 2000 não foi obtida nesta revisão. A soma de categorias selecionadas foi conferida, mas o limite exato de 25 mmol/L e as faixas arredondadas em mg/dL permanecem sem adjudicação.

## Referências

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Muito baixo risco (0 a 1): candidato a manejo ambulatorial

Pode ter alta sem endoscopia urgente, com endoscopia ambulatorial (Stanley 2017; ESGE 2021).


### 2

Risco não baixo (2 a 6): internar e fazer endoscopia

Endoscopia em até 24 h após estabilização hemodinâmica.


### 3

Risco alto (≥ 7): maior chance de precisar de terapia endoscópica

Corte ótimo para prever tratamento endoscópico (Stanley 2017). Estabilizar, transfundir se Hb < 7 g/dL (ou < 8 g/dL com doença cardiovascular) e endoscopia em até 24 h.

