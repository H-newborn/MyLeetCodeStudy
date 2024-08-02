/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:10:05
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-02 10:21:11
 * @FilePath: /MyLeetCodeStudy/哈撒给搜索/2.二分搜索.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 二分搜索是有序数组 的一种 搜索方法
Array.prototype.binarySearch = (item) => {
    let low = 0
    console.log(this, 'this')
    let high = this.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (this[mid] > item) {
            high = mid - 1
        } else if (this[mid] < item) {
            low = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

const res = [1, 2, 3, 4, 5, 6, 7, 8].binarySearch(4)
console.log(res)