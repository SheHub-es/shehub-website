const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "..", "src", "assets", "images", "icons");
const outDir = path.join(__dirname, "..", "src", "components", "icons");

const toComponentName = (fileName) => {
  const base = fileName.replace(/\.svg$/i, "");
  return (
    base
      .split(/[-_ ]+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")
  );
};

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".svg"));

files.forEach((file) => {
  const componentName = toComponentName(file);

  const tsx = `import React from "react";
import { Icon, type IconProps } from "@/components/ui/Icon";
import Svg from "@/assets/images/icons/${file}";

export type ${componentName}Props = Omit<IconProps, "icon">;

export const ${componentName}: React.FC<${componentName}Props> = (props) => (
  <Icon icon={Svg} {...props} />
);
`;

  const outPath = path.join(outDir, `${componentName}.tsx`);
  fs.writeFileSync(outPath, tsx, "utf8");
  console.log("Generated:", componentName);
});

console.log("✅ All icon components generated!");
