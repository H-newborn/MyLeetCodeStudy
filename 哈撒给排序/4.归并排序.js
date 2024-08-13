/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:07:32
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-12 19:11:24
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/4.归并排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 归并排序，分治思想，先分再合并
function mergeSort(arr) {
    const rec = (arr) => {
        if(arr.length <= 1) {return arr}
        const mid = Math.floor(arr.length / 2)
        const leftArr = arr.slice(0, mid)
        const rightArr = arr.slice(mid, arr.length)
        const leftRes = rec(leftArr)
        const rightRes = rec(rightArr)
        const res = []
        while (leftRes.length || rightRes.length) {
            if (leftRes.length && rightRes.length) {
                res.push(leftRes[0] < rightRes[0] ? leftRes.shift() : rightRes.shift())
            } else if (leftRes.length) { 
                res.push(leftRes.shift())
            } else if(rightRes.length) {
                res.push(rightRes.shift())
            }
        }
        return res
    }
    const res = rec(arr)
    return res
}

const arr = [1, 12, 34, 5, 6, 4]
console.log(mergeSort(arr))

// const mergeSort = (arr) => {
//     const rec = (arr) => {
//         if(arr.length <= 1) {return arr}
//         const mid = Math.floor(arr.length / 2)
//         const leftArr = arr.slice(0, mid)
//         const rightArr = arr.slice(mid, arr.length)
//         const leftResArr = rec(leftArr)
//         const rightResArr = rec(rightArr)
//         const res = []
//         while (leftResArr.length || rightResArr.length) {
//             if (leftResArr.length && rightResArr.length) {
//                 res.push(leftResArr[0] > rightResArr[0] ? rightResArr.shift() : leftResArr.shift())
//             } else if (leftResArr.length) {
//                 res.push(leftResArr.shift())
//             } else if (rightResArr.length) {
//                  res.push(rightResArr.shift())
//             }
//         }
//         return res
//     }
//     return rec(arr)
// }

const mergeSort1 = (arr) => {
    const rec = (arr) => {
        if(arr.length <= 1) {return arr}
        const mid = Math.floor(arr.length / 2)
        const leftArr = arr.slice(0, mid)
        const rightArr = arr.slice(mid)
        const resLeftArr = rec(leftArr)
        const resRightArr = rec(rightArr)
        const res = []
        while (resLeftArr.length || resRightArr.length) {
            if (resLeftArr.length && resRightArr.length) {
                res.push(resLeftArr[0] > resRightArr[0] ? resRightArr.shift() : resLeftArr.shift())
            } else if (resLeftArr.length) {
                res.push(resLeftArr.shift())
            } else if (resRightArr.length) {
                res.push(resRightArr.shift())
            }
        }
        return res
    }
    return rec(arr)
}
const arr1 = [2, 3, 56, 78, 23, 45, 11, 0, 2]
console.log(mergeSort1(arr1))
console.log(111)

const mergeSort2 = (arr) => {
    const rec = (arr) => {
        if (arr.length <= 1) { return arr }
        const mid = Math.floor(arr.length / 2)
        const leftArr = arr.slice(0, mid)
        const rightArr = arr.slice(mid)
        const resLeftArr = rec(leftArr)
        const resRightArr = rec(rightArr)
        const res = []
        while (resLeftArr.length || resRightArr.length) {
            if (resLeftArr.length && resRightArr.length) {
                res.push(resLeftArr[0] < resRightArr[0] ? resLeftArr.shift() : resRightArr.shift())
            } else if (resLeftArr.length) {
                res.push(resLeftArr.shift())
            } else if (resRightArr.length) {
                res.push(resRightArr.shift())
            }
        }
        return res
    }
}