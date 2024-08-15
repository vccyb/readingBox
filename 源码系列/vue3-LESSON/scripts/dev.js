//  打包packages下的模块，最终打包出js文件

import minimist from "minimist";
import { createRequire } from "module";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import esbuild from "esbuild";

const args = minimist(process.argv.slice(2)); // 去掉node和当前文件名
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(__dirname, __filename, import.meta.url);
const require = createRequire(import.meta.url);

const target = args._[0] || "reactivity"; // 默认打包reactivity模块
const format = args.f || "iife"; // 默认打包成iife格式

console.log(target, format);

//入口文件 根据命令行提供的路径进行解析
const entry = resolve(__dirname, `../packages/${target}/src/index.ts`);
const pkg = require(`../packages/${target}/package.json`);

esbuild
  .context({
    entryPoints: [entry], // 入口
    outfile: resolve(__dirname, `../packages/${target}/dist/${target}.js`), // 出口
    bundle: true, // 打包
    platform: "browser", // 打包后给浏览器环境
    sourcemap: true, // 生成sourcemap文件
    format, // cjs esm iife
    globalName: pkg.buildOptions?.name,
  })
  .then((ctx) => {
    console.log("start dev");
    return ctx.watch(); // 监控入口文件持续打包
  });
