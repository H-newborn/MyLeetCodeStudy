/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:07:02
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-10 10:24:32
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/2.选择排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 每次遍历 选择标记的最大或最小的元素 的index，遍历完 换 位置
function selectSort(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        let maxIndex = i
        for (let j = i; j < length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j
            }
        }
        const temp = arr[i]
        arr[i] = arr[maxIndex]
        arr[maxIndex] = temp
    }
    return arr
}

const res = selectSort([2, 2, 6, 43, 2, 5, 6, 7, 4, 5, 3])
console.log(res)