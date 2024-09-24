/*
 * @Author: This is CodeMan
 */
function throttle(fn, wait) {
    let timer = null
    return function () {
        const _this = this
        const args = [...arguments]
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(_this, args)
            }, wait)
        }
    }
}