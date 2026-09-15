import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { createHtmlReport } from "axe-html-reporter";
import fs from "fs";

const baseUrl = "https://shehub.es";

const ALL_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/collaborators",
  "/mentors",
  "/partners",
  "/join",
  "/evolution",
  "/privacy",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-settings",
];

const pagePaths = process.env.A11Y_ALL === "true" ? ALL_ROUTES : [process.env.PAGE_PATH ?? "/"];

async function rejectCookieBanner(page: import("@playwright/test").Page) {
  const declineButton = page.getByTestId("cookie-banner-decline-all");
  if (await declineButton.count()) {
    await declineButton.click();
    await declineButton.waitFor({ state: "detached", timeout: 5000 }).catch(() => {});
  }
}

for (const pagePath of pagePaths) {
  const url = `${baseUrl}${pagePath}`;
  const slug = pagePath === "/" ? "home" : pagePath.slice(1);

  test.describe(pagePath, () => {
    test(`${pagePath} should have no WCAG A accessibility violations @WCAGA`, async ({ page }) => {
      await page.goto(url);
      await rejectCookieBanner(page);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a"]).analyze();
      const dir = `test-results/accessibility-tests/${slug}/wcagA`;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
      createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
      expect(results.violations).toEqual([]);
    });

    test(`${pagePath} should have no WCAG AA accessibility violations @WCAGAA`, async ({ page }) => {
      await page.goto(url);
      await rejectCookieBanner(page);
      const results = await new AxeBuilder({ page }).withTags(["wcag2aa"]).analyze();
      const dir = `test-results/accessibility-tests/${slug}/wcagAA`;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
      createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
      expect(results.violations).toEqual([]);
    });

    test(`${pagePath} should have no WCAG AAA accessibility violations @WCAGAAA`, async ({ page }) => {
      await page.goto(url);
      await rejectCookieBanner(page);
      const results = await new AxeBuilder({ page }).withTags(["wcag2aaa"]).analyze();
      const dir = `test-results/accessibility-tests/${slug}/wcagAAA`;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(`${dir}/report.json`, JSON.stringify(results, null, 2));
      createHtmlReport({ results, options: { reportFileName: "report.html", outputDir: dir } });
      expect(results.violations).toEqual([]);
    });
  });
}
