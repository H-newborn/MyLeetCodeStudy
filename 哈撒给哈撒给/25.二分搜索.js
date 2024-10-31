/*
 * @Author: This is CodeMan
 */
function binarySearch(sortArr, searchValue) {
    // const sortArr = arr.sort((a, b) => { return a - b })

    let low = 0
    let high = sortArr.length
    while (low < high) {
        let mid = Math.floor((high - low) / 2 + low)
        if (sortArr[mid] > searchValue) {
            high = mid
        } else if (sortArr[mid] < searchValue) {
            low = mid
        } else {
            return mid
        }
    }
    return -1
}

const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5)
console.log(res)