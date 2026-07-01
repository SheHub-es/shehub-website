import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { createHtmlReport } from "axe-html-reporter";
import fs from "fs";

// Set PAGE_PATH to the route you wish to test
const baseUrl = "http://localhost:3000";
const pagePath = process.env.PAGE_PATH ?? "/about";
const url = `${baseUrl}${pagePath}`;
const slug = pagePath === "/" ? "home" : pagePath.replace(/^\/|\/$/g, "").replace(/\//g, "-");

test(`${pagePath} should have no WCAG A accessibility violations @WCAGA`, async ({ page }) => {
  await page.goto(url);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a"]).analyze();
  const dir = `test-results/accessibility-tests/${slug}/wcagA`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
  createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
  expect(results.violations).toEqual([]);
});

test(`${pagePath} should have no WCAG AA accessibility violations @WCAGAA`, async ({ page }) => {
  await page.goto(url);
  const results = await new AxeBuilder({ page }).withTags(["wcag2aa"]).analyze();
  const dir = `test-results/accessibility-tests/${slug}/wcagAA`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
  createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
  expect(results.violations).toEqual([]);
});

test(`${pagePath} should have no WCAG AAA accessibility violations @WCAGAAA`, async ({ page }) => {
  await page.goto(url);
  const results = await new AxeBuilder({ page }).withTags(["wcag2aaa"]).analyze();
  const dir = `test-results/accessibility-tests/${slug}/wcagAAA`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
  createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
  expect(results.violations).toEqual([]);
});
