import dayjs from "dayjs";

const timerInfo = {
    name: 'timer',
    description: '时间处理工具.',
    version: 'v0.0.1'
}

const now = dayjs()

// 当前日期时间
function now_datetime() {
    return now.format('YYYY-MM-DD HH:mm:ss')
}

// 当前日期
function now_date() {
    return now.format('YYYY-MM-DD')
}

// 当前时间
function now_time() {
    return now.format('HH:mm:ss')
}

export {timerInfo, now_datetime, now_date, now_time}
