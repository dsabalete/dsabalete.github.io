# Project Guidelines

## Code Style
- SCSS is organized into numbered sections with variables/mixins at the top; see [scss/styles.scss](../scss/styles.scss).
- JavaScript is jQuery-based and wrapped in a single IIFE; see [js/scripts.js](../js/scripts.js).
- The HTML is a single-page layout with section IDs and anchor navigation in [index.html](../index.html).

## Architecture
- Static single-page portfolio site; sections are defined in [index.html](../index.html) and styled by compiled CSS.
- Source styles live in [scss/styles.scss](../scss/styles.scss) and compile to [css/styles.css](../css/styles.css).
- Source scripts live in [js/scripts.js](../js/scripts.js) and compile to [js/scripts.min.js](../js/scripts.min.js).

## Build and Test
- Install dependencies: `npm install`.
- Watch/compile assets: `npm run watch` (runs `gulp watch`).
- No test tooling is configured in [package.json](../package.json).

## Project Conventions
- Edit source files only: SCSS and JS are compiled/minified to `css/` and `js/` outputs; see [gulpfile.js](../gulpfile.js).
- Asset layout is fixed: `css/`, `scss/`, `js/`, `images/`, `libs/` (Font Awesome vendored).
- Tailwind utilities are loaded via [css/tailwind.css](../css/tailwind.css) alongside custom styles.

## Integration Points
- Google Tag Manager and Google Analytics scripts are embedded in [index.html](../index.html).
- External assets: Google Fonts and Font Awesome CSS are referenced in [index.html](../index.html).

## Security
- External scripts and fonts load from third-party domains; review changes in [index.html](../index.html) carefully.
- External links often use `target="_blank"`; consider adding `rel="noopener noreferrer"` when editing links.
