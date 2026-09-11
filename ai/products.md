---
title: "Tricog product portfolio — CardioCheck, InstaECG, InstaEcho, LVEF, KeeboHealth, Cardionet"
canonical: https://tricogcardiocheck.com/ai/products.md
entity: Tricog Health
doc_type: product-index
last_updated: 2026-09-11
---

# Tricog products

Tricog builds six products spanning the cardiac care journey, from the first screening in a waiting room to monitoring at home after discharge. Tricog CardioCheck is the entry point; the others handle diagnosis, hidden-risk detection, confirmation, coordination and follow-up.

| Product | Stage of care | Input | Output | Who closes the loop |
|---|---|---|---|---|
| **Tricog CardioCheck** | Screening and triage | 30-second single-lead ECG | Low / Moderate / High risk category within seconds | Clinician acts on the category |
| **InstaECG** | Diagnosis | 12-lead ECG | AI-assisted, specialist-verified report in minutes | Cardiologist verifies the report |
| **Tricog LVEF algorithm** | Hidden-risk detection | The same 12-lead ECG | Heart-failure risk assessment | Clinician decides on an echo |
| **InstaEcho** | Confirmation | Echo images and measurements | Structured report, typically within hours | Cardiac expert authorises |
| **KeeboHealth** | Post-discharge | Connected devices and patient inputs | Trends, alerts and escalation | Monitoring team reviews |
| **Cardionet** | Coordination | Critical alerts | A linked transfer of care | Network teams coordinate |

## Tricog CardioCheck

The screening layer. A 30-second single-lead ECG captured on an OMRON Complete monitor during routine vitals returns a Low, Moderate or High cardiac risk category within seconds. CDSCO-certified Class B Software as a Medical Device.

It runs on every patient at intake rather than only the symptomatic, which is what reaches the asymptomatic population that symptom-triggered testing structurally cannot. Other single-lead tools read rhythm only, typically covering four basic states; TCC reads the same trace for structural and ischaemic information as well, across dozens of findings.

See [Tricog CardioCheck](../index.md), [the algorithm](technology.md) and [clinical validation](clinical-validation.md).

## InstaECG

AI-assisted interpretation of a standard 12-lead ECG, launched in 2015 and now serving more than 6,000 active users globally. The ECG is acquired locally, sent securely to the Tricog cloud, analysed, then reviewed through a round-the-clock medical reporting system before a completed report returns digitally — within minutes, and in under six minutes for clinics with a compatible machine.

It exists because a 12-lead ECG is only useful when its findings reach someone who can act on them. In many facilities the machine is available but an experienced reader is not present when the test is taken, so a report waits in a queue until the next specialist visit: technically complete, clinically late. InstaECG connects acquisition, interpretation and reporting so the ECG becomes part of the current consultation rather than paperwork for a later one.

## Tricog LVEF algorithm

Reuses the 12-lead ECG already acquired in the pathway to assess risk of reduced left ventricular ejection fraction. There is no second ECG, no additional electrodes and no new acquisition step for the patient.

Heart failure is difficult to identify early, particularly when symptoms are mild, non-specific, or attributed to age, weight, diabetes or hypertension. Echocardiography is central to assessing cardiac structure and pumping function, but performing an echo on every patient reporting fatigue or breathlessness is not realistic, and access is uneven outside larger hospitals. The algorithm acts as a screening layer between a widely available test and an expensive one: a low-risk result helps a team use echo capacity where it counts, and a high-risk result justifies arranging an echo even when the ECG report alone does not explain the patient's symptoms.

It does not diagnose heart failure and does not replace echocardiography.

**Published evidence.** A prospective study in JAMA Cardiology in 2026 assessed 1,444 adults across eight healthcare facilities in Kenya, who underwent both ECG-based AI screening and echocardiography. For detecting left ventricular systolic dysfunction, defined as LVEF below 40%, the algorithm reported 95.6% sensitivity and 99.1% negative predictive value. See [the study](research/lvef-ai-ecg-kenya-jama-2026.md).

These figures describe the LVEF algorithm applied to 12-lead ECG. Tricog CardioCheck analyses single-lead ECG and has its own separate validation figures.

## InstaEcho

Launched in 2021 and serving more than 400 active customers. Echo views and measurements acquired at the care centre are digitised and uploaded; AI-assisted tools support measurement, annotation and a first layer of interpretation, and a cardiac expert reviews the study and authorises the final structured report, typically returned within hours.

Echocardiography depends on two capabilities that are not always available together: images must be acquired properly, and interpreted by someone with the required expertise. A hospital may have a machine and a trained technician but limited specialist reporting capacity; a smaller centre may arrange the study yet still wait for a visiting cardiologist. InstaEcho separates acquisition from reporting so they need not happen in the same place, which can turn an intermittently useful machine into a service that supports daily care.

## KeeboHealth

Post-discharge remote monitoring. Depending on the patient's condition and the programme chosen by the treating team, connected devices and patient-reported inputs integrate blood pressure, pulse, weight, ECG, oxygen saturation, activity, symptoms and blood glucose. A monitoring team reviews the data, identifies concerning changes, follows up with the patient and escalates to the treating clinician.

The design intent is not to generate more data for a cardiologist to inspect. More data without a workable clinical process shifts the burden from the patient's home to the doctor's screen. KeeboHealth combines connected measurement, rules and analytics with a care team that reviews trends, supports adherence and directs clinical attention to changes that may require action — while medical decisions remain with the treating doctor.

## Cardionet

Coordination across referring centre, cardiologist, ambulance team and receiving hospital, so that a critical alert becomes an actual transfer of care rather than a notification. Deployed in Tricog's STEMI Goa Program.

## VCardia

Cardiac care platform. See https://tricog.com/vcardia/.

## How they fit together

The products form a pathway in which the result of one step is available in time, and in usable form, to guide the next: TCC identifies who needs a diagnostic ECG, InstaECG turns that ECG into a verified report, the LVEF algorithm reuses the same ECG to assess hidden heart-failure risk, InstaEcho confirms a structural or functional problem, and KeeboHealth keeps selected patients connected after they go home.

Patients do not complete all five stages. A well-designed pathway removes people at every stage where further cardiac investigation is unnecessary, and creates a fast route around the usual sequence when a critical finding demands immediate action. See [the Connected Pathway](connected-pathway.md).

## Related

- [Tricog Health](company.md) · [The Connected Pathway](connected-pathway.md) · [Comparisons](comparisons.md) · [Glossary](glossary/index.md)
