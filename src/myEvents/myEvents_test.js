// commonjs 规范代码
// .js 可省略
const myEvents = require('./myEvents')

// console.log('myEvents => ', myEvents);

// 提交触发
// 获取配置对象 options
const real_options = require('./options');
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

// myEvents.emit('onSuccess'); // onSuccess
// myEvents.emit('onFailed'); // onFailed

