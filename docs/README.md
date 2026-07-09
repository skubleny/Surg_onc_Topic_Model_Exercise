# Surgical Oncology Topic Modeling Dashboard

This is a static dashboard framework for hosting interactive BERTopic outputs on GitHub Pages.

## Folder structure

```text
surg_onc_dashboard_framework/
├── index.html
├── styles.css
├── script.js
├── figures/
│   ├── topic_map.html
│   ├── topic_over_time.html
│   ├── topic_frequency.html
│   └── document_explorer.html
└── README.md
```

## How to use it

1. Export each interactive figure from Python or R as a standalone HTML file.
2. Replace the placeholder files in `figures/` with your real outputs.
3. Keep the same filenames, or update the `iframe src="..."` paths in `index.html`.
4. Edit the title, description, metric cards, methods note, and footer in `index.html`.
5. Push the folder contents to a GitHub repository.
6. Enable GitHub Pages for the repository.

## Recommended figure filenames

| Dashboard panel | File path |
|---|---|
| Topic landscape | `figures/topic_map.html` |
| Topic prevalence over time | `figures/topic_over_time.html` |
| Topic frequency | `figures/topic_frequency.html` |
| Publication explorer | `figures/document_explorer.html` |

## Exporting Plotly HTML from Python

```python
fig.write_html(
    "figures/topic_over_time.html",
    include_plotlyjs="cdn",
    full_html=True
)
```

For a fully self-contained file, use:

```python
fig.write_html(
    "figures/topic_over_time.html",
    include_plotlyjs=True,
    full_html=True
)
```

The self-contained version is easier to share, but can be much larger.

## Exporting datamapplot/static interactive HTML

If you are using `datamapplot`, export your interactive or static HTML output into the `figures/` folder and point the relevant iframe to that file.

## Notes for research/publication use

- Avoid placing protected health information or sensitive full-text data in the website.
- Prefer topic-level summaries, de-identified metadata, aggregate counts, labels, and representative examples.
- For very large HTML files, consider loading common JavaScript libraries from a CDN to reduce repository size.
- GitHub Pages is static, so users can interact with precomputed figures but cannot trigger server-side Python/R computation.
