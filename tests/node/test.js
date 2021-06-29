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

// 测试 暴露回调函数 getJustRollupInfo 这个方法 来获取 JustRollup 这个lib的相关信息
// mockStatus: 1 成功回调会执行
// mockStatus: 2 失败回调会执行
// mockStatus: X 成功回调会执行 返回其他情况逻辑
myLibrary.getJustRollupInfo({mockStatus: 1}, {
    success: function (res) {
        console.log('res', res);
    },
    fail: (err) => {
        console.log('err', err);
    },
    complete: () => {
        console.log("done") // done
    }
})

// tests/node/test.js:34 输出
// res {
//     res: { author: 'LC', age: 18, desc: '这是一个全端适配使用js工具库.' },
//     codeMsg: { code: '0000', msg: 'success' },
//     data: { mockStatus: 1, who: 'LC' },
//     msg: 'Hello, LC'
// }

