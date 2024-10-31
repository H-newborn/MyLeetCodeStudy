/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
// 写一个方法 将json对象所有键名的第一个首字母转为大写
// 输入：{"我hyKey":"myValue","q23":"123","arr":[1,2,3],"obj":{"name":"zzw"},"null":null}
// 输出： {"我HyKey":"myValue","Q23":"123","Arr":[1,2,3],"Obj":{"Name":"zzw"},"Null":null}

function toUpperCase(obj) {
    if (Array.isArray(obj)) {
        obj = obj.slice(0);
        obj.forEach(toUpperCase);
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key.replace(/[a-z]/i, (s) => s.toLowerCase())] = toUpperCase(obj[key]);
            }
        }
        return newObj;
    }
    return obj;
}

const json = { "我hyKey": "MyValue", "Q23": "123", "arr": [1, 2, 3], "obj": { "name": "zzw" }, "null": null }
console.log(toUpperCase(json))