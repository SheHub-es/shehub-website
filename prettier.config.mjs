import prettierPluginSortImports from '@trivago/prettier-plugin-sort-imports';

/** @type {import("prettier").Config} */
const config = {
  plugins: [prettierPluginSortImports],
  importOrder: ['^react', '^@/', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  semi: true
};

export default config;
