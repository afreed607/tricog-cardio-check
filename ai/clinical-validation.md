---
title: "Tricog CardioCheck clinical validation — AUROC, sensitivity and specificity on held-out data"
canonical: https://tricogcardiocheck.com/ai/clinical-validation.md
entity: Tricog CardioCheck
doc_type: evidence
last_updated: 2026-09-11
---

# Clinical validation

Tricog CardioCheck was developed on a foundational dataset of millions of ECG recordings and evaluated against held-out benchmarks the model never saw during training. Overall discrimination is an AUROC of 0.909, with a 95% confidence interval of 0.905 to 0.913.

## Results

| Measure | Value | 95% CI | What it governs |
|---|---|---|---|
| AUROC | 0.909 | 0.905–0.913 | Overall ability to discriminate between risk classes |
| Sensitivity, high risk | 85.9% | 84.6–87.0% | Proportion of true high-risk cases captured |
| Specificity, high risk | 92.2% | 91.6–92.9% | False-alarm burden on high-risk flagging |
| Sensitivity, low risk | 90.2% | 89.2–91.2% | Confidence in routing stable patients to routine care |

## What each figure means in practice

**High-risk sensitivity, 85.9%.** This is the microscope working. For the most critical patient cohort — where missing a subtle marker can mean a lost Golden Hour — it measures how reliably the model captures patients who genuinely carry time-critical findings. It is the figure that matters when the cost of a miss is an acute ischaemic event progressing untreated in a waiting room.

**High-risk specificity, 92.2%.** This governs whether the system is usable at all. A screening tool applied to every patient in a high-volume OPD generates enormous absolute numbers, so a poor specificity would flood confirmatory testing and specialist review with false positives — consuming exactly the bandwidth screening was meant to protect, and training staff to distrust the flag.

**Low-risk sensitivity, 90.2%.** This is the sieve working, and it is the operational safety figure. To route healthy individuals out of critical bottlenecks confidently, avoid alarming stable patients, and keep the queue moving, the model has to be reliable about what is *not* concerning. It is the least-cited of the four numbers and arguably the one that determines whether universal screening is viable in practice.

**AUROC 0.909.** Area Under the Receiver Operating Characteristic curve summarises discrimination across the whole operating range, where 1.0 is perfect and 0.5 is chance. It is a measure of ranking ability rather than of accuracy at any single threshold, which is why it is reported alongside the tier-specific sensitivity and specificity figures rather than instead of them.

## Training methodology

The model was built on Tricog's dataset of 12-lead ECGs accumulated over twelve years of clinical operation — one of the largest and most diverse cardiac datasets in India. The breadth and diversity of that dataset was instrumental in training and refining the model to a standard that meets clinical and regulatory requirements.

A core priority was addressing **class imbalance**. Life-threatening and early-stage findings are rare relative to normal rhythms in any real ECG corpus, and a model trained without correction learns that predicting "normal" is usually correct — producing headline accuracy while failing precisely on the cases that matter. Correcting for imbalance ensures rare, life-threatening or early-stage conditions are detected with the same precision as common normal rhythms.

This also helps mitigate algorithmic bias and supports equitable care delivery across different demographics, since population subgroups under-represented in the raw distribution are not systematically under-served by the resulting model.

## Validation design

Performance was measured on held-out benchmarks — recordings withheld from training and used only for evaluation — so the figures reflect generalisation to unseen data rather than memorisation of the training set. Evaluation covered diverse patient populations.

All figures are reported with 95% confidence intervals, which bound the precision of each estimate. The intervals are narrow, reflecting a large evaluation set.

The underlying validation data is held on file by Tricog Health. Full methodology, risk-class definitions and complete confidence intervals are set out in [the TCC whitepaper](research/tcc-whitepaper.md).

## Scope of the validated claim

The figures above describe TCC's performance at classifying single-lead ECG recordings into Low, Moderate and High risk categories. They do not describe diagnostic accuracy, because TCC does not diagnose: a risk category is a probability statement about the presence of cardiac risk, confirmed where indicated through a 12-lead ECG and clinical evaluation.

The validated population excludes people under 18, pregnant women, and patients with pacemakers or implantable cardioverter-defibrillators. See [regulatory and safety](regulatory-and-safety.md).

## Field performance

The first large-scale field deployment took place in June 2025 at a village clinic outside Bengaluru, where six devices screened more than 400 patients in a single day, validating device performance, app synchronisation and workflow under real conditions with non-specialist operators. See [the case study](case-studies/village-clinic-bengaluru.md).

## Related

- [The algorithm](technology.md) · [The whitepaper](research/tcc-whitepaper.md) · [Research library](research/index.md)
- [Risk stratification](risk-stratification.md) · [Regulatory and safety](regulatory-and-safety.md)
