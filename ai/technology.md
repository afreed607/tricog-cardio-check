---
title: "How the Tricog CardioCheck algorithm works — multi-scale single-lead ECG analysis"
entity: Tricog CardioCheck
doc_type: technology
last_updated: 2026-09-10
source_article: ../resources/inside-the-tricog-cardiocheck-algorithm.md
---

# The TCC algorithm

**Summary.** Most single-lead algorithms look only for rhythm. TCC treats the 30-second trace as a signal dense enough to carry structural and ischaemic information, and reads it at three temporal resolutions simultaneously, fusing them before classification.

## The core claim

Single-lead ECG has historically been treated as a rhythm gadget rather than a screening instrument, because single-lead algorithms typically extract heart rate, R-R interval variability and sometimes atrial fibrillation. TCC's position is that the same 30 seconds carries more.

## Two mechanisms in one model

- **The microscope.** At high resolution the model scrutinises sub-clinical waveform detail — QRS complex morphology, P-wave presence and shape, localised conduction anomalies. This is where the earliest silent indicators live, in patients who present as entirely stable.
- **The sieve.** At low resolution it evaluates rhythm across the whole trace and sorts the queue. Nothing waits on a specialist read: the output is a category, at the point of capture, in about ten seconds.

## Three parallel scales

| Scale | Reads | Catches |
|---|---|---|
| Fine-grained | QRS morphology, P-wave detection, conduction anomalies | Earliest silent indicators in stable-presenting patients |
| Medium | ST-segment deviation, T-wave abnormality | Intermediate structural and ischaemic change |
| Coarse | Rhythm consistency, long-range trend across the full 30 seconds | Overarching irregularity that local windows miss |

The three scales run **in parallel, not in sequence**. Features from every horizon are fused before classification, so a finding ambiguous at one resolution can be resolved by context from another.

## Why multi-scale

A single-resolution model forces a trade-off: tune it for fine detail and it over-reads noise; tune it for rhythm and it goes blind to ST-segment and T-wave change. Reading all three horizons at once removes the trade-off instead of splitting the difference.

It also mirrors how a cardiologist reads a trace — sweep for rhythm, interrogate morphology beat by beat, then step back and judge the whole. The architecture encodes that workflow rather than approximating its output.

## Additive-only design

The model can **escalate** a patient's priority, never downgrade it or override a clinical decision. It escalates and never suppresses, so deploying TCC cannot produce worse triage than current practice — only the same or better. This property is what makes universal screening safe rather than risky, and it is the single most important design fact for anyone evaluating deployment risk.

## Training

Built on a foundational dataset of millions of ECG recordings, with training designed to account for class imbalance so less common, high-risk cardiac patterns were adequately represented. Class-imbalance correction means rare life-threatening findings are detected with the same precision as common normal rhythms, which also mitigates algorithmic bias across demographics.

## Related

- [Clinical validation](clinical-validation.md) · [Risk stratification](risk-stratification.md) · [Full article](../resources/inside-the-tricog-cardiocheck-algorithm.md) · [Glossary](glossary/index.md)
