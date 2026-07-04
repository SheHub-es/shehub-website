# Accessibility Testing Guide

This guide covers the accessibility (a11y) test suite in
`tests/accessibility/`: what it does, its limitations, how to install and run
it, and how to interpret the results.

## Overview, use, and limitations

### What it does

Each page test uses [Playwright](https://playwright.dev/) with
[axe-core](https://github.com/dequelabs/axe-core) (via
`@axe-core/playwright`) to scan a page for accessibility issues against the
WCAG 2 standard. Every page has three tests, tagged:

- `@WCAGA` — WCAG 2 Level A
- `@WCAGAA` — WCAG 2 Level AA
- `@WCAGAAA` — WCAG 2 Level AAA

Each test:

1. Loads the page.
2. Runs an axe-core scan for that WCAG level.
3. Writes a JSON report and an HTML report to
   `test-results/accessibility-tests/<page>/<level>/`.
4. Fails if axe-core finds any violations at that level.

### Existing page specs (`about.spec.ts`, `contact.spec.ts`, etc.)

These run against the **live deployed site** (`https://shehub.es/...`). Use
them to check production.

### Dev page spec (`dev-page.spec.ts`)

Use this while working locally on a page — including new pages that don't
have a dedicated spec yet. It runs against `http://localhost:3000`, and the
route is set via the `PAGE_PATH` environment variable (defaults to `/`).

Once a page is stable and merged, copy `dev-page.spec.ts` into a dedicated
`<page>.spec.ts` file (following the pattern of `about.spec.ts`), point it at
the production URL, and remove the `PAGE_PATH` logic.

### Limitations

- **Automated scans don't catch everything.** axe-core can reliably detect
  roughly 30-50% of WCAG issues — missing alt text, color contrast, missing
  form labels, ARIA misuse, heading order, etc. — but cannot judge whether
  alt text is *meaningful*, whether tab order is logical, or whether content
  is genuinely understandable. Manual testing (keyboard navigation, screen
  readers) is still required for full WCAG compliance.
- **AAA is very strict.** Many sites cannot realistically meet every AAA
  criterion (e.g. some color contrast and language requirements). A failing
  `@WCAGAAA` test is informative but may not be a "must fix".
- **Dynamic content.** Content that loads after the initial render
  (animations, lazy-loaded sections, modals) may not be present when the scan
  runs unless the test explicitly waits for or interacts with it.
- **Local dev server required for `dev-page.spec.ts`.** It will fail to
  connect if `pnpm dev` isn't running on port 3000.

## Quick start: test a page you're working on

New to this test suite? Here's the simplest way to check a page you're
building or editing locally.

1. Install Playwright's browsers (only needed once):
   ```bash
   pnpm exec playwright install
   ```
2. Start the dev server in one terminal:
   ```bash
   pnpm dev
   ```
3. In a second terminal, run the accessibility scan against the page you're
   working on (replace `/about` with your route):
   ```bash
   PAGE_PATH=/about pnpm exec playwright test tests/accessibility/dev-page.spec.ts
   ```
4. Turn the results into PDF reports you can open and share:
   ```bash
   pnpm run export:accessibility-pdfs
   ```
5. Open the PDFs, found in `test-results/accessibility-pdfs/`:
   ```bash
   open test-results/accessibility-pdfs/
   ```

Each PDF is named `results-dev-page-<level>.pdf` (one per WCAG level: A, AA,
AAA). Fix any `critical` or `serious` violations first.

## Installing Playwright

From the project root:

```bash
pnpm install
pnpm exec playwright install
```

`pnpm exec playwright install` downloads the browser binaries (Chromium,
Firefox, WebKit) used by the projects defined in `playwright.config.ts`.

## Running tests

### All accessibility tests (live site specs + dev page spec)

```bash
pnpm exec playwright test tests/accessibility
```

### A single page's test

```bash
pnpm exec playwright test tests/accessibility/about.spec.ts
```

### Only a specific WCAG level (using tags)

```bash
pnpm exec playwright test tests/accessibility --grep @WCAGAA
```

### Dev page test against your local server

1. Start the dev server in another terminal:

   ```bash
   pnpm dev
   ```

2. Run the test, setting `PAGE_PATH` to the route you're working on
   (defaults to `/` if not set):

   ```bash
   PAGE_PATH=/evolution pnpm exec playwright test tests/accessibility/dev-page.spec.ts
   ```

   On Windows (PowerShell):

   ```powershell
   $env:PAGE_PATH="/evolution"; pnpm exec playwright test tests/accessibility/dev-page.spec.ts
   ```

### View the Playwright HTML report

After any run:

```bash
pnpm exec playwright show-report
```

## Interpreting results

### Terminal output

Playwright prints a pass/fail summary per test (e.g.
`/evolution should have no WCAG AA accessibility violations @WCAGAA`). A
failing test means axe-core found one or more violations at that WCAG level.

### JSON report (`test-results/accessibility-tests/<page>/<level>/report.json`)

This is the raw axe-core results object. Key fields:

- `violations`: array of issues found. Each violation has:
  - `id`: rule identifier (e.g. `color-contrast`, `image-alt`)
  - `impact`: severity — `minor`, `moderate`, `serious`, or `critical`
  - `description` / `help`: what the rule checks and why it matters
  - `helpUrl`: link to axe-core docs explaining the rule and how to fix it
  - `nodes`: the specific HTML elements that failed, with a `target` (CSS
    selector) and `failureSummary` describing the fix
- `passes`: rules that were checked and passed (useful for confirming
  coverage)
- `incomplete`: checks axe-core couldn't fully automate — review manually
- `inapplicable`: rules that didn't apply to this page

### HTML report (`test-results/accessibility-tests/<page>/<level>/report.html`)

A human-readable version of the JSON report. Open it directly in a browser.
It groups violations by rule, shows the affected element's HTML snippet, and
links to remediation guidance — this is the best starting point for fixing
issues.

### Typical workflow

1. Run the relevant test (a live page spec, or `dev-page.spec.ts` while
   developing locally).
2. If it fails, open the corresponding `report.html`.
3. For each violation, prioritize by `impact` (`critical` and `serious`
   first).
4. Follow the `helpUrl` link for guidance, fix the markup/styles, and re-run
   the test.
5. Once `@WCAGA` and `@WCAGAA` pass, treat `@WCAGAAA` failures as
   improvements to consider rather than hard blockers, unless the project
   requires AAA compliance.
