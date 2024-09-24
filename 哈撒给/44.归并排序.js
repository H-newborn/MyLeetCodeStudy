/*
 * @Author: This is CodeMan
 */
function mergeSort(arr) {
    if (arr.length <= 1) { return arr }
    let mid = Math.floor(arr.length/2)
    let leftArr = mergeSort(arr.slice(0, mid))
    let rightArr = mergeSort(arr.slice(mid))
    let res = []
    while (leftArr.length || rightArr.length) {
        if (leftArr.length && rightArr.length) {
            res.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift())
        } else if (leftArr.length) {
            res.push(leftArr.shift())
        } else if (rightArr.length) {
            res.push(rightArr.shift())
        }
    }
    return res
}

let arr = [5,3,2,6,8,1,9,4,15]
console.log(mergeSort(arr))