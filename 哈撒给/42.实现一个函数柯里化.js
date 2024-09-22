/*
 * @Author: This is CodeMan
 */
function currying(fn, ...args) {
    let _args = args ? args.slice() : [];
    const length = fn.length;

    return function(...args) {
        args && (_args = _args.concat(args));
        if (_args.length >= length) {
                return fn.apply(this, _args);
            } else {
                return currying(fn, ..._args);
            }
        };
    }

    function add(a, b, c) {
    return a + b + c;
}

var curryAdd = currying(add);
console.log(curryAdd(1)(2, 3));