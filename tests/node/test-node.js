// JustRollup.node.min
// 可以保证 node环境肯定可用 而因为引用了node内置模块 其浏览器环境 不一定可用 使用时 请注意核查

const JustRollupNode = require('../../dist/JustRollup.node.min');

// src/myEvents 打包出去的话 下面会有值的
// console.log('JustRollupNode => ', JustRollupNode);
// JustRollupNode.hello()
console.log(JustRollupNode.myEvents);
console.log('===========================================');
// 使用
let myEvents = JustRollupNode.myEvents

// 提交触发
// 获取配置对象 options
const real_options = require('../../src/myEvents/options');
console.log('real_options => ', real_options);
console.log('===========================================');

// 直接开始 OnDoSth
myEvents.emit('OnDoSth', real_options);
// 改成读书 再次调用
real_options.doWhat = 'reading'
myEvents.emit('OnDoSth', real_options);

// 改成其他 再次调用
real_options.doWhat = 'sleeping'
myEvents.emit('OnDoSth', real_options);

// 改成其他 再次调用
// 不做事
real_options.doWhat = '' || undefined
myEvents.emit('OnDoSth', real_options);

// 另外一个模块的测试
JustRollupNode.utils_obj.call_me() // hello lc
JustRollupNode.utils_obj.call_you() // hello you
JustRollupNode.call_diy_export_fun() // call_diy_export_fun

// 可用 relationship 三方模块
const options = {text: '爸爸的妹妹', sex: 1};
const result = JustRollupNode.utils_obj.relationship(options);
console.log(result); // [ '姑姐' ]

// 测试 暴露回调函数 getJustRollupInfo 这个方法 来获取 JustRollup 这个lib的相关信息
// mockStatus: 1 成功回调会执行
// mockStatus: 2 失败回调会执行
// mockStatus: X 成功回调会执行 返回其他情况逻辑
JustRollupNode.getJustRollupInfo({mockStatus: 3}, {
    success: function (res) {
        console.log('res', res);
    },
    fail: (err) => {
        console.log('err', err);
    },
    complete: () => {
        console.log("done")
    }
})

// 输出
// res {
//     res: { author: 'LC', age: 18, desc: '这是一个全端适配使用js工具库.' },
//     codeMsg: {
//         code: '0000',
//             msg: 'success Hello, LC 这是data.mockStatus不是1也不是2的其他情况啊'
//     },
//     data: { mockStatus: 3, who: 'LC' },
//     msg: 'Hello, LC'
// }
// done

JustRollupNode.getJustRollupInfo({mockStatus: 3, who: 'shviplc'}, {
    success: function (res) {
        console.log('res', res);
    },
    fail: (err) => {
        console.log('err', err);
    },
    complete: () => {
        console.log("done")
    }
})

// 输出
// res {
//     res: { author: 'LC', age: 18, desc: '这是一个全端适配使用js工具库.' },
//     codeMsg: {
//         code: '0000',
//             msg: 'success Hello, shviplc 这是data.mockStatus不是1也不是2的其他情况啊'
//     },
//     data: { mockStatus: 3, who: 'shviplc' },
//     msg: 'Hello, shviplc'
// }
// done

// ================================= 输出 =================================

// JustRollupNode =>  {
//     call_diy_export_fun: [Function (anonymous)],
//         cm: [Function: n],
//     goodbye: [Function (anonymous)],
//         hello: [Function (anonymous)],
//         myEvents: EventEmitter {
//         _events: [Object: null prototype] {
//             OnDoSth: [Function (anonymous)],
//                 onSuccess: [Function (anonymous)],
//                 onFailed: [Function (anonymous)]
//         },
//         _eventsCount: 3,
//             _maxListeners: undefined,
//             [Symbol(kCapture)]: false
//     },
//     _events: [Object: null prototype] {
//         OnDoSth: [Function (anonymous)],
//             onSuccess: [Function (anonymous)],
//             onFailed: [Function (anonymous)]
//     },
//     _eventsCount: 3,
//         _maxListeners: undefined,
//         [Symbol(kCapture)]: false
// }

