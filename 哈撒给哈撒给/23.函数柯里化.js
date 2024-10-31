/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
function currying(fn, ...args) {
    let length = fn.length
    return function (...moreArgs) {
        let mergeArgs = [...args, ...moreArgs]
        if (mergeArgs.length >= length) {
            return fn.call(this, ...mergeArgs)
        } else {
            return currying(fn, ...mergeArgs)
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

var curryAdd = currying(add);
console.log(curryAdd(1)(2, 3));
var curryAdd = currying(add);
console.log(curryAdd(1)(2)(3));

function myCurrying(fn, ...args) {
    const length = fn.length
    return function (...moreArgs) {
        const mergeArgs = args.concat(moreArgs)
        if (mergeArgs.length >= length) {
            fn.call(this, ...mergeArgs)
        } else {
            myCurrying(fn, ...mergeArgs)
        }
    }
}