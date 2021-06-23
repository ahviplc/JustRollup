import {nodeResolve} from "@rollup/plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import commonjs from '@rollup/plugin-commonjs'

// input 可以保证 node环境和浏览器环境 肯定都可用 也就是不会引用了node内置模块 即使用了 也会去兼容node环境和浏览器环境
const input = ["src/index.js"];
// node_input 可以保证 node环境肯定可用 而因为引用了node内置模块 其浏览器环境 不一定可用 使用时 请注意核查
const node_input = ["src/node-index.js"];

export default [
    {
        // UMD
        // 浏览器 node 环境都支持
        // 但是
        // 可以保证 node环境和浏览器环境 肯定都可用
        input, // 和  input:input, 等价
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({
                babelHelpers: "bundled",
            }),
            terser(),
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
    {
        // UMD
        // 浏览器 node 环境都支持
        // 但是
        // 可以保证 node环境肯定可用
        input: node_input,
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({
                babelHelpers: "bundled",
            }),
            terser(),
        ],
        output: {
            file: `dist/${pkg.name}.node.min.js`,
            format: "umd",
            name: "JustRollup-node", // this is the name of the global object
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
    },
    {
        // ESM and CJS
        // node 环境支持
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
