/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-09-04 20:09:08
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-04 20:28:18
 * @FilePath: /MyLeetCodeStudy/哈撒给/map.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE   
 */
Array.prototype.myMap = function (fn, obj) {
    const length = this.length
    let res = new Array(length)
    for (let i = 0; i < length; i++) {
        res[i] = fn.call(obj,this[i])
    }
    return res
}

const obj = { a: 2 }
const arr = [1, 2, 3]
const res = arr.myMap(function (item) {
   return this.a * 2 * item
}, obj)
console.log(res)