import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { createHtmlReport } from "axe-html-reporter";
import fs from "fs";

test("Mentors page should have no WCAG A accessibility violations @WCAGA", async ({ page }) => {
  await page.goto("https://shehub.es/mentors");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a"]).analyze();
  const dir = "test-results/accessibility-tests/mentors/wcagA";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
  createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
  expect(results.violations).toEqual([]);
});

test("Mentors page should have no WCAG AA accessibility violations @WCAGAA", async ({ page }) => {
  await page.goto("https://shehub.es/mentors");
  const results = await new AxeBuilder({ page }).withTags(["wcag2aa"]).analyze();
  const dir = "test-results/accessibility-tests/mentors/wcagAA";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
  createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
  expect(results.violations).toEqual([]);
});

test("Mentors page should have no WCAG AAA accessibility violations @WCAGAAA", async ({ page }) => {
  await page.goto("https://shehub.es/mentors");
  const results = await new AxeBuilder({ page }).withTags(["wcag2aaa"]).analyze();
  const dir = "test-results/accessibility-tests/mentors/wcagAAA";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
  createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
  expect(results.violations).toEqual([]);
});
