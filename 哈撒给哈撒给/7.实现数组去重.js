/*
 * @Author: This is CodeMan
 */
function removeDuplication(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}


console.log(removeDuplication([1,2,3,4,4,5,6,6,7,7,8,8,8]))