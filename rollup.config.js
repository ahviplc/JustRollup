import {nodeResolve} from "@rollup/plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import commonjs from '@rollup/plugin-commonjs'

const input = ["src/index.js"];
export default [
    {
        // UMD
        // 浏览器 node 环境都支持
        input,
        plugins: [
            nodeResolve(),
            babel({
                babelHelpers: "bundled",
            }),
            terser(),
            commonjs(),
        ],
        output: {
            file: `dist/${pkg.name}.min.js`,
            format: "umd",
            name: "JustRollup", // this is the name of the global object
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
    },
    // ESM and CJS
    // node 环境支持
    {
        input,
        plugins: [nodeResolve(), commonjs(),],
        output: [
            {
                dir: "dist/esm",
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                exports: "named",
                sourcemap: true,
            },
        ],
    },
];
