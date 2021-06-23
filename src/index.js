// 注意 下面的导出集 都是在 esm 规范下
// 这边的导出 可以保证 node环境和浏览器环境 肯定都可用 也就是不会引用了node内置模块 即使用了 也会去兼容node环境和浏览器环境
// 也就是说 不会引用了 node 的一些内置模块 因为这样的话 可能浏览器环境就不支持了 使用时 请注意核查
export {default as hello} from "./hello";
export {default as goodbye} from "./goodbye";
export {default as cm} from "./utils"

// 其他方式 一样的导出 一样的用 只要符合语法格式即可
import {timerInfo, now_datetime, now_date, now_time} from "./timer/timer";

export {timerInfo, now_datetime, now_date, now_time}
