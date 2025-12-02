const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "..", "src", "assets", "images", "icons");
const outDir = path.join(__dirname, "..", "src", "components", "icons");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const toComponentName = (fileName) => {
  const base = fileName.replace(/\.svg$/i, "");
  return (
    base
      .split(/[-_ ]+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")
  );
};

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".svg"));

files.forEach((file) => {
  const filePath = path.join(iconsDir, file);
  const svgContent = fs.readFileSync(filePath, "utf8");

  const cleaned = svgContent
    .replace(/width="[^"]*"/g, '')
    .replace(/height="[^"]*"/g, '')
    .replace(/fill="[^"]*"/g, 'fill="currentColor"');

  const componentName = toComponentName(file);

  const tsx = `
import React from "react";

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (
  ${cleaned.replace("<svg", "<svg {...props}")}
);

export default ${componentName};
`;

  const outPath = path.join(outDir, `${componentName}.tsx`);
  fs.writeFileSync(outPath, tsx, "utf8");

  console.log("Generated:", componentName);
});

console.log("✨ All inline icon components generated!");
