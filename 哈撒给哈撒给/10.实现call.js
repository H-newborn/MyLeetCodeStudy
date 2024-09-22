/*
 * @Author: This is CodeMan
 */
Function.prototype.myCall = function (context, ...args) {
    context = context || window
    const fn = Symbol('')
    context[fn] = this
    context[fn](...args)
    delete context[fn]
}

function myFn(...args) {
    console.log(this.a, 'arr', ...args)
}

const obj = {
    a: '333'
}

myFn.myCall(obj, 2,3,4,5,6)
