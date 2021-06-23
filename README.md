<h1 align="center">Welcome to JustRollup 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> JustRollup,Rollup打包全平台JS库小demo.

`以下说明` **all tests pass**

`dist/cjs/index.js 可上传npm 或者直接node项目本地引入 cjs规范 可直接当个node的工具类库.`

`dist/esm/index.js 可上传npm 或者直接node项目本地引入 esm规范 package,json 中设置 "type": "module" 并且 需要 node 版本 >= 13 才可当个node的工具类库.`

`dist/JustRollup.min.js 将此引入浏览器端html页面,也可以当js工具类库.`

### 🏠 [Homepage-gitee](https://gitee.com/ahviplc/JustRollup)

### 🏠 [Homepage-github](https://github.com/ahviplc/JustRollup)

## Install

`安装依赖`

```sh
npm i
npm install
或者
yarn
yarn install
```

## Use

`打包`

```sh
npm run dev
npm run build
或者
yarn dev
yarn build
```

## Links

```markdown
https://github.com/rollup/rollup

https://www.rollupjs.com/

https://rollupjs.org/guide/en/#quick-start

https://github.com/kefranabg/readme-md-generator

https://hub.fastgit.org/daqianduanshuo/daynote

Rollup打包全平台JS库
https://www.bilibili.com/video/BV1bi4y1c7fU

使用Rollup打包JavaScript
https://www.jianshu.com/p/6a7413481bd2

rollup中的esm模块 和 cmd模块
https://juejin.cn/post/6932629330581258253

script标签之type = module
https://blog.csdn.net/chenyu1105811473/article/details/107642435

export default 和 export 的使用方式_sleepwalker_1992的专栏-CSDN博客
https://blog.csdn.net/sleepwalker_1992/article/details/81461543

export 和 export default 的区别 - 枫鸟~ - 博客园
https://www.cnblogs.com/fanyanzhao/p/10298543.html

Day.js · 中文文档 - 2kB 大小的 JavaScript 时间日期库
https://dayjs.gitee.io/zh-CN/

GitHub - iamkun/dayjs: ⏰ Day.js 2kB immutable date-time library alternative to Moment.js with the same modern API
https://github.com/iamkun/dayjs

package.json - iamkun/dayjs - GitHub1s
https://github1s.com/iamkun/dayjs/blob/HEAD/package.json

dayjs: ⏰ Day.js 2kB的时间日期库 Moment.js 的 轻量化方案
https://gitee.com/iamkun/dayjs

要使用node的其CommonJS规范的三方库 day.js 报如下错误:
Error: 'default' is not exported by node_modules\dayjs\dayjs.min.js, imported by src\timer\timer.js
下面文章 完美解决
Error: 'default' is not exported by node_modules\jquery\dist\jquery.js, imported by node_modules\bootstrap\js\src\util.js - 倚楼听雨vv - 博客园
https://www.cnblogs.com/shenfanzui/p/13157978.html

原来rollup这么简单之插件篇 - 小雨小雨丶 - 博客园
https://www.cnblogs.com/xiaoyuxy/p/12694566.html

Node模块之事件(events)详解_weixin_33858485的博客-CSDN博客
https://blog.csdn.net/weixin_33858485/article/details/91378203

Node.js模块里exports与module.exports的区别? - 知乎
https://www.zhihu.com/question/26621212

Creating a browser bundle that depends on "events". You might need to include https://github.com/ionic-team/rollup-plugin-node-polyfills
https://github.com/ionic-team/rollup-plugin-node-polyfills
【"rollup-plugin-node-polyfills": "^0.2.1",】 好像没效果 暂时这样

eventemitter3-rollup - npm
https://www.npmjs.com/package/eventemitter3-rollup

GitHub - primus/eventemitter3: EventEmitter3 - Because there's also a number 2. And we're faster.
https://github.com/primus/eventemitter3

rollup的使用说明 · Issue #21 · HuYuee/blog · GitHub
https://github.com/HuYuee/blog/issues/21

关于rollup的demo，基本把大部分情况的使用都涉及到了
GitHub - HuYuee/rollup-demo: rollup技术分享
https://github.com/HuYuee/rollup-demo
```

## note

```markdown
src/node-index.js
下添加
// 使用了node的内置模块 events 模块
// 导出 myEvents
import myEvents from './myEvents/myEvents'
export {myEvents}

打包到 dist/JustRollup.node.min.js
```

## Author

👤 **LC ahlc@sina.cn**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
