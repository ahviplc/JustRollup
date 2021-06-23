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
import {
    cm,
    hello,
    goodbye,
    timerInfo,
    now_datetime,
    now_time,
    now_date,
    call_diy_export_fun,
    utils_obj
} from '../../dist/esm/index.js'

goodbye()
hello()
cm()
console.log(timerInfo);
console.log(now_datetime());
console.log(now_date());
console.log(now_time());

// console.log(utils_obj);
utils_obj.call_me() // hello lc
utils_obj.call_you() // hello you
call_diy_export_fun() // call_diy_export_fun
// 可用 relationship 三方模块
const options = {text: '爸爸的妈妈', sex: 1};
const result = utils_obj.relationship(options);
console.log(result); // [ '奶奶' ]

// src/myEvents 打包出去的话 下面会有值的
// import {myEvents} from '../../dist/esm/index.js'
// console.log(myEvents);

// --------------------------输出展示--------------------------
// goodbye
// hello
// hello lc
// { name: 'timer', description: '时间处理工具.', version: 'v0.0.1' }
// 2021-06-22 18:14:17
// 2021-06-22
// 18:14:17

// MyEvents {
//     _events: [Object: null prototype] {
//         OnDoSth: [Function: OnDoSth],
//         onSuccess: [Function: onSuccess],
//         onFailed: [Function: onFailed]
//     },
//     _eventsCount: 3,
//         _maxListeners: undefined,
//         [Symbol(kCapture)]: false
// }

// --------------------------输出展示--------------------------


