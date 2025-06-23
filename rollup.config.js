import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import copy from "rollup-plugin-copy";
import peerDeepsEternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const fs = require("fs");
const path = require("path");

const packageJson = require("./package.json");

const plugins = [
  peerDeepsEternal(),
  url(),
  json(),
  resolve({ extensions: [".jsx", ".js"] }),
  commonjs(),
  babel({
    extensions: [".jsx", ".js"],
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  postcss({
    extensions: [".css"],
  }),
  copy({
    targets: [{ src: "src/assets/*", dest: "dist/assets" }],
  }),
];

function findFoldersWithIndexJsx(rootDir, pathFolder) {
  const folders = [];
  const stack = [rootDir];

  while (stack.length) {
    const currentDir = stack.pop();
    const files = fs.readdirSync(currentDir);

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        if (fs.existsSync(path.join(filePath, "index.jsx"))) {
          folders.push(filePath);
        } else {
          stack.push(filePath);
        }
      }
    }
  }
  return folders.map((e) => e.replace(pathFolder, ""));
}

const getFolders = (entry, pathFolder) =>
  findFoldersWithIndexJsx(entry, pathFolder);

const componentFolders = getFolders("./src/components", "src/components").map(
  (folder) => ({
    input: `./src/components/${folder}/index.jsx`,
    output: [
      {
        file: `dist/esm/${folder}/index.js`,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: `dist/cjs/${folder}/index.js`,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins,
  }),
);

const pagesFolders = getFolders("./src/pages", "src/pages").map((folder) => ({
  input: `./src/pages/${folder}/index.jsx`,
  output: [
    {
      file: `dist/esm/${folder}/index.js`,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
    {
      file: `dist/cjs/${folder}/index.js`,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins,
}));

export default [
  {
    input: ["src/index.js"],
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins,
  },
  ...componentFolders,
  ...pagesFolders,
];
