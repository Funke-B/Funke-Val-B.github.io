# Inventory Management & Data Analytics Portfolio

Welcome to my portfolio.

This site brings together my work, experience, projects, and ongoing learning in inventory management, operations, reporting, and data analytics.

My background is primarily in inventory and logistics, where I work with stock records, reconciliations, product movement, inventory reporting, batch and expiry tracking, and process improvement. I am also building my data analytics skills and learning how to turn operational data into clearer reports and useful business insights.

## Before you publish

Open `content.js` and search for **"REPLACE ME"** — three placeholders I couldn't fill in for you:

- `meta.email` — your real email address
- `meta.linkedin` — your LinkedIn profile URL
- `truecount.link` — Truecount Advisory's site, if it has one (or point it at a LinkedIn page, a one-pager, or remove the section in `index.html` if you'd rather not link it yet)

Also worth doing:
- Each project in `projects` has an empty `links: []`. Add `{ label: "View on GitHub", url: "https://github.com/..." }` entries once you have a repo or write-up for that project, and they'll render automatically.
- The hero's "ledger card" and all stats are pulled from facts already in `content.js` — update the numbers there as your work changes (new SKU counts, new certs, etc.).

## Deploying to GitHub Pages (as your own repo)

1. Create a new repository on GitHub named exactly `Funke-B.github.io` (this is what makes it a user-page site, served at that URL — skip this step if you're adding it to an existing repo instead).
2. Upload `index.html` and `content.js` to the root of that repo (drag-and-drop on GitHub's web UI works fine, or `git add`/`commit`/`push` if you're using Git locally).
3. In the repo's **Settings → Pages**, set the source to the `main` branch, root folder.
4. Give it a minute or two — your site will be live at `https://funke-b.github.io/`.

## Notes on this build

- Design is original — inspired by the structure of the reference site you shared (sticky nav, hero, timeline, live GitHub stats, filterable projects, certifications, contact), but with its own visual identity (a stock-ledger motif in the hero, a different palette and type system) and content drawn from what's already in your portfolio work: the ALX Maji Ndogo case study, the GlowHouse Cosmetics segmentation module, the Lumora Skincare workbook, and the Hush'D Makeover July 2026 report.
- The GitHub stats and contribution graph are live — they pull from `https://api.github.com` and `ghchart.rshah.org` using your GitHub username at page load, so no manual updating needed there.
- The contact form uses a plain `mailto:` link (opens the visitor's email client) instead of a third-party form service — no account or API key required. If you'd rather have messages land directly without opening an email client, a free service like Formspree or EmailJS can be dropped in later.
- No photo is wired in. If you want to add one, put the image file in the repo (e.g. `imgs/profile.jpg`) and swap in an `<img>` tag where the ledger card sits in `index.html`, or alongside it.
