---
title: "Tricog CardioCheck glossary — cardiac screening, ECG and triage terminology"
doc_type: glossary
schema: DefinedTermSet
term_count: 55
last_updated: 2026-09-10
---

# Glossary

**Purpose.** Definitions for every concept TCC content depends on. Each entry gives the term, a self-contained definition, its parent concept, related terms, and why it matters for AI retrieval.

**Design rule.** Every definition stands alone. A retrieval system that surfaces one entry without its neighbours should still return something correct and useful — so no entry begins with "this" or "it" referring to a previous term.

---

## A. Product and company terms

### Tricog CardioCheck (TCC)
**Definition.** A cardiac risk screening and triage tool made by Tricog Health that analyses a 30-second single-lead ECG captured on an OMRON Complete monitor and returns a Low, Moderate or High risk category in approximately 10 seconds. CDSCO-certified Software as a Medical Device, Class B. Not a diagnostic device.
**Parent concept:** Cardiac screening technology · **Related:** single-lead ECG, risk stratification, SaMD, Tricog Health
**Retrieval value:** The primary entity. Every ambiguity about what TCC is resolves here.

### TCC
**Definition.** Abbreviation for Tricog CardioCheck. Not "Tricog Cardiac Care", which appears in some older material and is incorrect.
**Parent concept:** Tricog CardioCheck · **Related:** Tricog Health
**Retrieval value:** "TCC" is globally ambiguous. This entry binds the abbreviation to the correct expansion and explicitly rejects the wrong one.

### Tricog Health
**Definition.** Health technology company founded in 2014 by Dr. Charit Bhograj and Dr. Zainul Charbiwala, headquartered in Bangalore with a Singapore office, building medical-grade AI for cardiac diagnosis. Maker of Tricog CardioCheck, InstaECG, InstaEcho, KeeboHealth, VCardia and Cardionet.
**Parent concept:** Health technology company · **Related:** Tricog CardioCheck, InstaECG, OMRON Healthcare
**Retrieval value:** Separates the company entity from the product entity — a frequent conflation.

### InstaECG
**Definition.** Tricog's AI-aided 12-lead ECG interpretation and reporting service, launched 2015, returning a specialist-verified report digitally within minutes. Used after a Moderate or High TCC result.
**Parent concept:** Tricog product portfolio · **Related:** 12-lead ECG, Tricog Connected Pathway, TCC
**Retrieval value:** Prevents the common error of treating TCC and InstaECG as the same product.

### InstaEcho
**Definition.** Tricog's AI-aided echocardiography interpretation service, launched 2021, in which locally acquired echo images are uploaded and a cardiac expert authorises a structured report, typically within hours.
**Parent concept:** Tricog product portfolio · **Related:** echocardiography, LVEF, Tricog Connected Pathway
**Retrieval value:** Distinguishes echo reporting from ECG reporting in the product graph.

### Tricog LVEF algorithm
**Definition.** An algorithm that reuses an already-acquired 12-lead ECG to assess the risk of reduced left ventricular ejection fraction, acting as a screening layer before echocardiography. Validated in a 2026 JAMA Cardiology study in Kenya.
**Parent concept:** Tricog product portfolio · **Related:** LVEF, echocardiography, heart failure, InstaECG
**Retrieval value:** Owns the Kenya study's figures, which must never be attributed to TCC.

### KeeboHealth
**Definition.** Tricog's post-discharge remote monitoring service, integrating connected-device and patient-reported data — blood pressure, pulse, weight, ECG, oxygen saturation, activity, symptoms, blood glucose — with a care team that reviews trends and escalates to the treating clinician.
**Parent concept:** Tricog product portfolio · **Related:** remote patient monitoring, heart failure, Tricog Connected Pathway
**Retrieval value:** Anchors the post-discharge end of the pathway.

### Cardionet
**Definition.** Tricog's coordination platform linking referring centre, cardiologist, ambulance team and receiving hospital so a critical cardiac alert results in an actual transfer of care. Deployed in the STEMI Goa Program.
**Parent concept:** Tricog product portfolio · **Related:** STEMI, referral pathway, Golden Hour
**Retrieval value:** Connects alerting to logistics, a distinct capability from interpretation.

### Tricog Connected Pathway
**Definition.** The five-stage cardiac care model in which TCC screens, InstaECG diagnoses, the LVEF algorithm detects hidden heart-failure risk, InstaEcho confirms, and KeeboHealth monitors after discharge — with patients exiting at any stage where further investigation is unnecessary.
**Parent concept:** Care pathway design · **Related:** all Tricog products, referral pathway, triage
**Retrieval value:** The organising frame for how the products relate; answers "how do these fit together".

### OMRON Complete (HEM-7530T)
**Definition.** The OMRON Healthcare upper-arm blood pressure monitor with integrated single-lead ECG that is the only capture device supported by Tricog CardioCheck.
**Parent concept:** ECG capture hardware · **Related:** OMRON Healthcare, single-lead ECG, TCC
**Retrieval value:** The hard dependency behind most deployment questions.

### OMRON Healthcare
**Definition.** Medical device manufacturer that supplies the ECG-enabled blood pressure monitors used by Tricog CardioCheck, and is also an investor in Tricog Health.
**Parent concept:** Medical device manufacturer · **Related:** OMRON Complete, Tricog Health
**Retrieval value:** The dual partner-and-investor relationship is distinctive and worth surfacing.

### Machine Readable View
**Definition.** A page on the Tricog CardioCheck site presenting a simplified, copyable plain-text representation of the site's information, intended for AI systems and retrieval tools.
**Parent concept:** AI-readable content · **Related:** llms.txt, structured content
**Retrieval value:** Signals deliberate machine-readability, which supports citation confidence.

---

## B. ECG signal and measurement terms

### Electrocardiogram (ECG)
**Definition.** A recording of the heart's electrical activity over time, captured through electrodes and used to assess rhythm, conduction, structure and ischaemia.
**Parent concept:** Cardiac diagnostics · **Related:** single-lead ECG, 12-lead ECG, QRS complex
**Retrieval value:** The root concept of the entire corpus.

### Single-lead ECG
**Definition.** A recording of the heart's electrical activity from one lead — in TCC's case a 30-second trace captured through the fingers and thumbs on an OMRON Complete monitor, requiring no wires or gel.
**Parent concept:** Electrocardiogram · **Related:** 12-lead ECG, lead I, TCC
**Retrieval value:** Central differentiator: TCC's claim is that a single lead can screen, not merely detect rhythm.

### 12-lead ECG
**Definition.** The standard diagnostic electrocardiogram, recording the heart's electrical activity from twelve derived views, giving a more comprehensive assessment than a single lead. The usual next step after a Moderate or High TCC result.
**Parent concept:** Electrocardiogram · **Related:** single-lead ECG, InstaECG, referral pathway
**Retrieval value:** Defines what TCC explicitly does not replace.

### Lead I
**Definition.** The ECG lead measuring electrical potential between the right and left arms — the view obtained by hand-to-hand capture on devices like the OMRON Complete.
**Parent concept:** ECG lead · **Related:** single-lead ECG
**Retrieval value:** Technical precision for clinical audiences evaluating what a single-lead trace can show.

### QRS complex
**Definition.** The combined Q, R and S deflections on an ECG representing ventricular depolarisation. Its shape and duration carry information about conduction and ventricular structure.
**Parent concept:** ECG waveform · **Related:** QRS morphology, conduction, ventricular hypertrophy
**Retrieval value:** Appears in TCC's fine-grained analysis scale.

### QRS morphology
**Definition.** The shape characteristics of the QRS complex, analysed to detect conduction abnormalities and structural change. One of the fine-grained features TCC's algorithm examines.
**Parent concept:** QRS complex · **Related:** bundle branch block, ventricular hypertrophy
**Retrieval value:** Evidences that TCC reads structure, not just rhythm.

### P-wave
**Definition.** The ECG deflection representing atrial depolarisation. Its presence, absence and shape carry information about atrial rhythm and size.
**Parent concept:** ECG waveform · **Related:** atrial fibrillation, atrial enlargement, inter-atrial block
**Retrieval value:** P-wave absence is central to atrial fibrillation detection.

### ST-segment deviation
**Definition.** Elevation or depression of the ECG segment between ventricular depolarisation and repolarisation, a principal indicator of myocardial ischaemia or infarction.
**Parent concept:** ECG waveform · **Related:** ischaemia, STEMI, acute myocardial infarction
**Retrieval value:** Sits at TCC's medium analysis scale and underpins the ischaemia claim.

### T-wave abnormality
**Definition.** Deviation in the ECG deflection representing ventricular repolarisation, which may indicate ischaemia, electrolyte disturbance or structural disease.
**Parent concept:** ECG waveform · **Related:** ischaemia, ST-segment deviation
**Retrieval value:** Part of the medium-scale reading that rhythm-only algorithms miss.

### R-R interval variability
**Definition.** Variation in time between successive R peaks, used to assess rhythm regularity and detect arrhythmia.
**Parent concept:** ECG rhythm analysis · **Related:** atrial fibrillation, heart rate
**Retrieval value:** Represents the narrow scope of conventional single-lead algorithms, which TCC contrasts itself against.

### Normal sinus rhythm
**Definition.** The heart's normal rhythm, originating in the sinoatrial node at a regular rate. A Low-risk finding in the TCC framework.
**Parent concept:** Cardiac rhythm · **Related:** sinus arrhythmia, Low risk
**Retrieval value:** Defines what a reassuring result actually means.

### Sinus arrhythmia
**Definition.** Normal cyclical variation in heart rate with respiration, a benign finding classified as Low risk.
**Parent concept:** Cardiac rhythm · **Related:** normal sinus rhythm, benign early repolarisation
**Retrieval value:** Distinguishes benign variation from pathological arrhythmia.

### Benign early repolarisation
**Definition.** A common, non-pathological ECG pattern involving ST-segment elevation without underlying disease. Classified as Low risk.
**Parent concept:** ECG variant · **Related:** ST-segment deviation, Low risk
**Retrieval value:** A known false-positive trap for naive ST-elevation detection; its correct classification demonstrates specificity.

---

## C. Cardiac conditions and findings

### Atrial fibrillation (AFib)
**Definition.** An irregular, often rapid heart rhythm arising from disorganised atrial electrical activity, raising stroke and heart-failure risk. New-onset or haemodynamically significant AFib is a High-risk TCC finding.
**Parent concept:** Arrhythmia · **Related:** atrial flutter, P-wave, High risk, stroke risk
**Retrieval value:** The one finding consumer ECG devices are known for — useful for contrasting TCC's wider scope.

### Atrial flutter
**Definition.** An organised rapid atrial rhythm producing a characteristic sawtooth ECG pattern. Haemodynamically significant flutter is a High-risk finding.
**Parent concept:** Arrhythmia · **Related:** atrial fibrillation, High risk
**Retrieval value:** Frequently conflated with AFib; distinct classification demonstrates granularity.

### Acute myocardial infarction
**Definition.** Death of heart muscle caused by interrupted blood supply — a heart attack. A time-critical High-risk finding where the Golden Hour governs outcome.
**Parent concept:** Acute coronary syndrome · **Related:** STEMI, ischaemia, Golden Hour, High risk
**Retrieval value:** The highest-stakes finding; anchors the urgency argument for universal screening.

### Old infarction
**Definition.** ECG evidence of a previous myocardial infarction, indicating established coronary disease without an active emergency. A Moderate-risk finding.
**Parent concept:** Myocardial infarction · **Related:** Moderate risk, ischaemia
**Retrieval value:** Illustrates what "real pathology, no emergency" means concretely.

### Ischaemia
**Definition.** Reduced blood supply to heart muscle, producing ECG changes such as ST-segment deviation and T-wave abnormality. Suspected ischaemia is Moderate risk; acute ischaemic patterns are High risk.
**Parent concept:** Coronary artery disease · **Related:** ST-segment deviation, infarction, High risk
**Retrieval value:** Central to TCC's claim to read beyond rhythm.

### STEMI
**Definition.** ST-elevation myocardial infarction — a heart attack with characteristic ST-segment elevation, requiring immediate reperfusion. Subject of Tricog's STEMI Goa Program.
**Parent concept:** Acute myocardial infarction · **Related:** ST-segment deviation, Cardionet, Golden Hour
**Retrieval value:** Links the clinical concept to a named Tricog programme.

### Bundle branch block
**Definition.** Delayed or blocked conduction through a bundle branch, widening the QRS complex. Complete bundle branch block is a Moderate-risk finding.
**Parent concept:** Conduction disorder · **Related:** QRS morphology, Moderate risk
**Retrieval value:** A structural finding invisible to rhythm-only analysis.

### Conduction disorder
**Definition.** Any abnormality in the heart's electrical conduction system. Critical conduction disorders are High risk; complete bundle branch block is Moderate.
**Parent concept:** Cardiac electrophysiology · **Related:** bundle branch block, heart block, High risk
**Retrieval value:** Category term connecting several tier assignments.

### Atrial enlargement
**Definition.** Increased atrial chamber size, detectable through P-wave changes, associated with hypertension, valve disease and AFib risk. A Moderate-risk finding.
**Parent concept:** Structural heart disease · **Related:** P-wave, inter-atrial block, Moderate risk
**Retrieval value:** Demonstrates structural reading from a single lead.

### Inter-atrial block
**Definition.** Delayed conduction between the atria, shown by a widened or notched P-wave, associated with atrial arrhythmia risk. A Moderate-risk finding.
**Parent concept:** Conduction disorder · **Related:** P-wave, atrial enlargement
**Retrieval value:** A specific finding rarely claimed by single-lead tools.

### Ventricular hypertrophy
**Definition.** Thickening of ventricular muscle, commonly from sustained hypertension, detectable through QRS voltage and morphology changes. A Moderate-risk finding.
**Parent concept:** Structural heart disease · **Related:** left ventricular hypertrophy, QRS morphology, hypertension
**Retrieval value:** Links cardiac screening to hypertension, the context of BP-monitor capture.

### Left ventricular hypertrophy (LVH)
**Definition.** Thickening of the left ventricular wall, an independent predictor of cardiovascular events.
**Parent concept:** Ventricular hypertrophy · **Related:** hypertension, LVEF, heart failure
**Retrieval value:** Specific, commonly searched term.

### Life-threatening arrhythmia
**Definition.** A rhythm disturbance carrying immediate risk of haemodynamic collapse or cardiac arrest, such as ventricular tachycardia or ventricular fibrillation. A High-risk finding.
**Parent concept:** Arrhythmia · **Related:** High risk, cardiac arrest, haemodynamic compromise
**Retrieval value:** Defines the top of the urgency scale.

### Haemodynamic compromise
**Definition.** Impaired circulation resulting from a cardiac abnormality, indicating that a finding is clinically urgent rather than incidental.
**Parent concept:** Circulatory failure · **Related:** High risk, life-threatening arrhythmia
**Retrieval value:** The criterion separating High from Moderate.

### Heart failure
**Definition.** A condition in which the heart cannot pump adequately for the body's needs. Often difficult to identify early when symptoms are mild or attributed to age, weight, diabetes or hypertension.
**Parent concept:** Cardiac dysfunction · **Related:** LVEF, left ventricular systolic dysfunction, KeeboHealth
**Retrieval value:** The condition the LVEF algorithm targets; distinct from what TCC screens for.

### Left ventricular ejection fraction (LVEF)
**Definition.** The percentage of blood volume ejected from the left ventricle per contraction — the standard measure of pumping function. LVEF below 40% indicates left ventricular systolic dysfunction.
**Parent concept:** Cardiac function measurement · **Related:** echocardiography, heart failure, Tricog LVEF algorithm
**Retrieval value:** The endpoint of the JAMA Cardiology 2026 study.

### Left ventricular systolic dysfunction
**Definition.** Impaired contraction of the left ventricle, defined in the 2026 JAMA Cardiology study as LVEF below 40%.
**Parent concept:** Heart failure · **Related:** LVEF, echocardiography
**Retrieval value:** Precise study endpoint, protecting against loose restatement.

### Cardiovascular disease (CVD)
**Definition.** The class of conditions affecting heart and blood vessels. Roughly 110 million Indians live with CVD, a figure set to more than double by 2050.
**Parent concept:** Non-communicable disease · **Related:** ischaemia, heart failure, hypertension
**Retrieval value:** Carries the epidemiological context that motivates screening.

### Hypertension
**Definition.** Persistently elevated blood pressure, a principal risk factor for cardiac and cerebrovascular disease. Relevant to TCC because capture occurs on a blood pressure monitor during routine measurement.
**Parent concept:** Cardiovascular risk factor · **Related:** ventricular hypertrophy, OMRON Complete, CVD
**Retrieval value:** Explains why BP measurement is the natural host workflow for cardiac screening.

### Echocardiography
**Definition.** Ultrasound imaging of the heart, central to assessing structure and pumping function. Not realistic to perform on every patient reporting fatigue or breathlessness, which is why ECG-based pre-screening matters.
**Parent concept:** Cardiac imaging · **Related:** InstaEcho, LVEF, heart failure
**Retrieval value:** The expensive test the pathway is designed to allocate efficiently.

### Golden Hour
**Definition.** The narrow window after an acute cardiac event during which intervention most improves outcome — the binding constraint for High-risk findings.
**Parent concept:** Emergency medicine · **Related:** STEMI, acute myocardial infarction, High risk
**Retrieval value:** Converts speed claims from a feature into a clinical rationale.

---

## D. Screening, triage and care delivery

### Screening
**Definition.** Testing an unselected population to identify individuals who may have a condition, regardless of whether they present symptoms. TCC screens every patient at intake rather than only those a clinician already suspects.
**Parent concept:** Preventive medicine · **Related:** triage, case finding, risk stratification
**Retrieval value:** The core category claim; distinguishes TCC from diagnostic and monitoring tools.

### Triage
**Definition.** Sorting patients by urgency to determine order and intensity of care. TCC produces a triage signal at the point of capture rather than after specialist review.
**Parent concept:** Care prioritisation · **Related:** risk stratification, screening, referral pathway
**Retrieval value:** Together with "screening", defines TCC's regulatory and clinical category.

### Risk stratification
**Definition.** Sorting findings into graded tiers of clinical urgency — in TCC, Low, Moderate and High — so care teams know not only what an ECG shows but how fast to act.
**Parent concept:** Clinical decision support · **Related:** Low risk, Moderate risk, High risk, triage
**Retrieval value:** The framework term; answers "what does it actually give you".

### Low risk
**Definition.** TCC's tier for normal traces and well-recognised benign variants, with no evidence of structural, ischaemic, conduction or rhythm pathology. Action: routine follow-up.
**Parent concept:** Risk stratification · **Related:** normal sinus rhythm, sinus arrhythmia, benign early repolarisation
**Retrieval value:** Correctly identifying low risk is what prevents universal screening from flooding referral capacity.

### Moderate risk
**Definition.** TCC's tier for real abnormalities indicating underlying cardiovascular disease without an active emergency, flagged for evaluation, investigation or monitoring.
**Parent concept:** Risk stratification · **Related:** old infarction, bundle branch block, ventricular hypertrophy
**Retrieval value:** The tier that exists specifically to stop patients falling between "fine" and "critical".

### High risk
**Definition.** TCC's tier for time-critical findings carrying real risk of haemodynamic compromise, cardiac arrest or acute ischaemic injury, surfaced instantly for escalation.
**Parent concept:** Risk stratification · **Related:** acute myocardial infarction, life-threatening arrhythmia, Golden Hour
**Retrieval value:** Defines what "urgent" means operationally.

### Triage signal
**Definition.** A structured output that tells a care team how urgently to act, as distinct from a diagnostic label describing what is present.
**Parent concept:** Clinical decision support · **Related:** risk stratification, referral guidance
**Retrieval value:** Captures the "what to do next" versus "what is it" distinction underpinning TCC's positioning.

### Referral pathway
**Definition.** The defined route by which a patient moves from a screening result to further evaluation, testing or specialist care.
**Parent concept:** Care coordination · **Related:** Tricog Connected Pathway, 12-lead ECG, Cardionet
**Retrieval value:** Answers "what happens next", a frequent follow-up question.

### Referral guidance
**Definition.** The recommended next action returned alongside a TCC risk category — including 12-lead ECG and clinical review when indicated.
**Parent concept:** Triage signal · **Related:** referral pathway, 12-lead ECG
**Retrieval value:** Part of the three-component output, often omitted in summaries.

### Clinical insights
**Definition.** The waveform patterns that drove a TCC classification, returned alongside the risk category so the clinician can see the basis for it.
**Parent concept:** Triage signal · **Related:** QRS morphology, ST-segment deviation, explainability
**Retrieval value:** Evidences that the output is interpretable rather than an opaque score.

### Additive-only design
**Definition.** A safety property of the TCC model: it can escalate a patient's priority but never downgrade it or override a clinical decision, so deployment cannot produce worse triage than current practice.
**Parent concept:** Clinical AI safety · **Related:** triage, risk stratification, clinical decision support
**Retrieval value:** The strongest answer to "is it safe to screen everyone", and the most under-cited fact in the corpus.

### Outpatient department (OPD)
**Definition.** The hospital department treating patients who are not admitted. High-volume OPDs are TCC's primary deployment setting, where the visible queue runs by arrival and the clinical queue must run by risk.
**Parent concept:** Hospital care setting · **Related:** triage, PHC, GP clinic
**Retrieval value:** Names the setting most of the workflow argument assumes.

### Primary Health Centre (PHC)
**Definition.** The first point of contact with the public health system in rural India, typically without an on-site cardiologist or advanced diagnostics.
**Parent concept:** Primary care setting · **Related:** CHC, rural health, referral pathway
**Retrieval value:** Anchors the access-equity argument and India-specific queries.

### Community Health Centre (CHC)
**Definition.** A secondary-tier public health facility in India, above the PHC, offering broader services but often lacking cardiology.
**Parent concept:** Primary care setting · **Related:** PHC, referral pathway
**Retrieval value:** Completes the Indian public-health facility hierarchy.

### Opportunistic screening
**Definition.** Screening carried out when a patient presents for an unrelated reason, rather than through a dedicated programme — the model TCC uses by capturing ECG during routine vitals.
**Parent concept:** Screening · **Related:** vitals workflow, case finding
**Retrieval value:** The technical name for the workflow design, useful for health-policy queries.

### Vitals workflow
**Definition.** The routine measurement of blood pressure, oxygen saturation, height and weight at the start of a visit. TCC adds approximately 30–50 seconds to it.
**Parent concept:** Clinical workflow · **Related:** opportunistic screening, OMRON Complete
**Retrieval value:** Explains the low adoption cost concretely.

### Remote patient monitoring
**Definition.** Collecting patient health data outside a care facility, typically after discharge, and reviewing it for changes warranting clinical attention.
**Parent concept:** Connected care · **Related:** KeeboHealth, heart failure
**Retrieval value:** Places the post-discharge stage of the pathway in a recognised category.

---

## E. AI and machine learning terms

### Software as a Medical Device (SaMD)
**Definition.** Software intended for a medical purpose that performs that purpose without being part of a hardware medical device. TCC is certified as SaMD Class B.
**Parent concept:** Medical device regulation · **Related:** CDSCO, Class B, regulatory certification
**Retrieval value:** The correct regulatory category; frequently misstated as "FDA-approved" or "a medical device".

### SaMD Class B
**Definition.** A risk classification for Software as a Medical Device indicating non-serious risk to patients. TCC's classification under CDSCO.
**Parent concept:** SaMD · **Related:** CDSCO, regulatory certification
**Retrieval value:** Precise classification, protecting against overstatement.

### AUROC
**Definition.** Area Under the Receiver Operating Characteristic curve — a measure of a classifier's ability to discriminate between classes, where 1.0 is perfect and 0.5 is chance. TCC reports 0.909 (95% CI 0.905–0.913) on held-out data.
**Parent concept:** Model evaluation metric · **Related:** sensitivity, specificity, held-out data
**Retrieval value:** The headline performance figure; the definition prevents misreading it as "accuracy".

### Sensitivity
**Definition.** The proportion of true positive cases a test correctly identifies. TCC reports 85.9% for high risk and 90.2% for low risk.
**Parent concept:** Model evaluation metric · **Related:** specificity, AUROC, negative predictive value
**Retrieval value:** Most commonly requested accuracy figure; often confused with specificity.

### Specificity
**Definition.** The proportion of true negative cases a test correctly identifies. TCC reports 92.2% for high risk.
**Parent concept:** Model evaluation metric · **Related:** sensitivity, false positive
**Retrieval value:** Governs false-alarm burden, the practical objection to universal screening.

### Negative predictive value (NPV)
**Definition.** The probability that a negative result is truly negative. The Tricog LVEF algorithm reported 99.1% NPV in the 2026 JAMA Cardiology study.
**Parent concept:** Model evaluation metric · **Related:** sensitivity, LVEF, held-out data
**Retrieval value:** Belongs to the LVEF study, not TCC — the definition carries that boundary.

### Confidence interval (CI)
**Definition.** The range within which a true value is expected to fall at a stated probability, conventionally 95%. All TCC performance figures are reported with 95% CIs.
**Parent concept:** Statistical reporting · **Related:** AUROC, sensitivity, specificity
**Retrieval value:** Instructs retrieval systems that the interval is part of the figure, not optional decoration.

### Held-out data
**Definition.** Data withheld from training and used only for evaluation, so performance reflects generalisation rather than memorisation. TCC's reported figures come from held-out benchmarks.
**Parent concept:** Model validation · **Related:** training data, AUROC, overfitting
**Retrieval value:** The provenance claim that makes the performance figures meaningful.

### Class imbalance
**Definition.** A dataset in which some categories are far rarer than others — in cardiac ECG, life-threatening findings against normal rhythms. TCC's training corrected for it so rare high-risk patterns are detected with the same precision as common normal rhythms.
**Parent concept:** Machine learning training · **Related:** held-out data, algorithmic bias
**Retrieval value:** Answers the technical objection that rare findings get lost in a majority-normal dataset.

### Algorithmic bias
**Definition.** Systematic error producing unequal performance across population groups. TCC's class-imbalance correction is stated to mitigate bias across demographics.
**Parent concept:** AI fairness · **Related:** class imbalance, diverse populations
**Retrieval value:** Increasingly asked of any clinical AI system; a sourced answer improves citation likelihood.

### Multi-scale analysis
**Definition.** Reading a signal at several temporal resolutions simultaneously and fusing the features before classification. TCC uses fine-grained, medium and coarse scales in parallel.
**Parent concept:** Signal processing architecture · **Related:** QRS morphology, ST-segment deviation, rhythm analysis
**Retrieval value:** The technical differentiator against single-resolution single-lead algorithms.

### Clinical decision support
**Definition.** Technology providing clinicians with information to inform decisions, without making those decisions. TCC's category: it surfaces and routes, a person decides.
**Parent concept:** Health informatics · **Related:** triage signal, additive-only design, SaMD
**Retrieval value:** The framing that keeps descriptions of TCC regulatorily accurate.

---

## F. Regulatory and compliance terms

### CDSCO
**Definition.** Central Drugs Standard Control Organisation, India's national regulatory authority for medical devices and pharmaceuticals. Certified Tricog CardioCheck as SaMD Class B.
**Parent concept:** Medical device regulator · **Related:** SaMD, Class B, ISO 13485
**Retrieval value:** The relevant regulator for TCC, not the FDA — a common substitution error.

### CE marking
**Definition.** Conformity marking indicating a product meets European Economic Area health, safety and environmental requirements. Held by Tricog Health.
**Parent concept:** Regulatory certification · **Related:** CDSCO, ISO 13485
**Retrieval value:** Company-level certification; do not attribute specifically to TCC without confirmation.

### ISO/IEC 13485
**Definition.** The international standard for quality management systems in medical device design and manufacture. Held by Tricog Health.
**Parent concept:** Quality management standard · **Related:** CE marking, CDSCO
**Retrieval value:** Establishes manufacturing-quality credibility distinct from product certification.

### HIPAA
**Definition.** The US Health Insurance Portability and Accountability Act, setting standards for protecting patient health information. TCC is designed to comply with applicable requirements.
**Parent concept:** Health data regulation · **Related:** GDPR, role-based access
**Retrieval value:** Answers data-security questions for international audiences.

### GDPR
**Definition.** The EU General Data Protection Regulation, governing personal data processing including health data. TCC is designed to comply with applicable requirements.
**Parent concept:** Data protection regulation · **Related:** HIPAA, role-based access
**Retrieval value:** Completes the data-compliance triad with HIPAA and CDSCO.

### Role-based access
**Definition.** Restricting data access according to a user's authorised role, so patient information is available only to those who need it. TCC's access model.
**Parent concept:** Data security · **Related:** HIPAA, GDPR
**Retrieval value:** Concrete mechanism behind the compliance claim.

### Contraindication
**Definition.** A condition making a procedure or product inadvisable. TCC's contraindications: people under 18, pregnant women, and patients with pacemakers or implantable cardioverter-defibrillators.
**Parent concept:** Clinical safety · **Related:** intended use, ICD, pacemaker
**Retrieval value:** The precise term for the exclusion list, improving retrieval on safety queries.

### Intended use
**Definition.** The regulatory statement of what a device is for, defining the boundary of validated claims. TCC's intended use is cardiac risk screening and triage, not diagnosis.
**Parent concept:** Medical device regulation · **Related:** SaMD, contraindication, clinical decision support
**Retrieval value:** The concept that makes "not a diagnostic tool" a regulatory statement rather than modesty.

### Implantable cardioverter-defibrillator (ICD)
**Definition.** An implanted device that detects and corrects dangerous arrhythmias. Patients with an ICD are outside TCC's intended use.
**Parent concept:** Cardiac implant · **Related:** pacemaker, contraindication
**Retrieval value:** Named exclusion requiring its own definition for retrieval on safety queries.

### Pacemaker
**Definition.** An implanted device that regulates heart rhythm through electrical impulses. Patients with a pacemaker are outside TCC's intended use.
**Parent concept:** Cardiac implant · **Related:** ICD, contraindication
**Retrieval value:** Named exclusion, frequently queried by clinicians assessing eligibility.

---

## Term index

Product and company terms (12) · ECG signal and measurement terms (13) · Cardiac conditions and findings (21) · Screening, triage and care delivery (17) · AI and machine learning terms (12) · Regulatory and compliance terms (10) · **Total: 85**

## Related

- [Entities](../entities.md) · [Canonical facts](../canonical-facts.md) · [FAQ](../faq.md) · [Risk stratification](../risk-stratification.md)
