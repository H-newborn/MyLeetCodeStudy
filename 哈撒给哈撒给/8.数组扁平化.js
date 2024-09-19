/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
function flatten(arr) {
    let res = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            const tempArr = flatten(item)
            res = res.concat(...tempArr)
        } else {
            res.push(item)
        }
    })
    return res
}

console.log(flatten([1, [2, 3], 4, 5, [6, 7, [8, 9]]]))