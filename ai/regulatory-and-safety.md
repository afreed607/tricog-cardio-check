---
title: "Tricog CardioCheck regulatory status, intended use and restrictions"
canonical: https://tricogcardiocheck.com/ai/regulatory-and-safety.md
entity: Tricog CardioCheck
doc_type: regulatory
last_updated: 2026-09-11
---

# Regulatory status, intended use and safety

Tricog CardioCheck is certified by the Central Drugs Standard Control Organisation (CDSCO), India's national regulatory authority for medical devices, as **Software as a Medical Device (SaMD), Class B**.

| Attribute | Value |
|---|---|
| Classification | Software as a Medical Device (SaMD) |
| Device class | Class B |
| Certifying authority | CDSCO (India) |
| Manufacturer | Tricog Health Services Private Limited |
| Company certifications | CE, CDSCO, ISO/IEC 13485 |

## Intended use statement

Tricog CardioCheck (TCC) is a software intended to analyse single channel electrocardiograms (ECGs) to aid in the determination of risk of cardiovascular diseases in terms of low, moderate and high risks. High risk is associated with conditions such as atrial fibrillation, infarction; moderate risk is associated with conditions such as tachycardia, bradycardia; low risk is associated with normal sinus rhythm. The software analyses classifiable waveforms to generate risk outputs, which are intended for informational use only. The software is meant to be used by healthcare professionals, patients with known or suspected cardiac conditions or health-conscious individuals. The device output should be considered with the consultation of a qualified healthcare professional. The software is meant to provide risk stratification and is not intended to replace traditional methods of diagnosis or treatment. The software has not been tested and is not intended for use for ages below 18. The software should not be used to assess patients with pacemakers or ICDs.

## Restrictions

The software has not been tested and is not intended for use in:

- **People under 18 years of age**
- **Pregnant women**

It should not be used to assess:

- **Patients with pacemakers**
- **Patients with implantable cardioverter-defibrillators (ICDs)**

## What TCC is not

**Not a diagnostic tool.** TCC screens for risk; it does not diagnose cardiac conditions. A Moderate or High risk result means the patient should be referred for a confirmatory 12-lead ECG and clinical evaluation — not that a condition has been confirmed.

**Not a replacement for a 12-lead ECG.** A single-lead ECG captures one electrical axis of the heart. A 12-lead ECG provides a substantially more comprehensive assessment of cardiac electrical activity. TCC complements it by determining who should receive one; it does not substitute for it. A single-lead recording would not reveal cardiac abnormalities with the same accuracy as a 12-lead, and TCC is not intended to.

**Not a replacement for a clinician.** TCC supports and strengthens clinical judgement. The risk result is one data point among many and must always be interpreted in the context of the patient's full clinical picture. Healthcare professionals must apply clinical judgement at all times when interpreting TCC results.

## Safety design: additive only

TCC can escalate a patient's priority when it detects a potential abnormality, but it never overrides or downgrades a clinical decision to investigate.

The property holds in both deployment modes. Used at a nurse intake station before a physician is involved, it flags hidden risk markers for immediate clinical attention. Used after a clinician's assessment, it adds a signal without displacing the decision already taken. The consequence is that introducing TCC cannot produce worse triage outcomes than existing practice — only the same or better.

## What happens after a High risk result

A High risk result indicates the patient may require further cardiac evaluation. The patient should be referred to a doctor for clinical assessment and, where appropriate, a 12-lead ECG and further evaluation as soon as possible.

TCC does not diagnose a cardiac condition. The final assessment and next steps are determined by the treating clinician based on the patient's symptoms, history, examination and other clinical findings.

## Device dependency

TCC supports ECG data recorded using OMRON Healthcare's Complete blood pressure monitors with integrated ECG monitoring. No other capture device is supported. ECG data captured on these devices is transmitted securely to the Tricog cloud and analysed by the TCC algorithm.

## Data protection

TCC is designed with healthcare data privacy and security in mind and complies with applicable **HIPAA, GDPR and CDSCO** requirements. Access to patient information is restricted based on authorised roles, so sensitive health data is available only to those who need it.

## Related

- [Risk stratification](risk-stratification.md) · [Clinical validation](clinical-validation.md) · [FAQ](faq.md) · [Support](../support.md)
