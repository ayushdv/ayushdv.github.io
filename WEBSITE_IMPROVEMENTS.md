# Website Improvement Ideas (GitHub Pages / Jekyll)

This list is prioritized for high impact with low maintenance cost.

## 1) Performance wins

- **Compress and resize images** before committing (target <250 KB for content images where possible).
- **Convert large JPG/PNG files to WebP** and keep originals only when needed.
- **Preload only critical assets** (hero image/fonts) and lazy-load everything below the fold.
- **Reduce third-party script footprint** (analytics/chat/widgets) unless they provide clear value.

## 2) Better content UX

- Add a **clear homepage value proposition**: who you are, what you work on, and what to click first.
- Add **featured projects/publications** on the homepage with one-line outcomes.
- Add a **Now / Updates section** to keep the site feeling current.
- Add **CTA buttons** on About page (CV, email, Google Scholar, GitHub).

## 3) SEO and discoverability

- Fill `description`, `social.links`, and author academic profiles in `_config.yml`.
- Add custom **Open Graph image** and per-page descriptions.
- Ensure each page has one strong H1 and descriptive titles.
- Submit sitemap to Search Console and validate indexing.

## 4) Code quality and maintenance

- Keep content metadata consistent (title/date/venue/citation schema).
- Add a lightweight CI workflow for `jekyll build` and link checks.
- Document publishing workflow in README (new post, new publication, deploy checks).
- Periodically remove stale draft/template pages from navigation.

## 5) Accessibility

- Audit and improve alt text quality (descriptive, not generic).
- Verify color contrast and keyboard focus visibility.
- Ensure links/buttons have clear accessible labels.

## 6) Useful next automation

- Add an image optimization script (batch WebP + dimension checks).
- Add a pre-commit hook for front matter validation.
- Add a script to warn about missing `description`, `teaser`, and alt text.
