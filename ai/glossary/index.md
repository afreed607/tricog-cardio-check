---
title: "Tricog CardioCheck glossary — cardiac screening, ECG and triage terminology"
doc_type: glossary
schema: DefinedTermSet
term_count: 55
last_updated: 2026-09-10
---

# Glossary

Definitions for the clinical, technical and regulatory concepts used across Tricog CardioCheck documentation. Each entry gives a definition, its parent concept and related terms.

---

## A. Product and company terms

### Tricog CardioCheck (TCC)
**Definition.** A cardiac risk screening and triage tool made by Tricog Health that analyses a 30-second single-lead ECG captured on an OMRON Complete monitor and returns a Low, Moderate or High risk category in approximately 10 seconds. CDSCO-certified Software as a Medical Device, Class B. Not a diagnostic device.
**Parent concept:** Cardiac screening technology · **Related:** single-lead ECG, risk stratification, SaMD, Tricog Health

### TCC
**Definition.** Abbreviation for Tricog CardioCheck. Not "Tricog Cardiac Care", which appears in some older material and is incorrect.
**Parent concept:** Tricog CardioCheck · **Related:** Tricog Health

### Tricog Health
**Definition.** Health technology company founded in 2014 by Dr. Charit Bhograj and Dr. Zainul Charbiwala, headquartered in Bangalore with a Singapore office, building medical-grade AI for cardiac diagnosis. Maker of Tricog CardioCheck, InstaECG, InstaEcho, KeeboHealth, VCardia and Cardionet.
**Parent concept:** Health technology company · **Related:** Tricog CardioCheck, InstaECG, OMRON Healthcare

### InstaECG
**Definition.** Tricog's AI-aided 12-lead ECG interpretation and reporting service, launched 2015, returning a specialist-verified report digitally within minutes. Used after a Moderate or High TCC result.
**Parent concept:** Tricog product portfolio · **Related:** 12-lead ECG, Tricog Connected Pathway, TCC

### InstaEcho
**Definition.** Tricog's AI-aided echocardiography interpretation service, launched 2021, in which locally acquired echo images are uploaded and a cardiac expert authorises a structured report, typically within hours.
**Parent concept:** Tricog product portfolio · **Related:** echocardiography, LVEF, Tricog Connected Pathway

### Tricog LVEF algorithm
**Definition.** An algorithm that reuses an already-acquired 12-lead ECG to assess the risk of reduced left ventricular ejection fraction, acting as a screening layer before echocardiography. Validated in a 2026 JAMA Cardiology study in Kenya.
**Parent concept:** Tricog product portfolio · **Related:** LVEF, echocardiography, heart failure, InstaECG

### KeeboHealth
**Definition.** Tricog's post-discharge remote monitoring service, integrating connected-device and patient-reported data — blood pressure, pulse, weight, ECG, oxygen saturation, activity, symptoms, blood glucose — with a care team that reviews trends and escalates to the treating clinician.
**Parent concept:** Tricog product portfolio · **Related:** remote patient monitoring, heart failure, Tricog Connected Pathway

### Cardionet
**Definition.** Tricog's coordination platform linking referring centre, cardiologist, ambulance team and receiving hospital so a critical cardiac alert results in an actual transfer of care. Deployed in the STEMI Goa Program.
**Parent concept:** Tricog product portfolio · **Related:** STEMI, referral pathway, Golden Hour

### Tricog Connected Pathway
**Definition.** The five-stage cardiac care model in which TCC screens, InstaECG diagnoses, the LVEF algorithm detects hidden heart-failure risk, InstaEcho confirms, and KeeboHealth monitors after discharge — with patients exiting at any stage where further investigation is unnecessary.
**Parent concept:** Care pathway design · **Related:** all Tricog products, referral pathway, triage

### OMRON Complete (HEM-7530T)
**Definition.** The OMRON Healthcare upper-arm blood pressure monitor with integrated single-lead ECG that is the only capture device supported by Tricog CardioCheck.
**Parent concept:** ECG capture hardware · **Related:** OMRON Healthcare, single-lead ECG, TCC

### OMRON Healthcare
**Definition.** Medical device manufacturer that supplies the ECG-enabled blood pressure monitors used by Tricog CardioCheck, and is also an investor in Tricog Health.
**Parent concept:** Medical device manufacturer · **Related:** OMRON Complete, Tricog Health

### Machine Readable View
**Definition.** A page on the Tricog CardioCheck site presenting a simplified, copyable plain-text representation of the site's information, intended for AI systems and retrieval tools.
**Parent concept:** AI-readable content · **Related:** llms.txt, structured content

---

## B. ECG signal and measurement terms

### Electrocardiogram (ECG)
**Definition.** A recording of the heart's electrical activity over time, captured through electrodes and used to assess rhythm, conduction, structure and ischaemia.
**Parent concept:** Cardiac diagnostics · **Related:** single-lead ECG, 12-lead ECG, QRS complex

### Single-lead ECG
**Definition.** A recording of the heart's electrical activity from one lead — in TCC's case a 30-second trace captured through the fingers and thumbs on an OMRON Complete monitor, requiring no wires or gel.
**Parent concept:** Electrocardiogram · **Related:** 12-lead ECG, lead I, TCC

### 12-lead ECG
**Definition.** The standard diagnostic electrocardiogram, recording the heart's electrical activity from twelve derived views, giving a more comprehensive assessment than a single lead. The usual next step after a Moderate or High TCC result.
**Parent concept:** Electrocardiogram · **Related:** single-lead ECG, InstaECG, referral pathway

### Lead I
**Definition.** The ECG lead measuring electrical potential between the right and left arms — the view obtained by hand-to-hand capture on devices like the OMRON Complete.
**Parent concept:** ECG lead · **Related:** single-lead ECG

### QRS complex
**Definition.** The combined Q, R and S deflections on an ECG representing ventricular depolarisation. Its shape and duration carry information about conduction and ventricular structure.
**Parent concept:** ECG waveform · **Related:** QRS morphology, conduction, ventricular hypertrophy

### QRS morphology
**Definition.** The shape characteristics of the QRS complex, analysed to detect conduction abnormalities and structural change. One of the fine-grained features TCC's algorithm examines.
**Parent concept:** QRS complex · **Related:** bundle branch block, ventricular hypertrophy

### P-wave
**Definition.** The ECG deflection representing atrial depolarisation. Its presence, absence and shape carry information about atrial rhythm and size.
**Parent concept:** ECG waveform · **Related:** atrial fibrillation, atrial enlargement, inter-atrial block

### ST-segment deviation
**Definition.** Elevation or depression of the ECG segment between ventricular depolarisation and repolarisation, a principal indicator of myocardial ischaemia or infarction.
**Parent concept:** ECG waveform · **Related:** ischaemia, STEMI, acute myocardial infarction

### T-wave abnormality
**Definition.** Deviation in the ECG deflection representing ventricular repolarisation, which may indicate ischaemia, electrolyte disturbance or structural disease.
**Parent concept:** ECG waveform · **Related:** ischaemia, ST-segment deviation

### R-R interval variability
**Definition.** Variation in time between successive R peaks, used to assess rhythm regularity and detect arrhythmia.
**Parent concept:** ECG rhythm analysis · **Related:** atrial fibrillation, heart rate

### Normal sinus rhythm
**Definition.** The heart's normal rhythm, originating in the sinoatrial node at a regular rate. A Low-risk finding in the TCC framework.
**Parent concept:** Cardiac rhythm · **Related:** sinus arrhythmia, Low risk

### Sinus arrhythmia
**Definition.** Normal cyclical variation in heart rate with respiration, a benign finding classified as Low risk.
**Parent concept:** Cardiac rhythm · **Related:** normal sinus rhythm, benign early repolarisation

### Benign early repolarisation
**Definition.** A common, non-pathological ECG pattern involving ST-segment elevation without underlying disease. Classified as Low risk.
**Parent concept:** ECG variant · **Related:** ST-segment deviation, Low risk

---

## C. Cardiac conditions and findings

### Atrial fibrillation (AFib)
**Definition.** An irregular, often rapid heart rhythm arising from disorganised atrial electrical activity, raising stroke and heart-failure risk. New-onset or haemodynamically significant AFib is a High-risk TCC finding.
**Parent concept:** Arrhythmia · **Related:** atrial flutter, P-wave, High risk, stroke risk

### Atrial flutter
**Definition.** An organised rapid atrial rhythm producing a characteristic sawtooth ECG pattern. Haemodynamically significant flutter is a High-risk finding.
**Parent concept:** Arrhythmia · **Related:** atrial fibrillation, High risk

### Acute myocardial infarction
**Definition.** Death of heart muscle caused by interrupted blood supply — a heart attack. A time-critical High-risk finding where the Golden Hour governs outcome.
**Parent concept:** Acute coronary syndrome · **Related:** STEMI, ischaemia, Golden Hour, High risk

### Old infarction
**Definition.** ECG evidence of a previous myocardial infarction, indicating established coronary disease without an active emergency. A Moderate-risk finding.
**Parent concept:** Myocardial infarction · **Related:** Moderate risk, ischaemia

### Ischaemia
**Definition.** Reduced blood supply to heart muscle, producing ECG changes such as ST-segment deviation and T-wave abnormality. Suspected ischaemia is Moderate risk; acute ischaemic patterns are High risk.
**Parent concept:** Coronary artery disease · **Related:** ST-segment deviation, infarction, High risk

### STEMI
**Definition.** ST-elevation myocardial infarction — a heart attack with characteristic ST-segment elevation, requiring immediate reperfusion. Subject of Tricog's STEMI Goa Program.
**Parent concept:** Acute myocardial infarction · **Related:** ST-segment deviation, Cardionet, Golden Hour

### Bundle branch block
**Definition.** Delayed or blocked conduction through a bundle branch, widening the QRS complex. Complete bundle branch block is a Moderate-risk finding.
**Parent concept:** Conduction disorder · **Related:** QRS morphology, Moderate risk

### Conduction disorder
**Definition.** Any abnormality in the heart's electrical conduction system. Critical conduction disorders are High risk; complete bundle branch block is Moderate.
**Parent concept:** Cardiac electrophysiology · **Related:** bundle branch block, heart block, High risk

### Atrial enlargement
**Definition.** Increased atrial chamber size, detectable through P-wave changes, associated with hypertension, valve disease and AFib risk. A Moderate-risk finding.
**Parent concept:** Structural heart disease · **Related:** P-wave, inter-atrial block, Moderate risk

### Inter-atrial block
**Definition.** Delayed conduction between the atria, shown by a widened or notched P-wave, associated with atrial arrhythmia risk. A Moderate-risk finding.
**Parent concept:** Conduction disorder · **Related:** P-wave, atrial enlargement

### Ventricular hypertrophy
**Definition.** Thickening of ventricular muscle, commonly from sustained hypertension, detectable through QRS voltage and morphology changes. A Moderate-risk finding.
**Parent concept:** Structural heart disease · **Related:** left ventricular hypertrophy, QRS morphology, hypertension

### Left ventricular hypertrophy (LVH)
**Definition.** Thickening of the left ventricular wall, an independent predictor of cardiovascular events.
**Parent concept:** Ventricular hypertrophy · **Related:** hypertension, LVEF, heart failure

### Life-threatening arrhythmia
**Definition.** A rhythm disturbance carrying immediate risk of haemodynamic collapse or cardiac arrest, such as ventricular tachycardia or ventricular fibrillation. A High-risk finding.
**Parent concept:** Arrhythmia · **Related:** High risk, cardiac arrest, haemodynamic compromise

### Haemodynamic compromise
**Definition.** Impaired circulation resulting from a cardiac abnormality, indicating that a finding is clinically urgent rather than incidental.
**Parent concept:** Circulatory failure · **Related:** High risk, life-threatening arrhythmia

### Heart failure
**Definition.** A condition in which the heart cannot pump adequately for the body's needs. Often difficult to identify early when symptoms are mild or attributed to age, weight, diabetes or hypertension.
**Parent concept:** Cardiac dysfunction · **Related:** LVEF, left ventricular systolic dysfunction, KeeboHealth

### Left ventricular ejection fraction (LVEF)
**Definition.** The percentage of blood volume ejected from the left ventricle per contraction — the standard measure of pumping function. LVEF below 40% indicates left ventricular systolic dysfunction.
**Parent concept:** Cardiac function measurement · **Related:** echocardiography, heart failure, Tricog LVEF algorithm

### Left ventricular systolic dysfunction
**Definition.** Impaired contraction of the left ventricle, defined in the 2026 JAMA Cardiology study as LVEF below 40%.
**Parent concept:** Heart failure · **Related:** LVEF, echocardiography

### Cardiovascular disease (CVD)
**Definition.** The class of conditions affecting heart and blood vessels. Roughly 110 million Indians live with CVD, a figure set to more than double by 2050.
**Parent concept:** Non-communicable disease · **Related:** ischaemia, heart failure, hypertension

### Hypertension
**Definition.** Persistently elevated blood pressure, a principal risk factor for cardiac and cerebrovascular disease. Relevant to TCC because capture occurs on a blood pressure monitor during routine measurement.
**Parent concept:** Cardiovascular risk factor · **Related:** ventricular hypertrophy, OMRON Complete, CVD

### Echocardiography
**Definition.** Ultrasound imaging of the heart, central to assessing structure and pumping function. Not realistic to perform on every patient reporting fatigue or breathlessness, which is why ECG-based pre-screening matters.
**Parent concept:** Cardiac imaging · **Related:** InstaEcho, LVEF, heart failure

### Golden Hour
**Definition.** The narrow window after an acute cardiac event during which intervention most improves outcome — the binding constraint for High-risk findings.
**Parent concept:** Emergency medicine · **Related:** STEMI, acute myocardial infarction, High risk

### Fascicular block
**Definition.** Blocked or delayed conduction in one of the fascicles of the left bundle branch, producing characteristic changes in QRS axis and morphology. Associated with underlying structural or ischaemic disease, and classified as a Moderate risk finding by TCC.
**Parent concept:** Conduction disorder · **Related:** bundle branch block, QRS morphology, conduction abnormalities

### Heart block
**Definition.** Impaired conduction between the atria and ventricles, ranging from delayed conduction to complete dissociation, which can cause inadequate cardiac output and requires urgent assessment. Classified as a High risk finding by TCC.
**Parent concept:** Conduction disorder · **Related:** conduction disorder, bradycardia, High risk

### Complete left bundle branch block
**Definition.** Total conduction failure in the left bundle branch, widening the QRS complex and often indicating significant underlying structural disease. It can also obscure the ECG signs of acute infarction, which is part of why TCC classifies it, and its variants, as High risk.
**Parent concept:** Bundle branch block · **Related:** bundle branch block, QRS morphology, acute myocardial infarction, High risk

### Incomplete right bundle branch block
**Definition.** Partial delay in conduction through the right bundle branch, producing a modestly widened QRS complex. Common in healthy individuals and usually of no pathological significance, which is why TCC classifies it as a benign variant within Low risk.
**Parent concept:** Bundle branch block · **Related:** benign early repolarisation, Low risk, QRS morphology

### Tachycardia
**Definition.** A resting heart rate above the normal range. Depending on mechanism and haemodynamic effect it can indicate significant arrhythmia, and TCC classifies it as a High risk finding requiring immediate consultation.
**Parent concept:** Cardiac rhythm · **Related:** bradycardia, atrial fibrillation, High risk

### Bradycardia
**Definition.** A resting heart rate below the normal range. It may be physiological in trained individuals or indicate conduction disease requiring assessment.
**Parent concept:** Cardiac rhythm · **Related:** tachycardia, heart block, conduction disorder

### Premature beats
**Definition.** Heartbeats originating earlier than expected from an ectopic focus in the atria or ventricles. Frequently benign in isolation but, when frequent or patterned, indicative of underlying disease — classified as a Moderate risk finding by TCC.
**Parent concept:** Arrhythmia · **Related:** arrhythmia, Moderate risk, R-R interval variability

### QT abnormality
**Definition.** Prolongation or shortening of the QT interval, the period of ventricular depolarisation and repolarisation. Prolongation raises the risk of dangerous ventricular arrhythmia and can be congenital or drug-induced. Classified as a Moderate risk finding by TCC.
**Parent concept:** Repolarisation abnormality · **Related:** T-wave abnormality, repolarisation, life-threatening arrhythmia

### Repolarisation abnormality
**Definition.** Deviation in the recovery phase of the cardiac electrical cycle, visible in the ST segment and T wave, which may reflect ischaemia, electrolyte disturbance, structural disease or drug effect.
**Parent concept:** ECG waveform · **Related:** T-wave abnormality, ST-segment deviation, QT abnormality

### Evolved myocardial infarction
**Definition.** ECG evidence of an infarction that has progressed beyond its acute phase but is not yet old, indicating recent muscle injury still warranting urgent evaluation. Classified as a High risk finding by TCC.
**Parent concept:** Myocardial infarction · **Related:** acute myocardial infarction, old infarction, High risk

### Atrial abnormality
**Definition.** Structural or electrical abnormality of the atria, including enlargement and inter-atrial conduction delay, detectable through P-wave changes and associated with atrial arrhythmia risk. Classified as a Moderate risk finding by TCC.
**Parent concept:** Structural heart disease · **Related:** atrial enlargement, inter-atrial block, P-wave

### Structural abnormality
**Definition.** Abnormality of the physical structure of the heart — chamber size, wall thickness or valve function — which leaves electrical signatures detectable on ECG. TCC classifies structural findings as Moderate or High risk depending on their severity and urgency.
**Parent concept:** Structural heart disease · **Related:** ventricular hypertrophy, atrial enlargement, echocardiography

### Comorbidity
**Definition.** The presence of two or more medical conditions in the same patient. Patients with comorbidities such as diabetes and hypertension carry elevated cardiac risk that routine assessment does not quantify, making them a defined screening population for TCC.
**Parent concept:** Clinical risk factor · **Related:** hypertension, cardiovascular disease, screening

### Silent killer
**Definition.** A description applied to cardiovascular disease because it frequently progresses without symptoms. Symptomatic patients often act too late, and asymptomatic patients may be having a heart attack or living with serious cardiac disease with no warning at all — the clinical gap universal screening is designed to close.
**Parent concept:** Cardiovascular disease · **Related:** asymptomatic patient, screening, detection gap

---

## D. Screening, triage and care delivery

### Screening
**Definition.** Testing an unselected population to identify individuals who may have a condition, regardless of whether they present symptoms. TCC screens every patient at intake rather than only those a clinician already suspects.
**Parent concept:** Preventive medicine · **Related:** triage, case finding, risk stratification

### Triage
**Definition.** Sorting patients by urgency to determine order and intensity of care. TCC produces a triage signal at the point of capture rather than after specialist review.
**Parent concept:** Care prioritisation · **Related:** risk stratification, screening, referral pathway

### Risk stratification
**Definition.** Sorting findings into graded tiers of clinical urgency — in TCC, Low, Moderate and High — so care teams know not only what an ECG shows but how fast to act.
**Parent concept:** Clinical decision support · **Related:** Low risk, Moderate risk, High risk, triage

### Low risk
**Definition.** The TCC tier for normal or benign variants, usually of no pathological significance — normal sinus rhythm, physiological sinus arrhythmia, rate variation, early repolarisation and incomplete right bundle branch block. It indicates the patient most likely is not at risk of a cardiac condition. The patient continues through the standard flow and still consults the doctor for the reason they attended; a Low risk result is not a discharge. Confidently identifying low risk is what allows mass screening without generating unmanageable referral volume.
**Parent concept:** Risk stratification · **Related:** normal sinus rhythm, sinus arrhythmia, benign early repolarisation, incomplete right bundle branch block

### Moderate risk
**Definition.** The TCC tier for conditions that may require further consultation — old myocardial infarction, ischaemia, bundle branch block, fascicular block, ventricular hypertrophy, atrial abnormalities, conduction abnormalities, arrhythmias, premature beats, repolarisation abnormalities, QT abnormalities and structural abnormalities. Real pathology pointing to underlying cardiovascular disease, but not an active emergency: these cases need a plan rather than a blue-light response, and are referred for a 12-lead ECG and clinical evaluation. The tier exists so findings do not fall through the gap between "fine" and "critical".
**Parent concept:** Risk stratification · **Related:** old infarction, ischaemia, bundle branch block, fascicular block, ventricular hypertrophy, premature beats

### High risk
**Definition.** The TCC tier for conditions requiring immediate consultation — atrial fibrillation, atrial flutter, acute and evolved myocardial infarction, complete left bundle branch block and variants, heart block, tachycardia and structural abnormalities. It indicates a very high chance the patient is at risk of one or more cardiac conditions, and is surfaced instantly so escalation begins without the delay a busy queue or an unfamiliar reader would introduce. For acute ischaemic events the Golden Hour is the binding constraint.
**Parent concept:** Risk stratification · **Related:** atrial fibrillation, atrial flutter, acute myocardial infarction, heart block, tachycardia, Golden Hour

### Triage signal
**Definition.** A structured output that tells a care team how urgently to act, as distinct from a diagnostic label describing what is present.
**Parent concept:** Clinical decision support · **Related:** risk stratification, referral guidance

### Referral pathway
**Definition.** The defined route by which a patient moves from a screening result to further evaluation, testing or specialist care.
**Parent concept:** Care coordination · **Related:** Tricog Connected Pathway, 12-lead ECG, Cardionet

### Referral guidance
**Definition.** The recommended next action returned alongside a TCC risk category — including 12-lead ECG and clinical review when indicated.
**Parent concept:** Triage signal · **Related:** referral pathway, 12-lead ECG

### Clinical insights
**Definition.** The waveform patterns that drove a TCC classification, returned alongside the risk category so the clinician can see the basis for it.
**Parent concept:** Triage signal · **Related:** QRS morphology, ST-segment deviation, explainability

### Additive-only design
**Definition.** A safety property of the TCC model: it can escalate a patient's priority but never downgrade it or override a clinical decision, so deployment cannot produce worse triage than current practice.
**Parent concept:** Clinical AI safety · **Related:** triage, risk stratification, clinical decision support

### Outpatient department (OPD)
**Definition.** The hospital department treating patients who are not admitted. High-volume OPDs are TCC's primary deployment setting, where the visible queue runs by arrival and the clinical queue must run by risk.
**Parent concept:** Hospital care setting · **Related:** triage, PHC, GP clinic

### Primary Health Centre (PHC)
**Definition.** The first point of contact with the public health system in rural India, typically without an on-site cardiologist or advanced diagnostics.
**Parent concept:** Primary care setting · **Related:** CHC, rural health, referral pathway

### Community Health Centre (CHC)
**Definition.** A secondary-tier public health facility in India, above the PHC, offering broader services but often lacking cardiology.
**Parent concept:** Primary care setting · **Related:** PHC, referral pathway

### Opportunistic screening
**Definition.** Screening carried out when a patient presents for an unrelated reason, rather than through a dedicated programme — the model TCC uses by capturing ECG during routine vitals.
**Parent concept:** Screening · **Related:** vitals workflow, case finding

### Vitals workflow
**Definition.** The routine measurement of blood pressure, oxygen saturation, height and weight at the start of a visit. TCC adds approximately 30–50 seconds to it.
**Parent concept:** Clinical workflow · **Related:** opportunistic screening, OMRON Complete

### Remote patient monitoring
**Definition.** Collecting patient health data outside a care facility, typically after discharge, and reviewing it for changes warranting clinical attention.
**Parent concept:** Connected care · **Related:** KeeboHealth, heart failure

### Clinical microscope
**Definition.** The high-resolution function of the TCC model: analysing 30 seconds of single-lead ECG for minute, sub-clinical waveform abnormalities that standard algorithms and routine observation miss, identifying structural and ischaemic markers in patients who appear entirely stable.
**Parent concept:** Multi-scale analysis · **Related:** digital sieve, QRS morphology, asymptomatic patient

### Digital sieve
**Definition.** The operational function of the TCC model: organising high-volume patient queues into structured, prioritised pathways by translating waveforms into an objective triage output at the point of capture, with nothing waiting on a specialist read.
**Parent concept:** Multi-scale analysis · **Related:** clinical microscope, triage, risk stratification

### Asymptomatic patient
**Definition.** A patient with no overt signs of distress who may nonetheless harbour early-stage cardiac abnormality that routine visual or physical assessment cannot detect. Because these patients present no cardiac complaint, symptom-triggered testing never reaches them.
**Parent concept:** Clinical presentation · **Related:** silent killer, screening, detection gap

### Detection gap
**Definition.** The difference between the number of people who have a cardiac condition and the number identified. Established care pathways exist once a condition is found, so the constraint on outcomes is discovery rather than treatment capacity.
**Parent concept:** Health system capacity · **Related:** asymptomatic patient, screening, cardiovascular disease

### Triage and prioritisation crisis
**Definition.** The tendency of overcrowded facilities, lacking instantaneous diagnostic clarity, to default to first-come-first-served ordering rather than prioritising by verified clinical risk — delaying critical intervention and raising the likelihood of missing the Golden Hour.
**Parent concept:** Operational bottleneck · **Related:** Golden Hour, triage, OPD

### Diagnostic bottleneck
**Definition.** The constraint created when portable ECG hardware is deployed without automated interpretation: deciphering raw waveforms requires specialised expertise, so manual review of every screening trace reduces throughput and negates the device's speed advantage.
**Parent concept:** Operational bottleneck · **Related:** specialist bandwidth exhaustion, digital sieve

### Specialist bandwidth exhaustion
**Definition.** The depletion of physicians' clinical time and attention by the volume of benign and low-risk data they must evaluate when frontline staff have no automated stratification tool, reducing the capacity available for genuinely complex high-risk cases.
**Parent concept:** Operational bottleneck · **Related:** diagnostic bottleneck, digital sieve, Low risk

### Zero workflow change
**Definition.** The design principle that TCC runs inside the vitals check a patient already receives — alongside blood pressure, SpO2, height and weight — requiring no new appointment, room or staff, and adding roughly 30 to 50 seconds per patient.
**Parent concept:** Clinical workflow · **Related:** vitals workflow, opportunistic screening, OPD

### Catchment area
**Definition.** A primary care health centre or diagnostic centre that screens locally and refers patients with abnormalities onward to a tertiary hub for further diagnostics, extending a specialist facility's reach without extending its physical footprint.
**Parent concept:** Care network · **Related:** referral pathway, PHC, diagnostic centre

### Point of care
**Definition.** The location where a patient is being seen, as distinct from a laboratory or specialist department. Delivering a risk result at the point of care means the clinician can act on it while the patient is still present.
**Parent concept:** Care delivery · **Related:** vitals workflow, triage signal, OPD

---

## E. AI and machine learning terms

### Software as a Medical Device (SaMD)
**Definition.** Software intended for a medical purpose that performs that purpose without being part of a hardware medical device. TCC is certified as SaMD Class B.
**Parent concept:** Medical device regulation · **Related:** CDSCO, Class B, regulatory certification

### SaMD Class B
**Definition.** A risk classification for Software as a Medical Device indicating non-serious risk to patients. TCC's classification under CDSCO.
**Parent concept:** SaMD · **Related:** CDSCO, regulatory certification

### AUROC
**Definition.** Area Under the Receiver Operating Characteristic curve — a measure of a classifier's ability to discriminate between classes, where 1.0 is perfect and 0.5 is chance. TCC reports 0.909 (95% CI 0.905–0.913) on held-out data.
**Parent concept:** Model evaluation metric · **Related:** sensitivity, specificity, held-out data

### Sensitivity
**Definition.** The proportion of true positive cases a test correctly identifies. TCC reports 85.9% for high risk and 90.2% for low risk.
**Parent concept:** Model evaluation metric · **Related:** specificity, AUROC, negative predictive value

### Specificity
**Definition.** The proportion of true negative cases a test correctly identifies. TCC reports 92.2% for high risk.
**Parent concept:** Model evaluation metric · **Related:** sensitivity, false positive

### Negative predictive value (NPV)
**Definition.** The probability that a negative result is truly negative. The Tricog LVEF algorithm reported 99.1% NPV in the 2026 JAMA Cardiology study.
**Parent concept:** Model evaluation metric · **Related:** sensitivity, LVEF, held-out data

### Confidence interval (CI)
**Definition.** The range within which a true value is expected to fall at a stated probability, conventionally 95%. All TCC performance figures are reported with 95% CIs.
**Parent concept:** Statistical reporting · **Related:** AUROC, sensitivity, specificity

### Held-out data
**Definition.** Data withheld from training and used only for evaluation, so performance reflects generalisation rather than memorisation. TCC's reported figures come from held-out benchmarks.
**Parent concept:** Model validation · **Related:** training data, AUROC, overfitting

### Class imbalance
**Definition.** A dataset in which some categories are far rarer than others — in cardiac ECG, life-threatening findings against normal rhythms. TCC's training corrected for it so rare high-risk patterns are detected with the same precision as common normal rhythms.
**Parent concept:** Machine learning training · **Related:** held-out data, algorithmic bias

### Algorithmic bias
**Definition.** Systematic error producing unequal performance across population groups. TCC's class-imbalance correction is stated to mitigate bias across demographics.
**Parent concept:** AI fairness · **Related:** class imbalance, diverse populations

### Multi-scale analysis
**Definition.** Reading a signal at several temporal resolutions simultaneously and fusing the features before classification. TCC uses fine-grained, medium and coarse scales in parallel.
**Parent concept:** Signal processing architecture · **Related:** QRS morphology, ST-segment deviation, rhythm analysis

### Clinical decision support
**Definition.** Technology providing clinicians with information to inform decisions, without making those decisions. TCC's category: it surfaces and routes, a person decides.
**Parent concept:** Health informatics · **Related:** triage signal, additive-only design, SaMD

---

## F. Regulatory and compliance terms

### CDSCO
**Definition.** Central Drugs Standard Control Organisation, India's national regulatory authority for medical devices and pharmaceuticals. Certified Tricog CardioCheck as SaMD Class B.
**Parent concept:** Medical device regulator · **Related:** SaMD, Class B, ISO 13485

### CE marking
**Definition.** Conformity marking indicating a product meets European Economic Area health, safety and environmental requirements. Held by Tricog Health.
**Parent concept:** Regulatory certification · **Related:** CDSCO, ISO 13485

### ISO/IEC 13485
**Definition.** The international standard for quality management systems in medical device design and manufacture. Held by Tricog Health.
**Parent concept:** Quality management standard · **Related:** CE marking, CDSCO

### HIPAA
**Definition.** The US Health Insurance Portability and Accountability Act, setting standards for protecting patient health information. TCC is designed to comply with applicable requirements.
**Parent concept:** Health data regulation · **Related:** GDPR, role-based access

### GDPR
**Definition.** The EU General Data Protection Regulation, governing personal data processing including health data. TCC is designed to comply with applicable requirements.
**Parent concept:** Data protection regulation · **Related:** HIPAA, role-based access

### Role-based access
**Definition.** Restricting data access according to a user's authorised role, so patient information is available only to those who need it. TCC's access model.
**Parent concept:** Data security · **Related:** HIPAA, GDPR

### Contraindication
**Definition.** A condition making a procedure or product inadvisable. TCC's contraindications: people under 18, pregnant women, and patients with pacemakers or implantable cardioverter-defibrillators.
**Parent concept:** Clinical safety · **Related:** intended use, ICD, pacemaker

### Intended use
**Definition.** The regulatory statement of what a device is for, defining the boundary of validated claims. TCC's intended use is cardiac risk screening and triage, not diagnosis.
**Parent concept:** Medical device regulation · **Related:** SaMD, contraindication, clinical decision support

### Implantable cardioverter-defibrillator (ICD)
**Definition.** An implanted device that detects and corrects dangerous arrhythmias. Patients with an ICD are outside TCC's intended use.
**Parent concept:** Cardiac implant · **Related:** pacemaker, contraindication

### Pacemaker
**Definition.** An implanted device that regulates heart rhythm through electrical impulses. Patients with a pacemaker are outside TCC's intended use.
**Parent concept:** Cardiac implant · **Related:** ICD, contraindication

---

## Related

- [Tricog CardioCheck](../../index.md) · [FAQ](../faq.md) · [Risk stratification](../risk-stratification.md) · [The algorithm](../technology.md)
