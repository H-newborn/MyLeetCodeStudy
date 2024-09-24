/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
function debounce(fn, wait) {
    let timer = null
    return function () {
        if (timer) {
            timer = null
        }
        const  _this = this
        const args = [...arguments]
        timer = setTimeout(() => {
            fn.call(_this, ...args)
        }, wait)
    }
}
