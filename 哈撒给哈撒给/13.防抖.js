/*
 * @Author: This is CodeMan
 */
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
            clearTimeout(timer)
            timer = null
        }
        const  _this = this
        const args = [...arguments]
        timer = setTimeout(() => {
            fn.call(_this, ...args)
        }, wait)
    }
}

function f1() {
    console.log(11111)
}
const fn = debounce(f1, 1000)
fn()
fn()
fn()
