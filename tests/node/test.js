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
console.log(myLibrary.timerInfo); // { name: 'timer', description: '时间处理工具.', version: 'v0.0.1' }
console.log(myLibrary.now_datetime()); // 2021-06-22 18:13:11
console.log(myLibrary.now_date()); // 2021-06-22
console.log(myLibrary.now_time()); // 18:13:11

myLibrary.utils_obj.call_me() // hello lc
myLibrary.utils_obj.call_you() // hello you
myLibrary.call_diy_export_fun() // call_diy_export_fun

// 可用 relationship 三方模块
const options = {text: '爸爸的爸爸', sex: 1};
const result = myLibrary.utils_obj.relationship(options);
console.log(result); // [ '爷爷' ]

