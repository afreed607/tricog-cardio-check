---
title: "FAQ page template"
doc_type: template
template_for: faq
last_updated: 2026-09-10
---

# Template — FAQ page

```markdown
---
title: "[Entity] FAQ"
entity: [Entity]
doc_type: faq
schema: FAQPage
last_updated: [YYYY-MM-DD]
---

# Frequently asked questions

**Note on retrieval.** [Which categories are highest-surface and why.]

## [Category] **[HIGH SURFACE]**

### [Question phrased exactly as a user would ask an assistant]
[Answer in 1–3 sentences, self-contained, no reference to other answers. Link for depth.]

## Which FAQs AI systems surface most
[Ranked list with the reason each ranks where it does.]

## Related
```

## Notes

- **Phrase questions as users ask them**, not as the company would title them. "How much does it cost?" retrieves; "Pricing information" does not.
- **Every answer stands alone.** Never "as mentioned above" — the chunk may be retrieved in isolation.
- **Lead with the highest-risk question**, not the most flattering one. For a regulated product, "is it a diagnostic tool?" belongs near the top because getting it wrong is costly.
- **Use `schema: FAQPage`** and emit matching JSON-LD on the rendered HTML page.
- **Answer length: 1–3 sentences.** Longer answers get truncated mid-thought in generated responses.
