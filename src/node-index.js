// 注意 下面的导出集 都是在 esm 规范下
// 这边的导出 可以保证 node环境肯定可用 而因为引用了node内置模块 其浏览器环境 不一定可用 使用时 请注意核查
// 也就是说 会引用了 node 的一些内置模块 这样的话 可能浏览器环境就不支持了 但是 node环境肯定支持
export {default as hello} from "./hello";
export {default as goodbye} from "./goodbye";
export {default as cm} from "./utils"

// 其他方式 一样的导出 一样的用 只要符合语法格式即可
import {timerInfo, now_datetime, now_date, now_time} from "./timer/timer";

export {timerInfo, now_datetime, now_date, now_time}

// 使用了node的内置模块 events 模块
// 导出 myEvents
import myEvents from './myEvents/myEvents'

export {myEvents}

// 统一出口文件 index.js
// 再次 导入 导出 utils_obj
// utils_obj 是 utils 下所有方法和对象体的封装对象
// call_diy_export_fun 自己直接 export 出来的
// relationship.js 这个亲戚算法 是node环境和浏览器环境 均可使用
// 暴露回调函数 getJustRollupInfo 这个方法 来获取 JustRollup 这个lib的相关信息
import {call_diy_export_fun, utils_obj, getJustRollupInfo} from "./utils/utils";

export {call_diy_export_fun, utils_obj, getJustRollupInfo}
