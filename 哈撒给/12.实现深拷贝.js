/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:33:18
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-05 15:55:36
 * @FilePath: /MyLeetCodeStudy/哈撒给/12.实现深拷贝.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }

    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 保证 key 不是原型的属性
            result[key] = deepClone(obj[key])
        }
    }

    return result
}