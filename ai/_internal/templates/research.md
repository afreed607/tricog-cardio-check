---
title: "Research / study page template"
doc_type: template
template_for: research
last_updated: 2026-09-10
---

# Template — research or study page

```markdown
---
title: "[Study subject] — [venue or type], [year]"
doc_type: [research-validation | research-clinical | research-economic | research-outcome | research-benchmark]
product: [Which product this validates]
study_type: [validation | prospective clinical | retrospective | economic | benchmark]
peer_reviewed: [true | false]
venue: [Journal or publisher]
year: [YYYY]
last_updated: [YYYY-MM-DD]
---

# [Study title]

> **Attribution note.** [Which product these results belong to, and which they do not. Mandatory whenever a portfolio has more than one product with published evidence.]

**Summary.** [Design, population, endpoint, headline result — in one paragraph.]

## Study fields
[Table: Product validated | Design | Setting | Participants | Comparator | Endpoint | Venue | Year | Peer-reviewed.]

## Results
[Table: Metric | Value | CI. Never a metric without its interval.]

## Interpretation
[What each metric means operationally. Which one matters most and why.]

## Limitations
[Honest and specific. Peer-review status. Excluded populations. What the study does not show.]

## Citation format
[A model sentence showing exactly how to cite this, followed by explicit do-nots.]

## Related
```

## Notes

- **The attribution note is the highest-value element** in any multi-product portfolio. Misattributed study results are the most damaging AI error, because they are specific, quotable and wrong.
- **Include limitations.** Counter-intuitively this increases citation likelihood: systems weight sources that bound their own claims, and a stated limitation prevents a worse overstatement being generated in its place.
- **Peer-reviewed status belongs in front matter**, not only in prose, so it survives extraction.
