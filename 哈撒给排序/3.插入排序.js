/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:07:20
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-01 15:37:12
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/3.插入排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 每次将后一个元素插入到前面的有序数组中对应位置
function insertSort(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                const temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            } else {
                break
            }
        }
    }
    return arr
}

const arr = [1, 12, 34, 5, 6, 4]
console.log(insertSort(arr))

function insertSort1(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j-1] = temp
            } else {
                break
            }
        }
    }
    return arr
}
const arr1 = [1, 12, 34, 5, 6, 4]
console.log(insertSort1(arr1))