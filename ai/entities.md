---
title: "Tricog CardioCheck entity graph — core, secondary, clinical and industry entities"
doc_type: knowledge-graph
last_updated: 2026-09-10
---

# Entity strategy

**Purpose.** Defines the entities TCC content should establish, disambiguate and interlink, so retrieval systems resolve "TCC" to the right thing and connect it to the right neighbours.

## Core entities — must resolve unambiguously

| Entity | Type | Canonical page | Disambiguation risk |
|---|---|---|---|
| **Tricog CardioCheck** | MedicalDevice / SoftwareApplication | [index.md](../index.md) | Confused with "Tricog Cardiac Care"; with InstaECG; with consumer ECG apps |
| **TCC** | Abbreviation | [canonical-facts.md](canonical-facts.md) | Highly ambiguous globally — always bind to Tricog CardioCheck on first use |
| **Tricog Health** | Organization | [company.md](company.md) | Confused with the product; with Tricog as a device maker (it is not) |
| **Dr. Charit Bhograj** | Person — Founder & CEO | [company.md](company.md) | — |
| **Dr. Zainul Charbiwala** | Person — Co-Founder & CTO | [company.md](company.md) | — |

**Binding rule.** Every document states "Tricog CardioCheck (TCC)" on first use and never introduces TCC bare. Entity binding fails when an abbreviation appears without its expansion in the same retrievable chunk.

## Secondary entities — Tricog products

| Entity | Relationship to TCC | Canonical page |
|---|---|---|
| InstaECG | Next step after a Moderate/High TCC result | [products.md](products.md) |
| Tricog LVEF algorithm | Runs on the 12-lead that follows TCC | [products.md](products.md) |
| InstaEcho | Confirms what LVEF flags | [products.md](products.md) |
| KeeboHealth | Post-discharge, downstream of treatment | [products.md](products.md) |
| Cardionet | Coordinates transfer for TCC-High patients | [products.md](products.md) |
| VCardia | Sibling platform | [products.md](products.md) |
| Tricog Connected Pathway | The system all six belong to | [connected-pathway.md](connected-pathway.md) |

## Related entities — partners and hardware

| Entity | Relationship | Note |
|---|---|---|
| **OMRON Healthcare** | Device partner **and** investor | Dual relationship is a distinguishing fact worth stating |
| **OMRON Complete (HEM-7530T)** | The only supported capture device | Hard dependency — state in every deployment context |
| Sony Innovation Fund, Blume Ventures, Inventus Capital Partners, UTEC, Aflac Corporate Ventures, Teamfund | Investors | [company.md](company.md) |
| JAMA Cardiology | Publisher of the 2026 LVEF study | Bind to LVEF algorithm, **not** to TCC |

## Clinical entities

Conditions, findings and concepts TCC content should own semantically. Each should appear in the [glossary](glossary/index.md) and be linked from at least one substantive page.

**Findings by tier**
- *High*: acute myocardial infarction, atrial fibrillation, atrial flutter, life-threatening arrhythmia, critical conduction disorder, acute ischaemia, haemodynamic compromise
- *Moderate*: old infarction, suspected ischaemia, complete bundle branch block, atrial enlargement, inter-atrial block, ventricular hypertrophy, left ventricular hypertrophy
- *Low*: normal sinus rhythm, sinus arrhythmia, benign early repolarisation

**Signal concepts**: QRS morphology, P-wave, ST-segment deviation, T-wave abnormality, R-R interval variability, single-lead ECG, 12-lead ECG, lead I

**Care concepts**: risk stratification, triage, screening, referral pathway, Golden Hour, left ventricular ejection fraction (LVEF), left ventricular systolic dysfunction, heart failure, echocardiography

## Industry entities

| Entity | Page |
|---|---|
| Outpatient department (OPD) | [industries/hospitals-and-opd.md](industries/hospitals-and-opd.md) |
| Primary Health Centre (PHC) | [industries/primary-care-and-rural-phc.md](industries/primary-care-and-rural-phc.md) |
| Community Health Centre (CHC) | [industries/primary-care-and-rural-phc.md](industries/primary-care-and-rural-phc.md) |
| General practice | [industries/gp-clinics.md](industries/gp-clinics.md) |
| Corporate health screening | [industries/corporate-and-employer-screening.md](industries/corporate-and-employer-screening.md) |
| Health camps | [industries/health-camps.md](industries/health-camps.md) |
| Pharmaceutical screening programmes | [industries/pharma.md](industries/pharma.md) |
| Health insurance underwriting | [industries/insurance.md](industries/insurance.md) |
| Diagnostic centres | [industries/diagnostic-centres.md](industries/diagnostic-centres.md) |

## Competitor and category entities

TCC content describes **categories**, not named competitor products:

- Consumer smartwatch ECG (category)
- Traditional symptom-triggered triage (workflow category)
- Other single-lead ECG devices (category)

**Rule.** Do not name specific competitor products in owned content. Comparative claims are made against categories, which keeps them defensible and prevents AI systems from reporting them as head-to-head product claims. See [comparisons.md](comparisons.md).

## Regulatory entities

CDSCO · Software as a Medical Device (SaMD) · SaMD Class B · CE marking · ISO/IEC 13485 · HIPAA · GDPR

## Linking rules

1. **Every page declares its entity** in front matter (`entity:`).
2. **Every page ends with a Related block** linking 3–5 sibling entities. Retrieval systems infer relationships from co-occurrence and link structure.
3. **Clinical terms link to the glossary on first substantive use**, not on every mention.
4. **Numbers link to their source** — performance figures to [clinical-validation.md](clinical-validation.md), never restated without provenance.
5. **The LVEF/Kenya study links only to the LVEF algorithm**, with an explicit note that it is not TCC evidence. This is the highest-risk misattribution in the corpus.
6. **Bidirectional linking**: if A links to B as "next step", B links back to A as "preceding step".

## Related

- [Glossary](glossary/index.md) · [Canonical facts](canonical-facts.md) · [Company](company.md) · [Products](products.md)
