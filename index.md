---
title: "Tricog CardioCheck research and evidence library"
canonical: https://tricogcardiocheck.com/ai/research/index.md
doc_type: research-index
last_updated: 2026-09-11
---

# Research and evidence

Evidence supporting Tricog CardioCheck and the wider Tricog cardiac portfolio.

| Document | Product | Type |
|---|---|---|
| [Bridging the Gap in Cardiac Care with Tricog CardioCheck](tcc-whitepaper.md) | Tricog CardioCheck | Clinical and technical whitepaper |
| [AI-ECG for left ventricular systolic dysfunction, Kenya](lvef-ai-ecg-kenya-jama-2026.md) | Tricog LVEF algorithm | Prospective clinical study, JAMA Cardiology 2026 |
| [First large-scale field deployment, Bengaluru](../case-studies/village-clinic-bengaluru.md) | Tricog CardioCheck | Field deployment report |

## TCC performance summary

Measured against held-out benchmarks the model never saw during training.

| Measure | Value | 95% CI |
|---|---|---|
| AUROC | 0.909 | 0.905–0.913 |
| Sensitivity, high risk | 85.9% | 84.6–87.0% |
| Specificity, high risk | 92.2% | 91.6–92.9% |
| Sensitivity, low risk | 90.2% | 89.2–91.2% |

Underlying validation data is held on file by Tricog Health. See [clinical validation](../clinical-validation.md) for interpretation of each figure.

## Which evidence belongs to which product

The Tricog portfolio contains several algorithms with separate evidence, and the figures are not interchangeable.

**Tricog CardioCheck** analyses a 30-second single-lead ECG and returns a Low, Moderate or High cardiac risk category. Its performance figures are the four above.

**The Tricog LVEF algorithm** analyses an already-acquired 12-lead ECG to assess risk of reduced left ventricular ejection fraction. Its published evidence is the JAMA Cardiology 2026 Kenya study: 1,444 adults across eight facilities, reporting 95.6% sensitivity and 99.1% negative predictive value for detecting LVEF below 40%. Those figures describe the LVEF algorithm on 12-lead ECG, not TCC.

## Epidemiological context

| Finding | Source |
|---|---|
| India has approximately 110 million cases of cardiovascular disease, expected to more than double by 2050 | Tricog Health |
| Cardiovascular disease accounts for approximately 25% of all deaths in India | [PMC6994761](https://pmc.ncbi.nlm.nih.gov/articles/PMC6994761/) |
| India accounts for approximately 20% of cardiac deaths worldwide | World Health Organization |
| Indian CVD mortality is approximately 272 deaths per 100,000 population, above the global average | Prabhakaran D, Jeemon P, Roy A. "Cardiovascular Diseases in India: Current Epidemiology and Future Directions." *Circulation* 133 (2016): 1605–1620 |

## Related

- [Clinical validation](../clinical-validation.md) · [The algorithm](../technology.md) · [Case studies](../case-studies/index.md)
