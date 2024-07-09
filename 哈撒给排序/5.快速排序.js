/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:07:46
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-09 18:01:06
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/5.快速排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function quickSort(arr) {
    if(arr.length <= 1) {return arr}
    const center = arr.pop()
    const resLeft = []
    const resRight = []
    arr.forEach(val => {
        if (val > center) {
            resRight.push(val)
        } else {
            resLeft.push(val)
        }
    })

    return [...quickSort(resLeft), center, ...quickSort(resRight)]
}

const res = quickSort([1,2,3,7,6,4,23,2,9,22,34])
console.log(res)