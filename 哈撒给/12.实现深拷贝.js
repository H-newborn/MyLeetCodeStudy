/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:33:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-15 17:28:05
 * @FilePath: /MyLeetCodeStudy/哈撒给/12.实现深拷贝.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const deepClone = (obj) => {
//     if (typeof obj !== 'object' || obj == null) {
//         return obj
//     }

//     let result
//     if (obj instanceof Array) {
//         result = []
//     } else {
//         result = {}
//     }

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             // 保证 key 不是原型的属性
//             result[key] = deepClone(obj[key])
//         }
//     }

//     return result
// }

function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }

    let res = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = deepClone(obj[key])
        }
    }
    
    return res
}

const temp = {
    a: 1,
    b: 2,
    c: 'aaa',
    d: {
        f: 'temp.d'
    }
}

console.log(deepClone(temp))

function deepClone(obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }

    // if (hash.has(obj)) {
    //     return hash.get(obj)
    // }

    let newData = Array.isArray(obj) ? [] : {}
    const dataKeys = Object.keys(obj)
    dataKeys.forEach(key => {
        const currentDataValue = obj[key]
        if (typeof currentDataValue !== 'object' || currentDataValue == null) {
            newData[key] = currentDataValue
        } else if (Array.isArray(currentDataValue)) {
            newData[key] = deepClone(currentDataValue)
        } else if (currentDataValue instanceof Set) {
            // newData[key] = new Set([...currentDataValue])
            const set = new Set()
            currentDataValue.forEach(value => {
                set.add(deepClone(value));
            });
            newData[key] = set
        } else if (currentDataValue instanceof Map) {
            const map = new Map()
            currentDataValue.forEach((item, key) => {
                map.set(key, deepClone(item))
            })
            newData[key] = map
        } else {
            newData[key] = deepClone(currentDataValue)
        }
    })

    let res = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = deepClone(obj[key], hash)
        }
    }
    
    return res
}