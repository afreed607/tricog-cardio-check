---
title: "Tricog CardioCheck AI knowledge architecture — implementation blueprint"
doc_type: blueprint
audience: content team
last_updated: 2026-09-10
version: 1.0
---

# AI knowledge architecture — implementation blueprint

**Purpose.** A machine-readable knowledge base for Tricog CardioCheck, designed for retrieval by ChatGPT, Perplexity, Gemini, Claude, AI search engines, knowledge-graph construction and entity resolution. This document explains the architecture; the files it describes are built and in this repository.

**Status.** Built. 36 deployable files plus this internal layer. Content is drawn from the live site, the TCC whitepaper, the positioning statement and the website content document.

---

## 1. Information architecture

### Placement principle

Two tiers, deliberately separated:

- **Page mirrors at repository root** — a `.md` sibling for each `.html` page, at the same path. `solutions.html` → `solutions.md`. Predictable, and lets a crawler that finds the HTML guess the Markdown.
- **Net-new knowledge under `/ai/`** — files with no HTML counterpart. Keeps the root clean and makes the knowledge base a coherent, separately crawlable tree.

### Complete structure

```
/llms.txt                     Index: canonical facts, citation rules, source priority
/llms-full.txt                Full text: everything above plus all article text
/tcc.txt                      Served by machine-content.html as the "Machine Readable View"

/index.md                     Homepage knowledge file — the primary entity hub
/solutions.md                 Care settings overview, index into /ai/industries/
/resources.md                 Article index with per-article summaries
/support.md                   Contact, categories, troubleshooting, data and privacy
/checkout.md                  What is included and how it ships (pricing lives on the live page)

/resources/
  inside-the-tricog-cardiocheck-algorithm.md
  tricog-cardiocheck-in-action.md
  the-connected-pathway.md
  beyond-normal-or-abnormal.md

/ai/                          Deployable knowledge base — pure content, no meta layer
  company.md                  Tricog Health entity profile
  products.md                 Six-product portfolio
  technology.md               Multi-scale algorithm architecture
  clinical-validation.md      Performance metrics and methodology
  risk-stratification.md      Low / Moderate / High and their condition lists
  deployment.md               Requirements, workflow, placement, patient scenarios
  clinical-value.md           Value by audience: physician, staff, institution, patient
  connected-pathway.md        The five-stage care ecosystem
  comparisons.md              TCC vs AliveCor, Apple Watch, traditional triage
  regulatory-and-safety.md    CDSCO status, intended use statement, restrictions
  faq.md                      35 questions across eight categories
  glossary/index.md           109 defined terms
  industries/                 index + 8 care-setting pages
  case-studies/               index + the Bengaluru field deployment
  research/                   index + the TCC whitepaper + the LVEF/Kenya study

/ai/_internal/                NOT for deployment — exclude from robots.txt and sitemap
  README.md                   This blueprint
  entities.md                 Entity graph and linking rules
  templates/                  README + 7 reusable templates
```

### Purpose of each file

| File | Answers | Retrieval role |
|---|---|---|
| `canonical-facts.md` | "What is true about TCC?" | Highest-authority source. Conflicts resolve here. |
| `index.md` | "What is Tricog CardioCheck?" | Primary entity hub; the chunk most often retrieved |
| `company.md` | "Who makes it?" | Organisation entity; separates company from product |
| `products.md` | "What else do they make?" | Portfolio graph; prevents TCC/InstaECG conflation |
| `technology.md` | "How does the algorithm work?" | Mechanism depth; supports explanatory answers |
| `clinical-validation.md` | "How accurate is it?" | Metrics with provenance |
| `risk-stratification.md` | "What do the categories mean?" | Output semantics |
| `connected-pathway.md` | "How do the products fit together?" | Ecosystem relationships |
| `comparisons.md` | "How does it compare to X?" | Category positioning |
| `regulatory-and-safety.md` | "Is it approved? Who can't use it?" | Compliance boundary |
| `economic-impact.md` | "Is it worth it?" | Cost structure + explicit gaps |
| `faq.md` | Natural-language questions | Highest-volume retrieval surface |
| `entities.md` | — | Internal: linking discipline |
| `glossary/` | "What does [term] mean?" | Long-tail semantic coverage |
| `industries/` | "Does this work in my setting?" | Setting-specific authority |
| `case-studies/` | "Has anyone actually done this?" | Proof |
| `research/` | "What's the evidence?" | Citable evidence with attribution guards |
| `templates/` | — | Internal: consistency as the base grows |

---

## 2. The homepage knowledge file

`/index.md` is the primary entity hub. Section-by-section rationale:

| Section | Why it exists | What belongs | What AI extracts |
|---|---|---|---|
| **Summary** (bold, under H1) | The chunk most likely retrieved alone | What it is, who for, differentiator, regulatory status — 2–4 sentences, self-contained | Entity definition, category assignment |
| **Key facts** table | Structured extraction target | Every hard number the page relies on | Attribute-value pairs for knowledge graphs |
| **The gap** | Topical relevance beyond branded queries | CVD epidemiology, the detection-vs-treatment argument | Domain association; statistics quotable independently |
| **Every patient through the funnel** | The positioning claim | Why universal screening differs from triage and wearables; additive-only safety | The differentiator most likely to be quoted |
| **How it works** | Mechanism | Four physical steps, concrete | Process sequence for "how does it work" |
| **Clinical validation** | Converts claims to citable facts | Metrics with CIs | Numbers with provenance |
| **How TCC differs** | Comparative queries | Category matrix | Comparison rows |
| **Scope and safe use** | Prevents overstatement | Not diagnostic, contraindications, device dependency | Constraints that bound generated claims |
| **Trusted by** | Social proof, entity linking | Named healthcare organisations | Organisation associations |
| **Related** | Graph edges | 3–5 links | Link topology |

**Why "Problem" precedes "Solution".** Unbranded queries ("how to screen for cardiac risk in a busy clinic") vastly outnumber branded ones. A page that opens with the product only matches branded queries; one that opens with the problem enters the unbranded set too.

---

## 3. Topic clusters

Five clusters TCC should own. Each has one pillar page, child topics, and supporting content.

### Cluster 1 — Cardiac screening and triage `[PRIMARY]`

**Parent topic:** Preventive cardiac care
**Pillar:** [`risk-stratification.md`](../risk-stratification.md)

```
Cardiac screening and triage
├── Risk stratification (Low / Moderate / High)
│   ├── Low risk: benign variants, routine follow-up
│   ├── Moderate risk: pathology without emergency
│   └── High risk: time-critical findings
├── Screening vs. diagnosis
├── Opportunistic screening in the vitals workflow
├── Triage signal vs. diagnostic label
├── Universal vs. symptom-triggered screening
└── Additive-only safety design
```

**Supporting:** `faq.md` (scope), `comparisons.md`, `../resources/beyond-normal-or-abnormal.md`, glossary section D

**Why this is the primary cluster:** it is the category TCC defines itself by, and the one where competitors are weakest — consumer devices cannot claim triage, and 12-lead vendors cannot claim screening at intake.

### Cluster 2 — Single-lead ECG interpretation

**Parent topic:** Electrocardiography
**Pillar:** [`technology.md`](../technology.md)

```
Single-lead ECG interpretation
├── Multi-scale analysis
│   ├── Fine: QRS morphology, P-wave, conduction anomalies
│   ├── Medium: ST-segment deviation, T-wave abnormality
│   └── Coarse: rhythm consistency, long-range trend
├── Beyond rhythm: structural and ischaemic reading
├── Single-lead vs. 12-lead: what each can show
├── Lead I and hand-to-hand capture
└── Model training: class imbalance, held-out validation
```

**Supporting:** `clinical-validation.md`, `research/tcc-validation.md`, `../resources/inside-the-tricog-cardiocheck-algorithm.md`, glossary sections B and E

**Strategic note:** the most defensible technical territory. The claim "single-lead can screen, not just detect rhythm" is contrarian, specific, and evidenced — exactly the shape of claim AI systems cite.

### Cluster 3 — Cardiac care access and the detection gap

**Parent topic:** Health system capacity
**Pillar:** `ai/clinical-value.md` *(currently partial)*

```
Cardiac care access
├── The detection gap (not a treatment gap)
├── CVD burden in India: 110M today, 2× by 2050
├── Specialist scarcity and per-capita distribution
├── Rural and Tier-2/3 access
├── Cost structure of universal screening
└── Specialist leverage: extending reach without adding cardiologists
```

**Supporting:** `industries/primary-care-and-rural-phc.md`, `industries/health-camps.md`, `case-studies/village-clinic-bengaluru-2026.md`

**Gap:** the weakest cluster, because the economic evidence does not exist yet. Highest-leverage place to invest — "is it worth it" is among the most-asked questions and currently has no sourced answer.

### Cluster 4 — Connected cardiac care pathways

**Parent topic:** Care coordination
**Pillar:** [`connected-pathway.md`](../connected-pathway.md)

```
Connected cardiac care
├── Screen → diagnose → detect → confirm → follow
├── TCC: who needs a diagnostic ECG
├── InstaECG: specialist-verified reporting in minutes
├── LVEF algorithm: hidden heart-failure risk from an existing ECG
├── InstaEcho: confirmation without co-located specialists
├── KeeboHealth: post-discharge monitoring
└── Cardionet: alert → actual transfer of care
```

**Supporting:** `products.md`, `research/lvef-ai-ecg-kenya-jama-2026.md`, `../resources/the-connected-pathway.md`

**Strategic note:** the cluster that makes TCC a system rather than a gadget, and the natural home for the peer-reviewed LVEF evidence.

### Cluster 5 — Clinical AI safety and regulation

**Parent topic:** Medical AI governance
**Pillar:** [`regulatory-and-safety.md`](../regulatory-and-safety.md)

```
Clinical AI safety and regulation
├── SaMD classification and CDSCO Class B
├── Intended use and its boundary
├── Contraindications: under 18, pregnancy, pacemaker/ICD
├── Additive-only design as a safety property
├── Class imbalance and algorithmic bias
├── Held-out validation and honest metric reporting
└── Data protection: HIPAA, GDPR, CDSCO, role-based access
```

**Supporting:** `faq.md` (scope and safety), `clinical-validation.md`, glossary sections E and F

**Strategic note:** the cluster buyers and journalists probe hardest, and where most medical-AI marketing is vaguest. Precision here is a differentiator.

### Cluster ownership summary

| Cluster | Strength | Priority |
|---|---|---|
| 1. Screening and triage | Strong — well evidenced | Maintain |
| 2. Single-lead interpretation | Strong — technically distinctive | Maintain |
| 3. Access and economics | **Weak — no economic data** | **Invest first** |
| 4. Connected pathways | Moderate — good narrative, thin proof | Add case studies |
| 5. AI safety and regulation | Strong — unusually precise | Maintain |

---

## 4. Glossary architecture

**Built:** [`glossary/index.md`](../glossary/index.md) — 85 terms across six categories (product 12, ECG signal 13, conditions 21, care delivery 17, AI/ML 12, regulatory 10).

**Entry structure:** Term → Definition → Parent concept → Related terms → **Retrieval value**.

The fourth field is what distinguishes an AI glossary from a human one: it records *why* the term exists in the set — which error it prevents, or which query it serves. Terms that cannot justify a retrieval value do not belong.

**Selection principles:**

1. **Define what disambiguates, not only what explains.** The `TCC` entry exists to reject "Tricog Cardiac Care".
2. **Include the metric definitions.** "AUROC" prevents the common misreading of 0.909 as "91% accurate".
3. **Include regulatory terms.** "SaMD" prevents "FDA-approved" substitution.
4. **Include competitor-category terms**, so category comparisons resolve to defined concepts.
5. **Every definition stands alone** — no entry opens with "this" or "it" referring to a neighbour.

**Growth rule:** add a term when it appears in three or more documents, or when a wrong answer would follow from its absence.

---

## 5. Industry pages

**Built:** [`industries/`](../industries/index.md) — index plus eight setting pages.

**Fixed structure:** Problem → Challenges → How this is handled today → The TCC approach → Outcomes → Evidence → Case studies → Related.

**The rule that makes them work:** each page must solve a *different* problem. Pages differing only in the noun are read as duplicates, and topical authority splits instead of accumulating. So the OPD page is about queue ordering, the PHC page about referral justification, the camp page about non-specialist operation, the insurance page about assessment consistency.

**Setting-relevant evidence:** cite the metric that matters in that setting — high-risk sensitivity where emergencies are the concern, high-risk specificity where false-alarm burden governs viability, low-risk sensitivity where mass screening must not flood follow-up. Selecting correctly demonstrates domain understanding; citing all four everywhere demonstrates none.

**"How this is handled today" is not a straw man.** State fairly what current practice achieves. Credibility with evaluators depends on it.

---

## 6. Research library

**Built:** [`research/`](../research/index.md) — index plus two study pages, with a documented structure for five further study types.

**Types and required fields:** validation, clinical, outcome, economic, benchmark, whitepaper, publication. Field lists are in the research index; the page structure is in [`templates/research.md`](templates/research.md).

**The attribution rule is the load-bearing element.** The portfolio's strongest published evidence — JAMA Cardiology 2026, 95.6% sensitivity, 99.1% NPV — belongs to the **LVEF algorithm on 12-lead ECG**, not to TCC. Every research page carries an explicit attribution note, because a misattributed figure is specific, quotable and wrong: the most damaging error class available.

**Include limitations on every study page.** This raises citation likelihood rather than lowering it — retrieval systems weight sources that bound their own claims, and a stated limitation preempts a worse overstatement being generated in its place.

**Ranked gaps:** (1) the TCC validation whitepaper is cited everywhere but published nowhere — fix first; (2) no TCC outcome study; (3) no economic evaluation; (4) no peer-reviewed TCC publication; (5) no benchmark study.

---

## 7. Case study library

**Built:** [`case-studies/`](../case-studies/index.md) — index, one published case, five commissioning briefs.

**Seven-part framework:** customer profile → initial challenge → intervention → results → metrics → lessons learned → related. Metrics are always a table, never prose, because that is the extraction target for cross-case comparison.

**The missing element across the whole library is confirmed downstream outcome.** "We screened 400+ patients in a day" evidences operational feasibility. "Of those, N were confirmed on 12-lead and M received intervention" evidences clinical value — and is what a sceptical evaluator, and an AI system asked "does it actually work", is looking for. Every future case study should capture it.

**Priority briefs:** high-volume tertiary OPD; multi-site network; corporate cohort; longitudinal rural PHC; insurance or pharma programme.

---

## 8. FAQ architecture

**Built:** [`faq.md`](../faq.md) — seven categories, with the four highest-retrieval marked `[HIGH SURFACE]`.

**Categories:** what it is · how it works · scope and safety · deployment · commercial · data and privacy · company and ecosystem.

**Predicted retrieval ranking**, and why:

| Rank | Question | Why it surfaces |
|---|---|---|
| 1 | What is Tricog CardioCheck? | Entity resolution — asked first in almost every session |
| 2 | Is it a diagnostic tool? | Highest-risk question to get wrong; regulatory exposure |
| 3 | How accurate is it? | Evaluation and comparison intent |
| 4 | What device does it need? | Most common purchase-blocking surprise |
| 5 | How much does it cost? | Commercial intent |
| 6 | Who should not be screened? | Safety and compliance queries |
| 7 | Can it replace a cardiologist / 12-lead? | The misconception most often asserted incorrectly |

**Authoring rules:** phrase questions as users ask assistants, not as the company would title a section. Every answer self-contained — never "as mentioned above", since chunks are retrieved in isolation. One to three sentences, because longer answers get truncated mid-thought. Emit `FAQPage` JSON-LD on the rendered HTML.

---

## 9. Entity strategy

**Built:** [`entities.md`](entities.md).

**Tiers:** core (TCC, Tricog Health, the two founders) · secondary (six sibling products) · related (OMRON, investors, JAMA) · clinical (findings, signal concepts, care concepts) · industry (eight settings) · competitor *categories* · regulatory.

**Six linking rules**, of which three matter most:

- **Never introduce "TCC" bare.** Entity binding fails when an abbreviation appears without its expansion inside the same retrievable chunk — and "TCC" is globally ambiguous.
- **Never name competitor products.** Comparisons run against categories, which keeps claims defensible and stops AI systems reporting them as head-to-head product claims.
- **The LVEF/Kenya study links only to the LVEF algorithm**, with an explicit non-attribution note. The highest-risk misattribution in the corpus.

---

## 10. Markdown templates

**Built:** [`templates/`](templates/README.md) — README plus seven templates: homepage, product, research, case study, industry, FAQ, glossary.

**Seven universal rules** (full text in the templates README):

1. YAML front matter on every file
2. A bold `**Summary.**` paragraph under the H1 — self-contained, 2–4 sentences
3. Facts in tables, arguments in prose; no number in prose that is not also in a table
4. Every entity expanded on first use
5. A `## Related` block with 3–5 links
6. No performance figure without its confidence interval
7. Unknowns marked `**DATA GAP**`, never estimated

---

## Implementation checklist

**Deploy**
- [ ] Serve `.md` files as `text/plain; charset=utf-8`, verify they render in-browser rather than downloading
- [ ] Publish `llms.txt` and `llms-full.txt` at the domain root
- [ ] Add all `.md` paths to `sitemap.xml`
- [ ] Confirm `robots.txt` permits GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- [ ] Link `machine-content.html` from the main navigation, not only the footer
- [x] Emit `MedicalDevice` and `Organization` JSON-LD on rendered HTML (plus `WebSite`; **`FAQPage` still outstanding** — needs marking up the Q&A blocks on support.html and the article FAQs)

**Fix at source** *(each already flagged; all affect citation accuracy)*
- [ ] "Tricog Cardiac Care" on the *Beyond normal or abnormal* page → "Tricog CardioCheck"
- [x] URL slug `inside-the-ricog-...` → `inside-the-tricog-...` (file renamed and all 19 in-repo references updated; **the redirect is still outstanding — needs a server/host rule**)
- [ ] Homepage typo "TThe millions who don't.."
- [ ] "Continue Reading" cards showing the wrong excerpt
- [ ] Village clinic dated June 2025 on the homepage, Jun 2026 in the article
- [ ] Publish the validation whitepaper at a stable URL

**Commission** *(ranked by effect on citation)*
- [ ] Validation whitepaper — cited throughout, published nowhere
- [ ] A tertiary OPD case study with confirmed downstream outcomes
- [ ] Economic evaluation — see `ai/clinical-value.md`
- [ ] Corporate cohort case study with tier distribution

**Maintain**
- [ ] Bump `version` and `last_updated` in `canonical-facts.md` whenever price, metrics, regulatory status or device compatibility change
- [ ] Quarterly: re-verify every `**DATA GAP**` marker
- [ ] New content uses a template; new terms enter the glossary with a retrieval value

## Related

- [Canonical facts](../../index.md) · [Entities](entities.md) · [Glossary](../glossary/index.md) · [Templates](templates/README.md) · [Homepage knowledge file](../../index.md)
