export default function call_me() {
    console.log("hello lc");
}

// 中国亲戚关系计算器库
import relationship from "relationship.js";

function call_you() {
    console.log('hello you')
}

export function call_diy_export_fun(){
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
