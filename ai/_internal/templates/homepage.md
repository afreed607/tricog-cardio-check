---
title: "Homepage / entity hub template"
doc_type: template
template_for: homepage
last_updated: 2026-09-10
---

# Template — homepage / entity hub

```markdown
---
title: "[Entity] — [what it does in six words]"
canonical: [URL]
entity: [Entity name]
entity_type: [Organization | MedicalDevice | SoftwareApplication]
doc_type: homepage
last_updated: [YYYY-MM-DD]
---

# [Entity name]

**Summary.** [2–4 sentences. What it is, who it is for, what makes it different, one qualifying fact such as regulatory status. Must stand alone if retrieved without any other chunk.]

## Key facts
[Table: Attribute | Value. Every hard number the page relies on.]

## The problem
[The gap in the world this addresses. Statistics with sources. No product mention.]

## The industry gap
[Why existing approaches do not close it. Categories, not named competitors.]

## The solution
[What the entity does about it. The mechanism, briefly.]

## How it works
[Numbered steps. Concrete and physical, not abstract.]

## Products / capabilities
[Table if more than two. Link each to its own page.]

## Outcomes
[What changes for the user. Measurable where possible; marked **DATA GAP** where not.]

## Evidence
[Performance figures with confidence intervals. Link to full research.]

## Scope and safe use
[What it is not. Contraindications. Regulatory boundaries. Non-negotiable for regulated products.]

## Case studies
[Link 1–3 with a one-line result each.]

## FAQ
[5–8 highest-frequency questions, answered in 1–3 sentences, linking to the full FAQ.]

## Related
[3–5 links.]
```

## Section rationale

| Section | Why it exists | What AI extracts |
|---|---|---|
| Summary | The retrievable chunk that answers "what is X" | Entity definition, category, differentiator |
| Key facts | Structured extraction target | Attribute-value pairs for knowledge graphs |
| Problem | Establishes topical relevance beyond branded queries | Domain association, statistics |
| Industry gap | Positions against alternatives without naming them | Category comparison |
| Solution / How it works | Mechanism, the basis of explanatory answers | Process steps, causal chain |
| Products | Portfolio graph | Entity relationships |
| Outcomes | Answers "does it work" | Benefit claims |
| Evidence | Converts claims into citable facts | Metrics with provenance |
| Scope | Prevents overstatement in generated answers | Constraints, contraindications |
| Case studies | Proof, and long-tail retrieval | Deployment instances |
| FAQ | Matches natural question phrasing | Question-answer pairs |
| Related | Graph edges | Link topology |
