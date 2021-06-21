// 测试 esm（ES Module）
// 直接运行 报 Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// 其实
// package,json 中设置 "type": "module", 才可运行. 这个项目配置默认为 "type": "commonjs",
// 注意此项配置 需要 node 版本 >= 13
// 这里文件的index.js 不可省略.js后缀
// 注意 如果使用 export default all_in;
// 则 import all_in from '../../dist/esm/index.js'
// console.log(all_in);
// 如果 export { call_me as cm, goodbye, hello };
// 则就只能进行解构操作
// import {cm, hello, goodbye} from '../../dist/esm/index.js'

// 所以下面代码为解构代码 把每个方法名拿出 直接调用即可
import {cm, hello, goodbye} from '../../dist/esm/index.js'

goodbye()
hello()
cm()
