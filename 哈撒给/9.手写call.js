/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:31:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-15 22:58:35
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
    // 给对象添加属性方法，为调用call的方法
    context.fn = this
    result = context.fn(...args)
    delete context.fn
    // result = this(...args)
    // return result
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
// myText.myCall()

Function.prototype.myCall = function (obj) {
    const args = [...arguments].slice(1)
    const context = [...arguments][0]
    
    const fn = Symbol('fn')
    context[fn] = this
    context[fn](args)
    delete context[fn]
}

myCall.call(this, args)