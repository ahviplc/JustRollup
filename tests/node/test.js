// 测试 CommonJs 和 umd
// 以下均可
// package,json 中设置 "type": "commonjs", 这也是默认 才可运行.
// 可省略.js后缀
// cjs（CommonJs）
// const myLibrary = require('../../dist/cjs/index');
// umd 这个模块 支持浏览器和node环境
const myLibrary = require('../../dist/JustRollup.min');
console.log(myLibrary);
myLibrary.hello(); // hello
myLibrary.goodbye(); // goodbye
myLibrary.cm() // hello lc
