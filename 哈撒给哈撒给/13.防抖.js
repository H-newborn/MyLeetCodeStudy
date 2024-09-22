/*
 * @Author: This is CodeMan
 */
function debounce(fn, wait) {
    let timer = null
    return function (...args) {
        if (timer) {
            timer = null
        }
        let _this = this
        timer = setTimeout(() => {
            fn.call(_this, ...args)
        }, wait)
    }
}
