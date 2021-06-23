// events模块 使用配置对象 options
const options = {
    who_do: 'lc',
    when_do: "today",
    doWhat: "gaming"
}

module.exports = options
// { who_do: 'lc', when_do: 'today', doWhat: 'gaming' }

// module.exports.options = options // 或者写成 exports.options = options
// { options: { who_do: 'lc', when_do: 'today', doWhat: 'gaming' } }
