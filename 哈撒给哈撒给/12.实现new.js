/*
 * @Author: This is CodeMan
 */
function myNew(constructor, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    let res = constructor.call(obj, ...args)
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj
}