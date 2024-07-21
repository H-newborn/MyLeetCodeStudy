/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:07:46
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-13 17:49:32
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/5.快速排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 选择一个元素作为中间点，比中间点小的放左边，比中间点大的放右边
function quickSort(arr) {
    if(arr.length <= 1) {return arr}
    const center = arr.pop()
    const resLeft = []
    const resRight = []
    arr.forEach(val => {
        if (val > center) {
            resRight.push(val)
        } else {
            resLeft.push(val)
        }
    })

    return [...quickSort(resLeft), center, ...quickSort(resRight)]
}

const res = quickSort([1,2,3,7,6,4,23,2,9,22,34])
console.log(res)

const quickSort1 = (arr) => {
    if(arr.length <= 1) {return arr}
    const center = arr.pop()
    const leftRes = []
    const rightRes = []
    arr.forEach(item => {
        if (item > center) {
            rightRes.push(item)
        } else {
            leftRes.push(item)
        }
    })

    return [...quickSort(leftRes), center, ...quickSort(rightRes)]
}

const res1 = quickSort1([1,2,3,7,6,4,23,2,9,22,34])
console.log(res1)