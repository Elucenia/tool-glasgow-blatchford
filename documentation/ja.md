<!-- ELUCENIA technical documentation · glasgow-blatchford · ja · no clinical/professional/rights approval -->

# Glasgow-Blatchfordスコア

[条件・出典・許諾](https://elucenia.org/ja/tools/glasgow-blatchford)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 血清尿素

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39～47 mg/dL（6.5～7.9 mmol/L）
- `3` — 48～59 mg/dL（8.0～9.9 mmol/L）
- `4` — 60～149 mg/dL（10.0～24.9 mmol/L）
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### ヘモグロビン

`hb`

- `0` — 男性≥13 g/dLまたは女性≥12 g/dL
- `1` — 男性12～12.9または女性10～11.9 g/dL
- `3` — 男性10～11.9 g/dL
- `6` — \<10 g/dL（男女とも）

### 収縮期血圧

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 ～ 109 mmHg
- `2` — 90 ～ 99 mmHg
- `3` — \< 90 mmHg

### 心拍数 ≥ 100 bpm

`fc`

### 黒色便

`melena`

### 失神

`sincope`

### 肝疾患（現在または既往）

`hepat`

### 心不全

`icc`

## 方法の版

GBS/Blatchford 2000：8変数、合計0–23、尿素でBUNではない

## 記載された計算式

合計：尿素（0～6）、性別別Hb（0～6）、収縮期血圧（0～3）、心拍≥100（1）、黒色便（1）、失神（2）、肝疾患（2）、心不全（2）。合計0～23。

尿素mg/dL = mmol/L × 6.0（尿素、BUNではない）。

## 限界・対象集団

2000年のGlasgow-Blatchfordスコアは、上部消化管出血の初診時に治療の必要性を層別化するために開発されました。スコアだけで退院や外来管理が許可されるわけではありません。尿素・ヘモグロビンの単位、併存疾患の定義、後のプロトコルの閾値は、使用する版に対応している必要があります。 Dakik 2017の一次研究表2(d)は尿素≥10～≤25 mmol/Lを4点、\>25 mmol/Lを6点として再掲するが、現行表示は≥25 mmol/Lを6点とする。本レビューではBlatchford 2000の原表を取得できなかった。選択カテゴリーの合計は確認したが、25 mmol/Lの厳密な境界とmg/dLで丸めた範囲は未判断である。

## 参考文献

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
