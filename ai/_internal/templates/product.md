---
title: "Product page template"
doc_type: template
template_for: product
last_updated: 2026-09-10
---

# Template — product page

```markdown
---
title: "[Product] — [category] for [audience]"
canonical: [URL]
entity: [Product name]
entity_type: [MedicalDevice | SoftwareApplication]
publisher: [Company]
doc_type: product
last_updated: [YYYY-MM-DD]
---

# [Product name]

**Summary.** [What it is, what it takes in, what it returns, how fast, and its regulatory category.]

## Specification
[Table: Input | Output | Time | Device dependency | Regulatory class | Price. Every hard constraint.]

## What problem it solves
[Prose, one or two paragraphs.]

## How it works
[Numbered steps, physically concrete.]

## What you get back
[The output, component by component. Do not compress a three-part output into one word.]

## How it differs from alternatives
[Comparison table against categories, never named competitors. State the axes that actually separate them.]

## Evidence
[Metrics with CIs. Link to the research page.]

## Scope and limitations
[Intended use. Contraindications. Dependencies. What it does not replace.]

## Pricing and availability
[Table. Mark as volatile with a verification instruction.]

## FAQ
[Product-specific questions.]

## Related
```

## Notes

- **State device or platform dependencies in every commercial context.** Hard dependencies are the most common evaluation surprise, and an AI answer that omits one produces a frustrated buyer.
- **Never let a capability claim appear without its scope boundary in the same section.** Retrieval chunks by section; a claim retrieved alone becomes an overstatement.
