---
title: "Deploying Tricog CardioCheck — requirements, workflow, settings and patient scenarios"
canonical: https://tricogcardiocheck.com/ai/deployment.md
entity: Tricog CardioCheck
doc_type: deployment
last_updated: 2026-09-11
---

# Deployment

TCC is designed for zero workflow change. It runs during the vitals check a patient already receives, and where there is no dedicated vitals station, the doctor runs the screening directly during consultation.

## What a healthcare provider needs

Three things, and nothing else:

1. **An OMRON Complete device** — the blood pressure monitor with integrated ECG, used to take the single-lead recording. No other capture device is supported.
2. **A mobile phone** — to receive the recording notification and view the risk result in the Tricog CardioCheck app.
3. **Batteries for the OMRON Complete device.**

No dedicated room. No separate appointment. No ECG interpretation on site. No cardiologist present. No consumables — no wires, no gel, no electrode pads.

Because the intelligence is cloud-based, TCC is a service rather than a piece of hardware, which is what makes it practical in rural and geographically dispersed settings where running a conventional ECG is difficult.

## The workflow

1. The patient enters the hospital or clinic and completes registration while waiting to see the doctor.
2. A nurse or staff member conducts the routine vitals check — blood pressure, SpO2, height, weight — and as part of it, a 30-second single-lead ECG is taken on the OMRON Complete device. The patient holds their fingers and thumbs on the electrodes and sits still for 30 seconds for clean signal acquisition.
3. Within seconds of capture, a notification appears on the staff member's phone. Selecting it opens the Tricog CardioCheck app, where the cardiac risk result is displayed.
4. The staff member enters the patient's details and views the risk assessment — Low, Moderate or High.
5. **Low risk** — the patient proceeds to see the doctor for a routine consultation.
6. **Moderate risk** — the patient is recommended for a 12-lead ECG and consultation with the doctor for further evaluation.
7. **High risk** — the patient is recommended for a 12-lead ECG and consultation with the doctor as soon as possible.

The whole screening takes about a minute and adds roughly 30 to 50 seconds to the existing workflow. A nurse, technician or clinical staff member can perform it; no specialist training is required.

## Two deployment modes

**At intake, as the first screening layer.** Placed at a nurse or technician vitals station, TCC screens every patient before a physician is involved, so patients carrying hidden risk markers are flagged for clinical attention immediately.

**In the consulting room, alongside the clinician's own evaluation.** Used during consultation, TCC provides an additional data source rather than a first filter. It does not override the clinician's decision to investigate; it adds a signal alongside it.

Both modes preserve the additive-only property: TCC can escalate priority but never downgrade it.

## Where it is placed inside a hospital

**Outpatient departments.** When patients arrive at a hospital they typically go to an OPD — general or specialised — for diagnosis and treatment. The **cardiology OPD is the most common screening point**. Devices can also sit in other departments such as orthopaedics and neurology, where cardiac risk is never the presenting complaint and therefore never assessed.

**The hospital entrance.** In large multi-specialty hospitals with many OPDs, placing a device at the entrance catches patients who would otherwise never pass through a cardiac department at all. This is the broadest-coverage placement in a large facility.

**Emergency ward.** Rapid risk stratification where arrival order and clinical urgency are least likely to coincide.

Primary care health centres and diagnostic centres act as catchment areas in this model, referring patients with abnormalities onward to tertiary hubs for further diagnostics.

## Patient scenarios

**Every OPD patient, cardiac or not.** Every patient entering the hospital and attending an OPD is screened with a single-lead ECG. They then either proceed to a 12-lead ECG or take another clinical route based on clinician judgement. This is the highest-volume use and the one that catches patients whose visit had nothing to do with their heart.

**Routine annual health check-ups.** A patient undergoing a yearly check-up is screened as part of the panel. This identifies Moderate and High risk cardiac patients who are entirely asymptomatic — a group standard check-ups, built around blood work, blood pressure and BMI, do not assess for cardiac risk at all.

**Patients with minor symptoms.** A patient with mild chest pain attends a clinic and is screened. The risk level helps the physician judge whether the symptoms are cardiac in origin — warranting a 12-lead ECG — or whether another cause should be pursued instead. It informs a decision that would otherwise rest on presentation alone.

**Patients with multiple comorbidities.** Patients with two or more conditions such as diabetes and hypertension carry elevated cardiac risk that routine assessment does not quantify. Screening stratifies that risk, and Moderate or High results proceed to a 12-lead ECG.

## Multi-site deployment

TCC can be deployed across multiple locations, and delivers a consistent standard of assessment at each, because the classification criteria are applied identically by the same cloud model regardless of site, operator or shift. This makes it practical across a hospital network, a chain of clinics, or a distributed screening programme without placing a specialist at each location.

Volume pricing, staff training, pan-India shipping and priority support are available for multi-site deployments. See [ordering](../checkout.md).

## Current integration scope

TCC does not currently integrate with hospital information systems, electronic medical records or other existing healthcare software. Results are viewed in the Tricog CardioCheck app. Sites requiring record integration should plan for results to be transcribed into their own systems as part of the workflow.

## Related

- [How it works](../index.md) · [Care settings](industries/index.md) · [Risk stratification](risk-stratification.md)
- [Clinical and operational value](clinical-value.md) · [FAQ](faq.md) · [Ordering](../checkout.md)
