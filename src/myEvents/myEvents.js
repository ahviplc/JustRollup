// commonjs 规范代码
// 可以打包出去 但是只能在 node 环境中执行使用 无论是 cjs 还是 esm 均可
// 这里通过 出口文件 src/node-index.js 进行打包
// 打包到 dist/JustRollup.node.min.js

// 这里使用的node模块自带的 events 模块
const EventEmitter = require('events');

// 继承 EventEmitter
class MyEvents extends EventEmitter {
}

const myEvents = new MyEvents();

let OnDoSth = (options = {who_do: undefined, when_do: undefined, doWhat: undefined}) => {
    console.log('OnDoSth');
    console.log('who_do, when_do, doWhat => ', options.who_do, options.when_do, options.doWhat)
    // 如果读书 就成功
    if (options.doWhat) {
        if (options.doWhat === 'reading') {
            myEvents.emit('onSuccess');
            return
        }
        // 如果玩游戏 就失败
        if (options.doWhat === 'gaming') {
            myEvents.emit('onFailed')
            return
        }
        console.log('doWhat, keep doing ' + options.doWhat)
    } else {
        console.log('doWhat, nothing , have a rest.')
    }
}

let onSuccess = () => {
    console.log('onSuccess');
}

let onFailed = () => {
    console.log('onFailed');
}

// 注册一下
myEvents.on('OnDoSth', OnDoSth);
myEvents.on('onSuccess', onSuccess);
myEvents.on('onFailed', onFailed);

// 导出 myEvents
// 以下写法都可以
// 写法一
// module.exports = myEvents
// 直接这样使用即可
// const myEvents = require('./myEvents')

// 一
module.exports = myEvents
// ==============================================
// src/node-index.js
// import myEvents from './myEvents/myEvents'
// export {myEvents}
// 测试 tests/node/test-node.js
// const JustRollupNode = require('../../dist/JustRollup.node.min');
// console.log(JustRollupNode.myEvents);
// ==============================================
// import myEventsObj from './myEvents/myEvents'
// export {myEventsObj}
// 测试 tests/node/test-node.js
// const JustRollupNode = require('../../dist/JustRollup.node.min');
// console.log(JustRollupNode.myEventsObj);
// ==============================================

// 二 还是使用 一
// module.exports.myEventsObj = myEvents
// ==============================================
// src/node-index.js
// import {myEventsObj} from './myEvents/myEvents'
// export {myEventsObj}
// 测试 tests/node/test-node.js
// const JustRollupNode = require('../../dist/JustRollup.node.min');
// console.log(JustRollupNode.myEventsObj);
// ==============================================

// 写法二
// module.exports.myEventsObj = myEvents
// 和
// exports.myEventsObj = myEvents
// 都是下面这样使用
// let myEvents = require('./myEvents')
// myEvents = myEvents.myEventsObj

// ===================================================================================================
// 注意点
// nodejs中，module.exports初始的时候置为{},exports也指向这个空对象。
// exports是对module.exports的引用，也就是exports现在指向的内存地址和module.exports指向的内存地址是一样的
// 所以 不可以
// 不可以 exports = XXX; 假如这样的话 exports的指向就发生了改变 原来的地址 原来的指向 没有半毛钱关系了


