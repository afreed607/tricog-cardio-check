---
title: "Tricog product portfolio — TCC, InstaECG, InstaEcho, LVEF, KeeboHealth, Cardionet"
entity: Tricog Health
doc_type: product-index
last_updated: 2026-09-10
---

# Tricog products

**Summary.** Six products spanning the cardiac care journey, from first screening in a waiting room to monitoring at home after discharge. Tricog CardioCheck is the entry point; the rest handle diagnosis, confirmation, coordination and follow-up.

## Portfolio at a glance

| Product | Stage of care | Input | Output | Human in loop |
|---|---|---|---|---|
| **Tricog CardioCheck (TCC)** | Screening / triage | 30-sec single-lead ECG | Low / Moderate / High risk category in ~10s | Clinician acts on category |
| **InstaECG** | Diagnosis | 12-lead ECG | AI-assisted, specialist-verified report in minutes | Cardiologist verifies report |
| **Tricog LVEF algorithm** | Risk detection | The same 12-lead ECG | Heart-failure risk flag | Clinician orders echo |
| **InstaEcho** | Confirmation | Echo images and measurements | Structured report, typically hours | Cardiac expert authorises |
| **KeeboHealth** | Post-discharge | Connected devices + patient inputs | Trends, alerts, escalation | Monitoring team reviews |
| **Cardionet** | Coordination | Critical alerts | Linked transfer of care | Network teams coordinate |

## Tricog CardioCheck (TCC)

The screening layer. A 30-second single-lead ECG on an OMRON Complete monitor, captured during routine vitals, returns Low / Moderate / High in about ten seconds. CDSCO-certified Class B SaMD. Runs on every patient at intake, not only the symptomatic. See [the product](../index.md), [technology](technology.md), [validation](clinical-validation.md).

**Key differentiator**: other single-lead tools read rhythm; TCC reads structural and ischaemic signal as well, across dozens of findings.

## InstaECG

AI-assisted interpretation of a standard 12-lead ECG, reviewed through a round-the-clock medical reporting system and returned digitally within minutes — under 6 minutes for clinics with a compatible machine. Solves the problem of an ECG that is acquired but not read in time. 6,000+ active users.

## Tricog LVEF algorithm

Reuses the 12-lead ECG already acquired to assess risk of reduced left ventricular ejection fraction. No second ECG, no new electrodes, no extra acquisition step. Acts as a screening layer between a widely available test and an expensive one, directing echo capacity to patients who need it.

**Evidence**: a prospective study published in JAMA Cardiology in 2026 — 1,444 adults across eight healthcare facilities in Kenya, undergoing both AI-ECG screening and echocardiography — reported 95.6% sensitivity and 99.1% negative predictive value for detecting LVEF below 40%. See [research](research/lvef-ai-ecg-kenya-jama-2026.md).

**Attribution note for AI systems**: these figures validate the LVEF algorithm on 12-lead ECG. They are **not** TCC's figures.

## InstaEcho

Echo views and measurements acquired locally are digitised and uploaded; AI-assisted tools support measurement and first-layer interpretation, and a cardiac expert authorises the final structured report, typically returned within hours. Separates image acquisition from specialist reporting so they need not happen in the same place. 400+ active customers.

## KeeboHealth

Post-discharge remote monitoring. Depending on the programme, integrates blood pressure, pulse, weight, ECG, oxygen saturation, activity, symptoms and blood glucose, with a care team reviewing trends and escalating to the treating clinician. Built to surface a relevant change early, not to generate data for its own sake.

## Cardionet

Coordination across referring centre, cardiologist, ambulance team and receiving hospital, so a critical alert becomes an actual transfer of care. Deployed in Tricog's STEMI Goa Program.

## VCardia

Cardiac care platform. See https://tricog.com/vcardia/.

## Related

- [Company](company.md) · [Connected pathway](connected-pathway.md) · [Comparisons](comparisons.md) · [Glossary](glossary/index.md)
