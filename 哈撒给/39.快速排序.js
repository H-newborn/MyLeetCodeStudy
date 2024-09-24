/*
 * @Author: This is CodeMan
 */
function quickSort(arr) {
    if(!arr.length) return []
    const length = arr.length
    const midValue = arr[0]

    const leftArr = []
    const rightArr = []
    for (let i = 1; i < length; i++) {
        if (arr[i] > midValue) {
           rightArr.push(arr[i]) 
        } else {
            leftArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr), midValue, ...quickSort(rightArr)]
}

const arr = [2, 3, 6, 7, 5, 4, 3, 1, 10]
console.log(quickSort(arr))