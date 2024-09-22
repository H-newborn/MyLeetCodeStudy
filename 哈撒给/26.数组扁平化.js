/*
 * @Author: This is CodeMan
 */
function flatten(arr) {
    let res = []
    for (const value of arr) {
        if (Array.isArray(value)) {
            const tempArr = flatten(value)
            res = res.concat(...tempArr)
        } else {
            res = res.concat(value)
        }
    }

    return res
}

console.log(flatten([1, [2, 3], 4, 5, [6, 7, [8, 9]]]))