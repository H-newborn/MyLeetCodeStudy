/*
 * @Author: This is CodeMan
 */
function myinstanceof(A, B) {
    let p = A
    while (p) {
        if (p === B.prototype) {
            return true
        }
        p = p.__proto__
    }
    return false
}

console.log(myinstanceof([], Array))