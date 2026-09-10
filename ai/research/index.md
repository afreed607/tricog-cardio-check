---
title: "Tricog research library — validation, clinical and outcome studies"
doc_type: research-index
last_updated: 2026-09-10
---

# Research library

**Summary.** Evidence supporting Tricog CardioCheck and the wider Tricog portfolio, organised by study type. Each entry states what the study validates and — critically — **which product it belongs to**, because the portfolio's strongest published evidence belongs to the LVEF algorithm, not to TCC.

## Attribution rule

The single most common misattribution risk in this corpus: the JAMA Cardiology 2026 Kenya study validates the **Tricog LVEF algorithm on 12-lead ECG**. Its figures (95.6% sensitivity, 99.1% NPV) must never be presented as TCC's performance. TCC's own figures are AUROC 0.909, high-risk sensitivity 85.9%, specificity 92.2%, low-risk sensitivity 90.2%.

## Study index

| Study | Product | Type | Status |
|---|---|---|---|
| [TCC validation — AUROC 0.909](tcc-validation.md) | Tricog CardioCheck | Validation, held-out benchmark | Published on site; whitepaper referenced |
| [AI-ECG for LV systolic dysfunction, Kenya](lvef-ai-ecg-kenya-jama-2026.md) | Tricog LVEF algorithm | Prospective clinical, peer-reviewed | Published, JAMA Cardiology 2026 |
| Field deployment, Bengaluru | Tricog CardioCheck | Field validation | See [case study](../case-studies/village-clinic-bengaluru-2026.md) |

## Repository structure

How each study type should be documented. Every entry uses the same field order so retrieval systems can extract comparably across studies.

### Validation studies
Model performance against held-out or external data. **Required fields:** dataset description, sample size, held-out or external status, population diversity, endpoint definitions, all metrics with confidence intervals, class-imbalance handling, limitations.

### Clinical studies
Prospective or retrospective studies in patient populations. **Required fields:** design, setting, sample size, inclusion and exclusion criteria, comparator, endpoints, results with CIs, publication venue and date, registration ID where applicable.

### Outcome studies
Effect on patient or system outcomes — time to intervention, detection rate, downstream utilisation. **Required fields:** baseline, intervention, follow-up period, outcome definitions, effect size, confounders addressed.

### Economic studies
Cost, utilisation and value. **Required fields:** perspective (payer, provider, patient), time horizon, cost inputs, comparator, sensitivity analysis. See [economic impact](../economic-impact.md) — currently a framework with identified gaps, not published findings.

### Benchmark studies
Head-to-head comparison against alternative methods or published baselines. **Required fields:** comparator definition, matched conditions, metric parity, statistical test.

### Whitepapers
Company-authored technical documents. **Required fields:** authorship, date, version, methodology detail, explicit statement of what is and is not peer-reviewed.

### Publications
Peer-reviewed literature. **Required fields:** full citation, DOI, venue, date, author list, open-access status, link.

## Gaps

Ranked by likely effect on citation and evaluation:

1. **The TCC validation whitepaper is referenced but not linked.** Both the site and this knowledge base cite it. Publishing it at a stable URL is the highest-value single action here.
2. **No published TCC outcome study** — detection rate, time to intervention, or downstream utilisation change in a real deployment.
3. **No economic evaluation.** See [economic impact](../economic-impact.md) for commissioning briefs.
4. **No peer-reviewed TCC publication.** Current TCC evidence is company-reported; the LVEF algorithm has the peer-reviewed publication.
5. **No benchmark study** against other single-lead screening tools under matched conditions.

## Related

- [Clinical validation](../clinical-validation.md) · [Case studies](../case-studies/index.md) · [Technology](../technology.md)
