/*
 * @Author: This is CodeMan
 */
Function.prototype.myApply = function (context, ...args) {
    context = context || window

    const fn = Symbol('fn')
    context[fn] = this
    context[fn]([...args])
    delete context[fn]
}

function myFn(arr) {
    console.log(this.a, 'arr', arr)
}

const obj = {
    a: '333'
}

myFn.myApply(obj, [1,3,4])