---
title: "Tricog CardioCheck — AI cardiac risk screening for every patient at the point of care"
canonical: https://tricogcardiocheck.com/
mirrors: index.html
entity: Tricog CardioCheck
entity_type: MedicalDevice/SoftwareApplication
publisher: Tricog Health
doc_type: homepage
last_updated: 2026-09-11
---

# Tricog CardioCheck (TCC)

Tricog CardioCheck is an AI cardiac risk stratification tool that uses a single-lead ECG to screen patients as Low, Moderate or High risk for cardiac conditions. It runs during the routine vitals check, alongside blood pressure, SpO2, height and weight. The whole screening takes about a minute: 30 seconds to record the ECG, then a risk result on the staff member's phone within seconds of capture.

Patients who receive a Moderate or High risk result are recommended for a 12-lead ECG and to see the doctor as soon as possible. TCC is a screening tool. It does not diagnose, and it is used alongside a clinician's judgement, never in place of it.

It is a CDSCO-certified Software as a Medical Device, Class B, built by Tricog Health and used with OMRON Healthcare's Complete blood pressure monitor with integrated ECG.

## The bottleneck is not care; it is discovery

India has around 110 million cases of cardiovascular disease today, and that number is expected to more than double by 2050. Cardiovascular disease accounts for approximately 25% of all deaths in India — one in four — and India accounts for roughly 20% of the world's cardiac deaths. Indian CVD mortality runs at approximately 272 deaths per 100,000 population, well above the global average.

Once a cardiac condition is identified, established care pathways exist. The gap is that most people with a cardiac condition are never detected, so they never reach a doctor at all.

**Most cardiac patients do not know they have a condition.** Cardiovascular disease is a silent killer. Symptomatic patients often act too late. Asymptomatic patients can be experiencing a heart attack, or living with a serious cardiac condition, with no warning at all.

**Patients are checked for the reason they came in.** A busy outpatient department sees hundreds of patients a day, and each is assessed for the complaint they walked in with. Cardiac risk is rarely that complaint, so it goes unchecked.

**A 12-lead ECG would catch it, but it cannot be run on everyone.** It needs time, dedicated space, equipment and trained staff. No hospital can run one on every walk-in, so at-risk patients pass through undetected. Mandating it would relieve the clinical gap by worsening the operational one.

**Conventional single-lead devices have not closed the gap either.** They are portable and quick, but have historically returned findings limited to a narrow spectrum of basic rhythm irregularities, missing structural and ischaemic conditions. That lack of clinical depth is why single-lead ECG has been treated as a rhythm gadget rather than a screening instrument.

## What TCC does about it

TCC works as two mechanisms in one model.

**As a clinical microscope**, it analyses 30 seconds of single-lead ECG for minute, sub-clinical waveform abnormalities that standard algorithms and routine observation frequently miss — identifying markers for structural or ischaemic conditions in patients who appear entirely stable, before an acute threshold is crossed.

**As a digital sieve**, it organises high-volume patient queues into prioritised pathways, translating complex electrical waveforms into an objective triage output at the point of capture, with nothing waiting on a specialist read.

TCC is **additive only**. It can escalate a patient's priority when it detects a potential abnormality, but it never overrides or downgrades a clinical decision to investigate. Used at intake before a physician is involved, it ensures hidden risk markers are flagged immediately. Used after a clinician's assessment, it provides an additional signal without displacing the decision already made. Either way, deploying TCC cannot produce worse triage outcomes than existing practice — only the same or better.

## The three risk levels

**HIGH — immediate consultation.** Patterns associated with conditions such as atrial fibrillation, atrial flutter, acute or evolved myocardial infarction, complete left bundle branch block and variants, heart block, tachycardia and structural abnormalities. The patient is referred for a 12-lead ECG and to see the doctor as soon as possible. For acute ischaemic events, this is what protects the Golden Hour.

**MODERATE — further consultation.** Patterns associated with conditions such as old myocardial infarction, ischaemia, bundle branch block, fascicular block, ventricular hypertrophy, atrial abnormalities, conduction abnormalities, arrhythmias, premature beats, repolarisation and QT abnormalities, and structural abnormalities. Not immediately life-threatening, but requiring timely, focused evaluation to prevent a future acute event. The patient is referred for a 12-lead ECG and clinical evaluation.

**LOW — routine care.** Normal sinus rhythm and benign variants such as physiological sinus arrhythmia, rate variation, early repolarisation and incomplete right bundle branch block — usually of no pathological significance. The patient continues through the standard flow and is still advised to consult the doctor.

## How it works

TCC runs during the vitals check. Where there is no dedicated vitals station, the doctor runs the screening directly during consultation.

1. **Take the reading.** The patient holds their fingers and thumbs on the electrodes of the OMRON Complete device and sits still for 30 seconds for clean signal acquisition. No wires, no gel, no separate room.
2. **The AI reads it.** The recording goes to the Tricog cloud, where the TCC algorithm analyses it.
3. **Get the result.** A notification appears on the staff member's phone. Opening it shows the Tricog CardioCheck app with the cardiac risk result — Low, Moderate or High.
4. **Act on it.** Low risk continues to routine consultation. Moderate risk is recommended for a 12-lead ECG and further evaluation. High risk is recommended for a 12-lead ECG and the doctor as soon as possible.

A nurse, technician or clinical staff member can perform the screening. No specialist interpretation is needed on site, and the screening adds roughly 30 to 50 seconds to an existing workflow.

## Why it can be trusted

**It only adds to your triage.** TCC can raise a patient's priority, but it cannot overrule a doctor. It can only improve an existing process.

**It does not rely on patient history.** TCC reads the ECG itself, which means it identifies asymptomatic patients with no reported symptoms and no known cardiac history — the patients most likely to be missed. Both symptomatic and asymptomatic patients can be screened.

**It is a CDSCO-certified medical device**, Class B Software as a Medical Device.

**It supports the doctor; it does not replace one.** The risk level is one data point during the vitals check. Diagnosis stays with the doctor, interpreted alongside the patient's full clinical picture.

## Evidence

The TCC model was developed on a foundational dataset of millions of ECG recordings, drawn from Tricog's dataset of 12-lead ECGs accumulated over 12 years — one of the largest and most diverse cardiac datasets in India. Training addressed class imbalance explicitly, so rare, life-threatening or early-stage conditions are detected with the same precision as common normal rhythms. This also helps mitigate algorithmic bias and supports equitable care across demographics.

Performance was measured against held-out benchmarks the model never saw in training.

| Measure | Performance | 95% CI |
|---|---|---|
| Overall discrimination (AUROC) | 0.909 | 0.905–0.913 |
| Sensitivity, high risk — true high-risk captured | 85.9% | 84.6–87.0% |
| Specificity, high risk — avoids false alarms | 92.2% | 91.6–92.9% |
| Sensitivity, low risk — correctly clears low risk | 90.2% | 89.2–91.2% |

High-risk sensitivity is what protects the patient whose subtle marker would otherwise cost a Golden Hour. Low-risk sensitivity is what makes screening an unselected population operationally safe: it routes stable patients out of critical bottlenecks confidently, so the queue moves faster without alarming people unnecessarily.

Full methodology and risk-class definitions are set out in [the TCC whitepaper](ai/research/tcc-whitepaper.md).

## How TCC differs

| | Tricog CardioCheck | AliveCor KardiaMobile | Apple Watch ECG | Traditional triage |
|---|---|---|---|---|
| Who it is for | Every patient at the clinic | Individuals self-monitoring a known condition | Consumers who own the watch | Only patients a clinician already suspects |
| What it looks for | Dozens of findings across Low / Moderate / High | Four conditions: AFib, bradycardia, tachycardia, normal sinus rhythm | AFib and irregular rhythm | Depends on presenting symptoms |
| What you get back | A risk level and a clear next step | A rhythm classification | A rhythm notification | A clinical judgement call |
| Fits the vitals workflow | Yes, adds ~30–50s | No | No | No |
| Cardiologist on site | Not needed | Not applicable | Not applicable | Required |
| Regulatory | CDSCO-certified Class B SaMD | Consumer | Consumer | — |

A conventional single-lead ECG gives you data. TCC gives you a decision-support output: a clear next step for every result.

## Where it is used

TCC needs no dedicated room, no separate appointment and no ECG interpretation on site. It is designed for hospitals and clinics of any size, and for screening programmes outside fixed facilities.

Within a hospital, the cardiology OPD is the most common screening point, with general and specialty OPDs — orthopaedics, neurology — and the hospital entrance also used. In large multi-specialty hospitals, placing a device at the entrance catches patients who would never pass through a cardiac department at all.

Beyond hospitals: rural primary health centres, single-doctor GP clinics, corporate and preventive health checks, community screening camps, pharma awareness programmes, and insurance pre-policy assessment. See [solutions](solutions.md) and [care settings](ai/industries/index.md).

## Used by

Amcare Hospital, Zirakpur · Healing Hospital, Chandigarh · Paras Hospital, Panchkula · EMC Hospital, Amritsar · RN Pandey Hospital, Uttar Pradesh · Asthma Bhavan, Jaipur · Suman Hospital, Sultanpur

## Intended use and restrictions

Tricog CardioCheck is software intended to analyse single-channel electrocardiograms to aid in determining risk of cardiovascular disease in terms of low, moderate and high risk. The software analyses classifiable waveforms to generate risk outputs, which are intended for informational use only. Output should be considered in consultation with a qualified healthcare professional. It provides risk stratification and is not intended to replace traditional methods of diagnosis or treatment.

The software has not been tested and is not intended for use in people under 18 years of age or in pregnant women. It should not be used to assess patients with pacemakers or implantable cardioverter-defibrillators.

TCC is designed with healthcare data privacy and security in mind and complies with applicable HIPAA, GDPR and CDSCO requirements. Access to patient information is restricted by authorised role.

## Related

- [How it works and what you need](ai/deployment.md) · [The algorithm](ai/technology.md) · [Clinical validation](ai/clinical-validation.md)
- [Risk stratification](ai/risk-stratification.md) · [Regulatory and safety](ai/regulatory-and-safety.md) · [FAQ](ai/faq.md)
- [Care settings](ai/industries/index.md) · [Case studies](ai/case-studies/index.md) · [Glossary](ai/glossary/index.md)
- [Tricog Health](ai/company.md) · [Product portfolio](ai/products.md) · [The Connected Pathway](ai/connected-pathway.md)
