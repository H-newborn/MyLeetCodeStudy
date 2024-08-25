/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:31:24
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-19 10:04:59
 * @FilePath: /MyLeetCodeStudy/哈撒给/9.手写call.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Function.prototype.myCall = function (context) {
    console.log(typeof this)
    if (typeof this !== 'function') {
        console.error("type error")
    }
    const args = [...arguments].slice(1)

    let result = null
    context.fn = this
    result = context.fn(...args)

    delete context.fn
    return result
}

const obj = {
    a: '111'
}

const a = '222'

function myText() {
    console.log(this.a)
}
myText.myCall(obj)
myText()
myText.call(obj)
myText.call()
myText.myCall()