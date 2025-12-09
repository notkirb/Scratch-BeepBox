import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import fs from "fs";

export default {
  input: "src/extension.js",
  output: {
    file: "dist/extension.js",
    format: "iife",
    name: "scratchbeepbox",
    sourcemap: false,
    banner: fs.readFileSync("src/vendor/beepbox_synth.min.js", "utf8")
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};
