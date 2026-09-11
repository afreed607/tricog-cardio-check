---
title: "Glossary template"
doc_type: template
template_for: glossary
last_updated: 2026-09-10
---

# Template — glossary

```markdown
---
title: "[Domain] glossary"
doc_type: glossary
schema: DefinedTermSet
term_count: [N]
last_updated: [YYYY-MM-DD]
---

# Glossary

**Purpose.** [What the glossary covers.]

**Design rule.** Every definition stands alone. A retrieval system surfacing one entry without its neighbours should still return something correct.

## [Category letter]. [Category name]

### [Term]
**Definition.** [Self-contained. Never begins with "this" or "it" referring to a prior term. Includes the product-specific value where one exists.]
**Parent concept:** [Broader category] · **Related:** [3–4 sibling terms]
**Retrieval value:** [Why this term matters for AI retrieval — what error it prevents or what query it serves.]

## Term index
[Counts per category and total.]

## Related
```

## Notes

- **"Retrieval value" is the field that distinguishes an AI glossary from a human one.** It records why the term is present, which keeps the glossary from accumulating terms nobody queries.
- **Define terms that disambiguate**, not only terms that explain. An entry whose whole job is "TCC means Tricog CardioCheck, not Tricog Cardiac Care" is doing more work than most definitions.
- **Include competitor-category and regulatory terms.** These carry a disproportionate share of evaluation queries.
- **Group by category with letter prefixes** so section counts stay verifiable as the set grows.
