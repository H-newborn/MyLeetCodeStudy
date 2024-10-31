/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-09-03 17:47:38
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-04 20:27:08
 * @FilePath: /MyLeetCodeStudy/deepClone.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function deepClone(obj) {
    if (typeof obj !== 'object') {
        // throw.error('数据类型不是')
        return obj
    }

    // 初始化生成对象
    let res
    if (obj instanceof Array) {
        res = []
    } else if (obj instanceof Object) {
        res = {}
    }

    for (let key in obj) {// 遍历对象的key
        if (obj.hasOwnPriority(key)) { //判断key是否属于当前对象的属性，属于则赋值，再针对该属性进行递归clone
            res[key] = deepClone(obj[key])
        }
    }

    return res
}

Array.prototype.myMap = function (fn, obj) {
    let length = this.length
    let res = new Array(length)
    for (let i = 0; i < length; i++) {
        res[i] = fn.call(obj, this[i])
    }
    return res
}

const arr = [1, 2, 3]
// arr.map(item => { return item * 2 }, this)
const obj = {
    a: 2
}
const arr1 = arr.myMap(function(item) {
    return this.a * item*2
}, obj)
console.log(arr1)

