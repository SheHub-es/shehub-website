import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";

const reportsDir = "test-results/accessibility-tests";
const outputDir = "test-results/accessibility-pdfs";

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const pageName of fs.readdirSync(reportsDir)) {
    const pageDir = path.join(reportsDir, pageName);
    if (!fs.statSync(pageDir).isDirectory()) continue;

    for (const level of fs.readdirSync(pageDir)) {
      const htmlPath = path.join(pageDir, level, "report.html");
      if (!fs.existsSync(htmlPath)) continue;

      const levelLower = level.replace("wcag", "").toLowerCase();
      const pdfName = `results-${pageName}-${levelLower}.pdf`;
      const pdfPath = path.join(outputDir, pdfName);

      await page.goto(`file://${path.resolve(htmlPath)}`);
      await page.pdf({ path: pdfPath, format: "A4", printBackground: true });

      console.log(`Created: ${pdfName}`);
    }
  }

  await browser.close();
  console.log(`\nAll PDFs saved to ${outputDir}`);
}

main();
