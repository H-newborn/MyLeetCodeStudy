/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:57:46
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-06 20:50:37
 * @FilePath: /MyLeetCodeStudy/哈撒给/18.数组去重.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const arr = [1, 2, 3, 4, 5, 4, 5, 6]

function removeDuplication(arr) {
    return [...new Set(arr)]
}

console.log(removeDuplication(arr))

function removeDuplication1(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) == index
    })
}

console.log(removeDuplication1(arr), 1)


function removeDuplication2(arr) {
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) == -1) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

console.log(removeDuplication2(arr), 2)
