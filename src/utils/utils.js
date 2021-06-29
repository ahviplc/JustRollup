export default function call_me() {
    console.log("hello lc");
}

// 中国亲戚关系计算器库
import relationship from "relationship.js";

function call_you() {
    console.log('hello you')
}

export function call_diy_export_fun() {
    console.log('call_diy_export_fun')
}

const utils_obj = {
    call_me,
    call_you,
    relationship
}

// 所有方法和对象体
// 统一导出
export {utils_obj}

// 暴露回调函数 getJustRollupInfo 这个方法 来获取 JustRollup 这个lib的相关信息
// 参数 data 说明
// who 你是谁？
// mockStatus 模拟状态 1 成功 2 失败
// 参数 OBJECT 说明
// success	Function	是	接口调用成功的回调
// fail	Function	否	接口调用失败的回调函数
// complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
// 扩展知识点
// 使用 typeof OBJECT.success|fail|complete| 来判断是不是传入函数,来决定要不要去执行它
// 这样也可以保证 没有传入的回调 不去执行
// 因为 typeof OBJECT.complete = undefined 的话 if通不过的 不去执行的
// 还有 使用 try catch finally 也整好契合逻辑流程 可以捕捉错误异常 也可以在最后执行 finally
export function getJustRollupInfo(data = {who: undefined, mockStatus: undefined}, OBJECT = {
    success: undefined,
    complete: undefined,
    fail: undefined
}) {
    // 默认值初始化
    // data.who 如果外部未传的话 则给默认值 'LC'
    data.who = data.who || 'LC'
    // 打印
    // console.log('OBJECT', OBJECT)
    // console.log('typeof OBJECT.success', typeof OBJECT.success)
    // console.log('typeof OBJECT.fail', typeof OBJECT.fail)
    // console.log('typeof OBJECT.complete', typeof OBJECT.complete)
    // 返回对象returnData的封装
    // res 返回的 JustRollup 这个lib的相关信息
    // codeMsg 此code和msg的封装体
    // data 请求参数 映射过来
    // msg 传递msg
    // =============================================
    // 返回对象codeMsg的封装
    // code 返回码
    // msg 返回码说明 可以包含正常说明 也可以包含错误说明 异常说明
    // =============================================
    // 错误码具体说明
    // code 为 '0000' 代表 成功
    // code 为 '1001' 代表 业务逻辑错误
    // code 为 '9999' 代表 代码异常错误
    // code 为 '9527' 代表 其他错误
    // =============================================
    // 创建错误码返回对象的封装
    const codeMsg = {code: '', msg: ''}
    // 创建总的对象封装
    const returnData = {res: {author: 'LC', age: 18, desc: '这是一个全端适配使用js工具库.'}, codeMsg: codeMsg, data: data, msg: ""}
    returnData.msg = `Hello, ${data.who}`
    try {
        // 模拟成功
        if (data.mockStatus === 1) {
            codeMsg.code = '0000'
            codeMsg.msg = 'success'
            // 确保callback是一个函数
            if (typeof OBJECT.success === "function") {
                // 调用它，既然我们已经确定了它是可调用的
                return OBJECT.success(returnData);
            }
        } else if (data.mockStatus === 2) { // 模拟失败 业务逻辑上的失败反馈
            codeMsg.code = '1001'
            codeMsg.msg = 'fail mockStatus = 2,please try later.'
            // 确保callback是一个函数
            if (typeof OBJECT.fail === "function") {
                // 调用它，既然我们已经确定了它是可调用的
                return OBJECT.fail(codeMsg);
            }
        } else {
            codeMsg.code = '0000'
            codeMsg.msg = 'success '
            // 其他各种情况 返回 returnData
            codeMsg.msg = codeMsg.msg + returnData.msg + ' 这是data.mockStatus不是1也不是2的其他情况啊'
            // 确保callback是一个函数
            if (typeof OBJECT.success === "function") {
                // 调用它，既然我们已经确定了它是可调用的
                return OBJECT.success(returnData);
            }
        }
    } catch (err) {
        // 代码执行过程 捕获到异常 把其具体异常信息fail出去
        // console.log('catch err' , err)
        returnData.code = '9999'
        codeMsg.msg = 'fail ' + err
        // 确保callback是一个函数
        if (typeof OBJECT.fail === "function") {
            // 调用它，既然我们已经确定了它是可调用的
            return OBJECT.fail(codeMsg);
        }
    } finally {
        // 确保callback是一个函数
        if (typeof OBJECT.complete === "function") {
            // 调用它，既然我们已经确定了它是可调用的
            return OBJECT.complete();
        }
    }
}
