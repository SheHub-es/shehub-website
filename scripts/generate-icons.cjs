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

const ATTR_MAP = {
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-width": "strokeWidth",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "stroke-opacity": "strokeOpacity",
  "flood-color": "floodColor",
  "flood-opacity": "floodOpacity",
  "lighting-color": "lightingColor",
  "color-interpolation-filters": "colorInterpolationFilters",
  "xlink:href": "xlinkHref",
  "xmlns:xlink": "xmlnsXlink",
  "class=": "className=",
};

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".svg"));

files.forEach((file) => {
  const filePath = path.join(iconsDir, file);
  let svgContent = fs.readFileSync(filePath, "utf8");

  svgContent = svgContent
    .replace(/(<svg[^>]*?)\swidth="[^"]*"/, "$1")
    .replace(/(<svg[^>]*?)\sheight="[^"]*"/, "$1");

  let cleaned = svgContent.replace(
    /fill="(?!none)[^"]*"/g,
    'fill="currentColor"'
  );

  Object.entries(ATTR_MAP).forEach(([rawAttr, camelAttr]) => {
    if (rawAttr.endsWith("=")) {
      const regex = new RegExp(rawAttr, "g");
      cleaned = cleaned.replace(regex, camelAttr);
    } else {
      const regex = new RegExp(`${rawAttr}=`, "g");
      cleaned = cleaned.replace(regex, `${camelAttr}=`);
    }
  });

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

console.log("✨ All inline icon components generated (JSX-safe)!");
