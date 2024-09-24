/*
 * @Author: This is CodeMan
 */
Array.prototype.binarySearch = function(val) {
    let low = 0
    let high = this.length
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (this[mid] > val) {
            high = mid
        } else if (this[mid] < val) {
            low = mid
        } else {
            return mid
        }
    }
    return -1
}

const res = [1, 2, 3, 4, 5, 6, 7, 8].binarySearch(4)
console.log(res)