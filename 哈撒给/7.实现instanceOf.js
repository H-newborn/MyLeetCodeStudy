/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:30:52
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-25 21:48:10
 * @FilePath: /MyLeetCodeStudy/哈撒给/7.实现instanceOf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const instanceOf = (A, B) => {
    let p = A
    while (p) {
        if (p === B.prototype) {
            return true
        }
        p = p.__proto__
    }
    return false
}