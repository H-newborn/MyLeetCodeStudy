/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:02:11
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-06 21:12:14
 * @FilePath: /MyLeetCodeStudy/哈撒给/1.函数只执行一次.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function once(fn) {
    let res = null
    return function (...args) {
        if (!fn) { return res }
        res = fn(...args)
        fn = null
        return res
    }
}

const a = once((a, b) => { return a + b })
console.log(a(1, 2))
console.log(a(3, 4))