/*
 * @Author: This is CodeMan
 */
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

function f1() {
    console.log(11111)
}
const fn = throttle(f1, 1000)
fn()
fn()
fn()