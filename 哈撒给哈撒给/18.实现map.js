/*
 * @Author: This is CodeMan
 */
Array.prototype.myMap = function (fn, context) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        if (context) {
            res[i] = fn.call(context, this[i])
        } else {
            res[i] = fn(this[i])
        }
    }
    return res
}

const arr = [1, 2, 3]
const arr1 = arr.myMap(item => {
    return item*2
})
const obj = {
    a: 3
}
const arr2 = arr.myMap(function (item) {
    return item*this.a
}, obj)
console.log(arr1, '---', arr2)