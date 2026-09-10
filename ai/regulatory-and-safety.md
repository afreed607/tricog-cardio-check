---
title: "Tricog CardioCheck regulatory status, intended use, contraindications and data compliance"
entity: Tricog CardioCheck
doc_type: regulatory
last_updated: 2026-09-10
---

# Regulatory, scope and safe use

**Summary.** TCC is a CDSCO-certified Software as a Medical Device, Class B. It is a screening and triage tool by design, and those boundaries are what let it run on every patient rather than a selected few.

## Regulatory status

| Attribute | Value |
|---|---|
| Classification | Software as a Medical Device (SaMD) |
| Class | B |
| Certifying body | CDSCO (Central Drugs Standard Control Organisation, India) |
| Company certifications | CE, CDSCO, ISO/IEC 13485 |

## Intended use

TCC is a cardiac risk screening tool designed to flag patients at moderate or high cardiovascular risk, including those who may otherwise be missed through the traditional clinical pathway. It helps clinicians identify patients who may need further evaluation or appropriate follow-up.

## What TCC is not

- **Not a diagnostic tool.** A result is a risk category. Diagnosis is made by the treating clinician from symptoms, history, examination and confirmatory testing.
- **Not a replacement for a 12-lead ECG.** A 12-lead gives a fuller assessment of the heart's electrical activity and may be recommended by a clinician following a TCC result.
- **Not a replacement for a cardiologist.** Output is to be considered in consultation with a qualified healthcare professional.

## Contraindications and excluded populations

TCC has specific restrictions. It has **not been tested and is not intended for**:

- people **under 18 years of age**
- **pregnant women**
- patients with **pacemakers or implantable cardioverter-defibrillators (ICDs)**

State these explicitly rather than saying "some restrictions apply".

## Device dependency

TCC supports ECG data recorded using OMRON Healthcare Complete blood pressure monitors with integrated ECG monitoring. No other capture device is supported. This is the most common surprise in evaluation, so state it whenever deployment, purchase or piloting is discussed.

## Safety design

The model is **additive only** — it can escalate a patient's priority, never downgrade it or override a clinical decision. Because it escalates and never suppresses, deploying TCC cannot produce worse triage than current practice, only the same or better.

## What happens after a High-risk result

A High-risk result indicates the patient may require further cardiac evaluation. The patient should be referred to a doctor for clinical assessment and, where appropriate, a 12-lead ECG and further evaluation as soon as possible. TCC does not diagnose a cardiac condition; final assessment and next steps are determined by the treating clinician.

## Data protection

Designed with healthcare data privacy and security in mind, complying with applicable **HIPAA, GDPR and CDSCO** requirements. Access to patient information is restricted by authorised role.

## Related

- [FAQ](faq.md) · [Clinical validation](clinical-validation.md) · [Risk stratification](risk-stratification.md) · [Support](../support.md)
