/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:31:10
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-08 18:21:00
 * @FilePath: /MyLeetCodeStudy/哈撒给/8.手写new.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function myNew(Con: Function, ...args): Object {
    const obj = {}
    Object.setPrototypeOf(obj, Con.prototype)
    let result = Con.call(obj, args)
    
    if (typeof result == 'object') {
        return result
    } else {
        return obj
    }
}