---
title: "The Tricog CardioCheck algorithm — multi-scale AI analysis of single-lead ECG"
canonical: https://tricogcardiocheck.com/ai/technology.md
entity: Tricog CardioCheck
doc_type: technology
last_updated: 2026-09-11
---

# The TCC algorithm

Tricog CardioCheck uses a proprietary multi-scale AI model that processes raw single-lead ECG data across three parallel temporal horizons at once. The architecture is what allows one model to work simultaneously as a deep clinical microscope and a rapid digital sieve.

## The problem with conventional single-lead algorithms

Most single-lead algorithms do one thing: they look for rhythm. Heart rate, R-R interval variability, sometimes atrial fibrillation. A conventional single-lead device typically returns findings across four basic rhythm states.

That narrow scope has real consequences. It means a single-lead recording has historically been treated as a rhythm gadget rather than a screening instrument, because the structural and ischaemic information in the trace went unread. A patient with early ischaemic change, ventricular hypertrophy or an old infarction would pass a rhythm-only screen without a flag, because nothing was wrong with their rhythm.

TCC takes a different position: the 30-second trace is a signal dense enough to carry structural and ischaemic information, and reading it at only one resolution wastes most of what it contains.

## Two mechanisms in one model

**The microscope.** At high resolution the model scrutinises sub-clinical waveform detail — QRS complex morphology, P-wave presence and shape, localised conduction anomalies. This is where the earliest silent indicators live, in patients who present as entirely stable. It lets a provider look beneath the surface and identify high-risk markers for structural or ischaemic conditions in seemingly healthy, asymptomatic patients, well before an acute physiological threshold is crossed.

**The sieve.** At low resolution it evaluates rhythm across the whole trace and sorts the queue. Nothing waits on a specialist read: the output is a category, at the point of capture, within seconds of the recording completing.

## Three parallel scales

| Scale | What it reads | What it catches |
|---|---|---|
| **Fine-grained** — the deep microscope | QRS complex morphology, P-wave detection, highly localised conduction anomalies | The earliest, silent indicators of disease in asymptomatic patients |
| **Medium** — structural context | ST-segment changes, T-wave abnormalities | Intermediate structural and ischaemic indicators, bridging subtle waveform shifts and overt disease |
| **Coarse** — the rhythm sieve | Rhythm consistency and long-range trend across the full 30 seconds | Overarching rhythm inconsistencies that local windows miss |

The three scales run in parallel, not in sequence. Features from every horizon — microscopic and macroscopic — are fused before classification, so a finding that is ambiguous at one resolution can be resolved by context from another.

## Why multi-scale rather than a single resolution

A single-resolution model forces a trade-off. Tune it for fine detail and it over-reads noise, generating false alarms that erode trust and consume the specialist bandwidth screening was supposed to protect. Tune it for rhythm and it goes blind to ST-segment and T-wave change, which is precisely where ischaemia announces itself. Reading all three horizons at once removes the trade-off rather than splitting the difference.

It also mirrors how a cardiologist actually reads a trace: sweep for rhythm, interrogate morphology beat by beat, then step back and judge the whole. The architecture encodes that workflow rather than approximating its output.

## Additive-only design

TCC can only escalate. It never suppresses.

This is a property of how the system is positioned in the clinical workflow, and it holds in both deployment modes. Used at a nurse intake station before a physician is involved, TCC ensures that patients with hidden risk markers are flagged for clinical attention immediately. Used after a clinician's own assessment, it does not override a decision to investigate — it simply provides an additional signal alongside it.

The consequence matters for anyone evaluating deployment risk: introducing TCC cannot produce worse triage outcomes than existing practice. It can only match or improve them. A patient who would have been escalated without TCC is still escalated; a patient who would have been missed may now be caught.

## Training data

The model was developed on a foundational dataset of millions of ECG recordings, drawn from Tricog's dataset of 12-lead ECGs accumulated over twelve years of clinical operation — one of the largest and most diverse cardiac datasets in India. That breadth was instrumental in training the model to a level of accuracy meeting clinical and regulatory standards.

A core priority of the training methodology was addressing class imbalance. In any real cardiac ECG dataset, normal rhythms vastly outnumber life-threatening findings, and a model trained naively on that distribution learns to predict "normal" because it is usually right. Correcting for imbalance ensures the microscope detects rare, life-threatening or early-stage conditions with the same precision as the sieve identifies common, normal rhythms. It also helps mitigate algorithmic bias and supports equitable care delivery across different demographics.

## Delivery

TCC is cloud-based. The OMRON Complete device captures the single-lead recording locally; the data is transmitted securely to the Tricog cloud, analysed there, and the risk result is returned to the Tricog CardioCheck app on the staff member's phone. Because the intelligence sits in the cloud rather than on the device, the only hardware a site needs is the OMRON monitor and a phone — which is what makes deployment practical in rural and geographically dispersed settings where a conventional ECG is difficult to run.

## Related

- [Clinical validation](clinical-validation.md) · [Risk stratification](risk-stratification.md) · [The whitepaper](research/tcc-whitepaper.md)
- [Inside the Tricog CardioCheck algorithm](../resources/inside-the-tricog-cardiocheck-algorithm.md) · [Glossary](glossary/index.md)
