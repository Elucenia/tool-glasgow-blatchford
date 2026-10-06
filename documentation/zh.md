<!-- ELUCENIA technical documentation · glasgow-blatchford · zh · no clinical/professional/rights approval -->

# Glasgow-Blatchford 评分

[条件、来源与许可](https://elucenia.org/zh/tools/glasgow-blatchford)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 血清尿素

`ureia`

- `0` — \< 39 mg/dL (\< 6,5 mmol/L)
- `2` — 39至47 mg/dL（6.5至7.9 mmol/L）
- `3` — 48至59 mg/dL（8.0至9.9 mmol/L）
- `4` — 60至149 mg/dL（10.0至24.9 mmol/L）
- `6` — ≥ 150 mg/dL (≥ 25 mmol/L)

### 血红蛋白

`hb`

- `0` — 男性≥13 g/dL或女性≥12 g/dL
- `1` — 男性12至12.9或女性10至11.9 g/dL
- `3` — 男性10至11.9 g/dL
- `6` — \<10 g/dL（男女均适用）

### 收缩压

`pas`

- `0` — ≥ 110 mmHg
- `1` — 100 至 109 mmHg
- `2` — 90 至 99 mmHg
- `3` — \< 90 mmHg

### 心率 ≥ 100 bpm

`fc`

### 黑便

`melena`

### 晕厥

`sincope`

### 肝病（当前或既往）

`hepat`

### 心力衰竭

`icc`

## 方法版本

GBS/Blatchford 2000：8变量，总分0–23，尿素非BUN

## 已记录的公式

加分：尿素（0至6）、性别对应Hb（0至6）、收缩压（0至3）、心率≥100（1）、黑便（1）、晕厥（2）、肝病（2）、心衰（2）。总分0至23。

尿素mg/dL = mmol/L × 6.0（尿素，不是BUN）。

## 限制与适用人群

2000年的Glasgow-Blatchford评分用于上消化道出血初次就诊时对治疗需求进行分层。评分本身不能授权出院或门诊管理。尿素与血红蛋白单位、合并疾病定义及后续方案的阈值须与所用版本一致。 Dakik 2017原始研究表2(d)将尿素≥10至≤25 mmol/L列为4分，\>25 mmol/L列为6分；本地标签以≥25 mmol/L对应6分。本次审查未取得Blatchford 2000原始表格。已核对所选类别的求和，但25 mmol/L精确边界及以mg/dL表示的四舍五入区间仍未裁定。

## 参考文献

- [Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet, 2000.](https://doi.org/10.1016/S0140-6736(00)02816-6)

- [Stanley AJ et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. BMJ, 2017.](https://doi.org/10.1136/bmj.i6432)

- [Gralnek IM et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): European Society of Gastrointestinal Endoscopy (ESGE) Guideline – Update 2021. Endoscopy, 2021.](https://doi.org/10.1055/a-1369-5274)

- [Dakik HK et al. Accuracy of Glasgow-Blatchford, AIMS65, and Rockall Scores to Predict Outcomes in Upper Gastrointestinal Bleeding. 2017, Table 2(d); reproduced GBS table.](https://doi.org/10.1155/2017/3171697)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

极低风险（0至1）：可门诊处理

可在无需急诊内镜检查的情况下出院，并安排门诊内镜检查（Stanley 2017；ESGE 2021）。


### 2

非低风险（2至6）：住院并行内镜检查

在血流动力学稳定后24 h内进行内镜检查。


### 3

高风险（≥ 7）：更可能需要内镜治疗

预测内镜治疗的最佳截点（Stanley 2017）。先稳定，若Hb < 7 g/dL（或合并心血管疾病时 < 8 g/dL）则输血，并在24 h内行内镜检查。

