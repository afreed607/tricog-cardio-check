---
title: "Tricog CardioCheck validation study — AUROC 0.909 on held-out data"
doc_type: research-validation
product: Tricog CardioCheck
study_type: validation
peer_reviewed: false
last_updated: 2026-09-10
---

# TCC validation — held-out benchmark performance

**Summary.** Tricog CardioCheck was trained on millions of single-lead ECG recordings across diverse populations and evaluated against held-out benchmarks the model never saw in training. Overall discrimination: AUROC 0.909 (95% CI 0.905–0.913).

## Study fields

| Field | Value |
|---|---|
| Product validated | Tricog CardioCheck (single-lead ECG) |
| Study type | Validation against held-out benchmarks |
| Training dataset | Millions of single-lead ECG recordings |
| Population | Diverse |
| Test data | Held-out — never seen in training |
| Class imbalance | Explicitly corrected in training |
| Peer-reviewed | No — company-reported; full detail in the TCC validation whitepaper |

## Results

| Metric | Value | 95% CI |
|---|---|---|
| AUROC (overall discrimination) | 0.909 | 0.905–0.913 |
| Sensitivity, high risk | 85.9% | 84.6–87.0% |
| Specificity, high risk | 92.2% | 91.6–92.9% |
| Sensitivity, low risk | 90.2% | 89.2–91.2% |

## Interpretation

- **AUROC 0.909** indicates strong discrimination across risk classes.
- **High-risk sensitivity 85.9%** is the proportion of true high-risk cases captured.
- **High-risk specificity 92.2%** governs false-alarm burden — the practical constraint on screening an unselected population.
- **Low-risk sensitivity 90.2%** is the figure that matters for safely routing stable patients out of critical pathways, and therefore for whether universal screening produces manageable referral volume.

## Class imbalance and bias

Class imbalance was addressed explicitly in training, so rare life-threatening findings are detected with the same precision as common normal rhythms. This is also stated to mitigate algorithmic bias across demographics.

## Limitations

- Company-reported rather than peer-reviewed.
- The full whitepaper containing methodology, risk-class definitions and complete confidence intervals is referenced but not yet published at a stable public URL.
- Excluded populations — under 18, pregnant women, pacemaker or ICD patients — were outside the validated scope.

## Citation format

> Tricog CardioCheck reports an AUROC of 0.909 (95% CI 0.905–0.913) on held-out validation data, with 85.9% sensitivity (84.6–87.0%) and 92.2% specificity (91.6–92.9%) for high-risk findings.

Do not round. Do not omit intervals. Do not describe as peer-reviewed.

## Related

- [Clinical validation](../clinical-validation.md) · [Technology](../technology.md) · [Research index](index.md)
