/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:30:23
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-01 20:55:30
 * @FilePath: /MyLeetCodeStudy/哈撒给/5.防抖.js
 * @Description: 触发高频事件后n秒内只会执行一次，如果n秒内再次出发，则重新计算时间，例如input输入框
 */

function debounce(fn, wait) {
    let timer
    return function () {
        let _this = this
        let args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.apply(_this, args)
        }, wait)
    }
}


function debounce1(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            timer = null
        }
        timer = setTimeout(() => {
            fn(this, arguments)
        }, wait)
    }
}