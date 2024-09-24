/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
// 定义： 它是将多参数函数转化为一系列单参数函数的技术，以逻辑学家Haskell Curry名字命名
// 核心思想：将一个接受多个参数的函数转化为一系列链式函数调用，每个函数接受原函数的一个参数，并返回一个新的函数，直到所有参数都被接收为止

function currying(fn, ...args) {
    const length = fn.length;

    return function(...moreargs) {
        let mergeArgs = [...args,...moreargs]
        if (mergeArgs.length >= length) {
            return fn.apply(this, mergeArgs);
        } else {
            return currying(fn, ...mergeArgs);
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}

var curryAdd = currying(add);
console.log(curryAdd(1)(2, 3));
var curryAdd = currying(add);
console.log(curryAdd(1)(2)(3));