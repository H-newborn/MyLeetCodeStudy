/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:30:37
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-08 18:10:08
 * @FilePath: /MyLeetCodeStudy/哈撒给/6.节流.js
 * @Description: 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 */
function throttle(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        const _this = this
        const args = arguments
        timer = setTimeout(function () {
            fn.apply(_this, args)
            timer = null
        }, wait)
    }
}

function throttle(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        let _this = this
        let args = arguments
        timer = setTimeout(() => {
            fn.apply(_this, args)
            timer = null
        }, wait)
    }
}