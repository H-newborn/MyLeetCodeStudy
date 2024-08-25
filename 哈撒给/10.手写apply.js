/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:32:49
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-19 10:11:10
 * @FilePath: /MyLeetCodeStudy/哈撒给/10.手写apply.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Function.prototype.myApply = function myApply(context) {
    if (typeof this !== 'function') {
        console.error('type error')
    }
    const args = [...arguments].slice(1)
    context.fn = this
    let result = null
    result = context.fn(...args)
    delete context.fn
    return result
}

function myFn() {
    console.log(this.a)
}

const obj = {
    a: '333'
}

myFn.apply(obj)