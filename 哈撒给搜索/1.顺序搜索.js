/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:10:28
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-02 10:21:29
 * @FilePath: /MyLeetCodeStudy/哈撒给搜索/1.顺序搜索.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 顺序搜索，无脑枚举
Array.prototype.sequentialSearch = function (item) {
    console.log(this)
    const length = this.length
    for (let i = 0; i < length; i++) {
        if ( this[i] == item) {
            return i
        }
    }
    return -1
}

const res = [1, 2, 3, 6, 7, 9, 8].sequentialSearch(2)
console.log(res)