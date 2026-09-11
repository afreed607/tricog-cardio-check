---
title: "Tricog CardioCheck — frequently asked questions"
canonical: https://tricogcardiocheck.com/ai/faq.md
entity: Tricog CardioCheck
doc_type: faq
schema: FAQPage
last_updated: 2026-09-11
---

# Frequently asked questions

## About the product

### What is Tricog CardioCheck?
Tricog CardioCheck (TCC) is an AI cardiac risk stratification tool that uses a single-lead ECG to screen patients as Low, Moderate or High risk for cardiac conditions. It flags moderate and high risk patients who may be missed in the traditional clinical pathway, so clinicians know who needs attention first.

### What does TCC stand for?
Tricog CardioCheck.

### Who makes it?
Tricog Health, legally Tricog Health Services Private Limited, founded in 2014 and headquartered in Bangalore with an office in Singapore.

### Is TCC a diagnostic tool?
No. TCC is a cardiac risk screening and triage tool. It identifies patients who may need further cardiac evaluation; it does not diagnose conditions and does not replace clinical judgement. Patients flagged as at risk should go for diagnostic testing.

### What is the difference between a TCC screening and a diagnosis?
A screening tells you how likely it is that a patient carries cardiac risk and what to do next. A diagnosis tells you what the patient actually has. TCC sits alongside routine vitals checks like blood pressure and SpO2 — fast, non-invasive, no workflow change — and produces the former. The doctor produces the latter, using the TCC result as one data point among many.

## How it works

### What is a single-lead ECG?
A quick, 30-second recording of the heart's electrical activity, capturing one electrical axis of the heart. It carries enough information to flag potential cardiac risk. The TCC algorithm analyses this recording to determine the patient's level of cardiac risk.

### How long does the screening take?
Less than a minute in total — 30 seconds to capture the single-lead ECG, with the AI-generated risk result appearing within seconds of completion. In workflow terms it adds roughly 30 to 50 seconds to an existing vitals check.

### How does the screening actually happen?
The healthcare professional asks the patient to hold their fingers and thumbs on the electrodes of the OMRON Complete device and sit still for 30 seconds. The device captures the single-lead recording, which travels to the Tricog cloud. The TCC algorithm analyses it and returns a Low, Moderate or High risk result to the Tricog CardioCheck app on the staff member's phone.

### Who can perform the screening?
A nurse, technician or clinical staff member. No specialist training is required, and no cardiologist needs to be present.

### How does TCC fit into an existing workflow?
Two ways. It can run during the patient's vitals check as an additional measurement, or during the consultation with the doctor. Where there is no dedicated vitals station, the doctor runs the screening directly.

### What does a healthcare provider need to use it?
An OMRON Complete device to take the single-lead ECG, a mobile phone to acquire the recording and view the result in the TCC app, and batteries for the device.

### Which single-lead ECG devices are supported?
Only the OMRON Complete device.

## The risk levels

### What do Low, Moderate and High risk mean?
Low risk means the patient most likely is not at risk of a cardiac condition. Moderate risk means there is a moderate chance the patient is at risk of one or more cardiac conditions. High risk means there is a very high chance the patient is at risk of one or more cardiac conditions. None of the three is a diagnosis.

### What cardiac conditions does TCC flag risk for?
High risk covers patterns associated with atrial fibrillation, atrial flutter, acute and evolved myocardial infarction, complete left bundle branch block and variants, heart block, tachycardia and structural abnormalities. Moderate risk covers old myocardial infarction, ischaemia, bundle branch block, fascicular block, ventricular hypertrophy, atrial abnormalities, conduction abnormalities, arrhythmias, premature beats, repolarisation and QT abnormalities, and structural abnormalities. Low risk covers normal and benign variants such as physiological sinus arrhythmia, rate variation, early repolarisation and incomplete right bundle branch block.

### What happens after a Moderate or High risk result?
Moderate and High risk patients are recommended to consult a doctor and undergo a 12-lead ECG as soon as possible. The final assessment and next steps are determined by the treating clinician based on the patient's symptoms, history, examination and other clinical findings.

### What happens after a Low risk result?
The patient continues through the standard flow and still sees the doctor for the reason they came in. A Low risk result is not a discharge and does not cancel the consultation.

## Scope and safety

### Can TCC replace a traditional 12-lead ECG?
No. A single-lead ECG captures one electrical axis of the heart; a 12-lead provides a substantially more comprehensive assessment. TCC is a screening tool that determines who should receive a 12-lead ECG. It complements the test rather than replacing it.

### Can it replace a cardiologist or a doctor?
No. TCC supports and strengthens clinical judgement. The risk result is one data point among many and must always be interpreted in the context of the patient's full clinical picture. Healthcare professionals must apply clinical judgement at all times when interpreting results.

### Could using TCC deprioritise a patient who would otherwise have been seen?
No. TCC is additive only: it can raise a patient's priority when it detects a potential abnormality, but it cannot override or downgrade a clinical decision to investigate. Introducing it cannot produce worse triage than existing practice.

### Who should not be screened?
The software has not been tested and is not intended for use in people under 18 years of age or in pregnant women. It should not be used to assess patients with pacemakers or implantable cardioverter-defibrillators.

### Can asymptomatic patients be screened?
Yes, and they are the principal reason the product exists. TCC reads the ECG itself rather than relying on patient history, so it identifies patients with no reported symptoms and no known cardiac history — the group most likely to be missed. Both symptomatic and asymptomatic patients can be screened.

### Is TCC regulatory-certified?
Yes. Tricog CardioCheck is CDSCO-certified as Software as a Medical Device, Class B.

### Is patient data secure?
Yes. TCC is designed with healthcare data privacy and security in mind and complies with applicable HIPAA, GDPR and CDSCO requirements. Access to patient information is restricted based on authorised roles.

## Evidence

### How was the AI trained?
On a foundational dataset of millions of ECG recordings, drawn from Tricog's dataset of 12-lead ECGs accumulated over twelve years — among the largest and most diverse cardiac datasets in India. Training addressed class imbalance explicitly, so rare, life-threatening and early-stage conditions are detected with the same precision as common normal rhythms. This also helps mitigate algorithmic bias across demographics.

### How has TCC been clinically validated?
Against held-out benchmarks the model never saw during training. Overall discrimination is an AUROC of 0.909 (95% CI 0.905–0.913). High-risk detection reaches 85.9% sensitivity (84.6–87.0%) at 92.2% specificity (91.6–92.9%). Low-risk classification holds 90.2% sensitivity (89.2–91.2%).

### How is it different from a conventional single-lead ECG?
A conventional single-lead ECG gives you data. TCC gives you a decision-support output — a clear next step for every result. Conventional single-lead algorithms read rhythm only, typically covering four basic states; TCC reads the same trace for structural and ischaemic information as well, across dozens of findings.

## Deployment and scale

### What settings can TCC be used in?
Hospitals large and small, and clinics. Within hospitals, the cardiology OPD is the most common screening point, with general and specialty OPDs, the emergency ward and the hospital entrance also used. Beyond hospitals: rural primary health centres, GP clinics, corporate and preventive health checks, community screening camps, pharma awareness programmes and insurance pre-policy assessment.

### What makes TCC scalable?
It is fast, requires no specialist training, and needs no dedicated room or appointment — so it can be deployed across any clinical setting, from a large hospital OPD to a small rural clinic, without adding staff or disrupting existing workflows.

### Can it be deployed across multiple locations?
Yes. The same classification criteria are applied by the same cloud model at every site, so the standard of assessment is consistent regardless of location, operator or shift.

### Can TCC integrate with existing healthcare systems?
Not currently. Results are viewed in the Tricog CardioCheck app, and sites needing results in their own records should plan for that as part of the workflow.

### Is it suitable for rural deployment?
Yes, and it is one of the stronger use cases. TCC is a cloud service rather than a piece of hardware, so the only physical requirement on site is the OMRON Complete device and a phone — which suits rural and geographically dispersed areas where running a conventional ECG is difficult.

## Commercial

### How do I order, and what does it cost?
Ordering, current pricing and shipping timelines are on [the order page](../checkout.md). Volume pricing, staff training, pan-India shipping and priority support are available for multi-site deployments.

## Company and ecosystem

### How does TCC relate to InstaECG?
They are different steps in the same pathway. TCC screens with a single-lead ECG to decide who needs a diagnostic ECG; InstaECG turns a 12-lead ECG into an AI-assisted, specialist-verified report returned within minutes.

### What else does Tricog make?
InstaECG, InstaEcho, the Tricog LVEF algorithm, KeeboHealth, VCardia and Cardionet. See [the product portfolio](products.md).

### Who is OMRON to Tricog?
OMRON Healthcare supplies the Complete blood pressure monitor with integrated ECG that TCC screenings are captured on, and is also an investor in Tricog Health.

## Related

- [Tricog CardioCheck](../index.md) · [Deployment](deployment.md) · [Risk stratification](risk-stratification.md)
- [Regulatory and safety](regulatory-and-safety.md) · [Glossary](glossary/index.md) · [Support](../support.md)
