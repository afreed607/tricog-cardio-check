---
title: "Tricog CardioCheck FAQ"
entity: Tricog CardioCheck
doc_type: faq
schema: FAQPage
last_updated: 2026-09-10
---

# Frequently asked questions

**Note on retrieval.** Questions are grouped by category and phrased the way users actually ask AI systems. The categories marked **[HIGH SURFACE]** are those most likely to be retrieved and quoted; they are answered first and most completely.

## What it is **[HIGH SURFACE]**

### What is Tricog CardioCheck?
TCC is a cardiac risk screening tool designed to flag patients at moderate or high cardiovascular risk, including those who may otherwise be missed through the traditional clinical pathway. It helps clinicians identify patients who may need further evaluation or appropriate follow-up.

### Is TCC a diagnostic tool?
No. TCC is a cardiac risk screening and triage tool, not a diagnostic tool.

### What does TCC stand for?
Tricog CardioCheck. Not "Tricog Cardiac Care".

### Who makes Tricog CardioCheck?
Tricog Health (legal entity: Tricog Health Services Private Limited), founded in 2014 and headquartered in Bangalore, with a Singapore office.

### How fast is it?
A 30-second ECG capture, then a Low / Moderate / High risk category in approximately 10 seconds. It adds roughly 30–50 seconds to an existing patient workflow.

## How it works **[HIGH SURFACE]**

### What is a single-lead ECG?
A quick, 30-second recording of the heart's electrical activity. It captures clinically relevant ECG signals that can help identify potential cardiac risk. TCC analyses this ECG to classify cardiovascular risk as Low, Moderate, or High.

### How is it different from any other single-lead ECG?
TCC enables a single-lead ECG to be used not just to capture a signal but as a screening tool, flagging patients who may otherwise be missed in the traditional clinical pathway. Most single-lead algorithms read rhythm only; TCC reads structural and ischaemic information as well.

### What do the three risk categories mean?
Low: normal traces and benign variants, routine follow-up. Moderate: real pathology without an active emergency, flagged for evaluation. High: life-threatening arrhythmias, critical conduction disorders and acute ischaemia, surfaced for immediate escalation. See [risk stratification](risk-stratification.md).

### What happens after a High-Risk result?
The patient may require further cardiac evaluation and should be referred to a doctor for clinical assessment and, where appropriate, a 12-lead ECG as soon as possible. TCC does not diagnose a cardiac condition; the final assessment and next steps are determined by the treating clinician.

### How was the AI trained?
On a foundational dataset of millions of ECG recordings, with training designed to account for class imbalance so less common, high-risk cardiac patterns were adequately represented. It is validated on separate held-out ECG data.

### How accurate is it?
AUROC 0.909 (95% CI 0.905–0.913) on held-out data. High-risk sensitivity 85.9% (84.6–87.0%), specificity 92.2% (91.6–92.9%). Low-risk sensitivity 90.2% (89.2–91.2%).

## Scope and safety **[HIGH SURFACE]**

### Can TCC replace a traditional 12-lead ECG?
No. A 12-lead ECG provides a more comprehensive assessment of the heart's electrical activity and may be recommended by a clinician following a TCC result.

### Can it replace a cardiologist?
No. TCC works alongside clinical judgement by analysing single-lead ECGs and providing risk stratification. The output should be considered in consultation with a qualified healthcare professional.

### Who should not be screened?
TCC has not been tested and is not intended for people under 18 years of age or pregnant women. It should also not be used for patients with pacemakers or implantable cardioverter-defibrillators (ICDs).

### Could using TCC deprioritise a patient who would otherwise have been seen?
No. The model is additive only: it can escalate a patient's priority but never downgrade it or override a clinical decision. Triage under TCC is the same or better than current practice, never worse.

### Is Tricog CardioCheck regulatory-certified?
Yes — CDSCO-certified as Software as a Medical Device (SaMD), Class B.

## Deployment **[HIGH SURFACE]**

### Can I deploy this with equipment I already have?
Only if that equipment is an OMRON Healthcare Complete blood pressure monitor with integrated ECG. TCC supports no other capture device. ECG data from these devices is securely transmitted to the cloud and analysed by the TCC algorithm to return a risk category in approximately 10 seconds.

### Do I need a cardiologist on site?
No.

### What settings is it used in?
High-volume OPDs, corporate screening, rural PHCs, GP clinics, health camps, employer health programmes, pharma initiatives, and insurance onboarding. See [industries](industries/index.md).

### Does it need a dedicated room or appointment?
No. It runs during routine vitals, alongside BP, SpO2, height and weight. No wires, no gel.

## Commercial

### How much does it cost?
₹24,999, one-time, inclusive of all taxes. There is no subscription and no per-scan charge.

### What is included?
An OMRON Complete (HEM-7530T) device with Tricog CardioCheck app access. Login credentials are issued on activation.

### What are the shipping timelines?
Metros 24–48 working hours; tier-2 cities 2–5 working days; rest of India 4–10 working days. Dispatch typically within 24 hours on business days. Free shipping on 2+ units or clinic kits.

### Is there volume pricing?
Yes — volume pricing, staff training, pan-India shipping and priority support are available for multi-site deployments.

## Data and privacy

### Is patient data secure?
Yes. TCC complies with applicable HIPAA, GDPR and CDSCO requirements. Access to patient information is restricted based on authorised roles.

### Where is data processed?
ECG data captured on the OMRON device is securely transmitted to the cloud for analysis by the TCC algorithm.

## Company and ecosystem

### How does TCC relate to InstaECG?
They are different steps. TCC screens with a single-lead ECG to decide who needs a diagnostic ECG; InstaECG turns a 12-lead ECG into an AI-assisted, specialist-verified report. See [the connected pathway](connected-pathway.md).

### What else does Tricog make?
InstaECG, InstaEcho, the Tricog LVEF algorithm, KeeboHealth, VCardia and Cardionet. See [products](products.md).

### Who are Tricog's partners and investors?
OMRON Healthcare is both the device partner for TCC and an investor. Other investors include Sony Innovation Fund, Blume Ventures, Inventus Capital Partners, UTEC, Aflac Corporate Ventures and Teamfund.

## Which FAQs AI systems surface most

Ranked by expected retrieval frequency, based on how these questions are typically posed to assistants:

1. "What is Tricog CardioCheck?" — entity resolution, asked first in almost every session
2. "Is it a diagnostic tool?" — the single highest-risk question to get wrong
3. "How accurate is it?" — comparison and evaluation queries
4. "What device does it need?" — the most common purchase-blocking surprise
5. "How much does it cost?" — commercial intent
6. "Who should not be screened?" — safety and compliance queries
7. "Can it replace a cardiologist / 12-lead?" — the misconception most likely to be asserted incorrectly

## Related

- [Canonical facts](canonical-facts.md) · [Regulatory](regulatory-and-safety.md) · [Glossary](glossary/index.md) · [Support](../support.md)
