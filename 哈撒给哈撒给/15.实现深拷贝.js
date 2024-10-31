/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
function deepClone(arr, isDeep = false, weakMap = new WeakMap()) {
    if (typeof arr !== "object" || target == null) {
        return arr
    }

    let res = Array.isArray(arr) ? [] : {}

    // 处理对象的循环依赖
    if (weakMap.has(arr)) {
        return weakMap.get(arr);
    } else {
        weakMap.set(arr, res);
    }
    
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            res[key] = deepClone(arr[key])
        }
    }

    return res
}

function deepClone(arr, isDeep = false, weakMap = new WeakMap()) {
    if (typeof arr !== "object" || target == null) {
        return arr
    }

    let res = Array.isArray(arr) ? [] : {}

    // 处理对象的循环依赖
    if (weakMap.has(arr)) {
        return weakMap.get(arr);
    } else {
        weakMap.set(arr, res);
    }
    
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            res[key] = deepClone(arr[key])
        }
    }

    return res
}